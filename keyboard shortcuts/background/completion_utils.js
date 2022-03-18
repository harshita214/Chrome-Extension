"use strict";
(__filename = "background/completion_utils.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./browser",
      "./utils",
      "./settings",
      "./normalize_urls",
      "./tools",
      "./browsing_data_manager",
    ],
    function (n, r, t, u, e, o, i, f, a) {
      var l,
        c,
        s,
        _,
        v,
        m,
        h,
        d,
        b,
        p,
        w,
        g,
        x,
        M,
        T,
        k,
        E,
        y,
        R,
        S,
        I,
        P,
        j,
        q;
      Object.defineProperty(r, "__esModule", { value: true }),
        (r.Au =
          r.ff =
          r.sortBy0 =
          r.shortenUrl =
          r.highlight =
          r.cutTitle =
          r.Hu =
          r.get2ndArg =
          r.ComputeRelevancy =
          r.ComputeRecency =
          r.ComputeWordRelevancy =
          r.Ru =
          r.Tu =
          r.Du =
          r.Yu =
          r.wi =
          r.qu =
          r.sf =
          r.ef =
          r.setupQueryTerms =
          r.set_tabsInNormal =
          r.Zu =
          r.tabsInNormal =
            void 0),
        (e = __importStar(e)),
        (o = __importStar(o)),
        (l = [0, 0]),
        (r.tabsInNormal = c = null),
        (s = null),
        (_ = 0),
        (v = []),
        (p = 0),
        (r.Zu = w = 3),
        (g = function (n) {
          r.tabsInNormal = c = n;
        }),
        (r.set_tabsInNormal = g),
        (r.setupQueryTerms = function (n, r, t) {
          (m = n), (h = r), (b = false), (d = t);
        }),
        (r.ef = function (n) {
          m = n;
        }),
        (r.sf = function (n) {
          p = n;
        }),
        (x = function (n) {
          r.Zu = w = n;
        }),
        (r.qu = x),
        (r.wi = {
          xu: null,
          Mu: null,
          Vr: 0,
          ho: 0,
          _o: function (n) {
            var u,
              e,
              o,
              i,
              f,
              a = null,
              l = 0,
              c = m.join(" ");
            for (u = v, e = c ? u.length : 0; 0 <= --e; )
              if (u[e].wo || !n) {
                for (
                  o = u[e].Yr, i = 0, f = 0;
                  i < o.length && f < m.length;
                  f++
                )
                  m[f].includes(o[i]) && i++;
                if (i >= o.length) {
                  a = u[e];
                  break;
                }
              }
            (r.wi.xu = a),
              a &&
              (t.Jn.t < 200 || !a.ut || a.ut.length > 1e3) &&
              (l = performance.now()) - a.qi < Math.max(300, 1.3 * t.Jn.t)
                ? ((r.wi.Mu = a), (a.Yr = m.slice(0)))
                : !c ||
                  (a && c === a.Yr.join(" ")) ||
                  !(c.length > 4 || /\w\S|[^\x00-\x80]/.test(c))
                ? (r.wi.Mu = null)
                : ((r.wi.Mu = {
                    Yr: m.slice(0),
                    wo: n,
                    qi: l || performance.now(),
                    ut: a && a.ut,
                    Zn: a && a.Zn,
                  }),
                  v.push(r.wi.Mu),
                  r.wi.Vr || (r.wi.Vr = setInterval(r.wi.go, 6e3)));
          },
          go: function () {
            for (
              var n = v, t = -1, u = performance.now() - 5983;
              ++t < n.length && n[t].qi < u;

            );
            ++t < n.length
              ? n.splice(0, t)
              : ((n.length = 0), clearInterval(r.wi.Vr), (r.wi.Vr = 0));
          },
          Zr: function (n) {
            for (var r of v)
              n < 2 ? (r.ut = null) : n < 3 ? (r.Zn = null) : (s = null);
          },
          Yi: function (n) {
            s !== n &&
              (r.wi.ho && (clearTimeout(r.wi.ho), (r.wi.ho = 0)),
              (s = n),
              n && (r.wi.ho = setTimeout(r.wi.Yi, 3e3, null)));
          },
        }),
        (r.Yu = {
          xo: 0,
          lo: 0,
          Xu: function () {
            var n = m[0],
              u = t.Ln.keywords;
            return null === u
              ? ((r.Yu.lo = r.Yu.lo || setTimeout(r.Yu.Mo, 67)), true)
              : !(n.length >= r.Yu.xo) && u.includes("\n" + n);
          },
          Mo: function () {
            var n,
              u,
              o,
              i = e.Nt(t.Ln.map).sort(),
              f = 0,
              a = "",
              l = [];
            for (n = i.length; 0 <= --n; )
              a.startsWith((u = i[n])) ||
                ((f = (o = u.length) > f ? o : f), (a = u), l.push(u));
            (t.Ln.keywords = "\n" + l.join("\n")), (r.Yu.xo = f), (r.Yu.lo = 0);
          },
        }),
        (r.Du = {
          Bu: null,
          Eu: null,
          vf: null,
          _f: function () {
            var n,
              t = (r.Du.Bu = []);
            for (n of ((r.Du.Eu = r.Du.vf = null), m))
              t.push(
                new RegExp(
                  e.t(n),
                  n !== n.toUpperCase() && n.toLowerCase() === n ? "i" : ""
                )
              );
          },
          Iu: function () {
            var n,
              t,
              u,
              e = (r.Du.Eu = []),
              o = (r.Du.vf = []);
            for (n of r.Du.Bu)
              (t = "\\b" + n.source),
                (u = n.flags),
                e.push(new RegExp(t, u)),
                o.push(new RegExp(t + "\\b", u));
          },
          df: function (n) {
            r.Du.Bu && (r.Du.Bu[0] = new RegExp(e.t(n), r.Du.Bu[0].flags));
          },
        }),
        (r.Tu = function (n, t) {
          for (var u of r.Du.Bu) if (!(u.test(n) || u.test(t))) return false;
          return true;
        }),
        (M = function (n, t) {
          var u,
            e,
            o,
            i = 0,
            f = 0,
            a = 0,
            l = 0,
            c = !!t;
          for (r.Du.Eu || r.Du.Iu(), u = 0, e = m.length; u < e; u++)
            (l += (o = k(u, n))[0]),
              (a += o[1]),
              c && ((f += (o = k(u, t))[0]), (i += o[1]));
          return (
            (l = (l / w) * T(a, n.length)),
            0 === i
              ? t
                ? l / 2
                : l
              : l < (f = (f / w) * T(i, t.length))
              ? f
              : (l + f) / 2
          );
        }),
        (r.Ru = M),
        (T = function (n, r) {
          return n < r ? n / r : r / n;
        }),
        (k = function (n, t) {
          var u,
            e = 0;
          return (u = t.split(r.Du.Bu[n]).length) < 1
            ? l
            : ((e = 1),
              r.Du.Eu[n].test(t) && ((e += 1), r.Du.vf[n].test(t) && (e += 1)),
              [e, (u - 1) * m[n].length]);
        }),
        (E = function (n) {
          return r.Ru(n.t, n.title);
        }),
        (r.ComputeWordRelevancy = E),
        (r.ComputeRecency = function (n) {
          var r = (n - p) / 18144e5;
          return r < 0
            ? 0
            : r < 1
            ? r * r * 0.666667
            : r < 1.000165
            ? 0.666446
            : 0;
        }),
        (y = function (n, t, u) {
          var e = r.ComputeRecency(u),
            o = r.Ru(n, t);
          return e <= o ? o : (o + e) / 2;
        }),
        (r.ComputeRelevancy = y),
        (r.get2ndArg = function (n, r) {
          return r;
        }),
        (R = function (n) {
          var t, u, e;
          h || n.v || (n.v = r.ff(n.u)),
            null == n.textSplit
              ? ((n.title = r.cutTitle(n.title)),
                (u = i.pe((t = n.t))).length !== t.length
                  ? (e = I(
                      t,
                      "\\" === u[0]
                        ? 5
                        : "/" === t.charAt(7) &&
                          "%3a" === t.substr(9, 3).toLowerCase()
                        ? 10
                        : 8
                    ))
                  : ((u = r.shortenUrl(t)), (e = P(u))),
                (n.t = t.length !== n.u.length ? u : ""),
                (n.textSplit = j(
                  u,
                  e,
                  t.length - u.length,
                  h ? d - 13 - Math.min(n.title.length, 40) : d
                )))
              : n.t === n.u && (n.t = "");
        }),
        (r.Hu = R),
        (S = function (n, t) {
          var u = n.length > d + 40;
          return (
            u && (n = e.Ot(n, 0, d + 39)),
            r.highlight(u ? n + "\u2026" : n, t || P(n))
          );
        }),
        (r.cutTitle = S),
        (r.highlight = function (n, r) {
          var t, u, o, i, f;
          if (b) return n;
          if (0 === r.length) return e.$t(n);
          for (t = "", u = 0, o = 0; o < r.length; o += 2)
            (f = r[o + 1]),
              (i = r[o]) >= n.length ||
                ((t += e.$t(n.slice(u, i))),
                (t += "<match>"),
                (t += e.$t(n.slice(i, f))),
                (t += "</match>"),
                (u = f));
          return t + e.$t(n.slice(u));
        }),
        (r.shortenUrl = function (n) {
          var r = e.v(n);
          return !r || r >= n.length
            ? n
            : n.slice(r, n.length - +(n.endsWith("/") && !n.endsWith("://")));
        }),
        (I = function (n, r) {
          var t,
            u = P(n);
          for (t = 0; t < u.length; )
            u[t + 1] <= r
              ? u.splice(t, 2)
              : ((u[t] = Math.max(u[t] - r, 0)), (u[t + 1] -= r), (t += 2));
          return u;
        }),
        (P = function (n) {
          var t,
            u,
            e,
            o,
            i,
            f,
            a,
            l,
            c,
            s,
            _,
            v = [];
          for (t = 0, u = m.length; t < u; t++)
            for (
              e = 0,
                o = 0,
                i = void 0,
                a = (f = n.split(r.Du.Bu[t])).length - 1,
                l = m[t].length;
              e < a;
              e++, o = i
            )
              (i = (o += f[e].length) + l), v.push([o, i]);
          if (0 === v.length) return v;
          if (1 === v.length) return v[0];
          for (
            v.sort(r.sortBy0), c = v[0], t = 1, s = 1, u = v.length;
            s < u;
            s++
          )
            c[t] >= (_ = v[s])[0]
              ? c[t] < _[1] && (c[t] = _[1])
              : (c.push(_[0], _[1]), (t += 2));
          return c;
        }),
        (r.sortBy0 = function (n, r) {
          return n[0] - r[0];
        }),
        (j = function (n, r, t, u) {
          var o,
            i,
            f,
            a,
            l,
            c = "",
            s = n.length,
            _ = s,
            v = "";
          if (
            (s <= u ||
              (t > 1
                ? (_ = n.indexOf("/") + 1 || s)
                : (_ = n.indexOf(":")) < 0
                ? (_ = s)
                : e.Zt.test(n.slice(0, _ + 3).toLowerCase())
                ? (_ = n.indexOf("/", _ + 4) + 1 || s)
                : (_ += 22)),
            _ < s && r.length)
          )
            for (
              o = r.length, i = s + 8;
              (o -= 2) > -4 && i >= _;
              i = o < 0 ? 0 : r[o]
            )
              if (
                ((f = o < 0 ? _ : r[o + 1]),
                (a = i - 20 - Math.max(f, _)) > 0 && (s -= a) <= u)
              ) {
                _ = f + (u - s);
                break;
              }
          for (s = 0, o = 0; s < u && o < r.length; o += 2)
            (a = (i = r[o]) - 20 - (l = Math.max(s, _))) > 0
              ? ((u += a),
                (v = e.Ot(n, s, l + 11)),
                (c += b ? v : e.$t(v)),
                (c += "\u2026"),
                (v = e.At(n, i - 8, i)),
                (c += b ? v : e.$t(v)))
              : s < i && ((v = n.slice(s, i)), (c += b ? v : e.$t(v))),
              (v = n.slice(i, (s = r[o + 1]))),
              b
                ? (c += v)
                : ((c += "<match>"), (c += e.$t(v)), (c += "</match>"));
          return (
            (v =
              n.length <= u
                ? n.slice(s)
                : e.Ot(n, s, u - 1 > s ? u - 1 : s + 10)),
            c + (b ? v : e.$t(v)) + (n.length <= u ? "" : "\u2026")
          );
        }),
        (r.ff = function (n) {
          for (
            var r = a.li.Ui && n.startsWith("http") ? a.li.Mi(n) : -1,
              u = r < 0 ? ~r - 1 : r,
              e = u < 0 ? [] : t.dn.ut,
              o = n.indexOf(":") + 3,
              i = 0,
              f = 0,
              l = "",
              c = "",
              s = 0,
              _ = 0;
            i <= u &&
            (o = "/" === n[o] ? o + 1 : n.indexOf("/", o + 1) + (f ? 0 : 1)) >
              0;
            f = o
          ) {
            for (l = n.slice(f, o), _ = u; i <= _; )
              if ((c = e[(s = (i + _) >>> 1)].u.slice(f)) > l) _ = s - 1;
              else {
                if (c === l) return f ? e[s].u : "";
                i = s + 1;
              }
            if (i <= u && f && "/" === (l = e[i].u)[o] && l.length <= ++o)
              return l;
          }
          return "";
        }),
        (q = function (n, e, o, i, f) {
          var a,
            l,
            v = t.Mn;
          null === c &&
            (v = 1 !== v ? v : t.Wn > 51 || t.u._t || s ? t.in(0) : 1),
            1 !== v || 2048 & e
              ? ((r.tabsInNormal = c = 2 !== v && !(2048 & e)),
                _ !== (a = (c ? 2 : 0) | (n ? 1 : 0)) && ((s = null), (_ = a)),
                (f = f || s)
                  ? o(i, f)
                  : ((l = o.bind(null, i)),
                    n ? (512 & e ? u.getCurTabs : u.le)(l) : u.ve.query({}, l)))
              : u.getCurWnd(n, function (u) {
                  t.in(u.incognito ? 2 : 0),
                    i.o || r.Au(n, e, o, i, n ? u.tabs : null);
                });
        }),
        (r.Au = q),
        (f.mr.mo = function () {
          s && (1 & _ || !(2 & _) != (2 === t.Mn)) && r.wi.Yi(null);
        }),
        o.Xe.then(function () {
          o.Qe("searchEngines", null);
        });
    }
  );
