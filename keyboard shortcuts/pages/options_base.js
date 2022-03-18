"use strict";
(__filename = "pages/options_base.js"),
  define(["require", "exports", "./async_bg"], function (t, i, n) {
    var e, s, r, u, o;
    Object.defineProperty(i, "__esModule", { value: true }),
      (i.t = i.n = i.e = i.s = i.r = i.u = i.o = i.showI18n = void 0),
      (e = function () {
        var t, e, s, r, u, o;
        if ("en" !== n.h) {
          if (
            ((t = n.h.split(",")[0]),
            (e = navigator.language || t),
            (r = (s = n.$("#keyMappings")) && i.t("keyMappingsP")) &&
              (s.placeholder = r),
            e && (!t.startsWith("zh") || "zh-CN" !== e))
          )
            for (s of n.$$("input[type=text], textarea")) s.lang = e;
          for (s of n.$$("[data-i]"))
            (o = (u = s.dataset.i).endsWith("-t")),
              null != (r = n.a(o ? u.slice(0, -2) : u)) &&
                (o ? (s.title = r) : (s.innerText = r));
          document.documentElement.lang = "zh" === t ? "zh-CN" : t;
        }
      }),
      (i.showI18n = e),
      (window.__extends = function (t, i) {
        var n = function () {
          this.constructor = t;
        };
        (n.prototype = i.prototype), (t.prototype = new n());
      }),
      (i.o = function (t, i, n, e) {
        var s,
          r = 0,
          u = function () {
            var o = Date.now() - s;
            if (!(o < i - 4 && o >= 0))
              return (r = 0), s !== e ? t.call(n) : void 0;
            r = setTimeout(u, i - o);
          };
        return (
          (e = e ? 1 : 0),
          function () {
            if (((s = Date.now()), !r))
              return (r = setTimeout(u, i)), e ? ((e = s), t.call(n)) : void 0;
          }
        );
      }),
      (s = null),
      (i.u = function (t) {
        s = t;
      }),
      (i.r = {
        c: "",
        f: 9,
        l: null,
        p: function () {
          s = null;
        },
        d: function () {
          return s
            ? s instanceof Promise
              ? s
              : Promise.resolve()
            : (i.r.l ||
                n.v(0).then(function (t) {
                  (i.r.l = t[0]), (i.r.f = t[1]), (i.r.c = t[2]), n.m(1);
                }),
              (s = n.v(1).then(function (t) {
                s = t;
              })));
        },
        y: function (t) {
          var i,
            n = this;
          return (
            null == s && this.d(),
            s instanceof Promise
              ? s.then(function () {
                  return n.y(t);
                })
              : void 0 !== (i = s[t])
              ? i
              : this.l[t]
          );
        },
        g: function (t, e) {
          var r, u;
          return (
            (u = e),
            void 0 !== (r = i.r.l[t]) &&
              ("object" == typeof r
                ? JSON.stringify(e) === JSON.stringify(r)
                : e === r) &&
              (u = null),
            n.v(2, { key: t, val: u }).then(function (i) {
              s[t] = null !== i ? i : e;
            })
          );
        },
        k: {
          __proto__: null,
          filterLinkHints: "f",
          ignoreCapsLock: "i",
          ignoreKeyboardLayout: "l",
          mapModifier: "a",
          mouseReachable: "e",
          keyboard: "k",
          keyupTime: "u",
          linkHintCharacters: "c",
          linkHintNumbers: "n",
          passEsc: "p",
          regexFindMode: "r",
          smoothScroll: "s",
          scrollStepSize: "t",
          waitForEnter: "w",
        },
      }),
      (r = (function () {
        function t(t, n) {
          var e = t.id;
          (this.b = e),
            (this.x = t),
            (this.S = this.w = null),
            (this.N = false),
            e in i.r.k
              ? (n = this.O.bind(this, n))
              : ("autoDarkMode" !== e && "autoReduceMotion" !== e) ||
                (n = this.P.bind(this, n)),
            (this.w = i.o(n, 330, this, 1)),
            this.z(t);
        }
        return (
          (t.prototype.J = function () {}),
          (t.prototype.M = function () {
            var i,
              e = this;
            if (((this.N = true), (i = this.R()) instanceof Promise))
              return i.then(t.prototype.M.bind(this));
            (this.S = i),
              t.C ||
                n.T(function () {
                  e.K(e.S);
                });
          }),
          (t.prototype.R = function () {
            return i.r.y(this.b);
          }),
          (t.prototype.j = function (t) {
            var i = this.D;
            return i ? i.H(t) : t;
          }),
          (t.prototype.L = function () {
            return true;
          }),
          (t.prototype.A = function () {
            return __awaiter(this, void 0, void 0, function* () {
              var t,
                i = this,
                e = this.E(),
                s = "object" == typeof e,
                r = s ? JSON.stringify(this.S) : this.S,
                u = s ? JSON.stringify(e) : e;
              if (u !== r)
                return (
                  (r = u),
                  (e = (t = this.j(e)) instanceof Promise ? yield t : t),
                  (e = yield this.F(e)),
                  (this.S = e),
                  (this.N = true),
                  (r !== (s ? JSON.stringify(e) : e) || this.Z(e)) &&
                    n.T(function () {
                      i.K(i.S, true);
                    }),
                  this.J()
                );
            });
          }),
          (t.prototype.q = function () {
            var t = this.R(),
              i = !this.B(this.S, t);
            return i && this.B(this.E(), t)
              ? ((this.S = t), (this.N = true), false)
              : i;
          }),
          (t.prototype.F = function (n) {
            return __awaiter(this, void 0, void 0, function* () {
              return (
                yield i.r.g(this.b, n),
                this.b in i.r.k && t.G.push(this.b),
                this.R()
              );
            });
          }),
          (t.prototype.Z = function () {
            return false;
          }),
          (t.I = function (t, i) {
            return JSON.stringify(t) === JSON.stringify(i);
          }),
          (t.C = false),
          t
        );
      })()),
      (i.s = r),
      (u = (function (t) {
        function e() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.B = r.I), i;
        }
        return (
          __extends(e, t),
          (e.prototype.z = function (t) {
            var i = this;
            (this.Q = t
              .querySelector("#exclusionTemplate")
              .content.querySelector(".exclusionRule")),
              (this.U = t.querySelector("tbody")),
              (this.V = []),
              this.U.addEventListener("input", e.W),
              this.U.addEventListener("input", this.w),
              this.U.addEventListener("click", function (t) {
                return i.X(t);
              }),
              (this.Y = false),
              (n.$("#exclusionAddButton").onclick = function () {
                return i.tt("");
              });
          }),
          (e.prototype.it = function () {}),
          (e.W = function (t) {
            var i = t.target,
              n = i.vnode;
            n && (n.nt |= i.classList.contains("pattern") ? 1 : 2);
          }),
          (e.prototype.tt = function (t, i) {
            this.et(this.U, { pattern: t, passKeys: "" });
            var e = this.V[this.V.length - 1];
            false !== i &&
              n.T(function () {
                return e.st.focus();
              }),
              t && this.w(),
              this.it(1);
          }),
          (e.prototype.K = function (t) {
            var i, e, s;
            if (!this.Y)
              for (i of ((this.Y = true),
              r.G && (this.Q.draggable = true),
              "en" !== n.h ? n.$$("[title]", this.Q) : []))
                (e = n.a(i.title)) && (i.title = e);
            return (
              (this.U.textContent = ""),
              (this.V = []),
              t.length <= 0 ||
                (1 === t.length
                  ? this.et(this.U, t[0])
                  : ((s = document.createDocumentFragment()),
                    t.forEach(this.et.bind(this, s)),
                    this.U.appendChild(s))),
              this.it(t.length)
            );
          }),
          (e.prototype.rt = function () {
            return true;
          }),
          (e.prototype.et = function (t, i) {
            var n,
              e,
              s,
              r,
              u,
              o = i.pattern,
              h = i.passKeys,
              a = {
                ut: { pattern: o, passKeys: h },
                ot: null,
                nt: 0,
                ht: false,
                st: null,
                at: null,
              };
            (a.ht = this.rt(a)),
              a.ht
                ? ((e = (n = document.importNode(this.Q, true)).querySelector(
                    ".pattern"
                  )),
                  (s = n.querySelector(".passKeys")),
                  (r = h.trimRight()),
                  (e.value = o),
                  o && (e.placeholder = ""),
                  (s.value = r),
                  r && (s.placeholder = ""),
                  ((u = a).st = e),
                  (u.at = s),
                  (e.vnode = u),
                  (s.vnode = u),
                  this.V.push(u),
                  t.appendChild(n))
                : this.V.push(a);
          }),
          (e.ct = function (t) {
            t.ut.pattern && t.at.placeholder && (t.at.placeholder = "");
          }),
          (e.prototype.X = function (t) {
            var i,
              n = t.target;
            if (
              ("path" === n.localName && (n = n.parentElement),
              "svg" === n.localName && (n = n.parentElement),
              n.classList.contains("remove"))
            )
              return (n = n.parentNode.parentNode).classList.contains(
                "exclusionRule"
              )
                ? ((i = n.querySelector(".pattern").vnode),
                  n.remove(),
                  this.V.splice(this.V.indexOf(i), 1),
                  this.w(),
                  this.it(0))
                : void 0;
          }),
          (e.ft = function (t, i, n) {
            var e = n.toLowerCase();
            return i || 1 !== n.length
              ? n !== e
                ? "<".concat(i, "s-").concat(e, ">")
                : t
              : n;
          }),
          (e.lt = function (t) {
            return (
              t && t.replace(/<(?!<)((?:[acm]-){0,3})(\S|[A-Za-z]\w+)>/g, e.ft)
            );
          }),
          (e.prototype.E = function (t) {
            var n,
              s,
              r,
              u,
              h,
              a,
              c,
              f,
              l,
              p,
              d,
              v = [];
            for (n of ((t = true === t), this.V))
              (t && !n.ht) ||
                ((s = n.nt)
                  ? ((r = 1 & s ? n.st.value.trim() : n.ut.pattern),
                    (u = false),
                    (h = 2 & s ? n.at.value : n.ut.passKeys),
                    r
                      ? (1 & s &&
                          ((a = r.startsWith(":") ? 0 : r.indexOf("://")) &&
                            (/^[\^*]|[^\\][$()*+?\[\]{|}]/.test(r)
                              ? r.startsWith("`") ||
                                (r.startsWith("^")
                                  ? ((f = ".*$".includes(r.slice(-2))
                                      ? r.endsWith(".*$")
                                        ? 3
                                        : r.endsWith(".*")
                                        ? 2
                                        : 0
                                      : 0),
                                    (r =
                                      0 !== f && "\\" !== r[r.length - f]
                                        ? r.slice(0, -f)
                                        : r))
                                  : ((u = !r.includes("/", a + 3)),
                                    r.endsWith("*") &&
                                      ((r = r.slice(
                                        0,
                                        /^[^\\]\.\*$/.test(r.slice(-3))
                                          ? -2
                                          : -1
                                      )),
                                      (u = false)),
                                    (c =
                                      (a < 0 ? "^https?://" : "^") +
                                      ((c = r =
                                        r.startsWith(".*") && !/[(\\[]/.test(r)
                                          ? "*." + r.slice(2)
                                          : r).startsWith("*") && "." !== c[1]
                                        ? "[^/]" + c
                                        : (c = c.replace(
                                            /\./g,
                                            "\\."
                                          )).startsWith("*")
                                        ? c.replace("*\\.", "(?:[^./]+\\.)*?")
                                        : c.replace(
                                            "://*\\.",
                                            "://(?:[^./]+\\.)*?"
                                          ))),
                                    (r = o(c, "")
                                      ? c
                                      : r.includes("*") || r.includes("/")
                                      ? ":" + r
                                      : ":https://" +
                                        (r.startsWith(".") ? r.slice(1) : r))))
                              : ((u =
                                  !r.includes("/", a + 3) &&
                                  !r.startsWith("vimium:")),
                                (r =
                                  (a < 0 ? ":http://" : ":") +
                                  (r = r.replace(/\\(.)/g, "$1"))))),
                          u && (r += "/")),
                        2 & s &&
                          h &&
                          ((l = (h = e.lt(h)).match(
                            /<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z]\w+|[^\sA-Z])>|\S/g
                          )) &&
                            ((p = "^" === l[0] && l.length > 1) && l.shift(),
                            l.sort(),
                            p
                              ? l.unshift("^")
                              : "^" === l[0] && (l.shift(), l.push("^"))),
                          (h = (h = l ? l.join(" ") + " " : "").replace(
                            /<escape>/gi,
                            "<esc>"
                          ))),
                        (d = h
                          ? h.length > 1 && "^" === h[0]
                            ? i.t("onlyHook") || "only hook such keys"
                            : i.t("passThrough") || "pass through such keys"
                          : i.t("completelyDisabled") || "completely disabled"),
                        n.st.title !== r && (n.st.title = r),
                        n.at.title !== d && (n.at.title = d),
                        this.pt(n, r, h),
                        v.push(n.ut))
                      : (n.st.title && (n.st.title = ""),
                        n.at.title && (n.at.title = ""),
                        this.pt(n, "", h)))
                  : n.ut.pattern && v.push(n.ut));
            return v;
          }),
          (e.prototype.pt = function (t, i, n) {
            var s = !t.ut.passKeys && !!n;
            (t.ut = { pattern: i, passKeys: n }),
              (t.ot = null),
              (t.nt = 0),
              s && e.ct(t);
          }),
          (e.prototype.J = function () {
            var t, i;
            for (t of this.V)
              t.ht &&
                (t.st.value !== t.ut.pattern && (t.st.value = t.ut.pattern),
                (i = t.ut.passKeys.trim()),
                t.at.value !== i && (t.at.value = i));
          }),
          e
        );
      })(r)),
      (i.e = u),
      (o = function (t, i) {
        try {
          return new RegExp(t, i);
        } catch (t) {
          return null;
        }
      }),
      (i.n =
        n.dt < 48 || (devicePixelRatio < 2 && n.dt >= 61)
          ? function () {
              var t = document.createElement("style"),
                i = devicePixelRatio,
                e = n.dt >= 61 && i >= 1,
                s = e || n.dt >= 48 ? 1 / i : 1;
              (s = ("" + (s += 999e-8)).slice(0, 7).replace(/\.?0+$/, "")),
                (t.textContent = e
                  ? "html { --tiny: ".concat(s, "px; }")
                  : "* { border-width: ".concat(s, "px !important; }")),
                document.head.appendChild(t);
            }
          : null),
      (i.t = function (t, i) {
        return n.a(t, i) || "";
      });
  });
