"use strict";
(__filename = "background/open_urls.js"),
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
      "./exclusions",
      "./i18n",
      "./key_mappings",
      "./run_commands",
      "./clipboard",
      "./tools",
    ],
    function (n, u, r, e, t, i, l, o, f, c, a, s, d, v) {
      var p, w, m, g, b, y, h, _, I, $, k, P, T, x, U, j, z, L, M, N;
      Object.defineProperty(u, "__esModule", { value: true }),
        (u.du =
          u.openUrlReq =
          u.openUrl =
          u.goToNextUrl =
          u.openUrlWithActions =
          u.openShowPage =
          u.openJSUrl =
          u.parseReuse =
          u.vu =
          u.parseOpenPageUrlOptions =
          u.preferLastWnd =
          u.newTabIndex =
            void 0),
        (e = __importStar(e)),
        (p = {
          current: 0,
          reuse: 1,
          newwnd: 2,
          frame: 3,
          newbg: -2,
          lastwndfg: -5,
          lastwnd: -5,
          lastwndbg: -6,
          iflastwnd: -7,
          lastwndbgbg: -8,
          lastwndbginactive: -8,
        }),
        (u.newTabIndex = function (n, u, r, e) {
          return "before" === u ||
            "left" === u ||
            "prev" === u ||
            "previous" === u
            ? n.index
            : "after" === u || "next" === u || "right" === u
            ? n.index + 1
            : "default" === u
            ? void 0
            : false !== e && null != t.getGroupId(n)
            ? "start" === u || "begin" === u
              ? n.index
              : "end" === u
              ? void 0
              : n.index + 1
            : "start" === u || "begin" === u
            ? 0
            : "end" === u
            ? r
              ? 3e4
              : void 0
            : n.index + 1;
        }),
        (u.preferLastWnd = function (n) {
          return (
            n.find(function (n) {
              return n.id === r.vn;
            }) || n[n.length - 1]
          );
        }),
        (u.parseOpenPageUrlOptions = function (n) {
          return {
            g: n.group,
            i: n.incognito,
            m: n.replace,
            o: n.opener,
            r: n.reuse,
            p: n.position,
            w: n.window,
          };
        }),
        (w = function (n) {
          return "boolean" == typeof n
            ? n
            : n
            ? "force" === n ||
              ("reverse" === n
                ? 2 !== r.Mn
                : "same" === n || "keep" === n
                ? 2 === r.Mn
                : null)
            : null;
        }),
        (m = function (n) {
          return "popup" === n || "normal" === n ? n : void 0;
        }),
        (g = function (n, u, e) {
          var i = function (u) {
            return !(
              (n && u.type !== n) ||
              (null != e && u.incognito !== e) ||
              "minimized" === u.state
            );
          };
          return (
            r.vn < 0
              ? Promise.resolve(null)
              : new Promise(function (n) {
                  t.de.get(r.vn, function (u) {
                    return n(u ? (i(u) ? u : null) : (r.en(-1), null)), t.ae();
                  });
                })
          ).then(function (n) {
            return (
              n ||
              new Promise(function (n) {
                return t.de.getAll(function (e) {
                  var t = e.filter(function (n) {
                      return i(n) && n.id !== r.Cn;
                    }),
                    l =
                      t.length > 0
                        ? t.sort(function (n, u) {
                            return u.id - n.id;
                          })[0]
                        : null;
                  l && r.vn < 0 && r.en(l.id),
                    n(
                      l || !u
                        ? l
                        : e.find(function (n) {
                            return n.id === r.Cn;
                          }) ||
                            e.find(function (n) {
                              return n.focused;
                            }) ||
                            null
                    );
                });
              })
            );
          });
        }),
        (u.vu = function (n, u) {
          n = n.slice(0, 128).split("?")[0].replace(/\\/g, "/");
          var e =
            2 === r.Tn.o &&
            /\/globalroot\/device\/condrv|\bdevice\/condrv\/kernelconnect/.test(
              n
            );
          return (
            e && (r.set_cPort(u || r.cPort), o.showHUD(c._r("harmfulURL"))), e
          );
        }),
        (b = function (n, l, f, c) {
          var d, v;
          if (c instanceof Promise) c.then(b.bind(0, n, l, f));
          else
            switch ((e.Dt(), c[1])) {
              case 1:
                o.showHUD(c[0], 15), s.runNextCmdBy(1, l);
                break;
              case 5:
              case 7:
                s.replaceCmdOptions(l),
                  7 === c[1] || l.$p
                    ? (n = 0)
                    : (s.overrideCmdOptions({}, true),
                      s.overrideOption("$p", 1)),
                  u.openUrlWithActions(i.$e(c[0]), n, false, f);
                break;
              case 4:
                n >= 3 && c[0] && s.runNextCmdBy(1, l);
                break;
              case 6:
                if (((v = r.jn), "openUrls" === (d = c[0])[0]))
                  return (
                    s.replaceCmdOptions(l),
                    s.overrideCmdOptions(
                      {
                        urls: d.slice(1),
                        url: null,
                        url_f: null,
                        copied: null,
                      },
                      true
                    ),
                    void t.getCurTab(U)
                  );
                setTimeout(function () {
                  var n = r.Pn.get(v),
                    u = e.Pt({ keys: [d[1]] });
                  r.set_cEnv(null),
                    s.executeCommand(
                      a.na("runKey", u),
                      1,
                      0,
                      n ? n.cr : null,
                      0,
                      null
                    );
                }, 0);
            }
        }),
        (y = function (n, u, r) {
          n ? s.runNextOnTabLoaded(u, r) : s.runNextCmdBy(0, u);
        }),
        (h = function (n, u, e, i, l) {
          var o = function (u) {
            return y(u, n, u), t.ae();
          };
          if (l) {
            if (l.length > 0 && l[0].incognito && t.re(e))
              return void t.tabsCreate({ url: e }, o);
          } else if (t.re(e) && true !== i)
            return void t.getCurTab(h.bind(null, n, u, e, true));
          3 === u && r.cPort && r.cPort.s.or
            ? s.sendFgCmd(0, false, { r: 1, u: e })
            : l
            ? t.tabsUpdate(l[0].id, { url: e }, o)
            : t.tabsUpdate({ url: e }, o);
        }),
        (_ = function (n, u, r, e, i, l) {
          t.makeWindow(
            {
              url: n,
              focused: u,
              incognito: r,
              type:
                "string" == typeof n || 1 === n.length ? m(e.window) : void 0,
              left: i.left,
              top: i.top,
              width: i.width,
              height: i.height,
            },
            null != i.state
              ? i.state
              : l && "minimized" !== l.state
              ? l.state
              : "",
            function (n) {
              y(n, e, n && n.tabs[0]);
            }
          );
        }),
        (I = function (n, e, i, l, o) {
          var f,
            c,
            a = -2 !== e,
            s = l ? l.windowId : r.Cn,
            d = o.find(function (n) {
              return n.id === s;
            }),
            v = null != d && d.incognito;
          !i.window &&
          2 !== e &&
          (v ||
            (o = o.filter(function (n) {
              return n.incognito && "normal" === n.type;
            })).length > 0)
            ? ((f = {
                url: n[0],
                active: a,
                windowId: v ? s : u.preferLastWnd(o).id,
              }),
              v &&
                ((f.index = u.newTabIndex(
                  l,
                  i.position,
                  (c = true === i.opener),
                  i.group
                )),
                c && (f.openerTabId = l.id)),
              t.openMultiTabs(
                f,
                r.cRepeat,
                true,
                n,
                v && i.group,
                l,
                function (n) {
                  !v && a && t.selectWnd(n), y(n, i, n);
                }
              ))
            : _(n, true, true, i, i, d);
        }),
        (u.parseReuse = function (n) {
          return null == n
            ? -1
            : "string" != typeof n
            ? "boolean" == typeof n
              ? n
                ? 1
                : -1
              : isNaN(+n)
              ? -1
              : 0 | n
            : (n = n
                .toLowerCase()
                .replace("window", "wnd")
                .replace(/-/g, "")) in p
            ? p[n]
            : -1;
        }),
        ($ = function (n, u, i) {
          var l,
            o,
            f,
            c,
            a,
            s,
            d,
            v,
            p = u && u.length > 0 ? t.getTabUrl(u[0]) : "",
            w = [
              true !== i
                ? false === i
                  ? ""
                  : i
                : (/[%$]s/i.exec(n) || ["${url_mask}"])[0],
              r.get_cOptions().host_mask || r.get_cOptions().host_mark,
              r.get_cOptions().tabid_mask ||
                r.get_cOptions().tabId_mask ||
                r.get_cOptions().tabid_mark ||
                r.get_cOptions().tabId_mark,
              r.get_cOptions().title_mask || r.get_cOptions().title_mark,
              r.get_cOptions().id_mask ||
                r.get_cOptions().id_mark ||
                r.get_cOptions().id_marker,
            ],
            m = [];
          for (l = 0; l < w.length; l++)
            if (
              (f = (o = null != w[l] ? w[l] + "" : "") ? n.indexOf(o) : -1) >= 0
            ) {
              for (a of ((c = f + o.length), m));
              m.push([
                f,
                c,
                0 === l
                  ? /^[%$]S|^\$\{S:/.test(o)
                    ? p
                    : e.k(p)
                  : 1 === l
                  ? new URL(p).host
                  : 2 === l
                  ? p && "" + u[0].id
                  : 3 === l
                  ? p && "" + e.k(u[0].title)
                  : t.me.runtime.id,
              ]);
            }
          if (m.length) {
            for (v of ((s = ""),
            (d = 0),
            m.sort(function (n, u) {
              return n[0] - u[0];
            }),
            m))
              (s = s + n.slice(d, v[0]) + v[2]), (d = v[1]);
            n = s + n.slice(d);
          }
          return n;
        }),
        (k = function (n, e, i, l) {
          var o = w(l.incognito);
          (e > -4
            ? new Promise(function (n) {
                t.getCurWnd(false, function (u) {
                  return n(u || null), t.ae();
                });
              })
            : g(m(l.window), true, o)
          )
            .then(function (n) {
              return (
                n &&
                new Promise(function (u) {
                  t.ve.query({ active: true, windowId: n.id }, function (r) {
                    return (n.tabs = r), u(n), t.ae();
                  });
                })
              );
            })
            .then(function (f) {
              var c,
                a = !!f && !f.focused && f.id !== r.Cn,
                d = -7 === e && !a;
              if (f && (a || (-7 === e && (null == o || f.incognito === !!o))))
                (c = f.tabs && f.tabs.length > 0 ? t.selectFrom(f.tabs) : null),
                  t.openMultiTabs(
                    {
                      url: n[0],
                      active: e > -6 || d,
                      windowId: f.id,
                      pinned: !!l.pinned,
                      index: c
                        ? u.newTabIndex(c, l.position, false, l.group)
                        : void 0,
                    },
                    r.cRepeat,
                    !!l.incognito && "string" == typeof l.incognito,
                    n,
                    l.group,
                    c,
                    function (n) {
                      e > -6
                        ? a && t.selectWnd(n)
                        : n && e > -8 && !d && t.selectTab(n.id),
                        y(n, l, e > -6 && -2 !== e && n);
                    }
                  );
              else {
                if (-7 === e && s.runNextCmdBy(0, l)) return;
                _(n, e > -8, null != o ? !!o : i, l, l, f);
              }
            });
        }),
        (P = function (n, e, i, l) {
          var o,
            f,
            c = l && l[0],
            a = (!!c && c.incognito) || 2 === r.Mn,
            s = -2 !== e && -8 !== e,
            d = 2 === e || e < -3 || !!i.window,
            v = w(i.incognito),
            p = null != v && "string" == typeof i.incognito;
          if (!p && n.some(t.re)) d = a || d;
          else if (a) d = false === v || d;
          else if (v && e > -4)
            return void t.de.getAll(I.bind(null, n, e, i, c));
          d
            ? k(n, e, a, i)
            : ((f = {
                url: n[0],
                active: s,
                windowId: c ? c.windowId : void 0,
                openerTabId: (o = i.opener && c ? c.id : void 0),
                pinned: !!i.pinned,
                index: c
                  ? u.newTabIndex(c, i.position, null != o, i.group)
                  : void 0,
              }),
              t.openMultiTabs(f, r.cRepeat, p, n, i.group, c, function (n) {
                s && n && t.selectWndIfNeed(n), y(n, i, s && n);
              }));
        }),
        (T = function (n, e, i, l, o, c) {
          var a,
            d = i
              ? "string" == typeof i
                ? f.Vt(i)
                : "object" == typeof i && i.t && i.v
                ? i
                : null
              : null,
            v = 2 === e || 1 === e,
            p = (1 === e && o.q) || {},
            b = m(1 === e ? p.w : l.window),
            h = w(1 !== e ? l.incognito : p.i),
            _ = true === (1 !== e ? l.group : p.g);
          r.set_cRepeat(1),
            1 === e
              ? ((p.m = null), (p.g = _))
              : (s.overrideOption("group", _, l),
                null != l.replace && s.overrideOption("replace", d, l)),
            (a =
              e < -3 && d
                ? g(b, -7 === e, h)
                : Promise.resolve(!v && r.Cn >= 0 ? { id: r.Cn } : null)),
            Promise.all([
              a,
              !_ || c
                ? null
                : new Promise(function (n) {
                    t.getCurTab(function (u) {
                      (c = u || []), n();
                    });
                  }),
            ])
              .then(function (n) {
                var u = n[0];
                return d && (u || v)
                  ? new Promise(function (n) {
                      t.ve.query(
                        u ? { windowId: u.id } : { windowType: b || void 0 },
                        function (u) {
                          var i,
                            l,
                            o = null != h ? !h : e > -4 ? 2 !== r.Mn : -2,
                            a = (u || []).filter(function (n) {
                              return f.Qt(d, n.url) && n.incognito !== o;
                            });
                          return (
                            _ &&
                              a.length > 0 &&
                              c.length > 0 &&
                              ((i = t.getGroupId(c[0])),
                              u &&
                                (a = a.filter(function (n) {
                                  return t.getGroupId(n) === i;
                                }))),
                            a.sort(function (n, u) {
                              var e = r.Sn.get(u.id),
                                t = r.Sn.get(n.id);
                              return t
                                ? e
                                  ? e.i - t.i
                                  : 1
                                : e
                                ? -1
                                : u.id - n.id;
                            }),
                            1 === e &&
                              ((l = a.filter(function (n) {
                                return n.windowId === r.Cn;
                              })),
                              (a = l.length > 0 ? l : a)),
                            n(a.length ? a[0] : null),
                            t.ae()
                          );
                        }
                      );
                    })
                  : null;
              })
              .then(function (i) {
                var f, a;
                null == i || (i.id === r.jn && 1 !== e)
                  ? 1 === e
                    ? u.du(o)
                    : s.runNextCmdBy(0, l) ||
                      (c
                        ? P([n], e, l, c)
                        : t.getCurTab(P.bind(null, [n], e, l)))
                  : ((f = -2 !== e && -8 !== e),
                    (a = i.windowId !== r.Cn && e > -6),
                    t.tabsUpdate(i.id, { url: n }, function (n) {
                      return (
                        n &&
                          (f && (t.selectTab(n.id), (n.active = true)),
                          a && t.selectWnd(n)),
                        y(n, 1 === e ? o.f || {} : l, -2 !== e && e > -6 && n),
                        t.ae()
                      );
                    }));
              });
        }),
        (u.openJSUrl = function (n, u, i, l) {
          if (!/^(void|\(void\))? ?(0|\(0\))?;?$/.test(n.slice(11).trim())) {
            if (!i && r.cPort) {
              if (
                (0 === l &&
                  r.set_cPort(
                    o.indexFrame(r.cPort ? r.cPort.s.ur : r.jn, 0) || r.cPort
                  ),
                o.safePost(r.cPort, {
                  N: 5,
                  u: n,
                  f: s.parseFallbackOptions(u),
                }))
              )
                return;
              r.set_cPort(null);
            }
            var f = function (r) {
              if (-1 === r || t.ae()) {
                var l = e.zt(n.slice(11));
                return (
                  t.te(t.ve.executeScript, { code: l }).then(function (n) {
                    void 0 === n && i && i(), y(void 0 !== n, u, null);
                  }),
                  t.ae()
                );
              }
              s.runNextOnTabLoaded(u, null);
            };
            r.Wn < 71 ? t.tabsUpdate({ url: n }, f) : f(-1);
          }
        }),
        (x = function (n, e, i, l) {
          var o,
            f,
            c,
            a = r.u.vt;
          return (
            !(n.length < a.length + 3 || !n.startsWith(a)) &&
            (l
              ? ((n = n.slice(a.length)),
                (o = l.incognito),
                n.startsWith("#!image ") &&
                  o &&
                  (n = "#!image incognito=1&" + n.slice(8).trim()),
                r.r(
                  ((f = [n, null, 0])[1] = function () {
                    return clearTimeout(f[2]), r.r(null), f[0];
                  })
                ),
                (f[2] = setTimeout(function () {
                  (f[0] =
                    "#!url vimium://error (vimium://show: sorry, the info has expired.)"),
                    (f[2] = setTimeout(function () {
                      r.j === f[1] && r.r(null), (f[0] = ""), (f[1] = null);
                    }, 2e3));
                }, 1200)),
                r.set_cRepeat(1),
                (0 !== e && 3 !== e) || o
                  ? o && [0, 3, -2, -1].indexOf(e) >= 0
                    ? t.tabsCreate({ url: a, active: -2 !== e }, function (n) {
                        y(n, i, n);
                      })
                    : ((i.incognito = false), P([a], e, i, [l]))
                  : ((c =
                      r.Wn >= 54 && !l.url.split("#", 2)[1]
                        ? t.me.extension.getViews({ tabId: l.id })
                        : []).length > 0 &&
                    c[0].location.href.startsWith(a) &&
                    c[0].onhashchange
                      ? c[0].onhashchange()
                      : t.tabsUpdate(l.id, { url: a }),
                    s.runNextOnTabLoaded(i, null)),
                true)
              : (t.getCurTab(function (r) {
                  if (!r || r.length <= 0) return t.ae();
                  u.openShowPage(n, e, i, r[0]);
                }),
                true))
          );
        }),
        (u.openShowPage = x),
        (U = function (n) {
          var e,
            l,
            o,
            f,
            c = r.get_cOptions(),
            a = c.urls;
          if (2 !== c.$fmt) {
            if (1 !== c.$fmt)
              for (e = 0; e < a.length; e++) a[e] = i.$e(a[e] + "");
            s.overrideOption("$fmt", 2);
          }
          for (l of a) if (u.vu(l)) return t.ae();
          (f =
            1 === (o = u.parseReuse(c.reuse)) || 0 === o || 3 === o ? -1 : o),
            r.set_cOptions(null),
            P(a, f, c, n);
        }),
        (j = function (n, l, o, f) {
          var c, a, v, p, w, m, g, y, _;
          "string" != typeof n ||
            (n || 9 !== l
              ? ((a = s.fillOptionWithMask(
                  n,
                  r.get_cOptions().mask,
                  "value",
                  ["url", "url_mask", "value"],
                  r.cRepeat
                )).ok && ((n = a.result), a.useCount && r.set_cRepeat(1)),
                (v = r.get_cOptions().url_mask),
                (p = r.get_cOptions().url_mark),
                (null == v && null == p) || (n = $(n, f, null != v ? v : p)),
                o && ((w = d.eu(r.get_cOptions())), (n = r.V(n, 0, w))),
                9 !== l &&
                  ((m = (r.get_cOptions().keyword || "") + ""),
                  (n = (
                    null !== (c = r.get_cOptions().testUrl) && void 0 !== c
                      ? c
                      : !m
                  )
                    ? i.$e(n, m, l)
                    : i.he(n.trim().split(e.Bt), m || "~"))),
                (g = r.get_cOptions().goNext) &&
                  n &&
                  "string" == typeof n &&
                  ((n = r.V(n, 8192)), (n = u.goToNextUrl(n, r.cRepeat, g)[1])),
                (n = "string" == typeof n ? i.we(n) : n))
              : (n = r.newTabUrl_f)),
            (y = r.get_cOptions()),
            (_ = u.parseReuse(y.reuse)),
            r.set_cOptions(null),
            e.Dt(),
            "string" != typeof n
              ? b(l, y, f, n)
              : u.openShowPage(n, _, y) ||
                (e.Et(n)
                  ? u.openJSUrl(n, y, null, _)
                  : u.vu(n)
                  ? s.runNextCmdBy(0, y)
                  : 1 === _
                  ? T(
                      n,
                      _,
                      y.replace,
                      null,
                      {
                        u: n,
                        p: y.prefix,
                        q: u.parseOpenPageUrlOptions(y),
                        f: s.parseFallbackOptions(y),
                      },
                      f
                    )
                  : 0 === _ || 3 === _
                  ? h(y, _, n)
                  : y.replace
                  ? T(n, _, y.replace, y, null, f)
                  : f
                  ? P([n], _, y, f)
                  : t.getCurTab(P.bind(null, [n], _, y)));
        }),
        (u.openUrlWithActions = j),
        (z = function (n, f) {
          var a, d, v, p, w, m, g, b, y, h, _, I, $;
          if (null === f)
            return o.complainLimits("read clipboard"), void s.runNextCmd(0);
          if (!(f = f.trim()))
            return o.showHUD(c._r("noCopied")), void s.runNextCmd(0);
          if (
            ((v =
              "string" == typeof (d = r.get_cOptions().copied) &&
              d.includes("any")),
            ("urls" === d || v) && (a = f.split(/[\r\n]+/g)).length > 1)
          ) {
            for (g of ((p = []),
            (w =
              v && r.get_cOptions().keyword
                ? r.get_cOptions().keyword + ""
                : null),
            (m = false),
            a))
              if ((g = g.trim())) {
                if (((g = i.$e(g, w, 0)), !(v || i._e < 2))) {
                  (p.length = 0), (m = true);
                  break;
                }
                p.push(g);
              }
            if (p.length > 1)
              return (
                r.set_cOptions(s.copyCmdOptions(e.It(), r.get_cOptions())),
                (r.get_cOptions().urls = p),
                (r.get_cOptions().$fmt = 1),
                void (n && n.length > 0 ? U(n) : t.getCurTab(U))
              );
            if (m)
              return void (
                s.runNextCmd(0) || o.showHUD("The copied lines are not URLs")
              );
          }
          i.Se.test(f)
            ? (f = f.slice(1, -1))
            : (null != (b = r.get_cOptions().testUrl)
                ? b
                : !r.get_cOptions().keyword) && (f = l.Pe(f, b)),
            (y = f.indexOf("://") + 3) > 3 &&
              e.Zt.test(f) &&
              ((h = void 0),
              (_ =
                (f = /^ttps?:/i.test(f) ? "h" + f : f).indexOf("/", y) + 1 ||
                f.length),
              (I = f.slice(y, _)),
              (f = ($ = I.startsWith("0.0.0.0")
                ? 7
                : I.includes(":::") && (h = /^(\[?::\]?):\d{2,5}$/.exec(I))
                ? h[1].length
                : 0)
                ? f.slice(0, y) +
                  ($ > 6 ? "127.0.0.1" : "[::1]") +
                  f.slice(y + $)
                : f)),
            u.openUrlWithActions(f, 2, false, n);
        }),
        (u.goToNextUrl = function (n, u, r) {
          var e = false;
          return (
            (n = n.replace(
              /\$(?:\{(\d+)[,\/#@](\d*):(\d*)(:-?\d*)?\}|\$)/g,
              function (n, t, i, l, o) {
                var f, c, a, s, d;
                return "$$" === n
                  ? "$"
                  : ((e = true),
                    (c = (t && parseInt(t)) || 1),
                    (a = (i && parseInt(i)) || 0),
                    (s = (l && parseInt(l)) || 0),
                    (d = (o && parseInt(o.slice(1))) || 1) < 0 &&
                      ((a = (f = [s, a])[0]), (s = f[1])),
                    (u *= d),
                    (c =
                      "absolute" !== r
                        ? c + u
                        : u > 0
                        ? a + u - 1
                        : u < 0
                        ? s + u
                        : c),
                    "" + Math.max(a || 1, Math.min(c, s ? s - 1 : c)));
              }
            )),
            [e, n]
          );
        }),
        (L = function (n) {
          var e, i, l;
          if (r.get_cOptions().urls)
            r.get_cOptions().urls instanceof Array &&
              (n && n.length > 0 ? U(n) : t.getCurTab(U));
          else {
            if (
              (null != r.get_cOptions().url_mask ||
                null != r.get_cOptions().url_mark) &&
              !n
            )
              return t.ae() || void t.getCurTab(u.openUrl);
            (e = r.get_cOptions().url)
              ? u.openUrlWithActions(e + "", 3, true, n)
              : r.get_cOptions().copied
              ? (i = r.I(d.eu(r.get_cOptions()))) instanceof Promise
                ? i.then(z.bind(null, n))
                : z(n, i)
              : ((l = r.get_cOptions().url_f),
                u.openUrlWithActions(l || "", 9, false, n));
          }
        }),
        (u.openUrl = L),
        (M = function (n, t) {
          var f, c, a, d, v, p, m, g, b, y, h, _;
          if (
            (e.Pt(n),
            (c = null != t && o.isNotVomnibarPage(t, true)),
            r.set_cPort(c ? t : o.findCPort(t) || r.cPort),
            (a = n.u),
            (d = (n.n && s.parseFallbackOptions(n.n)) || {}),
            (p = ((v = n.o || e.It()).k || "") + ""),
            (m = null !== (f = v.t) && void 0 !== f ? f : !p),
            (g = v.s),
            (y = (b = n.m || 0) < 64 ? -17 & b : b),
            (h = null != n.f ? n.f : 43 === y),
            (d.group = !c || v.g),
            (d.incognito = null != w(v.i) ? v.i : 43 === y || null),
            (d.replace = v.m),
            (d.position = v.p),
            (d.reuse =
              null != v.r
                ? v.r
                : b
                ? "window" === n.t
                  ? 2
                  : (16 & b ? -2 : -1) + ("last-window" === n.t ? -4 : 0)
                : n.r),
            (d.window = v.w),
            a)
          )
            ":" === a[0] &&
              !c &&
              /^:[bhtwWBHdso]\s/.test(a) &&
              (a = n.u = a.slice(2).trim()),
              (a = m ? l.Me(a, h) : a),
              (a = r.V(a, c ? (h ? 1048576 : 524288) : 16384, g)),
              h
                ? (a = a !== n.u ? i.$e(a) : a)
                : m || !c
                ? ((a = m ? l.Pe(a, m) : a),
                  (a = i.$e(a, p, c ? -1 : 3)),
                  (_ = i._e),
                  null == n.h || (2 !== _ && 1 !== _)
                    ? c && 3 === _ && a.startsWith("vimium:") && (a = i.$e(a))
                    : (a =
                        (n.h ? "https" : "http") +
                        a.slice("s" === a[4] ? 5 : 4)))
                : (a = i.he(a.trim().split(e.Bt), p || "~")),
              (d.opener = c
                ? false !== v.o
                : r.Un.vomnibarOptions.actions.includes("opener")),
              (d.url_f = a);
          else {
            if (false === n.c) return;
            (d.copied = null == n.c || n.c),
              (d.keyword = p),
              (d.testUrl = v.t),
              (d.sed = g);
          }
          r.set_cRepeat(1), s.replaceCmdOptions(d), u.openUrl();
        }),
        (u.openUrlReq = M),
        (N = function (n, e) {
          var l,
            o,
            f = function (e) {
              var i,
                f,
                d,
                v =
                  null !== (i = w(o.i)) && void 0 !== i
                    ? i
                    : 2 === r.Mn && null;
              return (
                null !== v &&
                  e &&
                  (e = e.filter(function (n) {
                    return n.incognito === v;
                  })),
                o.g &&
                  l.length > 0 &&
                  ((f = t.getGroupId(l[0])),
                  e &&
                    (e = e.filter(function (n) {
                      return t.getGroupId(n) === f;
                    }))),
                e && e.length > 0
                  ? ((d = e.filter(function (n) {
                      return n.windowId === r.Cn;
                    })),
                    void c(d.length > 0 ? d : e))
                  : ((n.f && s.runNextCmdBy(0, n.f)) ||
                      (l.length <= 0 || o.w || (2 === r.Mn && !l[0].incognito)
                        ? t.makeWindow(
                            {
                              url: n.u,
                              type: m(o.w),
                              incognito: 2 === r.Mn && !t.re(n.u),
                            },
                            "",
                            function (n) {
                              a(
                                n && n.tabs && n.tabs.length > 0
                                  ? n.tabs[0]
                                  : null
                              );
                            }
                          )
                        : t.openMultiTabs(
                            {
                              url: n.u,
                              index: u.newTabIndex(l[0], o.p, false, true),
                              openerTabId: o.o && l[0] ? l[0].id : void 0,
                              windowId: l[0].windowId,
                              active: true,
                            },
                            1,
                            null,
                            [null],
                            o.g,
                            l[0],
                            a
                          )),
                    t.ae())
              );
            },
            c = function (u) {
              var e,
                i,
                l,
                o = n.u;
              n.p &&
                u.sort(function (n, u) {
                  return n.url.length - u.url.length;
                }),
                (e = t.selectFrom(u)).url.length > u[0].url.length &&
                  (e = u[0]),
                !o.startsWith(r.u.gt) || r.Pn.get(e.id) || n.s
                  ? ((i = r.Xn ? e.url.replace(/^edge:/, "chrome:") : e.url),
                    (l = r.Xn ? o.replace(/^edge:/, "chrome:") : o),
                    t.tabsUpdate(
                      e.id,
                      { url: i.startsWith(l) ? void 0 : o, active: true },
                      a
                    ),
                    t.selectWndIfNeed(e))
                  : (t.tabsCreate({ url: o }, a), t.ve.remove(e.id));
            },
            a = function (u) {
              if (!u) return n.f && s.runNextCmdBy(0, n.f), t.ae();
              s.runNextOnTabLoaded(
                n.f || {},
                u,
                n.s &&
                  function () {
                    v.yr.Qr(n, u);
                  }
              );
            },
            d = i.we(n.u.split("#", 1)[0]);
          u.vu(d, e) ||
            ((null == (o = n.q || (n.q = {})).g || d.startsWith(r.u.gt)) &&
              (o.g = false),
            o.m
              ? T(n.u, (null != o.r && u.parseReuse(o.r)) || 1, o.m, null, n)
              : t.getCurTab(function (u) {
                  l = u;
                  var r,
                    e = m(o.w) || "normal";
                  return (
                    (!d.startsWith("file:") && !d.startsWith("ftp")) ||
                      d.includes(".", d.lastIndexOf("/") + 1) ||
                      (r = d + (n.p ? "/*" : "/")),
                    n.p && (d += "*"),
                    t.ve.query({ url: r || d, windowType: e }, function (n) {
                      return (
                        (n && n.length > 0) || !r
                          ? f(n)
                          : t.ve.query({ url: d, windowType: e }, f),
                        t.ae()
                      );
                    }),
                    t.ae()
                  );
                }));
        }),
        (u.du = N);
    }
  );
