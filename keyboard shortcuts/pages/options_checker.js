"use strict";
(__filename = "pages/options_checker.js"),
  define(
    ["require", "exports", "./async_bg", "./options_base", "./options_wnd"],
    function (t, n, r, e, s) {
      var i;
      for (i of (Object.defineProperty(n, "__esModule", { value: true }),
      (e.s.i.keyMappings.D = {
        $: 0,
        _t: null,
        z: function () {
          function t(t, n, r) {
            var e,
              s,
              i,
              u,
              c,
              o,
              a = "";
            if (
              (r.length > 2 &&
                ":" === r[r.length - 2] &&
                ((a = r.slice(-2)), (r = r.slice(0, -2))),
              (e = n.toLowerCase()),
              (s = r.length > 1),
              (i = e.includes("s-")),
              (u = r.toUpperCase()),
              !s)
            ) {
              if (!e) return t;
              if (i && e.length < 3)
                return a ? "<".concat(u).concat(a, ">") : u;
            }
            return (
              (c = r.toLowerCase()),
              (e = e.includes("v-")
                ? "v-"
                : (o = e).length < 4
                ? o
                : o.slice(0, -1).split("-").sort().join("-") + "-"),
              r !== c && !i && (e += "s-"),
              e || s || a ? "<".concat(e).concat(c).concat(a, ">") : r
            );
          }
          (this._t = function (n) {
            return n.replace(/<(?!<)((?:[ACMSVacmsv]-){0,4})(.[^>]*)>/g, t);
          }),
            (this.mt = this.mt.bind(this)),
            (this.gt = this.gt.bind(this)),
            (this.St = this.St.bind(this)),
            (this.z = null);
        },
        vt: function (t, n) {
          return n ? "\\u00" + n : "\\\\";
        },
        St: function (t, n, r, e) {
          var s, i;
          r
            ? ((r = r.replace(/\\(?:x([\da-z]{2})|\\)/gi, this.vt)),
              (n = '"'.concat(r, '"')))
            : e || "\\\\" !== n || (n = "\\"),
            (s = ""),
            n.startsWith("{") &&
              (s = n = n.replace(/([{,] ?)(\w+):/g, '$1"$2":'));
          try {
            if (
              "string" !=
              typeof (i = JSON.parse(
                n.includes("\\\r") ? n.replace(/\\\r/g, " ") : n
              ))
            )
              return true !== i ? (s ? "=" + s + e : t) : "";
            n = i;
          } catch (t) {
            r && (n = r);
          }
          return (
            "=" +
            (n =
              (n =
                n &&
                n.replace(/\\(\\|s)/g, function (t, n) {
                  return "s" === n ? " " : t;
                })) && JSON.stringify(n).replace(/\s/g, this.yt)) +
            e
          );
        },
        yt: function (t) {
          return "\\u" + (t.charCodeAt(0) + 1048576).toString(16).slice(2);
        },
        mt: function (t, n, r, e, s) {
          var i,
            u,
            c,
            o,
            a,
            h = this._t(e);
          return (
            h !== e &&
              (console.log("KeyMappings Checker:", e, "is corrected into", h),
              (e = h)),
            "mapkey" === r.toLowerCase()
              ? (c =
                  (u = (i = /^\S+/.exec(s.trimLeft())) && i[0]) &&
                  this._t(u)) !== u &&
                (console.log("KeyMappings Checker:", u, "is corrected into", c),
                (s = s.replace(u, c)))
              : r.startsWith("unmap") ||
                ((o = s.trimLeft().split(/\s/, 1)[0]) &&
                  ((a = s.indexOf(o) + o.length),
                  (e += s.slice(0, a)),
                  (s = s.slice(a)))),
            this.gt("", n, e, s)
          );
        },
        kt: function (t, n, r) {
          return n.replace("map", "mapKey") + (3 === r.length ? r[1] : r);
        },
        gt: function (t, n, r, e) {
          return (
            (e.includes("createTab") || e.includes("openUrl")) &&
              /^\s+(createTab|openUrl)\s/.test(e) &&
              !/\surls?=/i.test(e) &&
              (e = this.bt(e)),
            n +
              r +
              (e
                ? e.replace(/=("(\S*(?:\s[^=]*)?)"|[\S\r]+)(\s|$)/g, this.St)
                : "")
          );
        },
        bt: function (t) {
          var n,
            r = [];
          return (
            (t = (t + " ")
              .replace(
                /\s(\w+:[^=\s]+|[^\s=]+:\/\/\S+)(?=\s|$)/g,
                function (t, n) {
                  return r.push(n), "";
                }
              )
              .trimRight()) +
            ((n = r.length) > 1 ? " urls=" : n ? " url=" : "") +
            (n ? JSON.stringify(n > 1 ? r : r[0]) : "")
          );
        },
        H: function (t) {
          return t
            ? (this.z && this.z(),
              (t = (t = (t = (t = (t = t.replace(/\\\\?\n/g, function (t) {
                return 3 === t.length ? t : "\\\r";
              })).replace(
                /^([ \t]*(?:#\s?)?map\s+(?:<(?!<)(?:.-){0,4}.[\w:]*?>|\S)\s+)(<(?!<)(?:[ACMSVacmsv]-){0,4}.\w*?>|\S)(?=\s|$)/gm,
                this.kt
              )).replace(
                /^([ \t]*(?:#\s?)?(map(?:[kK]ey)?|run|unmap!?)\s+)(\S+)([^\n]*)/gm,
                this.mt
              )).replace(
                /^([ \t]*(?:#\s?)?(?:command|shortcut)\s+)(\S+)([^\n]*)/gm,
                this.gt
              ))
                .replace(/\\\r/g, "\\\n")
                .trim()))
            : t;
        },
      }),
      (e.s.i.searchUrl.D = {
        $: 0,
        H: function (t) {
          return r.v(14, t).then(function (t) {
            var n,
              r,
              s = e.s.i.searchUrl;
            return null == t
              ? s.R()
              : ((n = t[1]),
                t[0]
                  ? (s.wt(""), n)
                  : ((r = e.t("nonPlainURL", [n])),
                    console.log("searchUrl checker:", r),
                    s.wt(r),
                    s.R()));
          });
        },
      }),
      (e.s.i.newTabUrl.D = {
        $: 0,
        H: function (t) {
          return r
            .v(
              13,
              /^\/?pages\/[a-z]+.html\b/i.test(t)
                ? r.zt.runtime.getURL(t)
                : t.toLowerCase()
            )
            .then(function (n) {
              var r = n[0],
                s = n[1];
              return (
                (r = r.split("?", 1)[0].split("#", 1)[0]),
                t.startsWith("http") ||
                (1 !== s &&
                  !/^(?!http|s?ftp)[a-z\-]+:\/?\/?newtab\b\/?/i.test(t))
                  ? t
                  : e.r.l.newTabUrl
              );
            });
        },
      }),
      (e.s.i.vimSync.L = function () {
        var t, n, r, s;
        if (!this.N && true === this.E()) {
          for (r in ((n = 0), (t = e.s.i))) t[r].N || ++n;
          if (
            ((s = n > 1),
            setTimeout(
              alert,
              100,
              e.t(s ? "changedBeforeSync" : "warningForSync")
            ),
            s)
          )
            return false;
        }
        return true;
      }),
      (e.s.i.keyboard.D = {
        $: 0,
        H: function (t) {
          return null != t &&
            2 === t.length &&
            t[0] > 0 &&
            t[0] < 4e3 &&
            t[1] > 0 &&
            t[1] < 1e3
            ? [+t[0], t[1]]
            : e.r.l.keyboard;
        },
      }),
      r.$$("[data-check]")))
        i.removeEventListener(i.dataset.check || "input", s.loadChecker);
    }
  );
