"use strict";
/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows.
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */ function RecordRTC(e, t) {
  if (!e) throw "First parameter is required.";
  t = new RecordRTCConfiguration(e, (t = t || { type: "video" }));
  var i = this;
  function o(i) {
    i &&
      (t.initCallback = function () {
        i(), (i = t.initCallback = null);
      });
    var o = new GetRecorderType(e, t);
    (c = new o(e, t)).record(), s("recording"), t.disableLogs;
  }
  function r(e) {
    if (((e = e || function () {}), c)) {
      if ("paused" === i.state)
        return (
          i.resumeRecording(),
          void setTimeout(function () {
            r(e);
          }, 1)
        );
      "recording" !== i.state && t.disableLogs,
        t.disableLogs,
        "gif" !== t.type ? c.stop(o) : (c.stop(), o()),
        s("stopped");
    } else u();
    function o(o) {
      if (c) {
        Object.keys(c).forEach(function (e) {
          "function" != typeof c[e] && (i[e] = c[e]);
        });
        var r = c.blob;
        if (!r) {
          if (!o) throw "Recording failed.";
          c.blob = r = o;
        }
        if ((r && t.disableLogs, e)) {
          var a;
          try {
            a = URL.createObjectURL(r);
          } catch (e) {}
          "function" == typeof e.call ? e.call(i, a) : e(a);
        }
        t.autoWriteToDisk &&
          n(function (e) {
            var i = {};
            (i[t.type + "Blob"] = e), DiskStorage.Store(i);
          });
      } else "function" == typeof e.call ? e.call(i, "") : e("");
    }
  }
  function a(e) {
    postMessage(new FileReaderSync().readAsDataURL(e));
  }
  function n(e, i) {
    if (!e) throw "Pass a callback function over getDataURL.";
    var o = i ? i.blob : (c || {}).blob;
    if (!o)
      return (
        t.disableLogs,
        void setTimeout(function () {
          n(e, i);
        }, 1e3)
      );
    if ("undefined" == typeof Worker || navigator.mozGetUserMedia) {
      var r = new FileReader();
      r.readAsDataURL(o),
        (r.onload = function (t) {
          e(t.target.result);
        });
    } else {
      var d = (function (e) {
        try {
          var t = URL.createObjectURL(
              new Blob(
                [
                  e.toString(),
                  "this.onmessage =  function (eee) {" +
                    e.name +
                    "(eee.data);}",
                ],
                { type: "application/javascript" }
              )
            ),
            i = new Worker(t);
          return URL.revokeObjectURL(t), i;
        } catch (e) {}
      })(a);
      (d.onmessage = function (t) {
        e(t.data);
      }),
        d.postMessage(o);
    }
  }
  function d(e) {
    (e = e || 0),
      "paused" !== i.state
        ? "stopped" !== i.state &&
          (e >= i.recordingDuration
            ? r(i.onRecordingStopped)
            : ((e += 1e3),
              setTimeout(function () {
                d(e);
              }, 1e3)))
        : setTimeout(function () {
            d(e);
          }, 1e3);
  }
  function s(e) {
    i &&
      ((i.state = e),
      "function" == typeof i.onStateChanged.call
        ? i.onStateChanged.call(i, e)
        : i.onStateChanged(e));
  }
  var c;
  t.type;
  function u() {
    t.disableLogs;
  }
  var f = {
    startRecording: function (r) {
      return (
        t.disableLogs,
        r && (t = new RecordRTCConfiguration(e, r)),
        t.disableLogs,
        c
          ? (c.clearRecordedData(),
            c.record(),
            s("recording"),
            i.recordingDuration && d(),
            i)
          : (o(function () {
              i.recordingDuration && d();
            }),
            i)
      );
    },
    stopRecording: r,
    pauseRecording: function () {
      c
        ? "recording" === i.state
          ? (s("paused"), c.pause(), t.disableLogs)
          : t.disableLogs
        : u();
    },
    resumeRecording: function () {
      c
        ? "paused" === i.state
          ? (s("recording"), c.resume(), t.disableLogs)
          : t.disableLogs
        : u();
    },
    initRecorder: o,
    setRecordingDuration: function (e, t) {
      if (void 0 === e) throw "recordingDuration is required.";
      if ("number" != typeof e) throw "recordingDuration must be a number.";
      return (
        (i.recordingDuration = e),
        (i.onRecordingStopped = t || function () {}),
        {
          onRecordingStopped: function (e) {
            i.onRecordingStopped = e;
          },
        }
      );
    },
    clearRecordedData: function () {
      c ? (c.clearRecordedData(), t.disableLogs) : u();
    },
    getBlob: function () {
      if (c) return c.blob;
      u();
    },
    getDataURL: n,
    toURL: function () {
      if (c) return URL.createObjectURL(c.blob);
      u();
    },
    getInternalRecorder: function () {
      return c;
    },
    save: function (e) {
      c ? invokeSaveAsDialog(c.blob, e) : u();
    },
    getFromDisk: function (e) {
      c ? RecordRTC.getFromDisk(t.type, e) : u();
    },
    setAdvertisementArray: function (e) {
      t.advertisement = [];
      for (var i = e.length, o = 0; o < i; o++)
        t.advertisement.push({ duration: o, image: e[o] });
    },
    blob: null,
    bufferSize: 0,
    sampleRate: 0,
    buffer: null,
    reset: function () {
      "recording" === i.state && t.disableLogs,
        c && "function" == typeof c.clearRecordedData && c.clearRecordedData(),
        (c = null),
        s("inactive"),
        (i.blob = null);
    },
    onStateChanged: function (e) {
      t.disableLogs;
    },
    state: "inactive",
    getState: function () {
      return i.state;
    },
    destroy: function () {
      var e = t.disableLogs;
      (t = { disableLogs: !0 }),
        i.reset(),
        s("destroyed"),
        (f = i = null),
        Storage.AudioContextConstructor &&
          (Storage.AudioContextConstructor.close(),
          (Storage.AudioContextConstructor = null)),
        (t.disableLogs = e),
        t.disableLogs;
    },
    version: "5.5.9",
  };
  if (!this) return (i = f), f;
  for (var l in f) this[l] = f[l];
  return (i = this), f;
}
/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */
function RecordRTCConfiguration(e, t) {
  return (
    t.recorderType ||
      t.type ||
      (t.audio && t.video
        ? (t.type = "video")
        : t.audio && !t.video && (t.type = "audio")),
    t.recorderType &&
      !t.type &&
      (t.recorderType === WhammyRecorder ||
      t.recorderType === CanvasRecorder ||
      (void 0 !== WebAssemblyRecorder && t.recorderType === WebAssemblyRecorder)
        ? (t.type = "video")
        : t.recorderType === GifRecorder
        ? (t.type = "gif")
        : t.recorderType === StereoAudioRecorder
        ? (t.type = "audio")
        : t.recorderType === MediaStreamRecorder &&
          ((getTracks(e, "audio").length && getTracks(e, "video").length) ||
          (!getTracks(e, "audio").length && getTracks(e, "video").length)
            ? (t.type = "video")
            : getTracks(e, "audio").length &&
              !getTracks(e, "video").length &&
              (t.type = "audio"))),
    void 0 !== MediaStreamRecorder &&
      "undefined" != typeof MediaRecorder &&
      "requestData" in MediaRecorder.prototype &&
      (t.mimeType || (t.mimeType = "video/webm"),
      t.type || (t.type = t.mimeType.split("/")[0]),
      t.bitsPerSecond),
    t.type ||
      (t.mimeType && (t.type = t.mimeType.split("/")[0]),
      t.type || (t.type = "audio")),
    t
  );
}
/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */ function GetRecorderType(e, t) {
  var i;
  return (
    (isChrome || isEdge || isOpera) && (i = StereoAudioRecorder),
    "undefined" != typeof MediaRecorder &&
      "requestData" in MediaRecorder.prototype &&
      !isChrome &&
      (i = MediaStreamRecorder),
    "video" === t.type &&
      (isChrome || isOpera) &&
      ((i = WhammyRecorder),
      void 0 !== WebAssemblyRecorder &&
        "undefined" != typeof ReadableStream &&
        (i = WebAssemblyRecorder)),
    "gif" === t.type && (i = GifRecorder),
    "canvas" === t.type && (i = CanvasRecorder),
    isMediaRecorderCompatible() &&
      i !== CanvasRecorder &&
      i !== GifRecorder &&
      "undefined" != typeof MediaRecorder &&
      "requestData" in MediaRecorder.prototype &&
      (getTracks(e, "video").length || getTracks(e, "audio").length) &&
      ("audio" === t.type
        ? "function" == typeof MediaRecorder.isTypeSupported &&
          MediaRecorder.isTypeSupported("audio/webm") &&
          (i = MediaStreamRecorder)
        : "function" == typeof MediaRecorder.isTypeSupported &&
          MediaRecorder.isTypeSupported("video/webm") &&
          (i = MediaStreamRecorder)),
    e instanceof Array && e.length && (i = MultiStreamRecorder),
    t.recorderType && (i = t.recorderType),
    !t.disableLogs && i && i.name,
    !i && isSafari && (i = MediaStreamRecorder),
    i
  );
}
/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */ function MRecordRTC(e) {
  (this.addStream = function (t) {
    t && (e = t);
  }),
    (this.mediaType = { audio: !0, video: !0 }),
    (this.startRecording = function () {
      var t,
        i = this.mediaType,
        o = this.mimeType || { audio: null, video: null, gif: null };
      if (
        ("function" != typeof i.audio &&
          isMediaRecorderCompatible() &&
          !getTracks(e, "audio").length &&
          (i.audio = !1),
        "function" != typeof i.video &&
          isMediaRecorderCompatible() &&
          !getTracks(e, "video").length &&
          (i.video = !1),
        "function" != typeof i.gif &&
          isMediaRecorderCompatible() &&
          !getTracks(e, "video").length &&
          (i.gif = !1),
        !i.audio && !i.video && !i.gif)
      )
        throw "MediaStream must have either audio or video tracks.";
      if (
        (i.audio &&
          ((t = null),
          "function" == typeof i.audio && (t = i.audio),
          (this.audioRecorder = new RecordRTC(e, {
            type: "audio",
            bufferSize: this.bufferSize,
            sampleRate: this.sampleRate,
            numberOfAudioChannels: this.numberOfAudioChannels || 2,
            disableLogs: this.disableLogs,
            recorderType: t,
            mimeType: o.audio,
            timeSlice: this.timeSlice,
            onTimeStamp: this.onTimeStamp,
          })),
          i.video || this.audioRecorder.startRecording()),
        i.video)
      ) {
        (t = null), "function" == typeof i.video && (t = i.video);
        var r = e;
        if (
          isMediaRecorderCompatible() &&
          i.audio &&
          "function" == typeof i.audio
        ) {
          var a = getTracks(e, "video")[0];
          isFirefox
            ? ((r = new MediaStream()).addTrack(a),
              t && t === WhammyRecorder && (t = MediaStreamRecorder))
            : (r = new MediaStream()).addTrack(a);
        }
        (this.videoRecorder = new RecordRTC(r, {
          type: "video",
          video: this.video,
          canvas: this.canvas,
          frameInterval: this.frameInterval || 10,
          disableLogs: this.disableLogs,
          recorderType: t,
          mimeType: o.video,
          timeSlice: this.timeSlice,
          onTimeStamp: this.onTimeStamp,
          workerPath: this.workerPath,
          webAssemblyPath: this.webAssemblyPath,
          frameRate: this.frameRate,
          bitrate: this.bitrate,
        })),
          i.audio || this.videoRecorder.startRecording();
      }
      if (i.audio && i.video) {
        var n = this,
          d = !0 === isMediaRecorderCompatible();
        ((i.audio instanceof StereoAudioRecorder && i.video) ||
          (!0 !== i.audio && !0 !== i.video && i.audio !== i.video)) &&
          (d = !1),
          !0 === d
            ? ((n.audioRecorder = null), n.videoRecorder.startRecording())
            : n.videoRecorder.initRecorder(function () {
                n.audioRecorder.initRecorder(function () {
                  n.videoRecorder.startRecording(),
                    n.audioRecorder.startRecording();
                });
              });
      }
      i.gif &&
        ((t = null),
        "function" == typeof i.gif && (t = i.gif),
        (this.gifRecorder = new RecordRTC(e, {
          type: "gif",
          frameRate: this.frameRate || 200,
          quality: this.quality || 10,
          disableLogs: this.disableLogs,
          recorderType: t,
          mimeType: o.gif,
        })),
        this.gifRecorder.startRecording());
    }),
    (this.stopRecording = function (e) {
      (e = e || function () {}),
        this.audioRecorder &&
          this.audioRecorder.stopRecording(function (t) {
            e(t, "audio");
          }),
        this.videoRecorder &&
          this.videoRecorder.stopRecording(function (t) {
            e(t, "video");
          }),
        this.gifRecorder &&
          this.gifRecorder.stopRecording(function (t) {
            e(t, "gif");
          });
    }),
    (this.pauseRecording = function () {
      this.audioRecorder && this.audioRecorder.pauseRecording(),
        this.videoRecorder && this.videoRecorder.pauseRecording(),
        this.gifRecorder && this.gifRecorder.pauseRecording();
    }),
    (this.resumeRecording = function () {
      this.audioRecorder && this.audioRecorder.resumeRecording(),
        this.videoRecorder && this.videoRecorder.resumeRecording(),
        this.gifRecorder && this.gifRecorder.resumeRecording();
    }),
    (this.getBlob = function (e) {
      var t = {};
      return (
        this.audioRecorder && (t.audio = this.audioRecorder.getBlob()),
        this.videoRecorder && (t.video = this.videoRecorder.getBlob()),
        this.gifRecorder && (t.gif = this.gifRecorder.getBlob()),
        e && e(t),
        t
      );
    }),
    (this.destroy = function () {
      this.audioRecorder &&
        (this.audioRecorder.destroy(), (this.audioRecorder = null)),
        this.videoRecorder &&
          (this.videoRecorder.destroy(), (this.videoRecorder = null)),
        this.gifRecorder &&
          (this.gifRecorder.destroy(), (this.gifRecorder = null));
    }),
    (this.getDataURL = function (e) {
      function t(e, t) {
        if ("undefined" != typeof Worker) {
          var i = (function (e) {
            var t,
              i = URL.createObjectURL(
                new Blob(
                  [
                    e.toString(),
                    "this.onmessage =  function (eee) {" +
                      e.name +
                      "(eee.data);}",
                  ],
                  { type: "application/javascript" }
                )
              ),
              o = new Worker(i);
            if (void 0 !== URL) t = URL;
            else {
              if ("undefined" == typeof webkitURL)
                throw "Neither URL nor webkitURL detected.";
              t = webkitURL;
            }
            return t.revokeObjectURL(i), o;
          })(function (e) {
            postMessage(new FileReaderSync().readAsDataURL(e));
          });
          (i.onmessage = function (e) {
            t(e.data);
          }),
            i.postMessage(e);
        } else {
          var o = new FileReader();
          o.readAsDataURL(e),
            (o.onload = function (e) {
              t(e.target.result);
            });
        }
      }
      this.getBlob(function (i) {
        i.audio && i.video
          ? t(i.audio, function (o) {
              t(i.video, function (t) {
                e({ audio: o, video: t });
              });
            })
          : i.audio
          ? t(i.audio, function (t) {
              e({ audio: t });
            })
          : i.video &&
            t(i.video, function (t) {
              e({ video: t });
            });
      });
    }),
    (this.writeToDisk = function () {
      RecordRTC.writeToDisk({
        audio: this.audioRecorder,
        video: this.videoRecorder,
        gif: this.gifRecorder,
      });
    }),
    (this.save = function (e) {
      (e = e || { audio: !0, video: !0, gif: !0 }).audio &&
        this.audioRecorder &&
        this.audioRecorder.save("string" == typeof e.audio ? e.audio : ""),
        e.video &&
          this.videoRecorder &&
          this.videoRecorder.save("string" == typeof e.video ? e.video : ""),
        e.gif &&
          this.gifRecorder &&
          this.gifRecorder.save("string" == typeof e.gif ? e.gif : "");
    });
}
(RecordRTC.version = "5.5.9"),
  "undefined" != typeof module && (module.exports = RecordRTC),
  "function" == typeof define &&
    define.amd &&
    define("RecordRTC", [], function () {
      return RecordRTC;
    }),
  (RecordRTC.getFromDisk = function (e, t) {
    if (!t) throw "callback is mandatory.";
    DiskStorage.Fetch(function (i, o) {
      "all" !== e && o === e + "Blob" && t && t(i),
        "all" === e && t && t(i, o.replace("Blob", ""));
    });
  }),
  (RecordRTC.writeToDisk = function (e) {
    (e = e || {}).audio && e.video && e.gif
      ? e.audio.getDataURL(function (t) {
          e.video.getDataURL(function (i) {
            e.gif.getDataURL(function (e) {
              DiskStorage.Store({ audioBlob: t, videoBlob: i, gifBlob: e });
            });
          });
        })
      : e.audio && e.video
      ? e.audio.getDataURL(function (t) {
          e.video.getDataURL(function (e) {
            DiskStorage.Store({ audioBlob: t, videoBlob: e });
          });
        })
      : e.audio && e.gif
      ? e.audio.getDataURL(function (t) {
          e.gif.getDataURL(function (e) {
            DiskStorage.Store({ audioBlob: t, gifBlob: e });
          });
        })
      : e.video && e.gif
      ? e.video.getDataURL(function (t) {
          e.gif.getDataURL(function (e) {
            DiskStorage.Store({ videoBlob: t, gifBlob: e });
          });
        })
      : e.audio
      ? e.audio.getDataURL(function (e) {
          DiskStorage.Store({ audioBlob: e });
        })
      : e.video
      ? e.video.getDataURL(function (e) {
          DiskStorage.Store({ videoBlob: e });
        })
      : e.gif &&
        e.gif.getDataURL(function (e) {
          DiskStorage.Store({ gifBlob: e });
        });
  }),
  (MRecordRTC.getFromDisk = RecordRTC.getFromDisk),
  (MRecordRTC.writeToDisk = RecordRTC.writeToDisk),
  void 0 !== RecordRTC && (RecordRTC.MRecordRTC = MRecordRTC);
