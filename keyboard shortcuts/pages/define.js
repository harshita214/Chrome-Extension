"use strict";
"undefined" == typeof globalThis && (window.globalThis = window),
  (function () {
    var n =
        "cache" in Request.prototype
          ? [0, 998]
          : navigator.appVersion.match(/\bChrom(?:e|ium)\/(\d+)/),
      e = (n && +n[1]) || 0,
      t = {},
      i = function (n) {
        return n.slice(n.lastIndexOf("/") + 1).replace(".js", "");
      },
      o = function (n, e) {
        var o,
          r,
          c,
          a,
          l,
          s = ("function" != typeof n && n) || [],
          d = "function" == typeof n ? n : e;
        if (!d) return new Promise(f.bind(null, s[0], null));
        (r =
          null != (o = document.currentScript)
            ? o.src
            : 0 === __filename.lastIndexOf("pages/", 0)
            ? "/" + __filename
            : __filename),
          (c = i(r)),
          (a = t[c]) && a instanceof Promise
            ? ((l = a.then(function () {
                (t[c] = a), u(c, s, d, a);
              })),
              (a = l.__esModule = a.__esModule || {}),
              (t[c] = l))
            : u(c, s, d, a || (t[c] = {}));
      },
      u = function (n, e, t, i) {
        var o = t.bind(null, r, i).apply(null, e.slice(2).map(c));
        o && (i.__default = o);
      },
      r = function () {
        throw new Error("Must avoid dynamic import in content scripts");
      },
      c = function (n) {
        n = i(n);
        var e = t[n];
        return (
          (e = e
            ? e instanceof Promise
              ? e.__esModule || (e.__esModule = {})
              : e
            : (t[n] = {})).__default || e
        );
      },
      f = function (n, e, o) {
        var u = i(n),
          r =
            t[u] ||
            (t[u] = new Promise(function (t) {
              var i = document.createElement("script");
              (i.src = n),
                (i.onload = function () {
                  e ? e.then(t) : t(), i.remove();
                }),
                document.head.appendChild(i);
            }));
        return (
          o &&
            (r instanceof Promise
              ? r
                  .then(function () {})
                  .then(function () {
                    f(n, null, o);
                  })
              : o(c(u))),
          r
        );
      };
    (o.amd = true),
      (o.noConflict = function () {}),
      (globalThis.define = o),
      (globalThis.__filename = void 0),
      e < 63 &&
        addEventListener(
          "DOMContentLoaded",
          function n() {
            var e, t, i, o;
            if (
              (removeEventListener("DOMContentLoaded", n, true),
              void 0 === __filename &&
                0 !==
                  (e = document.querySelectorAll("script[type=module]")).length)
            )
              for (
                t = location.origin.length, i = null, o = 0;
                o < e.length;
                o++
              )
                e[o].remove(), (i = f(e[o].src.slice(t), i));
          },
          { once: true }
        );
  })(),
  !Object.values &&
    ((Object.values = function (n) {
      return Object.keys(n).map(function (e) {
        return n[e];
      });
    }),
    [].includes ||
      Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function includes(n, e) {
          return this.indexOf(n, e) >= 0;
        },
      }));
