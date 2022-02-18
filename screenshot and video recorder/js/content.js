var hideTheScrollBars,
  cropData,
  $window = $(window);
let iframeWithCamera;
function runCamera() {
  return new Promise(function (e, t) {
    let o = document.createElement("iframe");
    o.setAttribute("allow", "camera; microphone;"),
      (o.style.position = "fixed"),
      (o.style.bottom = "20px"),
      (o.style.right = "10px"),
      (o.style.height = "200px"),
      o.setAttribute("src", chrome.runtime.getURL("frame-video.html")),
      o.setAttribute("id", "camera-iframe"),
      o.addEventListener("load", function () {
        o.contentWindow.postMessage(
          JSON.stringify({ action: "createVideoFrame", value: { video: {} } }),
          "*"
        );
      }),
      window.addEventListener(
        "message",
        function (t) {
          try {
            let n = JSON.parse(t.data);
            n &&
              "createVideoFrame" === n.action &&
              e({ iframe: o, value: n.value });
          } catch (t) {}
        },
        !1
      ),
      document.body.appendChild(o),
      (iframeWithCamera = o);
  });
}
function captureCamera(e) {
  navigator.mediaDevices
    .getUserMedia({ audio: !1, video: !0 })
    .then((t) => {
      chrome.runtime.sendMessage({ type: "camera_access-granted" }), e(t);
    })
    .catch(() => e());
}
function captureMicrophone(e) {
  navigator.mediaDevices
    .getUserMedia({ audio: !0, video: !1 })
    .then((t) => {
      e(t);
    })
    .catch(() => e());
}
function exchangeElementStyle(e, t, o) {
  Array.isArray(t) || (t = [t]),
    t.forEach(function (t) {
      e.hasOwnProperty("style_" + t) ||
        ((e["style_" + t] = e.style.getPropertyValue(t) || null),
        (e["style_" + t + "_priority"] =
          e.style.getPropertyPriority(t) || null)),
        e.style.setProperty(t, o, "important");
    });
}
function restoreElementStyle(e, t) {
  Array.isArray(t) || (t = [t]),
    t.forEach(function (t) {
      e.hasOwnProperty("style_" + t) &&
        (e.style.removeProperty(t),
        e.style.setProperty(t, e["style_" + t], e["style_" + t + "_priority"]));
    });
}
var page = {
  isWidthScroll: !1,
  isHeightScroll: !1,
  scrollLeft: 0,
  scrollTop: 0,
  windowWidth: 0,
  windowHeight: 0,
  documentWidth: 0,
  documentHeight: 0,
  currentX: 0,
  cropData: null,
  currentY: 0,
  scrollBarWidth: 0,
  iframe: null,
  elm: null,
  fixedTopElements: [],
  fixedBottomElements: [],
  setVars: function (e) {
    e.y2 > document.height && (e.y2 = document.height),
      e.x2 > document.width && (e.x2 = document.width),
      (page.isWidthScroll = page.checkWidthScroll()),
      (page.isHeightScroll = page.checkHeightScroll()),
      (page.windowWidth = window.innerWidth),
      (page.documentWidth = document.body.scrollWidth),
      (page.documentHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight),
      (page.windowHeight = window.innerHeight),
      (page.currentX = 0),
      (page.currentY = 0),
      e && e.y1 > $window.scrollTop() && e.x1 > document.body.scrollLeft
        ? ((page.currentY = $window.scrollTop()),
          (page.currentX = document.body.scrollLeft))
        : ((page.currentX = e.x1), (page.currentY = e.y1));
  },
  scrollToCurrent: function () {
    $window.scrollTop(page.currentY), $window.scrollLeft(page.currentX);
  },
  saveScrollPos: function () {
    (page.scrollLeft = $window.scrollLeft()),
      (page.scrollTop = $window.scrollTop());
  },
  restoreScrollPos: function () {
    (page.currentX = page.scrollLeft),
      (page.currentY = page.scrollTop),
      page.scrollToCurrent();
  },
  computeNextScreen: function () {
    return (
      !(
        cropData &&
        page.currentX + page.windowWidth > cropData.x2 &&
        page.currentY + page.windowHeight > cropData.y2
      ) &&
      (page.currentX + page.windowWidth < page.documentWidth
        ? ((page.currentX += page.windowWidth), !0)
        : ((page.currentX = 0),
          !(page.currentY + page.windowHeight >= page.documentHeight) &&
            ((page.currentY += page.windowHeight), !0)))
    );
  },
  checkWidthScroll: function () {
    return document.body.clientWidth < document.body.scrollWidth;
  },
  checkHeightScroll: function () {
    return document.body.clientHeight < document.body.scrollHeight;
  },
  enableScrollbar: function (e) {
    e && hideTheScrollBars
      ? restoreElementStyle(document.body, ["overflow-x", "overflow-y"])
      : (exchangeElementStyle(
          document.body,
          ["overflow-x", "overflow-y"],
          "hidden"
        ),
        (hideTheScrollBars = !0));
  },
  fixedElementCheck: function () {
    "fixed" ===
      document.defaultView.getComputedStyle(document.body)[
        "background-attachment"
      ] &&
      exchangeElementStyle(document.body, ["background-attachment"], "initial");
    for (
      var e,
        t = document.createNodeIterator(
          document.documentElement,
          NodeFilter.SHOW_ELEMENT,
          null,
          !1
        ),
        o = $window.height();
      (e = t.nextNode());

    ) {
      var n = document.defaultView.getComputedStyle(e, "");
      if (!n) return;
      var r = n.getPropertyValue("position");
      "fixed" === r &&
        ($(e).position().top < o / 2
          ? (page.fixedTopElements.indexOf(e) < 0 &&
              page.fixedTopElements.push(e),
            document.body.scrollHeight < 2 * o &&
              exchangeElementStyle(e, ["position"], "absolute"))
          : page.fixedBottomElements.indexOf(e) < 0 &&
            page.fixedBottomElements.push(e)),
        "sticky" === r &&
          (page.fixedTopElements.indexOf(e) < 0 &&
            page.fixedTopElements.push(e),
          document.body.scrollHeight < 2 * o &&
            exchangeElementStyle(e, ["position"], "absolute"));
    }
  },
  hideFixedElement: function (e) {
    ("top" === e ? page.fixedTopElements : page.fixedBottomElements).forEach(
      function (e) {
        exchangeElementStyle(e, ["display"], "none");
      }
    );
  },
  showFixedElement: function (e) {
    ("top" === e ? page.fixedTopElements : page.fixedBottomElements).forEach(
      function (e) {
        restoreElementStyle(e, ["display"]);
      }
    );
  },
  restore: function () {
    page.enableScrollbar(!0),
      page.restoreScrollPos(),
      setTimeout(() => {
        page.fixedTopElements.forEach(function (e) {
          restoreElementStyle(e, ["display", "position"]);
        }),
          page.fixedBottomElements.forEach(function (e) {
            restoreElementStyle(e, ["display", "position"]);
          }),
          restoreElementStyle(document.body, ["background-attachment"]),
          (page.fixedTopElements.length = 0),
          (page.fixedBottomElements.length = 0);
      }, 1e3);
  },
  onRequest: function (e, t, o) {
    if ("checkExist" !== e.type) {
      if (e.start) {
        page.saveScrollPos();
        var n = {
          x1: 0,
          x2: 32768,
          y1: 0,
          y2: 32765,
          scrollTop: $window.scrollTop(),
          scrollLeft: document.body.scrollLeft,
        };
        e.scroll ||
          ((n.x1 = window.scrollX),
          (n.y1 = window.scrollY),
          (n.x2 = window.innerWidth + n.x1),
          (n.y2 = window.innerHeight + n.y1)),
          (cropData = $.extend(n, e.cropData));
        const t = Math.pow(2, 15) - 100;
        cropData.y2 - cropData.y1 > t && (cropData.y2 = cropData.y1 + t),
          cropData.x2 - cropData.x1 > t && (cropData.x2 = cropData.x1 + t);
      }
      if ("takeCapture" === e.type) {
        var r = {};
        e.start &&
          (detect_zoom(),
          page.setVars(cropData),
          e.scroll && !e.showScrollBar && page.enableScrollbar(!1),
          e.scroll && e.processFixedElements && page.fixedElementCheck()),
          page.scrollToCurrent(),
          e.scroll &&
            e.processFixedElements &&
            setTimeout(function () {
              page.fixedElementCheck(),
                page.hideFixedElement(e.start ? "bottom" : "top"),
                r.finish &&
                  (page.showFixedElement("bottom"),
                  $window.scrollTop() < $window.height() &&
                    page.showFixedElement("top"));
            }, 50),
          (r.top = parseInt($window.scrollTop() - cropData.y1, 10)),
          (r.left = parseInt(document.body.scrollLeft - cropData.x1, 10)),
          (r.finish = !e.scroll || !page.computeNextScreen()),
          r.finish &&
          document.location.toString().includes("facebook") &&
          !0 === e.scroll &&
          null === e.cropData
            ? ((r.width = parseInt(cropData.x2 - cropData.x1, 10)),
              (r.height = cropData.y2 - cropData.y1 - page.windowHeight - 70),
              (r.url = document.location.toString()),
              (r.title = document.title))
            : r.finish &&
              ((r.height = parseInt(cropData.y2 - cropData.y1, 10)),
              (r.width = parseInt(cropData.x2 - cropData.x1, 10)),
              (r.url = document.location.toString()),
              (r.title = document.title)),
          (r._devicePixelRatio = devicePixelRatio),
          o(r);
      }
      "finish" === e.type && page.restore(),
        "captureRegion" === e.data
          ? load_cropper_without_selection()
          : "editContent" === e.data &&
            (alert("Now you can edit this page"), (document.designMode = "on"));
    } else o();
  },
};
chrome.runtime.onMessage.addListener(page.onRequest),
  chrome.runtime.onMessage.addListener(function (e, t, o) {
    "ping" == e.type && o({ res: "pong" });
  }),
  chrome.runtime.onMessage.addListener(function (e, t, o) {
    if (
      ("runContentCamera" == e.type && runCamera(),
      "stopContentCameraInIframe" === e.type)
    ) {
      if (!iframeWithCamera) return;
      iframeWithCamera.contentWindow.postMessage(
        JSON.stringify({ action: "stop" }),
        "*"
      ),
        setTimeout(() => iframeWithCamera.remove(), 0);
    }
  });
