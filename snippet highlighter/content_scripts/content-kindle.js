(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 9));
})({
  "01f9": function (e, t, n) {
    "use strict";
    var r = n("2d00"),
      i = n("5ca1"),
      o = n("2aba"),
      a = n("32e9"),
      s = n("84f2"),
      u = n("41a0"),
      c = n("7f20"),
      l = n("38fd"),
      f = n("2b4c")("iterator"),
      p = !([].keys && "next" in [].keys()),
      d = "@@iterator",
      h = "keys",
      g = "values",
      v = function () {
        return this;
      };
    e.exports = function (e, t, n, m, y, b, x) {
      u(n, t, m);
      var w,
        k,
        T,
        E = function (e) {
          if (!p && e in j) return j[e];
          switch (e) {
            case h:
              return function () {
                return new n(this, e);
              };
            case g:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        C = t + " Iterator",
        S = y == g,
        A = !1,
        j = e.prototype,
        D = j[f] || j[d] || (y && j[y]),
        L = D || E(y),
        N = y ? (S ? E("entries") : L) : void 0,
        O = ("Array" == t && j.entries) || D;
      if (
        (O &&
          ((T = l(O.call(new e()))),
          T !== Object.prototype &&
            T.next &&
            (c(T, C, !0), r || "function" == typeof T[f] || a(T, f, v))),
        S &&
          D &&
          D.name !== g &&
          ((A = !0),
          (L = function () {
            return D.call(this);
          })),
        (r && !x) || (!p && !A && j[f]) || a(j, f, L),
        (s[t] = L),
        (s[C] = v),
        y)
      )
        if (((w = { values: S ? L : E(g), keys: b ? L : E(h), entries: N }), x))
          for (k in w) k in j || o(j, k, w[k]);
        else i(i.P + i.F * (p || A), t, w);
      return w;
    };
  },
  "02f4": function (e, t, n) {
    var r = n("4588"),
      i = n("be13");
    e.exports = function (e) {
      return function (t, n) {
        var o,
          a,
          s = String(i(t)),
          u = r(n),
          c = s.length;
        return u < 0 || u >= c
          ? e
            ? ""
            : void 0
          : ((o = s.charCodeAt(u)),
            o < 55296 ||
            o > 56319 ||
            u + 1 === c ||
            (a = s.charCodeAt(u + 1)) < 56320 ||
            a > 57343
              ? e
                ? s.charAt(u)
                : o
              : e
              ? s.slice(u, u + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536);
      };
    };
  },
  "0390": function (e, t, n) {
    "use strict";
    var r = n("02f4")(!0);
    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  "0a49": function (e, t, n) {
    var r = n("9b43"),
      i = n("626a"),
      o = n("4bf8"),
      a = n("9def"),
      s = n("cd1c");
    e.exports = function (e, t) {
      var n = 1 == e,
        u = 2 == e,
        c = 3 == e,
        l = 4 == e,
        f = 6 == e,
        p = 5 == e || f,
        d = t || s;
      return function (t, s, h) {
        for (
          var g,
            v,
            m = o(t),
            y = i(m),
            b = r(s, h, 3),
            x = a(y.length),
            w = 0,
            k = n ? d(t, x) : u ? d(t, 0) : void 0;
          x > w;
          w++
        )
          if ((p || w in y) && ((g = y[w]), (v = b(g, w, m)), e))
            if (n) k[w] = v;
            else if (v)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return w;
                case 2:
                  k.push(g);
              }
            else if (l) return !1;
        return f ? -1 : c || l ? l : k;
      };
    };
  },
  "0bfb": function (e, t, n) {
    "use strict";
    var r = n("cb7c");
    e.exports = function () {
      var e = r(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  "0d58": function (e, t, n) {
    var r = n("ce10"),
      i = n("e11e");
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  "0d83": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    n("ac6a");
    var r = n("cdba"),
      i = n("104e"),
      o = (function () {
        function e() {
          var t = this;
          Object(r["a"])(this, e),
            (this.DEBUG_ENABLED = !1),
            (this.DEBUG_INITIALIZED = !1),
            (this.DEBUG_STACK = []),
            (this.source = "-"),
            (this.startTime = new Date().getTime()),
            (this.timeLastMessage = 0),
            chrome.storage.local.get(["debugEnabled"], function (e) {
              (t.DEBUG_ENABLED = e.debugEnabled), (t.DEBUG_INITIALIZED = !0);
            }),
            chrome.storage.onChanged.addListener(function (e) {
              e.debugEnabled && (t.DEBUG_ENABLED = e.debugEnabled.newValue);
            });
        }
        return (
          Object(i["a"])(e, [
            {
              key: "setSource",
              value: function (e) {
                "-" === this.source && (this.source = e);
              },
            },
            {
              key: "echo",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "info";
                switch (n) {
                  case "error":
                    console.error("🔥🔥🔥 ".concat(e), t);
                    break;
                  case "warn":
                    console.warn("🔥🔥🔥 ".concat(e), t);
                    break;
                  case "info":
                    console.info("🔥🔥🔥 ".concat(e), t);
                    break;
                  default:
                    console.log("🔥🔥🔥 ".concat(e), t);
                }
              },
            },
            {
              key: "dumpStack",
              value: function () {
                var e = this;
                this.DEBUG_ENABLED &&
                  this.DEBUG_STACK.length &&
                  (this.DEBUG_STACK.forEach(function (t) {
                    e.echo(t.message, t.data, t.level);
                  }),
                  (this.DEBUG_STACK = []));
              },
            },
            {
              key: "log",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "info",
                  r = new Date().getTime() - this.startTime,
                  i = r - this.timeLastMessage;
                this.timeLastMessage = r;
                var o = "["
                  .concat(this.source, "] ")
                  .concat(r, "ms (+")
                  .concat(i, "): ");
                this.DEBUG_ENABLED
                  ? (this.dumpStack(), this.echo("".concat(o).concat(e), t, n))
                  : this.DEBUG_INITIALIZED ||
                    this.DEBUG_STACK.push({
                      message: "".concat(o).concat(e),
                      data: t,
                      level: n,
                    });
              },
            },
            {
              key: "getTime",
              value: function () {
                return new Date().getTime() - this.startTime;
              },
            },
          ]),
          e
        );
      })(),
      a = new o();
  },
  "104e": function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function i(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  1157: function (e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    (function (t, n) {
      "use strict";
      "object" === typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" !== typeof window ? window : this, function (n, o) {
      "use strict";
      var a = [],
        s = n.document,
        u = Object.getPrototypeOf,
        c = a.slice,
        l = a.concat,
        f = a.push,
        p = a.indexOf,
        d = {},
        h = d.toString,
        g = d.hasOwnProperty,
        v = g.toString,
        m = v.call(Object),
        y = {},
        b = function (e) {
          return "function" === typeof e && "number" !== typeof e.nodeType;
        },
        x = function (e) {
          return null != e && e === e.window;
        },
        w = { type: !0, src: !0, noModule: !0 };
      function k(e, t, n) {
        t = t || s;
        var r,
          i = t.createElement("script");
        if (((i.text = e), n)) for (r in w) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" === typeof e || "function" === typeof e
          ? d[h.call(e)] || "object"
          : typeof e;
      }
      var E = "3.3.1",
        C = function (e, t) {
          return new C.fn.init(e, t);
        },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function A(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !b(e) &&
          !x(e) &&
          ("array" === n ||
            0 === t ||
            ("number" === typeof t && t > 0 && t - 1 in e))
        );
      }
      (C.fn = C.prototype =
        {
          jquery: E,
          constructor: C,
          length: 0,
          toArray: function () {
            return c.call(this);
          },
          get: function (e) {
            return null == e
              ? c.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(c.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: f,
          sort: a.sort,
          splice: a.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              c = !1;
            for (
              "boolean" === typeof a &&
                ((c = a), (a = arguments[s] || {}), s++),
                "object" === typeof a || b(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (n = a[t]),
                    (r = e[t]),
                    a !== r &&
                      (c && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
                        ? (i
                            ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && C.isPlainObject(n) ? n : {}),
                          (a[t] = C.extend(c, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        C.extend({
          expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== h.call(e)) &&
              ((t = u(e)),
              !t ||
                ((n = g.call(t, "constructor") && t.constructor),
                "function" === typeof n && v.call(n) === m))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e) {
            k(e);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (A(e)) {
              for (n = e.length; r < n; r++)
                if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(S, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (A(Object(e))
                  ? C.merge(n, "string" === typeof e ? [e] : e)
                  : f.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : p.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
              (r = !t(e[o], o)), r !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (A(e))
              for (r = e.length; o < r; o++)
                (i = t(e[o], o, n)), null != i && a.push(i);
            else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
            return l.apply([], a);
          },
          guid: 1,
          support: y,
        }),
        "function" === typeof Symbol &&
          (C.fn[Symbol.iterator] = a[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var j =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            k = 0,
            T = 0,
            E = ae(),
            C = ae(),
            S = ae(),
            A = function (e, t) {
              return e === t && (f = !0), 0;
            },
            j = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            N = D.push,
            O = D.push,
            _ = D.slice,
            I = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            P =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            B =
              "\\[" +
              q +
              "*(" +
              M +
              ")(?:" +
              q +
              "*([*^$|!~]?=)" +
              q +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              q +
              "*\\]",
            H =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              B +
              ")*)|.*)\\)|)",
            R = new RegExp(q + "+", "g"),
            F = new RegExp(
              "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
              "g"
            ),
            $ = new RegExp("^" + q + "*," + q + "*"),
            W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            U = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
            z = new RegExp(H),
            G = new RegExp("^" + M + "$"),
            V = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + H),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  q +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  q +
                  "*(?:([+-]|)" +
                  q +
                  "*(\\d+)|))" +
                  q +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  q +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  q +
                  "*((?:-\\d)?\\d*)" +
                  q +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            X = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            ee = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            re = function () {
              p();
            },
            ie = ye(
              function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((D = _.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: D.length
                ? function (e, t) {
                    N.apply(e, _.call(t));
                  }
                : function (e, t) {
                    var n = e.length,
                      r = 0;
                    while ((e[n++] = t[r++]));
                    e.length = n - 1;
                  },
            };
          }
          function oe(e, t, r, i) {
            var o,
              s,
              c,
              l,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              k = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" !== typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
            ) {
              if (11 !== k && (f = Q.exec(e)))
                if ((o = f[1])) {
                  if (9 === k) {
                    if (!(c = t.getElementById(o))) return r;
                    if (c.id === o) return r.push(c), r;
                  } else if (
                    y &&
                    (c = y.getElementById(o)) &&
                    b(t, c) &&
                    c.id === o
                  )
                    return r.push(c), r;
                } else {
                  if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                if (1 !== k) (y = t), (m = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  (l = t.getAttribute("id"))
                    ? (l = l.replace(te, ne))
                    : t.setAttribute("id", (l = x)),
                    (h = a(e)),
                    (s = h.length);
                  while (s--) h[s] = "#" + l + " " + me(h[s]);
                  (m = h.join(",")), (y = (J.test(e) && ge(t.parentNode)) || t);
                }
                if (m)
                  try {
                    return O.apply(r, y.querySelectorAll(m)), r;
                  } catch (e) {
                  } finally {
                    l === x && t.removeAttribute("id");
                  }
              }
            }
            return u(e.replace(F, "$1"), t, r, i);
          }
          function ae() {
            var e = [];
            function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            }
            return t;
          }
          function se(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ce(e, t) {
            var n = e.split("|"),
              i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
          }
          function le(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function pe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function de(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function he(e) {
            return se(function (t) {
              return (
                (t = +t),
                se(function (n, r) {
                  var i,
                    o = e([], n.length, t),
                    a = o.length;
                  while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ge(e) {
            return e && "undefined" !== typeof e.getElementsByTagName && e;
          }
          for (t in ((n = oe.support = {}),
          (o = oe.isXML =
            function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
            }),
          (p = oe.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a !== d && 9 === a.nodeType && a.documentElement
                ? ((d = a),
                  (h = d.documentElement),
                  (g = !o(d)),
                  w !== d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", re, !1)
                      : i.attachEvent && i.attachEvent("onunload", re)),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !d.getElementsByName || !d.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((r.filter["ID"] = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find["ID"] = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter["ID"] = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          var n =
                            "undefined" !== typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find["ID"] = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if (
                              ((n = o.getAttributeNode("id")),
                              n && n.value === e)
                            )
                              return [o];
                            (i = t.getElementsByName(e)), (r = 0);
                            while ((o = i[r++]))
                              if (
                                ((n = o.getAttributeNode("id")),
                                n && n.value === e)
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find["TAG"] = n.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" !== typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find["CLASS"] =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" !== typeof t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = Y.test(d.querySelectorAll)) &&
                    (ue(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + q + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + q + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          v.push(".#.+[+~]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + q + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = Y.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", H);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = Y.test(h.compareDocumentPosition)),
                  (b =
                    t || Y.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            while ((t = t.parentNode)) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          ((r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & r ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === d || (e.ownerDocument === w && b(w, e))
                              ? -1
                              : t === d || (t.ownerDocument === w && b(w, t))
                              ? 1
                              : l
                              ? I(l, e) - I(l, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e === d
                            ? -1
                            : t === d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : l
                            ? I(l, e) - I(l, t)
                            : 0;
                        if (i === o) return le(e, t);
                        n = e;
                        while ((n = n.parentNode)) a.unshift(n);
                        n = t;
                        while ((n = n.parentNode)) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r
                          ? le(a[r], s[r])
                          : a[r] === w
                          ? -1
                          : s[r] === w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (oe.matches = function (e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== d && p(e),
              (t = t.replace(U, "='$1']")),
              n.matchesSelector &&
                g &&
                !S[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {}
            return oe(t, d, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), b(e, t);
          }),
          (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && j.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (oe.escape = function (e) {
            return (e + "").replace(te, ne);
          }),
          (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              while ((t = e[o++])) t === e[o] && (i = r.push(o));
              while (i--) e.splice(r[i], 1);
            }
            return (l = null), e;
          }),
          (i = oe.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" === typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else while ((t = e[r++])) n += i(t);
              return n;
            }),
          (r = oe.selectors =
            {
              cacheLength: 50,
              createPseudo: se,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(Z, ee)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || oe.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && oe.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return V["CHILD"].test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          z.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = E[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                      E(e, function (e) {
                        return t.test(
                          ("string" === typeof e.className && e.className) ||
                            ("undefined" !== typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = oe.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var c,
                          l,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !u && !s,
                          b = !1;
                        if (v) {
                          if (o) {
                            while (g) {
                              p = t;
                              while ((p = p[g]))
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            (p = v),
                              (f = p[x] || (p[x] = {})),
                              (l = f[p.uniqueID] || (f[p.uniqueID] = {})),
                              (c = l[e] || []),
                              (d = c[0] === k && c[1]),
                              (b = d && c[2]),
                              (p = d && v.childNodes[d]);
                            while (
                              (p = (++d && p && p[g]) || (b = d = 0) || h.pop())
                            )
                              if (1 === p.nodeType && ++b && p === t) {
                                l[e] = [k, d, b];
                                break;
                              }
                          } else if (
                            (y &&
                              ((p = t),
                              (f = p[x] || (p[x] = {})),
                              (l = f[p.uniqueID] || (f[p.uniqueID] = {})),
                              (c = l[e] || []),
                              (d = c[0] === k && c[1]),
                              (b = d)),
                            !1 === b)
                          )
                            while (
                              (p = (++d && p && p[g]) || (b = d = 0) || h.pop())
                            )
                              if (
                                (s
                                  ? p.nodeName.toLowerCase() === m
                                  : 1 === p.nodeType) &&
                                ++b &&
                                (y &&
                                  ((f = p[x] || (p[x] = {})),
                                  (l = f[p.uniqueID] || (f[p.uniqueID] = {})),
                                  (l[e] = [k, b])),
                                p === t)
                              )
                                break;
                          return (
                            (b -= i), b === r || (b % r === 0 && b / r >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      oe.error("unsupported pseudo: " + e);
                  return i[x]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function (e, n) {
                            var r,
                              o = i(e, t),
                              a = o.length;
                            while (a--)
                              (r = I(e, o[a])), (e[r] = !(n[r] = o[a]));
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: se(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(F, "$1"));
                  return r[x]
                    ? se(function (e, t, n, i) {
                        var o,
                          a = r(e, null, i, []),
                          s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: se(function (e) {
                  return function (t) {
                    return oe(e, t).length > 0;
                  };
                }),
                contains: se(function (e) {
                  return (
                    (e = e.replace(Z, ee)),
                    function (t) {
                      return (
                        (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                      );
                    }
                  );
                }),
                lang: se(function (e) {
                  return (
                    G.test(e || "") || oe.error("unsupported lang: " + e),
                    (e = e.replace(Z, ee).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()),
                            n === e || 0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos["empty"](e);
                },
                header: function (e) {
                  return K.test(e.nodeName);
                },
                input: function (e) {
                  return X.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: he(function () {
                  return [0];
                }),
                last: he(function (e, t) {
                  return [t - 1];
                }),
                eq: he(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: he(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (r.pseudos["nth"] = r.pseudos["eq"]),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
          function ve() {}
          function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function ye(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = T++;
            return t.first
              ? function (t, n, i) {
                  while ((t = t[r]))
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var c,
                    l,
                    f,
                    p = [k, s];
                  if (u) {
                    while ((t = t[r]))
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    while ((t = t[r]))
                      if (1 === t.nodeType || a)
                        if (
                          ((f = t[x] || (t[x] = {})),
                          (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((c = l[o]) && c[0] === k && c[1] === s)
                            return (p[2] = c[2]);
                          if (((l[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function be(e) {
            return e.length > 1
              ? function (t, n, r) {
                  var i = e.length;
                  while (i--) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function xe(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
          }
          function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
            return a;
          }
          function ke(e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = ke(r)),
              i && !i[x] && (i = ke(i, o)),
              se(function (o, a, s, u) {
                var c,
                  l,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g = o || xe(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : we(g, p, e, s, u),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, u), r)) {
                  (c = we(m, d)), r(c, [], s, u), (l = c.length);
                  while (l--) (f = c[l]) && (m[d[l]] = !(v[d[l]] = f));
                }
                if (o) {
                  if (i || e) {
                    if (i) {
                      (c = []), (l = m.length);
                      while (l--) (f = m[l]) && c.push((v[l] = f));
                      i(null, (m = []), c, u);
                    }
                    l = m.length;
                    while (l--)
                      (f = m[l]) &&
                        (c = i ? I(o, f) : p[l]) > -1 &&
                        (o[c] = !(a[c] = f));
                  }
                } else (m = we(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : O.apply(a, m);
              })
            );
          }
          function Te(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                l = ye(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = ye(
                  function (e) {
                    return I(t, e) > -1;
                  },
                  s,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== c)) ||
                      ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) p = [ye(be(p), n)];
              else {
                if (
                  ((n = r.filter[e[u].type].apply(null, e[u].matches)), n[x])
                ) {
                  for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                  return ke(
                    u > 1 && be(p),
                    u > 1 &&
                      me(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(F, "$1"),
                    n,
                    u < i && Te(e.slice(u, i)),
                    i < o && Te((e = e.slice(i))),
                    i < o && me(e)
                  );
                }
                p.push(n);
              }
            return be(p);
          }
          function Ee(e, t) {
            var n = t.length > 0,
              i = e.length > 0,
              o = function (o, a, s, u, l) {
                var f,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  b = o && [],
                  x = [],
                  w = c,
                  T = o || (i && r.find["TAG"]("*", l)),
                  E = (k += null == w ? 1 : Math.random() || 0.1),
                  C = T.length;
                for (
                  l && (c = a === d || a || l);
                  y !== C && null != (f = T[y]);
                  y++
                ) {
                  if (i && f) {
                    (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                    while ((v = e[h++]))
                      if (v(f, a || d, s)) {
                        u.push(f);
                        break;
                      }
                    l && (k = E);
                  }
                  n && ((f = !v && f) && m--, o && b.push(f));
                }
                if (((m += y), n && y !== m)) {
                  h = 0;
                  while ((v = t[h++])) v(b, x, a, s);
                  if (o) {
                    if (m > 0) while (y--) b[y] || x[y] || (x[y] = L.call(u));
                    x = we(x);
                  }
                  O.apply(u, x),
                    l &&
                      !o &&
                      x.length > 0 &&
                      m + t.length > 1 &&
                      oe.uniqueSort(u);
                }
                return l && ((k = E), (c = w)), b;
              };
            return n ? se(o) : o;
          }
          return (
            (ve.prototype = r.filters = r.pseudos),
            (r.setFilters = new ve()),
            (a = oe.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l = C[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (s = e), (u = []), (c = r.preFilter);
                while (s) {
                  for (a in ((n && !(i = $.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = W.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(F, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = V[a].exec(s)) ||
                      (c[a] && !(i = c[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : C(e, u).slice(0);
              }),
            (s = oe.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  o = S[e + " "];
                if (!o) {
                  t || (t = a(e)), (n = t.length);
                  while (n--) (o = Te(t[n])), o[x] ? r.push(o) : i.push(o);
                  (o = S(e, Ee(i, r))), (o.selector = e);
                }
                return o;
              }),
            (u = oe.select =
              function (e, t, n, i) {
                var o,
                  u,
                  c,
                  l,
                  f,
                  p = "function" === typeof e && e,
                  d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    ((u = d[0] = d[0].slice(0)),
                    u.length > 2 &&
                      "ID" === (c = u[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[u[1].type])
                  ) {
                    if (
                      ((t = (r.find["ID"](c.matches[0].replace(Z, ee), t) ||
                        [])[0]),
                      !t)
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  o = V["needsContext"].test(e) ? 0 : u.length;
                  while (o--) {
                    if (((c = u[o]), r.relative[(l = c.type)])) break;
                    if (
                      (f = r.find[l]) &&
                      (i = f(
                        c.matches[0].replace(Z, ee),
                        (J.test(u[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), (e = i.length && me(u)), !e))
                        return O.apply(n, i), n;
                      break;
                    }
                  }
                }
                return (
                  (p || s(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (J.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(A).join("") === x),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ce("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ce("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ce(P, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            oe
          );
        })(n);
      (C.find = j),
        (C.expr = j.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = j.uniqueSort),
        (C.text = j.getText),
        (C.isXMLDoc = j.isXML),
        (C.contains = j.contains),
        (C.escapeSelector = j.escape);
      var D = function (e, t, n) {
          var r = [],
            i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
              if (i && C(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        L = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        N = C.expr.match.needsContext;
      function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(e, t, n) {
        return b(t)
          ? C.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" !== typeof t
          ? C.grep(e, function (e) {
              return p.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" !== typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
            return r > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(I(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(I(this, e || [], !0));
          },
          is: function (e) {
            return !!I(
              this,
              "string" === typeof e && N.test(e) ? C(e) : e || [],
              !1
            ).length;
          },
        });
      var P,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        M = (C.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || P), "string" === typeof e)) {
            if (
              ((r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : q.exec(e)),
              !r || (!r[1] && t))
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof C ? t[0] : t),
                C.merge(
                  this,
                  C.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : s,
                    !0
                  )
                ),
                _.test(r[1]) && C.isPlainObject(t))
              )
                for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = s.getElementById(r[2])),
              i && ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : b(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(C)
            : C.makeArray(e, this);
        });
      (M.prototype = C.fn), (P = C(s));
      var B = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" !== typeof e && C(e);
          if (!N.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" === typeof e
              ? p.call(C(e), this[0])
              : p.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return D(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return D(e, "parentNode", n);
            },
            next: function (e) {
              return R(e, "nextSibling");
            },
            prev: function (e) {
              return R(e, "previousSibling");
            },
            nextAll: function (e) {
              return D(e, "nextSibling");
            },
            prevAll: function (e) {
              return D(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return D(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return D(e, "previousSibling", n);
            },
            siblings: function (e) {
              return L((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return L(e.firstChild);
            },
            contents: function (e) {
              return O(e, "iframe")
                ? e.contentDocument
                : (O(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            },
          },
          function (e, t) {
            C.fn[e] = function (n, r) {
              var i = C.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" === typeof r && (i = C.filter(r, i)),
                this.length > 1 &&
                  (H[e] || C.uniqueSort(i), B.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var F = /[^\x20\t\r\n\f]+/g;
      function $(e) {
        var t = {};
        return (
          C.each(e.match(F) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function W(e) {
        return e;
      }
      function U(e) {
        throw e;
      }
      function z(e, t, n, r) {
        var i;
        try {
          e && b((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && b((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (e) {
        e = "string" === typeof e ? $(e) : C.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
              n = a.shift();
              while (++s < o.length)
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            }
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    C.each(n, function (n, r) {
                      b(r)
                        ? (e.unique && c.has(r)) || o.push(r)
                        : r && r.length && "string" !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  var n;
                  while ((n = C.inArray(t, o, n)) > -1)
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = n || []),
                  (n = [e, n.slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return c;
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return C.Deferred(function (n) {
                    C.each(t, function (t, r) {
                      var i = b(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && b(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function () {
                      var s = this,
                        u = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < o)) {
                            if (((n = r.apply(s, u)), n === t.promise()))
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" === typeof n ||
                                "function" === typeof n) &&
                              n.then),
                              b(c)
                                ? i
                                  ? c.call(n, a(o, t, W, i), a(o, t, U, i))
                                  : (o++,
                                    c.call(
                                      n,
                                      a(o, t, W, i),
                                      a(o, t, U, i),
                                      a(o, t, W, t.notifyWith)
                                    ))
                                : (r !== W && ((s = void 0), (u = [n])),
                                  (i || t.resolveWith)(s, u));
                          }
                        },
                        l = i
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= o &&
                                    (r !== U && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? l()
                        : (C.Deferred.getStackHook &&
                            (l.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(a(0, n, b(i) ? i : W, n.notifyWith)),
                      t[1][3].add(a(0, n, b(e) ? e : W)),
                      t[2][3].add(a(0, n, b(r) ? r : U));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, i) : i;
                },
              },
              o = {};
            return (
              C.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = c.call(arguments),
              o = C.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? c.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (z(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || b(i[n] && i[n].then))
            )
              return o.then();
            while (n--) z(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          G.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var V = C.Deferred();
      function X() {
        s.removeEventListener("DOMContentLoaded", X),
          n.removeEventListener("load", X),
          C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          V.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || V.resolveWith(s, [C]));
          },
        }),
        (C.ready.then = V.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (s.addEventListener("DOMContentLoaded", X),
            n.addEventListener("load", X));
      var K = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            c = null == n;
          if ("object" === T(n))
            for (s in ((i = !0), n)) K(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            b(r) || (a = !0),
            c &&
              (a
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(C(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
        },
        Y = /^-ms-/,
        Q = /-([a-z])/g;
      function J(e, t) {
        return t.toUpperCase();
      }
      function Z(e) {
        return e.replace(Y, "ms-").replace(Q, J);
      }
      var ee = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function te() {
        this.expando = C.expando + te.uid++;
      }
      (te.uid = 1),
        (te.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                ee(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" === typeof t) i[Z(t)] = n;
            else for (r in t) i[Z(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Z(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" === typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                Array.isArray(t)
                  ? (t = t.map(Z))
                  : ((t = Z(t)), (t = t in r ? [t] : t.match(F) || [])),
                  (n = t.length);
                while (n--) delete r[t[n]];
              }
              (void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          },
        });
      var ne = new te(),
        re = new te(),
        ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        oe = /[A-Z]/g;
      function ae(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            ("null" === e
              ? null
              : e === +e + ""
              ? +e
              : ie.test(e)
              ? JSON.parse(e)
              : e))
        );
      }
      function se(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(oe, "-$&").toLowerCase()),
            (n = e.getAttribute(r)),
            "string" === typeof n)
          ) {
            try {
              n = ae(n);
            } catch (e) {}
            re.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return re.hasData(e) || ne.hasData(e);
        },
        data: function (e, t, n) {
          return re.access(e, t, n);
        },
        removeData: function (e, t) {
          re.remove(e, t);
        },
        _data: function (e, t, n) {
          return ne.access(e, t, n);
        },
        _removeData: function (e, t) {
          ne.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = re.get(o)),
                1 === o.nodeType && !ne.get(o, "hasDataAttrs"))
              ) {
                n = a.length;
                while (n--)
                  a[n] &&
                    ((r = a[n].name),
                    0 === r.indexOf("data-") &&
                      ((r = Z(r.slice(5))), se(o, r, i[r])));
                ne.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" === typeof e
              ? this.each(function () {
                  re.set(this, e);
                })
              : K(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return (
                        (n = re.get(o, e)),
                        void 0 !== n
                          ? n
                          : ((n = se(o, e)), void 0 !== n ? n : void 0)
                      );
                    this.each(function () {
                      re.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              re.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = ne.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = ne.access(e, t, C.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = C._queueHooks(e, t),
              a = function () {
                C.dequeue(e, t);
              };
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, a, o)),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              ne.get(e, n) ||
              ne.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                  ne.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" !== typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = C.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            "string" !== typeof e && ((t = e), (e = void 0)), (e = e || "fx");
            while (a--)
              (n = ne.get(o[a], e + "queueHooks")),
                n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ce = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
        le = ["Top", "Right", "Bottom", "Left"],
        fe = function (e, t) {
          return (
            (e = t || e),
            "none" === e.style.display ||
              ("" === e.style.display &&
                C.contains(e.ownerDocument, e) &&
                "none" === C.css(e, "display"))
          );
        },
        pe = function (e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
        };
      function de(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return C.css(e, t, "");
              },
          u = s(),
          c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          l = (C.cssNumber[t] || ("px" !== c && +u)) && ce.exec(C.css(e, t));
        if (l && l[3] !== c) {
          (u /= 2), (c = c || l[3]), (l = +u || 1);
          while (a--)
            C.style(e, t, l + c),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (l /= o);
          (l *= 2), C.style(e, t, l + c), (n = n || []);
        }
        return (
          n &&
            ((l = +l || +u || 0),
            (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = l), (r.end = i))),
          i
        );
      }
      var he = {};
      function ge(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = he[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = C.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (he[r] = i),
          i)
        );
      }
      function ve(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]),
            r.style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = ne.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && fe(r) && (i[o] = ge(r)))
                : "none" !== n && ((i[o] = "none"), ne.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return ve(this, !0);
        },
        hide: function () {
          return ve(this);
        },
        toggle: function (e) {
          return "boolean" === typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                fe(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var me = /^(?:checkbox|radio)$/i,
        ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        be = /^$|^module$|\/(?:java|ecma)script/i,
        xe = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function we(e, t) {
        var n;
        return (
          (n =
            "undefined" !== typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" !== typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && O(e, t)) ? C.merge([e], n) : n
        );
      }
      function ke(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          ne.set(e[n], "globalEval", !t || ne.get(t[n], "globalEval"));
      }
      (xe.optgroup = xe.option),
        (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
        (xe.th = xe.td);
      var Te = /<|&#?\w+;/;
      function Ee(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            c,
            l,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if (((o = e[d]), o || 0 === o))
            if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);
            else if (Te.test(o)) {
              (a = a || f.appendChild(t.createElement("div"))),
                (s = (ye.exec(o) || ["", ""])[1].toLowerCase()),
                (u = xe[s] || xe._default),
                (a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2]),
                (l = u[0]);
              while (l--) a = a.lastChild;
              C.merge(p, a.childNodes),
                (a = f.firstChild),
                (a.textContent = "");
            } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
          if (r && C.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((c = C.contains(o.ownerDocument, o)),
            (a = we(f.appendChild(o), "script")),
            c && ke(a),
            n)
          ) {
            l = 0;
            while ((o = a[l++])) be.test(o.type || "") && n.push(o);
          }
        return f;
      }
      (function () {
        var e = s.createDocumentFragment(),
          t = e.appendChild(s.createElement("div")),
          n = s.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
      })();
      var Ce = s.documentElement,
        Se = /^key/,
        Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        je = /^([^.]*)(?:\.(.+)|)/;
      function De() {
        return !0;
      }
      function Le() {
        return !1;
      }
      function Ne() {
        try {
          return s.activeElement;
        } catch (e) {}
      }
      function Oe(e, t, n, r, i, o) {
        var a, s;
        if ("object" === typeof t) {
          for (s in ("string" !== typeof n && ((r = r || n), (n = void 0)), t))
            Oe(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" === typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Le;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            (i = function (e) {
              return C().off(e), a.apply(this, arguments);
            }),
            (i.guid = a.guid || (a.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, i, r, n);
          })
        );
      }
      (C.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h,
            g,
            v = ne.get(e);
          if (v) {
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              i && C.find.matchesSelector(Ce, i),
              n.guid || (n.guid = C.guid++),
              (u = v.events) || (u = v.events = {}),
              (a = v.handle) ||
                (a = v.handle =
                  function (t) {
                    return "undefined" !== typeof C &&
                      C.event.triggered !== t.type
                      ? C.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              (t = (t || "").match(F) || [""]),
              (c = t.length);
            while (c--)
              (s = je.exec(t[c]) || []),
                (d = g = s[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = C.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = C.event.special[d] || {}),
                  (l = C.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && C.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = u[d]) ||
                    ((p = u[d] = []),
                    (p.delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                  (C.event.global[d] = !0));
          }
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            d,
            h,
            g,
            v = ne.hasData(e) && ne.get(e);
          if (v && (u = v.events)) {
            (t = (t || "").match(F) || [""]), (c = t.length);
            while (c--)
              if (
                ((s = je.exec(t[c]) || []),
                (d = g = s[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                (f = C.event.special[d] || {}),
                  (d = (r ? f.delegateType : f.bindType) || d),
                  (p = u[d] || []),
                  (s =
                    s[2] &&
                    new RegExp(
                      "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )),
                  (a = o = p.length);
                while (o--)
                  (l = p[o]),
                    (!i && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (s && !s.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (p.splice(o, 1),
                      l.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, l));
                a &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    C.removeEvent(e, d, v.handle),
                  delete u[d]);
              } else for (d in u) C.event.remove(e, d + t[c], n, r, !0);
            C.isEmptyObject(u) && ne.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = C.event.fix(e),
            u = new Array(arguments.length),
            c = (ne.get(this, "events") || {})[s.type] || [],
            l = C.event.special[s.type] || {};
          for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, s))
          ) {
            (a = C.event.handlers.call(this, s, c)), (t = 0);
            while ((i = a[t++]) && !s.isPropagationStopped()) {
              (s.currentTarget = i.elem), (n = 0);
              while (
                (o = i.handlers[n++]) &&
                !s.isImmediatePropagationStopped()
              )
                (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  (r = (
                    (C.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, u)),
                  void 0 !== r &&
                    !1 === (s.result = r) &&
                    (s.preventDefault(), s.stopPropagation()));
            }
            return l.postDispatch && l.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            c = e.target;
          if (u && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  (r = t[n]),
                    (i = r.selector + " "),
                    void 0 === a[i] &&
                      (a[i] = r.needsContext
                        ? C(i, this).index(c) > -1
                        : C.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: b(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== Ne() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === Ne() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && O(this, "input"))
                return this.click(), !1;
            },
            _default: function (e) {
              return O(e.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? De
                  : Le),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: Le,
          isPropagationStopped: Le,
          isImmediatePropagationStopped: Le,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = De),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = De),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = De),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Se.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ae.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          C.event.addProp
        ),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || C.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (e, t, n, r) {
            return Oe(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Oe(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" === typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" !== typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Le),
              this.each(function () {
                C.event.remove(this, e, n, t);
              })
            );
          },
        });
      var _e =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Me(e, t) {
        return (
          (O(e, "table") &&
            O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function Be(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function He(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Re(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
          if (
            ne.hasData(e) &&
            ((o = ne.access(e)), (a = ne.set(t, o)), (c = o.events), c)
          )
            for (i in (delete a.handle, (a.events = {}), c))
              for (n = 0, r = c[i].length; n < r; n++)
                C.event.add(t, i, c[i][n]);
          re.hasData(e) &&
            ((s = re.access(e)), (u = C.extend({}, s)), re.set(t, u));
        }
      }
      function Fe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function $e(e, t, n, r) {
        t = l.apply([], t);
        var i,
          o,
          a,
          s,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = b(h);
        if (
          g ||
          (p > 1 && "string" === typeof h && !y.checkClone && Pe.test(h))
        )
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), $e(o, t, n, r);
          });
        if (
          p &&
          ((i = Ee(t, e[0].ownerDocument, !1, e, r)),
          (o = i.firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = C.map(we(i, "script"), Be), s = a.length; f < p; f++)
            (u = i),
              f !== d &&
                ((u = C.clone(u, !0, !0)), s && C.merge(a, we(u, "script"))),
              n.call(e[f], u, f);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, C.map(a, He), f = 0;
              f < s;
              f++
            )
              (u = a[f]),
                be.test(u.type || "") &&
                  !ne.access(u, "globalEval") &&
                  C.contains(c, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? C._evalUrl && C._evalUrl(u.src)
                    : k(u.textContent.replace(qe, ""), c, u));
        }
        return e;
      }
      function We(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || C.cleanData(we(r)),
            r.parentNode &&
              (n && C.contains(r.ownerDocument, r) && ke(we(r, "script")),
              r.parentNode.removeChild(r));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e.replace(_e, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = C.contains(e.ownerDocument, e);
          if (
            !y.noCloneChecked &&
            (1 === e.nodeType || 11 === e.nodeType) &&
            !C.isXMLDoc(e)
          )
            for (a = we(s), o = we(e), r = 0, i = o.length; r < i; r++)
              Fe(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || we(e), a = a || we(s), r = 0, i = o.length;
                r < i;
                r++
              )
                Re(o[r], a[r]);
            else Re(e, s);
          return (
            (a = we(s, "script")),
            a.length > 0 && ke(a, !u && we(e, "script")),
            s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (ee(n)) {
              if ((t = n[ne.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                n[ne.expando] = void 0;
              }
              n[re.expando] && (n[re.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return We(this, e, !0);
          },
          remove: function (e) {
            return We(this, e);
          },
          text: function (e) {
            return K(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return $e(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Me(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return $e(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Me(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return $e(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return $e(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(we(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return K(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" === typeof e &&
                  !Ie.test(e) &&
                  !xe[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (C.cleanData(we(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return $e(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 &&
                  (C.cleanData(we(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (
                var n, r = [], i = C(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  C(i[a])[t](n),
                  f.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Ue = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
        ze = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ge = new RegExp(le.join("|"), "i");
      function Ve(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || ze(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            "" !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)),
            !y.pixelBoxStyles() &&
              Ue.test(a) &&
              Ge.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      (function () {
        function e() {
          if (l) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (l.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Ce.appendChild(c).appendChild(l);
            var e = n.getComputedStyle(l);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (o = 36 === l.offsetWidth || "absolute"),
              Ce.removeChild(c),
              (l = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          u,
          c = s.createElement("div"),
          l = s.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
          C.extend(y, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), o;
            },
          }));
      })();
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Qe = { position: "absolute", visibility: "hidden", display: "block" },
        Je = { letterSpacing: "0", fontWeight: "400" },
        Ze = ["Webkit", "Moz", "ms"],
        et = s.createElement("div").style;
      function tt(e) {
        if (e in et) return e;
        var t = e[0].toUpperCase() + e.slice(1),
          n = Ze.length;
        while (n--) if (((e = Ze[n] + t), e in et)) return e;
      }
      function nt(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = tt(e) || e), t;
      }
      function rt(e, t, n) {
        var r = ce.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += C.css(e, n + le[a], !0, i)),
            r
              ? ("content" === n && (u -= C.css(e, "padding" + le[a], !0, i)),
                "margin" !== n &&
                  (u -= C.css(e, "border" + le[a] + "Width", !0, i)))
              : ((u += C.css(e, "padding" + le[a], !0, i)),
                "padding" !== n
                  ? (u += C.css(e, "border" + le[a] + "Width", !0, i))
                  : (s += C.css(e, "border" + le[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u += Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            )),
          u
        );
      }
      function ot(e, t, n) {
        var r = ze(e),
          i = Ve(e, t, r),
          o = "border-box" === C.css(e, "boxSizing", !1, r),
          a = o;
        if (Ue.test(i)) {
          if (!n) return i;
          i = "auto";
        }
        return (
          (a = a && (y.boxSizingReliable() || i === e.style[t])),
          ("auto" === i ||
            (!parseFloat(i) && "inline" === C.css(e, "display", !1, r))) &&
            ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (i = parseFloat(i) || 0),
          i + it(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
      }
      function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ve(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = Z(t),
              u = Ye.test(t),
              c = e.style;
            if (
              (u || (t = nt(s)),
              (a = C.cssHooks[t] || C.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : c[t];
            (o = typeof n),
              "string" === o &&
                (i = ce.exec(n)) &&
                i[1] &&
                ((n = de(e, t, i)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (C.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = Z(t),
            u = Ye.test(t);
          return (
            u || (t = nt(s)),
            (a = C.cssHooks[t] || C.cssHooks[s]),
            a && "get" in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Ve(e, t, r)),
            "normal" === i && t in Je && (i = Je[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        C.each(["height", "width"], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ke.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : pe(e, Qe, function () {
                      return ot(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = ze(e),
                a = "border-box" === C.css(e, "boxSizing", !1, o),
                s = r && it(e, t, r, a, o);
              return (
                a &&
                  y.scrollboxSize() === o.position &&
                  (s -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      it(e, t, "border", !1, o) -
                      0.5
                  )),
                s &&
                  (i = ce.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                rt(e, n, s)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  pe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (C.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" === typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + le[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (C.cssHooks[e + t].set = rt);
        }),
        C.fn.extend({
          css: function (e, t) {
            return K(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = ze(e), i = t.length; a < i; a++)
                    o[t[a]] = C.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = at.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            );
          },
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : ((t = C.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[C.cssProps[e.prop]] &&
                    !C.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (C.fx = at.prototype.init),
        (C.fx.step = {});
      var st,
        ut,
        ct = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ft() {
        ut &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, C.fx.interval),
          C.fx.tick());
      }
      function pt() {
        return (
          n.setTimeout(function () {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          (n = le[r]), (i["margin" + n] = i["padding" + n] = e);
        return t && (i.opacity = i.width = e), i;
      }
      function ht(e, t, n) {
        for (
          var r,
            i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function gt(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && fe(e),
          v = ne.get(e, "fxshow");
        for (r in (n.queue ||
          ((a = C._queueHooks(e, "fx")),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ct.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || C.style(e, r);
          }
        if (((u = !C.isEmptyObject(t)), u || !C.isEmptyObject(d)))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            (c = v && v.display),
            null == c && (c = ne.get(e, "display")),
            (l = C.css(e, "display")),
            "none" === l &&
              (c
                ? (l = c)
                : (ve([e], !0),
                  (c = e.style.display || c),
                  (l = C.css(e, "display")),
                  ve([e]))),
            ("inline" === l || ("inline-block" === l && null != c)) &&
              "none" === C.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((l = h.display), (c = "none" === l ? "" : l))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = ne.access(e, "fxshow", { display: c })),
              o && (v.hidden = !g),
              g && ve([e], !0),
              p.done(function () {
                for (r in (g || ve([e]), ne.remove(e, "fxshow"), d))
                  C.style(e, r, d[r]);
              })),
              (u = ht(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
      function vt(e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((r = Z(n)),
            (i = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = C.cssHooks[r]),
            a && "expand" in a)
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              n in e || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      }
      function mt(e, t, n) {
        var r,
          i,
          o = 0,
          a = mt.prefilters.length,
          s = C.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = st || pt(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = n / c.duration || 0,
                o = 1 - r,
                a = 0,
                u = c.tweens.length;
              a < u;
              a++
            )
              c.tweens[a].run(o);
            return (
              s.notifyWith(e, [c, o, n]),
              o < 1 && u
                ? n
                : (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: st || pt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = C.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          l = c.props;
        for (vt(l, c.opts.specialEasing); o < a; o++)
          if (((r = mt.prefilters[o].call(c, e, l, c.opts)), r))
            return (
              b(r.stop) &&
                (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          C.map(l, ht, c),
          b(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          C.fx.timer(C.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (C.Animation = C.extend(mt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return de(n.elem, e, ce.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          b(e) ? ((t = e), (e = ["*"])) : (e = e.match(F));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (mt.tweeners[n] = mt.tweeners[n] || []),
              mt.tweeners[n].unshift(t);
        },
        prefilters: [gt],
        prefilter: function (e, t) {
          t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var r =
            e && "object" === typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (b(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !b(t) && t),
                };
          return (
            C.fx.off
              ? (r.duration = 0)
              : "number" !== typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              b(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
            }),
            r
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(fe)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = C.isEmptyObject(e),
              o = C.speed(t, n, r),
              a = function () {
                var t = mt(this, C.extend({}, e), o);
                (i || ne.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" !== typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = C.timers,
                  a = ne.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = ne.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = C.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (e, t) {
          var n = C.fn[t];
          C.fn[t] = function (e, r, i) {
            return null == e || "boolean" === typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, r, i);
          };
        }),
        C.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            C.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (st = Date.now(); t < n.length; t++)
            (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (st = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          ut || ((ut = !0), ft());
        }),
        (C.fx.stop = function () {
          ut = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = s.createElement("input"),
            t = s.createElement("select"),
            n = t.appendChild(s.createElement("option"));
          (e.type = "checkbox"),
            (y.checkOn = "" !== e.value),
            (y.optSelected = n.selected),
            (e = s.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (y.radioValue = "t" === e.value);
        })();
      var yt,
        bt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return K(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" === typeof e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (i =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? yt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : ((r = C.find.attr(e, t)), null == r ? void 0 : r));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!y.radioValue && "radio" === t && O(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(F);
            if (i && 1 === e.nodeType)
              while ((n = i[r++])) e.removeAttribute(n);
          },
        }),
        (yt = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = bt[t] || C.find.attr;
          bt[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = bt[a]),
                (bt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (bt[a] = o)),
              i
            );
          };
        });
      var xt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
      function kt(e) {
        var t = e.match(F) || [];
        return t.join(" ");
      }
      function Tt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Et(e) {
        return Array.isArray(e)
          ? e
          : ("string" === typeof e && e.match(F)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return K(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : xt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (b(e))
              return this.each(function (t) {
                C(this).addClass(e.call(this, t, Tt(this)));
              });
            if (((t = Et(e)), t.length))
              while ((n = this[u++]))
                if (
                  ((i = Tt(n)), (r = 1 === n.nodeType && " " + kt(i) + " "), r)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  (s = kt(r)), i !== s && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (b(e))
              return this.each(function (t) {
                C(this).removeClass(e.call(this, t, Tt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((t = Et(e)), t.length))
              while ((n = this[u++]))
                if (
                  ((i = Tt(n)), (r = 1 === n.nodeType && " " + kt(i) + " "), r)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    while (r.indexOf(" " + o + " ") > -1)
                      r = r.replace(" " + o + " ", " ");
                  (s = kt(r)), i !== s && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" === typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : b(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, Tt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r) {
                    (i = 0), (o = C(this)), (a = Et(e));
                    while ((t = a[i++]))
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  } else (void 0 !== e && "boolean" !== n) || ((t = Tt(this)), t && ne.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ne.get(this, "__className__") || ""));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            t = " " + e + " ";
            while ((n = this[r++]))
              if (1 === n.nodeType && (" " + kt(Tt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Ct = /\r/g;
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = b(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  ((i = r ? e.call(this, n, C(this).val()) : e),
                  null == i
                    ? (i = "")
                    : "number" === typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = C.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? ((t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (n = t.get(i, "value"))
                ? n
                : ((n = i.value),
                  "string" === typeof n
                    ? n.replace(Ct, "")
                    : null == n
                    ? ""
                    : n))
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : kt(C.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]),
                    (n.selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !O(n.parentNode, "optgroup")))
                  ) {
                    if (((t = C(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                var n,
                  r,
                  i = e.options,
                  o = C.makeArray(t),
                  a = i.length;
                while (a--)
                  (r = i[a]),
                    (r.selected =
                      C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1);
            },
          }),
            y.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (y.focusin = "onfocusin" in n);
      var St = /^(?:focusinfocus|focusoutblur)$/,
        At = function (e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            u,
            c,
            l,
            f,
            p,
            d,
            h = [r || s],
            v = g.call(e, "type") ? e.type : e,
            m = g.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = u = r = r || s),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !St.test(v + C.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((m = v.split(".")), (v = m.shift()), m.sort()),
              (l = v.indexOf(":") < 0 && "on" + v),
              (e = e[C.expando]
                ? e
                : new C.Event(v, "object" === typeof e && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (p = C.event.special[v] || {}),
              i || !p.trigger || !1 !== p.trigger.apply(r, t)))
          ) {
            if (!i && !p.noBubble && !x(r)) {
              for (
                c = p.delegateType || v, St.test(c + v) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (u = a);
              u === (r.ownerDocument || s) &&
                h.push(u.defaultView || u.parentWindow || n);
            }
            o = 0;
            while ((a = h[o++]) && !e.isPropagationStopped())
              (d = a),
                (e.type = o > 1 ? c : p.bindType || v),
                (f =
                  (ne.get(a, "events") || {})[e.type] && ne.get(a, "handle")),
                f && f.apply(a, t),
                (f = l && a[l]),
                f &&
                  f.apply &&
                  ee(a) &&
                  ((e.result = f.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = v),
              i ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(h.pop(), t)) ||
                !ee(r) ||
                (l &&
                  b(r[v]) &&
                  !x(r) &&
                  ((u = r[l]),
                  u && (r[l] = null),
                  (C.event.triggered = v),
                  e.isPropagationStopped() && d.addEventListener(v, At),
                  r[v](),
                  e.isPropagationStopped() && d.removeEventListener(v, At),
                  (C.event.triggered = void 0),
                  u && (r[l] = u))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(r, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        }),
        y.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              C.event.simulate(t, e.target, C.event.fix(e));
            };
            C.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = ne.access(r, t);
                i || r.addEventListener(e, n, !0),
                  ne.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = ne.access(r, t) - 1;
                i
                  ? ne.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), ne.remove(r, t));
              },
            };
          });
      var jt = n.location,
        Dt = Date.now(),
        Lt = /\?/;
      C.parseXML = function (e) {
        var t;
        if (!e || "string" !== typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            C.error("Invalid XML: " + e),
          t
        );
      };
      var Nt = /\[\]$/,
        Ot = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
      function Pt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          C.each(t, function (t, i) {
            n || Nt.test(e)
              ? r(e, i)
              : Pt(
                  e + "[" + ("object" === typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== T(t)) r(e, t);
        else for (i in t) Pt(e + "[" + i + "]", t[i], n, r);
      }
      (C.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = b(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Pt(n, e[n], t, i);
        return r.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  It.test(this.nodeName) &&
                  !_t.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(Ot, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Ot, "\r\n") };
              })
              .get();
          },
        });
      var qt = /%20/g,
        Mt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Wt = {},
        Ut = {},
        zt = "*/".concat("*"),
        Gt = s.createElement("a");
      function Vt(e) {
        return function (t, n) {
          "string" !== typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(F) || [];
          if (b(n))
            while ((r = o[i++]))
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Xt(e, t, n, r) {
        var i = {},
          o = e === Ut;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            C.each(e[s] || [], function (e, s) {
              var c = s(t, n, r);
              return "string" !== typeof c || o || i[c]
                ? o
                  ? !(u = c)
                  : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function Kt(e, t) {
        var n,
          r,
          i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r), e;
      }
      function Yt(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.contents,
          u = e.dataTypes;
        while ("*" === u[0])
          u.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (i in s)
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
        if (u[0] in n) o = u[0];
        else {
          for (i in n) {
            if (!u[0] || e.converters[i + " " + u[0]]) {
              o = i;
              break;
            }
            a || (a = i);
          }
          o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
      }
      function Qt(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          c = {},
          l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        o = l.shift();
        while (o)
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (u = o),
            (o = l.shift()),
            o)
          )
            if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
              if (((a = c[u + " " + o] || c["* " + o]), !a))
                for (i in c)
                  if (
                    ((s = i.split(" ")),
                    s[1] === o &&
                      ((a = c[u + " " + s[0]] || c["* " + s[0]]), a))
                  ) {
                    !0 === a
                      ? (a = c[i])
                      : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                    break;
                  }
              if (!0 !== a)
                if (a && e.throws) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + u + " to " + o,
                    };
                  }
            }
        return { state: "success", data: t };
      }
      (Gt.href = jt.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: Rt.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": zt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Kt(Kt(e, C.ajaxSettings), t) : Kt(C.ajaxSettings, e);
          },
          ajaxPrefilter: Vt(Wt),
          ajaxTransport: Vt(Ut),
          ajax: function (e, t) {
            "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              u,
              c,
              l,
              f,
              p,
              d,
              h = C.ajaxSetup({}, t),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
              m = C.Deferred(),
              y = C.Callbacks("once memory"),
              b = h.statusCode || {},
              x = {},
              w = {},
              k = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a) {
                      a = {};
                      while ((t = Ht.exec(o))) a[t[1].toLowerCase()] = t[2];
                    }
                    t = a[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function () {
                  return l ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) T.always(e[T.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || k;
                  return r && r.abort(t), E(0, t), this;
                },
              };
            if (
              (m.promise(T),
              (h.url = ((e || h.url || jt.href) + "").replace(
                $t,
                jt.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(F) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              c = s.createElement("a");
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain =
                    Gt.protocol + "//" + Gt.host !==
                    c.protocol + "//" + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" !== typeof h.data &&
                (h.data = C.param(h.data, h.traditional)),
              Xt(Wt, h, t, T),
              l)
            )
              return T;
            for (p in ((f = C.event && h.global),
            f && 0 === C.active++ && C.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ft.test(h.type)),
            (i = h.url.replace(Mt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(qt, "+"))
              : ((d = h.url.slice(i.length)),
                h.data &&
                  (h.processData || "string" === typeof h.data) &&
                  ((i += (Lt.test(i) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Bt, "$1")),
                  (d = (Lt.test(i) ? "&" : "?") + "_=" + Dt++ + d)),
                (h.url = i + d)),
            h.ifModified &&
              (C.lastModified[i] &&
                T.setRequestHeader("If-Modified-Since", C.lastModified[i]),
              C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", h.contentType),
            T.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || l))
              return T.abort();
            if (
              ((k = "abort"),
              y.add(h.complete),
              T.done(h.success),
              T.fail(h.error),
              (r = Xt(Ut, h, t, T)),
              r)
            ) {
              if (((T.readyState = 1), f && v.trigger("ajaxSend", [T, h]), l))
                return T;
              h.async &&
                h.timeout > 0 &&
                (u = n.setTimeout(function () {
                  T.abort("timeout");
                }, h.timeout));
              try {
                (l = !1), r.send(x, E);
              } catch (e) {
                if (l) throw e;
                E(-1, e);
              }
            } else E(-1, "No Transport");
            function E(e, t, a, s) {
              var c,
                p,
                d,
                x,
                w,
                k = t;
              l ||
                ((l = !0),
                u && n.clearTimeout(u),
                (r = void 0),
                (o = s || ""),
                (T.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                a && (x = Yt(h, T, a)),
                (x = Qt(h, x, T, c)),
                c
                  ? (h.ifModified &&
                      ((w = T.getResponseHeader("Last-Modified")),
                      w && (C.lastModified[i] = w),
                      (w = T.getResponseHeader("etag")),
                      w && (C.etag[i] = w)),
                    204 === e || "HEAD" === h.type
                      ? (k = "nocontent")
                      : 304 === e
                      ? (k = "notmodified")
                      : ((k = x.state), (p = x.data), (d = x.error), (c = !d)))
                  : ((d = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                (T.status = e),
                (T.statusText = (t || k) + ""),
                c ? m.resolveWith(g, [p, k, T]) : m.rejectWith(g, [T, k, d]),
                T.statusCode(b),
                (b = void 0),
                f &&
                  v.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : d]),
                y.fireWith(g, [T, k]),
                f &&
                  (v.trigger("ajaxComplete", [T, h]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, "script");
          },
        }),
        C.each(["get", "post"], function (e, t) {
          C[t] = function (e, n, r, i) {
            return (
              b(n) && ((i = i || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (C._evalUrl = function (e) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (b(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return b(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = b(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Jt = { 0: 200, 1223: 204 },
        Zt = C.ajaxSettings.xhr();
      (y.cors = !!Zt && "withCredentials" in Zt),
        (y.ajax = Zt = !!Zt),
        C.ajaxTransport(function (e) {
          var t, r;
          if (y.cors || (Zt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" !== typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Jt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" !== typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function (r, i) {
                (t = C("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = en.pop() || C.expando + "_" + Dt++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (tn.test(e.url)
                ? "url"
                : "string" === typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  tn.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(tn, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || C.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), en.push(i)),
                  a && b(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (y.createHTMLDocument = (function () {
          var e = s.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (C.parseHTML = function (e, t, n) {
          return "string" !== typeof e
            ? []
            : ("boolean" === typeof t && ((n = t), (t = !1)),
              t ||
                (y.createHTMLDocument
                  ? ((t = s.implementation.createHTMLDocument("")),
                    (r = t.createElement("base")),
                    (r.href = s.location.href),
                    t.head.appendChild(r))
                  : (t = s)),
              (i = _.exec(e)),
              (o = !n && []),
              i
                ? [t.createElement(i[1])]
                : ((i = Ee([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], i.childNodes)));
          var r, i, o;
        }),
        (C.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = kt(e.slice(s))), (e = e.slice(0, s))),
            b(t)
              ? ((n = t), (t = void 0))
              : t && "object" === typeof t && (i = "POST"),
            a.length > 0 &&
              C.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l = C.css(e, "position"),
              f = C(e),
              p = {};
            "static" === l && (e.style.position = "relative"),
              (s = f.offset()),
              (o = C.css(e, "top")),
              (u = C.css(e, "left")),
              (c =
                ("absolute" === l || "fixed" === l) &&
                (o + u).indexOf("auto") > -1),
              c
                ? ((r = f.position()), (a = r.top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              b(t) && (t = t.call(e, n, C.extend({}, s))),
              null != t.top && (p.top = t.top - s.top + a),
              null != t.left && (p.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, p) : f.css(p);
          },
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === C.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                (t = this.offset()),
                  (n = r.ownerDocument),
                  (e = r.offsetParent || n.documentElement);
                while (
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position")
                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  ((i = C(e).offset()),
                  (i.top += C.css(e, "borderTopWidth", !0)),
                  (i.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - C.css(r, "marginTop", !0),
                left: t.left - i.left - C.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              var e = this.offsetParent;
              while (e && "static" === C.css(e, "position")) e = e.offsetParent;
              return e || Ce;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (r) {
              return K(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (e, t) {
          C.cssHooks[t] = Xe(y.pixelPosition, function (e, n) {
            if (n)
              return (n = Ve(e, t)), Ue.test(n) ? C(e).position()[t] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (e, t) {
          C.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              C.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" !== typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return K(
                  this,
                  function (t, n, i) {
                    var o;
                    return x(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? C.css(t, n, s)
                      : C.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        C.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (C.proxy = function (e, t) {
          var n, r, i;
          if (("string" === typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
            return (
              (r = c.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(c.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || C.guid++),
              i
            );
        }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = O),
        (C.isFunction = b),
        (C.isWindow = x),
        (C.camelCase = Z),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (r = []),
        (i = function () {
          return C;
        }.apply(t, r)),
        void 0 === i || (e.exports = i);
      var nn = n.jQuery,
        rn = n.$;
      return (
        (C.noConflict = function (e) {
          return (
            n.$ === C && (n.$ = rn), e && n.jQuery === C && (n.jQuery = nn), C
          );
        }),
        o || (n.jQuery = n.$ = C),
        C
      );
    });
  },
  1169: function (e, t, n) {
    var r = n("2d95");
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  1495: function (e, t, n) {
    var r = n("86cc"),
      i = n("cb7c"),
      o = n("0d58");
    e.exports = n("9e1e")
      ? Object.defineProperties
      : function (e, t) {
          i(e);
          var n,
            a = o(t),
            s = a.length,
            u = 0;
          while (s > u) r.f(e, (n = a[u++]), t[n]);
          return e;
        };
  },
  "1b92": function (e, t, n) {
    "use strict";
    n("7f7f"), n("ac6a");
    var r = n("cdba"),
      i = n("104e"),
      o = (function () {
        function e() {
          Object(r["a"])(this, e),
            (this.DEFAULT_ID = 1),
            (this.ALL = [
              { id: 1, name: "yellow", class: "yellow" },
              { id: 2, name: "blue", class: "blue" },
              { id: 3, name: "green", class: "green" },
              { id: 4, name: "pink", class: "pink" },
              { id: 5, name: "orange", class: "orange" },
            ]);
          var t = {};
          this.ALL.forEach(function (e) {
            t[e.id] = e;
          }),
            (this.ALL_BY_ID = t);
        }
        return (
          Object(i["a"])(e, [
            {
              key: "name",
              value: function (e) {
                return (
                  "undefined" === typeof this.ALL_BY_ID[e] &&
                    (e = this.DEFAULT_ID),
                  this.ALL_BY_ID[e].name
                );
              },
            },
            {
              key: "cssClass",
              value: function (e) {
                return (
                  "undefined" === typeof this.ALL_BY_ID[e] &&
                    (e = this.DEFAULT_ID),
                  this.ALL_BY_ID[e].class
                );
              },
            },
            {
              key: "idByName",
              value: function (e) {
                var t = this.ALL.filter(function (t) {
                  return t.name == e;
                });
                return 1 !== t.length ? this.DEFAULT_ID : t[0].id;
              },
            },
            {
              key: "all",
              value: function () {
                return this.ALL;
              },
            },
          ]),
          e
        );
      })(),
      a = new o();
    t["a"] = a;
  },
  "214f": function (e, t, n) {
    "use strict";
    n("b0c5");
    var r = n("2aba"),
      i = n("32e9"),
      o = n("79e5"),
      a = n("be13"),
      s = n("2b4c"),
      u = n("520a"),
      c = s("species"),
      l = !o(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      f = (function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1];
      })();
    e.exports = function (e, t, n) {
      var p = s(e),
        d = !o(function () {
          var t = {};
          return (
            (t[p] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        h = d
          ? !o(function () {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function () {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[c] = function () {
                    return n;
                  })),
                n[p](""),
                !t
              );
            })
          : void 0;
      if (!d || !h || ("replace" === e && !l) || ("split" === e && !f)) {
        var g = /./[p],
          v = n(a, p, ""[e], function (e, t, n, r, i) {
            return t.exec === u
              ? d && !i
                ? { done: !0, value: g.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          }),
          m = v[0],
          y = v[1];
        r(String.prototype, e, m),
          i(
            RegExp.prototype,
            p,
            2 == t
              ? function (e, t) {
                  return y.call(e, this, t);
                }
              : function (e) {
                  return y.call(e, this);
                }
          );
      }
    };
  },
  "230e": function (e, t, n) {
    var r = n("d3f4"),
      i = n("7726").document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  "23c6": function (e, t, n) {
    var r = n("2d95"),
      i = n("2b4c")("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        ),
      a = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      };
    e.exports = function (e) {
      var t, n, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" == typeof (n = a((t = Object(e)), i))
        ? n
        : o
        ? r(t)
        : "Object" == (s = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  "28a5": function (e, t, n) {
    "use strict";
    var r = n("aae3"),
      i = n("cb7c"),
      o = n("ebd6"),
      a = n("0390"),
      s = n("9def"),
      u = n("5f1b"),
      c = n("520a"),
      l = n("79e5"),
      f = Math.min,
      p = [].push,
      d = "split",
      h = "length",
      g = "lastIndex",
      v = 4294967295,
      m = !l(function () {
        RegExp(v, "y");
      });
    n("214f")("split", 2, function (e, t, n, l) {
      var y;
      return (
        (y =
          "c" == "abbc"[d](/(b)*/)[1] ||
          4 != "test"[d](/(?:)/, -1)[h] ||
          2 != "ab"[d](/(?:ab)*/)[h] ||
          4 != "."[d](/(.?)(.?)/)[h] ||
          "."[d](/()()/)[h] > 1 ||
          ""[d](/.?/)[h]
            ? function (e, t) {
                var i = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return n.call(i, e, t);
                var o,
                  a,
                  s,
                  u = [],
                  l =
                    (e.ignoreCase ? "i" : "") +
                    (e.multiline ? "m" : "") +
                    (e.unicode ? "u" : "") +
                    (e.sticky ? "y" : ""),
                  f = 0,
                  d = void 0 === t ? v : t >>> 0,
                  m = new RegExp(e.source, l + "g");
                while ((o = c.call(m, i))) {
                  if (
                    ((a = m[g]),
                    a > f &&
                      (u.push(i.slice(f, o.index)),
                      o[h] > 1 && o.index < i[h] && p.apply(u, o.slice(1)),
                      (s = o[0][h]),
                      (f = a),
                      u[h] >= d))
                  )
                    break;
                  m[g] === o.index && m[g]++;
                }
                return (
                  f === i[h]
                    ? (!s && m.test("")) || u.push("")
                    : u.push(i.slice(f)),
                  u[h] > d ? u.slice(0, d) : u
                );
              }
            : "0"[d](void 0, 0)[h]
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t);
              }
            : n),
        [
          function (n, r) {
            var i = e(this),
              o = void 0 == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : y.call(String(i), n, r);
          },
          function (e, t) {
            var r = l(y, e, this, t, y !== n);
            if (r.done) return r.value;
            var c = i(e),
              p = String(this),
              d = o(c, RegExp),
              h = c.unicode,
              g =
                (c.ignoreCase ? "i" : "") +
                (c.multiline ? "m" : "") +
                (c.unicode ? "u" : "") +
                (m ? "y" : "g"),
              b = new d(m ? c : "^(?:" + c.source + ")", g),
              x = void 0 === t ? v : t >>> 0;
            if (0 === x) return [];
            if (0 === p.length) return null === u(b, p) ? [p] : [];
            var w = 0,
              k = 0,
              T = [];
            while (k < p.length) {
              b.lastIndex = m ? k : 0;
              var E,
                C = u(b, m ? p : p.slice(k));
              if (
                null === C ||
                (E = f(s(b.lastIndex + (m ? 0 : k)), p.length)) === w
              )
                k = a(p, k, h);
              else {
                if ((T.push(p.slice(w, k)), T.length === x)) return T;
                for (var S = 1; S <= C.length - 1; S++)
                  if ((T.push(C[S]), T.length === x)) return T;
                k = w = E;
              }
            }
            return T.push(p.slice(w)), T;
          },
        ]
      );
    });
  },
  "2aba": function (e, t, n) {
    var r = n("7726"),
      i = n("32e9"),
      o = n("69a8"),
      a = n("ca5a")("src"),
      s = n("fa5b"),
      u = "toString",
      c = ("" + s).split(u);
    (n("8378").inspectSource = function (e) {
      return s.call(e);
    }),
      (e.exports = function (e, t, n, s) {
        var u = "function" == typeof n;
        u && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (u && (o(n, a) || i(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
            e === r
              ? (e[t] = n)
              : s
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, u, function () {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  "2aeb": function (e, t, n) {
    var r = n("cb7c"),
      i = n("1495"),
      o = n("e11e"),
      a = n("613b")("IE_PROTO"),
      s = function () {},
      u = "prototype",
      c = function () {
        var e,
          t = n("230e")("iframe"),
          r = o.length,
          i = "<",
          a = ">";
        (t.style.display = "none"),
          n("fab2").appendChild(t),
          (t.src = "javascript:"),
          (e = t.contentWindow.document),
          e.open(),
          e.write(i + "script" + a + "document.F=Object" + i + "/script" + a),
          e.close(),
          (c = e.F);
        while (r--) delete c[u][o[r]];
        return c();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((s[u] = r(e)), (n = new s()), (s[u] = null), (n[a] = e))
            : (n = c()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  "2b4c": function (e, t, n) {
    var r = n("5537")("wks"),
      i = n("ca5a"),
      o = n("7726").Symbol,
      a = "function" == typeof o,
      s = (e.exports = function (e) {
        return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
      });
    s.store = r;
  },
  "2d00": function (e, t) {
    e.exports = !1;
  },
  "2d95": function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  "32e9": function (e, t, n) {
    var r = n("86cc"),
      i = n("4630");
    e.exports = n("9e1e")
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  "386d": function (e, t, n) {
    "use strict";
    var r = n("cb7c"),
      i = n("83a1"),
      o = n("5f1b");
    n("214f")("search", 1, function (e, t, n, a) {
      return [
        function (n) {
          var r = e(this),
            i = void 0 == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function (e) {
          var t = a(n, e, this);
          if (t.done) return t.value;
          var s = r(e),
            u = String(this),
            c = s.lastIndex;
          i(c, 0) || (s.lastIndex = 0);
          var l = o(s, u);
          return (
            i(s.lastIndex, c) || (s.lastIndex = c), null === l ? -1 : l.index
          );
        },
      ];
    });
  },
  "38fd": function (e, t, n) {
    var r = n("69a8"),
      i = n("4bf8"),
      o = n("613b")("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  "41a0": function (e, t, n) {
    "use strict";
    var r = n("2aeb"),
      i = n("4630"),
      o = n("7f20"),
      a = {};
    n("32e9")(a, n("2b4c")("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
      });
  },
  4588: function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  4630: function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  "4bf8": function (e, t, n) {
    var r = n("be13");
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  "520a": function (e, t, n) {
    "use strict";
    var r = n("0bfb"),
      i = RegExp.prototype.exec,
      o = String.prototype.replace,
      a = i,
      s = "lastIndex",
      u = (function () {
        var e = /a/,
          t = /b*/g;
        return i.call(e, "a"), i.call(t, "a"), 0 !== e[s] || 0 !== t[s];
      })(),
      c = void 0 !== /()??/.exec("")[1],
      l = u || c;
    l &&
      (a = function (e) {
        var t,
          n,
          a,
          l,
          f = this;
        return (
          c && (n = new RegExp("^" + f.source + "$(?!\\s)", r.call(f))),
          u && (t = f[s]),
          (a = i.call(f, e)),
          u && a && (f[s] = f.global ? a.index + a[0].length : t),
          c &&
            a &&
            a.length > 1 &&
            o.call(a[0], n, function () {
              for (l = 1; l < arguments.length - 2; l++)
                void 0 === arguments[l] && (a[l] = void 0);
            }),
          a
        );
      }),
      (e.exports = a);
  },
  5537: function (e, t, n) {
    var r = n("8378"),
      i = n("7726"),
      o = "__core-js_shared__",
      a = i[o] || (i[o] = {});
    (e.exports = function (e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n("2d00") ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  "5ca1": function (e, t, n) {
    var r = n("7726"),
      i = n("8378"),
      o = n("32e9"),
      a = n("2aba"),
      s = n("9b43"),
      u = "prototype",
      c = function (e, t, n) {
        var l,
          f,
          p,
          d,
          h = e & c.F,
          g = e & c.G,
          v = e & c.S,
          m = e & c.P,
          y = e & c.B,
          b = g ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[u],
          x = g ? i : i[t] || (i[t] = {}),
          w = x[u] || (x[u] = {});
        for (l in (g && (n = t), n))
          (f = !h && b && void 0 !== b[l]),
            (p = (f ? b : n)[l]),
            (d =
              y && f
                ? s(p, r)
                : m && "function" == typeof p
                ? s(Function.call, p)
                : p),
            b && a(b, l, p, e & c.U),
            x[l] != p && o(x, l, d),
            m && w[l] != p && (w[l] = p);
      };
    (r.core = i),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  "5f1b": function (e, t, n) {
    "use strict";
    var r = n("23c6"),
      i = RegExp.prototype.exec;
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" === typeof n) {
        var o = n.call(e, t);
        if ("object" !== typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  "5fb0": function (e, t, n) {
    "use strict";
    n.d(t, "j", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return d;
      });
    var r = "https://gosnippet.com",
      i = "fkaokedhimpifhfadmgjpfjimkogdlcm",
      o = chrome.extension.getURL("./"),
      a = "".concat(r, "/api"),
      s =
        ("".concat(r, "/oauth/authorize"),
        "".concat(r, "/oauth/token"),
        "https://".concat(i, ".chromiumapp.org/callback"),
        [
          "https://chrome.google.com/",
          "https://read.amazon.com/",
          "https://read.amazon.ca/",
          "https://read.amazon.co.uk/",
          "https://read.amazon.com.au/",
          "".concat(r, "/app"),
          "".concat(r, "/login"),
          "".concat(r, "/register"),
          "".concat(r, "/pro"),
          "https://drive.google.com",
          "https://docs.google.com",
          "https://secure.2checkout.com",
        ]),
      u = "UA-109423508-4",
      c = 10,
      l = "|:|:|:",
      f = 1,
      p = 3,
      d = 10;
  },
  "613b": function (e, t, n) {
    var r = n("5537")("keys"),
      i = n("ca5a");
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  "626a": function (e, t, n) {
    var r = n("2d95");
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  6821: function (e, t, n) {
    var r = n("626a"),
      i = n("be13");
    e.exports = function (e) {
      return r(i(e));
    };
  },
  "69a8": function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  "6a99": function (e, t, n) {
    var r = n("d3f4");
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  7514: function (e, t, n) {
    "use strict";
    var r = n("5ca1"),
      i = n("0a49")(5),
      o = "find",
      a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      r(r.P + r.F * a, "Array", {
        find: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n("9c6c")(o);
  },
  7726: function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  "77f1": function (e, t, n) {
    var r = n("4588"),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)), e < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  "79e5": function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  "7f20": function (e, t, n) {
    var r = n("86cc").f,
      i = n("69a8"),
      o = n("2b4c")("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), o) &&
        r(e, o, { configurable: !0, value: t });
    };
  },
  "7f7f": function (e, t, n) {
    var r = n("86cc").f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/,
      a = "name";
    a in i ||
      (n("9e1e") &&
        r(i, a, {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          },
        }));
  },
  8378: function (e, t) {
    var n = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  "83a1": function (e, t) {
    e.exports =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t;
      };
  },
  "84f2": function (e, t) {
    e.exports = {};
  },
  "859d": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("cdba"),
      i = n("104e"),
      o = n("5fb0"),
      a = n("0d83"),
      s = (n("386d"), n("9395")),
      u = (n("ac6a"), n("cadf"), n("28a5"), n("a481"), n("7514"), n("1157")),
      c = n.n(u),
      l = n("1b92"),
      f = (function () {
        function e() {
          var t = this;
          Object(r["a"])(this, e),
            (this.loaded = !1),
            c()(
              '<iframe id="kindle_choose_book" src="'.concat(
                chrome.runtime.getURL(
                  "content_scripts/frames/kindle-choose-book/index.html"
                ),
                '" allowtransparency="false" frameborder="0" scrolling="no"></iframe>'
              )
            ).appendTo("body"),
            (this.$container = c()("#kindle_choose_book")),
            (this.proxy = this.$container.get(0).contentWindow),
            (this.$container.get(0).onload = function () {
              t.loaded = !0;
            }),
            setTimeout(function () {
              t.loaded = !0;
            }, 5e3),
            this.hide();
        }
        return (
          Object(i["a"])(e, [
            {
              key: "initBookList",
              value: function (e) {
                var t = this;
                this.loaded
                  ? this.proxy.postMessage({ action: "init", books: e }, o["c"])
                  : setTimeout(function () {
                      t.initBookList(e);
                    }, 100);
              },
            },
            {
              key: "isLoaded",
              value: function () {
                return this.isLoaded();
              },
            },
            {
              key: "show",
              value: function () {
                this.$container.show();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$container.hide();
              },
            },
            {
              key: "disable",
              value: function () {
                this.$container.remove();
              },
            },
          ]),
          e
        );
      })(),
      p = (function (e) {
        var t,
          n,
          r,
          i = [],
          a = -1,
          u = !1,
          c = "",
          d = !1,
          h = 0,
          g = new f(),
          v = {
            timeWaited: 0,
            previousNumberOfBooks: 0,
            numberOfBooks: 0,
            iterationsEqual: 0,
          };
        return {
          authenticate: function (e) {
            return c
              ? Promise.resolve()
              : new Promise(function (t, n) {
                  chrome.runtime.sendMessage(
                    { action: "import-kindle-auth", sceu: e, token: c },
                    function (e) {
                      e || n(e), (c = e), t(e);
                    }
                  );
                });
          },
          setFullSync: function (e) {
            u = e;
          },
          setToken: function (e) {
            c = e;
          },
          initCanvas: function () {
            e("#snippet_canvas").length ||
              (e("body").append(
                '\n            <div id="snippet_canvas">\n                <div id="snippet_info_box">\n                    <div id="snippet_progress_text"></div>\n                    <div id="snippet_progress_bar"><div></div></div>\n                </div>\n                <div id="snippet_error_box"></div>\n            </div>'
              ),
              (t = e("#snippet_canvas")));
          },
          showProgress: function () {
            p.initCanvas(),
              (r = t.find("#snippet_progress_bar > div")),
              (n = t.find("#snippet_progress_text")),
              n.html(chrome.i18n.getMessage("pleaseWaitKindleImport"));
          },
          showError: function (e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '<a href="javascript:window.location.reload()">'
                    .concat(
                      chrome.i18n.getMessage("tryAgain"),
                      '</a> or <a href="'
                    )
                    .concat(o["j"], '/app">')
                    .concat(chrome.i18n.getMessage("goBackToSnippet"), "</a>");
            t || p.initCanvas(),
              t.find("#snippet_info_box").hide(),
              t
                .find("#snippet_error_box")
                .html("".concat(e, "<br><br>").concat(n))
                .show();
          },
          updateProgress: function (e) {
            var t = i.filter(function (e) {
              return e.selected;
            }).length;
            r.css("width", "".concat(Math.ceil((e / t) * 100), "%")),
              n.html(
                "<span>"
                  .concat(
                    chrome.i18n.getMessage("bookOf", [
                      "".concat(e),
                      "".concat(t),
                    ]),
                    "</span>"
                  )
                  .concat(chrome.i18n.getMessage("pleaseWaitKindleImport"))
              );
          },
          initializeBookList: function () {
            return new Promise(function t(n, r) {
              if (i.length) n(i);
              else {
                if (
                  ((v.previousNumberOfBooks = v.numberOfBooks),
                  (v.numberOfBooks = e(
                    "#kp-notebook-library .kp-notebook-library-each-book"
                  ).length),
                  v.previousNumberOfBooks === v.numberOfBooks &&
                    v.numberOfBooks > 0 &&
                    (v.iterationsEqual = v.iterationsEqual + 1),
                  v.iterationsEqual < 4 && v.timeWaited < 1e4)
                )
                  return (
                    (v.timeWaited += 1e3), void setTimeout(t.bind(null, n), 1e3)
                  );
                if (!v.numberOfBooks)
                  return (
                    p.showError(
                      chrome.i18n.getMessage("yourKindleHighlightsListIsEmpty")
                    ),
                    void r()
                  );
                e("#kp-notebook-library .kp-notebook-library-each-book").map(
                  function () {
                    var t = [],
                      n = e(this).find("a p").first().text();
                    n.length &&
                      ((n = n.replace("By:", "").replace(" and ", ",").trim()),
                      (t = n
                        .split(",")
                        .map(function (e) {
                          return e.trim();
                        })
                        .filter(function (e) {
                          return e.length;
                        }))),
                      i.push({
                        asin: this.id,
                        last_annotation: e(this)
                          .find("#kp-notebook-annotated-date-".concat(this.id))
                          .val(),
                        title: e(this).find("h2").text().trim(),
                        authors: t,
                        snippets: [],
                        selected: !0,
                        photo_url: e(this)
                          .find(".kp-notebook-cover-image")
                          .get(0)
                          ? e(this).find(".kp-notebook-cover-image").get(0).src
                          : "",
                      });
                  }
                ),
                  g.initBookList(i),
                  n(i);
              }
            });
          },
          processChain: function () {
            var e = {
              totalSnippets: 0,
              totalExistingSnippets: 0,
              totalImportedBooks: 0,
              totalNewBooks: 0,
              totalNotes: 0,
              totalImportedNotes: 0,
              details: [],
            };
            return new Promise(function (t) {
              var n = !1,
                r = 0,
                s = Promise.resolve(),
                c = 0;
              0 ===
                i.filter(function (e) {
                  return e.selected;
                }).length && t(e);
              for (var l = 0; l < i.length; l++)
                i[l].selected &&
                  (function (l) {
                    s = s
                      .then(function () {
                        if (!n)
                          return r < 5 || u
                            ? p.loadSnippetsForBook(i[l])
                            : void 0;
                      })
                      .then(function () {
                        if (!n && 0 !== i[l].snippets.length)
                          return p.sendBook(i[l]);
                      })
                      .then(function (o) {
                        n ||
                          (o &&
                            ((e.totalSnippets += o.imported_snippets),
                            (e.totalExistingSnippets += o.existing_snippets),
                            (e.totalNewBooks += o.imported_book),
                            (e.totalImportedBooks +=
                              o.imported_snippets > 0 ? 1 : 0),
                            (e.totalExistingNotes += o.existing_notes),
                            (e.totalNotes += o.imported_notes),
                            o.details && e.details.push(o.details),
                            o.imported_snippets + o.imported_notes === 0 &&
                              r++),
                          c++,
                          p.updateProgress(c),
                          c ===
                            i.filter(function (e) {
                              return e.selected;
                            }).length && t(e));
                      })
                      .catch(function (e) {
                        (n = !0),
                          401 === e.status
                            ? p.showError(
                                chrome.i18n.getMessage(
                                  "browserExtensionIsNotConnected"
                                ),
                                '<a href="'
                                  .concat(o["j"], '/login">')
                                  .concat(
                                    chrome.i18n.getMessage("login"),
                                    "</a> "
                                  )
                                  .concat(chrome.i18n.getMessage("andTryAgain"))
                              )
                            : "Import is already completed" === e.message
                            ? (window.location.href = ""
                                .concat(
                                  o["j"],
                                  "/app#/import/kindle/completed/"
                                )
                                .concat(a))
                            : p.showError(
                                chrome.i18n.getMessage(
                                  "errorOccurredWhileImportingBook",
                                  ["".concat(l + 1)]
                                )
                              );
                      });
                  })(l);
            });
          },
          processAllAtOnce: function () {
            Promise.all(
              i.map(function (e) {
                return p.loadSnippetsForBook(e);
              })
            ).then(function () {});
          },
          getNoteContent: function (e) {
            var t = e.find("#note").html();
            return t ? t.replace(/<br\s*[/]?>/gi, "\n").trim() : "";
          },
          loadSnippetsForBook: function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            return new Promise(function (i, o) {
              e.get(
                "https://read.amazon.com/notebook?asin="
                  .concat(t.asin, "&token=")
                  .concat(n, "&contentLimitState=")
                  .concat(r)
              )
                .then(function (n) {
                  var r = e("<div>").html(n),
                    o = r.find(".kp-notebook-content-limit-state").val(),
                    a = r
                      .find(".kp-notebook-annotations-next-page-start")
                      .val();
                  if (
                    (r.find(".kp-notebook-highlight").each(function (n, i) {
                      var o = {};
                      o.amazon_id = i.id.replace("highlight-", "");
                      var a = r.find("#".concat(o.amazon_id));
                      o.text = e(i).text().trim();
                      var s = a.find(".kp-notebook-note"),
                        u = s.get(0);
                      u &&
                        (o.note = {
                          id: u.id.replace("note-", ""),
                          content: p.getNoteContent(s),
                        }),
                        (o.color = l["a"].idByName(
                          a
                            .find("#annotationHighlightHeader")
                            .text()
                            .split(" ")[0]
                            .toLowerCase()
                        )),
                        (o.location = a.find("#kp-annotation-location").val()),
                        (o.pageHtml = a
                          .find("#annotationHighlightHeader")
                          .html()),
                        t.snippets.push(o);
                    }),
                    a)
                  )
                    return p.loadSnippetsForBook(t, a, o).then(function (e) {
                      i(e);
                    });
                  i(t);
                })
                .fail(function (e) {
                  o(e);
                });
            });
          },
          sendBook: function (e) {
            return new Promise(function (t, n) {
              chrome.runtime.sendMessage(
                Object(s["a"])({ action: "import-kindle-book" }, e, {
                  importId: a,
                  token: c,
                  folder_id: h,
                }),
                function (e) {
                  200 !== e.status && 201 !== e.status && n(e), t(e);
                }
              );
            });
          },
          importRequested: function () {
            for (
              var e = decodeURIComponent(window.location.search.substring(1)),
                t = e.split("&"),
                n = !1,
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].split("=");
              "gsik" === i[0]
                ? ((a = i[1]), (n = !0))
                : "full-sync" === i[0]
                ? (u = !0)
                : "par" === i[0]
                ? (d = "1" === i[1])
                : "folder_id" === i[0] && (h = i[1]);
            }
            return n;
          },
          completeImport: function (e) {
            chrome.runtime.sendMessage(
              Object(s["a"])({ action: "import-kindle-book-complete" }, e, {
                importId: a,
                token: c,
                folder_id: h,
              }),
              function (e) {
                e.id
                  ? (window.location.href = ""
                      .concat(o["j"], "/app#/import/kindle/completed/")
                      .concat(e.id))
                  : p.showError(
                      chrome.i18n.getMessage(
                        "errorOccurredWhileCompletingTheImport"
                      )
                    );
              }
            );
          },
          showChooseBook: function () {
            g.show();
          },
          hideChooseBook: function () {
            g.hide();
          },
          setBooks: function (e) {
            i = e;
          },
          shouldChooseBooks: function () {
            return d;
          },
        };
      })(c.a),
      d = p,
      h = (function () {
        function e() {
          var t = this;
          Object(r["a"])(this, e),
            (this.options = !1),
            (this.tabId = null),
            (this.sidebar = null),
            (this.sceu = null),
            (this.accessToken = null),
            chrome.storage.local.get(
              ["forceKindleImport", "accessToken"],
              function (e) {
                d.setFullSync(!!e.forceKindleImport),
                  (t.accessToken = e.accessToken),
                  t.init(function () {
                    t.turnOn();
                  });
              }
            ),
            chrome.runtime.onMessage.addListener(function (e) {
              switch (
                (a["a"].log("[RECEIVING-IN-HOST] tab:".concat(t.tabId), e),
                e["action"])
              ) {
                case "init-sceu":
                  (t.sceu = e.data.sceu), t.startApp();
                  break;
                case "init-timeout":
                  d.showProgress(),
                    d.showError(
                      chrome.i18n.getMessage("browserExtensionIsNotConnected"),
                      '<a href="'
                        .concat(o["j"], '/login">')
                        .concat(chrome.i18n.getMessage("login"), "</a> ")
                        .concat(chrome.i18n.getMessage("andTryAgain"))
                    );
                  break;
                case "import_selected_books":
                  d.hideChooseBook(), d.setBooks(e.books), t.importBooks();
                  break;
                case "cancel_import":
                  d.hideChooseBook(),
                    (window.location.href = "".concat(
                      o["j"],
                      "/app#/import/kindle"
                    ));
                  break;
              }
            });
        }
        return (
          Object(i["a"])(e, [
            {
              key: "init",
              value: function (e) {
                a["a"].log("init called");
                var t = this;
                null === this.tabId
                  ? chrome.runtime.sendMessage(
                      { action: "get-options" },
                      function (n) {
                        a["a"].log("received get-options answer"),
                          (t.options = n.options),
                          (t.tabId = n.tabId),
                          e && e.apply(t);
                      }
                    )
                  : e && e.apply(t);
              },
            },
            {
              key: "isOn",
              value: function () {
                return null !== this.sidebar;
              },
            },
            {
              key: "turnOn",
              value: function () {
                var e = this;
                this.isOn() ||
                  this.init(function () {
                    e.accessToken && d.setToken(e.accessToken), e.startApp();
                  });
              },
            },
            {
              key: "startApp",
              value: function () {
                d.importRequested() &&
                  (d.shouldChooseBooks()
                    ? (d.initializeBookList(), d.showChooseBook())
                    : this.importBooks());
              },
            },
            {
              key: "importBooks",
              value: function () {
                var e = this;
                d.importRequested() &&
                  (d.showProgress(),
                  d.initializeBookList().then(function () {
                    setTimeout(function () {
                      d.authenticate(e.sceu)
                        .then(function () {
                          d.processChain().then(function (e) {
                            d.completeImport(e);
                          });
                        })
                        .catch(function () {
                          d.showProgress(),
                            d.showError(
                              chrome.i18n.getMessage(
                                "browserExtensionIsNotConnected"
                              ),
                              '<a href="'
                                .concat(o["j"], '/login">')
                                .concat(
                                  chrome.i18n.getMessage("login"),
                                  "</a> "
                                )
                                .concat(chrome.i18n.getMessage("andTryAgain"))
                            );
                        });
                    }, 4);
                  }));
              },
            },
          ]),
          e
        );
      })();
    a["a"].log("[content-kindle] start"),
      document.documentElement.getAttribute("__snippetKindleScriptLoaded__") ||
        (document.documentElement.setAttribute(
          "__snippetKindleScriptLoaded__",
          "yes"
        ),
        new h());
  },
  "86cc": function (e, t, n) {
    var r = n("cb7c"),
      i = n("c69a"),
      o = n("6a99"),
      a = Object.defineProperty;
    t.f = n("9e1e")
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  "88d8": function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  9: function (e, t, n) {
    e.exports = n("859d");
  },
  9395: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n("88d8");
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" === typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          i.forEach(function (t) {
            Object(r["a"])(e, t, n[t]);
          });
      }
      return e;
    }
  },
  "9b43": function (e, t, n) {
    var r = n("d8e8");
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  "9c6c": function (e, t, n) {
    var r = n("2b4c")("unscopables"),
      i = Array.prototype;
    void 0 == i[r] && n("32e9")(i, r, {}),
      (e.exports = function (e) {
        i[r][e] = !0;
      });
  },
  "9def": function (e, t, n) {
    var r = n("4588"),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  "9e1e": function (e, t, n) {
    e.exports = !n("79e5")(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  a481: function (e, t, n) {
    "use strict";
    var r = n("cb7c"),
      i = n("4bf8"),
      o = n("9def"),
      a = n("4588"),
      s = n("0390"),
      u = n("5f1b"),
      c = Math.max,
      l = Math.min,
      f = Math.floor,
      p = /\$([$&`']|\d\d?|<[^>]*>)/g,
      d = /\$([$&`']|\d\d?)/g,
      h = function (e) {
        return void 0 === e ? e : String(e);
      };
    n("214f")("replace", 2, function (e, t, n, g) {
      return [
        function (r, i) {
          var o = e(this),
            a = void 0 == r ? void 0 : r[t];
          return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
        },
        function (e, t) {
          var i = g(n, e, this, t);
          if (i.done) return i.value;
          var f = r(e),
            p = String(this),
            d = "function" === typeof t;
          d || (t = String(t));
          var m = f.global;
          if (m) {
            var y = f.unicode;
            f.lastIndex = 0;
          }
          var b = [];
          while (1) {
            var x = u(f, p);
            if (null === x) break;
            if ((b.push(x), !m)) break;
            var w = String(x[0]);
            "" === w && (f.lastIndex = s(p, o(f.lastIndex), y));
          }
          for (var k = "", T = 0, E = 0; E < b.length; E++) {
            x = b[E];
            for (
              var C = String(x[0]),
                S = c(l(a(x.index), p.length), 0),
                A = [],
                j = 1;
              j < x.length;
              j++
            )
              A.push(h(x[j]));
            var D = x.groups;
            if (d) {
              var L = [C].concat(A, S, p);
              void 0 !== D && L.push(D);
              var N = String(t.apply(void 0, L));
            } else N = v(C, p, S, A, D, t);
            S >= T && ((k += p.slice(T, S) + N), (T = S + C.length));
          }
          return k + p.slice(T);
        },
      ];
      function v(e, t, r, o, a, s) {
        var u = r + e.length,
          c = o.length,
          l = d;
        return (
          void 0 !== a && ((a = i(a)), (l = p)),
          n.call(s, l, function (n, i) {
            var s;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, r);
              case "'":
                return t.slice(u);
              case "<":
                s = a[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return n;
                if (l > c) {
                  var p = f(l / 10);
                  return 0 === p
                    ? n
                    : p <= c
                    ? void 0 === o[p - 1]
                      ? i.charAt(1)
                      : o[p - 1] + i.charAt(1)
                    : n;
                }
                s = o[l - 1];
            }
            return void 0 === s ? "" : s;
          })
        );
      }
    });
  },
  aae3: function (e, t, n) {
    var r = n("d3f4"),
      i = n("2d95"),
      o = n("2b4c")("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  ac6a: function (e, t, n) {
    for (
      var r = n("cadf"),
        i = n("0d58"),
        o = n("2aba"),
        a = n("7726"),
        s = n("32e9"),
        u = n("84f2"),
        c = n("2b4c"),
        l = c("iterator"),
        f = c("toStringTag"),
        p = u.Array,
        d = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        h = i(d),
        g = 0;
      g < h.length;
      g++
    ) {
      var v,
        m = h[g],
        y = d[m],
        b = a[m],
        x = b && b.prototype;
      if (x && (x[l] || s(x, l, p), x[f] || s(x, f, m), (u[m] = p), y))
        for (v in r) x[v] || o(x, v, r[v], !0);
    }
  },
  b0c5: function (e, t, n) {
    "use strict";
    var r = n("520a");
    n("5ca1")(
      { target: "RegExp", proto: !0, forced: r !== /./.exec },
      { exec: r }
    );
  },
  be13: function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  c366: function (e, t, n) {
    var r = n("6821"),
      i = n("9def"),
      o = n("77f1");
    e.exports = function (e) {
      return function (t, n, a) {
        var s,
          u = r(t),
          c = i(u.length),
          l = o(a, c);
        if (e && n != n) {
          while (c > l) if (((s = u[l++]), s != s)) return !0;
        } else
          for (; c > l; l++)
            if ((e || l in u) && u[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  c69a: function (e, t, n) {
    e.exports =
      !n("9e1e") &&
      !n("79e5")(function () {
        return (
          7 !=
          Object.defineProperty(n("230e")("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  ca5a: function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  cadf: function (e, t, n) {
    "use strict";
    var r = n("9c6c"),
      i = n("d53b"),
      o = n("84f2"),
      a = n("6821");
    (e.exports = n("01f9")(
      Array,
      "Array",
      function (e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  cb7c: function (e, t, n) {
    var r = n("d3f4");
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  cd1c: function (e, t, n) {
    var r = n("e853");
    e.exports = function (e, t) {
      return new (r(e))(t);
    };
  },
  cdba: function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ce10: function (e, t, n) {
    var r = n("69a8"),
      i = n("6821"),
      o = n("c366")(!1),
      a = n("613b")("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        s = i(e),
        u = 0,
        c = [];
      for (n in s) n != a && r(s, n) && c.push(n);
      while (t.length > u) r(s, (n = t[u++])) && (~o(c, n) || c.push(n));
      return c;
    };
  },
  d3f4: function (e, t) {
    e.exports = function (e) {
      return "object" === typeof e ? null !== e : "function" === typeof e;
    };
  },
  d53b: function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  d8e8: function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  e11e: function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  e853: function (e, t, n) {
    var r = n("d3f4"),
      i = n("1169"),
      o = n("2b4c")("species");
    e.exports = function (e) {
      var t;
      return (
        i(e) &&
          ((t = e.constructor),
          "function" != typeof t ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && ((t = t[o]), null === t && (t = void 0))),
        void 0 === t ? Array : t
      );
    };
  },
  ebd6: function (e, t, n) {
    var r = n("cb7c"),
      i = n("d8e8"),
      o = n("2b4c")("species");
    e.exports = function (e, t) {
      var n,
        a = r(e).constructor;
      return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n);
    };
  },
  fa5b: function (e, t, n) {
    e.exports = n("5537")("native-function-to-string", Function.toString);
  },
  fab2: function (e, t, n) {
    var r = n("7726").document;
    e.exports = r && r.documentElement;
  },
});
