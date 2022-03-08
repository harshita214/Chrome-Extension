"use strict";
(__filename = "pages/options_popup.js"),
  define(
    ["require", "exports", "./async_bg", "./options_base"],
    function (n, t, o, e) {
      var u,
        i,
        r,
        c,
        f,
        l,
        s,
        a,
        v,
        h,
        d,
        p,
        m,
        _,
        g,
        w,
        b,
        R,
        O,
        x,
        j,
        P,
        T,
        k,
        y,
        E,
        L,
        U,
        z,
        A,
        M,
        S,
        $;
      Object.defineProperty(t, "__esModule", { value: true }),
        (r = ""),
        (c = 0),
        (f = true),
        (l = null),
        (s = null),
        (v = /^[a-z][\+\-\.\da-z]+:\/\//),
        (h = o.$("#state-action")),
        (d = o.$("#saveOptions")),
        (m = (p = h.nextElementSibling).nextElementSibling),
        (_ = Object.create(null)),
        (w = function (n, t) {
          return o.a(n, t) || "";
        }),
        (b = (function (n) {
          function t() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            __extends(t, n),
            (t.prototype.tt = function (o, e) {
              n.prototype.tt.call(this, t.un(), e);
            }),
            (t.prototype.rt = function (n) {
              return (
                (n.ot = (n.ut.pattern && _[n.ut.pattern]) || false), k(n.ot)
              );
            }),
            (t.prototype.K = function (o) {
              var u, i, r;
              n.prototype.K.call(this, o),
                (this.K = null),
                (t.prototype.rt = e.e.prototype.rt),
                (u = this.V.filter(function (n) {
                  return n.ht;
                })),
                (c = (i = u.length > 0) ? 2 : 1),
                i
                  ? ((r = u[0].at), R(true))
                  : (this.tt("", false), (r = this.V[this.V.length - 1].at)),
                setTimeout(function () {
                  r.focus();
                }, 67);
            }),
            (t.prototype.F = function (t) {
              var o = n.prototype.F.call(this, t),
                e = P("".concat(u.tabId, "/reset/silent"));
              return Promise.all([o, e]).then(function (n) {
                return n[0];
              });
            }),
            (t.prototype.pt = function (t, o, e) {
              var u = t.ut.pattern === o,
                i = t.ot;
              n.prototype.pt.call(this, t, o, e),
                u ? (t.ot = i) : this.cn(t, o);
            }),
            (t.prototype.cn = function (n, o) {
              var e,
                u = this,
                i = n.st;
              o && o !== t.un()
                ? (e = y(n)) instanceof Promise
                  ? e.then(function () {
                      u.cn(n, o);
                    })
                  : k(e)
                  ? (i.title = i.style.color = "")
                  : ((i.style.color = "red"),
                    (i.title =
                      "Red text means that the pattern does not\nmatch the current URL."))
                : (i.title = i.style.color = "");
            }),
            (t.un = function () {
              var n = i.startsWith("http:")
                ? "^https?://" +
                  i.split("/", 3)[2].replace(/[$()*+.?\[\\\]\^{|}]/g, "\\$&") +
                  "/"
                : i.startsWith(location.origin + "/")
                ? ":vimium:/" + new URL(i).pathname.replace("/pages", "")
                : /^[^:]+:\/\/./.test(i) && !i.startsWith("file:")
                ? ":" + i.split("/", 3).join("/") + "/"
                : ":" + i;
              return (
                _[n] ||
                  (_[n] = E(
                    "^" === n[0]
                      ? { t: 1, v: n }
                      : {
                          t: 2,
                          v: n.startsWith(":vimium:")
                            ? i.split(/[?#]/)[0]
                            : n.slice(1),
                        }
                  )),
                (t.un = function () {
                  return n;
                }),
                n
              );
            }),
            t
          );
        })(e.e)),
        (R = function (n) {
          var t, o;
          s.E(true),
            (t = s.V.filter(function (n) {
              return n.ht && !!n.ut.pattern;
            })),
            (o = c),
            (c = 2),
            Promise.all(
              t.map(function (n) {
                return null !== n.ot ? n.ot : y(n);
              })
            ).then(function () {
              O(o, n, t);
            });
        }),
        (O = function (n, t, o) {
          var e,
            i,
            c = 3 === n,
            f = U(!!r, o);
          f && (f = j(f)),
            t && (l = n >= 2 ? f : null),
            (e = f === l),
            (i = !!f && f.length > 2 && "^" === f[0]),
            (h.textContent =
              (c
                ? f
                  ? w("o137") + w(i ? "o138" : "o139")
                  : w("o140")
                : w(e ? "o141" : "o142") +
                  w(f ? (i ? "o138" : "o139") : e ? "o143" : "o143_2")
              ).replace(" to be", "") +
              w("colon") +
              w("NS")),
            (p.className = f ? "code" : ""),
            (p.textContent = f
              ? i
                ? f.slice(2)
                : f
              : w("o143_3") + w(null !== f ? "o144" : "o145")),
            (m.textContent =
              null !== u.lock && !c && e
                ? w("o147", [w(0 !== u.lock ? "o144" : "o145")])
                : null !== u.lock
                ? w("o148")
                : ""),
            (d.disabled = e),
            (d.firstChild.data = w(c ? "o115_3" : e ? "o115" : "o115_2"));
        }),
        (x = function () {
          if (!d.disabled)
            return (
              o.m(8),
              s.A().then(function () {
                o.m(0, 8),
                  (c = 3),
                  z(),
                  R(true),
                  (d.firstChild.data = w("o115_3")),
                  (d.disabled = true),
                  (f = true);
              })
            );
        }),
        (j = function (n) {
          var t, o, e;
          for (e of ((t = (n = n.trim()).length > 2 && n.startsWith("^")) &&
            (n = n.slice(1).trimLeft()),
          (o = Object.create(null)),
          n.split(" ")))
            o[e] = 1;
          return (t ? "^ " : "") + Object.keys(o).sort().join(" ");
        }),
        (P = function (n) {
          return o.v(22, [n, u.tabId, u.frameId]).then(function (n) {
            (u.status = n[0]), (u.lock = n[1]);
          });
        }),
        (T = function (n, t) {
          t && t.preventDefault();
          var o = t && (t.ctrlKey || t.metaKey);
          P("".concat(u.tabId, "/").concat(n)).then(function () {
            o ? (z(), R(false)) : window.close();
          });
        }),
        (k = function (n) {
          return (
            !!n &&
            (2 === n.t
              ? i.startsWith(n.v) || (!!r && r.startsWith(n.v))
              : n.v.test(i) || (!!r && n.v.test(r)))
          );
        }),
        (y = function (n) {
          var t,
            e = n.ut.pattern,
            u = _[e];
          return u
            ? (n.ot =
                u instanceof Promise
                  ? u.then(function (t) {
                      return (n.ot = t);
                    })
                  : u)
            : ((t = o.v(23, e)),
              (_[e] = n.ot =
                t.then(function (t) {
                  return (_[e] = n.ot = E(t));
                })));
        }),
        (E = function (n) {
          return 2 === n.t
            ? { t: n.t, v: n.v }
            : 3 === n.t
            ? { t: n.t, v: new URLPattern(n.v) }
            : { t: n.t, v: new RegExp(n.v, "") };
        }),
        (L = function () {
          var n,
            t,
            o,
            e = u.exclusions,
            i = e.rules,
            r = e.matchers;
          for (n = 0, t = i.length; n < t; n++)
            _["__proto__" !== (o = i[n].pattern) ? o : "_"] = E(r[n]);
        }),
        (U = function (n, t) {
          var o,
            e,
            u,
            c = "";
          for (o of t)
            if ((e = o.ot) && (2 === e.t ? i.startsWith(e.v) : e.v.test(i))) {
              if (
                0 === (u = o.ut.passKeys).length ||
                g ||
                ("^" === u[0] && u.length > 2)
              )
                return u;
              c += u;
            }
          return !c && n && i.lastIndexOf("://", 5) < 0 && !v.test(i) && r
            ? U(false, t)
            : c || null;
        }),
        (z = function () {
          a = 2 !== u.status ? "Disable" : "Enable";
          var n = o.$("#toggleOnce"),
            t = n.nextElementSibling;
          o.T(function () {
            (n.firstElementChild.textContent =
              (w(a) || a) + (null !== u.lock ? "" : w("Once"))),
              (n.onclick = T.bind(null, a)),
              (p.id = "state-value"),
              t.classList.toggle("hidden", null === u.lock),
              null !== u.lock &&
                (t.firstElementChild.onclick = T.bind(null, "Reset"));
          });
        }),
        (A = function (n) {
          var t = o.$(".options-link"),
            e = location.origin + "/pages/options.html";
          n.startsWith(e)
            ? o.T(function () {
                t.nextElementSibling.remove(), t.remove();
              })
            : (t.href !== e &&
                o.T(function () {
                  t.href = e;
                }),
              (t.onclick = function (n) {
                n.preventDefault(),
                  o.v(15, { u: e, p: true }).then(function () {
                    window.close();
                  });
              }));
        }),
        (M = function () {
          u.os ||
            window.addEventListener("keydown", function (n) {
              n.altKey &&
                (88 === n.keyCode || (null !== u.lock && 90 === n.keyCode)) &&
                !(n.shiftKey || n.ctrlKey || n.metaKey) &&
                (n.preventDefault(),
                n.stopImmediatePropagation(),
                T(88 === n.keyCode ? a : "Reset"));
            }),
            (s = new b(o.$("#exclusionRules"), function () {
              if (f) {
                f = false;
                var n = o.$("#helpSpan");
                n && ((n.nextElementSibling.style.display = ""), n.remove()),
                  d.removeAttribute("disabled"),
                  (d.firstChild.data = w("o115_2"));
              }
              R(c < 2);
            })).M();
        }),
        o.v(20).then(function (n) {
          var t, c;
          if (
            ((t = (u = n).url), (c = o.$("#blocked-msg")), o.m(1), !u.runnable)
          )
            return $(c), A(t), o.T(e.showI18n), void o.T(S);
          o.T(function (n) {
            c.remove(),
              (c = null),
              o.toggleReduceMotion(u.reduceMotion),
              (n.textContent = u.ver);
          }, o.$(".version")),
            (r = u.topUrl || t),
            (i = u.frameUrl || r),
            (g = u.exclusions.onlyFirst),
            (e.r.l = { exclusionRules: u.exclusions.defaults }),
            e.u({ exclusionRules: u.exclusions.rules }),
            L(),
            (u.exclusions = null),
            (d.onclick = x),
            document.addEventListener("keyup", function (n) {
              var t, o;
              13 === n.keyCode &&
                ((t = n.target) instanceof HTMLAnchorElement
                  ? t.hasAttribute("href") ||
                    setTimeout(
                      function (n) {
                        n.click(), n.blur();
                      },
                      0,
                      t
                    )
                  : (n.ctrlKey || n.metaKey) &&
                    (o = !f && x()) &&
                    o.then(function () {
                      setTimeout(window.close, 300);
                    }));
            }),
            A(t),
            z(),
            M(),
            o.T(e.showI18n),
            e.n && o.T(e.n),
            o.T(S);
        }),
        (S = function () {
          var n = document.documentElement;
          n.classList.remove("loading"),
            (n.style.width = ""),
            (n.style.height = "");
        }),
        ($ = function (n) {
          var t,
            e,
            i,
            r,
            c = u.url || "",
            f = document.body;
          (f.innerText = ""),
            (n.style.display = ""),
            (n.querySelector(".version").textContent = u.ver),
            (t = n.querySelector("#refresh-after-install")),
            u.tabId < 0 || !c || !/^(ht|s?f)tp/i.test(c)
              ? t.remove()
              : !o.sn &&
                (navigator.userAgentData
                  ? navigator.userAgentData.brands.find(function (n) {
                      return n.brand.includes("Opera") && n.version === o.dt;
                    })
                  : /\bOpera\//.test(navigator.userAgent)) &&
                /\.(google|bing|baidu)\./.test(
                  c.split("/", 4).slice(0, 3).join("/")
                ) &&
                (n.querySelector("#opera-warning").style.display = ""),
            f.appendChild(n),
            (e = u.unknownExt) &&
              (((i = o.$("#injection-refused")).style.display = ""),
              i.nextElementSibling.remove(),
              (o.$("#doAllowExt").onclick = function () {
                (this.onclick = null),
                  o.v(21, [u.tabId, e]).then(function () {
                    setTimeout(function () {
                      location.reload();
                    }, 0);
                  });
              })),
            (r = o.$("#retryInject")) &&
              (/^(file|ftps?|https?):/.test(c) && u.tabId >= 0
                ? (r.onclick = function (n) {
                    n.preventDefault(),
                      o.v(6, u.tabId).then(function () {
                        window.close();
                      });
                  })
                : (r.nextElementSibling.remove(), r.remove()));
        });
    }
  );
