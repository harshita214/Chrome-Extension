"use strict";
(__filename = "pages/options_defs.js"),
  define(
    ["require", "exports", "./async_bg", "./options_base"],
    function (t, i, n, s) {
      var e, r, u, h, o, f, a, c, l, d, v, p, g;
      Object.defineProperty(i, "__esModule", { value: true }),
        (i.onKeyMappingsError =
          i.createNewOption =
          i.registerClass =
          i.savedStatus =
          i.exportBtn =
          i.saveBtn =
          i.xt =
          i.Nt =
          i.Mt =
          i.Ot =
          i.Tt =
          i.Vt =
            void 0),
        (s.s.i = Object.create(null)),
        (s.s.G = []),
        (s.s.prototype.O = function (t) {
          if ((t.call(this), VApi)) {
            var i = s.r.k[this.b],
              e = this.E();
            n.v(3, { key: i, val: e }).then(function (t) {
              VApi.z[i] = null != t ? t : e;
            });
          }
        }),
        (s.s.prototype.P = function (t) {
          var i, s;
          t.call(this),
            (i = this.E()),
            "autoReduceMotion" === this.b
              ? ((s =
                  1 === i ||
                  (0 !== i &&
                    matchMedia("(prefers-reduced-motion: reduce)").matches)),
                VApi && (VApi.z.m = s),
                n.toggleReduceMotion(s))
              : this.J();
        }),
        (s.s.Et = function () {
          return __awaiter(this, void 0, void 0, function* () {
            var t,
              i,
              e,
              r,
              u,
              h,
              o = s.s.i,
              f = [];
            for (e in (s.r.p(),
            (i = (t = o.optionalPermissions) && t.A()),
            yield Promise.all([s.r.d(), i]),
            o))
              !(r = o[e]).N && r.q() && f.push(r.At());
            if (
              f.length > 0 &&
              !confirm(s.t("dirtyOptions", [f.join("\n  * ")]))
            )
              return false;
            for (e in o) if (!(r = o[e]).N && !r.L()) return false;
            for (e in (n.m(8),
            o.vimSync.N || (yield o.vimSync.A()),
            o.exclusionRules.N || (yield o.exclusionRules.A()),
            (u = []),
            o))
              (h = o[e]).N || u.push(h.A());
            return yield Promise.all(u), n.m(0, 8), true;
          });
        }),
        (s.s.Ft = function () {
          var t,
            i = s.s.i;
          for (t in i) if (!i[t].N) return true;
          return false;
        }),
        (s.s.prototype.At = function () {
          var t = this.x;
          return this instanceof r
            ? t.nextElementSibling.textContent
            : (t = (t = t.closest("tr")).querySelector(
                ".caption"
              )).innerText.replace(/[\r\n]/g, "");
        }),
        (s.s.prototype.B = function (t, i) {
          return t === i;
        }),
        (e = (function (t) {
          function i() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(i, t),
            (i.prototype.z = function () {
              var t,
                n,
                e = this;
              (this.D = {
                min: (t = this.x.min) && !isNaN((n = parseFloat(t))) ? n : null,
                max: (t = this.x.max) && !isNaN((n = parseFloat(t))) ? n : null,
                default: 0,
                H: i.Bt,
              }),
                (this.x.oninput = this.w),
                (this.x.onfocus = this.Jt.bind(this)),
                s.r.d().then(function () {
                  e.D.default = s.r.l[e.b];
                });
            }),
            (i.prototype.K = function (t) {
              this.x.value = "" + t;
            }),
            (i.prototype.E = function () {
              return parseFloat(this.x.value);
            }),
            (i.prototype.Jt = function () {
              var t = this,
                i = this.x,
                n = function (i) {
                  return t.Rt(i);
                },
                s = function () {
                  i.removeEventListener("wheel", n, { passive: false }),
                    i.removeEventListener("blur", s),
                    (t.jt = 0);
                };
              (this.jt = 0),
                i.addEventListener("wheel", n, { passive: false }),
                i.addEventListener("blur", s);
            }),
            (i.prototype.Rt = function (t) {
              var i, n, s, e, r, u, h, o;
              if (
                (t.preventDefault(),
                (i = this.jt),
                !((n = Date.now()) - i < 100 && n + 99 > i && i))
              )
                return (
                  (this.jt = n),
                  (r = (s = this.x).value),
                  "function" ==
                  typeof (h = (e = (t.deltaY || t.deltaX) > 0)
                    ? s.stepUp
                    : s.stepDown)
                    ? (h.call(s), (u = s.value), (s.value = r))
                    : ((o = (h = parseFloat)(s.step) || 1),
                      (n = (+s.value || 0) + (e ? o : -o)),
                      isNaN((o = h(s.max))) || (n = Math.min(n, o)),
                      isNaN((o = h(s.min))) || (n = Math.max(n, o)),
                      (u = "" + n)),
                  this.Pt(u, i > 0, false)
                );
            }),
            (i.Bt = function (t) {
              return (
                isNaN(t) && (t = this.default),
                (t = null != this.min ? Math.max(this.min, t) : t),
                null != this.max ? Math.min(this.max, t) : t
              );
            }),
            i
          );
        })(s.s)),
        (i.Vt = e),
        (r = (function (t) {
          function i() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(i, t),
            (i.prototype.z = function () {
              var t = this.x,
                n = t.dataset.map;
              (this.Ut = n ? JSON.parse(n) : t.dataset.allowNull ? i.Dt : i.Ht),
                (this.Lt = this.Ut.length - 1),
                this.Lt > 1 &&
                  "vimSync" !== this.b &&
                  t.addEventListener(
                    "change",
                    this.onTripleStatusesClicked.bind(this),
                    true
                  ),
                (t.onchange = this.w);
            }),
            (i.prototype.K = function (t) {
              var i = true === t || t === this.Ut[this.Lt];
              (this.x.checked = i),
                (this.x.indeterminate = this.Lt > 1 && t === this.Ut[1]),
                (this.qt = i ? this.Lt : Math.max(0, this.Ut.indexOf(t)));
            }),
            (i.prototype.E = function () {
              return this.x.indeterminate
                ? this.Ut[1]
                : this.Ut[this.x.checked ? this.Lt : 0];
            }),
            (i.prototype.onTripleStatusesClicked = function (t) {
              t.preventDefault();
              var i = this.qt;
              (this.qt = 2 === i ? 1 : i ? 0 : 2),
                (this.x.indeterminate = 2 === i),
                (this.x.checked = 2 === this.qt);
            }),
            (i.prototype.j = function (t) {
              return (
                this.x.dataset.map &&
                  "boolean" == typeof t &&
                  (t = this.Ut[t ? this.Lt : 0]),
                t
              );
            }),
            (i.Ht = [false, true]),
            (i.Dt = [false, null, true]),
            i
          );
        })(s.s)),
        (i.Tt = r),
        (u = (function (t) {
          function i() {
            var i = (null !== t && t.apply(this, arguments)) || this;
            return (i.Ct = false), i;
          }
          return (
            __extends(i, t),
            (i.prototype.z = function () {
              var t = this.x.dataset.converter || "",
                n = t ? t.split(" ") : [];
              (this.x.oninput = this.w),
                n.length > 0 && (this.D = { It: n, $: 0, H: i.Gt });
            }),
            (i.prototype.M = function () {
              var i = this,
                n = t.prototype.M.call(this),
                s = this.D;
              return (
                s &&
                  ((s.$ = 0),
                  n
                    ? (n = n.then(function () {
                        s.$ = s.H(i.S) === i.S ? 1 : 0;
                      }))
                    : (s.$ = s.H(this.S) === this.S ? 1 : 0)),
                n
              );
            }),
            (i.prototype.K = function (t, i) {
              var n = this.Kt(t).replace(/ /g, "\xa0");
              true !== i ? (this.x.value = n) : this.Pt(n, true, true);
            }),
            (i.prototype.Qt = function () {
              return this.x.value.trim().replace(/\xa0/g, " ");
            }),
            (i.prototype.Kt = function (t) {
              return t;
            }),
            (i.prototype.E = function () {
              var t = this.Qt(),
                n = this.D;
              return (
                t &&
                  n &&
                  n.H === i.Gt &&
                  ((n.$ |= 2), (t = i.Gt.call(n, t)), (n.$ &= -3)),
                t
              );
            }),
            (i.prototype.Z = function (t) {
              return this.Kt(t) !== this.Qt();
            }),
            (i.prototype.wt = function (t, n) {
              var s = !!t;
              (s || this.Ct) && ((this.Ct = s), i.wt(t, n, this.x));
            }),
            (i.wt = function (t, i, s) {
              var e = !!t,
                r = s.classList,
                u = s.parentElement,
                h = s.nextElementSibling;
              (h = h && h.classList.contains("tip") ? h : null),
                (e || h) &&
                  n.T(function () {
                    e
                      ? (null == h &&
                          (((h = document.createElement("div")).className =
                            "tip"),
                          u.insertBefore(h, s.nextElementSibling)),
                        (h.textContent = t),
                        null !== i && r.add(i || "has-error"))
                      : (r.remove("has-error"),
                        r.remove("highlight"),
                        h && h.remove());
                  });
            }),
            (i.Gt = function (t) {
              var i,
                n,
                s = this.It;
              if (
                (s.indexOf("lower") >= 0
                  ? (t = t.toUpperCase().toLowerCase())
                  : s.indexOf("upper") >= 0 &&
                    (t = t.toLowerCase().toUpperCase()),
                (t = t.normalize()),
                s.indexOf("chars") < 0 || (2 & this.$ && !(1 & this.$)))
              )
                return t;
              for (n of ((i = ""), t.replace(/\s/g, "")))
                i.includes(n) || (i += n);
              return i;
            }),
            i
          );
        })(s.s)),
        (i.Ot = u),
        (h = (function (t) {
          function i() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(i, t),
            (i.prototype.E = function () {
              var i = t.prototype.E.call(this);
              return i || this.K((i = s.r.l[this.b]), true), i;
            }),
            i
          );
        })(u)),
        (i.Mt = h),
        (o = (function (t) {
          function i() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(i, t),
            (i.prototype.Kt = function (t) {
              var i = this.x instanceof HTMLInputElement,
                n = JSON.stringify(t, null, i ? 1 : 2);
              return i
                ? n.replace(/(,?)\n\s*/g, function (t, i) {
                    return i ? ", " : "";
                  })
                : n;
            }),
            (i.prototype.E = function () {
              var i = t.prototype.E.call(this),
                n = null;
              if (i)
                try {
                  n = JSON.parse(i);
                } catch (t) {}
              else this.K((n = s.r.l[this.b]), true);
              return n;
            }),
            i
          );
        })(u)),
        (i.Nt = o),
        (f = (function (t) {
          function i() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(i, t),
            (i.prototype.z = function () {
              t.prototype.z.call(this),
                (this.Wt = true),
                (this.Xt = this.Yt.bind(this)),
                this.x.addEventListener("focus", this.Xt);
            }),
            (i.prototype.Yt = function () {
              this.Xt &&
                (this.x.removeEventListener("focus", this.Xt),
                this.x.classList.remove("masked"),
                (this.Xt = null),
                (this.Wt = false),
                this.x.removeAttribute("placeholder"),
                this.M());
            }),
            (i.prototype.K = function (i, n) {
              this.Wt
                ? (this.x.placeholder = s.t("clickToUnmask"))
                : t.prototype.K.call(this, i, n);
            }),
            (i.prototype.Qt = function () {
              return this.Wt ? this.S : t.prototype.Qt.call(this);
            }),
            i
          );
        })(u)),
        (i.xt = f),
        (u.prototype.Pt = e.prototype.Pt =
          function (t, i, n) {
            var s = false;
            i &&
              ((this.Zt = true),
              (s = document.activeElement !== this.x) && this.x.focus(),
              document.execCommand("undo")),
              (this.Zt = n),
              this.x.select(),
              document.execCommand("insertText", false, t),
              s && this.x.blur(),
              (this.Zt = false);
          }),
        (o.prototype.B = s.s.I),
        (s.e.prototype.it = function (t) {
          var i, e, r, u, h;
          if (this.V.length === t)
            for (r of ((i = n.$("#exclusionToolbar")),
            (e = n.$$("[data-model]", i)),
            (i.style.visibility = t ? "" : "hidden"),
            e))
              ((h = (u = s.s.i[r.id]).x.parentNode.style).visibility =
                t || u.N ? "" : "visible"),
                (h.display = !t && u.N ? "none" : "");
        }),
        (i.saveBtn = n.$("#saveOptions")),
        (i.exportBtn = n.$("#exportButton")),
        (i.createNewOption = (function () {
          var t,
            a,
            c,
            l,
            d = false;
          for (l of ((i.savedStatus = function (t) {
            return (d = null != t ? t : d);
          }),
          (t = function () {
            this.Zt ||
              ((this.N = this.B(this.E(), this.S))
                ? d &&
                  !s.s.Ft() &&
                  ((i.saveBtn.disabled = true),
                  (i.saveBtn.firstChild.data = s.t("o115")),
                  (i.exportBtn.disabled = false),
                  i.savedStatus(false),
                  (window.onbeforeunload = null))
                : d ||
                  ((window.onbeforeunload = function () {
                    return s.t("beforeUnload");
                  }),
                  i.savedStatus(true),
                  (i.saveBtn.disabled = false),
                  (i.saveBtn.firstChild.data = s.t("o115_2")),
                  (i.exportBtn.disabled = true)));
          }),
          (a = {
            Number: e,
            Boolean: r,
            Text: u,
            NonEmptyText: h,
            JSON: o,
            MaskedText: f,
            ExclusionRules: s.e,
          }),
          (c = function (i) {
            var n = new (0, a[i.dataset.model])(i, t);
            return (s.s.i[n.b] = n);
          }),
          (s.s.C = true),
          n.$$("[data-model]")))
            c(l);
          return (
            (i.registerClass = function (t, i) {
              a[t] = i;
            }),
            c
          );
        })()),
        ((c = (a = s.s.i.exclusionRules).U).ondragstart = function (t) {
          (a.$t = t.target).style.opacity = "0.5";
        }),
        (c.ondragend = function () {
          var t = a.$t;
          (a.$t = null), t && (t.style.opacity = "");
        }),
        (c.ondragover = function (t) {
          t.preventDefault();
        }),
        (c.ondrop = function (t) {
          var i, n, s, e, r;
          t.preventDefault(),
            (i = a.$t),
            (n = (n = t.target).closest(".exclusionRule")),
            i &&
              n &&
              i !== n &&
              (a.U.insertBefore(i, n),
              (s = a.V),
              (e = i.querySelector(".pattern").vnode),
              (r = n.querySelector(".pattern").vnode),
              s.splice(s.indexOf(e), 1),
              s.splice(s.indexOf(r), 0, e),
              a.w());
        });
      (d = function (t) {
        for (
          var i,
            n,
            s = new RegExp("^".concat("#").concat("!", "[^\\n]*|^[^]"), "gm");
          (i = s.exec(t));

        )
          if ((n = i[0]) && "\n" !== n[0]) {
            if ("#" !== n[0]) break;
            if ("!" === n[1] && "no-check" === n.slice(2).trim()) {
              t = t.slice(0, i.index) + t.slice(i.index + n.length).trimLeft();
              break;
            }
          }
        return t.replace(/\.activateMode(?:To)?/g, ".activate");
      }),
        ((l = s.s.i.keyMappings).R = function () {
          var t = s.s.prototype.R.call(this);
          return t instanceof Promise ? t.then(d) : d(t);
        }),
        (l.j = function (t) {
          return (t = d(t)), s.s.prototype.j.call(this, t);
        }),
        (i.onKeyMappingsError = function (t) {
          true === t ? l.wt(s.t("ignoredNonEN"), null) : l.wt(t);
        }),
        n.v(7).then(i.onKeyMappingsError),
        (g = s.s.i.filterLinkHints),
        ((v = s.s.i.linkHintCharacters).J = (p = s.s.i.linkHintNumbers).J =
          function () {
            this.wt(
              !this.x.style.display && this.S.length < 4 ? n.ti("96") : ""
            );
          }),
        (g.J = function () {
          n.T(function (t) {
            var i = g.E();
            (t.style.display = p.x.style.display = i ? "" : "none"),
              (v.x.style.display = i ? "none" : ""),
              v.J(),
              p.J();
          }, n.$("#waitForEnterBox"));
        }),
        (s.s.i.ignoreKeyboardLayout.J = function () {
          var t = this;
          n.T(function (i) {
            i.style.display = t.E() > 1 ? "none" : "";
          }, n.$("#ignoreCapsLockBox"));
        }),
        (s.s.i.vomnibarPage.J = function () {
          var t = this.x,
            i = this.S,
            e = i.startsWith(location.protocol) || i.startsWith("front/");
          if (n.dt < 50)
            return (
              n.T(function () {
                t.style.textDecoration = e ? "" : "line-through";
              }),
              this.wt(
                i === s.r.l.vomnibarPage ? "" : s.t("onlyExtVomnibar", [50]),
                null
              )
            );
          e
            ? this.wt("")
            : i.startsWith("file:")
            ? this.wt(s.t("fileVomnibar"), "highlight")
            : /^http:\/\/(?!localhost[:/])/i.test(i)
            ? this.wt(s.t("httpVomnibar"), "highlight")
            : this.wt("");
        }),
        (s.s.i.userDefinedCss.J = function () {
          var t = this;
          this.x.classList.contains("debugging") &&
            n.T(function () {
              var i,
                s,
                e,
                r = VApi.y().r;
              for (i of n.$$("iframe", r))
                (s = i.classList.contains("HUD")),
                  (e = i.contentDocument.querySelector("style.debugged")) &&
                    (s ? e.remove() : e.classList.remove("debugged"));
              t.x.classList.remove("debugging");
            });
        }),
        (s.s.i.autoReduceMotion.J = function () {
          var t = this;
          n.T(function () {
            var i = t.S;
            n.toggleReduceMotion(
              2 === i
                ? matchMedia("(prefers-reduced-motion: reduce)").matches
                : i > 0
            );
          });
        }),
        (s.s.i.passEsc.E = function () {
          return h.prototype.E.call(this).replace(/, /g, ",");
        }),
        (s.s.i.passEsc.Kt = function (t) {
          return t.replace(/,/g, ", ");
        });
    }
  );
