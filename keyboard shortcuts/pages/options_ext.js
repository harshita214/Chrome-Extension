"use strict";
(__filename = "pages/options_ext.js"),
  define(
    [
      "require",
      "exports",
      "./async_bg",
      "./options_base",
      "./options_defs",
      "./options_permissions",
      "./options_wnd",
    ],
    function (n, e, o, t, i, r, l) {
      function s(n) {
        return new Date(+n - 6e4 * new Date().getTimezoneOffset())
          .toJSON()
          .slice(0, -5)
          .replace("T", " ");
      }
      function c(n, e) {
        return e && ("omniBlockList" === n || u(e))
          ? "$base64:" +
              btoa(
                encodeURIComponent(e).replace(
                  /%([0-9A-F]{2})/g,
                  function (n, e) {
                    return String.fromCharCode(parseInt(e, 16));
                  }
                )
              )
          : e;
      }
      function u(n) {
        var e, o;
        if (null == y) {
          for (o of ((e = []), t.r.y("omniBlockList").split("\n")))
            o.trim() && "#" !== o[0] && e.push(o);
          y =
            e.length > 0 &&
            new RegExp(
              e
                .map(function (n) {
                  return n.replace(/[$()*+.?\[\\\]\^{|}]/g, "\\$&");
                })
                .join("|"),
              ""
            );
        }
        return false !== y && y.test(n);
      }
      function a(n) {
        return (
          n instanceof Array && (n = n.join("\n").trimRight()),
          (n = n.replace(/\r\n?/g, "\n").replace(/\xa0/g, " ")).replace(
            /^\$base64:(.*)/gm,
            function (n, e) {
              try {
                return decodeURIComponent(
                  [].map
                    .call(atob(e), function (n) {
                      return (
                        "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
                      );
                    })
                    .join("")
                );
              } catch (n) {}
              return n;
            }
          )
        );
      }
      function f(n, e, c) {
        return __awaiter(this, void 0, void 0, function* () {
          var u,
            f,
            d,
            m,
            g,
            y,
            b,
            h,
            w,
            _,
            S,
            V,
            C,
            O,
            R,
            k,
            A,
            x = this,
            j = e.environment,
            L = (j && j.platform) || "",
            T = (j && j.extension && j.extension + "") || "",
            N = parseFloat(T || 0) || 0,
            B = N > 1 ? T.split(".", 2).join(".") : "",
            P = N > parseFloat(r.manifest.version);
          if (
            (L && (L = ("" + L).slice(0, 10)),
            confirm(
              t.t("confirmImport", [
                t.t(true !== c ? "backupFile" : "recommendedFile"),
                B ? t.t("fileVCVer").replace("*", B) : "",
                (B ? t.t("fileVCVer_2").replace("*", B) : "") +
                  (P ? t.t("fileVCNewer") : ""),
                L
                  ? t.t("filePlatform", [
                      t.t(L) || L[0].toUpperCase() + L.slice(1),
                    ])
                  : t.t("commonPlatform"),
                n ? t.t("atTime", [s(n)]) : t.t("before"),
              ])
            ))
          ) {
            for (w in ((u = new Date()),
            (f = v(u, false)),
            Object.setPrototypeOf(e, null),
            (d = e.chrome) && "object" == typeof d && Object.assign(e, d),
            null == e.vimSync &&
              ((g = (m = t.r.y("vimSync")) && confirm(t.t("keepSyncing"))),
              (e.vimSync = g || (null == m && null)),
              m &&
                console.log(
                  "Before importing: You chose to",
                  g ? "keep settings synced." : "stop syncing settings."
                )),
            (y = function (n, e, o, t) {
              var i = arguments.length > 3,
                r = i ? t : o,
                l = ["%s %c%s", n, "color:darkred", e];
              (r =
                "string" != typeof r || r.length <= 72
                  ? r
                  : r.slice(0, 71).trimRight() + " \u2026"),
                i && l.push(o),
                l.push(r),
                b++,
                console.log.apply(console, l);
            }),
            (b = 0),
            console.group("Import settings at " + s(+u + 1)),
            o.m(8),
            n > 1e4
              ? console.info(
                  "load settings saved at %c%s%c.",
                  "color:darkblue",
                  s(n),
                  "color:auto"
                )
              : console.info(
                  "load the settings:",
                  c ? "recommended." : "saved before."
                ),
            (h = function (n) {
              return n.split(/\s+/g).forEach(function (n) {
                return n && delete e[n];
              });
            })(
              "name time environment author description chrome firefox edge safari"
            ),
            e))
              "@" === w[0] && delete e[w];
            for (
              _ = function (n) {
                var o = e[n];
                "string" == typeof o &&
                  o.includes("extension://", 2) &&
                  (/^(chrome|edge)-/.test(o)
                    ? o.startsWith("edge-") &&
                      (e[n] = o.replace("edge-", "chrome-"))
                    : delete e[n]);
              },
                _("vomnibarPage"),
                _("newTabUrl"),
                S = localStorage,
                V = t.r.l,
                C = t.s.i,
                O = S.length;
              0 <= --O;

            )
              (w = S.key(O)).includes("|") || w in e || (e[w] = null);
            for (w in (h(
              "findModeRawQueryList innerCSS findCSS omniCSS newTabUrl_f vomnibarPage_f\n      focusNewTabContent dialogMode"
            ),
            (R = {
              __proto__: null,
              extWhiteList: "extAllowList",
              phraseBlacklist: "omniBlockList",
            })))
              w in e && ((e[R[w]] = e[w]), delete e[w]);
            e.vimSync !== t.r.y("vimSync") &&
              (y("import", "vimSync", e.vimSync),
              yield t.r.g("vimSync", e.vimSync),
              yield C.vimSync.M()),
              void 0 !== (k = C.keyMappings) &&
                (delete C.keyMappings, (C.keyMappings = k)),
              yield Promise.all(
                Object.values(C).map(function (n) {
                  return __awaiter(x, void 0, void 0, function* () {
                    var o = n.b,
                      i = e[o];
                    if ((delete e[o], o in V))
                      return (
                        null == i
                          ? (i = V[o])
                          : ("string" == typeof V[o] && (i = a(i)),
                            (i = yield n.j(i))),
                        n.B(yield n.R(), i)
                          ? n.N
                            ? void 0
                            : n.M()
                          : (y("import", o, i),
                            yield t.r.g(o, i),
                            o in t.r.k && t.s.G.push(o),
                            yield n.M(),
                            n.J())
                      );
                  });
                })
              ).catch(function (n) {
                y("[ERROR] importing options failed", "cause:", n);
              }),
              yield Promise.all(
                Object.keys(e).map(function (n) {
                  return __awaiter(x, void 0, void 0, function* () {
                    var o = e[n];
                    if (null == o) {
                      if (n in V) {
                        if (((o = V[n]), t.r.y(n) !== o))
                          return y("reset", n, o), t.r.g(n, o);
                      } else o = S.getItem(n);
                      if (null == S.getItem(n)) return;
                      return y("remove", n, ":=", o), S.removeItem(n);
                    }
                    return (
                      "string" == typeof V[n] && (o = a(o)),
                      n in V
                        ? t.r.y(n) !== o
                          ? (y("update", n, o), t.r.g(n, o))
                          : void 0
                        : (y("save", n, o), S.setItem(n, "" + o))
                    );
                  });
                })
              ).catch(function (n) {
                y("[ERROR] saving fields failed", "cause:", n);
              }),
              o.m(0, 8),
              yield 0,
              i.saveBtn.onclick(false),
              l.advancedOptBtn.getAttribute("aria-checked") !==
                "" + t.r.y("showAdvancedOptions") &&
                l.advancedOptBtn.onclick(null, true),
              b <= 0
                ? console.info("no differences found.")
                : f.options > 0 &&
                  console.info(
                    "[message] you may recover old configuration of "
                      .concat(
                        f.options,
                        " options, by open the blob: URL below IN THIS TAB:\n%c"
                      )
                      .concat(URL.createObjectURL(f.blob)),
                    "color: #15c;"
                  ),
              console.info("import settings: finished."),
              console.groupEnd(),
              (A = VApi && VApi.y().r) &&
                A.querySelector("#HCls") &&
                p("force"),
              VApi && VApi.t({ k: 1, t: t.t("importOK") });
          } else VApi && VApi.t({ k: 1, t: t.t("cancelImport") });
        });
      }
      function d(n, e, i) {
        var r,
          l,
          s,
          c,
          u,
          a = null,
          d = null,
          p = "";
        try {
          (r = m(i ? e : e.replace(/\xa0/g, " "))) instanceof Error
            ? (d = r)
            : r
            ? (a = r)
            : (p = t.t("notJSON"));
        } catch (n) {
          d = n;
        }
        return (
          null != d &&
            ((p = d
              ? (d.message || d) + ""
              : t.t("exc") + ("" !== d ? d : t.t("unknown"))),
            (p = (l = /^(\d+):(\d+)$/.exec(p))
              ? t.t("JSONParseError", [l[1], l[2]])
              : p)),
          a
            ? ((n = +new Date(a.time || ("object" == typeof n ? +n : n)) || 0),
              ("Vimium C" !== a.name && "Vimium++" !== a.name) ||
              (n < 1e4 && n > 0)
                ? ((p = t.t("notVCJSON")), alert(p))
                : ((s = t.s.i.keyMappings.D
                    ? Promise.resolve()
                    : o.import2("./options_checker.js")),
                  (c = n),
                  (u = a),
                  void s.then(function () {
                    setTimeout(f, 17, c, u, i);
                  })))
            : alert(p)
        );
      }
      function m(n) {
        function e() {
          return /a?/.test("");
        }
        function o(n) {
          for (var e = n.length; i.length < e; i += i);
          return i.slice(0, e);
        }
        var t, i, r, l, s, c, u;
        if (!n || !(n = n.trimRight())) return null;
        i = " ";
        try {
          return (
            (r = JSON.parse(
              n.replace(
                /"(?:\\[^\r\n]|[^"\\\r\n])*"|'(?:\\[^\r\n]|[^'\\\r\n])*'|(?:\/\/|#)[^\r\n]*|\/\*[^]*?\*\//g,
                function (n) {
                  var e = n[0];
                  return "/" === e || "#" === e
                    ? n.startsWith("/*")
                      ? n.replace(/[^\r\n]+/g, o)
                      : o(n)
                    : n;
                }
              )
            )),
            e(),
            r
          );
        } catch (n) {
          if (
            ((t = /\b(?:position (\d+)|line (\d+) column (\d+))/.exec(n + "")),
            e(),
            !t || !t[0])
          )
            throw n;
        }
        return (
          t[2]
            ? ((l = +t[2]), (s = +t[3]))
            : +t[1] > 0
            ? ((c = n.includes("\r")
                ? n.includes("\r\n")
                  ? "\r\n"
                  : "\r"
                : "\n"),
              (s =
                (u = n.slice(0, +t[1]).split(c))[(l = u.length) - 1].length +
                1))
            : (l = s = 1),
          new SyntaxError(l + ":" + s)
        );
      }
      var p, g, v, y, b, h, w;
      Object.defineProperty(e, "__esModule", { value: true }),
        (p = function (n) {
          if (VApi && VApi.z) {
            var e,
              t = VApi.y().r;
            if (
              (n && "force" !== n && n.preventDefault(),
              t &&
                (e = t.querySelector("#HCls")) &&
                "force" !== n &&
                null != t.querySelector(".HelpCommandName"))
            )
              return void o.simulateClick(e);
            VApi.r[0](
              37,
              { i: 1, q: [{ n: 24, q: null }] },
              !n && location.hash.length > 1
                ? function () {
                    var n = VApi && VApi.y(),
                      e = n && n.r && n.r.querySelector("#HDlg");
                    e &&
                      e.querySelector("#HCls").addEventListener(
                        "click",
                        function () {
                          location.hash = "";
                        },
                        true
                      );
                  }
                : function () {}
            );
          } else o.nn.then(p.bind(null, n));
        }),
        (o.$("#showCommands").onclick = p),
        (t.e.prototype.en = function (n) {
          var e, o, i, r, l, s;
          if (!n || !this.on) {
            for (l of ((o =
              /^([:^]?[a-z\-?*]+:\/\/)?((?:[^\/]|\/])+)(\/[^\]].*|\/?$)/),
            (e = this.E())))
              (r = o.exec((i = l.pattern.replace("(?:[^./]+\\.)*?", "*.")))) &&
                r[1] &&
                r[2] &&
                ((i = r[3] ? r[3].replace(/\\\./g, ".") : ""),
                (r = r[2].replace(/\\\./g, ".").split(".")).reverse(),
                (i = r.join(".") + i)),
                (l.tn = i);
            e.sort(function (n, e) {
              return n.tn < e.tn ? -1 : n.tn === e.tn ? 0 : 1;
            }),
              this.K(e),
              this.w(),
              n &&
                ((s = this),
                (this.on = setTimeout(
                  function (n, e) {
                    (n.firstChild.data = e), (s.on = 0);
                  },
                  1e3,
                  n,
                  n.firstChild.data
                )),
                (n.firstChild.data = t.t("o3_2")));
          }
        }),
        (o.$("#exclusionSortButton").onclick = function () {
          t.s.i.exclusionRules.en(this);
        }),
        (g = ""),
        window.addEventListener("unload", function () {
          g && URL.revokeObjectURL(g);
        }),
        (v = function (n, e) {
          var i,
            l,
            s,
            u,
            a,
            f,
            d,
            m,
            p = Object.create(null);
          for (
            p.name = "Vimium C",
              e || ((p["@time"] = n.toLocaleString()), (p.time = n.getTime())),
              p.environment = {
                extension: r.manifest.version,
                platform: t.r.c,
              },
              p.environment.chrome = o.dt,
              i = [],
              l = localStorage,
              s = t.r.l,
              u = 0,
              a = l.length;
            u < a;
            u++
          )
            (f = l.key(u)).includes("|") ||
              f.endsWith("_f") ||
              "findModeRawQueryList" === f ||
              f.endsWith("CSS") ||
              i.push(f);
          for (f of (i.sort(),
          (y = null),
          (d = function (n) {
            var e,
              o = l.getItem(n);
            "string" != typeof s[n]
              ? (p[n] = n in s ? t.r.y(n) : o)
              : o.includes("\n")
              ? (p[n] = o.split("\n")).push("")
              : (p[n] = o),
              "string" == typeof s[n] &&
                (p[n] =
                  "string" == typeof (e = p[n])
                    ? c(n, e)
                    : e.map(function (e) {
                        return c(n, e);
                      }));
          }),
          i))
            d(f);
          return (
            (y = null),
            (m = JSON.stringify(p, null, "\t") + "\n"),
            "win" === p.environment.platform && (m = m.replace(/\n/g, "\r\n")),
            {
              blob: new Blob([m], {
                type: "application/json",
                endings: "native",
              }),
              options: i.length,
            }
          );
        }),
        (i.exportBtn.onclick = function (n) {
          var e, t, i, r, l, c;
          g && (URL.revokeObjectURL(g), (g = "")),
            (e = new Date()),
            (i = v(
              e,
              (t = !!n && (n.ctrlKey || n.metaKey || n.shiftKey))
            ).blob),
            (r = s(e)),
            (l = "vimium_c-"),
            (l += t ? "settings" : r.replace(/[\-:]/g, "").replace(" ", "_")),
            (l += ".json"),
            ((c = document.createElement("a")).download = l),
            (c.href = URL.createObjectURL(i)),
            o.simulateClick(c),
            (g = c.href),
            console.info(
              "EXPORT settings to %c%s%c at %c%s%c.",
              "color:darkred",
              l,
              "color:auto",
              "color:darkblue",
              r,
              "color:auto"
            );
        }),
        (y = null),
        ((b = o.$("#settingsFile")).onclick = null),
        (b.onchange = function () {
          var n,
            e,
            o,
            i = this.files[0];
          (this.value = ""),
            i &&
              ((n = t.s.i.vimSync.S ? 102400 : 10485760),
              i.size && i.size > n
                ? alert(t.t("JSONTooLarge", [i.name, n / 1024]))
                : ((e = new FileReader()),
                  (o = i.lastModified || i.lastModifiedDate || 0),
                  (e.onload = function () {
                    return d(o, this.result, false);
                  }),
                  e.readAsText(i)));
        }),
        ((b = o.$("#importOptions")).onclick = null),
        (b.onchange = function () {
          o.$("#importButton").focus(),
            "exported" !== this.value
              ? o
                  .fetch("../settings-template.json")
                  .then(function (n) {
                    return n.text();
                  })
                  .then(function (n) {
                    return d(0, n, true);
                  })
              : o.simulateClick(o.$("#settingsFile"));
        }),
        (b = null),
        l.delayed_task &&
          ((w = l.delayed_task),
          l.clear_delayed_task(),
          (h = o.$(w[0])).onclick && h.onclick(w[1]));
    }
  );
