chrome.runtime.onInstalled.addListener(function (e) {
  api.queue.push({ type: "action", action: e.reason }),
    api.queueProcessorReady && api.processQueue();
});
var api = {
  stop: !1,
  actionUrl: "https://screeny-app.com/api/action/",
  uninstallUrl: "https://screeny-app.com/uninstall/",
  config: {},
  queue: [],
  queueProcessorReady: !1,
  uid: "",
  version: chrome.runtime.getManifest().version,
  init: function () {
    api.initStorage().then(() => {
      (api.queueProcessorReady = !0),
        api.setUninstallUrl(),
        api.processQueue(),
        api.initListeners(),
        api.setDefaultSettings();
    });
  },
  sendMicrophoneRequest: function () {
    window.chrome.tabs.create({ url: "grant_request.html" });
  },
  sendContentCameraRequest: function () {
    window.chrome.tabs.create({ url: "chrome://settings/content/camera" });
  },
  initStorage: function () {
    return new Promise((e, r) => {
      chrome.storage.local.get((r) => {
        r && r.config && (api.config = r.config),
          api.config.uid
            ? (api.uid = api.config.uid)
            : ((api.uid = api.config.uid = api.generateUID()),
              api.saveConfig()),
          e();
      });
    });
  },
  setUninstallUrl: function () {
    var e =
      "p=" +
      encodeURIComponent(
        btoa(
          JSON.stringify({
            id: chrome.runtime.id,
            v: api.version,
            action: "uninstall",
            uid: api.uid,
            t: Date.now(),
          })
        )
      );
    chrome.runtime.setUninstallURL(api.uninstallUrl + "?" + e);
  },
  processQueue() {
    for (; api.queue.length > 0; ) {
      var e = api.queue.shift();
      if (!e.type || "action" != e.type) return !0;
      var r =
        "p=" +
        encodeURIComponent(
          btoa(
            JSON.stringify({
              id: chrome.runtime.id,
              v: api.version,
              action: e.action,
              uid: api.uid,
              t: Date.now(),
            })
          )
        );
      fetch(api.actionUrl + "?" + r)
        .then((e) => e.json())
        .then(function (e) {
          e.url && chrome.tabs.create({ url: e.url });
        });
    }
  },
  initListeners: function () {
    api.listenMessages();
  },
  handleInstall: function (e) {
    api.queue.push({ type: "action", action: e.reason }),
      api.queueProcessorReady && api.processQueue();
  },
  saveConfig: function () {
    chrome.storage.local.set({ config: api.config });
  },
  generateUID: () =>
    "xxxxxxxx-xxxx-2xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var r = (16 * Math.random()) | 0;
      return ("x" == e ? r : (3 & r) | 8).toString(16);
    }),
  setDefaultSettings: function () {
    var e = {
      pngjpg: "png",
      delay: 0,
      rnd: Math.random(),
      options: Date.now().toString(),
      speed: 500,
      shortcut_full: 90,
      shortcut_visible: 88,
      shortcut_region: 82,
      enableshortcuts: "yes",
      button_size: 14,
      sb_opacity: 0.7,
      created: new Date(),
      color: "#FF0000",
    };
    for (var r in e)
      e.hasOwnProperty(r) &&
        !localStorage.hasOwnProperty(r) &&
        (localStorage[r] = e[r]);
    chrome.i18n.getAcceptLanguages(function () {
      try {
        localStorage.primaryLanguage = arguments[0][0];
      } catch (e) {
        localStorage.primaryLanguage = "";
      }
    });
  },
  callPopup: function (e) {
    for (
      var r = chrome.extension.getViews({ type: "popup" }), t = 0;
      t < r.length;
      t++
    )
      r[t].popup.exec(e);
  },
  listenMessages: function () {
    chrome.runtime.onMessage.addListener(function (e) {
      switch (((api.stop = !1), e.data)) {
        case "captureVisible":
          screenshot.captureVisible();
          break;
        case "sendMicrophoneRequest":
          api.sendMicrophoneRequest();
          break;
        case "captureAll":
          screenshot.captureAll(e);
          break;
        case "startRecordDesktop":
          recorder.startRecordScreen(e);
          break;
        case "pauseRecordDesktop":
          recorder.pauseRecordScreen(e);
          break;
        case "resumeRecordDesktop":
          recorder.resumeRecordScreen(e);
          break;
        case "stopRecordDesktop":
          recorder.stopRecordScreen();
          break;
        case "startRecordDesktopTab":
          recorder.startRecordScreenTab(e);
          break;
        case "pauseRecordDesktopTab":
          recorder.pauseRecordScreenTab(e);
          break;
        case "resumeRecordDesktopTab":
          recorder.resumeRecordScreenTab(e);
          break;
        case "stopRecordDesktopTab":
          recorder.stopRecordScreenTab();
          break;
        case "startRecordWeb":
          recorder.startRecordWeb(e);
          break;
        case "pauseRecordWeb":
          recorder.pauseRecordWeb();
          break;
        case "resumeRecordWeb":
          recorder.resumeRecordWeb();
          break;
        case "stopRecordWeb":
          recorder.stopRecordWeb(e);
          break;
        case "startRecordDesktopWeb":
          recorder.startRecordScreenWeb(e);
          break;
        case "pauseRecordDesktopWeb":
          recorder.pauseRecordScreenWeb(e);
          break;
        case "resumeRecordDesktopWeb":
          recorder.resumeRecordScreenWeb(e);
          break;
        case "stopRecordDesktopWeb":
          recorder.stopRecordScreenWeb(e);
          break;
        case "startRecordDesktopTabWeb":
          recorder.startRecordScreenTabWeb(e);
          break;
        case "startStopDuration":
          this.duration = api.startCount(e);
          break;
        case "stopNow":
          api.stop = !0;
          break;
        case "createNewTab":
          api.createRecordTab(e);
          break;
        case "hello":
          api.sendContentCameraRequest();
      }
      return !0;
    });
  },
  startCount: function (e) {
    return recorder.startStopDurationBadgeUpdater(e);
  },
  createRecordTab: function (e) {
    let { src: r, size: t, dateCreated: a, blob: o } = e;
    chrome.tabs.create({ url: chrome.extension.getURL("record.html") }, (e) => {
      chrome.tabs.onUpdated.addListener(function (c, s) {
        c == e.id &&
          "complete" == s.status &&
          chrome.tabs.sendMessage(
            e.id,
            {
              data: "recordedVideoPreview",
              src: r,
              size: t,
              duration: this.duration,
              dateCreated: a,
              blob: o,
            },
            (e) => {}
          );
      });
    });
  },
  calculateTimeDuration: function (e) {
    var r = Math.floor(e / 3600),
      t = Math.floor((e - 3600 * r) / 60),
      a = Math.floor(e - 3600 * r - 60 * t);
    return (
      t < 10 && (t = t),
      a < 10 && (a = "0" + a),
      r <= 0 ? t + ":" + a : r + ":" + t + ":" + a
    );
  },
};
api.init();
