"use strict";
(__filename = "background/browsing_data_manager.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./browser",
      "./utils",
      "./settings",
      "./completion_utils",
    ],
    function (t, e, n, r, i, o, u) {
      var f, a, l, c, s, _, m, v, d, p, T, h;
      Object.defineProperty(e, "__esModule", { value: true }),
        (e.oi =
          e.ui =
          e.fi =
          e.ai =
          e.li =
          e.ci =
          e.si =
          e.omniBlockList =
            void 0),
        (i = __importStar(i)),
        (o = __importStar(o)),
        (f = decodeURIComponent),
        (c = -1),
        (s = "1"),
        (_ = null),
        (v = null),
        (e.omniBlockList = m = null),
        (e.si = function (t) {
          var e,
            n,
            r = t.slice(0, 5);
          if ("https" === r) e = 8;
          else if ("http:" === r) e = 7;
          else {
            if (!r.startsWith("ftp")) return null;
            e = 6;
          }
          return (
            (n = t.indexOf("/", e)),
            {
              _i:
                "__proto__" !== (t = t.slice(e, n < 0 ? t.length : n))
                  ? t
                  : ".__proto__",
              mi: e,
            }
          );
        }),
        (e.ci = {
          vi: null,
          di: "",
          pi: 0,
          lo: 0,
          Ti: null,
          hi: function () {
            var t = r.me.bookmarks;
            t.onCreated.addListener(e.ci.gi),
              t.onRemoved.addListener(e.ci.bi),
              t.onChanged.addListener(e.ci.bi),
              t.onMoved.addListener(e.ci.gi),
              t.onImportBegan.addListener(function () {
                r.me.bookmarks.onCreated.removeListener(e.ci.gi);
              }),
              t.onImportEnded.addListener(function () {
                r.me.bookmarks.onCreated.addListener(e.ci.gi), e.ci.gi();
              });
          },
          xi: function () {
            (n.gn.nt = 1),
              e.ci.lo && (clearTimeout(e.ci.lo), (e.ci.lo = 0)),
              r.me.bookmarks.getTree(e.ci.ki);
          },
          ki: function (t) {
            (n.gn.Zn = []),
              (n.gn.$n = []),
              (n.gn.nt = 2),
              u.wi.Zr(2),
              t.forEach(e.ci.yi, e.ci),
              setTimeout(function () {
                return e.oi.Di(n.gn.Zn);
              }, 50),
              e.ci.hi && (setTimeout(e.ci.hi, 0), (e.ci.hi = null));
            var r = e.ci.Ti;
            (e.ci.Ti = null), r && r();
          },
          yi: function (t) {
            var r,
              o,
              u,
              f = t.title,
              a = t.id,
              l = f || a,
              c = e.ci.di + "/" + l;
            t.children
              ? (n.gn.$n.push({ po: a, Li: c, Ri: l }),
                (r = e.ci.di),
                2 < ++e.ci.pi && (e.ci.di = c),
                t.children.forEach(e.ci.yi, e.ci),
                --e.ci.pi,
                (e.ci.di = r))
              : ((u = (o = t.url).startsWith("javascript:")),
                n.gn.Zn.push({
                  po: a,
                  Li: c,
                  Ri: l,
                  t: u ? "javascript:" : o,
                  ji: m ? e.fi(o, f) : 1,
                  u: u ? "javascript:" : o,
                  bo: u ? o : null,
                  Ii: u ? i.zt(o) : null,
                }));
          },
          Pi: function () {
            var t = performance.now() - n.gn.tt;
            0 === n.gn.nt &&
              (t >= 6e4 || t < -5e3
                ? ((e.ci.lo = n.gn.tt = 0), (n.gn.ot = false), e.ci.xi())
                : ((n.gn.Zn = []),
                  (n.gn.$n = []),
                  (e.ci.lo = setTimeout(e.ci.Pi, 3e4)),
                  u.wi.Zr(2)));
          },
          gi: function () {
            (n.gn.tt = performance.now()),
              n.gn.nt < 2 ||
                ((e.ci.lo = setTimeout(e.ci.Pi, 6e4)), (n.gn.nt = 0));
          },
          bi: function (t, r) {
            for (
              var i,
                o,
                u,
                f,
                l,
                c,
                s = n.gn.Zn,
                _ = s.length,
                v = r && r.title,
                d = 0;
              d < _ && s[d].po !== t;
              d++
            );
            if (d < _)
              return (
                (o = (i = s[d]).u),
                (u = r && r.url),
                a &&
                  (null == v ? o !== i.t || !r : null != u && o !== u) &&
                  n.hn.has(o) &&
                  e.li.Ui &&
                  e.li.Mi(o) < 0 &&
                  n.hn.delete(o),
                void (null != v
                  ? ((i.Li = i.Li.slice(0, -i.Ri.length) + (v || i.po)),
                    (i.Ri = v || i.po),
                    u && ((i.u = u), (i.t = e.oi.Si(u, i)), e.oi.Ei()),
                    m && (i.ji = e.fi(i.u, i.Ri)))
                  : (s.splice(d, 1), r || e.ci.gi()))
              );
            if (
              n.gn.$n.find(function (e) {
                return e.po === t;
              })
            ) {
              if (null != v) return e.ci.gi();
              if (!n.gn.ot && a) {
                for (c of ((f = n.hn), (l = e.li.Mi), e.li.Ui ? s : []))
                  f.has((o = c.u)) && l(o) < 0 && f.delete(o);
                n.gn.ot = true;
              }
              return e.ci.gi();
            }
          },
        }),
        n.set_findBookmark(function (t, r) {
          var o, u, f, a, l, c, s;
          if (2 !== n.gn.nt)
            return (
              (o = i.s()),
              (e.ci.Ti = o.Gt),
              e.ci.xi(),
              o.Ft.then(n.findBookmark.bind(0, t, r))
            );
          if (
            ((f = (u = r.includes("/"))
              ? (r + "")
                  .replace(/\\\/?|\//g, function (t) {
                    return t.length > 1 ? "/" : "\n";
                  })
                  .split("\n")
                  .filter(function (t) {
                    return t;
                  })
              : []),
            !r || (u && !f.length))
          )
            return Promise.resolve(false);
          for (c of ((a = u ? "/" + f.slice(1).join("/") : ""),
          (l = u ? "/" + f[0] + a : ""),
          t ? [] : n.gn.Zn))
            if ((u && (c.Li === l || c.Li === a)) || c.Ri === r)
              return Promise.resolve(c);
          for (c of t ? n.gn.$n : [])
            if ((u && (c.Li === l || c.Li === a)) || c.Ri === r)
              return Promise.resolve(c);
          for (c of ((s = null), t ? [] : n.gn.Zn))
            if (c.Ri.includes(r)) {
              if (s) {
                s = null;
                break;
              }
              s = c;
            }
          return Promise.resolve(s);
        }),
        (d = function (t) {
          t && t();
        }),
        (e.li = {
          Ui: false,
          Oi: 0,
          Ai: null,
          Bi: function (t) {
            e.li.Ai
              ? t && e.li.Ai.push(t)
              : ((n.dn.et = Date.now()),
                (e.li.Ai = t ? [t] : []),
                e.li.Oi ||
                  r.me.history.search(
                    { text: "", maxResults: 2e4, startTime: 0 },
                    function (t) {
                      setTimeout(e.li.Vi, 0, t);
                    }
                  ));
          },
          Vi: function (t) {
            var i, o, u, f, a;
            for (e.li.Vi = null, i = 0, o = t.length; i < o; i++)
              (f = (u = t[i]).url).length > 2e3 && (f = e.li.Wi(f, u)),
                (t[i] = {
                  t: f,
                  Ri: u.title,
                  qi: u.lastVisitTime,
                  ji: 1,
                  u: f,
                });
            if (m) for (a of t) 0 === e.fi(a.t, a.Ri) && (a.ji = 0);
            setTimeout(function () {
              setTimeout(function () {
                var t,
                  r,
                  i,
                  o,
                  u,
                  f,
                  a,
                  l,
                  c = n.dn.ut;
                for (t = c.length - 1; 0 < t; )
                  for (
                    u =
                      (o = (r = c[t]).t = e.oi.Si((i = r.u), r)).length >=
                      i.length;
                    0 <= --t &&
                    !((a = (f = c[t]).u).length >= i.length) &&
                    i.startsWith(a);

                  )
                    (f.u = i.slice(0, a.length)),
                      (l = u ? a : e.oi.Si(a, f)),
                      (f.t =
                        u || l.length < a.length ? o.slice(0, l.length) : l);
                e.li.Ci &&
                  setTimeout(function () {
                    e.li.Ci && e.li.Ci(n.dn.ut);
                  }, 200);
              }, 100),
                n.dn.ut.sort(function (t, e) {
                  return t.u > e.u ? 1 : -1;
                }),
                (e.li.Ui = true),
                r.me.history.onVisitRemoved.addListener(e.li.Hi),
                r.me.history.onVisited.addListener(e.li.zi);
            }, 100),
              (n.dn.ut = t),
              (e.li.Bi = d),
              e.li.Ai &&
                e.li.Ai.length > 0 &&
                setTimeout(
                  function (t) {
                    for (var e of t) e();
                  },
                  1,
                  e.li.Ai
                ),
              (e.li.Ai = null);
          },
          zi: function (t) {
            var r,
              i,
              o,
              f,
              a,
              l,
              c,
              s,
              _,
              v = t.url;
            if (
              (v.length > 2e3 && (v = e.li.Wi(v, t)),
              (r = t.lastVisitTime),
              (i = t.title),
              (o = ++n.dn.ct),
              (f = n.dn.it),
              (a = e.li.Mi(v)) < 0 && n.dn.rt++,
              (o > 59 || (o > 10 && Date.now() - n.dn.et > 3e5)) && e.li.Fi(),
              (l =
                a >= 0
                  ? n.dn.ut[a]
                  : { t: "", Ri: i, qi: r, ji: m ? e.fi(v, i) : 1, u: v }),
              f &&
                (s = e.si(v)) &&
                ((c = f.get(s._i))
                  ? ((c.qi = r),
                    a < 0 && (c.Gi += l.ji),
                    s.mi > 6 && (c.Ae = 8 === s.mi ? 1 : 0))
                  : f.set(s._i, { qi: r, Gi: l.ji, Ae: 8 === s.mi ? 1 : 0 })),
              a >= 0)
            )
              return (
                (l.qi = r),
                void (
                  i &&
                  i !== l.Ri &&
                  ((l.Ri = i),
                  u.wi.Vr && u.wi.Zr(1),
                  m &&
                    ((_ = e.fi(v, i)),
                    l.ji !== _ && ((l.ji = _), c && (c.Gi += _ || -1))))
                )
              );
            (l.t = e.oi.Si(v, l)),
              n.dn.ut.splice(~a, 0, l),
              u.wi.Vr && u.wi.Zr(1);
          },
          Hi: function (t) {
            var r, i, o, f, a, c, s, _, m;
            if (((l.length = 0), (r = n.hn), u.wi.Zr(1), t.allHistory))
              return (
                (n.dn.ut = []),
                (n.dn.it = new Map()),
                (i = new Set(
                  n.gn.Zn.map(function (t) {
                    return t.u;
                  })
                )),
                void r.forEach(function (t, e) {
                  i.has(e) || r.delete(e);
                })
              );
            for (s of ((o = e.li.Mi), (f = n.dn.ut), (a = n.dn.it), t.urls))
              (_ = o(s)) >= 0 &&
                (a &&
                  f[_].ji &&
                  (m = e.si(s)) &&
                  (c = a.get(m._i)) &&
                  --c.Gi <= 0 &&
                  a.delete(m._i),
                f.splice(_, 1),
                r.delete(s));
          },
          Wi: function (t, e) {
            var n = t.lastIndexOf(":", 9),
              r = n > 0 && "://" === t.substr(n, 3),
              o = e.title;
            return (
              (t =
                t.slice(0, (r ? t.indexOf("/", n + 4) : n) + 320) + "\u2026"),
              o && o.length > 160 && (e.title = i.Ot(o, 0, 160)),
              t
            );
          },
          Fi: function () {
            var t = Date.now();
            if (n.dn.rt <= 0);
            else {
              if (t < n.dn.et + 1e3 && t >= n.dn.et) return;
              setTimeout(
                r.me.history.search,
                50,
                {
                  text: "",
                  maxResults: Math.min(999, n.dn.ct + 10),
                  startTime: t < n.dn.et ? t - 3e5 : n.dn.et,
                },
                e.li.Ji
              );
            }
            return (n.dn.et = t), (n.dn.rt = n.dn.ct = 0), e.oi.Ei();
          },
          Ci: function (t) {
            var r, i, o, u, f, a, l, c;
            for (i of ((e.li.Ci = null), (r = n.dn.it), t))
              (o = i.qi),
                (u = i.ji),
                (f = e.si(i.u)) &&
                  ((l = f.mi),
                  (c = r.get((a = f._i)))
                    ? (c.qi < o && (c.qi = o),
                      (c.Gi += u),
                      l > 6 && (c.Ae = 8 === l ? 1 : 0))
                    : r.set(a, { qi: o, Gi: u, Ae: 8 === l ? 1 : 0 }));
          },
          Ji: function (t) {
            var r,
              i,
              o,
              u,
              f = n.dn.ut,
              a = e.li.Mi;
            if (!(f.length <= 0))
              for (r of t) {
                if (
                  ((i = r.url).length > 2e3 && (r.url = i = e.li.Wi(i, r)),
                  (o = a(i)) < 0)
                )
                  n.dn.rt--;
                else if (!(u = r.title) || u === f[o].Ri) continue;
                n.dn.ct--, e.li.zi(r);
              }
          },
          Mi: function (t) {
            for (
              var e = "", r = n.dn.ut, i = r.length - 1, o = 0, u = 0;
              o <= i;

            )
              if ((e = r[(u = (o + i) >>> 1)].u) > t) i = u - 1;
              else {
                if (e === t) return u;
                o = u + 1;
              }
            return ~o;
          },
        }),
        (p = function (t, n, i) {
          var o = r.se();
          o
            ? o.getRecentlyClosed(
                { maxResults: Math.min((1.2 * t) | 0, o.MAX_SESSION_RESULTS) },
                function (t) {
                  var o, u, f, a, l, c, s;
                  for (a of ((o = []), (f = 0), t || []))
                    (l = a.tab)
                      ? ((c = l.url).length > 2e3 && (c = e.li.Wi(c, l)),
                        (s = l.title),
                        (n || e.fi(c, s)) &&
                          o.push({
                            u: c,
                            Ri: s,
                            Ki:
                              ((u = a.lastModified),
                              u < 3e11 && u > -4e10 ? 1e3 * u : u),
                            Ni: [l.windowId, l.sessionId],
                          }))
                      : (f = 1);
                  return f ? setTimeout(i, 0, o) : i(o), r.ae();
                }
              )
            : i([]);
        }),
        (e.ai = p),
        (e.fi = function (t, e) {
          return v.test(e) || v.test(t) ? 0 : 1;
        }),
        (e.ui = {
          Qi: function (t) {
            var e, n;
            if (m)
              for (e of t)
                for (n of m)
                  if (
                    ((n = n.trim()),
                    e.includes(n) ||
                      (n.length > 9 &&
                        e.length + 2 >= n.length &&
                        n.includes(e)))
                  )
                    return true;
            return false;
          },
          Xi: function () {
            var t, r, i, o, u;
            if (n.gn.Zn) for (t of n.gn.Zn) t.ji = m ? e.fi(t.t, t.Li) : 1;
            if (n.dn.ut)
              for (t of ((r = n.dn.it), n.dn.ut))
                (i = m ? e.fi(t.t, t.Ri) : 1),
                  t.ji !== i &&
                    ((t.ji = i),
                    r &&
                      (o = e.si(t.u)) &&
                      (u = r.get(o._i)) &&
                      (u.Gi += i || -1));
          },
        }),
        (e.oi = {
          Si: function (t, e) {
            if (t.length >= 400 || t.lastIndexOf("%") < 0) return t;
            try {
              return f(t);
            } catch (t) {}
            return n.hn.get(t) || (e && l.push(e), t);
          },
          Di: function (t) {
            for (var r, i, o = n.hn, u = l, a = -1, c = t.length; ; )
              try {
                for (; ++a < c; )
                  (r = t[a]).t =
                    (i = r.u).length >= 400 || i.lastIndexOf("%") < 0
                      ? i
                      : f(i);
                break;
              } catch (t) {
                r.t = o.get(i) || (u.push(r), i);
              }
            e.oi.Ei();
          },
          Ei: function () {
            0 !== l.length && -1 === c && ((c = 0), setTimeout(T, 17));
          },
        }),
        (T = function () {
          var t,
            e,
            r,
            i,
            o = l.length;
          if (!s || c >= o) return (l.length = 0), (c = -1), void (_ = null);
          for (o = Math.min(c + 32, o), _ = _ || new TextDecoder(s); c < o; c++)
            (t = n.hn.get((i = (r = "string" == typeof (e = l[c])) ? e : e.u)))
              ? r || (e.t = t)
              : ((t =
                  (t = i.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi, h)).length !==
                  i.length
                    ? t
                    : i),
                "string" != typeof e
                  ? n.hn.set(e.u, (e.t = t))
                  : n.hn.set(e, t));
          c < l.length
            ? setTimeout(T, 4)
            : ((l.length = 0), (c = -1), (_ = null));
        }),
        (h = function (t) {
          var e,
            n,
            r = new Uint8Array(t.length / 3);
          for (e = 1, n = 0; e < t.length; e += 3)
            r[n++] = parseInt(t.substr(e, 2), 16);
          return _.decode(r);
        }),
        (n.Vn.omniBlockList = function (t) {
          var r,
            o = [];
          for (r of t.split("\n")) r.trim() && "#" !== r[0] && o.push(r);
          (v = o.length > 0 ? new RegExp(o.map(i.t).join("|"), "") : null),
            (e.omniBlockList = m = o.length > 0 ? o : null),
            (n.dn.ut || n.gn.Zn.length) && setTimeout(e.ui.Xi, 100);
        }),
        o.Xe.then(function () {
          o.Qe("omniBlockList");
        }),
        (n.Vn.localeEncoding = function (t) {
          var r = !!t && !(t = t.toLowerCase()).startsWith("utf"),
            i = s;
          if ((s = r ? t : "") !== i) {
            try {
              new TextDecoder(s);
            } catch (t) {
              r = false;
            }
            r
              ? "1" !== i &&
                setTimeout(function () {
                  return n.dn.ut && e.oi.Di(n.dn.ut), e.oi.Di(n.gn.Zn);
                }, 100)
              : (n.hn.clear(), l && (l.length = 0)),
              a !== r &&
                ((l = r ? [] : { length: 0, push: n.B }), (a = r), (c = -1));
          }
        }),
        o.Qe("localeEncoding"),
        (n.y.yu = function (t, n, i) {
          switch (n) {
            case "tab":
              u.wi.Yi(null),
                r.ve.remove(+t, function () {
                  var t = r.ae();
                  return t || u.wi.Yi(null), i(!t), t;
                });
              break;
            case "history":
              var o = !e.li.Ui || e.li.Mi(t) >= 0;
              r.me.history.deleteUrl({ url: t }), o && u.wi.Zr(1), i(o);
          }
        }),
        (n.y.Zi = e.ui.Qi);
    }
  );
