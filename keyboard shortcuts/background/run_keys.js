"use strict";
(__filename = "background/run_keys.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./ports",
      "./exclusions",
      "./i18n",
      "./key_mappings",
      "./run_commands",
    ],
    function (n, e, t, r, o, u, i, l, f, a) {
      var s, c, p, v, y, d, k, b, g, $, _, m, j;
      Object.defineProperty(e, "__esModule", { value: true }),
        (e.pr =
          e.parseEmbeddedOptions =
          e.runKeyInSeq =
          e.parseKeySeq =
          e.runKeyWithCond =
            void 0),
        (r = __importStar(r)),
        (s = Math.abs),
        (c = ["expect", "keys", "options", "mask"]),
        (p = 0),
        (v = function (n) {
          var e,
            t,
            o = r.It(),
            u = [],
            i = "";
          for (e in n)
            e.includes("$") ||
              (e.startsWith("o.")
                ? e.length > 2 && (o[(i = e.slice(2))] = n[e])
                : c.includes(e) || u.push(e));
          for (t of u) o[(i = t)] = n[t];
          return i ? o : null;
        }),
        (y = function (n, l) {
          var f,
            a,
            s,
            c,
            p,
            v,
            y = n.host,
            d = n.iframe,
            k = n.fullscreen,
            b = n.element;
          if (
            (void 0 === y &&
              ((y = n.host = null != n.url ? n.url : null), delete n.url),
            "string" == typeof y && (y = n.host = i.Vt(y)),
            null != y)
          ) {
            if (
              ((s = void 0),
              null != (a = l.url) ||
                (3 === y.t
                  ? !["/*", "*"].includes(y.v.pathname) ||
                    "*" !== y.v.search ||
                    "*" !== y.v.hash
                  : 2 !== y.t ||
                    ((s = y.v.indexOf("/", y.v.indexOf("://") + 3)) !==
                      y.v.length - 1 &&
                      -1 !== s)) ||
                (a = (c =
                  (null === (f = t.Pn.get(t.cPort ? t.cPort.s.ur : t.jn)) ||
                  void 0 === f
                    ? void 0
                    : f.ar) || t.cPort)
                  ? c.s.Ce
                  : null),
              null == a && (a = u.rr(null, true)) instanceof Promise)
            )
              return (
                a.then(function (n) {
                  var r;
                  (l.url =
                    n ||
                    (t.cPort
                      ? (
                          (null === (r = t.Pn.get(t.cPort.s.ur)) || void 0 === r
                            ? void 0
                            : r.ar) || t.cPort
                        ).s.Ce
                      : "")),
                    e.runKeyWithCond(l);
                }),
                0
              );
            if (!i.Qt(y, a)) return 1;
          }
          if (null != d) {
            if (!t.cPort && false !== d) return 1;
            if (
              ("string" == typeof d && (d = n.iframe = i.Vt(d) || true),
              "boolean" == typeof d)
            ) {
              if (d !== !!(t.cPort && t.cPort.s.or)) return 1;
            } else if (!i.Qt(d, t.cPort.s.Ce)) return 1;
          }
          if (null == k);
          else {
            if (null == l.fullscreen)
              return (
                o.getCurWnd(false, function (n) {
                  return (
                    (l.fullscreen = !!n && n.state.includes("fullscreen")),
                    e.runKeyWithCond(l),
                    o.ae()
                  );
                }),
                0
              );
            if (!!k !== l.fullscreen) return 1;
          }
          if (
            b &&
            "*" !== b &&
            ((p = "string" == typeof b ? [] : b),
            "string" == typeof b &&
              (n.element = b.split(",").some(function (n) {
                var e = (n = "*" === n[0] ? n.slice(1) : n).indexOf("#"),
                  t = n.indexOf("."),
                  o = n.length;
                return (
                  n &&
                    p.push({
                      tag: n.slice(
                        0,
                        e < 0 ? (t < 0 ? o : t) : t < 0 ? e : Math.min(t, e)
                      ),
                      id: e >= 0 ? n.slice(e + 1, t > e ? t : o) : "",
                      classList: r.g(
                        t >= 0 ? n.slice(t + 1, e > t ? e : o) : ""
                      ),
                    }),
                  "*" === n || n.includes(" ")
                );
              })
                ? ((p.length = 0), "*")
                : p),
            (v = l.element),
            p.length)
          ) {
            if (null == v)
              return (
                t.cPort &&
                  u.safePost(t.cPort, { N: 14, n: performance.now(), c: l }),
                t.cPort ? 0 : 1
              );
            if (
              !p.some(function (n) {
                return 0 === v
                  ? "body" === n.tag && !n.id && !n.classList
                  : (!n.tag || v[0] === n.tag) &&
                      (!n.id || v[1] === n.id) &&
                      (!n.classList.length ||
                        (v[2].length > 0 &&
                          n.classList.every(function (n) {
                            return v[2].includes(n);
                          })));
              })
            )
              return 1;
          }
          return 2;
        }),
        (d = function (n) {
          var e,
            t,
            r,
            o = n.expect;
          return n.$normalized
            ? o
            : ((e = function (n) {
                return n
                  ? "string" == typeof n
                    ? n.trim().split(/[, ]+/)
                    : n instanceof Array
                    ? n
                    : []
                  : [];
              }),
              (t = []),
              o &&
                (o instanceof Array
                  ? (t = o.map(function (n) {
                      return n instanceof Array
                        ? { env: n[0], keys: e(n[1]), options: n[2] }
                        : n && "object" == typeof n
                        ? {
                            env: n.env || n,
                            keys: e(n.keys),
                            options: n.options,
                          }
                        : null;
                    }))
                  : "object" == typeof o
                  ? (t = Object.keys(o).map(function (n) {
                      var t = o[n],
                        r = t && "object" == typeof t && !(t instanceof Array);
                      return {
                        env: n,
                        keys: e(r ? t.keys : t),
                        options: r ? t.options : null,
                      };
                    }))
                  : "string" == typeof o &&
                    /^[^{].*?[:=]/.test(o) &&
                    ((r = o.includes(":") ? /:/ : /=/),
                    (t = o
                      .split(o.includes(";") ? /[;\s]+/g : /[,\s]+/g)
                      .map(function (n) {
                        return n.split(r);
                      })
                      .map(function (n) {
                        return 2 !== n.length
                          ? null
                          : { env: n[0], keys: e(n[1]), options: null };
                      })))),
              (t = t.map(function (n) {
                return n && n.env && "__proto__" !== n.env && n.keys.length
                  ? n
                  : null;
              })),
              a.overrideOption("expect", t, n),
              a.overrideOption("keys", e(n.keys), n),
              a.overrideOption("$normalized", 1, n),
              t);
        }),
        (k = function (n) {
          var t = n.startsWith("#") ? n.split("+", 1)[0] : "";
          return {
            tree: e.parseKeySeq(n.slice(t ? t.length + 1 : 0)),
            options: t.length > 1 ? e.parseEmbeddedOptions(t.slice(1)) : null,
          };
        }),
        (b = function (n) {
          var r,
            o,
            i,
            l,
            b,
            g,
            $,
            m,
            j,
            h,
            z,
            A,
            O,
            w,
            x,
            N,
            T,
            M,
            S,
            q = s(t.cRepeat),
            I = t.Pn.get(t.cPort ? t.cPort.s.ur : t.jn);
          for (i of (t.cPort || t.set_cPort(I ? I.cr : null),
          (n = n || t.get_cEnv() || {}),
          t.set_cEnv(null),
          (o = d(t.get_cOptions()))))
            if (i) {
              if ("string" == typeof (b = l = i.env)) {
                if (!f.sa)
                  return void u.showHUD("No environments have been declared");
                if (void 0 === (b = f.sa.get(b)))
                  return void u.showHUD(
                    'No environment named "'.concat(l, '"')
                  );
                if (
                  ("string" == typeof b && ((b = f.oa(b, 2)), f.sa.set(l, b)),
                  null === b)
                )
                  continue;
              }
              if (0 === (g = y(b, n))) return;
              if (2 === g) {
                r = i;
                break;
              }
            }
          if (
            (($ = r ? r.keys : t.get_cOptions().keys),
            (h = r
              ? "string" == typeof r.env
                ? "[".concat(r.env, "]: ")
                : "(".concat(o.indexOf(r), ")")
              : ""),
            0 === $.length)
          )
            u.showHUD(h + "Require keys: comma-seperated-string | string[]");
          else if (q > $.length && 1 !== $.length)
            u.showHUD(h + "Has no such a key");
          else if (
            (m =
              $[
                (j = 1 === $.length ? 0 : t.cRepeat > 0 ? q - 1 : $.length - q)
              ]) &&
            ("string" == typeof m ||
              ("object" == typeof m &&
                m.tree &&
                "object" == typeof m.tree &&
                "number" == typeof m.tree.t))
          ) {
            if (((z = 1 === $.length ? t.cRepeat : 1), "string" == typeof m)) {
              if (null != (A = t.get_cOptions().mask)) {
                if (!(O = a.fillOptionWithMask(m, A, "", c, z)).ok)
                  return void u.showHUD(
                    (O.result ? "Too many potential keys" : "No key") +
                      " to fill masks"
                  );
                (A = O.ok > 0), (m = O.result), (z = O.useCount ? 1 : z);
              }
              (m = k(m)), A || ($[j] = m);
            }
            if (((x = m.options), 3 === (w = m.tree).t || 0 === w.val.length))
              return void (3 === w.t && u.showHUD(w.val));
            (N =
              (r && r.options) ||
              t.get_cOptions().options ||
              (t.get_cOptions().$masked ? null : v(t.get_cOptions()))),
              (N = a.concatOptions(N, x)),
              (T = p = (p + 1) % 64 || 1),
              (M = "<v-runkey:$1>".replace("$1", "" + T)),
              w.val.length > 1 || 0 !== w.val[0].t
                ? ((S = {
                    $seq: {
                      keys: w,
                      repeat: z,
                      options: N,
                      cursor: w,
                      timeout: 0,
                      id: M,
                      fallback: a.parseFallbackOptions(t.get_cOptions()),
                    },
                    $then: M,
                    $else: "-" + M,
                    $retry: -999,
                  }),
                  a.replaceCmdOptions(S),
                  t._n.set(M, f.na("runKey", S)),
                  e.runKeyInSeq(S.$seq, 1, null, n))
                : _(
                    w.val[0],
                    {
                      keys: w,
                      repeat: z,
                      options: N,
                      cursor: w,
                      timeout: 0,
                      id: M,
                      fallback: null,
                    },
                    n
                  );
          } else u.showHUD(h + "The key is invalid");
        }),
        (e.runKeyWithCond = b),
        (e.parseKeySeq = function (n) {
          var e,
            t,
            o,
            u,
            i,
            l,
            f =
              /^([$%][a-z]\+?)*([\d-]\d*\+?)?([$%][a-z]\+?)*(<([a-z]-){0,4}.\w*(:i)?>|[^#()?:+$%])+(#[^()?:+]*)?/,
            a = {
              t: 1,
              val: [],
              par: null,
            },
            s = a;
          for (t = n.length > 1 ? 0 : n.length; t < n.length; t++)
            switch (n[t]) {
              case "(":
                (e = a).val.push((a = { t: 1, val: [], par: a }));
                break;
              case ")":
                e = a;
                do {
                  e = e.par;
                } while (2 === e.t);
                a = e;
                break;
              case "?":
              case ":":
                for (e = "?" === n[t] ? null : a; e && 2 !== e.t; ) e = e.par;
                (e && !e.val.f) ||
                  ((a.par = {
                    t: 2,
                    val: { cond: a, t: null, f: null },
                    par: (e = a.par) || (s = { t: 1, val: [], par: null }),
                  }),
                  e
                    ? 1 === e.t
                      ? e.val.splice(e.val.indexOf(a), 1, a.par)
                      : e.val.t === a
                      ? (e.val.t = a.par)
                      : (e.val.f = a.par)
                    : s.val.push(a.par),
                  (e = a.par)),
                  (a = { t: 1, val: [], par: e }),
                  "?" === n[t] ? (e.val.t = a) : (e.val.f = a);
                break;
              case "+":
                break;
              default:
                for (; t < n.length && !"()?:+".includes(n[t]); ) {
                  if (!(o = f.exec(n.slice(t))))
                    return {
                      t: 3,
                      val:
                        "Invalid item to run: " +
                        ((u = n.slice(t)).length > 12
                          ? u.slice(0, 11) + "\u2026"
                          : u),
                      par: null,
                    };
                  (l = (i = o[0]).indexOf("#")) > 0 &&
                    /[#&]#/.test(i.slice(l)) &&
                    (i = n.slice(t)),
                    a.val.push({ t: 0, val: i, par: a }),
                    (t += i.length);
                }
                t--;
            }
          return (
            1 === n.length && s.val.push({ t: 0, val: n, par: s }), r.Dt(), s
          );
        }),
        (g = function (n, e) {
          var t,
            r,
            o = true,
            u = n;
          for (
            0 === u.t &&
            (u =
              (r = (t = u.par).val.indexOf(u)) < t.val.length - 1 && e > 0
                ? t.val[r + 1]
                : ((o = false), t));
            u && 0 !== u.t;

          )
            if (o && 1 === u.t && u.val.length > 0) u = u.val[0];
            else if (o && 2 === u.t) u = u.val.cond;
            else {
              if (!u.par) {
                u = null;
                break;
              }
              1 === u.par.t
                ? ((o = (r = (t = u.par).val.indexOf(u)) < t.val.length - 1) &&
                    e < 0 &&
                    (e = 1),
                  (u = o ? t.val[r + 1] : t))
                : (u =
                    ((o = u === (t = u.par).val.cond) &&
                      (e > 0 ? t.val.t : ((e = 1), t.val.f))) ||
                    ((o = false), t));
            }
          return u;
        }),
        (e.runKeyInSeq = function (n, e, r, o) {
          var i,
            f,
            s = g(n.cursor, e),
            c = s && g(s, 1),
            v = s && g(s, -1),
            y = !(s && (c || v)),
            d = n.fallback,
            k = t.get_cOptions(),
            b = n.id;
          if (
            (y &&
              (t._n.delete(b),
              clearTimeout(n.timeout || 0),
              "<v-runkey:$1>".replace("$1", "" + p) === b &&
                (p = Math.max(--p, 0)),
              s &&
                (delete k.$then,
                delete k.$else,
                d &&
                  (n.options = n.options ? Object.assign(d, n.options) : d))),
            s)
          )
            (i =
              (c &&
              k.$then &&
              ("string" == typeof c.val ? c.val : c.val.prefix).includes("$l")
                ? 1
                : 0) +
              (v &&
              k.$else &&
              ("string" == typeof v.val ? v.val : v.val.prefix).includes("$l")
                ? 2
                : 0)) &&
              (n.cursor === n.keys &&
                (a.overrideCmdOptions({}), (k = t.get_cOptions())),
              1 & i && (k.$then = "$l+" + k.$then),
              2 & i && (k.$else = "$l+" + k.$else)),
              (f = y
                ? 0
                : (n.timeout = setTimeout(function () {
                    var n = t._n.get(b),
                      e = n && n.ua;
                    e && e.$seq && e.$seq.timeout === f && t._n.delete(b);
                  }, 3e4))),
              _(s, n, o);
          else {
            if (
              d &&
              (d.$f ? (d.$f.t = (r && r.t) || d.$f.t) : (d.$f = r),
              a.runNextCmdBy(e > 0 ? 1 : 0, d, 1))
            )
              return;
            e < 0 && r && r.t && u.showHUD(l.jr("".concat(r.t)));
          }
        }),
        ($ = function (n) {
          var t,
            r,
            o,
            u,
            i,
            l,
            f,
            a,
            s = n.val;
          return "string" != typeof s
            ? s
            : ((r =
                !!(t = /^([$%][a-zA-Z]\+?|-)+/.exec(s)) && t[0].includes("-")),
              (o = !t || "+-".includes(t[0].slice(-1))),
              (u = t ? t[0].replace(/[+-]/g, "").replace(/%/g, "$") : ""),
              (s = t ? s.slice(t[0].length) : s),
              (i =
                (r ? -1 : 1) *
                (((t = /^\d+/.exec(s)) && parseInt(t[0], 10)) || 1)),
              (s = t ? s.slice(t[0].length) : s),
              (f =
                (l = (s =
                  o || t || !s.startsWith("+") ? s : s.slice(1)).indexOf(
                  "#",
                  1
                )) > 0
                  ? s.slice(0, l)
                  : s),
              (a = null),
              l > 0 &&
                l + 1 < s.length &&
                ((s = s.slice(l + 1)), (a = e.parseEmbeddedOptions(s))),
              (n.val = {
                prefix: u,
                count: i,
                key: "__proto__" !== f ? f : "<v-__proto__>",
                options: a,
              }));
        }),
        (e.parseEmbeddedOptions = function (n) {
          var e,
            t,
            o = /(^|&)#/.exec(n),
            u = o ? n.slice(o.index + o[0].length) : "",
            i = function (n) {
              return "\\u" + (n.charCodeAt(0) + 65536).toString(16).slice(1);
            },
            l = function (n) {
              return /\s/.test(n) ? JSON.stringify(n).replace(/\s/g, i) : n;
            };
          return (
            (n = (o ? n.slice(0, o.index) : n)
              .split("&")
              .map(function (n) {
                var e = n.split("=", 1)[0],
                  t = n.slice(e.length);
                return e + (t ? "=" + l(r.zt(t.slice(1))) : "");
              })
              .join(" ")),
            u &&
              (n =
                (n ? n + " " : "") +
                (e = u.split("=", 1)[0]) +
                ((t = u.slice(e.length)) ? "=" + l(t.slice(1)) : "")),
            f.oa(n, 2)
          );
        }),
        (_ = function (n, e, t) {
          var r = $(n),
            o = e.cursor === e.keys,
            u = o || r.prefix.includes("$c"),
            i = a.concatOptions(e.options, r.options);
          (e.cursor = n), j(r.key, r.count * (u ? e.repeat : 1), i, t, null, o);
        }),
        t.D(function (n, e, r) {
          var o, u, i, l, f;
          for (
            n = n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/, ""),
              u = 1,
              null != (o = /^\d+|^-\d*/.exec(n)) &&
                ((n = n.slice((i = o[0]).length)),
                (u = "-" !== i ? parseInt(i, 10) || 1 : -1)),
              n = n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/, ""),
              l = 1;
            (l = n.indexOf("#", l) + 1) &&
            ((f = n.slice(0, l - 1)),
            !t._n.has(f) && !/^[a-z]+(\.[a-z]+)?$/i.test(f));

          );
          t.set_cPort(e),
            t.set_cKey(0),
            t.set_cOptions(null),
            j(l ? n.slice(0, l - 1) : n, u, l ? n.slice(l) : null, null, r);
        }),
        (m = function (n) {
          for (var e = t.get_cOptions(); e && e !== n; ) e = e.$o;
          return e === n;
        }),
        (j = function (n, o, i, l, s, c) {
          var p,
            v,
            y,
            d,
            k,
            b = n,
            g =
              ("__proto__" !== n && t._n.get(n)) ||
              (!n.includes("<") && t._n.get((b = "<v-".concat(n, ">")))) ||
              null,
            $ = true;
          null == g && n in f.ea && (($ = false), (g = f.na(n, null))),
            null != g
              ? 36 === g.pa &&
                g.va &&
                g.ua &&
                "object" == typeof g.ua &&
                m(g.ua)
                ? u.showHUD('"runKey" should not call itself')
                : ("string" == typeof i &&
                    (i = i ? e.parseEmbeddedOptions(i) : null),
                  (v = (p = t.get_cOptions()) && a.parseFallbackOptions(p)),
                  (y = p && p.$f),
                  ((i && "object" == typeof i) || v || y) &&
                    ((d = f.ta(g)),
                    (g = $ ? Object.assign({}, g) : g),
                    (k = r.It()),
                    i && a.copyCmdOptions(k, r.Pt(i)),
                    v && a.copyCmdOptions(k, r.Pt(v)),
                    d && a.copyCmdOptions(k, d),
                    (k.$f = y),
                    i && "$count" in i
                      ? (k.$count = i.$count)
                      : d &&
                        "$count" in d &&
                        ((i && "count" in i) || (k.$count = d.$count)),
                    (g.ua = k),
                    2 !== g.pa || g.va || (g.ma = 0),
                    f.aa(g)),
                  r.Dt(),
                  c && 36 === g.pa && g.va
                    ? setTimeout(function () {
                        t.set_cEnv(l),
                          a.executeCommand(g, o, t.cKey, t.cPort, 0, s);
                      }, 0)
                    : (t.set_cEnv(l),
                      a.executeCommand(g, o, t.cKey, t.cPort, 0, s)))
              : u.showHUD(
                  '"'.concat(/^\w+$/.test(n) ? b : n, '" has not been mapped')
                );
        }),
        (e.pr = function (n) {
          var e,
            o,
            u,
            i,
            l,
            s,
            p,
            y,
            b,
            _,
            m,
            j,
            h = f.ta(n);
          if ((h || (h = n.ua = r.It()), 2 === h.$normalized)) return n.da;
          for (
            o = true, d((e = h)), e.$normalized = 2;
            e && 0 === d(e).length && e.keys.length >= 1;

          ) {
            if (
              ((o = o && 1 === e.keys.length),
              "string" == typeof (i = (u = e.keys)[0]))
            ) {
              if (null != (l = e.mask)) {
                if (
                  (e !== h && (e = h = a.concatOptions(e, h)),
                  !(s = a.fillOptionWithMask(i, l, "", c, 1, h)).ok)
                )
                  return;
                (l = s.ok > 0),
                  (i = s.result),
                  (o = o && !!s.value && !s.useCount && !s.useDict);
              }
              (i = k(i)), l || (u[0] = i);
            }
            if (!(p = 1 === i.tree.t ? g(i.tree, 1) : null)) return;
            if (
              ((o = o && 1 === i.tree.val.length && i.tree.val[0] === p),
              (y = $(p)),
              !(m = (_ =
                t._n.get((b = y.key)) ||
                (!b.includes("<") && t._n.get("<v-".concat(b, ">"))) ||
                null)
                ? _.da
                : b in f.ea
                ? b
                : null))
            )
              return;
            if (
              (((j = null != _ && 36 === _.pa && _.va) || o) &&
                (e !== h && (e = h = a.concatOptions(e, h)),
                (h = h.options || (h.$masked ? null : v(h))),
                (h = a.concatOptions(
                  a.concatOptions(h, i.options),
                  y.options
                ))),
              !j)
            )
              return o ? Object.assign(n, f.na(m, h)) : (n.da = m), m;
            e =
              !h ||
              (void 0 === h.keys && void 0 === h.expect && void 0 === h.mask)
                ? f.ta(_)
                : (h = a.concatOptions(f.ta(_), h));
          }
        });
    }
  );
