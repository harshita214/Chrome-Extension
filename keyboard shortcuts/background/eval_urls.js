"use strict";
(__filename = "background/eval_urls.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./parse_urls",
      "./ports",
      "./exclusions",
      "./i18n",
    ],
    function (e, r, s, n, a, u, t, c, l, i) {
      var f, o, p, d;
      Object.defineProperty(r, "__esModule", { value: true }),
        (l = __importStar(l)),
        (f = 0),
        s.f(function (e, r, l) {
          var i, g, b, h, y, m, v, x, _;
          if (
            ((r |= 0),
            "paste" === e
              ? (e += " .")
              : e.includes("%20") &&
                !e.includes(" ") &&
                (e = e.replace(/%20/g, " ")),
            r < 0 ||
              !(e = e.trim()) ||
              (i = e.search(/[/ ]/)) <= 0 ||
              !/^[a-z][\da-z\-]*(?:\.[a-z][\da-z\-]*)*$/i.test(
                (g = e.slice(0, i).toLowerCase())
              ) ||
              /\.(?:css|html?|js)$/i.test(g))
          )
            return null;
          if (!(e = e.slice(i + 1).trim())) return null;
          if (1 === r)
            switch (g) {
              case "sum":
              case "mul":
                (e = e.replace(
                  /[\s+,\uff0b\uff0c]+/g,
                  "sum" === g ? " + " : " * "
                )),
                  (g = "e");
                break;
              case "avg":
              case "average":
                (b = e.split(/[\s+,\uff0b\uff0c]+/g)),
                  (e = "(" + b.join(" + ") + ") / " + b.length),
                  (g = "e");
            }
          if (1 === r)
            switch (g) {
              case "e":
              case "exec":
              case "eval":
              case "expr":
              case "calc":
              case "m":
              case "math":
                return a.import2("/lib/math_parser.js").then(o.bind(0, e));
              case "error":
                return [e, 3];
            }
          else if (r >= 2)
            switch (g) {
              case "urls":
                return d(e);
              case "run":
                return [["run", e], 6];
              case "status":
              case "state":
                return r >= 3 && p(e), [e, r >= 3 ? 4 : 7];
              case "url-copy":
              case "search-copy":
              case "search.copy":
              case "copy-url":
                if ((y = u.$e(e, null, 1)) instanceof Promise)
                  return y.then(function (e) {
                    var r = e[0] || e[2] || "";
                    return (
                      (r = r instanceof Array ? r.join(" ") : r),
                      [(r = s.N(r)), 1]
                    );
                  });
                e =
                  (y = 5 === u._e && y instanceof Array ? y[0] : y) instanceof
                  Array
                    ? y.join(" ")
                    : y;
              case "cp":
              case "copy":
              case "clip":
                return [(e = s.N(e)), 1];
            }
          switch (g) {
            case "cd":
            case "up":
              if (!(b = (e + "  ").split(" "))[2]) {
                if (r < 1) return null;
                if ("string" != typeof (y = c.rr()))
                  return y.then(function (n) {
                    var a =
                      n &&
                      s.P(
                        "cd " + e + " " + (e.includes(" ") ? n : ". " + n),
                        r,
                        l
                      );
                    return a
                      ? "string" == typeof a
                        ? [a, 7]
                        : a
                      : [n ? "fail in parsing" : "No current tab found", 3];
                  });
                b[2] = y;
              }
              return (
                (m = "/" === (g = b[0])[0]),
                (i = parseInt(g, 10)),
                (i = isNaN(i)
                  ? "/" === g
                    ? 1
                    : m
                    ? g.replace(/(\.+)|./g, "$1").length + 1
                    : -g.replace(/\.(\.+)|./g, "$1").length || -1
                  : i),
                ((v = t.He({
                  u: b[2],
                  p: i,
                  t: null,
                  f: 1,
                  a: "." !== b[1] ? b[1] : "",
                })) &&
                  v.u) || [v ? v.e : "No upper path", 3]
              );
            case "parse":
            case "decode":
              (g = e.split(" ", 1)[0]).search(/\/|%2f/i) < 0
                ? (e = e.slice(g.length + 1).trimLeft())
                : (g = "~"),
                (b = [(e = n.yt(e))]),
                (e = u.$e(e)),
                4 !== u._e && (h = t.He({ u: e }))
                  ? "" === h.u
                    ? (b = [g])
                    : (b = h.u.split(" ")).unshift(g)
                  : (b = b[0].split(n.Bt));
              break;
            case "sed":
            case "substitute":
            case "sed-p":
            case "sed.p":
            case "sed2":
              return (
                (x = e.split(" ", 1)[0]),
                (e = e.slice(x.length + 1).trim()),
                (_ = "sed2" === g ? e.split(" ", 1)[0] : ""),
                [
                  (e =
                    (e = e.slice(_.length).trim()) &&
                    s.V(
                      e,
                      g.endsWith("p") ? 32768 : 0,
                      _
                        ? { r: x, k: _ }
                        : /^[@#$-]?[\w\x80-\ufffd]+$|^\.$/.test(x)
                        ? { r: null, k: x }
                        : { r: x, k: null }
                    )),
                  5,
                ]
              );
            case "u":
            case "url":
            case "search":
              b = n.yt(e, true).split(n.Bt);
              break;
            case "paste":
              if (r > 0)
                return (y = s.I(e)) instanceof Promise
                  ? y.then(function (e) {
                      return [e ? e.trim().replace(n.Bt, " ") : "", 5];
                    })
                  : [y ? y.trim().replace(n.Bt, " ") : "", 5];
            default:
              return null;
          }
          return l
            ? [b, 2]
            : (i = f++) > 12
            ? null
            : 12 === i
            ? u.he(b, "", 0)
            : i > 0
            ? u.he(b, "", r)
            : ((y = u.he(b, "", r)), (f = 0), y);
        }),
        (o = function (e, r) {
          var s, n, a;
          for (
            u.Se.test(e) && (e = e.slice(1, -1)),
              e = (e = (e = e.replace(/\uff0c/g, " "))
                .replace(/deg\b/g, "\xb0")
                .replace(/[\xb0']\s*\d+(\s*)(?=\)|$)/g, function (e, r) {
                  return (e = e.trim()) + ("'" === e[0] ? "''" : "'") + r;
                })
                .replace(
                  /([\u2070-\u2079\xb2\xb3\xb9]+)|[\xb0\uff0b\u2212\xd7\xf7]|''?/g,
                  function (e, r) {
                    var s,
                      n,
                      a = "";
                    if (!r)
                      return "\xb0" === e
                        ? "/180*PI+"
                        : (s = "\uff0b\u2212\xd7\xf7".indexOf(e)) >= 0
                        ? "+-*/"[s]
                        : "/".concat("''" === e ? 3600 : 60, "/180*PI+");
                    for (n of e)
                      a +=
                        n < "\xba"
                          ? n > "\xb3"
                            ? 1
                            : n < "\xb3"
                            ? 2
                            : 3
                          : n.charCodeAt(0) - 8304;
                    return a && "**" + a;
                  }
                )
                .replace(/([\d.])rad\b/g, "$1"))
                .replace(/^=+|=+$/g, "")
                .trim(),
              s = [].reduce.call(
                e,
                function (e, r) {
                  return e + ("(" === r ? 1 : ")" === r ? -1 : 0);
                },
                0
              );
            s < 0;
            s++
          )
            e = "(" + e;
          for (; s-- > 0; ) e += ")";
          if (e) {
            for (; e && "(" === e[0] && ")" === e.slice(-1); )
              e = e.slice(1, -1).trim();
            e = e || "()";
          }
          if (
            ((n = ""),
            (a = r.MathParser || globalThis.MathParser || {}).evaluate)
          ) {
            try {
              n =
                "function" == typeof (n = a.evaluate("()" !== e ? e : "0"))
                  ? ""
                  : "" + n;
            } catch (e) {}
            a.clean(), a.errormsg && (a.errormsg = "");
          }
          return [n, 0, e];
        }),
        (p = function (e) {
          var r,
            a,
            u,
            t,
            f,
            o,
            p,
            d,
            g,
            b,
            h,
            y,
            m,
            v,
            x,
            _,
            $,
            k,
            w = s.jn;
          if (
            (!parseInt(e, 10) ||
              ((w = parseInt(e, 10)), (e = e.slice(e.search(/[/ ]/) + 1))),
            (r = s.Pn.get(w || (w = s.jn))))
          ) {
            for ($ of (s.set_cPort(r.ar || r.cr),
            (u = (a = e.search(/[/ ]/)) > 0 ? e.slice(a + 1) : ""),
            (e = e.toLowerCase()),
            a > 0 && (e = e.slice(0, a)),
            e.includes("-") && e.endsWith("able") && (e += "d"),
            (u = ((t = !!u && /^silent/i.test(u)) ? u.slice(7) : u).trim()),
            (f = 0),
            (o = function (e) {
              console.log(e), f || c.showHUD(e), (f = 1);
            }),
            u.includes("%") && /%[a-f0-9]{2}/i.test(u) && (u = n.zt(u)),
            u && !u.startsWith("^ ")
              ? (o('"vimium://status" only accepts a list of hooked keys'),
                (u = ""))
              : u &&
                ((p = u.match(
                  /<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z]\w+|[^\sA-Z])>|\S/g
                )),
                (u = p ? p.join(" ").replace(/<(\S+)>/g, "$1") : "")),
            (b = (g = s.cPort.s).nt),
            (h = l.lr
              ? 1 === b
                ? b
                : (d = l.ir(g.Ce, g))
                ? 1
                : null === d
                ? 0
                : 2
              : 0),
            (m = !!u && "enable" === e),
            (x = {
              N: 1,
              p:
                2 ===
                  (y =
                    "enable" === e
                      ? 0
                      : "disable" === e
                      ? 2
                      : "toggle-disabled" === e
                      ? 2 !== b
                        ? 2 === h
                          ? null
                          : 2
                        : 2 === h
                        ? 0
                        : null
                      : "toggle-enabled" === e
                      ? 0 !== b
                        ? 0 === h
                          ? null
                          : 0
                        : 0 === h
                        ? 2
                        : null
                      : "toggle-next" === e
                      ? 1 === b
                        ? 0
                        : 0 === b
                        ? 2 === h
                          ? null
                          : 2
                        : 2 === h
                        ? 0
                        : null
                      : "toggle" === e || "next" === e
                      ? 0 !== b
                        ? 0
                        : 2
                      : ("reset" !== e &&
                          o(
                            'Unknown status action: "'.concat(e, '", so reset')
                          ),
                        null)) || m
                  ? u
                  : null,
              f: (v = null === y ? 0 : 2 === y ? 3 : 1),
            }),
            (_ = v ? y : 0),
            (r.tr = v ? { nt: _, er: x.p } : null),
            r.oo))
              (k = $.s),
                (!v &&
                  l.lr &&
                  1 !=
                    (_ = null === (d = x.p = l.ir(k.Ce, k)) ? 0 : d ? 1 : 2) &&
                  k.nt === _) ||
                  ((k.nt = _), $.postMessage(x));
            (_ = r.cr.s.nt),
              t ||
                f ||
                Promise.resolve(
                  i._r(
                    0 !== _ || m
                      ? 2 === _
                        ? "fullyDisabled"
                        : "halfDisabled"
                      : "fullyEnabled"
                  )
                ).then(function (e) {
                  c.showHUD(i._r("newStat", [e]));
                }),
              s.Gn && _ !== b && s.x(w, _);
          }
        }),
        (d = function (e) {
          var r,
            n,
            a,
            t,
            c = e.indexOf(":") + 1 || e.indexOf(" ") + 1;
          if (c <= 0) return ["No search engines given", 3];
          if (
            (r = e
              .slice(0, c - 1)
              .split(e.lastIndexOf(" ", c - 1) >= 0 ? " " : "|")
              .filter(function (e) {
                return s.Ln.map.has(e);
              })).length <= 0
          )
            return ["No valid search engines found", 3];
          for (t of ((n = e.slice(c).split(" ")), (a = ["openUrls"]), r))
            a.push(u.he(n, t, 0));
          return [a, 6];
        });
    }
  );
