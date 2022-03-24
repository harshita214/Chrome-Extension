"use strict";
(__filename = "pages/options_wnd.js"),
  define(
    [
      "require",
      "exports",
      "./async_bg",
      "./options_base",
      "./options_defs",
      "./options_permissions",
    ],
    function (n, t, i, e, o, u) {
      var a, r, c, s;
      Object.defineProperty(t, "__esModule", { value: true }),
        (t.loadChecker =
          t.clear_delayed_task =
          t.advancedOptBtn =
          t.delayed_task =
            void 0),
        (t.advancedOptBtn = i.$("#advancedOptionsButton")),
        (a = false),
        (r = function () {
          t.delayed_task = null;
        }),
        (t.clear_delayed_task = r),
        i.m(8),
        i.T(e.showI18n),
        e.n && i.T(e.n),
        i.T(function (n) {
          n.textContent = u.manifest.version_name || u.manifest.version;
        }, i.$(".version")),
        (o.saveBtn.onclick = function (n) {
          if (false === n) {
            var t = e.s.G;
            (e.s.G = []),
              (o.saveBtn.disabled = true),
              (o.saveBtn.firstChild.data = e.t("o115_3")),
              (o.exportBtn.disabled = false),
              o.savedStatus(false),
              (window.onbeforeunload = null),
              0 !== t.length &&
                setTimeout(
                  function (n) {
                    i.v(
                      4,
                      n.map(function (n) {
                        return e.r.k[n];
                      })
                    );
                  },
                  100,
                  t
                );
          } else
            e.s.Et().then(function (n) {
              n && o.saveBtn.onclick(false);
            });
        }),
        (c = function () {
          var n, r, c, s, f, l, d;
          for (c in ((t.advancedOptBtn.onclick = function (n, t) {
            var o = this,
              u = i.$("#advancedOptions"),
              r = null,
              c = function () {
                return (r = e.r.y("showAdvancedOptions"));
              };
            null != n || ("hash" === t && false === c())
              ? e.r.g("showAdvancedOptions", (a = !a))
              : (a = null != r ? r : c()),
              i.T(function () {
                u.previousElementSibling.style.display = u.style.display = a
                  ? ""
                  : "none";
                var n = a ? "Hide" : "Show";
                (o.firstChild.data = e.t(n) || n),
                  o.setAttribute("aria-checked", "" + a);
              }, 9);
          }),
          t.advancedOptBtn.onclick(null, true),
          (e.s.C = false),
          e.s.i))
            e.s.i[c].M();
          for (
            e.s.i.exclusionRules.S.length > 0 &&
              i.T(function (n) {
                n.style.visibility = "";
              }, i.$("#exclusionToolbar")),
              s = (r = i.$$("[data-check]")).length;
            0 <= --s;

          )
            (n = r[s]).addEventListener(
              n.dataset.check || "input",
              t.loadChecker
            );
          for (
            document.addEventListener("keyup", function (n) {
              var t = n.target,
                e = n.keyCode;
              if (13 === e) {
                if (t instanceof HTMLAnchorElement)
                  t.hasAttribute("href") ||
                    setTimeout(
                      function (n) {
                        i.simulateClick(n), n.blur();
                      },
                      0,
                      t
                    );
                else if (
                  (n.ctrlKey || n.metaKey) &&
                  (t.blur && t.blur(), o.savedStatus())
                )
                  return o.saveBtn.onclick();
              } else {
                if (32 !== e) return;
                t instanceof HTMLSpanElement &&
                  t.parentElement instanceof HTMLLabelElement &&
                  (n.preventDefault(),
                  i.simulateClick(t.parentElement.control));
              }
            }),
              f = function () {
                var n,
                  t,
                  e = i.$("#" + this.dataset.autoResize),
                  o = e.scrollHeight,
                  u = e.scrollWidth,
                  a = u - e.clientWidth;
                (o <= e.clientHeight && a <= 0) ||
                  ((n = Math.max(Math.min(innerWidth, 1024) - 120, 550)),
                  (e.style.maxWidth = u > n ? n + "px" : ""),
                  (e.style.height = e.style.width = ""),
                  (t = e.offsetHeight - e.clientHeight),
                  (o += t =
                    (a = u - e.clientWidth) > 0 ? Math.max(26, t) : t + 18),
                  a > 0 && (e.style.width = e.offsetWidth + a + 4 + "px"),
                  (e.style.height = o + "px"));
              },
              s = (r = i.$$("[data-auto-resize]")).length;
            0 <= --s;

          )
            r[s].onclick = f;
          for (
            f = function (n) {
              var e = this.dataset.delay,
                o = null;
              "continue" !== e && n && n.preventDefault(),
                "event" === e && (o = n || null),
                (t.delayed_task = ["#" + this.id, o]),
                "complete" !== document.readyState
                  ? window.addEventListener("load", function n(t) {
                      t.target === document &&
                        (window.removeEventListener("load", n),
                        i.import2("./options_ext.js"));
                    })
                  : i.import2("./options_ext.js");
            },
              s = (r = i.$$("[data-delay]")).length;
            0 <= --s;

          )
            r[s].onclick = f;
          if (i.dt < 53)
            for (
              f = function (n) {
                n.target === this &&
                  (n.preventDefault(), getSelection().selectAllChildren(this));
              },
                s = (r = i.$$(".sel-all")).length;
              0 <= --s;

            )
              r[s].onmousedown = f;
          for (
            (r = i.$$("[data-permission]")).length > 0 &&
              (function (n) {
                function t() {
                  var n,
                    t = this.querySelector("[data-permission]");
                  (this.onclick = null),
                    t &&
                      (t.placeholder = e.t("lackPermission", [
                        (n = t.dataset.permission) ? ': "'.concat(n, '"') : "",
                      ]));
                }
                var o,
                  a = u.manifest.permissions || [],
                  r = function (o) {
                    var r,
                      c,
                      s = n[o],
                      f = s.dataset.permission;
                    if ("C" === f[0]) {
                      if (i.dt >= parseInt(f.slice(1))) return "continue";
                      if (
                        "." === (c = f.split(",", 2)[1] || ",")[0]
                          ? null != window[c.slice(1)]
                          : "(" === c[0] && matchMedia(c.slice(1, -1))
                      )
                        return "continue";
                      r = ["beforeChromium", [f.slice(1).split(",", 1)[0]]];
                    } else {
                      if ((f in u.manifest) || a.includes(f)) return "continue";
                      r = ["lackPermission", [f ? ":\n* " + f : ""]];
                    }
                    i.T(function (n) {
                      n.disabled = true;
                      var i = e.t("invalidOption", [e.t(r[0], r[1])]);
                      n instanceof HTMLInputElement && "checkbox" === n.type
                        ? ((n.nextElementSibling.tabIndex = -1),
                          ((n = n.parentElement).title = i))
                        : ((n.value = ""),
                          (n.title = i),
                          (n.parentElement.onclick = t),
                          n instanceof HTMLSpanElement &&
                            (n.style.textDecoration = "line-through"));
                    }, s);
                  };
                for (o = n.length; 0 <= --o; ) r(o);
              })(r),
              i.T(function () {
                setTimeout(function () {
                  var n,
                    t = i.$$("[data-href]"),
                    e = function (n) {
                      var e = t[n];
                      i.v(10, [e.dataset.href, -1]).then(function (n) {
                        var t = n[0];
                        e.removeAttribute("data-href"), (e.href = t);
                      });
                    };
                  for (n = t.length; 0 <= --n; ) e(n);
                  i.v(12).then(function (n) {
                    "?" !== n &&
                      i.T(
                        function (n) {
                          return (n[0].textContent = n[1]);
                        },
                        [i.$("#questionShortcut"), n]
                      );
                  });
                }, 100);
              }),
              n = i.$("#openExtensionsPage"),
              i.dt < 65 &&
                i.T(function (n) {
                  n.href = "chrome://extensions/configureCommands";
                }, n),
              n.onclick = function (n) {
                n.preventDefault(), i.v(15, { u: this.href, p: true });
              },
              i.T(function (n) {
                var t = n.children[1],
                  i = e.t("NewTabAdapter");
                t.title = i + " - " + e.t("webstore");
              }, i.$("#chromeExtVomnibar")),
              r = i.$$(".ref-text"),
              l = function (n) {
                a || i.$("#advancedOptionsButton").onclick(null),
                  n.preventDefault();
                var t = e.s.i[this.getAttribute("for")].x.nextElementSibling;
                i.dt < 61
                  ? t.scrollIntoViewIfNeeded()
                  : t.scrollIntoView({ block: "center" }),
                  t.focus(),
                  VApi && VApi.x(t.parentElement.parentElement);
              },
              d = function (n) {
                var t = e.s.i[r[n].getAttribute("for")],
                  o = t.J;
                (t.J = function () {
                  return (
                    i.T(function (n) {
                      n.textContent = e.t(t.E() > 1 ? "o145_2" : "o144");
                    }, i.$("#".concat(t.x.id, "Status"))),
                    o.call(t)
                  );
                }),
                  (r[n].onclick = l),
                  t.x.addEventListener("change", t.J, true);
              },
              s = r.length;
            0 <= --s;

          )
            d(s);
        }),
        (s = function () {
          var n, t, u, a, r;
          for (n in (c(),
          (c = s = null),
          e.r.f ||
            i.T(function (n) {
              n.textContent = "Cmd";
            }, i.$("#Ctrl")),
          e.s.i))
            e.s.i[n].J();
          i.T(function () {
            document.documentElement.classList.remove("loading");
          }),
            i.nn.then(i.an),
            location.hash && i.T(window.onhashchange),
            i.m(0, 8),
            (e.s.i.keyMappings.J = function () {
              return i.v(7).then(o.onKeyMappingsError);
            }),
            (t = matchMedia("(prefers-color-scheme: dark)")),
            (u = function () {
              a.N && i.v(11), setTimeout(r, 34);
            }),
            (r = function () {
              var n,
                e,
                o,
                u,
                r,
                c,
                s = a.E(),
                f = 2 === s ? !!t && t.matches : 1 === s;
              if (VApi && VApi.z) {
                if ((n = VApi.y().r))
                  for (e of i.dt < 51 ? [].slice.call(n.children) : n.children)
                    "style" !== e.localName &&
                      (e.classList.toggle("D", f),
                      "iframe" === (e = e.firstElementChild || e).localName &&
                        ((o = e.classList.contains("Find")),
                        (r = (u = e.contentDocument).querySelector(
                          "style#dark"
                        )) &&
                          r.sheet &&
                          (r.sheet.disabled = !f),
                        u.body.classList.toggle(o ? "D" : "has-dark", f),
                        o &&
                          (c = VApi.y().f) &&
                          c.parentElement.classList.toggle("D", f)));
                i.v(3, { key: "d", val: f }).then(function (n) {
                  VApi.z.d = n;
                });
              }
              i.toggleDark(f ? (2 === s ? 2 : 1) : 0);
            }),
            ((a = e.s.i.autoDarkMode).J = u),
            i.dt > 75
              ? i.T(function () {
                  2 === a.S && i.nn.then(u), (t.onchange = u);
                })
              : (t = null);
        }),
        e.s.i.userDefinedCss.x.addEventListener(
          "input",
          e.o(
            function () {
              var n,
                t,
                o,
                u,
                a,
                r = e.s.i.userDefinedCss,
                c = r.x.classList.contains("debugging");
              (!r.N || c) &&
                VApi &&
                VApi.z &&
                ((n = r.E()),
                (t = n === r.S),
                (o = i.v(8, [n, i.fn])),
                (u = VApi.y()),
                (a = u.r),
                o.then(function (n) {
                  var i, o, u;
                  r.x.classList.toggle("debugging", !t),
                    VApi.t({
                      k: a || t ? 0 : 1,
                      t: e.t("livePreview") || "Live preview CSS\u2026",
                      H: n.ui,
                      f: n.find,
                    }),
                    (o =
                      (i = a && a.querySelector("iframe.Omnibar")) &&
                      i.contentDocument) &&
                      ((u =
                        o.querySelector("style.debugged") ||
                        o.querySelector("style#custom")) ||
                        (((u = o.createElement("style")).type = "text/css"),
                        (u.id = "custom")),
                      u.parentNode || o.head.appendChild(u),
                      u.classList.add("debugged"),
                      (u.textContent =
                        (t ? "\n" : "\n.transparent { opacity: 1; }\n") +
                        ((n.omni && n.omni + "\n") || "")));
                }));
            },
            1200,
            null,
            0
          )
        ),
        (i.$("#importButton").onclick = function () {
          var n = i.$("#importOptions");
          n.onchange ? n.onchange(null) : i.simulateClick(i.$("#settingsFile"));
        }),
        i.T(function (n) {
          var t,
            o = e.r.c,
            u = navigator.userAgentData,
            a = ((u && u.brands) || []).find(function (n) {
              return n.version === i.dt && "Chromium" !== n.brand;
            }),
            r = i.sn ? "MS Edge" : "",
            c = a
              ? a.brand
              : u
              ? r || "Chromium"
              : (/\bChromium\b/.exec(navigator.userAgent) || [""])[0] ||
                r ||
                "Chrome";
          (n.textContent =
            c +
            " " +
            i.dt +
            e.t("comma") +
            e.t("NS") +
            (e.t(o) || o[0].toUpperCase() + o.slice(1))),
            i.sn &&
              ((t = i.$("#openExtensionsPage")).textContent = t.href =
                "edge://extensions/shortcuts");
        }, i.$("#browserName")),
        (t.loadChecker = function () {
          i.import2("./options_checker.js");
        }),
        document.addEventListener("keydown", function (n) {
          var t, e, o, u, a;
          if (32 === n.keyCode)
            "span" === (a = n.target).localName &&
              "label" === a.parentElement.localName &&
              n.preventDefault();
          else {
            if (
              !VApi ||
              !VApi.z ||
              "input textarea".includes(document.activeElement.localName)
            )
              return;
            "a-f12" === (t = VApi.r[3]({ c: " ", e: n, i: n.keyCode }, 9))
              ? ((e = i.$("#importOptions")),
                (o = e.selectedIndex),
                (u = function () {
                  e.onchange && e.onchange(null), (e.selectedIndex = o);
                }),
                (i.$("#recommendedSettings").selected = true),
                null != e.onchange ? u() : setTimeout(u, 100) && e.click())
              : "?" === t && i.$("#showCommands").click();
          }
        }),
        (window.onhashchange = function () {
          var n,
            t,
            e = location.hash;
          if (
            (e = e.slice("!" === e[1] ? 2 : 1)) &&
            /^[a-z][a-z\d_-]*$/i.test(e)
          )
            if ((n = i.$('[data-hash="'.concat(e, '"]'))))
              n.onclick && n.onclick(null, "hash");
            else if ((n = i.$("#" + e))) {
              if (
                (n.dataset.model && n.classList.add("highlight"),
                (t = function (t) {
                  (t && t.target !== window) ||
                    (window.onload &&
                      ((window.onload = null), window.scrollTo(0, 0)),
                    n.scrollIntoViewIfNeeded());
                }),
                "complete" === document.readyState)
              )
                return t();
              window.scrollTo(0, 0), (window.onload = t);
            }
        }),
        e.r.d().then(s),
        document.addEventListener(
          "click",
          function n() {
            var t = VApi,
              e = t && t.y();
            e &&
              e.r &&
              (document.removeEventListener("click", n, true),
              e.r.addEventListener(
                "click",
                function (n) {
                  var t,
                    i = n.target;
                  VApi &&
                    i.classList.contains("HelpCommandName") &&
                    ((t = i.textContent.slice(1, -1)), VApi.p({ H: 16, s: t }));
                },
                true
              ),
              document.addEventListener("click", function (n) {
                var t, e, o, u;
                "a" !== n.target.localName ||
                  (!n.ctrlKey && !n.metaKey) ||
                  i.fn < -1 ||
                  ((o = (e = (t = VApi) && t.b) && e.$()) &&
                    o.b &&
                    null === o.n &&
                    (u = -17 & o.m) < 32 &&
                    2 & u &&
                    !(1 & u) &&
                    setTimeout(function () {
                      i.fn >= 0 &&
                        (i.zt.tabs
                          ? i.zt.tabs.update(
                              i.fn,
                              { active: true },
                              function () {}
                            )
                          : i.v(25, {
                              module: "tabs",
                              name: "update",
                              args: [i.fn, { active: true }],
                            }));
                    }, 0));
              }));
          },
          true
        );
    }
  );
