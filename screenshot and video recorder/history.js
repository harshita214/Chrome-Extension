var PAGE_STATE = {},
  FIT_PADDING = 20;
const helper = {
  showLoader: function () {
    $(".loader_inner").fadeIn(), $(".loader").delay(400).fadeIn("slow");
  },
  hideLoader: function () {
    $(".loader_inner").fadeOut(), $(".loader").delay(400).fadeOut("slow");
  },
};
function fitConstraints(e, t, i, n) {
  var o = i / e,
    a = n / t;
  return {
    width: (e = Math.min(e * o, e * a, e)),
    height: (t = Math.min(t * o, t * a, t)),
    left: parseInt((i - e) / 2),
    top: parseInt((n - t) / 2),
  };
}
function formatBytes(e, t) {
  if (0 === e) return "0";
  var i = t + 1 || 3,
    n = Math.floor(Math.log(e) / Math.log(1024));
  return (
    parseFloat((e / Math.pow(1024, n)).toFixed(i)) +
    " " +
    ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n]
  );
}
function loadImage(e, t, i) {
  var n = new Image(),
    o = !1;
  (n.onerror = function (e) {
    o ||
      ((o = !0),
      i(
        "File no longer exists—perhaps it has been cleared from your browser 😐"
      ));
  }),
    (n.onload = function () {
      o || t(e, n.width, n.height);
    }),
    (n.src = e);
}
function loadVideo(e, t, i) {
  var n = document.createElement("video");
  n.setAttribute("src", FSAPI.imgPathBase + e);
  t(e, n.width, n.height), (n.src = FSAPI.imgPathBase + e);
}
function setVideo(e, t, i) {
  let n = document.createElement("video");
  (n.autoplay = !0), (n.controls = !0);
  var o = 2 * FIT_PADDING;
  (t = window.innerWidth - o),
    (i =
      window.innerHeight -
      document.getElementsByTagName("header")[0].offsetHeight -
      o);
  (n.width = t), (n.height = i), (n.src = FSAPI.imgPathBase + e);
  var a = Util.$("image");
  (a.innerHTML = ""), a.appendChild(n);
  var r = Util.$("btn-download");
  Util.$("btn-download2");
  function s(e) {
    var o = !0 === e,
      a = "object" == typeof e,
      r = 2 * FIT_PADDING,
      s = document.getElementsByTagName("header")[0].offsetHeight,
      l = t > window.innerWidth || i + r >= window.innerHeight - s,
      d = n.width,
      c = n.height,
      h = a ? Util.$.offsets(n) : null,
      m = Util.$("image"),
      u = Util.$.hasClass(m, "can-zoom-out");
    !0 === o && (u = !u);
    var g = "";
    if (
      (l &&
        (u
          ? (!(function () {
              var e = 2 * FIT_PADDING,
                o = window.innerWidth - e,
                a =
                  window.innerHeight -
                  document.getElementsByTagName("header")[0].offsetHeight -
                  e,
                r = fitConstraints(t, i, o, a);
              (n.style.height = r.height + "px"),
                (n.style.width = r.width + "px"),
                (n.parentNode.style.padding = r.top + e / 2 + "px 0");
            })(),
            (g = "can-zoom-in"))
          : ((n.style.height = "auto"),
            (n.style.width = "auto"),
            (n.parentNode.style.padding = 0),
            (g = "can-zoom-out"))),
      m.setAttribute("class", g),
      a && !u)
    ) {
      var f = e.clientX - h.left,
        w = ((e.clientY - h.top) / c) * i,
        y = (f / d) * t - window.innerWidth / 2,
        p = w - window.innerHeight / 2;
      window.scrollTo(y, p);
    }
  }
  (PAGE_STATE.imgSrc = e),
    (PAGE_STATE.fsPath = r.download),
    s(!0),
    showImgButtons(),
    Util.$.on(n, "click", s),
    Util.$.on(window, "resize", function () {
      s(!0);
    });
}
function setImage(e, t, i) {
  var n = document.createElement("IMG");
  (n.src = e), (n.title = "Captured screenshot");
  var o = Util.$("image");
  (o.innerHTML = ""),
    o.appendChild(n),
    $(".recordPreview_alert").css({ display: "flex" }),
    $("header").css({ "margin-top": "50px" });
  var a = Util.$("btn-download");
  function r(e) {
    var o = !0 === e,
      a = "object" == typeof e,
      r = 2 * FIT_PADDING,
      s = document.getElementsByTagName("header")[0].offsetHeight,
      l = t > window.innerWidth || i + r > window.innerHeight - s,
      d = n.width,
      c = n.height,
      h = a ? Util.$.offsets(n) : null,
      m = Util.$("image"),
      u = Util.$.hasClass(m, "can-zoom-out");
    !0 === o && (u = !u);
    var g = "";
    if (
      (l &&
        (u
          ? (!(function () {
              var e = 2 * FIT_PADDING,
                o = window.innerWidth - e,
                a =
                  window.innerHeight -
                  document.getElementsByTagName("header")[0].offsetHeight -
                  e,
                r = fitConstraints(t, i, o, a);
              (n.style.height = r.height + "px"),
                (n.style.width = r.width + "px"),
                (n.parentNode.style.padding = r.top + e / 2 + "px 0");
            })(),
            (g = "can-zoom-in"))
          : ((n.style.height = "auto"),
            (n.style.width = "auto"),
            (n.parentNode.style.padding = 0),
            (g = "can-zoom-out"))),
      m.setAttribute("class", g),
      a && !u)
    ) {
      var f = e.clientX - h.left,
        w = ((e.clientY - h.top) / c) * i,
        y = (f / d) * t - window.innerWidth / 2,
        p = w - window.innerHeight / 2;
      window.scrollTo(y, p);
    }
  }
  (a.href = e),
    (a.download = e.split("/").pop()),
    (PAGE_STATE.imgSrc = e),
    (PAGE_STATE.fsPath = a.download),
    r(!0),
    showImgButtons(),
    Util.$.on(n, "click", r),
    Util.$.on(window, "resize", function () {
      r(!0);
    });
}
function showError(e, t, i, n = !0) {
  const o = `\n        <div class="alert ${
      i ? "alert-warning" : "alert-success"
    } ${n ? "alert-dismissible" : ""}" role="alert">\n            ${
      n
        ? '\n        <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>'
        : ""
    }\n            <strong>${e}</strong>\n            <br />\n            ${t}\n        </div>\n    `,
    a = document.createElement("div");
  (a.style.margin = "63px 0 0 0"),
    (a.innerHTML = o),
    document.body.appendChild(a);
}
function hideError() {
  Util.$("error-wrap").style.display = "none";
}
function showHistory(e, t) {
  let i = e.filter((e) => "webm" === e.name.slice(-4)),
    n = e.filter((e) => "png" === e.name.slice(-3));
  hideError(), (Util.$("image").style.display = "none"), window.scrollTo(0, 0);
  var o = document.createElement("ul");
  (o.className = "dropdown-items"),
    i.length
      ? o.appendChild(_createHistoryHeader())
      : o.appendChild(_createEmptyRow()),
    i.sort(function (e, t) {
      var i = e.metadata ? e.metadata.modificationTime.getTime() : null,
        n = t.metadata ? t.metadata.modificationTime.getTime() : null;
      return i ? (n ? n - i : -1) : n ? 1 : 0;
    }),
    i.forEach(function (e) {
      o.appendChild(_createHistoryRowVideo(e));
    });
  var a = document.createElement("ul");
  (a.className = "dropdown-items"),
    n.length
      ? a.appendChild(_createHistoryHeader())
      : a.appendChild(_createEmptyRow()),
    n.sort(function (e, t) {
      var i = e.metadata ? e.metadata.modificationTime.getTime() : null,
        n = t.metadata ? t.metadata.modificationTime.getTime() : null;
      return i ? (n ? n - i : -1) : n ? 1 : 0;
    }),
    n.forEach(function (e) {
      a.appendChild(_createHistoryRowImage(e));
    });
  let r = Util.$("captureHistory"),
    s = Util.$("recordHistory");
  (r.innerHTML = ""),
    (s.innerHTML = ""),
    s.appendChild(o),
    r.appendChild(a),
    saveState(),
    hideImgButtons();
}
function _createHistoryHeader() {
  const e = document.createElement("li");
  return (
    (e.className = "table-header"),
    (e.innerHTML =
      '\n        <div class="row">\n            <div class="col-sm-4">Name</div>\n            <div class="col-sm-3">Size</div>\n            <div class="col-sm-3">Date captured</div>\n            <div class="col-sm-2 text-right">\n                <span>Action</span>\n            </div>\n        </div>\n    '),
    e
  );
}
function _createHistoryRowVideo(e) {
  var t = e.name,
    i = e.metadata ? e.metadata.modificationTime.toLocaleDateString() : "??",
    n = e.metadata ? formatBytes(e.metadata.size, 1) : "",
    o = "record.html?src=" + encodeURIComponent(t);
  t.substr(-4);
  var a = document.createElement("li");
  return (
    (a.className = "row-item"),
    (a.innerHTML = `\n        <div class="row">\n            <div class="col-sm-4">\n                <a href="${o}">${t}</a>\n            </div>\n            <div class="col-sm-3">${n}</div>\n            <div class="col-sm-3">${i}</div>\n            <div class="col-sm-2 text-right">\n                <div class="date btn-trash" data-path="${t}"></div>\n            </div>\n        </div>\n    `),
    a
  );
}
function _createHistoryRowImage(e) {
  var t = e.name,
    i = e.metadata ? e.metadata.modificationTime.toLocaleDateString() : "??",
    n = e.metadata ? formatBytes(e.metadata.size, 1) : "",
    o = "history.html?src=" + encodeURIComponent(t);
  t.substr(-4);
  var a = document.createElement("li");
  return (
    (a.className = "row-item"),
    (a.innerHTML = `\n        <div class="row">\n            <div class="col-sm-4">\n                <a href="${o}">${t}</a>\n            </div>\n            <div class="col-sm-3">${n}</div>\n            <div class="col-sm-3">${i}</div>\n            <div class="col-sm-2 text-right">\n                <div class="date btn-trash" data-path="${t}"></div>\n            </div>\n        </div>\n    `),
    a
  );
}
function handleDeleteAllClick() {
  function e(e) {
    if (
      confirm(
        "Are you sure you want to delete all screen captures? (This action cannot be undone)"
      )
    ) {
      var t = "Clear all files";
      return FSAPI.clearTempFiles(
        function (e, i) {
          var n =
            e.length +
            " file" +
            (1 === e.length ? "" : "s") +
            " successfully removed 🗑";
          i.length &&
            (n =
              n +
              "\n\n" +
              i.length +
              " file" +
              (1 === i.length ? "" : "s") +
              " could not be removed."),
            setTimeout(function () {
              showError(t, n), showHistoryPage();
            }, 50);
        },
        function (e) {
          showError(t, "Error handling files.");
        },
        function (e, t, i, n) {},
        e
      );
    }
  }
  Util.$.on(document.getElementById("delete_videos"), "click", function (t) {
    t.preventDefault(), e({ video: !0 });
  }),
    Util.$.on(document.getElementById("delete_images"), "click", function (t) {
      t.preventDefault(), e({ image: !0 });
    });
}
function _createEmptyRow() {
  var e = document.createElement("li");
  return (
    (e.className = "row-item info"),
    (e.innerHTML =
      '<div class="container text-center">😦 <em>No screen captures found.</em> 😦</div>'),
    e
  );
}
function hideHistory() {
  (Util.$("history").style.display = "none"),
    (Util.$("image").style.display = ""),
    showImgButtons();
}
function showDeletedImg() {
  hideImgButtons(), (Util.$("image").innerHTML = ""), showHistoryPage();
}
function showImgButtons() {
  PAGE_STATE.imgSrc
    ? (Util.$.findClass("img-btn").forEach(function (e) {
        e.style.display = "block";
      }),
      $("span.clear_all_capture").hide(),
      $(".header_capture").css({ width: "50%" }),
      $("span.clear_all_record").hide(),
      $(".header_record").css({ width: "50%" }),
      $(".history").hide())
    : hideImgButtons();
}
function hideImgButtons() {
  Util.$.findClass("img-btn").forEach(function (e) {
    e.style.display = "none";
  }),
    $("span.clear_all_capture").show(),
    $(".header_capture").css({ width: "100%" }),
    $("span.clear_all_record").show(),
    $(".header_record").css({ width: "100%" }),
    $(".history").show();
}
function showHistoryPage(e) {
  FSAPI.withFs(
    function (e) {
      showError(
        "Unable to access filesystem",
        "Something went wrong accessing the filesystem. Check your browser settings.",
        !0,
        !0
      );
    },
    FSAPI.lookupFiles,
    function (t) {
      (t = t.filter(function (e) {
        return e.isFile;
      })),
        FSAPI.loadMetadata(t, function (t) {
          showHistory(t, e);
        });
    },
    function (e) {
      showError(
        "Error reading files",
        "Something went wrong reading your screen shots. Check your browser settings.",
        !0,
        !0
      );
    },
    e
  );
}
function saveState() {
  if (
    (1 === $("#captureHistory li").length &&
      $("#captureHistory li.info").addClass("no-hover"),
    1 === $("#recordHistory li").length &&
      $("#recordHistory li.info").addClass("no-hover"),
    "home-tab" === history.stateHistory.activeTab)
  )
    return (
      $(".header_record").hide(),
      $(".header_capture").show(),
      $("#captureHistory").show(),
      void $("#recordHistory").hide()
    );
  $(".header_record").show(),
    $(".header_capture").hide(),
    $("#captureHistory").hide(),
    $("#recordHistory").show();
}
function getHistoryState() {
  return new Promise((e, t) => {
    chrome.storage.local.get(["stateHistory"], function ({ stateHistory: t }) {
      t && (history.stateHistory = t), saveState(), e();
    });
  });
}
function deleteRow(e) {
  $(".history-page").on("click", ".btn-trash", function (e) {
    e.preventDefault();
    var t = PAGE_STATE.fsPath || $(this).data("path");
    function i(e) {
      showError(
        "Error reading file",
        "Something went wrong reading your screen shot. Check your browser settings.",
        !0,
        !0
      );
    }
    FSAPI.withFs(
      function () {
        showError(
          "Unable to access filesystem",
          "Something went wrong accessing the filesystem. Check your browser settings.",
          !0,
          !0
        );
      },
      function (e) {
        e.root.getFile(
          t,
          { create: !1 },
          function (e) {
            e.remove(function () {
              showDeletedImg();
            }, i);
          },
          i
        );
      }
    ),
      chrome.storage.local.get(
        ["stateHistory"],
        function ({ stateHistory: e }) {
          e && (history.stateHistory = e), saveState(), showHistoryPage(e);
        }
      );
  });
}
Util.$.findClass("close", Util.$("error")).forEach(function (e) {
  Util.$.on(e, "click", function () {
    hideError();
  });
}),
  Util.$.on(document, "keydown", function (e) {
    if (
      83 === e.keyCode &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      var t = Util.$("btn-download");
      "none" !== window.getComputedStyle(t).display &&
        (e.preventDefault(), t.click());
    }
  });
