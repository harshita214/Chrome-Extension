"use strict";
(__filename = "background/page_handlers.js"),
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
      "./exclusions",
      "./ui_css",
      "./key_mappings",
      "./run_commands",
      "./tools",
      "./open_urls",
      "./frame_commands",
    ],
    function (n, u, r, t, l, e, o, i, c, s, f, a, v, d, m, _) {
      var p, g, b, x;
      Object.defineProperty(u, "__esModule", { value: true }),
        (u.onReq = void 0),
        (i = __importStar(i)),
        (s = __importStar(s)),
        (p = [
          function () {
            return [i.Ne, r.Tn.o, r.u.wt];
          },
          function (n) {
            var u,
              t,
              l,
              e = r.O && r.O();
            if (e) return e.then(p[1].bind(null, n, null));
            for (t in ((u = {}), i.Ne)) (l = i.Ve(t)) !== i.Ne[t] && (u[t] = l);
            return u;
          },
          function (n) {
            var u,
              t,
              l = n.key,
              e = n.val;
            return (
              (e =
                null !== (u = null != e ? e : i.Ne[l]) && void 0 !== u
                  ? u
                  : null),
              i.We(l, e),
              (t = r.Un[l]) !== e ? t : null
            );
          },
          function (n) {
            var u = i.Je(n.key, n.val);
            return u !== n.val ? u : null;
          },
          function (n) {
            i.Ke({ N: 6, d: n });
          },
          function (n) {
            return i.Ve(n.key, true);
          },
          function (n) {
            r.Pn.has(n) || l.ne(n);
          },
          function () {
            var n,
              u = a.ra;
            return (
              !(
                !r.Tn.l ||
                u ||
                ((n = Object.keys(r.pn).join("")),
                (n += r.mn ? Object.keys(r.mn).join("") : ""),
                !/[^ -\xff]/.test(n))
              ) ||
              (u
                ? (function (n) {
                    var u,
                      r,
                      t = n.length > 1 ? n.length + " Errors:\n" : "Error: ";
                    for (r of n)
                      (u = 0),
                        (t += r[0].replace(/%([a-z])/g, function (n, t) {
                          return (
                            ++u,
                            "c" === t
                              ? ""
                              : "s" === t || "d" === t
                              ? r[u]
                              : JSON.stringify(r[u])
                          );
                        })),
                        u + 1 < r.length &&
                          (t += " ".concat(
                            r
                              .slice(u + 1)
                              .map(function (n) {
                                return "object" == typeof n && n
                                  ? JSON.stringify(n)
                                  : n;
                              })
                              .join(" "),
                            ".\n"
                          ));
                    return t;
                  })(u)
                : "")
            );
          },
          function (n) {
            var u = c.indexFrame(n[1], 0);
            return u && u.s && (u.s.fr |= 44), f.mergeCSS(n[0], -1);
          },
          function (n) {
            n &&
              (n.hc
                ? localStorage.setItem("isHC_f", "1")
                : localStorage.removeItem("isHC_f")),
              f.ri(2);
          },
          function (n) {
            return [e.$e(n[0], null, n[1]), e._e];
          },
          function () {
            d.hr.vo();
          },
          function () {
            var n = r._n.get("?"),
              u = "?";
            return (
              (n && 7 === n.pa && n.va) ||
                r._n.forEach(function (n, r) {
                  7 === n.pa && n.va && (u = u && u.length < r.length ? u : r);
                }),
              u
            );
          },
          function (n) {
            var u;
            return [
              (n = e.$e(n, null, 0)),
              null !== (u = r.xn.get(n)) && void 0 !== u ? u : null,
            ];
          },
          function (n) {
            var u,
              r,
              t,
              l = new Map();
            return (
              o.je("k:" + n, l),
              null == (u = l.get("k"))
                ? null
                : ((r = e.$e(u.Ce, null, -2)),
                  [
                    !(t = e._e > 2),
                    t
                      ? u.Ce
                      : r.replace(/\s+/g, "%20") +
                        (u.De && "k" !== u.De ? " " + u.De : ""),
                  ])
            );
          },
          function (n) {
            m.du(n);
          },
          function (n) {
            var u = null;
            return (
              n.startsWith("vimium://") && (u = r.P(n.slice(9), 1, true)),
              "string" == typeof (u = null !== u ? u : e.$e(n, null, -1)) &&
                ((u = o.Pe(u, "whole")), (u = e.we(u))),
              u
            );
          },
          function () {
            return r.j && r.j();
          },
          function (n) {
            return r.V(n[0], n[1]);
          },
          function (n) {
            return m.vu(n);
          },
          function () {
            var n = r.O && r.O();
            return Promise.all([l.te(l.getCurTab), n]).then(function (n) {
              var u,
                e = n[0],
                o = (e && e[0]) || null,
                c = o ? o.id : r.jn,
                f = null !== (u = r.Pn.get(c)) && void 0 !== u ? u : null,
                a = o ? l.getTabUrl(o) : (f && (f.ar || f.cr).s.Ce) || "",
                v = !f || (f.cr.s.or && !t.Zt.test(f.cr.s.Ce)) ? null : f.cr.s,
                d = !(
                  f ||
                  (o && a && "loading" === o.status && /^(ht|s?f)tp/.test(a))
                ),
                m = x(f),
                _ = !d && !m,
                p = _
                  ? null
                  : m || !a
                  ? m
                  : a.startsWith(location.protocol) &&
                    !a.startsWith(location.origin + "/")
                  ? new URL(a).host
                  : null,
                g = p ? r.Rn.get(p) : null;
              return (
                _ || null == g || true === g ? (p = null) : f && (f.dr = -1),
                {
                  ver: r.u.ht,
                  runnable: _,
                  url: a,
                  tabId: c,
                  frameId: f && (v || f.ar) ? (v || f.ar.s).or : 0,
                  topUrl: v && v.or && f.ar ? f.ar.s.Ce : null,
                  frameUrl: v && v.Ce,
                  lock: f && f.tr ? f.tr.nt : null,
                  status: v ? v.nt : 0,
                  unknownExt: p,
                  exclusions: _
                    ? {
                        rules: i.Ve("exclusionRules", true),
                        onlyFirst: i.Ve("exclusionOnlyFirstMatch", true),
                        matchers: s.Kt(null),
                        defaults: i.Ne.exclusionRules,
                      }
                    : null,
                  os: r.Tn.o,
                  reduceMotion: r.Tn.m,
                }
              );
            });
          },
          function (n) {
            var u,
              e,
              o = n[0],
              c = n[1],
              s = i.Ve("extAllowList"),
              f = s.split("\n");
            return (
              f.indexOf(c) < 0 &&
                ((u = f.indexOf("# " + c) + 1 || f.indexOf("#" + c) + 1),
                f.splice(u ? u - 1 : f.length, u ? 1 : 0, c),
                (s = f.join("\n")),
                i.We("extAllowList", s)),
              (e = r.Pn.get(o)) && (e.dr = null),
              l.te(l.me.tabs.get, o).then(function (n) {
                var u = t.s(),
                  r = function () {
                    return (
                      v.runNextOnTabLoaded({}, n, u.Gt), l.me.runtime.lastError
                    );
                  };
                return (
                  n ? l.me.tabs.reload(n.id, r) : l.me.tabs.reload(r), u.Ft
                );
              })
            );
          },
          function (n) {
            var u,
              t,
              l = n[1],
              e = n[2];
            return (
              r.P("status/" + n[0], 3),
              (t = (u = c.indexFrame(l, e) || c.indexFrame(l, 0))
                ? r.Pn.get(l).tr
                : null),
              u && !t && r.In[8]({ u: u.s.Ce }, u),
              [u ? u.s.nt : 0, t ? t.nt : null]
            );
          },
          function (n) {
            return s.Kt(n)[0];
          },
          function (n, u) {
            return _.initHelp({ f: true }, u);
          },
          function (n) {
            var u,
              r,
              t,
              e = n.module,
              o = n.name,
              i = g[e];
            return g.hasOwnProperty(e) && i.includes(o)
              ? ((r = n.args),
                (t = (u = l.me[e])[o]),
                new Promise(function (n) {
                  r.push(function (u) {
                    var r = l.ae();
                    return n(r ? [void 0, r] : [b(u), void 0]), r;
                  }),
                    t.apply(u, r);
                }))
              : [void 0, { message: "refused" }];
          },
          function (n, u) {
            return u.s.ur;
          },
          function (n) {
            var u,
              r = t.It();
            return (
              n &&
                ((u = localStorage.getItem(n)), (r[n] = null != u ? u : null)),
              r
            );
          },
        ]),
        (g = {
          permissions: ["contains", "request", "remove"],
          tabs: ["update"],
        }),
        (b = function (n) {
          return {
            message: n && n.message ? n.message + "" : JSON.stringify(n),
          };
        }),
        (u.onReq = function (n, u) {
          return p[n.n](n.q, u);
        }),
        (x = function (n) {
          return n && "string" == typeof n.dr && true !== r.Rn.get(n.dr)
            ? n.dr
            : null;
        });
    }
  );