var browserFakeUserAgent =
  "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";
!(function (e) {
  e &&
    "undefined" == typeof window &&
    "undefined" != typeof global &&
    ((global.navigator = {
      userAgent: browserFakeUserAgent,
      getUserMedia: function () {},
    }),
    global.console || (global.console = {}),
    (void 0 !== global.console.log && void 0 !== global.console.error) ||
      (global.console.error = global.console.log =
        global.console.log || function () {}),
    "undefined" == typeof document &&
      ((e.document = {
        documentElement: {
          appendChild: function () {
            return "";
          },
        },
      }),
      (document.createElement =
        document.captureStream =
        document.mozCaptureStream =
          function () {
            var e = {
              getContext: function () {
                return e;
              },
              play: function () {},
              pause: function () {},
              drawImage: function () {},
              toDataURL: function () {
                return "";
              },
              style: {},
            };
            return e;
          }),
      (e.HTMLVideoElement = function () {})),
    "undefined" == typeof location &&
      (e.location = { protocol: "file:", href: "", hash: "" }),
    "undefined" == typeof screen && (e.screen = { width: 0, height: 0 }),
    void 0 === URL &&
      (e.URL = {
        createObjectURL: function () {
          return "";
        },
        revokeObjectURL: function () {
          return "";
        },
      }),
    (e.window = global));
})("undefined" != typeof global ? global : null);
var requestAnimationFrame = window.requestAnimationFrame;
if (void 0 === requestAnimationFrame)
  if ("undefined" != typeof webkitRequestAnimationFrame)
    requestAnimationFrame = webkitRequestAnimationFrame;
  else if ("undefined" != typeof mozRequestAnimationFrame)
    requestAnimationFrame = mozRequestAnimationFrame;
  else if ("undefined" != typeof msRequestAnimationFrame)
    requestAnimationFrame = msRequestAnimationFrame;
  else if (void 0 === requestAnimationFrame) {
    var lastTime = 0;
    requestAnimationFrame = function (e, t) {
      var i = new Date().getTime(),
        o = Math.max(0, 16 - (i - lastTime)),
        r = setTimeout(function () {
          e(i + o);
        }, o);
      return (lastTime = i + o), r;
    };
  }
