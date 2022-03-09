"use strict";
(function () {
  var e =
      ("object" == typeof VApi && !!(VApi && VApi.z) && VApi.z.v > 50) ||
      ("undefined" != typeof Reflect &&
        !!Reflect &&
        !!Reflect.apply &&
        !!Reflect.construct),
    n = "undefined" != typeof globalThis ? globalThis : window,
    r = n.Function,
    t = null,
    u = n,
    a = [],
    l = 0,
    o = null,
    f = (function () {
      for (
        var e,
          n = [
            "{",
            "}",
            ";",
            "if else try catch finally do while for",
            "return break continue throw var let const",
            "(",
            "",
            "[",
            ") ]",
            ",",
            "?",
            ":",
            "=>",
            "of = += -= *= /= %= <<= >>= >>>= &= &&= ^= |= ||= **= ??=",
            "|| ??",
            "&&",
            "|",
            "^",
            "&",
            "== != === !==",
            "< <= > >= in instanceof",
            "<< >> >>>",
            "",
            "* / %",
            "**",
            "! ~ typeof void delete",
            "",
            "new",
            ". ?.",
          ],
          r = Object.create(null),
          t = 0,
          u = 1;
        t < n.length;
        t++, u <<= 1
      )
        for (e of n[t] ? n[t].split(" ") : []) r[e] = u;
      return r;
    })(),
    c = { __proto__: null, true: true, false: false, null: null },
    i = { __proto__: null, switch: 1, yield: 1, await: 1, async: 1 },
    s = { c: 42, v: void 0 },
    v = { c: 0, v: 0 },
    b = function (e) {
      return null == e;
    },
    d =
      Object.entries ||
      function (e) {
        var n,
          r = [];
        for (n of Object.keys(e)) r.push([n, e[n]]);
        return r;
      },
    y = function (e) {
      throw new SyntaxError(e);
    },
    p = function (e, n, r, t) {
      return { value: e, writable: n, enumerable: r, configurable: t };
    },
    _ = {
      get globalThis() {
        return "globalThis" in u ? u.globalThis : u;
      },
      set globalThis(e) {
        Object.defineProperty(u, "globalThis", p(e, true, false, true));
      },
      get __proto__() {
        return k("__proto__") in u ? u[k("__proto__")] : u.__proto__;
      },
      set __proto__(e) {
        Object.defineProperty(u, "__proto__", p(e, true, true, false));
      },
      get eval() {
        return te;
      },
      set eval(e) {},
    },
    k = function (e) {
      return "__proto__" !== e ? e : e + ".";
    },
    h = function (e, n) {
      return { t: e, v: n };
    },
    g = function (e) {
      for (
        var r,
          t,
          u,
          a = function (e, n, r) {
            return n.length < 2
              ? "\n" === n
                ? ""
                : "\\\\"
              : "x" === n[1]
              ? "\\u00" + n.slice(1)
              : ((r = parseInt(n.slice(2, -1), 16)),
                n.length < 6
                  ? "\\u" + (r + 65536).toString(16)
                  : String.fromCodePoint(r));
          },
          l = function (e, n) {
            return String.fromCharCode(
              parseInt("{" === n[0] ? n.slice(1, -1) : n, 16)
            );
          },
          o = function (n) {
            return e.substr(b, n.length) === n;
          },
          s = function (n) {
            var r = n.exec(e.slice(b));
            return !!r && ((b += (d = r[0]).length), true);
          },
          v = [],
          b = 0,
          d = "",
          p = 4,
          _ = true;
        b < e.length;

      )
        s(/^\s+/)
          ? 1677721874 & p && d.includes("\n") && v.push(h(4, "\n"))
          : s(/^\/\/[^\n]*|^\/\*[^]*?\*\//) ||
            (_ &&
            s(
              /^\/(?:[^\\\/[\n]|\[(?:[^\\\]\n]|\\[^\n])*\]|\\[^\n])*\/[a-z]{0,16}(?![\w$])/
            )
              ? ((t = d.lastIndexOf("/")),
                v.push(
                  h(1073741824, {
                    v: new RegExp(d.slice(1, t), d.slice(t + 1)),
                  })
                ))
              : o("...")
              ? (v.push(h(536870912, "..."), h(512, ",")), (b += 3))
              : s(
                  /^(=>|[!=]=?=?|[+\-*\/%^]=|&&?=?|\|\|?=?|>>?>?=?|<<?=?|\*\*=?|\?\?=?|\?\.|[,?:*\/%^~.\{\}\[\]()])/
                )
              ? v.push(h(f[d], d))
              : s(/^\+\+?|^--?/)
              ? v.push(
                  h(
                    2 === d.length
                      ? 536871168 & p && "\n" !== v[v.length - 1].v
                        ? 67108864
                        : 33554432
                      : 1677721858 & p
                      ? 4194304
                      : 33554432,
                    d
                  )
                )
              : s(/^;\s*/)
              ? v.push(h(4, ";"))
              : s(/^[1-9][\d_]*n|^0n/)
              ? v.push(h(1073741824, { v: n.BigInt(d.slice(0, -1)) }))
              : s(/^0[boBO]\d[\d_]*|^0[xX][\dA-Fa-f][\dA-F_a-f]*/)
              ? ((d = d.toLowerCase()),
                v.push(
                  h(1073741824, {
                    v: parseInt(
                      d.slice(2).replace(/_/g, ""),
                      "x" === d[1] ? 16 : "o" === d[1] ? 8 : 2
                    ),
                  })
                ))
              : s(
                  /^(?:(?:0|[1-9][\d_]*)(?:\.\d[\d_]*|\.|)|\.\d[\d_]*)(?:[eE][+-]?\d[\d_]*)?/
                )
              ? v.push(h(1073741824, { v: parseFloat(d.replace(/_/g, "")) }))
              : s(o("'") ? /^'([^'\\\n]|\\[^])*'/ : /^"([^"\\\n]|\\[^])*"/)
              ? ((d = '"' === d[0] ? d : '"'.concat(d.slice(1, -1), '"')),
                v.push(
                  h(1073741824, {
                    v: JSON.parse(d.replace(/\\(x..|u\{.*?\}|[\\\n])/g, a)),
                  })
                ))
              : s(
                  /^(?:[$A-Z_a-z\x80-\uffff]|\\u(?:\{.*?\}|.{4}))(?:[\w$\x80-\uffff]|\\u(?:\{.*?\}|.{4}))*/
                )
              ? ((r = /\s/.exec(d)) &&
                  ((b -= d.length - r.index), (d = d.slice(0, r.index))),
                d.includes("\\") && (d = d.replace(/\\u(\{.*?\}|.{4})/g, l)),
                268435456 === p || d in c
                  ? v.push(h(1073741824, { v: 268435456 === p ? d : c[d] }))
                  : d in i
                  ? y("Unsupported identifier: " + d)
                  : 8 === p && "if" === d && "else" === v[v.length - 1].v
                  ? (v[v.length - 1].v = "else if")
                  : v.push(
                      "function" === d ? h(4096, "fn") : h(f[d] || 536870912, d)
                    ))
              : y(
                  "Unexpected identifier in :"
                    .concat(b, " {{ ")
                    .concat(e.slice(Math.max(0, b - 6), b).trimLeft(), "\u2503")
                    .concat(e.substr(b, 6).trimRight(), " }}")
                ),
            (_ = !(
              (p = (u = v[v.length - 1]).t) >= 268435456 ||
              (p >= 512 ? "++" === u.v || "--" === u.v : "])".includes(u.v))
            )));
      return v;
    },
    w = function (e, n) {
      return { o: e, v: n };
    },
    x = function (e, n, r) {
      return { a: e, c: n, v: r, l: null };
    },
    j = function (e, n) {
      var r,
        t,
        u,
        a,
        l,
        o,
        f = [],
        c = [],
        i = [];
      for (r of n.x)
        if (
          ((a = "let" === (t = r.a)), (u = "var" === t) || a || "const" === t)
        )
          for (l of r.v.v) (u ? e : a ? f : c).push(R(l));
        else if ("" === t && 5 === r.v.o && "fn" === r.v.v.t && r.v.v.n)
          f.push(k(r.v.v.n)), i.push(r);
        else if (
          (0 === r.v.o
            ? j(e, r.v.v)
            : 1 === r.v.o && j(e, { c: null, l: null, x: r.v.v }),
          "for" === t)
        )
          for (l of 2 === (o = 3 === r.c.o ? r.c.v[0] : r.c).o &&
          "var" === o.v.a
            ? o.v.v.v
            : [])
            e.push(R(l));
      (n.l = f.length > 0 ? f : null), (n.c = c.length > 0 ? c : null);
    },
    O = function (e, n) {
      var r,
        t,
        u,
        a,
        l,
        o,
        f,
        c,
        i,
        v,
        b,
        d = [h(1, "{")],
        p = [w(0, { c: null, l: null, x: null })],
        _ = function (e) {
          for (; !(d[d.length - 1].t & e); ) g();
        },
        k = function (e, n) {
          var r,
            t,
            u,
            a,
            l,
            o = ",else,else if,catch,finally,while,".indexOf("," + e + ",");
          if (o < 0) return false;
          for (
            r = o < 13 ? "if" : o < 27 ? "try" : "do",
              t = o < 13 ? "else" : "catch" === e ? "catch,finally" : e,
              u = false,
              a = p[p.length - n],
              l = null;
            a && a.o <= 2 && a.o >= 1;

          )
            2 === a.o
              ? (a.v.a === r && (u = l), (l = a), (a = a.v.v))
              : 1 === a.o &&
                (a.v[0].a !== r || t.includes(a.v[a.v.length - 1].a) || (u = a),
                (a = (l = w(2, a.v[a.v.length - 1])).v.v));
          return u;
        },
        g = function () {
          var e,
            n,
            r,
            t,
            u,
            a,
            l,
            o,
            f,
            c,
            i,
            s,
            v,
            b,
            _,
            h,
            g,
            j = p.pop(),
            O = d.pop();
          switch (O.t) {
            case 1:
              for (p.push(j), e = p.length; 0 !== p[--e].o || p[e].v.x; );
              p[e].v.x = p.splice(e + 1, p.length - (e + 1)).map(function (e) {
                return 2 === e.o ? e.v : x("", null, e);
              });
              break;
            case 8:
              (n = 0 !== p[p.length - 1].o ? p.pop() : null) &&
                "catch" === O.v &&
                13 !== n.o &&
                y("Unsupported destructuring"),
                p.length--,
                (t =
                  false !== (r = !!(-41 & d[d.length - 1].t) && k(O.v, 1)) &&
                  "while" === O.v
                    ? x(O.v, j, w(3, []))
                    : x(O.v, n, j)),
                r
                  ? 2 !== r.o
                    ? r.v.push(t)
                    : (r.v.v = w(1, [r.v.v.v, t]))
                  : ("labelled" !== t.a ||
                      (2 !== j.o
                        ? ((t.l = [n.v]), (t.c = null))
                        : ((t = j.v).l || (t.l = [])).push(n.v)),
                    p.push(w(2, t)));
              break;
            case 16:
              p.push(
                w(
                  2,
                  x(
                    O.v,
                    null,
                    3 !== j.o && "var,let,const".includes(O.v) ? w(3, [j]) : j
                  )
                )
              );
              break;
            case 32:
            case 128:
            case 64:
              134217728 !== (u = d[d.length - 1]).t ||
              (32 !== O.t && "new" === u.v)
                ? 32 !== O.t
                  ? ((a = 3 === j.o ? j.v : [j]),
                    64 === O.t
                      ? (p[p.length - 1].v.v = a)
                      : p.push(w(12, { b: O.v, v: a })))
                  : 8 === u.t && "for" === u.v && 2 === p[p.length - 1].o
                  ? ((l = p.pop()),
                    (p[p.length - 1] = w(3, [p[p.length - 1], l.v.v, j])))
                  : p.push(j)
                : (d.length--,
                  p.push(
                    32 === O.t
                      ? w(10, {
                          n:
                            "new" === u.v ||
                            (134217728 === d[d.length - 1].t &&
                              (d.length--, true)),
                          o: "?." === u.v,
                          f: p.pop(),
                          a: 3 === j.o ? j.v : [j],
                        })
                      : w(11, {
                          y: p.pop(),
                          i: j,
                          d: "?." === u.v ? "?.[" : "[",
                        })
                  ));
              break;
            case 512:
              3 === (o = p[p.length - 1]).o
                ? o.v.push(j)
                : p.push(w(3, [p.pop(), j]));
              break;
            case 1024:
              break;
            case 2048:
              576 & d[d.length - 1].t
                ? ((f = p.pop()),
                  (c =
                    13 !== (g = p[p.length - 1]).o ||
                    (64 !== d[d.length - 1].t && 12 === p[p.length - 2].o)
                      ? ""
                      : (p.length--, g.v)),
                  5 === j.o &&
                    (j.v.n =
                      (c ? c + " " : "") +
                      (13 === f.o
                        ? f.v
                        : "[".concat(
                            K(
                              w(f.v.v.length > 1 ? 3 : 2, []),
                              15112,
                              w(3, f.v.v)
                            ),
                            "]"
                          ))),
                  p.push(w(4, { k: 13 === f.o ? f : w(3, f.v.v), v: j, p: c })))
                : (d.length--,
                  (i = p.pop()),
                  p.push(w(7, { c: p.pop(), l: i, r: j })));
              break;
            case 4096:
              (v = (3 === (s = p.pop()).o ? s.v : [s]).map(function (e) {
                return 13 === e.o || (6 === e.o && 13 === e.v.y.o)
                  ? e
                  : y("Unsupported destructuring parameters");
              })),
                (b = O.v.startsWith("fn ") ? "fn" : O.v),
                (_ = w(5, {
                  a: v,
                  t: b,
                  n: O.v.startsWith("fn ") ? O.v.slice(3) : "",
                  v: null,
                  b: j,
                })),
                p.push(_);
              break;
            case 8192:
              12 === (h = p.pop()).o &&
                y("Unsupported destructuring assignment"),
                p.push(w(6, { a: O.v, y: h, x: j }));
              break;
            case 33554432:
            case 67108864:
              p.push(w(9, { o: O, x: j }));
              break;
            case 134217728:
              p.push(
                10 === j.o
                  ? ((j.v.n = true), j)
                  : w(10, { n: true, o: false, f: j, a: [] })
              );
              break;
            case 268435456:
              p.push(w(11, { y: p.pop(), i: j, d: O.v }));
              break;
            default:
              p.push(w(8, { o: O.v, l: p.pop(), r: j }));
          }
        };
      for (
        r = 0, t = 1, u = void 0, a = void 0, l = false;
        r < e.length;
        t = a, r++
      )
        switch (
          ((a = (u = e[r]).t),
          l &&
            1073745944 & a &&
            ((u.v = 1073741824 === u.t ? u.v.v + "" : u.v),
            (a = u.t = 536870912)),
          a)
        ) {
          case 1:
          case 64:
            p.push(
              (l = !(1610617103 & t))
                ? w(12, { b: "{", v: null })
                : w(0, { c: null, l: null, x: null })
            ),
              (a = u.t = l ? 64 : 1),
              d.push(h(a, "{"));
            break;
          case 2:
          case 256:
            t & (224 | (256 === a ? 4 : 0))
              ? p.push(w(3, []))
              : 512 === t && d.length--,
              _(")" === u.v ? 32 : "]" === u.v ? 128 : 65),
              2 === a && 64 === d[d.length - 1].t && (a = u.t = 256),
              g(),
              (l = 64 === d[d.length - (512 === d[d.length - 1].t ? 2 : 1)].t),
              2 === a && 0 === p[p.length - 1].o && _(-4121);
            break;
          case 4:
            (f =
              !(o = ";" === u.v) &&
              r + 1 < e.length &&
              (16 === t ||
                !!(1644171289 & e[r + 1].t) ||
                (5 === p[p.length - 1].o &&
                  ("=>" === p[p.length - 1].v.t
                    ? 512 !== e[r + 1].t
                    : !!(9 & d[d.length - 1].t)) &&
                  (4194304 === e[r + 1].t && (e[r + 1].t = 33554432), true)))),
              o ? _(33) : f && _(1535),
              (c = f ? d[d.length - 1] : null),
              o ||
              (c &&
                (1 === c.t ||
                  (16 === c.t
                    ? 16 !== t || !"var,let,const".includes(c.v)
                    : 8 === c.t &&
                      ("do,else".includes(c.v) ||
                        0 !== p[p.length - 2].o ||
                        ("while" === c.v && false !== k(c.v, 3))))))
                ? (o || _(33),
                  13 === (i = p[p.length - 1]).o &&
                    "debugger" === i.v &&
                    (i.v = { v: i.v }),
                  (1 << i.o) & (32 === d[d.length - 1].t ? 4 : 7) ||
                    p.push(
                      w(
                        2,
                        x(
                          "",
                          null,
                          37 & t || (2 === t && (5 !== i.o || "fn" !== i.v.t))
                            ? w(3, [])
                            : p.pop()
                        )
                      )
                    ))
                : (a = t);
            break;
          case 8:
            _(41), p.push(w(0, { c: null, l: null, x: null })), d.push(u);
            break;
          case 16:
            (r > e.length - 2 || 6 & e[r + 1].t) &&
              "return,break,continue".includes(u.v) &&
              p.push(w(3, [])),
              _(41),
              d.push(u);
            break;
          case 32:
          case 128:
            l
              ? (32 === a && d.push(h(2048, ":"), h(4096, "(){")), (l = false))
              : (268439552 & d[d.length - 1].t && 4096 !== t && g(),
                (1610612992 & t ||
                  (2 === t && (1 << p[p.length - 1].o) & 4128)) &&
                  d.push(h(134217728, "__call__"))),
              d.push(u);
            break;
          case 512:
            for (
              640 & t
                ? p.push(w(13, { v: s }))
                : 256 === t &&
                  3 === p[p.length - 1].o &&
                  160 & d[d.length - 1].t &&
                  (p[p.length - 1] = w(3, [p[p.length - 1]]));
              d[d.length - 1].t >= 512;

            )
              g();
            64 === d[d.length - 1].t && (l = true), d.push(u);
            break;
          case 2048:
            536870912 === t &&
              ((1 !== (v = d[d.length - 1]).t &&
                (8 !== v.t ||
                  ("labelled" !== v.v && 0 === p[p.length - 2].o))) ||
                (p.push(w(0, { c: null, l: null, x: null }), p.pop()),
                d.push(h(8, "labelled")))),
              _(l ? 2047 : 1535),
              8 !== d[d.length - 1].t ? (d.push(u), (l = false)) : (a = 256);
            break;
          case 4096:
            "fn" === u.v && 536870912 === e[r + 1].t
              ? d.push(h(4096, "fn ".concat(e[++r].v)))
              : ("*" === e[r + 1].v && y("Unsupported generator"), d.push(u));
            break;
          case 536870912:
          case 1073741824:
            p.push(w(13, u.v));
            break;
          default:
            134217728 === u.t && "new" === u.v && 268435456 === e[r + 1].t
              ? p.push(w(13, "new.".concat(e[(r += 2)].v.v)))
              : (4194304 !== u.t || 2 !== t || (1 << p[p.length - 1].o) & 4128
                  ? 1048576 === u.t && "in" === u.v
                    ? ((16 ===
                        (b = d[d.length - (32 === d[d.length - 1].t ? 2 : 1)])
                          .t &&
                        "var,let,const".includes(b.v)) ||
                        (8 === b.t &&
                          "for" === b.v &&
                          0 === p[p.length - 2].o)) &&
                      (a = u.t = 8192)
                    : 268435456 === u.t &&
                      160 & e[r + 1].t &&
                      (a = u.t = 134217728)
                  : (a = u.t = 33554432),
                _((15360 & a ? 4096 : 301974016 & a ? a : a << 1) - 1),
                d.push(u));
        }
      for (; d.length > 1; ) g();
      return 2 !== p.length || 2 === p[1].o || n ? (g(), p[0]) : p[1];
    },
    m = function (e, n) {
      throw new ReferenceError(
        n
          ? "Cannot access '".concat(e, "' before initialization")
          : "".concat(e, " is not defined")
      );
    },
    A = function (e) {
      throw new TypeError(e);
    },
    S = function (e) {
      return (o = { g: u, l: a.slice(0), d: e ? l : -l });
    },
    R = function (e) {
      return k(13 === e.o ? e.v : e.v.y.v);
    },
    T = function (e, n, r, t) {
      var u,
        a,
        l = Object.create(null);
      for (u of r || []) l[u] = void 0;
      for (u of e.c || []) l[u] = s;
      for (u of e.l || []) l[u] = s;
      for (a of n || []) l[k(a[0])] = a[1];
      return { v: l, c: e.c || [], n: void 0 !== t ? t : null, d: false };
    },
    V = function (e, r) {
      var t,
        l,
        o = k(e);
      for (t = a.length; 0 < t--; )
        if (o in (l = a[t].v))
          return (
            2 & r || l[o] !== s || m(e, true),
            4 & r &&
              a[t].c.indexOf(o) >= 0 &&
              A("invalid assignment to const '".concat(e, "'")),
            { y: l, i: o }
          );
      return ("globalThis" !== o && "__proto__" !== e && "eval" !== e) ||
        u !== n
        ? "this" === o
          ? { y: [u], i: 0 }
          : "undefined" === o
          ? { y: [void 0], i: 0 }
          : 1 & r || o in u
          ? { y: u, i: o }
          : m(e, false)
        : { y: _, i: e };
    },
    E = function (e, n) {
      var r, t;
      if (13 === e.o)
        return "string" == typeof e.v ? V(e.v, n) : { y: [e.v.v], i: 0 };
      if (11 === e.o || 10 === e.o) {
        if (((r = 10 === e.o ? $(e) : X[e.v.y.o](e.v.y)), b(r))) {
          for (t = e; t; t = 11 === t.o ? t.v.y : 10 === t.o ? t.v.f : null)
            if (11 === t.o ? "?" === t.v.d[0] : 10 === t.o && t.v.o)
              return 8 === n ? { y: s, i: "v" } : { y: [void 0], i: 0 };
          10 === e.o ||
            A(
              "Cannot read properties of undefined (reading ".concat(
                Q(X[e.v.i.o](e.v.i), 1),
                ")"
              )
            );
        }
        return 10 === e.o ? { y: [r], i: 0 } : { y: r, i: X[e.v.i.o](e.v.i) };
      }
      return { y: [X[e.o](e)], i: 0 };
    },
    U = function (e, n) {
      var r,
        t,
        u = e[n],
        l = e[n + 1],
        f =
          "finally" === l.a
            ? n + 1
            : n + 2 < e.length && "finally" === e[n + 2].a
            ? n + 2
            : 0,
        c = a.length,
        i = 0,
        b = s,
        d = s;
      try {
        if ("catch" !== l.a) (b = J(u.v.v)), (i = 1);
        else
          try {
            (b = J(u.v.v)), (i = 1);
          } catch (e) {
            o || S(),
              (a.length = c),
              l.c && a.push(T(l.v.v, [[l.c.v, e]])),
              n++,
              (b = J(l.c ? { c: null, l: null, x: l.v.v.x } : l.v.v)),
              l.c && (a.pop().d = true),
              (o = null),
              (i = 1);
          }
      } finally {
        f &&
          ((r = a),
          (t = i ? null : o || S()),
          i || ((a = a.slice(0, c)), t && (t.d = -Math.abs(t.d))),
          (d = J(e[(n = f)].v.v)) !== v && b === v && (b.c = b.v = 0),
          (b = d !== s ? d : b),
          i || ((a = r), t && (t.d = Math.abs(t.d))));
      }
      return [b, n];
    },
    z = function (e) {
      return 0 === e.o
        ? e.v
        : 1 === e.o
        ? { c: null, l: null, x: e.v }
        : { c: null, l: null, x: [e.v] };
    },
    M = function (e, n) {
      return e === v && e.c && (!e.v || (n.l && n.l.indexOf(e.v, 0) >= 0))
        ? ((e.c = e.v = 0), s)
        : e;
    },
    C = function (e) {
      var n,
        r,
        t,
        u,
        l,
        o,
        f,
        c,
        i,
        v,
        d,
        y = 3 === e.c.o ? e.c.v[0] : e.c,
        p = 2 === y.o && y.v.a ? y.v : null,
        _ = !!p && "var" !== p.a,
        k = function () {
          var e,
            n = a[a.length - 1],
            r = Object.create(null),
            t = n.v;
          for (e in ((n.d = true), t)) r[e] = t[e];
          return (a[a.length - 1] = { v: r, c: n.c, n: n.n, d: false }), r;
        },
        h = s;
      if (
        (_ &&
          ((r = "const" === p.a),
          (t = p.v.v.map(R)),
          a.push(T({ c: r ? t : null, l: r ? null : t, x: [] }))),
        3 === e.c.o)
      )
        for (
          p ? F(p, []) : 2 === y.o ? X[y.v.v.o](y.v.v) : X[y.o](y);
          X[e.c.v[1].o](e.c.v[1]) &&
          (e.v.o <= 2 ? (h = J(z(e.v))) : X[e.v.o](e.v), (h = M(h, e)) === s);
          _ && k(), X[e.c.v[2].o](e.c.v[2])
        );
      else if (
        ((l = X[(u = (p ? p.v.v[0] : e.c).v).x.o](u.x)),
        (n = E(u.y, _ ? 2 : 0)),
        "in" === u.a)
      )
        for (o in l) {
          if (
            ((n.y[n.i] = o),
            e.v.o <= 2 ? (h = J(z(e.v))) : X[e.v.o](e.v),
            (h = M(h, e)) !== s)
          )
            break;
          _ && (n.y = k());
        }
      else
        for (
          f = Symbol.iterator,
            c = void 0,
            i = void 0,
            v = 0,
            "function" != typeof (d = b(l) ? l : l[f]) &&
              A(Y(u.x, null, "") + " is not iterable"),
            c = $.call.bind(d, l)();
          (h = M(h, e)) === s && (i = c.next()) && !i.done;

        )
          (n.y[n.i] = i ? i.value : l[v]),
            e.v.o <= 2 ? (h = J(z(e.v))) : X[e.v.o](e.v),
            _ && (n.y = k()),
            v++;
      return _ && (a.pop().d = true), h;
    },
    F = function (e, n) {
      var r,
        t,
        l = a[a.length - 1],
        o = e.a,
        f = e.v.v,
        c = "arg" === o,
        i = c || "let" === o,
        s = -1;
      for (r of f) {
        if (
          (s++,
          (t = k((6 === r.o ? r.v.y : "..." !== r.v ? r : f[s + 1]).v)),
          c && 13 === r.o && "..." === r.v)
        ) {
          l.v[t] = n.slice(s);
          break;
        }
        s < n.length && void 0 !== n[s]
          ? (l.v[t] = n[s])
          : 6 !== r.o
          ? i && (l.v[t] = void 0)
          : (l.v[t] =
              5 === r.v.x.o
                ? Z(r.v.x.v, u, a, r.v.y.v, true)
                : X[r.v.x.o](r.v.x));
      }
    },
    J = function (e) {
      var n,
        r,
        t,
        l = e.x,
        o = s,
        f = 0;
      for ((!e.l && !e.c) || a.push(T(e)); f < l.length; f++)
        "" === (n = l[f]).a &&
          5 === n.v.o &&
          "fn" === n.v.v.t &&
          n.v.v.n &&
          (a[a.length - 1].v[k(n.v.v.n)] = Z(n.v.v, u, a, "", false));
      for (f = 0; f < l.length && o === s; f++) {
        switch ((n = l[f]).a) {
          case "do":
          case "while":
            for (
              t = ((r = "do" === n.a) ? l[++f] : n).c;
              (o = M(o, n)) === s && (r || X[t.o](t));
              r = false
            )
              n.v.o <= 2 ? (o = J(z(n.v))) : X[n.v.o](n.v);
          case "for":
            "for" === n.a && (o = C(n)), (o = o !== v || o.v ? o : s);
            break;
          case "try":
            (f = (o = U(l, f))[1]), (o = o[0]);
            break;
          case "break":
          case "continue":
            return (
              (v.c = "break" === n.a ? 0 : 1),
              (v.v = 13 === n.v.o ? n.v.v : 0),
              v
            );
          case "const":
          case "let":
          case "var":
            F(n, []);
            break;
          case "return":
          case "throw":
            if (((o = (o = X[n.v.o](n.v)) !== s ? o : void 0), "throw" !== n.a))
              return o;
            throw o;
          default:
            if (("if" !== n.a && "else if" !== n.a) || X[n.c.o](n.c))
              for (
                n.v.o <= 2 ? (o = J(z(n.v))) : 5 !== n.v.o && X[n.v.o](n.v);
                f + 1 < l.length && l[f + 1].a.startsWith("else");

              )
                f++;
        }
        o = o === v && o.v && n.l && n.l.indexOf(o.v) >= 0 ? ((o.v = 0), s) : o;
      }
      return (!e.l && !e.c) || (a.pop().d = true), o;
    },
    N = function (e) {
      y(
        "Can not eval Op::" +
          (0 === e.o
            ? "Block"
            : 1 === e.o
            ? "statGroup"
            : 2 === e.o
            ? "stat"
            : "Pair") +
          " directly"
      );
    },
    I = function (e) {
      var n,
        r,
        t,
        u = [];
      for (n = 0; n < e.length; n++)
        13 === (r = e[n]).o && "..." === r.v
          ? ((t = X[e[++n].o](e[++n])),
            (u = u.concat(t instanceof Array ? t : [].slice.call(t))))
          : 13 === r.o && "object" == typeof r.v && r.v.v === s
          ? (u.length += 1)
          : u.push(X[e[n].o](e[n]));
      return u;
    },
    $ = function (n) {
      var t,
        u,
        a = E(n.v.f, 8),
        l = a.y,
        o = P(a.i),
        f = l[o];
      if (!b(f) || (l !== s && !n.v.o))
        return (
          (t = n.v.n || 11 !== n.v.f.o),
          (u = I(n.v.a)),
          "function" != typeof f
            ? (b(f) || null != f) && A(Y(n.v.f, f, o) + " is not a function")
            : n.v.n &&
              f.__fn &&
              "fn" !== f.__fn.t &&
              A(Y(n.v.f, f.name, o) + "is not a constructor"),
          f === r && (f = re),
          n.v.n
            ? e
              ? Reflect.construct(f, u)
              : 0 === u.length
              ? new f()
              : 1 === u.length
              ? new f(u[0])
              : (u.unshift(void 0), new ($.bind.apply(f, u))())
            : e
            ? Reflect.apply(f, t ? void 0 : l, u)
            : $.apply.bind(f)(t ? void 0 : l, u)
        );
    },
    B = function (e) {
      var n = E(e, 0);
      return n.y[n.i];
    },
    G = function (e) {
      var n = E(e, 0);
      return n.y[n.i];
    },
    P = function (e) {
      var n, r, t;
      return "object" == typeof e && null !== e
        ? (((n = {})[e] = 1),
          (r = n),
          (t = Object.getOwnPropertyNames(r)).length
            ? t[0]
            : Object.getOwnPropertySymbols(r)[0] ||
              A("Can not parse a valid member key"))
        : "number" == typeof e || "symbol" == typeof e
        ? e
        : e + "";
    },
    X = [
      N,
      N,
      N,
      function (e) {
        var n = I(e.v);
        return n.length > 0 ? n[n.length - 1] : void 0;
      },
      N,
      function (e) {
        return Z(e.v, u, a, "", true);
      },
      function (e) {
        var n,
          r = e.v.a,
          t = e.v.y,
          l = "=" === r,
          o = E(t, l ? 3 : 0),
          f = o.y,
          c = o.i,
          i = l ? 0 : f[c];
        if ("??=" === r ? !b(i) : "||=" === r ? i : "&&=" === r && !i) return i;
        switch (
          ((n =
            5 !== e.v.x.o
              ? X[e.v.x.o](e.v.x)
              : Z(e.v.x.v, u, a, 13 === t.o ? t.v : "", true)),
          r)
        ) {
          case "+=":
            i += n;
            break;
          case "-=":
            i -= n;
            break;
          case "*=":
            i *= n;
            break;
          case "/=":
            i /= n;
            break;
          case "%=":
            i %= n;
            break;
          case "**=":
            i = Math.pow(i, n);
            break;
          case "<<=":
            i <<= n;
            break;
          case ">>=":
            i >>= n;
            break;
          case ">>>=":
            i >>>= n;
            break;
          case "&=":
            i &= n;
            break;
          case "^=":
            i ^= n;
            break;
          case "|=":
            i |= n;
            break;
          default:
            i = n;
        }
        return l && 13 === t.o && E(t, 4), (f[c] = i);
      },
      function (e) {
        return X[e.v.c.o](e.v.c) ? X[e.v.l.o](e.v.l) : X[e.v.r.o](e.v.r);
      },
      function (e) {
        var n,
          r = X[e.v.l.o](e.v.l),
          t = e.v.o;
        if ("&&" === t ? !r : "||" === t ? r : "??" === t && !b(r)) return r;
        switch (((n = X[e.v.r.o](e.v.r)), t)) {
          case "|":
            return r | n;
          case "^":
            return r ^ n;
          case "&":
            return r & n;
          case "<<":
            return r << n;
          case ">>":
            return r >> n;
          case ">>>":
            return r >>> n;
          case "==":
            return r == n;
          case "!=":
            return r != n;
          case "===":
            return r === n;
          case "!==":
            return r !== n;
          case "<":
            return r < n;
          case "<=":
            return r <= n;
          case ">":
            return r > n;
          case ">=":
            return r >= n;
          case "+":
            return r + n;
          case "-":
            return r - n;
          case "*":
            return r * n;
          case "/":
            return r / n;
          case "%":
            return r % n;
          case "**":
            return Math.pow(r, n);
          case "in":
            return r in n;
          case "instanceof":
            return r instanceof n;
          default:
            return n;
        }
      },
      function (e) {
        var n = e.v.o.v,
          r = e.v.x,
          t = E(r, "typeof" === n ? 1 : 0),
          u = t.y,
          a = t.i;
        switch (n) {
          case "+":
            return +u[a];
          case "-":
            return -u[a];
          case "!":
            return !u[a];
          case "~":
            return ~u[a];
          case "++":
            return 67108864 === e.v.o.t ? u[a]++ : ++u[a];
          case "--":
            return 67108864 === e.v.o.t ? u[a]-- : --u[a];
          case "typeof":
            return typeof u[a];
          case "delete":
            return 13 === r.o || delete u[a];
          case "void":
            B(w(11, { y: w(13, { v: u }), i: w(13, { v: a }), d: "." }));
          default:
            return;
        }
      },
      $,
      B,
      function (e) {
        var r, t, l, o, f, c, i, s, v, b, y, _, k, h, g, w, x, j;
        if ("[" === e.v.b) return I(e.v.v);
        if (
          ((t = (u !== n && u.Object) || Object),
          (l = e.v.v).every(function (e) {
            return 4 === e.o
              ? !e.v.p && 13 === e.v.k.o
              : "..." !== e.v && "__proto__" !== e.v;
          }))
        ) {
          for (f of ((o = new t()), l))
            (c = (13 === f.o ? f : f.v.k).v),
              (i =
                13 === f.o
                  ? G(f)
                  : 5 !== f.v.v.o
                  ? X[f.v.v.o](f.v.v)
                  : Z(f.v.v.v, u, a, c, true)),
              (o[c] = i);
          return o;
        }
        for (s = Object.create(null), v = t.prototype, b = 0; b < l.length; b++)
          if ((y = 13 === (f = l[b]).o) && "..." === f.v) {
            if ((b++, "object" == typeof (_ = X[l[b].o](l[b])) && null !== _)) {
              for (h of ((k = Object.getOwnPropertySymbols(_)), d(_)))
                s[h[0]] = p(h[1], true, true, true);
              for (g of k)
                (w = Object.getOwnPropertyDescriptor(_, g)) &&
                  w.enumerable &&
                  (s[g] = p(
                    void 0 !== w.writable ? w.value : _[g],
                    true,
                    true,
                    true
                  ));
            }
          } else
            (c = y ? f.v : 13 === f.v.k.o ? f.v.k.v : P(X[f.v.k.o](f.v.k))),
              (i = y
                ? G(f)
                : 5 !== f.v.v.o
                ? X[f.v.v.o](f.v.v)
                : Z(f.v.v.v, u, a, (f.v.p && f.v.p + " ") + Q(c), true)),
              (j = s[c]),
              (x = y ? "" : f.v.p)
                ? j && !j.value
                  ? (j[x] = i)
                  : (s[c] =
                      (((r = { configurable: true, enumerable: true })[x] = i),
                      r))
                : "__proto__" !== c || y || 13 !== f.v.k.o
                ? j && j.value
                  ? (j.value = i)
                  : (s[c] = p(i, true, true, true))
                : (v = i);
        return t.create(v, s);
      },
      G,
    ],
    Z = function (e, n, r, t, f) {
      var c,
        i,
        b = function () {
          var t,
            f,
            y,
            p = u,
            _ = a,
            h = [].slice.call(arguments),
            g = false,
            O = "=>" === e.t ? this !== s : this instanceof b;
          O && "fn" !== e.t && A((i || "anonymous") + "is not a constructor"),
            (u = n),
            (a = r.slice()),
            (o = o && o.d < 0 ? o : null),
            c && a.push(T({ c: [k(c)], l: null, x: [] }, [[c, b]])),
            0 !== e.b.o || e.v || j((e.v = []), e.b.v),
            ++l;
          try {
            return (
              (f = []),
              "=>" !== e.t &&
                f.push(
                  ["this", this],
                  ["arguments", h],
                  ["new.target", O ? b : void 0]
                ),
              e.a.length > 0 &&
                (a.push((t = T({ c: null, l: e.a.map(R), x: [] }, f, null, i))),
                F(x("arg", null, w(3, e.a)), h),
                (f = f.concat(d(t.v))),
                (a.pop().d = true)),
              a.push(
                (t = T(
                  0 === e.b.o ? e.b.v : { c: null, l: null, x: [] },
                  f,
                  e.v,
                  i
                ))
              ),
              (y =
                0 === e.b.o
                  ? J({ c: null, l: null, x: e.b.v.x })
                  : X[e.b.o](e.b)),
              (g = true),
              y !== s && y !== v ? y : void 0
            );
          } finally {
            g ? o && o.d > 0 && (o = null) : (o && o.d >= l) || S(1),
              l--,
              (u = p),
              (a = _),
              t && (t.d = true);
          }
        };
      return (
        (b = "=>" === e.t ? b.bind(s) : b),
        (c = (f && "fn" === e.t && e.n) || null),
        (i = e.n || t),
        Object.defineProperties(b, {
          __fn: p(e, false, false, false),
          toString: p(W, true, false, true),
          length: p(e.a.length, false, false, true),
          name: p(i, false, false, true),
        }),
        (r = r.slice()),
        b
      );
    },
    q = function (e) {
      return e.replace(/^/gm, "  ");
    },
    D = function (e) {
      return "+-".includes(e) ? 4194304 : f[e];
    },
    H = function (e, n) {
      return e.o >= 10
        ? 12 === e.o && "{" === e.v.b && (11 === n.o ? e === n.v.y : n.o <= 2)
        : e.o < n.o
        ? 0 !== e.o
        : e.o === n.o && (3 === e.o || (8 === e.o && D(e.v.o) < D(n.v.o)));
    },
    K = function (e, n, r) {
      var t = L(r, n);
      return t
        ? !H(r, e) || (t.startsWith("(") && t.endsWith(")"))
          ? t
          : "(".concat(t, ")")
        : "(...)";
    },
    L = function (e, n) {
      var r, t, u, a, l, o, c, i, v, b, d, y, p, _, k, h, g, x, j;
      if (n && !((1 << e.o) & n) && 13 !== e.o) return "";
      switch (e.o) {
        case 0:
        case 1:
          for (t of ((r = []), 0 === e.o ? e.v.x : e.v))
            (u = L(w(2, t), n && 7 | n)), r.push(u);
          return r.length > 0
            ? 1 === e.o
              ? r.join("\n")
              : "{\n" + q(r.join("\n")) + "\n}"
            : "{ }";
        case 2:
          return (
            (l = (a = e.v).a),
            (c = a.l),
            (i = e.v.v),
            (v = (o = a.c)
              ? "for" !== l || 3 !== o.o
                ? L(o, n)
                : (0 === o.v[0].v.v.v.length
                    ? " ;"
                    : L(o.v[0], n) || "(...);") +
                  " " +
                  (L(o.v[1], n) || "(...)").trim() +
                  "; " +
                  (L(o.v[2], n) || "(...)").trim()
              : ""),
            (b = i ? L(i, n) : ""),
            (c
              ? c
                  .slice(1)
                  .map(function (e) {
                    return e + ":\n";
                  })
                  .join("") +
                c[0] +
                ": "
              : "") +
              l +
              (o ? (v ? " (".concat(v, ")") : " (...)") : "") +
              (i
                ? b
                  ? ((b = b.trimLeft()),
                    (l &&
                    ("else if" === l || 8 === f[l]) &&
                    0 !== i.o &&
                    (b.length > 40 || b.includes("\n"))
                      ? "\n" + q(b)
                      : l && b
                      ? " " + b
                      : b) +
                      (0 === i.o ||
                      (5 === i.o && "fn" === i.v.t) ||
                      b.endsWith(";") ||
                      (3 === i.o &&
                        1 === i.v.length &&
                        6 === i.v[0].o &&
                        "in of".includes(i.v[0].v.a))
                        ? ""
                        : ";"))
                  : 0 !== i.o
                  ? " (...);"
                  : " { ... }"
                : "")
          );
        case 3:
          if (0 === e.v.length) return " ";
          for (
            r = e.v.map(K.bind(null, e, n)), d = 0, y = 0, p = false;
            d < r.length;
            d++
          )
            (p =
              "..." ===
              (_ =
                p && e.v[d].o < 9 && !r[d].startsWith("(")
                  ? "(".concat(r[d], ")")
                  : r[d].trim())),
              (r[d] =
                _ +
                (d >= r.length - 1
                  ? ""
                  : p
                  ? " "
                  : (y = "\n" === _.charAt(_.length - 2) ? 1 : y + 1) % 5 == 0
                  ? ",\n  "
                  : ", "));
          return r.join("");
        case 4:
          return 5 === e.v.v.o && "(){" === e.v.v.v.t
            ? L(e.v.v, n && 32 | n)
            : (e.v.p && e.v.p + " ") +
                (13 === e.v.k.o
                  ? e.v.k.v
                  : "[".concat(
                      K(w(e.v.k.v.length > 1 ? 3 : 2, []), n, e.v.k),
                      "]"
                    )) +
                ": " +
                (L(e.v.v, n) || "(...)");
        case 5:
          return (
            (k = e.v.a.length ? L(w(3, e.v.a), n && 8264 | n) : ""),
            (h = K(e, n && 0 === e.v.b.o ? 1 | n : n, e.v.b)),
            ("fn" === e.v.t ? "function " + e.v.n : e.v.n && e.v.n + " ") +
              "(" +
              (k.includes("\n") ? k + "\n" : k) +
              ("=>" !== e.v.t
                ? ") " + h
                : 0 !== e.v.b.o && h.includes("\n")
                ? ") =>\n" + q(h)
                : ") => " + h)
          );
        case 6:
          return ""
            .concat(L(e.v.y, n) || "(...)", " ")
            .concat(e.v.a, " ")
            .concat(5 === e.v.x.o ? L(e.v.x, n) : K(e, n, e.v.x));
        case 7:
          return (
            K(e, n, e.v.c) +
            " ? " +
            K(w(5, null), n, e.v.l) +
            " : " +
            K(w(5, null), n, e.v.r)
          );
        case 8:
          return ""
            .concat(K(e, n, e.v.l), " ")
            .concat(e.v.o, " ")
            .concat(K(e, n, e.v.r));
        case 9:
          return 67108864 === e.v.o.t
            ? (L(e.v.x, n) || "(...)") + e.v.o.v
            : e.v.o.v +
                (e.v.o.v >= "a" && e.v.o.v < "zz" ? " " : "") +
                (L(e.v.x, n) || "(...)");
        case 10:
          return (
            (g = e.v.a.length > 0 ? L(w(3, e.v.a), n) || "(...)" : ""),
            (e.v.n ? "new " : "") +
              K(e, n, e.v.f) +
              (e.v.o ? "?." : "") +
              "(".concat(g, ")")
          );
        case 11:
          return (
            (K(e, n, e.v.y) || "(...)") +
            (e.v.d.endsWith(".")
              ? e.v.d + e.v.i.v.v
              : e.v.d + (L(e.v.i, n) || "(...)") + "]")
          );
        case 12:
          return 0 == e.v.v.length
            ? "{" === e.v.b
              ? "{}"
              : "[]"
            : e.v.b +
                " " +
                L(w(3, e.v.v), n && 8216 | n) +
                ("{" === e.v.b ? " }" : " ]");
        case 13:
          return (
            (j = (x = "string" == typeof e.v) ? e.v : e.v.v),
            x
              ? j
              : j instanceof RegExp
              ? "/".concat(j.source, "/").concat(j.flags)
              : "string" == typeof j
              ? JSON.stringify(j)
              : j === s
              ? " "
              : "bigint" == typeof j
              ? j + "n"
              : j + ""
          );
        default:
          return "(unknown)";
      }
    },
    Q = function (e, n) {
      return (
        "object" == typeof e && null !== e && (e = P(e)),
        "symbol" == typeof e
          ? "[".concat(String(e).slice(7, -1), "]")
          : n && "string" == typeof e
          ? e.length <= 16
            ? JSON.stringify(e)
            : JSON.stringify(e.slice(0, 16)) + "..."
          : "" + e
      );
    },
    W = function () {
      var e = this;
      return "function" == typeof e && e.__fn
        ? L(w(5, e.__fn), 0)
        : r.prototype.toString.apply(e, arguments);
    },
    Y = function (e, n, r) {
      var t, u, a;
      return 11 !== e.o
        ? L(e, 11264) || (!b(n) && n + "") || "(anonymous)"
        : ((t = L(e.v.y, 11264) || "(...)"),
          (a = (u = e.v.d).endsWith(".")
            ? e.v.i.v.v
            : L(e.v.i, 11264) || Q(r, 1)),
          t + (u.endsWith(".") ? u + a : u + a + "]"));
    },
    ee = function (e, n, r) {
      for (var t = 0; t < e.length && "string" == typeof e[t]; ) t++;
      return (
        t < e.length &&
          (e[t] && "object" == typeof e[t] && (n = e[t]),
          t < e.length - 1 &&
            e[t + 1] &&
            "object" == typeof e[t + 1] &&
            (r = e[t + 1])),
        {
          globals: n,
          closures: r,
          body: t > 0 ? e[t - 1] : "",
          args: [].slice.call(e, 0, t - 1),
        }
      );
    },
    ne = function (e, n) {
      var r,
        t,
        l,
        o = e.globals,
        f = e.closures,
        c = e.args,
        i = g(e.body.replace(/\r\n?/g, "\n")),
        s = O(i, n);
      if (0 === (0 === s.o ? s.v.x.length : 1) && !n) return function () {};
      if (
        (f
          ? ((r = ({}.toString.call(f).includes("Array]") ? f : [f])
              .filter(function (e) {
                return (
                  e &&
                  "object" == typeof e &&
                  !{}.toString.call(e).includes("Array]")
                );
              })
              .map(function (e) {
                return { v: e, c: [], n: null, d: true };
              })),
            s.o > 2 &&
              (s = w(0, { c: null, l: null, x: [x("return", null, s)] })))
          : (r = a),
        !n && 0 === s.o)
      ) {
        for (
          t = s, l = void 0;
          !(l = t.v.x[t.v.x.length - 1]).a && 0 === l.v.o;

        )
          t = l.v;
        l.a || 5 === l.v.o || (l.a = "return");
      }
      return Z(
        {
          a: c.map(function (e) {
            return w(13, e);
          }),
          t: false === n || (0 !== s.o && !n) ? "=>" : "fn",
          n: "",
          v: null,
          b: s,
        },
        o || u,
        r,
        "anonymous",
        false
      );
    },
    re = function () {
      return ne(ee(arguments, null, []), true);
    },
    te = function () {
      var e = ne(ee(arguments, null, null), false);
      return e();
    },
    ue = function () {
      var e = ne(ee(arguments, n, []));
      return e();
    },
    ae = function (e) {
      var r,
        u,
        a = "object" == typeof e && e ? e : ee(arguments, null, null),
        l = !!(a.globals || a.closures);
      if (
        (null !== t ||
          l ||
          (t = (function () {
            var e = ne(ee(["Function"], n, []))();
            try {
              return e("1"), e;
            } catch (e) {}
            return false;
          })()),
        t && !l)
      ) {
        (u = a.args.slice()).unshift(n), u.push('"use strict";\n' + a.body);
        try {
          r = new (t.bind.apply(t, u))();
        } catch (e) {}
        if (r) return r();
      }
      return (
        a.globals || (a.globals = a.globals || n),
        (a.closures = a.closures || []),
        (r = ne(a))()
      );
    },
    le = function (e) {
      return e
        .slice()
        .reverse()
        .map(function (e) {
          return { dict: e.v, consts: e.c, name: e.n || "", done: e.d };
        });
    };
  "object" == typeof VApi && VApi ? (VApi.v = ue) : (n.vimiumEval = ue),
    (ue.vimiumEval = ue),
    (ue.doubleEval = ae),
    (ue.noNative = function () {
      t = false;
    }),
    (ue.getStack = function (e) {
      return e && !o
        ? null
        : { stack: le(e ? o.l : a), depth: e ? o.d : l, globals: e ? o.g : u };
    }),
    (ue.tryEval = function (e) {
      var n,
        r,
        a = ee(arguments, null, null),
        l = !!(a.globals || a.closures);
      try {
        return (n = ae(a)), { ok: t && !l ? 1 : 2, result: n };
      } catch (e) {
        return {
          ok: 0,
          result: e,
          stack: (r = t && !l) ? null : le(o ? o.l : []),
          type: r ? "native" : "eval",
          globals: r ? null : o ? o.g : u,
        };
      }
    });
})();
