"use strict";
(__filename = "background/tab_commands.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./parse_urls",
      "./ports",
      "./i18n",
      "./run_commands",
      "./clipboard",
      "./open_urls",
      "./frame_commands",
      "./filter_tabs",
      "./tools",
    ],
    function (n, r, e, u, i, t, o, f, l, c, a, d, s, v, w) {
      var m, p, b, I, _, g, x, T;
      Object.defineProperty(r, "__esModule", { value: true }),
        (r.Ur =
          r.toggleTabUrl =
          r.togglePinTab =
          r.toggleMuteTab =
          r.removeTab =
          r.reloadTab =
          r.moveTabToNextWindow =
          r.moveTabToNewWindow =
          r.joinTabs =
          r.copyWindowInfo =
            void 0),
        (u = __importStar(u)),
        (m = Math.abs),
        (p = function () {
          e.cPort && s.focusFrame(e.cPort, false, 0);
        }),
        (r.copyWindowInfo = function (n) {
          var r,
            t = e.get_cOptions().filter,
            o = !!(e.get_cOptions().decoded || e.get_cOptions().decode),
            c = e.get_cOptions().type,
            d = "tab" === c && (m(e.cRepeat) > 1 || !!t),
            s = a.eu(e.get_cOptions());
          if ("frame" === c && e.cPort)
            return (
              (r = void 0),
              128 & e.cPort.s.fr
                ? (e.cPort.postMessage({ N: 3, H: 16, d: o, e: s }), (r = 1))
                : (r = f.nr({ H: 16, u: "", d: o, e: s })),
              void (
                1 !== r &&
                (r && r instanceof Promise
                  ? r.then(function () {
                      n(1);
                    })
                  : n(1))
              )
            );
          i.ve.query(
            "browser" === c
              ? {
                  windowType: "normal",
                }
              : {
                  active: ("window" !== c && !d) || void 0,
                  currentWindow: true,
                },
            function (r) {
              var a, w, m, p, b, I, _, g, x, T, h, y;
              if (!c || "title" === c || "frame" === c || "url" === c)
                return (
                  e.In[16](
                    {
                      u: "title" === c ? r[0].title : i.getTabUrl(r[0]),
                      d: o,
                      e: s,
                    },
                    e.cPort
                  ),
                  void n(1)
                );
              (a = e.cPort ? e.cPort.s.sr : 2 === e.Mn),
                (w = e.get_cOptions().format),
                (m = "" + (w || "${title}: ${url}")),
                (p = e.get_cOptions().join),
                (b = "json" === p && !w),
                d
                  ? ((I = r.length < 2 ? 0 : i.selectFrom(r).index),
                    (_ = v.getTabRange(I, r.length)),
                    (r = r.slice(_[0], _[1])))
                  : (r = r.filter(function (n) {
                      return n.incognito === a;
                    })),
                t &&
                  ((g = e.cPort ? e.cPort.s.ur : e.jn),
                  (x = r.find(function (n) {
                    return n.id === g;
                  })),
                  (r = v.mu(x, r, t, (T = {}))),
                  (t = T.known ? t : null)),
                r.length
                  ? ("browser" === c &&
                      r.sort(function (n, r) {
                        return n.windowId - r.windowId || n.index - r.index;
                      }),
                    (h = r.map(function (n) {
                      return b
                        ? {
                            title: n.title,
                            url: o ? u.xt(i.getTabUrl(n)) : i.getTabUrl(n),
                          }
                        : m.replace(/\$\{([^}]+)}/g, function (r, e) {
                            return e.split("||").reduce(function (r, e) {
                              var t;
                              return (
                                r ||
                                (o && "url" === e
                                  ? u.xt(i.getTabUrl(n))
                                  : "__proto__" !== e &&
                                    ((t = n[e]) && "object" == typeof t
                                      ? JSON.stringify(t)
                                      : t || ""))
                              );
                            }, "");
                          });
                    })),
                    (y = e.N(h, p, s)),
                    f.showHUD(
                      "tab" === c && r.length < 2 ? y : l._r("copiedWndInfo"),
                      15
                    ),
                    n(1))
                  : n(0);
            }
          );
        }),
        (r.joinTabs = function (n) {
          var r,
            u =
              null != e.get_cOptions().order
                ? e.get_cOptions().order
                : e.get_cOptions().sort,
            t = e.get_cOptions().windows,
            o = "current" === t;
          (r = function (r) {
            var f, l, c, a, d;
            (f = 2 === e.Mn),
              (r = o
                ? r
                : r.filter(function (n) {
                    return n.incognito === f;
                  })),
              (l = o
                ? r
                : r.filter(function (n) {
                    return n.id === e.Cn;
                  })),
              (c = l.length ? l[0] : null),
              o || c
                ? ((a = function (t) {
                    var f,
                      l,
                      c,
                      a,
                      d,
                      s,
                      w,
                      p,
                      b,
                      I = [],
                      _ = function (n) {
                        I.push(n);
                      };
                    if (
                      (r
                        .sort(function (n, r) {
                          return n.id - r.id;
                        })
                        .forEach(function (n) {
                          n.tabs.forEach(_);
                        }),
                      (f = e.get_cOptions().filter),
                      o &&
                        m(e.cRepeat) > 1 &&
                        I.length > 1 &&
                        ((l = i.selectFrom(I).index),
                        (c = v.getTabRange(l, I.length)),
                        (I = I.slice(c[0], c[1]))),
                      f &&
                        ((a = e.cPort ? e.cPort.s.ur : e.jn),
                        (d = I.find(function (n) {
                          return n.id === a;
                        })),
                        (I = v.mu(d, I, f, (s = {}))),
                        (f = s.known ? f : null)),
                      I.length)
                    ) {
                      for (b of (u && (I = v.hu(I, u)),
                      (w = t ? t.tabs.length : 0),
                      (p = t ? t.id : e.Cn),
                      f &&
                        (w = I.reduce(function (n, r) {
                          return r.windowId === p ? Math.min(r.index, n) : n;
                        }, I.length)),
                      I))
                        i.ve.move(b.id, { windowId: p, index: w++ });
                      for (b of I)
                        b.pinned && i.tabsUpdate(b.id, { pinned: true });
                      n(1);
                    } else n(0);
                  }),
                  c && "popup" === c.type && c.tabs.length
                    ? ((d = c.tabs[0].id),
                      (c.tabs = c.tabs.filter(function (n) {
                        return n.id !== d;
                      })),
                      i.makeWindow(
                        {
                          tabId: d,
                          incognito: c.incognito,
                        },
                        c.state,
                        a
                      ))
                    : ((r =
                        o || !c || "all" === t
                          ? r
                          : r.filter(function (n) {
                              return n.id !== c.id;
                            })),
                      a(c)))
                : n(0);
          }),
            o
              ? i.getCurWnd(true, function (n) {
                  return n ? r([n]) : i.ae();
                })
              : (e.set_cRepeat(1),
                i.de.getAll(
                  { populate: true, windowTypes: ["normal", "popup"] },
                  r
                ));
        }),
        (b = function (n) {
          var u = "hasIncog",
            t = !!e.get_cOptions().all,
            o = function (r) {
              var u,
                a,
                d,
                s,
                w,
                b,
                I = r.tabs,
                _ = I.length,
                g = false !== e.get_cOptions().focused,
                x = i.selectFrom(I),
                T = x.incognito;
              if (!t && _ <= 1 && (!_ || (0 === x.index && m(e.cRepeat) > 1)))
                n(0);
              else {
                if (t) {
                  for (a of I)
                    if (null != i.getGroupId(a))
                      return (
                        f.showHUD(
                          "Can not keep groups info during this command"
                        ),
                        void n(0)
                      );
                  u = [0, _];
                } else u = 1 === _ ? [0, 1] : v.getTabRange(x.index, _);
                if (
                  ((d = e.get_cOptions().filter),
                  (s = I.slice(u[0], u[1])),
                  (s = d ? v.mu(x, s, d) : s).length)
                ) {
                  if (!t) {
                    if ((w = s.length) >= _ && _ > 1)
                      return n(0), void f.showHUD(l._r("moveAllTabs"));
                    if (w > 30 && c.uu())
                      return void c
                        .nu("moveTabToNewWindow", w)
                        .then(o.bind(null, r));
                    if (1 === _ && 0 === x.index && 1 === m(e.cRepeat))
                      return void i
                        .te(i.ve.query, { windowId: r.id, index: 1 })
                        .then(function (e) {
                          if (!e || !e.length)
                            return n(0), void f.showHUD(l._r("moveAllTabs"));
                          (r.tabs = [r.tabs[0], e[0]]), o(r);
                        });
                  }
                  (b = !d || s.includes(x) ? x : s[0]),
                    i.makeWindow(
                      { tabId: b.id, incognito: T, focused: g },
                      "normal" === r.type ? r.state : "",
                      s.length < 2
                        ? p
                        : function (u) {
                            var t, o, f, l, c, a, d, v;
                            if (u) {
                              for (v of (p(),
                              (t = s.indexOf(b)),
                              (o = s.slice(0, t)),
                              (f = s.slice(t + 1)),
                              r.incognito &&
                                e.Wn < 52 &&
                                ((o = o.filter(
                                  (l = function (n) {
                                    return n.incognito === T;
                                  })
                                )),
                                (f = f.filter(l))),
                              (a = f.length),
                              (d = function (n) {
                                return n.id;
                              }),
                              (c = o.length) &&
                                (i.ve.move(
                                  o.map(d),
                                  { index: 0, windowId: u.id },
                                  i.ae
                                ),
                                c > 1 && i.ve.move(s[t].id, { index: c })),
                              a &&
                                i.ve.move(
                                  f.map(d),
                                  { index: c + 1, windowId: u.id },
                                  i.ae
                                ),
                              s))
                                v.pinned &&
                                  i.tabsUpdate(v.id, { pinned: true });
                              n(1);
                            } else n(0);
                          }
                    );
                } else n(0);
              }
            },
            a = function (t) {
              var o,
                a,
                s,
                v = i.selectFrom(t.tabs);
              if (t.incognito && v.incognito) return n(0), f.showHUD(l._r(u));
              if (
                ((o = v.id),
                (a = { incognito: true }),
                (s = i.getTabUrl(v)),
                v.incognito)
              );
              else {
                if (t.incognito)
                  return i.re(s) ? (n(0), f.showHUD(l._r(u))) : r.Ur(v);
                if (i.re(s)) return n(0), f.complainLimits(l._r("openIncog"));
                a.url = s;
              }
              (t.tabs = null),
                i.de.getAll(function (r) {
                  var u,
                    f,
                    l = false !== e.get_cOptions().focused;
                  (r = r.filter(function (n) {
                    return n.incognito && "normal" === n.type;
                  })).length
                    ? i.ve.query(
                        { windowId: d.preferLastWnd(r).id, active: true },
                        function (n) {
                          var r = n[0];
                          i.tabsCreate(
                            {
                              url: s,
                              windowId: r.windowId,
                              active: false !== e.get_cOptions().active,
                              index: d.newTabIndex(
                                r,
                                e.get_cOptions().position,
                                false,
                                false
                              ),
                            },
                            c.getRunNextCmdBy(3)
                          ),
                            l && i.selectWnd(r),
                            i.ve.remove(o);
                        }
                      )
                    : ((u = "normal" === t.type ? t.state : ""),
                      (f = null != a.url)
                        ? e.u._t && ((l = true), (u = ""))
                        : (a.tabId = o),
                      (a.focused = l),
                      i.makeWindow(a, u, function (r) {
                        f || (r && p()),
                          f && r
                            ? c.getRunNextCmdBy(0)(
                                (r.tabs && r.tabs[0]) || null
                              )
                            : n(!!r);
                      }),
                      f && i.ve.remove(o));
                });
            },
            s = !!e.get_cOptions().incognito;
          s && (e.cPort ? e.cPort.s.sr : 2 === e.Mn)
            ? (f.showHUD(l._r(u)), n(0))
            : (t || (1 !== m(e.cRepeat) && !s)
                ? i.te(i.getCurWnd, true)
                : i.te(i.getCurWnd, false).then(function (n) {
                    return (
                      n &&
                      i
                        .te(i.ve.query, { windowId: n.id, active: true })
                        .then(function (r) {
                          return (n.tabs = r), r && r.length ? n : void 0;
                        })
                    );
                  })
              ).then(function (r) {
                r ? (s ? a : o)(r) : n(0);
              });
        }),
        (r.moveTabToNewWindow = b),
        (I = function (n, u) {
          var t = n[0];
          i.de.getAll(function (n) {
            var o,
              f,
              l,
              c,
              a,
              s,
              w,
              b =
                false === e.get_cOptions().minimized ||
                false === e.get_cOptions().min,
              I = false !== e.get_cOptions().focused,
              _ = n.filter(function (n) {
                return (
                  n.incognito === t.incognito &&
                  "normal" === n.type &&
                  (!b || "minimized" !== n.state)
                );
              });
            if (_.length > 0) {
              if (
                ((o = _.map(function (n) {
                  return n.id;
                })),
                (f = o.indexOf(t.windowId)),
                o.length >= 2 || f < 0)
              )
                return (
                  (l = e.get_cOptions().filter),
                  (c = !!(e.get_cOptions().tabs || l)),
                  (a = o.indexOf(e.vn)),
                  (s =
                    e.get_cOptions().last && a >= 0 ? a : f >= 0 ? f + 1 : 0),
                  void i.ve.query(
                    {
                      windowId:
                        o[
                          (w =
                            (((w =
                              (w =
                                (((w = c
                                  ? s
                                  : e.cRepeat > 0
                                  ? s + e.cRepeat - 1
                                  : s + e.cRepeat) %
                                  o.length) +
                                  o.length) %
                                o.length) !== f
                                ? w
                                : w + (e.cRepeat > 0 ? 1 : -1)) %
                              o.length) +
                              o.length) %
                            o.length)
                        ],
                      active: true,
                    },
                    function (n) {
                      var r = n[0],
                        o = e.get_cOptions().end
                          ? null
                          : null != e.get_cOptions().position
                          ? d.newTabIndex(
                              r,
                              e.get_cOptions().position,
                              false,
                              false
                            )
                          : r.index +
                            (false !== e.get_cOptions().right ? 1 : 0),
                        a = null == o || o > r.index,
                        s = null,
                        w = function () {
                          -1 !== b
                            ? (i.ve.move(
                                t.id,
                                {
                                  index: null != o ? o : -1,
                                  windowId: r.windowId,
                                },
                                function (n) {
                                  var r, t;
                                  if (i.ae()) return u(0), i.ae();
                                  if (s)
                                    for (
                                      r = s.findIndex(function (r) {
                                        return r.id === n.id;
                                      }),
                                        t = 0;
                                      t < s.length;
                                      t++
                                    )
                                      t !== r &&
                                        i.ve.move(
                                          s[t].id,
                                          {
                                            index: n.index + t,
                                            windowId: n.windowId,
                                          },
                                          i.ae
                                        );
                                  e.cPort && e.cPort.s.ur === n.id && p();
                                }
                              ),
                              I && i.selectWnd(r),
                              false !== e.get_cOptions().active &&
                                i.selectTab(t.id, i.ue(u)),
                              b > 0 && i.selectTab(b))
                            : i.ve.query(
                                {
                                  windowId: t.windowId,
                                  index: t.index + (a ? -1 : 1),
                                },
                                function (n) {
                                  return (
                                    (b = (n && n[0] && n[0].id) || -9),
                                    w(),
                                    i.ae()
                                  );
                                }
                              );
                        },
                        b = a && !t.index ? -9 : -1;
                      c && (f >= 0 || e.Wn >= 52) && (l || 1 !== m(e.cRepeat))
                        ? v.gu(
                            true,
                            0,
                            function (n, r) {
                              if (
                                ((t = n[r[1]]),
                                (n = n.slice(r[0], r[2])),
                                e.Wn < 52 &&
                                  (n = n.filter(function (n) {
                                    return n.incognito === t.incognito;
                                  })),
                                l)
                              ) {
                                if (!(n = v.mu(t, n, l)).length)
                                  return void u(0);
                                t = n.includes(t) ? t : n[0];
                              }
                              (s = n), (b = -9), w();
                            },
                            [],
                            u
                          )
                        : f >= 0 || e.Wn >= 52
                        ? w()
                        : ((b = -9), i.makeTempWindow_r(t.id, t.incognito, w));
                    }
                  )
                );
            } else
              _ = n.filter(function (n) {
                return n.id === t.windowId;
              });
            m(e.cRepeat) > 1
              ? r.moveTabToNewWindow(u)
              : i.makeWindow(
                  { tabId: t.id, incognito: t.incognito, focused: I },
                  1 === _.length && "normal" === _[0].type ? _[0].state : "",
                  function (n) {
                    n && p(), u(!!n);
                  }
                );
          });
        }),
        (r.moveTabToNextWindow = I),
        (_ = function (n, u, t, o) {
          var f,
            l,
            a,
            d = u[0],
            s = u[1],
            w = u[2],
            p = {
              bypassCache:
                true ===
                (e.get_cOptions().hard || e.get_cOptions().bypassCache),
            },
            b = i.ve.reload,
            I = n;
          if (m(e.cRepeat) < 2 || e.get_cOptions().single)
            b(n[o ? s : d].id, p, c.getRunNextCmdBy(0));
          else {
            if (
              ((f = n[s]),
              (l = e.get_cOptions().filter),
              (n = n.slice(d, w)),
              l)
            ) {
              if (!(n = v.mu(f, n, l)).length) return void t(0);
              f = n.includes(f) ? f : n[0];
            }
            if (n.length > 20 && c.uu())
              c.nu("reloadTab", n.length).then(
                r.reloadTab.bind(null, I, [d, s, w], t)
              );
            else
              for (a of (b(f.id, p, c.getRunNextCmdBy(0)), n))
                a !== f && b(a.id, p);
          }
        }),
        (r.reloadTab = _),
        (g = function (n, u, t) {
          var o,
            f,
            l,
            a,
            d,
            s,
            p,
            b,
            I,
            _,
            g,
            h,
            y,
            k,
            j,
            O,
            P = e.get_cOptions().highlighted,
            A = e.get_cOptions().goto || (e.get_cOptions().left ? "left" : ""),
            M = (A + "").split(/[\/,;\s]/),
            N = M.length > 1 ? M[m(e.cRepeat) > 1 ? 1 : 0] : A + "",
            R = "near" === N || "reverse" === N || N.startsWith("back"),
            S = N.startsWith("forw"),
            W = R ? e.cRepeat > 0 : S ? e.cRepeat < 0 : "left" === N,
            $ = R ? e.cRepeat < 0 : S ? e.cRepeat > 0 : "right" === N,
            z = N.includes("previous"),
            C = z && N.includes("only");
          if (u) {
            if (!t || !t.length) return n(0), i.ae();
            if (
              ((f = t.length),
              (l = i.selectFrom(t)),
              (d = 1),
              (s = a = l.index),
              (p = a + 1),
              m(e.cRepeat) > 1 && f > 1)
            ) {
              if (
                ((b = 0),
                t[0].pinned !== l.pinned && !(e.cRepeat < 0 && t[a - 1].pinned))
              )
                for (; t[b].pinned; ) b++;
              if (
                (d = (I = v.getTabRange(a, f - b, f))[1] - I[0]) > 20 &&
                c.uu() &&
                u < 3
              )
                return void c
                  .nu("removeTab", d)
                  .then(r.removeTab.bind(null, n, 2, t));
              d > 1 && ((s = b + I[0]), (p = b + I[1]));
            } else if (P) {
              if (
                ((g = "no-current" === P),
                (d =
                  (_ = t.filter(function (n) {
                    return n.highlighted && n !== l;
                  })).length + 1) > 1 &&
                  (g || d < f) &&
                  i.ve.remove(
                    _.map(function (n) {
                      return n.id;
                    }),
                    i.ae
                  ),
                g)
              )
                return void n(d > 1);
            } else if (
              e.get_cOptions().filter &&
              0 === v.mu(l, [l], e.get_cOptions().filter).length
            )
              return void n(0);
            if (
              !s &&
              d >= f &&
              true !==
                (null != e.get_cOptions().mayClose
                  ? e.get_cOptions().mayClose
                  : e.get_cOptions().allow_close)
            )
              u < 2
                ? i.getCurTabs(r.removeTab.bind(null, n, 3))
                : i.de.getAll(x.bind(null, n, l, t));
            else if (
              u < 2 &&
              (C
                ? (y = v.pu()) >= 0 && (h = i.te(i.tabsGet, y))
                : ($ || (W && s > 0)) &&
                  (h = i
                    .te(i.ve.query, {
                      windowId: l.windowId,
                      index: W ? s - 1 : s + 1,
                    })
                    .then(function (n) {
                      return n && n[0];
                    })),
              h)
            )
              h.then(function (e) {
                e && e.windowId === l.windowId && i.fe(e)
                  ? (i.selectTab(e.id), i.ve.remove(l.id, i.ue(n)))
                  : i.getCurTabs(r.removeTab.bind(null, n, 3));
              });
            else {
              if (((k = f), d >= f));
              else if (z)
                k = (j =
                  !C && p < f && !e.Sn.has(t[p].id)
                    ? t[p]
                    : t
                        .filter(function (n, r) {
                          return (r < s || r >= p) && e.Sn.has(n.id);
                        })
                        .sort(w.mr.do)[0])
                  ? j.index
                  : f;
              else if (W || $) {
                for (
                  O = k = W ? (s > 0 ? s - 1 : p) : p < f ? p : s - 1;
                  O >= 0 && O < f && (O < s || O >= p) && !i.fe(t[O]);

                )
                  O += O < s ? -1 : 1;
                k = O >= 0 && O < f ? O : k;
              }
              k >= 0 && k < f && i.selectTab(t[k].id), T(l, t, s, p, n);
            }
          } else
            ((o = m(e.cRepeat) > 1 || P || (z && !C))
              ? i.getCurTabs
              : i.getCurTab)(r.removeTab.bind(null, n, o ? 2 : 1));
        }),
        (r.removeTab = g),
        (x = function (n, r, u, t) {
          var o,
            f,
            l = false;
          (t = t.filter(function (n) {
            return "normal" === n.type;
          })),
            "always" === e.get_cOptions().keepWindow
              ? (l =
                  !t.length ||
                  t.some(function (n) {
                    return n.id === r.windowId;
                  }))
              : t.length <= 1
              ? ((l = true),
                (f = t[0]) &&
                  (f.id !== r.windowId
                    ? (l = false)
                    : f.incognito && !i.re(e.newTabUrl_f) && (o = f.id)))
              : r.incognito ||
                (1 ===
                  (t = t.filter(function (n) {
                    return !n.incognito;
                  })).length &&
                  t[0].id === r.windowId &&
                  ((o = t[0].id), (l = true))),
            l &&
              i.tabsCreate(
                { index: u.length, url: "", windowId: o },
                c.getRunNextCmdBy(3)
              ),
            T(r, u, 0, u.length, l ? null : n);
        }),
        (T = function (n, r, u, t, o) {
          var f, l, c;
          i.ve.remove(n.id, o ? i.ue(o) : i.ae),
            (l = r.slice(n.index + 1, t)),
            (c = r.slice(u, n.index)),
            e.cRepeat < 0 && ((l = (f = [c, l])[0]), (c = f[1])),
            l.length > 0 &&
              i.ve.remove(
                l.map(function (n) {
                  return n.id;
                }),
                i.ae
              ),
            c.length > 0 &&
              i.ve.remove(
                c.map(function (n) {
                  return n.id;
                }),
                i.ae
              );
        }),
        (r.toggleMuteTab = function (n) {
          var r, u, t, o;
          (r = e.get_cOptions().filter),
            e.get_cOptions().all ||
            r ||
            e.get_cOptions().other ||
            e.get_cOptions().others
              ? ((t = function (t) {
                  var o,
                    c,
                    a,
                    d =
                      e.get_cOptions().other || e.get_cOptions().others
                        ? e.cPort
                          ? e.cPort.s.ur
                          : e.jn
                        : -1,
                    s =
                      0 === t.length ||
                      (-1 !== d && 1 === t.length && t[0].id === d);
                  if (null != e.get_cOptions().mute)
                    s = !!e.get_cOptions().mute;
                  else
                    for (o of t)
                      if (o.id !== d && !i.isTabMuted(o)) {
                        s = true;
                        break;
                      }
                  if (!r || (t = v.mu(u, t, r)).length) {
                    for (o of ((c = { muted: s }), t))
                      o.id !== d &&
                        s !== i.isTabMuted(o) &&
                        i.tabsUpdate(o.id, c);
                    (a = -1 === d ? "All" : "Other"),
                      Promise.resolve(l._r(a)).then(function (r) {
                        f.showHUD(l._r(s ? "mute" : "unmute", [r || a])), n(1);
                      });
                  } else n(0);
                }),
                (o = v.getNecessaryCurTabInfo(r))
                  ? o.then(function (n) {
                      (u = n), i.ve.query({ audible: true }, t);
                    })
                  : i.ve.query(
                      {
                        audible: true,
                      },
                      t
                    ))
              : i.getCurTab(function (r) {
                  var u = r[0],
                    t = !i.isTabMuted(u),
                    o =
                      null != e.get_cOptions().mute
                        ? !!e.get_cOptions().mute
                        : t;
                  o === t && i.tabsUpdate(u.id, { muted: o }),
                    f.showHUD(l._r(o ? "muted" : "unmuted")),
                    n(1);
                });
        }),
        (r.togglePinTab = function (n, r, u) {
          var t,
            o,
            f,
            l,
            a,
            d,
            s,
            w,
            p = e.get_cOptions().filter,
            b = r[1],
            I = n[b];
          if (
            ((n = p ? v.mu(I, n, p) : n),
            (t =
              !p || n.includes(I)
                ? !I.pinned
                : !!n.find(function (n) {
                    return !n.pinned;
                  })),
            (o = { pinned: t }),
            (f = t ? 0 : 1),
            (l = 0),
            m(e.cRepeat) > 1 && t)
          )
            for (; n[l].pinned; ) l++;
          for (
            d = l + (a = v.getTabRange(b - l, n.length - l, n.length))[f] - f,
              s = l + a[1 - f] - f,
              w = [];
            d !== s;
            d += t ? 1 : -1
          )
            (t || n[d].pinned) && w.push(n[d]);
          (s = w.length)
            ? (s <= 30 || !c.uu()
                ? Promise.resolve(false)
                : c.nu("togglePinTab", s)
              )
                .then(function (n) {
                  n && (w.length = 1);
                })
                .then(function () {
                  var n,
                    r = w.includes(I) ? I.id : w[0].id;
                  for (n of w)
                    i.tabsUpdate(n.id, o, n.id === r ? i.ue(u) : i.ae);
                })
            : u(0);
        }),
        (r.toggleTabUrl = function (n, r) {
          var a,
            s = i.getTabUrl(n[0]),
            v = e.get_cOptions().reader,
            w = e.get_cOptions().keyword;
          if (s.startsWith(e.u.lt))
            return (
              f.complainLimits(l._r(v ? "noReader" : "openExtSrc")), void r(0)
            );
          v && w
            ? (a = o.He({ u: s })) && a.k === w
              ? (c.overrideCmdOptions({ keyword: "" }),
                d.openUrlWithActions(a.u, 0, true, n))
              : ((s = t.$e(a && e.get_cOptions().parsed ? a.u : s, w)),
                d.openUrlWithActions(s, 9, true, n))
            : v
            ? e.Xn && u.Zt.test(s)
              ? ((s = s.startsWith("read:")
                  ? u.zt(s.slice(s.indexOf("?url=") + 5))
                  : "read://"
                      .concat(
                        new URL(s).origin.replace(/:\/\/|:/g, "_"),
                        "/?url="
                      )
                      .concat(u.k(s))),
                d.openUrlWithActions(s, 9, true, n))
              : (f.complainLimits(l._r("noReader")), r(0))
            : ((s = s.startsWith("view-source:")
                ? s.slice(12)
                : "view-source:" + s),
              d.openUrlWithActions(s, 9, true, n));
        }),
        (r.Ur = function (n, r, u, t) {
          var o,
            f,
            l,
            a,
            d,
            s,
            v = n.id,
            w = 1 === r;
          if (r && i.se() && (false !== t || null == i.getGroupId(n)))
            return (
              (o = 0),
              (f = -1),
              (l = function () {
                var n = i.ae();
                if (n)
                  return (
                    i.se().restore(null, c.getRunNextCmdBy(0)),
                    f >= 0 && i.ve.remove(f),
                    (f = 0),
                    n
                  );
                (o += 1) >= 5 ||
                  setTimeout(function () {
                    i.tabsGet(v, l);
                  }, 50 * o * o);
              }),
              w &&
                i.tabsCreate(
                  { url: "about:blank", active: false, windowId: n.windowId },
                  function (n) {
                    f ? (f = n.id) : i.ve.remove(n.id);
                  }
                ),
              void i.ve.remove(v, function () {
                return i.tabsGet(v, l), i.ae();
              })
            );
          (d = i.isTabMuted(n)),
            (a = function (n) {
              d !== i.isTabMuted(n) && i.tabsUpdate(n.id, { muted: d });
            }),
            (s = {
              windowId: n.windowId,
              index: n.index,
              url: i.getTabUrl(n),
              active: n.active,
              pinned: n.pinned,
              openerTabId: n.openerTabId,
            }),
            u && (s = Object.assign(u, s)),
            null != s.index && s.index++,
            i.openMultiTabs(s, 1, true, [null], t, n, function (n) {
              n && a && a(n),
                n ? c.runNextOnTabLoaded(e.get_cOptions(), n) : c.runNextCmd(0);
            }),
            i.ve.remove(v);
        });
    }
  );
