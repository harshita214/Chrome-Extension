"use strict";
(__filename = "background/i18n.js"),
  define(
    ["require", "exports", "./store", "./utils", "./browser"],
    function (n, r, u, t, e) {
      var i, o, c, f, a, l, s, d;
      Object.defineProperty(r, "__esModule", { value: true }),
        (r.br = r.getI18nJson = r.gr = r.$r = r._r = r.jr = r.kr = void 0),
        (o = 0),
        (r.kr = []),
        (r.jr = function (n, r) {
          return e.me.i18n.getMessage(n, r);
        }),
        (c = function (n, u) {
          if (1 === o) {
            var t = i.get(n);
            return null != u && t
              ? t.replace(/\$\d/g, function (n) {
                  return u[+n[1] - 1];
                })
              : t || "";
          }
          return (
            o || (o = r.getI18nJson("background")),
            o
              .then(function (n) {
                (i = n), (o = 1);
              })
              .then(r._r.bind(null, n, u))
          );
        }),
        (r._r = c),
        (f = function (n, r) {
          return n.endsWith(r);
        }),
        (a = function (n, u) {
          var t = "i18n" === n ? r.jr(n) : n;
          return (
            t &&
            t.split(" ").reduce(function (n, r) {
              return (
                n ||
                (r.includes("=")
                  ? r.startsWith(u)
                    ? r.slice(u.length + 1)
                    : n
                  : r)
              );
            }, "")
          );
        }),
        (r.$r = a),
        (l = function (n) {
          return r.$r("i18n", n || "background") || r.jr("lang1") || "en";
        }),
        (r.gr = l),
        (s = function (n) {
          var u = f(n, ".json")
            ? n
            : "".concat(r.gr(n), "/").concat(n, ".json");
          return t.o("/i18n/".concat(u));
        }),
        (r.getI18nJson = s),
        (d = function () {
          var n,
            u = r.kr,
            t = ["$1", "$2", "$3", "$4"],
            i = e.me.i18n.getMessage;
          for (n = 0; n < 116; n++) u.push(i("" + n, t));
          r.br = null;
        }),
        (r.br = d);
    }
  );
