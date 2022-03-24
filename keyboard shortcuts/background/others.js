"use strict";
(__filename = "background/others.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./browser",
      "./utils",
      "./settings",
      "./i18n",
      "./normalize_urls",
      "./normalize_urls",
      "./open_urls",
    ],
    function (e, n, t, o, i, r, u, l, a, c) {
      Object.defineProperty(n, "__esModule", { value: true }),
        (i = __importStar(i)),
        (r = __importStar(r));
      var s,
        f,
        m,
        d,
        p,
        g,
        v,
        b = (t.Vn.showActionIcon = function (e) {
          var n,
            i = o.me.action || o.me.browserAction;
          i
            ? (t.z(e),
              o.import2("/background/action_icon.js").then(function (e) {
                e.ti();
              }),
              (n = u.jr("name")),
              e || (n += "\n\n" + u.jr("noActiveState")),
              i.setTitle({ title: n }))
            : (t.Vn.showActionIcon = void 0);
        });
      r.Ve("showActionIcon") ? b(true) : t.C(t.B),
        setTimeout(function () {
          new Promise(function (n, t) {
            e(["/background/sync.js"], n, t);
          }).then(__importStar);
        }, 100),
        (function () {
          function e() {
            h && (h.To = null),
              (y = S = h = _ = null),
              D && clearTimeout(D),
              T && clearTimeout(T),
              (M = k = U = D = T = 0),
              (w = ""),
              i.Dt();
          }
          function n() {
            var t = Date.now() - M;
            if (t > 5e3 || t < -5e3) return e();
            D = setTimeout(n, 3e4);
          }
          function r() {
            var e, n;
            if (((T = 0), (e = h) && !e.yo))
              return (
                (h = null),
                e.To
                  ? ((n = Date.now()) < M && (M = n - 1e3), f(e.Br, e.To))
                  : void 0
              );
          }
          function s(e, n, r, u, l) {
            var c, s, f, m, p, v, T, P, D, M, C, F, I, O, V, q, x;
            if (e.To) {
              for (
                h = null,
                  c = n.length > 0 ? n[0] : null,
                  k = u,
                  U = l,
                  S = [],
                  f = new Set(),
                  m = " ".concat(t.Jn.s, " ").includes(" type-letter "),
                  p = 0,
                  v = r ? 0 : 1,
                  T = n.length;
                p < T;
                p++
              )
                (D = (P = n[p]).title),
                  (C = P.e),
                  (I = ""),
                  (O = null != P.s),
                  (V =
                    b &&
                    !(r && 0 === p) &&
                    ("tab" === C ? P.s !== t.jn : "history" === C && !O)),
                  (F = (F = i.kt((F = M = P.u), 1)).startsWith("file")
                    ? a.pe(F)
                    : F.replace(/%20/g, " ")),
                  f.has(F) ? (F = ":".concat(p + v, " ").concat(F)) : f.add(F),
                  V && (I = " ~".concat(p + v, "~")),
                  (q = {
                    content: F,
                    description: (I =
                      (D || m
                        ? (D ? D + " <dim>" : "<dim>") +
                          (m ? "[".concat(P.e[0].toUpperCase(), "] ") : "") +
                          (D ? "-</dim> <url>" : "</dim><url>")
                        : "<url>") +
                      P.textSplit +
                      "</url>" +
                      (I && "<dim>".concat(I, "</dim>"))),
                  }),
                  V && (q.deletable = true),
                  (V || O) &&
                    (y || (y = new Map()),
                    y.has(F) || y.set(F, { Po: C, Ni: O ? P.s : null, Ce: M })),
                  S.push(q);
              (_ = e.Br),
                r
                  ? "search" === c.e
                    ? ((s =
                        ((x = c.p) && "<dim>".concat(i.$t(x) + d, "</dim>")) +
                        "<url>".concat(c.textSplit, "</url>")),
                      (j = 2),
                      (c = n[1]) &&
                        "math" === c.e &&
                        (S[1].description = ""
                          .concat(c.textSplit, " = <url><match>")
                          .concat(c.t, "</match></url>")))
                    : ((j = 3), (s = S[0].description))
                  : 1 !== j &&
                    ((s = "<dim>".concat(g, "</dim><url>%s</url>")), (j = 1)),
                r &&
                  ((w = n[0].u),
                  y &&
                    S.length > 0 &&
                    w !== S[0].content &&
                    y.set(w, y.get(S[0].content)),
                  S.shift()),
                s &&
                  o.me.omnibox.setDefaultSuggestion({
                    description: s,
                  }),
                e.To(S),
                i.Dt();
            } else h === e && (h = null);
          }
          function f(e, o) {
            var i, u, l, a;
            (e = F(e)),
              (h && ((h.To = (i = e === h.Br) ? o : null), i)) ||
                (e !== _
                  ? 1 === k && e.startsWith(_)
                    ? o([])
                    : ((h = { To: o, Br: e, yo: false }),
                      T ||
                        ((u = Date.now()),
                        (l = t.Jn.t + M - u) > 30 && l < 3e3
                          ? (T = setTimeout(r, l))
                          : ((h.yo = true),
                            D || (D = setTimeout(n, 3e4)),
                            (M = u),
                            (y = S = null),
                            (w = ""),
                            (a =
                              k < 2 || !e.startsWith(_)
                                ? 0
                                : 3 === k
                                ? e.includes(" ")
                                  ? 0
                                  : 8
                                : U),
                            t.y._u(
                              e,
                              { o: "omni", t: a, r: C, c: P, f: 1 },
                              s.bind(null, h)
                            ))))
                  : S && o(S));
          }
          function m(e, n, o) {
            return (
              e
                ? ":" === e[0] &&
                  /^:([1-9]|1[0-2]) /.test(e) &&
                  (e = e.slice(" " === e[2] ? 3 : 4))
                : (e = l.$e("")),
              "file://" === e.slice(0, 7).toLowerCase() &&
                (e =
                  /\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)$/i.test(
                    e
                  )
                    ? l.ge("show image " + e, false, 0)
                    : e),
              null != o
                ? t.In[5]({ s: o })
                : c.openUrlReq({
                    u: e,
                    r:
                      "currentTab" === n
                        ? 0
                        : "newForegroundTab" === n
                        ? -1
                        : -2,
                  })
            );
          }
          var d,
            p,
            g,
            v,
            b,
            _,
            w,
            h,
            T,
            y,
            P,
            S,
            D,
            M,
            j,
            k,
            U,
            C,
            F,
            I = o.me.omnibox;
          I &&
            ((d = ": "),
            (p = false),
            (g = "Open: "),
            (b =
              !!(v = I.onDeleteSuggestion) &&
              "function" == typeof v.addListener),
            (_ = null),
            (w = ""),
            (h = null),
            (T = 0),
            (y = null),
            (P = 128),
            (S = null),
            (D = 0),
            (j = 0),
            (k = 0),
            (U = 0),
            (C = t.Wn < 60 ? 6 : 12),
            (F = function (e) {
              if (
                ((e = e.trim().replace(i.Bt, " ")),
                t.Un.vomnibarOptions.actions.includes("icase"))
              ) {
                var n = /^:[WBH] /.test(e) ? 3 : 0;
                e = n
                  ? e.slice(0, n) + e.slice(n).toLowerCase()
                  : e.toLowerCase();
              }
              return e;
            }),
            I.onInputStarted.addListener(function () {
              if (
                (o.getCurWnd(false, function (e) {
                  var n = e && e.width;
                  P = n ? Math.floor((n - 160 / devicePixelRatio) / 7.72) : 128;
                }),
                p ||
                  ((p = true),
                  "en" !== u.gr() &&
                    Promise.resolve(u._r("colon")).then(function (e) {
                      (d = e + u._r("NS") || d), (g = u._r("OpenC") || g);
                    })),
                D)
              )
                return e();
            }),
            I.onInputChanged.addListener(f),
            I.onInputEntered.addListener(function n(o, i) {
              var u,
                l,
                a = h;
              if (a && a.To) {
                if (((a.To = n.bind(null, o, i)), a.yo)) return;
                return T && clearTimeout(T), r();
              }
              return (
                (o = F(o)),
                null === _ && o
                  ? t.y._u(
                      o,
                      { o: "omni", t: 0, r: 3, c: P, f: 1 },
                      function (e, n) {
                        return n ? m(e[0].u, i, e[0].s) : m(o, i);
                      }
                    )
                  : (w && o === _ && (o = w),
                    (l =
                      null == (u = null == y ? void 0 : y.get(o))
                        ? void 0
                        : u.Ni),
                    e(),
                    m(u ? u.Ce : o, i, l))
              );
            }),
            b &&
              v.addListener(function (e) {
                var n =
                    parseInt(e.slice(e.lastIndexOf("~", e.length - 2) + 1)) - 1,
                  o = S && S[n].content,
                  i = o && y ? y.get(o) : null,
                  r = i && i.Po;
                r
                  ? t.In[22](
                      {
                        t: r,
                        s: i.Ni,
                        u: i.Ce,
                      },
                      null
                    )
                  : console.log(
                      "Error: want to delete a suggestion but no related info found (may spend too long before deleting)."
                    );
              }));
        })(),
        (s = 0),
        (f = false),
        (m = 0),
        (d = t.Xn ? "edge:" : "chrome:"),
        (p = t.Xn ? "" : d + "//newtab/"),
        (g = t.Xn ? "" : d + "//new-tab-page/"),
        (v = function (e) {
          0 === e.frameId &&
            e.url.startsWith(d) &&
            s & (e.url.startsWith(p) || e.url.startsWith(g) ? 2 : 1) &&
            !m &&
            o.ne(e.tabId);
        }),
        o.ee(
          [
            {
              origins: ["chrome://*/*"],
            },
            t.Wn > 79 && !t.Xn
              ? { origins: ["chrome://new-tab-page/*"] }
              : null,
          ],
          function e(n) {
            if (
              (1 & (s = (n[0] ? 1 : 0) + (n[1] ? 2 : 0)) &&
                !r.Ve("allBrowserUrls") &&
                (s ^= 1),
              f !== !!s)
            ) {
              var i = o.ce();
              if (!i) return false;
              i.onCommitted[(f = !f) ? "addListener" : "removeListener"](v);
            }
            (m =
              m ||
              (s &&
                setTimeout(function () {
                  s
                    ? o.ve.query({ url: d + "//*/*" }, function (e) {
                        for (var n of ((m = 0), e || []))
                          !t.Pn.has(n.id) &&
                            s &
                              (n.url.startsWith(p) || n.url.startsWith(g)
                                ? 2
                                : 1) &&
                            o.ne(n.id);
                        return o.ae();
                      })
                    : (m = 0);
                }, 120))),
              s &&
                !t.Vn.allBrowserUrls &&
                (t.Vn.allBrowserUrls = e.bind(null, n, false));
          }
        ),
        t.Kn &&
          t.Kn.then(function (e) {
            var n = e.reason;
            if ("install" === n) n = "";
            else {
              if ("update" !== n) return;
              n = e.previousVersion;
            }
            setTimeout(function () {
              o.ve.query({ status: "complete" }, function (e) {
                var n,
                  t = /^(file|ftps?|https?):/;
                for (n of e) t.test(n.url) && o.ne(n.id);
              }),
                console.log(
                  "%cVimium C%c has been %cinstalled%c with %o at %c%s%c.",
                  "color:red",
                  "color:auto",
                  "color:#0c85e9",
                  "color:auto",
                  e,
                  "color:#0c85e9",
                  new Date(Date.now() - 6e4 * new Date().getTimezoneOffset())
                    .toJSON()
                    .slice(0, -5)
                    .replace("T", " "),
                  "color:auto"
                ),
                t.u._t &&
                  console.log(
                    "Sorry, but some commands of Vimium C require the permission to run in incognito mode."
                  ),
                n
                  ? (r.Qe("vomnibarPage"),
                    parseFloat(t.u.pt) <= parseFloat(n) ||
                      (t.S ? t.S(6e3) : t.e(true),
                      r.Qe("newTabUrl"),
                      r.Ve("notifyUpdate") &&
                        ((n = "vimium_c-upgrade-notification"),
                        Promise.all([
                          u._r("Upgrade"),
                          u._r("upgradeMsg", [t.u.ht]),
                          u._r("upgradeMsg2"),
                          u._r("clickForMore"),
                        ]).then(function (e) {
                          var i,
                            r = {
                              type: "basic",
                              iconUrl: location.origin + "/icons/icon128.png",
                              title: "Vimium C " + e[0],
                              message: e[1] + e[2] + "\n\n" + e[3],
                            };
                          t.Wn < 67 && (r.isClickable = true),
                            t.Wn >= 70 && (r.silent = true),
                            (i = o.me.notifications) &&
                              i.create(n, r, function (e) {
                                var r;
                                if ((r = o.ae())) return r;
                                (n = e || n),
                                  i.onClicked.addListener(function e(o) {
                                    o === n &&
                                      (i.clear(n),
                                      t.In[20]({
                                        u: l.$e("vimium://release"),
                                      }),
                                      i.onClicked.removeListener(e));
                                  });
                              });
                        }))))
                  : ((t.O && t.O()) || Promise.resolve())
                      .then(function () {
                        return t.Nn
                          ? new Promise(function (e) {
                              return setTimeout(e, 200);
                            })
                          : 0;
                      })
                      .then(function () {
                        t.In[20]({ u: t.u.gt + "#commands" });
                      });
            }, 500);
          }),
        setTimeout(function () {
          (globalThis.document.body.innerHTML = ""), i.Dt();
        }, 1e3);
    }
  );
