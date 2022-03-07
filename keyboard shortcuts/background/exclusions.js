"use strict";
(__filename = "background/exclusions.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./settings",
      "./ports",
    ],
    function (n, t, u, o, r, e, i, l) {
      var f, s, a, c, v, m, p, d, h, $;
      Object.defineProperty(t, "__esModule", { value: true }),
        (t.Ht = t.Jt = t.ir = t.Kt = t.vr = t.lr = t.Qt = t.Vt = t.Wt = void 0),
        (o = __importStar(o)),
        (i = __importStar(i)),
        (t.Wt = function (n, t) {
          var u, r;
          return (
            (t = t && t.replace(/<(\S+)>/g, "$1")),
            "^" === n[0]
              ? (u = o.m(n.startsWith("^$|") ? n.slice(3) : n, "", 0)) ||
                console.log("Failed in creating an RegExp from %o", n)
              : "`" === n[0] &&
                ((r = o.l(n.slice(1), 0)) ||
                  console.log("Failed in creating an URLPattern from %o", n)),
            u
              ? { t: 1, v: u, k: t }
              : r
              ? { t: 3, v: r, k: t }
              : {
                  t: 2,
                  v: n.startsWith(":vimium://")
                    ? e.ge(n.slice(10), false, -1)
                    : n.slice(1),
                  k: t,
                }
          );
        }),
        (t.Vt = function (n) {
          var t, u, r, i;
          return "^" === n[0]
            ? ((n = n.startsWith("^$|") ? n.slice(3) : n),
              (t = ".*$".includes(n.slice(-2))
                ? n.endsWith(".*$")
                  ? 3
                  : n.endsWith(".*")
                  ? 2
                  : 0
                : 0),
              (n = 0 !== t && "\\" !== n[n.length - t] ? n.slice(0, -t) : n),
              (u = o.m(n, "")) ? { t: 1, v: u } : null)
            : "`" === n[0]
            ? (r = o.l(n.slice(1)))
              ? { t: 3, v: r }
              : null
            : "localhost" === n ||
              (!n.includes("/") &&
                n.includes(".") &&
                (!/:(?!\d+$)/.test(n) || o.Ut(n, 6)))
            ? ((n =
                (n = (n = n.toLowerCase()).endsWith("*")
                  ? n.slice(0, /^[^\\]\.\*$/.test(n.slice(-3)) ? -2 : -1)
                  : n).startsWith(".*") && !/[(\\[]/.test(n)
                  ? "*." + n.slice(2)
                  : n),
              (i = void 0),
              (u = o.m(
                "^https?://" +
                  (n.startsWith("*") && "." !== n[1]
                    ? "[^/]" + n
                    : (i = n.replace(/\./g, "\\.")).startsWith("*")
                    ? i.replace("*\\.", "(?:[^./]+\\.)*?")
                    : i),
                "",
                0
              ))
                ? {
                    t: 1,
                    v: u,
                  }
                : n.includes("*")
                ? null
                : {
                    t: 2,
                    v: "https://" + (n.startsWith(".") ? n.slice(1) : n) + "/",
                  })
            : {
                t: 2,
                v:
                  (t = (n = (n = (":" === n[0] ? n.slice(1) : n).replace(
                    /([\/?#])\*$/,
                    "$1"
                  )).startsWith("vimium://")
                    ? e.ge(n.slice(9), false, -1)
                    : n).indexOf("://")) > 0 && n.indexOf("/", t + 3) < 0
                    ? n + "/"
                    : n,
              };
        }),
        (t.Qt = function (n, t) {
          return 1 === n.t
            ? n.v.test(t)
            : 2 === n.t
            ? t.startsWith(n.v)
            : n.v.test(t);
        }),
        (t.lr = f = false),
        (t.vr = s = false),
        (a = false),
        (c = []),
        (v = function (n) {
          c = n.map(function (n) {
            return t.Wt(n.pattern, n.passKeys);
          });
        }),
        (m = function (n) {
          return (n ? [t.Wt(n, "")] : c).map(function (n) {
            return {
              t: n.t,
              v:
                1 === n.t
                  ? n.v.source
                  : 2 === n.t
                  ? n.v
                  : {
                      hash: n.v.hash,
                      hostname: n.v.hostname,
                      pathname: n.v.pathname,
                      port: n.v.port,
                      protocol: n.v.protocol,
                      search: n.v.search,
                    },
            };
          });
        }),
        (t.Kt = m),
        (p = function (n, r) {
          var e,
            i,
            l,
            f,
            s = "";
          for (i of c)
            if (
              1 === i.t
                ? i.v.test(n)
                : 2 === i.t
                ? n.startsWith(i.v)
                : i.v.test(n)
            ) {
              if (0 === (l = i.k).length || ("^" === l[0] && l.length > 2) || a)
                return l && l.trim();
              s += l;
            }
          return !s &&
            r.or &&
            n.lastIndexOf("://", 5) < 0 &&
            !o.Zt.test(n) &&
            null !=
              (f =
                null === (e = u.Pn.get(r.ur)) || void 0 === e ? void 0 : e.ar)
            ? t.ir(f.s.Ce, f.s)
            : s
            ? s.trim()
            : null;
        }),
        (t.ir = p),
        (d = function () {
          var n =
            !r.ce() || false
              ? null
              : function (n) {
                  u.In[8](n);
                };
          return (
            (d = function () {
              return n;
            }),
            n
          );
        }),
        (t.Jt = function () {
          var n,
            t,
            u,
            r = o.It(),
            e = 0;
          for (n of c)
            if ((t = n.k)) {
              if ("^" === t[0] && t.length > 2) return true;
              for (u of t.split(" ")) (r[u] = 1), e++;
            }
          return e ? r : null;
        }),
        (h = function (n) {
          var o,
            r,
            e = c.length > 0 ? null : { N: 1, p: null, f: 0 };
          n
            ? e ||
              i.Ke({
                N: 3,
                H: 8,
              })
            : ((o = null != u.Bn || (void 0 !== u.Bn && u.Gn)),
              (r = c),
              l.eo(
                function (n) {
                  var r,
                    i,
                    l,
                    f = n.cr.s.nt,
                    s = n.cr.s;
                  for (r of n.oo) {
                    if (((i = null), (l = 0), e)) {
                      if (0 === r.s.nt) continue;
                    } else if (
                      ((l = null === (i = t.ir(r.s.Ce, r.s)) ? 0 : i ? 1 : 2),
                      !i && r.s.nt === l)
                    )
                      continue;
                    n.tr ||
                      (r.postMessage(e || { N: 1, p: i, f: 0 }), (r.s.nt = l));
                  }
                  o && f !== s.nt && u.x(s.ur, s.nt);
                },
                function () {
                  return r === c;
                }
              ));
        }),
        (t.Ht = h),
        ($ = function (n) {
          var u,
            o = c.length > 0,
            e = o || f ? d() : null;
          e &&
            (f !== o &&
              ((t.lr = f = o),
              (u = r.ce().onHistoryStateUpdated),
              o ? u.addListener(e) : u.removeListener(e)),
            s !== (n = o && n) &&
              ((t.vr = s = n),
              (u = r.ce().onReferenceFragmentUpdated),
              n ? u.addListener(e) : u.removeListener(e)));
        }),
        (u.Vn.exclusionRules = function (n) {
          var o = !c.length,
            r = u.pn;
          v(n),
            i.Qe("exclusionListenHash"),
            setTimeout(function () {
              setTimeout(t.Ht, 10, o), u.pn === r && i.Qe("keyMappings", null);
            }, 1);
        }),
        (u.Vn.exclusionOnlyFirstMatch = function (n) {
          a = n;
        }),
        (u.Vn.exclusionListenHash = $),
        "[]" !== i.Ze.getItem("exclusionRules") &&
          (v(i.Ve("exclusionRules")), (a = i.Ve("exclusionOnlyFirstMatch")));
    }
  );