var cancelAnimationFrame = window.cancelAnimationFrame;
void 0 === cancelAnimationFrame &&
  ("undefined" != typeof webkitCancelAnimationFrame
    ? (cancelAnimationFrame = webkitCancelAnimationFrame)
    : "undefined" != typeof mozCancelAnimationFrame
    ? (cancelAnimationFrame = mozCancelAnimationFrame)
    : "undefined" != typeof msCancelAnimationFrame
    ? (cancelAnimationFrame = msCancelAnimationFrame)
    : void 0 === cancelAnimationFrame &&
      (cancelAnimationFrame = function (e) {
        clearTimeout(e);
      }));
var AudioContext = window.AudioContext;
void 0 === AudioContext &&
  ("undefined" != typeof webkitAudioContext &&
    (AudioContext = webkitAudioContext),
  "undefined" != typeof mozAudioContext && (AudioContext = mozAudioContext));
var URL = window.URL;
void 0 === URL && "undefined" != typeof webkitURL && (URL = webkitURL),
  "undefined" != typeof navigator &&
    void 0 === navigator.getUserMedia &&
    (void 0 !== navigator.webkitGetUserMedia &&
      (navigator.getUserMedia = navigator.webkitGetUserMedia),
    void 0 !== navigator.mozGetUserMedia &&
      (navigator.getUserMedia = navigator.mozGetUserMedia));
var isEdge = !(
    -1 === navigator.userAgent.indexOf("Edge") ||
    (!navigator.msSaveBlob && !navigator.msSaveOrOpenBlob)
  ),
  isOpera = !!window.opera || -1 !== navigator.userAgent.indexOf("OPR/"),
  isFirefox =
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 &&
    "netscape" in window &&
    / rv:/.test(navigator.userAgent),
  isChrome =
    (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) ||
    isElectron() ||
    -1 !== navigator.userAgent.toLowerCase().indexOf("chrome/"),
  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
isSafari &&
  !isChrome &&
  -1 !== navigator.userAgent.indexOf("CriOS") &&
  ((isSafari = !1), (isChrome = !0));
var MediaStream = window.MediaStream;
function bytesToSize(e) {
  if (0 === e) return "0 Bytes";
  var t = parseInt(Math.floor(Math.log(e) / Math.log(1e3)), 10);
  return (
    (e / Math.pow(1e3, t)).toPrecision(3) +
    " " +
    ["Bytes", "KB", "MB", "GB", "TB"][t]
  );
}
function invokeSaveAsDialog(e, t) {
  if (!e) throw "Blob object is required.";
  if (!e.type)
    try {
      e.type = "video/webm";
    } catch (e) {}
  var i = (e.type || "video/webm").split("/")[1];
  if (t && -1 !== t.indexOf(".")) {
    var o = t.split(".");
    (t = o[0]), (i = o[1]);
  }
  var r = (t || Math.round(9999999999 * Math.random()) + 888888888) + "." + i;
  if (void 0 !== navigator.msSaveOrOpenBlob)
    return navigator.msSaveOrOpenBlob(e, r);
  if (void 0 !== navigator.msSaveBlob) return navigator.msSaveBlob(e, r);
  var a = document.createElement("a");
  (a.href = URL.createObjectURL(e)),
    (a.download = r),
    (a.style = "display:none;opacity:0;color:transparent;"),
    (document.body || document.documentElement).appendChild(a),
    "function" == typeof a.click
      ? a.click()
      : ((a.target = "_blank"),
        a.dispatchEvent(
          new MouseEvent("click", { view: window, bubbles: !0, cancelable: !0 })
        )),
    URL.revokeObjectURL(a.href);
}
function isElectron() {
  return (
    ("undefined" != typeof window &&
      "object" == typeof window.process &&
      "renderer" === window.process.type) ||
    !(
      "undefined" == typeof process ||
      "object" != typeof process.versions ||
      !process.versions.electron
    ) ||
    ("object" == typeof navigator &&
      "string" == typeof navigator.userAgent &&
      navigator.userAgent.indexOf("Electron") >= 0)
  );
}
function getTracks(e, t) {
  return e && e.getTracks
    ? e.getTracks().filter(function (e) {
        return e.kind === (t || "audio");
      })
    : [];
}
function setSrcObject(e, t) {
  "srcObject" in t
    ? (t.srcObject = e)
    : "mozSrcObject" in t
    ? (t.mozSrcObject = e)
    : (t.srcObject = e);
}
function getSeekableBlob(e, t) {
  if ("undefined" == typeof EBML)
    throw new Error("Please link: https://www.webrtc-experiment.com/EBML.js");
  var i = new EBML.Reader(),
    o = new EBML.Decoder(),
    r = EBML.tools,
    a = new FileReader();
  (a.onload = function (e) {
    o.decode(this.result).forEach(function (e) {
      i.read(e);
    }),
      i.stop();
    var a = r.makeMetadataSeekable(i.metadatas, i.duration, i.cues),
      n = this.result.slice(i.metadataSize),
      d = new Blob([a, n], { type: "video/webm" });
    t(d);
  }),
    a.readAsArrayBuffer(e);
}
void 0 === MediaStream &&
  "undefined" != typeof webkitMediaStream &&
  (MediaStream = webkitMediaStream),
  void 0 !== MediaStream &&
    void 0 === MediaStream.prototype.stop &&
    (MediaStream.prototype.stop = function () {
      this.getTracks().forEach(function (e) {
        e.stop();
      });
    }),
  void 0 !== RecordRTC &&
    ((RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog),
    (RecordRTC.getTracks = getTracks),
    (RecordRTC.getSeekableBlob = getSeekableBlob),
    (RecordRTC.bytesToSize = bytesToSize),
    (RecordRTC.isElectron = isElectron));
