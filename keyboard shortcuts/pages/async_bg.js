"use strict";
(__filename = "pages/async_bg.js"),
  define(["require", "exports"], function (n, e) {
    var t, o, u, r, i, l, c, a, f, s, d, m, v, h, p, g, b, y, w, K, k, q, C;
    Object.defineProperty(e, "__esModule", { value: true }),
      (e.simulateClick =
        e.h =
        e.ti =
        e.a =
        e.fetch =
        e.import2 =
        e.T =
        e.m =
        e.toggleReduceMotion =
        e.toggleDark =
        e.$$ =
        e.$ =
        e.an =
        e.v =
        e.fn =
        e.nn =
        e.zt =
        e.dn =
        e.dt =
        e.sn =
        e.OnSafari =
        e.OnEdge =
        e.OnFirefox =
        e.OnChrome =
          void 0),
      (e.OnChrome = !0),
      (e.OnFirefox = !!0),
      (e.OnEdge = !!0),
      (e.OnSafari = false),
      (t = navigator.userAgentData),
      (e.sn = t
        ? !!t.brands.find(function (n) {
            return n.brand.includes("Edge") || n.brand.includes("Microsoft");
          })
        : matchMedia("(-ms-high-contrast)").matches),
      (e.dt = t
        ? (o = t.brands.find(function (n) {
            return n.brand.includes("Chromium");
          }))
          ? o.version
          : 90
        : (K = navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))
        ? 75 == +K[1] && matchMedia("(prefers-color-scheme)").matches
          ? 81
          : 0 | K[1]
        : 998),
      (e.dn = 999),
      (e.zt = chrome),
      (e.nn = new Promise(function (n) {
        addEventListener(
          "VimiumC",
          function t() {
            e.dt < 55 && removeEventListener("VimiumC", t, { capture: true }),
              e.T(n);
          },
          { once: true, capture: true }
        );
      })),
      (u = 4),
      (r = new Map()),
      (i = null),
      (l = null),
      (c = Object.create(null)),
      (a = 1),
      (f = null),
      (e.fn = -1),
      (s = function (n) {
        var e, t, o;
        if (false !== n) {
          for (e = c[n.i], delete c[n.i], t = n.a, o = 0; o < e.length; o++)
            e[o](t[o]);
          VApi && f && 0 === Object.keys(c).length && h();
        } else alert("Can not send info to the background: not trusted");
      }),
      (d = function () {
        var n, e, t;
        for (n in ((f = null), (i = []), (l = []), c))
          for (t of ((e = c[n]), delete c[n], e))
            try {
              t(null);
            } catch (n) {}
        i = l = null;
      }),
      (m = function (n) {
        var t, o, u, r, v;
        i &&
          ((t = VApi),
          (o = i.length) > (n || 1)
            ? p(m.bind(null, o))
            : (t && f && 0 === Object.keys(c).length && h(),
              0 !== n
                ? ((u = a++),
                  (c[u] = l),
                  (l = null),
                  (v = (r = e.zt.extension.getBackgroundPage) && r()) &&
                  v.onPagesReq
                    ? v.onPagesReq({ i: u, q: i }).then(s)
                    : t
                    ? t.r[0](37, { i: u, q: i }, s)
                    : (f ||
                        ((f = e.zt.runtime.connect({
                          name: "64",
                        })).onMessage.addListener(s),
                        f.onDisconnect.addListener(d)),
                      f.postMessage({ H: 37, i: u, q: i })),
                  (i = null))
                : (i = l = null)));
      }),
      (e.v = function (n, e) {
        return new Promise(function (t) {
          i || v(), i.push({ n: n, q: void 0 !== e ? e : null }), l.push(t);
        });
      }),
      (e.an = v =
        function () {
          i || ((i = []), (l = []), p(m));
        }),
      (h = function () {
        var n = f;
        (f = null),
          n &&
            (n.onDisconnect.removeListener(d),
            n.onMessage.removeListener(s),
            n.disconnect());
      }),
      (p = function (n) {
        Promise.resolve().then(n);
      }),
      (e.$ = function (n) {
        return document.querySelector(n);
      }),
      (e.$$ = function (n, t) {
        var o = (t || document).querySelectorAll(n);
        return e.dt < 51 ? [].slice.call(o) : o;
      }),
      (e.toggleDark = function (n) {
        var e,
          t = document.head.querySelector("meta[name=color-scheme]"),
          o = 2 === n ? "light dark" : 1 === n ? "dark" : "light";
        t.content !== o &&
          ((t.content = o),
          (e = document.documentElement.classList).toggle("no-dark", !n),
          e.toggle("dark", 1 === n));
      }),
      (e.toggleReduceMotion = function (n) {
        document.documentElement.classList.toggle("less-motion", n);
      }),
      (e.T =
        ((k = function () {
          var n,
            e = q.length;
          for (n = 0; n < e; n++) q[n]();
          q.length > e ? (q.splice(0, e), p(k)) : (q.length = 0);
        }),
        (q = []),
        (e.m = function (n, e) {
          7 == (u = (u | n) & ~(e || 0)) && p(k);
        }),
        function (n, e) {
          q.length <= 0 && 7 === u && p(k),
            9 === e ? q.unshift(n) : q.push(e ? n.bind(null, e) : n);
        })),
      (e.import2 = function (n) {
        return define([n]);
      }),
      (e.fetch = function (n, e) {
        return (0, globalThis.fetch)(n, e);
      }),
      (e.a = function (n, e) {
        var t = r.get(n);
        return (
          null != e &&
            t &&
            (t = t.replace(/\$\d/g, function (n) {
              return e[+n[1] - 1];
            })),
          t
        );
      }),
      (g = function (n, e) {
        return (
          n &&
          n.split(" ").reduce(function (n, t) {
            return (
              n ||
              (t.includes("=")
                ? t.startsWith(e)
                  ? t.slice(e.length + 1)
                  : n
                : t)
            );
          }, "")
        );
      }),
      (e.ti = e.zt.i18n.getMessage),
      (b = location.pathname.replace("/pages/", "").split(".")[0]),
      (y = e.ti("lang1")),
      (e.h = g(e.ti("i18n"), b) || y || "en"),
      Promise.all(
        e.h.split(",").map(function (n) {
          var t = "/i18n/"
            .concat(n, "/")
            .concat("show" === b ? "popup" : b, ".json");
          return e
            .fetch(t)
            .then(function (n) {
              return n.json();
            })
            .catch(function (n) {
              return (
                console.log("Can not load the language file:", t, ":", n), null
              );
            });
        })
      ).then(function (n) {
        var t,
          o,
          u = r;
        for (t of n.reverse()) if (t) for (o in t) u.set(o, t[o]);
        e.m(2);
      }),
      (C = function (n, e) {
        return new Promise(function (t) {
          var o = t.bind(0, void 0),
            u = n.call(e),
            r = function (n) {
              var e = u.next(n);
              Promise.resolve(e.value).then(e.done ? t : r, o);
            };
          r();
        });
      }),
      (globalThis.__awaiter = function (n, e, t, o) {
        return C(o, n);
      }),
      e.dt > 75 &&
        e.zt.storage.local.get("autoDarkMode", function (n) {
          var t = n && n.autoDarkMode;
          return (
            (false === t || 1 === t) && e.toggleDark(t ? 1 : 0),
            e.zt.runtime.lastError
          );
        }),
      y &&
        "popup" !== b &&
        (w = e.ti("v" + b)) &&
        (document.title = "Vimium C " + w),
      "options" === b &&
        e.nn.then(function () {
          VApi.r[0](37, { i: 1, q: [{ n: 26, q: null }] }, function (n) {
            false !== n && (e.fn = n.a[0]);
          });
        }),
      (e.simulateClick = function (n, e) {
        var t;
        return (
          (e = e || {
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
          }),
          (t = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            composed: !0,
            view: window,
            detail: 1,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
            button: 0,
            buttons: 1,
            relatedTarget: null,
          })),
          n.dispatchEvent(t)
        );
      }),
      "undefined" == typeof VApi && (globalThis.VApi = void 0);
  });
