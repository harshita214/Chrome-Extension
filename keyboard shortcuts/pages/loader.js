"use strict";
var VApi,
  VimiumInjector = null;
(function () {
  var n,
    o,
    t,
    e,
    u,
    c,
    r,
    i,
    a,
    m = chrome;
  for (r of ((n = document.currentScript),
  (t = n.parentElement),
  (e = [n]),
  (u = m.runtime.getURL("")),
  (c = location.pathname.replace("/pages/", "").split(".")[0]),
  m.runtime.getManifest().content_scripts[0].js))
    ((i = document.createElement("script")).async = false),
      (i.src = "/" === r[0] || 0 === r.lastIndexOf(u, 0) ? r : "/" + r),
      e.push(i);
  (e[e.length - 1].onload = function () {
    for (var n = e.length; 0 <= --n; ) e[n].remove();
    VApi &&
      ((VApi.$r = function (n) {
        4 === n && document.dispatchEvent(new CustomEvent("VimiumC"));
      }),
      (VApi.v = function n(t) {
        return (o =
          o ||
          new Promise(function (n) {
            var o = document.createElement("script");
            (o.src = "/lib/simple_eval.js"),
              (o.onload = function () {
                o.remove(), n();
              }),
              document.head.appendChild(o);
          })).then(function () {
          return VApi.v !== n ? (VApi.v = VApi.v.tryEval || VApi.v)(t) : void 0;
        });
      }));
  }),
    setTimeout(function () {
      for (var n of e) t.appendChild(n);
    }, 100),
    "blank" === c &&
      (m.storage.local.get("autoDarkMode", function (n) {
        var o,
          t = n && n.autoDarkMode;
        return (
          (false !== t && 1 !== t) ||
            ((o = document.head.querySelector("meta[name=color-scheme]")) &&
              (o.content = 1 === t ? "dark" : "light")),
          m.runtime.lastError
        );
      }),
      m.i18n.getMessage("lang1") &&
        (a = m.i18n.getMessage("vblank")) &&
        (document.title = a));
})();