/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
var Storage = {};
function isMediaRecorderCompatible() {
  if (isFirefox || isSafari || isEdge) return !0;
  navigator.appVersion;
  var e,
    t,
    i = navigator.userAgent,
    o = "" + parseFloat(navigator.appVersion),
    r = parseInt(navigator.appVersion, 10);
  return (
    (isChrome || isOpera) &&
      ((e = i.indexOf("Chrome")), (o = i.substring(e + 7))),
    -1 !== (t = o.indexOf(";")) && (o = o.substring(0, t)),
    -1 !== (t = o.indexOf(" ")) && (o = o.substring(0, t)),
    (r = parseInt("" + o, 10)),
    isNaN(r) &&
      ((o = "" + parseFloat(navigator.appVersion)),
      (r = parseInt(navigator.appVersion, 10))),
    r >= 49
  );
}
/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */ function MediaStreamRecorder(e, t) {
  var i = this;
  if (void 0 === e) throw 'First argument "MediaStream" is required.';
  if ("undefined" == typeof MediaRecorder)
    throw "Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";
  if ("audio" === (t = t || { mimeType: "video/webm" }).type) {
    var o;
    if (getTracks(e, "video").length && getTracks(e, "audio").length)
      navigator.mozGetUserMedia
        ? (o = new MediaStream()).addTrack(getTracks(e, "audio")[0])
        : (o = new MediaStream(getTracks(e, "audio"))),
        (e = o);
    (t.mimeType &&
      -1 !== t.mimeType.toString().toLowerCase().indexOf("audio")) ||
      (t.mimeType = isChrome ? "audio/webm" : "audio/ogg"),
      t.mimeType &&
        "audio/ogg" !== t.mimeType.toString().toLowerCase() &&
        navigator.mozGetUserMedia &&
        (t.mimeType = "audio/ogg");
  }
  var r,
    a = [];
  function n() {
    i.timestamps.push(new Date().getTime()),
      "function" == typeof t.onTimeStamp &&
        t.onTimeStamp(i.timestamps[i.timestamps.length - 1], i.timestamps);
  }
  function d(e) {
    return r && r.mimeType ? r.mimeType : e.mimeType || "video/webm";
  }
  function s() {
    (a = []), (r = null), (i.timestamps = []);
  }
  (this.getArrayOfBlobs = function () {
    return a;
  }),
    (this.record = function () {
      (i.blob = null),
        i.clearRecordedData(),
        (i.timestamps = []),
        (c = []),
        (a = []);
      var o = t;
      t.disableLogs,
        r && (r = null),
        isChrome && !isMediaRecorderCompatible() && (o = "video/vp8"),
        "function" == typeof MediaRecorder.isTypeSupported &&
          o.mimeType &&
          (MediaRecorder.isTypeSupported(o.mimeType) ||
            (t.disableLogs,
            (o.mimeType = "audio" === t.type ? "audio/webm" : "video/webm")));
      try {
        (r = new MediaRecorder(e, o)), (t.mimeType = o.mimeType);
      } catch (t) {
        r = new MediaRecorder(e);
      }
      o.mimeType &&
        !MediaRecorder.isTypeSupported &&
        "canRecordMimeType" in r &&
        !1 === r.canRecordMimeType(o.mimeType) &&
        t.disableLogs,
        (r.ondataavailable = function (e) {
          if (
            (e.data && c.push("ondataavailable: " + bytesToSize(e.data.size)),
            "number" != typeof t.timeSlice)
          )
            !e.data || !e.data.size || e.data.size < 100 || i.blob
              ? i.recordingCallback &&
                (i.recordingCallback(new Blob([], { type: d(o) })),
                (i.recordingCallback = null))
              : ((i.blob = t.getNativeBlob
                  ? e.data
                  : new Blob([e.data], { type: d(o) })),
                i.recordingCallback &&
                  (i.recordingCallback(i.blob), (i.recordingCallback = null)));
          else if (
            e.data &&
            e.data.size &&
            e.data.size > 100 &&
            (a.push(e.data), n(), "function" == typeof t.ondataavailable)
          ) {
            var r = t.getNativeBlob
              ? e.data
              : new Blob([e.data], { type: d(o) });
            t.ondataavailable(r);
          }
        }),
        (r.onstart = function () {
          c.push("started");
        }),
        (r.onpause = function () {
          c.push("paused");
        }),
        (r.onresume = function () {
          c.push("resumed");
        }),
        (r.onstop = function () {
          c.push("stopped");
        }),
        (r.onerror = function (e) {
          e &&
            (e.name || (e.name = "UnknownError"),
            c.push("error: " + e),
            t.disableLogs ||
              -1 !== e.name.toString().toLowerCase().indexOf("invalidstate") ||
              -1 !== e.name.toString().toLowerCase().indexOf("notsupported") ||
              -1 !== e.name.toString().toLowerCase().indexOf("security") ||
              "OutOfMemory" === e.name ||
              "IllegalStreamModification" === e.name ||
              "OtherRecordingError" === e.name ||
              e.name,
            (function (e) {
              if (!i.manuallyStopped && r && "inactive" === r.state)
                return delete t.timeslice, void r.start(6e5);
              setTimeout(void 0, 1e3);
            })(),
            "inactive" !== r.state && "stopped" !== r.state && r.stop());
        }),
        "number" == typeof t.timeSlice
          ? (n(), r.start(t.timeSlice))
          : r.start(36e5),
        t.initCallback && t.initCallback();
    }),
    (this.timestamps = []),
    (this.stop = function (e) {
      (e = e || function () {}),
        (i.manuallyStopped = !0),
        r &&
          ((this.recordingCallback = e),
          "recording" === r.state && r.stop(),
          "number" == typeof t.timeSlice &&
            setTimeout(function () {
              (i.blob = new Blob(a, { type: d(t) })),
                i.recordingCallback(i.blob);
            }, 100));
    }),
    (this.pause = function () {
      r && "recording" === r.state && r.pause();
    }),
    (this.resume = function () {
      r && "paused" === r.state && r.resume();
    }),
    (this.clearRecordedData = function () {
      r && "recording" === r.state && i.stop(s), s();
    }),
    (this.getInternalRecorder = function () {
      return r;
    }),
    (this.blob = null),
    (this.getState = function () {
      return (r && r.state) || "inactive";
    });
  var c = [];
  (this.getAllStates = function () {
    return c;
  }),
    void 0 === t.checkForInactiveTracks && (t.checkForInactiveTracks = !1);
  i = this;
  !(function o() {
    if (r && !1 !== t.checkForInactiveTracks)
      return !1 ===
        (function () {
          if ("active" in e) {
            if (!e.active) return !1;
          } else if ("ended" in e && e.ended) return !1;
          return !0;
        })()
        ? (t.disableLogs, void i.stop())
        : void setTimeout(o, 1e3);
  })(),
    (this.name = "MediaStreamRecorder"),
    (this.toString = function () {
      return this.name;
    });
}
/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */
function StereoAudioRecorder(e, t) {
  if (!getTracks(e, "audio").length) throw "Your stream has no audio tracks.";
  var i,
    o = this,
    r = [],
    a = [],
    n = !1,
    d = 0,
    s = 2,
    c = (t = t || {}).desiredSampRate;
  function u() {
    if (!1 === t.checkForInactiveTracks) return !0;
    if ("active" in e) {
      if (!e.active) return !1;
    } else if ("ended" in e && e.ended) return !1;
    return !0;
  }
  function f(e, t) {
    function i(e, t) {
      var i,
        o = e.numberOfAudioChannels,
        r = e.leftBuffers.slice(0),
        a = e.rightBuffers.slice(0),
        n = e.sampleRate,
        d = e.internalInterleavedLength,
        s = e.desiredSampRate;
      function c(e, t, i) {
        var o = Math.round(e.length * (t / i)),
          r = [],
          a = Number((e.length - 1) / (o - 1));
        r[0] = e[0];
        for (var n = 1; n < o - 1; n++) {
          var d = n * a,
            s = Number(Math.floor(d)).toFixed(),
            c = Number(Math.ceil(d)).toFixed(),
            f = d - s;
          r[n] = u(e[s], e[c], f);
        }
        return (r[o - 1] = e[e.length - 1]), r;
      }
      function u(e, t, i) {
        return e + (t - e) * i;
      }
      function f(e, t) {
        for (
          var i = new Float64Array(t), o = 0, r = e.length, a = 0;
          a < r;
          a++
        ) {
          var n = e[a];
          i.set(n, o), (o += n.length);
        }
        return i;
      }
      function l(e, t, i) {
        for (var o = i.length, r = 0; r < o; r++)
          e.setUint8(t + r, i.charCodeAt(r));
      }
      2 === o &&
        ((r = f(r, d)),
        (a = f(a, d)),
        s && ((r = c(r, s, n)), (a = c(a, s, n)))),
        1 === o && ((r = f(r, d)), s && (r = c(r, s, n))),
        s && (n = s),
        2 === o &&
          (i = (function (e, t) {
            for (
              var i = e.length + t.length,
                o = new Float64Array(i),
                r = 0,
                a = 0;
              a < i;

            )
              (o[a++] = e[r]), (o[a++] = t[r]), r++;
            return o;
          })(r, a)),
        1 === o && (i = r);
      var m = i.length,
        h = new ArrayBuffer(44 + 2 * m),
        g = new DataView(h);
      l(g, 0, "RIFF"),
        g.setUint32(4, 36 + 2 * m, !0),
        l(g, 8, "WAVE"),
        l(g, 12, "fmt "),
        g.setUint32(16, 16, !0),
        g.setUint16(20, 1, !0),
        g.setUint16(22, o, !0),
        g.setUint32(24, n, !0),
        g.setUint32(28, 2 * n, !0),
        g.setUint16(32, 2 * o, !0),
        g.setUint16(34, 16, !0),
        l(g, 36, "data"),
        g.setUint32(40, 2 * m, !0);
      for (var p = m, v = 44, b = 0; b < p; b++)
        g.setInt16(v, 32767 * i[b], !0), (v += 2);
      if (t) return t({ buffer: h, view: g });
      postMessage({ buffer: h, view: g });
    }
    if (e.noWorker)
      i(e, function (e) {
        t(e.buffer, e.view);
      });
    else {
      var o,
        r,
        a,
        n =
          ((o = i),
          (r = URL.createObjectURL(
            new Blob(
              [
                o.toString(),
                ";this.onmessage =  function (eee) {" + o.name + "(eee.data);}",
              ],
              { type: "application/javascript" }
            )
          )),
          ((a = new Worker(r)).workerURL = r),
          a);
      (n.onmessage = function (e) {
        t(e.data.buffer, e.data.view),
          URL.revokeObjectURL(n.workerURL),
          n.terminate();
      }),
        n.postMessage(e);
    }
  }
  !0 === t.leftChannel && (s = 1),
    1 === t.numberOfAudioChannels && (s = 1),
    (!s || s < 1) && (s = 2),
    t.disableLogs,
    void 0 === t.checkForInactiveTracks && (t.checkForInactiveTracks = !0),
    (this.record = function () {
      if (!1 === u()) throw "Please make sure MediaStream is active.";
      v(), (R = p = !1), (n = !0), void 0 !== t.timeSlice && y();
    }),
    (this.stop = function (e) {
      (e = e || function () {}),
        (n = !1),
        f(
          {
            desiredSampRate: c,
            sampleRate: g,
            numberOfAudioChannels: s,
            internalInterleavedLength: d,
            leftBuffers: r,
            rightBuffers: 1 === s ? [] : a,
            noWorker: t.noWorker,
          },
          function (t, i) {
            (o.blob = new Blob([i], { type: "audio/wav" })),
              (o.buffer = new ArrayBuffer(i.buffer.byteLength)),
              (o.view = i),
              (o.sampleRate = c || g),
              (o.bufferSize = h),
              (o.length = d),
              (R = !1),
              e && e(o.blob);
          }
        );
    }),
    void 0 === RecordRTC.Storage &&
      (RecordRTC.Storage = {
        AudioContextConstructor: null,
        AudioContext: window.AudioContext || window.webkitAudioContext,
      }),
    (RecordRTC.Storage.AudioContextConstructor &&
      "closed" !== RecordRTC.Storage.AudioContextConstructor.state) ||
      (RecordRTC.Storage.AudioContextConstructor =
        new RecordRTC.Storage.AudioContext());
  var l = RecordRTC.Storage.AudioContextConstructor,
    m = l.createMediaStreamSource(e),
    h = void 0 === t.bufferSize ? 4096 : t.bufferSize;
  if (
    (-1 === [0, 256, 512, 1024, 2048, 4096, 8192, 16384].indexOf(h) &&
      t.disableLogs,
    l.createJavaScriptNode)
  )
    i = l.createJavaScriptNode(h, s, s);
  else {
    if (!l.createScriptProcessor)
      throw "WebAudio API has no support on this browser.";
    i = l.createScriptProcessor(h, s, s);
  }
  m.connect(i), t.bufferSize || (h = i.bufferSize);
  var g = void 0 !== t.sampleRate ? t.sampleRate : l.sampleRate || 44100;
  (g < 22050 || g > 96e3) && t.disableLogs, t.disableLogs || t.desiredSampRate;
  var p = !1;
  function v() {
    (r = []),
      (a = []),
      (d = 0),
      (R = !1),
      (n = !1),
      (p = !1),
      (l = null),
      (o.leftchannel = r),
      (o.rightchannel = a),
      (o.numberOfAudioChannels = s),
      (o.desiredSampRate = c),
      (o.sampleRate = g),
      (o.recordingLength = d),
      (w = { left: [], right: [], recordingLength: 0 });
  }
  function b() {
    i && ((i.onaudioprocess = null), i.disconnect(), (i = null)),
      m && (m.disconnect(), (m = null)),
      v();
  }
  (this.pause = function () {
    p = !0;
  }),
    (this.resume = function () {
      if (!1 === u()) throw "Please make sure MediaStream is active.";
      if (!n) return t.disableLogs, void this.record();
      p = !1;
    }),
    (this.clearRecordedData = function () {
      (t.checkForInactiveTracks = !1), n && this.stop(b), b();
    }),
    (this.name = "StereoAudioRecorder"),
    (this.toString = function () {
      return this.name;
    });
  var R = !1;
  (i.onaudioprocess = function (e) {
    if (!p)
      if ((!1 === u() && (t.disableLogs, i.disconnect(), (n = !1)), n)) {
        R ||
          ((R = !0),
          t.onAudioProcessStarted && t.onAudioProcessStarted(),
          t.initCallback && t.initCallback());
        var c = e.inputBuffer.getChannelData(0),
          f = new Float32Array(c);
        if ((r.push(f), 2 === s)) {
          var l = e.inputBuffer.getChannelData(1),
            g = new Float32Array(l);
          a.push(g);
        }
        (d += h),
          (o.recordingLength = d),
          void 0 !== t.timeSlice &&
            ((w.recordingLength += h),
            w.left.push(f),
            2 === s && w.right.push(g));
      } else m && (m.disconnect(), (m = null));
  }),
    l.createMediaStreamDestination
      ? i.connect(l.createMediaStreamDestination())
      : i.connect(l.destination),
    (this.leftchannel = r),
    (this.rightchannel = a),
    (this.numberOfAudioChannels = s),
    (this.desiredSampRate = c),
    (this.sampleRate = g),
    (o.recordingLength = d);
  var w = { left: [], right: [], recordingLength: 0 };
  function y() {
    n &&
      "function" == typeof t.ondataavailable &&
      void 0 !== t.timeSlice &&
      (w.left.length
        ? (f(
            {
              desiredSampRate: c,
              sampleRate: g,
              numberOfAudioChannels: s,
              internalInterleavedLength: w.recordingLength,
              leftBuffers: w.left,
              rightBuffers: 1 === s ? [] : w.right,
            },
            function (e, i) {
              var o = new Blob([i], { type: "audio/wav" });
              t.ondataavailable(o), setTimeout(y, t.timeSlice);
            }
          ),
          (w = { left: [], right: [], recordingLength: 0 }))
        : setTimeout(y, t.timeSlice));
  }
}
/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */
function CanvasRecorder(e, t) {
  if ("undefined" == typeof html2canvas)
    throw "Please link: https://www.webrtc-experiment.com/screenshot.js";
  (t = t || {}).frameInterval || (t.frameInterval = 10);
  var i = !1;
  ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach(
    function (e) {
      e in document.createElement("canvas") && (i = !0);
    }
  );
  var o,
    r,
    a,
    n = !(
      (!window.webkitRTCPeerConnection && !window.webkitGetUserMedia) ||
      !window.chrome
    ),
    d = 50,
    s = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  if (
    (n && s && s[2] && (d = parseInt(s[2], 10)),
    n && d < 52 && (i = !1),
    t.useWhammyRecorder && (i = !1),
    i)
  )
    if ((t.disableLogs, e instanceof HTMLCanvasElement)) o = e;
    else {
      if (!(e instanceof CanvasRenderingContext2D))
        throw "Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";
      o = e.canvas;
    }
  else navigator.mozGetUserMedia && t.disableLogs;
  (this.record = function () {
    if (((a = !0), i && !t.useWhammyRecorder)) {
      var e;
      "captureStream" in o
        ? (e = o.captureStream(25))
        : "mozCaptureStream" in o
        ? (e = o.mozCaptureStream(25))
        : "webkitCaptureStream" in o && (e = o.webkitCaptureStream(25));
      try {
        var n = new MediaStream();
        n.addTrack(getTracks(e, "video")[0]), (e = n);
      } catch (e) {}
      if (!e) throw "captureStream API are NOT available.";
      (r = new MediaStreamRecorder(e, {
        mimeType: t.mimeType || "video/webm",
      })).record();
    } else (m.frames = []), (l = new Date().getTime()), f();
    t.initCallback && t.initCallback();
  }),
    (this.getWebPImages = function (i) {
      if ("canvas" === e.nodeName.toLowerCase()) {
        var o = m.frames.length;
        m.frames.forEach(function (e, i) {
          var r = o - i;
          t.disableLogs, t.onEncodingCallback && t.onEncodingCallback(r, o);
          var a = e.image.toDataURL("image/webp", 1);
          m.frames[i].image = a;
        }),
          t.disableLogs,
          i();
      } else i();
    }),
    (this.stop = function (e) {
      a = !1;
      var o = this;
      i && r
        ? r.stop(e)
        : this.getWebPImages(function () {
            m.compile(function (i) {
              t.disableLogs,
                (o.blob = i),
                o.blob.forEach &&
                  (o.blob = new Blob([], { type: "video/webm" })),
                e && e(o.blob),
                (m.frames = []);
            });
          });
    });
  var c = !1;
  function u() {
    (m.frames = []), (a = !1), (c = !1);
  }
  function f() {
    if (c) return (l = new Date().getTime()), setTimeout(f, 500);
    if ("canvas" === e.nodeName.toLowerCase()) {
      var i = new Date().getTime() - l;
      return (
        (l = new Date().getTime()),
        m.frames.push({
          image:
            ((o = document.createElement("canvas")),
            (r = o.getContext("2d")),
            (o.width = e.width),
            (o.height = e.height),
            r.drawImage(e, 0, 0),
            o),
          duration: i,
        }),
        void (a && setTimeout(f, t.frameInterval))
      );
    }
    var o, r;
    html2canvas(e, {
      grabMouse: void 0 === t.showMousePointer || t.showMousePointer,
      onrendered: function (e) {
        var i = new Date().getTime() - l;
        if (!i) return setTimeout(f, t.frameInterval);
        (l = new Date().getTime()),
          m.frames.push({ image: e.toDataURL("image/webp", 1), duration: i }),
          a && setTimeout(f, t.frameInterval);
      },
    });
  }
  (this.pause = function () {
    (c = !0), r instanceof MediaStreamRecorder && r.pause();
  }),
    (this.resume = function () {
      (c = !1),
        r instanceof MediaStreamRecorder ? r.resume() : a || this.record();
    }),
    (this.clearRecordedData = function () {
      a && this.stop(u), u();
    }),
    (this.name = "CanvasRecorder"),
    (this.toString = function () {
      return this.name;
    });
  var l = new Date().getTime(),
    m = new Whammy.Video(100);
}
/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */
function WhammyRecorder(e, t) {
  function i(e) {
    e = void 0 !== e ? e : 10;
    var t = new Date().getTime() - s;
    return t
      ? a
        ? ((s = new Date().getTime()), setTimeout(i, 100))
        : ((s = new Date().getTime()),
          d.paused && d.play(),
          f.drawImage(d, 0, 0, u.width, u.height),
          c.frames.push({ duration: t, image: u.toDataURL("image/webp") }),
          void (r || setTimeout(i, e, e)))
      : setTimeout(i, e, e);
  }
  function o(e, t, i, o, r) {
    var a = document.createElement("canvas");
    (a.width = u.width), (a.height = u.height);
    var n,
      d,
      s,
      c = a.getContext("2d"),
      f = [],
      l = -1 === t,
      m = t && t > 0 && t <= e.length ? t : e.length,
      h = 0,
      g = 0,
      p = 0,
      v = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
      b = i && i >= 0 && i <= 1 ? i : 0,
      R = o && o >= 0 && o <= 1 ? o : 0,
      w = !1;
    (d = -1),
      (s = (n = {
        length: m,
        functionToLoop: function (t, i) {
          var o,
            r,
            a,
            n = function () {
              (!w && a - o <= a * R) || (l && (w = !0), f.push(e[i])), t();
            };
          if (w) n();
          else {
            var d = new Image();
            (d.onload = function () {
              c.drawImage(d, 0, 0, u.width, u.height);
              var e = c.getImageData(0, 0, u.width, u.height);
              (o = 0), (r = e.data.length), (a = e.data.length / 4);
              for (var t = 0; t < r; t += 4) {
                var i = { r: e.data[t], g: e.data[t + 1], b: e.data[t + 2] };
                Math.sqrt(
                  Math.pow(i.r - h, 2) +
                    Math.pow(i.g - g, 2) +
                    Math.pow(i.b - p, 2)
                ) <=
                  v * b && o++;
              }
              n();
            }),
              (d.src = e[i].image);
          }
        },
        callback: function () {
          (f = f.concat(e.slice(m))).length <= 0 && f.push(e[e.length - 1]),
            r(f);
        },
      }).length),
      (function e() {
        ++d !== s
          ? setTimeout(function () {
              n.functionToLoop(e, d);
            }, 1)
          : n.callback();
      })();
  }
  (t = t || {}).frameInterval || (t.frameInterval = 10),
    t.disableLogs,
    (this.record = function () {
      t.width || (t.width = 320),
        t.height || (t.height = 240),
        t.video || (t.video = { width: t.width, height: t.height }),
        t.canvas || (t.canvas = { width: t.width, height: t.height }),
        (u.width = t.canvas.width || 320),
        (u.height = t.canvas.height || 240),
        (f = u.getContext("2d")),
        t.video && t.video instanceof HTMLVideoElement
          ? ((d = t.video.cloneNode()), t.initCallback && t.initCallback())
          : ((d = document.createElement("video")),
            setSrcObject(e, d),
            (d.onloadedmetadata = function () {
              t.initCallback && t.initCallback();
            }),
            (d.width = t.video.width),
            (d.height = t.video.height)),
        (d.muted = !0),
        d.play(),
        (s = new Date().getTime()),
        (c = new Whammy.Video()),
        t.disableLogs,
        i(t.frameInterval);
    });
  var r = !1;
  this.stop = function (e) {
    (e = e || function () {}), (r = !0);
    var i = this;
    setTimeout(function () {
      o(c.frames, -1, null, null, function (o) {
        (c.frames = o),
          t.advertisement &&
            t.advertisement.length &&
            (c.frames = t.advertisement.concat(c.frames)),
          c.compile(function (t) {
            (i.blob = t),
              i.blob.forEach && (i.blob = new Blob([], { type: "video/webm" })),
              e && e(i.blob);
          });
      });
    }, 10);
  };
  var a = !1;
  function n() {
    (c.frames = []), (r = !0), (a = !1);
  }
  (this.pause = function () {
    a = !0;
  }),
    (this.resume = function () {
      (a = !1), r && this.record();
    }),
    (this.clearRecordedData = function () {
      r || this.stop(n), n();
    }),
    (this.name = "WhammyRecorder"),
    (this.toString = function () {
      return this.name;
    });
  var d,
    s,
    c,
    u = document.createElement("canvas"),
    f = u.getContext("2d");
}
void 0 !== AudioContext
  ? (Storage.AudioContext = AudioContext)
  : "undefined" != typeof webkitAudioContext &&
    (Storage.AudioContext = webkitAudioContext),
  void 0 !== RecordRTC && (RecordRTC.Storage = Storage),
  void 0 !== RecordRTC && (RecordRTC.MediaStreamRecorder = MediaStreamRecorder),
  void 0 !== RecordRTC && (RecordRTC.StereoAudioRecorder = StereoAudioRecorder),
  void 0 !== RecordRTC && (RecordRTC.CanvasRecorder = CanvasRecorder),
  void 0 !== RecordRTC && (RecordRTC.WhammyRecorder = WhammyRecorder);
