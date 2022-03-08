"use strict";
(__filename = "background/all_commands.js"),
  define(
    [
      "require",
      "exports",
      "./utils",
      "./store",
      "./browser",
      "./normalize_urls",
      "./parse_urls",
      "./settings",
      "./ports",
      "./ui_css",
      "./i18n",
      "./key_mappings",
      "./run_commands",
      "./run_keys",
      "./clipboard",
      "./open_urls",
      "./frame_commands",
      "./filter_tabs",
      "./tab_commands",
      "./tools",
    ],
    function (n, e, o, t, r, i, u, f, a, l, s, c, d, v, m, p, b, h, k, y) {
      Object.defineProperty(e, "__esModule", { value: true }),
        (o = __importStar(o)),
        (f = __importStar(f)),
        t.H([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0,
          0, 0, 0, 2, 0, 1, 0, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 2, 1, 1, 0,
          0, 0, 0, 0,
        ]),
        t.q([
          function () {
            var n = t.get_cOptions().for || t.get_cOptions().wait;
            "ready" !== n
              ? (n = n
                  ? Math.abs(
                      "count" === n || "number" === n ? t.cRepeat : 0 | n
                    )
                  : d.hasFallbackOptions(t.get_cOptions())
                  ? Math.abs(t.cRepeat)
                  : 0) &&
                ((n = Math.max(34, n)) > 17 &&
                  n <= 1e3 &&
                  t.cPort &&
                  t.cPort.postMessage({
                    N: 16,
                    t: n + 50,
                  }),
                d.runNextCmdBy(t.cRepeat > 0 ? 1 : 0, t.get_cOptions(), n))
              : d.runNextOnTabLoaded({}, null, function () {
                  d.runNextCmdBy(1, t.get_cOptions(), 1);
                });
          },
          function () {
            var n = t.get_cOptions().rel,
              e = n ? (n + "").toLowerCase() : "next",
              o =
                null != t.get_cOptions().isNext
                  ? !!t.get_cOptions().isNext
                  : !e.includes("prev") && !e.includes("before"),
              r = m.eu(t.get_cOptions());
            m.doesNeedToSed(8192, r)
              ? Promise.resolve(a.rr(t.Pn.get(t.cPort.s.ur).ar)).then(function (
                  n
                ) {
                  var i = o ? t.cRepeat : -t.cRepeat,
                    u = n && t.V(n, 8192, r),
                    f = u
                      ? p.goToNextUrl(
                          u,
                          i,
                          !t.get_cOptions().absolute || "absolute"
                        )
                      : [false, n],
                    a = f[1];
                  f[0] && a
                    ? (t.set_cRepeat(i),
                      null == t.get_cOptions().reuse &&
                        d.overrideOption("reuse", 0),
                      d.overrideCmdOptions({ url_f: a, goNext: false }),
                      p.openUrl())
                    : b.framesGoNext(o, e);
                })
              : b.framesGoNext(o, e);
          },
          function () {
            var n,
              e = t.get_cOptions().key,
              o =
                null != (n = t.get_cOptions().hideHUD) ||
                null != (n = t.get_cOptions().hideHud)
                  ? !n
                  : !t.Un.hideHud,
              r = e && "string" == typeof e ? c.ia(e).trim() : "";
            (r =
              r.length > 1 || (1 === r.length && !/[0-9a-z]/i.test(r))
                ? r
                : ""),
              Promise.resolve(
                o
                  ? s._r("globalInsertMode", [
                      r &&
                        ": " +
                          (1 === r.length
                            ? '" '.concat(r, ' "')
                            : "<".concat(r, ">")),
                    ])
                  : null
              ).then(function (n) {
                d.sendFgCmd(7, o, {
                  h: n,
                  k: r || null,
                  i: !!t.get_cOptions().insert,
                  p: !!t.get_cOptions().passExitKey,
                  r: +!!t.get_cOptions().reset,
                  t: d.parseFallbackOptions(t.get_cOptions()),
                  u: !!t.get_cOptions().unhover,
                });
              });
          },
          b.nextFrame,
          b.parentFrame,
          b.performFind,
          function (n) {
            var e = (t.get_cOptions().key || "") + "",
              o = "darkMode" === e ? "d" : "reduceMotion" === e ? "m" : f.Ge[e],
              r = o ? t.Tn[o] : 0,
              i = s._r("quoteA", [e]),
              u = t.get_cOptions().value,
              l = "boolean" == typeof u,
              c = null,
              v = "";
            o
              ? "boolean" == typeof r
                ? l || (u = null)
                : l || void 0 === u
                ? (c = l ? "notBool" : "needVal")
                : typeof u != typeof r &&
                  ((v = JSON.stringify(r)),
                  (c = "unlikeVal"),
                  (v = v.length > 10 ? v.slice(0, 9) + "\u2026" : v))
              : (c = e in f.Ne ? "notFgOpt" : "unknownA"),
              Promise.resolve(i).then(function (e) {
                var r, i, l, m;
                if (c) a.showHUD(s._r(c, [e, v]));
                else {
                  for (l of ((u = f.Je(o, u)),
                  (i = (r = t.Pn.get(t.cPort.s.ur)).cr),
                  r.oo))
                    d.portSendFgCmd(
                      l,
                      8,
                      (m = l === i),
                      { k: o, n: m ? e : "", v: u },
                      1
                    );
                  n(1);
                }
              });
          },
          function () {
            0 !== t.cPort.s.or || 64 & t.cPort.s.fr
              ? (new Promise(function (e, o) {
                  n([t.u.HelpDialogJS], e, o);
                }).then(__importStar),
                d.sendFgCmd(17, true, t.get_cOptions()))
              : b.initHelp({ a: t.get_cOptions() }, t.cPort);
          },
          function () {
            var n,
              e,
              r,
              i,
              u,
              f,
              a,
              l,
              s,
              c = d.copyCmdOptions(o.It(), t.get_cOptions());
            if (!c.esc) {
              if (
                ((n = c.key),
                (e = (c.type || (n ? "keydown" : "")) + ""),
                c.click)
              )
                e = "click";
              else if (t.cRepeat < 0)
                for (r of "down up;enter leave;start end;over out".split(";"))
                  (i = r.split(" ")), (e = e.replace(i[0], i[1]));
              for (a of ((c.type = e),
              (f =
                ((u = c.init) &&
                  ("object" == typeof u ? u : (c.init = null))) ||
                c),
              ["bubbles", "cancelable", "composed"]))
                f[a] = false !== f[a] || false !== c[a];
              n &&
                "," !== n &&
                ("object" == typeof n || n.includes(",")) &&
                (l = "object" == typeof n ? n : n.split(",")).length >= 2 &&
                +l[1] > 0 &&
                ((f.key =
                  "Space" === (s = l[0])
                    ? " "
                    : "Comma" === s
                    ? ","
                    : "$" === s && s.length > 1
                    ? (s = s.slice(1))
                    : s),
                (f.keyCode = f.which = +l[1]),
                (f.code = l[2] || l[0]));
            }
            d.portSendFgCmd(t.cPort, 16, false, c, t.cRepeat);
          },
          function () {
            b.showVomnibar();
          },
          b.enterVisualMode,
          function (n) {
            var e = t.get_cOptions().folder || t.get_cOptions().path,
              o = !!t.get_cOptions().all;
            if (!e || "string" != typeof e)
              return (
                a.showHUD('Need "folder" to refer a bookmark folder.'),
                void n(0)
              );
            t.findBookmark(1, e).then(function (e) {
              if (!e || null != e.u)
                return (
                  n(0),
                  void a.showHUD(
                    false === e
                      ? 'Need valid "folder".'
                      : null === e
                      ? "The bookmark folder is not found."
                      : "The bookmark is not a folder."
                  )
                );
              (!o && t.cRepeat * t.cRepeat < 2
                ? r.getCurTab
                : r.le)(function i(u) {
                var f, l, s, c, v, m, p, b;
                if (!u || !u.length) return n(0), r.ae();
                if (
                  ((f = r.selectFrom(u)),
                  (s = (l = o
                    ? [0, u.length]
                    : h.getTabRange(f.index, u.length))[0]),
                  (c = l[1]),
                  (v = t.get_cOptions().filter),
                  (m = u),
                  (u = u.slice(s, c)),
                  !v || (u = h.mu(f, u, v)).length)
                )
                  if ((p = u.length) > 20 && d.uu())
                    d.nu("addBookmark", p).then(i.bind(0, m));
                  else {
                    for (b of u)
                      r.me.bookmarks.create(
                        { parentId: e.po, title: b.title, url: r.getTabUrl(b) },
                        r.ae
                      );
                    a.showHUD(
                      "Added "
                        .concat(p, " bookmark")
                        .concat(p > 1 ? "s" : "", ".")
                    ),
                      n(1);
                  }
                else n(0);
              });
            });
          },
          function (n) {
            false !== t.get_cOptions().copied
              ? (d.overrideCmdOptions({ copied: true }), p.openUrl())
              : n(0);
          },
          b.captureTab,
          function (n) {
            n(y.Sr.Nr(t.get_cOptions(), t.cPort));
          },
          function (n) {
            var e = t.cPort ? t.cPort.s.sr : 2 === t.Mn;
            y.wr.to(e),
              Promise.resolve(e ? s._r("incog") : "").then(function (e) {
                a.showHUD(s._r("fhCleared", [e])), n(1);
              });
          },
          function (n) {
            var e = t.get_cOptions().local
              ? t.get_cOptions().all
                ? y.yr.Zr("#")
                : a.nr({ H: 19, u: "", a: 2 }, true)
              : y.yr.Zr();
            e && e instanceof Promise
              ? e.then(function (e) {
                  e && n(1);
                })
              : n(1);
          },
          k.copyWindowInfo,
          function n(e, o, i) {
            var u,
              f,
              a = t.get_cOptions().$pure;
            null == a &&
              d.overrideOption(
                "$pure",
                (a = !Object.keys(t.get_cOptions()).some(function (n) {
                  return (
                    "opener" !== n &&
                    "position" !== n &&
                    "evenIncognito" !== n &&
                    "$" !== n[0]
                  );
                }))
              ),
              a
                ? !(u = e && e.length > 0 ? e[0] : null) &&
                  t.jn >= 0 &&
                  !r.ae() &&
                  "dedup" !== i
                  ? r.te(r.tabsGet, t.jn).then(function (e) {
                      n(e && [e], 0, "dedup");
                    })
                  : ((f = true === t.get_cOptions().opener),
                    r.openMultiTabs(
                      u
                        ? {
                            active: true,
                            windowId: u.windowId,
                            openerTabId: f ? u.id : void 0,
                            index: p.newTabIndex(
                              u,
                              t.get_cOptions().position,
                              f,
                              true
                            ),
                          }
                        : { active: true },
                      t.cRepeat,
                      t.get_cOptions().evenIncognito,
                      [null],
                      true,
                      u,
                      function (n) {
                        n && r.selectWndIfNeed(n), d.getRunNextCmdBy(3)(n);
                      }
                    ))
                : p.openUrl(e);
          },
          function (n, e) {
            if (t.Wn < 54)
              return a.showHUD(s._r("noDiscardIfOld", [54])), void e(0);
            h.gu(
              true,
              1,
              function n(e, o, i, u) {
                var f,
                  l,
                  c,
                  v,
                  m,
                  p,
                  b,
                  k,
                  y,
                  _,
                  M = o[0],
                  w = o[1],
                  g = o[2];
                if (
                  (u &&
                    ((M = (f = h.getTabRange(w, e.length, 0, 1))[0]),
                    (g = f[1])),
                  (l = t.get_cOptions().filter),
                  (c = e),
                  (e = e.slice(M, g)).length > 1 &&
                    e.forEach(function (n, e) {
                      return (n.index = e);
                    }),
                  (v = r.selectFrom(e)),
                  (p =
                    (m = (e = l ? h.mu(v, e, l) : e).indexOf(v)) >= 0
                      ? e.length - 1
                      : e.length))
                )
                  if (p > 20 && d.uu())
                    d.nu("discardTab", p).then(n.bind(null, c, [M, w, g], i));
                  else {
                    for (_ of ((k = []),
                    (y = !(b =
                      e[
                        m >= 0
                          ? (m + (t.cRepeat > 0 ? 1 : -1) + e.length) % e.length
                          : h.getNearTabInd(e, v.index, t.cRepeat > 0)
                      ]).discarded) &&
                      (p < 2 || false !== b.autoDiscardable) &&
                      k.push(r.te(r.ve.discard, b.id)),
                    e))
                      _ === v ||
                        _ === b ||
                        _.discarded ||
                        ((y = true),
                        false !== _.autoDiscardable &&
                          k.push(r.te(r.ve.discard, _.id)));
                    k.length
                      ? Promise.all(k).then(function (n) {
                          var e = n.filter(function (n) {
                              return void 0 !== n;
                            }),
                            o = e.length > 0;
                          a.showHUD(
                            o
                              ? "Discarded ".concat(e.length, " tab(s).")
                              : s._r("discardFail")
                          ),
                            i(o);
                        })
                      : (a.showHUD(y ? s._r("discardFail") : "Discarded."),
                        i(0));
                  }
                else i(0);
              },
              n,
              e
            );
          },
          function (n) {
            var e,
              o = t.cPort ? t.cPort.s.ur : t.jn;
            if (o < 0) return a.complainLimits(s._r("dupTab")), void n(0);
            (e = false === t.get_cOptions().active),
              r.te(r.ve.duplicate, o).then(function (i) {
                if (i) {
                  if (
                    (e && r.selectTab(o, r.ae),
                    e ? n(1) : d.runNextOnTabLoaded(t.get_cOptions(), i),
                    !(t.cRepeat < 2))
                  ) {
                    var u = function (n) {
                      r.openMultiTabs(
                        {
                          url: r.getTabUrl(n),
                          active: false,
                          windowId: n.windowId,
                          pinned: n.pinned,
                          index: n.index + 2,
                          openerTabId: n.id,
                        },
                        t.cRepeat - 1,
                        true,
                        [null],
                        true,
                        n,
                        null
                      );
                    };
                    t.Wn >= 52 || 0 === t.Mn || t.u._t
                      ? r.tabsGet(o, u)
                      : r.getCurWnd(true, function (e) {
                          var i,
                            f =
                              e &&
                              e.tabs.find(function (n) {
                                return n.id === o;
                              });
                          if (!f || !e.incognito || f.incognito)
                            return f ? u(f) : r.ae();
                          for (i = t.cRepeat; 0 < --i; ) r.ve.duplicate(o);
                          n(1);
                        });
                  }
                } else n(0);
              }),
              e && r.selectTab(o, r.ae);
          },
          function (n) {
            n.length &&
              b.framesGoBack({ s: t.cRepeat, o: t.get_cOptions() }, null, n[0]);
          },
          function (n) {
            var e = !!t.get_cOptions().absolute,
              o = t.get_cOptions().filter,
              i = function (i) {
                var u,
                  f,
                  a,
                  l,
                  s,
                  c,
                  d,
                  v = t.cRepeat,
                  m = r.selectFrom(i),
                  p = i.length;
                if (
                  (p > 1 &&
                    i.forEach(function (n, e) {
                      n.index = e;
                    }),
                  !o || (i = h.mu(m, i, o)).length)
                ) {
                  if (
                    ((u = i.length),
                    (a =
                      (f = i.indexOf(m)) >= 0
                        ? f
                        : h.getNearTabInd(i, m.index, v < 0)),
                    (l =
                      (l = e
                        ? v > 0
                          ? Math.min(u, v) - 1
                          : Math.max(0, u + v)
                        : Math.abs(v) > 2 * p
                        ? v > 0
                          ? u - 1
                          : 0
                        : a + v) >= 0
                        ? l % u
                        : u + (l % u || -u)),
                    i[0].pinned &&
                      t.get_cOptions().noPinned &&
                      !m.pinned &&
                      (v < 0 || e))
                  ) {
                    for (s = 1; s < u && i[s].pinned; ) s++;
                    if ((u -= s) < 1) return void n(0);
                    e || Math.abs(v) > 2 * p
                      ? (l = e ? Math.max(s, l) : l || s)
                      : ((l = (l = a - s + v) >= 0 ? l % u : u + (l % u || -u)),
                        (l += s));
                  }
                  (d = !(c = i[l]).active) && r.selectTab(c.id), n(d);
                } else n(0);
              },
              u = function (e) {
                h.gu(true, 1, i, e || [], n, null);
              };
            e
              ? 1 !== t.cRepeat || o
                ? u()
                : r
                    .te(r.ve.query, { windowId: t.Cn, index: 0 })
                    .then(function (n) {
                      n && n[0] && r.fe(n[0]) ? i(n) : u();
                    })
              : 1 === Math.abs(t.cRepeat)
              ? r.te(r.getCurTab).then(u)
              : u();
          },
          function () {
            var n, e, o;
            "frame" !== t.get_cOptions().type &&
              t.cPort &&
              t.cPort.s.or &&
              t.set_cPort(
                (null === (n = t.Pn.get(t.cPort.s.ur)) || void 0 === n
                  ? void 0
                  : n.ar) || t.cPort
              ),
              (e = {
                H: 3,
                u: "",
                p: t.cRepeat,
                t: t.get_cOptions().trailingSlash,
                r: t.get_cOptions().trailing_slash,
                s: m.eu(t.get_cOptions()),
                e: false !== t.get_cOptions().reloadOnRoot,
              }),
              (o = a.nr(e)),
              Promise.resolve(o || "url").then(function () {
                "object" == typeof e.e &&
                  d.getRunNextCmdBy(2)(null != e.e.p || void 0);
              });
          },
          k.joinTabs,
          b.mainFrame,
          function (n, e) {
            var o = t.get_cOptions().group,
              i = "ignore" !== o && false !== o;
            h.gu(
              true,
              1,
              function (o) {
                for (
                  var u,
                    f,
                    a = r.selectFrom(o),
                    l = a.pinned,
                    s = o.indexOf(a),
                    c = Math.max(0, Math.min(o.length - 1, s + t.cRepeat));
                  l !== o[c].pinned;

                )
                  c -= t.cRepeat > 0 ? 1 : -1;
                if (
                  c !== s &&
                  i &&
                  ((u = r.getGroupId(a)),
                  (f = r.getGroupId(o[c])) !== u &&
                    (1 === Math.abs(t.cRepeat) ||
                      u !==
                        r.getGroupId(
                          o[
                            t.cRepeat > 0
                              ? c < o.length - 1
                                ? c + 1
                                : c
                              : c && c - 1
                          ]
                        )))
                ) {
                  for (
                    null !== u &&
                    ((s > 0 && r.getGroupId(o[s - 1]) === u) ||
                      (s + 1 < o.length && r.getGroupId(o[s + 1]) === u)) &&
                    ((c = s), (f = u));
                    0 <= (c += t.cRepeat > 0 ? 1 : -1) &&
                    c < o.length &&
                    r.getGroupId(o[c]) === f;

                  );
                  c -= t.cRepeat > 0 ? 1 : -1;
                }
                c === s && a.active
                  ? e(0)
                  : r.ve.move(
                      (a.active ? a : n[0]).id,
                      { index: o[c].index },
                      r.ue(e)
                    );
              },
              n,
              e,
              i
                ? function (e) {
                    return r.getGroupId(n[0]) === r.getGroupId(e);
                  }
                : null
            );
          },
          k.moveTabToNewWindow,
          k.moveTabToNextWindow,
          function () {
            p.openUrl();
          },
          function (n, e) {
            h.gu(!t.get_cOptions().single, 0, k.reloadTab, n, e);
          },
          function (n, e) {
            h.gu(
              false,
              1,
              function (n, e, o) {
                r.ve.remove(n[e[0]].id, r.ue(o));
              },
              n,
              e
            );
          },
          k.removeTab,
          function (n) {
            var e = t.get_cOptions().other ? 0 : t.cRepeat;
            h.ku(e, function o(i) {
              var u,
                f,
                a,
                l,
                s,
                c = i;
              if (!c || 0 === c.length) return r.ae();
              (u = r.selectFrom(c)),
                (f = c.indexOf(u)),
                (a = t.get_cOptions().noPinned),
                (l = t.get_cOptions().filter),
                e > 0
                  ? (++f, (c = c.slice(f, f + e)))
                  : ((a =
                      null != a
                        ? a && c[0].pinned
                        : f > 0 && c[0].pinned && !c[f - 1].pinned),
                    e < 0
                      ? (c = c.slice(Math.max(f + e, 0), f))
                      : c.splice(f, 1)),
                a &&
                  (c = c.filter(function (n) {
                    return !n.pinned;
                  })),
                l && (c = h.mu(u, c, l)),
                (s = t.get_cOptions().mayConfirm) &&
                c.length > ("number" == typeof s ? Math.max(s, 5) : 20) &&
                d.uu()
                  ? d.nu("closeSomeOtherTabs", c.length).then(o.bind(null, i))
                  : c.length > 0
                  ? r.ve.remove(
                      c.map(function (n) {
                        return n.id;
                      }),
                      r.ue(n)
                    )
                  : n(0);
            });
          },
          function (n, e) {
            if (n.length <= 0) e(0);
            else {
              var o = n[0],
                i = false !== t.get_cOptions().group;
              t.Wn >= 52 || 0 === t.Mn || t.u._t || !r.re(r.getTabUrl(o))
                ? k.Ur(o, void 0, void 0, i)
                : r.de.get(o.windowId, function (n) {
                    n.incognito &&
                      !o.incognito &&
                      (o.openerTabId = o.windowId = void 0),
                      k.Ur(o, void 0, void 0, i);
                  });
            }
          },
          function (n) {
            var e,
              o,
              i,
              u,
              f,
              l,
              c,
              v,
              m = r.se();
            if (!m) return n(0), a.complainNoSession();
            if (
              ((e = !!t.get_cOptions().one),
              (o = m.MAX_SESSION_RESULTS),
              (i = Math.abs(t.cRepeat)) > o)
            ) {
              if (e) return n(0), void a.showHUD(s._r("indexOOR"));
              i = o;
            }
            if (
              !e &&
              i < 2 &&
              (t.cPort ? t.cPort.s.sr : 2 === t.Mn) &&
              !t.get_cOptions().incognito
            )
              return n(0), a.showHUD(s._r("notRestoreIfIncog"));
            if (
              ((u = false === t.get_cOptions().active),
              (f = t.cPort ? t.cPort.s.ur : t.jn),
              (l = d.getRunNextCmdBy(0)),
              (c = u
                ? function () {
                    r.ae() ? n(0) : r.selectTab(f, l);
                  }
                : l),
              e && i > 1)
            )
              m.getRecentlyClosed({ maxResults: i }, function (e) {
                if (!e || i > e.length)
                  return n(0), a.showHUD(s._r("indexOOR"));
                var o = e[i - 1],
                  t = o && (o.tab || o.window);
                t ? m.restore(t.sessionId, c) : n(0);
              });
            else if (1 === i) m.restore(null, c);
            else {
              for (v = []; 0 <= --i; ) v.push(r.te(m.restore, null));
              Promise.all(v).then(function (e) {
                void 0 === e[0] ? n(0) : u ? r.selectTab(f, l) : n(1);
              });
            }
            u && r.selectTab(f, r.ae);
          },
          function () {
            null == t.get_cOptions().$seq
              ? v.runKeyWithCond()
              : v.runKeyInSeq(
                  t.get_cOptions().$seq,
                  t.cRepeat,
                  t.get_cOptions().$f,
                  null
                );
          },
          function (n) {
            var e,
              o,
              f,
              l = (t.get_cOptions().keyword || "") + "",
              c = u.He({ u: r.getTabUrl(n[0]) });
            c && l
              ? ((e = m.eu(t.get_cOptions())),
                (c.u = t.V(c.u, 0, e)),
                (o = i.he(c.u.split(" "), l, 2)),
                (f = t.get_cOptions().reuse),
                d.overrideCmdOptions({
                  url_f: o,
                  reuse: null != f ? f : 0,
                  opener: true,
                  keyword: "",
                }),
                p.openUrl(n))
              : d.runNextCmd(0) || a.showHUD(s._r(l ? "noQueryFound" : "noKw"));
          },
          function (n) {
            var e,
              o = t.get_cOptions().id,
              i = t.get_cOptions().data;
            o && "string" == typeof o && void 0 !== i
              ? ((e = Date.now()),
                r.me.runtime.sendMessage(
                  o,
                  t.get_cOptions().raw
                    ? i
                    : {
                        handler: "message",
                        from: "Vimium C",
                        count: t.cRepeat,
                        keyCode: t.cKey,
                        data: i,
                      },
                  function (t) {
                    var i = r.ae();
                    return (
                      i
                        ? (console.log(
                            "Can not send message to the extension %o:",
                            o,
                            i
                          ),
                          a.showHUD("Error: " + (i.message || i)),
                          n(0))
                        : "string" == typeof t &&
                          Math.abs(Date.now() - e) < 1e3 &&
                          a.showHUD(t),
                      i || n(false !== t),
                      i
                    );
                  }
                ))
              : (a.showHUD('Require a string "id" and message "data"'), n(0));
          },
          function (n) {
            var e,
              o = t.get_cOptions().text;
            o ||
            !t.get_cOptions().$f ||
            (o = (e = t.get_cOptions().$f) && e.t ? s.jr("".concat(e.t)) : "")
              ? (a.showHUD(
                  o ? (o instanceof Promise ? o : o + "") : s._r("needText")
                ),
                n(!!o))
              : n(false);
          },
          function (n, e) {
            y.Sr.Ar(t.get_cOptions(), t.cRepeat, n, e);
          },
          k.toggleMuteTab,
          function (n, e) {
            h.gu(true, 0, k.togglePinTab, n, e);
          },
          k.toggleTabUrl,
          function (n, e) {
            var o,
              r = n[0].id,
              i = ((t.get_cOptions().style || "") + "").trim(),
              u = !!t.get_cOptions().current;
            if (!i) return a.showHUD(s._r("noStyleName")), void e(0);
            for (o of t.kn)
              if (o.s.ur === r)
                return (
                  o.postMessage({ N: 46, t: i, c: u }),
                  void setTimeout(e, 100, 1)
                );
            u || l.ii({ t: i, o: 1 }), setTimeout(e, 100, 1);
          },
          b.toggleZoom,
          function (n) {
            var e,
              o = !!t.get_cOptions().acrossWindows,
              i = !!t.get_cOptions().onlyActive,
              u = t.get_cOptions().filter,
              f = {},
              l = function (e) {
                var o, f, l, c, d;
                if (e.length < 2)
                  return (
                    i && a.showHUD("Only found one browser window"),
                    n(0),
                    r.ae()
                  );
                (o = t.cPort ? t.cPort.s.ur : t.jn),
                  (l =
                    (f = e.findIndex(function (n) {
                      return n.id === o;
                    })) >= 0
                      ? e[f]
                      : null),
                  f >= 0 && e.splice(f, 1),
                  !u || (e = h.mu(l, e, u)).length
                    ? ((c = e
                        .filter(function (n) {
                          return t.Sn.has(n.id);
                        })
                        .sort(y.mr.do)),
                      (d = (e =
                        i && 0 === c.length
                          ? e.sort(function (n, e) {
                              return e.id - n.id;
                            })
                          : c)[
                        t.cRepeat > 0
                          ? Math.min(t.cRepeat, e.length) - 1
                          : Math.max(0, e.length + t.cRepeat)
                      ])
                        ? i
                          ? r.de.update(d.windowId, { focused: true }, r.ue(n))
                          : s(d.id)
                        : n(0))
                    : n(0);
              },
              s = function (e) {
                r.selectTab(e, function (e) {
                  return e && r.selectWndIfNeed(e), r.ue(n)();
                });
              };
            1 === t.cRepeat && !i && -1 !== t.jn && (e = h.pu()) >= 0
              ? Promise.all([
                  r.te(r.tabsGet, e),
                  h.getNecessaryCurTabInfo(u),
                ]).then(function (n) {
                  var e = n[0],
                    i = n[1];
                  e &&
                  (o || e.windowId === t.Cn) &&
                  r.fe(e) &&
                  (!u || h.mu(i, [e], u).length > 0)
                    ? s(e.id)
                    : o
                    ? r.ve.query(f, l)
                    : r.le(l);
                })
              : o || i
              ? r.ve.query(i ? { active: true } : f, l)
              : r.le(l);
          },
          function (n) {
            var e = t.get_cOptions().newWindow;
            true !== e && true
              ? r
                  .te(r.me.permissions.contains, {
                    permissions: ["downloads.shelf", "downloads"],
                  })
                  .then(function (o) {
                    var i, u;
                    if (o) {
                      (i = r.me.downloads.setShelfEnabled), (u = void 0);
                      try {
                        i(false),
                          setTimeout(function () {
                            i(true), n(1);
                          }, 256);
                      } catch (n) {
                        u = ((n && n.message) || n) + "";
                      }
                      a.showHUD(
                        u
                          ? "Can not close the shelf: " + u
                          : "The download bar has been closed"
                      ),
                        u && n(0);
                    } else false === e && t.cPort ? (a.showHUD("No permissions to close download bar"), n(0)) : t.an[27](n);
                  })
              : t.an[27](n);
          },
          function (n) {
            var e,
              o = t.Pn.get(t.cPort ? t.cPort.s.ur : t.jn);
            for (e of o ? o.oo : []) d.portSendFgCmd(e, 7, false, { r: 1 }, 1);
            o && o.cr.postMessage({ N: 16, t: 150 }), n(1);
          },
          function (n) {
            var e,
              o,
              r,
              i,
              u,
              f,
              l,
              s = t.get_cOptions().$cache;
            if (
              (null != s &&
                ((o = t.gn.Zn.find(function (n) {
                  return n.po === s;
                }))
                  ? (e = Promise.resolve(o))
                  : d.overrideOption("$cache", null)),
              (r = !!e),
              (i = t.cRepeat),
              (u = false),
              !e)
            ) {
              if (
                !(f = t.get_cOptions().path || t.get_cOptions().title) ||
                "string" != typeof f
              )
                return (
                  a.showHUD(
                    "Invalid bookmark " +
                      (t.get_cOptions().path ? "path" : "title")
                  ),
                  void n(0)
                );
              if (
                !(l = d.fillOptionWithMask(
                  f,
                  t.get_cOptions().mask,
                  "name",
                  ["path", "title", "mask", "name", "value"],
                  i
                )).ok
              )
                return void a.showHUD(
                  (l.result ? "Too many potential names" : "No name") +
                    " to find bookmarks"
                );
              (u = l.useCount), (e = t.findBookmark(0, l.result));
            }
            e.then(function (e) {
              e && null != e.u
                ? (r || u || d.overrideOption("$cache", e.po),
                  d.overrideCmdOptions({ url: e.bo || e.u }, true),
                  t.set_cRepeat(u ? 1 : i),
                  p.openUrl())
                : (n(0),
                  a.showHUD(
                    false === e
                      ? 'Need valid "title" or "title".'
                      : null === e
                      ? "The bookmark node is not found."
                      : "The bookmark is a folder."
                  ));
            });
          },
        ]);
    }
  );
