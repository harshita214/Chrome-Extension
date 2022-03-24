"use strict";
(__filename = "background/main.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./settings",
      "./ports",
      "./key_mappings",
      "./run_commands",
      "./normalize_urls",
      "./parse_urls",
      "./exclusions",
      "./ui_css",
      "./eval_urls",
      "./open_urls",
      "./all_commands",
      "./request_handlers",
      "./tools",
    ],
    function (n, o, t, e, i, r, u, s, a) {
      var c;
      Object.defineProperty(o, "__esModule", { value: true }),
        (e = __importStar(e)),
        (r = __importStar(r)),
        (c = function (n) {
          var o,
            e = t.Pn.get(t.jn);
          "quickNext" === n && (n = "nextTab"),
            (o = s.ca) && o.get(n)
              ? null == e || 4 & e.fr || t.jn < 0
                ? a.executeShortcut(n, e)
                : i.tabsGet(t.jn, function (o) {
                    return (
                      a.executeShortcut(
                        n,
                        o && "complete" === o.status ? t.Pn.get(o.id) : null
                      ),
                      i.ae()
                    );
                  })
              : o &&
                null !== o.get(n) &&
                (o.set(n, null),
                console.log("Shortcut %o has not been configured.", n));
        }),
        t.L(function () {
          if (3 === t.On) {
            if (t.Nn) return e.c(t.Nn), void t.L(null);
            t.pn || (r.Qe("keyMappings"), 0 === t.Tn.o && (s.Xt["m-s-c"] = 36)),
              r.Ve("hideHud", true),
              r.Ve("nextPatterns", true),
              r.Ve("previousPatterns", true),
              r.Qe("exclusionListenHash"),
              r.Qe("vomnibarOptions"),
              r.Qe("autoDarkMode"),
              r.Qe("autoReduceMotion"),
              i.me.runtime.onConnect.addListener(function (n) {
                return u.OnConnect(n, 0 | n.name);
              }),
              i.me.runtime.onConnectExternal.addListener(function (n) {
                var o,
                  e = n.sender,
                  i = n.name;
                if (
                  e &&
                  u.isExtIdAllowed(e) &&
                  i.startsWith("vimium-c.") &&
                  (o = i.split("@")).length > 1
                ) {
                  if (o[1] !== t.u.GitVer)
                    return n.postMessage({ N: 2, t: 1 }), void n.disconnect();
                  u.OnConnect(n, 32 | o[0].slice(9));
                } else n.disconnect();
              }),
              i.me.extension.isAllowedIncognitoAccess(function (o) {
                (t.u._t = false === o),
                  setTimeout(function () {
                    new Promise(function (o, t) {
                      n(["/background/others.js"], o, t);
                    }).then(__importStar),
                      setTimeout(function () {
                        new Promise(function (o, t) {
                          n(["/background/browsing_data_manager.js"], o, t);
                        }).then(__importStar),
                          new Promise(function (o, t) {
                            n(["/background/completion_utils.js"], o, t);
                          }).then(__importStar),
                          new Promise(function (o, t) {
                            n(["/background/completion.js"], o, t);
                          }).then(__importStar);
                      }, 200);
                  }, 200);
              });
          }
        }),
        i.me.commands.onCommand.addListener(c),
        r.Xe.then(function () {
          r.Qe("extAllowList"),
            i.me.runtime.onMessageExternal.addListener(function (n, o, e) {
              if (u.isExtIdAllowed(o))
                if ("string" != typeof n) {
                  if ("object" == typeof n && n)
                    switch (n.handler) {
                      case "shortcut":
                        var i = n.shortcut;
                        i && c(i + "");
                        break;
                      case "id":
                        e({
                          name: "Vimium C",
                          host: location.host,
                          shortcuts: true,
                          injector: t.u.dt,
                          version: t.u.pt,
                        });
                        break;
                      case 99:
                        e({
                          s: n.scripts ? t.u.mt : null,
                          version: t.u.pt,
                          host: "",
                          h: "@" + t.u.GitVer,
                        });
                        break;
                      case "command":
                        a.executeExternalCmd(n, o);
                    }
                } else a.executeExternalCmd({ command: n }, o);
              else e(false);
            }),
            r.Qe("vomnibarPage", null),
            r.Qe("searchUrl", null);
        }),
        i.ve.onReplaced.addListener(function (n, o) {
          var e,
            i = t.Pn.get(o);
          if (i) for (e of (t.Pn.delete(o), t.Pn.set(n, i), i.oo)) e.s.ur = n;
        }),
        (t.y._u = function (n, o, e) {
          setTimeout(function () {
            t.y._u(n, o, e);
          }, 210);
        }),
        t.T(2 | t.On),
        t.Nn(),
        (globalThis.onunload = function (n) {
          if (!n || n.isTrusted) {
            for (var o of t.kn) o.disconnect();
            t.Pn.forEach(function (n) {
              for (var o of n.oo.slice(0)) o.disconnect();
            });
          }
        }),
        globalThis.window || (globalThis.onclose = onunload),
        t.Wn < 59 || !e.m("\\p{L}", "u", 0)
          ? e.o("words.txt").then(function (n) {
              t.U(
                n
                  .replace(/[\n\r]/g, "")
                  .replace(/\\u(\w{4})/g, function (n, o) {
                    return String.fromCharCode(+("0x" + o));
                  })
              );
            })
          : t.U("");
    }
  );
