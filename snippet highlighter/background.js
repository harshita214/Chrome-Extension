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
    n((n.s = 6));
})({
  "01f9": function (e, t, n) {
    "use strict";
    var r = n("2d00"),
      i = n("5ca1"),
      o = n("2aba"),
      a = n("32e9"),
      s = n("84f2"),
      c = n("41a0"),
      u = n("7f20"),
      l = n("38fd"),
      f = n("2b4c")("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = "@@iterator",
      h = "keys",
      g = "values",
      v = function () {
        return this;
      };
    e.exports = function (e, t, n, m, y, b, x) {
      c(n, t, m);
      var w,
        T,
        S,
        k = function (e) {
          if (!d && e in O) return O[e];
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
        E = t + " Iterator",
        C = y == g,
        j = !1,
        O = e.prototype,
        A = O[f] || O[p] || (y && O[y]),
        D = A || k(y),
        L = y ? (C ? k("entries") : D) : void 0,
        _ = ("Array" == t && O.entries) || A;
      if (
        (_ &&
          ((S = l(_.call(new e()))),
          S !== Object.prototype &&
            S.next &&
            (u(S, E, !0), r || "function" == typeof S[f] || a(S, f, v))),
        C &&
          A &&
          A.name !== g &&
          ((j = !0),
          (D = function () {
            return A.call(this);
          })),
        (r && !x) || (!d && !j && O[f]) || a(O, f, D),
        (s[t] = D),
        (s[E] = v),
        y)
      )
        if (((w = { values: C ? D : k(g), keys: b ? D : k(h), entries: L }), x))
          for (T in w) T in O || o(O, T, w[T]);
        else i(i.P + i.F * (d || j), t, w);
      return w;
    };
  },
  "025e": function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return i;
    }),
      n.d(t, "m", function () {
        return s;
      }),
      n.d(t, "k", function () {
        return c;
      }),
      n.d(t, "l", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "h", function () {
        return d;
      }),
      n.d(t, "g", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return v;
      }),
      n.d(t, "c", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return y;
      }),
      n.d(t, "b", function () {
        return b;
      });
    n("ac4d"),
      n("ac6a"),
      n("6b54"),
      n("6762"),
      n("2fdb"),
      n("aef6"),
      n("f559"),
      n("28a5"),
      n("3b2b"),
      n("a481"),
      n("386d");
    var r = n("5fb0");
    function i(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : location.search;
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var n = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        r = n.exec(t);
      return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "));
    }
    var o = [];
    function a(e) {
      for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = t[n].trim();
      return t && t.length
        ? t.filter(function (e) {
            return e && e.length > 0;
          })
        : [];
    }
    function s(e, t) {
      if (e.startsWith("http")) {
        if (c(e)) return !0;
        var n;
        n = t ? a(t).concat(r["a"]) : o.concat(r["a"]);
        for (var i = 0; i < n.length; i++) if (e.startsWith(n[i])) return !0;
        return !1;
      }
      return !0;
    }
    function c(e) {
      if (!e) return !1;
      var t = new URL(e);
      return (
        !(!t.pathname.endsWith(".pdf") && !t.href.endsWith(".pdf")) ||
        !(!e.startsWith(chrome.extension.getURL("")) || !e.includes(".pdf"))
      );
    }
    function u(e) {
      if (!e) return !1;
      var t = new URL(e);
      return !(
        (!t.pathname.endsWith(".pdf") && !t.href.endsWith(".pdf")) ||
        !e.startsWith(chrome.extension.getURL(""))
      );
    }
    function l(e) {
      return e.startsWith("file:");
    }
    function f() {
      return "undefined" !== typeof chrome
        ? "undefined" !== typeof browser
          ? "Firefox"
          : "Chrome"
        : "Edge";
    }
    function d() {
      return "Firefox" === f();
    }
    function p() {
      return "https://gosnippet.test" === r["j"];
    }
    function h(e, t, n) {
      var r = new URL(e),
        i = r.search,
        o = new URLSearchParams(i);
      return o.append(t, n), (r.search = o.toString()), r.toString();
    }
    function g(e, t) {
      var n = window.location;
      t && (n = new URL(t)), (n = n.search.substring(1));
      for (var r = n.split("&"), i = 0; i < r.length; i++) {
        var o = r[i].split("=");
        if (o[0] == e) return o[1];
      }
    }
    chrome.storage.local.get(["disabledDomains"], function (e) {
      "string" === typeof e.disabledDomains &&
        e.disabledDomains.length &&
        (o = a(e.disabledDomains));
    }),
      chrome.storage.onChanged.addListener(function (e) {
        e.disabledDomains &&
          "string" === typeof e.disabledDomains.newValue &&
          e.disabledDomains.newValue.length &&
          (o = a(e.disabledDomains.newValue));
      });
    var v = function (e, t) {
        return null === e ? "" : e.length > t ? e.substring(0, t) + "..." : e;
      },
      m = function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ["click_from", "next_jump_to_id", "openDirect"];
        if (((t = e ? new URL(e) : window.location), t.search)) {
          var r = new URLSearchParams(t.search),
            i = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var s, c = n[Symbol.iterator]();
              !(i = (s = c.next()).done);
              i = !0
            ) {
              var u = s.value;
              r.has(u) && r.delete(u);
            }
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              i || null == c.return || c.return();
            } finally {
              if (o) throw a;
            }
          }
          t.search = r.toString();
        }
        return t.toString();
      },
      y = function () {
        return "".concat(f(), " ").concat(chrome.runtime.getManifest().version);
      };
    function b(e, t, n) {
      for (var r = !1, i = 0; i < n.length; i++)
        n[i].id === e &&
          (n[i].parent_id === t
            ? (r = !0)
            : n[i].parent_id && (r = b(n[i].parent_id, t, n)));
      return r;
    }
  },
  "02f4": function (e, t, n) {
    var r = n("4588"),
      i = n("be13");
    e.exports = function (e) {
      return function (t, n) {
        var o,
          a,
          s = String(i(t)),
          c = r(n),
          u = s.length;
        return c < 0 || c >= u
          ? e
            ? ""
            : void 0
          : ((o = s.charCodeAt(c)),
            o < 55296 ||
            o > 56319 ||
            c + 1 === u ||
            (a = s.charCodeAt(c + 1)) < 56320 ||
            a > 57343
              ? e
                ? s.charAt(c)
                : o
              : e
              ? s.slice(c, c + 2)
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
        c = 2 == e,
        u = 3 == e,
        l = 4 == e,
        f = 6 == e,
        d = 5 == e || f,
        p = t || s;
      return function (t, s, h) {
        for (
          var g,
            v,
            m = o(t),
            y = i(m),
            b = r(s, h, 3),
            x = a(y.length),
            w = 0,
            T = n ? p(t, x) : c ? p(t, 0) : void 0;
          x > w;
          w++
        )
          if ((d || w in y) && ((g = y[w]), (v = b(g, w, m)), e))
            if (n) T[w] = v;
            else if (v)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return w;
                case 2:
                  T.push(g);
              }
            else if (l) return !1;
        return f ? -1 : u || l ? l : T;
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
        c = Object.getPrototypeOf,
        u = a.slice,
        l = a.concat,
        f = a.push,
        d = a.indexOf,
        p = {},
        h = p.toString,
        g = p.hasOwnProperty,
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
      function T(e, t, n) {
        t = t || s;
        var r,
          i = t.createElement("script");
        if (((i.text = e), n)) for (r in w) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i);
      }
      function S(e) {
        return null == e
          ? e + ""
          : "object" === typeof e || "function" === typeof e
          ? p[h.call(e)] || "object"
          : typeof e;
      }
      var k = "3.3.1",
        E = function (e, t) {
          return new E.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function j(e) {
        var t = !!e && "length" in e && e.length,
          n = S(e);
        return (
          !b(e) &&
          !x(e) &&
          ("array" === n ||
            0 === t ||
            ("number" === typeof t && t > 0 && t - 1 in e))
        );
      }
      (E.fn = E.prototype =
        {
          jquery: k,
          constructor: E,
          length: 0,
          toArray: function () {
            return u.call(this);
          },
          get: function (e) {
            return null == e
              ? u.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return E.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              E.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(u.apply(this, arguments));
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
        (E.extend = E.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              c = arguments.length,
              u = !1;
            for (
              "boolean" === typeof a &&
                ((u = a), (a = arguments[s] || {}), s++),
                "object" === typeof a || b(a) || (a = {}),
                s === c && ((a = this), s--);
              s < c;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (n = a[t]),
                    (r = e[t]),
                    a !== r &&
                      (u && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                        ? (i
                            ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && E.isPlainObject(n) ? n : {}),
                          (a[t] = E.extend(u, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        E.extend({
          expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== h.call(e)) &&
              ((t = c(e)),
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
            T(e);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (j(e)) {
              for (n = e.length; r < n; r++)
                if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(C, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (j(Object(e))
                  ? E.merge(n, "string" === typeof e ? [e] : e)
                  : f.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : d.call(t, e, n);
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
            if (j(e))
              for (r = e.length; o < r; o++)
                (i = t(e[o], o, n)), null != i && a.push(i);
            else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
            return l.apply([], a);
          },
          guid: 1,
          support: y,
        }),
        "function" === typeof Symbol &&
          (E.fn[Symbol.iterator] = a[Symbol.iterator]),
        E.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var O =
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
            c,
            u,
            l,
            f,
            d,
            p,
            h,
            g,
            v,
            m,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            S = 0,
            k = ae(),
            E = ae(),
            C = ae(),
            j = function (e, t) {
              return e === t && (f = !0), 0;
            },
            O = {}.hasOwnProperty,
            A = [],
            D = A.pop,
            L = A.push,
            _ = A.push,
            N = A.slice,
            I = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            P =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R =
              "\\[" +
              M +
              "*(" +
              q +
              ")(?:" +
              M +
              "*([*^$|!~]?=)" +
              M +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              q +
              "))|)" +
              M +
              "*\\]",
            H =
              ":(" +
              q +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            U = new RegExp(
              "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
              "g"
            ),
            B = new RegExp("^" + M + "*," + M + "*"),
            W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            $ = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            z = new RegExp(H),
            V = new RegExp("^" + q + "$"),
            G = {
              ID: new RegExp("^#(" + q + ")"),
              CLASS: new RegExp("^\\.(" + q + ")"),
              TAG: new RegExp("^(" + q + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + H),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  M +
                  "*(?:([+-]|)" +
                  M +
                  "*(\\d+)|))" +
                  M +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  M +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  M +
                  "*((?:-\\d)?\\d*)" +
                  M +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
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
              d();
            },
            ie = ye(
              function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            _.apply((A = N.call(w.childNodes)), w.childNodes),
              A[w.childNodes.length].nodeType;
          } catch (e) {
            _ = {
              apply: A.length
                ? function (e, t) {
                    L.apply(e, N.call(t));
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
              u,
              l,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" !== typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), g)
            ) {
              if (11 !== T && (f = J.exec(e)))
                if ((o = f[1])) {
                  if (9 === T) {
                    if (!(u = t.getElementById(o))) return r;
                    if (u.id === o) return r.push(u), r;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    b(t, u) &&
                    u.id === o
                  )
                    return r.push(u), r;
                } else {
                  if (f[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return _.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !C[e + " "] && (!v || !v.test(e))) {
                if (1 !== T) (y = t), (m = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  (l = t.getAttribute("id"))
                    ? (l = l.replace(te, ne))
                    : t.setAttribute("id", (l = x)),
                    (h = a(e)),
                    (s = h.length);
                  while (s--) h[s] = "#" + l + " " + me(h[s]);
                  (m = h.join(",")), (y = (Q.test(e) && ge(t.parentNode)) || t);
                }
                if (m)
                  try {
                    return _.apply(r, y.querySelectorAll(m)), r;
                  } catch (e) {
                  } finally {
                    l === x && t.removeAttribute("id");
                  }
              }
            }
            return c(e.replace(U, "$1"), t, r, i);
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
          function ce(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
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
          function de(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function pe(e) {
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
          (d = oe.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a !== p && 9 === a.nodeType && a.documentElement
                ? ((p = a),
                  (h = p.documentElement),
                  (g = !o(p)),
                  w !== p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", re, !1)
                      : i.attachEvent && i.attachEvent("onunload", re)),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
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
                  (n.qsa = K.test(p.querySelectorAll)) &&
                    (ce(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + M + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          v.push(".#.+[+~]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + M + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", H);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
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
                  (j = t
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
                            ? e === p || (e.ownerDocument === w && b(w, e))
                              ? -1
                              : t === p || (t.ownerDocument === w && b(w, t))
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
                          return e === p
                            ? -1
                            : t === p
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
                  p)
                : p;
            }),
          (oe.matches = function (e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== p && d(e),
              (t = t.replace($, "='$1']")),
              n.matchesSelector &&
                g &&
                !C[t + " "] &&
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
            return oe(t, p, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && d(e), b(e, t);
          }),
          (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && O.call(r.attrHandle, t.toLowerCase())
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
              e.sort(j),
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
              match: G,
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
                  return G["CHILD"].test(e[0])
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
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                      k(e, function (e) {
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
                            ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
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
                    : function (t, n, c) {
                        var u,
                          l,
                          f,
                          d,
                          p,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !c && !s,
                          b = !1;
                        if (v) {
                          if (o) {
                            while (g) {
                              d = t;
                              while ((d = d[g]))
                                if (
                                  s
                                    ? d.nodeName.toLowerCase() === m
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            (d = v),
                              (f = d[x] || (d[x] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (u = l[e] || []),
                              (p = u[0] === T && u[1]),
                              (b = p && u[2]),
                              (d = p && v.childNodes[p]);
                            while (
                              (d = (++p && d && d[g]) || (b = p = 0) || h.pop())
                            )
                              if (1 === d.nodeType && ++b && d === t) {
                                l[e] = [T, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              ((d = t),
                              (f = d[x] || (d[x] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (u = l[e] || []),
                              (p = u[0] === T && u[1]),
                              (b = p)),
                            !1 === b)
                          )
                            while (
                              (d = (++p && d && d[g]) || (b = p = 0) || h.pop())
                            )
                              if (
                                (s
                                  ? d.nodeName.toLowerCase() === m
                                  : 1 === d.nodeType) &&
                                ++b &&
                                (y &&
                                  ((f = d[x] || (d[x] = {})),
                                  (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                                  (l[e] = [T, b])),
                                d === t)
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
                    r = s(e.replace(U, "$1"));
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
                    V.test(e || "") || oe.error("unsupported lang: " + e),
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
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: pe(!1),
                disabled: pe(!0),
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
                  return Y.test(e.nodeName);
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
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = de(t);
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
              s = S++;
            return t.first
              ? function (t, n, i) {
                  while ((t = t[r]))
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, c) {
                  var u,
                    l,
                    f,
                    d = [T, s];
                  if (c) {
                    while ((t = t[r]))
                      if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
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
                          if ((u = l[o]) && u[0] === T && u[1] === s)
                            return (d[2] = u[2]);
                          if (((l[o] = d), (d[2] = e(t, n, c)))) return !0;
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
            for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = Te(r)),
              i && !i[x] && (i = Te(i, o)),
              se(function (o, a, s, c) {
                var u,
                  l,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  g = o || xe(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : we(g, d, e, s, c),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, c), r)) {
                  (u = we(m, p)), r(u, [], s, c), (l = u.length);
                  while (l--) (f = u[l]) && (m[p[l]] = !(v[p[l]] = f));
                }
                if (o) {
                  if (i || e) {
                    if (i) {
                      (u = []), (l = m.length);
                      while (l--) (f = m[l]) && u.push((v[l] = f));
                      i(null, (m = []), u, c);
                    }
                    l = m.length;
                    while (l--)
                      (f = m[l]) &&
                        (u = i ? I(o, f) : d[l]) > -1 &&
                        (o[u] = !(a[u] = f));
                  }
                } else (m = we(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, c) : _.apply(a, m);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                c = a ? 1 : 0,
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
                d = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== u)) ||
                      ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              c < o;
              c++
            )
              if ((n = r.relative[e[c].type])) d = [ye(be(d), n)];
              else {
                if (
                  ((n = r.filter[e[c].type].apply(null, e[c].matches)), n[x])
                ) {
                  for (i = ++c; i < o; i++) if (r.relative[e[i].type]) break;
                  return Te(
                    c > 1 && be(d),
                    c > 1 &&
                      me(
                        e
                          .slice(0, c - 1)
                          .concat({ value: " " === e[c - 2].type ? "*" : "" })
                      ).replace(U, "$1"),
                    n,
                    c < i && Se(e.slice(c, i)),
                    i < o && Se((e = e.slice(i))),
                    i < o && me(e)
                  );
                }
                d.push(n);
              }
            return be(d);
          }
          function ke(e, t) {
            var n = t.length > 0,
              i = e.length > 0,
              o = function (o, a, s, c, l) {
                var f,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  b = o && [],
                  x = [],
                  w = u,
                  S = o || (i && r.find["TAG"]("*", l)),
                  k = (T += null == w ? 1 : Math.random() || 0.1),
                  E = S.length;
                for (
                  l && (u = a === p || a || l);
                  y !== E && null != (f = S[y]);
                  y++
                ) {
                  if (i && f) {
                    (h = 0), a || f.ownerDocument === p || (d(f), (s = !g));
                    while ((v = e[h++]))
                      if (v(f, a || p, s)) {
                        c.push(f);
                        break;
                      }
                    l && (T = k);
                  }
                  n && ((f = !v && f) && m--, o && b.push(f));
                }
                if (((m += y), n && y !== m)) {
                  h = 0;
                  while ((v = t[h++])) v(b, x, a, s);
                  if (o) {
                    if (m > 0) while (y--) b[y] || x[y] || (x[y] = D.call(c));
                    x = we(x);
                  }
                  _.apply(c, x),
                    l &&
                      !o &&
                      x.length > 0 &&
                      m + t.length > 1 &&
                      oe.uniqueSort(c);
                }
                return l && ((T = k), (u = w)), b;
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
                  c,
                  u,
                  l = E[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (s = e), (c = []), (u = r.preFilter);
                while (s) {
                  for (a in ((n && !(i = B.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), c.push((o = []))),
                  (n = !1),
                  (i = W.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(U, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = G[a].exec(s)) ||
                      (u[a] && !(i = u[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : E(e, c).slice(0);
              }),
            (s = oe.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  o = C[e + " "];
                if (!o) {
                  t || (t = a(e)), (n = t.length);
                  while (n--) (o = Se(t[n])), o[x] ? r.push(o) : i.push(o);
                  (o = C(e, ke(i, r))), (o.selector = e);
                }
                return o;
              }),
            (c = oe.select =
              function (e, t, n, i) {
                var o,
                  c,
                  u,
                  l,
                  f,
                  d = "function" === typeof e && e,
                  p = !i && a((e = d.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    ((c = p[0] = p[0].slice(0)),
                    c.length > 2 &&
                      "ID" === (u = c[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[c[1].type])
                  ) {
                    if (
                      ((t = (r.find["ID"](u.matches[0].replace(Z, ee), t) ||
                        [])[0]),
                      !t)
                    )
                      return n;
                    d && (t = t.parentNode),
                      (e = e.slice(c.shift().value.length));
                  }
                  o = G["needsContext"].test(e) ? 0 : c.length;
                  while (o--) {
                    if (((u = c[o]), r.relative[(l = u.type)])) break;
                    if (
                      (f = r.find[l]) &&
                      (i = f(
                        u.matches[0].replace(Z, ee),
                        (Q.test(c[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((c.splice(o, 1), (e = i.length && me(c)), !e))
                        return _.apply(n, i), n;
                      break;
                    }
                  }
                }
                return (
                  (d || s(e, p))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (Q.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(j).join("") === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ue("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ue("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ue(P, function (e, t, n) {
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
      (E.find = O),
        (E.expr = O.selectors),
        (E.expr[":"] = E.expr.pseudos),
        (E.uniqueSort = E.unique = O.uniqueSort),
        (E.text = O.getText),
        (E.isXMLDoc = O.isXML),
        (E.contains = O.contains),
        (E.escapeSelector = O.escape);
      var A = function (e, t, n) {
          var r = [],
            i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
              if (i && E(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        D = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        L = E.expr.match.needsContext;
      function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(e, t, n) {
        return b(t)
          ? E.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? E.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" !== typeof t
          ? E.grep(e, function (e) {
              return d.call(t, e) > -1 !== n;
            })
          : E.filter(t, e, n);
      }
      (E.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? E.find.matchesSelector(r, e)
              ? [r]
              : []
            : E.find.matches(
                e,
                E.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        E.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" !== typeof e)
              return this.pushStack(
                E(e).filter(function () {
                  for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return r > 1 ? E.uniqueSort(n) : n;
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
              "string" === typeof e && L.test(e) ? E(e) : e || [],
              !1
            ).length;
          },
        });
      var P,
        M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        q = (E.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || P), "string" === typeof e)) {
            if (
              ((r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : M.exec(e)),
              !r || (!r[1] && t))
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof E ? t[0] : t),
                E.merge(
                  this,
                  E.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : s,
                    !0
                  )
                ),
                N.test(r[1]) && E.isPlainObject(t))
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
              : e(E)
            : E.makeArray(e, this);
        });
      (q.prototype = E.fn), (P = E(s));
      var R = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function F(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
      }
      E.fn.extend({
        has: function (e) {
          var t = E(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" !== typeof e && E(e);
          if (!L.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && E.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" === typeof e
              ? d.call(E(e), this[0])
              : d.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        E.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return A(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return A(e, "parentNode", n);
            },
            next: function (e) {
              return F(e, "nextSibling");
            },
            prev: function (e) {
              return F(e, "previousSibling");
            },
            nextAll: function (e) {
              return A(e, "nextSibling");
            },
            prevAll: function (e) {
              return A(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return A(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return A(e, "previousSibling", n);
            },
            siblings: function (e) {
              return D((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return D(e.firstChild);
            },
            contents: function (e) {
              return _(e, "iframe")
                ? e.contentDocument
                : (_(e, "template") && (e = e.content || e),
                  E.merge([], e.childNodes));
            },
          },
          function (e, t) {
            E.fn[e] = function (n, r) {
              var i = E.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" === typeof r && (i = E.filter(r, i)),
                this.length > 1 &&
                  (H[e] || E.uniqueSort(i), R.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var U = /[^\x20\t\r\n\f]+/g;
      function B(e) {
        var t = {};
        return (
          E.each(e.match(U) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function W(e) {
        return e;
      }
      function $(e) {
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
      (E.Callbacks = function (e) {
        e = "string" === typeof e ? B(e) : E.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          c = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
              n = a.shift();
              while (++s < o.length)
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            }
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    E.each(n, function (n, r) {
                      b(r)
                        ? (e.unique && u.has(r)) || o.push(r)
                        : r && r.length && "string" !== S(r) && t(r);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                E.each(arguments, function (e, t) {
                  var n;
                  while ((n = E.inArray(t, o, n)) > -1)
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? E.inArray(e, o) > -1 : o.length > 0;
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
                  t || c()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        E.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  E.Callbacks("memory"),
                  E.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
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
                  return E.Deferred(function (n) {
                    E.each(t, function (t, r) {
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
                        c = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < o)) {
                            if (((n = r.apply(s, c)), n === t.promise()))
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" === typeof n ||
                                "function" === typeof n) &&
                              n.then),
                              b(u)
                                ? i
                                  ? u.call(n, a(o, t, W, i), a(o, t, $, i))
                                  : (o++,
                                    u.call(
                                      n,
                                      a(o, t, W, i),
                                      a(o, t, $, i),
                                      a(o, t, W, t.notifyWith)
                                    ))
                                : (r !== W && ((s = void 0), (c = [n])),
                                  (i || t.resolveWith)(s, c));
                          }
                        },
                        l = i
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                E.Deferred.exceptionHook &&
                                  E.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= o &&
                                    (r !== $ && ((s = void 0), (c = [n])),
                                    t.rejectWith(s, c));
                              }
                            };
                      e
                        ? l()
                        : (E.Deferred.getStackHook &&
                            (l.stackTrace = E.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  return E.Deferred(function (n) {
                    t[0][3].add(a(0, n, b(i) ? i : W, n.notifyWith)),
                      t[1][3].add(a(0, n, b(e) ? e : W)),
                      t[2][3].add(a(0, n, b(r) ? r : $));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? E.extend(e, i) : i;
                },
              },
              o = {};
            return (
              E.each(t, function (e, n) {
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
              i = u.call(arguments),
              o = E.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? u.call(arguments) : n),
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
      var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (E.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          V.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (E.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var G = E.Deferred();
      function X() {
        s.removeEventListener("DOMContentLoaded", X),
          n.removeEventListener("load", X),
          E.ready();
      }
      (E.fn.ready = function (e) {
        return (
          G.then(e).catch(function (e) {
            E.readyException(e);
          }),
          this
        );
      }),
        E.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) ||
              ((E.isReady = !0),
              (!0 !== e && --E.readyWait > 0) || G.resolveWith(s, [E]));
          },
        }),
        (E.ready.then = G.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(E.ready)
          : (s.addEventListener("DOMContentLoaded", X),
            n.addEventListener("load", X));
      var Y = function (e, t, n, r, i, o, a) {
          var s = 0,
            c = e.length,
            u = null == n;
          if ("object" === S(n))
            for (s in ((i = !0), n)) Y(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            b(r) || (a = !0),
            u &&
              (a
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(E(e), n);
                  }))),
            t)
          )
            for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : u ? t.call(e) : c ? t(e[0], n) : o;
        },
        K = /^-ms-/,
        J = /-([a-z])/g;
      function Q(e, t) {
        return t.toUpperCase();
      }
      function Z(e) {
        return e.replace(K, "ms-").replace(J, Q);
      }
      var ee = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function te() {
        this.expando = E.expando + te.uid++;
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
                  : ((t = Z(t)), (t = t in r ? [t] : t.match(U) || [])),
                  (n = t.length);
                while (n--) delete r[t[n]];
              }
              (void 0 === t || E.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t);
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
      E.extend({
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
        E.fn.extend({
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
              : Y(
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
        E.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = ne.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = ne.access(e, t, E.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = E._queueHooks(e, t),
              a = function () {
                E.dequeue(e, t);
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
                empty: E.Callbacks("once memory").add(function () {
                  ne.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        E.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" !== typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? E.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              E.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = E.Deferred(),
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
      var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ue = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        le = ["Top", "Right", "Bottom", "Left"],
        fe = function (e, t) {
          return (
            (e = t || e),
            "none" === e.style.display ||
              ("" === e.style.display &&
                E.contains(e.ownerDocument, e) &&
                "none" === E.css(e, "display"))
          );
        },
        de = function (e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
        };
      function pe(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return E.css(e, t, "");
              },
          c = s(),
          u = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
          l = (E.cssNumber[t] || ("px" !== u && +c)) && ue.exec(E.css(e, t));
        if (l && l[3] !== u) {
          (c /= 2), (u = u || l[3]), (l = +c || 1);
          while (a--)
            E.style(e, t, l + u),
              (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
              (l /= o);
          (l *= 2), E.style(e, t, l + u), (n = n || []);
        }
        return (
          n &&
            ((l = +l || +c || 0),
            (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = l), (r.end = i))),
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
          (i = E.css(t, "display")),
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
      E.fn.extend({
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
                fe(this) ? E(this).show() : E(this).hide();
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
          void 0 === t || (t && _(e, t)) ? E.merge([e], n) : n
        );
      }
      function Te(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          ne.set(e[n], "globalEval", !t || ne.get(t[n], "globalEval"));
      }
      (xe.optgroup = xe.option),
        (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
        (xe.th = xe.td);
      var Se = /<|&#?\w+;/;
      function ke(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            c,
            u,
            l,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if (((o = e[p]), o || 0 === o))
            if ("object" === S(o)) E.merge(d, o.nodeType ? [o] : o);
            else if (Se.test(o)) {
              (a = a || f.appendChild(t.createElement("div"))),
                (s = (ye.exec(o) || ["", ""])[1].toLowerCase()),
                (c = xe[s] || xe._default),
                (a.innerHTML = c[1] + E.htmlPrefilter(o) + c[2]),
                (l = c[0]);
              while (l--) a = a.lastChild;
              E.merge(d, a.childNodes),
                (a = f.firstChild),
                (a.textContent = "");
            } else d.push(t.createTextNode(o));
        (f.textContent = ""), (p = 0);
        while ((o = d[p++]))
          if (r && E.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = E.contains(o.ownerDocument, o)),
            (a = we(f.appendChild(o), "script")),
            u && Te(a),
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
      var Ee = s.documentElement,
        Ce = /^key/,
        je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oe = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function De() {
        return !1;
      }
      function Le() {
        try {
          return s.activeElement;
        } catch (e) {}
      }
      function _e(e, t, n, r, i, o) {
        var a, s;
        if ("object" === typeof t) {
          for (s in ("string" !== typeof n && ((r = r || n), (n = void 0)), t))
            _e(e, s, n, r, t[s], o);
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
          i = De;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            (i = function (e) {
              return E().off(e), a.apply(this, arguments);
            }),
            (i.guid = a.guid || (a.guid = E.guid++))),
          e.each(function () {
            E.event.add(this, t, i, r, n);
          })
        );
      }
      (E.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            c,
            u,
            l,
            f,
            d,
            p,
            h,
            g,
            v = ne.get(e);
          if (v) {
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              i && E.find.matchesSelector(Ee, i),
              n.guid || (n.guid = E.guid++),
              (c = v.events) || (c = v.events = {}),
              (a = v.handle) ||
                (a = v.handle =
                  function (t) {
                    return "undefined" !== typeof E &&
                      E.event.triggered !== t.type
                      ? E.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              (t = (t || "").match(U) || [""]),
              (u = t.length);
            while (u--)
              (s = Oe.exec(t[u]) || []),
                (p = g = s[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((f = E.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = E.event.special[p] || {}),
                  (l = E.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && E.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (d = c[p]) ||
                    ((d = c[p] = []),
                    (d.delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                  (E.event.global[p] = !0));
          }
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            c,
            u,
            l,
            f,
            d,
            p,
            h,
            g,
            v = ne.hasData(e) && ne.get(e);
          if (v && (c = v.events)) {
            (t = (t || "").match(U) || [""]), (u = t.length);
            while (u--)
              if (
                ((s = Oe.exec(t[u]) || []),
                (p = g = s[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                (f = E.event.special[p] || {}),
                  (p = (r ? f.delegateType : f.bindType) || p),
                  (d = c[p] || []),
                  (s =
                    s[2] &&
                    new RegExp(
                      "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )),
                  (a = o = d.length);
                while (o--)
                  (l = d[o]),
                    (!i && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (s && !s.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (d.splice(o, 1),
                      l.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, l));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    E.removeEvent(e, p, v.handle),
                  delete c[p]);
              } else for (p in c) E.event.remove(e, p + t[u], n, r, !0);
            E.isEmptyObject(c) && ne.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = E.event.fix(e),
            c = new Array(arguments.length),
            u = (ne.get(this, "events") || {})[s.type] || [],
            l = E.event.special[s.type] || {};
          for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, s))
          ) {
            (a = E.event.handlers.call(this, s, u)), (t = 0);
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
                    (E.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, c)),
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
            c = t.delegateCount,
            u = e.target;
          if (c && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < c; n++)
                  (r = t[n]),
                    (i = r.selector + " "),
                    void 0 === a[i] &&
                      (a[i] = r.needsContext
                        ? E(i, this).index(u) > -1
                        : E.find(i, this, null, [u]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            c < t.length && s.push({ elem: u, handlers: t.slice(c) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(E.Event.prototype, e, {
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
          return e[E.expando] ? e : new E.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== Le() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === Le() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && _(this, "input"))
                return this.click(), !1;
            },
            _default: function (e) {
              return _(e.target, "a");
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
        (E.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (E.Event = function (e, t) {
          if (!(this instanceof E.Event)) return new E.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : De),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && E.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
          constructor: E.Event,
          isDefaultPrevented: De,
          isPropagationStopped: De,
          isImmediatePropagationStopped: De,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        E.each(
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
              return null == e.which && Ce.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && je.test(e.type)
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
          E.event.addProp
        ),
        E.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            E.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || E.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        E.fn.extend({
          on: function (e, t, n, r) {
            return _e(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return _e(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                E(e.delegateTarget).off(
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
              !1 === n && (n = De),
              this.each(function () {
                E.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ne =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function qe(e, t) {
        return (
          (_(e, "table") &&
            _(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            E(e).children("tbody")[0]) ||
          e
        );
      }
      function Re(e) {
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
      function Fe(e, t) {
        var n, r, i, o, a, s, c, u;
        if (1 === t.nodeType) {
          if (
            ne.hasData(e) &&
            ((o = ne.access(e)), (a = ne.set(t, o)), (u = o.events), u)
          )
            for (i in (delete a.handle, (a.events = {}), u))
              for (n = 0, r = u[i].length; n < r; n++)
                E.event.add(t, i, u[i][n]);
          re.hasData(e) &&
            ((s = re.access(e)), (c = E.extend({}, s)), re.set(t, c));
        }
      }
      function Ue(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, r) {
        t = l.apply([], t);
        var i,
          o,
          a,
          s,
          c,
          u,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = b(h);
        if (
          g ||
          (d > 1 && "string" === typeof h && !y.checkClone && Pe.test(h))
        )
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r);
          });
        if (
          d &&
          ((i = ke(t, e[0].ownerDocument, !1, e, r)),
          (o = i.firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = E.map(we(i, "script"), Re), s = a.length; f < d; f++)
            (c = i),
              f !== p &&
                ((c = E.clone(c, !0, !0)), s && E.merge(a, we(c, "script"))),
              n.call(e[f], c, f);
          if (s)
            for (
              u = a[a.length - 1].ownerDocument, E.map(a, He), f = 0;
              f < s;
              f++
            )
              (c = a[f]),
                be.test(c.type || "") &&
                  !ne.access(c, "globalEval") &&
                  E.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? E._evalUrl && E._evalUrl(c.src)
                    : T(c.textContent.replace(Me, ""), u, c));
        }
        return e;
      }
      function We(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || E.cleanData(we(r)),
            r.parentNode &&
              (n && E.contains(r.ownerDocument, r) && Te(we(r, "script")),
              r.parentNode.removeChild(r));
        return e;
      }
      E.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            c = E.contains(e.ownerDocument, e);
          if (
            !y.noCloneChecked &&
            (1 === e.nodeType || 11 === e.nodeType) &&
            !E.isXMLDoc(e)
          )
            for (a = we(s), o = we(e), r = 0, i = o.length; r < i; r++)
              Ue(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || we(e), a = a || we(s), r = 0, i = o.length;
                r < i;
                r++
              )
                Fe(o[r], a[r]);
            else Fe(e, s);
          return (
            (a = we(s, "script")),
            a.length > 0 && Te(a, !c && we(e, "script")),
            s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = E.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (ee(n)) {
              if ((t = n[ne.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                n[ne.expando] = void 0;
              }
              n[re.expando] && (n[re.expando] = void 0);
            }
        },
      }),
        E.fn.extend({
          detach: function (e) {
            return We(this, e, !0);
          },
          remove: function (e) {
            return We(this, e);
          },
          text: function (e) {
            return Y(
              this,
              function (e) {
                return void 0 === e
                  ? E.text(this)
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
            return Be(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = qe(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return Be(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = qe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Be(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (E.cleanData(we(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return E.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return Y(
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
                  e = E.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (E.cleanData(we(t, !1)), (t.innerHTML = e));
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
            return Be(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                E.inArray(this, e) < 0 &&
                  (E.cleanData(we(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        E.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            E.fn[e] = function (e) {
              for (
                var n, r = [], i = E(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  E(i[a])[t](n),
                  f.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var $e = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        ze = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ve = new RegExp(le.join("|"), "i");
      function Ge(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || ze(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            "" !== a || E.contains(e.ownerDocument, e) || (a = E.style(e, t)),
            !y.pixelBoxStyles() &&
              $e.test(a) &&
              Ve.test(t) &&
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
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (l.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Ee.appendChild(u).appendChild(l);
            var e = n.getComputedStyle(l);
            (r = "1%" !== e.top),
              (c = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (o = 36 === l.offsetWidth || "absolute"),
              Ee.removeChild(u),
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
          c,
          u = s.createElement("div"),
          l = s.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
          E.extend(y, {
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
              return e(), c;
            },
            scrollboxSize: function () {
              return e(), o;
            },
          }));
      })();
      var Ye = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" },
        Ze = ["Webkit", "Moz", "ms"],
        et = s.createElement("div").style;
      function tt(e) {
        if (e in et) return e;
        var t = e[0].toUpperCase() + e.slice(1),
          n = Ze.length;
        while (n--) if (((e = Ze[n] + t), e in et)) return e;
      }
      function nt(e) {
        var t = E.cssProps[e];
        return t || (t = E.cssProps[e] = tt(e) || e), t;
      }
      function rt(e, t, n) {
        var r = ue.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          c = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (c += E.css(e, n + le[a], !0, i)),
            r
              ? ("content" === n && (c -= E.css(e, "padding" + le[a], !0, i)),
                "margin" !== n &&
                  (c -= E.css(e, "border" + le[a] + "Width", !0, i)))
              : ((c += E.css(e, "padding" + le[a], !0, i)),
                "padding" !== n
                  ? (c += E.css(e, "border" + le[a] + "Width", !0, i))
                  : (s += E.css(e, "border" + le[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (c += Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - 0.5
              )
            )),
          c
        );
      }
      function ot(e, t, n) {
        var r = ze(e),
          i = Ge(e, t, r),
          o = "border-box" === E.css(e, "boxSizing", !1, r),
          a = o;
        if ($e.test(i)) {
          if (!n) return i;
          i = "auto";
        }
        return (
          (a = a && (y.boxSizingReliable() || i === e.style[t])),
          ("auto" === i ||
            (!parseFloat(i) && "inline" === E.css(e, "display", !1, r))) &&
            ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (i = parseFloat(i) || 0),
          i + it(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
      }
      function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i);
      }
      E.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ge(e, "opacity");
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
              c = Ke.test(t),
              u = e.style;
            if (
              (c || (t = nt(s)),
              (a = E.cssHooks[t] || E.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : u[t];
            (o = typeof n),
              "string" === o &&
                (i = ue.exec(n)) &&
                i[1] &&
                ((n = pe(e, t, i)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (c ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = Z(t),
            c = Ke.test(t);
          return (
            c || (t = nt(s)),
            (a = E.cssHooks[t] || E.cssHooks[s]),
            a && "get" in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Ge(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        E.each(["height", "width"], function (e, t) {
          E.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ye.test(E.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : de(e, Je, function () {
                      return ot(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = ze(e),
                a = "border-box" === E.css(e, "boxSizing", !1, o),
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
                  (i = ue.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = E.css(e, t))),
                rt(e, n, s)
              );
            },
          };
        }),
        (E.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ge(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  de(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (E.cssHooks[e + t] = {
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
            "margin" !== e && (E.cssHooks[e + t].set = rt);
        }),
        E.fn.extend({
          css: function (e, t) {
            return Y(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = ze(e), i = t.length; a < i; a++)
                    o[t[a]] = E.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (E.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || E.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (E.cssNumber[n] ? "" : "px"));
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
                    E.easing[this.easing](
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
                : ((t = E.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function (e) {
              E.fx.step[e.prop]
                ? E.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[E.cssProps[e.prop]] &&
                    !E.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : E.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (E.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (E.fx = at.prototype.init),
        (E.fx.step = {});
      var st,
        ct,
        ut = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ft() {
        ct &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, E.fx.interval),
          E.fx.tick());
      }
      function dt() {
        return (
          n.setTimeout(function () {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function pt(e, t) {
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
          c,
          u,
          l,
          f = "width" in t || "height" in t,
          d = this,
          p = {},
          h = e.style,
          g = e.nodeType && fe(e),
          v = ne.get(e, "fxshow");
        for (r in (n.queue ||
          ((a = E._queueHooks(e, "fx")),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ut.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            p[r] = (v && v[r]) || E.style(e, r);
          }
        if (((c = !E.isEmptyObject(t)), c || !E.isEmptyObject(p)))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            (u = v && v.display),
            null == u && (u = ne.get(e, "display")),
            (l = E.css(e, "display")),
            "none" === l &&
              (u
                ? (l = u)
                : (ve([e], !0),
                  (u = e.style.display || u),
                  (l = E.css(e, "display")),
                  ve([e]))),
            ("inline" === l || ("inline-block" === l && null != u)) &&
              "none" === E.css(e, "float") &&
              (c ||
                (d.done(function () {
                  h.display = u;
                }),
                null == u && ((l = h.display), (u = "none" === l ? "" : l))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            d.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (c = !1),
          p))
            c ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = ne.access(e, "fxshow", { display: u })),
              o && (v.hidden = !g),
              g && ve([e], !0),
              d.done(function () {
                for (r in (g || ve([e]), ne.remove(e, "fxshow"), p))
                  E.style(e, r, p[r]);
              })),
              (c = ht(g ? v[r] : 0, r, d)),
              r in v ||
                ((v[r] = c.start), g && ((c.end = c.start), (c.start = 0)));
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
            (a = E.cssHooks[r]),
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
          s = E.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (i) return !1;
            for (
              var t = st || dt(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = n / u.duration || 0,
                o = 1 - r,
                a = 0,
                c = u.tweens.length;
              a < c;
              a++
            )
              u.tweens[a].run(o);
            return (
              s.notifyWith(e, [u, o, n]),
              o < 1 && c
                ? n
                : (c || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            );
          },
          u = s.promise({
            elem: e,
            props: E.extend({}, t),
            opts: E.extend(
              !0,
              { specialEasing: {}, easing: E.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: st || dt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = E.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) u.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                  : s.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          l = u.props;
        for (vt(l, u.opts.specialEasing); o < a; o++)
          if (((r = mt.prefilters[o].call(u, e, l, u.opts)), r))
            return (
              b(r.stop) &&
                (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          E.map(l, ht, u),
          b(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          E.fx.timer(E.extend(c, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (E.Animation = E.extend(mt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return pe(n.elem, e, ue.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          b(e) ? ((t = e), (e = ["*"])) : (e = e.match(U));
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
        (E.speed = function (e, t, n) {
          var r =
            e && "object" === typeof e
              ? E.extend({}, e)
              : {
                  complete: n || (!n && t) || (b(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !b(t) && t),
                };
          return (
            E.fx.off
              ? (r.duration = 0)
              : "number" !== typeof r.duration &&
                (r.duration in E.fx.speeds
                  ? (r.duration = E.fx.speeds[r.duration])
                  : (r.duration = E.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              b(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
            }),
            r
          );
        }),
        E.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(fe)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = E.isEmptyObject(e),
              o = E.speed(t, n, r),
              a = function () {
                var t = mt(this, E.extend({}, e), o);
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
                  o = E.timers,
                  a = ne.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || E.dequeue(this, e);
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
                  o = E.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    E.queue(this, e, []),
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
        E.each(["toggle", "show", "hide"], function (e, t) {
          var n = E.fn[t];
          E.fn[t] = function (e, r, i) {
            return null == e || "boolean" === typeof e
              ? n.apply(this, arguments)
              : this.animate(pt(t, !0), e, r, i);
          };
        }),
        E.each(
          {
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            E.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (E.timers = []),
        (E.fx.tick = function () {
          var e,
            t = 0,
            n = E.timers;
          for (st = Date.now(); t < n.length; t++)
            (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
          n.length || E.fx.stop(), (st = void 0);
        }),
        (E.fx.timer = function (e) {
          E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function () {
          ct || ((ct = !0), ft());
        }),
        (E.fx.stop = function () {
          ct = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function (e, t) {
          return (
            (e = (E.fx && E.fx.speeds[e]) || e),
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
        bt = E.expr.attrHandle;
      E.fn.extend({
        attr: function (e, t) {
          return Y(this, E.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            E.removeAttr(this, e);
          });
        },
      }),
        E.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" === typeof e.getAttribute
                ? E.prop(e, t, n)
                : ((1 === o && E.isXMLDoc(e)) ||
                    (i =
                      E.attrHooks[t.toLowerCase()] ||
                      (E.expr.match.bool.test(t) ? yt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void E.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : ((r = E.find.attr(e, t)), null == r ? void 0 : r));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!y.radioValue && "radio" === t && _(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(U);
            if (i && 1 === e.nodeType)
              while ((n = i[r++])) e.removeAttribute(n);
          },
        }),
        (yt = {
          set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = bt[t] || E.find.attr;
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
      function Tt(e) {
        var t = e.match(U) || [];
        return t.join(" ");
      }
      function St(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function kt(e) {
        return Array.isArray(e)
          ? e
          : ("string" === typeof e && e.match(U)) || [];
      }
      E.fn.extend({
        prop: function (e, t) {
          return Y(this, E.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[E.propFix[e] || e];
          });
        },
      }),
        E.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && E.isXMLDoc(e)) ||
                  ((t = E.propFix[t] || t), (i = E.propHooks[t])),
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
                var t = E.find.attr(e, "tabindex");
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
          (E.propHooks.selected = {
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
        E.each(
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
            E.propFix[this.toLowerCase()] = this;
          }
        ),
        E.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              c = 0;
            if (b(e))
              return this.each(function (t) {
                E(this).addClass(e.call(this, t, St(this)));
              });
            if (((t = kt(e)), t.length))
              while ((n = this[c++]))
                if (
                  ((i = St(n)), (r = 1 === n.nodeType && " " + Tt(i) + " "), r)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  (s = Tt(r)), i !== s && n.setAttribute("class", s);
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
              c = 0;
            if (b(e))
              return this.each(function (t) {
                E(this).removeClass(e.call(this, t, St(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((t = kt(e)), t.length))
              while ((n = this[c++]))
                if (
                  ((i = St(n)), (r = 1 === n.nodeType && " " + Tt(i) + " "), r)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    while (r.indexOf(" " + o + " ") > -1)
                      r = r.replace(" " + o + " ", " ");
                  (s = Tt(r)), i !== s && n.setAttribute("class", s);
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
                  E(this).toggleClass(e.call(this, n, St(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r) {
                    (i = 0), (o = E(this)), (a = kt(e));
                    while ((t = a[i++]))
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  } else (void 0 !== e && "boolean" !== n) || ((t = St(this)), t && ne.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ne.get(this, "__className__") || ""));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            t = " " + e + " ";
            while ((n = this[r++]))
              if (1 === n.nodeType && (" " + Tt(St(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Et = /\r/g;
      E.fn.extend({
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
                  ((i = r ? e.call(this, n, E(this).val()) : e),
                  null == i
                    ? (i = "")
                    : "number" === typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = E.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    E.valHooks[this.type] ||
                    E.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? ((t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (n = t.get(i, "value"))
                ? n
                : ((n = i.value),
                  "string" === typeof n
                    ? n.replace(Et, "")
                    : null == n
                    ? ""
                    : n))
            : void 0;
        },
      }),
        E.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = E.find.attr(e, "value");
                return null != t ? t : Tt(E.text(e));
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
                  c = a ? o + 1 : i.length;
                for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                  if (
                    ((n = i[r]),
                    (n.selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !_(n.parentNode, "optgroup")))
                  ) {
                    if (((t = E(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                var n,
                  r,
                  i = e.options,
                  o = E.makeArray(t),
                  a = i.length;
                while (a--)
                  (r = i[a]),
                    (r.selected =
                      E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        E.each(["radio", "checkbox"], function () {
          (E.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = E.inArray(E(e).val(), t) > -1);
            },
          }),
            y.checkOn ||
              (E.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (y.focusin = "onfocusin" in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        jt = function (e) {
          e.stopPropagation();
        };
      E.extend(E.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            c,
            u,
            l,
            f,
            d,
            p,
            h = [r || s],
            v = g.call(e, "type") ? e.type : e,
            m = g.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = p = c = r = r || s),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Ct.test(v + E.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((m = v.split(".")), (v = m.shift()), m.sort()),
              (l = v.indexOf(":") < 0 && "on" + v),
              (e = e[E.expando]
                ? e
                : new E.Event(v, "object" === typeof e && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : E.makeArray(t, [e])),
              (d = E.event.special[v] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !x(r)) {
              for (
                u = d.delegateType || v, Ct.test(u + v) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (c = a);
              c === (r.ownerDocument || s) &&
                h.push(c.defaultView || c.parentWindow || n);
            }
            o = 0;
            while ((a = h[o++]) && !e.isPropagationStopped())
              (p = a),
                (e.type = o > 1 ? u : d.bindType || v),
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
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !ee(r) ||
                (l &&
                  b(r[v]) &&
                  !x(r) &&
                  ((c = r[l]),
                  c && (r[l] = null),
                  (E.event.triggered = v),
                  e.isPropagationStopped() && p.addEventListener(v, jt),
                  r[v](),
                  e.isPropagationStopped() && p.removeEventListener(v, jt),
                  (E.event.triggered = void 0),
                  c && (r[l] = c))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
          E.event.trigger(r, null, t);
        },
      }),
        E.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              E.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0);
          },
        }),
        y.focusin ||
          E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              E.event.simulate(t, e.target, E.event.fix(e));
            };
            E.event.special[t] = {
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
      var Ot = n.location,
        At = Date.now(),
        Dt = /\?/;
      E.parseXML = function (e) {
        var t;
        if (!e || "string" !== typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            E.error("Invalid XML: " + e),
          t
        );
      };
      var Lt = /\[\]$/,
        _t = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
      function Pt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          E.each(t, function (t, i) {
            n || Lt.test(e)
              ? r(e, i)
              : Pt(
                  e + "[" + ("object" === typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== S(t)) r(e, t);
        else for (i in t) Pt(e + "[" + i + "]", t[i], n, r);
      }
      (E.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = b(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
          E.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Pt(n, e[n], t, i);
        return r.join("&");
      }),
        E.fn.extend({
          serialize: function () {
            return E.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = E.prop(this, "elements");
              return e ? E.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !E(this).is(":disabled") &&
                  It.test(this.nodeName) &&
                  !Nt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = E(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? E.map(n, function (e) {
                      return { name: t.name, value: e.replace(_t, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(_t, "\r\n") };
              })
              .get();
          },
        });
      var Mt = /%20/g,
        qt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ut = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Wt = {},
        $t = {},
        zt = "*/".concat("*"),
        Vt = s.createElement("a");
      function Gt(e) {
        return function (t, n) {
          "string" !== typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(U) || [];
          if (b(n))
            while ((r = o[i++]))
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Xt(e, t, n, r) {
        var i = {},
          o = e === $t;
        function a(s) {
          var c;
          return (
            (i[s] = !0),
            E.each(e[s] || [], function (e, s) {
              var u = s(t, n, r);
              return "string" !== typeof u || o || i[u]
                ? o
                  ? !(c = u)
                  : void 0
                : (t.dataTypes.unshift(u), a(u), !1);
            }),
            c
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function Yt(e, t) {
        var n,
          r,
          i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e;
      }
      function Kt(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.contents,
          c = e.dataTypes;
        while ("*" === c[0])
          c.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (i in s)
            if (s[i] && s[i].test(r)) {
              c.unshift(i);
              break;
            }
        if (c[0] in n) o = c[0];
        else {
          for (i in n) {
            if (!c[0] || e.converters[i + " " + c[0]]) {
              o = i;
              break;
            }
            a || (a = i);
          }
          o = o || a;
        }
        if (o) return o !== c[0] && c.unshift(o), n[o];
      }
      function Jt(e, t, n, r) {
        var i,
          o,
          a,
          s,
          c,
          u = {},
          l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = l.shift();
        while (o)
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (c = o),
            (o = l.shift()),
            o)
          )
            if ("*" === o) o = c;
            else if ("*" !== c && c !== o) {
              if (((a = u[c + " " + o] || u["* " + o]), !a))
                for (i in u)
                  if (
                    ((s = i.split(" ")),
                    s[1] === o &&
                      ((a = u[c + " " + s[0]] || u["* " + s[0]]), a))
                  ) {
                    !0 === a
                      ? (a = u[i])
                      : !0 !== u[i] && ((o = s[0]), l.unshift(s[1]));
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
                      error: a ? e : "No conversion from " + c + " to " + o,
                    };
                  }
            }
        return { state: "success", data: t };
      }
      (Vt.href = Ot.href),
        E.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ot.href,
            type: "GET",
            isLocal: Ft.test(Ot.protocol),
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
              "text xml": E.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Yt(Yt(e, E.ajaxSettings), t) : Yt(E.ajaxSettings, e);
          },
          ajaxPrefilter: Gt(Wt),
          ajaxTransport: Gt($t),
          ajax: function (e, t) {
            "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              c,
              u,
              l,
              f,
              d,
              p,
              h = E.ajaxSetup({}, t),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
              m = E.Deferred(),
              y = E.Callbacks("once memory"),
              b = h.statusCode || {},
              x = {},
              w = {},
              T = "canceled",
              S = {
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
                    if (l) S.always(e[S.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), k(0, t), this;
                },
              };
            if (
              (m.promise(S),
              (h.url = ((e || h.url || Ot.href) + "").replace(
                Bt,
                Ot.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(U) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              u = s.createElement("a");
              try {
                (u.href = h.url),
                  (u.href = u.href),
                  (h.crossDomain =
                    Vt.protocol + "//" + Vt.host !==
                    u.protocol + "//" + u.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" !== typeof h.data &&
                (h.data = E.param(h.data, h.traditional)),
              Xt(Wt, h, t, S),
              l)
            )
              return S;
            for (d in ((f = E.event && h.global),
            f && 0 === E.active++ && E.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ut.test(h.type)),
            (i = h.url.replace(qt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Mt, "+"))
              : ((p = h.url.slice(i.length)),
                h.data &&
                  (h.processData || "string" === typeof h.data) &&
                  ((i += (Dt.test(i) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Rt, "$1")),
                  (p = (Dt.test(i) ? "&" : "?") + "_=" + At++ + p)),
                (h.url = i + p)),
            h.ifModified &&
              (E.lastModified[i] &&
                S.setRequestHeader("If-Modified-Since", E.lastModified[i]),
              E.etag[i] && S.setRequestHeader("If-None-Match", E.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              S.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || l))
              return S.abort();
            if (
              ((T = "abort"),
              y.add(h.complete),
              S.done(h.success),
              S.fail(h.error),
              (r = Xt($t, h, t, S)),
              r)
            ) {
              if (((S.readyState = 1), f && v.trigger("ajaxSend", [S, h]), l))
                return S;
              h.async &&
                h.timeout > 0 &&
                (c = n.setTimeout(function () {
                  S.abort("timeout");
                }, h.timeout));
              try {
                (l = !1), r.send(x, k);
              } catch (e) {
                if (l) throw e;
                k(-1, e);
              }
            } else k(-1, "No Transport");
            function k(e, t, a, s) {
              var u,
                d,
                p,
                x,
                w,
                T = t;
              l ||
                ((l = !0),
                c && n.clearTimeout(c),
                (r = void 0),
                (o = s || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                a && (x = Kt(h, S, a)),
                (x = Jt(h, x, S, u)),
                u
                  ? (h.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")),
                      w && (E.lastModified[i] = w),
                      (w = S.getResponseHeader("etag")),
                      w && (E.etag[i] = w)),
                    204 === e || "HEAD" === h.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = x.state), (d = x.data), (p = x.error), (u = !p)))
                  : ((p = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || T) + ""),
                u ? m.resolveWith(g, [d, T, S]) : m.rejectWith(g, [S, T, p]),
                S.statusCode(b),
                (b = void 0),
                f &&
                  v.trigger(u ? "ajaxSuccess" : "ajaxError", [S, h, u ? d : p]),
                y.fireWith(g, [S, T]),
                f &&
                  (v.trigger("ajaxComplete", [S, h]),
                  --E.active || E.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return E.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return E.get(e, void 0, t, "script");
          },
        }),
        E.each(["get", "post"], function (e, t) {
          E[t] = function (e, n, r, i) {
            return (
              b(n) && ((i = i || r), (r = n), (n = void 0)),
              E.ajax(
                E.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  E.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (E._evalUrl = function (e) {
          return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        E.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (b(e) && (e = e.call(this[0])),
                (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                  E(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = E(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = b(e);
            return this.each(function (n) {
              E(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  E(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (E.expr.pseudos.hidden = function (e) {
          return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (E.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Qt = { 0: 200, 1223: 204 },
        Zt = E.ajaxSettings.xhr();
      (y.cors = !!Zt && "withCredentials" in Zt),
        (y.ajax = Zt = !!Zt),
        E.ajaxTransport(function (e) {
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
                            Qt[s.status] || s.status,
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
        E.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return E.globalEval(e), e;
            },
          },
        }),
        E.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        E.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function (r, i) {
                (t = E("<script>")
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
      E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = en.pop() || E.expando + "_" + At++;
          return (this[e] = !0), e;
        },
      }),
        E.ajaxPrefilter("json jsonp", function (e, t, r) {
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
                  (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || E.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? E(n).removeProp(i) : (n[i] = o),
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
        (E.parseHTML = function (e, t, n) {
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
              (i = N.exec(e)),
              (o = !n && []),
              i
                ? [t.createElement(i[1])]
                : ((i = ke([e], t, o)),
                  o && o.length && E(o).remove(),
                  E.merge([], i.childNodes)));
          var r, i, o;
        }),
        (E.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
            b(t)
              ? ((n = t), (t = void 0))
              : t && "object" === typeof t && (i = "POST"),
            a.length > 0 &&
              E.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
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
        E.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            E.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (E.expr.pseudos.animated = function (e) {
          return E.grep(E.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (E.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              c,
              u,
              l = E.css(e, "position"),
              f = E(e),
              d = {};
            "static" === l && (e.style.position = "relative"),
              (s = f.offset()),
              (o = E.css(e, "top")),
              (c = E.css(e, "left")),
              (u =
                ("absolute" === l || "fixed" === l) &&
                (o + c).indexOf("auto") > -1),
              u
                ? ((r = f.position()), (a = r.top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
              b(t) && (t = t.call(e, n, E.extend({}, s))),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, d) : f.css(d);
          },
        }),
        E.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    E.offset.setOffset(this, e, t);
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
              if ("fixed" === E.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                (t = this.offset()),
                  (n = r.ownerDocument),
                  (e = r.offsetParent || n.documentElement);
                while (
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === E.css(e, "position")
                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  ((i = E(e).offset()),
                  (i.top += E.css(e, "borderTopWidth", !0)),
                  (i.left += E.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - E.css(r, "marginTop", !0),
                left: t.left - i.left - E.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              var e = this.offsetParent;
              while (e && "static" === E.css(e, "position")) e = e.offsetParent;
              return e || Ee;
            });
          },
        }),
        E.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function (r) {
              return Y(
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
        E.each(["top", "left"], function (e, t) {
          E.cssHooks[t] = Xe(y.pixelPosition, function (e, n) {
            if (n)
              return (n = Ge(e, t)), $e.test(n) ? E(e).position()[t] + "px" : n;
          });
        }),
        E.each({ Height: "height", Width: "width" }, function (e, t) {
          E.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              E.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" !== typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Y(
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
                      ? E.css(t, n, s)
                      : E.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        E.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            E.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        E.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        E.fn.extend({
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
        (E.proxy = function (e, t) {
          var n, r, i;
          if (("string" === typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
            return (
              (r = u.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(u.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || E.guid++),
              i
            );
        }),
        (E.holdReady = function (e) {
          e ? E.readyWait++ : E.ready(!0);
        }),
        (E.isArray = Array.isArray),
        (E.parseJSON = JSON.parse),
        (E.nodeName = _),
        (E.isFunction = b),
        (E.isWindow = x),
        (E.camelCase = Z),
        (E.type = S),
        (E.now = Date.now),
        (E.isNumeric = function (e) {
          var t = E.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (r = []),
        (i = function () {
          return E;
        }.apply(t, r)),
        void 0 === i || (e.exports = i);
      var nn = n.jQuery,
        rn = n.$;
      return (
        (E.noConflict = function (e) {
          return (
            n.$ === E && (n.$ = rn), e && n.jQuery === E && (n.jQuery = nn), E
          );
        }),
        o || (n.jQuery = n.$ = E),
        E
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
  "11e9": function (e, t, n) {
    var r = n("52a7"),
      i = n("4630"),
      o = n("6821"),
      a = n("6a99"),
      s = n("69a8"),
      c = n("c69a"),
      u = Object.getOwnPropertyDescriptor;
    t.f = n("9e1e")
      ? u
      : function (e, t) {
          if (((e = o(e)), (t = a(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (s(e, t)) return i(!r.f.call(e, t), e[t]);
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
            c = 0;
          while (s > c) r.f(e, (n = a[c++]), t[n]);
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
      c = n("520a"),
      u = s("species"),
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
      var d = s(e),
        p = !o(function () {
          var t = {};
          return (
            (t[d] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        h = p
          ? !o(function () {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function () {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[u] = function () {
                    return n;
                  })),
                n[d](""),
                !t
              );
            })
          : void 0;
      if (!p || !h || ("replace" === e && !l) || ("split" === e && !f)) {
        var g = /./[d],
          v = n(a, d, ""[e], function (e, t, n, r, i) {
            return t.exec === c
              ? p && !i
                ? { done: !0, value: g.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          }),
          m = v[0],
          y = v[1];
        r(String.prototype, e, m),
          i(
            RegExp.prototype,
            d,
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
  2366: function (e, t) {
    for (var n = [], r = 0; r < 256; ++r)
      n[r] = (r + 256).toString(16).substr(1);
    function i(e, t) {
      var r = t || 0,
        i = n;
      return [
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        "-",
        i[e[r++]],
        i[e[r++]],
        "-",
        i[e[r++]],
        i[e[r++]],
        "-",
        i[e[r++]],
        i[e[r++]],
        "-",
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
      ].join("");
    }
    e.exports = i;
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
      c = n("5f1b"),
      u = n("520a"),
      l = n("79e5"),
      f = Math.min,
      d = [].push,
      p = "split",
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
          "c" == "abbc"[p](/(b)*/)[1] ||
          4 != "test"[p](/(?:)/, -1)[h] ||
          2 != "ab"[p](/(?:ab)*/)[h] ||
          4 != "."[p](/(.?)(.?)/)[h] ||
          "."[p](/()()/)[h] > 1 ||
          ""[p](/.?/)[h]
            ? function (e, t) {
                var i = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return n.call(i, e, t);
                var o,
                  a,
                  s,
                  c = [],
                  l =
                    (e.ignoreCase ? "i" : "") +
                    (e.multiline ? "m" : "") +
                    (e.unicode ? "u" : "") +
                    (e.sticky ? "y" : ""),
                  f = 0,
                  p = void 0 === t ? v : t >>> 0,
                  m = new RegExp(e.source, l + "g");
                while ((o = u.call(m, i))) {
                  if (
                    ((a = m[g]),
                    a > f &&
                      (c.push(i.slice(f, o.index)),
                      o[h] > 1 && o.index < i[h] && d.apply(c, o.slice(1)),
                      (s = o[0][h]),
                      (f = a),
                      c[h] >= p))
                  )
                    break;
                  m[g] === o.index && m[g]++;
                }
                return (
                  f === i[h]
                    ? (!s && m.test("")) || c.push("")
                    : c.push(i.slice(f)),
                  c[h] > p ? c.slice(0, p) : c
                );
              }
            : "0"[p](void 0, 0)[h]
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
            var u = i(e),
              d = String(this),
              p = o(u, RegExp),
              h = u.unicode,
              g =
                (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (m ? "y" : "g"),
              b = new p(m ? u : "^(?:" + u.source + ")", g),
              x = void 0 === t ? v : t >>> 0;
            if (0 === x) return [];
            if (0 === d.length) return null === c(b, d) ? [d] : [];
            var w = 0,
              T = 0,
              S = [];
            while (T < d.length) {
              b.lastIndex = m ? T : 0;
              var k,
                E = c(b, m ? d : d.slice(T));
              if (
                null === E ||
                (k = f(s(b.lastIndex + (m ? 0 : T)), d.length)) === w
              )
                T = a(d, T, h);
              else {
                if ((S.push(d.slice(w, T)), S.length === x)) return S;
                for (var C = 1; C <= E.length - 1; C++)
                  if ((S.push(E[C]), S.length === x)) return S;
                T = w = k;
              }
            }
            return S.push(d.slice(w)), S;
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
      c = "toString",
      u = ("" + s).split(c);
    (n("8378").inspectSource = function (e) {
      return s.call(e);
    }),
      (e.exports = function (e, t, n, s) {
        var c = "function" == typeof n;
        c && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (c && (o(n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
            e === r
              ? (e[t] = n)
              : s
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, c, function () {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  "2aeb": function (e, t, n) {
    var r = n("cb7c"),
      i = n("1495"),
      o = n("e11e"),
      a = n("613b")("IE_PROTO"),
      s = function () {},
      c = "prototype",
      u = function () {
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
          (u = e.F);
        while (r--) delete u[c][o[r]];
        return u();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((s[c] = r(e)), (n = new s()), (s[c] = null), (n[a] = e))
            : (n = u()),
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
  "2fdb": function (e, t, n) {
    "use strict";
    var r = n("5ca1"),
      i = n("d2c8"),
      o = "includes";
    r(r.P + r.F * n("5147")(o), "String", {
      includes: function (e) {
        return !!~i(this, e, o).indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
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
  "37c8": function (e, t, n) {
    t.f = n("2b4c");
  },
  3846: function (e, t, n) {
    n("9e1e") &&
      "g" != /./g.flags &&
      n("86cc").f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n("0bfb"),
      });
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
            c = String(this),
            u = s.lastIndex;
          i(u, 0) || (s.lastIndex = 0);
          var l = o(s, c);
          return (
            i(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index
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
  "3a72": function (e, t, n) {
    var r = n("7726"),
      i = n("8378"),
      o = n("2d00"),
      a = n("37c8"),
      s = n("86cc").f;
    e.exports = function (e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
    };
  },
  "3b2b": function (e, t, n) {
    var r = n("7726"),
      i = n("5dbc"),
      o = n("86cc").f,
      a = n("9093").f,
      s = n("aae3"),
      c = n("0bfb"),
      u = r.RegExp,
      l = u,
      f = u.prototype,
      d = /a/g,
      p = /a/g,
      h = new u(d) !== d;
    if (
      n("9e1e") &&
      (!h ||
        n("79e5")(function () {
          return (
            (p[n("2b4c")("match")] = !1),
            u(d) != d || u(p) == p || "/a/i" != u(d, "i")
          );
        }))
    ) {
      u = function (e, t) {
        var n = this instanceof u,
          r = s(e),
          o = void 0 === t;
        return !n && r && e.constructor === u && o
          ? e
          : i(
              h
                ? new l(r && !o ? e.source : e, t)
                : l(
                    (r = e instanceof u) ? e.source : e,
                    r && o ? c.call(e) : t
                  ),
              n ? this : f,
              u
            );
      };
      for (
        var g = function (e) {
            (e in u) ||
              o(u, e, {
                configurable: !0,
                get: function () {
                  return l[e];
                },
                set: function (t) {
                  l[e] = t;
                },
              });
          },
          v = a(l),
          m = 0;
        v.length > m;

      )
        g(v[m++]);
      (f.constructor = u), (u.prototype = f), n("2aba")(r, "RegExp", u);
    }
    n("7a56")("RegExp");
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
  "456d": function (e, t, n) {
    var r = n("4bf8"),
      i = n("0d58");
    n("5eda")("keys", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  4588: function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  "460a": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return s;
      });
    var r = n("025e");
    function i(e, t) {
      chrome.storage.local.get(e, function (e) {
        t(e);
      });
    }
    function o(e, t) {
      var n = this;
      Object(r["h"])() && (e = JSON.parse(JSON.stringify(e))),
        chrome.storage.local.set(e, function () {
          t && t.call(n);
        });
    }
    function a(e) {
      chrome.storage.local.clear(e);
    }
    function s(e, t) {
      var n = this;
      chrome.storage.local.remove(e, function () {
        t && t.call(n);
      });
    }
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
  "504c": function (e, t, n) {
    var r = n("9e1e"),
      i = n("0d58"),
      o = n("6821"),
      a = n("52a7").f;
    e.exports = function (e) {
      return function (t) {
        var n,
          s = o(t),
          c = i(s),
          u = c.length,
          l = 0,
          f = [];
        while (u > l)
          (n = c[l++]), (r && !a.call(s, n)) || f.push(e ? [n, s[n]] : s[n]);
        return f;
      };
    };
  },
  5147: function (e, t, n) {
    var r = n("2b4c")("match");
    e.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[r] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  "520a": function (e, t, n) {
    "use strict";
    var r = n("0bfb"),
      i = RegExp.prototype.exec,
      o = String.prototype.replace,
      a = i,
      s = "lastIndex",
      c = (function () {
        var e = /a/,
          t = /b*/g;
        return i.call(e, "a"), i.call(t, "a"), 0 !== e[s] || 0 !== t[s];
      })(),
      u = void 0 !== /()??/.exec("")[1],
      l = c || u;
    l &&
      (a = function (e) {
        var t,
          n,
          a,
          l,
          f = this;
        return (
          u && (n = new RegExp("^" + f.source + "$(?!\\s)", r.call(f))),
          c && (t = f[s]),
          (a = i.call(f, e)),
          c && a && (f[s] = f.global ? a.index + a[0].length : t),
          u &&
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
  "52a7": function (e, t) {
    t.f = {}.propertyIsEnumerable;
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
      c = "prototype",
      u = function (e, t, n) {
        var l,
          f,
          d,
          p,
          h = e & u.F,
          g = e & u.G,
          v = e & u.S,
          m = e & u.P,
          y = e & u.B,
          b = g ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[c],
          x = g ? i : i[t] || (i[t] = {}),
          w = x[c] || (x[c] = {});
        for (l in (g && (n = t), n))
          (f = !h && b && void 0 !== b[l]),
            (d = (f ? b : n)[l]),
            (p =
              y && f
                ? s(d, r)
                : m && "function" == typeof d
                ? s(Function.call, d)
                : d),
            b && a(b, l, d, e & u.U),
            x[l] != d && o(x, l, p),
            m && w[l] != d && (w[l] = d);
      };
    (r.core = i),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u);
  },
  "5dbc": function (e, t, n) {
    var r = n("d3f4"),
      i = n("8b97").set;
    e.exports = function (e, t, n) {
      var o,
        a = t.constructor;
      return (
        a !== n &&
          "function" == typeof a &&
          (o = a.prototype) !== n.prototype &&
          r(o) &&
          i &&
          i(e, o),
        e
      );
    };
  },
  "5eda": function (e, t, n) {
    var r = n("5ca1"),
      i = n("8378"),
      o = n("79e5");
    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        r(
          r.S +
            r.F *
              o(function () {
                n(1);
              }),
          "Object",
          a
        );
    };
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
        return c;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return p;
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
      c = "UA-109423508-4",
      u = 10,
      l = "|:|:|:",
      f = 1,
      d = 3,
      p = 10;
  },
  6: function (e, t, n) {
    e.exports = n("fe77");
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
  6762: function (e, t, n) {
    "use strict";
    var r = n("5ca1"),
      i = n("c366")(!0);
    r(r.P, "Array", {
      includes: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      n("9c6c")("includes");
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
  "6b54": function (e, t, n) {
    "use strict";
    n("3846");
    var r = n("cb7c"),
      i = n("0bfb"),
      o = n("9e1e"),
      a = "toString",
      s = /./[a],
      c = function (e) {
        n("2aba")(RegExp.prototype, a, e, !0);
      };
    n("79e5")(function () {
      return "/a/b" != s.call({ source: "a", flags: "b" });
    })
      ? c(function () {
          var e = r(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? i.call(e)
              : void 0
          );
        })
      : s.name != a &&
        c(function () {
          return s.call(this);
        });
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
  "7a56": function (e, t, n) {
    "use strict";
    var r = n("7726"),
      i = n("86cc"),
      o = n("9e1e"),
      a = n("2b4c")("species");
    e.exports = function (e) {
      var t = r[e];
      o &&
        t &&
        !t[a] &&
        i.f(t, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
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
  "8b97": function (e, t, n) {
    var r = n("d3f4"),
      i = n("cb7c"),
      o = function (e, t) {
        if ((i(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, r) {
              try {
                (r = n("9b43")(
                  Function.call,
                  n("11e9").f(Object.prototype, "__proto__").set,
                  2
                )),
                  r(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, n) {
                return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  9093: function (e, t, n) {
    var r = n("ce10"),
      i = n("e11e").concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, i);
      };
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
      c = n("5f1b"),
      u = Math.max,
      l = Math.min,
      f = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      p = /\$([$&`']|\d\d?)/g,
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
            d = String(this),
            p = "function" === typeof t;
          p || (t = String(t));
          var m = f.global;
          if (m) {
            var y = f.unicode;
            f.lastIndex = 0;
          }
          var b = [];
          while (1) {
            var x = c(f, d);
            if (null === x) break;
            if ((b.push(x), !m)) break;
            var w = String(x[0]);
            "" === w && (f.lastIndex = s(d, o(f.lastIndex), y));
          }
          for (var T = "", S = 0, k = 0; k < b.length; k++) {
            x = b[k];
            for (
              var E = String(x[0]),
                C = u(l(a(x.index), d.length), 0),
                j = [],
                O = 1;
              O < x.length;
              O++
            )
              j.push(h(x[O]));
            var A = x.groups;
            if (p) {
              var D = [E].concat(j, C, d);
              void 0 !== A && D.push(A);
              var L = String(t.apply(void 0, D));
            } else L = v(E, d, C, j, A, t);
            C >= S && ((T += d.slice(S, C) + L), (S = C + E.length));
          }
          return T + d.slice(S);
        },
      ];
      function v(e, t, r, o, a, s) {
        var c = r + e.length,
          u = o.length,
          l = p;
        return (
          void 0 !== a && ((a = i(a)), (l = d)),
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
                return t.slice(c);
              case "<":
                s = a[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return n;
                if (l > u) {
                  var d = f(l / 10);
                  return 0 === d
                    ? n
                    : d <= u
                    ? void 0 === o[d - 1]
                      ? i.charAt(1)
                      : o[d - 1] + i.charAt(1)
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
  ac4d: function (e, t, n) {
    n("3a72")("asyncIterator");
  },
  ac6a: function (e, t, n) {
    for (
      var r = n("cadf"),
        i = n("0d58"),
        o = n("2aba"),
        a = n("7726"),
        s = n("32e9"),
        c = n("84f2"),
        u = n("2b4c"),
        l = u("iterator"),
        f = u("toStringTag"),
        d = c.Array,
        p = {
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
        h = i(p),
        g = 0;
      g < h.length;
      g++
    ) {
      var v,
        m = h[g],
        y = p[m],
        b = a[m],
        x = b && b.prototype;
      if (x && (x[l] || s(x, l, d), x[f] || s(x, f, m), (c[m] = d), y))
        for (v in r) x[v] || o(x, v, r[v], !0);
    }
  },
  aef6: function (e, t, n) {
    "use strict";
    var r = n("5ca1"),
      i = n("9def"),
      o = n("d2c8"),
      a = "endsWith",
      s = ""[a];
    r(r.P + r.F * n("5147")(a), "String", {
      endsWith: function (e) {
        var t = o(this, e, a),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(t.length),
          c = void 0 === n ? r : Math.min(i(n), r),
          u = String(e);
        return s ? s.call(t, u, c) : t.slice(c - u.length, c) === u;
      },
    });
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
          c = r(t),
          u = i(c.length),
          l = o(a, u);
        if (e && n != n) {
          while (u > l) if (((s = c[l++]), s != s)) return !0;
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  c64e: function (e, t, n) {
    var r = n("e1f4"),
      i = n("2366");
    function o(e, t, n) {
      var o = (t && n) || 0;
      "string" == typeof e &&
        ((t = "binary" === e ? new Array(16) : null), (e = null)),
        (e = e || {});
      var a = e.random || (e.rng || r)();
      if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[o + s] = a[s];
      return t || i(a);
    }
    e.exports = o;
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
        c = 0,
        u = [];
      for (n in s) n != a && r(s, n) && u.push(n);
      while (t.length > c) r(s, (n = t[c++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  d2c8: function (e, t, n) {
    var r = n("aae3"),
      i = n("be13");
    e.exports = function (e, t, n) {
      if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(e));
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
  e1f4: function (e, t) {
    var n =
      ("undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ("undefined" != typeof msCrypto &&
        "function" == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (n) {
      var r = new Uint8Array(16);
      e.exports = function () {
        return n(r), r;
      };
    } else {
      var i = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++)
          0 === (3 & t) && (e = 4294967296 * Math.random()),
            (i[t] = (e >>> ((3 & t) << 3)) & 255);
        return i;
      };
    }
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
  f559: function (e, t, n) {
    "use strict";
    var r = n("5ca1"),
      i = n("9def"),
      o = n("d2c8"),
      a = "startsWith",
      s = ""[a];
    r(r.P + r.F * n("5147")(a), "String", {
      startsWith: function (e) {
        var t = o(this, e, a),
          n = i(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          r = String(e);
        return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
      },
    });
  },
  fa5b: function (e, t, n) {
    e.exports = n("5537")("native-function-to-string", Function.toString);
  },
  fab2: function (e, t, n) {
    var r = n("7726").document;
    e.exports = r && r.documentElement;
  },
  fe77: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("88d8");
    n("456d"), n("7514");
    function i(e) {
      if (Array.isArray(e)) return e;
    }
    function o(e, t) {
      var n = [],
        r = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, s = e[Symbol.iterator]();
          !(r = (a = s.next()).done);
          r = !0
        )
          if ((n.push(a.value), t && n.length === t)) break;
      } catch (e) {
        (i = !0), (o = e);
      } finally {
        try {
          r || null == s["return"] || s["return"]();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    }
    function a() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
    function s(e, t) {
      return i(e) || o(e, t) || a();
    }
    n("cadf"), n("ffc1"), n("ac4d"), n("ac6a");
    var c = n("9395"),
      u = (n("f559"), n("cdba")),
      l = n("104e"),
      f = n("1b92"),
      d = n("0d83"),
      p = n("5fb0"),
      h = n("1157"),
      g = n.n(h),
      v = (function () {
        function e() {
          Object(u["a"])(this, e);
        }
        return (
          Object(l["a"])(e, [
            {
              key: "loginUser",
              value: function (e) {
                return g.a.ajax({
                  url: "".concat(p["g"], "/login"),
                  method: "POST",
                  data: { sceu: e },
                  headers: {
                    "X-Snippet-Extension": chrome.runtime.getManifest().version,
                  },
                });
              },
            },
            {
              key: "importKindleBook",
              value: function (e, t) {
                return g.a.ajax({
                  url: "".concat(p["g"], "/imports/").concat(e.importId),
                  method: "PUT",
                  headers: {
                    Authorization: "Bearer " + t,
                    Accept: "application/json",
                    "X-Snippet-Extension": chrome.runtime.getManifest().version,
                  },
                  data: JSON.stringify(e),
                  timeout: 0,
                });
              },
            },
            {
              key: "completeImportKindleBook",
              value: function (e, t) {
                return g.a.ajax({
                  url: "".concat(p["g"], "/imports/").concat(e.importId),
                  method: "PUT",
                  headers: {
                    Authorization: "Bearer " + t,
                    Accept: "application/json",
                    "X-Snippet-Extension": chrome.runtime.getManifest().version,
                  },
                  data: JSON.stringify(e),
                  timeout: 0,
                });
              },
            },
            {
              key: "getUser",
              value: function (e) {
                return g.a.ajax({
                  url: "".concat(p["g"], "/user?noCounts=1"),
                  headers: {
                    Authorization: "Bearer " + e,
                    Accept: "application/json",
                    "X-Snippet-Extension": chrome.runtime.getManifest().version,
                  },
                });
              },
            },
            {
              key: "getArticleSnippets",
              value: function (e, t) {
                return g.a.ajax({
                  url: ""
                    .concat(p["g"], "/snippets?page=1&web_id=")
                    .concat(t, "&sort_field=created_at&sort_direction=DESC"),
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + e,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Snippet-Extension": chrome.runtime.getManifest().version,
                  },
                });
              },
            },
            {
              key: "logError",
              value: function () {
                return {};
              },
            },
          ]),
          e
        );
      })(),
      m = new v(),
      y = n("025e");
    d["a"].setSource("background");
    var b = !0,
      x = "";
    function w(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      (b = !e && !Object(y["g"])()),
        (x = t),
        d["a"].log("[ANALYTICS-INIT]", {
          ENABLED: b ? "enabled" : "disabled",
          uuid: t,
        });
    }
    function T(e) {
      if (b)
        try {
          var t = new XMLHttpRequest(),
            n =
              "v=1&tid=" +
              p["d"] +
              "&cid=" +
              x +
              "&aip=1&ds=add-on&t=pageview&aip=1&dl=" +
              encodeURI("https://gosnippet.com/" + e);
          t.open("POST", "https://www.google-analytics.com/collect", !0),
            t.send(n);
        } catch (e) {
          d["a"].log("Cannot send to GA");
        }
    }
    function S(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (b) {
        d["a"].log("[ANALYTICS-EVENT]", {
          category: e,
          action: t,
          label: n,
          options: r,
        });
        try {
          var i = new XMLHttpRequest(),
            o =
              "v=1&tid=" +
              p["d"] +
              "&cid=" +
              x +
              "&aip=1&ds=add-on&aip=1&t=event&ec=" +
              e +
              "&ea=" +
              t +
              "&el=" +
              n;
          r.nonInteraction && (o += "&ni=1"),
            i.open("POST", "https://www.google-analytics.com/collect", !0),
            i.send(o);
        } catch (e) {
          d["a"].log("Cannot send to GA");
        }
      }
    }
    function k(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      S("Actions", e, t, n);
    }
    function E(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      S("Errors", e, t, { nonInteraction: !0 });
    }
    chrome.storage.onChanged.addListener(function (e) {
      e.analyticsDisabled &&
        (d["a"].log("new value for analytics", e.analyticsDisabled.newValue),
        e.analyticsDisabled.newValue
          ? (b = !1)
          : ((b = !0), "undefined" !== typeof ga || Object(y["h"])() || w(b)));
    });
    var C = n("460a"),
      j = n("c64e"),
      O = {
        color: f["a"].DEFAULT_ID,
        highlightingOn: !0,
        showImageSaveButton: !0,
        analyticsDisabled: !1,
        debugEnabled: !1,
        analyticsUuid: "",
        accessToken: "",
        currentFolder: null,
      },
      A = { sidebarPin: !1, sidebarOn: !1, selectedFolder: 0 },
      D = (function () {
        function e() {
          var t = this;
          Object(u["a"])(this, e),
            (this.options = null),
            (this.tabs = {}),
            (this.commands = []),
            chrome.commands.getAll(function (e) {
              e && e.length && (t.commands = e);
            }),
            this.getOptionsFromStorage(function () {
              t.refreshIcon(),
                ("undefined" !== typeof t.options.analyticsUuid &&
                  0 !== t.options.analyticsUuid.length) ||
                  ((t.options.analyticsUuid = j()), t.saveOptionsInStorage()),
                w(t.options.analyticsDisabled, t.options.analyticsUuid),
                t.options.accessToken
                  ? (T("background_connected"),
                    k(
                      "background_connected",
                      t.options.highlightingOn ? "on" : "off"
                    ))
                  : T("background_disconnected");
            }),
            (this.menuItem = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("addToSnippet"),
              contexts: ["selection"],
              onclick: function (e, n) {
                t.toggleHighlighter(!0),
                  t.onSendSelection(n),
                  k("menu_add_to_snippet_text");
              },
            })),
            (this.menuImageItem = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("addToSnippet"),
              contexts: ["image"],
              onclick: function (e, n) {
                t.toggleHighlighter(!0),
                  t.onSendImage(n, e),
                  k("menu_add_to_snippet_image");
              },
            })),
            chrome.commands.onCommand.addListener(function (e) {
              switch (e) {
                case "toggle-snippet":
                  k("shortcut_toggle_extension"), t.toggleHighlighter();
                  break;
                case "toggle-snippet-sidebar":
                  k("shortcut_toggle_minimal"),
                    t.options.highlightingOn && t.toggleSidebar();
                  break;
                case "capture-screen":
                  t.screenCapture();
                  break;
              }
            }),
            Object(y["g"])() ||
              chrome.runtime.setUninstallURL(
                "".concat(p["j"], "/extension-uninstall")
              ),
            chrome.runtime.onInstalled.addListener(function (e) {
              (chrome.manifest = chrome.runtime.getManifest()),
                chrome.windows.getAll({ populate: !0 }, function (t) {
                  for (var n, r = 0, i = t.length; r < i; r++) {
                    n = t[r];
                    for (var o = 0, a = n.tabs.length, s = void 0; o < a; o++)
                      (s = n.tabs[o]),
                        "install" === e.reason
                          ? L(s)
                          : s.url.startsWith("http") &&
                            chrome.tabs.reload(s.id);
                  }
                }),
                "install" === e.reason
                  ? (chrome.tabs.query({}, function (e) {
                      for (var t = 0; t < e.length; t++)
                        0 === e[t].url.indexOf(p["j"]) &&
                          chrome.tabs.reload(e[t].id);
                    }),
                    chrome.tabs.create({ url: "".concat(p["j"], "/hello") }))
                  : "update" === e.reason &&
                    (parseInt(e.previousVersion) < 5
                      ? ((t.options.highlightingOn = !1),
                        t.saveOptionInStorage(
                          "highlightingOn",
                          !1,
                          function () {
                            t.removeStoreCacheFromStorage(),
                              t.updateUserCache();
                          }
                        ))
                      : (t.removeStoreCacheFromStorage(), t.updateUserCache()));
            }),
            chrome.runtime.onMessage.addListener(function (e, n, r) {
              switch (
                (chrome.runtime.lastError &&
                  console.error(chrome.runtime.lastError),
                e.action)
              ) {
                case "get-options":
                  t.refreshIcon(n.tab),
                    r({ options: t.getTabOptions(n.tab.id), tabId: n.tab.id });
                  break;
                case "init-tab":
                  return (
                    t.refreshIcon(n.tab),
                    "undefined" === typeof t.tabs[n.tab.id] &&
                      (t.tabs[n.tab.id] = Object(c["a"])({}, A)),
                    t.options.currentFolder
                      ? C["b"](["folders"], function (e) {
                          var i = !!e.folders.filter(function (e) {
                            return e.id === t.options.currentFolder.id;
                          })[0];
                          i &&
                            ((t.tabs[n.tab.id].selectedFolder =
                              t.options.currentFolder),
                            r({
                              options: t.getTabOptions(n.tab.id),
                              tabId: n.tab.id,
                            }));
                        })
                      : r({
                          options: t.getTabOptions(n.tab.id),
                          tabId: n.tab.id,
                        }),
                    !0
                  );
                case "toggle-pin-sidebar":
                  t.setSidebarPin(n.tab.id, e.value);
                  break;
                case "toggle-highlighting-mode":
                  t.toggleHighlighter(e.value);
                  break;
                case "change-folder":
                  (t.options.currentFolder = e.value),
                    t.saveOptionInStorage("currentFolder", e.value),
                    t.setFolderChange(n.tab.id, e.value);
                  break;
                case "capture-screen":
                  return (
                    k("screen_capture"),
                    chrome.tabs.captureVisibleTab(
                      null,
                      { format: "png" },
                      function (e) {
                        r({ screenCaptureUrl: e, tabId: n.tab.id });
                      }
                    ),
                    !0
                  );
                case "set-option":
                  if (
                    "undefined" === typeof O[e.option] &&
                    "undefined" === typeof A[e.option]
                  )
                    return void E("invalid_set_option", e.option);
                  switch (
                    ("undefined" !== typeof A[e.option]
                      ? (t.tabs[n.tab.id][e.option] = e.value)
                      : ((t.options[e.option] = e.value),
                        t.saveOptionInStorage(e.option, e.value)),
                    e.option)
                  ) {
                    case "sidebarOn":
                      t.toggleSidebar(e.value);
                      break;
                  }
                  break;
                case "analytics-action":
                  var i = e.data.label || "";
                  k(e.data.action, i, e.data.obj);
                  break;
                case "analytics-error":
                  var o = e.data.label || "";
                  E(e.data.action, o);
                  break;
                case "analytics-view":
                  T(e.data.path);
                  break;
                case "get-extension-version":
                  r(chrome.runtime.getManifest().version);
                  break;
                case "extension-login":
                  chrome.tabs.sendMessage(e.tabId, {
                    _tab: e.tabId,
                    action: "reload",
                  }),
                    r("ok");
                  break;
                case "update-analytics":
                  d["a"].log("got request to set analytics to", e.value),
                    C["d"]({ analyticsDisabled: !e.value });
                  break;
                case "send-sceu":
                  d["a"].log("sceu received"),
                    C["b"](["user"], function (n) {
                      d["a"].log("local:", n),
                        m.loginUser(e.sceu).then(function (e) {
                          var r = !1;
                          m.getUser(e).then(function (i) {
                            n.user && n.user.id !== i.id && (r = !0),
                              C["d"](
                                { accessToken: e, user: i, lutime: i.lutime },
                                function () {
                                  d["a"].log("different user: ", r),
                                    r && t.removeStoreCacheFromStorage(),
                                    t.getOptionsFromStorage(function () {
                                      t.updateUserCache(function () {
                                        t.options.highlightingOn &&
                                          (r
                                            ? chrome.tabs.query(
                                                {},
                                                function (e) {
                                                  if (e && e.length)
                                                    for (
                                                      var n = 0;
                                                      n < e.length;
                                                      n++
                                                    )
                                                      d["a"].log(
                                                        "ask tab " +
                                                          e[n].id +
                                                          " to reload"
                                                      ),
                                                        chrome.tabs.sendMessage(
                                                          e[n].id,
                                                          {
                                                            _tab: e[n].id,
                                                            action: "reload",
                                                            options:
                                                              t.getTabOptions(
                                                                e[n].id
                                                              ),
                                                          }
                                                        );
                                                }
                                              )
                                            : t.toggleHighlighter(!0));
                                      });
                                    });
                                }
                              ),
                              Object(y["g"])() ||
                                chrome.runtime.setUninstallURL(
                                  ""
                                    .concat(p["j"], "/extension-uninstall?u=")
                                    .concat(i.id)
                                );
                          });
                        });
                    });
                  break;
                case "update-user":
                  C["b"](["accessToken"], function (e) {
                    e.accessToken &&
                      m.getUser(e.accessToken).then(function (e) {
                        C["d"]({ user: e });
                      });
                  });
                  break;
                case "invalidate-cache":
                  t.updateUserCache();
                  break;
                case "proxy-action":
                  d["a"].log("receiving proxy-action", e.data),
                    k(
                      "proxy_action_" + (e.data.action ? e.data.action : ""),
                      "",
                      { nonInteraction: !0 }
                    ),
                    e.data.tabId
                      ? chrome.tabs.sendMessage(
                          e.data.tabId,
                          Object(c["a"])({}, e.data, { _tab: e.data.tabId })
                        )
                      : (E("tab_unknown"),
                        chrome.tabs.query(
                          { active: !0, currentWindow: !0 },
                          function (t) {
                            var n = t[0];
                            void 0 === n
                              ? (E("tab_unknown_fallback_undefined"),
                                d["a"].log("fallback case, tab was undefined"),
                                chrome.tabs.query({ active: !0 }, function (t) {
                                  var n = t[0];
                                  d["a"].log(
                                    "sending message to tab FALLBACK",
                                    n.id
                                  ),
                                    chrome.tabs.sendMessage(
                                      n.id,
                                      Object(c["a"])({}, e.data, { _tab: n.id })
                                    );
                                }))
                              : (E("tab_unknown_fallback_defined"),
                                d["a"].log("sending message to tab ORIG", n.id),
                                chrome.tabs.sendMessage(
                                  n.id,
                                  Object(c["a"])({}, e.data, { _tab: n.id })
                                ));
                          }
                        ));
                  break;
                case "import-kindle-auth":
                  return (
                    m.loginUser(e.sceu).then(
                      function (e) {
                        r(e);
                      },
                      function (t) {
                        m.logError("import-kindle-auth", t, e.token),
                          r({ status: t.status });
                      }
                    ),
                    !0
                  );
                case "import-kindle-book":
                  return (
                    m.importKindleBook(e, e.token).then(
                      function (e) {
                        r(e);
                      },
                      function (t) {
                        m.logError("import-kindle-book", t, e.token),
                          r({ status: t.status });
                      }
                    ),
                    !0
                  );
                case "import-kindle-book-complete":
                  return (
                    m.completeImportKindleBook(e, e.token).then(
                      function (e) {
                        r(e);
                      },
                      function (t) {
                        m.logError("import-kindle-book-complete", t, e.token),
                          r({ status: t.status });
                      }
                    ),
                    !0
                  );
                case "logout":
                  return t.turnOff(), !0;
                case "get-commands":
                  r({ commands: t.commands });
                  break;
              }
            }),
            chrome.browserAction.onClicked.addListener(function (e) {
              t.getOptionsFromStorage(function () {
                if ((t.refreshIcon(e), t.options.accessToken)) {
                  if (Object(y["m"])(e.url)) {
                    if (Object(y["k"])(e.url))
                      return Object(y["l"])(e.url)
                        ? void t.extensionIconToggle()
                        : (chrome.tabs.update(e.id, {
                            url: ""
                              .concat(
                                chrome.runtime.getURL("pdfjs/web/viewer.html"),
                                "?file="
                              )
                              .concat(
                                encodeURIComponent(Object(y["c"])(e.url))
                              ),
                          }),
                          void t.extensionIconToggle());
                    E("extension_icon_click_website_not_allowed"),
                      Object(y["h"])() ||
                        alert(chrome.i18n.getMessage("snippetNotAvailable"));
                  } else k("extension_icon_click");
                  Object(y["j"])(e.url)
                    ? chrome.extension.isAllowedFileSchemeAccess(function (e) {
                        e
                          ? t.extensionIconToggle()
                          : (alert(
                              "Please allow file access in the extension options."
                            ),
                            chrome.tabs.create({
                              url:
                                "chrome://extensions/?id=" + chrome.runtime.id,
                            }));
                      })
                    : t.extensionIconToggle();
                } else t.openLoginPage();
              });
            }),
            chrome.tabs.onActivated.addListener(function (e) {
              chrome.tabs.query({ active: !1 }, function (e) {
                if (e && e.length) {
                  var n = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (
                      var o, a = e[Symbol.iterator]();
                      !(n = (o = a.next()).done);
                      n = !0
                    ) {
                      var s = o.value;
                      t.tabs[s.id] &&
                        t.tabs[s.id].sidebarOn &&
                        !t.tabs[s.id].sidebarPin &&
                        ((t.tabs[s.id].sidebarOn = !1),
                        chrome.tabs.sendMessage(s.id, {
                          _tab: s.id,
                          action: "toggle-sidebar-off",
                          options: t.getTabOptions(s.id),
                        }));
                    }
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      n || null == a.return || a.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                }
              }),
                chrome.tabs.get(e.tabId, function (e) {
                  e &&
                    (t.refreshIcon(e),
                    (e.url.startsWith("http") ||
                      e.url.startsWith(chrome.extension.getURL(""))) &&
                      (d["a"].log("ask tab " + e.id + " to refresh data"),
                      chrome.tabs.sendMessage(e.id, {
                        _tab: e.id,
                        action: "refresh-data",
                        options: t.getTabOptions(e.id),
                      }),
                      chrome.tabs.sendMessage(e.id, {
                        _tab: e.id,
                        action: "set-options",
                        value: t.getTabOptions(e.id),
                      })));
                });
            }),
            chrome.tabs.onUpdated.addListener(function (e, n) {
              n.status &&
                "loading" === n.status &&
                t.tabs[e] &&
                !t.tabs[e].sidebarPin &&
                (t.tabs[e].sidebarOn = !1);
            }),
            Object(y["h"])() &&
              chrome.tabs.onCreated.addListener(function () {
                setTimeout(function () {
                  t.refreshIcon();
                }, 300);
              });
        }
        return (
          Object(l["a"])(e, [
            {
              key: "screenCapture",
              value: function () {
                var e = this,
                  t = this;
                chrome.tabs.query(
                  { active: !0, currentWindow: !0 },
                  function (n) {
                    if (n && n.length) {
                      var r = n[0],
                        i = t.tabs[r.id];
                      if (!i) return void E("tab_not_found");
                      d["a"].log("Screen capture"),
                        chrome.tabs.sendMessage(r.id, {
                          _tab: r.id,
                          action: "take-screenshot",
                          options: e.getTabOptions(r.id),
                        });
                    }
                  }
                );
              },
            },
            {
              key: "extensionIconToggle",
              value: function () {
                var e = this;
                this.updateUserCache(),
                  this.options.highlightingOn
                    ? this.toggleSidebar()
                    : (this.toggleHighlighter(!0, !0),
                      chrome.tabs.query(
                        { active: !0, currentWindow: !0 },
                        function (t) {
                          if (t && t.length) {
                            var n = t[0],
                              r = e.tabs[n.id];
                            r && !r.sidebarOn && e.toggleSidebar(!0);
                          }
                        }
                      ));
              },
            },
            {
              key: "updateUserCache",
              value: function (e) {
                var t = this;
                chrome.storage.local.get(
                  ["accessToken", "lutime"],
                  function (n) {
                    n.accessToken &&
                      m.getUser(n.accessToken).then(function (r) {
                        d["a"].log("Updating user cache", r);
                        var i = { user: r, lutime: r.lutime };
                        if (r.folders) {
                          (i.folders = r.folders),
                            i.folders.unshift({ id: -1, name: "On this page" }),
                            i.folders.unshift({
                              id: 0,
                              parent_id: -1,
                              name: "My Snippets",
                            });
                          for (
                            var o = Object.entries(t.tabs),
                              a = function () {
                                var e = s(o[c], 1),
                                  n = e[0];
                                if (t.tabs[n].selectedFolder) {
                                  var r = i.folders.find(function (e) {
                                    return e.id === t.tabs[n].selectedFolder.id;
                                  });
                                  r && (t.tabs[n].selectedFolder = r);
                                }
                              },
                              c = 0;
                            c < o.length;
                            c++
                          )
                            a();
                        }
                        !n.lutime || r.lutime > n.lutime
                          ? (t.removeStoreCacheFromStorage(),
                            d["a"].log("-- cache_invalid"),
                            k("cache_invalid"))
                          : (k("cache_valid"), d["a"].log("-- cache_valid")),
                          C["d"](i, e);
                      });
                  }
                );
              },
            },
            {
              key: "removeStoreCacheFromStorage",
              value: function () {
                C["c"](["store_cache"]),
                  C["d"]({ cache_time: new Date().getTime() });
              },
            },
            {
              key: "openLoginPage",
              value: function () {
                chrome.tabs.query({}, function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (0 === e[t].url.indexOf("".concat(p["j"], "/hello")))
                      return void chrome.tabs.update(
                        e[t].id,
                        { active: !0 },
                        function (e) {
                          chrome.tabs.reload(e.id),
                            d["a"].log("activated tab ", e.id);
                        }
                      );
                  chrome.tabs.create(
                    { url: "".concat(p["j"], "/hello") },
                    function (e) {
                      chrome.tabs.update(e.id, { active: !0 }, function (e) {
                        d["a"].log("activated tab ", e.id);
                      });
                    }
                  );
                });
              },
            },
            {
              key: "getOptionsFromStorage",
              value: function (e) {
                var t = this,
                  n = Object.keys(O);
                chrome.storage.local.get(n, function (n) {
                  n.color
                    ? ((t.options = n), e.call(t))
                    : chrome.storage.local.get(
                        Object(c["a"])({}, O),
                        function (n) {
                          (t.options = n), e.call(t);
                        }
                      );
                });
              },
            },
            {
              key: "saveOptionsInStorage",
              value: function (e) {
                chrome.storage.local.set(Object(c["a"])({}, this.options), e),
                  this.refreshIcon();
              },
            },
            {
              key: "saveOptionInStorage",
              value: function (e, t, n) {
                chrome.storage.local.set(Object(r["a"])({}, e, t), n);
              },
            },
            {
              key: "onSendSelection",
              value: function (e) {
                chrome.tabs.sendMessage(e.id, {
                  _tab: e.id,
                  action: "send-selection",
                });
              },
            },
            {
              key: "onSendImage",
              value: function (e, t) {
                chrome.tabs.sendMessage(e.id, {
                  _tab: e.id,
                  action: "send-image",
                  imgUrl: t.srcUrl,
                });
              },
            },
            {
              key: "refreshIcon",
              value: function (e) {
                var t = this;
                if (e) {
                  var n =
                      this.options && this.options.highlightingOn
                        ? "purple"
                        : "off",
                    r = e.url || e.pendingUrl;
                  Object(y["m"])(r) &&
                    !Object(y["k"])(r) &&
                    this.options.highlightingOn &&
                    (n = "disabled"),
                    chrome.browserAction.setIcon({
                      path: {
                        19: "images/" + n + "/icon-19.png",
                        38: "images/" + n + "/icon-38.png",
                      },
                    });
                } else
                  chrome.tabs.query(
                    { active: !0, currentWindow: !0 },
                    function (e) {
                      if (e && e.length) {
                        var n = e[0];
                        t.refreshIcon(n);
                      }
                    }
                  );
              },
            },
            {
              key: "turnOff",
              value: function () {
                for (
                  var e = Object.entries(this.tabs), t = 0;
                  t < e.length;
                  t++
                ) {
                  var n = s(e[t], 1),
                    r = n[0];
                  (this.tabs[r].sidebarOn = !1),
                    (this.tabs[r].sidebarPin = !1),
                    chrome.tabs.sendMessage(~~r, {
                      _tab: r,
                      action: "turn-off",
                      options: this.getTabOptions(r),
                    });
                }
              },
            },
            {
              key: "toggleHighlighter",
              value: function (e) {
                var t,
                  n = this,
                  r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i = this.options;
                i
                  ? ((i.highlightingOn =
                      "undefined" !== typeof e ? e : !i.highlightingOn),
                    this.saveOptionsInStorage(),
                    (t = i.highlightingOn
                      ? "toggle-highlighter-on"
                      : "toggle-highlighter-off"),
                    d["a"].log("Toggle highlighter: ", t),
                    chrome.tabs.query(
                      { active: !0, currentWindow: !0 },
                      function (e) {
                        if (e && e.length)
                          for (
                            var i = e[0], o = Object.entries(n.tabs), a = 0;
                            a < o.length;
                            a++
                          ) {
                            var c = s(o[a], 1),
                              u = c[0];
                            "toggle-highlighter-off" === t &&
                              ((n.tabs[u].sidebarOn = !1),
                              (n.tabs[u].sidebarPin = !1));
                            var l = {
                              _tab: ~~u,
                              action: t,
                              options: n.getTabOptions(u),
                            };
                            i.id === u && (l.sidebarVisible = r),
                              chrome.tabs.sendMessage(~~u, l);
                          }
                      }
                    ))
                  : E("tab_not_found");
              },
            },
            {
              key: "toggleSidebar",
              value: function (e) {
                var t = this,
                  n = this;
                chrome.tabs.query(
                  { active: !0, currentWindow: !0 },
                  function (r) {
                    if (r && r.length) {
                      var i,
                        o = r[0],
                        a = n.tabs[o.id];
                      if (!a) return void E("tab_not_found");
                      (a.sidebarOn =
                        "undefined" !== typeof e ? e : !a.sidebarOn),
                        a.sidebarOn
                          ? (i = "toggle-sidebar-on")
                          : ((i = "toggle-sidebar-off"),
                            a.sidebarPin && t.setSidebarPin(o.id, !1)),
                        d["a"].log("Toggle sidebar: ", i),
                        chrome.tabs.sendMessage(o.id, {
                          _tab: o.id,
                          action: i,
                          options: t.getTabOptions(o.id),
                        });
                    }
                  }
                );
              },
            },
            {
              key: "getTabOptions",
              value: function (e) {
                return Object(c["a"])({}, this.options, this.tabs[e]);
              },
            },
            {
              key: "setSidebarPin",
              value: function (e, t) {
                var n = this;
                (this.tabs[e].sidebarPin = t),
                  chrome.tabs.get(e, function (t) {
                    chrome.tabs.sendMessage(t.id, {
                      _tab: t.id,
                      action: "set-options",
                      value: n.getTabOptions(e),
                    });
                  });
              },
            },
            {
              key: "setFolderChange",
              value: function (e, t) {
                var n = this;
                (this.tabs[e].selectedFolder = t),
                  chrome.tabs.get(e, function (t) {
                    chrome.tabs.sendMessage(t.id, {
                      _tab: t.id,
                      action: "change-folder",
                      value: n.getTabOptions(e),
                    });
                  });
              },
            },
          ]),
          e
        );
      })(),
      L = function (e) {
        if (!e.url.startsWith("chrome:")) {
          for (
            var t = 1,
              n = chrome.manifest.content_scripts[t].js,
              r = chrome.manifest.content_scripts[t].css,
              i = 0,
              o = n.length;
            i < o;
            i++
          )
            chrome.tabs.executeScript(e.id, { file: n[i] });
          for (i = 0; i < r.length; i++)
            chrome.tabs.insertCSS(e.id, { file: r[i] });
        }
      };
    new D();
  },
  ffc1: function (e, t, n) {
    var r = n("5ca1"),
      i = n("504c")(!0);
    r(r.S, "Object", {
      entries: function (e) {
        return i(e);
      },
    });
  },
});
