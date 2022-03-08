"use strict";
(__filename = "pages/options_permissions.js"),
  define(
    ["require", "exports", "./async_bg", "./options_base", "./options_defs"],
    function (n, o, e, r, i) {
      var t, s, u, c, f, a, m, l, p, d, v, h, _, g, w, b, P, O, C;
      if (
        (Object.defineProperty(o, "__esModule", { value: true }),
        (o.rn = o.manifest = void 0),
        (s = e.zt.permissions),
        (u = function (n) {
          if (!s)
            return function () {
              return e.v(25, {
                module: "permissions",
                name: n,
                args: [].slice.call(arguments),
              });
            };
          var o = s[n];
          return function () {
            var n = [].slice.call(arguments);
            return new Promise(function (r) {
              n.push(function (n) {
                var o = e.zt.runtime.lastError;
                return r(o ? [void 0, o] : [n, void 0]), o;
              }),
                o.apply(s, n);
            });
          };
        }),
        (c = {
          contains: u("contains"),
          request: u("request"),
          remove: u("remove"),
        }),
        (f = "downloads.shelf"),
        (a = "chrome://new-tab-page/*"),
        ((t = {})[(m = "chrome://*/*")] = "opt_chromeUrl"),
        (t[a] = "opt_cNewtab"),
        (t[f] = "opt_closeShelf"),
        (l = t),
        (p = e.$("#optionalPermissionsTemplate")),
        (d = p.content.firstElementChild),
        (v = p.parentElement),
        (h = []),
        (o.manifest = e.zt.runtime.getManifest()),
        (_ = o.manifest.optional_permissions || []),
        (g = (function (n) {
          function o() {
            var o = (null !== n && n.apply(this, arguments)) || this;
            return (
              (o.E = function () {
                return h
                  .map(function (n) {
                    return n.x.checked ? (n.x.indeterminate ? "1" : "2") : "0";
                  })
                  .join("");
              }),
              (o.R = function () {
                return h
                  .map(function (n) {
                    return n.S;
                  })
                  .join("");
              }),
              o
            );
          }
          return (
            __extends(o, n),
            (o.prototype.z = function () {
              this.x.onchange = this.w;
            }),
            (o.prototype.K = function (n) {
              for (var o = 0; o < h.length; o++)
                (h[o].x.checked = "0" !== n[o]),
                  (h[o].x.indeterminate = "1" === n[o]);
            }),
            (o.prototype.F = function (n) {
              var o,
                t,
                s,
                u = this,
                l = [],
                p = [],
                d = {},
                v = 1,
                _ = function (o) {
                  var e,
                    t = h[o],
                    u = +n[o];
                  if (t.S === u) return "continue";
                  (e = t.in === a ? "chrome://newtab/*" : ""),
                    (t.S = u),
                    t.in === m &&
                      r.r.y("allBrowserUrls") !== (2 === u) &&
                      r.r.g("allBrowserUrls", 2 === u),
                    u
                      ? (t.in === f && l.push("downloads"),
                        (t.in.includes(":") ? p : l).push(t.in),
                        e && p.push(e),
                        (d[t.in] = t))
                      : (v++,
                        c
                          .remove(
                            t.in.includes(":")
                              ? { origins: e ? [t.in, e] : [t.in] }
                              : {
                                  permissions:
                                    t.in === f ? ["downloads", t.in] : [t.in],
                                }
                          )
                          .then(function (n) {
                            var o,
                              e = n[1],
                              r = "Can not remove the permission %o :",
                              u = (e && e.message) || e;
                            (e || !n[0]) && console.log(r, t.in, u),
                              (o = t.x.parentElement),
                              i.Ot.wt(
                                e ? r.replace("%o", t.in) + u : "",
                                void 0,
                                o
                              ),
                              s();
                          }));
                };
              for (o = 0; o < h.length; o++) _(o);
              return (
                (t = function (n, o) {
                  var t,
                    c,
                    f,
                    a = o[0],
                    m = o[1];
                  if (
                    ((m || !a) &&
                      console.log(
                        "Can not request permissions of %o :",
                        n,
                        (m && m.message) || m
                      ),
                    !a)
                  ) {
                    for (c of ((t = function (n) {
                      var o,
                        t,
                        s = d[n];
                      return s
                        ? ((s.S = 0),
                          (o = s.x.parentElement),
                          m
                            ? ((t =
                                ((m && m.message) || JSON.stringify(m)) + ""),
                              n.startsWith("chrome://") &&
                                t.includes(
                                  "Only permissions specified in the manifest"
                                ) &&
                                n.startsWith("chrome:") &&
                                ((t = r.t("optNeedChromeUrlFirst")),
                                (t = e.sn ? t.replace("chrome:", "edge:") : t)),
                              (t = r.t("exc") + t),
                              i.Ot.wt(t, void 0, o),
                              void e.T(function () {
                                o.title = t;
                              }))
                            : { value: i.Ot.wt("", void 0, o) })
                        : "continue";
                    }),
                    n))
                      if ("object" == typeof (f = t(c))) return f.value;
                    u.M();
                  }
                  s();
                }),
                (s = function () {
                  --v > 0 ||
                    Promise.all(h.map(b)).then(function () {
                      u.M();
                    });
                }),
                (v += (l.length && 1) + (p.length && 1)),
                l.length && c.request({ permissions: l }).then(t.bind(0, l)),
                p.length && c.request({ origins: p }).then(t.bind(0, p)),
                s(),
                Promise.resolve(n)
              );
            }),
            o
          );
        })(r.s)),
        (o.rn = g),
        i.registerClass("OptionalPermissions", g),
        (w = function () {
          var n,
            o,
            i,
            t,
            s,
            u,
            c,
            f = document.createDocumentFragment();
          for (o of ((n = 0), _))
            (t = (i = document.importNode(d, true)).querySelector("input")),
              (s = l[o]),
              (t.value = o),
              (u = r.t(s || "opt_".concat(o)) || o),
              (c = ""),
              o.startsWith("chrome:") &&
                ((u = e.sn ? u.replace("chrome:", "edge:") : u),
                (c = r
                  .t("optOfChromeUrl")
                  .replace(e.sn ? "chrome" : "edge", "edge"))),
              o === a &&
                e.dt < 80 &&
                ((c = r.t("requireChromium", [80])),
                (t.disabled = true),
                (t.checked = false),
                (i.title = r.t("invalidOption", [
                  r.t("beforeChromium", [80]),
                ]))),
              (i.lastElementChild.textContent = u + c),
              1 === _.length && i.classList.add("single"),
              f.appendChild(i),
              (h[n++].x = t);
          v.appendChild(f), v.addEventListener("change", P, true);
        }),
        (b = function (n) {
          var o,
            i = n.in,
            t = new Promise(function (n) {
              o = n;
            });
          return (
            c
              .contains(
                i.includes(":")
                  ? { origins: [i] }
                  : { permissions: i === f ? ["downloads", i] : [i] }
              )
              .then(function (t) {
                var s,
                  u = t[0];
                e.dt < 72 && "chrome://new-tab-page/*" === i && (u = false),
                  (s = u ? (n.in !== m || r.r.y("allBrowserUrls") ? 2 : 1) : 0),
                  (n.S = s),
                  o();
              }),
            t
          );
        }),
        (P = function (n) {
          var o,
            e,
            r,
            i,
            t = n.target,
            s = h.find(function (n) {
              return n.x === t;
            });
          s &&
            ((o = t.checked),
            (s.in !== m && s.in !== a) ||
              ((r = (e = s.in === a) ? m : a),
              (i = h.find(function (n) {
                return n.in === r;
              })) &&
                (e && o && !i.x.checked
                  ? (i.x.checked = i.x.indeterminate = true)
                  : !e && o && t.indeterminate
                  ? (t.indeterminate = false)
                  : ((i.x.checked = o), (i.x.indeterminate = false)))));
        }),
        (O = ["downloads"]),
        !e.sn || O.push(a),
        O.push("cookies"),
        (_ = _.filter(function (n) {
          return !O.some(function (o) {
            return "string" == typeof o ? n === o : o.test(n);
          });
        })).length)
      ) {
        for (C of _) h.push({ in: C, S: 0, x: null });
        e.T(w),
          Promise.all(h.map(b)).then(function () {
            e.T(function () {
              (v.dataset.model = "OptionalPermissions"),
                i.createNewOption(v).M();
            });
          });
      } else
        e.T(function () {
          e.$("#optionalPermissionsBox").style.display = "none";
        });
    }
  );
