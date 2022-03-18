"use strict";
"object" == typeof VApi && VApi && "function" == typeof VApi.d && VApi.d(1);
var e = e || "",
  t = t || "",
  n = {
    g: 0,
    y: function (e) {
      var t, r, i, a, u, l, s, c, f;
      return (
        o.I(e),
        ((t = n).T.o = (e.mode || "") + "" || "omni"),
        (t.T.t = 0),
        t.M(2, !!e.currentWindow),
        t.M(4, (e.preferTabs || "").includes("new")),
        t.M(128, "from-start" === e.tree),
        t.M(8, !!e.tree),
        t.M(16, null),
        t.M(32, null),
        t.M(256, !!e.noTabs),
        t.M(512, !!e.hiddenTabs),
        t.M(2048, !!e.incognitoTabs),
        (t.S = e.incognito),
        t.M(1024, !!e.noSessions),
        (r = e.engines) instanceof Array && (r = r.join()),
        "string" == typeof r &&
          r &&
          (r =
            (r.includes("bookmark") ? 1 : 0) +
            (r.includes("history") ? 2 : 0) +
            (r.includes("tab") ? 4 : 0) +
            (r.includes("search") ? 8 : 0) +
            (r.includes("domain") ? 16 : 0)),
        (t.T.e = 0 | (r || 0)),
        t.T.e && (t.T.o = "omni"),
        (t.x = !!e.icase),
        (t.A = !!e.newtab),
        (t.C = e.autoSelect),
        (t.R = e.position),
        (t.O = false === e.searchInput),
        (t.E = null),
        (t.U = "start" === e.noSessions),
        (t.L = ("object" == typeof (i = e.sed) && i) || {
          r: i,
          k: e.sedKeys || e.sedKey,
        }),
        (t.F = e.clickLike),
        (t.$ = !!e.activeOnCtrl),
        (a = e.url),
        (u = e.keyword),
        (l = e.p),
        (c = devicePixelRatio),
        (f = t.B = c < 0.98 ? 1 / c : 1),
        t.K((e.w * t.P + 24 * e.z) / c),
        (t.T.r = Math.max(
          3,
          Math.min(0 | ((e.h / f / c - t.V - 78) / t.W), t.D)
        )),
        t.Q && t.Q(e.t),
        (t.G.zoom = f > 1 ? f + "" : ""),
        t.T.i &&
          (t.Z =
            '" style="background-image: url(&quot;chrome://favicon/size/16@' +
            (c = 1 === c ? 1 : c < 3 ? 2 : c < 3.5 ? 3 : 4) +
            "x/"),
        (u = (u || "") + ""),
        null == a
          ? t.J(u && u + " ")
          : (l
              ? ((s = l.s), (a = l.u), u || (u = l.k))
              : null === l
              ? ((a = o.X(a).replace(/\s$/g, "%20")),
                !u &&
                  /^https?:\/\//i.test(a) &&
                  ((t.E = 115 == (32 | a.charCodeAt(4))),
                  (a = a.slice(
                    t.E ? 0 : 7,
                    a.indexOf("/", 8) === a.length - 1 ? -1 : void 0
                  ))))
              : (a = o.X(a, decodeURIComponent).trim().replace(t.Y, " ")),
            u
              ? t.J(u + " " + a, (s = (s || 0) + u.length + 1), s + a.length)
              : t.J(a))
      );
    },
    ee: false,
    S: null,
    te: "",
    ne: "",
    oe: true,
    re: null,
    ie: 0,
    ae: Math.min(Math.max(3, 0 | window.VomnibarMaxPageNum || 10), 100),
    ue: false,
    le: null,
    R: null,
    E: null,
    se: null,
    ce: false,
    fe: -1,
    de: 0,
    me: 0,
    _e: "",
    pe: false,
    ve: false,
    he: 0,
    ge: false,
    we: false,
    A: false,
    C: false,
    O: false,
    U: false,
    F: null,
    $: false,
    ye: 0,
    be: false,
    B: 1,
    ke: 0,
    Ie: 0,
    Te: null,
    G: null,
    Me: null,
    Se: null,
    xe: null,
    Ae: true,
    Ce: 0,
    Re: 0,
    He: null,
    Ne: null,
    Oe: null,
    Ee: null,
    Ue: null,
    Le: -1,
    Fe: 0,
    qe: 0,
    je: 0,
    $e: 0,
    Be: 0,
    Ke: 0,
    Pe: 1,
    Ve: 998,
    We: 2,
    x: false,
    De: 0,
    ze: null,
    D: 0,
    Qe: 0,
    Ge: 77,
    V: 80,
    W: 44,
    P: 0.8,
    Ze: "",
    Je: null,
    Xe: null,
    Ye: { passive: false, capture: true },
    L: null,
    et: 0,
    tt: function () {
      var e = n;
      (e.ve = true),
        setTimeout(e.nt, 34),
        document.body.addEventListener("wheel", e.ot, e.Ye);
    },
    rt: function (e) {
      var t = n,
        o = t.Te;
      (t.ee = t.ve = t.ue = t.we = t.ge = false),
        (t.U = false),
        (t.le = null),
        (t.he = 0),
        document.body.removeEventListener("wheel", t.ot, t.Ye),
        t.qe > 0 && clearTimeout(t.qe),
        (window.onkeyup = null),
        o.blur(),
        e || (r && r.it({ H: 9, t: 2, k: t.Ce })),
        (t.G.cssText = ""),
        (t.Me.display = "none"),
        (t.He.textContent = o.value = ""),
        (t.He.style.height = ""),
        t.xe.remove("empty"),
        t.He.classList.remove("no-favicon"),
        t.at(0),
        (t.Fe = requestAnimationFrame(function () {
          t.Fe = requestAnimationFrame(t.ut);
        })),
        (t.qe = setTimeout(t.ut, 35));
    },
    ut: function () {
      var e = n;
      cancelAnimationFrame(e.Fe),
        (e.Fe = 0),
        clearTimeout(e.qe),
        e.Ie && e.lt();
    },
    lt: function () {
      var e;
      r && r.st({ N: 0 }),
        ((e = n).qe =
          e.Ie =
          e.de =
          e.me =
          e.$e =
          e.Be =
          e.fe =
          e.ie =
          e.Ce =
          e.Ke =
          o.ct =
            0),
        (e.B = 1),
        (e.F = e.L = e.S = e.re = e.Ne = e.se = e.E = null),
        (e.T.q = e.ne = e.te = e._e = ""),
        (e.T.o = "omni"),
        (e.T.t = 0),
        (e.ce = e.$ = false),
        e.Ee && r ? setTimeout(e.Ee[0], 0) : /a?/.test(""),
        (e.Ee = null);
    },
    J: function (e, t, o) {
      var r = n;
      (r.te = e),
        (r.oe = r.ve = false),
        (r.se = r.E),
        (r.T.q = r.ne = e && e.trim().replace(r.Y, " ")),
        (r.Ie = 0),
        (r.ee = true),
        r.ft(
          0,
          t <= o
            ? function () {
                n.Te.value === n.te && n.Te.setSelectionRange(t, o);
              }
            : null
        ),
        r.dt && r.dt(),
        (r.Te.value = r.te);
    },
    nt: function (e) {
      var t = n;
      if (!t.ve) return (t.he = 0), void (t.ge = false);
      (t.he = performance.now()),
        (t.ge = false),
        false !== e
          ? (window.focus(),
            t.Te.focus(),
            (t.ge && t.pe) ||
              ((e = e ? 0 | e : 0) < 5 && setTimeout(t.nt, 33, e + 1)))
          : r.it({ H: 9, t: 2, k: t.Ce });
    },
    ft: function (e, t) {
      var o = n;
      if (((o.Ne = t || null), e >= 0)) {
        if (((o.le = null), o.qe > 0 && clearTimeout(o.qe), 0 === e))
          return o.mt();
      } else {
        if (o.qe > 0) return;
        e = o.Qe;
      }
      o.qe = setTimeout(o._t, e);
    },
    pt: function (e) {
      var t = n.Le,
        o = n.Ae;
      (n.oe = false),
        n.K(),
        n.ft(e, function () {
          var e = n.re.length;
          !o &&
            t >= 0 &&
            e > 0 &&
            ((t = Math.min(t, e - 1)), (n.Le = 0), (n.Ae = false), n.vt(t)),
            n.pe || n.we || n.nt();
        });
    },
    ht: function (e) {
      var t,
        i,
        a,
        u,
        l,
        s,
        c,
        f,
        d = n,
        m = d.pe,
        _ = d.we;
      return (
        (d.Ae = false),
        -1 === e
          ? ((d.se = d.E),
            (d.ue = false),
            (d.Te.value = d.te),
            !(t = d.gt.exec(d.te)) ||
              (d.re.length && "search" === d.re[0].e) ||
              d.Te.setSelectionRange((i = d.te.length - t[0].length), i),
            void (m || (d.nt(), (d.we = _))))
          : (_ && m && d.Te.blur(),
            (a = d.re[e]).wt
              ? d.yt(a, a.wt)
              : (null == a.bt && (a.bt = a.u.startsWith("https://")),
                "history" !== a.e && "tab" !== a.e
                  ? (null == a.wt && (o.kt(a), (a.wt = "")),
                    d.yt(a, a.t),
                    void ("math" === a.e && d.Te.select()))
                  : ((u = !a.t),
                    (l = a.u),
                    (s = o.kt(a)),
                    (f = (c = u || !/[^\x00-\x7f]/.test(a.t))
                      ? l
                      : o.X(l, decodeURIComponent)),
                    !c &&
                      f.length === l.length &&
                      l.includes("%") &&
                      ((f = a.t),
                      s &&
                        (f.lastIndexOf("://", 5) < 0 &&
                          (f = (7 === s ? "http://" : "https://") + f),
                        l.endsWith("/") && !f.endsWith("/") && (f += "/"))),
                    void r.it({ H: 2, i: e, u: f }))))
      );
    },
    wt: function (e) {
      var t = e.i,
        o = e.s,
        r = n.re[t];
      if (
        ((r.wt = o
          ? (n.T.o.endsWith("omni") && !n._e ? "" : ":o ") +
            o.k +
            " " +
            o.u +
            " "
          : n._e + r.t),
        t === n.Le)
      )
        return n.yt(r, r.wt);
    },
    It: function () {
      var e,
        t,
        o = n;
      if (!(o.Le < 0))
        return o.Ae
          ? ((o.te = o.Te.value), o.ht(o.Le))
          : ((e = o.re[o.Le]),
            (t = o.Te.value.trim()),
            o._e && (t = t.slice(o._e.length)),
            o.yt(
              e,
              (t =
                t === (e.title || e.u)
                  ? e.wt || o._e + (e.title === e.t ? e.u : e.t)
                  : o._e +
                    (e.title && t === e.u ? e.title : t === e.t ? e.u : e.t))
            ));
    },
    yt: function (e, t) {
      var o = 10 * t.length,
        r = o > innerWidth - 84;
      (n.Te.value = t),
        r && (n.Te.scrollLeft = o),
        (n.se = e.bt && t === e.t),
        (n.ue = t !== e.wt || e.wt === e.t);
    },
    vt: function (e) {
      var t,
        o,
        r = n;
      r.qe ||
        ((t = r.He.children),
        (o = r.Le),
        (r.Ae || o < 0) && (r.te = r.Te.value),
        r.ht(e),
        (r.Le = e),
        o >= 1 && t[o - 1].classList.remove("p"),
        o >= 0 && t[o].classList.remove("s"),
        e >= 1 && t[e - 1].classList.add("p"),
        e >= 0 && t[e].classList.add("s"));
    },
    Tt: [
      "space",
      "pageup",
      "pagedown",
      "end",
      "home",
      "left",
      "up",
      "right",
      "down",
      "",
      "",
      "",
      "",
      "insert",
      "delete",
    ],
    Mt: [
      "Semicolon",
      "Equal",
      "Comma",
      "Minus",
      "Period",
      "Slash",
      "Backquote",
      "BracketLeft",
      "Backslash",
      "BracketRight",
      "Quote",
      "IntlBackslash",
    ],
    St: { Alt: 1, AltGraph: 1, Control: 1, Meta: 1, OS: 1, Shift: 1 },
    xt: 185,
    At: function (e) {
      var t,
        o,
        r,
        i,
        a,
        u = e.key,
        l = e.shiftKey;
      return (
        u
          ? ((a = void 0),
            "Num" !== (i = (r = e.code).slice(0, 3)) &&
              (("Key" !== i && "Dig" !== i && "Arr" !== i) ||
                (r = r.slice(r < "K" ? 5 : 3)),
              (u =
                1 === r.length && u.length < 2
                  ? !l || r < "0" || r > "9"
                    ? r
                    : ")!@#$%^&*("[+r]
                  : this.St[u]
                  ? n.De && e.location === n.De
                    ? "modifier"
                    : "Alt" === u
                    ? u
                    : ""
                  : "Escape" === u
                  ? "esc"
                  : r.length < 2 || (u.length > 1 && "Dead" !== u)
                  ? u.startsWith("Arrow")
                    ? u.slice(5)
                    : u
                  : (a = this.Mt.indexOf(r)) < 0
                  ? r
                  : ";=,-./`[\\]'\\:+<_>?~{|}\"|"[a + 12 * +l])),
            (u =
              l && u.length < 2
                ? u
                : "Unidentified" === u
                ? ""
                : u.toLowerCase()))
          : ((o = void 0),
            (u =
              (t = e.keyCode) > 31 && t < 47
                ? this.Tt[t - 32]
                : t < 47 || 93 === t
                ? 8 === t
                  ? "backspace"
                  : 27 === t
                  ? "esc"
                  : 9 === t
                  ? "tab"
                  : 13 === t
                  ? "enter"
                  : (93 === t || (t > 15 && t < 19)) &&
                    n.De &&
                    n.De === e.location
                  ? "modifier"
                  : 18 === t
                  ? "alt"
                  : ""
                : t > 111 && t < 132
                ? "f" + (t - 111)
                : t &&
                  (u = e.keyIdentifier).startsWith("U+") &&
                  (o = parseInt(u.slice(2), 16))
                ? o < 91 && o > 32
                  ? l && o > 47 && o < 58
                    ? ")!@#$%^&*("[o - 48]
                    : String.fromCharCode(o < 65 || l ? o : o + 32)
                  : o > this.xt && ((o -= 186) < 7 || ((o -= 26) > 6 && o < 11))
                  ? ";=,-./`[\\]'\\:+<_>?~{|}\"|"[o + 12 * +l]
                  : ""
                : "")),
        u
      );
    },
    Ct: function (e) {
      var t,
        o,
        r,
        i,
        a,
        u = n.At(e),
        l = u;
      return (
        u &&
          ((o = ""
            .concat(e.altKey ? "a-" : "")
            .concat(e.ctrlKey ? "c-" : "")
            .concat(e.metaKey ? "m-" : "")),
          (r = u.toLowerCase()),
          (i = u.length > 1),
          (a =
            e.shiftKey && (i || (o && u.toUpperCase() !== r)) ? o + "s-" : o),
          (l = i || a ? a + r : u),
          n.ze &&
            (t =
              (t = n.ze[l + ":o"] || n.ze[l]) ||
              (!i &&
              (t = n.ze[r]) &&
              t.length < 2 &&
              (o = t.toUpperCase()) !== t
                ? a
                  ? a + t
                  : u === r
                  ? t
                  : o
                : ""))),
        t ? { mapped: true, key: t } : { mapped: false, key: l }
      );
    },
    Rt: {
      space: 9,
      b: 10,
      j: 8,
      k: 6,
      n: 8,
      p: 6,
      "[": 1,
      "]": 9,
      up: 10,
      down: 11,
      tab: 6,
      delete: 12,
    },
    Ht: {
      tab: 8,
      esc: 1,
      pageup: 10,
      pagedown: 11,
      up: 6,
      down: 8,
      f1: 4,
      f2: 5,
    },
    Nt: function (e) {
      var t,
        o,
        i,
        a,
        u = n,
        l = e.keyCode,
        s = u.pe,
        c = 229 !== l ? u.Ct(e) : { mapped: false, key: "" },
        f = c.mapped,
        d = c.key;
      if (((u.Ce = l), !d))
        return (
          u.je && !u.St[e.key || ""] && u.at(0),
          void (u.Re = !s || (93 === l && u.We) || 229 === l ? 0 : 1)
        );
      if (d.startsWith("v-"))
        return (
          r.it({
            H: 36,
            k: "<".concat(d, ">"),
            l: l,
            e: s ? [u.Te.localName, u.Te.id, u.Te.className] : ["body", "", ""],
          }),
          void (u.je && u.at(0))
        );
      if (
        ((t = 0),
        (i = d.slice(d.lastIndexOf("-") + 1) || (d && "-")),
        "a-" === (a = d.length > 1 ? d.slice(0, d.indexOf("-") + 1) : "") ||
          "m-" === a)
      ) {
        if ("f2" === i) return u.Ot(s ? 3 : 2);
        if ("a-" === a) {
          if ("a-alt" === d || "a-modifier" === d)
            return void (n.je = n.je || setTimeout(n.at, 260, -1));
          if ("down" === i || "up" === i || /^[jknp]$/.test(i))
            return u.Ot(i < "o" && "k" !== i ? 8 : 6);
          u.je && u.at(0);
        }
        if (i >= "0" && i <= "9" && (u.We || /[cm]-/.test(d)))
          return void ((o = +i || 10) <= u.re.length && u.Et(true, o - 1));
        if (
          s &&
          ((1 === i.length && i > "a" && i < "g" && "c" !== i) ||
            ("backspace" === i && u.We))
        )
          return u.Ut(1 === i.length ? i.charCodeAt(0) - 96 : -1);
        if ("a-" === a && "enter" !== i) return void (u.Re = 0);
      }
      if ("enter" !== i) {
        if ("c-" === a || "m-" === a)
          if (d.includes("s-")) t = "f" === i ? 11 : "b" === i ? 10 : 0;
          else {
            if ("up" === i || "down" === i || "end" === i || "home" === i)
              return (
                e.preventDefault(),
                (u.ke = e.timeStamp),
                (window.onkeyup = n.Lt),
                void r.st({ N: 6, k: d, b: i })
              );
            if ("backspace" === i && !u.We) return u.Ut(-1);
            "delete" === i
              ? (u.Re = 1)
              : (t = "[" === i ? 1 : "]" === i ? 9 : u.Rt[i] || 0);
          }
        else if ("s-" === a) t = u.Rt[i] || 0;
        else if ((t = u.Ht[i] || 0));
        else {
          if (i > "f0" && i < "f:") return void (u.Re = 0);
          if (8 === l) return void (s && (u.Re = 1));
          if ("space" !== i);
          else if (s) {
            if (
              !f &&
              (u.Le >= 0 || u.re.length <= 1) &&
              u.Te.value.endsWith("  ")
            )
              return u.Et(true);
          } else t = 2;
        }
        if (t) return u.Ot(t);
        s || 1 !== i.length || isNaN((o = parseInt(i, 10)))
          ? (u.Re = (s ? !(93 === l && u.We) : d.length > 1) ? 1 : 0)
          : (o = o || 10) <= u.re.length && u.Et(d, o - 1);
      } else
        "Enter" === e.key || 13 === l
          ? (window.onkeyup = u.Ft.bind(null, d, f))
          : u.Et(d);
    },
    Ot: function (e) {
      var t,
        o,
        r = n;
      switch (e) {
        case 1:
          if ("Range" !== getSelection().type || !r.pe) return r.rt();
          (o = r.Te).setSelectionRange(
            (t =
              "backward" !== o.selectionDirection &&
              o.selectionEnd < o.value.length
                ? o.selectionStart
                : o.selectionEnd),
            t
          );
          break;
        case 2:
          r.nt();
          break;
        case 3:
          (r.we = true), r.Te.blur();
          break;
        case 4:
        case 5:
          r.pe
            ? 5 === e
              ? r.nt(false)
              : document.execCommand("delete")
            : r.nt();
          break;
        case 6:
        case 8:
          return r.vt((t = (((t = r.re.length + 1) + r.Le + (e - 6)) % t) - 1));
        case 9:
          return r.It();
        case 10:
        case 11:
          return r.qt(10 !== e);
        case 12:
          return r.jt();
      }
    },
    Ut: function (e) {
      var t = getSelection(),
        o = 4 === e || e < 0;
      "Caret" === t.type &&
        t.modify(o ? "extend" : "move", e < 4 ? "backward" : "forward", "word"),
        o &&
          n.Te.selectionStart < n.Te.selectionEnd &&
          document.execCommand("delete");
    },
    gt: /(?:^|\s)(\+\d{0,2})$/,
    qt: function (e) {
      var t,
        o,
        r,
        i,
        a,
        u,
        l,
        s,
        c,
        f = n;
      if (!f.ce) {
        if (
          ((t = f.re.length),
          (o = f.T.r),
          (r = +e || -1),
          (i = (f.Ae || f.Le < 0 ? f.Te.value : f.te).trimRight()),
          (u = 0 | ((a = f.gt.exec(i)) && a[0])),
          t >= o)
        )
          r *= o;
        else if (u > 0 && r < 0) r *= u >= o ? o : 1;
        else if (t < (t && "tab" !== f.re[0].e ? o : 3)) return;
        (l = Math.min(Math.max(0, u + r), f.ae * o - o)),
          (r > 0 && (l === u || (l >= f.ie && f.ie > 0))) ||
            (a && (i = i.slice(0, -a[0].length)),
            (i = i.trimRight()),
            (u = Math.min(f.Te.selectionEnd, i.length)),
            l > 0 && (i += " +" + l),
            (s = f.Te.selectionStart),
            (c = f.Te.selectionDirection),
            (f.Te.value = i),
            f.Te.setSelectionRange(s, u, c),
            (f.le = null),
            f.ft(0));
      }
    },
    Et: function (e, t) {
      var o,
        i,
        a,
        u,
        l,
        s,
        c,
        f = n,
        d = null != t ? t : f.Le;
      if (
        ("string" == typeof e &&
          (e =
            (e.includes("a-") ? 1 : 0) +
            (e.includes("c-") ? 2 : 0) +
            (e.includes("m-") ? 4 : 0) +
            (e.includes("s-") ? 8 : 0)),
        (f.fe =
          null == e
            ? f.fe
            : true === e
            ? f.A
              ? -1
              : 0
            : 14 & e && f.F
            ? f.$t(e)
            : 6 & e
            ? 8 & e
              ? -2
              : -1
            : 8 & e || !f.A
            ? 0
            : -1),
        -1 === d)
      ) {
        if (!(o = f.Te.value.trim())) return;
        if (f.O && !e && !o.includes("://"))
          try {
            new URL(o);
          } catch (e) {
            return;
          }
      }
      if (null == t && f.qe) {
        if (!f.ue) return f.qe > 0 ? f.ft(0, f.Et) : void (f.Ne = f.Et);
        d = -1;
      }
      (i = d >= 0 ? f.re[d] : { u: f.Te.value.trim() }),
        (a = f.fe),
        (u =
          null != i.s
            ? null
            : {
                H: 6,
                f: false,
                r: a,
                h: d >= 0 ? null : f.se,
                u: i.u,
                o: {
                  i: f.S,
                  s: d >= 0 ? { r: false, k: "" } : f.L,
                  p: f.R,
                  t: !(d >= 0) && "whole",
                },
              }),
        (l = null == i.s ? null : { H: 5, a: a > -2, s: i.s }),
        (s = function () {
          r && (u ? n.Bt(u, a) : n.Kt(l, "tab" === i.e)), /a?/.test("");
        }),
        -1 === d &&
          e &&
          !0 !== e &&
          1 & e &&
          a > -2 &&
          /^\w+(-\w+)?$/.test(i.u) &&
          ((c = f.re.filter(function (e) {
            return "domain" === e.e;
          })),
          (u.u = c.length ? c[0].u : "www.".concat(i.u, ".com"))),
        a > -2 || (e && !0 !== e && 1 & e) ? ((f.Ee = [s, a]), f.rt()) : s();
    },
    Ft: function (e, t, o) {
      var r,
        i,
        a = o.keyCode;
      if (o.isTrusted) {
        if (
          ((window.onkeyup = null),
          (i =
            "enter" !== e || t
              ? e
              : (o.altKey || 18 === a ? 1 : 0) +
                (o.ctrlKey || 17 === a ? 2 : 0) +
                (o.metaKey || (a > 90 && a < 94) ? 4 : 0) +
                (o.shiftKey || 16 === a ? 8 : 0)),
          !(r = n).ee)
        )
          return;
        (r.Ce = 0),
          r.Et(
            e,
            ("string" == typeof i ? "a-enter" === i : 1 === i)
              ? !r.Le && r.Ae
                ? -1
                : r.Le
              : null
          );
      }
    },
    $t: function (e) {
      var t = n,
        o = true === t.F ? "chrome" : t.F + "",
        r = 6 & e,
        i = 8 & e;
      return (o.endsWith("2") ? o.includes("chro") : o.includes("viva"))
        ? r
          ? i
            ? 2
            : -2
          : -1
        : r
        ? !!i !== t.$
          ? -1
          : -2
        : 2;
    },
    jt: function () {
      if (!(n.Le < 0)) {
        var e = n.re[n.Le],
          t = e.e;
        if ("tab" === t || ("history" === t && null == e.s))
          return r.it({ H: 22, t: t, s: e.s, u: e.u }), n.Pt();
        r.st({ N: 4, k: 95 });
      }
    },
    Vt: function (e) {
      var t = n,
        r = e.target;
      if (
        e.isTrusted &&
        !e.button &&
        r !== t.Te &&
        "Range" !== getSelection().type
      ) {
        if (r === t.Te.parentElement) return t.nt();
        if (t.qe) o.Wt(e, 1);
        else {
          for (; r && r.parentElement !== t.He; ) r = r.parentElement;
          r &&
            ((t.Ce = 0),
            o.Wt(e, 1),
            t.Et(
              e.altKey | (2 * e.ctrlKey) | (4 * e.metaKey) | (8 * e.shiftKey),
              [].indexOf.call(t.He.children, r)
            ));
        }
      }
    },
    Dt: function (e) {
      var t,
        o,
        r = e.target,
        i = HTMLAnchorElement;
      if (
        (r instanceof i || (r = r.parentElement), r instanceof i && !r.href)
      ) {
        for (t = r; t && t.parentElement !== n.He; t = t.parentElement);
        (o = [].indexOf.call(n.He.children, t)) >= 0 && (r.href = n.re[o].u);
      }
    },
    zt: function () {
      var e,
        t,
        n = this;
      0 === n.selectionStart &&
        "backward" === n.selectionDirection &&
        32 === (e = n.value).charCodeAt((t = n.selectionEnd - 1)) &&
        t !== e.length - 1 &&
        ((e = e.slice(0, t).trimRight()).includes(" ") ||
          n.setSelectionRange(0, e.length, "backward"));
    },
    _t: function () {
      r && n.ee && n.mt();
    },
    ot: function (e) {
      var t, r, i, a, u, l;
      e.ctrlKey ||
        e.metaKey ||
        !e.isTrusted ||
        ((t = n),
        (r = e.deltaY),
        (i = Date.now()),
        (a = e.deltaMode),
        (t.ee && t.Se.contains(e.target)) ||
          (o.Wt(e, 1),
          !e.deltaX &&
            r &&
            t.ee &&
            !t.ce &&
            ((i - t.Be > (a ? 330 : 120) || i - t.Be < -33) &&
              ((t.Ke = 0), (t.$e = 0)),
            (t.Be = i),
            (u = t.Ke + (a ? (1 === a ? 100 * r : 300 * r) : r)),
            (l = Math.abs(u)) < 300 ||
            (t.$e && i - t.$e < 150 && i - t.$e > -33)
              ? (t.Ke = u)
              : ((t.Ke = (l % 300) * (l > 0 ? 1 : -1)),
                (t.$e = i),
                t.qt(r > 0)))));
    },
    Qt: function (e) {
      var t,
        o,
        r,
        i,
        a = n,
        u = a.ne,
        l = a.Te.value,
        s = l.trim();
      if (
        ((a.we = false),
        s !== (-1 === a.Le || a.Ae ? u : a.re[a.Le].t) &&
          (1 !== a.de ||
            !s.startsWith(u) ||
            (s.includes(" /", u.length) &&
              !/^\/|\s\//.test(s.slice(0, u.length - 1)) &&
              (a.T.e ? 1 & a.T.e : "bomni bookmarks".includes(a.T.o)))))
      ) {
        if ((s || (a.se = a.E = null), (t = a.Te.selectionStart), a.ce));
        else if (t > l.length - 2) {
          if (l.endsWith(" +") && !a.qe && s.slice(0, -2).trimRight() === u)
            return;
        } else
          (o = a.gt.exec(u)) &&
            s.endsWith(o[0]) &&
            ((r = o[0].length),
            (i = l.slice(0, l.trimRight().length - r)).trim() !==
              u.slice(0, -r).trimRight() &&
              ((a.Te.value = i.trimRight()), a.Te.setSelectionRange(t, t)));
        a.le && (!e || false === e.isComposing) && (a.le = null),
          a.ft(-1, a.je ? a.at : null);
      }
    },
    Gt: function (e) {
      var t,
        o,
        i,
        a,
        u,
        l,
        s,
        c,
        f = n,
        d = e.l,
        m = d.length,
        _ = m > 0,
        p = f.Ie,
        v = f.He;
      if (f.ee) {
        if (
          ((f.ie = e.t),
          (f.ye = e.i),
          (f.de = e.m),
          (f.me = e.s),
          (f._e = e.r && e.r + " "),
          (f.re = d),
          (f.ce = m > 0 && "search" === d[0].e && !d[0].n),
          (f.Le = f.ce || (null == f.C ? e.a : f.C && _) ? 0 : -1),
          (f.Ae = true),
          (t = f.Ie = Math.ceil(_ ? m * f.W + f.V : f.Ge)),
          (o = t !== p),
          (i = t > p),
          (a = f.B * devicePixelRatio),
          (u = { N: 2, h: t * a }),
          p || (u.m = Math.ceil(f.T.r * f.W + f.V) * a),
          o && i && r.st(u),
          f.re.forEach(f.Zt),
          f.Ue(f.re, v),
          f.Jt(),
          f.Xt("enterkeyhint", f.ce ? "Search" : "Go"),
          p || (f.Me.display = ""),
          (l = f.xe),
          (s = v.classList),
          (c = "empty"),
          _ ? l.remove(c) : l.add(c),
          (c = "no-query"),
          6 & e.c ? (l.remove(c), s.remove(c)) : (l.add(c), s.add(c)),
          (c = "no-favicon"),
          f.ye ? s.remove(c) : s.add(c),
          _ &&
            (0 === f.Le && v.firstElementChild.classList.add("s"),
            v.lastElementChild.classList.add("b")),
          f.Ne === f.at && (f.at(0), (f.Ne = null)),
          i)
        )
          return f.Yt();
        requestAnimationFrame(function () {
          return o && r.st(u), n.Yt();
        });
      }
    },
    Yt: function () {
      var e,
        t = n;
      if ((t.ve || t.tt(), !(t.qe > 0)))
        return (
          (t.qe = 0),
          (t.ue = false),
          (e = t.Ne) ? ((t.Ne = null), e.call(t)) : void 0
        );
    },
    Jt: function () {
      n.le || n.Xt("inputmode", n.ce || !/[\/:]/.test(n.ne) ? "search" : "url");
    },
    Xt: function (e, t, o) {
      o && 0 === n.g && (t = chrome.i18n.getMessage(t) || t),
        n.Te.getAttribute(e) !== t && n.Te.setAttribute(e, t);
    },
    en: function (e) {
      var t = n.Ze && " ".concat(n.Ze, " "),
        o = " ".concat(e.t, " "),
        i = !t.includes(o),
        a = (i ? t + e.t : t.replace(o, " ")).trim().replace(n.Y, " ");
      (n.Ze = a), n.tn(a), e.c || r.it({ H: 26, t: e.t, o: 1, e: i });
    },
    tn: function (e) {
      var t, o, r, i, a, u, l, s, c, f;
      for (
        e = " ".concat(e, " "),
          t = document.documentElement,
          o = document.body,
          r = e.includes(" dark "),
          n.Xe &&
            (n.Xe.childElementCount ||
              (n.Xe.textContent = r ? "\u2600" : "\u263d"),
            n.Xe.classList.toggle("toggled", r)),
          i = e.includes(" mono-url "),
          n.et = e.includes(" time ")
            ? e.includes(" absolute-num-time ")
              ? 1
              : e.includes(" absolute-time ")
              ? 2
              : 3
            : 0,
          n.M(32, n.et > 0),
          a = document.querySelectorAll("style[id]"),
          u = 0;
        u < a.length;
        u++
      )
        (f =
          (c = " custom " == (s = " " + (l = a[u]).id + " ")) || e.includes(s)),
          l.dataset.media
            ? (l.media = f ? "" : l.dataset.media)
            : (l.sheet.disabled = !f),
          c || o.classList.toggle("has-" + l.id, f),
          f && (e = e.replace(s, " "));
      (e = e.trim().replace(n.Y, " ")),
        t.className !== e && (t.className = e),
        !!(16 & n.T.f) !== i &&
          (n.M(16, i), n.ee && !n.dt && n.Pt(document.hidden));
    },
    nn: function (e) {
      var t,
        r,
        i,
        a,
        u = o.I(e.d),
        l = u.s;
      null != l && n.Ze !== l && ((n.Ze = l), n.tn(l)),
        null != u.c && n.on(u.c),
        null != u.a && (n.De = u.a),
        null != u.n && (n.D = u.n),
        null != u.t && (n.Qe = u.t),
        void 0 !== u.k && (n.ze = u.k),
        null != u.l &&
          ((r = +(t = u.l.split(","))[0]),
          (i = Math.min),
          (a = Math.max),
          (n.Ge = a(24, i(r || 77, 320))),
          (n.V = a(24, i(n.Ge + ((r = +t[1]) || 3), 320))),
          (n.W = a(14, i((r = +t[2]) || 44, 120))),
          (n.P = a(0.3, i((r = t.length > 3 ? +t[3] : 0) || 0.8, 0.95))));
    },
    rn: function (e) {
      var t = n,
        o = t.he && performance.now() - t.he < 120,
        i = "blur" === e.type,
        a = e.target,
        u = a === window;
      e.isTrusted &&
        r &&
        ((t.ge = true),
        i && t.Oe && u && t.Oe(),
        t.ee && u
          ? ((t.he = 0),
            o
              ? t.in(i)
              : (setTimeout(t.in, 50, null),
                i
                  ? n.at(0)
                  : (r.it({ H: 21, c: "", n: 1, i: -1, r: 0 }),
                    0 !== t.g &&
                      r &&
                      setTimeout(function () {
                        r && !r.an && r.st({ N: 9 });
                      }, 50))))
          : a === t.Te && (n.pe = !i) && (n.we = false));
    },
    in: function (e) {
      if (n) {
        var t = document,
          o = t.body.classList;
        !n.ee || (null != e ? !e : t.hidden || t.hasFocus())
          ? o.remove("transparent")
          : o.add("transparent");
      }
    },
    dt: function () {
      var e,
        t,
        r,
        i,
        a,
        u,
        l,
        s,
        c,
        f,
        d,
        m,
        _,
        p,
        v = n;
      if (
        ((window.onclick = n.Vt),
        o.I(v.Rt),
        o.I(v.Ht),
        o.I(v.St),
        (e = v.He = document.getElementById("list")),
        (t = v.Ve),
        (r = addEventListener),
        (i = v.Te = document.getElementById("input")),
        (v.Se = document.getElementById("bar")),
        (v.xe = i.parentElement.classList),
        (e.onmouseover = e.oncontextmenu = v.Dt),
        (document.getElementById("close").onclick = function () {
          return n.rt();
        }),
        r("keydown", v.Lt, true),
        r("focus", v.rn, true),
        r("blur", v.rn, true),
        (i.oninput = v.Qt),
        (i.onselect = v.zt),
        (v.Ue = o.un(document.getElementById("template").innerHTML)),
        t < 73 &&
          (a = document.querySelector("style")) &&
          (a.textContent = a.textContent
            .replace("0 2px 7px", "0 2px 10px")
            .replace("0 0 1.5px", "0 0 1px")),
        (t < 61 || t > 84) &&
          (((a = document.createElement("style")).type = "text/css"),
          (a.textContent = "body::after, #input, .item { border-width: ".concat(
            t < 48 ? 1 : 0.01,
            "px; }"
          )),
          document.head.appendChild(a)),
        i.addEventListener(
          "compositionstart",
          (u = function (e) {
            var t = n.Te;
            n.le =
              "compositionstart" === e.type
                ? [t.selectionStart, t.value.length - t.selectionEnd]
                : null;
          })
        ),
        i.addEventListener("compositionend", u),
        v.Je && document.head.appendChild(v.Je),
        (v.Xe = document.querySelector("#toggle-dark")),
        v.Xe &&
          (v.Xe.onclick = function (e) {
            n.en({ t: "dark", c: e.ctrlKey }), n.Te.focus();
          }),
        v.tn(v.Ze),
        0 === v.g)
      )
        for (l = document.querySelectorAll("[title]"), s = 0; s < l.length; s++)
          (c = l[s]),
            (f = chrome.i18n.getMessage(c.title.replace(" ", "_"))) &&
              (c.title = f);
      if (((v.dt = v.Q = o.un = null), !(t >= 52 || null != v.Me.d))) {
        for (
          d = (document.querySelector("style") || {}).textContent || "",
            m =
              /\.([a-z]+)\s?\{(?:[^}]+;)?\s*d\s?:\s*path\r?\s?\(\s?['"](.+?)['"]\s?\)/g,
            _ = Object.create(null);
          (p = m.exec(d));

        )
          _[p[1]] = p[2];
        v.ln = function (e) {
          var t = e.e,
            n = _[t];
          return n ? "".concat(t, '" d="').concat(n) : t;
        };
      }
    },
    on: function (e) {
      var t = n.Je;
      if (!e) return t && t.remove(), void (n.Je = null);
      t ||
        (((t = n.Je =
          document.querySelector("#custom") ||
          document.createElement("style")).type = "text/css"),
        (t.id = "custom"),
        n.dt || document.head.appendChild(t)),
        (t.textContent = e);
    },
    ln: function (e) {
      return e.e;
    },
    Q: function (e) {
      var t,
        o,
        r,
        i,
        a,
        u,
        l = n,
        s = document.documentElement;
      (l.G = s.style),
        (l.Me = document.body.style),
        (l.g = e),
        (t = 0),
        (a = l.Ve >= 58),
        2 === e ||
          (0 === e
            ? (t = a ? 2 : 0)
            : a && null != (i = s.dataset.favicons)
            ? (t = i && "true" !== i.toLowerCase() ? 0 : 2)
            : a &&
              (o = chrome.runtime.getManifest) &&
              (r = o()) &&
              2 === r.manifest_version &&
              (t =
                (u = r.permissions || []).indexOf("<all_urls>") >= 0 ||
                u.join(" ").includes("://favicon/")
                  ? 1
                  : 0)),
        (l.T.i = t);
    },
    Lt: function (e) {
      if (e.isTrusted) {
        if (((n.Re = 2), window.onkeyup)) {
          var t = e.keyCode,
            i = !e.repeat,
            a = 0;
          n.ke
            ? (i || (a = e.timeStamp) - n.ke > 40 || a < n.ke) &&
              (r.st({ N: i ? 8 : 7 }), (n.ke = a))
            : (i = t > 18 || t < 16),
            i && (window.onkeyup = null);
        } else n.ee && n.Nt(e);
        0 !== n.Re && o.Wt(e, 2 === n.Re);
      }
    },
    at: function (e) {
      var t = n.je;
      if (-1 !== e && 0 !== e && void 0 !== e) {
        if (18 !== e.keyCode) return;
        e = 0;
      }
      t !== (e = e || 0) &&
        (t > 0 && !e && clearTimeout(t),
        (-1 === t) != !!e &&
          (document.body.classList.toggle("alt", !!e),
          (e ? addEventListener : removeEventListener)("keyup", n.at, true)),
        (n.je = e));
    },
    sn: function (e) {
      setTimeout(r.st, 0, { N: 1, l: e.l });
    },
    cn: 0,
    K: function (e) {
      n.T.c = Math.floor(
        ((e || innerWidth) / n.B - 84) / (16 & n.T.f ? 7.7 : 4)
      );
    },
    M: function (e, t) {
      var o,
        r = null == t;
      r &&
        (t = " ".concat(n.Ze, " ").includes(e - 32 ? " mono-url " : " time ")),
        n.T.f !== (o = (n.T.f & ~e) | (t ? e : 0)) &&
          ((n.T.f = o), 16 !== e || r || n.K());
    },
    fn: null,
    T: { H: 15, o: "omni", t: 0, c: 0, e: 0, r: 0, f: 0, i: 0, q: "" },
    Y: /\s+/g,
    mt: function () {
      var e,
        t,
        o,
        i,
        a = n,
        u = a.T,
        l = 0;
      if (((a.qe = -1), a.oe)) {
        if (
          ((a.ne = e = a.Te.value.trim()),
          a.le &&
            ((o = e.length - a.le[1]),
            (e =
              e.slice(0, (t = a.le[0])) +
              e.slice(t, o).replace(/'/g, "") +
              e.slice(o))),
          (e = e.replace(a.Y, " ")),
          a.x &&
            (e = (i = /^:[WBH] /.test(e) ? 3 : 0)
              ? e.slice(0, i) + e.slice(i).toLowerCase()
              : e.toLowerCase()),
          e === u.q)
        )
          return a.Yt();
        (u.t =
          a.de < 2 || !e.startsWith(u.q)
            ? 0
            : 3 === a.de
            ? e.includes(" ")
              ? 0
              : 8
            : ((l = a.de), a.me)),
          (u.q = e),
          (a.de = l),
          a.K();
      } else (a.oe = true), a.x && (u.q = u.q.toLowerCase());
      r.it(u), 1024 & u.f && a.U && (u.f &= -1025);
    },
    Z: "",
    Zt: function (e) {
      var t;
      (e.r = n.be
        ? '\n\t\t\t<span class="relevancy">'.concat(e.r, "</span>")
        : ""),
        (t = e.label) &&
          (e.label = ' <span class="label">'.concat(t, "</span>")),
        (e.favIcon =
          (t = n.ye ? e.u : "") &&
          n.Z + o.dn(n.mn(e, t) || "about:blank") + "&quot;);");
    },
    mn: function (e, o) {
      var r,
        i = o.slice(0, 11).toLowerCase();
      return i.startsWith("vimium://")
        ? 1 !== n.g
          ? chrome.runtime.getURL("/pages/options.html")
          : location.protocol + "//" + t + "/pages/options.html"
        : o.length > 512 || "javascript:" === i || i.startsWith("data:")
        ? ""
        : e.v ||
          (("history" === e.e || "tab" === e.e) && o) ||
          (i.startsWith("http") ||
          (i.lastIndexOf("-", i.indexOf(":") + 1 || 8) > 0 &&
            o.lastIndexOf("://", 21) > 0)
            ? (r = o.indexOf("/", o.indexOf("://") + 3)) > 0
              ? o.slice(0, r + 1)
              : o + "/"
            : o);
    },
    Bt: function (e, t) {
      if (!/^javascript:/i.test(e.u))
        return (
          r.it(e),
          -2 !== t || !n.ee || (n.ne && !/^\+\d{0,2}$/.exec(n.ne))
            ? void 0
            : n.Pt()
        );
      r.st({ N: 5, u: e.u });
    },
    Kt: function (e, t) {
      r.it(e), n && n.ee && n.Pt(t);
    },
    Pt: function (e) {
      if ((getSelection().removeAllRanges(), !e)) return n.pt(150);
      window.onfocus = function (e) {
        (window.onfocus = null), e.isTrusted && r.an && n.pt(17);
      };
    },
    _n: function (e) {
      r &&
        e.isTrusted &&
        ((n.ee = false), n.qe > 0 && clearTimeout(n.qe), r.st({ N: 10 }));
    },
  },
  o = {
    I: function (e) {
      return Object.setPrototypeOf(e, null);
    },
    un: function (e) {
      var t = e.split(/\{\{(\w+)}}/g);
      return function (e, r) {
        var i,
          a,
          u,
          l = "",
          s = t.length - 1;
        for (o.ct = 0, i = 0; i < e.length; i++) {
          for (a = 0; a < s; a += 2)
            (l += t[a]),
              (l +=
                "typeIcon" === (u = t[a + 1])
                  ? n.ln(e[i])
                  : "index" === u
                  ? i + 1
                  : "time" === u
                  ? n.et
                    ? o.pn(e[i].visit)
                    : ""
                  : e[i][u] || "");
          l += t[s];
        }
        r.innerHTML = l;
      };
    },
    vn: 0,
    X: function (e, t) {
      try {
        e = (t || decodeURI)(e);
      } catch (e) {}
      return e;
    },
    hn: function (e, t) {
      var r, i, a, u, l;
      if (2 === n.We && e.startsWith("file://")) {
        if ((r = e.indexOf("/", 7)) < 0 || r === e.length - 1)
          return r < 0 ? e + "/" : e;
        (i =
          7 === r
            ? ":" === e.charAt(9)
              ? 3
              : "%3a" === e.substr(9, 3).toLowerCase()
              ? 5
              : 0
            : 0),
          (e = i
            ? e[8].toUpperCase() + ":\\" + e.slice(i + 8)
            : 7 === r
            ? e
            : "\\\\" + e.slice(7)),
          (l = (u = (a = /[?#]/.exec(e)) ? a.index : 0) ? e.slice(u) : ""),
          (e = (e = (u ? e.slice(0, u) : e).replace(/\/\/+/g, "/")).replace(
            /([^<])\//g,
            "$1\\"
          )),
          (e = u ? e + l : e);
      }
      return t ? e : o.X(e, decodeURIComponent);
    },
    kt: function (e) {
      var t,
        n,
        r = e.u,
        i = e.t,
        a = r.slice(0, 8).toLowerCase(),
        u = a.startsWith("http://") ? 7 : "https://" === a ? 8 : 0;
      return (
        u >= r.length && (u = 0),
        (t = !u),
        8 === u &&
          ((n = r.indexOf("/", u)) > 0 ? n < r.length : /:\d+\/?$/.test(r)) &&
          (t = true),
        i
          ? u &&
            (t && !i.startsWith(a) && (i = a + i),
            r.endsWith("/") &&
              !a.endsWith("/") &&
              a.includes("/") &&
              (i += "/"))
          : (i = !t && u ? r.slice(u) : r),
        (e.t = o.hn(i, !!e.t)),
        (a = e.title) &&
          (e.title = a
            .replace(/<\/?match[^>]*?>/g, "")
            .replace(/&(amp|apos|gt|lt|quot);|\u2026/g, o.onHTMLEntity)),
        u
      );
    },
    onHTMLEntity: function (e, t) {
      return "amp" === t
        ? "&"
        : "apos" === t
        ? "'"
        : "quot" === t
        ? '"'
        : "gt" === t
        ? ">"
        : "lt" === t
        ? "<"
        : "";
    },
    dn: function (e) {
      function t(e) {
        var t = e.charCodeAt(0);
        return 38 === t
          ? "&amp;"
          : 39 === t
          ? "&apos;"
          : t < 39
          ? "%22"
          : 60 === t
          ? "%3C"
          : "%3E";
      }
      return (
        (o.dn = function (e) {
          return e.replace(/["&'<>]/g, t);
        }),
        o.dn(e)
      );
    },
    ct: 0,
    pn: function (e) {
      var t,
        r,
        i = this,
        a = Intl.RelativeTimeFormat,
        u = document.documentElement.lang || navigator.language,
        l = u.startsWith("zh"),
        s = l ? "zh-CN" : u,
        c = l
          ? "\u521a\u521a"
          : u.startsWith("fr")
          ? "tout \xe0 l'heure"
          : "just now",
        f = 0,
        d = ["second", "minute", "hour", "day", "", "month", "year"];
      return (
        (o.pn = function (e) {
          var o, u, m, _, p, v, h, g, w, y, b, k;
          if (!e) return "";
          if (
            (i.ct ||
              ((o = new Date()),
              (i.ct = +o),
              (f = 6e4 * o.getTimezoneOffset())),
            (_ =
              (m = (u = parseInt((i.ct - e) / 1e3)) < 0 ? -u : u) < 10
                ? -1
                : m < 45
                ? 0
                : (m /= 60) < 49.5
                ? 1
                : (m /= 60) < 22
                ? 2
                : (m /= 24) < 5
                ? 3
                : m < 26
                ? 4
                : m < 304
                ? 5
                : 6),
            ("+" !==
              (p = new Date(e - f)
                .toJSON()
                .slice(0, -5)
                .replace("T", " "))[0] &&
              "-" !== p[0]) ||
              (p = p.replace(/^\+?(-?)0+/, "$1")),
            -1 === _)
          )
            v = c;
          else if (n.et < 3 || !a)
            if (
              (!t &&
                n.et > 1 &&
                (t = (t = new Intl.DateTimeFormat(s, {
                  localeMatcher: "best fit",
                  second: "2-digit",
                  year: "numeric",
                  month: "short",
                  weekday: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })).formatToParts
                  ? t
                  : 1),
              1 === t || n.et < 2)
            )
              (v = p),
                u > 0 && "-" !== p[0]
                  ? (v =
                      _ > 3
                        ? (_ > 5
                            ? v.slice(0, -12)
                            : v.slice("0" === v[v.length - 14] ? -13 : -14, -9)
                          ).replace("-", " / ")
                        : v.slice(
                            _ > 2 ? ("0" === v[v.length - 11] ? -10 : -11) : -8,
                            _ ? -3 : 99
                          ))
                  : (p = "");
            else {
              for (
                v = "", h = t.formatToParts(e), g = 0, w = true;
                g < h.length;
                g++
              )
                (
                  "year" === (y = h[g].type)
                    ? _ < 6
                    : "month" === y
                    ? _ < 4
                    : "day" === y
                    ? _ < 3 || _ > 5
                    : "weekday" === y
                    ? _ < 3 || _ > 4
                    : "dayPeriod" === y ||
                      "dayperiod" === y ||
                      "hour" === y ||
                      "minute" === y
                    ? _ > 3
                    : "second" === y
                    ? _ > 0
                    : "literal" !== y
                )
                  ? (g +=
                      w && g + 1 < h.length && "literal" === h[g + 1].type
                        ? 1
                        : 0)
                  : ((b = w),
                    (k = h[g].value),
                    !(w = "literal" === y) &&
                      ("weekday" === y ||
                        ("d" === y[0] && "e" === y.slice(4, 5))) &&
                      v &&
                      /[.:-]/.test(v[v.length - 1]) &&
                      (v = v.slice(0, -1) + " "),
                    (!b || (l && ("\u661f" === k[0] || "\u5468" === k[0]))) &&
                      !w &&
                      v &&
                      /[^\x00-\x7f]/.test(v[v.length - 1]) &&
                      (v += " "),
                    (v +=
                      l && "d" === y[0] && "e" === y.slice(4, 5)
                        ? (m = parseInt(p.slice(-8, -6), 10)) >= 12
                          ? m >= 18
                            ? m >= 21
                              ? "\u591c\u665a"
                              : "\u665a\u4e0a"
                            : m >= 13
                            ? "\u4e0b\u5348"
                            : "\u4e2d\u5348"
                          : m >= 6
                          ? m >= 9
                            ? "\u4e0a\u5348"
                            : "\u65e9\u4e0a"
                          : m > 0
                          ? "\u51cc\u6668"
                          : "\u5348\u591c"
                        : k));
              v = v.trim().replace(/[,.: -]+$/, "");
            }
          else
            r ||
              (r = new a(s, {
                localeMatcher: "best fit",
                numeric: "auto",
                style: "long",
              })),
              (v = r.format(
                (Math.round(_ < 5 ? m : m / 365.25 + 0.25) || 1) *
                  (u > 0 ? -1 : 1),
                d[4 === _ ? 3 : _]
              )),
              (v = l ? v.replace("\u79d2\u949f", "\u79d2") : v);
          return '<span class="time" title="'
            .concat(p, '">')
            .concat(v, "</span>");
        }),
        o.pn(e)
      );
    },
    Wt: function (e, t) {
      t && e.preventDefault(), e.stopImmediatePropagation();
    },
  },
  r = {
    an: null,
    st: null,
    it: function (e) {
      try {
        (this.an || this.gn(20)).postMessage(e);
      } catch (e) {
        (r = null), this.st({ N: 9 });
      }
    },
    wn: function (e) {
      var t = e.N;
      43 === t
        ? n.Gt(e)
        : 44 === t
        ? n.wt(e)
        : 42 === t
        ? n.fn && n.fn(e)
        : 45 === t
        ? n.sn(e)
        : 46 === t
        ? n.en(e)
        : 47 === t && n.nn(e);
    },
    yn: function (e) {
      var t = e.data,
        o = "number" == typeof t ? t : t.N;
      0 === o ? n.y(t) : 2 === o ? n.nt() : 1 === o && n.rt(1);
    },
    bn: function () {
      r.an = null;
    },
    gn: function (t) {
      var n = { name: e ? "vimium-c." + t + "@03a062b" : "" + t },
        o = (r.an = e
          ? chrome.runtime.connect(e, n)
          : chrome.runtime.connect(n));
      return o.onDisconnect.addListener(r.bn), o.onMessage.addListener(r.wn), o;
    },
  };
(function () {
  function i(e) {
    if (e.source === parent) {
      var t = e.data;
      if (
        !(
          t &&
          3 === t.length &&
          "VimiumC" === t[0] &&
          "string" == typeof t[1] &&
          "object" == typeof t[2]
        )
      )
        return;
      l && o.Wt(e, 0), 16 === t[1].length && c(t[1], e.ports[0], t[2]);
    }
  }
  var a, u, l, s, c, f;
  if ("1.73" === document.documentElement.dataset.version) {
    if (
      location.pathname.startsWith("/front/") ||
      !(a = document.currentScript)
    );
    else {
      if (
        !a.src.endsWith("/front/vomnibar.js") ||
        /^(ht|s?f)tp/.test(a.src) ||
        /^(ht|s?f)tp/.test(location.origin)
      )
        return void a.remove();
      (e = new URL(a.src).host), (t = e);
    }
    (u = []),
      (l = null === a),
      (s = ""),
      (c = function (e, t, o) {
        s && e === s
          ? ((s = "1"),
            clearTimeout(f),
            removeEventListener("message", i, true),
            (r.st = t.postMessage.bind(t)),
            (t.onmessage = r.yn),
            (window.onunload = n._n),
            r.st({ N: 3, o: o ? 1 : 0 }),
            o && n.y(o))
          : s || u.push([e, t, o]);
      }),
      (f = setTimeout(function () {
        location.href = "about:blank";
      }, 700)),
      (n.fn = function (e) {
        var t,
          o = e.l,
          r = e.s;
        if (((n.fn = null), !r))
          return (
            (s = "2"),
            (u.length = 0),
            removeEventListener("message", i, true),
            void console.log(
              "%cVimium C: warning: Vomnibar was unexpectedly opened without triggering Vomnibar.activate!!!",
              "color: red; background: lightyellow;"
            )
          );
        for (t of ((n.Ve = o.v || 998),
        o.o || (n.xt = 300),
        (n.We = o.o),
        (n.ze = o.k),
        (n.Ze = o.s),
        n.nn({ N: 47, d: { c: o.c, n: o.n, t: o.t, l: o.l } }),
        (s = r),
        u))
          if (t[0] === r) return (u.length = 0), c(t[0], t[1], t[2]);
      }),
      addEventListener("message", i, true),
      r.gn(16);
  } else location.href = "about:blank";
})();
