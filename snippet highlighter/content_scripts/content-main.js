(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
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
    n((n.s = 8));
})({
  "01f9": function (e, t, n) {
    "use strict";
    var i = n("2d00"),
      r = n("5ca1"),
      o = n("2aba"),
      a = n("32e9"),
      s = n("84f2"),
      c = n("41a0"),
      u = n("7f20"),
      l = n("38fd"),
      f = n("2b4c")("iterator"),
      h = !([].keys && "next" in [].keys()),
      d = "@@iterator",
      p = "keys",
      g = "values",
      v = function () {
        return this;
      };
    e.exports = function (e, t, n, m, y, b, w) {
      c(n, t, m);
      var x,
        S,
        k,
        T = function (e) {
          if (!h && e in N) return N[e];
          switch (e) {
            case p:
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
        O = !1,
        N = e.prototype,
        A = N[f] || N[d] || (y && N[y]),
        I = A || T(y),
        _ = y ? (C ? T("entries") : I) : void 0,
        j = ("Array" == t && N.entries) || A;
      if (
        (j &&
          ((k = l(j.call(new e()))),
          k !== Object.prototype &&
            k.next &&
            (u(k, E, !0), i || "function" == typeof k[f] || a(k, f, v))),
        C &&
          A &&
          A.name !== g &&
          ((O = !0),
          (I = function () {
            return A.call(this);
          })),
        (i && !w) || (!h && !O && N[f]) || a(N, f, I),
        (s[t] = I),
        (s[E] = v),
        y)
      )
        if (((x = { values: C ? I : T(g), keys: b ? I : T(p), entries: _ }), w))
          for (S in x) S in N || o(N, S, x[S]);
        else r(r.P + r.F * (h || O), t, x);
      return x;
    };
  },
  "025e": function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return r;
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
        return h;
      }),
      n.d(t, "g", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return p;
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
    var i = n("5fb0");
    function r(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : location.search;
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var n = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        i = n.exec(t);
      return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
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
        n = t ? a(t).concat(i["a"]) : o.concat(i["a"]);
        for (var r = 0; r < n.length; r++) if (e.startsWith(n[r])) return !0;
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
    function h() {
      return "Firefox" === f();
    }
    function d() {
      return "https://gosnippet.test" === i["j"];
    }
    function p(e, t, n) {
      var i = new URL(e),
        r = i.search,
        o = new URLSearchParams(r);
      return o.append(t, n), (i.search = o.toString()), i.toString();
    }
    function g(e, t) {
      var n = window.location;
      t && (n = new URL(t)), (n = n.search.substring(1));
      for (var i = n.split("&"), r = 0; r < i.length; r++) {
        var o = i[r].split("=");
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
          var i = new URLSearchParams(t.search),
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var s, c = n[Symbol.iterator]();
              !(r = (s = c.next()).done);
              r = !0
            ) {
              var u = s.value;
              i.has(u) && i.delete(u);
            }
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (o) throw a;
            }
          }
          t.search = i.toString();
        }
        return t.toString();
      },
      y = function () {
        return "".concat(f(), " ").concat(chrome.runtime.getManifest().version);
      };
    function b(e, t, n) {
      for (var i = !1, r = 0; r < n.length; r++)
        n[r].id === e &&
          (n[r].parent_id === t
            ? (i = !0)
            : n[r].parent_id && (i = b(n[r].parent_id, t, n)));
      return i;
    }
  },
  "02f4": function (e, t, n) {
    var i = n("4588"),
      r = n("be13");
    e.exports = function (e) {
      return function (t, n) {
        var o,
          a,
          s = String(r(t)),
          c = i(n),
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
    var i = n("02f4")(!0);
    e.exports = function (e, t, n) {
      return t + (n ? i(e, t).length : 1);
    };
  },
  "0a49": function (e, t, n) {
    var i = n("9b43"),
      r = n("626a"),
      o = n("4bf8"),
      a = n("9def"),
      s = n("cd1c");
    e.exports = function (e, t) {
      var n = 1 == e,
        c = 2 == e,
        u = 3 == e,
        l = 4 == e,
        f = 6 == e,
        h = 5 == e || f,
        d = t || s;
      return function (t, s, p) {
        for (
          var g,
            v,
            m = o(t),
            y = r(m),
            b = i(s, p, 3),
            w = a(y.length),
            x = 0,
            S = n ? d(t, w) : c ? d(t, 0) : void 0;
          w > x;
          x++
        )
          if ((h || x in y) && ((g = y[x]), (v = b(g, x, m)), e))
            if (n) S[x] = v;
            else if (v)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return x;
                case 2:
                  S.push(g);
              }
            else if (l) return !1;
        return f ? -1 : u || l ? l : S;
      };
    };
  },
  "0bfb": function (e, t, n) {
    "use strict";
    var i = n("cb7c");
    e.exports = function () {
      var e = i(this),
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
    var i = n("ce10"),
      r = n("e11e");
    e.exports =
      Object.keys ||
      function (e) {
        return i(e, r);
      };
  },
  "0d83": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    n("ac6a");
    var i = n("cdba"),
      r = n("104e"),
      o = (function () {
        function e() {
          var t = this;
          Object(i["a"])(this, e),
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
          Object(r["a"])(e, [
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
                  i = new Date().getTime() - this.startTime,
                  r = i - this.timeLastMessage;
                this.timeLastMessage = i;
                var o = "["
                  .concat(this.source, "] ")
                  .concat(i, "ms (+")
                  .concat(r, "): ");
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
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  1157: function (e, t, n) {
    var i, r;
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
        h = a.indexOf,
        d = {},
        p = d.toString,
        g = d.hasOwnProperty,
        v = g.toString,
        m = v.call(Object),
        y = {},
        b = function (e) {
          return "function" === typeof e && "number" !== typeof e.nodeType;
        },
        w = function (e) {
          return null != e && e === e.window;
        },
        x = { type: !0, src: !0, noModule: !0 };
      function S(e, t, n) {
        t = t || s;
        var i,
          r = t.createElement("script");
        if (((r.text = e), n)) for (i in x) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r);
      }
      function k(e) {
        return null == e
          ? e + ""
          : "object" === typeof e || "function" === typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var T = "3.3.1",
        E = function (e, t) {
          return new E.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function O(e) {
        var t = !!e && "length" in e && e.length,
          n = k(e);
        return (
          !b(e) &&
          !w(e) &&
          ("array" === n ||
            0 === t ||
            ("number" === typeof t && t > 0 && t - 1 in e))
        );
      }
      (E.fn = E.prototype =
        {
          jquery: T,
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
              i,
              r,
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
                    (i = e[t]),
                    a !== i &&
                      (u && i && (E.isPlainObject(i) || (r = Array.isArray(i)))
                        ? (r
                            ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && E.isPlainObject(n) ? n : {}),
                          (a[t] = E.extend(u, o, i)))
                        : void 0 !== i && (a[t] = i));
            return a;
          }),
        E.extend({
          expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
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
            S(e);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (O(e)) {
              for (n = e.length; i < n; i++)
                if (!1 === t.call(e[i], i, e[i])) break;
            } else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(C, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (O(Object(e))
                  ? E.merge(n, "string" === typeof e ? [e] : e)
                  : f.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : h.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++)
              (i = !t(e[o], o)), i !== s && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              a = [];
            if (O(e))
              for (i = e.length; o < i; o++)
                (r = t(e[o], o, n)), null != r && a.push(r);
            else for (o in e) (r = t(e[o], o, n)), null != r && a.push(r);
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
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var N =
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
            i,
            r,
            o,
            a,
            s,
            c,
            u,
            l,
            f,
            h,
            d,
            p,
            g,
            v,
            m,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            S = 0,
            k = 0,
            T = ae(),
            E = ae(),
            C = ae(),
            O = function (e, t) {
              return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            I = A.pop,
            _ = A.push,
            j = A.push,
            D = A.slice,
            L = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            M =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H =
              "\\[" +
              R +
              "*(" +
              P +
              ")(?:" +
              R +
              "*([*^$|!~]?=)" +
              R +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              P +
              "))|)" +
              R +
              "*\\]",
            q =
              ":(" +
              P +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              H +
              ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp(
              "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
              "g"
            ),
            B = new RegExp("^" + R + "*," + R + "*"),
            W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            z = new RegExp(q),
            G = new RegExp("^" + P + "$"),
            V = {
              ID: new RegExp("^#(" + P + ")"),
              CLASS: new RegExp("^\\.(" + P + ")"),
              TAG: new RegExp("^(" + P + "|[*])"),
              ATTR: new RegExp("^" + H),
              PSEUDO: new RegExp("^" + q),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  R +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  R +
                  "*(?:([+-]|)" +
                  R +
                  "*(\\d+)|))" +
                  R +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + M + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  R +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  R +
                  "*((?:-\\d)?\\d*)" +
                  R +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            J = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ee = function (e, t, n) {
              var i = "0x" + t - 65536;
              return i !== i || n
                ? t
                : i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
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
            ie = function () {
              h();
            },
            re = ye(
              function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            j.apply((A = D.call(x.childNodes)), x.childNodes),
              A[x.childNodes.length].nodeType;
          } catch (e) {
            j = {
              apply: A.length
                ? function (e, t) {
                    _.apply(e, D.call(t));
                  }
                : function (e, t) {
                    var n = e.length,
                      i = 0;
                    while ((e[n++] = t[i++]));
                    e.length = n - 1;
                  },
            };
          }
          function oe(e, t, i, r) {
            var o,
              s,
              u,
              l,
              f,
              p,
              m,
              y = t && t.ownerDocument,
              S = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" !== typeof e || !e || (1 !== S && 9 !== S && 11 !== S))
            )
              return i;
            if (
              !r &&
              ((t ? t.ownerDocument || t : x) !== d && h(t), (t = t || d), g)
            ) {
              if (11 !== S && (f = K.exec(e)))
                if ((o = f[1])) {
                  if (9 === S) {
                    if (!(u = t.getElementById(o))) return i;
                    if (u.id === o) return i.push(u), i;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    b(t, u) &&
                    u.id === o
                  )
                    return i.push(u), i;
                } else {
                  if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return j.apply(i, t.getElementsByClassName(o)), i;
                }
              if (n.qsa && !C[e + " "] && (!v || !v.test(e))) {
                if (1 !== S) (y = t), (m = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  (l = t.getAttribute("id"))
                    ? (l = l.replace(te, ne))
                    : t.setAttribute("id", (l = w)),
                    (p = a(e)),
                    (s = p.length);
                  while (s--) p[s] = "#" + l + " " + me(p[s]);
                  (m = p.join(",")), (y = (Q.test(e) && ge(t.parentNode)) || t);
                }
                if (m)
                  try {
                    return j.apply(i, y.querySelectorAll(m)), i;
                  } catch (e) {
                  } finally {
                    l === w && t.removeAttribute("id");
                  }
              }
            }
            return c(e.replace($, "$1"), t, i, r);
          }
          function ae() {
            var e = [];
            function t(n, r) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            }
            return t;
          }
          function se(e) {
            return (e[w] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
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
              r = n.length;
            while (r--) i.attrHandle[n[r]] = t;
          }
          function le(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function he(e) {
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
                    : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function pe(e) {
            return se(function (t) {
              return (
                (t = +t),
                se(function (n, i) {
                  var r,
                    o = e([], n.length, t),
                    a = o.length;
                  while (a--) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
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
          (h = oe.setDocument =
            function (e) {
              var t,
                r,
                a = e ? e.ownerDocument || e : x;
              return a !== d && 9 === a.nodeType && a.documentElement
                ? ((d = a),
                  (p = d.documentElement),
                  (g = !o(d)),
                  x !== d &&
                    (r = d.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener("unload", ie, !1)
                      : r.attachEvent && r.attachEvent("onunload", ie)),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (p.appendChild(e).id = w),
                      !d.getElementsByName || !d.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((i.filter["ID"] = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find["ID"] = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter["ID"] = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                          var n =
                            "undefined" !== typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find["ID"] = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if (
                              ((n = o.getAttributeNode("id")),
                              n && n.value === e)
                            )
                              return [o];
                            (r = t.getElementsByName(e)), (i = 0);
                            while ((o = r[i++]))
                              if (
                                ((n = o.getAttributeNode("id")),
                                n && n.value === e)
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (i.find["TAG"] = n.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" !== typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          r = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          while ((n = o[r++])) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (i.find["CLASS"] =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" !== typeof t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = Y.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      (p.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + R + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + R + "*(?:value|" + M + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          v.push(".#.+[+~]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + R + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (p.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = Y.test(
                    (y =
                      p.matches ||
                      p.webkitMatchesSelector ||
                      p.mozMatchesSelector ||
                      p.oMatchesSelector ||
                      p.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", q);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = Y.test(p.compareDocumentPosition)),
                  (b =
                    t || Y.test(p.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            while ((t = t.parentNode)) if (t === e) return !0;
                          return !1;
                        }),
                  (O = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var i =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          i ||
                          ((i =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & i ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === i)
                            ? e === d || (e.ownerDocument === x && b(x, e))
                              ? -1
                              : t === d || (t.ownerDocument === x && b(x, t))
                              ? 1
                              : l
                              ? L(l, e) - L(l, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!r || !o)
                          return e === d
                            ? -1
                            : t === d
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : l
                            ? L(l, e) - L(l, t)
                            : 0;
                        if (r === o) return le(e, t);
                        n = e;
                        while ((n = n.parentNode)) a.unshift(n);
                        n = t;
                        while ((n = n.parentNode)) s.unshift(n);
                        while (a[i] === s[i]) i++;
                        return i
                          ? le(a[i], s[i])
                          : a[i] === x
                          ? -1
                          : s[i] === x
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
              ((e.ownerDocument || e) !== d && h(e),
              (t = t.replace(U, "='$1']")),
              n.matchesSelector &&
                g &&
                !C[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var i = y.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {}
            return oe(t, d, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && h(e), b(e, t);
          }),
          (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && h(e);
            var r = i.attrHandle[t.toLowerCase()],
              o =
                r && N.call(i.attrHandle, t.toLowerCase())
                  ? r(e, t, !g)
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
              i = [],
              r = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(O),
              f)
            ) {
              while ((t = e[o++])) t === e[o] && (r = i.push(o));
              while (r--) e.splice(i[r], 1);
            }
            return (l = null), e;
          }),
          (r = oe.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" === typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else while ((t = e[i++])) n += r(t);
              return n;
            }),
          (i = oe.selectors =
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
                  var t = T[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                      T(e, function (e) {
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
                  return function (i) {
                    var r = oe.attr(i, e);
                    return null == r
                      ? "!=" === t
                      : !t ||
                          ((r += ""),
                          "=" === t
                            ? r === n
                            : "!=" === t
                            ? r !== n
                            : "^=" === t
                            ? n && 0 === r.indexOf(n)
                            : "*=" === t
                            ? n && r.indexOf(n) > -1
                            : "$=" === t
                            ? n && r.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (r === n ||
                                r.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, c) {
                        var u,
                          l,
                          f,
                          h,
                          d,
                          p,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !c && !s,
                          b = !1;
                        if (v) {
                          if (o) {
                            while (g) {
                              h = t;
                              while ((h = h[g]))
                                if (
                                  s
                                    ? h.nodeName.toLowerCase() === m
                                    : 1 === h.nodeType
                                )
                                  return !1;
                              p = g = "only" === e && !p && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((p = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            (h = v),
                              (f = h[w] || (h[w] = {})),
                              (l = f[h.uniqueID] || (f[h.uniqueID] = {})),
                              (u = l[e] || []),
                              (d = u[0] === S && u[1]),
                              (b = d && u[2]),
                              (h = d && v.childNodes[d]);
                            while (
                              (h = (++d && h && h[g]) || (b = d = 0) || p.pop())
                            )
                              if (1 === h.nodeType && ++b && h === t) {
                                l[e] = [S, d, b];
                                break;
                              }
                          } else if (
                            (y &&
                              ((h = t),
                              (f = h[w] || (h[w] = {})),
                              (l = f[h.uniqueID] || (f[h.uniqueID] = {})),
                              (u = l[e] || []),
                              (d = u[0] === S && u[1]),
                              (b = d)),
                            !1 === b)
                          )
                            while (
                              (h = (++d && h && h[g]) || (b = d = 0) || p.pop())
                            )
                              if (
                                (s
                                  ? h.nodeName.toLowerCase() === m
                                  : 1 === h.nodeType) &&
                                ++b &&
                                (y &&
                                  ((f = h[w] || (h[w] = {})),
                                  (l = f[h.uniqueID] || (f[h.uniqueID] = {})),
                                  (l[e] = [S, b])),
                                h === t)
                              )
                                break;
                          return (
                            (b -= r), b === i || (b % i === 0 && b / i >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      oe.error("unsupported pseudo: " + e);
                  return r[w]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function (e, n) {
                            var i,
                              o = r(e, t),
                              a = o.length;
                            while (a--)
                              (i = L(e, o[a])), (e[i] = !(n[i] = o[a]));
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: se(function (e) {
                  var t = [],
                    n = [],
                    i = s(e.replace($, "$1"));
                  return i[w]
                    ? se(function (e, t, n, r) {
                        var o,
                          a = i(e, null, r, []),
                          s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, r, o) {
                        return (
                          (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
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
                        (t.textContent || t.innerText || r(t)).indexOf(e) > -1
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
                  return e === p;
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
                  return !i.pseudos["empty"](e);
                },
                header: function (e) {
                  return X.test(e.nodeName);
                },
                input: function (e) {
                  return J.test(e.nodeName);
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
                first: pe(function () {
                  return [0];
                }),
                last: pe(function (e, t) {
                  return [t - 1];
                }),
                eq: pe(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: pe(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: pe(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: pe(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                  return e;
                }),
                gt: pe(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }),
          (i.pseudos["nth"] = i.pseudos["eq"]),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function ve() {}
          function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function ye(e, t, n) {
            var i = t.dir,
              r = t.next,
              o = r || i,
              a = n && "parentNode" === o,
              s = k++;
            return t.first
              ? function (t, n, r) {
                  while ((t = t[i]))
                    if (1 === t.nodeType || a) return e(t, n, r);
                  return !1;
                }
              : function (t, n, c) {
                  var u,
                    l,
                    f,
                    h = [S, s];
                  if (c) {
                    while ((t = t[i]))
                      if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                  } else
                    while ((t = t[i]))
                      if (1 === t.nodeType || a)
                        if (
                          ((f = t[w] || (t[w] = {})),
                          (l = f[t.uniqueID] || (f[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((u = l[o]) && u[0] === S && u[1] === s)
                            return (h[2] = u[2]);
                          if (((l[o] = h), (h[2] = e(t, n, c)))) return !0;
                        }
                  return !1;
                };
          }
          function be(e) {
            return e.length > 1
              ? function (t, n, i) {
                  var r = e.length;
                  while (r--) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function we(e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
            return n;
          }
          function xe(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
              (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
            return a;
          }
          function Se(e, t, n, i, r, o) {
            return (
              i && !i[w] && (i = Se(i)),
              r && !r[w] && (r = Se(r, o)),
              se(function (o, a, s, c) {
                var u,
                  l,
                  f,
                  h = [],
                  d = [],
                  p = a.length,
                  g = o || we(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : xe(g, h, e, s, c),
                  m = n ? (r || (o ? e : p || i) ? [] : a) : v;
                if ((n && n(v, m, s, c), i)) {
                  (u = xe(m, d)), i(u, [], s, c), (l = u.length);
                  while (l--) (f = u[l]) && (m[d[l]] = !(v[d[l]] = f));
                }
                if (o) {
                  if (r || e) {
                    if (r) {
                      (u = []), (l = m.length);
                      while (l--) (f = m[l]) && u.push((v[l] = f));
                      r(null, (m = []), u, c);
                    }
                    l = m.length;
                    while (l--)
                      (f = m[l]) &&
                        (u = r ? L(o, f) : h[l]) > -1 &&
                        (o[u] = !(a[u] = f));
                  }
                } else (m = xe(m === a ? m.splice(p, m.length) : m)), r ? r(null, a, m, c) : j.apply(a, m);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                a = i.relative[e[0].type],
                s = a || i.relative[" "],
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
                    return L(t, e) > -1;
                  },
                  s,
                  !0
                ),
                h = [
                  function (e, n, i) {
                    var r =
                      (!a && (i || n !== u)) ||
                      ((t = n).nodeType ? l(e, n, i) : f(e, n, i));
                    return (t = null), r;
                  },
                ];
              c < o;
              c++
            )
              if ((n = i.relative[e[c].type])) h = [ye(be(h), n)];
              else {
                if (
                  ((n = i.filter[e[c].type].apply(null, e[c].matches)), n[w])
                ) {
                  for (r = ++c; r < o; r++) if (i.relative[e[r].type]) break;
                  return Se(
                    c > 1 && be(h),
                    c > 1 &&
                      me(
                        e
                          .slice(0, c - 1)
                          .concat({ value: " " === e[c - 2].type ? "*" : "" })
                      ).replace($, "$1"),
                    n,
                    c < r && ke(e.slice(c, r)),
                    r < o && ke((e = e.slice(r))),
                    r < o && me(e)
                  );
                }
                h.push(n);
              }
            return be(h);
          }
          function Te(e, t) {
            var n = t.length > 0,
              r = e.length > 0,
              o = function (o, a, s, c, l) {
                var f,
                  p,
                  v,
                  m = 0,
                  y = "0",
                  b = o && [],
                  w = [],
                  x = u,
                  k = o || (r && i.find["TAG"]("*", l)),
                  T = (S += null == x ? 1 : Math.random() || 0.1),
                  E = k.length;
                for (
                  l && (u = a === d || a || l);
                  y !== E && null != (f = k[y]);
                  y++
                ) {
                  if (r && f) {
                    (p = 0), a || f.ownerDocument === d || (h(f), (s = !g));
                    while ((v = e[p++]))
                      if (v(f, a || d, s)) {
                        c.push(f);
                        break;
                      }
                    l && (S = T);
                  }
                  n && ((f = !v && f) && m--, o && b.push(f));
                }
                if (((m += y), n && y !== m)) {
                  p = 0;
                  while ((v = t[p++])) v(b, w, a, s);
                  if (o) {
                    if (m > 0) while (y--) b[y] || w[y] || (w[y] = I.call(c));
                    w = xe(w);
                  }
                  j.apply(c, w),
                    l &&
                      !o &&
                      w.length > 0 &&
                      m + t.length > 1 &&
                      oe.uniqueSort(c);
                }
                return l && ((S = T), (u = x)), b;
              };
            return n ? se(o) : o;
          }
          return (
            (ve.prototype = i.filters = i.pseudos),
            (i.setFilters = new ve()),
            (a = oe.tokenize =
              function (e, t) {
                var n,
                  r,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l = E[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (s = e), (c = []), (u = i.preFilter);
                while (s) {
                  for (a in ((n && !(r = B.exec(s))) ||
                    (r && (s = s.slice(r[0].length) || s), c.push((o = []))),
                  (n = !1),
                  (r = W.exec(s)) &&
                    ((n = r.shift()),
                    o.push({ value: n, type: r[0].replace($, " ") }),
                    (s = s.slice(n.length))),
                  i.filter))
                    !(r = V[a].exec(s)) ||
                      (u[a] && !(r = u[a](r))) ||
                      ((n = r.shift()),
                      o.push({ value: n, type: a, matches: r }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : E(e, c).slice(0);
              }),
            (s = oe.compile =
              function (e, t) {
                var n,
                  i = [],
                  r = [],
                  o = C[e + " "];
                if (!o) {
                  t || (t = a(e)), (n = t.length);
                  while (n--) (o = ke(t[n])), o[w] ? i.push(o) : r.push(o);
                  (o = C(e, Te(r, i))), (o.selector = e);
                }
                return o;
              }),
            (c = oe.select =
              function (e, t, n, r) {
                var o,
                  c,
                  u,
                  l,
                  f,
                  h = "function" === typeof e && e,
                  d = !r && a((e = h.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    ((c = d[0] = d[0].slice(0)),
                    c.length > 2 &&
                      "ID" === (u = c[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      i.relative[c[1].type])
                  ) {
                    if (
                      ((t = (i.find["ID"](u.matches[0].replace(Z, ee), t) ||
                        [])[0]),
                      !t)
                    )
                      return n;
                    h && (t = t.parentNode),
                      (e = e.slice(c.shift().value.length));
                  }
                  o = V["needsContext"].test(e) ? 0 : c.length;
                  while (o--) {
                    if (((u = c[o]), i.relative[(l = u.type)])) break;
                    if (
                      (f = i.find[l]) &&
                      (r = f(
                        u.matches[0].replace(Z, ee),
                        (Q.test(c[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((c.splice(o, 1), (e = r.length && me(c)), !e))
                        return j.apply(n, r), n;
                      break;
                    }
                  }
                }
                return (
                  (h || s(e, d))(
                    r,
                    t,
                    !g,
                    n,
                    !t || (Q.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = w.split("").sort(O).join("") === w),
            (n.detectDuplicates = !!f),
            h(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
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
              ue(M, function (e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
              }),
            oe
          );
        })(n);
      (E.find = N),
        (E.expr = N.selectors),
        (E.expr[":"] = E.expr.pseudos),
        (E.uniqueSort = E.unique = N.uniqueSort),
        (E.text = N.getText),
        (E.isXMLDoc = N.isXML),
        (E.contains = N.contains),
        (E.escapeSelector = N.escape);
      var A = function (e, t, n) {
          var i = [],
            r = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
              if (r && E(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        I = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        _ = E.expr.match.needsContext;
      function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return b(t)
          ? E.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? E.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" !== typeof t
          ? E.grep(e, function (e) {
              return h.call(t, e) > -1 !== n;
            })
          : E.filter(t, e, n);
      }
      (E.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? E.find.matchesSelector(i, e)
              ? [i]
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
              i = this.length,
              r = this;
            if ("string" !== typeof e)
              return this.pushStack(
                E(e).filter(function () {
                  for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
            return i > 1 ? E.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(
              this,
              "string" === typeof e && _.test(e) ? E(e) : e || [],
              !1
            ).length;
          },
        });
      var M,
        R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        P = (E.fn.init = function (e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || M), "string" === typeof e)) {
            if (
              ((i =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : R.exec(e)),
              !i || (!i[1] && t))
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof E ? t[0] : t),
                E.merge(
                  this,
                  E.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : s,
                    !0
                  )
                ),
                D.test(i[1]) && E.isPlainObject(t))
              )
                for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (
              (r = s.getElementById(i[2])),
              r && ((this[0] = r), (this.length = 1)),
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
      (P.prototype = E.fn), (M = E(s));
      var H = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
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
            i = 0,
            r = this.length,
            o = [],
            a = "string" !== typeof e && E(e);
          if (!_.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
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
              ? h.call(E(e), this[0])
              : h.call(this, e.jquery ? e[0] : e)
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
              return I((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return I(e.firstChild);
            },
            contents: function (e) {
              return j(e, "iframe")
                ? e.contentDocument
                : (j(e, "template") && (e = e.content || e),
                  E.merge([], e.childNodes));
            },
          },
          function (e, t) {
            E.fn[e] = function (n, i) {
              var r = E.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" === typeof i && (r = E.filter(i, r)),
                this.length > 1 &&
                  (q[e] || E.uniqueSort(r), H.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var $ = /[^\x20\t\r\n\f]+/g;
      function B(e) {
        var t = {};
        return (
          E.each(e.match($) || [], function (e, n) {
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
      function z(e, t, n, i) {
        var r;
        try {
          e && b((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && b((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (E.Callbacks = function (e) {
        e = "string" === typeof e ? B(e) : E.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          a = [],
          s = -1,
          c = function () {
            for (r = r || e.once, i = t = !0; a.length; s = -1) {
              n = a.shift();
              while (++s < o.length)
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            }
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    E.each(n, function (n, i) {
                      b(i)
                        ? (e.unique && u.has(i)) || o.push(i)
                        : i && i.length && "string" !== k(i) && t(i);
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
              return (r = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
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
              return !!i;
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
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return E.Deferred(function (n) {
                    E.each(t, function (t, i) {
                      var r = b(e[i[4]]) && e[i[4]];
                      o[i[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && b(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, r) {
                  var o = 0;
                  function a(e, t, i, r) {
                    return function () {
                      var s = this,
                        c = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < o)) {
                            if (((n = i.apply(s, c)), n === t.promise()))
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" === typeof n ||
                                "function" === typeof n) &&
                              n.then),
                              b(u)
                                ? r
                                  ? u.call(n, a(o, t, W, r), a(o, t, U, r))
                                  : (o++,
                                    u.call(
                                      n,
                                      a(o, t, W, r),
                                      a(o, t, U, r),
                                      a(o, t, W, t.notifyWith)
                                    ))
                                : (i !== W && ((s = void 0), (c = [n])),
                                  (r || t.resolveWith)(s, c));
                          }
                        },
                        l = r
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                E.Deferred.exceptionHook &&
                                  E.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= o &&
                                    (i !== U && ((s = void 0), (c = [n])),
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
                    t[0][3].add(a(0, n, b(r) ? r : W, n.notifyWith)),
                      t[1][3].add(a(0, n, b(e) ? e : W)),
                      t[2][3].add(a(0, n, b(i) ? i : U));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? E.extend(e, r) : r;
                },
              },
              o = {};
            return (
              E.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (r[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        i = s;
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
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = u.call(arguments),
              o = E.Deferred(),
              a = function (e) {
                return function (n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? u.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (z(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || b(r[n] && r[n].then))
            )
              return o.then();
            while (n--) z(r[n], a(n), o.reject);
            return o.promise();
          },
        });
      var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (E.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          G.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (E.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var V = E.Deferred();
      function J() {
        s.removeEventListener("DOMContentLoaded", J),
          n.removeEventListener("load", J),
          E.ready();
      }
      (E.fn.ready = function (e) {
        return (
          V.then(e).catch(function (e) {
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
              (!0 !== e && --E.readyWait > 0) || V.resolveWith(s, [E]));
          },
        }),
        (E.ready.then = V.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(E.ready)
          : (s.addEventListener("DOMContentLoaded", J),
            n.addEventListener("load", J));
      var X = function (e, t, n, i, r, o, a) {
          var s = 0,
            c = e.length,
            u = null == n;
          if ("object" === k(n))
            for (s in ((r = !0), n)) X(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== i &&
            ((r = !0),
            b(i) || (a = !0),
            u &&
              (a
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(E(e), n);
                  }))),
            t)
          )
            for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
          return r ? e : u ? t.call(e) : c ? t(e[0], n) : o;
        },
        Y = /^-ms-/,
        K = /-([a-z])/g;
      function Q(e, t) {
        return t.toUpperCase();
      }
      function Z(e) {
        return e.replace(Y, "ms-").replace(K, Q);
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
            var i,
              r = this.cache(e);
            if ("string" === typeof t) r[Z(t)] = n;
            else for (i in t) r[Z(i)] = t[i];
            return r;
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
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                Array.isArray(t)
                  ? (t = t.map(Z))
                  : ((t = Z(t)), (t = t in i ? [t] : t.match($) || [])),
                  (n = t.length);
                while (n--) delete i[t[n]];
              }
              (void 0 === t || E.isEmptyObject(i)) &&
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
        ie = new te(),
        re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        oe = /[A-Z]/g;
      function ae(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            ("null" === e
              ? null
              : e === +e + ""
              ? +e
              : re.test(e)
              ? JSON.parse(e)
              : e))
        );
      }
      function se(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(oe, "-$&").toLowerCase()),
            (n = e.getAttribute(i)),
            "string" === typeof n)
          ) {
            try {
              n = ae(n);
            } catch (e) {}
            ie.set(e, t, n);
          } else n = void 0;
        return n;
      }
      E.extend({
        hasData: function (e) {
          return ie.hasData(e) || ne.hasData(e);
        },
        data: function (e, t, n) {
          return ie.access(e, t, n);
        },
        removeData: function (e, t) {
          ie.remove(e, t);
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
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = ie.get(o)),
                1 === o.nodeType && !ne.get(o, "hasDataAttrs"))
              ) {
                n = a.length;
                while (n--)
                  a[n] &&
                    ((i = a[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = Z(i.slice(5))), se(o, i, r[i])));
                ne.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" === typeof e
              ? this.each(function () {
                  ie.set(this, e);
                })
              : X(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return (
                        (n = ie.get(o, e)),
                        void 0 !== n
                          ? n
                          : ((n = se(o, e)), void 0 !== n ? n : void 0)
                      );
                    this.each(function () {
                      ie.set(this, e, t);
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
              ie.remove(this, e);
            });
          },
        }),
        E.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = ne.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = ne.access(e, t, E.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = E._queueHooks(e, t),
              a = function () {
                E.dequeue(e, t);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(e, a, o)),
              !i && o && o.empty.fire();
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
              i = 1,
              r = E.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --i || r.resolveWith(o, [o]);
              };
            "string" !== typeof e && ((t = e), (e = void 0)), (e = e || "fx");
            while (a--)
              (n = ne.get(o[a], e + "queueHooks")),
                n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t);
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
        he = function (e, t, n, i) {
          var r,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = a[o];
          return r;
        };
      function de(e, t, n, i) {
        var r,
          o,
          a = 20,
          s = i
            ? function () {
                return i.cur();
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
            (r = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = l), (i.end = r))),
          r
        );
      }
      var pe = {};
      function ge(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = pe[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = E.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (pe[i] = r),
          r)
        );
      }
      function ve(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
          (i = e[o]),
            i.style &&
              ((n = i.style.display),
              t
                ? ("none" === n &&
                    ((r[o] = ne.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display && fe(i) && (r[o] = ge(i)))
                : "none" !== n && ((r[o] = "none"), ne.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
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
        we = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function xe(e, t) {
        var n;
        return (
          (n =
            "undefined" !== typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" !== typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && j(e, t)) ? E.merge([e], n) : n
        );
      }
      function Se(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          ne.set(e[n], "globalEval", !t || ne.get(t[n], "globalEval"));
      }
      (we.optgroup = we.option),
        (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
        (we.th = we.td);
      var ke = /<|&#?\w+;/;
      function Te(e, t, n, i, r) {
        for (
          var o,
            a,
            s,
            c,
            u,
            l,
            f = t.createDocumentFragment(),
            h = [],
            d = 0,
            p = e.length;
          d < p;
          d++
        )
          if (((o = e[d]), o || 0 === o))
            if ("object" === k(o)) E.merge(h, o.nodeType ? [o] : o);
            else if (ke.test(o)) {
              (a = a || f.appendChild(t.createElement("div"))),
                (s = (ye.exec(o) || ["", ""])[1].toLowerCase()),
                (c = we[s] || we._default),
                (a.innerHTML = c[1] + E.htmlPrefilter(o) + c[2]),
                (l = c[0]);
              while (l--) a = a.lastChild;
              E.merge(h, a.childNodes),
                (a = f.firstChild),
                (a.textContent = "");
            } else h.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = h[d++]))
          if (i && E.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = E.contains(o.ownerDocument, o)),
            (a = xe(f.appendChild(o), "script")),
            u && Se(a),
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
        Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ne = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function Ie() {
        return !1;
      }
      function _e() {
        try {
          return s.activeElement;
        } catch (e) {}
      }
      function je(e, t, n, i, r, o) {
        var a, s;
        if ("object" === typeof t) {
          for (s in ("string" !== typeof n && ((i = i || n), (n = void 0)), t))
            je(e, s, n, i, t[s], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" === typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = Ie;
        else if (!r) return e;
        return (
          1 === o &&
            ((a = r),
            (r = function (e) {
              return E().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = E.guid++))),
          e.each(function () {
            E.event.add(this, t, r, i, n);
          })
        );
      }
      (E.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var o,
            a,
            s,
            c,
            u,
            l,
            f,
            h,
            d,
            p,
            g,
            v = ne.get(e);
          if (v) {
            n.handler && ((o = n), (n = o.handler), (r = o.selector)),
              r && E.find.matchesSelector(Ee, r),
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
              (t = (t || "").match($) || [""]),
              (u = t.length);
            while (u--)
              (s = Ne.exec(t[u]) || []),
                (d = g = s[1]),
                (p = (s[2] || "").split(".").sort()),
                d &&
                  ((f = E.event.special[d] || {}),
                  (d = (r ? f.delegateType : f.bindType) || d),
                  (f = E.event.special[d] || {}),
                  (l = E.extend(
                    {
                      type: d,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && E.expr.match.needsContext.test(r),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (h = c[d]) ||
                    ((h = c[d] = []),
                    (h.delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, i, p, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  r ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                  (E.event.global[d] = !0));
          }
        },
        remove: function (e, t, n, i, r) {
          var o,
            a,
            s,
            c,
            u,
            l,
            f,
            h,
            d,
            p,
            g,
            v = ne.hasData(e) && ne.get(e);
          if (v && (c = v.events)) {
            (t = (t || "").match($) || [""]), (u = t.length);
            while (u--)
              if (
                ((s = Ne.exec(t[u]) || []),
                (d = g = s[1]),
                (p = (s[2] || "").split(".").sort()),
                d)
              ) {
                (f = E.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (h = c[d] || []),
                  (s =
                    s[2] &&
                    new RegExp(
                      "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    )),
                  (a = o = h.length);
                while (o--)
                  (l = h[o]),
                    (!r && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (s && !s.test(l.namespace)) ||
                      (i && i !== l.selector && ("**" !== i || !l.selector)) ||
                      (h.splice(o, 1),
                      l.selector && h.delegateCount--,
                      f.remove && f.remove.call(e, l));
                a &&
                  !h.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, v.handle)) ||
                    E.removeEvent(e, d, v.handle),
                  delete c[d]);
              } else for (d in c) E.event.remove(e, d + t[u], n, i, !0);
            E.isEmptyObject(c) && ne.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
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
            while ((r = a[t++]) && !s.isPropagationStopped()) {
              (s.currentTarget = r.elem), (n = 0);
              while (
                (o = r.handlers[n++]) &&
                !s.isImmediatePropagationStopped()
              )
                (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  (i = (
                    (E.event.special[o.origType] || {}).handle || o.handler
                  ).apply(r.elem, c)),
                  void 0 !== i &&
                    !1 === (s.result = i) &&
                    (s.preventDefault(), s.stopPropagation()));
            }
            return l.postDispatch && l.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
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
                  (i = t[n]),
                    (r = i.selector + " "),
                    void 0 === a[r] &&
                      (a[r] = i.needsContext
                        ? E(r, this).index(u) > -1
                        : E.find(r, this, null, [u]).length),
                    a[r] && o.push(i);
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
              if (this !== _e() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === _e() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && j(this, "input"))
                return this.click(), !1;
            },
            _default: function (e) {
              return j(e.target, "a");
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
                  : Ie),
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
          isDefaultPrevented: Ie,
          isPropagationStopped: Ie,
          isImmediatePropagationStopped: Ie,
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
                : !e.which && void 0 !== t && Oe.test(e.type)
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
                  i = this,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === i || E.contains(i, r))) ||
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
          on: function (e, t, n, i) {
            return je(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return je(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                E(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" === typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" !== typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ie),
              this.each(function () {
                E.event.remove(this, e, n, t);
              })
            );
          },
        });
      var De =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Pe(e, t) {
        return (
          (j(e, "table") &&
            j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            E(e).children("tbody")[0]) ||
          e
        );
      }
      function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function qe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Fe(e, t) {
        var n, i, r, o, a, s, c, u;
        if (1 === t.nodeType) {
          if (
            ne.hasData(e) &&
            ((o = ne.access(e)), (a = ne.set(t, o)), (u = o.events), u)
          )
            for (r in (delete a.handle, (a.events = {}), u))
              for (n = 0, i = u[r].length; n < i; n++)
                E.event.add(t, r, u[r][n]);
          ie.hasData(e) &&
            ((s = ie.access(e)), (c = E.extend({}, s)), ie.set(t, c));
        }
      }
      function $e(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, i) {
        t = l.apply([], t);
        var r,
          o,
          a,
          s,
          c,
          u,
          f = 0,
          h = e.length,
          d = h - 1,
          p = t[0],
          g = b(p);
        if (
          g ||
          (h > 1 && "string" === typeof p && !y.checkClone && Me.test(p))
        )
          return e.each(function (r) {
            var o = e.eq(r);
            g && (t[0] = p.call(this, r, o.html())), Be(o, t, n, i);
          });
        if (
          h &&
          ((r = Te(t, e[0].ownerDocument, !1, e, i)),
          (o = r.firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = E.map(xe(r, "script"), He), s = a.length; f < h; f++)
            (c = r),
              f !== d &&
                ((c = E.clone(c, !0, !0)), s && E.merge(a, xe(c, "script"))),
              n.call(e[f], c, f);
          if (s)
            for (
              u = a[a.length - 1].ownerDocument, E.map(a, qe), f = 0;
              f < s;
              f++
            )
              (c = a[f]),
                be.test(c.type || "") &&
                  !ne.access(c, "globalEval") &&
                  E.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? E._evalUrl && E._evalUrl(c.src)
                    : S(c.textContent.replace(Re, ""), u, c));
        }
        return e;
      }
      function We(e, t, n) {
        for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || E.cleanData(xe(i)),
            i.parentNode &&
              (n && E.contains(i.ownerDocument, i) && Se(xe(i, "script")),
              i.parentNode.removeChild(i));
        return e;
      }
      E.extend({
        htmlPrefilter: function (e) {
          return e.replace(De, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var i,
            r,
            o,
            a,
            s = e.cloneNode(!0),
            c = E.contains(e.ownerDocument, e);
          if (
            !y.noCloneChecked &&
            (1 === e.nodeType || 11 === e.nodeType) &&
            !E.isXMLDoc(e)
          )
            for (a = xe(s), o = xe(e), i = 0, r = o.length; i < r; i++)
              $e(o[i], a[i]);
          if (t)
            if (n)
              for (
                o = o || xe(e), a = a || xe(s), i = 0, r = o.length;
                i < r;
                i++
              )
                Fe(o[i], a[i]);
            else Fe(e, s);
          return (
            (a = xe(s, "script")),
            a.length > 0 && Se(a, !c && xe(e, "script")),
            s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = E.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (ee(n)) {
              if ((t = n[ne.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                n[ne.expando] = void 0;
              }
              n[ie.expando] && (n[ie.expando] = void 0);
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
            return X(
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
                var t = Pe(this, e);
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
                var t = Pe(this, e);
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
                (E.cleanData(xe(e, !1)), (e.textContent = ""));
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
            return X(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" === typeof e &&
                  !Le.test(e) &&
                  !we[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = E.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (E.cleanData(xe(t, !1)), (t.innerHTML = e));
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
                  (E.cleanData(xe(this)), n && n.replaceChild(t, this));
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
                var n, i = [], r = E(e), o = r.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  E(r[a])[t](n),
                  f.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Ue = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        ze = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ge = new RegExp(le.join("|"), "i");
      function Ve(e, t, n) {
        var i,
          r,
          o,
          a,
          s = e.style;
        return (
          (n = n || ze(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            "" !== a || E.contains(e.ownerDocument, e) || (a = E.style(e, t)),
            !y.pixelBoxStyles() &&
              Ue.test(a) &&
              Ge.test(t) &&
              ((i = s.width),
              (r = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = i),
              (s.minWidth = r),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Je(e, t) {
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
            (i = "1%" !== e.top),
              (c = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (a = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (o = 36 === l.offsetWidth || "absolute"),
              Ee.removeChild(u),
              (l = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
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
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), c;
            },
            scrollboxSize: function () {
              return e(), o;
            },
          }));
      })();
      var Xe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ke = { position: "absolute", visibility: "hidden", display: "block" },
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
      function it(e, t, n) {
        var i = ue.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function rt(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (c += E.css(e, n + le[a], !0, r)),
            i
              ? ("content" === n && (c -= E.css(e, "padding" + le[a], !0, r)),
                "margin" !== n &&
                  (c -= E.css(e, "border" + le[a] + "Width", !0, r)))
              : ((c += E.css(e, "padding" + le[a], !0, r)),
                "padding" !== n
                  ? (c += E.css(e, "border" + le[a] + "Width", !0, r))
                  : (s += E.css(e, "border" + le[a] + "Width", !0, r)));
        return (
          !i &&
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
        var i = ze(e),
          r = Ve(e, t, i),
          o = "border-box" === E.css(e, "boxSizing", !1, i),
          a = o;
        if (Ue.test(r)) {
          if (!n) return r;
          r = "auto";
        }
        return (
          (a = a && (y.boxSizingReliable() || r === e.style[t])),
          ("auto" === r ||
            (!parseFloat(r) && "inline" === E.css(e, "display", !1, i))) &&
            ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (r = parseFloat(r) || 0),
          r + rt(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
        );
      }
      function at(e, t, n, i, r) {
        return new at.prototype.init(e, t, n, i, r);
      }
      E.extend({
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
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              a,
              s = Z(t),
              c = Ye.test(t),
              u = e.style;
            if (
              (c || (t = nt(s)),
              (a = E.cssHooks[t] || E.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : u[t];
            (o = typeof n),
              "string" === o &&
                (r = ue.exec(n)) &&
                r[1] &&
                ((n = de(e, t, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (r && r[3]) || (E.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                  (c ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            o,
            a,
            s = Z(t),
            c = Ye.test(t);
          return (
            c || (t = nt(s)),
            (a = E.cssHooks[t] || E.cssHooks[s]),
            a && "get" in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = Ve(e, t, i)),
            "normal" === r && t in Qe && (r = Qe[t]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        E.each(["height", "width"], function (e, t) {
          E.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Xe.test(E.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, i)
                  : he(e, Ke, function () {
                      return ot(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var r,
                o = ze(e),
                a = "border-box" === E.css(e, "boxSizing", !1, o),
                s = i && rt(e, t, i, a, o);
              return (
                a &&
                  y.scrollboxSize() === o.position &&
                  (s -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      rt(e, t, "border", !1, o) -
                      0.5
                  )),
                s &&
                  (r = ue.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = E.css(e, t))),
                it(e, n, s)
              );
            },
          };
        }),
        (E.cssHooks.marginLeft = Je(y.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  he(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (E.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" === typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + le[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== e && (E.cssHooks[e + t].set = it);
        }),
        E.fn.extend({
          css: function (e, t) {
            return X(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (i = ze(e), r = t.length; a < r; a++)
                    o[t[a]] = E.css(e, t[a], !1, i);
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
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || E.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
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
      function ht() {
        return (
          n.setTimeout(function () {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          (n = le[i]), (r["margin" + n] = r["padding" + n] = e);
        return t && (r.opacity = r.width = e), r;
      }
      function pt(e, t, n) {
        for (
          var i,
            r = (mt.tweeners[t] || []).concat(mt.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function gt(e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          c,
          u,
          l,
          f = "width" in t || "height" in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && fe(e),
          v = ne.get(e, "fxshow");
        for (i in (n.queue ||
          ((a = E._queueHooks(e, "fx")),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          h.always(function () {
            h.always(function () {
              a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), ut.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (g ? "hide" : "show"))
            ) {
              if ("show" !== r || !v || void 0 === v[i]) continue;
              g = !0;
            }
            d[i] = (v && v[i]) || E.style(e, i);
          }
        if (((c = !E.isEmptyObject(t)), c || !E.isEmptyObject(d)))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
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
                (h.done(function () {
                  p.display = u;
                }),
                null == u && ((l = p.display), (u = "none" === l ? "" : l))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            h.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (c = !1),
          d))
            c ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = ne.access(e, "fxshow", { display: u })),
              o && (v.hidden = !g),
              g && ve([e], !0),
              h.done(function () {
                for (i in (g || ve([e]), ne.remove(e, "fxshow"), d))
                  E.style(e, i, d[i]);
              })),
              (c = pt(g ? v[i] : 0, i, h)),
              i in v ||
                ((v[i] = c.start), g && ((c.end = c.start), (c.start = 0)));
      }
      function vt(e, t) {
        var n, i, r, o, a;
        for (n in e)
          if (
            ((i = Z(n)),
            (r = t[i]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (a = E.cssHooks[i]),
            a && "expand" in a)
          )
            for (n in ((o = a.expand(o)), delete e[i], o))
              n in e || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      }
      function mt(e, t, n) {
        var i,
          r,
          o = 0,
          a = mt.prefilters.length,
          s = E.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (r) return !1;
            for (
              var t = st || ht(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = n / u.duration || 0,
                o = 1 - i,
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
            startTime: st || ht(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = E.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
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
          if (((i = mt.prefilters[o].call(u, e, l, u.opts)), i))
            return (
              b(i.stop) &&
                (E._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          E.map(l, pt, u),
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
              return de(n.elem, e, ue.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          b(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (mt.tweeners[n] = mt.tweeners[n] || []),
              mt.tweeners[n].unshift(t);
        },
        prefilters: [gt],
        prefilter: function (e, t) {
          t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
        },
      })),
        (E.speed = function (e, t, n) {
          var i =
            e && "object" === typeof e
              ? E.extend({}, e)
              : {
                  complete: n || (!n && t) || (b(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !b(t) && t),
                };
          return (
            E.fx.off
              ? (i.duration = 0)
              : "number" !== typeof i.duration &&
                (i.duration in E.fx.speeds
                  ? (i.duration = E.fx.speeds[i.duration])
                  : (i.duration = E.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              b(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
            }),
            i
          );
        }),
        E.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(fe)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var r = E.isEmptyObject(e),
              o = E.speed(t, n, i),
              a = function () {
                var t = mt(this, E.extend({}, e), o);
                (r || ne.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" !== typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = E.timers,
                  a = ne.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else for (r in a) a[r] && a[r].stop && lt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
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
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = E.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    E.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        E.each(["toggle", "show", "hide"], function (e, t) {
          var n = E.fn[t];
          E.fn[t] = function (e, i, r) {
            return null == e || "boolean" === typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, i, r);
          };
        }),
        E.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            E.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
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
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
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
          return X(this, E.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            E.removeAttr(this, e);
          });
        },
      }),
        E.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" === typeof e.getAttribute
                ? E.prop(e, t, n)
                : ((1 === o && E.isXMLDoc(e)) ||
                    (r =
                      E.attrHooks[t.toLowerCase()] ||
                      (E.expr.match.bool.test(t) ? yt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void E.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : ((i = E.find.attr(e, t)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!y.radioValue && "radio" === t && j(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match($);
            if (r && 1 === e.nodeType)
              while ((n = r[i++])) e.removeAttribute(n);
          },
        }),
        (yt = {
          set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = bt[t] || E.find.attr;
          bt[t] = function (e, t, i) {
            var r,
              o,
              a = t.toLowerCase();
            return (
              i ||
                ((o = bt[a]),
                (bt[a] = r),
                (r = null != n(e, t, i) ? a : null),
                (bt[a] = o)),
              r
            );
          };
        });
      var wt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
      function St(e) {
        var t = e.match($) || [];
        return t.join(" ");
      }
      function kt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Tt(e) {
        return Array.isArray(e)
          ? e
          : ("string" === typeof e && e.match($)) || [];
      }
      E.fn.extend({
        prop: function (e, t) {
          return X(this, E.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[E.propFix[e] || e];
          });
        },
      }),
        E.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && E.isXMLDoc(e)) ||
                  ((t = E.propFix[t] || t), (r = E.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = E.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : wt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
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
              i,
              r,
              o,
              a,
              s,
              c = 0;
            if (b(e))
              return this.each(function (t) {
                E(this).addClass(e.call(this, t, kt(this)));
              });
            if (((t = Tt(e)), t.length))
              while ((n = this[c++]))
                if (
                  ((r = kt(n)), (i = 1 === n.nodeType && " " + St(r) + " "), i)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  (s = St(i)), r !== s && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              r,
              o,
              a,
              s,
              c = 0;
            if (b(e))
              return this.each(function (t) {
                E(this).removeClass(e.call(this, t, kt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((t = Tt(e)), t.length))
              while ((n = this[c++]))
                if (
                  ((r = kt(n)), (i = 1 === n.nodeType && " " + St(r) + " "), i)
                ) {
                  a = 0;
                  while ((o = t[a++]))
                    while (i.indexOf(" " + o + " ") > -1)
                      i = i.replace(" " + o + " ", " ");
                  (s = St(i)), r !== s && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" === typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : b(e)
              ? this.each(function (n) {
                  E(this).toggleClass(e.call(this, n, kt(this), t), t);
                })
              : this.each(function () {
                  var t, r, o, a;
                  if (i) {
                    (r = 0), (o = E(this)), (a = Tt(e));
                    while ((t = a[r++]))
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  } else (void 0 !== e && "boolean" !== n) || ((t = kt(this)), t && ne.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ne.get(this, "__className__") || ""));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            t = " " + e + " ";
            while ((n = this[i++]))
              if (1 === n.nodeType && (" " + St(kt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Et = /\r/g;
      E.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = b(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  ((r = i ? e.call(this, n, E(this).val()) : e),
                  null == r
                    ? (r = "")
                    : "number" === typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = E.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    E.valHooks[this.type] ||
                    E.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? ((t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (n = t.get(r, "value"))
                ? n
                : ((n = r.value),
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
                return null != t ? t : St(E.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  c = a ? o + 1 : r.length;
                for (i = o < 0 ? c : a ? o : 0; i < c; i++)
                  if (
                    ((n = r[i]),
                    (n.selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !j(n.parentNode, "optgroup")))
                  ) {
                    if (((t = E(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                var n,
                  i,
                  r = e.options,
                  o = E.makeArray(t),
                  a = r.length;
                while (a--)
                  (i = r[a]),
                    (i.selected =
                      E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
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
        Ot = function (e) {
          e.stopPropagation();
        };
      E.extend(E.event, {
        trigger: function (e, t, i, r) {
          var o,
            a,
            c,
            u,
            l,
            f,
            h,
            d,
            p = [i || s],
            v = g.call(e, "type") ? e.type : e,
            m = g.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = c = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Ct.test(v + E.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((m = v.split(".")), (v = m.shift()), m.sort()),
              (l = v.indexOf(":") < 0 && "on" + v),
              (e = e[E.expando]
                ? e
                : new E.Event(v, "object" === typeof e && e)),
              (e.isTrigger = r ? 2 : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : E.makeArray(t, [e])),
              (h = E.event.special[v] || {}),
              r || !h.trigger || !1 !== h.trigger.apply(i, t)))
          ) {
            if (!r && !h.noBubble && !w(i)) {
              for (
                u = h.delegateType || v, Ct.test(u + v) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                p.push(a), (c = a);
              c === (i.ownerDocument || s) &&
                p.push(c.defaultView || c.parentWindow || n);
            }
            o = 0;
            while ((a = p[o++]) && !e.isPropagationStopped())
              (d = a),
                (e.type = o > 1 ? u : h.bindType || v),
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
              r ||
                e.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(p.pop(), t)) ||
                !ee(i) ||
                (l &&
                  b(i[v]) &&
                  !w(i) &&
                  ((c = i[l]),
                  c && (i[l] = null),
                  (E.event.triggered = v),
                  e.isPropagationStopped() && d.addEventListener(v, Ot),
                  i[v](),
                  e.isPropagationStopped() && d.removeEventListener(v, Ot),
                  (E.event.triggered = void 0),
                  c && (i[l] = c))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
          E.event.trigger(i, null, t);
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
                var i = this.ownerDocument || this,
                  r = ne.access(i, t);
                r || i.addEventListener(e, n, !0),
                  ne.access(i, t, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  r = ne.access(i, t) - 1;
                r
                  ? ne.access(i, t, r)
                  : (i.removeEventListener(e, n, !0), ne.remove(i, t));
              },
            };
          });
      var Nt = n.location,
        At = Date.now(),
        It = /\?/;
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
      var _t = /\[\]$/,
        jt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function Mt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          E.each(t, function (t, r) {
            n || _t.test(e)
              ? i(e, r)
              : Mt(
                  e + "[" + ("object" === typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== k(t)) i(e, t);
        else for (r in t) Mt(e + "[" + r + "]", t[r], n, i);
      }
      (E.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            var n = b(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
          E.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) Mt(n, e[n], t, r);
        return i.join("&");
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
                  Lt.test(this.nodeName) &&
                  !Dt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = E(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? E.map(n, function (e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          },
        });
      var Rt = /%20/g,
        Pt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        $t = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Wt = {},
        Ut = {},
        zt = "*/".concat("*"),
        Gt = s.createElement("a");
      function Vt(e) {
        return function (t, n) {
          "string" !== typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match($) || [];
          if (b(n))
            while ((i = o[r++]))
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Jt(e, t, n, i) {
        var r = {},
          o = e === Ut;
        function a(s) {
          var c;
          return (
            (r[s] = !0),
            E.each(e[s] || [], function (e, s) {
              var u = s(t, n, i);
              return "string" !== typeof u || o || r[u]
                ? o
                  ? !(c = u)
                  : void 0
                : (t.dataTypes.unshift(u), a(u), !1);
            }),
            c
          );
        }
        return a(t.dataTypes[0]) || (!r["*"] && a("*"));
      }
      function Xt(e, t) {
        var n,
          i,
          r = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && E.extend(!0, e, i), e;
      }
      function Yt(e, t, n) {
        var i,
          r,
          o,
          a,
          s = e.contents,
          c = e.dataTypes;
        while ("*" === c[0])
          c.shift(),
            void 0 === i &&
              (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
          for (r in s)
            if (s[r] && s[r].test(i)) {
              c.unshift(r);
              break;
            }
        if (c[0] in n) o = c[0];
        else {
          for (r in n) {
            if (!c[0] || e.converters[r + " " + c[0]]) {
              o = r;
              break;
            }
            a || (a = r);
          }
          o = o || a;
        }
        if (o) return o !== c[0] && c.unshift(o), n[o];
      }
      function Kt(e, t, n, i) {
        var r,
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
            !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (c = o),
            (o = l.shift()),
            o)
          )
            if ("*" === o) o = c;
            else if ("*" !== c && c !== o) {
              if (((a = u[c + " " + o] || u["* " + o]), !a))
                for (r in u)
                  if (
                    ((s = r.split(" ")),
                    s[1] === o &&
                      ((a = u[c + " " + s[0]] || u["* " + s[0]]), a))
                  ) {
                    !0 === a
                      ? (a = u[r])
                      : !0 !== u[r] && ((o = s[0]), l.unshift(s[1]));
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
      (Gt.href = Nt.href),
        E.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Nt.href,
            type: "GET",
            isLocal: Ft.test(Nt.protocol),
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
            return t ? Xt(Xt(e, E.ajaxSettings), t) : Xt(E.ajaxSettings, e);
          },
          ajaxPrefilter: Vt(Wt),
          ajaxTransport: Vt(Ut),
          ajax: function (e, t) {
            "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              o,
              a,
              c,
              u,
              l,
              f,
              h,
              d,
              p = E.ajaxSetup({}, t),
              g = p.context || p,
              v = p.context && (g.nodeType || g.jquery) ? E(g) : E.event,
              m = E.Deferred(),
              y = E.Callbacks("once memory"),
              b = p.statusCode || {},
              w = {},
              x = {},
              S = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a) {
                      a = {};
                      while ((t = qt.exec(o))) a[t[1].toLowerCase()] = t[2];
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
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) k.always(e[k.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || S;
                  return i && i.abort(t), T(0, t), this;
                },
              };
            if (
              (m.promise(k),
              (p.url = ((e || p.url || Nt.href) + "").replace(
                Bt,
                Nt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              u = s.createElement("a");
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    Gt.protocol + "//" + Gt.host !==
                    u.protocol + "//" + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" !== typeof p.data &&
                (p.data = E.param(p.data, p.traditional)),
              Jt(Wt, p, t, k),
              l)
            )
              return k;
            for (h in ((f = E.event && p.global),
            f && 0 === E.active++ && E.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !$t.test(p.type)),
            (r = p.url.replace(Pt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Rt, "+"))
              : ((d = p.url.slice(r.length)),
                p.data &&
                  (p.processData || "string" === typeof p.data) &&
                  ((r += (It.test(r) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((r = r.replace(Ht, "$1")),
                  (d = (It.test(r) ? "&" : "?") + "_=" + At++ + d)),
                (p.url = r + d)),
            p.ifModified &&
              (E.lastModified[r] &&
                k.setRequestHeader("If-Modified-Since", E.lastModified[r]),
              E.etag[r] && k.setRequestHeader("If-None-Match", E.etag[r])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              k.setRequestHeader("Content-Type", p.contentType),
            k.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              k.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, k, p) || l))
              return k.abort();
            if (
              ((S = "abort"),
              y.add(p.complete),
              k.done(p.success),
              k.fail(p.error),
              (i = Jt(Ut, p, t, k)),
              i)
            ) {
              if (((k.readyState = 1), f && v.trigger("ajaxSend", [k, p]), l))
                return k;
              p.async &&
                p.timeout > 0 &&
                (c = n.setTimeout(function () {
                  k.abort("timeout");
                }, p.timeout));
              try {
                (l = !1), i.send(w, T);
              } catch (e) {
                if (l) throw e;
                T(-1, e);
              }
            } else T(-1, "No Transport");
            function T(e, t, a, s) {
              var u,
                h,
                d,
                w,
                x,
                S = t;
              l ||
                ((l = !0),
                c && n.clearTimeout(c),
                (i = void 0),
                (o = s || ""),
                (k.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                a && (w = Yt(p, k, a)),
                (w = Kt(p, w, k, u)),
                u
                  ? (p.ifModified &&
                      ((x = k.getResponseHeader("Last-Modified")),
                      x && (E.lastModified[r] = x),
                      (x = k.getResponseHeader("etag")),
                      x && (E.etag[r] = x)),
                    204 === e || "HEAD" === p.type
                      ? (S = "nocontent")
                      : 304 === e
                      ? (S = "notmodified")
                      : ((S = w.state), (h = w.data), (d = w.error), (u = !d)))
                  : ((d = S), (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || S) + ""),
                u ? m.resolveWith(g, [h, S, k]) : m.rejectWith(g, [k, S, d]),
                k.statusCode(b),
                (b = void 0),
                f &&
                  v.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? h : d]),
                y.fireWith(g, [k, S]),
                f &&
                  (v.trigger("ajaxComplete", [k, p]),
                  --E.active || E.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (e, t, n) {
            return E.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return E.get(e, void 0, t, "script");
          },
        }),
        E.each(["get", "post"], function (e, t) {
          E[t] = function (e, n, i, r) {
            return (
              b(n) && ((r = r || i), (i = n), (n = void 0)),
              E.ajax(
                E.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
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
          var t, i;
          if (y.cors || (Zt && !e.crossDomain))
            return {
              send: function (r, o) {
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
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  s.setRequestHeader(a, r[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
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
                  (i = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = i)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && i();
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
              send: function (i, r) {
                (t = E("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
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
        E.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
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
              (r = e.jsonpCallback =
                b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(tn, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return a || E.error(r + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              i.always(function () {
                void 0 === o ? E(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), en.push(r)),
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
                    (i = t.createElement("base")),
                    (i.href = s.location.href),
                    t.head.appendChild(i))
                  : (t = s)),
              (r = D.exec(e)),
              (o = !n && []),
              r
                ? [t.createElement(r[1])]
                : ((r = Te([e], t, o)),
                  o && o.length && E(o).remove(),
                  E.merge([], r.childNodes)));
          var i, r, o;
        }),
        (E.fn.load = function (e, t, n) {
          var i,
            r,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((i = St(e.slice(s))), (e = e.slice(0, s))),
            b(t)
              ? ((n = t), (t = void 0))
              : t && "object" === typeof t && (r = "POST"),
            a.length > 0 &&
              E.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
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
            var i,
              r,
              o,
              a,
              s,
              c,
              u,
              l = E.css(e, "position"),
              f = E(e),
              h = {};
            "static" === l && (e.style.position = "relative"),
              (s = f.offset()),
              (o = E.css(e, "top")),
              (c = E.css(e, "left")),
              (u =
                ("absolute" === l || "fixed" === l) &&
                (o + c).indexOf("auto") > -1),
              u
                ? ((i = f.position()), (a = i.top), (r = i.left))
                : ((a = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
              b(t) && (t = t.call(e, n, E.extend({}, s))),
              null != t.top && (h.top = t.top - s.top + a),
              null != t.left && (h.left = t.left - s.left + r),
              "using" in t ? t.using.call(e, h) : f.css(h);
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
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === E.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                (t = this.offset()),
                  (n = i.ownerDocument),
                  (e = i.offsetParent || n.documentElement);
                while (
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === E.css(e, "position")
                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  ((r = E(e).offset()),
                  (r.top += E.css(e, "borderTopWidth", !0)),
                  (r.left += E.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - E.css(i, "marginTop", !0),
                left: t.left - r.left - E.css(i, "marginLeft", !0),
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
            E.fn[e] = function (i) {
              return X(
                this,
                function (e, i, r) {
                  var o;
                  if (
                    (w(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        E.each(["top", "left"], function (e, t) {
          E.cssHooks[t] = Je(y.pixelPosition, function (e, n) {
            if (n)
              return (n = Ve(e, t)), Ue.test(n) ? E(e).position()[t] + "px" : n;
          });
        }),
        E.each({ Height: "height", Width: "width" }, function (e, t) {
          E.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              E.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" !== typeof r),
                  s = n || (!0 === r || !0 === o ? "margin" : "border");
                return X(
                  this,
                  function (t, n, r) {
                    var o;
                    return w(t)
                      ? 0 === i.indexOf("outer")
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
                      : void 0 === r
                      ? E.css(t, n, s)
                      : E.style(t, n, r, s);
                  },
                  t,
                  a ? r : void 0,
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
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (E.proxy = function (e, t) {
          var n, i, r;
          if (("string" === typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
            return (
              (i = u.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, i.concat(u.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || E.guid++),
              r
            );
        }),
        (E.holdReady = function (e) {
          e ? E.readyWait++ : E.ready(!0);
        }),
        (E.isArray = Array.isArray),
        (E.parseJSON = JSON.parse),
        (E.nodeName = j),
        (E.isFunction = b),
        (E.isWindow = w),
        (E.camelCase = Z),
        (E.type = k),
        (E.now = Date.now),
        (E.isNumeric = function (e) {
          var t = E.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (i = []),
        (r = function () {
          return E;
        }.apply(t, i)),
        void 0 === r || (e.exports = r);
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
    var i = n("2d95");
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == i(e);
      };
  },
  "11e9": function (e, t, n) {
    var i = n("52a7"),
      r = n("4630"),
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
          if (s(e, t)) return r(!i.f.call(e, t), e[t]);
        };
  },
  1495: function (e, t, n) {
    var i = n("86cc"),
      r = n("cb7c"),
      o = n("0d58");
    e.exports = n("9e1e")
      ? Object.defineProperties
      : function (e, t) {
          r(e);
          var n,
            a = o(t),
            s = a.length,
            c = 0;
          while (s > c) i.f(e, (n = a[c++]), t[n]);
          return e;
        };
  },
  "1b92": function (e, t, n) {
    "use strict";
    n("7f7f"), n("ac6a");
    var i = n("cdba"),
      r = n("104e"),
      o = (function () {
        function e() {
          Object(i["a"])(this, e),
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
          Object(r["a"])(e, [
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
  "200f": function (e, t, n) {
    "use strict";
    n.r(t);
    n("7514");
    var i = n("9395"),
      r = (n("6b54"), n("28a5"), n("f559"), n("cdba")),
      o = n("104e"),
      a = n("5fb0"),
      s = (n("ac4d"), n("ac6a"), n("7f7f"), n("c5f6"), n("4917"), n("1157")),
      c = n.n(s),
      u = 100,
      l = 12,
      f = 20,
      h = (function () {
        function e(t) {
          Object(r["a"])(this, e),
            (this.tabId = t),
            (this.transitionOffset = 10),
            (this.selectedColor = null),
            (this.showAboveSelection = !1),
            (this.snippetId = null),
            c()(
              '<div id="snippet_popover_container">\n      <iframe class="snippet_popover_iframe" src="'
                .concat(
                  chrome.runtime.getURL(
                    "content_scripts/frames/popover/index.html"
                  ),
                  "?tab_id="
                )
                .concat(
                  this.tabId,
                  '" allowtransparency="false" frameborder="0" scrolling="no"></iframe>\n     </div>'
                )
            ).appendTo("body"),
            (this.$container = c()("#snippet_popover_container")),
            (this.proxy = c()(".snippet_popover_iframe").get(0).contentWindow);
        }
        return (
          Object(o["a"])(e, [
            {
              key: "disable",
              value: function () {
                this.$container.remove();
              },
            },
            {
              key: "isEditableSelection",
              value: function () {
                return (
                  !!window.getSelection().anchorNode.parentNode
                    .isContentEditable ||
                  (!!window.getSelection().rangeCount &&
                    0 ===
                      window.getSelection().getRangeAt(0).getClientRects()
                        .length)
                );
              },
            },
            {
              key: "showForImage",
              value: function (e) {
                var t = this;
                (this.snippetId = Number(e.attr("data-snippet-id"))),
                  this.proxy.postMessage(
                    {
                      action: "init",
                      imgUrl: e.get(0).src,
                      snippetId: Number(e.attr("data-snippet-id")),
                      color: Number(e.attr("data-color")),
                    },
                    a["c"]
                  );
                var n = e.offset();
                this.$container.css({
                  opacity: 0,
                  top: "".concat(n.top + 5, "px"),
                  left: "".concat(n.left + 10, "px"),
                  display: "none",
                }),
                  setTimeout(function () {
                    t.$container.css({
                      top: "".concat(n.top + 10, "px"),
                      left: "".concat(n.left + 10, "px"),
                      opacity: 1,
                      display: "block",
                    });
                  }, u);
              },
            },
            {
              key: "show",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (
                  ((this.snippetId = n),
                  (this.selectedColor = t),
                  this.proxy.postMessage(
                    { action: "init", color: t, snippetId: n },
                    a["c"]
                  ),
                  !this.isEditableSelection())
                ) {
                  var i = this.isBackwardSelection();
                  i
                    ? this.overflowWindowBoundaries(i)
                      ? (this.initialize(i, this.overflowWindowBoundaries(i)),
                        setTimeout(function () {
                          e.showOnLeft(e.overflowWindowBoundaries(i));
                        }, u))
                      : (this.initialize(i),
                        setTimeout(function () {
                          e.showOnLeft();
                        }, u))
                    : this.overflowWindowBoundaries(i)
                    ? (this.initialize(i, this.overflowWindowBoundaries(i)),
                      setTimeout(function () {
                        e.showOnRight(e.overflowWindowBoundaries(i));
                      }, u))
                    : (this.initialize(i),
                      setTimeout(function () {
                        e.showOnRight();
                      }, u));
                }
              },
            },
            {
              key: "hide",
              value: function () {
                var e = this,
                  t = this.$container[0].getBoundingClientRect();
                t.width &&
                  (this.isBackwardSelection()
                    ? this.$container.css({
                        opacity: 0,
                        top: t.top + window.pageYOffset - this.transitionOffset,
                      })
                    : this.$container.css({
                        opacity: 0,
                        top: t.top + window.pageYOffset + this.transitionOffset,
                      }),
                  setTimeout(function () {
                    e.$container.css({ display: "none" });
                  }, u));
              },
            },
            {
              key: "showOnLeft",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (window.getSelection().rangeCount) {
                  var t = window.getSelection().getRangeAt(0).getClientRects();
                  this.$container.removeClass("top-caret"),
                    this.$container.addClass("bottom-caret"),
                    t.length &&
                      ((this.showAboveSelection = !0),
                      this.$container.css({
                        top:
                          t[0].top -
                          this.$container.height() +
                          window.pageYOffset -
                          l,
                        left:
                          t[0].left -
                          this.$container.width() / 2 +
                          e +
                          window.pageXOffset,
                        opacity: 1,
                        display: "block",
                      }));
                }
              },
            },
            {
              key: "showOnRight",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (window.getSelection().rangeCount) {
                  var t = window.getSelection().getRangeAt(0).getClientRects();
                  this.$container.removeClass("bottom-caret"),
                    this.$container.addClass("top-caret"),
                    t.length &&
                      ((this.showAboveSelection = !1),
                      this.$container.css({
                        top:
                          t[t.length - 1].top +
                          t[t.length - 1].height +
                          window.pageYOffset +
                          l,
                        left:
                          t[t.length - 1].left +
                          t[t.length - 1].width -
                          e +
                          window.pageXOffset -
                          this.$container.width() / 2,
                        opacity: 1,
                        display: "block",
                      }));
                }
              },
            },
            {
              key: "overflowWindowBoundaries",
              value: function (e) {
                if (window.getSelection().rangeCount) {
                  var t = window.getSelection().getRangeAt(0).getClientRects(),
                    n =
                      this.$container.width() / 2 -
                      (t[0].left + window.pageXOffset) +
                      f,
                    i =
                      t[t.length - 1].left -
                      window.innerWidth +
                      this.$container.width() / 2 +
                      t[t.length - 1].width +
                      f,
                    r = t[0].left < this.$container.width() / 2,
                    o =
                      window.innerWidth <
                      t[t.length - 1].left +
                        this.$container.width() / 2 +
                        t[t.length - 1].width;
                  if (e) {
                    if (r) return n;
                    if (o) return -i + t[t.length - 1].width;
                  } else {
                    if (o) return i;
                    if (r) return -n + t[t.length - 1].width;
                  }
                }
                return null;
              },
            },
            {
              key: "initialize",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                if (window.getSelection().rangeCount) {
                  var n = window.getSelection().getRangeAt(0).getClientRects();
                  e
                    ? this.$container.css({
                        opacity: 0,
                        top:
                          n[0].top -
                          this.$container.height() -
                          this.transitionOffset +
                          window.pageYOffset,
                        left: n[0].left - this.$container.width() / 2 + t,
                        display: "none",
                        height: this.snippetId ? 138 : 84,
                      })
                    : this.$container.css({
                        opacity: 0,
                        top:
                          n[n.length - 1].top +
                          n[n.length - 1].height +
                          this.transitionOffset +
                          window.pageYOffset,
                        left:
                          n[n.length - 1].left +
                          n[n.length - 1].width -
                          this.$container.width() / 2 -
                          t,
                        display: "none",
                        height: this.snippetId ? 138 : 84,
                      });
                }
              },
            },
            {
              key: "isBackwardSelection",
              value: function () {
                var e = !1,
                  t = getSelection();
                if (t.anchorNode) {
                  var n = t.anchorNode.compareDocumentPosition(t.focusNode);
                  ((!n && t.anchorOffset > t.focusOffset) ||
                    n === Node.DOCUMENT_POSITION_PRECEDING) &&
                    (e = !0);
                }
                if (t.rangeCount) {
                  var i = t.getRangeAt(0).getClientRects();
                  i.length &&
                    (i[0].top - this.$container.height() - l - f < 0
                      ? (e = !1)
                      : window.innerHeight -
                          (i[i.length - 1].top +
                            i[i.length - 1].height +
                            l +
                            this.$container.height() +
                            f) <
                          0 && (e = !0));
                }
                return e;
              },
            },
            {
              key: "resize",
              value: function (e) {
                this.$container.css({ height: "".concat(e, "px") }),
                  this.showAboveSelection &&
                    ((this.showAboveSelection = !1),
                    this.showOnLeft(this.overflowWindowBoundaries(!0)));
              },
            },
          ]),
          e
        );
      })(),
      d = (function () {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = arguments.length > 1 ? arguments[1] : void 0;
          Object(r["a"])(this, e),
            (this.ADD_IMAGE = chrome.runtime.getURL("images/button_add.svg")),
            (this.EDIT_IMAGE = chrome.runtime.getURL("images/button_edit.svg")),
            chrome.storage.onChanged.addListener(function (e) {
              e.showImageSaveButton &&
                (e.showImageSaveButton.newValue ? t.enable() : t.disable());
            }),
            (this.options = n),
            c()(
              '<div class="snippet-img-button" style="background-image:url(\''.concat(
                this.ADD_IMAGE,
                "') !important;\"></div>"
              )
            ).appendTo("body"),
            (this.$btn = c()(".snippet-img-button")),
            i.showImageSaveButton && this.enable();
        }
        return (
          Object(o["a"])(e, [
            {
              key: "onMouseOver",
              value: function (e) {
                var t = c()(e.target);
                this.isValidImage(t) &&
                  (this.$btn.css({
                    "background-image": "url('".concat(
                      t.hasClass("snippet-highlight")
                        ? this.EDIT_IMAGE
                        : this.ADD_IMAGE,
                      "')"
                    ),
                    "z-index": 87e5,
                  }),
                  this.show(t));
              },
            },
            {
              key: "onMouseLeave",
              value: function (e) {
                (e.relatedTarget &&
                  "snippet-img-button" === e.relatedTarget.className) ||
                  this.hide();
              },
            },
            {
              key: "onClick",
              value: function () {
                return (
                  this.options.onButtonClick(this.$btn.data("$img")),
                  event.preventDefault(),
                  event.stopPropagation(),
                  !1
                );
              },
            },
            {
              key: "show",
              value: function (e) {
                var t = e.offset();
                t &&
                  this.$btn.css({
                    top: "".concat(t.top + 10, "px"),
                    left: "".concat(t.left + 10, "px"),
                    display: "block",
                  }),
                  this.$btn.data("$img", e);
              },
            },
            {
              key: "hide",
              value: function () {
                this.$btn.css("display", "none");
              },
            },
            {
              key: "isValidImage",
              value: function (e) {
                var t = e.get(0);
                if (
                  t.src &&
                  (t.src.startsWith("http") ||
                    t.src.startsWith("data:image/")) &&
                  !(e.width() < 150 || e.height() < 150)
                )
                  return !0;
              },
            },
            {
              key: "disable",
              value: function () {
                c()(document).off("mouseover.snippet-img"),
                  c()(document).off("mouseleave.snippet-img"),
                  this.$btn.off("click.snippet-img");
              },
            },
            {
              key: "enable",
              value: function () {
                c()(document).on(
                  "mouseover.snippet-img",
                  "img",
                  this.onMouseOver.bind(this)
                ),
                  c()(document).on(
                    "mouseleave.snippet-img",
                    "img, .snippet-img-button",
                    this.onMouseLeave.bind(this)
                  ),
                  this.$btn.on("click.snippet-img", this.onClick.bind(this));
              },
            },
          ]),
          e
        );
      })(),
      p = n("1b92"),
      g = n("0d83"),
      v = (function () {
        function e() {
          Object(r["a"])(this, e),
            c()(
              '<iframe id="snippet_screenshot_edit" src="'.concat(
                chrome.runtime.getURL(
                  "content_scripts/frames/edit-screenshot/index.html"
                ),
                '" allowtransparency="false" frameborder="0" scrolling="no"></iframe>'
              )
            ).appendTo("body"),
            (this.$editScreenshot = c()("#snippet_screenshot_edit")),
            (this.proxy = c()("#snippet_screenshot_edit").get(0).contentWindow);
        }
        return (
          Object(o["a"])(e, [
            {
              key: "disable",
              value: function () {
                this.$editScreenshot.remove();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$editScreenshot.hide();
              },
            },
            {
              key: "setEditScreenshotFrameImage",
              value: function (e) {
                this.proxy.postMessage({ action: "init", image: e }, a["c"]);
              },
            },
            {
              key: "show",
              value: function () {
                this.$editScreenshot.show();
              },
            },
          ]),
          e
        );
      })(),
      m = n("025e"),
      y = (function () {
        function e() {
          Object(r["a"])(this, e),
            (this.imageCoordinates = {}),
            (this.editScreenshot = new v()),
            c()(
              '<iframe id="snippet_screenshot" src="'.concat(
                chrome.runtime.getURL(
                  "content_scripts/frames/select-screenshot/index.html"
                ),
                '" allowtransparency="false" frameborder="0" scrolling="no" tabindex="0"></iframe>'
              )
            ).appendTo("body"),
            (this.$selectScreenshot = c()("#snippet_screenshot")),
            (this.proxy = c()("#snippet_screenshot").get(0).contentWindow),
            this.$selectScreenshot.hide(),
            this.editScreenshot.hide();
        }
        return (
          Object(o["a"])(e, [
            {
              key: "getImagePortion",
              value: function (e, t, n, i, r, o) {
                var a = Object(m["h"])() ? 1 : window.devicePixelRatio || 1,
                  s = document.createElement("canvas"),
                  c = s.getContext("2d");
                c.scale(a, a), (s.width = t * a), (s.height = n * a);
                var u = document.createElement("canvas"),
                  l = u.getContext("2d");
                return (
                  l.scale(a, a),
                  (u.width = e.width * a),
                  (u.height = e.height * a),
                  l.drawImage(e, 0, 0),
                  c.drawImage(
                    u,
                    i * a,
                    r * a,
                    t * a * o,
                    n * a * o,
                    0,
                    0,
                    t * a,
                    n * a
                  ),
                  s.toDataURL()
                );
              },
            },
            {
              key: "createImageFromScreenshotCoordinates",
              value: function (e) {
                var t = this,
                  n = { width: e.width, height: e.height, x: e.x, y: e.y };
                this.hide(),
                  chrome.runtime.sendMessage(
                    { action: "capture-screen", value: n },
                    function (e) {
                      var i = "",
                        r = new Image();
                      (r.src = e.screenCaptureUrl),
                        c()(r).on("load", function () {
                          (i = t.getImagePortion(
                            r,
                            n.width,
                            n.height,
                            n.x,
                            n.y,
                            1
                          )),
                            t.editScreenshot.setEditScreenshotFrameImage(i),
                            t.editScreenshot.show();
                        });
                    }
                  );
              },
            },
            {
              key: "disable",
              value: function () {
                this.editScreenshot.disable(), this.$selectScreenshot.remove();
              },
            },
            {
              key: "hideEditScreenshot",
              value: function () {
                this.editScreenshot.hide(),
                  this.editScreenshot.setEditScreenshotFrameImage("");
              },
            },
            {
              key: "show",
              value: function () {
                this.initFrame(), this.$selectScreenshot.show();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$selectScreenshot.hide();
              },
            },
            {
              key: "initFrame",
              value: function () {
                this.proxy.postMessage({ action: "init" }, a["c"]);
              },
            },
          ]),
          e
        );
      })(),
      b =
        (n("55dd"),
        n("3b2b"),
        n("cadf"),
        n("456d"),
        n("a481"),
        n("f751"),
        n("f9fa")),
      w =
        "function" === typeof Symbol &&
        "symbol" === Object(b["a"])(Symbol.iterator)
          ? function (e) {
              return Object(b["a"])(e);
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : Object(b["a"])(e);
            },
      x = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      S = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      k =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        },
      T = (function () {
        function e(t) {
          var n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5e3;
          x(this, e),
            (this.ctx = t),
            (this.iframes = n),
            (this.exclude = i),
            (this.iframesTimeout = r);
        }
        return (
          S(
            e,
            [
              {
                key: "getContexts",
                value: function () {
                  var e = void 0,
                    t = [];
                  return (
                    (e =
                      "undefined" !== typeof this.ctx && this.ctx
                        ? NodeList.prototype.isPrototypeOf(this.ctx)
                          ? Array.prototype.slice.call(this.ctx)
                          : Array.isArray(this.ctx)
                          ? this.ctx
                          : "string" === typeof this.ctx
                          ? Array.prototype.slice.call(
                              document.querySelectorAll(this.ctx)
                            )
                          : [this.ctx]
                        : []),
                    e.forEach(function (e) {
                      var n =
                        t.filter(function (t) {
                          return t.contains(e);
                        }).length > 0;
                      -1 !== t.indexOf(e) || n || t.push(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "getIframeContents",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {},
                    i = void 0;
                  try {
                    var r = e.contentWindow;
                    if (((i = r.document), !r || !i))
                      throw new Error("iframe inaccessible");
                  } catch (e) {
                    n();
                  }
                  i && t(i);
                },
              },
              {
                key: "isIframeBlank",
                value: function (e) {
                  var t = "about:blank",
                    n = e.getAttribute("src").trim(),
                    i = e.contentWindow.location.href;
                  return i === t && n !== t && n;
                },
              },
              {
                key: "observeIframeLoad",
                value: function (e, t, n) {
                  var i = this,
                    r = !1,
                    o = null,
                    a = function a() {
                      if (!r) {
                        (r = !0), clearTimeout(o);
                        try {
                          i.isIframeBlank(e) ||
                            (e.removeEventListener("load", a),
                            i.getIframeContents(e, t, n));
                        } catch (e) {
                          n();
                        }
                      }
                    };
                  e.addEventListener("load", a),
                    (o = setTimeout(a, this.iframesTimeout));
                },
              },
              {
                key: "onIframeReady",
                value: function (e, t, n) {
                  try {
                    "complete" === e.contentWindow.document.readyState
                      ? this.isIframeBlank(e)
                        ? this.observeIframeLoad(e, t, n)
                        : this.getIframeContents(e, t, n)
                      : this.observeIframeLoad(e, t, n);
                  } catch (e) {
                    n();
                  }
                },
              },
              {
                key: "waitForIframes",
                value: function (e, t) {
                  var n = this,
                    i = 0;
                  this.forEachIframe(
                    e,
                    function () {
                      return !0;
                    },
                    function (e) {
                      i++,
                        n.waitForIframes(e.querySelector("html"), function () {
                          --i || t();
                        });
                    },
                    function (e) {
                      e || t();
                    }
                  );
                },
              },
              {
                key: "forEachIframe",
                value: function (t, n, i) {
                  var r = this,
                    o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    a = t.querySelectorAll("iframe"),
                    s = a.length,
                    c = 0;
                  a = Array.prototype.slice.call(a);
                  var u = function () {
                    --s <= 0 && o(c);
                  };
                  s || u(),
                    a.forEach(function (t) {
                      e.matches(t, r.exclude)
                        ? u()
                        : r.onIframeReady(
                            t,
                            function (e) {
                              n(t) && (c++, i(e)), u();
                            },
                            u
                          );
                    });
                },
              },
              {
                key: "createIterator",
                value: function (e, t, n) {
                  return document.createNodeIterator(e, t, n, !1);
                },
              },
              {
                key: "createInstanceOnIframe",
                value: function (t) {
                  return new e(t.querySelector("html"), this.iframes);
                },
              },
              {
                key: "compareNodeIframe",
                value: function (e, t, n) {
                  var i = e.compareDocumentPosition(n),
                    r = Node.DOCUMENT_POSITION_PRECEDING;
                  if (i & r) {
                    if (null === t) return !0;
                    var o = t.compareDocumentPosition(n),
                      a = Node.DOCUMENT_POSITION_FOLLOWING;
                    if (o & a) return !0;
                  }
                  return !1;
                },
              },
              {
                key: "getIteratorNode",
                value: function (e) {
                  var t = e.previousNode(),
                    n = void 0;
                  return (
                    (n =
                      null === t ? e.nextNode() : e.nextNode() && e.nextNode()),
                    { prevNode: t, node: n }
                  );
                },
              },
              {
                key: "checkIframeFilter",
                value: function (e, t, n, i) {
                  var r = !1,
                    o = !1;
                  return (
                    i.forEach(function (e, t) {
                      e.val === n && ((r = t), (o = e.handled));
                    }),
                    this.compareNodeIframe(e, t, n)
                      ? (!1 !== r || o
                          ? !1 === r || o || (i[r].handled = !0)
                          : i.push({ val: n, handled: !0 }),
                        !0)
                      : (!1 === r && i.push({ val: n, handled: !1 }), !1)
                  );
                },
              },
              {
                key: "handleOpenIframes",
                value: function (e, t, n, i) {
                  var r = this;
                  e.forEach(function (e) {
                    e.handled ||
                      r.getIframeContents(e.val, function (e) {
                        r.createInstanceOnIframe(e).forEachNode(t, n, i);
                      });
                  });
                },
              },
              {
                key: "iterateThroughNodes",
                value: function (e, t, n, i, r) {
                  var o = this,
                    a = this.createIterator(t, e, i),
                    s = [],
                    c = [],
                    u = void 0,
                    l = void 0,
                    f = function () {
                      var e = o.getIteratorNode(a);
                      return (l = e.prevNode), (u = e.node), u;
                    };
                  while (f())
                    this.iframes &&
                      this.forEachIframe(
                        t,
                        function (e) {
                          return o.checkIframeFilter(u, l, e, s);
                        },
                        function (t) {
                          o.createInstanceOnIframe(t).forEachNode(
                            e,
                            function (e) {
                              return c.push(e);
                            },
                            i
                          );
                        }
                      ),
                      c.push(u);
                  c.forEach(function (e) {
                    n(e);
                  }),
                    this.iframes && this.handleOpenIframes(s, e, n, i),
                    r();
                },
              },
              {
                key: "forEachNode",
                value: function (e, t, n) {
                  var i = this,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    o = this.getContexts(),
                    a = o.length;
                  a || r(),
                    o.forEach(function (o) {
                      var s = function () {
                        i.iterateThroughNodes(e, o, t, n, function () {
                          --a <= 0 && r();
                        });
                      };
                      i.iframes ? i.waitForIframes(o, s) : s();
                    });
                },
              },
            ],
            [
              {
                key: "matches",
                value: function (e, t) {
                  var n = "string" === typeof t ? [t] : t,
                    i =
                      e.matches ||
                      e.matchesSelector ||
                      e.msMatchesSelector ||
                      e.mozMatchesSelector ||
                      e.oMatchesSelector ||
                      e.webkitMatchesSelector;
                  if (i) {
                    var r = !1;
                    return (
                      n.every(function (t) {
                        return !i.call(e, t) || ((r = !0), !1);
                      }),
                      r
                    );
                  }
                  return !1;
                },
              },
            ]
          ),
          e
        );
      })(),
      E = (function () {
        function e(t) {
          x(this, e), (this.ctx = t), (this.ie = !1);
          var n = window.navigator.userAgent;
          (n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1) &&
            (this.ie = !0);
        }
        return (
          S(e, [
            {
              key: "log",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "debug",
                  n = this.opt.log;
                this.opt.debug &&
                  "object" ===
                    ("undefined" === typeof n ? "undefined" : w(n)) &&
                  "function" === typeof n[t] &&
                  n[t]("mark.js: " + e);
              },
            },
            {
              key: "escapeStr",
              value: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
              },
            },
            {
              key: "createRegExp",
              value: function (e) {
                return (
                  "disabled" !== this.opt.wildcards &&
                    (e = this.setupWildcardsRegExp(e)),
                  (e = this.escapeStr(e)),
                  Object.keys(this.opt.synonyms).length &&
                    (e = this.createSynonymsRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                  (e = this.createMergedBlanksRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.createJoinersRegExp(e)),
                  "disabled" !== this.opt.wildcards &&
                    (e = this.createWildcardsRegExp(e)),
                  (e = this.createAccuracyRegExp(e)),
                  e
                );
              },
            },
            {
              key: "createSynonymsRegExp",
              value: function (e) {
                var t = this.opt.synonyms,
                  n = this.opt.caseSensitive ? "" : "i",
                  i =
                    this.opt.ignoreJoiners || this.opt.ignorePunctuation.length
                      ? "\0"
                      : "";
                for (var r in t)
                  if (t.hasOwnProperty(r)) {
                    var o = t[r],
                      a =
                        "disabled" !== this.opt.wildcards
                          ? this.setupWildcardsRegExp(r)
                          : this.escapeStr(r),
                      s =
                        "disabled" !== this.opt.wildcards
                          ? this.setupWildcardsRegExp(o)
                          : this.escapeStr(o);
                    "" !== a &&
                      "" !== s &&
                      (e = e.replace(
                        new RegExp(
                          "(" +
                            this.escapeStr(a) +
                            "|" +
                            this.escapeStr(s) +
                            ")",
                          "gm" + n
                        ),
                        i +
                          "(" +
                          this.processSynomyms(a) +
                          "|" +
                          this.processSynomyms(s) +
                          ")" +
                          i
                      ));
                  }
                return e;
              },
            },
            {
              key: "processSynomyms",
              value: function (e) {
                return (
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  e
                );
              },
            },
            {
              key: "setupWildcardsRegExp",
              value: function (e) {
                return (
                  (e = e.replace(/(?:\\)*\?/g, function (e) {
                    return "\\" === e.charAt(0) ? "?" : "";
                  })),
                  e.replace(/(?:\\)*\*/g, function (e) {
                    return "\\" === e.charAt(0) ? "*" : "";
                  })
                );
              },
            },
            {
              key: "createWildcardsRegExp",
              value: function (e) {
                var t = "withSpaces" === this.opt.wildcards;
                return e
                  .replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?")
                  .replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
              },
            },
            {
              key: "setupIgnoreJoinersRegExp",
              value: function (e) {
                return e.replace(/[^(|)\\]/g, function (e, t, n) {
                  var i = n.charAt(t + 1);
                  return /[(|)\\]/.test(i) || "" === i ? e : e + "\0";
                });
              },
            },
            {
              key: "createJoinersRegExp",
              value: function (e) {
                var t = [],
                  n = this.opt.ignorePunctuation;
                return (
                  Array.isArray(n) &&
                    n.length &&
                    t.push(this.escapeStr(n.join(""))),
                  this.opt.ignoreJoiners &&
                    t.push("\\u00ad\\u200b\\u200c\\u200d"),
                  t.length
                    ? e.split(/\u0000+/).join("[" + t.join("") + "]*")
                    : e
                );
              },
            },
            {
              key: "createDiacriticsRegExp",
              value: function (e) {
                var t = this.opt.caseSensitive ? "" : "i",
                  n = this.opt.caseSensitive
                    ? [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                        "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćč",
                        "CÇĆČ",
                        "dđď",
                        "DĐĎ",
                        "eèéẻẽẹêềếểễệëěēę",
                        "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïī",
                        "IÌÍỈĨỊÎÏĪ",
                        "lł",
                        "LŁ",
                        "nñňń",
                        "NÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøō",
                        "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rř",
                        "RŘ",
                        "sšśșş",
                        "SŠŚȘŞ",
                        "tťțţ",
                        "TŤȚŢ",
                        "uùúủũụưừứửữựûüůū",
                        "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿ",
                        "YÝỲỶỸỴŸ",
                        "zžżź",
                        "ZŽŻŹ",
                      ]
                    : [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćčCÇĆČ",
                        "dđďDĐĎ",
                        "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                        "lłLŁ",
                        "nñňńNÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rřRŘ",
                        "sšśșşSŠŚȘŞ",
                        "tťțţTŤȚŢ",
                        "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                        "zžżźZŽŻŹ",
                      ],
                  i = [];
                return (
                  e.split("").forEach(function (r) {
                    n.every(function (n) {
                      if (-1 !== n.indexOf(r)) {
                        if (i.indexOf(n) > -1) return !1;
                        (e = e.replace(
                          new RegExp("[" + n + "]", "gm" + t),
                          "[" + n + "]"
                        )),
                          i.push(n);
                      }
                      return !0;
                    });
                  }),
                  e
                );
              },
            },
            {
              key: "createMergedBlanksRegExp",
              value: function (e) {
                return e.replace(/[\s]+/gim, "([\\s]+)?");
              },
            },
            {
              key: "createAccuracyRegExp",
              value: function (e) {
                var t = this,
                  n = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",
                  i = this.opt.accuracy,
                  r = "string" === typeof i ? i : i.value,
                  o = "string" === typeof i ? [] : i.limiters,
                  a = "";
                switch (
                  (o.forEach(function (e) {
                    a += "|" + t.escapeStr(e);
                  }),
                  r)
                ) {
                  case "partially":
                  default:
                    return "()(" + e + ")";
                  case "complementary":
                    return (
                      (a = "\\s" + (a || this.escapeStr(n))),
                      "()([^" + a + "]*" + e + "[^" + a + "]*)"
                    );
                  case "exactly":
                    return "(^|\\s" + a + ")(" + e + ")(?=$|\\s" + a + ")";
                }
              },
            },
            {
              key: "getSeparatedKeywords",
              value: function (e) {
                var t = this,
                  n = [];
                return (
                  e.forEach(function (e) {
                    t.opt.separateWordSearch
                      ? e.split(" ").forEach(function (e) {
                          e.trim() && -1 === n.indexOf(e) && n.push(e);
                        })
                      : e.trim() && -1 === n.indexOf(e) && n.push(e);
                  }),
                  {
                    keywords: n.sort(function (e, t) {
                      return t.length - e.length;
                    }),
                    length: n.length,
                  }
                );
              },
            },
            {
              key: "isNumeric",
              value: function (e) {
                return Number(parseFloat(e)) == e;
              },
            },
            {
              key: "checkRanges",
              value: function (e) {
                var t = this;
                if (
                  !Array.isArray(e) ||
                  "[object Object]" !== Object.prototype.toString.call(e[0])
                )
                  return (
                    this.log(
                      "markRanges() will only accept an array of objects"
                    ),
                    this.opt.noMatch(e),
                    []
                  );
                var n = [],
                  i = 0;
                return (
                  e
                    .sort(function (e, t) {
                      return e.start - t.start;
                    })
                    .forEach(function (e) {
                      var r = t.callNoMatchOnInvalidRanges(e, i),
                        o = r.start,
                        a = r.end,
                        s = r.valid;
                      s &&
                        ((e.start = o), (e.length = a - o), n.push(e), (i = a));
                    }),
                  n
                );
              },
            },
            {
              key: "callNoMatchOnInvalidRanges",
              value: function (e, t) {
                var n = void 0,
                  i = void 0,
                  r = !1;
                return (
                  e && "undefined" !== typeof e.start
                    ? ((n = parseInt(e.start, 10)),
                      (i = n + parseInt(e.length, 10)),
                      this.isNumeric(e.start) &&
                      this.isNumeric(e.length) &&
                      i - t > 0 &&
                      i - n > 0
                        ? (r = !0)
                        : (this.log(
                            "Ignoring invalid or overlapping range: " +
                              JSON.stringify(e)
                          ),
                          this.opt.noMatch(e)))
                    : (this.log("Ignoring invalid range: " + JSON.stringify(e)),
                      this.opt.noMatch(e)),
                  { start: n, end: i, valid: r }
                );
              },
            },
            {
              key: "checkWhitespaceRanges",
              value: function (e, t, n) {
                var i = void 0,
                  r = !0,
                  o = n.length,
                  a = t - o,
                  s = parseInt(e.start, 10) - a;
                return (
                  (s = s > o ? o : s),
                  (i = s + parseInt(e.length, 10)),
                  i > o &&
                    ((i = o),
                    this.log(
                      "End range automatically set to the max value of " + o
                    )),
                  s < 0 || i - s < 0 || s > o || i > o
                    ? ((r = !1),
                      this.log("Invalid range: " + JSON.stringify(e)),
                      this.opt.noMatch(e))
                    : "" === n.substring(s, i).replace(/\s+/g, "") &&
                      ((r = !1),
                      this.log(
                        "Skipping whitespace only range: " + JSON.stringify(e)
                      ),
                      this.opt.noMatch(e)),
                  { start: s, end: i, valid: r }
                );
              },
            },
            {
              key: "getTextNodes",
              value: function (e) {
                var t = this,
                  n = "",
                  i = [];
                this.iterator.forEachNode(
                  NodeFilter.SHOW_TEXT,
                  function (e) {
                    i.push({
                      start: n.length,
                      end: (n += e.textContent).length,
                      node: e,
                    });
                  },
                  function (e) {
                    return t.matchesExclude(e.parentNode)
                      ? NodeFilter.FILTER_REJECT
                      : NodeFilter.FILTER_ACCEPT;
                  },
                  function () {
                    e({ value: n, nodes: i });
                  }
                );
              },
            },
            {
              key: "matchesExclude",
              value: function (e) {
                return T.matches(
                  e,
                  this.opt.exclude.concat([
                    "script",
                    "style",
                    "title",
                    "head",
                    "html",
                  ])
                );
              },
            },
            {
              key: "wrapRangeInTextNode",
              value: function (e, t, n) {
                var i = this.opt.element ? this.opt.element : "mark",
                  r = e.splitText(t),
                  o = r.splitText(n - t),
                  a = document.createElement(i);
                return (
                  a.setAttribute("data-snippet", "true"),
                  this.opt.className &&
                    a.setAttribute("class", this.opt.className),
                  (a.textContent = r.textContent),
                  r.parentNode.replaceChild(a, r),
                  o
                );
              },
            },
            {
              key: "wrapRangeInMappedTextNode",
              value: function (e, t, n, i, r) {
                var o = this;
                e.nodes.every(function (a, s) {
                  var c = e.nodes[s + 1];
                  if ("undefined" === typeof c || c.start > t) {
                    if (!i(a.node)) return !1;
                    var u = t - a.start,
                      l = (n > a.end ? a.end : n) - a.start,
                      f = e.value.substr(0, a.start),
                      h = e.value.substr(l + a.start);
                    if (
                      ((a.node = o.wrapRangeInTextNode(a.node, u, l)),
                      (e.value = f + h),
                      e.nodes.forEach(function (t, n) {
                        n >= s &&
                          (e.nodes[n].start > 0 &&
                            n !== s &&
                            (e.nodes[n].start -= l),
                          (e.nodes[n].end -= l));
                      }),
                      (n -= l),
                      r(a.node.previousSibling, a.start),
                      !(n > a.end))
                    )
                      return !1;
                    t = a.end;
                  }
                  return !0;
                });
              },
            },
            {
              key: "wrapMatches",
              value: function (e, t, n, i, r) {
                var o = this,
                  a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  t.nodes.forEach(function (t) {
                    t = t.node;
                    var r = void 0;
                    while (null !== (r = e.exec(t.textContent)) && "" !== r[a])
                      if (n(r[a], t)) {
                        var s = r.index;
                        if (0 !== a)
                          for (var c = 1; c < a; c++) s += r[c].length;
                        (t = o.wrapRangeInTextNode(t, s, s + r[a].length)),
                          i(t.previousSibling),
                          (e.lastIndex = 0);
                      }
                  }),
                    r();
                });
              },
            },
            {
              key: "wrapMatchesAcrossElements",
              value: function (e, t, n, i, r) {
                var o = this,
                  a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  var s = void 0;
                  while (null !== (s = e.exec(t.value)) && "" !== s[a]) {
                    var c = s.index;
                    if (0 !== a) for (var u = 1; u < a; u++) c += s[u].length;
                    var l = c + s[a].length;
                    l - c > o.opt.searchContent.length &&
                      ((c += o.opt.prefix.length), (l -= o.opt.suffix.length)),
                      o.wrapRangeInMappedTextNode(
                        t,
                        c,
                        l,
                        function (e) {
                          return n(s[a], e);
                        },
                        function (t, n) {
                          (e.lastIndex = n), i(t);
                        }
                      );
                  }
                  r();
                });
              },
            },
            {
              key: "wrapRangeFromIndex",
              value: function (e, t, n, i) {
                var r = this;
                this.getTextNodes(function (o) {
                  var a = o.value.length;
                  e.forEach(function (e, i) {
                    var s = r.checkWhitespaceRanges(e, a, o.value),
                      c = s.start,
                      u = s.end,
                      l = s.valid;
                    l &&
                      r.wrapRangeInMappedTextNode(
                        o,
                        c,
                        u,
                        function (n) {
                          return t(n, e, o.value.substring(c, u), i);
                        },
                        function (t) {
                          n(t, e);
                        }
                      );
                  }),
                    i();
                });
              },
            },
            {
              key: "unwrapMatches",
              value: function (e) {
                var t = e.parentNode,
                  n = document.createDocumentFragment();
                while (e.firstChild) n.appendChild(e.removeChild(e.firstChild));
                t.replaceChild(n, e),
                  this.ie ? this.normalizeTextNode(t) : t.normalize();
              },
            },
            {
              key: "normalizeTextNode",
              value: function (e) {
                if (e) {
                  if (3 === e.nodeType)
                    while (e.nextSibling && 3 === e.nextSibling.nodeType)
                      (e.nodeValue += e.nextSibling.nodeValue),
                        e.parentNode.removeChild(e.nextSibling);
                  else this.normalizeTextNode(e.firstChild);
                  this.normalizeTextNode(e.nextSibling);
                }
              },
            },
            {
              key: "markRegExp",
              value: function (e, t) {
                var n = this;
                (this.opt = t),
                  this.log('Searching with expression "' + e + '"');
                var i = 0,
                  r = "wrapMatches",
                  o = function (e) {
                    i++, n.opt.each(e);
                  };
                this.opt.acrossElements && (r = "wrapMatchesAcrossElements"),
                  this[r](
                    e,
                    this.opt.ignoreGroups,
                    function (e, t) {
                      return n.opt.filter(t, e, i);
                    },
                    o,
                    function () {
                      0 === i && n.opt.noMatch(e), n.opt.done(i);
                    }
                  );
              },
            },
            {
              key: "mark",
              value: function (e, t) {
                var n = this;
                this.opt = t;
                var i = 0,
                  r = "wrapMatches",
                  o = this.getSeparatedKeywords(
                    "string" === typeof e ? [e] : e
                  ),
                  a = o.keywords,
                  s = o.length,
                  c = this.opt.caseSensitive ? "" : "i",
                  u = function e(t) {
                    var o = new RegExp(n.createRegExp(t), "gm" + c),
                      u = 0;
                    n.log('Searching with expression "' + o + '"'),
                      n[r](
                        o,
                        1,
                        function (e, r) {
                          return n.opt.filter(r, t, i, u);
                        },
                        function (e) {
                          u++, i++, n.opt.each(e);
                        },
                        function () {
                          0 === u && n.opt.noMatch(t),
                            a[s - 1] === t
                              ? n.opt.done(i)
                              : e(a[a.indexOf(t) + 1]);
                        }
                      );
                  };
                this.opt.acrossElements && (r = "wrapMatchesAcrossElements"),
                  0 === s ? this.opt.done(i) : u(a[0]);
              },
            },
            {
              key: "markRanges",
              value: function (e, t) {
                var n = this;
                this.opt = t;
                var i = 0,
                  r = this.checkRanges(e);
                r && r.length
                  ? (this.log(
                      "Starting to mark with the following ranges: " +
                        JSON.stringify(r)
                    ),
                    this.wrapRangeFromIndex(
                      r,
                      function (e, t, i, r) {
                        return n.opt.filter(e, t, i, r);
                      },
                      function (e, t) {
                        i++, n.opt.each(e, t);
                      },
                      function () {
                        n.opt.done(i);
                      }
                    ))
                  : this.opt.done(i);
              },
            },
            {
              key: "unmark",
              value: function (e) {
                var t = this;
                this.opt = e;
                var n = this.opt.element ? this.opt.element : "*";
                (n += "[data-snippet]"),
                  this.opt.className && (n += "." + this.opt.className),
                  this.log('Removal selector "' + n + '"'),
                  this.iterator.forEachNode(
                    NodeFilter.SHOW_ELEMENT,
                    function (e) {
                      t.unwrapMatches(e);
                    },
                    function (e) {
                      var i = T.matches(e, n),
                        r = t.matchesExclude(e);
                      return !i || r
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT;
                    },
                    this.opt.done
                  );
              },
            },
            {
              key: "opt",
              set: function (e) {
                this._opt = k(
                  {},
                  {
                    element: "",
                    className: "",
                    exclude: [],
                    iframes: !1,
                    iframesTimeout: 5e3,
                    separateWordSearch: !0,
                    diacritics: !0,
                    synonyms: {},
                    accuracy: "partially",
                    acrossElements: !1,
                    caseSensitive: !1,
                    ignoreJoiners: !1,
                    ignoreGroups: 0,
                    ignorePunctuation: [],
                    wildcards: "disabled",
                    each: function () {},
                    noMatch: function () {},
                    filter: function () {
                      return !0;
                    },
                    done: function () {},
                    debug: !1,
                    log: window.console,
                  },
                  e
                );
              },
              get: function () {
                return this._opt;
              },
            },
            {
              key: "iterator",
              get: function () {
                return new T(
                  this.ctx,
                  this.opt.iframes,
                  this.opt.exclude,
                  this.opt.iframesTimeout
                );
              },
            },
          ]),
          e
        );
      })();
    function C(e) {
      var t = this,
        n = new E(e);
      return (
        (this.mark = function (e, i) {
          return n.mark(e, i), t;
        }),
        (this.markRegExp = function (e, i) {
          return n.markRegExp(e, i), t;
        }),
        (this.markRanges = function (e, i) {
          return n.markRanges(e, i), t;
        }),
        (this.unmark = function (e) {
          return n.unmark(e), t;
        }),
        this
      );
    }
    var O = C;
    g["a"].setSource("content-script");
    var N = (function () {
        function e(t, n, i) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          Object(r["a"])(this, e),
            (this.pdfMode = i.pdfMode),
            (this.tabId = t),
            (this.options = o),
            this.setColor(n),
            (this.selectedTextMinLength = i.selectedTextMinLength),
            (this.temporaryToFinalId = {}),
            (this.images = []),
            (this.snippetsIds = []),
            (this.popover = new h(this.tabId)),
            (this.imgButton = new d(
              {
                onButtonClick: this.onImgButtonClick.bind(this),
                color: this.color,
              },
              { showImageSaveButton: i.showImageSaveButton }
            )),
            (this.temporaryId = null),
            this.isTextSelected() && this.popover && this.popover.show(),
            c()(document).on("mouseup.snippet", this.onMouseUp.bind(this)),
            c()(document).on(
              "selection-end.snippet",
              this.onSelectionEnd.bind(this)
            ),
            c()(document).on(
              "mouseover.snippet",
              ".snippet-highlight",
              this.onMouseOver.bind(this)
            ),
            c()(document).on(
              "mouseout.snippet",
              ".snippet-highlight",
              this.onMouseOut.bind(this)
            ),
            c()(document).on(
              "click.snippet",
              ".snippet-highlight",
              this.onClick.bind(this)
            ),
            c()(window).on("resize.snippet", this.hidePopover.bind(this)),
            c()(document).on("keydown.snippet", this.onKeyPress.bind(this));
        }
        return (
          Object(o["a"])(e, [
            {
              key: "disable",
              value: function () {
                c()(document).off("mouseup.snippet"),
                  c()(document).off("selection-end.snippet"),
                  c()(document).off("mouseover.snippet"),
                  c()(document).off("mouseout.snippet"),
                  c()(document).off("click.snippet"),
                  c()(window).off("resize.snippet"),
                  c()(document).off("keydown.snippet"),
                  this.cleanupAllHighlightNodes(),
                  this.cleanupAllImageNodes(),
                  this.popover.disable(),
                  this.imgButton && this.imgButton.disable(),
                  this.selectScreenshot && this.selectScreenshot.disable();
              },
            },
            {
              key: "onKeyPress",
              value: function (e) {
                e = e || window.event;
                var t = e.keyCode || e.which;
                27 == t && this.popover && this.popover.hide();
              },
            },
            {
              key: "isTextSelected",
              value: function () {
                if (window.getSelection) {
                  if (
                    window.getSelection().toString() &&
                    window.getSelection().toString().length >
                      this.selectedTextMinLength
                  )
                    return !0;
                } else if (
                  document.selection &&
                  "Control" != document.selection.type &&
                  document.selection.createRange().text &&
                  document.selection.createRange().text.length >
                    this.selectedTextMinLength
                )
                  return !0;
                return !1;
              },
            },
            {
              key: "onClick",
              value: function (e) {
                if ("IMG" !== e.target.tagName) {
                  var t = c()(e.target),
                    n = this.getFinalSnippetId(t.attr("data-snippet-id")),
                    i = ~~t.attr("data-color");
                  this.popover.show(i, n);
                }
              },
            },
            {
              key: "onMouseOver",
              value: function (e) {
                if ("IMG" !== e.target.tagName) {
                  var t = c()(e.target).attr("data-snippet-id");
                  c()(
                    ".snippet-highlight[data-snippet-id=".concat(t, "]")
                  ).addClass("snippet-highlight-hover");
                }
              },
            },
            {
              key: "onMouseOut",
              value: function (e) {
                if ("IMG" !== e.target.tagName) {
                  var t = c()(e.target).attr("data-snippet-id");
                  c()(
                    ".snippet-highlight[data-snippet-id=".concat(t, "]")
                  ).removeClass("snippet-highlight-hover");
                }
              },
            },
            {
              key: "hidePopover",
              value: function () {
                this.popover && this.popover.hide();
              },
            },
            {
              key: "onMouseUp",
              value: function () {
                this.options.onMouseUp && this.options.onMouseUp();
                var e = this.getUserSelection(),
                  t = e.selectedText;
                t ? c()(document).trigger("selection-end") : this.hidePopover();
              },
            },
            {
              key: "onSelectionEnd",
              value: function () {
                this.popover &&
                  window.getSelection().toString() &&
                  window.getSelection().toString().length >
                    this.selectedTextMinLength &&
                  this.popover.show();
              },
            },
            {
              key: "onImgButtonClick",
              value: function (e) {
                this.options.trackAction("save_img_button_click"),
                  this.popover && this.popover.showForImage(e);
              },
            },
            {
              key: "getPdfSelectionPage",
              value: function () {
                var e = window.getSelection().anchorNode.parentNode;
                while (null != e.parentNode) {
                  if (e.hasAttribute("data-page-number"))
                    return c()(e).attr("data-page-number");
                  e = e.parentNode;
                }
              },
            },
            {
              key: "createHighlight",
              value: function (e) {
                this.hidePopover(),
                  (this.temporaryId = this.generateTemporaryId());
                var t = window.parent || window,
                  n = {
                    temp_id: this.temporaryId,
                    color: this.color,
                    folder_id: e ? e.folderId : 0,
                    type: a["i"],
                    generator: Object(m["d"])(),
                  };
                if (this.pdfMode && !e.imgUrl) {
                  n.type = a["h"];
                  var r = window.PDFViewerApplication,
                    o = r.metadata,
                    s = r.baseUrl;
                  (n.pdf_url = Object(m["c"])(s)),
                    o && o._metadata && (n.pdf_title = o._metadata["dc:title"]);
                }
                if (
                  (n.type === a["i"] &&
                    (n = Object(i["a"])({}, n, {
                      web_url: decodeURIComponent(
                        Object(m["c"])(t.location.href)
                      ),
                      web_author: this.getAuthor(),
                      web_title: this.getTitle(),
                      web_image: this.getImage(),
                      web_favicon: this.getFavIcon(),
                    })),
                  e && e.imgUrl)
                )
                  n.photo = "ext:".concat(e.imgUrl);
                else {
                  var c = this.getUserSelection(),
                    u = c.selectedText,
                    l = c.anchorNode,
                    f = c.prefix,
                    h = c.suffix;
                  if (!u) return;
                  if (((n.content = u), "" === n.content.trim())) return;
                  if (((n.web_range = "body"), l)) {
                    var d = this.getDomPath(l);
                    d.length && (n.web_range = d);
                  }
                  (n.web_range += a["e"] + f + a["e"] + h),
                    this.pdfMode &&
                      (n.web_range += a["e"] + this.getPdfSelectionPage()),
                    this.highlightWithMark(
                      Object(i["a"])({}, n, { id: this.temporaryId }),
                      this.getDomPath(l)
                    );
                }
                "" === n.web_image && delete n.web_image,
                  "" === n.web_favicon && delete n.web_favicon,
                  e && e.imgUrl
                    ? this.highlightImage(
                        this.temporaryId,
                        this.findImageByUrl(e.imgUrl)
                      )
                    : this.clearSelection(),
                  this.options.onCreateHighlight(n),
                  this.selectScreenshot &&
                    this.selectScreenshot.hideEditScreenshot();
              },
            },
            {
              key: "cleanupHighlightNodes",
              value: function (e) {
                c()("[data-snippet-id=".concat(e, "]"))
                  .removeAttr("data-snippet")
                  .removeAttr("data-snippet-id")
                  .removeAttr("data-color")
                  .removeClass(function (e, t) {
                    return (
                      t.match(
                        /(^|\s)snippet-highlight-\S+|snippet-has-notes/g
                      ) || []
                    ).join(" ");
                  });
              },
            },
            {
              key: "cleanupAllHighlightNodes",
              value: function () {
                c()(".snippet-highlight")
                  .removeAttr("data-snippet")
                  .removeAttr("data-snippet-id")
                  .removeAttr("data-color")
                  .removeClass(function (e, t) {
                    return (
                      t.match(
                        /(^|\s)snippet-highlight-\S+|snippet-has-notes/g
                      ) || []
                    ).join(" ");
                  });
              },
            },
            {
              key: "cleanupAllImageNodes",
              value: function () {
                c()(".snippet-highlight").removeClass(function (e, t) {
                  return (t.match(/(^|\s)snippet-highligh\S+/g) || []).join(
                    " "
                  );
                });
              },
            },
            {
              key: "removeHighlight",
              value: function (e) {
                var t = this.snippetsIds.indexOf(Number(e));
                t > -1 && this.snippetsIds.splice(t, 1),
                  this.hidePopover(),
                  this.removeHighlightFromDom(e);
              },
            },
            {
              key: "removeHighlightFromDom",
              value: function (e) {
                var t = c()(
                  ".snippet-highlight[data-snippet-id=".concat(e, "]")
                ).first();
                this.cleanupHighlightNodes(e),
                  t.removeClass("snippet-highlight");
              },
            },
            {
              key: "updateHighlight",
              value: function (e) {
                e.hidePopover && this.hidePopover();
                var t = c()(
                    ".snippet-highlight[data-snippet-id=".concat(e.id, "]")
                  ),
                  n = ~~t.first().attr("data-color");
                n !== ~~e.color &&
                  (t
                    .attr("data-color", e.color)
                    .removeClass(this.getColorClass(n)),
                  t.addClass(this.getColorClass(e.color))),
                  t.hasClass("snippet-has-notes")
                    ? e.hasNote || t.removeClass("snippet-has-notes")
                    : e.hasNote && t.addClass("snippet-has-notes");
              },
            },
            {
              key: "loadSnippets",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                g["a"].log("loading snippets (reload=".concat(n, ")"), e),
                  (this.images = []),
                  n &&
                    (this.cleanupAllHighlightNodes(),
                    this.cleanupAllImageNodes()),
                  e.length &&
                    (e.map(function (e) {
                      if (e.web_range)
                        if (e.web_range.startsWith("ext:"))
                          t.images.push({
                            url: e.web_range.substr(4),
                            color: e.color,
                            id: e.id,
                          });
                        else {
                          var n = e.web_range.split(a["e"]);
                          t.highlightWithMark(Object(i["a"])({}, e), n[0]);
                        }
                    }),
                    this.deserializeImages());
                var r = Object(m["e"])("next_jump_to_id", window.location.href);
                r &&
                  (this.pdfMode && this.options.onPageJump(~~r),
                  window.history.replaceState(
                    {},
                    "main",
                    Object(m["c"])(window.location.href)
                  ),
                  setTimeout(function () {
                    t.scrollTo(r);
                  }, 1e3));
              },
            },
            {
              key: "highlightWithMark",
              value: function (e, t) {
                var n = this;
                "undefined" === typeof e.__startTime
                  ? ((e.__startTime = new Date().getTime()),
                    (e.__iteration = 0))
                  : (e.__iteration += 1),
                  (e.__lastPath = t);
                var r = null;
                try {
                  r = c()(t).get(0);
                } catch (r) {
                  return (
                    (e.__endTime = new Date().getTime() - e.__startTime),
                    void ("body" !== t
                      ? setTimeout(function () {
                          n.highlightWithMark(Object(i["a"])({}, e), "body");
                        }, 0)
                      : this.options.trackError("remove_deserialized"))
                  );
                }
                if (!r) {
                  var o = this.extractParentFromPath(t);
                  return o
                    ? void setTimeout(function () {
                        n.highlightWithMark(Object(i["a"])({}, e), o);
                      }, 0)
                    : ((e.__endTime = new Date().getTime() - e.__startTime),
                      void this.options.trackError("remove_deserialized"));
                }
                var s = e.web_range.split(a["e"]),
                  u = s.length >= 3 ? s[1] : "",
                  l = s.length >= 3 ? s[2] : "",
                  f = {
                    separateWordSearch: !1,
                    acrossElements: !0,
                    iframes: !1,
                    className: "snippet-highlight snippet-highlight-"
                      .concat(p["a"].name(e.color), " ")
                      .concat(e.notes_count ? "snippet-has-notes" : ""),
                    element: "snippet",
                    diacritics: !1,
                    ignoreJoiners: !1,
                    searchContent: e.content,
                    suffix: l,
                    prefix: u,
                    each: function (t) {
                      t.setAttribute("data-snippet-id", e.id),
                        t.setAttribute("data-color", e.color);
                    },
                    done: function () {
                      (e.__endTime = new Date().getTime() - e.__startTime),
                        g["a"].log(
                          e.id +
                            " TIME: " +
                            e.__endTime +
                            "ms ITERATION = " +
                            e.__iteration +
                            " PATH = " +
                            e.__lastPath +
                            " <--- DONE"
                        );
                    },
                    noMatch: function () {
                      (e.__endTime = new Date().getTime() - e.__startTime),
                        g["a"].log(
                          e.id +
                            " TIME: " +
                            e.__endTime +
                            "ms ITERATION = " +
                            e.__iteration +
                            " PATH = " +
                            e.__lastPath +
                            " <--- NOMATCH"
                        );
                      var r = n.extractParentFromPath(t);
                      r
                        ? setTimeout(function () {
                            n.highlightWithMark(Object(i["a"])({}, e), r);
                          }, 0)
                        : n.options.trackError("remove_deserialized");
                    },
                  },
                  h = new O(r);
                h.mark(u + e.content + l, f);
              },
            },
            {
              key: "deserializeImages",
              value: function () {
                var e = this;
                0 !== this.images.length &&
                  this.images.slice(0).map(function (t, n) {
                    var i = e.findImageByUrl(t.url);
                    i &&
                      (e.highlightImage(t.id, i, t.color),
                      e.images.splice(n, 1));
                  });
              },
            },
            {
              key: "findImageByUrl",
              value: function (e) {
                for (var t = 0; t < document.images.length; t++)
                  if (document.images[t].src === e) return document.images[t];
                return !1;
              },
            },
            {
              key: "highlightImage",
              value: function (e, t, n) {
                g["a"].log("highlighting image", e);
                var i = c()(t);
                (n = n || this.color),
                  i.addClass(
                    "snippet-highlight snippet-highlight-".concat(
                      p["a"].name(n)
                    )
                  ),
                  i.attr("data-snippet-id", e),
                  i.attr("data-color", n);
              },
            },
            {
              key: "scrollTo",
              value: function (e) {
                var t = this;
                setTimeout(function () {
                  var n = c()(
                    ".snippet-highlight[data-snippet-id=".concat(e, "]")
                  );
                  0 !== n.length &&
                    c()(
                      t.pdfMode
                        ? "#viewerContainer"
                        : [document.documentElement, document.body]
                    ).animate(
                      {
                        scrollTop:
                          n.offset().top -
                          200 +
                          (t.pdfMode ? c()("#viewerContainer").scrollTop() : 0),
                      },
                      500
                    );
                }, 100);
              },
            },
            {
              key: "setColor",
              value: function (e, t) {
                (this.color = e), (this.colorClass = this.getColorClass(e, t));
              },
            },
            {
              key: "getColorClass",
              value: function (e) {
                return "snippet-highlight-".concat(p["a"].name(e));
              },
            },
            {
              key: "getFinalSnippetId",
              value: function (e) {
                return 0 === String(e).indexOf("temp_")
                  ? this.temporaryToFinalId[e]
                  : e;
              },
            },
            {
              key: "isBackwardSelection",
              value: function () {
                var e = !1,
                  t = getSelection();
                if (t.anchorNode) {
                  var n = t.anchorNode.compareDocumentPosition(t.focusNode);
                  ((!n && t.anchorOffset > t.focusOffset) ||
                    n === Node.DOCUMENT_POSITION_PRECEDING) &&
                    (e = !0);
                }
                return e;
              },
            },
            {
              key: "getSelectionObject",
              value: function (e) {
                var t = e.anchorNode,
                  n = e.anchorOffset;
                t instanceof Element && ((t = t.childNodes[n]), (n = 0));
                var i = e.focusNode,
                  r = e.focusOffset;
                return (
                  i instanceof Element && ((i = i.childNodes[r]), (r = 0)),
                  { startNode: t, startOffset: n, endNode: i, endOffset: r }
                );
              },
            },
            {
              key: "getPrefix",
              value: function (e) {
                if (!e.isCollapsed) {
                  var t = this.getSelectionObject(e),
                    n = t.startNode,
                    i = t.startOffset,
                    r = t.endNode,
                    o = t.endOffset;
                  return this.isBackwardSelection()
                    ? r && r.textContent
                      ? r.textContent.substring(o - a["f"], o)
                      : ""
                    : n && n.textContent
                    ? n.textContent.substring(i - a["f"], i)
                    : "";
                }
              },
            },
            {
              key: "getSuffix",
              value: function (e) {
                if (!e.isCollapsed) {
                  var t = this.getSelectionObject(e),
                    n = t.startNode,
                    i = t.startOffset,
                    r = t.endNode,
                    o = t.endOffset;
                  return this.isBackwardSelection()
                    ? n && n.textContent
                      ? n.textContent.substring(i, i + a["f"])
                      : ""
                    : r && r.textContent
                    ? r.textContent.substring(o, o + a["f"])
                    : "";
                }
              },
            },
            {
              key: "getUserSelection",
              value: function () {
                var e,
                  t = document.activeElement;
                if (t)
                  try {
                    e = t.value.substring(t.selectionStart, t.selectionEnd);
                  } catch (e) {}
                void 0 === e && (e = window.getSelection().toString());
                var n = this.getPrefix(window.getSelection()),
                  i = this.getSuffix(window.getSelection()),
                  r = window.getSelection();
                return {
                  selectedText: e,
                  anchorNode:
                    r && r.anchorNode ? r.anchorNode.parentNode : null,
                  prefix: n,
                  suffix: i,
                };
              },
            },
            {
              key: "getAuthor",
              value: function () {
                var e;
                return (
                  (e = document.querySelector("meta[property=author]")),
                  e
                    ? e.content
                    : ((e = document.querySelector(
                        'meta[property="article:author"]'
                      )),
                      e
                        ? e.content
                        : ((e = document.querySelector("meta[name=author]")),
                          e
                            ? e.content
                            : ((e =
                                document.querySelector("[itemprop=author]")),
                              e ? e.content : "")))
                );
              },
            },
            {
              key: "getTitle",
              value: function () {
                var e = window.parent || window;
                return e.document.title
                  ? e.document.title
                  : e.location.hostname;
              },
            },
            {
              key: "getImage",
              value: function () {
                var e;
                if (
                  ((e = document.querySelector('meta[property="og:image"]')),
                  e && e.content)
                )
                  return this.formatUrl(e.content);
                if (((e = document.querySelectorAll("img")), e.length)) {
                  var t = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var r, o = e[Symbol.iterator]();
                      !(t = (r = o.next()).done);
                      t = !0
                    ) {
                      var a = r.value;
                      if (a.width >= 400) return this.formatUrl(a.src);
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      t || null == o.return || o.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                }
                return "";
              },
            },
            {
              key: "getMaxWidthImage",
              value: function (e) {
                var t = e[0],
                  n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var o, a = e[Symbol.iterator]();
                    !(n = (o = a.next()).done);
                    n = !0
                  ) {
                    var s = o.value;
                    s.sizes && s.sizes.value && s.sizes.value.split("x").length
                      ? Number(s.sizes.value.split("x")[0]) >
                          Number(t.sizes.value.split("x")[0]) && (t = s)
                      : s.width > t.width && (t = s);
                  }
                } catch (e) {
                  (i = !0), (r = e);
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (i) throw r;
                  }
                }
                return t;
              },
            },
            {
              key: "formatUrl",
              value: function (e) {
                return e.startsWith("http")
                  ? e
                  : e.startsWith("data:")
                  ? e
                  : ""
                      .concat(window.location.protocol, "//")
                      .concat(window.location.hostname)
                      .concat(e);
              },
            },
            {
              key: "getFavIcon",
              value: function () {
                var e;
                return (
                  (e = document.querySelectorAll('link[rel~="icon"]')),
                  e.length
                    ? this.formatUrl(this.getMaxWidthImage(e).href)
                    : ((e = document.querySelectorAll(
                        'link[rel="apple-touch-icon"]'
                      )),
                      e.length
                        ? this.formatUrl(this.getMaxWidthImage(e).href)
                        : ((e = document.querySelectorAll(
                            'link[rel="apple-touch-icon-precomposed"]'
                          )),
                          e.length
                            ? this.formatUrl(this.getMaxWidthImage(e).href)
                            : ((e = document.querySelector(
                                'meta[name="msapplication-TileImage"]'
                              )),
                              e ? this.formatUrl(e.content) : "")))
                );
              },
            },
            {
              key: "getDomPath",
              value: function (e) {
                var t = [];
                while (null != e.parentNode) {
                  for (
                    var n = 0, i = 0, r = 0;
                    r < e.parentNode.childNodes.length;
                    r++
                  ) {
                    var o = e.parentNode.childNodes[r];
                    o.nodeName == e.nodeName && (o === e && (i = n), n++);
                  }
                  e.hasAttribute("id") && "" != e.id
                    ? t.unshift(e.nodeName.toLowerCase() + "#" + e.id)
                    : n > 1
                    ? t.unshift(e.nodeName.toLowerCase() + ":eq(" + i + ")")
                    : t.unshift(e.nodeName.toLowerCase()),
                    (e = e.parentNode);
                }
                return t.slice(1).join(">");
              },
            },
            {
              key: "extractParentFromPath",
              value: function (e) {
                var t = e.split(">");
                return t.length > 1 && (t.splice(-1, 1), t.join(">"));
              },
            },
            {
              key: "updateSnippet",
              value: function (e) {
                var t = e.temp_id;
                (this.temporaryToFinalId[t] = e.id),
                  this.snippetsIds.push(e.id),
                  c()(
                    ".snippet-highlight[data-snippet-id='".concat(t, "']")
                  ).attr("data-snippet-id", e.id);
              },
            },
            {
              key: "generateTemporaryId",
              value: function () {
                var e = "temp_" + new Date().getTime();
                return (this.temporaryToFinalId[e] = null), e;
              },
            },
            {
              key: "clearSelection",
              value: function () {
                window.getSelection
                  ? window.getSelection().empty
                    ? window.getSelection().empty()
                    : window.getSelection().removeAllRanges &&
                      window.getSelection().removeAllRanges()
                  : document.selection && document.selection.empty();
              },
            },
            {
              key: "showSelectScreenshot",
              value: function () {
                var e = this;
                this.selectScreenshot
                  ? (this.selectScreenshot.show(),
                    this.selectScreenshot.hideEditScreenshot())
                  : ((this.selectScreenshot = new y()),
                    setTimeout(function () {
                      e.selectScreenshot.show(),
                        e.selectScreenshot.hideEditScreenshot();
                    }, 250));
              },
            },
            {
              key: "closeEditScreenshotPopup",
              value: function () {
                this.selectScreenshot.hide(),
                  this.selectScreenshot.hideEditScreenshot();
              },
            },
            {
              key: "cropScreenshot",
              value: function (e) {
                this.selectScreenshot.createImageFromScreenshotCoordinates(e);
              },
            },
            {
              key: "popoverResize",
              value: function (e) {
                this.popover.resize(e);
              },
            },
          ]),
          e
        );
      })(),
      A = (function () {
        function e(t, n) {
          Object(r["a"])(this, e),
            (this.on = n.sidebarOn),
            (this.tabId = t),
            (this.pdfMode = n.pdfMode),
            g["a"].log("adding sidebar to dom");
          var i,
            o = "content_scripts/frames/application/index.html",
            a = c()("#snippet_sidebar_container");
          if (this.pdfMode) {
            var s = window.PDFViewerApplication.baseUrl;
            if (s.length) {
              var u = Object(m["e"])("next_jump_to_id", window.location.href);
              (i = Object(m["c"])(s, ["openDirect"])),
                u && (i = Object(m["a"])(i, "next_jump_to_id", u)),
                (i = "pdf::".concat(i));
            }
          } else i = window.location.href;
          (this.$dom = c()(
            '<div id="snippet_sidebar_container" class="'
              .concat(
                this.on ? "" : "minimal",
                '">\n        <div id="snippet_sidebar_iframe">\n          <iframe src="'
              )
              .concat(chrome.runtime.getURL(o), "?web_url=")
              .concat(encodeURIComponent(i), "&amp;tab_id=")
              .concat(encodeURIComponent(this.tabId), "&amp;mode=")
              .concat(this.on ? 1 : 0, "&amp;folder_id=")
              .concat(
                n.selectedFolder ? n.selectedFolder.id : 0,
                '" allowtransparency="false" frameborder="0" style="width:100%;height:100%"></iframe>\n        </div>\n     </div>'
              )
          )),
            a.get(0) ? a.replaceWith(this.$dom) : this.$dom.appendTo("body"),
            (this.proxy = c()("#snippet_sidebar_iframe iframe").get(
              0
            ).contentWindow);
        }
        return (
          Object(o["a"])(e, [
            {
              key: "toggleSidebar",
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                g["a"].log("toggleSidebar: ", e),
                  this.on !== e &&
                    (t
                      ? this.$dom.removeClass("noAnimation")
                      : this.$dom.addClass("noAnimation"),
                    e
                      ? this.$dom.removeClass("minimal")
                      : this.$dom.hasClass("minimal") ||
                        this.$dom.addClass("minimal"),
                    this.$dom.removeClass("hover"),
                    (this.on = e));
              },
            },
            {
              key: "openSidebar",
              value: function () {
                this.toggleSidebar(!0, !0);
              },
            },
            {
              key: "closeSidebar",
              value: function () {
                this.toggleSidebar(!1, !0);
              },
            },
            {
              key: "show",
              value: function () {
                this.$dom.show();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$dom.hide();
              },
            },
            {
              key: "disable",
              value: function () {
                this.$dom.remove();
              },
            },
          ]),
          e
        );
      })(),
      I = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Object(r["a"])(this, e),
            (this.options = n),
            t
              ? this.open()
              : (c()(
                  '<div class="snippet-pdf-button">'
                    .concat(
                      chrome.i18n.getMessage("highlightButton"),
                      ' &nbsp;&nbsp; <a href="#" class="snippet-pdf-button-close" style="text-decoration: none; position: absolute; top: 0px; right: 0px; width: 40px; height:40px; background: url('
                    )
                    .concat(
                      chrome.runtime.getURL("images/close.png"),
                      ') no-repeat center center; background-size: 20px 20px;"></a></div>'
                    )
                ).appendTo("body"),
                (this.$btn = c()(".snippet-pdf-button")));
        }
        return (
          Object(o["a"])(e, [
            {
              key: "onClick",
              value: function (e) {
                return c()(e.target).hasClass("snippet-pdf-button-close")
                  ? (this.hide(),
                    this.options.trackAction("pdf_button_close"),
                    !1)
                  : (this.options.trackAction("pdf_button_click"),
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.open(),
                    !1);
              },
            },
            {
              key: "show",
              value: function () {
                this.$btn.css({
                  top: "64px",
                  "white-space": "nowrap",
                  right: "15px",
                  display: "block",
                  position: "absolute",
                  color: "#fff",
                  height: "40px",
                  "line-height": "40px",
                  padding: "0 30px 0 10px",
                  "background-color": "#673AB7",
                  "border-radius": "5px",
                  border: "1px solid rgba(255,255,255,.4)",
                  "font-family": "sans-serif",
                  "font-size": "14px",
                  cursor: "pointer",
                });
              },
            },
            {
              key: "hide",
              value: function () {
                this.$btn.css("display", "none");
              },
            },
            {
              key: "open",
              value: function () {
                window.open(
                  ""
                    .concat(
                      chrome.runtime.getURL("pdfjs/web/viewer.html"),
                      "?file="
                    )
                    .concat(
                      encodeURIComponent(Object(m["c"])(window.location.href))
                    ),
                  "_self"
                );
              },
            },
            {
              key: "disable",
              value: function () {
                this.$btn.off("click.snippet-pdf");
              },
            },
            {
              key: "enable",
              value: function () {
                this.$btn.on("click.snippet-pdf", this.onClick.bind(this));
              },
            },
          ]),
          e
        );
      })(),
      _ = (function () {
        function e(t) {
          var n = this;
          if (
            (Object(r["a"])(this, e),
            (this.options = !1),
            (this.sidebar = null),
            (this.highlighter = null),
            (this.tabId = null),
            (this.proxy = null),
            (this.snippetsLoaded = !1),
            (this.showImageSaveButton = null),
            (this.addSnippetRequest = null),
            (this.observer = null),
            (this.lastSidebarState = null),
            (this.snippets = []),
            (this.selectedTextMinLength = 3),
            (this._url = new URL(window.location.href)),
            (this.accessToken = t.accessToken),
            Object(m["m"])(
              this._url.origin + this._url.pathname,
              t.disabledDomains
            ))
          ) {
            if (!Object(m["k"])(window.location.href))
              return void chrome.runtime.sendMessage({ action: "get-options" });
            var o = Object(m["e"])("openDirect", window.location.href) || !1;
            if (
              ((this.pdfButton = new I(o, {
                trackAction: this.trackAction.bind(this),
                trackError: this.trackError.bind(this),
              })),
              this.pdfButton.enable(),
              window.location.href.startsWith("http") ||
                window.location.href.startsWith("file:///"))
            )
              return this.pdfButton.show(), void (this.pdfMode = !1);
            this.pdfButton.hide(),
              this.pdfButton.disable(),
              (this.pdfMode = !0);
          }
          chrome.runtime.onMessage.addListener(function (e, t, r) {
            g["a"].log("[RECEIVING-IN-HOST] tab:".concat(n.tabId), e);
            var o = null,
              s = null;
            switch ((e["options"] && (n.options = e["options"]), e["action"])) {
              case "turn-off":
                n.turnOffHighlighter();
                break;
              case "toggle-sidebar-on":
                n.sidebar ? n.sidebar.toggleSidebar(!0, !0) : n.turnOnSidebar();
                break;
              case "toggle-sidebar-off":
                n.sidebar && n.sidebar.toggleSidebar(!1, !0);
                break;
              case "toggle-highlighter-on":
                n.isOnHighlighter() || n.turnOnHighlighter(!!e.sidebarVisible);
                break;
              case "toggle-highlighter-off":
                n.isOnHighlighter() && n.turnOffHighlighter();
                break;
              case "load-snippets":
                if (!n.isOnHighlighter()) return;
                (o = n.snippetsLoaded),
                  (n.snippetsLoaded = !0),
                  (n.snippets = e.data.snippets),
                  n.highlighter.loadSnippets(e.data.snippets, o),
                  n.addSnippetRequest &&
                    (!0 === n.addSnippetRequest
                      ? n.highlighter.createHighlight()
                      : n.highlighter.createHighlight(n.addSnippetRequest),
                    (n.addSnippetRequest = null));
                break;
              case "pdf-load-snippets":
                n.highlighter &&
                  ((s = n.snippets.filter(function (t) {
                    var n = t.web_range.split(a["e"]);
                    return (
                      !(n.length >= 4 && e.pageNumber) ||
                      ~~n[3] === ~~e.pageNumber
                    );
                  })),
                  n.highlighter.loadSnippets(s, o, n.snippets.length));
                break;
              case "send-selection":
                window.getSelection().toString() &&
                  window.getSelection().toString().length >
                    n.selectedTextMinLength &&
                  (n.isOnHighlighter()
                    ? n.highlighter.createHighlight()
                    : ((n.addSnippetRequest = !0), n.turnOnHighlighter()));
                break;
              case "send-image":
                n.isOnHighlighter()
                  ? n.highlighter.createHighlight(e)
                  : ((n.addSnippetRequest = e), n.turnOnHighlighter());
                break;
              case "snippet-added":
                n.highlighter.updateSnippet(e.data);
                break;
              case "snippet-added-error":
                n.highlighter.removeHighlight(e.data.temp_id),
                  chrome.runtime.sendMessage({
                    action: "set-option",
                    option: "sidebarOn",
                    value: !0,
                  });
                break;
              case "set-options":
                r("ack"), (n.options = e.value);
                break;
              case "reload":
                n.turnOffHighlighter(), n.turnOnHighlighter();
                break;
              case "take-screenshot":
                n.isOnHighlighter() &&
                  (n.highlighter.showSelectScreenshot(),
                  (n.lastSidebarState = n.options.sidebarOn),
                  chrome.runtime.sendMessage({
                    action: "set-option",
                    option: "sidebarOn",
                    value: !1,
                  }));
                break;
              case "jump":
                if (
                  Object(m["c"])(e.url) === Object(m["c"])(window.location.href)
                ) {
                  if (n.pdfMode) {
                    var c = e.snippet.web_range.split(a["e"]),
                      u = c.length >= 4 ? ~~c[3] : 0;
                    u && (window.PDFViewerApplication.page = u);
                  }
                  n.highlighter.scrollTo(e.id);
                } else window.location.href = Object(m["a"])(e.url, "next_jump_to_id", e.id);
                break;
              case "open-app":
                var l = window.open("".concat(a["j"]).concat(e.url), "_blank");
                l.focus();
                break;
              case "edit-snippet":
                n.highlighter.updateHighlight(
                  Object(i["a"])({}, e, { hidePopover: !0 })
                );
                break;
              case "delete-snippet":
                n.highlighter.removeHighlight(e.id);
                break;
              case "popover-create-highlight":
                n.highlighter.setColor(e.color),
                  n.highlighter.createHighlight(e);
                break;
              case "popover-edit-highlight":
                n.sendMessageToApp({
                  action: "edit-snippet",
                  id: e.id,
                  color: e.color,
                  folder_id: e.folderId,
                }),
                  n.highlighter.updateHighlight(e);
                break;
              case "popover-delete-highlight":
                n.sendMessageToApp({
                  action: "delete-snippet",
                  id: e.snippetId,
                }),
                  n.highlighter.removeHighlight(e.snippetId);
                break;
              case "popover-resize":
                n.highlighter.popoverResize(e.height);
                break;
              case "close-screenshot":
                n.highlighter.closeEditScreenshotPopup(),
                  n.returnSidebarToOriginalState();
                break;
              case "crop-screenshot":
                r(!0), n.highlighter.cropScreenshot(e.imageCoordinates);
                break;
              case "close-popover":
                n.highlighter.hidePopover();
                break;
              case "load-folders":
                n.sendMessageToApp({ action: "load-folders" });
                break;
            }
          }),
            this.init(function () {
              n.accessToken
                ? n.options.highlightingOn
                  ? (n.turnOnHighlighter(!0),
                    n.options.sidebarPin
                      ? n.turnOnSidebar()
                      : n.turnOnSidebar(!1))
                  : g["a"].log("highlighting is off => exit")
                : g["a"].log("constructor not logged yet => exit");
            });
        }
        return (
          Object(o["a"])(e, [
            {
              key: "init",
              value: function (e) {
                var t = this;
                g["a"].log("init called");
                var n = this;
                null === this.tabId
                  ? chrome.runtime.sendMessage(
                      { action: "init-tab" },
                      function (i) {
                        (n.options = i.options),
                          (n.tabId = i.tabId),
                          g["a"].log("received init-tab", t.options),
                          e && e.apply(n);
                      }
                    )
                  : e && e.apply(n);
              },
            },
            {
              key: "isOnHighlighter",
              value: function () {
                return null !== this.highlighter;
              },
            },
            {
              key: "turnOnSidebar",
              value: function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                (this.options.sidebarOn = e),
                  (this.sidebar = new A(
                    this.tabId,
                    Object(i["a"])({}, this.options, { pdfMode: this.pdfMode })
                  ));
              },
            },
            {
              key: "turnOffSidebar",
              value: function () {
                null !== this.sidebar &&
                  (this.sidebar.disable(), (this.sidebar = null));
              },
            },
            {
              key: "turnOnHighlighter",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                this.isOnHighlighter() ||
                  (g["a"].log("Turn on highlighter"),
                  chrome.storage.local.get(
                    [
                      "showImageSaveButton",
                      "accessToken",
                      "user",
                      "selectedTextMinLength",
                    ],
                    function (n) {
                      g["a"].log("read data from storage"),
                        (e.showImageSaveButton = n.showImageSaveButton),
                        (e.accessToken = n.accessToken),
                        n.selectedTextMinLength &&
                          (e.selectedTextMinLength = n.selectedTextMinLength),
                        e.init(function () {
                          e.accessToken
                            ? e.isOnHighlighter() ||
                              ((e.highlighter = new N(
                                e.tabId,
                                e.options.color,
                                {
                                  showImageSaveButton: e.showImageSaveButton,
                                  pdfMode: e.pdfMode,
                                  selectedTextMinLength:
                                    e.selectedTextMinLength,
                                },
                                {
                                  onCreateHighlight:
                                    e.onCreateHighlight.bind(e),
                                  trackAction: e.trackAction.bind(e),
                                  trackError: e.trackError.bind(e),
                                  onPageJump: e.onPageJump.bind(e),
                                  onMouseUp: e.onMouseUp.bind(e),
                                }
                              )),
                              t || null !== e.sidebar || e.turnOnSidebar(!1))
                            : g["a"].log("not logged yet => exit");
                        });
                    }
                  ));
              },
            },
            {
              key: "turnOffHighlighter",
              value: function () {
                this.isOnHighlighter() &&
                  (this.highlighter.disable(),
                  this.turnOffSidebar(),
                  (this.highlighter = null),
                  this.observer && this.observer.disconnect());
              },
            },
            {
              key: "onCreateHighlight",
              value: function (e) {
                this.returnSidebarToOriginalState(),
                  this.sendMessageToApp({ action: "add-snippet", snippet: e });
              },
            },
            {
              key: "onPageJump",
              value: function (e) {
                if (this.pdfMode) {
                  var t = this.snippets.find(function (t) {
                    return t.id === e;
                  });
                  if (!t) return;
                  var n = t.web_range.split(a["e"]),
                    i = n.length >= 4 ? ~~n[3] : 0;
                  i && (window.PDFViewerApplication.page = i);
                }
              },
            },
            {
              key: "onMouseUp",
              value: function () {
                this.sidebar &&
                  this.options.sidebarOn &&
                  !this.options.sidebarPin &&
                  chrome.runtime.sendMessage({
                    action: "set-option",
                    option: "sidebarOn",
                    value: !1,
                  });
              },
            },
            {
              key: "sendMessageToApp",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                this.snippetsLoaded
                  ? (g["a"].log(
                      "[SEND-TO-APP] from tab:".concat(this.tabId),
                      e
                    ),
                    this.sidebar.proxy.postMessage(
                      Object(i["a"])({}, e, {
                        target: "app",
                        tabId: this.tabId,
                      }),
                      a["c"]
                    ))
                  : (30 === n
                      ? this.trackError("cannot_send_message_to_app")
                      : 60 === n &&
                        this.trackError("cannot_send_message_to_app_lost"),
                    setTimeout(function () {
                      t.sendMessageToApp(e, n + 1);
                    }, 100));
              },
            },
            {
              key: "returnSidebarToOriginalState",
              value: function () {
                null !== this.lastSidebarState &&
                  (this.lastSidebarState
                    ? this.options.sidebarOn ||
                      chrome.runtime.sendMessage({
                        action: "set-option",
                        option: "sidebarOn",
                        value: !0,
                      })
                    : this.options.sidebarOn &&
                      chrome.runtime.sendMessage({
                        action: "set-option",
                        option: "sidebarOn",
                        value: !1,
                      }));
              },
            },
            {
              key: "trackAction",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                chrome.runtime.sendMessage({
                  action: "analytics-action",
                  data: { action: e, obj: t },
                });
              },
            },
            {
              key: "trackError",
              value: function (e) {
                chrome.runtime.sendMessage({
                  action: "analytics-error",
                  data: { action: e },
                });
              },
            },
          ]),
          e
        );
      })();
    g["a"].log("[content-main] start"),
      window.__snippet_pdf_mode__
        ? document.addEventListener("webviewerloaded", function () {
            window.PDFViewerApplication.initializedPromise.then(function () {
              window.PDFViewerApplication.eventBus.on(
                "textlayerrendered",
                function () {
                  document.documentElement.getAttribute(
                    "__snippetScriptLoaded__"
                  ) ||
                    (document.documentElement.setAttribute(
                      "__snippetScriptLoaded__",
                      "yes"
                    ),
                    chrome.storage.local.get(
                      ["disabledDomains", "accessToken"],
                      function (e) {
                        new _(e);
                      }
                    ));
                }
              );
            });
          })
        : document.documentElement.getAttribute("__snippetScriptLoaded__") ||
          (document.documentElement.setAttribute(
            "__snippetScriptLoaded__",
            "yes"
          ),
          chrome.storage.local.get(
            ["disabledDomains", "accessToken"],
            function (e) {
              new _(e);
            }
          ));
  },
  "214f": function (e, t, n) {
    "use strict";
    n("b0c5");
    var i = n("2aba"),
      r = n("32e9"),
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
      var h = s(e),
        d = !o(function () {
          var t = {};
          return (
            (t[h] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        p = d
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
                n[h](""),
                !t
              );
            })
          : void 0;
      if (!d || !p || ("replace" === e && !l) || ("split" === e && !f)) {
        var g = /./[h],
          v = n(a, h, ""[e], function (e, t, n, i, r) {
            return t.exec === c
              ? d && !r
                ? { done: !0, value: g.call(t, n, i) }
                : { done: !0, value: e.call(n, t, i) }
              : { done: !1 };
          }),
          m = v[0],
          y = v[1];
        i(String.prototype, e, m),
          r(
            RegExp.prototype,
            h,
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
    var i = n("d3f4"),
      r = n("7726").document,
      o = i(r) && i(r.createElement);
    e.exports = function (e) {
      return o ? r.createElement(e) : {};
    };
  },
  "23c6": function (e, t, n) {
    var i = n("2d95"),
      r = n("2b4c")("toStringTag"),
      o =
        "Arguments" ==
        i(
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
        : "string" == typeof (n = a((t = Object(e)), r))
        ? n
        : o
        ? i(t)
        : "Object" == (s = i(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  2621: function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  "28a5": function (e, t, n) {
    "use strict";
    var i = n("aae3"),
      r = n("cb7c"),
      o = n("ebd6"),
      a = n("0390"),
      s = n("9def"),
      c = n("5f1b"),
      u = n("520a"),
      l = n("79e5"),
      f = Math.min,
      h = [].push,
      d = "split",
      p = "length",
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
          4 != "test"[d](/(?:)/, -1)[p] ||
          2 != "ab"[d](/(?:ab)*/)[p] ||
          4 != "."[d](/(.?)(.?)/)[p] ||
          "."[d](/()()/)[p] > 1 ||
          ""[d](/.?/)[p]
            ? function (e, t) {
                var r = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!i(e)) return n.call(r, e, t);
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
                  d = void 0 === t ? v : t >>> 0,
                  m = new RegExp(e.source, l + "g");
                while ((o = u.call(m, r))) {
                  if (
                    ((a = m[g]),
                    a > f &&
                      (c.push(r.slice(f, o.index)),
                      o[p] > 1 && o.index < r[p] && h.apply(c, o.slice(1)),
                      (s = o[0][p]),
                      (f = a),
                      c[p] >= d))
                  )
                    break;
                  m[g] === o.index && m[g]++;
                }
                return (
                  f === r[p]
                    ? (!s && m.test("")) || c.push("")
                    : c.push(r.slice(f)),
                  c[p] > d ? c.slice(0, d) : c
                );
              }
            : "0"[d](void 0, 0)[p]
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t);
              }
            : n),
        [
          function (n, i) {
            var r = e(this),
              o = void 0 == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, r, i) : y.call(String(r), n, i);
          },
          function (e, t) {
            var i = l(y, e, this, t, y !== n);
            if (i.done) return i.value;
            var u = r(e),
              h = String(this),
              d = o(u, RegExp),
              p = u.unicode,
              g =
                (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (m ? "y" : "g"),
              b = new d(m ? u : "^(?:" + u.source + ")", g),
              w = void 0 === t ? v : t >>> 0;
            if (0 === w) return [];
            if (0 === h.length) return null === c(b, h) ? [h] : [];
            var x = 0,
              S = 0,
              k = [];
            while (S < h.length) {
              b.lastIndex = m ? S : 0;
              var T,
                E = c(b, m ? h : h.slice(S));
              if (
                null === E ||
                (T = f(s(b.lastIndex + (m ? 0 : S)), h.length)) === x
              )
                S = a(h, S, p);
              else {
                if ((k.push(h.slice(x, S)), k.length === w)) return k;
                for (var C = 1; C <= E.length - 1; C++)
                  if ((k.push(E[C]), k.length === w)) return k;
                S = x = T;
              }
            }
            return k.push(h.slice(x)), k;
          },
        ]
      );
    });
  },
  "2aba": function (e, t, n) {
    var i = n("7726"),
      r = n("32e9"),
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
        c && (o(n, "name") || r(n, "name", t)),
          e[t] !== n &&
            (c && (o(n, a) || r(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
            e === i
              ? (e[t] = n)
              : s
              ? e[t]
                ? (e[t] = n)
                : r(e, t, n)
              : (delete e[t], r(e, t, n)));
      })(Function.prototype, c, function () {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  "2aeb": function (e, t, n) {
    var i = n("cb7c"),
      r = n("1495"),
      o = n("e11e"),
      a = n("613b")("IE_PROTO"),
      s = function () {},
      c = "prototype",
      u = function () {
        var e,
          t = n("230e")("iframe"),
          i = o.length,
          r = "<",
          a = ">";
        (t.style.display = "none"),
          n("fab2").appendChild(t),
          (t.src = "javascript:"),
          (e = t.contentWindow.document),
          e.open(),
          e.write(r + "script" + a + "document.F=Object" + r + "/script" + a),
          e.close(),
          (u = e.F);
        while (i--) delete u[c][o[i]];
        return u();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((s[c] = i(e)), (n = new s()), (s[c] = null), (n[a] = e))
            : (n = u()),
          void 0 === t ? n : r(n, t)
        );
      };
  },
  "2b4c": function (e, t, n) {
    var i = n("5537")("wks"),
      r = n("ca5a"),
      o = n("7726").Symbol,
      a = "function" == typeof o,
      s = (e.exports = function (e) {
        return i[e] || (i[e] = (a && o[e]) || (a ? o : r)("Symbol." + e));
      });
    s.store = i;
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
  "2f21": function (e, t, n) {
    "use strict";
    var i = n("79e5");
    e.exports = function (e, t) {
      return (
        !!e &&
        i(function () {
          t ? e.call(null, function () {}, 1) : e.call(null);
        })
      );
    };
  },
  "2fdb": function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("d2c8"),
      o = "includes";
    i(i.P + i.F * n("5147")(o), "String", {
      includes: function (e) {
        return !!~r(this, e, o).indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
  },
  "32e9": function (e, t, n) {
    var i = n("86cc"),
      r = n("4630");
    e.exports = n("9e1e")
      ? function (e, t, n) {
          return i.f(e, t, r(1, n));
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
    var i = n("cb7c"),
      r = n("83a1"),
      o = n("5f1b");
    n("214f")("search", 1, function (e, t, n, a) {
      return [
        function (n) {
          var i = e(this),
            r = void 0 == n ? void 0 : n[t];
          return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i));
        },
        function (e) {
          var t = a(n, e, this);
          if (t.done) return t.value;
          var s = i(e),
            c = String(this),
            u = s.lastIndex;
          r(u, 0) || (s.lastIndex = 0);
          var l = o(s, c);
          return (
            r(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index
          );
        },
      ];
    });
  },
  "38fd": function (e, t, n) {
    var i = n("69a8"),
      r = n("4bf8"),
      o = n("613b")("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = r(e)),
          i(e, o)
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
    var i = n("7726"),
      r = n("8378"),
      o = n("2d00"),
      a = n("37c8"),
      s = n("86cc").f;
    e.exports = function (e) {
      var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
      "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
    };
  },
  "3b2b": function (e, t, n) {
    var i = n("7726"),
      r = n("5dbc"),
      o = n("86cc").f,
      a = n("9093").f,
      s = n("aae3"),
      c = n("0bfb"),
      u = i.RegExp,
      l = u,
      f = u.prototype,
      h = /a/g,
      d = /a/g,
      p = new u(h) !== h;
    if (
      n("9e1e") &&
      (!p ||
        n("79e5")(function () {
          return (
            (d[n("2b4c")("match")] = !1),
            u(h) != h || u(d) == d || "/a/i" != u(h, "i")
          );
        }))
    ) {
      u = function (e, t) {
        var n = this instanceof u,
          i = s(e),
          o = void 0 === t;
        return !n && i && e.constructor === u && o
          ? e
          : r(
              p
                ? new l(i && !o ? e.source : e, t)
                : l(
                    (i = e instanceof u) ? e.source : e,
                    i && o ? c.call(e) : t
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
      (f.constructor = u), (u.prototype = f), n("2aba")(i, "RegExp", u);
    }
    n("7a56")("RegExp");
  },
  "41a0": function (e, t, n) {
    "use strict";
    var i = n("2aeb"),
      r = n("4630"),
      o = n("7f20"),
      a = {};
    n("32e9")(a, n("2b4c")("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = i(a, { next: r(1, n) })), o(e, t + " Iterator");
      });
  },
  "456d": function (e, t, n) {
    var i = n("4bf8"),
      r = n("0d58");
    n("5eda")("keys", function () {
      return function (e) {
        return r(i(e));
      };
    });
  },
  4588: function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
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
  4917: function (e, t, n) {
    "use strict";
    var i = n("cb7c"),
      r = n("9def"),
      o = n("0390"),
      a = n("5f1b");
    n("214f")("match", 1, function (e, t, n, s) {
      return [
        function (n) {
          var i = e(this),
            r = void 0 == n ? void 0 : n[t];
          return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i));
        },
        function (e) {
          var t = s(n, e, this);
          if (t.done) return t.value;
          var c = i(e),
            u = String(this);
          if (!c.global) return a(c, u);
          var l = c.unicode;
          c.lastIndex = 0;
          var f,
            h = [],
            d = 0;
          while (null !== (f = a(c, u))) {
            var p = String(f[0]);
            (h[d] = p),
              "" === p && (c.lastIndex = o(u, r(c.lastIndex), l)),
              d++;
          }
          return 0 === d ? null : h;
        },
      ];
    });
  },
  "4bf8": function (e, t, n) {
    var i = n("be13");
    e.exports = function (e) {
      return Object(i(e));
    };
  },
  5147: function (e, t, n) {
    var i = n("2b4c")("match");
    e.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[i] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  "520a": function (e, t, n) {
    "use strict";
    var i = n("0bfb"),
      r = RegExp.prototype.exec,
      o = String.prototype.replace,
      a = r,
      s = "lastIndex",
      c = (function () {
        var e = /a/,
          t = /b*/g;
        return r.call(e, "a"), r.call(t, "a"), 0 !== e[s] || 0 !== t[s];
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
          u && (n = new RegExp("^" + f.source + "$(?!\\s)", i.call(f))),
          c && (t = f[s]),
          (a = r.call(f, e)),
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
    var i = n("8378"),
      r = n("7726"),
      o = "__core-js_shared__",
      a = r[o] || (r[o] = {});
    (e.exports = function (e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: i.version,
      mode: n("2d00") ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  "55dd": function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("d8e8"),
      o = n("4bf8"),
      a = n("79e5"),
      s = [].sort,
      c = [1, 2, 3];
    i(
      i.P +
        i.F *
          (a(function () {
            c.sort(void 0);
          }) ||
            !a(function () {
              c.sort(null);
            }) ||
            !n("2f21")(s)),
      "Array",
      {
        sort: function (e) {
          return void 0 === e ? s.call(o(this)) : s.call(o(this), r(e));
        },
      }
    );
  },
  "5ca1": function (e, t, n) {
    var i = n("7726"),
      r = n("8378"),
      o = n("32e9"),
      a = n("2aba"),
      s = n("9b43"),
      c = "prototype",
      u = function (e, t, n) {
        var l,
          f,
          h,
          d,
          p = e & u.F,
          g = e & u.G,
          v = e & u.S,
          m = e & u.P,
          y = e & u.B,
          b = g ? i : v ? i[t] || (i[t] = {}) : (i[t] || {})[c],
          w = g ? r : r[t] || (r[t] = {}),
          x = w[c] || (w[c] = {});
        for (l in (g && (n = t), n))
          (f = !p && b && void 0 !== b[l]),
            (h = (f ? b : n)[l]),
            (d =
              y && f
                ? s(h, i)
                : m && "function" == typeof h
                ? s(Function.call, h)
                : h),
            b && a(b, l, h, e & u.U),
            w[l] != h && o(w, l, d),
            m && x[l] != h && (x[l] = h);
      };
    (i.core = r),
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
    var i = n("d3f4"),
      r = n("8b97").set;
    e.exports = function (e, t, n) {
      var o,
        a = t.constructor;
      return (
        a !== n &&
          "function" == typeof a &&
          (o = a.prototype) !== n.prototype &&
          i(o) &&
          r &&
          r(e, o),
        e
      );
    };
  },
  "5eda": function (e, t, n) {
    var i = n("5ca1"),
      r = n("8378"),
      o = n("79e5");
    e.exports = function (e, t) {
      var n = (r.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        i(
          i.S +
            i.F *
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
    var i = n("23c6"),
      r = RegExp.prototype.exec;
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
      if ("RegExp" !== i(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return r.call(e, t);
    };
  },
  "5fb0": function (e, t, n) {
    "use strict";
    n.d(t, "j", function () {
      return i;
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
        return h;
      }),
      n.d(t, "b", function () {
        return d;
      });
    var i = "https://gosnippet.com",
      r = "fkaokedhimpifhfadmgjpfjimkogdlcm",
      o = chrome.extension.getURL("./"),
      a = "".concat(i, "/api"),
      s =
        ("".concat(i, "/oauth/authorize"),
        "".concat(i, "/oauth/token"),
        "https://".concat(r, ".chromiumapp.org/callback"),
        [
          "https://chrome.google.com/",
          "https://read.amazon.com/",
          "https://read.amazon.ca/",
          "https://read.amazon.co.uk/",
          "https://read.amazon.com.au/",
          "".concat(i, "/app"),
          "".concat(i, "/login"),
          "".concat(i, "/register"),
          "".concat(i, "/pro"),
          "https://drive.google.com",
          "https://docs.google.com",
          "https://secure.2checkout.com",
        ]),
      c = "UA-109423508-4",
      u = 10,
      l = "|:|:|:",
      f = 1,
      h = 3,
      d = 10;
  },
  "613b": function (e, t, n) {
    var i = n("5537")("keys"),
      r = n("ca5a");
    e.exports = function (e) {
      return i[e] || (i[e] = r(e));
    };
  },
  "626a": function (e, t, n) {
    var i = n("2d95");
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == i(e) ? e.split("") : Object(e);
        };
  },
  6762: function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("c366")(!0);
    i(i.P, "Array", {
      includes: function (e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      n("9c6c")("includes");
  },
  6821: function (e, t, n) {
    var i = n("626a"),
      r = n("be13");
    e.exports = function (e) {
      return i(r(e));
    };
  },
  "69a8": function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  "6a99": function (e, t, n) {
    var i = n("d3f4");
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  "6b54": function (e, t, n) {
    "use strict";
    n("3846");
    var i = n("cb7c"),
      r = n("0bfb"),
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
          var e = i(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? r.call(e)
              : void 0
          );
        })
      : s.name != a &&
        c(function () {
          return s.call(this);
        });
  },
  7333: function (e, t, n) {
    "use strict";
    var i = n("9e1e"),
      r = n("0d58"),
      o = n("2621"),
      a = n("52a7"),
      s = n("4bf8"),
      c = n("626a"),
      u = Object.assign;
    e.exports =
      !u ||
      n("79e5")(function () {
        var e = {},
          t = {},
          n = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          i.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != i
        );
      })
        ? function (e, t) {
            var n = s(e),
              u = arguments.length,
              l = 1,
              f = o.f,
              h = a.f;
            while (u > l) {
              var d,
                p = c(arguments[l++]),
                g = f ? r(p).concat(f(p)) : r(p),
                v = g.length,
                m = 0;
              while (v > m) (d = g[m++]), (i && !h.call(p, d)) || (n[d] = p[d]);
            }
            return n;
          }
        : u;
  },
  7514: function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("0a49")(5),
      o = "find",
      a = !0;
    o in [] &&
      Array(1)[o](function () {
        a = !1;
      }),
      i(i.P + i.F * a, "Array", {
        find: function (e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
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
    var i = n("4588"),
      r = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = i(e)), e < 0 ? r(e + t, 0) : o(e, t);
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
    var i = n("7726"),
      r = n("86cc"),
      o = n("9e1e"),
      a = n("2b4c")("species");
    e.exports = function (e) {
      var t = i[e];
      o &&
        t &&
        !t[a] &&
        r.f(t, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  "7f20": function (e, t, n) {
    var i = n("86cc").f,
      r = n("69a8"),
      o = n("2b4c")("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !r((e = n ? e : e.prototype), o) &&
        i(e, o, { configurable: !0, value: t });
    };
  },
  "7f7f": function (e, t, n) {
    var i = n("86cc").f,
      r = Function.prototype,
      o = /^\s*function ([^ (]*)/,
      a = "name";
    a in r ||
      (n("9e1e") &&
        i(r, a, {
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
  8: function (e, t, n) {
    e.exports = n("200f");
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
    var i = n("cb7c"),
      r = n("c69a"),
      o = n("6a99"),
      a = Object.defineProperty;
    t.f = n("9e1e")
      ? Object.defineProperty
      : function (e, t, n) {
          if ((i(e), (t = o(t, !0)), i(n), r))
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
    function i(e, t, n) {
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
      return i;
    });
  },
  "8b97": function (e, t, n) {
    var i = n("d3f4"),
      r = n("cb7c"),
      o = function (e, t) {
        if ((r(e), !i(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, i) {
              try {
                (i = n("9b43")(
                  Function.call,
                  n("11e9").f(Object.prototype, "__proto__").set,
                  2
                )),
                  i(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, n) {
                return o(e, n), t ? (e.__proto__ = n) : i(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  9093: function (e, t, n) {
    var i = n("ce10"),
      r = n("e11e").concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, r);
      };
  },
  9395: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n("88d8");
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" === typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function (t) {
            Object(i["a"])(e, t, n[t]);
          });
      }
      return e;
    }
  },
  "9b43": function (e, t, n) {
    var i = n("d8e8");
    e.exports = function (e, t, n) {
      if ((i(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  "9c6c": function (e, t, n) {
    var i = n("2b4c")("unscopables"),
      r = Array.prototype;
    void 0 == r[i] && n("32e9")(r, i, {}),
      (e.exports = function (e) {
        r[i][e] = !0;
      });
  },
  "9def": function (e, t, n) {
    var i = n("4588"),
      r = Math.min;
    e.exports = function (e) {
      return e > 0 ? r(i(e), 9007199254740991) : 0;
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
    var i = n("cb7c"),
      r = n("4bf8"),
      o = n("9def"),
      a = n("4588"),
      s = n("0390"),
      c = n("5f1b"),
      u = Math.max,
      l = Math.min,
      f = Math.floor,
      h = /\$([$&`']|\d\d?|<[^>]*>)/g,
      d = /\$([$&`']|\d\d?)/g,
      p = function (e) {
        return void 0 === e ? e : String(e);
      };
    n("214f")("replace", 2, function (e, t, n, g) {
      return [
        function (i, r) {
          var o = e(this),
            a = void 0 == i ? void 0 : i[t];
          return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r);
        },
        function (e, t) {
          var r = g(n, e, this, t);
          if (r.done) return r.value;
          var f = i(e),
            h = String(this),
            d = "function" === typeof t;
          d || (t = String(t));
          var m = f.global;
          if (m) {
            var y = f.unicode;
            f.lastIndex = 0;
          }
          var b = [];
          while (1) {
            var w = c(f, h);
            if (null === w) break;
            if ((b.push(w), !m)) break;
            var x = String(w[0]);
            "" === x && (f.lastIndex = s(h, o(f.lastIndex), y));
          }
          for (var S = "", k = 0, T = 0; T < b.length; T++) {
            w = b[T];
            for (
              var E = String(w[0]),
                C = u(l(a(w.index), h.length), 0),
                O = [],
                N = 1;
              N < w.length;
              N++
            )
              O.push(p(w[N]));
            var A = w.groups;
            if (d) {
              var I = [E].concat(O, C, h);
              void 0 !== A && I.push(A);
              var _ = String(t.apply(void 0, I));
            } else _ = v(E, h, C, O, A, t);
            C >= k && ((S += h.slice(k, C) + _), (k = C + E.length));
          }
          return S + h.slice(k);
        },
      ];
      function v(e, t, i, o, a, s) {
        var c = i + e.length,
          u = o.length,
          l = d;
        return (
          void 0 !== a && ((a = r(a)), (l = h)),
          n.call(s, l, function (n, r) {
            var s;
            switch (r.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, i);
              case "'":
                return t.slice(c);
              case "<":
                s = a[r.slice(1, -1)];
                break;
              default:
                var l = +r;
                if (0 === l) return n;
                if (l > u) {
                  var h = f(l / 10);
                  return 0 === h
                    ? n
                    : h <= u
                    ? void 0 === o[h - 1]
                      ? r.charAt(1)
                      : o[h - 1] + r.charAt(1)
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
  aa77: function (e, t, n) {
    var i = n("5ca1"),
      r = n("be13"),
      o = n("79e5"),
      a = n("fdef"),
      s = "[" + a + "]",
      c = "​",
      u = RegExp("^" + s + s + "*"),
      l = RegExp(s + s + "*$"),
      f = function (e, t, n) {
        var r = {},
          s = o(function () {
            return !!a[e]() || c[e]() != c;
          }),
          u = (r[e] = s ? t(h) : a[e]);
        n && (r[n] = u), i(i.P + i.F * s, "String", r);
      },
      h = (f.trim = function (e, t) {
        return (
          (e = String(r(e))),
          1 & t && (e = e.replace(u, "")),
          2 & t && (e = e.replace(l, "")),
          e
        );
      });
    e.exports = f;
  },
  aae3: function (e, t, n) {
    var i = n("d3f4"),
      r = n("2d95"),
      o = n("2b4c")("match");
    e.exports = function (e) {
      var t;
      return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e));
    };
  },
  ac4d: function (e, t, n) {
    n("3a72")("asyncIterator");
  },
  ac6a: function (e, t, n) {
    for (
      var i = n("cadf"),
        r = n("0d58"),
        o = n("2aba"),
        a = n("7726"),
        s = n("32e9"),
        c = n("84f2"),
        u = n("2b4c"),
        l = u("iterator"),
        f = u("toStringTag"),
        h = c.Array,
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
        p = r(d),
        g = 0;
      g < p.length;
      g++
    ) {
      var v,
        m = p[g],
        y = d[m],
        b = a[m],
        w = b && b.prototype;
      if (w && (w[l] || s(w, l, h), w[f] || s(w, f, m), (c[m] = h), y))
        for (v in i) w[v] || o(w, v, i[v], !0);
    }
  },
  aef6: function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("9def"),
      o = n("d2c8"),
      a = "endsWith",
      s = ""[a];
    i(i.P + i.F * n("5147")(a), "String", {
      endsWith: function (e) {
        var t = o(this, e, a),
          n = arguments.length > 1 ? arguments[1] : void 0,
          i = r(t.length),
          c = void 0 === n ? i : Math.min(r(n), i),
          u = String(e);
        return s ? s.call(t, u, c) : t.slice(c - u.length, c) === u;
      },
    });
  },
  b0c5: function (e, t, n) {
    "use strict";
    var i = n("520a");
    n("5ca1")(
      { target: "RegExp", proto: !0, forced: i !== /./.exec },
      { exec: i }
    );
  },
  be13: function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  c366: function (e, t, n) {
    var i = n("6821"),
      r = n("9def"),
      o = n("77f1");
    e.exports = function (e) {
      return function (t, n, a) {
        var s,
          c = i(t),
          u = r(c.length),
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
  c5f6: function (e, t, n) {
    "use strict";
    var i = n("7726"),
      r = n("69a8"),
      o = n("2d95"),
      a = n("5dbc"),
      s = n("6a99"),
      c = n("79e5"),
      u = n("9093").f,
      l = n("11e9").f,
      f = n("86cc").f,
      h = n("aa77").trim,
      d = "Number",
      p = i[d],
      g = p,
      v = p.prototype,
      m = o(n("2aeb")(v)) == d,
      y = "trim" in String.prototype,
      b = function (e) {
        var t = s(e, !1);
        if ("string" == typeof t && t.length > 2) {
          t = y ? t.trim() : h(t, 3);
          var n,
            i,
            r,
            o = t.charCodeAt(0);
          if (43 === o || 45 === o) {
            if (((n = t.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (i = 2), (r = 49);
                break;
              case 79:
              case 111:
                (i = 8), (r = 55);
                break;
              default:
                return +t;
            }
            for (var a, c = t.slice(2), u = 0, l = c.length; u < l; u++)
              if (((a = c.charCodeAt(u)), a < 48 || a > r)) return NaN;
            return parseInt(c, i);
          }
        }
        return +t;
      };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
      p = function (e) {
        var t = arguments.length < 1 ? 0 : e,
          n = this;
        return n instanceof p &&
          (m
            ? c(function () {
                v.valueOf.call(n);
              })
            : o(n) != d)
          ? a(new g(b(t)), n, p)
          : b(t);
      };
      for (
        var w,
          x = n("9e1e")
            ? u(g)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          S = 0;
        x.length > S;
        S++
      )
        r(g, (w = x[S])) && !r(p, w) && f(p, w, l(g, w));
      (p.prototype = v), (v.constructor = p), n("2aba")(i, d, p);
    }
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
      i = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + i).toString(36)
      );
    };
  },
  cadf: function (e, t, n) {
    "use strict";
    var i = n("9c6c"),
      r = n("d53b"),
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
          ? ((this._t = void 0), r(1))
          : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  cb7c: function (e, t, n) {
    var i = n("d3f4");
    e.exports = function (e) {
      if (!i(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  cd1c: function (e, t, n) {
    var i = n("e853");
    e.exports = function (e, t) {
      return new (i(e))(t);
    };
  },
  cdba: function (e, t, n) {
    "use strict";
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    n.d(t, "a", function () {
      return i;
    });
  },
  ce10: function (e, t, n) {
    var i = n("69a8"),
      r = n("6821"),
      o = n("c366")(!1),
      a = n("613b")("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        s = r(e),
        c = 0,
        u = [];
      for (n in s) n != a && i(s, n) && u.push(n);
      while (t.length > c) i(s, (n = t[c++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  d2c8: function (e, t, n) {
    var i = n("aae3"),
      r = n("be13");
    e.exports = function (e, t, n) {
      if (i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(r(e));
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
    var i = n("d3f4"),
      r = n("1169"),
      o = n("2b4c")("species");
    e.exports = function (e) {
      var t;
      return (
        r(e) &&
          ((t = e.constructor),
          "function" != typeof t ||
            (t !== Array && !r(t.prototype)) ||
            (t = void 0),
          i(t) && ((t = t[o]), null === t && (t = void 0))),
        void 0 === t ? Array : t
      );
    };
  },
  ebd6: function (e, t, n) {
    var i = n("cb7c"),
      r = n("d8e8"),
      o = n("2b4c")("species");
    e.exports = function (e, t) {
      var n,
        a = i(e).constructor;
      return void 0 === a || void 0 == (n = i(a)[o]) ? t : r(n);
    };
  },
  f559: function (e, t, n) {
    "use strict";
    var i = n("5ca1"),
      r = n("9def"),
      o = n("d2c8"),
      a = "startsWith",
      s = ""[a];
    i(i.P + i.F * n("5147")(a), "String", {
      startsWith: function (e) {
        var t = o(this, e, a),
          n = r(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          i = String(e);
        return s ? s.call(t, i, n) : t.slice(n, n + i.length) === i;
      },
    });
  },
  f751: function (e, t, n) {
    var i = n("5ca1");
    i(i.S + i.F, "Object", { assign: n("7333") });
  },
  f9fa: function (e, t, n) {
    "use strict";
    function i(e) {
      return (
        (i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        i(e)
      );
    }
    function r(e) {
      return (
        (r =
          "function" === typeof Symbol && "symbol" === i(Symbol.iterator)
            ? function (e) {
                return i(e);
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : i(e);
              }),
        r(e)
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  fa5b: function (e, t, n) {
    e.exports = n("5537")("native-function-to-string", Function.toString);
  },
  fab2: function (e, t, n) {
    var i = n("7726").document;
    e.exports = i && i.documentElement;
  },
  fdef: function (e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
});
