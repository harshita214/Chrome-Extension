/*! For license information please see content.js.LICENSE.txt */
(() => {
  var e = {
      81271: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            v = h.call(Object),
            g = {},
            m = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in b)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[d.call(e)] || "object"
              : typeof e;
          }
          var C = "3.5.1",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: C,
              constructor: E,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
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
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: i.sort,
              splice: i.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (E.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = E.extend(l, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            E.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== d.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = p.call(t, "constructor") && t.constructor) &&
                      h.call(n) === v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (S(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (S(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = i[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              v,
              g,
              m,
              y,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              E = ue(),
              S = ue(),
              k = ue(),
              A = ue(),
              L = function (e, t) {
                return e === t && (f = !0), 0;
              },
              D = {}.hasOwnProperty,
              j = [],
              N = j.pop,
              q = j.push,
              O = j.push,
              H = j.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              I =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              W =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
              B =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
              F = new RegExp(M + "+", "g"),
              z = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              _ = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              U = new RegExp(M + "|>"),
              X = new RegExp(B),
              V = new RegExp("^" + I + "$"),
              G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "\ufffd"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                d();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              O.apply((j = H.call(w.childNodes)), w.childNodes),
                j[w.childNodes.length].nodeType;
            } catch (e) {
              O = {
                apply: j.length
                  ? function (e, t) {
                      q.apply(e, H.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, o) {
              var i,
                s,
                l,
                c,
                f,
                h,
                m,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!o && (d(t), (t = t || p), v)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((i = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(i))) return r;
                      if (l.id === i) return r.push(l), r;
                    } else if (
                      y &&
                      (l = y.getElementById(i)) &&
                      x(t, l) &&
                      l.id === i
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === w && (U.test(e) || _.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, oe))
                          : t.setAttribute("id", (c = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return O.apply(r, y.querySelectorAll(m)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(z, "$1"), t, r, o);
            }
            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }
            function le(e) {
              return (e[b] = !0), e;
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
            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML =
              function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = se.setDocument =
              function (e) {
                var t,
                  o,
                  a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (v = !i(p)),
                    w != p &&
                      (o = p.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener("unload", ie, !1)
                        : o.attachEvent && o.attachEvent("onunload", ie)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !p.getElementsByName || !p.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (m = []),
                    (g = []),
                    (n.qsa = K.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
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
                          m.push("!=", B);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (m = m.length && new RegExp(m.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (x =
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
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == p || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
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
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!o || !i)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (o === i) return de(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? de(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  v &&
                  !A[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && d(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && d(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && D.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !v)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !v
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(L),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (c = null), e;
            }),
            (o = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
              }),
            ((r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
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
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
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
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + M + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = se.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            d,
                            p,
                            h,
                            v = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                          if (g) {
                            if (i) {
                              for (; v; ) {
                                for (d = t; (d = d[v]); )
                                  if (
                                    s
                                      ? d.nodeName.toLowerCase() === m
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && y)
                            ) {
                              for (
                                x =
                                  (p =
                                    (l =
                                      (c =
                                        (f = (d = g)[b] || (d[b] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  d = p && g.childNodes[p];
                                (d =
                                  (++p && d && d[v]) || (x = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++x && d === t) {
                                  c[e] = [T, p, x];
                                  break;
                                }
                            } else if (
                              (y &&
                                (x = p =
                                  (l =
                                    (c =
                                      (f = (d = t)[b] || (d[b] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[v]) ||
                                  (x = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? d.nodeName.toLowerCase() !== m
                                  : 1 !== d.nodeType) ||
                                  !++x ||
                                  (y &&
                                    ((c =
                                      (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [T, x]),
                                  d !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      o =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return o[b]
                      ? o(t)
                      : o.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, i = o(e, t), a = i.length; a--; )
                                e[(r = P(e, i[a]))] = !(n[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(z, "$1"));
                    return r[b]
                      ? le(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || o(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      V.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
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
                  enabled: ve(!1),
                  disabled: ve(!0),
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
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
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
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ye() {}
            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = C++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[i]) && l[0] === T && l[1] === s)
                              return (d[2] = l[2]);
                            if (((c[i] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
              return a;
            }
            function Ce(e, t, n, r, o, i) {
              return (
                r && !r[b] && (r = Ce(r)),
                o && !o[b] && (o = Ce(o, i)),
                le(function (i, a, s, u) {
                  var l,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    v =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!i && t) ? v : Te(v, d, e, s, u),
                    m = n ? (o || (i ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, m, s, u), r))
                    for (l = Te(m, p), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (m[p[c]] = !(g[p[c]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], c = m.length; c--; )
                          (f = m[c]) && l.push((g[c] = f));
                        o(null, (m = []), l, u);
                      }
                      for (c = m.length; c--; )
                        (f = m[c]) &&
                          (l = o ? P(i, f) : d[c]) > -1 &&
                          (i[l] = !(a[l] = f));
                    }
                  } else (m = Te(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, u) : O.apply(a, m);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = be(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) d = [be(we(d), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Ce(
                      u > 1 && we(d),
                      u > 1 &&
                        xe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(z, "$1"),
                      n,
                      u < o && Ee(e.slice(u, o)),
                      o < i && Ee((e = e.slice(o))),
                      o < i && xe(e)
                    );
                  }
                  d.push(n);
                }
              return we(d);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c = S[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((n && !(o = $.exec(s))) ||
                      (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (o = _.exec(s)) &&
                      ((n = o.shift()),
                      i.push({ value: n, type: o[0].replace(z, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(o = G[a].exec(s)) ||
                        (l[a] && !(o = l[a](o))) ||
                        ((n = o.shift()),
                        i.push({ value: n, type: a, matches: o }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    o = [],
                    i = [],
                    s = k[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ee(t[n]))[b] ? o.push(s) : i.push(s);
                    (s = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          o = e.length > 0,
                          i = function (i, a, s, u, c) {
                            var f,
                              h,
                              g,
                              m = 0,
                              y = "0",
                              x = i && [],
                              b = [],
                              w = l,
                              C = i || (o && r.find.TAG("*", c)),
                              E = (T += null == w ? 1 : Math.random() || 0.1),
                              S = C.length;
                            for (
                              c && (l = a == p || a || c);
                              y !== S && null != (f = C[y]);
                              y++
                            ) {
                              if (o && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == p ||
                                      (d(f), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(f, a || p, s)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (T = E);
                              }
                              n && ((f = !g && f) && m--, i && x.push(f));
                            }
                            if (((m += y), n && y !== m)) {
                              for (h = 0; (g = t[h++]); ) g(x, b, a, s);
                              if (i) {
                                if (m > 0)
                                  for (; y--; )
                                    x[y] || b[y] || (b[y] = N.call(u));
                                b = Te(b);
                              }
                              O.apply(u, b),
                                c &&
                                  !i &&
                                  b.length > 0 &&
                                  m + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return c && ((T = E), (l = w)), x;
                          };
                        return n ? le(i) : i;
                      })(i, o)
                    )).selector = e;
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, o) {
                  var i,
                    u,
                    l,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    p = !o && a((e = d.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (u = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      i = G.needsContext.test(e) ? 0 : u.length;
                      i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (o = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && me(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(i, 1), !(e = o.length && xe(u))))
                          return O.apply(n, o), n;
                        break;
                      }
                  }
                  return (
                    (d || s(e, p))(
                      o,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && me(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(L).join("") === b),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (E.find = k),
            (E.expr = k.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = k.uniqueSort),
            (E.text = k.getText),
            (E.isXMLDoc = k.isXML),
            (E.contains = k.contains),
            (E.escapeSelector = k.escape);
          var A = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && E(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = E.expr.match.needsContext;
          function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var N =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function q(e, t, n) {
            return m(t)
              ? E.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
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
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (E.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  E.find(e, o[t], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(q(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(q(this, e || [], !0));
              },
              is: function (e) {
                return !!q(
                  this,
                  "string" == typeof e && D.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : H.exec(e)) ||
                (!r[1] && t)
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
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  N.test(r[1]) && E.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (O = E(x));
          var P = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && E(e);
              if (!D.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(E(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
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
                  return M(e, "nextSibling");
                },
                prev: function (e) {
                  return M(e, "previousSibling");
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
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (j(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, r) {
                  var o = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = E.filter(r, o)),
                    this.length > 1 &&
                      (R[e] || E.uniqueSort(o), P.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function W(e) {
            return e;
          }
          function B(e) {
            throw e;
          }
          function F(e, t, n, r) {
            var o;
            try {
              e && m((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && m((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match(I) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        E.each(n, function (n, r) {
                          m(r)
                            ? (e.unique && l.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
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
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, r) {
                          var o = m(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  m(l)
                                    ? o
                                      ? l.call(r, a(i, t, W, o), a(i, t, B, o))
                                      : (i++,
                                        l.call(
                                          r,
                                          a(i, t, W, o),
                                          a(i, t, B, o),
                                          a(i, t, W, t.notifyWith)
                                        ))
                                    : (n !== W && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            c = o
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= i &&
                                        (n !== B && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (E.Deferred.getStackHook &&
                                (c.stackTrace = E.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return E.Deferred(function (r) {
                        t[0][3].add(a(0, r, m(o) ? o : W, r.notifyWith)),
                          t[1][3].add(a(0, r, m(e) ? e : W)),
                          t[2][3].add(a(0, r, m(n) ? n : B));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  E.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = E.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (F(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || m(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) F(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              z.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var $ = E.Deferred();
          function _() {
            x.removeEventListener("DOMContentLoaded", _),
              r.removeEventListener("load", _),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              $.then(e).catch(function (e) {
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
                  (!0 !== e && --E.readyWait > 0) || $.resolveWith(x, [E]));
              },
            }),
            (E.ready.then = $.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(E.ready)
              : (x.addEventListener("DOMContentLoaded", _),
                r.addEventListener("load", _));
          var U = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) U(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                m(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(E(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
            },
            X = /^-ms-/,
            V = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(X, "ms-").replace(V, G);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = E.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
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
                  o = this.cache(e);
                if ("string" == typeof t) o[Y(t)] = n;
                else for (r in t) o[Y(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in r
                      ? [t]
                      : t.match(I) || []).length;
                    for (; n--; ) delete r[t[n]];
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
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = Z.get(i)),
                    1 === i.nodeType && !K.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = Y(r.slice(5))), ne(i, r, o[r]));
                    K.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : U(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = Z.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
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
                  Z.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = E._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
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
                  o = E.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = x.documentElement,
            se = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== l && +u)) &&
                oe.exec(E.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                E.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }
          function pe(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = K.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (o[i] = de(r)))
                  : "none" !== n && ((o[i] = "none"), K.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ve = x.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && j(e, t)) ? E.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            g.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((i = e[p]) || 0 === i)
                if ("object" === T(i)) E.merge(d, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (me.exec(i) || ["", ""])[1].toLowerCase(),
                      u = xe[s] || xe._default,
                      a.innerHTML = u[1] + E.htmlPrefilter(i) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  E.merge(d, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(i));
            for (f.textContent = "", p = 0; (i = d[p++]); )
              if (r && E.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((l = se(i)),
                (a = be(f.appendChild(i), "script")),
                l && we(a),
                n)
              )
                for (c = 0; (i = a[c++]); ) ye.test(i.type || "") && n.push(i);
            return f;
          }
          var Ee = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ke = /^([^.]*)(?:\.(.+)|)/;
          function Ae() {
            return !0;
          }
          function Le() {
            return !1;
          }
          function De(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function je(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                je(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Le;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                ((o = function (e) {
                  return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, o, r, n);
              })
            );
          }
          function Ne(e, t, n) {
            n
              ? (K.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        K.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o.value
                        );
                    } else
                      i.length &&
                        (K.set(this, t, {
                          value: E.event.trigger(
                            E.extend(i[0], E.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && E.event.add(e, t, Ae);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                g = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && E.find.matchesSelector(ae, o),
                    n.guid || (n.guid = E.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(I) || [""]).length;
                  l--;

                )
                  (p = v = (s = ke.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((f = E.event.special[p] || {}),
                      (p = (o ? f.delegateType : f.bindType) || p),
                      (f = E.event.special[p] || {}),
                      (c = E.extend(
                        {
                          type: p,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && E.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (d = u[p]) ||
                        (((d = u[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (E.event.global[p] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                g = K.hasData(e) && K.get(e);
              if (g && (u = g.events)) {
                for (l = (t = (t || "").match(I) || [""]).length; l--; )
                  if (
                    ((p = v = (s = ke.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      f = E.event.special[p] || {},
                        d =
                          u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = d.length;
                      i--;

                    )
                      (c = d[i]),
                        (!o && v !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (d.splice(i, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                        E.removeEvent(e, p, g.handle),
                      delete u[p]);
                  } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = E.event.fix(e),
                l =
                  (K.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = E.event.handlers.call(this, u, l), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (E.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? E(o, this).index(l) > -1
                          : E.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: l, handlers: i });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
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
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Ne(t, "click", Ae),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Ne(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      K.get(t, "click")) ||
                    j(t, "a")
                  );
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
                      : Le),
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
              isDefaultPrevented: Le,
              isPropagationStopped: Le,
              isImmediatePropagationStopped: Le,
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
                code: !0,
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
                  return null == e.which && Ee.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Se.test(e.type)
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
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return Ne(this, e, De), !1;
                },
                trigger: function () {
                  return Ne(this, e), !0;
                },
                delegateType: t,
              };
            }),
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
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (o && (o === r || E.contains(r, o))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, r) {
                return je(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
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
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Le),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var qe = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Pe(e, t) {
            return (
              (j(e, "table") &&
                j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Re(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Me(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ie(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (o in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    E.event.add(t, o, s[o][n]);
              Z.hasData(e) &&
                ((i = Z.access(e)), (a = E.extend({}, i)), Z.set(t, a));
            }
          }
          function We(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Be(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              l,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              v = m(h);
            if (
              v ||
              (d > 1 && "string" == typeof h && !g.checkClone && Oe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                v && (t[0] = h.call(this, o, i.html())), Be(i, t, n, r);
              });
            if (
              d &&
              ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = E.map(be(o, "script"), Re)).length; f < d; f++)
                (l = o),
                  f !== p &&
                    ((l = E.clone(l, !0, !0)),
                    s && E.merge(a, be(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, E.map(a, Me), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    ye.test(l.type || "") &&
                      !K.access(l, "globalEval") &&
                      E.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !l.noModule &&
                          E._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : w(l.textContent.replace(He, ""), l, c));
            }
            return e;
          }
          function Fe(e, t, n) {
            for (
              var r, o = t ? E.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || E.cleanData(be(r)),
                r.parentNode &&
                  (n && se(r) && we(be(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
                  We(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || be(e), a = a || be(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    Ie(i[r], a[r]);
                else Ie(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  we(a, !u && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = E.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return Fe(this, e, !0);
              },
              remove: function (e) {
                return Fe(this, e);
              },
              text: function (e) {
                return U(
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
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Pe(this, e).appendChild(e);
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
                    (E.cleanData(be(e, !1)), (e.textContent = ""));
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
                return U(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !qe.test(e) &&
                      !xe[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(be(t, !1)), (t.innerHTML = e));
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
                      (E.cleanData(be(this)), n && n.replaceChild(t, this));
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
                    var n, r = [], o = E(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      E(o[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            $e = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            _e = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Ue = new RegExp(ie.join("|"), "i");
          function Xe(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = E.style(e, t)),
                !g.pixelBoxStyles() &&
                  ze.test(a) &&
                  Ue.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function Ve(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (i = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              l = x.createElement("div"),
              c = x.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
              E.extend(g, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s = parseInt(o.height) > 3),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Ye = x.createElement("div").style,
            Qe = {};
          function Je(e) {
            var t = E.cssProps[e] || Qe[e];
            return (
              t ||
              (e in Ye
                ? e
                : (Qe[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += E.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= E.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= E.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += E.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += E.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += E.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function ot(e, t, n) {
            var r = $e(e),
              o =
                (!g.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, r),
              i = o,
              a = Xe(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ze.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && o) ||
                (!g.reliableTrDimensions() && j(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === E.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                rt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function it(e, t, n, r, o) {
            return new it.prototype.init(e, t, n, r, o);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Xe(e, "opacity");
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
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
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
                var o,
                  i,
                  a,
                  s = Y(t),
                  u = Ze.test(t),
                  l = e.style;
                if (
                  (u || (t = Je(s)),
                  (a = E.cssHooks[t] || E.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                "string" === (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = ce(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (E.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = Y(t);
              return (
                Ze.test(t) || (t = Je(s)),
                (a = E.cssHooks[t] || E.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Xe(e, t, r)),
                "normal" === o && t in tt && (o = tt[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ke.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? ot(e, t, r)
                      : _e(e, et, function () {
                          return ot(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = $e(e),
                    a = !g.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === E.css(e, "boxSizing", !1, i),
                    u = r ? rt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          rt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    nt(0, n, u)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Xe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      _e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = nt);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return U(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = $e(e), o = t.length; a < o; a++)
                        i[t[a]] = E.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
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
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
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
            (E.fx = it.prototype.init),
            (E.fx.step = {});
          var at,
            st,
            ut = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
          function ct() {
            st &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ct)
                : r.setTimeout(ct, E.fx.interval),
              E.fx.tick());
          }
          function ft() {
            return (
              r.setTimeout(function () {
                at = void 0;
              }),
              (at = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function pt(e, t, n) {
            for (
              var r,
                o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              o,
              i = 0,
              a = ht.prefilters.length,
              s = E.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = at || ft(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    i = 0,
                    a = l.tweens.length;
                  i < a;
                  i++
                )
                  l.tweens[i].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: at || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = E.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = Y(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = E.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(c, l.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = ht.prefilters[i].call(l, e, c, l.opts)))
                return (
                  m(r.stop) &&
                    (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(c, pt, l),
              m(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              E.fx.timer(
                E.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (E.Animation = E.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  h = e.style,
                  v = e.nodeType && le(e),
                  g = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = E._queueHooks(e, "fx")).unqueued &&
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
                  if (((o = t[r]), ut.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    p[r] = (g && g[r]) || E.style(e, r);
                  }
                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = g && g.display) && (l = K.get(e, "display")),
                    "none" === (c = E.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (pe([e], !0),
                          (l = e.style.display || l),
                          (c = E.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === E.css(e, "float") &&
                      (u ||
                        (d.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = K.access(e, "fxshow", { display: l })),
                      i && (g.hidden = !v),
                      v && pe([e], !0),
                      d.done(function () {
                        for (r in (v || pe([e]), K.remove(e, "fxshow"), p))
                          E.style(e, r, p[r]);
                      })),
                      (u = pt(v ? g[r] : 0, r, d)),
                      r in g ||
                        ((g[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = E.isEmptyObject(e),
                  i = E.speed(t, n, r),
                  a = function () {
                    var t = ht(this, E.extend({}, e), i);
                    (o || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = E.timers,
                      a = K.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && lt.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = E.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, r, o);
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
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (at = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              st || ((st = !0), ct());
            }),
            (E.fx.stop = function () {
              st = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var vt,
            gt = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return U(this, E.attr, e, t, arguments.length > 1);
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
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === i && E.isXMLDoc(e)) ||
                        (o =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? vt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = E.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && j(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(I);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (vt = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = gt[t] || E.find.attr;
              gt[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = gt[a]),
                    (gt[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (gt[a] = i)),
                  o
                );
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function xt(e) {
            return (e.match(I) || []).join(" ");
          }
          function bt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(I)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return U(this, E.prop, e, t, arguments.length > 1);
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
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
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
                      : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
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
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    E(this).addClass(e.call(this, t, bt(this)));
                  });
                if ((t = wt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = bt(n)), (r = 1 === n.nodeType && " " + xt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = xt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    E(this).removeClass(e.call(this, t, bt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = bt(n)), (r = 1 === n.nodeType && " " + xt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = xt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, bt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = E(this), a = wt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = bt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + xt(bt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Tt = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, E(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = E.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    E.valHooks[o.type] ||
                    E.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(Tt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : xt(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = E.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        E.inArray(E.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
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
                g.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in r);
          var Ct = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                h = [n || x],
                v = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = d = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Ct.test(v + E.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (l = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(v, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (f = E.event.special[v] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !y(n)) {
                  for (
                    u = f.delegateType || v,
                      Ct.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = i > 1 ? u : f.bindType || v),
                    (c =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      Q(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      m(n[v]) &&
                      !y(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (E.event.triggered = v),
                      e.isPropagationStopped() && d.addEventListener(v, Et),
                      n[v](),
                      e.isPropagationStopped() && d.removeEventListener(v, Et),
                      (E.event.triggered = void 0),
                      s && (n[l] = s))),
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
            g.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      K.access(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t) - 1;
                    o
                      ? K.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var St = r.location,
            kt = { guid: Date.now() },
            At = /\?/;
          E.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
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
            Dt = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function qt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              E.each(t, function (t, o) {
                n || Lt.test(e)
                  ? r(e, o)
                  : qt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) qt(e + "[" + o + "]", t[o], n, r);
          }
          (E.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) qt(n, e[n], t, o);
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
                      Nt.test(this.nodeName) &&
                      !jt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(Dt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Dt, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Ht = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Mt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Wt = {},
            Bt = {},
            Ft = "*/".concat("*"),
            zt = x.createElement("a");
          function $t(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(I) || [];
              if (m(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function _t(e, t, n, r) {
            var o = {},
              i = e === Bt;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                E.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || i || o[l]
                    ? i
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function Ut(e, t) {
            var n,
              r,
              o = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e;
          }
          (zt.href = St.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ft,
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
                return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
              },
              ajaxPrefilter: $t(Wt),
              ajaxTransport: $t(Bt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  d,
                  p = E.ajaxSetup({}, t),
                  h = p.context || p,
                  v = p.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  g = E.Deferred(),
                  m = E.Callbacks("once memory"),
                  y = p.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Rt.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (g.promise(C),
                  (p.url = ((e || p.url || St.href) + "").replace(
                    It,
                    St.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = p.url),
                      (u.href = u.href),
                      (p.crossDomain =
                        zt.protocol + "//" + zt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = E.param(p.data, p.traditional)),
                  _t(Wt, p, t, C),
                  l)
                )
                  return C;
                for (f in ((c = E.event && p.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Mt.test(p.type)),
                (o = p.url.replace(Ht, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(Ot, "+"))
                  : ((d = p.url.slice(o.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((o += (At.test(o) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((o = o.replace(Pt, "$1")),
                      (d = (At.test(o) ? "&" : "?") + "_=" + kt.guid++ + d)),
                    (p.url = o + d)),
                p.ifModified &&
                  (E.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", E.lastModified[o]),
                  E.etag[o] && C.setRequestHeader("If-None-Match", E.etag[o])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", p.contentType),
                C.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  C.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
                  return C.abort();
                if (
                  ((T = "abort"),
                  m.add(p.complete),
                  C.done(p.success),
                  C.fail(p.error),
                  (n = _t(Bt, p, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), c && v.trigger("ajaxSend", [C, p]), l)
                  )
                    return C;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, p.timeout));
                  try {
                    (l = !1), n.send(b, S);
                  } catch (e) {
                    if (l) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, a, u) {
                  var f,
                    d,
                    x,
                    b,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(p, C, a)),
                    !f &&
                      E.inArray("script", p.dataTypes) > -1 &&
                      (p.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                              for (o in l)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
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
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, b, C, f)),
                    f
                      ? (p.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[o] = w),
                          (w = C.getResponseHeader("etag")) && (E.etag[o] = w)),
                        204 === e || "HEAD" === p.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (d = b.data), (f = !(x = b.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? g.resolveWith(h, [d, T, C])
                      : g.rejectWith(h, [C, T, x]),
                    C.statusCode(y),
                    (y = void 0),
                    c &&
                      v.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        p,
                        f ? d : x,
                      ]),
                    m.fireWith(h, [C, T]),
                    c &&
                      (v.trigger("ajaxComplete", [C, p]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, r, o) {
                return (
                  m(n) && ((o = o || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
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
                var t = m(e);
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
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Xt = { 0: 200, 1223: 204 },
            Vt = E.ajaxSettings.xhr();
          (g.cors = !!Vt && "withCredentials" in Vt),
            (g.ajax = Vt = !!Vt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Vt && !e.crossDomain))
                return {
                  send: function (o, i) {
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
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                Xt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
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
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Yt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || E.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Qt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Qt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Qt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || E.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? E(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(o)),
                      a && m(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Gt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Gt.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = N.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ce([e], t, i)),
                      i && i.length && E(i).remove(),
                      E.merge([], o.childNodes)));
              var r, o, i;
            }),
            (E.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = xt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  E.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? E("<div>").append(E.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = E.css(e, "position"),
                  c = E(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (i = E.css(e, "top")),
                  (u = E.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  m(t) && (t = t.call(e, n, E.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t
                    ? t.using.call(e, f)
                    : ("number" == typeof f.top && (f.top += "px"),
                      "number" == typeof f.left && (f.left += "px"),
                      c.css(f));
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
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - E.css(r, "marginTop", !0),
                    left: t.left - o.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                  return U(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (y(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Xe(e, t)), ze.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  E.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return U(
                      this,
                      function (t, n, o) {
                        var i;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? E.css(t, n, s)
                          : E.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
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
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
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
            );
          var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = s.call(arguments, 2)),
                ((o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || E.guid++),
                o
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = j),
            (E.isFunction = m),
            (E.isWindow = y),
            (E.camelCase = Y),
            (E.type = T),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(Jt, "");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var Kt = r.jQuery,
            Zt = r.$;
          return (
            (E.noConflict = function (e) {
              return (
                r.$ === E && (r.$ = Zt),
                e && r.jQuery === E && (r.jQuery = Kt),
                E
              );
            }),
            void 0 === o && (r.jQuery = r.$ = E),
            E
          );
        });
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(81271),
        t = n.n(e),
        r = function () {
          var e = "Windows",
            t = window.navigator.userAgent,
            n = window.navigator.platform;
          return (
            -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n)
              ? (e = "MacOS")
              : -1 !== ["iPhone", "iPad", "iPod"].indexOf(n)
              ? (e = "iOS")
              : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n)
              ? (e = "Windows")
              : /Android/.test(t)
              ? (e = "Android")
              : !e && /Linux/.test(n) && (e = "Linux"),
            e
          );
        },
        o = (r(), "MacOS" === r()),
        i = function (e) {
          return e ? e[0].toUpperCase() + e.slice(1) : e;
        },
        a = function (e, t) {
          return void 0 === t && (t = " "), e.map(i).join(t);
        },
        s = "enter",
        u = o ? "cmd" : "ctrl",
        l = o ? "option" : "alt",
        c =
          ((function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            e.join("+");
          })(u, s),
          a([l, "a"], " + ")),
        f = a([l, "s"], " + "),
        d = {
          id: "send_to_front",
          contexts: ["selection"],
          title: "Send To Front (" + c + ")",
        },
        p = {
          id: "send_to_back",
          contexts: ["selection"],
          title: "Send To Back (" + f + ")",
        },
        h =
          (chrome.runtime.getURL("/icon192.png"),
          chrome.runtime.getURL("/icon192error.png"),
          chrome.runtime.getURL("/logo.svg")),
        v = chrome.runtime.getURL("/close.svg");
      var g = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        m = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        y = "frontContent",
        x = "backContent",
        b = function (e) {
          return new Promise(function (t, n) {
            chrome.runtime.id
              ? chrome.storage.local.get(e, function (r) {
                  chrome.runtime.lastError
                    ? n(chrome.runtime.lastError)
                    : t(r[e]);
                })
              : t(void 0);
          });
        },
        w = function (e) {
          return new Promise(function (t, n) {
            chrome.runtime.id
              ? chrome.storage.local.set(e, function () {
                  chrome.runtime.lastError ? n(chrome.runtime.lastError) : t();
                })
              : t();
          });
        },
        T = {
          setFrontContent: function (e, t) {
            var n;
            return w((((n = {})[y] = e), (n.invokeType = t), n));
          },
          setBackContent: function (e, t) {
            var n;
            return w((((n = {})[x] = e), (n.invokeType = t), n));
          },
          getContent: function () {
            return g(this, void 0, void 0, function () {
              var e, t;
              return m(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, b(y)];
                  case 1:
                    return (e = n.sent()), [4, b(x)];
                  case 2:
                    return (t = n.sent()), [2, { front: e, back: t }];
                }
              });
            });
          },
          resetContent: function () {
            var e;
            return w((((e = {})[y] = ""), (e[x] = ""), e));
          },
        };
      var C = function () {
          return (C =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        E = "drawerWidth",
        S = {
          getDrawerWidth: function () {
            return new Promise(function (e) {
              return chrome.storage.local.get(E, function (t) {
                var n = t[E];
                e(null != n ? n : "500px");
              });
            });
          },
          setDrawerWidth: function (e) {
            return new Promise(function (t) {
              chrome.storage.local.get(null, function (n) {
                var r;
                chrome.storage.local.set(C(C({}, n), (((r = {})[E] = e), r))),
                  t();
              });
            });
          },
        },
        k = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        A = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        L = "zorbi-extension-root",
        D = "zorbi-extension-frame",
        j = "zorbi-tooltip-box",
        N = "zorbi-tooltip-logo",
        q = "zorbi-drawer-tooltip",
        O = "zorbi-extension-resize",
        H = "zorbi-send-to-front",
        P = "zorbi-send-to-back",
        R = function () {
          var e = document.createElement("div");
          (e.id = q),
            (e.style.cursor = "pointer"),
            (e.style.position = "absolute"),
            (e.style.backgroundColor = "#3f3f46"),
            (e.style.borderBottomLeftRadius = "8px"),
            (e.style.padding = "4px"),
            (e.style.left = "-40px");
          var t,
            n = (((t = document.createElement("img")).src = v), t);
          return (
            (n.style.width = "32px"),
            e.prepend(n),
            (e.onclick = function () {
              return k(void 0, void 0, void 0, function () {
                return A(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, b("createCardLoading")];
                    case 1:
                      if (e.sent() > 0) {
                        if (
                          !confirm(
                            "Are you sure you want to close the extension? Your card is not saved yet."
                          )
                        )
                          return [2];
                        chrome.storage.local.set({ createCardLoading: 0 });
                      }
                      return z(), [2];
                  }
                });
              });
            }),
            e
          );
        },
        M = function () {
          return k(void 0, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u;
            return A(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    ((e = document.createElement("div")).id = L),
                    (n = R()),
                    e.prepend(n),
                    ((r = document.createElement("iframe")).src =
                      chrome.runtime.getURL("/frame.html")),
                    (r.id = D),
                    (r.style.maxHeight = "100vh"),
                    e.appendChild(r),
                    [4, S.getDrawerWidth()]
                  );
                case 1:
                  return (
                    (o = l.sent()),
                    (e.style.right = "-" + o),
                    (e.style.width = o),
                    (e.style.height = "100%"),
                    (e.style.maxHeight = "100vh"),
                    ((i = document.createElement("div")).id = O),
                    (i.style.zIndex = "2147483647"),
                    (s = function (t) {
                      var n = a - t.x;
                      (a = t.x),
                        (e.style.width =
                          parseInt(getComputedStyle(e, "").width) + n + "px"),
                        (i.style.right = e.style.right),
                        (i.style.width = e.style.width);
                    }),
                    (u = function (e) {
                      e.preventDefault();
                    }),
                    e.addEventListener(
                      "mousedown",
                      function (n) {
                        window.addEventListener("selectstart", u),
                          t()(document).one("mouseup", function () {
                            return k(void 0, void 0, void 0, function () {
                              return A(this, function (n) {
                                return (
                                  window.removeEventListener("selectstart", u),
                                  document.removeEventListener(
                                    "mousemove",
                                    s,
                                    !1
                                  ),
                                  t()(i).remove(),
                                  S.setDrawerWidth(e.style.width),
                                  [2]
                                );
                              });
                            });
                          }),
                          document.body.append(i),
                          (i.style.right = e.style.right),
                          (i.style.width = e.style.width),
                          n.offsetX < 5 &&
                            ((a = n.x),
                            document.addEventListener("mousemove", s, !1));
                      },
                      !1
                    ),
                    [2, e]
                  );
              }
            });
          });
        },
        I = function () {
          var e = document.createElement("div");
          (e.id = j),
            (e.innerHTML =
              '\n  <div id="' +
              H +
              '" class="zorbi-tooltip-item">Send to Front</div>\n  <div id="' +
              P +
              '" class="zorbi-tooltip-item">Send to Back</div>\n');
          var n = document.createElement("div"),
            r = (function () {
              var e = document.createElement("img");
              return (e.src = h), e;
            })();
          (n.id = N), n.prepend(r), e.prepend(n);
          return (
            window["zorbi-tooltip-mouse-handler"] ||
              (window["zorbi-tooltip-mouse-handler"] = function () {
                var n = function () {
                    return [
                      document.getElementById(H),
                      document.getElementById(P),
                    ];
                  },
                  r = function () {
                    var e = n(),
                      t = e[0],
                      i = e[1];
                    null == t || t.removeEventListener("mousedown", o),
                      null == i || i.removeEventListener("mousedown", r),
                      T.setBackContent(window.getSelection().toString());
                  },
                  o = function () {
                    var e = n(),
                      t = e[0],
                      i = e[1];
                    null == t || t.removeEventListener("mousedown", o),
                      null == i || i.removeEventListener("mousedown", r),
                      T.setFrontContent(window.getSelection().toString());
                  };
                t()(document).one("mouseup", function (t) {
                  setTimeout(function () {
                    var t = window.getSelection();
                    if (
                      (document.body.contains(e) &&
                        document.body.removeChild(e),
                      !(t.toString().length < 2))
                    ) {
                      var i = t.getRangeAt(0).getBoundingClientRect();
                      (e.style.top = i.top - 45 + "px"),
                        (e.style.left = i.left - 40 + "px"),
                        B(L) && document.body.appendChild(e);
                      var a = n(),
                        s = a[0],
                        u = a[1];
                      null == s || s.addEventListener("mousedown", o),
                        null == u || u.addEventListener("mousedown", r);
                    }
                  }, 20);
                });
              }),
            e
          );
        },
        W = function (e) {
          return t()("#" + e).get();
        },
        B = function (e) {
          return 0 !== W(e).length;
        },
        F = function () {
          return B(L);
        },
        z = function () {
          return k(void 0, void 0, void 0, function () {
            var e;
            return A(this, function (n) {
              switch (n.label) {
                case 0:
                  return (e = W(L)[0]) instanceof HTMLDivElement
                    ? (t()(e).animate(
                        { right: "-" + e.style.width },
                        {
                          complete: function () {
                            return t()(e).remove();
                          },
                        }
                      ),
                      [4, T.resetContent()])
                    : [2];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        },
        $ = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        _ = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        U = function () {
          document.addEventListener(
            "mousedown",
            window.zorbiOutsideClickListener
          ),
            document.addEventListener(
              "mouseup",
              window.zorbiTextSelectionListener
            ),
            document.addEventListener(
              "mousedown",
              window["zorbi-tooltip-mouse-handler"]
            );
        },
        X = function () {
          document.removeEventListener(
            "mousedown",
            window.zorbiOutsideClickListener
          ),
            document.removeEventListener(
              "mouseup",
              window.zorbiTextSelectionListener
            ),
            document.removeEventListener(
              "mousedown",
              window["zorbi-tooltip-mouse-handler"]
            );
        };
      $(void 0, void 0, void 0, function () {
        function e(e) {
          return $(this, void 0, void 0, function () {
            var n, r, o;
            return _(this, function (i) {
              switch (i.label) {
                case 0:
                  return F()
                    ? [3, 2]
                    : [
                        4,
                        k(void 0, void 0, void 0, function () {
                          var e;
                          return A(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return F() ? [2] : [4, M()];
                              case 1:
                                return (
                                  (e = n.sent()),
                                  document.body.append(e),
                                  t()(e).animate({ right: "0px" }),
                                  [2]
                                );
                            }
                          });
                        }),
                      ];
                case 1:
                  return i.sent(), U(), [2];
                case 2:
                  return [4, T.getContent()];
                case 3:
                  return (
                    (n = i.sent()),
                    (r = n.front),
                    (o = n.back),
                    e === p.id
                      ? [
                          2,
                          T.setBackContent(
                            window.getSelection().toString() || o
                          ),
                        ]
                      : e === d.id
                      ? [
                          2,
                          T.setFrontContent(
                            window.getSelection().toString() || r
                          ),
                        ]
                      : [4, b("createCardLoading")]
                  );
                case 4:
                  if (i.sent() > 0) {
                    if (
                      !confirm(
                        "Are you sure you want to close the extension? Your card is not saved yet."
                      )
                    )
                      return [2];
                    chrome.storage.local.set({ createCardLoading: 0 });
                  }
                  return t()("#zorbi-tooltip-box").remove(), X(), [4, z()];
                case 5:
                  return i.sent(), [2];
              }
            });
          });
        }
        var n, r, o, i;
        return _(this, function (a) {
          switch (a.label) {
            case 0:
              return I(), [4, M()];
            case 1:
              return (
                (n = a.sent()),
                (r = "" !== window.getSelection().toString()),
                (o = function () {
                  "" !== window.getSelection().toString() && (r = !0);
                }),
                (i = function (o) {
                  return $(void 0, void 0, void 0, function () {
                    var i, a, s;
                    return _(this, function (u) {
                      switch (u.label) {
                        case 0:
                          return [4, b("locked")];
                        case 1:
                          return u.sent()
                            ? [2]
                            : F()
                            ? ((i = function (u) {
                                document.removeEventListener("mouseup", i);
                                var l = u.x,
                                  c = u.y;
                                if (
                                  Math.sqrt(
                                    Math.pow(a - l, 2) + Math.pow(s - c, 2)
                                  ) < 5 &&
                                  0 === o.button
                                ) {
                                  if (!t()(o.target).closest(n).length && !r)
                                    return e();
                                  r = !1;
                                }
                              }),
                              document.addEventListener("mouseup", i),
                              (a = o.x),
                              (s = o.y),
                              [2])
                            : [2, t()(document).off()];
                      }
                    });
                  });
                }),
                window.zorbiTextSelectionListener ||
                  (window.zorbiTextSelectionListener = o),
                window.zorbiOutsideClickListener ||
                  (window.zorbiOutsideClickListener = i),
                [4, b("invokeType")]
              );
            case 2:
              return [4, e(a.sent())];
            case 3:
              return a.sent(), [2];
          }
        });
      });
    })();
})();
