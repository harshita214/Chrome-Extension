"use strict";
(__filename = "background/normalize_urls.js"),
  define(["require", "exports", "./store", "./utils"], function (e, r, t, n) {
    var i, a, u, s, o, l, f, c, m;
    Object.defineProperty(r, "__esModule", {
      value: true,
    }),
      (r.pe =
        r.we =
        r.be =
        r.he =
        r.ge =
        r.Ee =
        r.$e =
        r._e =
        r.ze =
        r.xe =
        r.Se =
        r.Ie =
        r.ye =
          void 0),
      (r.ye = /^([^:]+(:[^:]+)?@)?([^:]+|\[[^\]]+])(:\d{2,5})?$/),
      (r.Ie = /^(?:ext|web)\+[a-z]+:/),
      (r.Se = /^"[^"]*"$|^'[^']*'$|^\u201c[^\u201d]*\u201d$/),
      (r.xe = /\$([sS$])?(?:\{([^}]*)})?/g),
      (r.ze = /\$([+-]?\d+)/g),
      (i = ["blank", "newtab", "options", "show"]),
      (u = {
        __proto__: null,
        about: "",
        changelog: "/RELEASE-NOTES.md",
        help: "/wiki",
        home: "",
        license: "/LICENSE.txt",
        option: (a = "options.html"),
        permissions: "/PRIVACY-POLICY.md#permissions-required",
        policy: "/PRIVACY-POLICY.md",
        popup: a,
        preference: a,
        preferences: a,
        privacy: "/PRIVACY-POLICY.md#privacy-policy",
        profile: a,
        profiles: a,
        readme: "#readme",
        release: "/RELEASE-NOTES.md",
        releases: "/RELEASE-NOTES.md",
        "release-notes": "/RELEASE-NOTES.md",
        setting: a,
        settings: a,
        wiki: "/wiki",
      }),
      (r._e = 0),
      (r.$e = function (e, i, a) {
        var u, f, c, p, d, v, w, b, h;
        return (
          (e = e.trim()),
          (r._e = 0),
          n.Et(e)
            ? ((e = e.replace(/\xa0/g, " ")), n.Dt(), e)
            : ((u = -1),
              (f = 0),
              (c = false),
              (b =
                '"' ===
                  (v = e
                    .replace(/[\n\r]+[\t \xa0]*/g, "")
                    .replace(/\xa0/g, " "))[0] && v.endsWith('"')),
              (h = v),
              (e = v = b ? v.slice(1, -1) : v),
              /^[A-Za-z]:(?:[\\/](?![:*?"<>|/])|$)|^\/(?:Users|home|root)\/[^:*?"<>|/]+/.test(
                e
              ) ||
              (e.startsWith("\\\\") && e.length > 3)
                ? m(e)
                : ((p =
                    (e = v.toLowerCase()).indexOf(" ") + 1 ||
                    e.indexOf("\t") + 1) > 1 && (e = e.slice(0, p - 1)),
                  0 === (p = e.indexOf(":"))
                    ? (u = 4)
                    : -1 !== p && n.Zt.test(e)
                    ? e.startsWith("vimium:")
                      ? ((u = 3),
                        (a |= 0),
                        (e = v.slice(9)),
                        a < -1 || !e
                          ? (v = "vimium://" + e)
                          : -1 === a || b || !(v = t.P(e, a))
                          ? (v = r.ge(e, false, a))
                          : "string" != typeof v && (u = 5))
                      : r.Ie.test(e)
                      ? (u = 0)
                      : (
                          -1 === (d = e.indexOf("/", p + 3))
                            ? e.length < v.length
                            : e.charCodeAt(d + 1) < 33
                        )
                      ? (u = 4)
                      : /[^a-z]/.test(e.slice(0, p))
                      ? (u = (p = e.charCodeAt(p + 3)) > 32 && 47 !== p ? 0 : 4)
                      : e.startsWith("file:")
                      ? (u = 0)
                      : e.startsWith("chrome:")
                      ? (u = e.length < v.length && e.includes("/") ? 4 : 0)
                      : t.Xn && e.startsWith("read:")
                      ? (u =
                          !/^read:\/\/([a-z]+)_([.\da-z\-]+)(?:_(\d+))?\/\?url=\1%3a%2f%2f\2(%3a\3)?(%2f|$)/.test(
                            e
                          ) || e.length < v.length
                            ? 4
                            : 0)
                      : (e = e.slice(p + 3, d >= 0 ? d : void 0))
                    : (-1 !== p &&
                        e.lastIndexOf("/", p) < 0 &&
                        (u = l(v.toLowerCase(), p, e.length % v.length)),
                      (f = 2),
                      (d = v.length),
                      -1 === u &&
                        e.startsWith("//") &&
                        ((e = e.slice(2)), (f = 1), (d -= 2)),
                      -1 !== u
                        ? "about:blank/" === e && (v = "about:blank")
                        : (p = e.indexOf("/")) <= 0
                        ? (0 === p || e.length < d) && (u = 4)
                        : e.length >= d || e.charCodeAt(p + 1) > 32
                        ? ((c = e.length > p + 1), (e = e.slice(0, p)))
                        : (u = 4)),
                  -1 === u &&
                    e.lastIndexOf("%") >= 0 &&
                    (e = n.zt(e)).includes("/") &&
                    (u = 4),
                  -1 === u && e.startsWith(".") && (e = e.slice(1)),
                  -1 !== u ||
                    ((w = r.ye.exec(e))
                      ? (e = w[3]).endsWith("]")
                        ? (u = n.Ut(e, 6) ? f : 4)
                        : "localhost" === e ||
                          e.endsWith(".localhost") ||
                          n.Ut(e, 4) ||
                          (w[4] && c)
                        ? (u = f)
                        : (p = e.lastIndexOf(".")) < 0 ||
                          0 === (u = n.Lt(e.slice(p + 1)))
                        ? (p < 0 && "__proto__" === e && (e = "." + e),
                          (d = e.length - p - 1),
                          (u =
                            (2 !== f &&
                              (p < 0 ||
                                ((0 !== f
                                  ? d >= 3 && d <= 5
                                  : d >= 2 && d <= 14) &&
                                  !/[^a-z]/.test(e.slice(p + 1))))) ||
                            s(e, w[4]) > 0
                              ? f
                              : 4))
                        : (u = /[^.\da-z\-]|xn--|^-/.test(e)
                            ? e.startsWith("xn--") ||
                              e.includes(".xn--") ||
                              (e.length === p + 3 || 1 !== u ? !f : s(e, w[4]))
                              ? f
                              : 4
                            : 2 !== f || c
                            ? f
                            : e.endsWith(".so") &&
                              e.startsWith("lib") &&
                              e.indexOf(".") === e.length - 3
                            ? 4
                            : w[2] || w[4] || !w[1] || /^ftps?(\b|_)/.test(e)
                            ? 2
                            : e.startsWith("mail") ||
                              e.indexOf(".mail") > 0 ||
                              (d = e.indexOf(".")) === p
                            ? 4
                            : e.indexOf(".", ++d) !== p
                            ? 2
                            : e.length === p + 3 &&
                              1 === u &&
                              n.Lt(e.slice(d, p), true)
                            ? 4
                            : 2)
                      : ((u = 4),
                        e.length === v.length &&
                          n.Ut((e = "[".concat(e, "]")), 6) &&
                          ((v = e), (u = 2)))),
                  n.Dt(),
                  (r._e = u),
                  0 === u
                    ? /^extension:\/\//i.test(v)
                      ? "chrome-" + v
                      : v
                    : 4 === u
                    ? r.he(h.split(n.Bt), i || "~", a)
                    : u <= 2
                    ? (2 === u && o(v, e)) ||
                      (2 === s(e, w && w[4]) ? "https:" : "http:") +
                        (2 === u ? "//" : "") +
                        v
                    : v))
        );
      }),
      (s = function (e, r) {
        var n = (r && t.dn.it.get(e + r)) || t.dn.it.get(e);
        return n ? (n.Ae ? 2 : 1) : 0;
      }),
      (o = function (e, r) {
        if (
          /^(?!www\.)[a-z\d-]+\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2})\/?$/i.test(
            e
          ) &&
          !s(r)
        ) {
          var n = t.dn.it.get("www." + r);
          if (n)
            return ""
              .concat(n.Ae ? "https" : "http", "://www.")
              .concat(e.toLowerCase().replace("/", ""), "/");
        }
        return "";
      }),
      (l = function (e, t, i) {
        var a = "/" === e.substr(t + 1, 1);
        switch (e.slice(0, t)) {
          case "about":
            return a ? 4 : i > 0 || e.includes("@", t) ? -1 : 0;
          case "blob":
          case "view-source":
            return (e = e.slice(t + 1)).startsWith("blob:") ||
              e.startsWith("view-source:")
              ? 4
              : (r.$e(e, null, -2), r._e <= 2 ? 0 : 4);
          case "data":
            return a
              ? 4
              : (t = e.indexOf(",", t)) < 0 || (i > 0 && i < t)
              ? -1
              : 0;
          case "file":
            return 0;
          case "filesystem":
            return (
              (e = e.slice(t + 1)),
              n.Zt.test(e)
                ? (r.$e(e, null, -2),
                  0 === r._e && /[^/]\/(?:persistent|temporary)(?:\/|$)/.test(e)
                    ? 0
                    : 4)
                : 4
            );
          case "magnet":
            return "?" !== e[t + 1] ? -1 : 0;
          case "mailto":
            return a
              ? 4
              : (t = e.indexOf("/", t)) > 0 && e.lastIndexOf("?", t) < 0
              ? -1
              : 0;
          case "tel":
            return /\d/.test(e) ? 0 : 4;
          default:
            return r.Ie.test(e) ? 0 : a ? 4 : -1;
        }
      }),
      (r.Ee = function (e) {
        var r = e.startsWith("filesystem:")
          ? 11
          : e.startsWith("view-source:")
          ? 12
          : 0;
        return r ? e.slice(r) : e;
      }),
      (r.ge = function (e, r, n) {
        var a,
          s,
          o = "",
          l = "",
          f = e.trim();
        if (!f) return r ? "" : location.origin + "/pages/";
        if (
          ((a = f.indexOf(" ") + 1) &&
            ((l = f.slice(a).trim()), (f = f.slice(0, a - 1))),
          (a = f.search(/[\/#?]/) + 1) &&
            ((o = f.slice(a - 1).trim()), (f = f.slice(0, a - 1))),
          "display" === f && (f = "show"),
          !/\.\w+$/.test(f))
        )
          if (((f = f.toLowerCase()), null != (s = u[f])))
            ("release" === f || "releases" === f) &&
              (s += "#" + t.u.pt.replace(/\D/g, "")),
              (s = f =
                s && "/" !== s[0] && "#" !== s[0]
                  ? s
                  : t.u.bt + (s.includes(".") ? "/blob/master" + s : s));
          else {
            if ("newtab" === f) return t.newTabUrl_f;
            if ("/" === f[0] || i.indexOf(f) >= 0) f += ".html";
            else {
              if (1 === n || -1 === n) return "vimium://" + e.trim();
              f = "show.html#!url vimium://" + f;
            }
          }
        return (
          r ||
            (s && s.includes("://")) ||
            (f = location.origin + ("/" === f[0] ? "" : "/pages/") + f),
          o && (f += o),
          f + (l && (f.includes("#") ? " " : "#!") + l)
        );
      }),
      (r.he = function (e, n, i) {
        var a,
          u = t.Ln.map.get(n || e[0]);
        return (
          u
            ? (n || (n = e.shift()), (a = r.be(e, u.Ce, u.B)))
            : (a = e.join(" ")),
          "~" !== n ? r.$e(a, null, i) : ((r._e = 4), a)
        );
      }),
      (r.be = function (e, t, i, a) {
        var u,
          s = 0;
        return (
          (t =
            0 === e.length && i
              ? i
              : t.replace(r.xe, function (i, o, l, f) {
                  var c;
                  return i.endsWith("$")
                    ? "$"
                    : (o ||
                        (/^s:/i.test(l)
                          ? ((o = l[0]), (l = null == l ? void 0 : l.slice(2)))
                          : (o = "s")),
                      "S" === o
                        ? ((c = e), (o = " "))
                        : ((c = u || (u = e.map(n.k))),
                          (o = n.Et(t) ? "%20" : "+")),
                      0 === c.length
                        ? ""
                        : ((l =
                            l && l.includes("$")
                              ? l.replace(r.ze, function (e, r) {
                                  var t = parseInt(r, 10);
                                  if (!t) return c.join(o);
                                  if (t < 0) t += c.length + 1;
                                  else if ("+" === r[0])
                                    return c.slice(t - 1).join(o);
                                  return c[t - 1] || "";
                                })
                              : c.join(null != l ? l : o)),
                          null != a &&
                            (a.push((f += s), f + l.length),
                            (s += l.length - i.length)),
                          l));
                })),
          n.Dt(),
          null == a ? t : { Ce: t, Re: a }
        );
      }),
      (f = function (e) {
        var t,
          n,
          i = e.indexOf(":"),
          a = i;
        if (i <= 0) return e;
        if (r.Ie.test(e.slice(0, i + 1).toLowerCase()))
          return e.slice(0, i).toLowerCase() + e.slice(i);
        if ("://" === e.substr(i, 3))
          if ((i = e.indexOf("/", i + 3)) < 0) (i = a), (a = -1);
          else if (7 === i && "file" === e.slice(0, 4).toLowerCase())
            return (
              "file:///" +
              ((i =
                ":" === e.charAt(9)
                  ? 3
                  : "%3a" === e.substr(9, 3).toLowerCase()
                  ? 5
                  : 0)
                ? e[8].toUpperCase() + ":/"
                : "") +
              e.slice(i + 8)
            );
        return (
          (n = (t = e.slice(0, i)).toLowerCase()),
          -1 === a && /^(file|ftp|https?|rt[ms]p|wss?)$/.test(t) && (e += "/"),
          t !== n ? n + e.slice(i) : e
        );
      }),
      (r.we = f),
      (c = function (e) {
        var r = n.zt(e);
        return /[^\w.$+-\x80-\ufffd]|\s/.test(r) ? e.replace("%24", "$") : r;
      }),
      (m = function (e) {
        var r, t, i;
        return (
          (e = e.replace(/\\/g, "/")).startsWith("//") && !e.startsWith("//./")
            ? ((r = (e = e.slice(2)).split("/", 1)[0]).includes("%") &&
                (e = c(r) + e.slice(r.length)),
              e.includes("/") || (e += "/"))
            : (e.startsWith("//") && (e = e.slice(4)),
              ":" === e[1] && (e = e[0].toUpperCase() + ":/" + e.slice(3)),
              "/" !== e[0] && (e = "/" + e)),
          /[%?#&\s]/.test(e)
            ? ((t = ""),
              e.indexOf("#") &&
                ((i = /\.[A-Za-z\d]{1,4}(\?[^#]*)?#/.exec(e))
                  ? (t =
                      (t = e.slice(i.index + i[0].length - 1)).includes("=") ||
                      !t.includes("/") ||
                      t.includes(":~:")
                        ? i[1]
                          ? i[1] + t
                          : t
                        : "")
                  : (i = /#(\w+=|:~:)/.exec(e)) && (t = e.slice(i.index)),
                t && (e = e.slice(0, -t.length))),
              (e =
                "file://" +
                e.replace(/[?#&\s]/g, encodeURIComponent) +
                t.replace(/\s/g, encodeURIComponent)),
              n.Dt(),
              e)
            : (n.Dt(), "file://" + e)
        );
      }),
      (r.pe = function (e) {
        var r, n, i, a, u;
        if (2 === t.Tn.o && e.startsWith("file://")) {
          if ((r = e.indexOf("/", 7)) < 0 || r === e.length - 1)
            return r < 0 ? e + "/" : e;
          (n =
            7 === r
              ? ":" === e.charAt(9)
                ? 3
                : "%3a" === e.substr(9, 3).toLowerCase()
                ? 5
                : 0
              : 0),
            (e = n ? e[8].toUpperCase() + ":\\" + e.slice(n + 8) : e),
            !n && r > 7 && (e = "\\\\" + c(e.slice(7, r)) + e.slice(r)),
            (u = (a = (i = /[?#]/.exec(e)) ? i.index : 0) ? e.slice(a) : ""),
            (e = (e = a ? e.slice(0, a) : e).replace(/\/+/g, "\\")),
            (e = a ? e + u : e);
        }
        return e;
      });
  });