var qs = Util.getQueryString();
let src = qs.src,
  history = { stateHistory: { activeTab: "home-tab" } };
function highlightActiveTab() {
  $(".activeTabLi").removeClass("activeTabLi"),
    $(".nav-item a.active").parent().addClass("activeTabLi");
}
$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  highlightActiveTab(),
    (history.stateHistory = {
      ...history.stateHistory,
      activeTab: $(e.target).prop("id"),
    });
  const { stateHistory: t } = history;
  chrome.storage.local.set({ stateHistory: t }, () => {}),
    saveState(),
    getHistoryState();
}),
  getHistoryState()
    .then(() => {
      if (qs && qs.src && "webm" === qs.src.slice(-4))
        loadVideo(qs.src, setVideo, function (e) {
          showError("Unable to load image", e);
        });
      else if (qs && qs.src && "png" === qs.src.slice(-3))
        loadImage(FSAPI.imgPathBase + qs.src, setImage, function (e) {
          showError("Unable to load image", e);
        });
      else {
        showHistoryPage(history.stateHistory.activeTab), highlightActiveTab();
      }
    })
    .then(() => {
      let e = history.stateHistory.activeTab;
      handleDeleteAllClick(),
        deleteRow(e),
        saveState(),
        $(`a#${history.stateHistory.activeTab}`).tab("show");
    });
