"use strict";
"undefined" == typeof globalThis && (window.globalThis = window),
  (globalThis.__filename = null),
  (function () {
    var n = {},
      i = function (n) {
        return n.slice(n.lastIndexOf("/") + 1).replace(".js", "");
      },
      o = function (n, i, o, r) {
        o.bind(null, e, r).apply(null, i.slice(2).map(t));
      },
      t = function (o) {
        o = i(o);
        var t = n[o];
        return t
          ? t instanceof Promise
            ? t.__esModule || (t.__esModule = {})
            : t
          : (n[o] = {});
      },
      e = function (o, t) {
        var r = o[0],
          u = i(r),
          c =
            n[u] ||
            (n[u] = new Promise(function (n) {
              var i = document,
                o = i.createElement("script");
              (o.src = r),
                (o.onload = function () {
                  n(), o.remove();
                }),
                (i.body || i.documentElement).appendChild(o);
            }));
        c instanceof Promise
          ? c.then(function () {
              e([r], t);
            })
          : t(c);
      };
    (globalThis.define = function (t, e) {
      var r,
        u = i(__filename || document.currentScript.src),
        c = n[u];
      c && c instanceof Promise
        ? ((r = c.then(function () {
            (n[u] = c), o(0, t, e, c);
          })),
          (c = r.__esModule = c.__esModule || {}),
          (n[u] = r))
        : o(0, t, e, c || (n[u] = {}));
    }),
      (globalThis.__importStar = function (n) {
        return n;
      });
  })(),
  Object.entries ||
    ((Object.entries = function (n) {
      var i,
        o = [];
      for (i of Object.keys(n)) o.push([i, n[i]]);
      return o;
    }),
    Object.values ||
      (Object.values = function (n) {
        var i,
          o = [];
        for (i of Object.keys(n)) o.push(n[i]);
        return o;
      })),
  ![].includes &&
    Object.defineProperty(Array.prototype, "includes", {
      enumerable: false,
      value: function includes(n, i) {
        return this.indexOf(n, i) >= 0;
      },
    }),
  (globalThis.__awaiter = function (n, i, o, t) {
    return (
      (e = t),
      new Promise(function (n) {
        var i = n.bind(0, void 0),
          o = e(),
          t = function (e) {
            var r = o.next(e);
            Promise.resolve(r.value).then(r.done ? n : t, i);
          };
        t();
      })
    );
    var e;
  });
