"use strict";
(__filename = "background/filter_tabs.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./ports",
      "./exclusions",
      "./run_commands",
    ],
    function (n, u, e, r, l, t, i, a) {
      var o, c, s, f;
      Object.defineProperty(u, "__esModule", { value: true }),
        (u.hu =
          u.mu =
          u.bu =
          u.mayRequireActiveTab =
          u.getNecessaryCurTabInfo =
          u.ku =
          u.getNearTabInd =
          u.pu =
          u.gu =
          u.getTabRange =
            void 0),
        (r = __importStar(r)),
        (i = __importStar(i)),
        (u.getTabRange = function (n, u, r, l) {
          return o(n, u, r, e.cRepeat, l, e.get_cOptions().limited);
        }),
        (o = function (n, u, e, r, l, t) {
          var i,
            a = r > 0;
          return (
            l && (r += a ? l : -l),
            (i = n + r) <= u && i > -2
              ? a
                ? [n, i]
                : [i + 1, n + 1]
              : false === t ||
                (null == t && (Math.abs(r) < 2 * (e || u) || r < 10))
              ? Math.abs(r) < u
                ? a
                  ? [u - r, u]
                  : [0, -r]
                : [0, u]
              : a
              ? [n, u]
              : [0, n + 1]
          );
        }),
        (c = function (n, r, t, i, o, c) {
          var s,
            f = function (i) {
              var c, s, f, d;
              if (!i || !i.length) return o(0), l.ae();
              (c = l.selectFrom(i).index),
                (f = (s = v
                  ? [0, i.length]
                  : u.getTabRange(c, i.length, 0, r))[0]),
                (d = s[1]),
                v &&
                  (a.overrideCmdOptions({ limited: false }, true),
                  a.overrideOption("$limit", e.cRepeat),
                  e.set_cRepeat(e.cRepeat > 0 ? 9999 : -9999)),
                t(
                  i,
                  n
                    ? [f, c, d]
                    : [
                        c + 1 === d || (e.cRepeat > 0 && f !== c) ? f : d - 1,
                        c,
                        d,
                      ],
                  o
                );
            },
            d = e.get_cOptions().filter,
            v = d && /(^|[&+])limit(ed)?=count\b/.test(d + "");
          i
            ? 0 === i.length || Math.abs(e.cRepeat) > 1 || v
              ? 0 === i.length || v || false
                ? ((s = i[0] ? i[0].windowId : e.Cn) >= 0
                    ? l.te(l.de.get, s, {
                        populate: true,
                      })
                    : l.te(l.getCurWnd, true)
                  ).then(function (n) {
                    f(n ? n.tabs : []);
                  })
                : f(i)
              : r
              ? i[0].index + e.cRepeat < 0
                ? l.le(f)
                : l.ve.query(
                    { windowId: i[0].windowId, index: i[0].index + e.cRepeat },
                    function (r) {
                      return (
                        r &&
                        r.length &&
                        (true === c || (l.fe(r[0]) && (!c || c(r[0])))) &&
                        (!d || u.mu(i[0], r, d).length > 0)
                          ? e.cRepeat < 0
                            ? t([r[0], i[0]], [0, 1, 2], o)
                            : t([i[0], r[0]], [n ? 0 : 1, 0, 2], o)
                          : l.le(f),
                        l.ae()
                      );
                    }
                  )
              : t(i, [0, 0, 1], o)
            : o(0);
        }),
        (u.gu = c),
        (u.pu = function () {
          var n = 0,
            u = -1;
          return (
            e.Sn.forEach(function (r, l) {
              r.i > n && l !== e.jn && ((n = r.i), (u = l));
            }),
            u
          );
        }),
        (u.getNearTabInd = function (n, u, e) {
          var r, l;
          for (r = n.length > 1 ? 0 : 1; r < n.length; r++)
            if ((l = n[r].index) > u || l === u)
              return e || l === u ? r : r > 0 ? r - 1 : 0;
          return n.length - 1;
        }),
        (u.ku = function (n, u) {
          1 === Math.abs(n)
            ? l.getCurTab(function (e) {
                var r = e[0].index + n;
                r >= 0
                  ? l.ve.query(
                      { windowId: e[0].windowId, index: r },
                      function (r) {
                        return (
                          r
                            ? u(n > 0 ? [e[0], r[0]] : [r[0], e[0]])
                            : l.getCurTabs(u),
                          l.ae()
                        );
                      }
                    )
                  : l.getCurTabs(u);
              })
            : l.getCurTabs(u);
        }),
        (s = function (n) {
          if (!n) return null;
          var e = u.mayRequireActiveTab(n);
          return e > 2
            ? l.te(l.getCurTab).then(function (n) {
                return (n && n[0]) || null;
              })
            : e
            ? Promise.resolve(t.rr(null, e > 1)).then(function (n) {
                return n ? { url: n } : null;
              })
            : null;
        }),
        (u.getNecessaryCurTabInfo = s),
        (u.mayRequireActiveTab = function (n) {
          var u,
            e,
            r,
            l,
            t = 0;
          for (u of (n + "").split(/[&+]/)) {
            if (
              ((r = (e = u.split("=", 1)[0]).includes(".") ? "" : e || u),
              (l = u.slice(r ? r.length + 1 : 0)),
              r && "same" === l && "hidden" !== r && !r.startsWith("discard"))
            )
              return 3;
            if (!l && r) {
              if (r.startsWith("title") || "group" === r) return 3;
              t = "hash" === r ? 2 : t || ("host" === r || "url" === r ? 1 : 0);
            }
          }
          return t;
        }),
        (f = function (n, u) {
          return "" === (n = n && n.toLowerCase()) || "1" === n || "true" === n
            ? !u || null
            : "only" === n || ("0" !== n && "false" !== n && null);
        }),
        (u.bu = function (n, u, e) {
          var r = n
              ? (n + "").split(/[&+]/).find(function (n) {
                  return n.startsWith(u);
                })
              : null,
            l = r ? r.slice(1 + u.length) : null;
          return null !== l ? f(l, e) : null;
        }),
        (u.mu = function (n, u, a, c) {
          var s,
            d,
            v,
            h,
            m,
            b,
            k,
            p,
            g,
            _,
            w,
            x,
            M,
            I,
            j,
            y,
            S,
            q,
            A = false,
            N = null,
            O = null,
            P = null,
            $ = null,
            z = 0,
            B = 0,
            C = null,
            D = null,
            E = null;
          for (b of (a + "").split(/[&+]/))
            switch (
              ((p = (k = b.split("=", 1)[0]).includes(".") ? "" : k || b),
              (_ =
                (g = b.slice(
                  p ? p.length + ("=" === b.charAt(p.length + 1) ? 2 : 1) : 0
                )) && r.zt(g)),
              z++,
              p)
            ) {
              case "title":
              case "title*":
                d = _ || (n && n.title) || void 0;
                break;
              case "url":
              case "hash":
                "url" === p && _
                  ? (v = i.Vt(_))
                  : ((w = n ? l.getTabUrl(n) : null),
                    (A = A || "hash" === p),
                    (v = w ? i.Vt(":" + (A ? w : w.split("#", 1)[0])) : null));
                break;
              case "host":
              case "":
                h =
                  _ ||
                  (p && n
                    ? null === (s = r.Rt(l.getTabUrl(n))) || void 0 === s
                      ? void 0
                      : s.host
                    : "");
                break;
              case "discarded":
              case "discard":
                E = "same" !== _ && f(_, 1);
                break;
              case "group":
                m =
                  _ ||
                  (n
                    ? null != l.getGroupId(n)
                      ? l.getGroupId(n) + ""
                      : null
                    : void 0);
                break;
              case "hidden":
                N = null;
                break;
              case "highlight":
              case "highlighted":
                D = "same" === _ ? (n ? n.highlighted : null) : f(_);
                break;
              case "incognito":
              case "incognito":
                C = "same" === _ ? (n ? n.incognito : null) : f(_);
                break;
              case "pinned":
                $ = "same" === _ ? (n ? n.pinned : null) : f(_, 1);
                break;
              case "mute":
              case "muted":
                O = "same" === _ ? (n ? l.isTabMuted(n) : null) : f(_);
                break;
              case "audible":
              case "audio":
                P = "same" === _ ? (n ? n.audible : null) : f(_);
                break;
              case "limit":
              case "limited":
                B =
                  "count" === _
                    ? e.get_cOptions().$limit || e.cRepeat
                    : parseInt(_) || 1;
                break;
              default:
                z--;
            }
          return (
            c && (c.known = z > 0),
            0 === z
              ? u.slice(0)
              : ((x = u),
                (M = u.filter(function (n) {
                  var u, e;
                  return (
                    (!d || (n.title || "").includes(d)) &&
                    (!v || i.Qt(v, l.getTabUrl(n))) &&
                    (!h ||
                      h ===
                        (null === (u = r.Rt(l.getTabUrl(n))) || void 0 === u
                          ? void 0
                          : u.host)) &&
                    (null === N || N !== l.fe(n)) &&
                    (null === E || E === n.discarded) &&
                    (null === $ || $ === n.pinned) &&
                    (null === O || O === l.isTabMuted(n)) &&
                    (null === P || P === n.audible) &&
                    (null === D || D === n.highlighted) &&
                    (null === C || D === n.incognito) &&
                    (void 0 === m ||
                      m ===
                        (null !== (e = l.getGroupId(n)) && void 0 !== e
                          ? e
                          : "") +
                          "")
                  );
                })),
                M.length || t.showHUD("No tabs matched the filter parameter"),
                B &&
                  ((I = n ? x.indexOf(n) : -1) < 0 &&
                    ((j = n ? n.id : e.jn),
                    (I = x.findIndex(function (n) {
                      return n.id === j;
                    }))),
                  I >= 0
                    ? ((S =
                        (y = M.findIndex(function (n) {
                          return x.indexOf(n) >= I;
                        })) >= 0 && x.indexOf(M[y]) > I) &&
                        M.splice(y, 0, null),
                      (q = o(
                        y >= 0 ? y : M.length - 1,
                        M.length,
                        0,
                        e.cRepeat > 0 ? B : -B,
                        S ? 1 : 0,
                        false
                      )),
                      (M = M.slice(q[0], q[1])),
                      S &&
                        (M = M.filter(function (n) {
                          return !!n;
                        })))
                    : (M = B > 0 ? M.slice(0, B) : M.slice(-B))),
                M)
          );
        }),
        (u.hu = function (n, u) {
          var r,
            t,
            i = function (n, u) {
              n.index = u;
            },
            a = function (n, u) {
              return n < u ? -1 : n > u ? 1 : 0;
            },
            o = n.map(function (n, u) {
              return {
                tab: n,
                index: u,
                time: null,
                rhost: null,
                group: l.getGroupId(n),
              };
            }),
            c = -1,
            s = false;
          for (t of (u instanceof Array
            ? u.slice(0)
            : (true === u ? "time" : u + "").split(/[, ]+/g)
          ).reverse())
            (r = "r" === t[0] ? -1 : 1),
              (t.includes("time") && !t.includes("creat")) ||
              t.includes("recen")
                ? (null == o[0].time &&
                    o.forEach(function (n) {
                      var u = n.tab.id,
                        r = e.Sn.get(u);
                      n.time = u === e.jn ? 1 : null != r ? 2047 - r.i : u + 2;
                    }),
                  (r = "r" === t[0] && "e" !== t[1] ? -1 : 1),
                  (c = 1))
                : t.endsWith("host") || t.endsWith("url")
                ? (o[0].rhost ||
                    o.forEach(function (n) {
                      var u,
                        e,
                        r,
                        l = n.tab.url,
                        t = l.indexOf("://") + 3,
                        i = t > 3 ? l.indexOf("/", t) : 0;
                      i < t
                        ? (n.rhost = l)
                        : ((r =
                            (e = (u = l.slice(t, i)).lastIndexOf(":")) > 0 &&
                            u.lastIndexOf(":", e - 1) > 0),
                          (n.rhost = r
                            ? u
                            : u
                                .slice(0, e > 0 ? e : u.length)
                                .split(".")
                                .reverse()
                                .join(".") + (e > 0 ? " " + u.slice(1) : "")));
                    }),
                  (c = t.includes("url") ? 3 : 2))
                : (c =
                    "title" === t
                      ? 4
                      : t.includes("creat") || "id" === t
                      ? 5
                      : t.includes("window")
                      ? 6
                      : t.includes("index") || "reverse" === t
                      ? 7
                      : -1),
              c < 0 ||
                (o.sort(function (n, u) {
                  return (
                    (1 === c
                      ? n.time - u.time
                      : c < 4
                      ? a(n.rhost, u.rhost) ||
                        (3 === c ? a(n.tab.url, u.tab.url) : 0)
                      : 4 === c
                      ? a(n.tab.title, u.tab.title)
                      : 5 === c
                      ? n.tab.id - u.tab.id
                      : 6 === c
                      ? n.tab.windowId - u.tab.windowId
                      : n.index - u.index) * r || n.index - u.index
                  );
                }),
                o.forEach(i),
                (s = true));
          return (
            s &&
              o.some(function (n) {
                return null != n.group;
              }) &&
              o.sort(function (n, u) {
                return null == n.group
                  ? null == u.group
                    ? n.index - u.index
                    : 1
                  : null == u.group || n.group < u.group
                  ? -1
                  : n.group > u.group
                  ? 1
                  : n.index - u.index;
              }),
            s
              ? o.map(function (n) {
                  return n.tab;
                })
              : n
          );
        });
    }
  );
