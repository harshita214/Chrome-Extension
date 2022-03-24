"use strict";
(__filename = "background/action_icon.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./i18n",
      "./browser",
      "./ports",
    ],
    function (n, t, e, i, a, u, r) {
      var o, l, c, s;
      Object.defineProperty(t, "__esModule", { value: true }),
        (t.ti = t.ei = void 0),
        (i = __importStar(i)),
        (o = [
          "/icons/enabled.bin",
          "/icons/partial.bin",
          "/icons/disabled.bin",
        ]),
        (t.ei = u.me.action || u.me.browserAction),
        (c = function (n) {
          fetch(o[n])
            .then(function (n) {
              return n.arrayBuffer();
            })
            .then(function (t) {
              var a,
                u,
                r,
                o = new Uint8ClampedArray(t),
                c = t.byteLength / 5,
                s = 0 | Math.sqrt(c / 4),
                f = s + s,
                b = i.It();
              for (
                b[s] = new ImageData(o.subarray(0, c), s, s),
                  b[f] = new ImageData(o.subarray(c), f, f),
                  e.Bn[n] = b,
                  a = l.get(n),
                  l.delete(n),
                  u = 0,
                  r = a.length;
                u < r;
                u++
              )
                e.Pn.has(a[u]) && e.x(a[u], n, true);
            });
        }),
        (t.ti = function () {
          var n,
            t,
            i = e.Gn;
          i !== !!e.Bn &&
            (e.C(i ? s : e.B),
            (n = function (n) {
              var t = n.cr.s;
              0 !== t.nt && e.x(t.ur, i ? t.nt : 0);
            }),
            (t = function () {
              return e.Gn === i;
            }),
            i
              ? (e.J([null, null, null]), (l = new Map()), r.eo(n, t))
              : setTimeout(function () {
                  e.Gn || null == e.Bn || (e.J(null), (l = null));
                }, 200));
        }),
        (s = function (n, i, a) {
          var r, o, s;
          n < 0 ||
            ((r = e.Bn[i])
              ? ((o = t.ei.setIcon),
                (s = { tabId: n, imageData: r }),
                a ? o(s, u.ae) : o(s))
              : l.has(i)
              ? l.get(i).push(n)
              : (setTimeout(c, 0, i), l.set(i, [n])));
        }),
        t.ti();
    }
  );