/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
var Whammy = (function () {
  function e(e) {
    (this.frames = []), (this.duration = e || 1), (this.quality = 0.8);
  }
  function t(e) {
    function t(e, t, i) {
      return [{ data: e, id: 231 }].concat(
        i.map(function (e) {
          var i = (function (e) {
            var t = 0;
            e.keyframe && (t |= 128);
            e.invisible && (t |= 8);
            e.lacing && (t |= e.lacing << 1);
            e.discardable && (t |= 1);
            if (e.trackNum > 127) throw "TrackNumber > 127 not supported";
            return (
              [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t]
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("") + e.frame
            );
          })({
            discardable: 0,
            frame: e.data.slice(4),
            invisible: 0,
            keyframe: 1,
            lacing: 0,
            trackNum: 1,
            timecode: Math.round(t),
          });
          return (t += e.duration), { data: i, id: 163 };
        })
      );
    }
    function i(e) {
      for (var t = []; e > 0; ) t.push(255 & e), (e >>= 8);
      return new Uint8Array(t.reverse());
    }
    function o(e) {
      var t = [];
      e = (e.length % 8 ? new Array(9 - (e.length % 8)).join("0") : "") + e;
      for (var i = 0; i < e.length; i += 8) t.push(parseInt(e.substr(i, 8), 2));
      return new Uint8Array(t);
    }
    function r(e) {
      for (var t = [], a = 0; a < e.length; a++) {
        var n = e[a].data;
        "object" == typeof n && (n = r(n)),
          "number" == typeof n && (n = o(n.toString(2))),
          "string" == typeof n &&
            (n = new Uint8Array(
              n.split("").map(function (e) {
                return e.charCodeAt(0);
              })
            ));
        var d = n.size || n.byteLength || n.length,
          s = Math.ceil(Math.ceil(Math.log(d) / Math.log(2)) / 8),
          c = d.toString(2),
          u = new Array(7 * s + 7 + 1 - c.length).join("0") + c,
          f = new Array(s).join("0") + "1" + u;
        t.push(i(e[a].id)), t.push(o(f)), t.push(n);
      }
      return new Blob(t, { type: "video/webm" });
    }
    function a(e, t) {
      return parseInt(
        e
          .substr(t + 4, 4)
          .split("")
          .map(function (e) {
            var t = e.charCodeAt(0).toString(2);
            return new Array(8 - t.length + 1).join("0") + t;
          })
          .join(""),
        2
      );
    }
    function n(e) {
      for (var t = 0, i = {}; t < e.length; ) {
        var o = e.substr(t, 4),
          r = a(e, t),
          d = e.substr(t + 4 + 4, r);
        (t += 8 + r),
          (i[o] = i[o] || []),
          "RIFF" === o || "LIST" === o ? i[o].push(n(d)) : i[o].push(d);
      }
      return i;
    }
    var d = new (function (e) {
      var i = (function (e) {
        if (!e[0])
          return void postMessage({
            error:
              "Something went wrong. Maybe WebP format is not supported in the current browser.",
          });
        for (
          var t = e[0].width, i = e[0].height, o = e[0].duration, r = 1;
          r < e.length;
          r++
        )
          o += e[r].duration;
        return { duration: o, width: t, height: i };
      })(e);
      if (!i) return [];
      for (
        var o,
          a = [
            {
              id: 440786851,
              data: [
                { data: 1, id: 17030 },
                { data: 1, id: 17143 },
                { data: 4, id: 17138 },
                { data: 8, id: 17139 },
                { data: "webm", id: 17026 },
                { data: 2, id: 17031 },
                { data: 2, id: 17029 },
              ],
            },
            {
              id: 408125543,
              data: [
                {
                  id: 357149030,
                  data: [
                    { data: 1e6, id: 2807729 },
                    { data: "whammy", id: 19840 },
                    { data: "whammy", id: 22337 },
                    {
                      data:
                        ((o = i.duration),
                        [].slice
                          .call(new Uint8Array(new Float64Array([o]).buffer), 0)
                          .map(function (e) {
                            return String.fromCharCode(e);
                          })
                          .reverse()
                          .join("")),
                      id: 17545,
                    },
                  ],
                },
                {
                  id: 374648427,
                  data: [
                    {
                      id: 174,
                      data: [
                        { data: 1, id: 215 },
                        { data: 1, id: 29637 },
                        { data: 0, id: 156 },
                        { data: "und", id: 2274716 },
                        { data: "V_VP8", id: 134 },
                        { data: "VP8", id: 2459272 },
                        { data: 1, id: 131 },
                        {
                          id: 224,
                          data: [
                            { data: i.width, id: 176 },
                            { data: i.height, id: 186 },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          n = 0,
          d = 0;
        n < e.length;

      ) {
        var s = [],
          c = 0;
        do {
          s.push(e[n]), (c += e[n].duration), n++;
        } while (n < e.length && c < 3e4);
        var u = { id: 524531317, data: t(d, 0, s) };
        a[1].data.push(u), (d += c);
      }
      return r(a);
    })(
      e.map(function (e) {
        var t = (function (e) {
          for (
            var t = e.RIFF[0].WEBP[0], i = t.indexOf("*"), o = 0, r = [];
            o < 4;
            o++
          )
            r[o] = t.charCodeAt(i + 3 + o);
          return {
            width: 16383 & ((r[1] << 8) | r[0]),
            height: 16383 & ((r[3] << 8) | r[2]),
            data: t,
            riff: e,
          };
        })(n(atob(e.image.slice(23))));
        return (t.duration = e.duration), t;
      })
    );
    postMessage(d);
  }
  return (
    (e.prototype.add = function (e, t) {
      if (
        ("canvas" in e && (e = e.canvas),
        "toDataURL" in e && (e = e.toDataURL("image/webp", this.quality)),
        !/^data:image\/webp;base64,/gi.test(e))
      )
        throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
      this.frames.push({ image: e, duration: t || this.duration });
    }),
    (e.prototype.compile = function (e) {
      var i,
        o,
        r,
        a =
          ((i = t),
          (o = URL.createObjectURL(
            new Blob(
              [
                i.toString(),
                "this.onmessage =  function (eee) {" + i.name + "(eee.data);}",
              ],
              { type: "application/javascript" }
            )
          )),
          (r = new Worker(o)),
          URL.revokeObjectURL(o),
          r);
      (a.onmessage = function (t) {
        t.data.error || e(t.data);
      }),
        a.postMessage(this.frames);
    }),
    { Video: e }
  );
})();
void 0 !== RecordRTC && (RecordRTC.Whammy = Whammy);
/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */ var DiskStorage = {
  init: function () {
    var e = this;
    if ("undefined" != typeof indexedDB && void 0 !== indexedDB.open) {
      var t,
        i = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ""),
        o = indexedDB.open(i, 1);
      (o.onerror = e.onError),
        (o.onsuccess = function () {
          (((t = o.result).onerror = e.onError), t.setVersion)
            ? 1 !== t.version
              ? (t.setVersion(1).onsuccess = function () {
                  r(t), a();
                })
              : a()
            : a();
        }),
        (o.onupgradeneeded = function (e) {
          r(e.target.result);
        });
    }
    function r(t) {
      t.createObjectStore(e.dataStoreName);
    }
    function a() {
      var i = t.transaction([e.dataStoreName], "readwrite");
      function o(t) {
        i.objectStore(e.dataStoreName).get(t).onsuccess = function (i) {
          e.callback && e.callback(i.target.result, t);
        };
      }
      e.videoBlob &&
        i.objectStore(e.dataStoreName).put(e.videoBlob, "videoBlob"),
        e.gifBlob && i.objectStore(e.dataStoreName).put(e.gifBlob, "gifBlob"),
        e.audioBlob &&
          i.objectStore(e.dataStoreName).put(e.audioBlob, "audioBlob"),
        o("audioBlob"),
        o("videoBlob"),
        o("gifBlob");
    }
  },
  Fetch: function (e) {
    return (this.callback = e), this.init(), this;
  },
  Store: function (e) {
    return (
      (this.audioBlob = e.audioBlob),
      (this.videoBlob = e.videoBlob),
      (this.gifBlob = e.gifBlob),
      this.init(),
      this
    );
  },
  onError: function (e) {},
  dataStoreName: "recordRTC",
  dbName: null,
};
/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */
function GifRecorder(e, t) {
  if ("undefined" == typeof GIFEncoder) {
    var i = document.createElement("script");
    (i.src = "https://www.webrtc-experiment.com/gif-recorder.js"),
      (document.body || document.documentElement).appendChild(i);
  }
  t = t || {};
  var o =
    e instanceof CanvasRenderingContext2D || e instanceof HTMLCanvasElement;
  (this.record = function () {
    "undefined" != typeof GIFEncoder && d
      ? (o ||
          (t.width || (t.width = s.offsetWidth || 320),
          t.height || (t.height = s.offsetHeight || 240),
          t.video || (t.video = { width: t.width, height: t.height }),
          t.canvas || (t.canvas = { width: t.width, height: t.height }),
          (a.width = t.canvas.width || 320),
          (a.height = t.canvas.height || 240),
          (s.width = t.video.width || 320),
          (s.height = t.video.height || 240)),
        (u = new GIFEncoder()).setRepeat(0),
        u.setDelay(t.frameRate || 200),
        u.setQuality(t.quality || 10),
        u.start(),
        "function" == typeof t.onGifRecordingStarted &&
          t.onGifRecordingStarted(),
        Date.now(),
        (f = requestAnimationFrame(function e(i) {
          if (!0 !== l.clearedRecordedData) {
            if (r)
              return setTimeout(function () {
                e(i);
              }, 100);
            (f = requestAnimationFrame(e)),
              void 0 === typeof c && (c = i),
              i - c < 90 ||
                (!o && s.paused && s.play(),
                o || n.drawImage(s, 0, 0, a.width, a.height),
                t.onGifPreview && t.onGifPreview(a.toDataURL("image/png")),
                u.addFrame(n),
                (c = i));
          }
        })),
        t.initCallback && t.initCallback())
      : setTimeout(l.record, 1e3);
  }),
    (this.stop = function (e) {
      (e = e || function () {}),
        f && cancelAnimationFrame(f),
        Date.now(),
        (this.blob = new Blob([new Uint8Array(u.stream().bin)], {
          type: "image/gif",
        })),
        e(this.blob),
        (u.stream().bin = []);
    });
  var r = !1;
  (this.pause = function () {
    r = !0;
  }),
    (this.resume = function () {
      r = !1;
    }),
    (this.clearRecordedData = function () {
      (l.clearedRecordedData = !0), u && (u.stream().bin = []);
    }),
    (this.name = "GifRecorder"),
    (this.toString = function () {
      return this.name;
    });
  var a = document.createElement("canvas"),
    n = a.getContext("2d");
  o &&
    (e instanceof CanvasRenderingContext2D
      ? (a = (n = e).canvas)
      : e instanceof HTMLCanvasElement && ((n = e.getContext("2d")), (a = e)));
  var d = !0;
  if (!o) {
    var s = document.createElement("video");
    (s.muted = !0),
      (s.autoplay = !0),
      (s.playsInline = !0),
      (d = !1),
      (s.onloadedmetadata = function () {
        d = !0;
      }),
      setSrcObject(e, s),
      s.play();
  }
  var c,
    u,
    f = null,
    l = this;
}
function MultiStreamsMixer(e, t) {
  var i;
  (i = "undefined" != typeof global ? global : null),
    void 0 === RecordRTC &&
      i &&
      "undefined" == typeof window &&
      "undefined" != typeof global &&
      ((global.navigator = {
        userAgent:
          "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
        getUserMedia: function () {},
      }),
      global.console || (global.console = {}),
      (void 0 !== global.console.log && void 0 !== global.console.error) ||
        (global.console.error = global.console.log =
          global.console.log || function () {}),
      "undefined" == typeof document &&
        ((i.document = {
          documentElement: {
            appendChild: function () {
              return "";
            },
          },
        }),
        (document.createElement =
          document.captureStream =
          document.mozCaptureStream =
            function () {
              var e = {
                getContext: function () {
                  return e;
                },
                play: function () {},
                pause: function () {},
                drawImage: function () {},
                toDataURL: function () {
                  return "";
                },
                style: {},
              };
              return e;
            }),
        (i.HTMLVideoElement = function () {})),
      "undefined" == typeof location &&
        (i.location = { protocol: "file:", href: "", hash: "" }),
      "undefined" == typeof screen && (i.screen = { width: 0, height: 0 }),
      void 0 === c &&
        (i.URL = {
          createObjectURL: function () {
            return "";
          },
          revokeObjectURL: function () {
            return "";
          },
        }),
      (i.window = global)),
    (t = t || "multi-streams-mixer");
  var o = [],
    r = !1,
    a = document.createElement("canvas"),
    n = a.getContext("2d");
  (a.style.opacity = 0),
    (a.style.position = "absolute"),
    (a.style.zIndex = -1),
    (a.style.top = "-1000em"),
    (a.style.left = "-1000em"),
    (a.className = t),
    (document.body || document.documentElement).appendChild(a),
    (this.disableLogs = !1),
    (this.frameInterval = 10),
    (this.width = 360),
    (this.height = 240),
    (this.useGainNode = !0);
  var d = this,
    s = window.AudioContext;
  void 0 === s &&
    ("undefined" != typeof webkitAudioContext && (s = webkitAudioContext),
    "undefined" != typeof mozAudioContext && (s = mozAudioContext));
  var c = window.URL;
  void 0 === c && "undefined" != typeof webkitURL && (c = webkitURL),
    "undefined" != typeof navigator &&
      void 0 === navigator.getUserMedia &&
      (void 0 !== navigator.webkitGetUserMedia &&
        (navigator.getUserMedia = navigator.webkitGetUserMedia),
      void 0 !== navigator.mozGetUserMedia &&
        (navigator.getUserMedia = navigator.mozGetUserMedia));
  var u = window.MediaStream;
  void 0 === u &&
    "undefined" != typeof webkitMediaStream &&
    (u = webkitMediaStream),
    void 0 !== u &&
      void 0 === u.prototype.stop &&
      (u.prototype.stop = function () {
        this.getTracks().forEach(function (e) {
          e.stop();
        });
      });
  var f = {};
  function l() {
    if (!r) {
      var e = o.length,
        t = !1,
        i = [];
      if (
        (o.forEach(function (e) {
          e.stream || (e.stream = {}),
            e.stream.fullcanvas ? (t = e) : i.push(e);
        }),
        t)
      )
        (a.width = t.stream.width), (a.height = t.stream.height);
      else if (i.length) {
        a.width = e > 1 ? 2 * i[0].width : i[0].width;
        var n = 1;
        (3 !== e && 4 !== e) || (n = 2),
          (5 !== e && 6 !== e) || (n = 3),
          (7 !== e && 8 !== e) || (n = 4),
          (9 !== e && 10 !== e) || (n = 5),
          (a.height = i[0].height * n);
      } else (a.width = d.width || 360), (a.height = d.height || 240);
      t && t instanceof HTMLVideoElement && m(t),
        i.forEach(function (e, t) {
          m(e, t);
        }),
        setTimeout(l, d.frameInterval);
    }
  }
  function m(e, t) {
    if (!r) {
      var i = 0,
        o = 0,
        a = e.width,
        d = e.height;
      1 === t && (i = e.width),
        2 === t && (o = e.height),
        3 === t && ((i = e.width), (o = e.height)),
        4 === t && (o = 2 * e.height),
        5 === t && ((i = e.width), (o = 2 * e.height)),
        6 === t && (o = 3 * e.height),
        7 === t && ((i = e.width), (o = 3 * e.height)),
        void 0 !== e.stream.left && (i = e.stream.left),
        void 0 !== e.stream.top && (o = e.stream.top),
        void 0 !== e.stream.width && (a = e.stream.width),
        void 0 !== e.stream.height && (d = e.stream.height),
        n.drawImage(e, i, o, a, d),
        "function" == typeof e.stream.onRender &&
          e.stream.onRender(n, i, o, a, d, t);
    }
  }
  function h(e) {
    var i = document.createElement("video");
    return (
      (function (e, t) {
        "srcObject" in t
          ? (t.srcObject = e)
          : "mozSrcObject" in t
          ? (t.mozSrcObject = e)
          : (t.srcObject = e);
      })(e, i),
      (i.className = t),
      (i.muted = !0),
      (i.volume = 0),
      (i.width = e.width || d.width || 360),
      (i.height = e.height || d.height || 240),
      i.play(),
      i
    );
  }
  function g(t) {
    (o = []),
      (t = t || e).forEach(function (e) {
        if (
          e.getTracks().filter(function (e) {
            return "video" === e.kind;
          }).length
        ) {
          var t = h(e);
          (t.stream = e), o.push(t);
        }
      });
  }
  void 0 !== s
    ? (f.AudioContext = s)
    : "undefined" != typeof webkitAudioContext &&
      (f.AudioContext = webkitAudioContext),
    (this.startDrawingFrames = function () {
      l();
    }),
    (this.appendStreams = function (t) {
      if (!t) throw "First parameter is required.";
      t instanceof Array || (t = [t]),
        t.forEach(function (t) {
          var i = new u();
          if (
            t.getTracks().filter(function (e) {
              return "video" === e.kind;
            }).length
          ) {
            var r = h(t);
            (r.stream = t),
              o.push(r),
              i.addTrack(
                t.getTracks().filter(function (e) {
                  return "video" === e.kind;
                })[0]
              );
          }
          if (
            t.getTracks().filter(function (e) {
              return "audio" === e.kind;
            }).length
          ) {
            var a = d.audioContext.createMediaStreamSource(t);
            (d.audioDestination =
              d.audioContext.createMediaStreamDestination()),
              a.connect(d.audioDestination),
              i.addTrack(
                d.audioDestination.stream.getTracks().filter(function (e) {
                  return "audio" === e.kind;
                })[0]
              );
          }
          e.push(i);
        });
    }),
    (this.releaseStreams = function () {
      (o = []),
        (r = !0),
        d.gainNode && (d.gainNode.disconnect(), (d.gainNode = null)),
        d.audioSources.length &&
          (d.audioSources.forEach(function (e) {
            e.disconnect();
          }),
          (d.audioSources = [])),
        d.audioDestination &&
          (d.audioDestination.disconnect(), (d.audioDestination = null)),
        d.audioContext && d.audioContext.close(),
        (d.audioContext = null),
        n.clearRect(0, 0, a.width, a.height),
        a.stream && (a.stream.stop(), (a.stream = null));
    }),
    (this.resetVideoStreams = function (e) {
      !e || e instanceof Array || (e = [e]), g(e);
    }),
    (this.name = "MultiStreamsMixer"),
    (this.toString = function () {
      return this.name;
    }),
    (this.getMixedStream = function () {
      r = !1;
      var t = (function () {
          var e;
          g(),
            "captureStream" in a
              ? (e = a.captureStream())
              : "mozCaptureStream" in a
              ? (e = a.mozCaptureStream())
              : d.disableLogs;
          var t = new u();
          return (
            e
              .getTracks()
              .filter(function (e) {
                return "video" === e.kind;
              })
              .forEach(function (e) {
                t.addTrack(e);
              }),
            (a.stream = t),
            t
          );
        })(),
        i = (function () {
          f.AudioContextConstructor ||
            (f.AudioContextConstructor = new f.AudioContext());
          (d.audioContext = f.AudioContextConstructor),
            (d.audioSources = []),
            !0 === d.useGainNode &&
              ((d.gainNode = d.audioContext.createGain()),
              d.gainNode.connect(d.audioContext.destination),
              (d.gainNode.gain.value = 0));
          var t = 0;
          if (
            (e.forEach(function (e) {
              if (
                e.getTracks().filter(function (e) {
                  return "audio" === e.kind;
                }).length
              ) {
                t++;
                var i = d.audioContext.createMediaStreamSource(e);
                !0 === d.useGainNode && i.connect(d.gainNode),
                  d.audioSources.push(i);
              }
            }),
            !t)
          )
            return;
          return (
            (d.audioDestination =
              d.audioContext.createMediaStreamDestination()),
            d.audioSources.forEach(function (e) {
              e.connect(d.audioDestination);
            }),
            d.audioDestination.stream
          );
        })();
      return (
        i &&
          i
            .getTracks()
            .filter(function (e) {
              return "audio" === e.kind;
            })
            .forEach(function (e) {
              t.addTrack(e);
            }),
        e.forEach(function (e) {
          e.fullcanvas && !0;
        }),
        t
      );
    });
}
/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */
function MultiStreamRecorder(e, t) {
  e = e || [];
  var i,
    o,
    r = this;
  (t = t || {
    elementClass: "multi-streams-mixer",
    mimeType: "video/webm",
    video: { width: 360, height: 240 },
  }).frameInterval || (t.frameInterval = 10),
    t.video || (t.video = {}),
    t.video.width || (t.video.width = 360),
    t.video.height || (t.video.height = 240),
    (this.record = function () {
      var r;
      (i = new MultiStreamsMixer(e, t.elementClass || "multi-streams-mixer")),
        ((r = []),
        e.forEach(function (e) {
          getTracks(e, "video").forEach(function (e) {
            r.push(e);
          });
        }),
        r).length &&
          ((i.frameInterval = t.frameInterval || 10),
          (i.width = t.video.width || 360),
          (i.height = t.video.height || 240),
          i.startDrawingFrames()),
        t.previewStream &&
          "function" == typeof t.previewStream &&
          t.previewStream(i.getMixedStream()),
        (o = new MediaStreamRecorder(i.getMixedStream(), t)).record();
    }),
    (this.stop = function (e) {
      o &&
        o.stop(function (t) {
          (r.blob = t), e(t), r.clearRecordedData();
        });
    }),
    (this.pause = function () {
      o && o.pause();
    }),
    (this.resume = function () {
      o && o.resume();
    }),
    (this.clearRecordedData = function () {
      o && (o.clearRecordedData(), (o = null)),
        i && (i.releaseStreams(), (i = null));
    }),
    (this.addStreams = function (r) {
      if (!r) throw "First parameter is required.";
      r instanceof Array || (r = [r]),
        e.concat(r),
        o &&
          i &&
          (i.appendStreams(r),
          t.previewStream &&
            "function" == typeof t.previewStream &&
            t.previewStream(i.getMixedStream()));
    }),
    (this.resetVideoStreams = function (e) {
      i && (!e || e instanceof Array || (e = [e]), i.resetVideoStreams(e));
    }),
    (this.getMixer = function () {
      return i;
    }),
    (this.name = "MultiStreamRecorder"),
    (this.toString = function () {
      return this.name;
    });
}
/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * // Note: You can access all RecordRTC API using "recorder.recordRTC" e.g.
 * recorder.recordRTC.onStateChanged = function(state) {};
 * recorder.recordRTC.setRecordingDuration(5000);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */
function RecordRTCPromisesHandler(e, t) {
  if (!this) throw 'Use "new RecordRTCPromisesHandler()"';
  if (void 0 === e) throw 'First argument "MediaStream" is required.';
  var i = this;
  (i.recordRTC = new RecordRTC(e, t)),
    (this.startRecording = function () {
      return new Promise(function (e, t) {
        try {
          i.recordRTC.startRecording(), e();
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.stopRecording = function () {
      return new Promise(function (e, t) {
        try {
          i.recordRTC.stopRecording(function (o) {
            (i.blob = i.recordRTC.getBlob()),
              i.blob && i.blob.size ? e(o) : t("Empty blob.", i.blob);
          });
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.pauseRecording = function () {
      return new Promise(function (e, t) {
        try {
          i.recordRTC.pauseRecording(), e();
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.resumeRecording = function () {
      return new Promise(function (e, t) {
        try {
          i.recordRTC.resumeRecording(), e();
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.getDataURL = function (e) {
      return new Promise(function (e, t) {
        try {
          i.recordRTC.getDataURL(function (t) {
            e(t);
          });
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.getBlob = function () {
      return new Promise(function (e, t) {
        try {
          e(i.recordRTC.getBlob());
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.getInternalRecorder = function () {
      return new Promise(function (e, t) {
        try {
          e(i.recordRTC.getInternalRecorder());
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.reset = function () {
      return new Promise(function (e, t) {
        try {
          e(i.recordRTC.reset());
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.destroy = function () {
      return new Promise(function (e, t) {
        try {
          e(i.recordRTC.destroy());
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.getState = function () {
      return new Promise(function (e, t) {
        try {
          e(i.recordRTC.getState());
        } catch (e) {
          t(e);
        }
      });
    }),
    (this.blob = null),
    (this.version = "5.5.9");
}
/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024}
 */
function WebAssemblyRecorder(e, t) {
  function i() {
    return new ReadableStream({
      start: function (i) {
        var o = document.createElement("canvas"),
          r = document.createElement("video");
        (r.srcObject = e),
          (r.onplaying = function () {
            (o.width = t.width), (o.height = t.height);
            var e = o.getContext("2d"),
              a = 1e3 / t.frameRate;
            setTimeout(function o() {
              e.drawImage(r, 0, 0),
                i.enqueue(e.getImageData(0, 0, t.width, t.height)),
                setTimeout(o, a);
            }, a);
          }),
          r.play();
      },
    });
  }
  var o, r;
  function a(e, d) {
    if (t.workerPath || d) {
      if (!t.workerPath && d instanceof ArrayBuffer) {
        var s = new Blob([d], { type: "text/javascript" });
        t.workerPath = URL.createObjectURL(s);
      }
      t.workerPath,
        (o = new Worker(t.workerPath)).postMessage(
          t.webAssemblyPath ||
            "https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm"
        ),
        o.addEventListener("message", function (e) {
          "READY" === e.data
            ? (o.postMessage({
                width: t.width,
                height: t.height,
                bitrate: t.bitrate || 1200,
                timebaseDen: t.frameRate || 30,
                realtime: !0,
              }),
              i().pipeTo(
                new WritableStream({
                  write: function (e) {
                    o && o.postMessage(e.data.buffer, [e.data.buffer]);
                  },
                })
              ))
            : e.data && (r || n.push(e.data));
        });
    } else
      fetch("https://unpkg.com/webm-wasm@latest/dist/webm-worker.js").then(
        function (t) {
          t.arrayBuffer().then(function (t) {
            a(e, t);
          });
        }
      );
  }
  ((t = t || {}).width = t.width || 640),
    (t.height = t.height || 480),
    (t.frameRate = t.frameRate || 30),
    (t.bitrate = t.bitrate || 1200),
    (this.record = function () {
      (n = []),
        (r = !1),
        (this.blob = null),
        a(e),
        "function" == typeof t.initCallback && t.initCallback();
    }),
    (this.pause = function () {
      r = !0;
    }),
    (this.resume = function () {
      r = !1;
    });
  var n = [];
  (this.stop = function (e) {
    o && (o.postMessage(null), o.terminate(), (o = null)),
      (this.blob = new Blob(n, { type: "video/webm" })),
      e(this.blob);
  }),
    (this.name = "WebAssemblyRecorder"),
    (this.toString = function () {
      return this.name;
    }),
    (this.clearRecordedData = function () {
      (n = []), (r = !1), (this.blob = null);
    }),
    (this.blob = null);
}
void 0 !== RecordRTC && (RecordRTC.DiskStorage = DiskStorage),
  void 0 !== RecordRTC && (RecordRTC.GifRecorder = GifRecorder),
  void 0 === RecordRTC &&
    ("undefined" != typeof module && (module.exports = MultiStreamsMixer),
    "function" == typeof define &&
      define.amd &&
      define("MultiStreamsMixer", [], function () {
        return MultiStreamsMixer;
      })),
  void 0 !== RecordRTC && (RecordRTC.MultiStreamRecorder = MultiStreamRecorder),
  void 0 !== RecordRTC &&
    (RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler),
  void 0 !== RecordRTC && (RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder);
