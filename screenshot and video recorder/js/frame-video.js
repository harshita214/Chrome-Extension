!(function () {
  let t, e;
  window.addEventListener("message", function (a) {
    try {
      let o = JSON.parse(a.data);
      o &&
        "createVideoFrame" === o.action &&
        ((e = document.createElement("video")),
        e.setAttribute("preload", "auto"),
        e.setAttribute("autoplay", "true"),
        e.setAttribute("loop", "true"),
        e.setAttribute("muted", "muted"),
        e.setAttribute("height", "200px"),
        document.body.appendChild(e),
        window.navigator.getUserMedia(
          o.value,
          function (a) {
            (e.onloadedmetadata = function () {
              window.parent.postMessage(
                JSON.stringify({
                  action: "createVideoFrame",
                  value: { w: e.videoWidth, h: e.videoHeight },
                }),
                "*"
              );
            }),
              (e.srcObject = a),
              (t = a);
          },
          function (t) {}
        )),
        o && "stop" === o.action && t && t.getTracks().forEach((t) => t.stop());
    } catch (a) {}
  });
})();
