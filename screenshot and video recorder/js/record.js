var backgroundApi = {
  startRecording: () => {
    videoRecorder.startRecording(), $.writeState({ recording: "started" });
  },
};
let recorder = {
  isRecording: !1,
  chooseMediaId: null,
  openedStreams: [],
  screenCapture: "",
  videoStream: [],
  audioStream: [],
  opendWebCamWindow: null,
  startRecordingProcess: function () {
    (recorder.isRecording = !0),
      setTimeout(() => {
        recorder.isRecording = !1;
      }, 4e3);
  },
  canStartNewRecording: function () {
    return !recorder.isRecording;
  },
  startRecordScreen: function ({ microphone: e }) {
    if (!recorder.canStartNewRecording()) return;
    return new Promise((r, t) => {
      captureScreen(function (o) {
        captureMicrophone(function (c) {
          doRecordVideoStream(o, c, e, "desktop").then(r).catch(t);
        });
      });
    });
  },
  stopRecordScreen: function () {
    stopRecordDevices();
  },
  pauseRecordScreen: function () {
    this.startStopDurationBadgeUpdater({ paused: !0 }),
      videoRecorder.pauseRecording(),
      $.writeState({ recording: "paused" });
  },
  resumeRecordScreen: function () {
    this.startStopDurationBadgeUpdater({ resumed: !0 }),
      videoRecorder.resumeRecording(),
      $.writeState({ recording: "resumed" });
  },
  startRecordScreenTab: function ({ microphone: e }) {
    if (!recorder.canStartNewRecording()) return;
    return new Promise((r, t) => {
      captureTab(function (o) {
        captureMicrophone(function (c) {
          doRecordVideoStream(o, c, e, "tab").then(r).catch(t);
        });
      });
    });
  },
  stopRecordScreenTab: function () {
    stopRecordDevices();
  },
  pauseRecordScreenTab: function () {
    this.startStopDurationBadgeUpdater({ paused: !0 }),
      videoRecorder.pauseRecording(),
      $.writeState({ recording: "paused" });
  },
  resumeRecordScreenTab: function () {
    this.startStopDurationBadgeUpdater({ resumed: !0 }),
      videoRecorder.resumeRecording(),
      $.writeState({ recording: "resumed" });
  },
  startRecordWeb: function ({ microphone: e }) {
    if (recorder.canStartNewRecording())
      return (
        recorder.startRecordingProcess(),
        navigator.mediaDevices
          .getUserMedia({ audio: !!e, video: { width: 1280, height: 725 } })
          .then(
            (e) => (
              recorder.openedStreams.push(e),
              new Promise(
                (r) => (
                  (mediaStream = e),
                  (videoRecorder = RecordRTC(e, {
                    type: "video",
                    recorderType: MediaStreamRecorder,
                    mimeType: "video/webm;codecs=vp8",
                  })),
                  chrome.windows.create(
                    {
                      url: chrome.runtime.getURL("camera.html"),
                      type: "popup",
                      height: 722,
                      width: 1286,
                    },
                    (e) => {
                      recorder.opendWebCamWindow = e.id;
                    }
                  ),
                  r(videoRecorder)
                )
              )
            )
          )
          .catch((e) => {
            $.writeState({ recording: "notStarted" });
          })
      );
  },
  stopRecordWeb: function () {
    stopRecordDevices();
  },
  pauseRecordWeb: function () {
    this.startStopDurationBadgeUpdater({ paused: !0 }),
      videoRecorder.pauseRecording(),
      $.writeState({ recording: "paused" });
  },
  resumeRecordWeb: function () {
    this.startStopDurationBadgeUpdater({ resumed: !0 }),
      videoRecorder.resumeRecording(),
      $.writeState({ recording: "resumed" });
  },
  startRecordScreenWeb: function ({ microphone: e }) {
    recorder.canStartNewRecording() &&
      (recorder.startRecordingProcess(),
      captureCamera(function (e) {
        mediaStream = e;
        const r = document.getElementById("desktop-video");
        (r.onloadedmetadata = function () {
          r.requestPictureInPicture();
        }),
          (r.onleavepictureinpicture = function () {
            stopRecordDevices();
          }),
          (r.onemptied = function () {
            document.exitPictureInPicture().catch(function (e) {});
          }),
          (r.srcObject = mediaStream),
          r.play();
      }),
      captureScreen(function (r) {
        captureMicrophone(function (t) {
          captureCamera(function (o) {
            return (
              e && t.getTracks().forEach((e) => r.addTrack(e)),
              new Promise((e) => {
                (mediaStream = o),
                  (r.getVideoTracks()[0].onended = function () {
                    stopRecordDevices();
                  }),
                  (videoRecorder = RecordRTC(r, {
                    type: "video",
                    mimeType: "video/webm;codecs=vp8",
                  }));
                const t = setTimeout(() => {
                  chrome.runtime.onMessage.addListener(recordMe), reject();
                }, 6e3);
                checkIfCOntentScriptRunning().then((r) => {
                  if (!r)
                    return (
                      clearTimeout(t),
                      chrome.runtime.onMessage.removeListener(o),
                      recorder
                        .startStopDurationBadgeUpdater({ started: !0 })
                        .then(() => {
                          videoRecorder.startRecording(),
                            $.writeState({ recording: "started" }),
                            e(videoRecorder);
                        })
                    );
                  function o({ type: r }) {
                    if ("recordMe" === r)
                      return (
                        clearTimeout(t),
                        chrome.runtime.onMessage.removeListener(o),
                        videoRecorder.startRecording(),
                        $.writeState({ recording: "started" }),
                        e(videoRecorder)
                      );
                  }
                  chrome.runtime.onMessage.addListener(o),
                    chrome.tabs.getSelected(null, function (e) {
                      chrome.tabs.executeScript(e.id, {
                        file: "js/execute.js",
                      }),
                        recorder.startStopDurationBadgeUpdater({ started: !0 });
                    });
                });
              })
            );
          });
        });
      }));
  },
  stopRecordScreenWeb: function () {
    stopRecordDevices();
  },
  pauseRecordScreenWeb: function () {
    this.sendMessageToContentScript({ type: "callPauseRecordScreenWeb" });
  },
  resumeRecordScreenWeb: function () {
    this.sendMessageToContentScript({ type: "callResumeRecordScreenWeb" });
  },
  startRecordScreenTabWeb: function ({ microphone: e }) {
    recorder.canStartNewRecording() &&
      (recorder.startRecordingProcess(),
      this.sendMessageToContentScript({ type: "runContentCamera" }),
      captureTab(function (r) {
        captureMicrophone(function (t) {
          return new Promise((o) => {
            (mediaStream = prepareStreamsToRecord(r, t, e)),
              (r.getVideoTracks()[0].onended = function () {
                stopRecordDevices();
              }),
              (videoRecorder = RecordRTC(mediaStream, {
                type: "video",
                mimeType: "video/webm;codecs=vp8",
              }));
            const c = setTimeout(() => {
              chrome.runtime.onMessage.addListener(recordMe), reject();
            }, 6e3);
            checkIfCOntentScriptRunning().then((e) => {
              if (!e)
                return (
                  clearTimeout(c),
                  chrome.runtime.onMessage.removeListener(r),
                  recorder
                    .startStopDurationBadgeUpdater({ started: !0 })
                    .then(() => {
                      videoRecorder.startRecording(),
                        $.writeState({ recording: "started" }),
                        o(videoRecorder);
                    })
                );
              function r({ type: e }) {
                if ("recordMe" === e)
                  return (
                    clearTimeout(c),
                    chrome.runtime.onMessage.removeListener(r),
                    videoRecorder.startRecording(),
                    $.writeState({ recording: "started" }),
                    o(videoRecorder)
                  );
              }
              chrome.runtime.onMessage.addListener(r),
                chrome.tabs.getSelected(null, function (e) {
                  chrome.tabs.executeScript(e.id, { file: "js/execute.js" }),
                    recorder.startStopDurationBadgeUpdater({ started: !0 });
                });
            });
          });
        });
      }));
  },
  sendMessageToContentScript: function (e) {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (r) {
      chrome.tabs.sendMessage(r[0].id, e, function (e) {});
    });
  },
  startStopDurationBadgeUpdater: function (e) {
    const r = () => (
      (this.duration = new Date().getTime() - this.startedAt),
      chrome.browserAction.setBadgeText({
        text: api.calculateTimeDuration(this.duration / 1e3),
      }),
      api.calculateTimeDuration(this.duration / 1e3)
    );
    return e.finished
      ? ((this.pausedAt = new Date().getTime()),
        (this.durationScreenRecord = r()),
        chrome.browserAction.setBadgeText({ text: "" }),
        clearInterval(this.timer),
        this.durationScreenRecord)
      : e.paused
      ? ((this.pausedAt = new Date().getTime()),
        clearInterval(this.timer),
        void r())
      : e.resumed
      ? ((this.startedAt =
          this.startedAt + new Date().getTime() - this.pausedAt),
        (this.timer = setInterval(r, 1e3)),
        void (this.pausedAt = null))
      : (e.started && (this.pausedAt = null),
        (async function () {
          function e(e) {
            return new Promise((r) => setTimeout(r, e));
          }
          for (let r = 3; r > 0; r--)
            chrome.browserAction.setBadgeText({ text: r.toString() }),
              await e(1e3);
          chrome.browserAction.setBadgeText({ text: "" });
        })().then(() => {
          this.pausedAt ||
            ((this.startedAt = new Date().getTime()),
            (this.duration = 0),
            (this.extra = 0),
            (this.timer = setInterval(r, 1e3)));
        }));
  },
};
function doRecordVideoStream(e, r, t, o) {
  return (
    recorder.startRecordingProcess(),
    new Promise((c, n) => {
      let i;
      (i = e),
        "tab" === o
          ? (i = prepareStreamsToRecord(i, r, t))
          : t && "desktop" === o && r.getTracks().forEach((e) => i.addTrack(e)),
        (i.getVideoTracks()[0].onended = function () {
          stopRecordDevices();
        }),
        (videoRecorder = RecordRTC(i, {
          type: "video",
          disableLogs: !1,
          getNativeBlob: !0,
          mimeType: "video/webm;codecs=vp8",
          timeSlice: 108e5,
        }));
      const d = setTimeout(() => {
        chrome.runtime.onMessage.addListener(recordMe), n();
      }, 6e3);
      checkIfCOntentScriptRunning().then((e) => {
        if (!e)
          return (
            clearTimeout(d),
            chrome.runtime.onMessage.removeListener(r),
            recorder.startStopDurationBadgeUpdater({ started: !0 }).then(() => {
              videoRecorder.startRecording(),
                $.writeState({ recording: "started" }),
                c(videoRecorder);
            })
          );
        function r({ type: e }) {
          if ("recordMe" === e)
            return (
              clearTimeout(d),
              chrome.runtime.onMessage.removeListener(r),
              videoRecorder.startRecording(),
              $.writeState({ recording: "started" }),
              c(videoRecorder)
            );
        }
        chrome.runtime.onMessage.addListener(r),
          chrome.tabs.getSelected(null, function (e) {
            chrome.tabs.executeScript(e.id, { file: "js/execute.js" }),
              recorder.startStopDurationBadgeUpdater({ started: !0 });
          });
      });
    })
  );
}
function prepareStreamsToRecord(e, r, t) {
  (audioStream = new MediaStream([e.getAudioTracks()[0].clone()])),
    recorder.audioStream.push(audioStream);
  let o = new AudioContext({ latencyHint: 0.03 });
  if ((o.createMediaStreamSource(e).connect(o.destination), t)) {
    let t = new MediaStream();
    return (
      getMixedAudioStream([r, e])
        .getTracks()
        .forEach((e) => t.addTrack(e)),
      e.getTracks().forEach((e) => t.addTrack(e)),
      (e = t)
    );
  }
  return e;
}
function getMixedAudioStream(e) {
  let r = new AudioContext(),
    t = [],
    o = r.createGain();
  o.connect(r.destination), (o.gain.value = 0);
  let c = 0;
  if (
    (e.forEach(function (e) {
      if (!e.getAudioTracks().length) return;
      c++;
      let n = r.createMediaStreamSource(e);
      n.connect(o), t.push(n);
    }),
    !c)
  )
    return;
  let n = r.createMediaStreamDestination();
  return (
    t.forEach(function (e) {
      e.connect(n);
    }),
    n.stream
  );
}
function captureTab(e) {
  chrome.tabCapture.capture(
    {
      audio: !0,
      video: !0,
      videoConstraints: { mandatory: { chromeMediaSource: "tab" } },
    },
    function (r) {
      recorder.openedStreams.push(r), recorder.videoStream.push(r), e(r);
    }
  );
}
function captureScreen(e) {
  recorder.chooseMediaId &&
    chrome.desktopCapture.cancelChooseDesktopMedia(recorder.chooseMediaId),
    (recorder.chooseMediaId = chrome.desktopCapture.chooseDesktopMedia(
      ["screen", "window", "tab"],
      function (r) {
        chrome.runtime.lastError
          ? alert(
              "Failed to get desktop media: " + chrome.runtime.lastError.message
            )
          : navigator.mediaDevices
              .getUserMedia({
                audio: !1,
                video: {
                  mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: r,
                  },
                },
              })
              .then(function (r) {
                recorder.openedStreams.push(r),
                  recorder.videoStream.push(r),
                  e(r);
              })
              .catch(() => {
                $.writeState({ recording: "notStarted" }),
                  document.exitPictureInPicture().catch(() => {});
              });
      }
    ));
}
function captureMicrophone(e) {
  navigator.mediaDevices
    .getUserMedia({ audio: !0, video: !1 })
    .then((r) => {
      recorder.openedStreams.push(r), recorder.audioStream.push(r), e(r);
    })
    .catch(() => e());
}
function captureCamera(e) {
  navigator.mediaDevices
    .getUserMedia({ audio: !1, video: !0 })
    .then((r) => {
      recorder.openedStreams.push(r), recorder.videoStream.push(r), e(r);
    })
    .catch(() => e());
}
function stopRecordDevices() {
  let e = recorder.startStopDurationBadgeUpdater({ finished: !0 });
  if (
    (document.exitPictureInPicture().catch(() => {}),
    ["stopped", "inactive"].includes(videoRecorder.state))
  ) {
    $.writeState({ recording: "notStarted" });
    for (let e = 0; e < recorder.openedStreams.length; e++) {
      recorder.openedStreams[e].getTracks().forEach((e) => e.stop());
    }
  } else
    "paused" === videoRecorder.state && videoRecorder.resumeRecording,
      videoRecorder.stopRecording(() =>
        (function () {
          $.writeState({ recording: "notStarted" }),
            chrome.tabs.query({ currentWindow: !0 }, (e) => {
              e.forEach((e) => {
                chrome.tabs.executeScript(e.id, {
                  code: "document.getElementById('camera-iframe').remove();",
                });
              });
            }),
            recorder.sendMessageToContentScript({
              type: "stopContentCameraInIframe",
            });
          let r = videoRecorder.getBlob(),
            t = bytesToSize(r.size),
            o = (function () {
              let e = new Date(),
                r = String(e.getDate()).padStart(2, "0"),
                t = String(e.getMonth() + 1).padStart(2, "0"),
                o = e.getFullYear(),
                c = String(e.getHours()),
                n = String(e.getMinutes());
              return (
                n < 10 && (n = "0" + n),
                (e = r + "." + t + "." + o + " " + c + ":" + n),
                e
              );
            })(),
            c =
              new Date().toISOString().replace(/\.\w+/, "").replace(/:/g, "-") +
              "D" +
              e.replace(/:/g, "-") +
              ".webm";
          chrome.tabs.getSelected(null, function (e) {
            chrome.tabs.getSelected(null, function (e) {
              chrome.tabs.executeScript(e.id, {
                file: "js/execute_loader_create.js",
              });
            });
          }),
            saveFile(
              r,
              c,
              setTimeout(function () {
                new Promise((e, r) => {
                  chrome.tabs.getSelected(null, function (r) {
                    chrome.windows.getLastFocused(function (r) {
                      chrome.windows.update(
                        r.id,
                        { focused: !0 },
                        function (r) {
                          chrome.tabs.getSelected(null, function (r) {
                            chrome.tabs.executeScript(r.id, {
                              code: "document.getElementById('loader').remove();",
                            }),
                              e();
                          });
                        }
                      );
                    });
                  });
                }).then(() => {
                  chrome.tabs.create(
                    { url: chrome.extension.getURL("record.html") },
                    (r) => {
                      chrome.tabs.onUpdated.addListener(function (n, i) {
                        n == r.id &&
                          "complete" == i.status &&
                          chrome.tabs.sendMessage(
                            r.id,
                            {
                              data: "recordedVideoPreview",
                              size: t,
                              duration: e,
                              dateCreated: o,
                              fileName: c,
                            },
                            (e) => {}
                          );
                      });
                    }
                  );
                });
              }, 2e3),
              (e) => {}
            );
          for (let e = 1; e < recorder.openedStreams.length; e++)
            recorder.openedStreams[e].getTracks().forEach((e) => e.stop());
          recorder.audioStream &&
            0 !== recorder.audioStream.length &&
            recorder.audioStream.forEach((e) => e.stop()),
            recorder.videoStream &&
              recorder.videoStream.length &&
              recorder.videoStream.forEach((e) => e.stop()),
            (recorder.videoStream = []),
            (recorder.audioStream = []);
        })()
      );
}
function checkIfCOntentScriptRunning() {
  return new Promise((e) => {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (r = []) {
      if (!r.length) return e(!1);
      const [t] = r;
      chrome.tabs.sendMessage(t.id, { type: "ping" }, (r) => e(!!r));
    });
  });
}
function saveFile(e, r, t = () => {}, o = () => {}) {
  if (!e) return;
  function c() {
    let e =
      "filesystem:chrome-extension://" + chrome.runtime.id + "/temporary/" + r;
    t(e);
  }
  let n = e.size + 512;
  (window.requestFileSystem || window.webkitRequestFileSystem)(
    window.TEMPORARY,
    n,
    function (t) {
      t.root.getFile(
        r,
        { create: !0 },
        function (r) {
          r.createWriter(function (r) {
            (r.onwriteend = c), r.write(e);
          }, o);
        },
        o
      );
    },
    o
  );
}
async function convertVideo(e) {
  const { createFFmpeg: r } = FFmpeg,
    t = r({ log: !0, progress: (e) => {} });
  try {
    await t.load();
    const r = await e.arrayBuffer();
    new Date().getTime();
    t.FS("writeFile", "i.webm", new Uint8Array(r, 0, r.byteLength)),
      await t.run(
        "-i",
        "i.webm",
        "-c:v",
        "copy",
        "-c:a",
        "copy",
        "-r",
        "25",
        "-strict",
        "2",
        "-speed",
        "10",
        "o.mp4"
      );
    const o = t.FS("readFile", "o.mp4");
    return t.FS("unlink", "o.mp4"), new Blob([o], { type: "video/mp4" });
  } catch (e) {
    return new Blob([], { type: "video/mp4" });
  }
}
async function downloadAsMp4(e) {
  const r = await convertVideo(e);
  return chrome.downloads.download({
    url: URL.createObjectURL(r),
    filename: e.name,
    saveAs: !0,
  });
}
chrome.windows.onRemoved.addListener((e) => {
  recorder.opendWebCamWindow &&
    recorder.opendWebCamWindow === e &&
    stopRecordDevices();
});
