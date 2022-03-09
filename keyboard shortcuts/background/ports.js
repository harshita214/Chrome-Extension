"use strict";
(__filename = "background/ports.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./exclusions",
      "./i18n",
    ],
    function (n, r, u, o, t, e, l) {
      var i, f, c, a, s, v, d, _, b, m, g, p, k;
      Object.defineProperty(r, "__esModule", { value: true }),
        (r.getParentFrame =
          r.complainNoSession =
          r.complainLimits =
          r.eo =
          r.ensuredExitAllGrab =
          r.showHUD =
          r.safePost =
          r.isNotVomnibarPage =
          r.ensureInnerCSS =
          r.indexFrame =
          r.isExtIdAllowed =
          r.findCPort =
          r.nr =
          r.rr =
          r.OnConnect =
          r.sendResponse =
            void 0),
        (i = function (n, r) {
          if (90 !== n.H) u.In[n.H](n, r);
          else {
            var o = u.In[n.c](n.a, r, n.i);
            o !== r && r.postMessage({ N: 4, m: n.i, r: o });
          }
        }),
        (r.sendResponse = function (n, r, o) {
          var t = u.Pn.get(n.s.ur);
          if (t && t.oo.includes(n))
            try {
              n.postMessage({ N: 4, m: r, r: o });
            } catch (n) {}
        }),
        (r.OnConnect = function (n, r) {
          var o, l, a, d, _, b, m, g, p;
          if (64 & r) s(n, r);
          else {
            if (((a = (l = (o = v(n)).Ce) === u.vomnibarPage_f), r > 3 || a)) {
              if (999 === r)
                return void (
                  o.ur >= 0 &&
                  !o.or &&
                  t.removeTempTab(o.ur, n.sender.tab.windowId, o.Ce)
                );
              if (16 & r || a) return void c(n, r, a || l === u.u.Ct);
            }
            null !==
            (b =
              void 0 !==
              (_ =
                (d = o.ur) >= 0
                  ? u.Pn.get(d)
                  : void (d = o.ur = u.getNextFakeTabId()))
                ? _.tr
                : null)
              ? ((g = b.er), (p = 2 === (m = b.nt) ? 3 : 1))
              : ((m = null === (g = e.lr ? e.ir(l, o) : null) ? 0 : g ? 1 : 2),
                (p = 0)),
              (o.nt = m),
              void 0 !== _ &&
                ((p |= 4 & _.fr),
                32 & r && ((p |= 128), (_.fr |= 128)),
                (o.fr = p)),
              4 & r
                ? ((o.fr |= 8 & r),
                  n.postMessage({ N: 1, p: g, f: 3 & p }),
                  n.postMessage({ N: 6, d: u.Tn }))
                : n.postMessage({
                    N: 0,
                    f: p,
                    c: u.Tn,
                    p: g,
                    m: u.mn,
                    t: u.sn,
                    k: u.pn,
                  }),
              n.onDisconnect.addListener(f),
              n.onMessage.addListener(i),
              void 0 !== _
                ? (2 & r && (u.Gn && _.cr.s.nt !== m && u.x(d, m), (_.cr = n)),
                  1 & r && !_.ar && (_.ar = n),
                  _.oo.push(n))
                : (u.Pn.set(d, {
                    cr: n,
                    ar: 1 & r ? n : null,
                    oo: [n],
                    tr: null,
                    fr: 0,
                  }),
                  0 !== m && u.Gn && u.x(d, m));
          }
        }),
        (f = function (n) {
          var r,
            o,
            t = n.s.ur,
            e = u.Pn.get(t);
          e &&
            ((r = (o = e.oo).lastIndexOf(n)),
            n.s.or
              ? (r === o.length - 1 ? --o.length : r >= 0 && o.splice(r, 1),
                o.length ? n === e.cr && (e.cr = o[0]) : u.Pn.delete(t))
              : r >= 0 && u.Pn.delete(t));
        }),
        (c = function (n, r, e) {
          if (r > 15) {
            if (e)
              return (
                n.s.ur < 0 &&
                  (n.s.ur =
                    4 & r
                      ? u.getNextFakeTabId()
                      : u.cPort
                      ? u.cPort.s.ur
                      : u.jn),
                (n.s.fr |= 256),
                u.kn.push(n),
                n.onDisconnect.addListener(a),
                n.onMessage.addListener(i),
                void (4 & r || n.postMessage({ N: 42, l: u.Jn, s: o.n(false) }))
              );
          } else
            n.s.ur < 0 ||
              u.Wn < 50 ||
              0 === n.s.or ||
              t.ve.executeScript(
                n.s.ur,
                { file: u.u.jt, frameId: n.s.or, runAt: "document_start" },
                t.ae
              );
          n.disconnect();
        }),
        (a = function (n) {
          var r = u.kn,
            o = r.lastIndexOf(n);
          o === r.length - 1 ? --r.length : o >= 0 && r.splice(o, 1);
        }),
        (s = function (n, r) {
          32 & r ? n.disconnect() : ((n.s = false), n.onMessage.addListener(i));
        }),
        (v = function (n) {
          var r = n.sender,
            u = r.tab;
          return (
            (r.tab = null),
            (n.s = {
              or: r.frameId || 0,
              nt: 0,
              fr: 0,
              sr: null != u && u.incognito,
              ur: null != u ? u.id : -3,
              Ce: r.url,
            })
          );
        }),
        (d = function (n, o, l) {
          var i;
          return (n =
            n ||
            (null === (i = u.Pn.get(u.jn)) || void 0 === i ? void 0 : i.ar)) &&
            e.lr &&
            (o || e.vr)
            ? n.s.Ce
            : new Promise(function (o) {
                var e = u.Wn > 48 && n && n.s.or ? t.ce() : null;
                n
                  ? (e ? e.getFrame : t.tabsGet)(
                      e ? { tabId: n.s.ur, frameId: n.s.or } : n.s.ur,
                      function (u) {
                        var i = u ? u.url : "";
                        return (
                          !i && e && ((l.N = 3), r.safePost(n, l)), o(i), t.ae()
                        );
                      }
                    )
                  : t.getCurTab(function (n) {
                      return o(n && n.length ? t.getTabUrl(n[0]) : ""), t.ae();
                    });
              });
        }),
        (r.rr = d),
        (_ = function (n, o) {
          var t, e;
          if (
            (u.set_cPort(
              u.cPort ||
                (null === (t = u.Pn.get(u.jn)) || void 0 === t ? void 0 : t.ar)
            ),
            "string" != typeof (e = r.rr(u.cPort, o, n)))
          )
            return e.then(function (r) {
              return (n.u = r), r && u.In[n.H](n, u.cPort), r;
            });
          (n.u = e), u.In[n.H](n, u.cPort);
        }),
        (r.nr = _),
        (r.findCPort = function (n) {
          var r = u.Pn.get(n ? n.s.ur : u.jn);
          return r ? r.cr : null;
        }),
        (r.isExtIdAllowed = function (n) {
          var r,
            o,
            t = null != n.id ? n.id : "unknown_sender",
            e = n.url,
            l = n.tab,
            i = u.Rn,
            f = i.get(t);
          return (
            true !== f &&
              l &&
              ((o = (r = u.Pn.get(l.id)) ? r.dr : null),
              r &&
                (null == o || (o !== t && "string" == typeof o)) &&
                (r.dr = null == o ? t : 2)),
            null != f
              ? f
              : e === u.vomnibarPage_f ||
                (console.log(
                  "%cReceive message from an extension/sender not in the allow list: %c%s",
                  "background-color:#fffbe5",
                  "background-color:#fffbe5;color:red",
                  t
                ),
                i.set(t, false),
                false)
          );
        }),
        (r.indexFrame = function (n, r) {
          var o,
            t = u.Pn.get(n);
          for (o of t ? t.oo : []) if (o.s.or === r) return o;
          return null;
        }),
        (r.ensureInnerCSS = function (n) {
          if (8 & n.fr) return null;
          var r = u.Pn.get(n.ur);
          return r && (r.fr |= 4), (n.fr |= 12), u.qn;
        }),
        (r.isNotVomnibarPage = function (n, r) {
          var u = n.s,
            o = u.fr;
          return (
            !(256 & o) &&
            (r ||
              512 & o ||
              (console.warn(
                "Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o",
                "color:red",
                "color:auto",
                u.Ce.slice(0, 128),
                u.ur
              ),
              (u.fr |= 512)),
            true)
          );
        }),
        (r.safePost = function (n, r) {
          try {
            return n.postMessage(r), 1;
          } catch (n) {
            return 0;
          }
        }),
        (b = function (n, u) {
          r.showHUD(u, n);
        }),
        (m = function (n, o) {
          "string" == typeof n
            ? (o &&
                (n.startsWith(u.u.lt + "-") &&
                  n.includes("://") &&
                  (n = n.slice(n.indexOf("/", n.indexOf("/") + 2) + 1) || n),
                (n = n.length > 41 ? n.slice(0, 41) + "\u2026" : n + ".")),
              u.cPort &&
                !r.safePost(u.cPort, {
                  N: 12,
                  H: r.ensureInnerCSS(u.cPort.s),
                  k: o ? (n ? 20 : o) : 1,
                  t: n,
                }) &&
                u.set_cPort(null))
            : n.then(b.bind(null, o));
        }),
        (r.showHUD = m),
        (r.ensuredExitAllGrab = function (n) {
          var r,
            u = { N: 8 };
          for (r of n.oo) 4 & r.s.fr || ((r.s.fr |= 4), r.postMessage(u));
          n.fr |= 4;
        }),
        (r.eo = function (n, r) {
          var t,
            e = o.Nt(u.Pn),
            l = u.jn,
            i = function (r) {
              var o = u.Pn.get(r),
                t = 0;
              return null != o && ((t = Math.min(o.oo.length, 8)), n(o)), t;
            };
          e.length < 50
            ? ((t = e.indexOf(l)) >= 0 && (e.splice(t, 1), n(u.Pn.get(l))),
              o.a(e, i, r))
            : e.forEach(i);
        }),
        (g = function (n) {
          Promise.resolve(n).then(function (n) {
            r.showHUD(l._r("notAllowA", [n]));
          });
        }),
        (r.complainLimits = g),
        (p = function () {
          r.complainLimits("control tab sessions");
        }),
        (r.complainNoSession = p),
        (k = function (n, u, o) {
          return u && t.ce()
            ? 1 === o && true
              ? t
                  .te(t.ce().getFrame, { tabId: n, frameId: u })
                  .then(function (u) {
                    var o = u ? u.parentFrameId : 0;
                    return o > 0 ? r.indexFrame(n, o) : null;
                  })
              : t.te(t.ce().getAllFrames, { tabId: n }).then(function (t) {
                  var e,
                    l = false,
                    i = u;
                  if (!t) return null;
                  do {
                    for (e of ((l = false), t))
                      if (e.frameId === i) {
                        l = (i = e.parentFrameId) > 0;
                        break;
                      }
                  } while (l && 0 < --o);
                  return i > 0 && i !== u ? r.indexFrame(n, i) : null;
                })
            : Promise.resolve(null);
        }),
        (r.getParentFrame = k);
    }
  );
