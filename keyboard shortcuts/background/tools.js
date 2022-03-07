"use strict";
(__filename = "background/tools.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./parse_urls",
      "./settings",
      "./ports",
      "./ui_css",
      "./i18n",
      "./run_commands",
      "./open_urls",
      "./tab_commands",
    ],
    function (n, t, e, r, o, i, u, a, c, l, f, s, v, _) {
      var d;
      Object.defineProperty(t, "__esModule", { value: true }),
        (t.mr = t.hr = t.wr = t.yr = t.Sr = void 0),
        (r = __importStar(r)),
        (a = __importStar(a)),
        (t.Sr = {
          Mr: function (n, t) {
            return "vimiumContent|" + n + (t ? "|" + t : "");
          },
          Cr: function (n, t) {
            var i = o.me.contentSettings;
            try {
              i && i.images.get({ primaryUrl: "https://127.0.0.1/" }, o.ae);
            } catch (n) {
              i = null;
            }
            return i
              ? i[n] && !/^[A-Z]/.test(n) && i[n].get
                ? !(
                    !t.startsWith("read:") &&
                    r.Zt.test(t) &&
                    !t.startsWith(e.u.lt)
                  ) && (c.complainLimits(f._r("changeItsCS")), true)
                : (c.showHUD(f._r("unknownCS", [n])), true)
              : (c.showHUD("Has not permitted to set contentSettings"), true);
          },
          Ir: function (n, t) {
            var o, u, a, l, s, v, _, d, m, p;
            if (n.startsWith("file:"))
              return (o = e.Wn >= 56 ? 1 : t > 1 ? 2 : 0)
                ? (c.complainLimits(
                    1 === o ? f._r("setFileCS", [56]) : f._r("setFolderCS")
                  ),
                  [])
                : [n.split(/[?#]/, 1)[0]];
            if (n.startsWith("ftp"))
              return c.complainLimits(f._r("setFTPCS")), [];
            if (
              ((u = n.match(/^([^:]+:\/\/)([^\/]+)/)),
              (a = i.ye.exec(u[2])),
              (l = [(n = u[1]) + (s = a[3] + (a[4] || "")) + "/*"]),
              t < 2 || r.Ut(a[3], 0))
            )
              return l;
            for (
              a = null,
                _ = (v = r.qt(s))[0],
                d = v[1],
                m = Math.min(_.length - d, t - 1),
                p = 0;
              p < m;
              p++
            )
              (s = s.slice(_[p].length + 1)), l.push(n + s + "/*");
            return (
              l.push(n + "*." + s + "/*"),
              m === _.length - d &&
                "http://" === n &&
                l.push("https://*." + s + "/*"),
              l
            );
          },
          Tr: function (n) {
            var t, e, r;
            for (e of n.oo) {
              if (((r = new URL(e.s.Ce).host), t && t !== r)) return true;
              t = r;
            }
            return false;
          },
          Or: function (n, e) {
            var r = o.me.contentSettings[n];
            null == e
              ? (r.clear({ scope: "regular" }),
                r.clear({ scope: "incognito_session_only" }, o.ae),
                localStorage.removeItem(t.Sr.Mr(n)))
              : r.clear({ scope: e ? "incognito_session_only" : "regular" });
          },
          Nr: function (n, r) {
            var o = n.type ? "" + n.type : "images";
            return (
              !t.Sr.Cr(o, "http://a.cc/") &&
              (t.Sr.Or(o, r ? r.s.sr : 2 === e.Mn),
              Promise.resolve("images" === o && f._r(o)).then(function (n) {
                c.showHUD(
                  f._r("csCleared", [n || o[0].toUpperCase() + o.slice(1)])
                );
              }),
              true)
            );
          },
          Ar: function (n, e, r, o) {
            var i = n.type ? "" + n.type : "images",
              u = r[0];
            n.incognito
              ? t.Sr.Lr(e, i, u, o)
              : t.Sr.Pr(i, e, u, "reopen" === n.action, o);
          },
          Pr: function (n, r, u, a, c) {
            var l = i.Ee(u.url);
            t.Sr.Cr(n, l)
              ? c(0)
              : o.me.contentSettings[n].get(
                  { primaryUrl: l, incognito: u.incognito },
                  function (i) {
                    t.Sr.Rr(
                      n,
                      l,
                      r,
                      {
                        scope: u.incognito
                          ? "incognito_session_only"
                          : "regular",
                        setting: i && "allow" === i.setting ? "block" : "allow",
                      },
                      function (r) {
                        var i, l, f;
                        r
                          ? c(0)
                          : (u.incognito ||
                              ((i = t.Sr.Mr(n)),
                              "1" !== localStorage.getItem(i) &&
                                localStorage.setItem(i, "1")),
                            (f =
                              !o.se() ||
                              (e.Wn >= 70 &&
                                (l = e.Pn.get(u.id)) &&
                                l.oo.length > 1 &&
                                t.Sr.Tr(l))),
                            u.incognito || a
                              ? _.Ur(u)
                              : u.index > 0
                              ? _.Ur(u, f ? 0 : 2)
                              : o.getCurWnd(true, function (n) {
                                  return (
                                    n && "normal" === n.type
                                      ? _.Ur(
                                          u,
                                          f ? 0 : n.tabs.length > 1 ? 2 : 1
                                        )
                                      : o.ve.reload(s.getRunNextCmdBy(0)),
                                    o.ae()
                                  );
                                }));
                      }
                    );
                  }
                );
          },
          Lr: function (n, r, u, a) {
            if (e.u._t) return c.complainLimits("setIncogCS"), void a(0);
            var l = i.Ee(u.url);
            t.Sr.Cr(r, l)
              ? a(0)
              : o.me.contentSettings[r].get(
                  { primaryUrl: l, incognito: true },
                  function (e) {
                    return o.ae()
                      ? (o.me.contentSettings[r].get(
                          { primaryUrl: l },
                          function (e) {
                            e && "allow" === e.setting
                              ? a(1)
                              : o.de.create(
                                  {
                                    type: "normal",
                                    incognito: true,
                                    focused: false,
                                    url: "about:blank",
                                  },
                                  function (e) {
                                    var i = e.tabs[0].id;
                                    return t.Sr.Wr(
                                      n,
                                      r,
                                      u,
                                      l,
                                      e.id,
                                      true,
                                      function () {
                                        o.ve.remove(i);
                                      }
                                    );
                                  }
                                );
                          }
                        ),
                        o.ae())
                      : e && "allow" === e.setting && u.incognito
                      ? t.Sr.qr(u)
                      : void o.de.getAll(function (o) {
                          var i, a, c;
                          if (
                            (o = o.filter(function (n) {
                              return n.incognito && "normal" === n.type;
                            })).length
                          )
                            return (
                              (i = v.preferLastWnd(o)),
                              e && "allow" === e.setting
                                ? t.Sr.qr(u, i.id)
                                : ((a = u.windowId),
                                  (c =
                                    u.incognito &&
                                    o.some(function (n) {
                                      return n.id === a;
                                    })),
                                  t.Sr.Wr(n, r, u, l, c ? void 0 : i.id))
                            );
                          console.log(
                            "%cContentSettings.ensure",
                            "color:red",
                            "get incognito content settings",
                            e,
                            " but can not find an incognito window."
                          );
                        });
                  }
                );
          },
          Wr: function (n, e, r, i, u, a, c) {
            var l = t.Sr.Dr.bind(null, r, u, c);
            return t.Sr.Rr(
              e,
              i,
              n,
              { scope: "incognito_session_only", setting: "allow" },
              a && u !== r.windowId
                ? function (n) {
                    if (n) return l(n);
                    o.de.get(r.windowId, l);
                  }
                : l
            );
          },
          Rr: function (n, e, i, u, a) {
            var c,
              l = false,
              f = o.me.contentSettings[n],
              s = function () {
                var n = o.ae();
                return (
                  n && console.log("[%o]", Date.now(), n),
                  l || (--_, ((l = !!n) || 0 === _) && setTimeout(a, 0, l)),
                  n
                );
              },
              v = t.Sr.Ir(e, 0 | i),
              _ = v.length;
            if (_ <= 0) return a(true);
            for (c of (r.Pt(u), v))
              f.set(Object.assign({ primaryPattern: c }, u), s);
          },
          Dr: function (n, e, r, i) {
            true !== i && t.Sr.qr(n, e),
              r && r(),
              true !== i
                ? e &&
                  o.de.update(e, { focused: true, state: i ? i.state : void 0 })
                : s.runNextCmd(0);
          },
          qr: function (n, t) {
            (n.active = true),
              "number" == typeof t &&
                n.windowId !== t &&
                ((n.index = void 0), (n.windowId = t)),
              _.Ur(n);
          },
        }),
        (t.yr = {
          Fr: localStorage,
          We: function (n, r, o) {
            var i,
              u,
              a,
              c = n.l,
              l = n.n,
              f = n.u,
              s = n.s;
            c &&
              0 === s[0] &&
              0 === s[1] &&
              (2 === s.length
                ? (i = f.indexOf("#")) > 0 &&
                  i < f.length - 1 &&
                  s.push(f.slice(i))
                : (s[2] || "").length < 2 && s.pop()),
              (u = t.yr.Jr(l, c ? f : "")),
              (a = JSON.stringify(c ? s : { tabId: o, url: f, scroll: s })),
              r
                ? (e.wn || (d.Gr(), e.tn(new Map()))).set(u, a)
                : t.yr.Fr.setItem(u, a);
          },
          Kr: function (n, r) {
            var o,
              i = r.s.ur;
            n.s
              ? t.yr.We(n, r.s.sr, i)
              : (r =
                  (null === (o = e.Pn.get(i)) || void 0 === o
                    ? void 0
                    : o.ar) || r) && r.postMessage({ N: 11, n: n.n });
          },
          xr: function (n, i) {
            var u,
              a,
              l,
              _,
              d,
              m,
              p,
              g,
              h = n.n,
              b = t.yr.Jr(h, n.u),
              w =
                (i.s.sr && (null == e.wn ? void 0 : e.wn.get(b))) ||
                t.yr.Fr.getItem(b),
              y = n.c;
            if (
              n.l &&
              ((u = w ? JSON.parse(w) : null) ||
                ((l = void 0),
                (_ = void 0),
                (a = n.o) &&
                  (l = +a.x) >= 0 &&
                  (_ = +a.y) >= 0 &&
                  (u = [l, _, a.h])),
              u)
            )
              t.yr.zr(i, 2, h, u, y);
            else {
              if (!w)
                return (
                  (d = n.l ? "Local" : "Global"),
                  void Promise.resolve(f._r(d)).then(function (n) {
                    c.showHUD(f._r("noMark", [n || d, h]));
                  })
                );
              (p = +(m = JSON.parse(w)).tabId),
                ((g = {
                  u: m.url,
                  s: m.scroll,
                  t: m.tabId,
                  n: h,
                  p: true,
                  q: v.parseOpenPageUrlOptions(y),
                  f: s.parseFallbackOptions(y),
                }).p =
                  false !== y.prefix &&
                  0 === g.s[1] &&
                  0 === g.s[0] &&
                  !!r.v(g.u)),
                p >= 0 && e.Pn.has(p)
                  ? o.tabsGet(p, t.yr.Hr.bind(0, g))
                  : e.In[20](g);
            }
          },
          Hr: function (n, r) {
            var i = o.getTabUrl(r).split("#", 1)[0];
            if (i === n.u || (n.p && n.u.startsWith(i)))
              return e.In[5]({ s: r.id }), t.yr.Qr(n, r);
            e.In[20](n);
          },
          Jr: function (n, t) {
            return t
              ? "vimiumMark|" +
                  u.ke(t.split("#", 1)[0]) +
                  (t.length > 1 ? "|" + n : "")
              : "vimiumGlobalMark|" + n;
          },
          zr: function (n, t, e, r, o) {
            n.postMessage({ N: 15, l: t, n: e, s: r, f: o });
          },
          Qr: function (n, r) {
            var o,
              i = r.id,
              u = null === (o = e.Pn.get(i)) || void 0 === o ? void 0 : o.ar;
            if ((u && t.yr.zr(u, 0, n.n, n.s, n.f), n.t !== i && n.n))
              return t.yr.We(n, 2 === e.Mn, i);
          },
          Zr: function (n) {
            var r,
              o,
              i,
              u,
              a,
              l = t.yr.Jr("", n),
              s = [],
              v = t.yr.Fr;
            for (r = 0, o = v.length; r < o; r++)
              (i = v.key(r)).startsWith(l) && s.push(i);
            for (i of s) v.removeItem(i);
            (u = s.length),
              (a = e.wn) &&
                a.forEach(function (n, t) {
                  t.startsWith(l) && (u++, a.delete(t));
                }),
              Promise.all([
                "#" === n ? f._r("allLocal") : f.jr(n ? "41" : "39"),
                f._r(1 !== u ? "have" : "has"),
              ]).then(function (n) {
                c.showHUD(f._r("markRemoved", [u, n[0], n[1]]));
              });
          },
        }),
        (t.wr = {
          Br: "findModeRawQueryList",
          Er: null,
          Vr: 0,
          Xr: function () {
            var n = a.Ve(t.wr.Br);
            (t.wr.Er = n ? n.split("\n") : []), (t.wr.Xr = null);
          },
          Yr: function (n, o, i) {
            var u,
              c,
              l = t.wr;
            if (
              (l.Xr && l.Xr(),
              (u = n ? e.bn || (d.Gr(), e.on(l.Er.slice(0))) : l.Er),
              !o)
            )
              return u[u.length - (i || 1)] || "";
            (o = o.replace(/\n/g, " ")),
              n
                ? l.no(o, u, true)
                : ((o = r.Ot(o, 0, 99)),
                  (c = l.no(o, u)) && a.We(l.Br, c),
                  e.bn && l.no(o, e.bn, true));
          },
          no: function (n, t, e) {
            var r = t.lastIndexOf(n);
            if (r >= 0) {
              if (r === t.length - 1) return;
              t.splice(r, 1);
            } else t.length >= 50 && t.shift();
            if ((t.push(n), !e)) return t.join("\n");
          },
          to: function (n) {
            n
              ? e.bn && e.on([])
              : ((t.wr.Xr = null), (t.wr.Er = []), a.We(t.wr.Br, ""));
          },
        }),
        (d = {
          ro: false,
          Vr: 0,
          Gr: function () {
            d.ro || (o.de.onRemoved.addListener(d.io), (d.ro = true));
          },
          io: function () {
            d.ro && (d.Vr = d.Vr || setTimeout(d.uo, 34));
          },
          uo: function () {
            var n;
            if (((d.Vr = 0), e.Wn > 51))
              for (n of e.Pn.values()) if (n.cr.s.sr) return;
            o.de.getAll(function (n) {
              n.some(function (n) {
                return n.incognito;
              }) || d.ao();
            });
          },
          ao: function () {
            e.on(null),
              e.tn(null),
              o.de.onRemoved.removeListener(d.io),
              (d.ro = false);
          },
        }),
        (t.hr = {
          co: [1, 1],
          lo: 0,
          Ve: function (n) {
            var e = t.hr.co[n];
            return "object" == typeof e ? e.matches : null;
          },
          fo: function (n, e) {
            var r,
              o = 2 === e,
              i = t.hr,
              u = i.co,
              a = u[n],
              c = n ? "prefers-color-scheme" : "prefers-reduced-motion";
            1 === a &&
              o &&
              (u[n] = a = matchMedia("(".concat(c, ")")).matches ? 2 : 0),
              o && 2 === a
                ? (((r = matchMedia(
                    "(".concat(c, ": ").concat(n ? "dark" : "reduce", ")")
                  )).onchange = i.so),
                  (u[n] = r),
                  (i.lo = i.lo || setInterval(t.hr.vo, 6e4)))
                : o ||
                  "object" != typeof a ||
                  ((a.onchange = null),
                  (u[n] = 2),
                  i.lo > 0 &&
                    u.every(function (n) {
                      return "object" != typeof n;
                    }) &&
                    (clearInterval(i.lo), (i.lo = 0)));
          },
          _o: function (n, r, o) {
            var i,
              u,
              c,
              f,
              s = t.hr.co[n];
            (i = n ? "dark" : "less-motion"),
              (u =
                "object" == typeof s
                  ? s.matches
                  : null != o
                  ? o
                  : 1 === a.Ve(0 === n ? "autoReduceMotion" : "autoDarkMode")),
              (f = a.Je((c = n ? "d" : "m"), u)),
              e.Tn[c] !== f && ((e.Tn[c] = f), r || a.Ke({ N: 6, d: [c] })),
              l.ii({
                t: i,
                e:
                  u ||
                  " "
                    .concat(e.Un.vomnibarOptions.styles, " ")
                    .includes(" ".concat(i, " ")),
                b: !r,
              });
          },
          vo: function () {
            var n, e;
            for (e = (n = t.hr.co).length; 0 <= --e; )
              "object" == typeof n[e] && t.hr._o(e);
          },
          so: function () {
            t.hr.lo > 0 && clearInterval(t.hr.lo), (t.hr.lo = -1);
            var n = t.hr.co.indexOf(this);
            n >= 0 && t.hr._o(n);
          },
        }),
        (t.mr = { do: null, mo: e.B }),
        setTimeout(function () {
          function n(n) {
            var t, i, u;
            n.windowId === e.Cn
              ? ((t = performance.now()) - f > 666 &&
                  ((i = c.get(e.jn)),
                  (u = 1 === e.Tn.o ? Date.now() : t),
                  i ? ((i.i = ++l), (i.t = u)) : c.set(e.jn, { i: ++l, t: u }),
                  l > 2037 && o.ve.query({}, s)),
                e.rn(n.tabId),
                (f = t))
              : o.de.get(n.windowId, r);
          }
          function r(n) {
            if (n.focused) {
              var t = n.id;
              t !== e.Cn && (e.en(e.Cn), e.cn(t)),
                o.ve.query({ windowId: t, active: true }, function (n) {
                  n && n.length > 0 && t === e.Cn && i(n);
                });
            }
          }
          function i(r) {
            if (!r || 0 === r.length) return o.ae();
            var i = r[0],
              u = i.windowId,
              a = e.Cn;
            u !== a && (e.cn(u), e.en(a)),
              e.in(i.incognito ? 2 : 1),
              t.mr.mo(),
              n({ tabId: i.id, windowId: u });
          }
          var u = e.Cn,
            c = e.Sn,
            l = 1,
            f = 0,
            s = function (n) {
              var t = n
                ? n
                    .map(function (n) {
                      return [n.id, c.get(n.id)];
                    })
                    .filter(function (n) {
                      return n[1];
                    })
                    .sort(function (n, t) {
                      return n[1].i - t[1].i;
                    })
                : [];
              t.length > 1023 && t.splice(0, t.length - 1023),
                t.forEach(function (n, t) {
                  return (n[1].i = t + 2);
                }),
                (l = t.length > 0 ? t[t.length - 1][1].i : 1) > 1
                  ? e.un((c = new Map(t)))
                  : (c.forEach(function (n, t) {
                      n.i < 1026 ? c.delete(t) : (n.i -= 1024);
                    }),
                    (l = 1024));
            };
          o.ve.onActivated.addListener(n),
            o.de.onFocusChanged.addListener(function (n) {
              n !== u && o.ve.query({ windowId: n, active: true }, i);
            }),
            o.getCurTab(function (n) {
              f = performance.now();
              var t = n && n[0];
              if (!t) return o.ae();
              e.rn(t.id), e.cn(t.windowId), e.in(t.incognito ? 2 : 1);
            }),
            (t.mr.do = function (n, t) {
              return c.get(t.id).i - c.get(n.id).i;
            }),
            a.Xe.then(function () {
              for (var n of ["images", "plugins", "javascript", "cookies"])
                null != localStorage.getItem(t.Sr.Mr(n)) &&
                  o.me.contentSettings &&
                  setTimeout(t.Sr.Or, 100, n);
            });
        }, 120),
        (e.Vn.autoDarkMode = e.Vn.autoReduceMotion =
          function (n, e) {
            var r = e.length > 12 ? 0 : 1;
            t.hr.fo(r, (n = "boolean" == typeof n ? (n ? 2 : 0) : n)),
              t.hr._o(r, 0, 2 === n ? null : n > 0);
          }),
        (e.Vn.vomnibarOptions = function (n) {
          var r,
            o,
            i,
            u,
            c,
            l,
            f = a.Ne.vomnibarOptions,
            s = e.Jn,
            v = true,
            _ = f.actions,
            d = f.maxMatches,
            m = f.queryInterval,
            p = f.styles,
            g = f.sizes;
          n !== f &&
            n &&
            "object" == typeof n &&
            ((r = Math.max(3, Math.min(0 | n.maxMatches || d, 25))),
            (o = ((n.actions || "") + "").trim()),
            (i = +n.queryInterval),
            (u = ((n.sizes || "") + "").trim()),
            (c = ((n.styles || "") + "").trim()),
            (l = Math.max(0, Math.min(i >= 0 ? i : m, 1200))),
            (v = d === r && m === l && u === g && _ === o && p === c) ||
              ((d = r), (m = l), (g = u), (p = c)),
            (n.actions = o),
            (n.maxMatches = r),
            (n.queryInterval = l),
            (n.sizes = u),
            (n.styles = c)),
            (e.Un.vomnibarOptions = v ? f : n),
            (s.n = d),
            (s.t = m),
            (s.l = g),
            (s.s = p),
            t.hr._o(0, 1),
            t.hr._o(1, 1),
            a.Ye({ N: 47, d: { n: d, t: m, l: g, s: s.s } });
        });
    }
  );
