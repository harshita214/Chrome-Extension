"use strict";
(__filename = "background/run_commands.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./ports",
      "./i18n",
      "./key_mappings",
    ],
    function (n, u, t, e, r, l, o, i) {
      var f,
        c,
        a,
        s,
        v,
        $,
        d,
        m,
        p,
        _,
        g,
        h,
        y,
        b,
        j,
        w,
        T,
        k,
        N,
        O,
        C,
        M,
        S,
        x,
        D,
        q;
      Object.defineProperty(u, "__esModule", { value: true }),
        (u.waitAndRunKeyReq =
          u.runNextOnTabLoaded =
          u.runNextCmdBy =
          u.getRunNextCmdBy =
          u.runNextCmd =
          u.wrapFallbackOptions =
          u.parseFallbackOptions =
          u.hasFallbackOptions =
          u.executeExternalCmd =
          u.executeShortcut =
          u.portSendFgCmd =
          u.sendFgCmd =
          u.onConfirmResponse =
          u.nu =
          u.uu =
          u.executeCommand =
          u.fillOptionWithMask =
          u.overrideOption =
          u.overrideCmdOptions =
          u.concatOptions =
          u.copyCmdOptions =
          u.replaceCmdOptions =
            void 0),
        (e = __importStar(e)),
        (f = Math.abs),
        (c = 0),
        (v = 1),
        (u.replaceCmdOptions = function (n) {
          t.set_cOptions(e.Pt(n));
        }),
        (u.copyCmdOptions = function (n, u) {
          for (var t in u)
            ("$" !== t[0] ||
              ("$then=$else=$retry=$f=".includes(t + "=") &&
                !t.includes("="))) &&
              (void 0 !== n[t] || (n[t] = u[t]));
          return n;
        }),
        ($ = function (n, u) {
          for (var t in u) void 0 !== n[t] || (n[t] = u[t]);
          return n;
        }),
        (d = function (n, t) {
          return t && n
            ? u.copyCmdOptions(u.copyCmdOptions(e.It(), t), n)
            : n || t || null;
        }),
        (u.concatOptions = d),
        (u.overrideCmdOptions = function (n, u, r) {
          var l = r || t.get_cOptions();
          $(e.Pt(n), l), u ? delete n.$o : (n.$o = l), r || t.set_cOptions(n);
        }),
        (m = function (n, e, r) {
          (r = r || t.get_cOptions())[n] = e;
          var l = r.$o;
          null != l && u.overrideOption(n, e, l);
        }),
        (u.overrideOption = m),
        (p = function (n, r, l, o, i, f) {
          var c,
            a,
            s,
            v,
            $,
            d,
            m,
            p,
            _,
            g,
            h,
            y,
            b = -1,
            j = r,
            w = true === j || "" === j;
          if (w) {
            for (
              a = /\$\$|[$%][sS]/g, s = void 0;
              (s = a.exec(n)) && "$$" === s[0];

            );
            j = (s && s[0]) || "$s";
          }
          return (
            (v = null),
            (d = false),
            (m = !!j && "string" == typeof j && n.includes(j)),
            (p = f || t.get_cOptions()),
            (_ = function () {
              var n, u;
              if (null !== v || 1 !== g) return v || "";
              if ((n = l && p[l])) c = l;
              else if (
                1 ===
                (u = Object.keys(p).filter(function (n) {
                  return "$" !== n[0] && !o.includes(n);
                })).length
              )
                n = c = u[0];
              else {
                if ("" !== r) return (g = u.length), "";
                n = "";
              }
              return (
                (b = 1),
                (v = n + ""),
                (v = "$s" === j || "%s" === j ? e.k(v) : v)
              );
            }),
            (g = 1),
            (h = 0),
            w
              ? ((n.includes(($ = "$c")) || n.includes(($ = "%c"))) &&
                  ((b = 1), (d = true)),
                (n = n.replace(
                  new RegExp(
                    "\\$\\{([^}]*)}|\\$\\$" +
                      (d ? "|" + e.t($) : "") +
                      (m ? "|" + e.t(j) : ""),
                    "g"
                  ),
                  function (n, u) {
                    var t, r;
                    return n === j
                      ? _()
                      : n === $
                      ? i + ""
                      : u
                      ? ((b = 1),
                        h++,
                        (t = true),
                        /^[sS]:/.test(u) &&
                          ((t = "s" === u[0]), (u = u.slice(2))),
                        (r =
                          "string" ==
                          typeof (r =
                            "__proto__" === u || "$" === u[0] ? "" : p[u])
                            ? r
                            : r && "object" == typeof r
                            ? JSON.stringify(r)
                            : r + ""),
                        t ? e.k(r) : r)
                      : "$";
                  }
                )))
              : m &&
                (_(),
                null !== v &&
                  (n = n.replace(j, function () {
                    return v;
                  }))),
            1 !== g
              ? { ok: 0, result: g }
              : (j &&
                  "string" == typeof j &&
                  ((y = f || {}),
                  f || u.overrideCmdOptions(y),
                  (y.$masked = true),
                  c && delete y[c]),
                { ok: b, value: v || "", result: n, useCount: d, useDict: h })
          );
        }),
        (u.fillOptionWithMask = p),
        (_ = function (n) {
          var u,
            l,
            o = a;
          return (
            (a = null),
            o &&
              (s ? ((l = (u = e.s()).Ft), o(n, u.Gt), l.then(x)) : o(n, t.B)),
            t.set_cEnv(null),
            n ? void 0 : r.ae()
          );
        }),
        (g = function (n) {
          u.executeCommand(n, 1, t.cKey, t.cPort, t.cRepeat);
        }),
        (h = function (n, o, c, v, $, d) {
          var m, p, h, y, b, w, T, k, N, O, M, S;
          if ((j(0), a)) return (a = null), void t.set_cEnv(null);
          if (
            ((p = i.ta(n)),
            (h = n.ma),
            p && (m = p.$count) && (o = o * m || 1),
            1 === (o = $ || (o >= 1e4 ? 9999 : o <= -1e4 ? -9999 : 0 | o || 1)))
          );
          else if (1 === h) o = 1;
          else if (h > 0 && (o > h || o < -h)) {
            if (null != d) o = o < 0 ? -1 : 1;
            else if (!($ || (p && true === p.confirmed)))
              return (
                t.set_cKey(c),
                t.set_cOptions(null),
                t.set_cPort(v),
                t.set_cRepeat(o),
                t.set_cEnv(null),
                void u.nu(n.da, f(o)).then(g.bind(null, n))
              );
          } else o = o || 1;
          if (null != d) {
            if (
              ((y = 0 | d.r),
              (y = Math.max(
                1,
                y >= 0 && y < 100 ? Math.min(y || 6, 20) : f(y)
              )),
              d.c && d.c.i >= y && (!p || "showTip" !== p.$else))
            )
              return (
                t.set_cPort(v),
                l.showHUD(
                  "Has run sequential commands for ".concat(y, " times")
                ),
                void t.set_cEnv(null)
              );
            (b = C(d.c, 1, d.u)),
              p &&
                (((36 === n.pa || b.t) && n.va) || u.hasFallbackOptions(p)) &&
                ((w = {}),
                p ? u.overrideCmdOptions(w, false, p) : e.Pt(w),
                (w.$retry = -y),
                (w.$f = b),
                b.t && n.va && !p.$else && (w.$else = "showTip"),
                (p = w));
          }
          if (!n.va)
            return (
              (k =
                (4620 >> (T = n.pa)) & 1 ||
                (4 === T && !!p && false === p.keepHover)),
              t.set_cPort(v),
              t.set_cEnv(null),
              void (null == v || u.portSendFgCmd(v, T, k, p, o))
            );
          (O = t.an[(N = n.pa)]),
            null === (s = n.ba) &&
              (s = n.ba = null != p && u.hasFallbackOptions(p)),
            t.set_cKey(c),
            t.set_cOptions(p || (n.ua = e.It())),
            t.set_cPort(v),
            t.set_cRepeat(o),
            (o = t.fn[N]),
            (null == v && N < 11 && N > 0) ||
              (o < 1
                ? (s ? ((S = (M = e.s()).Ft), O(M.Gt), S.then(x)) : O(t.B),
                  t.set_cEnv(null))
                : ((s = n.ba),
                  (a = O),
                  (o < 2 || (2 === o && f(t.cRepeat) < 2) ? r.getCurTab : r.le)(
                    _
                  )));
        }),
        (u.executeCommand = h),
        (u.uu = function () {
          return v && true !== t.get_cOptions().confirmed;
        }),
        (y = function (n, r) {
          var l, i, f, s, $, d;
          return t.cPort
            ? t.yn && t.yn[1]
              ? ((i = (l = e.s()).Ft),
                (f = l.Gt),
                (s = t.cRepeat),
                ($ = t.get_cOptions()),
                (d = t.cPort),
                j(setTimeout(b, 3e3, 0)),
                (a = function (n) {
                  t.set_cKey(0),
                    t.set_cOptions($),
                    t.set_cPort(d),
                    t.set_cRepeat(n ? (s > 0 ? 1 : -1) : s),
                    (v = 0),
                    f(n),
                    setTimeout(function () {
                      v = 1;
                    }, 0);
                }),
                Promise.resolve(
                  o._r("cmdConfirm", [
                    r,
                    t.yn[1].get(n) || "### ".concat(n, " ###"),
                  ])
                ).then(function (n) {
                  var u;
                  (
                    (null === (u = t.Pn.get(t.cPort.s.ur)) || void 0 === u
                      ? void 0
                      : u.ar) || t.cPort
                  ).postMessage({ N: 13, c: "", i: c, m: n });
                }),
                i)
              : o.getI18nJson("help_dialog").then(function (e) {
                  return (
                    t.yn ? (t.yn[1] = e) : t.nn([null, e, null]), u.nu(n, r)
                  );
                })
            : ((a = null),
              t.set_cRepeat(t.cRepeat > 0 ? 1 : -1),
              Promise.resolve(t.cRepeat > 0));
        }),
        (u.nu = y),
        (b = function (n) {
          var u = a;
          (a = null), n > 1 && u && u(n < 3);
        }),
        (j = function (n) {
          c && clearTimeout(c), (c = n);
        }),
        (w = function (n, t) {
          var e = n.c,
            r = n.i;
          (r >= -1 && c !== r) ||
            (j(0), n.r ? b(n.r) : u.executeCommand(i.ca.get(e), n.n, 0, t, 0));
        }),
        (u.onConfirmResponse = w),
        (T = function (n, e, r) {
          u.portSendFgCmd(t.cPort, n, e, r, 1);
        }),
        (u.sendFgCmd = T),
        (u.portSendFgCmd = function (n, u, t, e, r) {
          n.postMessage({
            N: 10,
            H: t ? l.ensureInnerCSS(n.s) : null,
            c: u,
            n: r,
            a: e,
          });
        }),
        (k = function (n, t) {
          var o, f, a, s, v, $;
          if ((j(0), t))
            return (
              (o = t.cr),
              j(setTimeout(u.executeShortcut, 100, n, null)),
              o.postMessage({ N: 13, c: n, i: c, m: "" }),
              void l.ensuredExitAllGrab(t)
            );
          if (
            ((s = 0),
            (v = f = i.ca.get(n)),
            "goBack" === (a = f.da) || "goForward" === a
              ? r.ve.goBack && (s = 21)
              : "autoOpen" === a && (s = 12),
            ($ = i.ta(f)),
            s)
          )
            v = { pa: s, va: 1, da: a, tu: null, ua: $, ba: null, ma: f.ma };
          else {
            if (!f.va) return;
            s = f.pa;
          }
          s > 10 || s < 1
            ? u.executeCommand(v, 1, 0, null, 0)
            : ($ && $.$noWarn) ||
              ((($ || (f.ua = e.It())).$noWarn = true),
              console.log(
                "Error: Command",
                a,
                "must run on pages which have run Vimium C"
              ));
        }),
        (u.executeShortcut = k),
        (N = function (n, r) {
          var o,
            f,
            c,
            a,
            s,
            v,
            $,
            d = n.command;
          (o = (d = d ? d + "" : "") ? i.ea[d] : null) &&
            ((c = r.tab
              ? l.indexFrame(r.tab.id, r.frameId || 0) ||
                ((f = t.Pn.get(r.tab.id)) ? f.cr : null)
              : null) ||
              o[1]) &&
            ((s = n.key),
            (v = i.na(d, (a = n.options || null))),
            ($ = n.count),
            v &&
              (($ = "-" !== $ ? parseInt($, 10) || 1 : -1),
              a && "object" == typeof a ? e.Pt(a) : (a = null),
              u.executeCommand(v, $, (s |= 0), c, 0)));
        }),
        (u.executeExternalCmd = N),
        (u.hasFallbackOptions = function (n) {
          return !!(n.$then || n.$else);
        }),
        (u.parseFallbackOptions = function (n) {
          var u = n.$then,
            t = n.$else;
          return u || t
            ? { $then: u, $else: t, $retry: n.$retry, $f: n.$f }
            : null;
        }),
        (O = function (n) {
          var e = u.parseFallbackOptions(t.get_cOptions());
          return e && Object.assign(n, e), n;
        }),
        (u.wrapFallbackOptions = O),
        (C = function (n, u, t) {
          return { i: (n ? n.i : 0) + u, t: t && 2 !== t ? t : n ? n.t : 0 };
        }),
        (M = function (n) {
          return u.runNextCmdBy(n, t.get_cOptions());
        }),
        (u.runNextCmd = M),
        (S = function (n) {
          return u.hasFallbackOptions(t.get_cOptions())
            ? function (e) {
                var l = 2 & n ? void 0 === e : r.ae(),
                  o = t.get_cOptions();
                return (
                  l
                    ? u.runNextCmdBy(0, o)
                    : u.runNextOnTabLoaded(o, 1 & n ? e : null),
                  2 & n ? void 0 : l
                );
              }
            : 2 & n
            ? t.B
            : r.ae;
        }),
        (u.getRunNextCmdBy = S),
        (x = function (n) {
          "object" == typeof n
            ? u.runNextOnTabLoaded(t.get_cOptions(), n)
            : "boolean" == typeof n
            ? u.runNextCmdBy(n ? 1 : 0, t.get_cOptions(), null)
            : n < 0 ||
              u.runNextCmdBy(n ? 1 : 0, t.get_cOptions(), n > 1 ? n : null);
        }),
        (u.runNextCmdBy = function (n, u, e) {
          var r,
            o = n ? u.$then : u.$else,
            i = !!o && "string" == typeof o;
          return (
            i &&
              ((r = { c: u.$f, r: u.$retry, u: 0, w: 0 }),
              j(
                setTimeout(function () {
                  var n = t.Pn.get(t.jn),
                    u =
                      t.cPort &&
                      t.cPort.s.ur === t.jn &&
                      n &&
                      n.oo.indexOf(t.cPort) > 0
                        ? t.cPort
                        : n
                        ? (2 === n.cr.s.nt &&
                            n.oo
                              .filter(function (n) {
                                return 2 !== n.s.nt;
                              })
                              .sort(function (n, u) {
                                return n.s.or - u.s.or;
                              })[0]) ||
                          n.cr
                        : null;
                  n && l.ensuredExitAllGrab(n), t.ln(o, u, r);
                }, e || 50)
              )),
            i
          );
        }),
        (D = function (n, e, l) {
          var o,
            i,
            f,
            s,
            v,
            $ = n.$then;
          (($ && "string" == typeof $) || l) &&
            ((o = function (e) {
              var o = Date.now(),
                d = o < v - 500 || o - v >= i || f;
              if (!e || !c) return (s = -1), r.ae();
              if (d || "complete" === e.status) {
                if (
                  !d &&
                  !t.Pn.has(e.id) &&
                  (l || e.url.startsWith(location.protocol))
                )
                  return;
                j(0),
                  (a = null),
                  l && l(),
                  $ && u.runNextCmdBy(1, n, l ? 67 : 0);
              }
            }),
            (i = false !== e ? 1500 : 500),
            (f = !!$ && /[$%]l/.test($.split("#", 1)[0])),
            (s = e ? e.id : false !== e ? -1 : t.jn),
            (v = Date.now()),
            j(
              setInterval(
                function () {
                  r.tabsGet(-1 !== s ? s : t.jn, o);
                },
                f ? 50 : 100
              )
            ));
        }),
        (u.runNextOnTabLoaded = D),
        (q = function (n, e) {
          var r = n.f,
            l = {
              $then: n.k,
              $else: null,
              $retry: r && r.r,
              $f: r && C(r.c, 0, r.u),
            };
          t.set_cPort(e),
            r && false === r.u
              ? u.runNextOnTabLoaded(l, null)
              : u.runNextCmdBy(1, l, r && r.w);
        }),
        (u.waitAndRunKeyReq = q);
    }
  );
