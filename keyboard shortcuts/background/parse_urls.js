"use strict";
(__filename = "background/parse_urls.js"),
  define(
    ["require", "exports", "./store", "./utils", "./normalize_urls"],
    function (e, u, n, r, t) {
      var i, f, l, a, s, o;
      Object.defineProperty(u, "__esModule", { value: true }),
        (u.ke = u.je = u.Ue = u.Me = u.Pe = u.qe = u.He = void 0),
        (r = __importStar(r)),
        (i = function (e) {
          var i,
            f,
            l,
            a,
            s,
            o,
            p = e.u,
            c = p.toLowerCase(),
            g = null,
            m = false;
          if (!r.Zt.test(t.Ee(c))) return r.Dt(), null;
          if (e.p)
            return {
              k: "",
              s: 0,
              u: null != (l = u.qe(e)).p ? l.u : p,
              e: null != l.p ? l.p : l.u,
            };
          for (i of ((f = r.v(c)) && ((c = c.slice(f)), (p = p.slice(f))),
          n.Ln.rules))
            if (c.startsWith(i.Oe) && (g = p.slice(i.Oe.length).match(i.Te)))
              break;
          if (!g || !i)
            return c.startsWith((a = n.u.vt))
              ? {
                  k: "vimium://show",
                  u: (p = p.slice(a.length).replace(/^#!?/, "")),
                  s:
                    (p.startsWith("image") &&
                      p.lastIndexOf("&", p.indexOf(":") + 1) + 1) ||
                    p.indexOf(" ") + 1,
                }
              : (r.Dt(), null);
          for (o of (g.length > 1 && !i.Te.global && g.shift(),
          (s = i.Be),
          g.length > 1
            ? (m = true)
            : s instanceof RegExp
            ? (g = (c = g[0]).match(s))
              ? (g.shift(), (m = true))
              : (g = [c])
            : (g = g[0].split(s)),
          (c = ""),
          g))
            c += " " + r.zt(o);
          return (
            (c = c.trim().replace(r.Bt, " ")),
            r.Dt(),
            { k: i.De, u: c, s: m ? c.lastIndexOf(" ") + 1 : 0 }
          );
        }),
        (u.He = i),
        (u.qe = function (e) {
          var u,
            i,
            l,
            a,
            s,
            o,
            p,
            c,
            g,
            m,
            _,
            d,
            v,
            $,
            h,
            b,
            x,
            w,
            z,
            k,
            R,
            j = e.u,
            E = j.toLowerCase();
          if (
            1 === e.p &&
            (u = n.V(j, 131072, e.s)) !== j &&
            u &&
            u !== j + "/" &&
            u + "/" !== j &&
            ((i = t.$e(u, null, -2)), 0 === t._e)
          )
            return { u: i, p: "(sed)" };
          if (!r.Zt.test(t.Ee(E)))
            return { u: "This url has no upper paths", p: null };
          if (
            ((l = encodeURIComponent),
            (a = ""),
            (c = false),
            (m = null),
            (d = 0),
            (v = 0),
            ($ = false),
            (_ = j.lastIndexOf("#") + 1) &&
              ((a = j.slice(_ + +("!" === j.substr(_, 1)))),
              ((_ = (s = r.zt(a)).lastIndexOf("/")) > 0 ||
                (0 === _ && s.length > 1)) &&
                (($ = s !== a),
                "/" ===
                  (m = (o =
                    (b = /([^&=]+=)([^&\/=]*\/[^&]*)/).exec(s) ||
                    /(^|&)([^&\/=]*\/[^&=]*)(?:&|$)/.exec(s))
                    ? o[2]
                    : s) || m.includes("://")
                  ? (m = null)
                  : o
                  ? $
                    ? ((s = "https://example.com/"),
                      (s = encodeURI(s + m).slice(s.length)),
                      (_ =
                        (a.indexOf(s) + 1 || a.indexOf((s = l(m))) + 1) - 1) <
                        0 && (($ = false), (_ = a.indexOf((s = m)))),
                      (v = _ + s.length),
                      _ < 0 &&
                        "&" !== o[1] &&
                        ((_ = a.indexOf((s = o[1]))) < 0 &&
                          (($ = true),
                          (s = l(o[1].slice(0, -1))),
                          (_ = a.indexOf(s))),
                        _ >= 0 && (v = a.indexOf("&", (_ += s.length)) + 1)),
                      _ >= 0
                        ? (d = _)
                        : (h = b.exec(a))
                        ? ((m = r.zt(h[2])),
                          (v = (d = h.index + h[1].length) + h[2].length))
                        : "&" !== (s = o[1]) &&
                          ((_ = j.length - a.length),
                          (a = s + l(m)),
                          (j = j.slice(0, _) + a),
                          (d = s.length),
                          (v = 0)))
                    : (d = o.index + o[1].length)
                  : (d = 0),
                m && ((d += _ = j.length - a.length), v > 0 && (v += _)))),
            !m)
          ) {
            if (E.startsWith(n.u.lt) && !e.f)
              return { u: "An extension has no upper-level pages", p: null };
            (a = ""),
              (d = j.indexOf("/", j.indexOf("://") + 3)),
              E.startsWith("filesystem:") && (d = j.indexOf("/", d + 1)),
              (_ = j.indexOf("?", (d = d < 0 ? 0 : d))),
              (v = j.indexOf("#", d)),
              (m = j.slice(
                d,
                (_ =
                  (_ = v < 0 ? _ : _ < 0 ? v : _ < v ? _ : v) > 0
                    ? _
                    : j.length)
              )),
              (v = 0),
              ($ = false);
          }
          if (
            ((_ = e.p), (p = m.startsWith("/")), !a && E.startsWith("file:"))
          ) {
            if (m.length <= 1 || (11 === j.length && j.endsWith(":/"))) {
              if (!e.f)
                return {
                  u: "Here has been the root path",
                  p: null,
                };
              _ = 0;
            }
            (c = true), e.f || (1 === _ && (_ = -1));
          } else
            c =
              !(a || !E.startsWith("ftp")) ||
              (null != e.t
                ? !!e.t
                : null != e.r
                ? !!e.r
                : (m.length > 1 && m.endsWith("/")) ||
                  /\.([a-z]{2,3}|apng|jpeg|tiff)$/i.test(m));
          return (
            (w = (x = m.slice(+p, m.length - +m.endsWith("/")).split("/"))
              .length),
            (z = _ < 0 ? _ + w : _),
            (g = w <= 1 && _ <= -2 && j.lastIndexOf("#", d) > 0),
            (x.length = _ = z > w ? w : _ > 0 ? z - 1 : z > 0 ? z : 0),
            (m = x.join("/")),
            (s = e.a || "") && (m += "/" === s[0] ? s : "/" + s),
            (m = m
              ? ("/" === m[0] ? "" : "/") +
                m +
                (!c || m.endsWith("/") ? "" : "/")
              : "/"),
            !v && j.lastIndexOf("git", d - 3) > 0 && (m = f(j, m) || m),
            !g || (m && "/" !== m)
              ? ((s = $ ? l(m) : m),
                (j = j.slice(0, d) + (v ? s + j.slice(v) : s)))
              : (j = j.split("#", 1)[0]),
            (k = n.V(j, 64, e.s) || j) !== j &&
              ((R = t.$e(k, null, -2)), (j = 0 === t._e ? R : j)),
            { u: j, p: m }
          );
        }),
        (f = function (e, u) {
          var n,
            t,
            i,
            f = r.Rt(e),
            l = f ? f.host : "";
          if (
            l &&
            /git\b|\bgit/i.test(l) &&
            /^[\w\-]+(\.\w+)?(:\d{2,5})?$/.test(l) &&
            ((n = u.split("/"))[(t = n.length - 1)] || (t--, n.pop()),
            (i = n[t]),
            l.startsWith("github."))
          ) {
            if (3 === t)
              return "pull" === i || "milestone" === i || "commit" === i
                ? u + "s"
                : "tree" === i || "blob" === i
                ? n.slice(0, 3).join("/")
                : null;
            if (
              4 === t &&
              "releases" === n[3] &&
              ("tag" === n[4] || "edit" === n[4])
            )
              return n.slice(0, 4).join("/");
            if (t > 3)
              return "blob" === n[3] ? ((n[3] = "tree"), n.join("/")) : null;
          }
        }),
        (l = function (e, n) {
          return "string" == typeof n && n.toLowerCase().startsWith("whole")
            ? u.Ue(e)
            : a(e);
        }),
        (u.Pe = l),
        (u.Me = function (e) {
          var u, t, i, f, l, a, s, o;
          return /^https?:\/\//i.test(e)
            ? ((u = e.indexOf("://") + 3),
              (t = e.indexOf("/", u)),
              (i = e.slice(u, t > 0 ? t : e.length).toLowerCase()),
              (f = (
                n.Wn < 64 || false
                  ? /[\s"(),;>}\u2014\u2018\u2019\u201c\u201d\u3002\u300b\u3011\uff08\uff09\uff1b-\uff1e]/
                  : new RegExp("\\p{S}|[^\\P{P}.:\\uff1a%-]", "u")
              ).exec(i))
                ? e.slice(0, u + f.index)
                : ((l = i.indexOf("%", i.indexOf("@") + 1)),
                  (a = i.lastIndexOf(".xn--", l > 0 ? l : void 0) + 5) > 5 &&
                  /^[a-z\d]{2}/.test(i.slice(a)) &&
                  !/\.[a-z]/.test(i.slice(a)) &&
                  i.lastIndexOf("xn--", a - 6) < 0 &&
                  !/[\x7f-\uffff]/.test(i.slice(0, a - 6)) &&
                  ((s = i.slice(a)),
                  (o = (/^[a-z\d]+/.exec(s) || [""])[0]) &&
                    o.length < s.length &&
                    (r.Lt(o, true) || "%-".includes(s[o.length])))
                    ? e.slice(0, u + a - 4) + e.substr(u + a, o.length)
                    : e))
            : e;
        }),
        (a = function (e) {
          var n,
            r,
            i,
            f,
            l,
            a,
            s,
            o = e.indexOf("\uff1a") + 1 || e.indexOf(":") + 1;
          if (o && "/" !== e[o]) {
            if (
              "link" !==
                (r = e
                  .slice(0, o - 1)
                  .trim()
                  .toLowerCase()) &&
              "\u94fe\u63a5" !== r
            )
              return e;
            if (
              !(o =
                (n = e.slice(o).trim()).indexOf("\uff1a") + 1 ||
                n.indexOf(":") + 1) ||
              !/^[\w+-]+((?:\.[\w+-])*\.[a-z]{2,6})?\//.test(n)
            )
              return e;
          } else {
            if (!o || "/" !== e.substr(o + 1, 1)) return e;
            n = e;
          }
          return (
            (f =
              !!(i = /\s|[^=][\u3002\uff0c\uff1b]([^a-z?&#-]|$)/.exec(n)) &&
              1 === i[0].length),
            (a = /["(\u2018\u201c\u300a\uff08\uff1c]/),
            (s = (
              (l = i ? n.slice(0, i.index + (f ? 0 : 1)) : null) || n
            ).includes("#~:text=")
              ? 0
              : 7) &&
              l &&
              (f
                ? ",.;\u3002\uff0c\uff1b".lastIndexOf(l.slice(-1), 2) >= 0
                  ? ((n = l.slice(0, -1)), (s = 3))
                  : '")\u2019\u201d\u300b\uff09\uff1e'.includes(l.slice(-1)) &&
                    (s = a.test(l.slice(o)) ? 0 : ((n = l.slice(0, -1)), 1))
                : ((n = l), (s = 3))),
            4 & s &&
              ",.;\u3002\uff0c\uff1b".includes(n.slice(-1)) &&
              (n = n.slice(0, -1)),
            2 & s &&
              '")\u2019\u201d\u300b\uff09\uff1e'.includes(n.slice(-1)) &&
              (a.test(n.slice(o)) ? (s = 0) : (n = n.slice(0, -1))),
            n &&
              ",.;\u3002\uff0c\uff1b".includes(n[0]) &&
              (n = n.slice(1).trim()),
            1 & s && n && a.test(n[0]) && (n = n.slice(1)),
            (n = u.Ue(n, false, true)),
            t._e <= 2 && !n.startsWith("vimium:") ? n : e
          );
        }),
        (u.Ue = function (e, u, n) {
          var r,
            i,
            f = +e.includes("\u3002") + 2 * +e.includes("\uff1a");
          return f || n
            ? ((r = e.indexOf("//")),
              (r = e.indexOf("/", r >= 0 ? r + 2 : 0)) >= 0 && r < 4
                ? e
                : ((i = r > 0 ? e.slice(0, r) : e),
                  /^(data|javascript)[:\uff1a]/i.test(i)
                    ? e
                    : (1 & f && (i = i.replace(/\u3002/g, ".")),
                      2 & f &&
                        (i = i.replace("\uff1a", ":").replace("\uff1a", ":")),
                      r > 0 && (i += e.slice(r)),
                      t.$e(i, null, -2),
                      t._e < 3
                        ? i
                        : 1 !== f || !u || /[^.\w\u3002-]/.test(e)
                        ? e
                        : e.replace(/\u3002/g, "."))))
            : e;
        }),
        (s = function (e, n) {
          var i,
            f,
            l,
            a,
            s,
            p,
            c,
            g,
            m,
            _,
            d,
            v = [],
            $ = t.xe,
            h = /\s/,
            b = function (e) {
              return (
                !!((e = e.trim()) && "__proto__" !== e && e.length < 51) &&
                (n.set(e, s), true)
              );
            };
          for (g of e
            .replace(/\\\\?\n/g, function (e) {
              return 3 === e.length ? "\\\n" : "";
            })
            .split("\n"))
            if (!((g = g.trim()) < "$")) {
              p = 0;
              do {
                p = g.indexOf(":", p + 1);
              } while (92 === g.charCodeAt(p - 1));
              if (
                !(p <= 0) &&
                (a = g.slice(0, p).trimRight()) &&
                ((i = a.replace(/\\:/g, ":").split("|")),
                (g = g.slice(p + 1).trimLeft()) &&
                  ((a = g.replace(/\\\s/g, "\\s")),
                  (m = ""),
                  (p = a.search(h)) > 0
                    ? ((e = g.slice(p)),
                      (g = a.slice(0, p)),
                      (p = e.search(/\sblank=/i)) >= 0 &&
                        ((_ = e.slice(p + 7).search(h)),
                        (m = e.slice(
                          p + 7,
                          (_ = _ > 0 ? p + 7 + _ : 0) || void 0
                        )),
                        (e = e.slice(0, p) + (_ ? e.slice(_) : ""))),
                      (p = e.search(/\sre=/i)))
                    : ((g = a), (e = "")),
                  (g = g
                    .replace(/\\s/g, " ")
                    .trim()
                    .replace(/([^\\]|^)%(s)/gi, "$1$$$2")
                    .replace(/\\%/g, "%")),
                  (s = { De: "", B: m, Ce: g }),
                  0 !== (i = i.filter(b)).length))
              ) {
                if (-1 === p) {
                  for (
                    $.lastIndex = 0;
                    (c = $.exec(g)) && c[0].endsWith("$");

                  );
                  c &&
                    (p = c.index + 1) &&
                    ((a = (a = c[2])
                      ? /^s:/i.test(a)
                        ? "s" === a[0]
                          ? "+"
                          : " "
                        : a
                      : "s" === c[1]
                      ? "+"
                      : " "),
                    (g = g
                      .replace($, function (e, u) {
                        return "$" + (u || "s");
                      })
                      .toLowerCase()),
                    (g = t.$e(g, null, -1)),
                    t._e > 2 &&
                      (g = g.replace(/%24(%24|s)/g, decodeURIComponent)),
                    (p = 0),
                    (g = g.replace(/\$[$s]/g, function (e, u) {
                      return "$$" === e
                        ? (p > 0 || p--, "$")
                        : ((p = p > 0 ? p : p + u + 1), e);
                    })),
                    (f = o(g, p)) &&
                      (a.includes("$")
                        ? ((a = a.replace(t.ze, "(.*)")),
                          (l = new RegExp(
                            "^" + a,
                            /[a-z]/i.test(a) ? "i" : ""
                          )))
                        : (l = a.trim() || " "),
                      v.push({
                        Oe: f.Oe,
                        Te: f.Te,
                        De: i[0].trimRight(),
                        Be: l,
                      })));
                } else
                  47 === e.charCodeAt(p + 4)
                    ? ((a = p > 1 ? e.slice(1, p).trim() : ""),
                      (e = e.slice(p + 5)),
                      (p = e.search(/[^\\]\//) + 1),
                      (g = e.slice(0, p)),
                      (e = e.slice(p + 1)),
                      (p = e.search(h)),
                      (d = r.m(g, p >= 0 ? e.slice(0, p) : e)) &&
                        ((a = u.ke(a)),
                        v.push({
                          Oe: a,
                          Te: d,
                          De: i[0].trimRight(),
                          Be: s.Ce.lastIndexOf("$S") >= 0 ? " " : "+",
                        })),
                      (e = p >= 0 ? e.slice(p + 1) : ""))
                    : (e = e.slice(p + 4));
                (e = e.trimLeft()),
                  (s.De = e ? r.zt(e) : i[i.length - 1].trimLeft());
              }
            }
          return v;
        }),
        (u.je = s),
        (o = function (e, n) {
          return n < 1 || !r.Zt.test(e)
            ? null
            : ((t = e.slice(0, n - 1)),
              (n = Math.max(t.lastIndexOf("?"), t.lastIndexOf("#")) + 1)
                ? ((f = i = t.slice(n)),
                  (t = t.slice(0, t.search(/[#?]/))),
                  (l = i.lastIndexOf("&") + 1) && (f = i.slice(l)),
                  f && f.indexOf("=") >= 1
                    ? ((i = "[#&?]"), (e = "([^#&]*)"))
                    : ((f = i),
                      (i = "#" === e[n - 1] ? "#" : f ? "[#?]" : "\\?"),
                      (e = "([^#&?]*)")))
                : ((i = "^([^#?]*)"),
                  (f = e.slice(t.length + 2)) &&
                    (n = f.search(/[#?]/) + 1) &&
                    (f = f.slice(0, n - 1)),
                  (e = "")),
              (f = f && r.t(f).replace(/\\\+|%20| /g, "(?:\\+|%20| )")),
              {
                Oe: (t = u.ke(t)),
                Te: new RegExp(i + f + e, /[a-z]/i.test(f) ? "i" : ""),
              });
          var t, i, f, l;
        }),
        (u.ke = function (e) {
          var u = e.slice(0, 9).toLowerCase(),
            n = r.v(u);
          return (
            n
              ? (e = e.slice(n))
              : "vimium://" === u && (e = t.ge(e.slice(9), false, -1)),
            e
          );
        });
    }
  );
