(function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function (n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = "/"),
    e((e.s = 7));
})({
  "01f9": function (t, n, e) {
    "use strict";
    var r = e("2d00"),
      o = e("5ca1"),
      i = e("2aba"),
      c = e("32e9"),
      a = e("84f2"),
      u = e("41a0"),
      s = e("7f20"),
      f = e("38fd"),
      l = e("2b4c")("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = "@@iterator",
      h = "keys",
      v = "values",
      g = function () {
        return this;
      };
    t.exports = function (t, n, e, b, m, y, x) {
      u(e, n, b);
      var w,
        S,
        E,
        _ = function (t) {
          if (!d && t in T) return T[t];
          switch (t) {
            case h:
              return function () {
                return new e(this, t);
              };
            case v:
              return function () {
                return new e(this, t);
              };
          }
          return function () {
            return new e(this, t);
          };
        },
        O = n + " Iterator",
        L = m == v,
        j = !1,
        T = t.prototype,
        k = T[l] || T[p] || (m && T[m]),
        I = k || _(m),
        M = m ? (L ? _("entries") : I) : void 0,
        D = ("Array" == n && T.entries) || k;
      if (
        (D &&
          ((E = f(D.call(new t()))),
          E !== Object.prototype &&
            E.next &&
            (s(E, O, !0), r || "function" == typeof E[l] || c(E, l, g))),
        L &&
          k &&
          k.name !== v &&
          ((j = !0),
          (I = function () {
            return k.call(this);
          })),
        (r && !x) || (!d && !j && T[l]) || c(T, l, I),
        (a[n] = I),
        (a[O] = g),
        m)
      )
        if (((w = { values: L ? I : _(v), keys: y ? I : _(h), entries: M }), x))
          for (S in w) S in T || i(T, S, w[S]);
        else o(o.P + o.F * (d || j), n, w);
      return w;
    };
  },
  "025e": function (t, n, e) {
    "use strict";
    e.d(n, "f", function () {
      return o;
    }),
      e.d(n, "m", function () {
        return a;
      }),
      e.d(n, "k", function () {
        return u;
      }),
      e.d(n, "l", function () {
        return s;
      }),
      e.d(n, "j", function () {
        return f;
      }),
      e.d(n, "h", function () {
        return d;
      }),
      e.d(n, "g", function () {
        return p;
      }),
      e.d(n, "a", function () {
        return h;
      }),
      e.d(n, "e", function () {
        return v;
      }),
      e.d(n, "i", function () {
        return g;
      }),
      e.d(n, "c", function () {
        return b;
      }),
      e.d(n, "d", function () {
        return m;
      }),
      e.d(n, "b", function () {
        return y;
      });
    e("ac4d"),
      e("ac6a"),
      e("6b54"),
      e("6762"),
      e("2fdb"),
      e("aef6"),
      e("f559"),
      e("28a5"),
      e("3b2b"),
      e("a481"),
      e("386d");
    var r = e("5fb0");
    function o(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : location.search;
      t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var e = new RegExp("[\\?&]" + t + "=([^&#]*)"),
        r = e.exec(n);
      return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "));
    }
    var i = [];
    function c(t) {
      for (var n = t.split("\n"), e = 0; e < n.length; e++) n[e] = n[e].trim();
      return n && n.length
        ? n.filter(function (t) {
            return t && t.length > 0;
          })
        : [];
    }
    function a(t, n) {
      if (t.startsWith("http")) {
        if (u(t)) return !0;
        var e;
        e = n ? c(n).concat(r["a"]) : i.concat(r["a"]);
        for (var o = 0; o < e.length; o++) if (t.startsWith(e[o])) return !0;
        return !1;
      }
      return !0;
    }
    function u(t) {
      if (!t) return !1;
      var n = new URL(t);
      return (
        !(!n.pathname.endsWith(".pdf") && !n.href.endsWith(".pdf")) ||
        !(!t.startsWith(chrome.extension.getURL("")) || !t.includes(".pdf"))
      );
    }
    function s(t) {
      if (!t) return !1;
      var n = new URL(t);
      return !(
        (!n.pathname.endsWith(".pdf") && !n.href.endsWith(".pdf")) ||
        !t.startsWith(chrome.extension.getURL(""))
      );
    }
    function f(t) {
      return t.startsWith("file:");
    }
    function l() {
      return "undefined" !== typeof chrome
        ? "undefined" !== typeof browser
          ? "Firefox"
          : "Chrome"
        : "Edge";
    }
    function d() {
      return "Firefox" === l();
    }
    function p() {
      return "https://gosnippet.test" === r["j"];
    }
    function h(t, n, e) {
      var r = new URL(t),
        o = r.search,
        i = new URLSearchParams(o);
      return i.append(n, e), (r.search = i.toString()), r.toString();
    }
    function v(t, n) {
      var e = window.location;
      n && (e = new URL(n)), (e = e.search.substring(1));
      for (var r = e.split("&"), o = 0; o < r.length; o++) {
        var i = r[o].split("=");
        if (i[0] == t) return i[1];
      }
    }
    chrome.storage.local.get(["disabledDomains"], function (t) {
      "string" === typeof t.disabledDomains &&
        t.disabledDomains.length &&
        (i = c(t.disabledDomains));
    }),
      chrome.storage.onChanged.addListener(function (t) {
        t.disabledDomains &&
          "string" === typeof t.disabledDomains.newValue &&
          t.disabledDomains.newValue.length &&
          (i = c(t.disabledDomains.newValue));
      });
    var g = function (t, n) {
        return null === t ? "" : t.length > n ? t.substring(0, n) + "..." : t;
      },
      b = function (t) {
        var n,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ["click_from", "next_jump_to_id", "openDirect"];
        if (((n = t ? new URL(t) : window.location), n.search)) {
          var r = new URLSearchParams(n.search),
            o = !0,
            i = !1,
            c = void 0;
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(o = (a = u.next()).done);
              o = !0
            ) {
              var s = a.value;
              r.has(s) && r.delete(s);
            }
          } catch (t) {
            (i = !0), (c = t);
          } finally {
            try {
              o || null == u.return || u.return();
            } finally {
              if (i) throw c;
            }
          }
          n.search = r.toString();
        }
        return n.toString();
      },
      m = function () {
        return "".concat(l(), " ").concat(chrome.runtime.getManifest().version);
      };
    function y(t, n, e) {
      for (var r = !1, o = 0; o < e.length; o++)
        e[o].id === t &&
          (e[o].parent_id === n
            ? (r = !0)
            : e[o].parent_id && (r = y(e[o].parent_id, n, e)));
      return r;
    }
  },
  "02f4": function (t, n, e) {
    var r = e("4588"),
      o = e("be13");
    t.exports = function (t) {
      return function (n, e) {
        var i,
          c,
          a = String(o(n)),
          u = r(e),
          s = a.length;
        return u < 0 || u >= s
          ? t
            ? ""
            : void 0
          : ((i = a.charCodeAt(u)),
            i < 55296 ||
            i > 56319 ||
            u + 1 === s ||
            (c = a.charCodeAt(u + 1)) < 56320 ||
            c > 57343
              ? t
                ? a.charAt(u)
                : i
              : t
              ? a.slice(u, u + 2)
              : c - 56320 + ((i - 55296) << 10) + 65536);
      };
    };
  },
  "0390": function (t, n, e) {
    "use strict";
    var r = e("02f4")(!0);
    t.exports = function (t, n, e) {
      return n + (e ? r(t, n).length : 1);
    };
  },
  "0bfb": function (t, n, e) {
    "use strict";
    var r = e("cb7c");
    t.exports = function () {
      var t = r(this),
        n = "";
      return (
        t.global && (n += "g"),
        t.ignoreCase && (n += "i"),
        t.multiline && (n += "m"),
        t.unicode && (n += "u"),
        t.sticky && (n += "y"),
        n
      );
    };
  },
  "0d58": function (t, n, e) {
    var r = e("ce10"),
      o = e("e11e");
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  "0d83": function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return c;
    });
    e("ac6a");
    var r = e("cdba"),
      o = e("104e"),
      i = (function () {
        function t() {
          var n = this;
          Object(r["a"])(this, t),
            (this.DEBUG_ENABLED = !1),
            (this.DEBUG_INITIALIZED = !1),
            (this.DEBUG_STACK = []),
            (this.source = "-"),
            (this.startTime = new Date().getTime()),
            (this.timeLastMessage = 0),
            chrome.storage.local.get(["debugEnabled"], function (t) {
              (n.DEBUG_ENABLED = t.debugEnabled), (n.DEBUG_INITIALIZED = !0);
            }),
            chrome.storage.onChanged.addListener(function (t) {
              t.debugEnabled && (n.DEBUG_ENABLED = t.debugEnabled.newValue);
            });
        }
        return (
          Object(o["a"])(t, [
            {
              key: "setSource",
              value: function (t) {
                "-" === this.source && (this.source = t);
              },
            },
            {
              key: "echo",
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "info";
                switch (e) {
                  case "error":
                    console.error("🔥🔥🔥 ".concat(t), n);
                    break;
                  case "warn":
                    console.warn("🔥🔥🔥 ".concat(t), n);
                    break;
                  case "info":
                    console.info("🔥🔥🔥 ".concat(t), n);
                    break;
                  default:
                    console.log("🔥🔥🔥 ".concat(t), n);
                }
              },
            },
            {
              key: "dumpStack",
              value: function () {
                var t = this;
                this.DEBUG_ENABLED &&
                  this.DEBUG_STACK.length &&
                  (this.DEBUG_STACK.forEach(function (n) {
                    t.echo(n.message, n.data, n.level);
                  }),
                  (this.DEBUG_STACK = []));
              },
            },
            {
              key: "log",
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "info",
                  r = new Date().getTime() - this.startTime,
                  o = r - this.timeLastMessage;
                this.timeLastMessage = r;
                var i = "["
                  .concat(this.source, "] ")
                  .concat(r, "ms (+")
                  .concat(o, "): ");
                this.DEBUG_ENABLED
                  ? (this.dumpStack(), this.echo("".concat(i).concat(t), n, e))
                  : this.DEBUG_INITIALIZED ||
                    this.DEBUG_STACK.push({
                      message: "".concat(i).concat(t),
                      data: n,
                      level: e,
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
          t
        );
      })(),
      c = new i();
  },
  "104e": function (t, n, e) {
    "use strict";
    function r(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, n, e) {
      return n && r(t.prototype, n), e && r(t, e), t;
    }
    e.d(n, "a", function () {
      return o;
    });
  },
  "11e9": function (t, n, e) {
    var r = e("52a7"),
      o = e("4630"),
      i = e("6821"),
      c = e("6a99"),
      a = e("69a8"),
      u = e("c69a"),
      s = Object.getOwnPropertyDescriptor;
    n.f = e("9e1e")
      ? s
      : function (t, n) {
          if (((t = i(t)), (n = c(n, !0)), u))
            try {
              return s(t, n);
            } catch (t) {}
          if (a(t, n)) return o(!r.f.call(t, n), t[n]);
        };
  },
  1495: function (t, n, e) {
    var r = e("86cc"),
      o = e("cb7c"),
      i = e("0d58");
    t.exports = e("9e1e")
      ? Object.defineProperties
      : function (t, n) {
          o(t);
          var e,
            c = i(n),
            a = c.length,
            u = 0;
          while (a > u) r.f(t, (e = c[u++]), n[e]);
          return t;
        };
  },
  "214f": function (t, n, e) {
    "use strict";
    e("b0c5");
    var r = e("2aba"),
      o = e("32e9"),
      i = e("79e5"),
      c = e("be13"),
      a = e("2b4c"),
      u = e("520a"),
      s = a("species"),
      f = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      l = (function () {
        var t = /(?:)/,
          n = t.exec;
        t.exec = function () {
          return n.apply(this, arguments);
        };
        var e = "ab".split(t);
        return 2 === e.length && "a" === e[0] && "b" === e[1];
      })();
    t.exports = function (t, n, e) {
      var d = a(t),
        p = !i(function () {
          var n = {};
          return (
            (n[d] = function () {
              return 7;
            }),
            7 != ""[t](n)
          );
        }),
        h = p
          ? !i(function () {
              var n = !1,
                e = /a/;
              return (
                (e.exec = function () {
                  return (n = !0), null;
                }),
                "split" === t &&
                  ((e.constructor = {}),
                  (e.constructor[s] = function () {
                    return e;
                  })),
                e[d](""),
                !n
              );
            })
          : void 0;
      if (!p || !h || ("replace" === t && !f) || ("split" === t && !l)) {
        var v = /./[d],
          g = e(c, d, ""[t], function (t, n, e, r, o) {
            return n.exec === u
              ? p && !o
                ? { done: !0, value: v.call(n, e, r) }
                : { done: !0, value: t.call(e, n, r) }
              : { done: !1 };
          }),
          b = g[0],
          m = g[1];
        r(String.prototype, t, b),
          o(
            RegExp.prototype,
            d,
            2 == n
              ? function (t, n) {
                  return m.call(t, this, n);
                }
              : function (t) {
                  return m.call(t, this);
                }
          );
      }
    };
  },
  "230e": function (t, n, e) {
    var r = e("d3f4"),
      o = e("7726").document,
      i = r(o) && r(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  "23c6": function (t, n, e) {
    var r = e("2d95"),
      o = e("2b4c")("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        ),
      c = function (t, n) {
        try {
          return t[n];
        } catch (t) {}
      };
    t.exports = function (t) {
      var n, e, a;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" == typeof (e = c((n = Object(t)), o))
        ? e
        : i
        ? r(n)
        : "Object" == (a = r(n)) && "function" == typeof n.callee
        ? "Arguments"
        : a;
    };
  },
  "28a5": function (t, n, e) {
    "use strict";
    var r = e("aae3"),
      o = e("cb7c"),
      i = e("ebd6"),
      c = e("0390"),
      a = e("9def"),
      u = e("5f1b"),
      s = e("520a"),
      f = e("79e5"),
      l = Math.min,
      d = [].push,
      p = "split",
      h = "length",
      v = "lastIndex",
      g = 4294967295,
      b = !f(function () {
        RegExp(g, "y");
      });
    e("214f")("split", 2, function (t, n, e, f) {
      var m;
      return (
        (m =
          "c" == "abbc"[p](/(b)*/)[1] ||
          4 != "test"[p](/(?:)/, -1)[h] ||
          2 != "ab"[p](/(?:ab)*/)[h] ||
          4 != "."[p](/(.?)(.?)/)[h] ||
          "."[p](/()()/)[h] > 1 ||
          ""[p](/.?/)[h]
            ? function (t, n) {
                var o = String(this);
                if (void 0 === t && 0 === n) return [];
                if (!r(t)) return e.call(o, t, n);
                var i,
                  c,
                  a,
                  u = [],
                  f =
                    (t.ignoreCase ? "i" : "") +
                    (t.multiline ? "m" : "") +
                    (t.unicode ? "u" : "") +
                    (t.sticky ? "y" : ""),
                  l = 0,
                  p = void 0 === n ? g : n >>> 0,
                  b = new RegExp(t.source, f + "g");
                while ((i = s.call(b, o))) {
                  if (
                    ((c = b[v]),
                    c > l &&
                      (u.push(o.slice(l, i.index)),
                      i[h] > 1 && i.index < o[h] && d.apply(u, i.slice(1)),
                      (a = i[0][h]),
                      (l = c),
                      u[h] >= p))
                  )
                    break;
                  b[v] === i.index && b[v]++;
                }
                return (
                  l === o[h]
                    ? (!a && b.test("")) || u.push("")
                    : u.push(o.slice(l)),
                  u[h] > p ? u.slice(0, p) : u
                );
              }
            : "0"[p](void 0, 0)[h]
            ? function (t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n);
              }
            : e),
        [
          function (e, r) {
            var o = t(this),
              i = void 0 == e ? void 0 : e[n];
            return void 0 !== i ? i.call(e, o, r) : m.call(String(o), e, r);
          },
          function (t, n) {
            var r = f(m, t, this, n, m !== e);
            if (r.done) return r.value;
            var s = o(t),
              d = String(this),
              p = i(s, RegExp),
              h = s.unicode,
              v =
                (s.ignoreCase ? "i" : "") +
                (s.multiline ? "m" : "") +
                (s.unicode ? "u" : "") +
                (b ? "y" : "g"),
              y = new p(b ? s : "^(?:" + s.source + ")", v),
              x = void 0 === n ? g : n >>> 0;
            if (0 === x) return [];
            if (0 === d.length) return null === u(y, d) ? [d] : [];
            var w = 0,
              S = 0,
              E = [];
            while (S < d.length) {
              y.lastIndex = b ? S : 0;
              var _,
                O = u(y, b ? d : d.slice(S));
              if (
                null === O ||
                (_ = l(a(y.lastIndex + (b ? 0 : S)), d.length)) === w
              )
                S = c(d, S, h);
              else {
                if ((E.push(d.slice(w, S)), E.length === x)) return E;
                for (var L = 1; L <= O.length - 1; L++)
                  if ((E.push(O[L]), E.length === x)) return E;
                S = w = _;
              }
            }
            return E.push(d.slice(w)), E;
          },
        ]
      );
    });
  },
  "2aba": function (t, n, e) {
    var r = e("7726"),
      o = e("32e9"),
      i = e("69a8"),
      c = e("ca5a")("src"),
      a = e("fa5b"),
      u = "toString",
      s = ("" + a).split(u);
    (e("8378").inspectSource = function (t) {
      return a.call(t);
    }),
      (t.exports = function (t, n, e, a) {
        var u = "function" == typeof e;
        u && (i(e, "name") || o(e, "name", n)),
          t[n] !== e &&
            (u && (i(e, c) || o(e, c, t[n] ? "" + t[n] : s.join(String(n)))),
            t === r
              ? (t[n] = e)
              : a
              ? t[n]
                ? (t[n] = e)
                : o(t, n, e)
              : (delete t[n], o(t, n, e)));
      })(Function.prototype, u, function () {
        return ("function" == typeof this && this[c]) || a.call(this);
      });
  },
  "2aeb": function (t, n, e) {
    var r = e("cb7c"),
      o = e("1495"),
      i = e("e11e"),
      c = e("613b")("IE_PROTO"),
      a = function () {},
      u = "prototype",
      s = function () {
        var t,
          n = e("230e")("iframe"),
          r = i.length,
          o = "<",
          c = ">";
        (n.style.display = "none"),
          e("fab2").appendChild(n),
          (n.src = "javascript:"),
          (t = n.contentWindow.document),
          t.open(),
          t.write(o + "script" + c + "document.F=Object" + o + "/script" + c),
          t.close(),
          (s = t.F);
        while (r--) delete s[u][i[r]];
        return s();
      };
    t.exports =
      Object.create ||
      function (t, n) {
        var e;
        return (
          null !== t
            ? ((a[u] = r(t)), (e = new a()), (a[u] = null), (e[c] = t))
            : (e = s()),
          void 0 === n ? e : o(e, n)
        );
      };
  },
  "2b4c": function (t, n, e) {
    var r = e("5537")("wks"),
      o = e("ca5a"),
      i = e("7726").Symbol,
      c = "function" == typeof i,
      a = (t.exports = function (t) {
        return r[t] || (r[t] = (c && i[t]) || (c ? i : o)("Symbol." + t));
      });
    a.store = r;
  },
  "2d00": function (t, n) {
    t.exports = !1;
  },
  "2d95": function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
      return e.call(t).slice(8, -1);
    };
  },
  "2fdb": function (t, n, e) {
    "use strict";
    var r = e("5ca1"),
      o = e("d2c8"),
      i = "includes";
    r(r.P + r.F * e("5147")(i), "String", {
      includes: function (t) {
        return !!~o(this, t, i).indexOf(
          t,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
  },
  "32e9": function (t, n, e) {
    var r = e("86cc"),
      o = e("4630");
    t.exports = e("9e1e")
      ? function (t, n, e) {
          return r.f(t, n, o(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        };
  },
  "37c8": function (t, n, e) {
    n.f = e("2b4c");
  },
  3846: function (t, n, e) {
    e("9e1e") &&
      "g" != /./g.flags &&
      e("86cc").f(RegExp.prototype, "flags", {
        configurable: !0,
        get: e("0bfb"),
      });
  },
  "386d": function (t, n, e) {
    "use strict";
    var r = e("cb7c"),
      o = e("83a1"),
      i = e("5f1b");
    e("214f")("search", 1, function (t, n, e, c) {
      return [
        function (e) {
          var r = t(this),
            o = void 0 == e ? void 0 : e[n];
          return void 0 !== o ? o.call(e, r) : new RegExp(e)[n](String(r));
        },
        function (t) {
          var n = c(e, t, this);
          if (n.done) return n.value;
          var a = r(t),
            u = String(this),
            s = a.lastIndex;
          o(s, 0) || (a.lastIndex = 0);
          var f = i(a, u);
          return (
            o(a.lastIndex, s) || (a.lastIndex = s), null === f ? -1 : f.index
          );
        },
      ];
    });
  },
  "38fd": function (t, n, e) {
    var r = e("69a8"),
      o = e("4bf8"),
      i = e("613b")("IE_PROTO"),
      c = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = o(t)),
          r(t, i)
            ? t[i]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? c
            : null
        );
      };
  },
  "3a72": function (t, n, e) {
    var r = e("7726"),
      o = e("8378"),
      i = e("2d00"),
      c = e("37c8"),
      a = e("86cc").f;
    t.exports = function (t) {
      var n = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == t.charAt(0) || t in n || a(n, t, { value: c.f(t) });
    };
  },
  "3b2b": function (t, n, e) {
    var r = e("7726"),
      o = e("5dbc"),
      i = e("86cc").f,
      c = e("9093").f,
      a = e("aae3"),
      u = e("0bfb"),
      s = r.RegExp,
      f = s,
      l = s.prototype,
      d = /a/g,
      p = /a/g,
      h = new s(d) !== d;
    if (
      e("9e1e") &&
      (!h ||
        e("79e5")(function () {
          return (
            (p[e("2b4c")("match")] = !1),
            s(d) != d || s(p) == p || "/a/i" != s(d, "i")
          );
        }))
    ) {
      s = function (t, n) {
        var e = this instanceof s,
          r = a(t),
          i = void 0 === n;
        return !e && r && t.constructor === s && i
          ? t
          : o(
              h
                ? new f(r && !i ? t.source : t, n)
                : f(
                    (r = t instanceof s) ? t.source : t,
                    r && i ? u.call(t) : n
                  ),
              e ? this : l,
              s
            );
      };
      for (
        var v = function (t) {
            (t in s) ||
              i(s, t, {
                configurable: !0,
                get: function () {
                  return f[t];
                },
                set: function (n) {
                  f[t] = n;
                },
              });
          },
          g = c(f),
          b = 0;
        g.length > b;

      )
        v(g[b++]);
      (l.constructor = s), (s.prototype = l), e("2aba")(r, "RegExp", s);
    }
    e("7a56")("RegExp");
  },
  "41a0": function (t, n, e) {
    "use strict";
    var r = e("2aeb"),
      o = e("4630"),
      i = e("7f20"),
      c = {};
    e("32e9")(c, e("2b4c")("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, n, e) {
        (t.prototype = r(c, { next: o(1, e) })), i(t, n + " Iterator");
      });
  },
  4588: function (t, n) {
    var e = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
    };
  },
  4630: function (t, n) {
    t.exports = function (t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n,
      };
    };
  },
  "4bf8": function (t, n, e) {
    var r = e("be13");
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  5147: function (t, n, e) {
    var r = e("2b4c")("match");
    t.exports = function (t) {
      var n = /./;
      try {
        "/./"[t](n);
      } catch (e) {
        try {
          return (n[r] = !1), !"/./"[t](n);
        } catch (t) {}
      }
      return !0;
    };
  },
  "520a": function (t, n, e) {
    "use strict";
    var r = e("0bfb"),
      o = RegExp.prototype.exec,
      i = String.prototype.replace,
      c = o,
      a = "lastIndex",
      u = (function () {
        var t = /a/,
          n = /b*/g;
        return o.call(t, "a"), o.call(n, "a"), 0 !== t[a] || 0 !== n[a];
      })(),
      s = void 0 !== /()??/.exec("")[1],
      f = u || s;
    f &&
      (c = function (t) {
        var n,
          e,
          c,
          f,
          l = this;
        return (
          s && (e = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))),
          u && (n = l[a]),
          (c = o.call(l, t)),
          u && c && (l[a] = l.global ? c.index + c[0].length : n),
          s &&
            c &&
            c.length > 1 &&
            i.call(c[0], e, function () {
              for (f = 1; f < arguments.length - 2; f++)
                void 0 === arguments[f] && (c[f] = void 0);
            }),
          c
        );
      }),
      (t.exports = c);
  },
  "52a7": function (t, n) {
    n.f = {}.propertyIsEnumerable;
  },
  5537: function (t, n, e) {
    var r = e("8378"),
      o = e("7726"),
      i = "__core-js_shared__",
      c = o[i] || (o[i] = {});
    (t.exports = function (t, n) {
      return c[t] || (c[t] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: r.version,
      mode: e("2d00") ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  "5ca1": function (t, n, e) {
    var r = e("7726"),
      o = e("8378"),
      i = e("32e9"),
      c = e("2aba"),
      a = e("9b43"),
      u = "prototype",
      s = function (t, n, e) {
        var f,
          l,
          d,
          p,
          h = t & s.F,
          v = t & s.G,
          g = t & s.S,
          b = t & s.P,
          m = t & s.B,
          y = v ? r : g ? r[n] || (r[n] = {}) : (r[n] || {})[u],
          x = v ? o : o[n] || (o[n] = {}),
          w = x[u] || (x[u] = {});
        for (f in (v && (e = n), e))
          (l = !h && y && void 0 !== y[f]),
            (d = (l ? y : e)[f]),
            (p =
              m && l
                ? a(d, r)
                : b && "function" == typeof d
                ? a(Function.call, d)
                : d),
            y && c(y, f, d, t & s.U),
            x[f] != d && i(x, f, p),
            b && w[f] != d && (w[f] = d);
      };
    (r.core = o),
      (s.F = 1),
      (s.G = 2),
      (s.S = 4),
      (s.P = 8),
      (s.B = 16),
      (s.W = 32),
      (s.U = 64),
      (s.R = 128),
      (t.exports = s);
  },
  "5dbc": function (t, n, e) {
    var r = e("d3f4"),
      o = e("8b97").set;
    t.exports = function (t, n, e) {
      var i,
        c = n.constructor;
      return (
        c !== e &&
          "function" == typeof c &&
          (i = c.prototype) !== e.prototype &&
          r(i) &&
          o &&
          o(t, i),
        t
      );
    };
  },
  "5f1b": function (t, n, e) {
    "use strict";
    var r = e("23c6"),
      o = RegExp.prototype.exec;
    t.exports = function (t, n) {
      var e = t.exec;
      if ("function" === typeof e) {
        var i = e.call(t, n);
        if ("object" !== typeof i)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== r(t))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return o.call(t, n);
    };
  },
  "5fb0": function (t, n, e) {
    "use strict";
    e.d(n, "j", function () {
      return r;
    }),
      e.d(n, "c", function () {
        return i;
      }),
      e.d(n, "g", function () {
        return c;
      }),
      e.d(n, "a", function () {
        return a;
      }),
      e.d(n, "d", function () {
        return u;
      }),
      e.d(n, "f", function () {
        return s;
      }),
      e.d(n, "e", function () {
        return f;
      }),
      e.d(n, "i", function () {
        return l;
      }),
      e.d(n, "h", function () {
        return d;
      }),
      e.d(n, "b", function () {
        return p;
      });
    var r = "https://gosnippet.com",
      o = "fkaokedhimpifhfadmgjpfjimkogdlcm",
      i = chrome.extension.getURL("./"),
      c = "".concat(r, "/api"),
      a =
        ("".concat(r, "/oauth/authorize"),
        "".concat(r, "/oauth/token"),
        "https://".concat(o, ".chromiumapp.org/callback"),
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
      s = 10,
      f = "|:|:|:",
      l = 1,
      d = 3,
      p = 10;
  },
  "613b": function (t, n, e) {
    var r = e("5537")("keys"),
      o = e("ca5a");
    t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  },
  "626a": function (t, n, e) {
    var r = e("2d95");
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
  },
  6762: function (t, n, e) {
    "use strict";
    var r = e("5ca1"),
      o = e("c366")(!0);
    r(r.P, "Array", {
      includes: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      e("9c6c")("includes");
  },
  6821: function (t, n, e) {
    var r = e("626a"),
      o = e("be13");
    t.exports = function (t) {
      return r(o(t));
    };
  },
  "69a8": function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n);
    };
  },
  "6a99": function (t, n, e) {
    var r = e("d3f4");
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, o;
      if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
        return o;
      if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o;
      if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  "6b54": function (t, n, e) {
    "use strict";
    e("3846");
    var r = e("cb7c"),
      o = e("0bfb"),
      i = e("9e1e"),
      c = "toString",
      a = /./[c],
      u = function (t) {
        e("2aba")(RegExp.prototype, c, t, !0);
      };
    e("79e5")(function () {
      return "/a/b" != a.call({ source: "a", flags: "b" });
    })
      ? u(function () {
          var t = r(this);
          return "/".concat(
            t.source,
            "/",
            "flags" in t
              ? t.flags
              : !i && t instanceof RegExp
              ? o.call(t)
              : void 0
          );
        })
      : a.name != c &&
        u(function () {
          return a.call(this);
        });
  },
  7: function (t, n, e) {
    t.exports = e("94eb");
  },
  7726: function (t, n) {
    var e = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  "77f1": function (t, n, e) {
    var r = e("4588"),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, n) {
      return (t = r(t)), t < 0 ? o(t + n, 0) : i(t, n);
    };
  },
  "79e5": function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  "7a56": function (t, n, e) {
    "use strict";
    var r = e("7726"),
      o = e("86cc"),
      i = e("9e1e"),
      c = e("2b4c")("species");
    t.exports = function (t) {
      var n = r[t];
      i &&
        n &&
        !n[c] &&
        o.f(n, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  "7f20": function (t, n, e) {
    var r = e("86cc").f,
      o = e("69a8"),
      i = e("2b4c")("toStringTag");
    t.exports = function (t, n, e) {
      t &&
        !o((t = e ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: n });
    };
  },
  8378: function (t, n) {
    var e = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = e);
  },
  "83a1": function (t, n) {
    t.exports =
      Object.is ||
      function (t, n) {
        return t === n ? 0 !== t || 1 / t === 1 / n : t != t && n != n;
      };
  },
  "84f2": function (t, n) {
    t.exports = {};
  },
  "86cc": function (t, n, e) {
    var r = e("cb7c"),
      o = e("c69a"),
      i = e("6a99"),
      c = Object.defineProperty;
    n.f = e("9e1e")
      ? Object.defineProperty
      : function (t, n, e) {
          if ((r(t), (n = i(n, !0)), r(e), o))
            try {
              return c(t, n, e);
            } catch (t) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (t[n] = e.value), t;
        };
  },
  "8b97": function (t, n, e) {
    var r = e("d3f4"),
      o = e("cb7c"),
      i = function (t, n) {
        if ((o(t), !r(n) && null !== n))
          throw TypeError(n + ": can't set as prototype!");
      };
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (t, n, r) {
              try {
                (r = e("9b43")(
                  Function.call,
                  e("11e9").f(Object.prototype, "__proto__").set,
                  2
                )),
                  r(t, []),
                  (n = !(t instanceof Array));
              } catch (t) {
                n = !0;
              }
              return function (t, e) {
                return i(t, e), n ? (t.__proto__ = e) : r(t, e), t;
              };
            })({}, !1)
          : void 0),
      check: i,
    };
  },
  9093: function (t, n, e) {
    var r = e("ce10"),
      o = e("e11e").concat("length", "prototype");
    n.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  "94eb": function (t, n, e) {
    "use strict";
    e.r(n);
    e("28a5"), e("f559");
    var r = e("5fb0"),
      o = e("025e"),
      i = e("0d83");
    i["a"].setSource("content-app");
    var c = !1;
    if (
      (i["a"].log("content app start", window.location.href),
      window.location.href.startsWith(
        "".concat(r["j"], "/app#/extension-login")
      ) &&
        chrome.runtime.sendMessage(
          {
            action: "extension-login",
            tabId: ~~Object(o["f"])(
              "tab",
              "?".concat(window.location.hash.split("?")[1])
            ),
          },
          function (t) {
            chrome.runtime.lastError && console.error(chrome.runtime.lastError),
              "ok" === t &&
                setTimeout(function () {
                  window.close();
                }, 3e3);
          }
        ),
      window.location.href.startsWith("".concat(r["j"], "/hello")) ||
        window.location.href.startsWith("".concat(r["j"], "/extension-update")))
    ) {
      p();
      var a = document.getElementById("analytics_enabled");
      a &&
        (a.onclick = function () {
          chrome.runtime.sendMessage({
            action: "update-analytics",
            value: this.checked,
          });
          var t = document.getElementById("analytics_msg");
          t.innerText =
            "You're preference has been saved. You can change this setting at any time from the extension Options page";
        });
    }
    window.location.href.startsWith(
      "".concat(r["j"], "/app#/upgrade-completed")
    ) && chrome.runtime.sendMessage({ action: "update-user" }),
      chrome.runtime.sendMessage(
        { action: "get-extension-version" },
        function (t) {
          i["a"].log("received extension version", t);
          var n = document.getElementById("snippet_chrome_extension");
          n && (n.innerHTML = t);
        }
      );
    var u = window.setInterval(function () {
        var t = document.getElementById("sceu");
        if (!c && t) {
          if (t) {
            var n = t.textContent;
            n.length &&
              (chrome.runtime.sendMessage({ action: "send-sceu", sceu: n }),
              (c = !0));
          }
        } else window.clearInterval(u);
      }, 500),
      s = document.getElementById("sceu"),
      f = document.getElementById("communicator");
    if (f)
      try {
        var l = new MutationObserver(function () {
          var t = document.getElementById("communicator"),
            n = t.textContent.split("|")[0];
          switch (n) {
            case "invalidate-cache":
              chrome.runtime.sendMessage({ action: "invalidate-cache" });
              break;
          }
        });
        l.observe(f, {
          attributes: !0,
          childList: !0,
          subtree: !0,
          characterData: !0,
          characterDataOldValue: !0,
        });
      } catch (t) {}
    if (s)
      try {
        var d = new MutationObserver(function () {
          p();
        });
        d.observe(s, { childList: !0 });
      } catch (t) {}
    function p() {
      if (!c) {
        var t = document.getElementById("sceu");
        if (t) {
          var n = t.textContent;
          n.length &&
            (chrome.runtime.sendMessage({ action: "send-sceu", sceu: n }),
            (c = !0));
        }
      }
    }
  },
  "9b43": function (t, n, e) {
    var r = e("d8e8");
    t.exports = function (t, n, e) {
      if ((r(t), void 0 === n)) return t;
      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e);
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function (e, r, o) {
            return t.call(n, e, r, o);
          };
      }
      return function () {
        return t.apply(n, arguments);
      };
    };
  },
  "9c6c": function (t, n, e) {
    var r = e("2b4c")("unscopables"),
      o = Array.prototype;
    void 0 == o[r] && e("32e9")(o, r, {}),
      (t.exports = function (t) {
        o[r][t] = !0;
      });
  },
  "9def": function (t, n, e) {
    var r = e("4588"),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  "9e1e": function (t, n, e) {
    t.exports = !e("79e5")(function () {
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
  a481: function (t, n, e) {
    "use strict";
    var r = e("cb7c"),
      o = e("4bf8"),
      i = e("9def"),
      c = e("4588"),
      a = e("0390"),
      u = e("5f1b"),
      s = Math.max,
      f = Math.min,
      l = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      p = /\$([$&`']|\d\d?)/g,
      h = function (t) {
        return void 0 === t ? t : String(t);
      };
    e("214f")("replace", 2, function (t, n, e, v) {
      return [
        function (r, o) {
          var i = t(this),
            c = void 0 == r ? void 0 : r[n];
          return void 0 !== c ? c.call(r, i, o) : e.call(String(i), r, o);
        },
        function (t, n) {
          var o = v(e, t, this, n);
          if (o.done) return o.value;
          var l = r(t),
            d = String(this),
            p = "function" === typeof n;
          p || (n = String(n));
          var b = l.global;
          if (b) {
            var m = l.unicode;
            l.lastIndex = 0;
          }
          var y = [];
          while (1) {
            var x = u(l, d);
            if (null === x) break;
            if ((y.push(x), !b)) break;
            var w = String(x[0]);
            "" === w && (l.lastIndex = a(d, i(l.lastIndex), m));
          }
          for (var S = "", E = 0, _ = 0; _ < y.length; _++) {
            x = y[_];
            for (
              var O = String(x[0]),
                L = s(f(c(x.index), d.length), 0),
                j = [],
                T = 1;
              T < x.length;
              T++
            )
              j.push(h(x[T]));
            var k = x.groups;
            if (p) {
              var I = [O].concat(j, L, d);
              void 0 !== k && I.push(k);
              var M = String(n.apply(void 0, I));
            } else M = g(O, d, L, j, k, n);
            L >= E && ((S += d.slice(E, L) + M), (E = L + O.length));
          }
          return S + d.slice(E);
        },
      ];
      function g(t, n, r, i, c, a) {
        var u = r + t.length,
          s = i.length,
          f = p;
        return (
          void 0 !== c && ((c = o(c)), (f = d)),
          e.call(a, f, function (e, o) {
            var a;
            switch (o.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(u);
              case "<":
                a = c[o.slice(1, -1)];
                break;
              default:
                var f = +o;
                if (0 === f) return e;
                if (f > s) {
                  var d = l(f / 10);
                  return 0 === d
                    ? e
                    : d <= s
                    ? void 0 === i[d - 1]
                      ? o.charAt(1)
                      : i[d - 1] + o.charAt(1)
                    : e;
                }
                a = i[f - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  aae3: function (t, n, e) {
    var r = e("d3f4"),
      o = e("2d95"),
      i = e("2b4c")("match");
    t.exports = function (t) {
      var n;
      return r(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t));
    };
  },
  ac4d: function (t, n, e) {
    e("3a72")("asyncIterator");
  },
  ac6a: function (t, n, e) {
    for (
      var r = e("cadf"),
        o = e("0d58"),
        i = e("2aba"),
        c = e("7726"),
        a = e("32e9"),
        u = e("84f2"),
        s = e("2b4c"),
        f = s("iterator"),
        l = s("toStringTag"),
        d = u.Array,
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
        h = o(p),
        v = 0;
      v < h.length;
      v++
    ) {
      var g,
        b = h[v],
        m = p[b],
        y = c[b],
        x = y && y.prototype;
      if (x && (x[f] || a(x, f, d), x[l] || a(x, l, b), (u[b] = d), m))
        for (g in r) x[g] || i(x, g, r[g], !0);
    }
  },
  aef6: function (t, n, e) {
    "use strict";
    var r = e("5ca1"),
      o = e("9def"),
      i = e("d2c8"),
      c = "endsWith",
      a = ""[c];
    r(r.P + r.F * e("5147")(c), "String", {
      endsWith: function (t) {
        var n = i(this, t, c),
          e = arguments.length > 1 ? arguments[1] : void 0,
          r = o(n.length),
          u = void 0 === e ? r : Math.min(o(e), r),
          s = String(t);
        return a ? a.call(n, s, u) : n.slice(u - s.length, u) === s;
      },
    });
  },
  b0c5: function (t, n, e) {
    "use strict";
    var r = e("520a");
    e("5ca1")(
      { target: "RegExp", proto: !0, forced: r !== /./.exec },
      { exec: r }
    );
  },
  be13: function (t, n) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  c366: function (t, n, e) {
    var r = e("6821"),
      o = e("9def"),
      i = e("77f1");
    t.exports = function (t) {
      return function (n, e, c) {
        var a,
          u = r(n),
          s = o(u.length),
          f = i(c, s);
        if (t && e != e) {
          while (s > f) if (((a = u[f++]), a != a)) return !0;
        } else
          for (; s > f; f++)
            if ((t || f in u) && u[f] === e) return t || f || 0;
        return !t && -1;
      };
    };
  },
  c69a: function (t, n, e) {
    t.exports =
      !e("9e1e") &&
      !e("79e5")(function () {
        return (
          7 !=
          Object.defineProperty(e("230e")("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  ca5a: function (t, n) {
    var e = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++e + r).toString(36)
      );
    };
  },
  cadf: function (t, n, e) {
    "use strict";
    var r = e("9c6c"),
      o = e("d53b"),
      i = e("84f2"),
      c = e("6821");
    (t.exports = e("01f9")(
      Array,
      "Array",
      function (t, n) {
        (this._t = c(t)), (this._i = 0), (this._k = n);
      },
      function () {
        var t = this._t,
          n = this._k,
          e = this._i++;
        return !t || e >= t.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  cb7c: function (t, n, e) {
    var r = e("d3f4");
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  cdba: function (t, n, e) {
    "use strict";
    function r(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    e.d(n, "a", function () {
      return r;
    });
  },
  ce10: function (t, n, e) {
    var r = e("69a8"),
      o = e("6821"),
      i = e("c366")(!1),
      c = e("613b")("IE_PROTO");
    t.exports = function (t, n) {
      var e,
        a = o(t),
        u = 0,
        s = [];
      for (e in a) e != c && r(a, e) && s.push(e);
      while (n.length > u) r(a, (e = n[u++])) && (~i(s, e) || s.push(e));
      return s;
    };
  },
  d2c8: function (t, n, e) {
    var r = e("aae3"),
      o = e("be13");
    t.exports = function (t, n, e) {
      if (r(n)) throw TypeError("String#" + e + " doesn't accept regex!");
      return String(o(t));
    };
  },
  d3f4: function (t, n) {
    t.exports = function (t) {
      return "object" === typeof t ? null !== t : "function" === typeof t;
    };
  },
  d53b: function (t, n) {
    t.exports = function (t, n) {
      return { value: n, done: !!t };
    };
  },
  d8e8: function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  e11e: function (t, n) {
    t.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  ebd6: function (t, n, e) {
    var r = e("cb7c"),
      o = e("d8e8"),
      i = e("2b4c")("species");
    t.exports = function (t, n) {
      var e,
        c = r(t).constructor;
      return void 0 === c || void 0 == (e = r(c)[i]) ? n : o(e);
    };
  },
  f559: function (t, n, e) {
    "use strict";
    var r = e("5ca1"),
      o = e("9def"),
      i = e("d2c8"),
      c = "startsWith",
      a = ""[c];
    r(r.P + r.F * e("5147")(c), "String", {
      startsWith: function (t) {
        var n = i(this, t, c),
          e = o(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)
          ),
          r = String(t);
        return a ? a.call(n, r, e) : n.slice(e, e + r.length) === r;
      },
    });
  },
  fa5b: function (t, n, e) {
    t.exports = e("5537")("native-function-to-string", Function.toString);
  },
  fab2: function (t, n, e) {
    var r = e("7726").document;
    t.exports = r && r.documentElement;
  },
});
