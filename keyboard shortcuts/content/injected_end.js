"use strict";
(VApi.e = function (n) {
  var i,
    o,
    t = VimiumInjector;
  6 === n &&
    t &&
    ((i = removeEventListener),
    (o = t.checkIfEnabled) && (i("hashchange", o), i("hashchange", o, true)),
    (t.alive = 0),
    (t.destroy = t.checkIfEnabled = t.getCommandCount = null),
    (t.$ = t.$r = t.$m = null),
    (t.clickable = null),
    t.callback && t.callback(3, "destroy"));
}),
  (function () {
    function n() {
      r && VApi && (VApi.d(9), VApi.y().w());
    }
    var i,
      o,
      t,
      e,
      r = !!0,
      c = VApi,
      u = VimiumInjector,
      l = chrome.runtime,
      m = function (n) {
        var o,
          t = VimiumInjector;
        return t.eval && (o = t.eval(n)) !== n
          ? o
          : (i =
              i ||
              new Promise(function (n) {
                var i = document.createElement("script");
                (i.src = ""
                  .concat(location.protocol, "//")
                  .concat(t.host || t.id, "/lib/simple_eval.js")),
                  (i.onload = function () {
                    i.remove(), n();
                  }),
                  (document.head || document.documentElement).appendChild(i);
              })).then(function () {
              return VApi.v !== m
                ? (VApi.v = VApi.v.tryEval || VApi.v)(n)
                : void 0;
            });
      },
      a = [],
      p = c.r;
    p[0](29, 0, function (n) {
      (a = n), VApi.z && VimiumInjector.$r(4);
    }),
      p[2](2, function (n, i) {
        return i
          ? a[n].replace(/\$\d/g, function (n) {
              return "string" == typeof i ? i : i[+n[1] - 1];
            })
          : a[n];
      }),
      (o =
        top !== window &&
        (function () {
          try {
            return frameElement;
          } catch (n) {}
        })() &&
        parent.VimiumInjector),
      (t = u.clickable = (o && o.clickable) || u.clickable) && p[2](1, t),
      (u.checkIfEnabled = function (n) {
        n({ H: 8, u: location.href });
      }.bind(null, p[1])),
      (u.getCommandCount = function (n) {
        var i = n(0);
        return "-" !== i ? parseInt(i, 10) || 1 : -1;
      }.bind(null, p[2])),
      (p[1] = p[2] = void 0),
      r && (window.VApi = c),
      l.onMessageExternal
        ? (u.alive = 1)
        : ((u.alive = 0.5),
          console.log(
            "%cVimium C%c: injected %cpartly%c into %c%s",
            "color:red",
            "color:auto",
            "color:red",
            "color:auto",
            "color:#0c85e9",
            l.id || location.host,
            "."
          )),
      (e = 0),
      (u.$r = function (i) {
        var o;
        if (1 !== i) {
          if (r)
            switch (i) {
              case 2:
                return e && clearTimeout(e), void (e = setTimeout(n, 340));
              case 3:
                return void clearTimeout(e);
            }
          return 4 === i
            ? (((o = VimiumInjector).cache = VApi.z),
              void (
                a && ((VApi.v = m), o.callback && o.callback(2, "complete"))
              ))
            : void 0;
        }
        (o = VimiumInjector) && o.reload(1);
      }),
      (u.$ = c),
      (u.cache = c.z),
      (u.destroy = c.d),
      u.callback && u.callback(1, "initing"),
      c.z && u.$r(4);
  })();
