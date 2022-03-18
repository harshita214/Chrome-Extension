"use strict";
(__filename = "pages/show.js"),
  define(["require", "exports", "./async_bg"], function (n, e, t) {
    function i() {
      return __awaiter(this, void 0, void 0, function* () {
        var n, i, a, u, h, m, g, p, w, b, v, k, U, z;
        for (
          B && (y(), (E.style.display = "none"), B.remove(), (B = null)),
            VData = window.VData = Object.create(null),
            n = location.hash,
            i = "",
            a = "",
            N || (!n && S && (u = yield t.v(17)))
              ? ((n = N || u),
                (N = ""),
                /^[^:]+[ &]data:/i.test(n) && (V = -1),
                (h = j(
                  n,
                  (V =
                    V || Math.floor(4294967296 * Math.random()) || 3286711320),
                  true
                )),
                history.state
                  ? history.pushState(h, "", "")
                  : history.replaceState(h, "", ""),
                (window.name = "" + V))
              : n ||
                !history.state ||
                (V
                  ? ((n = j(history.state, V, false)), (window.name = "" + V))
                  : history.replaceState(null, "", "")),
            VData.full = n,
            n.length < 3 ||
              (n.startsWith("#!image")
                ? ((n = n.slice(7)), (i = "image"))
                : n.startsWith("#!url") && ((n = n.slice(5)), (i = "url"))),
            n = n.startsWith("%20") ? n.slice(3) : n.trim(),
            m = 0;
          (m = n.indexOf("&") + 1);
          n = n.slice(m)
        )
          if (
            ((p = (g = n.slice(0, m).indexOf("=")) > 0 ? n.slice(0, g) : ""),
            (w = g > 0 ? n.slice(g + 1, m - 1) : ""),
            "download" === p)
          )
            (a = (a = f(w)
              .split(/\||\uff5c| [-\xb7] /, 1)[0]
              .trim()).replace(/[\r\n"]/g, "")),
              (VData.file = a);
          else if (((w = w.toLowerCase()), "auto" === p))
            VData.auto =
              "once" === w
                ? w
                : "true" === w || ("false" !== w && parseInt(w, 10) > 0);
          else if ("pixel" === p) VData.pixel = "1" === w || "true" === w;
          else {
            if ("incognito" !== p) break;
            VData.incognito =
              "true" === w || ("false" !== w && parseInt(w, 10) > 0);
          }
        switch (
          ((n = f(
            n,
            n.includes(":") || n.includes("/") ? decodeURI : null
          ).trim())
            ? n.toLowerCase().startsWith("javascript:")
              ? (i = n = a = VData.file = "")
              : S
              ? (b = yield t.v(10, [n, -2]))[1] <= 2 && (n = b[0])
              : n.startsWith("//")
              ? (n = "http:" + n)
              : /^([-.\dA-Za-z]+|\[[\dA-Fa-f:]+])(:\d{2,5})?\//.test(n) &&
                (n = "http://" + n)
            : "image" === i && (i = ""),
          (VData.type = i),
          /^data:/i.test(n) && (n = "data:" + n.slice(5)),
          (VData.url = VData.original = n),
          i)
        ) {
          case "image":
            VData.auto &&
              (v = yield x(n)) &&
              (console.log("Auto predict a better URL:\n %o =>\n %o", n, v),
              (n = VData.url = v)),
              ((B = l("shownImage")).onerror = function () {
                VData.url !== VData.original && VData.url
                  ? I()
                  : (T(),
                    (VData.auto = false),
                    (this.onerror = this.onload = null),
                    (this.alt = VData.error = e.ln("failInLoading")),
                    t.dt >= 60 && this.classList.add("broken"),
                    setTimeout(r, 34),
                    (this.onclick = function (n) {
                      return __awaiter(this, void 0, void 0, function* () {
                        (S && (yield t.v(19, VData.url))) ||
                          (n.ctrlKey ||
                          n.shiftKey ||
                          n.altKey ||
                          !t.zt.tabs ||
                          !t.zt.tabs.update
                            ? o({ target: "_top" }, n)
                            : t.zt.tabs.update({ url: VData.url }));
                      });
                    }));
              }),
              /[:.]/.test(n)
                ? ((B.alt = e.ln("loading")),
                  (B.onclick = c),
                  (B.onload = function () {
                    var n,
                      e,
                      i,
                      o,
                      u,
                      f,
                      c,
                      s,
                      d,
                      h = this.naturalWidth,
                      m = this.naturalHeight;
                    if (h < 12 && m < 12) {
                      if (VData.auto) return void I();
                      if (h < 2 && m < 2)
                        return (
                          console.log("The image is too small to see."),
                          void this.onerror(null)
                        );
                    }
                    if (
                      ((VData.original = VData.url),
                      T(),
                      ((e = (n = VData.url
                        .slice(0, 6)
                        .toLowerCase()).startsWith("blob:")) ||
                        (n.startsWith("data:") &&
                          !this.src.startsWith("data"))) &&
                        ((E.dataset.vimUrl =
                          VData.original =
                          VData.url =
                            this.src),
                        L(e ? 0 : 1)),
                      (this.onerror = this.onload = null),
                      this.src.startsWith("blob:") ||
                        setTimeout(function () {
                          B.src = B.src;
                        }, 0),
                      r(),
                      (this.alt = a),
                      this.classList.add("zoom-in"),
                      VData.pixel &&
                        (C.classList.add("pixel"),
                        (i = devicePixelRatio),
                        h > innerWidth * i * 0.9 && m > innerHeight * i * 0.9))
                    ) {
                      for (
                        (o = l("snapshot-banner", true)).querySelector(
                          ".banner-close"
                        ).onclick = function () {
                          o.remove();
                        },
                          u = o.querySelectorAll("[data-i]"),
                          f = 0;
                        f < u.length;
                        f++
                      )
                        (s = (c = u[f].dataset.i).endsWith("-t")),
                          (d = t.a(s ? c.slice(0, -2) : c)) &&
                            (s ? (u[f].title = d) : (u[f].textContent = d));
                      C.insertBefore(o, C.firstChild);
                    }
                    h >= 0.9 * innerWidth && C.classList.add("filled");
                  }),
                  (k = yield X(n)),
                  R(n, B, k))
                : ((n = VData.url = ""),
                  B.onerror(null),
                  (B.alt = VData.error = e.ln("none"))),
              a &&
                ((VData.file = a = _(a) || a),
                (U = a.split(/[/\\]+/)).length > 1 &&
                  B.setAttribute("download", U[U.length - 1]),
                B.setAttribute("aria-title", a));
            break;
          case "url":
            if (((B = l("shownText")), n)) {
              if ("string" != typeof (z = yield t.v(16, n))) {
                d(z[1], z[0] || z[2] || "");
                break;
              }
              n = z;
            }
            d(i, (n = A(n) || n));
            break;
          default:
            (n = ""),
              ((B = l("shownImage")).src = "../icons/icon128.png"),
              (E.style.display = "none");
        }
        (E.dataset.vimUrl = n),
          a
            ? ((E.dataset.vimText = a), (E.download = a))
            : (E.removeAttribute("data-vim-text"),
              E.removeAttribute("download")),
          (E.onclick = B ? s : c);
      });
    }
    function r() {
      var n = B.scrollWidth;
      (E.style.height = B.scrollHeight + "px"),
        (E.style.width = n + "px"),
        (E.style.display = "");
    }
    function o(n, e) {
      var i, r;
      if ((e.preventDefault(), VData.url)) {
        for (r in ((i = document.createElement("a")),
        Object.setPrototypeOf(n, null),
        n))
          i.setAttribute(r, n[r]);
        (i.href = VData.url), t.simulateClick(i, e);
      }
    }
    function a(n) {
      var e, i, r, o, a, f, l;
      if (VData.error) return false;
      if (
        ((e = n.keyCode),
        "space" ===
          (r =
            (i =
              VApi && VApi.z
                ? VApi.r[3]({ c: " ", e: n, i: e }, 8)
                : 32 === e
                ? "space"
                : 13 === e
                ? "enter"
                : "").slice(i.lastIndexOf("-") + 1) ||
            (i && "-")) || "enter" === r)
      )
        return VData.pixel &&
          (a =
            (o = document.activeElement) &&
            document.querySelector("#snapshot-banner")) &&
          a.contains(o)
          ? ((f = a.querySelector(".banner-close")).contains(o) &&
              f.onclick(null),
            true)
          : (n.preventDefault(),
            "enter" === r && P && P.isShown && !P.hiding && !P.played
              ? P.play(true)
              : (P && P.isShown && !P.hiding) || t.simulateClick(B, n),
            true);
      switch (((l = 0), i)) {
        case "c-=":
        case "m-=":
        case "+":
        case "=":
        case "up":
          l = 1;
          break;
        case "left":
          l = -2;
          break;
        case "right":
          l = 2;
          break;
        case "c--":
        case "m--":
        case "-":
        case "down":
          l = -1;
          break;
        default:
          return false;
      }
      return (
        n.preventDefault(),
        n.stopImmediatePropagation(),
        P && P.viewed
          ? u(P, l)
          : ((q = false),
            b()
              .then(v)
              .then(function (n) {
                u(n, l);
              })
              .catch(w)),
        true
      );
    }
    function u(n, e) {
      2 === e || -2 === e ? n.rotate(45 * e) : n.zoom(e / 10, true);
    }
    function f(n, e) {
      try {
        n = (e || decodeURIComponent)(n);
      } catch (n) {}
      return n;
    }
    function l(n, e) {
      var i = t.$("#bodyTemplate"),
        r = document.importNode(i.content.querySelector("#" + n), true);
      return e || document.body.insertBefore(r, i), r;
    }
    function c(n) {
      if (n.altKey)
        return (
          n.stopImmediatePropagation(), o({ download: VData.file || "" }, n)
        );
      switch (VData.type) {
        case "url":
          o({ target: "_blank" }, n);
          break;
        case "image":
          if (VData.error) return;
          (q = n.ctrlKey || n.metaKey), b().then(v).catch(w);
      }
    }
    function s(n) {
      n.preventDefault(), B.onclick && B.onclick(n);
    }
    function d(n, i) {
      (n =
        "number" == typeof n
          ? [
              "math",
              "copy",
              "search",
              "ERROR",
              "status",
              "paste",
              "run",
              "url",
            ][n]
          : n),
        (t.$("#textTip").dataset.text = e.ln("t_".concat(n)) || n),
        (t.$(".colon").dataset.colon = e.ln("colon") + e.ln("NS"));
      var o = t.$("#textBody");
      return (
        i
          ? ((o.textContent = "string" != typeof i ? i.join(" ") : i),
            (B.onclick = h))
          : o.classList.add("null"),
        r()
      );
    }
    function h(n) {
      var e,
        i = getSelection(),
        r = "" + i;
      if (!r || ("image" === VData.type && r.trim() === B.alt.trim())) {
        if ("image" === VData.type && VData.url) {
          if ("Range" === i.type && !VData.url.startsWith(location.protocol))
            return;
          if ((n.preventDefault(), (e = navigator.clipboard) && e.write))
            return void (
              null != W
                ? Promise.resolve(W)
                : t
                    .fetch(VData.url, {
                      cache: "force-cache",
                      referrer: "no-referrer",
                    })
                    .then(function (n) {
                      return n.blob();
                    })
                    .catch(function () {
                      return m(VData.url), 0;
                    })
                    .then(function (n) {
                      return (W = n);
                    })
            )
              .then(function (n) {
                var i, r, o;
                if (n)
                  return (
                    (i = {
                      "image/png": new Blob([n], { type: "image/png" }),
                      "text/html": new Blob(),
                      "text/plain": new Blob([VData.url], {
                        type: "text/plain",
                      }),
                    }),
                    (r = function () {
                      return e.write([new ClipboardItem(i)]);
                    }),
                    t.dt < 86
                      ? r()
                      : (((o = document.createElement("img")).src = VData.url),
                        VData.file &&
                          o.setAttribute("aria-title", (o.alt = VData.file)),
                        (i["text/html"] = new Blob([o.outerHTML], {
                          type: "text/html",
                        })),
                        r().catch(function () {
                          return delete i["text/html"], r();
                        }))
                  );
              })
              .catch(function (n) {
                console.log(n), m(VData.url);
              });
        }
        m("url" === VData.type ? t.$("#textBody").textContent : VData.url, n);
      }
    }
    function m(n, e) {
      n && VApi && (e && e.preventDefault(), VApi.p({ H: 16, s: n }));
    }
    function g(n) {
      "image" === VData.type &&
        (VData.error || (P && P.isShown && !P.hiding)
          ? n.preventDefault()
          : B.classList.toggle("invert"));
    }
    function p(n) {
      if (!t.$('link[href="' + n + '"]')) {
        var e = document.createElement("link");
        (e.rel = "stylesheet"),
          (e.href = n),
          document.head.insertBefore(e, t.$('link[href$="show.css"]'));
      }
    }
    function w(n) {
      n && console.log("%o", n);
    }
    function b() {
      return $
        ? Promise.resolve($)
        : (p("../lib/viewer.min.css"),
          t.import2("../lib/viewer.min.js").then(function (n) {
            (n = n && "function" == typeof n ? n : window.Viewer).setDefaults({
              navbar: false,
              shown: function () {
                E.style.display = "none";
              },
              viewed: function () {
                H && H(true);
              },
              zoom: function (n) {
                var e, t, i, r, o, a;
                if (F) {
                  if (
                    ((o =
                      (i =
                        (t = P.imageData).naturalWidth * (e = n.detail.ratio)) -
                      t.width),
                    (a = (r = t.naturalHeight * e) - t.height),
                    1 === e)
                  )
                    (t.oldXY = [t.x, t.y]),
                      (t.x = ((innerWidth - i) / 2) | 0),
                      (t.y = ((innerHeight - r) / 2) | 0);
                  else {
                    if (!t.oldXY) return;
                    (t.x = t.oldXY[0]), (t.y = t.oldXY[1]);
                  }
                  (t.x += o / 2), (t.y += a / 2);
                }
              },
              hide: function () {
                (E.style.display = ""), H && H(false);
              },
            });
            var e = n.prototype,
              t = e.initImage,
              i = e.toggle;
            return (
              (e.initImage = function (n) {
                var e = [].slice.call(arguments);
                (e[0] = function () {
                  var e,
                    t,
                    i,
                    r,
                    o,
                    a,
                    u = P && P.imageData;
                  u &&
                    ((e = u.naturalWidth),
                    (t = u.naturalHeight),
                    (r = (i = !!document.webkitFullscreenElement)
                      ? window.screen.availWidth
                      : e),
                    (o = i ? window.screen.availHeight : t),
                    (i ? e >= r && t >= o : !q && u.ratio < 1) &&
                      ((a = i ? Math.max(r / e, o / t) : 1),
                      (u.left = u.x = i ? ((r - e * a) / 2) | 0 : 0),
                      (u.top = u.y = i ? ((o - t * a) / 2) | 0 : 0),
                      (u.width = Math.round(e * a)),
                      (u.height = Math.round(t * a)),
                      (u.ratio = a))),
                    n.apply(this, arguments);
                }),
                  t.apply(this, e);
              }),
              (e.toggle = function (n) {
                F = !(
                  n ||
                  !P ||
                  (1 === this.imageData.ratio && 1 === this.imageData.oldRatio)
                );
                var e = i.apply(this, arguments);
                return (F = false), e;
              }),
              ($ = n),
              n
            );
          }));
    }
    function v(n) {
      var e,
        t = scrollX || scrollY,
        i = getSelection();
      return (
        "Range" === i.type && i.collapseToStart(),
        ((e = P = P || new n(B)).scrollbarWidth = 0),
        e.hiding && (e.isShown = false),
        e.isShown || e.show(),
        (e.hiding = false),
        t && scrollTo(0, 0),
        e.viewed
          ? (e.zoomTo(1), e)
          : new Promise(function (n, t) {
              H = function (i) {
                (H = null), i ? n(e) : t("failed to view the image");
              };
            })
      );
    }
    function y() {
      if ((k(), (W = null), Z && (Z(), (Z = null)), "image" === VData.type)) {
        var n = document.body.classList;
        B.classList.remove("svg"),
          n.remove("pixel"),
          n.remove("filled"),
          B.removeAttribute("src"),
          (B.onerror = B.onload = null),
          P && (P.destroy(), (P = null));
      }
    }
    function x(n) {
      return __awaiter(this, void 0, void 0, function* () {
        function e(n) {
          try {
            return new URL(n);
          } catch (n) {}
          return null;
        }
        function i(n) {
          try {
            n = decodeURIComponent(n || "");
          } catch (n) {}
          return n;
        }
        var r,
          o,
          a,
          u,
          f,
          l,
          c,
          s,
          d,
          h,
          m,
          g,
          p,
          w,
          b,
          v,
          y = n;
        if (
          !(r = e((n = (S && (yield t.v(18, [n, 256]))) || n))) ||
          !/^(ht|s?f)tp/i.test(r.protocol)
        )
          return null;
        if (((o = r.origin), (a = r.pathname), (u = r.search).length > 10))
          for (f of u.slice(1).split("&")) {
            if (
              ((l = f.split("=", 1)[0]),
              (s = c = f.slice(l.length + 1)).length > 7)
            )
              if (
                (!s.includes("://") &&
                  /%(?:3[aA]|2[fF])/.test(s) &&
                  (s = i(s).trim()),
                s.includes("/") && null != e(s))
              ) {
                if (
                  /^(?:imgurl|mediaurl|objurl|origin(?:al)?|real\w*|src|url)$/i.test(
                    l
                  )
                )
                  return s;
                if (
                  ((d = s.split("?")[0].split("/")),
                  O.test(d[d.length - 1]) && !/\bthumb/i.test(l))
                )
                  return s;
              } else if ("id" === l && /&w=\d{2,4}&h=\d{2,4}/.test(u))
                return o + a + "?id=" + c;
            if (
              "name" === l &&
              /^(\d{2,4}x\d{2,4}|small)$/i.test(c) &&
              u.toLowerCase().includes("format=")
            )
              return o + a + u.replace(s, "large");
            if ("x-bce-process" === l && c.includes("image/resize"))
              return (
                o + a + ((u = u.replace(l + "=" + c, "")).length > 1 ? u : "")
              );
          }
        if (
          ((h = null),
          (h = /[?&]s=\d{2,4}(&|$)/.exec(u)) && u.split("=").length <= 3)
        )
          return o + a;
        if (
          ((m = (u = a).lastIndexOf("/") + 1),
          (w = null),
          (p =
            (g =
              (u = u.slice(m)).lastIndexOf("@") + 1 || u.lastIndexOf("!") + 1) >
              2 || O.test(u)))
        ) {
          for (
            m += g,
              u = u.slice(g),
              b =
                /(?:[.\-_]|\b)(?:[1-9]\d{2,3}[a-z]{1,3}[_\-]?|[1-9]\d?[a-z][_\-]?|0[a-z][_\-]?|[1-9]\d{1,3}[_\-]|[1-9]\d{1,2}(?=[.\-_]|\b)){2,6}(?=[.\-_]|\b)/gi;
            (w = b.exec(u));
            h = w
          );
          h && /.[_\-].|\d\dx\d/i.test(h[0])
            ? ((w = O.exec(u.slice(h.index + h[0].length))),
              (v = h[0].length),
              w && 0 === w.index && (v += w[0].length),
              (u = a.slice((m += h.index) + v)),
              /[@!]$/.test(u || a.charAt(m - 1))
                ? u
                  ? (u = u.slice(0, -1))
                  : m--
                : u ||
                  !w ||
                  0 !== w.index ||
                  O.test(a.slice(Math.max(0, m - 6), m)) ||
                  (u = w[0]))
            : (h =
                /\b([\da-f]{8,48})([_-](?:[a-z]{1,2}|\d{3,4}[whp]?))\.[a-z]{2,4}$/.exec(
                  u
                ))
            ? ((m += h.index + h[1].length),
              (u = u.slice(h.index + h[1].length + h[2].length)))
            : (p = false);
        }
        return (
          p || g > 2
            ? (p = p || 0)
            : (h = /_(0x)?[1-9]\d{2,3}([whp]|x0)?\./.exec(u))
            ? (u = u.slice(0, h.index) + u.slice(h.index + h[0].length - 1))
            : u.startsWith("thumb_")
            ? (u = u.slice(6))
            : /^[1-9]\d+$/.test(u) && +u > 0 && +u < 640
            ? (m--, (u = ""))
            : O.test(u) && /^\/(small|(thumb|mw|orj)[1-9]\d{2,3})\//.test(a)
            ? ((p = true), (u = "/large" + a.slice(a.indexOf("/", 1))), (m = 0))
            : (p = 0),
          0 !== p ? o + a.slice(0, m) + u : y !== n ? n : null
        );
      });
    }
    function _(n) {
      var e, t, i, r;
      if (n && !/.\.[a-z]{3,4}\b/i.test(n)) {
        if ((e = O.exec(VData.url))) return n + e[0];
        if ((t = W ? W.type.toLowerCase() : "").startsWith("image/"))
          for (r in (i = {
            jpeg: "jpg",
            png: 0,
            bmp: 0,
            svg: 0,
            gif: 0,
            tif: 0,
            ico: 0,
          }))
            if (i.hasOwnProperty(r) && t.includes(r)) return i[r] || "." + r;
      }
    }
    function R(n, i, r) {
      var o,
        a,
        u,
        f,
        l = new Text(),
        c = (Z = function () {
          i.removeEventListener("load", c),
            i.removeEventListener("error", c),
            clearTimeout(f),
            l.remove(),
            Z === c && (Z = null);
        });
      i.addEventListener("load", c, true),
        i.addEventListener("error", c, true),
        (a = (o = n.slice(0, 20).toLowerCase()).startsWith("blob:")),
        (u = o.startsWith("data:")) &&
          o.startsWith("data:image/svg+xml,") &&
          i.classList.add("svg"),
        r
          ? (i.src = n)
          : (k(),
            C.replaceChild(l, i),
            Promise.resolve(
              M[n] ||
                (t.dt < 48
                  ? new Promise(function (e, t) {
                      var i = new XMLHttpRequest();
                      (i.responseType = "blob"),
                        (i.onload = function () {
                          e(this.response);
                        }),
                        (i.onerror = function (n) {
                          t("Error: " + n.message);
                        }),
                        i.open("GET", n, true),
                        i.send();
                    })
                  : t
                      .fetch(
                        n,
                        a || u
                          ? {}
                          : { cache: "no-store", referrer: "no-referrer" }
                      )
                      .then(function (n) {
                        return n.blob();
                      }))
            )
              .then(
                function (e) {
                  return (M[n] = e), (G = URL.createObjectURL((W = e)));
                },
                function () {
                  return n;
                }
              )
              .then(function (n) {
                (i.src = n),
                  l.parentNode ? C.replaceChild(i, l) : C.appendChild(i);
              })),
        (f = setTimeout(function () {
          !i.parentNode || i.scrollHeight >= 24 || i.scrollWidth >= 80
            ? c()
            : l.parentNode ||
              (C.insertBefore(l, i), (l.data = e.ln("loading")));
        }, 400));
    }
    function k() {
      G && (URL.revokeObjectURL(G), (G = ""));
    }
    function A(n) {
      var e = n.split(":", 1)[0];
      switch (e.toLowerCase()) {
        case "thunder":
        case "flashget":
        case "qqdl":
          n = n.slice(e.length + 3).split("&", 1)[0];
          break;
        default:
          return "";
      }
      try {
        n = atob(n);
      } catch (n) {
        return "";
      }
      return (
        n.startsWith("AA") && n.endsWith("ZZ") && (n = n.slice(2, -2)),
        n.startsWith("[FLASHGET]") &&
          n.endsWith("[FLASHGET]") &&
          (n = n.slice(10, -10)),
        A(n) || n
      );
    }
    function I() {
      console.log(
        "Failed to visit the predicted URL, so go back to the original version."
      ),
        T(),
        (VData.auto = false),
        i();
    }
    function T() {
      var n = false;
      return (
        "once" === VData.auto && ((VData.auto = false), (n = true)), n && L(), n
      );
    }
    function L(n) {
      var e,
        t,
        i = VData.type;
      i &&
        ((e =
          "#!" +
          i +
          " " +
          (VData.incognito ? "incognito=1&" : "") +
          (VData.file ? "download=" + U(VData.file) + "&" : "") +
          (VData.auto
            ? "auto=" + ("once" === VData.auto ? "once" : 1) + "&"
            : "") +
          (VData.pixel ? "pixel=1&" : "") +
          VData.original),
        (VData.full = e),
        n || ((t = j(e, V, true)), history.replaceState(t, "", "")));
    }
    function U(n) {
      return n.replace(
        t.dt < 64 || false
          ? /[\x00-`{-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g
          : new RegExp("[^\\p{L}\\p{N}]+", "ug"),
        encodeURIComponent
      );
    }
    function j(n, e, t) {
      var i, r, o;
      if (-1 === e) return n;
      if (((i = []), t)) n = encodeURIComponent(n);
      else
        try {
          n = atob(n);
        } catch (e) {
          n = "";
        }
      for (r of n) i.push(r.charCodeAt(0));
      for (o = 0; o < i.length; o++)
        i[o] = 255 & (i[o] ^ (e >>> (8 * (3 & o))));
      if (((n = String.fromCharCode.apply(String, i)), t)) n = btoa(n);
      else
        try {
          n = decodeURIComponent(n);
        } catch (e) {
          n = "";
        }
      return n;
    }
    function z() {
      return VData && VData.full
        ? location.href.split("#", 1)[0] + VData.full
        : location.href;
    }
    var VData, S, M, C, $, B, E, H, P, V, q, F, O, G, W, Z, N, X;
    Object.defineProperty(e, "__esModule", { value: true }),
      (e.ln = void 0),
      (VData = null),
      (S = true),
      (M = {}),
      (C = document.body),
      (B = null),
      (E = t.$("#bgLink")),
      (H = null),
      (P = null),
      (V = +window.name || 0),
      (q = false),
      (F = false),
      (O = /\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)(?=[.\-_]|\b)/i),
      (G = ""),
      (W = null),
      (e.ln = function (n, e) {
        return t.a(n, e) || "";
      }),
      t.m(1),
      t.nn.then(function () {
        VApi.u = z;
      }),
      t.T(function () {
        (window.onhashchange = i),
          (window.onpopstate = i),
          i().then(function () {
            t.nn.then(t.an);
          });
      }),
      (window.onunload = k),
      (C.ondrop = function (n) {
        var e,
          t,
          r = n.dataTransfer.files;
        1 === r.length &&
          ((t = (e = r.item(0)).name),
          (e.type.startsWith("image/") || O.test(t)) &&
            (n.preventDefault(),
            (N = "#!image download=" + t + "&" + URL.createObjectURL(e)),
            i()));
      }),
      (C.ondragover = C.ondragenter =
        function (n) {
          var e = n.dataTransfer.items;
          1 === e.length &&
            e[0].type.startsWith("image/") &&
            n.preventDefault();
        }),
      document.addEventListener("keydown", function (n) {
        if (
          ("image" !== VData.type || !a(n)) &&
          (n.ctrlKey || n.metaKey) &&
          !n.altKey &&
          !n.shiftKey &&
          !n.repeat
        ) {
          var e = String.fromCharCode(n.keyCode);
          if ("S" === e) return o({ download: VData.file || "" }, n);
          if ("C" !== e) return "A" === e ? g(n) : void 0;
          h(n);
        }
      }),
      (X = function (n) {
        var e = n.slice(0, 20).toLowerCase();
        return (
          !(
            e.startsWith("blob:") ||
            (e.startsWith("data:") && n.length > 1e4)
          ) &&
          (!/^(ht|s?f)tp|^data:/.test(e) ||
            !("cache" in Request.prototype) ||
            (!VData.incognito && t.v(5, { key: "showInIncognito" })))
        );
      });
  });
