"use strict";
(__filename = "background/request_handlers.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./parse_urls",
      "./settings",
      "./ports",
      "./exclusions",
      "./ui_css",
      "./i18n",
      "./key_mappings",
      "./run_commands",
      "./run_keys",
      "./open_urls",
      "./frame_commands",
      "./tools",
    ],
    function (n, t, u, r, o, e, i, f, l, c, s, a, v, d, m, p, b) {
      var _, g, y, j, k, N;
      Object.defineProperty(t, "__esModule", { value: true }),
        (r = __importStar(r)),
        (i = __importStar(i)),
        (_ = -1),
        u.A([
          function (n, t) {
            var r,
              o,
              e = n.k,
              l = i.Le;
            if (!(e >= 0 && e < l.length))
              return u.set_cPort(t), f.complainLimits(s._r("notModify", [e]));
            (r = l[e]),
              (o = u.O && u.O()),
              i.Ve(r) !== n.v &&
                (o
                  ? o.then(function () {
                      i.We(r, n.v);
                    })
                  : i.We(r, n.v));
          },
          function (n, t) {
            var u = "object" == typeof n;
            return b.wr.Yr(t.s.sr, u ? n.q : "", u ? 1 : n);
          },
          function (n, t) {
            var u = e.He(n);
            if (null == n.i) return u;
            t.postMessage({ N: 44, i: n.i, s: u });
          },
          function (n, t) {
            var i = n.u,
              l = n.e,
              c = e.qe(n);
            r.Dt(),
              (n.e = c),
              null == c.p
                ? (u.set_cPort(t), f.showHUD(c.u))
                : l || i !== c.u
                ? !t ||
                  ("file://" === c.u.slice(0, 7).toLowerCase() &&
                    "file://" !== i.slice(0, 7).toLowerCase())
                  ? o.tabsUpdate({
                      url: c.u,
                    })
                  : v.sendFgCmd(0, false, { r: 1, u: c.u })
                : (u.set_cPort(t),
                  f.showHUD("Here is just root"),
                  (n.e = { p: null, u: "(just root)" }));
          },
          function (n, t) {
            var r,
              o,
              i = e.He(n);
            if (!i || !i.k)
              return (
                u.set_cPort(t),
                f.showHUD(s._r("noEngineFound")),
                void (n.n && v.runNextCmdBy(0, n.n))
              );
            (o = n.o || {}),
              (r =
                (n.t.trim() && u.V(n.t.trim(), 524288, o.s).trim()) ||
                (n.c ? u.I(o.s) : "")),
              Promise.resolve(r).then(function (r) {
                var e =
                  null === r
                    ? "It's not allowed to read clipboard"
                    : (r = r.trim())
                    ? ""
                    : s._r("noSelOrCopied");
                if (e)
                  return (
                    u.set_cPort(t),
                    f.showHUD(e),
                    void (n.n && v.runNextCmdBy(0, n.n))
                  );
                (o.k = null == o.k ? i.k : o.k),
                  u.In[6](
                    { u: r, o: o, r: 0, n: v.parseFallbackOptions(n.n) || {} },
                    t
                  );
              });
          },
          function (n, t) {
            var r,
              e = n.s,
              i = false !== n.a;
            u.set_cPort(f.findCPort(t)),
              "number" != typeof e
                ? o.se()
                  ? (o.se().restore(e[1], function () {
                      var n = o.ae();
                      return n && f.showHUD(s._r("noSessionItem")), n;
                    }),
                    i ||
                      ((r = t.s.ur) >= 0 || (r = u.jn),
                      r >= 0 && o.selectTab(r)))
                  : f.complainNoSession()
                : o.selectTab(e, function (n) {
                    return (
                      o.ae() ? f.showHUD(s._r("noTabItem")) : o.selectWnd(n),
                      o.ae()
                    );
                  });
          },
          m.openUrlReq,
          function (n, t) {
            var r, o, e, i;
            (o = u.Pn.get((r = t.s.ur)))
              ? t !== (i = o.cr) &&
                ((o.cr = t), u.Gn && (e = t.s.nt) !== i.s.nt && u.x(r, e))
              : u.Gn && u.x(r, t.s.nt);
          },
          function (n, t) {
            var r,
              o,
              e,
              i,
              c,
              s = t;
            if (
              (s || (s = f.indexFrame(n.tabId, n.frameId))) &&
              ((o = (r = s.s).Ce), !(e = u.Pn.get(r.ur)) || !e.tr)
            ) {
              if (
                ((i = l.lr ? l.ir((r.Ce = t ? n.u : n.url), r) : null),
                r.nt !== (c = null === i ? 0 : i ? 1 : 2))
              )
                (r.nt = c), u.Gn && e.cr === s && u.x(r.ur, c);
              else if (!i || i === l.ir(o, r)) return;
              s.postMessage({ N: 1, p: i, f: 0 });
            }
          },
          function (n, t) {
            var r,
              o = n.t || 0;
            u.set_cPort(t),
              u.set_cRepeat(o || u.cRepeat > 0 ? 1 : -1),
              u.set_cKey(n.k),
              v.replaceCmdOptions(n.f || {}),
              2 !== o
                ? 1 === o
                  ? p.parentFrame()
                  : p.nextFrame()
                : (r = u.Pn.get(t.s.ur))
                ? p.focusFrame(r.cr, r.oo.length <= 2, 1, u.get_cOptions())
                : f.safePost(t, {
                    N: 45,
                    l: u.cKey,
                  });
          },
          function (n, t) {
            var r,
              o,
              e,
              i = u.Pn.get(t.s.ur);
            if (i && ((t.s.fr |= 4), (i.fr |= 4), !(i.oo.length < 2)))
              for (o of ((r = { N: 8 }), i.oo))
                (e = o.s.fr), (o.s.fr |= 4), 4 & e || o.postMessage(r);
          },
          function (n, t, r) {
            var e,
              i,
              l = t.s.ur,
              c = u.Pn.get(l),
              s = n.u;
            if (!c || c.oo.length < 2) return false;
            for (i of c.oo)
              if (i.s.Ce === s) {
                if (e) {
                  e = null;
                  break;
                }
                e = i;
              }
            return e
              ? (u.set_cKey(n.k), j(n, t, e, 1), true)
              : !!o.ce() &&
                  (o.ce().getAllFrames({ tabId: t.s.ur }, function (o) {
                    var e,
                      i,
                      c = 0,
                      s = t.s.or;
                    for (e of o)
                      if (e.parentFrameId === s) {
                        if (c) {
                          c = 0;
                          break;
                        }
                        c = e.frameId;
                      }
                    (i = c && f.indexFrame(l, c)) &&
                      (u.set_cKey(n.k), j(n, t, i, 1)),
                      f.sendResponse(t, r, !!i);
                  }),
                  t);
          },
          function (n, t) {
            p.initHelp(n, t);
          },
          function (n, t) {
            (u.Pn.get(t.s.ur).fr |= 4),
              (t.s.fr |= 12),
              t.postMessage({ N: 12, H: u.qn });
          },
          function (n, t) {
            var o,
              i,
              f,
              l,
              c = n.i;
            if ((u.set_cKey(0), null != n.u))
              (i = n.t),
                (l = n.u),
                (l = (f = (o = n.m) >= 40 && o <= 64) ? e.Me(l, true) : l),
                (l = u.V(l, f ? 1048576 : 524288)),
                v.replaceCmdOptions({
                  url: l,
                  newtab: null != i ? !!i : !f,
                  keyword: n.o.k,
                }),
                k(n.f),
                u.set_cRepeat(1);
            else {
              if (true !== n.r) return;
              if (null == u.get_cOptions() || "omni" !== u.get_cOptions().k) {
                if (c) return;
                u.set_cOptions(r.It()), u.set_cRepeat(1);
              } else if (c && u.get_cOptions().v === u.u.Ct) return;
            }
            u.set_cPort(t), p.showVomnibar(c);
          },
          function (n, t) {
            f.isNotVomnibarPage(t, false) || u.y._u(n.q, n, y.bind(t, 0 | n.i));
          },
          function (n, t) {
            var o,
              i = n.u || n.s,
              l = (null != n.s && n.m) || 0,
              c = n.e,
              s = l >= 40 && l <= 64 && (!c || false !== c.r);
            if (n.d)
              if ("string" != typeof i)
                for (o = i.length; 0 <= --o; )
                  s && (i[o] = e.Me(i[o] + "")), (i[o] = r.xt(i[o] + ""));
              else s && (i = e.Me(i)), (i = r.xt(i));
            else
              "string" == typeof i &&
                i.length < 4 &&
                i.trim() &&
                " " === i[0] &&
                (i = "");
            (i = i && u.N(i, n.j, c)),
              u.set_cPort(t),
              (i =
                n.s && "object" == typeof n.s
                  ? "[".concat(n.s.length, "] ") + n.s.slice(-1)[0]
                  : i),
              f.showHUD(
                n.d ? i.replace(/%[0-7][\dA-Fa-f]/g, decodeURIComponent) : i,
                n.u ? 14 : 15
              );
          },
          function (n, t) {
            var o,
              e,
              i,
              f,
              l,
              c,
              s = null != t ? t.s : null;
            null === s ||
              4 & s.fr ||
              ((s.fr |= 4), (o = u.Pn.get(s.ur)) && (o.fr |= 4)),
              (i = 1),
              null != (f = /^\d+|^-\d*/.exec((e = n.k))) &&
                ((e = e.slice((l = f[0]).length)),
                (i = "-" !== l ? parseInt(l, 10) || 1 : -1)),
              (c = u._n.get(e)) ||
                ((f = e.match(a.la)),
                (i = 1),
                (c = u._n.get((e = f[f.length - 1])))),
              r.Dt(),
              c &&
                (36 === c.pa && c.va && d.pr(c),
                n.e &&
                  u.set_cEnv({
                    element: r.d(n.e),
                  }),
                v.executeCommand(c, i, n.l, t, 0, null));
          },
          v.waitAndRunKeyReq,
          function (n, t) {
            switch ((u.set_cPort(t), n.a)) {
              case 1:
                return b.yr.Kr(n, t);
              case 0:
                return b.yr.xr(n, t);
              case 2:
                return b.yr.Zr(n.u);
              default:
                return;
            }
          },
          m.du,
          v.onConfirmResponse,
          function (n, t) {
            var r,
              e,
              i = n.t,
              l = n.s,
              c = n.u,
              a = "history" === i && null != l ? "session" : i,
              v = "tab" === a ? a : a + " item",
              d = function (n) {
                Promise.resolve(s._r("sugs")).then(function (t) {
                  f.showHUD(
                    s._r(n ? "delSug" : "notDelSug", [s.$r(t, a[0]) || v])
                  );
                });
              };
            u.set_cPort(f.findCPort(t)),
              "tab" === a && u.jn === l
                ? f.showHUD(s._r("notRemoveCur"))
                : "session" !== a
                ? u.y.yu("tab" === a ? l : c, a, d)
                : (null === (r = o.se()) || void 0 === r
                    ? void 0
                    : r.forgetClosedTab) &&
                  ((e = l),
                  o
                    .se()
                    .forgetClosedTab(e[0], e[1])
                    .then(function () {
                      return 1;
                    }, u.B)
                    .then(d));
          },
          p.openImgReq,
          function (n, t) {
            u.set_cPort(null),
              m.openJSUrl(n.u, {}, function () {
                u.set_cPort(t), f.showHUD(s._r("jsFail"));
              });
          },
          function (n, t) {
            var r;
            2 !== n.c && 4 !== n.c
              ? j(
                  n,
                  t,
                  (null === (r = u.Pn.get(t.s.ur)) || void 0 === r
                    ? void 0
                    : r.ar) || null,
                  n.f
                )
              : f.getParentFrame(t.s.ur, t.s.or, 1).then(function (r) {
                  var o;
                  j(
                    n,
                    t,
                    r ||
                      (null === (o = u.Pn.get(t.s.ur)) || void 0 === o
                        ? void 0
                        : o.ar) ||
                      null,
                    n.f
                  );
                });
          },
          c.ii,
          function (n, t) {
            v.replaceCmdOptions({ active: true, returnToViewport: true }),
              u.set_cPort(t),
              u.set_cRepeat(1),
              p.performFind();
          },
          p.framesGoBack,
          function () {
            return s.br && s.br(), s.kr;
          },
          function (n, t) {
            t.s.fr |= 8;
          },
          function (n, t) {
            v.replaceCmdOptions({
              mode: n.c ? "caret" : "",
              start: true,
            }),
              k(n.f),
              u.set_cPort(t),
              u.set_cRepeat(1),
              p.enterVisualMode();
          },
          function (n) {
            if (performance.now() - n.r.n < 500) {
              var t = n.r.c;
              (t.element = r.d(n.e)), d.runKeyWithCond(t);
            }
          },
          function (n, t) {
            (n.u = u.V(e.Me(n.u, true), 1048576)),
              o.downloadFile(
                n.u,
                n.f,
                n.r,
                n.m < 42
                  ? function (r) {
                      r || u.In[23]({ m: 36, f: n.f, u: n.u }, t);
                    }
                  : null
              );
          },
          function (n, t, u) {
            return (
              setTimeout(function () {
                f.sendResponse(t, u, 9);
              }, n),
              t
            );
          },
          function (n) {
            var t = n.v,
              u = t !== !!t;
            f.showHUD(
              s._r(u ? "useVal" : t ? "turnOn" : "turnOff", [
                n.k,
                u ? JSON.stringify(t) : "",
              ])
            );
          },
          function (n, t) {
            var r = t.s.ur,
              o = u.Pn.get(r >= 0 ? r : u.jn);
            u.In[17](n, o ? o.cr : null);
          },
          function (n, t, u) {
            return (
              !(false !== t.s && !t.s.Ce.startsWith(location.origin + "/")) &&
              (N(n.q, n.i, t).then(function (n) {
                t.postMessage(u ? { N: 4, m: u, r: n } : n);
              }),
              t)
            );
          },
        ]),
        (y = function (n, t, o, e, i, l, c, s) {
          var a,
            v,
            d,
            m,
            p,
            b = this.s.Ce,
            g = 2 === n ? 2 : 0;
          if (1 === n && u.Wn >= 58)
            if (
              ((b = b.slice(0, b.indexOf("/", b.indexOf("://") + 3) + 1)),
              null !=
                (m =
                  -1 !== _
                    ? null === (a = u.Pn.get(_)) || void 0 === a
                      ? void 0
                      : a.ar
                    : null) && (m.s.Ce.startsWith(b) ? (g = 1) : (_ = -1)),
              g)
            );
            else
              for (p of u.Pn.values())
                if ((d = (v = p.ar) && v.s) && d.Ce.startsWith(b)) {
                  (g = 1), (_ = d.ur);
                  break;
                }
          f.safePost(this, {
            N: 43,
            a: o,
            c: s,
            i: g,
            l: t,
            m: e,
            r: c,
            s: i,
            t: l,
          }),
            r.Dt();
        }),
        (j = function (n, t, r, o) {
          r && 2 !== r.s.nt
            ? r.postMessage({
                N: 7,
                H: o || 4 !== n.c ? f.ensureInnerCSS(t.s) : null,
                m: o ? 4 : 0,
                k: o ? u.cKey : 0,
                f: {},
                c: n.c,
                n: n.n || 0,
                a: n.a,
              })
            : ((n.a.$forced = 1),
              v.portSendFgCmd(t, n.c, false, n.a, n.n || 0));
        }),
        (k = function (n) {
          n &&
            ("string" == typeof n && (n = d.parseEmbeddedOptions(n)),
            n &&
              "object" == typeof n &&
              Object.assign(u.get_cOptions(), r.Pt(n)));
        }),
        (N = function (t, u, r) {
          return (
            g ||
              (g = new Promise(function (t, u) {
                n(["/background/sync.js"], t, u);
              })
                .then(__importStar)
                .then(function () {
                  return i.Xe;
                })
                .then(function () {
                  return o.import2("/background/page_handlers.js");
                })),
            g
              .then(function (n) {
                return Promise.all(
                  t.map(function (t) {
                    return n.onReq(t, r);
                  })
                );
              })
              .then(function (n) {
                return {
                  i: u,
                  a: n.map(function (n) {
                    return void 0 !== n ? n : null;
                  }),
                };
              })
          );
        }),
        globalThis.window &&
          (globalThis.window.onPagesReq = function (n) {
            return N(n.q, n.i, null);
          });
    }
  );
