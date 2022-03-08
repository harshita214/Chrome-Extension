"use strict";
var visualViewport, WeakRef, VApi, VimiumInjector;
(function () {
  var os,
    nr,
    f,
    X,
    k,
    ig,
    er,
    vr,
    vb,
    vB,
    vl,
    vt,
    vT,
    od,
    mn,
    kg,
    km,
    oC,
    rw,
    dE,
    ei,
    lh,
    Lo,
    cI,
    Co,
    ss,
    hI,
    ci,
    de,
    dw,
    cu,
    sh,
    ne,
    je,
    Cc,
    CC,
    Cr,
    oa,
    ah,
    nm,
    nH,
    zi,
    rf,
    fN,
    wd,
    ot,
    ow,
    ac,
    iH,
    sn,
    il,
    wb,
    kf,
    ck,
    kt,
    nk,
    op,
    mD,
    pp,
    ds,
    jo,
    cm,
    hb,
    hH,
    pC,
    fm,
    pa,
    c = 0,
    J = top === window,
    iN = VimiumInjector,
    iA = void 0 === iN,
    d = document,
    lO = location,
    j = false,
    iL = 0,
    rs = d.readyState,
    eh = 0,
    V = function (n, e) {
      return ig("" + n, e);
    },
    cf = function (n) {
      n();
    },
    lH = function () {
      return lO.href;
    },
    gt = Date.now,
    wf = function () {},
    So = Object.create,
    x = function (n) {
      return Object.setPrototypeOf(n, null);
    },
    wr = function (n) {
      return n && new WeakRef(n);
    },
    Y = WeakRef
      ? function (n) {
          return n && n.deref();
        }
      : (wr = function (n) {
          return n;
        }),
    t = setTimeout,
    io = setInterval,
    ct = clearTimeout,
    Ci = clearInterval,
    s = function (n, e, i, f, r) {
      (f ? removeEventListener : addEventListener).call(
        n || window,
        e,
        i || st,
        { passive: !r, capture: true }
      );
    },
    Ce = function (n, e) {
      for (var i of (V(17) + e).split(" ")) s(n, i);
    },
    st = function (n) {
      n.stopImmediatePropagation();
    },
    ij = function (n) {
      return /^javascript:/i.test(n);
    },
    iu = function (n) {
      if (!n || "#" === n[0] || n.length < 5 || ij(n)) return false;
      var e = n.lastIndexOf("#") + 1 || n.length;
      return (
        (n = n.substring(n.lastIndexOf("/", n.lastIndexOf("?") + 1 || e), e)),
        (er || (er = cr(102, "i"))).test(n)
      );
    },
    rl = function (n) {
      console.log(
        n > 0 ? V(n) : n,
        lO.pathname.replace(/^.*(\/[^\/]+\/?)$/, "$1"),
        gt()
      );
    },
    pS = function (n) {
      var e = n.sed;
      return (i(e, 1) && e) || { r: e, k: n.sedKeys || n.sedKey };
    },
    pu = function (n) {
      return {
        g: n.group,
        i: n.incognito,
        k: n.keyword,
        m: n.replace,
        o: n.opener,
        p: n.position,
        r: n.reuse,
        s: pS(n),
        t: n.testUrl,
        w: n.window,
      };
    },
    ea = function (n) {
      return n.replace(/[$()*+.?\[\\\]\^{|}]/g, "\\$&");
    },
    cr = function (n, e) {
      return new RegExp(V(n), e);
    },
    rE = function (n, e) {
      return sc(RegExp, n, e);
    },
    sc = function (n, e, i) {
      try {
        return n(e, i);
      } catch (n) {}
    },
    ty = ["string", "object", "function", "number"],
    i = function (n, e) {
      return typeof n == ty[e || 0];
    },
    lo = function (n) {
      return n.toLowerCase();
    },
    M = Math,
    n = M.max,
    N = M.min,
    De = "delete",
    bs = "backspace",
    SP = "space",
    en = "enter",
    kn = [
      SP,
      "pageup",
      "pagedown",
      "end",
      "home",
      "left",
      "up",
      "right",
      "down",
    ],
    oO = 185,
    Cm = [
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
    kc = ";=,-./`[\\]'\\:+<_>?~{|}\"|",
    Mk = {
      __proto__: null,
      Alt: 1,
      AltGraph: 1,
      Control: 1,
      Meta: 1,
      OS: 1,
      Shift: 1,
    },
    ha = [],
    kN = function (n) {
      var e,
        i = n.keyCode;
      return i > 31 && i < 47
        ? i < 45
          ? kn[i - 32]
          : i > 45
          ? De
          : "insert"
        : i < 47 || 93 === i
        ? 8 === i
          ? bs
          : 27 === i
          ? "esc"
          : 9 === i
          ? "tab"
          : 13 === i
          ? en
          : (93 === i || (i > 15 && i < 19)) && f.a && f.a === n.location
          ? "modifier"
          : ""
        : ((e = n.key) ? /^F\d/.test(e) : i > 111 && i < 132)
        ? "f" + (e ? e.slice(1) : i - 111)
        : "";
    },
    uk = function (n, e) {
      var i = n.keyIdentifier,
        f = i.startsWith("U+") ? parseInt(i.slice(2), 16) : 0;
      return f < 91
        ? f < 33
          ? ""
          : e && f > 47 && f < 58
          ? ")!@#$%^&*("[f - 48]
          : String.fromCharCode(f < 65 || e ? f : f + 32)
        : (f > oO && (f -= 186) < 7) || ((f -= 26) > 6 && f < 11)
        ? kc[f + 12 * e]
        : "";
    },
    CH = function (n) {
      var e,
        i,
        r,
        u,
        t = n.e,
        l = t.key,
        o = t.shiftKey,
        c = "Dead" === l;
      return (
        l
          ? (f.l > 0 && (f.l > 1 || t.altKey)) || c
            ? ((r = (i = t.code).slice(0, 3)),
              (u = l.length < 2 || c),
              "Num" !== r &&
                (("Key" !== r && "Dig" !== r && "Arr" !== r) ||
                  (i = i.slice(i < "K" ? 5 : 3)),
                (l =
                  1 === i.length && u
                    ? !o || i < "0" || i > "9"
                      ? i
                      : ")!@#$%^&*("[+i]
                    : Mk[l]
                    ? f.a && t.location === f.a
                      ? "modifier"
                      : ""
                    : "Escape" === l
                    ? "esc"
                    : i.length < 2 || !u
                    ? l.startsWith("Arrow")
                      ? l.slice(5)
                      : l
                    : (e = Cm.indexOf(i)) < 0
                    ? i
                    : kc[e + 12 * +o])),
              (l = o && l.length < 2 ? l : lo(l)))
            : (l =
                l.length > 1 || " " === l
                  ? kN(t)
                  : f.i
                  ? o
                    ? l.toUpperCase()
                    : lo(l)
                  : l)
          : (l = kN(t) || uk(t, +o)),
        (n.c = l)
      );
    },
    ke = function (n) {
      return n.slice(n.lastIndexOf("-") + 1) || (n && "-");
    },
    gk = function (n) {
      return n.altKey | (2 * n.ctrlKey) | (4 * n.metaKey) | (8 * n.shiftKey);
    },
    ie = function (n) {
      return "esc" === n ? 5 : "c-[" === n ? 4 : 0;
    },
    pr = function (n) {
      n.preventDefault(), st(n);
    },
    sM = function (n, e) {
      z(n),
        ph(
          e ||
            function (e) {
              return ie(_(e, 0)) && z(n), 123 === e.i || 116 === e.i ? 1 : 2;
            },
          n
        );
    },
    wn = function (n, e, i) {
      sM(n, function (f) {
        var r = _(f, e);
        return r && z(n), ie(r) ? (i(), 2) : 0;
      });
    },
    St = function (n, i) {
      var f = 0,
        r = function (u) {
          return n
            ? ((f && 0 === i) ||
                (ct(f),
                (f = t(function () {
                  z(r), i && e && i();
                }, n))),
              2)
            : u.e.repeat
            ? 2
            : (z(r), 0);
        };
      return n && r(), i || ph(r, r), r;
    },
    ph = ha.push.bind(ha),
    z = function (n) {
      var e = ha.lastIndexOf(n);
      e > 0 && (e === ha.length - 1 ? (ha.length -= 2) : ha.splice(e - 1, 2));
    },
    pb = null,
    wz = 1,
    dz = 1,
    bz = 1,
    zs = 0,
    dS = 1,
    bS = 1,
    ST = null,
    w = function (n) {
      return n ? (n < 2 ? innerWidth : devicePixelRatio) : innerHeight;
    },
    S = function (n, e) {
      var i,
        f = 1 & e;
      return n && (n !== ST || e > 1)
        ? e < 4
          ? f
            ? n.clientHeight
            : n.clientWidth
          : e < 6
          ? f
            ? n.scrollHeight
            : n.scrollWidth
          : f
          ? n.scrollTop
          : n.scrollLeft
        : e > 5
        ? f
          ? scrollY
          : scrollX
        : (i = visualViewport) && i.width
        ? f
          ? i.height
          : i.width
        : w(1 - f);
    },
    pc = function (e, i) {
      var f,
        r,
        t,
        l,
        o = dz * bz,
        c = e && visualViewport;
      if (((vl = vt = 0), c && c.width))
        (f = ((vl = 0 | c.offsetLeft) + c.width) | 0),
          (r = ((vt = 0 | c.offsetTop) + c.height) | 0);
      else if (
        ((l = u()), (t = "BackCompat" === d.compatMode ? d.body : l) && !q(t))
      )
        (f = S(t, 2)), (r = S(t, 3));
      else {
        if (((f = w(1)), (r = w()), !l))
          return (vb = r), (vB = r - 8), (vr = f);
        (f = N(n(f - 24, (S(l, 2) * dz) | 0), f)),
          (r = N(n(r - 24, (S(l, 3) * dz) | 0), r));
      }
      pb && ((f = N(f, pb[0] * dz)), (r = N(r, pb[1] * dz))),
        (vr = (f / o) | 0),
        (vb = (r / o) | 0),
        i &&
          ((vl = n(vl, 0 | i.l)),
          (vt = n(vt, 0 | i.t)),
          (vr = N(vr, 0 | i.r)),
          (vb = N(vb, 0 | i.b))),
        (vT = vt + 3),
        (vB = (vb - 8 / o) | 0);
    },
    rt = function (n, e, i, f) {
      if (e > vB || f < vT) return null;
      var r = {
        l: n > vl ? 0 | n : vl,
        t: e > vt ? 0 | e : vt,
        r: i < vr ? 0 | i : vr,
        b: f < vb ? 0 | f : vb,
      };
      return r.r - r.l > 2 && r.b - r.t > 2 ? r : null;
    },
    g = function (n) {
      var e = ep.getBoundingClientRect;
      return (g = e.call.bind(e))(n);
    },
    Q = function (n, e) {
      var i,
        f,
        r,
        u,
        t,
        l,
        o,
        c,
        a,
        s,
        v,
        d = n.getClientRects();
      for (l = 0; l < d.length; l++)
        if ((o = d[l]).height > 0 && o.width > 0) {
          if ((i = rt(o.left, o.top, o.right, o.bottom)))
            return sV(e || C(n)) || 1 & eh ? i : null;
        } else if (!f)
          for (f = "inline", c = n.children, a = 0; a < c.length; a++)
            if (
              ((r =
                (v = C((s = c[a]))).float !== no ||
                ("static" !== (t = v.position) && "relative" !== t)) ||
                (0 === o.height &&
                  (null == u &&
                    (e || (e = C(n)),
                    (u =
                      ("0px" === e.fontSize || "0px" === e.lineHeight) &&
                      e.display.startsWith(f))),
                  (r = u && v.display.startsWith(f)))),
              r && !q(s) && (i = Q(s, v)))
            )
              return i;
      return null;
    },
    fA = function (e, i, f) {
      var r,
        u,
        t,
        l,
        o,
        c,
        a,
        s,
        v,
        d,
        m,
        b,
        p,
        h,
        k = R(g(e)),
        w = k.r - k.l,
        y = k.b - k.t;
      if (y < 3 || w < 3) return null;
      if (!f) {
        if (
          ((a = 'map[name="'.concat(
            CSS.escape(e.useMap.replace(/^#/, "")),
            '"]'
          )),
          (s = rn(e)),
          !(v = qs(a, s)) || !H(v))
        )
          return null;
        f = sa("area", v);
      }
      for (
        d = function (n) {
          return 0 | n;
        },
          m = 0,
          b = f.length;
        m < b;
        m++
      )
        if (H((p = f[m]))) {
          switch (((h = p.coords.split(",").map(d)), lo(p.shape))) {
            case "circle":
            case "circ":
              (o = h[1]),
                (u = (t = h[0]) - (r = h[2] / M.sqrt(2))),
                (t += r),
                (l = o - r),
                (o += r),
                (r = 3);
              break;
            case "default":
              (u = l = r = 0), (t = w), (o = y);
              break;
            case "poly":
            case "polygon":
              (u = N((l = h[0]), (o = h[2]), (r = h[4]))),
                (t = n(l, o, r)),
                (l = N((l = h[1]), (o = h[3]), (r = h[5]))),
                (o = n(h[1], o, r)),
                (r = 6);
              break;
            default:
              (u = h[0]) > (t = h[2]) && ((u = t), (t = h[0])),
                (l = h[1]) > (o = h[3]) && ((l = o), (o = h[1])),
                (r = 4);
          }
          h.length < r ||
            ((c = rt(u + k.l, l + k.t, t + k.l, o + k.t)) &&
              i.push([p, c, 0, [c, 0], e]));
        }
      return i.length ? i[0][1] : null;
    },
    gI = function (n) {
      var e = eh,
        i = ((eh = 0), Q(n));
      return (eh = e), i;
    },
    cR = function (n, e) {
      for (var i, f, r, u = n, t = e ? 3 : 0; 0 < t-- && (u = gp(u, 4)); )
        ((r = C(u).overflow) !== hd && "clip" !== r) ||
          ((f = R(g(u))),
          (e = (i = rt(f.l, f.t, f.r, f.b)) && iC(e, i) ? i : e));
      return e;
    },
    fd = function (n, e, i) {
      var f, r, u;
      return (
        (zs = 0),
        1 === n ||
        c < 61 ||
        ((f = g(e).width),
        M.abs(f - (r = visualViewport.width)) > 0.001 &&
          (M.abs(f * n - r) < 0.01 ||
            (c > 67 && !q(e) && (u = e.style) && u.zoom && u.zoom) ||
            ((zs = 1), n !== pz(n, i, e))))
          ? n
          : 1
      );
    },
    pz = function (n, e, i) {
      var f,
        r,
        u = E("iframe");
      try {
        nf(i, u),
          (i = (r = u.contentDocument) && r.documentElement),
          (f = i && +C(i).zoom);
      } catch (n) {}
      return (
        W(u),
        (pz = function (e, i) {
          return f ? (i / n) * f : e;
        }),
        f || e
      );
    },
    ez = function (n) {
      return (n && n.display !== no && +n.zoom) || 1;
    },
    gz = function (n) {
      var e,
        i = u(),
        f = w(2),
        r = +C(i).zoom || 1,
        t = fe();
      for (
        r = fd(r, i, f),
          n &&
            (bz =
              (e = t ? null : d.body) && (1 === n || I(n, e)) ? ez(C(e)) : 1);
        t && t !== i;
        t = gp(t, c < 67 ? 4 : 3)
      )
        r *= ez(C(t));
      (pb = null), (dz = r), (wz = M.round(r * N(f, 1) * 1e3) / 1e3);
    },
    gv = function (e) {
      var i,
        f,
        r,
        t,
        l,
        o,
        a,
        s,
        v,
        m = w(2),
        b = M.round,
        p = parseFloat,
        h = u(),
        k = C(h),
        y = d.body,
        H = y ? C(y) : k,
        x = (bz = ez(H)),
        E = k.contain || "",
        _ = "matrix(1,",
        $ = /c|p/.test(E),
        T = c > 95 && /s|t/.test(E),
        j =
          !(2 === e) &&
          ("static" !== k.position ||
            (c < 70 ? $ : /a|c/.test(E)) ||
            k.transform !== no),
        I = R(g(h)),
        Y = fd(+k.zoom || 1, h, m),
        D = w(1),
        F = w(),
        L = k.transform,
        O = (dS = (L && !L.startsWith(_) && p(L.slice(7))) || 1);
      return fe()
        ? (gz(1),
          (dS = bS = 1),
          [0, 0, ((D * dz) / wz) | 0, ((F * dz) / wz) | 0, 0])
        : ((bS =
            (y && (L = H.transform) && !L.startsWith(_) && p(L.slice(7))) || 1),
          (wz = b(Y * N(m, 1) * 1e3) / 1e3),
          (dz = Y),
          (i = j ? 0 | -h.clientLeft : p(k.marginLeft)),
          (f =
            (f = j ? 0 | -h.clientTop : p(k.marginTop)) *
              (r = 2 === e ? 1 : O) -
            I.t),
          (i =
            (i = i * r - I.l) * i < 1e-4 ? 0 : M.ceil(b((i / x) * 100) / 100)),
          (f = f * f < 1e-4 ? 0 : M.ceil(b((f / x) * 100) / 100)),
          (t = D /= Y),
          (l = F /= Y),
          (pb = $
            ? [
                (D = I.r) - p(k.borderRightWidth) * O,
                (F = I.b) - p(k.borderBottomWidth) * O,
              ]
            : null),
          e
            ? ((o = sE()),
              (s = !(a = /hidden|clip/).test(
                "" + k.overflowX + (T ? "" : H.overflowX)
              )),
              (v = !a.test("" + k.overflowY + (T ? "" : H.overflowY))),
              s &&
                ((t += 64 * x),
                (D = $
                  ? D
                  : (o && (S(o, 4) - scrollX) / Y) || n(D - 24 / Y, I.r))),
              v &&
                ((l += 20 * x),
                (F = $
                  ? F
                  : (o && (S(o, 5) - scrollY) / Y) || n(F - 24 / Y, I.b))),
              (F = ((F = F < l ? F : l) / x) | 0),
              [
                i,
                f,
                (D = ((D = D < t ? D : t) / x) | 0),
                v ? F - 24 : F,
                s ? D : 0,
              ])
            : [i, f]);
    },
    ni = function (n, e) {
      return (
        e || (e = R(g(n))),
        e.b - e.t < 1 || e.r - e.l < 1
          ? 2
          : e.b <= 0 || e.t >= w() || e.r <= 0 || e.l >= w(1)
          ? 1
          : 0
      );
    },
    sA = function (n) {
      return "Range" === n.type;
    },
    sR = function (n, e) {
      return e || rc(n) ? n.getRangeAt(0) : null;
    },
    sb = function (n) {
      return sR(n, 1).getBoundingClientRect();
    },
    vi = function (n, e) {
      var i,
        f,
        r,
        u,
        t,
        l = R(g(n)),
        o = ni(null, l);
      return (
        1 === o &&
          ((f = w()),
          (u = null != e),
          (t = l.b - l.t),
          iv(n, (r = l.t < 0 ? -1 : l.t > f ? 1 : 0) < 0),
          u && (u = r * (i = t < f ? e - scrollY : 0) <= 0 && r * i >= t - f),
          (r || u) && sw(1, u ? (i * i < 4 ? 0 : i) : (r * f) / 5)),
        0 === o
      );
    },
    iS = function (n, e) {
      var i;
      return ((i = { behavior: "instant" })[n ? "top" : "left"] = e), i;
    },
    sw = function (n, e) {
      ep.scrollBy ? scrollBy(iS(n, e)) : scrollBy(n ? 0 : e, n && e);
    },
    cE = function (n) {
      var e = (dz * bz) / 2;
      return (n = (n && rt(n.l, n.t, n.r, n.b)) || n)
        ? [((n.l + n.r) * e) | 0, ((n.t + n.b) * e) | 0]
        : [0, 0];
    },
    iC = function (n, e) {
      return e.b - 5 < n.b && e.r - 5 < n.r && e.t > n.t - 5 && e.l > n.l - 5;
    },
    R = function (e, i) {
      var f = e.left,
        r = e.top;
      return {
        l: 0 | f,
        t: 0 | r,
        r: (f + n(e.width, (i = ((f || r) && i) || 0))) | 0,
        b: (r + n(e.height, i)) | 0,
      };
    },
    za = function (n, e, i) {
      var f = +(e || C(n)).zoom || 1,
        r = R(g(n)),
        u = rt(r.l * f, r.t * f, r.r * f, r.b * f);
      return i && (u = cR(n, u)), u;
    },
    sB = function (n, e, i) {
      var f = i && (e.t < 0 || e.l < 0 || e.b > w() || e.r > w(1)),
        r = "px",
        u = f && gv();
      return (
        u && ((e.l += u[0]), (e.r += u[0]), (e.t += u[1]), (e.b += u[1])),
        (n.left = e.l + r),
        (n.top = e.t + r),
        (n.width = e.r - e.l + r),
        (n.height = e.b - e.t + r),
        f
      );
    },
    dA = "DOMActivate",
    md = "mousedown",
    Cl = "click",
    hd = "hidden",
    no = "none",
    iO = "input",
    BU = "blur",
    al = "aria-label",
    un = "unload",
    kd = ["backward", "forward"],
    uf = "",
    DS = true,
    ra = requestAnimationFrame,
    ep = Element.prototype,
    C = getComputedStyle,
    y = getSelection,
    u = function () {
      return d.documentElement;
    },
    ae = function () {
      return d.activeElement;
    },
    qs = function (n, e) {
      return (e || d).querySelector(n);
    },
    sa = function (n, e, i) {
      try {
        return (e && i ? ep : e || d).querySelectorAll.call(e || d, n);
      } catch (n) {}
    },
    tm = function (n, e) {
      return e[0].matches(n);
    },
    ii = function (n) {
      var e = n.localName;
      return ("iframe" === e || "frame" === e) && "lang" in n;
    },
    IN = function (n, e) {
      return n.nodeType === e;
    },
    rc = function (n) {
      return n.rangeCount;
    },
    cs = function (n, e) {
      return n.contains(e);
    },
    a = function (n, e) {
      return n.getAttribute(e);
    },
    so = function (n, e) {
      return e ? n.focusOffset : n.anchorOffset;
    },
    to = function (n, e) {
      return e ? n.selectionEnd : n.selectionStart;
    },
    pn = function (n) {
      return n.parentNode;
    },
    dh = function () {
      return d.hasFocus();
    },
    Ih = function () {
      return "lang" in (u() || {});
    },
    H = function (n) {
      var e;
      return "lang" in n && "string" == typeof (e = n.localName)
        ? "form" === e || e === uf
          ? ""
          : e
        : "";
    },
    ht = function (n, e) {
      return e.localName === n && "lang" in e;
    },
    mC = function () {
      var n = qs("meta[name=viewport]");
      return !!n && cr(107, "i").test(n.content);
    },
    gu = function (n, e, i) {
      var f = Object.getOwnPropertyDescriptor(n.prototype, i);
      return f && f.get ? f.get.call(e) : null;
    },
    q = function (n) {
      var e;
      return "string" != typeof (e = n.localName) || "form" === e || e === uf;
    },
    se = function (n, e) {
      return n && q(n) ? se(gp(n, e || 4), e) : n;
    },
    sr = function (n) {
      var e = n.shadowRoot;
      return e && q(n) ? null : e;
    },
    nn = function (n) {
      return q(n) ? gu(Node, n, "childNodes") : n.childNodes;
    },
    gp = function (n, e) {
      var i, f, r, u, t;
      if (
        e >= 3 &&
        (c < 80 &&
          (r = (f = (i = ep.getDestinationInsertionPoints) ? i.call(n) : [])
            .length) > 0 &&
          (n = f[r - 1]),
        (u = n.assignedSlot) && q(n) && (u = gu(Element, n, "assignedSlot")),
        u)
      ) {
        if (3 === e) return u;
        for (; (u = u.assignedSlot); ) n = u;
      }
      return n.parentElement !== (t = n.parentNode) && t
        ? ((t =
            (uf && t.top === top) || !t.nodeType || !d.contains.call(t, n)
              ? gu(Node, n, "parentNode")
              : t),
          0 === e
            ? t
            : e >= 2 && IN(t, 11)
            ? t.host || null
            : t.tagName
            ? t
            : null)
        : t;
    },
    rn = function (n) {
      var e;
      if (c > 53) return n.getRootNode();
      for (; (e = gp(n, 0)); n = e);
      return n;
    },
    sE = function (n) {
      var e = d.scrollingElement,
        i = u();
      return e && !q(e) ? e : n && i && !q(i) ? i : null;
    },
    fe = function () {
      return d.webkitFullscreenElement;
    },
    fE = function () {
      try {
        return frameElement;
      } catch (n) {}
    },
    cd = function (n, e) {
      return Node.prototype.compareDocumentPosition.call(n, e);
    },
    ga = function (n, e) {
      return e ? n.focusNode : n.anchorNode;
    },
    mS = function (n) {
      return [].find.call(n.children, ht.bind(0, "summary")) || null;
    },
    Fa = function (n) {
      for (; n && !ht("a", n); ) n = gp(n, 4);
      return n;
    },
    I = function (n, e, i) {
      var f, r;
      if ((!e || IN(e, 9)) && null != (f = n.isConnected))
        return f && (!e || n.ownerDocument === e);
      if (n.contains.call((e = e || n.ownerDocument || d), n)) return true;
      for (; (r = gp(n, i ? 4 : 2)) && r !== e; ) n = r;
      return (r || gp(n, 0)) === e;
    },
    is = function (n) {
      return sV(C(n));
    },
    sV = function (n) {
      return "visible" === n.visibility;
    },
    nt = function (n, e) {
      var i = n.getAttribute(e ? "aria-disabled" : "aria-hidden");
      return null === i || (!!i && "true" !== lo(i)) || !!(eh & (16 << e));
    },
    Ic = function () {
      var n = fe() || u(),
        e = n && C(n);
      return !!e && "none" !== (c < 53 ? e.webkitFilter : e.filter);
    },
    mT = function (n) {
      var e = n.localName;
      return "img" === e
        ? 0
        : "video" === e || "audio" === e
        ? 1
        : "a" === e
        ? 2
        : 3;
    },
    mu = function (n, e) {
      var i, f;
      return (
        n.dataset.src ||
        (e && n.currentSrc) ||
        ((f = a(n, (i = e ? "src" : "href")) || "") && n[i]) ||
        f
      );
    },
    da = function (n) {
      var e,
        i = ae(),
        f = n && (i || u());
      if (i !== d.body && i !== u())
        for (; i && (e = sr((f = i))); ) i = e.activeElement;
      return f || null;
    },
    ui = {
      __proto__: null,
      bu: 1,
      ch: 1,
      co: 1,
      fi: 1,
      hi: 1,
      im: 1,
      ra: 1,
      re: 1,
      su: 1,
    },
    et = {
      __proto__: null,
      input: 4,
      textarea: 3,
      select: 2,
      embed: 1,
      object: 1,
    },
    it = function (n) {
      return n.type.slice(0, 2);
    },
    ge = function (n) {
      var e = H(n),
        i = et[e];
      return e
        ? 4 !== i
          ? i || (true !== n.isContentEditable ? 0 : 3)
          : ui[it(n)]
          ? 0
          : 3
        : 0;
    },
    gd = function (n, e, i) {
      var f = cd(e, i);
      return (24 & f ? sR(n, 1).endContainer === e : 2 & f) ? 0 : 1;
    },
    sf = function (n, e) {
      var f,
        r,
        u,
        t = rc(n) && ga(n, 1),
        l = t;
      if (!t) return null;
      for (
        r = ga(n),
          e =
            null != e
              ? e
              : r === t
              ? so(n, 1) < so(n)
                ? 0
                : 1
              : r
              ? gd(n, r, t)
              : 1,
          t.tagName ? (l = nn(t)[so(n, 1)]) : (t = gp(t, 0));
        l && i((f = l.nodeType), 3) && f - 1;
        l = e ? l.previousSibling : l.nextSibling
      );
      return (
        l && r && !(24 & (u = cd(r, l))) && u & (e ? 2 : 4) && (l = 0),
        se(l || t, 1)
      );
    },
    eu = function (n) {
      var e,
        i = ga(n);
      return (i =
        i &&
        i.tagName &&
        i === ga(n, 1) &&
        (e = so(n)) === so(n, 1) &&
        nn(i)[e]) && IN(i, 1)
        ? i
        : null;
    },
    ed = function (n) {
      return (n && !q(n) && [n.localName, n.id, n.className]) || null;
    },
    eF = function (n, e) {
      var f,
        r = n;
      for (f of (e = e.trim()) ? e.split(".") : [])
        r && i(r) && (r = sc(JSON.parse, r)),
          (r =
            r !== n
              ? r && i(r, 1) && r[f]
              : n
              ? (n.dataset && n.dataset[f]) || n[f] || a(n, f)
              : 0);
      return i(r) ? r : "";
    },
    E = d.createElement.bind(d),
    an = function (n, e) {
      n.appendChild(e);
    },
    nf = function (n, e) {
      ep.appendChild.call(n, e);
    },
    W = function (n) {
      n.remove();
    },
    cn = function (n, e) {
      n.className = e;
    },
    sv = function (n, e) {
      n.style.visibility = e ? "" : hd;
    },
    sD = function (n, e) {
      n.style.display = e ? "" : no;
    },
    or = function (n, e, i) {
      null != i ? n.setAttribute(e, i) : n.removeAttribute(e);
    },
    tc = function (n, e, i) {
      var f = n.classList;
      null != i ? f.toggle(e, !!i) : f.toggle(e);
    },
    tC = function (n, e) {
      return e ? (n.textContent = e) : n.textContent;
    },
    as = function (n) {
      return n.attachShadow
        ? n.attachShadow({ mode: "closed" })
        : n.createShadowRoot();
    },
    iv = function (n, e) {
      ep.scrollIntoView.call(n, null != e ? e : { block: "nearest" });
    },
    ms = function (n, e, i, f) {
      n.modify(e ? "extend" : "move", kd[+i], f);
    },
    rj = function (n, e) {
      var i = u(),
        f = e || E("script");
      return (
        (f.type = "text/javascript"),
        tC(f, n),
        i ? nf(i, f) : an(d, f),
        null != e ? f : W(f)
      );
    },
    fo = function (n) {
      n.focus && n.focus();
    },
    bu = function (n) {
      n && i(n.blur, 2) && n.blur();
    },
    Ac = function (n) {
      var e,
        f,
        t,
        o,
        a,
        s,
        v,
        m,
        h,
        g,
        k,
        w,
        H = function () {
          var n, i, f, r, t;
          if (!Ih()) return 0;
          for (
            pc(),
              r = d.createTreeWalker(
                F.r || d.body || u(),
                NodeFilter.SHOW_TEXT
              );
            (n = r.nextNode()) &&
            (!(
              50 <= (i = n.data).length &&
              50 < i.trim().length &&
              (t = n.parentElement) &&
              !q(t) &&
              Q(t)
            ) ||
              ge(t));

          );
          return n
            ? ((f = i.match(/^\s*/)[0].length),
              e.collapse(n, f),
              (N = 1),
              rc(e))
            : F.r
            ? ((e = y()), (m = null), H())
            : 0;
        },
        C = function () {
          (X = 0), (f = void 0);
        },
        S = function (i) {
          var f = gS(1, e),
            r = o;
          i < 8 && dE(),
            f
              ? i < 7
                ? p({ H: 6, u: f, r: i, o: pu(n) })
                : r || i > 8
                ? (eC("copy", d), T(20, 0, "# " + f))
                : p({ H: 16, s: f, e: pS(n) })
              : T(15);
        },
        E = function (n) {
          var i, f, r, u, t, l, o, c, a;
          if (2 !== N) return N;
          if (((i = s), (r = ga((f = e))), (u = -1), !i || 9 & i)) {
            if (r !== (l = ga(f, 1)))
              return (s = 0), (N = "" !== n ? gd(f, r, l) : 2);
            if (((u = so(f)), (t = so(f, 1) - u) || !r || IN(r, 3)))
              return (s = 0), (N = t >= 0 ? 1 : 0);
          }
          return (o = L()) &&
            pn(o) === r &&
            (1 & i &&
              ge(o) > 2 &&
              ((o !== (c = nn(r)[u >= 0 ? u : so(f)]) && c) ||
                (null != sc(to, o) && (s = 2 | (4 & i)))),
            2 & s)
            ? (N = o.selectionDirection !== kd[0] ? 1 : 0)
            : ((s = 1 & i ? 8 | (4 & i) : 12 & i),
              "" === n
                ? 2
                : (u = (a = n || "" + f).length)
                ? (j(1),
                  (s = s && so(f) !== so(f, 1) ? 0 : -5 & s),
                  (t = ("" + f).length - u) && !n
                    ? (j(0), "" + f !== a && j(1))
                    : (A = 2 + u),
                  (N = t >= 0 || (n && t === -u) ? 1 : 0))
                : (N = 1));
        },
        $ = function (n) {
          var i,
            f,
            r = e;
          4 & s &&
            ((f = (i = n === N) && 8 & s && ("" + r).length),
            j(1 - N),
            i && j(n),
            f && ("" + r).length !== f && j(1 - n)),
            CS(r, n),
            (N = 1);
        },
        j = function (n, i) {
          ms(e, 1, n, kg[0 | i]), (s &= -5);
        },
        M = function (n, i) {
          ms(e, a, n, kg[i]);
        },
        I = function () {
          var n = D[e.type];
          return 58 === c && 1 === n && s && "" + e ? 2 : n;
        },
        Y = function (n) {
          2 === I() && $(E() ^ n ^ 1), (N = 1);
        },
        D = { None: 0, Caret: 1, Range: 2 },
        F = {},
        O = n.m || 1,
        X = 0,
        N = 2,
        A = 0;
      (fc = n.f || fc),
        km ||
          (c < 59 && (oC = rE(n.w)),
          c > 58 && (rw = /[^\S\n\u2029\u202f]+$/),
          x((km = n.k)),
          x(km.a),
          x(km.g),
          (kg = n.g)),
        (dE = function (n) {
          var e, i;
          (N = 2),
            (s = 5),
            E(""),
            (e = s),
            z(3),
            t || Y(n && 3 !== O ? 1 : 0),
            (mn = ""),
            (i = L()),
            10 & e || (i && i.blur()),
            ts(),
            (ST = null),
            (dE = null),
            hh();
        }),
        cD(),
        (ST = sE(1)),
        gz(1),
        Ts(),
        (s = 5),
        (e = gs(F)),
        (v = I()),
        (m = F.r),
        (mn && 3 === O) ||
          (mn || ((t = 2 === v), (o = n.t)),
          !L() &&
            v &&
            ((h = R(sb(e))),
            pc(),
            rt(h.l, h.t, (h.l || h.r) && h.r + 3, (h.t || h.b) && h.b + 3)
              ? 1 === v && (j(1), 2 === I() || j(0))
              : td(e),
            (v = I()))),
        (mn = V(67 + (O = (k = !(g = 2 === v) && 3 !== O) ? 3 : O))),
        (N = g ? 2 : 1),
        (a = 3 !== O),
        b || hs(1),
        ts(1),
        v || (!n.$else && H())
          ? (!a && g && $(+(!n.s && ("" + e).length > 1) && E()),
            sM(3, function (n) {
              var e,
                r,
                u,
                l = 229 === n.i || (93 === n.i && os),
                o = l ? "" : _(n, 5),
                c = ke(o);
              return !o || ie(o)
                ? (!o || X || f ? C() : dE(1), o ? 2 : l ? 0 : 1)
                : ke(o) === en
                ? (C(),
                  o > "s" && 3 !== O && (t = 1),
                  "cm".includes(o[0]) ? dE() : S(o < "b" ? 8 : 7),
                  2)
                : ((e = f && f[o]),
                  (r = !f || e ? X : 0),
                  (u = null != e ? e : /^v\d/.test(o) ? +o.slice(1) : km[o]),
                  i(u, 3)
                    ? (C(), pr(n.e), (N = 2), (s = 5), w(u, r || 1), 2)
                    : ((X = u ? X : o.length < 2 && +o < 10 ? +o + 10 * r : 0),
                      (f = u),
                      u
                        ? 2
                        : c.length > 1 || (o !== c && o < "s")
                        ? o.startsWith("v-") || (c > "f0" && c < "f:")
                          ? 0
                          : 1
                        : 2));
            }),
            (w = function (n, i) {
              var f,
                r = function (n) {
                  if (qu) {
                    var i = e,
                      f = rc(i) && (E(""), !s) && sR(i);
                    ef("", { noColor: 1, c: n }),
                      hr
                        ? ((s = 5),
                          3 === O && 2 === I()
                            ? Ac(x({}))
                            : ((N = 2), w(-1, 1)))
                        : (f && !rc(i) && td(i, f), T(89, 1, qu));
                  } else
                    Se(1, 1, function (e) {
                      e ? (uq(e), r(n)) : T(88, 1);
                    });
                },
                u = function (n) {
                  var i,
                    f,
                    r,
                    u,
                    t,
                    o,
                    c,
                    a,
                    v = e;
                  if (((A = 0), 2 & s))
                    return (i = l).value.charAt(
                      to(i, 1 === N || i.selectionDirection !== kd[0])
                    );
                  if (
                    !s &&
                    ((f = ga(v, 1)),
                    IN(f, 3) &&
                      ((r = so(v, 1)),
                      (u = f.data).charAt(r).trim() ||
                        (r &&
                          u.charAt(r - 1).trim() &&
                          u.slice(r).trimLeft() &&
                          "\n" !== u[r])))
                  )
                    return u[r];
                  if (((t = 0), !n)) {
                    if ((o = "" + v) && (!E(o) || 1 === I())) return o[0];
                    t = o.length;
                  }
                  return (
                    A || j(1),
                    (a = (c = "" + v).length) !== t
                      ? (n && $(1 === a ? 1 : 0),
                        (A = n && 1 !== a ? 0 : 2 + t),
                        c[a - 1] || "")
                      : ""
                  );
                },
                t = function (n, i, f) {
                  var r,
                    t,
                    l,
                    a,
                    v,
                    d,
                    m,
                    b = 2 === i;
                  for (
                    (b || 1 === i) &&
                      (n &&
                        ((r = os > 1 !== b),
                        (f -= (os > 1 && c > 89 && !!(t = o(0))) || (r && !b))),
                      (i = 1)),
                      l = N;
                    0 < f--;

                  )
                    M(n, i);
                  if (
                    (3 !== O && (s &= -5),
                    (N = n === l ? n : 2),
                    i - 3 || T(44, 2),
                    3 === O && void 0 !== t && (!r || b) && $(1),
                    r)
                  )
                    if (b) {
                      (a = 3 === O ? 1 : 0), E(""), (A = 1);
                      do {
                        A || (M(1, 0), (N = N || 2)), (v = u(a));
                      } while (v && (rw ? rw.test(v) : !oC.test(v)));
                      v &&
                        A &&
                        ((d = A - 2),
                        (m = a || ("" + e).length),
                        M(0, 0),
                        a ||
                          (("" + e).length - d && j(1), (N = m < d ? 0 : 1)));
                    } else o(t);
                },
                o = function (n) {
                  var i,
                    f,
                    r,
                    u,
                    t,
                    o,
                    c,
                    a,
                    v,
                    d = n ? n[0] : "" + e,
                    m = d.length,
                    b = n ? n[1] : E();
                  if (
                    (n || j(1, 1),
                    (f = (i = "" + e).length),
                    b || (N = i ? 2 : 1),
                    (i = b ? i.slice(m) : E() ? d + i : d.slice(0, m - f)),
                    (t =
                      (u = (r = (rw || oC).exec(i))
                        ? rw
                          ? r[0].length
                          : i.length - r.index - r[0].length
                        : 0) > 0 && u < i.length),
                    0 === n)
                  )
                    return u <= 0 || t ? [d, b] : null;
                  if (t)
                    if (2 & s)
                      (v = (a = to((c = l))) + f),
                        N ? (v -= u) : (a -= u),
                        c.setSelectionRange(
                          a < v ? a : v,
                          a < v ? v : a,
                          kd[a < v ? N : (N = 0)]
                        );
                    else {
                      for (; u > 0; )
                        j(0),
                          f || (N = 0),
                          (u -= (o = f - ("" + e).length) > 0 ? o : -o || u),
                          (f -= o);
                      u < 0 && j(1);
                    }
                  return 3 === O && $(1), t;
                },
                v = function () {
                  var n, i, f, r, u, t, o, c, a;
                  if (2 === I()) {
                    if (((n = e), (f = 1 - (i = E())), 2 & s))
                      (r = l).setSelectionRange(to(r), to(r, 1), kd[f]);
                    else if (8 & s) {
                      for (u = ("" + n).length, t = 0, $(i); t < u; t++) j(f);
                      for (o = 0; o < 16 && (t = ("" + n).length - u); o++)
                        j(t < 0 ? f : i);
                    } else (c = ga(n)), (a = so(n)), $(i), n.extend(c, a);
                    N = f;
                  } else N = 1;
                },
                d = O;
              if (n > 60) es(1, n - 62 ? -i : i, 0);
              else if (n > 50)
                55 === n ? (hh(), p({ H: 27 })) : Ac(x({ m: n - 50 }));
              else {
                if (
                  (m && !rc(e) && ((m = null), (e = y())),
                  n < 46 && !(rc(e) && ga(e)))
                )
                  return dE(), St(1500), T(92, 2);
                if (48 !== n)
                  if ((3 === d && Y(0), n > 45)) r(n - 46 ? i : -i);
                  else {
                    if (n > 30) {
                      if (
                        (32 === n &&
                          (function (n) {
                            var i,
                              f,
                              r = E();
                            for (
                              O = 1, a = 1, r && v(), M(0, 3), N = 0, v();
                              0 < --n;

                            )
                              M(1, 4);
                            M(1, 3),
                              (i = u(0)),
                              (f = A),
                              i &&
                                f &&
                                "\n" !== i &&
                                (j(0), ("" + e).length + 2 - f && j(1));
                          })(i),
                        S([7, 7, 8, 0, -1, 9][n - 31]),
                        33 !== n && 36 !== n)
                      )
                        return;
                    } else
                      n > 20
                        ? ((f = n - 20),
                          Y(0),
                          f - 1 || M(1, 0),
                          M(0, f),
                          (N = 0),
                          Y(1),
                          t(1, f - 6 ? (f - 3 ? f : 4) : 7, i))
                        : 20 === n
                        ? v()
                        : n >= 0 && t(1 & n, n >> 1, i);
                    3 === d
                      ? (j(1), 1 === I() && j(0))
                      : 2 === d &&
                        (function (n) {
                          var i,
                            f,
                            r = E();
                          if (r && n < 20 && n >= 0 && !s && 1 === I())
                            M((r = 1 & ~n), 3),
                              2 !== I() && M(r, 4),
                              (N = r),
                              v(),
                              (i = ("" + e).length),
                              M((r = N = 1 - r), 3),
                              ("" + e).length - i || M(r, 4);
                          else
                            for (f = 2; 0 < f--; )
                              v(), (r = N = 1 - r), M(r, 3);
                        })(n),
                      E(""),
                      8 & s || vs(sf(e, N));
                  }
                else hR(e);
              }
            }),
            w(-1, 1),
            mn && (k ? T(91, 1) : hs(90, mn, n.r)))
          : (dE(), r(n, 93));
    },
    hR = function (n) {
      var e,
        i = rc(n) ? R(sb(n)) : null;
      i &&
        i.b > i.t &&
        i.r > 0 &&
        (e = rt(i.l - 4, i.t - 5, i.r + 3, i.b + 4)) &&
        fl(null, e, 660, " Sel");
    },
    Pr = [],
    dm = function (n) {
      var e,
        i,
        f,
        r,
        u = E("a");
      return (
        n && tC(u, (e = n + "")),
        (r = dispatchEvent(new FocusEvent("vimiumMark", { relatedTarget: u }))
          ? (i = tC(u)) === e
            ? n
            : (f = i.split(",")).length > 1
            ? [~~f[0], ~~f[1], f[2]]
            : n
          : null),
        n ? r : r || [0 | scrollX, 0 | scrollY]
      );
    },
    sp = function (n) {
      (Pr[0 | n] = dm()).push(lO.hash);
    },
    tM = function (n) {
      (n = dm(n)) &&
        (0 === n[1] && n[2] && 0 === n[0]
          ? (lO.hash = n[2])
          : scrollTo(n[0], n[1]));
    },
    cM = function (n, e) {
      p({ H: 19, a: 1, l: e, n: n.n, u: lH(), s: dm() }),
        T(86, 1, [V(84), V(e ? 41 : 39), n.n]);
    },
    ma = function (n) {
      return new Promise(function (e) {
        var i = e.bind(0, void 0),
          f = n(),
          r = function (n) {
            var u = f.next(n);
            Promise.resolve(u.value).then(u.done ? e : r, i);
          };
        r();
      });
    },
    mo = function (n, e, i, f, r, u) {
      var t,
        l,
        o = n.ownerDocument,
        c = o.defaultView || window,
        a = e.slice(5, 6),
        s = "dui".includes(a) ? (4 & u ? 2 : 1) : 0,
        v = "e" !== a && "l" !== a,
        d = i[0],
        m = i[1];
      return (
        Si(
          (l = {
            bubbles: v,
            cancelable: v,
            composed: !0,
            view: c,
            detail: s,
            screenX: d,
            screenY: m,
            clientX: d,
            clientY: m,
            ctrlKey: !!f && f[1],
            altKey: !!f && f[0],
            shiftKey: !!f && f[3],
            metaKey: !!f && f[2],
            button: (u &= 2),
            buttons: "d" === a ? u || 1 : 0,
            relatedTarget: (r = r && r.ownerDocument === o ? r : null),
          })
        ),
        (t = new MouseEvent(e, l)),
        n.dispatchEvent(t)
      );
    },
    Si = function (n) {
      n.sourceCapabilities = ei =
        ei || new InputDeviceCapabilities({ fireTouchEvents: !1 });
    },
    Tc = function (n, e, i) {
      var f = e[0],
        r = e[1],
        u = i || gt(),
        t = new Touch({
          identifier: u,
          target: n,
          clientX: f,
          clientY: r,
          screenX: f,
          screenY: r,
          pageX: f + scrollX,
          pageY: r + scrollY,
          radiusX: 8,
          radiusY: 8,
          force: 1,
        }),
        l = i ? [] : [t],
        o = new TouchEvent(i ? "touchend" : "touchstart", {
          cancelable: !0,
          bubbles: !0,
          touches: l,
          targetTouches: l,
          changedTouches: [t],
        });
      return n.dispatchEvent(o), u;
    },
    hA = function (n, e, i) {
      return ma(function* () {
        var f = e && d.elementFromPoint(e[0], e[1]),
          r = !n || f === n || !f || !cs(n, f),
          u = Y(lh),
          t = (lh = null),
          l = n !== u;
        u && I(u, d)
          ? (yield mo(u, "mouseout", [0, 0], t, l ? n : t),
            (!n || (l && !I(n, u, 1))) &&
              I(u, d) &&
              (mo(u, "mouseleave", [0, 0], t, n), i && I(yield u) && bu(u)),
            (u = l ? u : t),
            yield 0)
          : (u = t),
          n &&
            I(n) &&
            (yield mo(n, "mouseover", e, t, u),
            I(n) &&
              (yield mo(n, "mouseenter", e, t, u),
              r && I(n) && mo(n, "mousemove", e),
              (lh = I(n) ? wr(n) : t),
              l && i && lh && fo(n)));
      });
    },
    ua = function (n) {
      return ma(function* () {
        var e = Y(lh),
          i = n || e;
        e !== n && (yield hA()), (lh = wr(n)), yield hA(), bu(i);
      });
    },
    ca = function (n, e, i, f, r, u, t, l) {
      return ma(function* () {
        var s,
          v,
          m,
          b,
          h,
          g,
          k,
          w = cE(e || (e = Q(n)));
        if (
          (!(c >= 48 && (!0 === t || (t && mC()))) ||
            ((s = yield Tc(n, w)), I(n) && (yield Tc(n, w, s)), I(n))) &&
          (n === Y(lh) || (yield hA(n, w), lh)) &&
          ((v = yield mo(n, md, w, f, null, u)), yield 0, I(n))
        ) {
          if (i && v && n !== L() && n !== da() && !n.disabled) {
            if ((fo(n), !I(n))) return;
            yield 0;
          }
          if ((yield mo(n, "mouseup", w, f, null, u), yield 0, I(n)))
            if (2 !== u) {
              if (
                !n.disabled &&
                ((m = 0),
                (k = 7 & r),
                r &&
                  (m =
                    r > 63
                      ? r - 64
                      : (h = Fa(n)) && (b = a(h, "href"))
                      ? o.sedIf && (g = rE(o.sedIf)) && g.test(h.href)
                        ? 5
                        : (g && k > 5) || "#" === b[0] || ij(b)
                        ? 0
                        : 5
                      : 0),
                (m > 4 || ((yield yield mo(n, Cl, w, f)) && m) || 1 === m) &&
                  Q(n))
              )
                return m < 4
                  ? void (
                      (!(1 & m) ||
                        n.disabled ||
                        (yield ca(n, e, 0, f, 0, 4),
                        Q(n) &&
                          (yield yield mo(n, "dblclick", w, f, null, 4)) &&
                          Q(n))) &&
                      2 & m &&
                      (1 & m
                        ? ht("video", n) &&
                          (c > 70
                            ? fe()
                              ? d.exitFullscreen()
                              : n.requestFullscreen()
                            : fe()
                            ? d.webkitExitFullscreen()
                            : n.webkitRequestFullscreen())
                        : n.paused
                        ? n.play()
                        : n.pause())
                    )
                  : ((A ? A.p : p)({
                      H: 6,
                      u: h.href,
                      f: !0,
                      r:
                        2 === k
                          ? 2
                          : k > 4 && r < 8
                          ? 0
                          : 3 === k
                          ? r < 8
                            ? -5
                            : -6
                          : f[3] || r < 8
                          ? -1
                          : -2,
                      o: l && pu(l),
                    }),
                    1);
            } else mo(n, "auxclick", w, f, null, u);
        }
      });
    },
    SE = function (n, e, i, f, r) {
      var u = scrollY;
      return ca(n, e, 1).then(function () {
        vi(n, u), i && fl(n), n === L() && (sc(Ms, n, f), r && St());
      });
    },
    $ = false,
    qu = "",
    qU = "",
    pq = "",
    pR = null,
    li = 0,
    Hi = 0,
    nE = false,
    iq = true,
    iR = null,
    ic = null,
    ww = false,
    wa = true,
    hr = false,
    mc = 0,
    co = null,
    ir = null,
    ar = 0,
    rm = null,
    rO = null,
    B = null,
    ob = null,
    id = null,
    In = null,
    ce = null,
    fc = null,
    sI = null,
    ou = null,
    dc = 0,
    Is = false,
    pl = null,
    df = function () {
      (dc = 0),
        rO.activeElement === In && In.blur(),
        B.contentWindow.focus(),
        fo(In),
        (dc = 1);
    },
    eC = function (n, e, i) {
      (e || id).execCommand(n, false, i);
    },
    uq = function (n) {
      var e,
        r,
        t,
        l,
        o,
        c,
        a,
        s = function (n) {
          return n
            .normalize("NFD")
            .replace(
              /[\u0300-\u0331\u24b6-\u24e9\uff21-\uff56]/g,
              function (n) {
                var e = n.charCodeAt(0);
                return e < 818
                  ? ""
                  : String.fromCharCode(
                      e - (e < 9472 ? (e < 9424 ? 9333 : 9327) : 65248)
                    );
              }
            );
        },
        v = "\\b",
        d = !1,
        m = null,
        b = null;
      if (
        ((qu = qU = n),
        (wa = !0),
        (ic = null),
        (n = iq
          ? n.replace(/\\[acirw\\]/gi, function (n) {
              var e = n.charCodeAt(1),
                i = e > 96;
              if (92 === e) return n;
              if (73 == (e &= -33) || 67 === e) ic = i === (73 === e);
              else if (82 === e) m = i;
              else {
                if (m) return n;
                e > 65 ? (d = i) : (wa = i);
              }
              return "";
            })
          : n),
        iq &&
          (null !== m ||
            d ||
            ((m = f.r),
            3 == (r = 2 * +n.startsWith(v) + +n.endsWith(v)) &&
            !m &&
            n.length > 3
              ? ((n = n.slice(2, -2)), (d = true))
              : r && r < 3 && (m = true)),
          d &&
            m &&
            ((n = v + ea(n.replace(/\\\\/g, "\\")) + v),
            (d = false),
            (m = true)),
          (n = m
            ? "\\b\\b" !== n && n !== v
              ? n
              : ""
            : n.replace(/\\\\/g, "\\"))),
        (pq = n),
        (iR = !!m),
        (ww = d),
        (nE = !!n),
        (ic = null != ic ? ic : lo(n) === n),
        (t = !m && !!Lo.n),
        m || (n = $ ? ea(t ? s(n) : n) : ""),
        (o = (n && rE(d ? v + n + v : n, ic ? "gim" : "gm")) || null))
      ) {
        if (
          ((c = gt()),
          ci &&
            ci.n === t &&
            (e = M.abs(c - ci.t)) < (t || ci.i.length > 1e5 ? 6e3 : 3e3))
        )
          (n = ci.i), e < 500 && (ci.t = c);
        else {
          for (a = fe(); a && null == a.lang; ) a = gp(a, 1);
          (n = (a && i((l = a.innerText)) && l) || u().innerText + ""),
            (n = t ? s(n) : n),
            (ci = { i: n, t: c, n: t });
        }
        b = n.match(o) || n.replace(/\xa0/g, " ").match(o);
      }
      (rm = m ? b : null),
        (pR = m ? o : null),
        (ar = 0),
        (mc = b ? b.length : 0);
    },
    ef = function (e, i) {
      var f,
        r,
        u,
        l,
        o,
        c,
        a,
        s,
        v,
        m,
        b,
        p,
        h,
        g,
        k,
        w,
        H,
        C,
        S,
        E,
        _ = x(i).h,
        $ = [],
        j = _ || i.noColor,
        M = 0 | i.c || 1,
        I = M < 0,
        Y = 0,
        D = ic && !i.caseSensitive;
      for (
        j || tS(0),
          I && (M = -M),
          o = iR,
          c = pR,
          a = y(),
          s = 9 * M,
          v = M + 1,
          p = !i.j && wa && ga(gs());
        0 < M &&
        ((m = ar),
        (r =
          !!(l =
            e ||
            (o
              ? rm
                ? rm[
                    (ar = _
                      ? I
                        ? n(0, m - 1)
                        : N(m + 1, mc - 1)
                      : (m + (I ? -1 : 1) + mc) % mc)
                  ]
                : ""
              : pq)) && window.find(l, !D, I, !_ && wa, ww, false, false)));

      )
        (b = v > M && !(a + "")),
          c && !b && 0 === (u = pU((h = gs()), c)) && Y++ < s
            ? (ar = m)
            : _
            ? (scrollTo(_[0], _[1]),
              (h = gs()),
              (k =
                (g = rc(h) && R(sb(h))) &&
                rt(g.l, g.t, g.r && g.r + 3, g.b && g.b + 3))
                ? $.push(k)
                : (M = 0),
              (Y = 0))
            : M--,
          b && ((v = _ ? 2 : ++M), ms(a, 0, !I, "character"));
      return (
        r &&
          !_ &&
          (u = u || pU((h = gs()))) &&
          ((H = (w = p && ga(h)) && cd(p, w)),
          vi(u),
          H && !!(2 & H) !== I && T(23, 1, V(I ? 24 : 25))),
        j || t(hS, 0),
        (f = L()) &&
          ((C = ae()),
          (S = y()),
          !(
            !(!(E = ga(S)) || !C) &&
            (true === C.isContentEditable
              ? d.contains.call(C, E)
              : C === E || (!!E.tagName && C === nn(E)[so(S)]))
          )) &&
          f.blur(),
        i.i || (hr = r),
        $
      );
    },
    hS = function (n) {
      s(0, "selectionchange", tS, n);
    },
    tS = function (n) {
      var e = Co,
        i = cI;
      e &&
        (hS(1),
        (n = !!n),
        $ || !n
          ? (pn(e) !== b &&
              (b.insertBefore(e, ss && pn(ss) === b ? ss : null),
              aU(i, 0, true)),
            e.sheet && (e.sheet.disabled = n),
            i.sheet && (i.sheet.disabled = n))
          : (ts(), W(e), W(i), (Co = cI = null)));
    },
    ts = function (n) {
      !n || (DS && !fc.s.includes("\n"))
        ? ss && (W(ss), (ss = null))
        : an(b, (ss = Cs(fc.s, ss)));
    },
    Z = null,
    pt = null,
    U = -1,
    oo = null,
    aw = null,
    Ti = 0,
    HI = function (n) {
      var e = U > 0;
      (U = sh = 0),
        oc(10),
        null != n
          ? (z(1),
            e || focus(),
            (Z.style.cssText = "display:none"),
            dw && (dw.close(), sD(dw)))
          : e && pT(1);
    },
    aC = function (n, f) {
      var r,
        u,
        l = function (n) {
          var e = U;
          -1 !== e &&
            ((U = -1),
            pt && pt.close(),
            W(dw || Z),
            (pt = Z = oo = null),
            (dw = null),
            a(),
            aw ? aw() : n && e > 1 && p({ H: 14, r: true, i: true }));
        },
        o = function () {
          var n = Z.contentDocument;
          return n && "about:blank" === n.URL;
        },
        c = function (n) {
          var i,
            f,
            r,
            u = n.data;
          switch (u.N) {
            case 3:
              (U = 2),
                (pt = this),
                !u.o && oo && pT(oo),
                (Z.onload = oo = null);
              break;
            case 2:
              ((i = Z.style).height = M.ceil(u.h / dz / w(2)) + "px"),
                2 === U &&
                  ((U = 3),
                  (r = 0.6 * (f = u.m) + 64 * w(2)),
                  (i.top =
                    sh > 2 * r
                      ? ((50 - ((0.6 * f) / sh) * 100) | 0) + (cu ? "vh" : "%")
                      : ""),
                  sD(Z, 1),
                  dw && (sD(dw, 1), dw.open || dw.showModal()),
                  t(a, 160));
              break;
            case 1:
              focus(), (k[u.l] = 1);
              break;
            case 0:
              HI(1);
              break;
            case 6:
              Bs(0, u.k, u.b);
              break;
            case 7:
            case 8:
              sT(8 - u.N);
              break;
            case 5:
              eI(u);
              break;
            case 9:
              focus();
            case 10:
              e && l(9 === u.N);
              break;
            case 4:
              T(u.k);
          }
        },
        a = function () {
          U < 3
            ? U < 1 && z(1)
            : sM(1, function (n) {
                return L()
                  ? 0
                  : ((n = _(n, 3)),
                    ie(n)
                      ? (HI(), 2)
                      : "f1" === n || "f2" === n
                      ? (fO(), 2)
                      : 0);
              });
        },
        s = t(a, 200),
        d = Ti,
        m = w(2),
        b = !fe(),
        h = n.url,
        g = 0;
      if (((sh = 0), sM(1), (aw = null), (Ti = 0), d && ct(d), !cH(6, n, f)))
        if (-2 !== U) {
          if (n && n.k && n.v)
            if (-1 === U && rs > "l" && !d)
              ct(s), (Ti = t(aC.bind(0, n, f), 500));
            else if (
              ((!J && n.u && i(n.u)) || (n.u = v.u()),
              (true === h || (1 !== f && null == h)) &&
                (n.url = h = h ? gS() : "") &&
                (n.newtab = 1),
              J || n.$forced || !b)
            ) {
              if (Ih()) {
                if (
                  ((oo = null),
                  gv(),
                  (u = (cu = b && 1 === dz && 1 === dS)
                    ? w(1)
                    : (pc(), vr * dz * bz)),
                  (n.w = u * m),
                  (n.h = sh = w() * m),
                  (n.z = m),
                  Z && au(),
                  -1 === U)
                ) {
                  if ((n.$forced || (n.$forced = 1), tn(6, n, f))) return;
                  (U = 1),
                    (function (n) {
                      var i,
                        f,
                        r,
                        u = n.k,
                        a = n.v,
                        s = n.t,
                        v = n.i,
                        d = function () {
                          (s = 0),
                            or(m, b),
                            or(m, "sandbox"),
                            (m.src = a = v),
                            oo && (oo.t = s);
                        },
                        m = E("iframe"),
                        b = "referrerPolicy";
                      cn(m, "R UI Omnibar"),
                        sD(m),
                        2 !== s ||
                          (t !== io ||
                          (cr(111, "i").test(a) && !/^http:/.test(lH()))
                            ? d()
                            : (m[b] = "no-referrer")),
                        (m.src = a),
                        (i = 0),
                        (f = 0),
                        (m.onload = function (n) {
                          if (n.isTrusted && ((i = 1), ct(r), e))
                            if (0 !== s && sc(o)) rl(60), d();
                            else {
                              t(function () {
                                Ci(f),
                                  e && 1 === U
                                    ? 0 === s
                                      ? (l(), focus(), (U = -2), aC(x({}), 1))
                                      : d()
                                    : e && aw && aw();
                              }, 400);
                              var v = function (n) {
                                var e,
                                  i = m.contentWindow,
                                  f = a.startsWith("file:");
                                1 !== U ||
                                  !i ||
                                  (1 !== n && sc(o)) ||
                                  (f && m.src !== a) ||
                                  ((e = new MessageChannel()),
                                  ((pt = e.port1).onmessage = c),
                                  i.postMessage(
                                    ["VimiumC", u, oo],
                                    f ? "*" : new URL(a).origin,
                                    [e.port2]
                                  ));
                              };
                              2 === s ? (f = io(v, 66)) : v(1);
                            }
                        }),
                        (dw = Ic() && E("dialog")) &&
                          ((dw.className = "R DLG"), an(dw, m)),
                        (Z = m),
                        aU(dw || m, 2, bo),
                        (r =
                          0 !== s
                            ? t(function (n) {
                                Ci(f), i || n || d();
                              }, 2e3)
                            : 0);
                    })(n);
                } else {
                  if (sc(o))
                    return (aw = aC.bind(0, n, f)), void (U > 1 && l());
                  0 === U ? (U = 2) : U > 2 && (fO(), (U = 2));
                }
                tc(Z, "O2", !cu),
                  n.e && oc(2),
                  null != h &&
                    ((h = n.url = h || n.u),
                    (g = f > 1 ? 1 - f : f < 0 ? -f : 0)),
                  (n.N = 0),
                  (n.k = n.v = n.i = n.u = ""),
                  h && h.includes("://")
                    ? Se(
                        2,
                        { t: n.s, p: g, u: h },
                        function (n, e) {
                          (n.p = e),
                            null != e && (n.url = ""),
                            U > 1 ? pT(n) : (oo = n);
                        }.bind(0, n)
                      )
                    : ((n.p = ""), U > 1 ? pT(n) : (oo = n));
              }
            } else
              parent === top && (r = pv())
                ? r.f(6, n, f, 0, fE())
                : p({ H: 25, f: 0, c: 6, n: f, a: n });
        } else T(94, 2);
    },
    fO = function () {
      U < 3 || pT(2);
    },
    pT = function (n) {
      pt.postMessage(n);
    },
    fn = false,
    ec = null,
    tf = 0,
    ml = 0,
    mt = 0,
    mr = 0,
    gc = function (n, e) {
      var i,
        f,
        r,
        u,
        t = null,
        l = 0,
        o = 0,
        c = e.localName;
      switch (c) {
        case "a":
          (t = true), (i = Oa(e));
          break;
        case "audio":
        case "video":
          t = true;
          break;
        case "frame":
        case "iframe":
          (t = e !== B) &&
            ((i = gI(e)),
            e !== Z
              ? (t = ac ? ac(h, e, i) : !!i)
              : i && ((i.l += 12), (i.t += 9))),
            (l = 7);
          break;
        case "input":
        case "textarea":
          (e.disabled && m < 34) ||
            (c > "t" || !ui[(f = it(e))]
              ? (t = !e.readOnly || m > 31)
              : "hi" !== f &&
                ((!(t = (u = C(e)).opacity > 0) && e.labels.length) ||
                  (t = !!(i = za(e, u, !t))))),
            (l = 1);
          break;
        case "details":
          t = rb(mS(e), n);
          break;
        case "dialog":
          return void (e.open && e !== cm && !wd && (h.d = 1));
        case "label":
          t = rb(e.control);
          break;
        case "button":
        case "select":
          t = !e.disabled || m > 33;
          break;
        case "object":
        case "embed":
          !(t = !!(f = e.type) && f.endsWith("x-shockwave-flash")) &&
            c > "o" &&
            e.useMap &&
            fA(e, n);
          break;
        case "img":
          e.useMap && fA(e, n),
            ((!fh || ((r = e.parentElement) && ht("a", r))) &&
              !((f = e.style.cursor)
                ? "default" !== f
                : (f = C(e).cursor) &&
                  (f.includes("zoom") || f.startsWith("url")))) ||
              (t = true);
          break;
        case "code":
        case "div":
        case "nav":
        case "ol":
        case "pre":
        case "table":
        case "tbody":
        case "ul":
          o = 1;
      }
      null === t &&
        (t =
          (l =
            "inherit" !== (f = e.contentEditable) && "false" !== f
              ? 1
              : e.getAttribute("onclick") ||
                ((f = e.getAttribute("role")) && Cr.test(f)) ||
                (null !== ec && ec.has(e)) ||
                (ne && a(e, "ng-click")) ||
                (fh && a(e, "onmouseover")) ||
                (je && (f = a(e, "jsaction")) && cj(f))
              ? 2
              : X.has(e) && cL && ol(e, c)
              ? 3
              : (f = e.getAttribute("tabindex")) &&
                parseInt(f, 10) >= 0 &&
                !sr(e) &&
                e !== hb
              ? 5
              : o && (o = e.clientHeight) > 49 && o + 5 < e.scrollHeight
              ? 9
              : o > 20 && (o = e.clientWidth) > 49 && o + 5 < e.scrollWidth
              ? 8
              : (((f = e.className) && Cc.test(f) ? (l = 4) : "li" === c) &&
                  (!(r = e.parentElement) ||
                    (l
                      ? !(f = H(r)).includes("button") && "a" !== f
                      : X.has(r) && ht("ul", r) && !f.includes("active")))) ||
                e.hasAttribute("aria-selected") ||
                e.getAttribute("data-tab")
              ? 4
              : 0) > 0),
        t &&
          (i = "img" === c ? za(e, null, true) : i || Q(e, null)) &&
          (nt(e, 0) || (ec && ec.has(e))) &&
          (l < 8 || Ss(e, l - 8 + (2 & eh), 0) > 0) &&
          (m > 31 || nt(e, 1)) &&
          (l < 3 ||
            l > 4 ||
            !(f = e.getAttribute("unselectable")) ||
            "on" !== f.toLowerCase()) &&
          (0 === tf || tf & (1 << l)) &&
          n.push([e, i, l]);
    },
    cj = function (n) {
      for (var e of n.split(";"))
        if (
          (e = (e = e.trim()).startsWith("click:")
            ? e.slice(6)
            : e && !e.includes(":")
            ? e
            : no) !== no &&
          !/\._\b(?![\$\.])/.test(e)
        )
          return true;
      return false;
    },
    Oa = function (n) {
      var e = !!(
          n.rel ||
          a(n, "onmousedown") ||
          (a(n, "href") || "").startsWith("/url?") ||
          n.ping ||
          n.dataset.jsarwt
        ),
        i =
          (e && qs("h3,h4", n)) ||
          ((e || 1 === n.childElementCount) && n.firstElementChild) ||
          null,
        f = i && H(i);
      return (
        i &&
        (e
          ? /^h\d$/.test(f) && rb(i)
            ? Q(i)
            : null
          : "img" !== f || S(n, 3)
          ? null
          : cR(i, Q(i)))
      );
    },
    rb = function (n, e) {
      var i = [],
        f = cL;
      if (n) {
        if (!e && n.disabled) return !1;
        e && (X.add(n), (cL = !0)),
          gc(i, n),
          (cL = f),
          !f &&
            e &&
            i.length &&
            3 === i[0][2] &&
            (gc(i, n), i.length < 2 && e.push(i[0]));
      }
      return n ? !i.length : !!e || null;
    },
    ol = function (n, e) {
      var i,
        f = "div";
      return e !== f && "li" !== e
        ? "tr" === e
          ? !!((i = qs("input[type=checkbox]", n)) && H(i) && rb(i))
          : "table" !== e
        : !(i = n.firstElementChild) ||
            !(
              (!n.className && !n.id && e === f) ||
              (((e = H(i)) === f || "span" === e) &&
                X.has(i) &&
                i.getClientRects().length) ||
              ((e !== f ||
                ((i = i.firstElementChild), !!(e = i ? H(i) : ""))) &&
                /^h\d$/.test(e) &&
                (i = i.firstElementChild) &&
                ht("a", i))
            );
    },
    gE = function (n, e) {
      var i = e.localName;
      (i === iO || "textarea" === i
        ? (i < "t" && ui[it(e)]) || e.disabled || e.readOnly
        : "inherit" === (i = e.contentEditable) || "false" === i) || gi(n, e);
    },
    gi = function (n, e) {
      var i = Q(e, null);
      i && n.push([e, i, 0]);
    },
    tr = function (n, e, i, f, r, t) {
      var l,
        o,
        s,
        v,
        b,
        p,
        k,
        y,
        x,
        S,
        E,
        _ = function (n, e, i, f) {
          var r = " " !== i ? sa(i || n, e, f) : [];
          return i
            ? r &&
                [].filter.call(r, function (n) {
                  return !q(n);
                })
            : r;
        },
        $ = function (n) {
          var e;
          return (
            n.length
              ? c > 50
                ? (e = new Set(n))
                : ((e = new Set()), [].forEach.call(n, e.add, e))
              : (e = null),
            e
          );
        },
        T = function (n, e) {
          var i, f;
          for (i of n) if (i[0] === e) return;
          (f = H(e) && Q(e, null)) && n.push([e, f, 0]);
        },
        j = function (n, e) {
          var i,
            f,
            r,
            u,
            t = ac,
            l = [];
          for (i = 0, f = e.length; i < f; i++)
            (r = e[i]).shadowRoot
              ? l.push(r)
              : ii(r) && t && r !== Z && r !== B && t(h, r, gI(r));
          return l.length
            ? ((n = [].slice.call(n)),
              (u = new Set(n)),
              n.concat(
                l.filter(function (n) {
                  return !u.has(n);
                })
              ))
            : n;
        },
        M = e.exclude,
        R = i === gc,
        I = r ? null : fe(),
        Y = e.match || null,
        D = e.textFilter,
        F = e.clickable || null,
        L = n === ka && !Y,
        N = [],
        A = _(n, I, Y, 1) || ((Y = " "), []);
      for (
        eh = e.evenIf | ("force" === e.scroll ? 2 : 0),
          R && (Ts(), tR(), (tf = 0 | e.typeFilter)),
          Y
            ? r || (i = gi)
            : L &&
              (null == ne && (ne = !!qs(".ng-scope")),
              null == je && (je = !!qs("[jsaction]"))),
          A =
            !r && th && !I && A.length >= 15e3 && !Y
              ? (function (n) {
                  var e,
                    i,
                    f,
                    r,
                    u,
                    t,
                    l = [],
                    o = w();
                  for (e = 1, i = n.length; e < i; e++)
                    (r = g((f = n[e]))).bottom > 0 && r.top < o
                      ? l.push(f)
                      : (u = f.lastElementChild) &&
                        (e = (t = [].indexOf.call(n, u, e)) > 0 ? t - 1 : e);
                  return l.length > 12 ? l : n;
                })(A)
              : A,
          l = R
            ? Y
              ? i
              : function (n, e) {
                  var i,
                    f,
                    r = e.tabIndex,
                    u =
                      X.has(e) ||
                      (ec && ec.has(e)) ||
                      (null != r && (a(e, "onclick") || a(e, "onmousedown"))) ||
                      ((f = a(e, "role")) && Cr.test(f)) ||
                      (ne && a(e, "ng-click")) ||
                      (je && (f = a(e, "jsaction")) && cj(f))
                        ? 2
                        : null != r && r >= 0
                        ? "a" === e.localName
                          ? 2
                          : 5
                        : 0;
                  u &&
                    (i = Q(e, null)) &&
                    nt(e, 0) &&
                    (m > 31 || nt(e, 1)) &&
                    (0 === tf || tf & (1 << u)) &&
                    n.push([e, i, u]);
                }
            : t
            ? i
            : null,
          o = [
            [
              (A = L ? A : j(A, sa(ka, I, 1))),
              0,
              $((F && sa(F, I, 1)) || ((F = null), [])),
            ],
          ];
        (s = o.pop());

      ) {
        for (v = s[0], b = s[1], ec = s[2]; b < v.length; )
          null != (p = v[b++]).lang
            ? (i(N, p),
              (k = p.shadowRoot) &&
                (o.push([v, b, ec]),
                (v = _(n, k, Y)),
                (v = L ? v : j(v, sa(ka, k))),
                (b = 0),
                F && (ec = $(sa(F, k)))))
            : l && l(N, p);
        ec && !R && ec.forEach(T.bind(0, N));
      }
      for (
        s = ec = v = A = null, eh = 0;
        N.length && (N[0][0] === u() || (!O && N[0][0] === d.body));

      )
        N.shift();
      if (
        (R &&
          m < 32 &&
          !Y &&
          lO.pathname.startsWith("/search") &&
          (N = (y = lO.host.includes("google")
            ? ".g"
            : lO.host.includes("bing.com")
            ? ".b_algo"
            : 0)
            ? N.filter(function (n) {
                return !tm(y, n);
              })
            : N),
        r ||
          (1 === sC && SS(),
          R &&
            !Y &&
            (function (n) {
              for (
                var e, i, f, r, u, t, l, o, c = "div", a = n.length, s = 0;
                0 <= --a;

              )
                if (
                  (((r = 4 === (i = n[a][2])) || 3 === i) &&
                  (o = n[a][0].shadowRoot) &&
                  a + 1 < n.length &&
                  n[(e = a + 1)][0].parentNode === o &&
                  iC(n[a][1], n[e][1]) &&
                  1 === sa(V(109), o).length
                    ? (r = 0 < ++s)
                    : r
                    ? a + 1 < n.length &&
                      n[(e = a + 1)][2] < 2 &&
                      iD((u = n[e][0]), n[a][0], 0) &&
                      (n[e][2] > 0 || oa.test(u.localName))
                      ? ++s
                      : ((e = a - 1),
                        a < 1 ||
                        (i = n[e][2]) > 5 ||
                        !iD((u = n[a][0]), n[e][0], 1)
                          ? i < 6 &&
                            i > 1 &&
                            a &&
                            "ul" === n[e][0].localName &&
                            iD(u, n[e][0], 0) &&
                            "li" === u.localName &&
                            (s = a--)
                          : iC(n[e][1], n[a][1])
                          ? ++s
                          : (r = i < 2))
                    : (3 === i
                        ? (("i" === (f = (u = n[a][0]).localName) || f === c) &&
                            (r =
                              a > 0 && oa.test(n[a - 1][0].localName)
                                ? (f < "i" || !u.innerHTML.trim()) &&
                                  iD(u, n[a - 1][0], f < "i")
                                : !!(u = u.parentElement) &&
                                  ht("button", u) &&
                                  u.disabled) &&
                            ++s,
                          "h" === f[0] && /^h\d$/.test(f)
                            ? a > 0 &&
                              (i = n[a - 1][2]) < 7 &&
                              1 !== i &&
                              1 === (u = n[a - 1][0]).childElementCount &&
                              "inline" === C(u).display &&
                              iD(n[a][0], u, 0) &&
                              (s = a--)
                            : f === c &&
                              !s &&
                              (e = a + 1) < n.length &&
                              ((f = n[e][0].localName) === c || "a" === f) &&
                              (r =
                                (l = n[e][1]).l < (t = n[a][1]).l + 19 &&
                                l.t < t.t + 9 &&
                                l.l > t.l - 4 &&
                                l.t > t.t - 4 &&
                                l.b > t.b - 9 &&
                                ("a" !== f || cs(u, n[e][0]))) &&
                              ++s)
                        : 5 === i &&
                          1 === (u = n[a][0]).childElementCount &&
                          a + 1 < n.length
                        ? ((t = n[a][1]),
                          (l = q((u = u.lastElementChild)) ? null : Q(u)) &&
                            iC(l, t) &&
                            H(u) &&
                            (pn(n[a + 1][0]) !== u
                              ? (n[a] = [u, l, 5])
                              : 3 === n[a + 1][2] && ++s))
                        : (r =
                            1 === i &&
                            a > 0 &&
                            (u = n[a - 1][0]) === pn(n[a][0]) &&
                            u.childElementCount < 2 &&
                            ht("a", u) &&
                            !u.innerText) && (s = a--),
                      (e = a)),
                  s && (n.splice(a, 1), (s = 0)),
                  !r)
                ) {
                  for (
                    ;
                    e > a - 3 &&
                    0 < e &&
                    (i = n[e - 1][2]) > 1 &&
                    i < 6 &&
                    iD(n[e][0], n[e - 1][0], 1);
                    e--
                  );
                  e < a && (n.splice(e, a - e), (a = e));
                }
            })(N),
          null === fn || (R ? nF(N) : N.length > 0 && (fn = null))),
        M &&
          (N =
            sc(N.filter.bind(N), function (n) {
              return !tm(M, n);
            }) || N),
        D &&
          ((b = (D += "").lastIndexOf("/")),
          (D =
            b > 1 &&
            "/" === D[0] &&
            rE(D.slice(1, b), D.slice(b + 1).replace(/g/g, ""))) &&
            (N = N.filter(function (n) {
              var e;
              return (
                (n.length > 2 && (1 === n[2] || n[2] > 6)) ||
                D.test(null != (e = n[0].innerText) ? e : n[0].textContent)
              );
            }))),
        ro && !r && !f && "closed" === ro.mode)
      ) {
        for (
          S = sC,
            1 === (x = bz) || I || ((bz = 1), pc(1)),
            A = sa(n, ro),
            E = 0;
          E < A.length;
          E++
        )
          H(A[E]) && i(N, A[E]);
        (bz = x), S || (sC = 0), (tf = 0);
      }
      return N;
    },
    iD = function (n, e, i) {
      for (
        var f, r = 3;
        0 < r-- && n && (n = gp(n, 1)) && !(n === e || (uf && q(n)));

      );
      if (n !== e || !i || oa.test(e.localName)) return n === e;
      for (
        ;
        1 === n.childElementCount &&
        !(IN((f = n.firstChild), 3) && f.data.trim()) &&
        ++r < 3;
        n = n.lastElementChild
      );
      return r > 2;
    },
    on = function (n, e) {
      var i,
        f,
        r,
        t,
        l,
        o,
        a,
        s,
        v,
        m,
        b,
        p = n.length,
        h = 0,
        g = dz * bz,
        k = g / 2,
        w = d.body,
        y = u(),
        H = function (n, e) {
          return !(t = f.elementFromPoint(n, e)) || i === t || cs(i, t);
        };
      if (!(c < 54 || (zs && dz - 1)))
        for (tR(); 0 <= --p; )
          if (
            ((f = (i = n[p][0]).getRootNode()),
            (s = ((a = n[p][1]).l + a.r) * k),
            (v = (a.t + a.b) * k),
            !(
              (9 !== (o = f.nodeType) && 11 !== o) ||
              H(s, v) ||
              (11 === o &&
                (l = i.lastElementChild) &&
                ht("slot", l) &&
                cs(f.host, t)) ||
              ("img" === (r = i.localName)
                ? iD(i, t, 0)
                : "area" === r
                ? t === n[p][4]
                : r === iO &&
                  ((!ht("label", t) && !q(t) && t.parentElement) || t)
                    .control === i &&
                  (e ||
                    ((p < 1 || n[p - 1][0] !== i) &&
                      (p + 2 > n.length || n[p + 1][0] !== i)))) ||
              !((b = (m = f.elementsFromPoint(s, v)).indexOf(i)) > 0
                ? (h = m.lastIndexOf(t, b - 1)) >= 0
                : b < 0)
            ))
          ) {
            if (b < 0) {
              for (l = i; (l = gp(l, 3)) && l !== w && l !== y; )
                if ("1" !== C(l).zoom) {
                  l = i;
                  break;
                }
            } else {
              for (; (l = m[h]), h++ < b && !q(l) && (!nt(l, 0) || cs(l, i)); );
              l = l !== t && cs(i, l) ? i : l;
            }
            l === i ||
              H(s, (a.t + 2) * g) ||
              H(s, (a.b - 4) * g) ||
              H((a.l + 2) * g, v) ||
              H((a.r - 4) * g, v) ||
              n.splice(p, 1);
          }
    },
    ve = function (e) {
      var i,
        r,
        u,
        t,
        l,
        c,
        s,
        v,
        d,
        b = null,
        p = function (n) {
          var e,
            f,
            u,
            t,
            l,
            o,
            c = n.t > i.t ? n.t : i.t,
            a = n.b < i.b ? n.b : i.b;
          c >= a || (e = n.l > i.l ? n.l : i.l) >= (f = n.r < i.r ? n.r : i.r)
            ? r.push(n)
            : ((t = n.r),
              (l = n.t),
              (o = n.b),
              (u = n.l) < e && r.push({ l: u, t: l, r: e, b: o }),
              l < c && r.push({ l: e, t: l, r: t, b: c }),
              a < o && r.push({ l: e, t: a, r: t, b: o }),
              f < t && r.push({ l: f, t: c, r: t, b: a }));
        },
        k = m,
        w = "[style*=background]",
        y = o.reachable,
        H =
          k > 34 && k < 37
            ? tr(
                "a[href],img,svg,div"
                  .concat(w, ",span")
                  .concat(w, ",[data-src]") +
                  ka +
                  (k - 35 ? "" : ",video,audio"),
                o,
                function (n, e) {
                  var i, f, r, u, t, l, o, c;
                  null != e.lang
                    ? ((f = mu(e, (i = mT(e)) < 2)),
                      i
                        ? (i > 1 &&
                            (iu(f) ||
                              (f =
                                (f = e.style.backgroundImage) &&
                                /^url\(/i.test(f)
                                  ? f
                                  : "")),
                          f && gi(n, e))
                        : f &&
                          ((c = (u = R(g(e))).b - (l = u.t)),
                          (o = u.r - (t = u.l)) < 8 && c < 8
                            ? (o = c =
                                o === c && (o ? 3 === o : t || l) ? 8 : 0)
                            : (o > 3 || (o = 3), c > 3 || (c = 3)),
                          (r = rt(t, l, t + o, l + c)) &&
                            (is(e) || 1 & eh) &&
                            (r = cR(e, r)) &&
                            n.push([e, r, 0])))
                    : "svg" === e.localName &&
                      "ownerSVGElement" in e &&
                      gi(n, e);
                },
                1,
                0,
                1
              )
            : k > 39 && k < 65
            ? tr("a,[role=link]" + ka, o, function (n, e) {
                var i =
                  ("a" === e.localName && a(e, "href")) || e.dataset.vimUrl;
                i && "#" !== i && !ij(i) && gi(n, e);
              })
            : k - 66
            ? tr(
                ka,
                o,
                k - 67 && !o.anyText
                  ? gc
                  : function (n, e) {
                      var i, f, r;
                      if (ii(e)) ac && e !== Z && e !== B && ac(h, e, gI(e));
                      else
                        for (i = e.childNodes, r = 0; r < i.length; r++)
                          if (IN((f = i[r]), 3) && f.data.trim().length > 2) {
                            gi(n, e);
                            break;
                          }
                    }
              )
            : tr(V(97) + ka, o, gE);
      for (
        (null != y ? y : (k < 34 || 66 === k) && f.e) &&
          H.length < 400 &&
          on(H, k > 33),
          ml = e[2],
          mt = e[3],
          (mr = e[4]) > 0 &&
            (ml -= 16 * M.ceil(M.log(H.length) / M.log(ch.length)) + 12),
          H.reverse(),
          s = n(0, (c = H.length) - 16);
        0 < --c;

      )
        if ((s > 0 && --s, !((l = H[c])[2] > 6))) {
          for (
            v = l[1], k = c;
            s <= --k &&
            !(
              v.b > (u = H[k][1]).t &&
              v.r > u.l &&
              v.l < u.r &&
              v.t < u.b &&
              H[k][2] < 7 &&
              ((r = []),
              (i = u),
              null !== b ? b.forEach(p) : p(v),
              0 === (b = r).length)
            );

          );
          if (null !== b) {
            if (b.length > 0)
              ((u = b[0]).t > mt && u.t > v.t) ||
                (u.l > ml && u.l > v.l) ||
                (1 === b.length && (u.b - u.t < 3 || u.r - u.l < 3)) ||
                (l[1] = u);
            else if ((t = l[2]) > 1 && t < 6 && cs(l[0], H[k][0]))
              H.splice(c, 1);
            else
              for (l.length > 3 && (v = l[3][0]), d = c; k <= --d; )
                v.l >= (u = H[d][1]).l &&
                  v.t >= u.t &&
                  v.l < u.l + 10 &&
                  v.t < u.t + 8 &&
                  ((H[d][3] = [v, l.length > 3 ? l[3][1] + 13 : 13]), (d = 0));
            b = null;
          }
        }
      return F && (ml -= 128), H.reverse();
    },
    tR = function () {
      Cc ||
        ((Cc = cr(103, "")),
        (Cr = cr(104, "i")),
        (oa = cr(113, "")),
        (CC = cr(114, "")));
    },
    nF = function (n) {
      var e,
        i,
        f,
        r,
        t,
        l,
        o = n ? n.length : 0;
      if (o > 1) e = null;
      else if (frames.length && Ih())
        if (fe()) e = 0;
        else {
          if (null == n || tf)
            for (
              n = [], l = (t = sa(V(100))).length;
              (o = n.length) < 2 && l-- > 0;

            )
              null != t[l].lang && (tR(), gc(n, t[l]));
          e =
            o - 1
              ? o > 0 && null
              : ii((r = n[0][0])) &&
                ((i = R(g(r))),
                (f = R(g(u()))),
                i.t - f.t < 20 &&
                  i.l - f.l < 20 &&
                  f.r - i.r < 20 &&
                  f.b - i.b < 20) &&
                is(r)
              ? r
              : null;
        }
      else e = false;
      fn = false === e && rs < "i" ? null : e;
    },
    Kn = "0123456789",
    mp = 0,
    CI = function (n) {
      var e = n.length < 4 ? n[1].l : n[3][0].l + n[3][1],
        i = E("span"),
        f = i.style,
        r = n[2] > 6,
        u = "px";
      return (
        (i.className = r ? "LH BH" : "LH"),
        (f.left = e + u),
        e > ml && mr && (f.maxWidth = mr - e + u),
        (f.top = (e = n[1].t) + u),
        e > mt && (f.maxHeight = mt - e + 24 + u),
        {
          a: "",
          d: n[0],
          h: null,
          i: 0,
          m: i,
          r: n.length > 4 ? n[4] : r ? n[0] : null,
        }
      );
    },
    am = function (n, e) {
      var i,
        f,
        r,
        u,
        t = bz,
        l = n.length - 1;
      if (!(!ro || l < 0 || (n[l].d !== Z && !qs("#HDlg", ro))))
        for (
          i = ("" + 1 / t).slice(0, 5), f = mr * t, r = mt * t;
          0 <= l && cs(ro, n[l].d);

        )
          ((u = n[l--].m.style).zoom = i),
            u.maxWidth && (u.maxWidth = f - e[l][1].l + "px"),
            u.maxHeight && (u.maxHeight = r - e[l][1].t + 18 + "px");
    },
    iF = function (n) {
      for (
        var e,
          i = ch !== Kn ? 0 : n.length,
          f = 0,
          r = 0,
          u = 0,
          t = 0,
          l = 0,
          o = 0;
        f < i;
        f++
      ) {
        if (
          (e = n[f].h.t) < ":" &&
          e > "0" &&
          (t = +e) &&
          t < i &&
          t === (0 | t)
        ) {
          if (t - u < 3 && t > u && u) {
            (u = t), r || (r = f);
            continue;
          }
          u = t;
        } else u = 0;
        r && (o < f - r && ((l = r), (o = f - r)), (r = 0));
      }
      r && o < i - r && ((l = r), (o = i - r)),
        (nH = n.slice(l - 1, l + o)),
        gm(K, "", "", 0);
    },
    gh = function (n, e, i) {
      var f,
        r,
        u,
        t,
        l = n[0],
        o = l.localName,
        c = "",
        s = 0;
      if ("lang" in l)
        switch (o) {
          case "input":
          case "select":
          case "textarea":
            if ((r = l.labels) && r.length && (c = r[0].innerText).trim())
              s = +!cs(r[0], l);
            else if ("s" === o[0])
              c = (u = l.selectedOptions[0]) ? u.label : "";
            else {
              if (o < "s")
                if ("fi" === it(l)) c = "Choose File";
                else if ("pa" === it(l)) break;
              (c = c || l.value || l.placeholder),
                o > "t" &&
                  !S(l, 7) &&
                  (f = c.indexOf("\n") + 1) &&
                  (f = c.indexOf("\n", f)) > 0 &&
                  (c = c.slice(0, f));
            }
            break;
          case "details":
            (c = "Open"), (s = 1);
            break;
          case "img":
            (c = (l.complete && l.alt) || l.title), (s = 2);
            break;
          default:
            (s = +(n[2] > 6))
              ? (c = n[2] > 7 ? "Scroll" : "Frame")
              : (c = l.innerText.trim())
              ? (f = c.indexOf("\n") + 1) &&
                (f = c.indexOf("\n", f)) > 0 &&
                (c = c.slice(0, f))
              : "a" === o &&
                (s = (c =
                  !(t = l.firstElementChild) ||
                  !ht("img", t) ||
                  (e + 1 < i.length && t === i[e + 1].d)
                    ? ""
                    : gh([t], e, i).t)
                  ? 2
                  : 0),
              (c =
                c ||
                l.title ||
                a(l, al) ||
                ((c = l.className) && CC.test(c) ? "Close" : ""));
        }
      else c = tC(l).replace(/\s{2,}/g, " ");
      return (
        c &&
          (c = c.trim().slice(0, 252).trim()) &&
          ":" === c[0] &&
          (c = c.replace(/^[:\s]+/, "")),
        {
          t: (c =
            !s ||
            !c ||
            (s > 1 && ++e < i.length && i[e].h.t.replace(":", "") === c)
              ? c
              : ":" + c),
          w: null,
        }
      );
    },
    gm = function (n, e, i, f) {
      var r,
        t,
        l,
        c,
        a,
        s,
        v,
        d,
        m,
        b,
        p,
        h,
        g,
        k,
        w,
        y,
        x,
        C,
        S,
        _,
        $,
        T,
        j,
        M,
        R,
        I,
        Y,
        D,
        F,
        L,
        O,
        V,
        X = f > 1 ? n.t : "a",
        N = n.c;
      if (X !== e && ((r = e.trim()), (t = X.trim()), (n.t = e), t !== r)) {
        if (
          ((zi = zi && null),
          (l = r.split(" ")),
          (c = !!r),
          (a = n.k),
          (v = 1 / (1 + (s = r.startsWith(t) ? N : hi).length)),
          (d = c ? 1 : 253),
          (n.k = ""),
          c && !hi[0].h.w)
        )
          for (m of hi)
            (p = (b = m.h).w = (b.t = lo(b.t)).split(nm))[0] || p.shift(),
              p.length && (p[p.length - 1] || p.pop());
        for (h of (c && (N = []), s))
          c
            ? ((g = sH(h.h, l)), (h.i = g && g + (d -= v)) && N.push(h))
            : (h.i = (d -= v) - h.h.t.length);
        if ((k = N.length)) {
          if (((n.c = c ? N : (N = s.slice())), c && k < 2)) return N[0];
          if (
            ((!c &&
              (null != o.ordinal
                ? o.ordinal
                : ((H(u()) && u().dataset.vimiumHints) || "").includes(
                    "ordinal"
                  ))) ||
              N.sort(function (n, e) {
                return e.i - n.i;
              }),
            !c)
          )
            for (w of nH)
              (y = +w.h.t - 1), (N[N.indexOf(w)] = N[y]), (N[y] = w);
          for (x = ch.length, C = ch === Kn, S = 0; S < N.length; S++) {
            for (_ = "", $ = C ? 0 : S + 1; $; $ = ($ / x) | 0)
              _ = ch[$ % x] + _;
            N[S].a = C ? S + 1 + "" : _;
          }
        }
        if (f && (k || a)) {
          for (h of k ? N : s)
            (T = h.m.firstElementChild) && W(T), (h.m.firstChild.data = h.a);
          for (h of s) sv(h.m, 0 !== h.i);
        }
        if (!k) return (n.t = X), 2;
      }
      if (
        ((j = i
          ? N.filter(function (n) {
              return n.a.startsWith(i);
            })
          : N),
        (M = j.length),
        n.k !== i)
      ) {
        if (((n.k = i), (zi = zi && null), M < 2)) return M ? j[0] : 0;
        for (I of N)
          (Y = I.m),
            (F = (D = I.a).startsWith(i)),
            sv(Y, F),
            F &&
              (3 === (L = Y.firstChild).nodeType
                ? ((R = E("span")), Y.insertBefore(R, L), cn(R, "MC"))
                : ((R = L), (L = L.nextSibling)),
              (R.textContent = i),
              (L.data = D.slice(i.length)));
      }
      return (
        f && (X !== e || iH) && sm(P),
        (O = ah) !== (V = (N = j)[(n.b < 0 ? (n.b += M) : n.b) % M]) &&
          (O && (tc(O.m, "MH", 0), (O.m.style.zIndex = "")),
          tc(V.m, "MH", 1),
          (V.m.style.zIndex = hi.length),
          (ah = V)),
        2
      );
    },
    sH = function (e, i) {
      var f,
        r,
        u,
        t,
        l = e.w,
        o = 0;
      if (!l.length) return 0;
      for (f of i) {
        for (u of ((r = 0), l))
          r =
            (t = u.indexOf(f)) < 0
              ? r
              : n(r, t ? 1 : l.length - f.length ? (r ? 2 : 6) : r ? 4 : 8);
        if (!r) return 0;
        o += r;
      }
      return (1e4 * o) / M.log(1 + e.t.length);
    },
    RM = function (n) {
      var e,
        i,
        f,
        r,
        u,
        t = c < 54,
        l = F && cr(105, "g");
      for (i of n) {
        if (((f = i.m), F)) {
          if (((f.textContent = i.a), !(e = i.h.t) || ":" !== e[0])) continue;
          if (
            !(e =
              (e = (e = i.h.t = e.slice(1))
                .replace(l, " ")
                .replace(/:[:\s]*$/, "")
                .trim()).length > 35
                ? e.slice(0, 33).trimRight() + "\u2026"
                : e)
          )
            continue;
          tc(f, "TH", 1), (e = ": " + e);
        } else
          for (r of ((e = i.a.slice(-1)), i.a.slice(0, -1)))
            ((u = E("span")).textContent = r), f.appendChild(u);
        t ? an(f, new Text(e)) : f.append(e);
      }
    },
    aE = function (n) {
      var e,
        i,
        f,
        r,
        u,
        t,
        l,
        o = ch.length,
        c = " " + ch,
        a = n.length,
        s = 0 | M.ceil((a - 1) / (o - 1)) || 1,
        v = 0 | M.ceil(M.log2(o + 1)),
        d = [0],
        m = 1,
        b = 0;
      for (e = 0, i = 0; e < s; )
        for (
          m === e && ((m = m * o + 1), (b += v)), i = d[e++], f = 1;
          f <= o;
          f++
        )
          d.push((f << b) | i);
      for (mp = (b / v - +(m > s)) | 0; m-- > s; ) d[m] <<= v;
      for (
        d = d.slice(s, s + a).sort(function (n, e) {
          return n - e;
        }),
          r = 0,
          u = (1 << v) - 1;
        r < a;
        r++
      ) {
        for (t = "", (l = d[r]) & u || (l >>= v); l; l >>>= v) t += c[l & u];
        n[r].a = t;
      }
    },
    mh = function (n, e, i, f) {
      var r,
        u,
        t,
        l,
        o,
        c,
        a,
        s,
        v,
        d,
        m,
        b = 0,
        p = f === SP,
        h = "tab" === f,
        g = n.k,
        k = n.t,
        w = n.t,
        y = n.b,
        H = n.c;
      if (
        ((k = k && k.replace("  ", " ")),
        (n.b = p
          ? y
          : h
          ? F
            ? y - 2 * +(i === "s-" + f) + 1
            : 1 - y
          : (F || (y && (g = g.slice(0, -1))), 0)),
        (n.n = 1),
        h)
      )
        rM();
      else if (f === bs || f === De || "f1" === f) {
        if (!g && !k) return 0;
        g ? (g = g.slice(0, -1)) : (k = k.slice(0, -1));
      } else {
        if ((F && f === en) || (p && w !== k)) return ah;
        if (p) k = w + " ";
        else {
          if (
            (F && (i.includes("c-") || i.includes("m-"))) ||
            (e.c + f).length - 2
          )
            return 2;
          if (
            ((r = lo(f)),
            (f = F ? f : r.toUpperCase()),
            F && rM(),
            !ch.includes(f) || (F && i === "a-" + f && f < ":" && f > "/"))
          ) {
            if (!F) return 0;
            if (
              (f !== r && ch !== lo(ch)) ||
              (nm || (nm = cr(106, "g"))).test(r)
            )
              return 2;
            (g = ""), (k = " " !== k ? k + r : r);
          } else (g += f), (b = F || g.length < mp ? 1 : 2);
        }
      }
      if (((n.n = 0), b > 1)) for (u of H) if (u.a === g) return u;
      if (F) return gm(n, k, g, 2);
      for (u of ((zi = zi && null),
      (n.k = g),
      (t = !n.b),
      (o = b > 0),
      (c = g.slice(0, (l = g.length - n.b))),
      (a = t ? "" : g[l]),
      (H = n.c =
        (o ? H : hi).filter(function (n) {
          var e = n.a.startsWith(c) && (t || n.a[l] !== a);
          return (e && o) || sv(n.m, e), e;
        })),
      H)) {
        for (
          s = u.m.childNodes, d = l > (v = u.i) ? v : l, m = l > v ? l : v;
          d < m;
          d++
        )
          s[d].className = d < l ? "MC" : "";
        u.i = l;
      }
      return H.length ? (iH && sm(P), 2) : 0;
    },
    ip = function (n) {
      var e;
      return (
        nt(n, 1) &&
        (e = g(n)).width > 2 &&
        e.height > 2 &&
        (is(n) || !!(1 & eh))
      );
    },
    iT = function (n, e) {
      var i,
        f,
        r,
        u,
        t,
        l,
        o,
        c = /\b/,
        a = [],
        s = e.m;
      for (fN = [v]; (i = fN.pop()); ) {
        try {
          s = i.g(a, n, e, s);
        } catch (n) {}
        (r = (s + 1) << 16),
          (a = a.filter(function (n) {
            return (8388607 & n[2]) < r;
          }));
      }
      for (
        fN = null,
          u = (a = a.sort(function (n, e) {
            return n[2] - e[2];
          })).length
            ? a[0][2] >> 23
            : 200;
        u < n.length;

      )
        for (o of ((f = n[u++]),
        (t = rE(
          c.test(f[0]) || c.test(f.slice(-1))
            ? "\\b".concat(ea(f), "\\b")
            : ea(f)
        )),
        (l = u << 23),
        a)) {
          if (o[2] > l) break;
          if (!o[3] || t.test(o[3])) return o;
        }
    },
    nI = function (n) {
      var e,
        i,
        f,
        r,
        u = sa(V(99));
      for (r of (c < 51 && (u = [].slice.call(u)), u))
        if (
          (f = H(r)) &&
          (e = a(r, "rel")) &&
          lo(e).split(/\s/).indexOf(n) >= 0 &&
          ((e = r.href) || f < "aa") &&
          (f > "b" || ip(r))
        ) {
          if (i && e && i.href && e.split("#")[0] !== i.href.split("#")[0])
            return null;
          i = r;
        }
      return i && [i, v];
    },
    bO = null,
    hi = null,
    fa = [],
    P = 0,
    m = 0,
    fh = false,
    cO = 0,
    lm = 0,
    th = false,
    cL = true,
    ch = "",
    F = false,
    K = null,
    ia = 0,
    nh = false,
    o = null,
    _t = 0,
    ka = ":not(form)",
    O = null,
    A = null,
    sm = function (n, e) {
      var i, f;
      P - n && (lm = P = n),
        (fh = (m = -17 & n) > 31 && m < 34),
        e ||
          nh ||
          ti ||
          ((f =
            ot && !ow
              ? V(46)
              : V(P) +
                (F || iH ? " [".concat((i = iH ? K.k + K.t : K.t), "]") : "") +
                (((F || iH) && i) || !(O || h).d ? "" : V(30))),
          hs(1, f, true));
    },
    tn = function (n, e, i) {
      var f;
      return (
        null !== fn && (pc(), nF()),
        !!fn &&
          ((f = du(fn))
            ? (f.f(n, e, i), rs > "i" && (fn = false))
            : (fn = null),
          !!f)
      );
    },
    om = function (n, e, i) {
      var f = P,
        r =
          m > 37 && m < 42
            ? 17 === e || e > 90
              ? 1 ^ (16 | m)
              : 18 === e
              ? (-2 & f) ^ 16
              : f
            : 18 === e
            ? f < 64
              ? 16 ^ ((m < 32 ? 2 : 0) | f)
              : f
            : m < 32
            ? (16 === e) == !o.swapCtrlAndShift
              ? 3 ^ (1 | f)
              : 1 ^ (2 | f)
            : f;
      r !== f && (sm(r, i), (r = gk(n.e)) & (r - 1) || (lm = f));
    },
    fk = function (n, e) {
      tc(e.s.$().b, "HM-" + n);
    },
    Rh = function (n, e) {
      e.s.t(e.h, n, !K.k && !K.t);
    },
    eH = function (n, e) {
      var i = Lh(n),
        f = wr(n.d),
        u = i.e(n, e);
      u &&
        u.then(function (n) {
          return t(function () {
            /a?/.test(""),
              rf && rf(),
              (rf = null),
              r(o, false),
              16 & P
                ? (ct(_t),
                  t(
                    function () {
                      re(0, i, f, n), ia && 1 == --cO && sm(m);
                    },
                    fa.length > 1 ? 50 : 18
                  ))
                : (SC(i, f, n), cl(0, 0));
          }, (ia = 0));
        });
    },
    ad = function (n, e) {
      var i,
        f,
        u,
        l,
        c = n.direct,
        a = n.directOptions || {},
        s = a.index,
        d = null != s ? s : n.index,
        m = a.offset || "",
        b = ("" + a.search).startsWith("doc"),
        p = !0 === c,
        g = (n.m &= -17),
        k = function () {
          var n, f;
          e < 1
            ? cl()
            : ((e = I(y)
                ? (h.e(
                    { d: y, r: null, m: null },
                    0,
                    i && ((f = gs()), (n = rc(f) && sb(f)) && R(n))
                  ),
                  e - 1)
                : 0) || r(o, false),
              t(k, e > 99 ? 1 : e && 17));
        },
        w = "".includes.bind(c + ""),
        y =
          (pc(),
          (p || w("elem")) &&
          n.match &&
          ((f = tr(
            ka,
            n,
            b
              ? function (n, e) {
                  ip(e) && n.push([e]);
                }
              : gi,
            1,
            b
          )),
          (l = "count" === d ? (e < 0 ? e : e - 1) : +d || 0),
          (u = f.slice(
            m > "e"
              ? ~l
              : m < "c"
              ? l
              : (function () {
                  for (
                    var n,
                      e,
                      i = Y(D),
                      r = f.length,
                      u = 0,
                      t = i && I(i) ? r - 1 : -1;
                    u <= t;

                  ) {
                    if ((e = f[(n = (u + t) >> 1)][0]) === i) {
                      u = n + (l >= 0);
                      break;
                    }
                    4 & cd(e, i) ? (u = n + 1) : (t = n - 1);
                  }
                  return u < -l ? r : u + l;
                })()
          )[0]))
            ? u[0]
            : ((p || w("sel")) &&
                sA(getSelection()) &&
                ((y = sf(gs())), (i = !!y), y)) ||
              ((p || w("f")) && (L() || se(da()))) ||
              ((p || w("h") || w("cl")) && Y(lh)) ||
              (p || (!w("s") && !w("a")) ? null : Y(D)));
      (y = g < 32 || (y && H(y)) ? y : null) && I(y)
        ? ((e = g < 32 ? N(e, 3e3) : 1),
          (A = v),
          (o = n),
          sm(g, (cO = ia = 1)),
          b && vi(y),
          k())
        : r(n, 5);
    },
    Lh = function (n) {
      for (var e = fa.length; 0 < --e && !(fa[e].h.indexOf(n) >= 0); );
      return fa[e].s;
    },
    rM = function (n) {
      lm !== P &&
        P < 64 &&
        (k[17] || k[91] || k[16] || k[18] || k[93] || k[92]) &&
        sm(lm, n);
    },
    re = function (n, i, f, r) {
      j
        ? ((ia = 0),
          rH(),
          cc[2](o, 0),
          SC(i, f, r),
          (ow = n ? St(220, wk) : ow))
        : e && cl();
    },
    wk = function () {
      ow = null;
    },
    SC = function (n, e, i) {
      ct(_t),
        (_t =
          n && m < 32
            ? t(
                function (f) {
                  var r;
                  _t = 0;
                  try {
                    r = !f && n.x(e, i || 0);
                  } catch (n) {}
                  r && re(1), (h.h = ia && gt());
                },
                fa.length > 1 ? 380 : 255
              )
            : 0);
    },
    rH = function () {
      for (var n of ((ow = ot = hi = null),
      (nH = zi = ah = null),
      K && (K.c = null),
      (K = { c: null, k: "", t: "", n: 0, b: 0 }),
      fa))
        n.h = [];
    },
    cl = function (n, i) {
      if (e) {
        if (
          (1 === n || (n && n.isTrusted && n.target === d)) &&
          (h.p && O.u(h), (O = null), 1 !== n)
        )
          return;
        var f = h.p;
        (ia = _t = 0),
          (O = h.p = null),
          f && f.c(n, i),
          fa.forEach(
            sc.bind(0, function (n) {
              var e = n.s,
                f = e.p;
              (e.p = null), f && e.c(0, i);
            }),
            i
          ),
          (h.y = fa = []),
          s(0, un, cl, 1),
          rH(),
          z(0),
          null != i && St(i),
          rf && rf(),
          (wb = rf = iH = A = o = null),
          (mp = lm = P = m = cO = h.h = ml = mt = mr = 0),
          (h.d = 0),
          (gb = F = nh = th = false),
          (ch = ""),
          rB(),
          ti || hh();
      }
    },
    rB = function () {
      bO && (W(bO), (bO = null)), Rm();
    },
    du = function (n) {
      var e,
        i = true;
      try {
        i = !n.contentDocument || !(e = n.contentWindow.VApi) || e.a(k);
      } catch (n) {}
      return i ? null : e || null;
    },
    wt = function (n) {
      var e,
        i = o.autoReload;
      return (
        (!i || "all" === i || lo(i).includes(n)) &&
        !(
          c > 84 &&
          (e = navigator.scheduling) &&
          e.isInputPending({ includeContinuous: true })
        )
      );
    },
    h = {
      $: function (n) {
        return {
          a: ia,
          b: bO,
          k: K,
          m: n ? (P = 0) : P,
          n: ia && hi && hi.length < (fa.length > 1 ? 200 : 100) && !K.k,
        };
      },
      d: 0,
      h: 0,
      y: [],
      x: function (n, i) {
        var f,
          r,
          u = 9 !== n && n;
        return e
          ? window.closed
            ? 1
            : 1 === n
            ? 2
            : ((r =
                !(f = u && (n = Y(n)) ? R(g(n)) : null) ||
                (f.r - f.l) * (f.b - f.t) < 4 ||
                !is(n)) &&
                Y(lh) === n &&
                hA(),
              (!f || i) &&
              (O || h).$().n &&
              (r || M.abs(f.l - i.l) > 100 || M.abs(f.t - i.t) > 60)
                ? u && !wt("cl")
                  ? 0
                  : O || null != i
                  ? 1
                  : (t(function () {
                      return re(1);
                    }, 0),
                    0)
                : 0)
          : 0;
      },
      c: cl,
      o: function (n, e, i, f, r, u, t, l) {
        var c, a, s, v, d;
        if (
          ((h.p = O = u),
          rH(),
          sT(2),
          o !== n && ((o = n), (cO = e), sm(e > 1 ? 16 | (n.m || 2) : n.m, 1)),
          (ch = i),
          (F = f),
          Ih())
        ) {
          for (
            c = gv((u || h).d + 1),
              pc(1, r),
              null !== th && (th = !!(a = sE(1)) && S(a, 5) / w() > 20),
              Rm(),
              ac = l,
              v = (s = ve(c)).map(CI),
              ac = null,
              1 !== bz && am(v, s),
              d = F ? v.length : 0;
            0 <= --d;

          )
            v[d].h = gh(s[d], d, v);
          (t.h = v), (t.v = c);
        }
      },
      j: function (n, e, i) {
        var r = f.w,
          u = function (f, u, l) {
            var o;
            try {
              o = n.x(1);
            } catch (n) {}
            2 !== o
              ? (T(73), ia && cl())
              : f
              ? 3 === (t = r && l === SP ? t + 1 : 0) || l === en
                ? eH(e, f)
                : "f1" === u && i && tc(i, "Sel")
              : eH(e);
          },
          t = 0;
        (ot = u), rB(), r ? sm(P) : (ow = St(200, u));
      },
      e: function (e, r, u) {
        var l,
          s,
          v,
          b,
          g,
          w,
          S = function (n) {
            var e,
              i,
              f,
              r,
              u,
              t,
              l = B.dataset,
              c = o.access,
              a = function (n, i) {
                return i.split("||").reduce(function (n, i) {
                  return n || eF(e, i);
                }, "");
              };
            for (i of c ? (c + "").split(",") : [])
              if (
                ((f = (i = i.trim()).split(":")),
                (t =
                  (t = (u = (e = (r = f.length > 1 ? f[0] : 0)
                    ? se(sc(qs, r, B))
                    : B)
                    ? 0 !== r
                      ? i.slice(r.length + 1)
                      : i
                    : "").includes("${")
                    ? u.replace(/\$\{([^}]+)}/g, a)
                    : e && u) !== u
                    ? t
                    : eF(e, u)))
              )
                return [t, 1];
            return [
              (2 === n
                ? l.vimText
                : (n && l.vimUrl) || l.canonicalSrc || l.src) || "",
            ];
          },
          _ = function (n) {
            var e = B;
            return (
              (n = n || S(1)[0]) && ((e = E("a")).href = n.trim()),
              ht("a", e) ? e.href : ""
            );
          },
          $ = function () {
            var n,
              e,
              i,
              f = a(B, G) || a(B, "alt") || B.title,
              r = U ? mT(B) : 3,
              u = S(),
              l = u[0];
            r ||
              ((e = B.naturalWidth) &&
                e < 3 &&
                (e = B.naturalHeight) &&
                e < 3 &&
                (r = 4)),
              (n = u[1] ? l : r < 3 ? l || mu(B, r < 2) : U ? "" : B.outerHTML),
              r > 1 &&
                U &&
                !iu(n) &&
                ((i = cr(101, "i").exec(C(B).backgroundImage)),
                (n = i && i[1] ? i[1].replace(/\\('|")/g, "$1") : n)),
              (!n || ij(n) || (l.length > n.length + 7 && n === B.href)) &&
                (n = l),
              n
                ? 36 !== m && U
                  ? (Y(n, f),
                    (e = n.indexOf("://")),
                    (n =
                      (n = e > 0 ? n.slice(n.indexOf("/", e + 4) + 1) : n)
                        .length > 40
                        ? n.slice(0, 39) + "\u2026"
                        : n),
                    t(function () {
                      A.t({ k: 78, t: n });
                    }, 0))
                  : A.p({
                      H: 23,
                      m: P,
                      q: pu(o),
                      a: o.auto,
                      f: f,
                      u: U ? n && _(n) : n,
                    })
                : A.t({ k: 74 });
          },
          T = function (n) {
            eI(n) || A.p({ H: 6, u: n, m: P, t: J, o: pu(o) });
          },
          j = function () {
            var e = o.toggle,
              f = !K && !ii(B) && L(o.focus, B.tabIndex >= 0);
            (D = wr(B)),
              (l = hA(B, cE(en), f).then(function () {
                var f,
                  r,
                  u,
                  t,
                  l,
                  o,
                  c,
                  s,
                  v,
                  d,
                  b,
                  p,
                  h,
                  g,
                  k,
                  w,
                  y,
                  H,
                  C,
                  S,
                  E,
                  _,
                  $,
                  T,
                  j,
                  M;
                if (((cS = D), m < 32)) A.t({ k: 75 });
                else if ((16 & P || K > 2 || wn(6, 2, ua), e && i(e, 1)))
                  for (t in (x(e), (f = []), (r = B), (u = /^-?\d+/), e)) {
                    for (
                      l = t,
                        (c = (o = u.exec(t)) && o[0]) &&
                          (l = l.slice(c.length)),
                        s = 0 | c,
                        v = null,
                        l = l.trim();
                      s && s + 1 >= f.length && r;

                    )
                      f.push(r), (r = gp(r, 4));
                    try {
                      if (
                        l &&
                        (v = s
                          ? ep.querySelector.call(
                              f[n(0, N(s + 1, f.length - 1))],
                              l
                            )
                          : B.closest(l)) &&
                        !q(v)
                      )
                        for (d of e[t].split(/[ ,]/))
                          (p = "-" === (b = d[0])),
                            "[" ===
                            d[(g = +((h = "+" === b || (!p && null)) || p))]
                              ? ((y =
                                  (k = d.slice(g + 1, -1).split("="))[1] || ""),
                                (C = "*" === (H = (w = k[0]).slice(-1))),
                                (E = (S = "~" === H || C) ? w.slice(0, -1) : w),
                                ($ = (_ = a(v, E)) || ""),
                                (T = C ? y : " " + y + " "),
                                (j = C ? $ : " " + $ + " "),
                                E &&
                                  or(
                                    v,
                                    E,
                                    S && $
                                      ? (j.includes(T)
                                          ? h
                                            ? $
                                            : j.replace(T, " ")
                                          : p
                                          ? $
                                          : $ + T
                                        ).trim()
                                      : h || (!p && _ !== y)
                                      ? y
                                      : null
                                  ))
                              : (M = d.slice(g + ("." === d[g]))).trim() &&
                                tc(v, M, h);
                    } catch (n) {}
                    if (v) break;
                  }
              }));
          },
          M = function () {
            var n,
              e,
              i,
              f = tC(B).trim();
            if (f && B.ownerSVGElement) {
              for (
                e = (n = B.cloneNode(true)).querySelectorAll("title"), i = 0;
                i < e.length;
                i++
              )
                e[i].remove();
              f = tC(n).trim() || f;
            }
            return f.trim();
          },
          R = function () {
            var n,
              e,
              i,
              f,
              r,
              u,
              t,
              l = m > 39 && m < 65;
            if (l) i = _();
            else if ((i = S(2)[0].trim()));
            else {
              if (U === iO) {
                if ("pa" === (f = it(B))) return A.t({ k: 76 });
                ui[f]
                  ? "fi" === f
                    ? (i = (e = B.files) && e.length > 0 ? e[0].name : "")
                    : "bu im su re".includes(f) && (i = B.value)
                  : (i = B.value || B.placeholder);
              } else
                i =
                  "textarea" === U
                    ? B.value
                    : "select" === U
                    ? B.selectedIndex < 0
                      ? ""
                      : B.options[B.selectedIndex].text
                    : (U &&
                        (B.innerText.trim() ||
                          (sr(B) &&
                            (n = qs("div,span", sr(B))) &&
                            H(n) &&
                            n.innerText.trim()))) ||
                      ((i = M()) && i.replace(/\s+/g, " "));
              !(i = i && i.trim()) &&
                U &&
                (i = B.title.trim() || (a(B, al) || "").trim());
            }
            i && /^mailto:./.test(i) && (i = i.slice(7).trim()),
              m > 63 && m < 66
                ? A.p({ H: 14, u: i, f: nn, m: m, t: J, o: pu(o) })
                : o.richText
                ? ((r = gs({})), (u = sR(y())), ao(B), eC("copy", d), td(r, u))
                : i
                ? 37 === m
                  ? T(i)
                  : (t = 1 & m ? (O || h).y : 0) && t.indexOf(i) >= 0
                  ? A.t({ k: 77 })
                  : (t && t.push(i),
                    A.p({
                      H: 16,
                      j: o.join,
                      e: pS(o),
                      m: m,
                      d: l && !1 !== o.decoded,
                      s: t || i,
                    }))
                : A.t({ k: l ? 14 : 15 });
          },
          Y = function (n, e) {
            var i,
              f,
              r = m < 42 || "a" !== U,
              u = "href",
              t = r ? E("a") : B,
              l = r ? null : a(t, u),
              c = r || n !== t.href;
            (n = n || _()),
              (e = e || a(B, G) || ""),
              "force" !== o.download
                ? (c && ((t.href = n), r && (i = sE(1)) && an(i, t)),
                  (f = !t.hasAttribute(G)) && (t[G] = e),
                  ca(t, en, 0, [!0, !1, !1, !1]).then(function () {
                    f && or(t, G), c && (r ? W(t) : or(t, u, l));
                  }))
                : A.p({ H: 33, u: n, f: e, r: lO.href, m: m });
          },
          F = function () {
            var n = 3 & P,
              e = !os,
              f = "right" === o.button,
              r = !!o.dblclick && !f,
              u = J + "",
              t = f || r,
              c = "window" === u && !t,
              a = n > 1 && !c && !t,
              s = o.autoUnhover,
              v = "<" === (s + "")[0],
              d = 16 & P,
              m = o.ctrlShiftForWindow,
              b = null != m ? m : o.noCtrlPlusShift,
              p = (a && !(n > 2 && b)) || (c && !!b),
              h = c || (a && n > 2 == !o.activeOnCtrl),
              g = "select" === U,
              k = g || (("video" === U || "audio" === U) && !f && B.controls),
              w = k && !g && !1 !== o.interact,
              y = a ? 8 : 0,
              H =
                t || w
                  ? +r + 64 + 2 * w
                  : u.startsWith("no-")
                  ? 0
                  : c
                  ? 2
                  : "force-current" === u
                  ? 5
                  : "force-mode" === u
                  ? a
                    ? 12
                    : 5
                  : "force" === u
                  ? 4 | y
                  : u === z
                  ? 3 | y
                  : o.sedIf
                  ? 6 | y
                  : 0,
              x = !v && L(s, !1);
            l = ca(
              B,
              en,
              L(o.focus, n > 0 || k || B.tabIndex >= 0),
              [!1, p && !e, p && e, h],
              H,
              f ? 2 : 0,
              t || a ? 0 : o.touch,
              o
            ).then(function (n) {
              return !x || (k && !i(s))
                ? d || K || ((n || v) && wn(6, 2, ua))
                : void ua();
            });
          },
          L = function (n, e) {
            return null == n
              ? e
              : !!n && (!i(n) || (n = sc(tm, n, [B])), null != n ? n : e);
          },
          V = O || h,
          X = V.$().k,
          B = e.d,
          U = H(B),
          K = ge(B),
          G = "download",
          z = "last-window",
          J = o.newtab,
          nn = o.then,
          en = null;
        if (
          (O && ((k = A.a()), sm(V.$().m, 1)),
          r && (pr(r.e), (k[r.i] = 1)),
          V.v(),
          (gb = false),
          I(B))
        ) {
          if (
            ((en = u || ("a" === U && Oa(B)) || gr(B, e.r !== B ? e.r : null)),
            e.m && X.t && !X.k && !X.n)
          ) {
            if (!(c < 72) || f.w)
              return (rf = en && fl(null, en, -1)), V.j(h, e, en && lf), null;
            St(200);
          }
          O && focus(),
            e.m && ii(B)
              ? ((o.m = P),
                (O || h).$(1),
                (s = +(B !== Z))
                  ? (fo(B),
                    (v = du(B))
                      ? v.f(2, o, cO, 1)
                      : Se(
                          11,
                          { u: B.src, c: 2, n: cO, k: r ? r.i : 0, a: o },
                          function (n) {
                            n || B.contentWindow.focus();
                          }
                        ))
                  : fO())
              : m < 32 || 66 === m
              ? "details" === U
                ? (b = mS(B))
                  ? ((g = B.open || !en ? Q(b) : en),
                    ca(b, g, 1).then(function () {
                      rf || (g && fl(null, g));
                    }),
                    (s = 0))
                  : (B.open = !B.open)
                : e.r && e.r === B
                ? j()
                : K > 2
                ? ((l = SE(B, en, !rf)), (s = 0))
                : F()
              : m < 34
              ? m < 33
                ? j()
                : (l = ua(B))
              : m < 35
              ? (vi(B), fo(B), (D = wr(B)), (cS = D), rf || fl(B), (s = 0))
              : m < 37
              ? $()
              : m < 42
              ? R()
              : m < 43
              ? Y()
              : m < 44
              ? T(_())
              : m < 66
              ? R()
              : (ao(B),
                (w = y()),
                CS(w),
                ms(w, 1, 1, "word"),
                !1 === o.visual || p({ H: 31, c: o.caret, f: nn })),
            nn && i(nn) && (m < 64 || 66 === m) && p({ H: 18, k: nn }),
            rf ||
              0 === s ||
              (!en && !(en = Q(B))) ||
              t(function () {
                (s || dh()) && fl(null, en);
              }, 17);
        } else A.t({ k: 73, d: 2 });
        return l
          ? l.then(function () {
              return en;
            })
          : Promise.resolve(en);
      },
      g: function (e, i) {
        var r,
          t,
          l,
          o,
          c,
          a,
          s,
          v,
          m = "visible",
          b = R(g(e)),
          p = u(),
          h = d.body,
          k = !!h && I(e, h, 1),
          w = (dz * (k ? bz : 1)) / dS / (k ? bS : 1),
          y = N(i.l, b.l),
          H = N(i.t, b.t),
          x = y,
          E = H,
          _ = i.r,
          $ = i.b;
        for (r = e; (r = gp(r, 4)); )
          (t = C(r)).overflow !== m &&
            ((l = R(g(r))),
            (c = t.overflowY !== m),
            (a = r !== p && k ? dS * bS : dS),
            (o = t.overflowX !== m) &&
              (_ =
                (x = n(x, l.l)) + N(_ - x, l.r - l.l, (c && S(r, 2) * a) || _)),
            c &&
              ($ =
                (E = n(E, l.t)) +
                N($ - E, l.b - l.t, (o && S(r, 3) * a) || $)));
        return (
          (x = n(x, i.l)),
          (E = n(E, i.t)),
          !(s =
            x + 7 < _ && E + 7 < $
              ? {
                  l: (x - y) * w,
                  t: (E - H) * w,
                  r: (_ - y) * w,
                  b: ($ - H) * w,
                }
              : null) ||
          (f.e && (on((v = [[e, { l: x, t: E, r: _, b: $ }, 7]])), !v.length))
            ? null
            : s
        );
      },
      l: function (n) {
        fl(n.m, null, 660, " Sel"), tc(bO, "HMM");
      },
      r: function (n, e, i) {
        var f = O || h,
          r = d.body;
        O &&
          ((r && H(r) && r.isContentEditable) || lO.href.startsWith("about")) &&
          ho(0),
          rB(),
          (A = i),
          eb(wz / dS),
          O || sm(P),
          n.length ? (bO = el(n, e, f.d || h.d)) : O || au(),
          (k = i.a()),
          (wb = f.s),
          sM(0, h.n),
          O && s(0, un, cl),
          (ia = 1),
          o.suppressInput && iI(true);
      },
      t: function (e, i, f) {
        var r, u, t, l, o, c, a, s, v, d, m;
        if (!zi) {
          if (
            ((r = []),
            (u = []),
            e.forEach(function (n, e) {
              var i, f, t, l, o, c, a, s;
              if (n.m.style.visibility) r.push(null);
              else {
                for (
                  n.z = n.z || e + 1,
                    i = R(g(n.m)),
                    r.push(i),
                    t = 0,
                    l = u.length;
                  t < l;

                ) {
                  for (
                    c = 0, a = (o = u[t]).length;
                    c < a &&
                    !(
                      i.b > (s = r[o[c]]).t &&
                      i.t < s.b &&
                      i.r > s.l &&
                      i.l < s.r
                    );
                    c++
                  );
                  if (c >= a);
                  else {
                    if (f) {
                      f.push.apply(f, o), u.splice(t, 1), l--;
                      continue;
                    }
                    o.push(e), (f = o);
                  }
                  t++;
                }
                f || u.push([e]);
              }
            }),
            (u = u.filter(function (n) {
              return n.length > 1;
            })).length <= 0)
          )
            return void (zi = f ? 0 : zi);
          zi = u;
        }
        for (t of zi)
          for (
            l = t.length,
              o = i ? -1 : l,
              c = n.apply(M, t),
              a = e[t[i ? 0 : l - 1]].z,
              s = i ? l - 1 : 0;
            s !== o;
            i ? s-- : s++
          )
            (m = (v = e[t[s]]).z),
              ((d = v.m).style.zIndex = v.z = a),
              tc(d, "OH", a < c),
              tc(d, "SH", a >= c),
              (a = m);
      },
      p: null,
      n: function (n) {
        var e,
          i,
          r,
          u = n.i,
          l = 2;
        return (
          O
            ? ((k = A.a()), (l = O.n(n)))
            : ow && !ie(_(n, 2))
            ? ow()
            : n.e.repeat ||
              !ia ||
              (229 === u
                ? (T(72), cl(), (l = 0))
                : ((i = _(n, 2)),
                  (r = ke(i)),
                  ie(i) || (ot && r === bs)
                    ? cl()
                    : 27 === u
                    ? (l = 1)
                    : ot && "f12" !== r
                    ? ot(n, i, r)
                    : r > "f0" && r < "f:" && "f1" !== i
                    ? ((u = 0),
                      r > "f1" && "f2" !== r
                        ? (l = 0)
                        : r < "f2"
                        ? i < "b" && F
                          ? Lh(ah).l(ah)
                          : i > "s" && fa.forEach(fk.bind(0, r))
                        : ((u = 1),
                          i.includes("-s")
                            ? (f.e = !f.e)
                            : i < "b"
                            ? (wd = !wd)
                            : i < "d" && "m" === i[0]
                            ? (o.useFilter = f.f = !F)
                            : i !== r
                            ? (cL = !cL)
                            : v.e
                            ? ((cL = true), v.e(2))
                            : (u = 0)),
                      rM(u),
                      u && t(re, 0))
                    : "tab" !== r || F || K.k
                    ? ((h.h = 0),
                      (u < 19 && u > 15) || (!os && u > 90 && u < 94)
                        ? i || om(n, u)
                        : (u = kn.indexOf(r)) > 0
                        ? ((u > 2 && L) || Bs(n, i, r),
                          rM(),
                          (l = u > 2 && L ? 1 : 2))
                        : r !== SP || (F && i === r)
                        ? 0 === (e = mh(K, n, i, r))
                          ? cl(0, K.n ? 0 : f.k[0])
                          : 2 !== e && ((lm = P), eH(e, n))
                        : ((K.t = K.t.replace("  ", " ")),
                          0 !== zi && fa.forEach(Rh.bind(0, i === "s-" + r)),
                          rM()))
                    : ((th = null),
                      rM(),
                      cL && h.h && v.e && M.abs(gt() - h.h) < 1e3 && v.e(2),
                      t(re, 0)))),
          l
        );
      },
      s: rM,
      i: re,
      v: rH,
      u: function (n) {
        for (var e, i = fa, f = i.length, r = 0, u = 0; r < f && i[r].s !== n; )
          u += i[r++].h.length;
        r >= f ||
          !ia ||
          _t ||
          ((e = i[r].h.length) && hi.splice(u, e),
          i.splice(r, 1),
          e &&
            ((ow = ot ? ow : St(220, wk)),
            (zi = null),
            (K.c = hi),
            (K.n = K.b = 0),
            hi.length
              ? F
                ? gm(K, "", "", 1)
                : (hi.forEach(function (n) {
                    n.m.innerText = "";
                  }),
                  aE(hi),
                  RM(hi))
              : (T(45), cl())));
      },
    },
    tI = 0,
    bo = null,
    $t = null,
    te = "",
    oP = 0,
    ti = 0,
    T = function (n, e, i, f) {
      hs(n, i, f), te && (ti = t(hh, 1e3 * (e || 1.5)));
    },
    hs = function (n, e, i) {
      Ih() &&
        ((te = V(n, e)),
        (oP = 1),
        ti && (ct(ti), (ti = 0)),
        i || tI || (tI = io(tw, 40)),
        bo
          ? (($t.data = te), i && tO(1))
          : ((bo = E(bt())),
            cn(bo, "R HUD" + f.d),
            an(bo, ($t = new Text(te))),
            i || (tO(0), b || eb(wz)),
            aU(bo, hi ? 0 : 1)));
    },
    tw = function (n) {
      var e = n ? 0 : +(bo.style.opacity || 1);
      if (e === oP);
      else {
        if (0 === e)
          return ($t.data = te), tO(n || f.m ? 1 : 0.25), n && (tI = 0), au();
        !f.m && dh() ? (e += e < oP ? 0.25 : -0.25) : (e = oP);
      }
      e ? tO(e) : hh(1), e === oP && (Ci(tI), (tI = 0));
    },
    hh = function (n) {
      ti && (ct(ti), (ti = 0)),
        B || !ia || O
          ? B || !mn
            ? !B && G && G.h
              ? hs(1, G.h)
              : ((oP = 0),
                (te = ""),
                bo &&
                  (1 !== n && j
                    ? !tI && e && (tI = io(tw, 40))
                    : (tO(0), ($t.data = ""), (j && iL < 3) || au(2))))
            : hs(90, mn, n)
          : sm(P);
    },
    tO = function (n) {
      (bo.style.opacity = n < 1 ? n : ""), sv(bo, !!n);
    },
    l = null,
    G = null,
    IH = 0,
    ih = null,
    sU = null,
    lM = 1,
    lw = 0,
    gb = rs > "i",
    oe = null,
    iI = function (n, e) {
      var i = da(),
        f = e ? 0 : 1,
        r = 0;
      if (
        n &&
        (i && ge(i)
          ? (e && ((il = null), (f = 1), rl(47)), i.blur(), (i = da()))
          : (i = null),
        !i)
      ) {
        if (
          ((gb = function (n, e) {
            var i = ae(),
              u = gt();
            (i === e || (i && sr(i))) &&
              (st(n),
              f && M.abs(u - r) > 512 ? (f = 1) : f++ || rl(47),
              (r = u),
              f > 15 ? eg(n) : e.blur());
          }),
          !e)
        )
          return;
        return ph(eg, 7), void s(0, md, eg);
      }
      (gb = false), i && ge(i) && (l = i);
    },
    eg = function (n) {
      return gb
        ? ((gb = false),
          z(7),
          s(0, md, eg, 1),
          !(((n && n.e) || n) instanceof Event) ||
            (!frames.length && J) ||
            sP({ H: 10 }),
          0)
        : 0;
    },
    L = function () {
      return l;
    },
    Ii = function () {
      if (sU || l || G) return !sU;
      var n = ae();
      return !(!n || true !== n.isContentEditable) && (e(0), (l = n), true);
    },
    sS = function (n) {
      var e = oe;
      if (((oe = sU = null), n && ((sU = y().type), (oe = n)), e)) return e();
    },
    fu = function (n, e, i) {
      var f,
        r = fE() && !fe();
      (r || (e && !J)) &&
        (i && pr(i),
        r
          ? ((k[n] = 1),
            (f = pv()) && !f.a(k) ? (f.s(), f.f(0, 0, 0, 1)) : parent.focus())
          : 2 !== k[n] && (p({ H: 9, t: 1, k: n }), (k[n] = 2)));
    },
    im = function (n, e) {
      var i, u;
      return (
        sr(n) || n === l ? ((n = l), (l = null)) : (n = ge(n) ? n : null),
        (i = !1),
        (u =
          (G && G.p) || (n && e && f.p && (i = sc(tm, f.p, [n])) && ie(e.c))
            ? 0
            : 2),
        n && (u ? n.blur() : t(bu.bind(0, n), 0), i !== !!i && (f.p = "")),
        G && (G.t && r(G.t, 0), (G = null), hh()),
        u
      );
    },
    Ei = function () {
      ih && (ih.b && W(ih.b), (ih = null), z(9));
    },
    of = function (n) {
      var i, f, r, u, t, o;
      n.isTrusted &&
        ((i = n.target) !== window
          ? !j ||
            (l && l === ae()) ||
            (i !== b
              ? ((f = sr(i)) &&
                  ((t =
                    !!(u = (r = n.path) && r[0]) && u !== window && u !== i),
                  oS(t ? r : [f, i], i),
                  (i = t ? u : i)),
                (!lw || n.timeStamp - lw > 30) &&
                  ((o = se(i)) && (D = wr(o)), (cS = 0)),
                (lw = 0),
                ge(i) &&
                  (gb
                    ? gb(n, i)
                    : (e(0), (l = i), lM && ae() !== d.body && (il = wr(i)))))
              : st(n))
          : ((lw = n.timeStamp), wf()));
    },
    oB = function (n) {
      var e, i, f, r;
      if (j && n.isTrusted) {
        if ((e = n.target) === window) return wB();
        (f = sr(e)) &&
          e !== b &&
          ((i = (r = n.path) && r[0]) && i !== window && i !== e
            ? (oS(r, e, 1), (e = i))
            : (sn || oS([f, 0], 0), sn.set(f, 1))),
          l === e && ((l = null), ih && !IH && dh() && Ei());
      }
    },
    OS = function (n) {
      n.isTrusted &&
        (j && "focus" === n.type
          ? of(n)
          : ((j && 1 !== sn.get(this)) || oS([this, 0], 0, 1), j && oB(n)));
    },
    oS = function (n, e, i) {
      var f, r;
      for (f = n.indexOf(e); 0 <= --f; )
        IN((r = n[f]), 11) &&
          (s(r, "focus", OS, i),
          s(r, BU, OS, i),
          i ? sn && sn.delete(r) : (sn || (sn = new WeakMap())).set(r, 2));
    },
    wB = function () {
      sT(0),
        wb && wb(),
        op && op(),
        (k = So(null)),
        (cT = 0),
        rA(),
        iN || /a?/.test(""),
        e(3);
    },
    pk = null,
    kr = false,
    mk = 0,
    mK = null,
    iw = false,
    cT = 0,
    Eh = Object.is,
    Ch = { handleEvent: Eh },
    e = function (n) {
      return (ck = ""), (nk = null), (kt = 0), n;
    },
    _ = function (n, e) {
      var i,
        f,
        r,
        u,
        t,
        l = " " !== n.c ? n.c : CH(n),
        o = n.e,
        c = l;
      return (
        l &&
          ((f = ""
            .concat(o.altKey ? "a-" : "")
            .concat(o.ctrlKey ? "c-" : "")
            .concat(o.metaKey ? "m-" : "")),
          (r = lo(l)),
          (u = l.length > 1),
          (t =
            o.shiftKey && (u || (f && l.toUpperCase() !== r)) ? f + "s-" : f),
          (c = u || t ? t + r : l),
          mK &&
            e < 9 &&
            (c =
              (i =
                (mk & (e ? 3 : 32) && mK[c + ":" + "nilofvmes"[e]]) ||
                (4 & mk ? mK[c] : "")) ||
              (8 & mk &&
              !u &&
              (i = mK[r]) &&
              i.length < 2 &&
              (f = i.toUpperCase()) !== i
                ? t
                  ? t + i
                  : l === r
                  ? i
                  : f
                : c))),
        c
      );
    },
    cK = function (n, i, f) {
      var r,
        u,
        t = pk && i ? (mK ? _(n, 9) : f) : "";
      if (!i || (t && !ck && pk.has(t) !== kr)) return i ? e(0) : 0;
      if (
        ((r = n.e.timeStamp),
        kt && nk && nk !== kf && r - kt > 3e5 && ((ck = ""), (nk = null)),
        (u = ie(f)))
      )
        return 7 & mk && ak(n), nk ? (e(3), 2) : u;
      if (!nk || null == (u = nk[i])) {
        if (
          null == (u = i.startsWith("v-") ? 0 : kf[i]) ||
          (nk && t && pk.has(t) !== kr)
        )
          return e(0);
        0 !== u && (ck = "");
      }
      return (
        (ck += i.length > 1 ? "<".concat(i, ">") : i),
        0 === u
          ? (p({ H: 17, k: ck, l: n.i, e: ed(l) }), e(2), (cT = n.i || 1))
          : ((nk = 1 !== u ? x(u) : kf), (kt = r)),
        2
      );
    },
    ak = function (n) {
      n.e.altKey &&
        (" " === n.c && CH(n),
        iw !== (1 === n.c.length || n.c === SP) &&
          (7 & gk(n.e)) == (os ? 1 : 3) &&
          (Ch.handleEvent = (iw = !iw) ? AC : Eh));
    },
    rA = function () {
      (iw = false), (Ch.handleEvent = Eh);
    },
    AC = function (n) {
      if (iw && n.isTrusted && !n.detail && !n.clientY) {
        var e = n.path,
          i = e.length > 1 ? e[0] : n.target;
        ep.getAttribute.call(i, "accesskey") && (rA(), pr(n), c > 74 && bu(i));
      }
    },
    ok = function (n) {
      var i,
        f,
        r,
        u,
        t,
        o = n.keyCode;
      if (j && n.isTrusted && o)
        if (((i = { c: " ", e: n, i: o }), ki && Os(n))) ak(i);
        else {
          for (iw && rA(), f = 0, u = ha.length; 0 < u && 0 === f; )
            f = ha[(u -= 2)](i);
          f ||
            (Ii()
              ? ((t =
                  229 === o
                    ? ""
                    : mk & (G && G.k ? 25 : 17) ||
                      ((G ? G.k : 64 & mk || (o > 111 && o < 132)) &&
                        (o < 48 ||
                          o > 93 ||
                          (o > 57 && o < 65) ||
                          7 & gk(n))) ||
                      (o > 132 ? n.ctrlKey : 27 === o)
                    ? _(i, 1 & mk)
                    : n.key && 1 === n.key.length
                    ? " "
                    : ""),
                (G
                  ? G.k
                    ? t === G.k
                    : ie(t)
                  : t.length < 2
                  ? e(0)
                  : (f = cK(
                      i,
                      ((r = ke(t)) > "f0" && r < "f:") || t.startsWith("v-")
                        ? t
                        : _(i, 9) + ":i",
                      t
                    )) > 3) &&
                  (!G && ((l && l === d.body) || (!J && w() < 5))
                    ? (n.repeat && fu(o, true, n), (f = 0))
                    : (ak(i), (f = im(n.target, i)))))
              : (o > 31 ? 229 !== o : (134685440 >> o) & 1) &&
                ((r = _(i, ck ? 7 : 0)),
                (f = cK(i, r, r)) > 3 && (f = f > 4 ? eD(n, o, n.repeat) : 0),
                0 === f && sU && 1 === i.c.length && !gk(n) && (f = 2))),
            f < 1
              ? os || 1 !== k[o] || n.repeat || (k[o] = 0)
              : (f > 1
                  ? (ak(i), !ei && (ei = n.sourceCapabilities), pr(n))
                  : st(n),
                (k[o] = 1));
        }
    },
    eD = function (n, e, i) {
      var f = 2,
        r = i || !J ? da() : null;
      return (
        (!i && Rs()) ||
          (i && !k[e] && r
            ? Y(lh) === r
              ? ua()
              : bu(r)
            : J || r
            ? (f = 0)
            : (fu(e, i, n), (f = -1))),
        f
      );
    },
    oK = function (n) {
      var e = n.keyCode;
      j &&
        n.isTrusted &&
        e &&
        (ki && (e === cT || cT < 2) && sT(0),
        (cT = 0),
        iw && rA(),
        sU && y().type !== sU && sS(),
        k[e] ? ((k[e] = 0), pr(n)) : op && op(n));
    },
    ta = null,
    kI = 1,
    D = null,
    cS = 0,
    ki = 0,
    Sc = 1,
    sC = 0,
    pA = function (i, r, u, l) {
      var o,
        a,
        s,
        v,
        m,
        b,
        p,
        h,
        g,
        k,
        w,
        H,
        x,
        C,
        E,
        _,
        $ = 0,
        T = 0,
        j = 0,
        R = function (i) {
          var f,
            r,
            u,
            l,
            y,
            Y = ki > 0,
            D = i - g,
            F = i;
          h
            ? D < 1e-5
              ? (f = 0)
              : j
              ? ((f = $), (j = 0))
              : ((f = i > h ? i - h : 0),
                pp > 19 &&
                  D > pp &&
                  $ &&
                  D > 1.8 * $ &&
                  ++C > 2 &&
                  ((pp = 2), ta(1)),
                g &&
                  ($ = $
                    ? D < $ + 2
                      ? ($ + D) / 2
                      : (7 * $ + D) / 8
                    : D + 0.1))
            : ((F = performance.now()),
              (f = n(i + ($ || 17) - F, 0)),
              (F = n(i, F)),
              (p = S(b, 6 + v))),
            (w += f),
            (g = i),
            (h = F),
            e && T
              ? (Y &&
                  w >= 75 &&
                  (w > mD && (ki = ki > f ? ki - f : 0),
                  (x += f),
                  0.5 <= s &&
                    s <= 1.6 &&
                    x > 47 &&
                    ((s *=
                      (u = 150 / o / s) > 1.05 ? 1.05 : u < 0.95 ? 0.95 : 1),
                    (x = 0))),
                (l = o * (f / m) * s),
                (!Y || ((k < o || 2 & H) && w < mD)) && (l = n(0, N(l, o - k))),
                l > 0 &&
                  ((l = ps(b, v, a * (l > 4 ? M.round : M.ceil)(l), p)),
                  (p += l),
                  (k += M.abs(l))),
                l && (!E || k < o)
                  ? 0 != _ &&
                    k >= o &&
                    Y &&
                    w < (r = _ > 1 ? _ : mD) - $ &&
                    (_ > 1 || 2 & H || o < 40)
                    ? ((T = 0), (j = t(I, r - w)), (w = r))
                    : ra(R)
                  : f
                  ? (c > 73 &&
                      "onscrollend" in Image.prototype &&
                      ((y = !b || b === sE()) ? d : b).dispatchEvent(
                        new Event("scrollend", {
                          cancelable: false,
                          bubbles: y,
                        })
                      ),
                    E && E(k),
                    cC(b),
                    ta())
                  : ra(R))
              : ta();
        },
        I = function () {
          ki
            ? (2 & H && o > f.t && (o = 0 | N(o, S(b, v + 0) / 2)),
              (T = T || ra(R)))
            : ta();
        };
      (ta = function (n) {
        4 !== n
          ? (n || ((T = h = g = p = x = pp = C = 0), (b = null)),
            n ? cm || el([], [0, 0], 1) : cm !== bO && Rm())
          : _ || T || (ct(j), I());
      }),
        (pA = function (e, i, r, u) {
          (s = 1),
            (v = i),
            (H = u ? 0 | u.f : 0),
            (_ = u && u.wait),
            (m = n(120, 20 * M.log((o = n(1, r > 0 ? r : -r))))),
            (m = M.round((m / 120) * f.u)),
            (b = e),
            (a = r < 0 ? -1 : 1),
            j && ct(j),
            (j = 0),
            (k = w = 0),
            (h = g = x = C = E = 0);
          var t = f.k;
          t.length > 2 && ($ = N($, +t[2] || $)),
            (kI = 2 * n($, t[1]) + 60),
            (mD = t[0] + n(t[1], 60) + 60),
            (2 === pp || (1 === pp && !sA(y()))) && ta(1),
            (T = T || ra(R)),
            null != ds &&
              (ds = new Promise(function (n) {
                E = n;
              }));
        })(i, r, u, l);
    },
    ps = function (n, e, i, f) {
      return (
        (f = null != f ? f : S(n, 6 + e)),
        n
          ? n.scrollBy
            ? n.scrollBy(iS(e, i))
            : e
            ? (n.scrollTop = f + i)
            : (n.scrollLeft = f + i)
          : sw(e, i),
        S(n, 6 + e) - f
      );
    },
    es = function (e, u, t, l, o, c, s) {
      var d,
        m,
        b,
        h,
        k,
        w,
        y,
        H,
        x,
        C,
        E,
        _,
        $ = 3 & t,
        T = $ - 2,
        j = !s && Y(D),
        M = j && ii(j) && du(j);
      M
        ? (M.c(e, u, t, l, o, c), M.y().k && (sT(1), (jo = M)))
        : ((ST = sE(1)) && (gz(1), Ts()),
          (m =
            (d = fs(
              e,
              $ ? T || -1 : u,
              o &&
                (o.scroll
                  ? "force" === o.scroll
                  : null != o.evenIf
                  ? !!(2 & o.evenIf)
                  : null),
              o && o.scrollable
            )) === ST),
          (b = !J && m && d && !fe()),
          (h = l
            ? 1 === l
              ? u
              : u * S(d, e + ("max" === l ? 4 : 0))
            : (!e && u && d && S(d, 4) <= S(d, 5) * (S(d, 4) < 720 ? 2 : 1)
                ? 0.6 * u
                : u) * f.t),
          $ &&
            ((k = S(d, e + 6)),
            (w = S(d, e + 0)),
            (y = (T || h) && S(d, e + 4)),
            (x = ((H = m && d ? g(d).height : 0) > y && H < y + 1 ? H : y) - w),
            (h = n(0, N(T ? x - h : h, x)) - k),
            (h = u ? h : T ? n(h, 0) : N(h, 0))),
          (h = h * h > 0.01 ? h : 0),
          (ds = null),
          !b ||
          !(M = pv()) ||
          ((h || u) &&
            "no" !== lo(a(fE(), "scrolling") || "") &&
            Ds(d, e, h || T))
            ? !b ||
              !o ||
              iN ||
              o.$forced ||
              false === o.acrossFrames ||
              ((h || u) && (M || Ds(d, e, h || T)))
              ? o && (o.$then || o.$else) && (ds = 0)
              : (p({ H: 25, f: 1, c: 4, n: c, a: o }), (h = 0))
            : (M.c(e, u, t, l, o, c, 1), M.y().k && (sT(1), (jo = M)), (h = 0)),
          $ && m && h && (e && sp(), !jo && o && "clear" === o.sel && td()),
          (ST = null),
          (pp =
            !1 === (C = o && o.keepHover)
              ? 1
              : "never" === C
              ? 2
              : "auto" === C
              ? 20
              : C > 19
              ? C
              : 0),
          ((o || (o = {})).f = t),
          h && rs > "i" && Sr && Sr("scrollRestoration", "manual"),
          (E = v.$(d, e, h, o)),
          (_ = h && null != E ? E : ds),
          (pp = ki ? pp : 0),
          (sC = ds = 0),
          _ && i(_, 1)
            ? _.then(function (n) {
                r(o, n ? 0 : 2);
              })
            : null != _ && r(o, _ ? 0 : 2));
    },
    Sr = function (n, e) {
      var i = history,
        f = i[n],
        r = s,
        u = function () {
          (i[n] = f), r(0, un, u, 1);
        };
      f &&
        f !== e &&
        ((i[n] = e),
        (Sr = 0),
        od(function () {
          t(u, 1);
        }, 1),
        r(0, un, u));
    },
    sT = function (n) {
      (ki = 1 & n ? kI : 0),
        n > 1 && ta && ta(4 & n),
        jo && (jo.k(n), 1 & n || (jo = null));
    },
    Bs = function (n, e, i) {
      if (!e.includes("s-") && !e.includes("a-")) {
        var f = kn.indexOf(i);
        (f > 2 || e === i) && n && pr(n.e),
          f > 4
            ? es(1 & ~f, f < 7 ? -1 : 1, 0)
            : f > 2
            ? es(1, 0, 6 - f, 0)
            : e === i && es(1, f - 1.5, 0, 2);
      }
    },
    Os = function (n) {
      var e = n.repeat;
      return e && pr(n), sT(e ? 5 : 0), e;
    },
    fs = function (n, e, i, f) {
      var r,
        u,
        t,
        l,
        o = function (n, e) {
          var i,
            f,
            r,
            u,
            t,
            l,
            c,
            a = n.e;
          if (
            S(a, 3) + 3 < S(a, 5) &&
            ((i = Ss(a, a !== ST ? s : 1, 1)) > 0 ||
              (!i && S(a, 7) > 0 && Ds(a, 1, 0)))
          )
            return n;
          for (e || pc(), f = [], u = (r = a.children).length; 0 < u--; )
            q((a = r[u])) ||
              ((l = (t = R(g(a))).b > t.t ? rt(t.l, t.t, t.r, t.b) : Q(a)) &&
                f.push({ a: (l.r - l.l) * (c = l.b - l.t), e: a, h: c }));
          return (
            f.sort(function (n, e) {
              return e.a - n.a;
            }),
            f.reduce(function (n, e) {
              return n || o(e, 1);
            }, null)
          );
        },
        c = ST,
        a = Y(D) || null,
        s = (null != i ? i : J || !!iN) ? 3 : 1,
        v = a;
      if (v) {
        for (; v !== c && Ss(v, v === cS ? n + 2 : n, e) < 1; )
          v = se(gp(v, 4)) || c;
        cS = wr((v = v !== c ? v : null));
      }
      if (!v)
        for (r of ((f || "") + ";" + V(112)).split(";"))
          if (
            (t = (u = r.split("##"))[0] && rE(u[0])) &&
            t.test(lO.host) &&
            (v = se(sc(qs, u[1]) || null))
          )
            break;
      return (
        !v &&
          c &&
          ((v =
            (l = o({ a: 0, e: c, h: 0 })) && l.e !== c && (!a || l.h > w() / 2)
              ? l.e
              : c),
          a || ((D = wr(v)), (cS = 0))),
        v
      );
    },
    Ts = function () {
      Sc = 1 / N(1, wz) / N(1, bz);
    },
    cC = function (n) {
      var e = Y(D);
      (e ? e !== n && ni(e) : D) && ((D = wr(n)), (cS = 0));
    },
    Hs = function (n) {
      var e = n && C(n).scrollSnapType;
      return e !== no && e;
    },
    Ds = function (n, e, i) {
      var f,
        r = S(n, e + 6),
        u = ps(n, e, (i > 0 ? 1 : -1) * Sc, r);
      return (
        u &&
          (!e && Hs(n)
            ? (f = ps(n, 0, -u, r)) * f > 0.1 && ps(n, 0, -f, r)
            : n.scrollTo
            ? n.scrollTo(iS(e, r))
            : e
            ? (n.scrollTop = r)
            : (n.scrollLeft = r),
          (sC = sC || 1)),
        !!u
      );
    },
    vs = function (e) {
      var i,
        f,
        r,
        u,
        t,
        l,
        o,
        c,
        a,
        s = e && e.getClientRects()[0];
      if (s) {
        if (
          ((i = R(s)),
          (f = w(1)),
          (r = w()),
          (u = N(96, r / 2)),
          (t = N(64, f / 2)),
          (l =
            i.b < u
              ? n(i.b - r + u, i.t - u)
              : r < i.t + u
              ? N(i.b - r + u, i.t - u)
              : 0),
          (o =
            i.r < 0
              ? n(i.l - t, i.r - f + t)
              : f < i.l
              ? N(i.r - f + t, i.l - t)
              : 0),
          (D = wr(e)),
          (cS = 0),
          o || l)
        ) {
          for (c = e; c; c = gp(c, 4))
            if ("fixed" === (a = C(c).position) || "sticky" === a) {
              o = l = 0;
              break;
            }
          o && ((ds = null), (l ? ps : v.$)(fs(0, o), 0, o)),
            l && ((ds = null), v.$(fs(1, l), 1, l));
        }
        (sC = ds = 0), sT(0);
      }
    },
    Ss = function (n, e, i) {
      var f = C(n),
        r = e ? f.overflowY : f.overflowX;
      return (r === hd && e < 2) || "clip" === r || f.display === no || !sV(f)
        ? -1
        : +Ds(n, 1 & e, i || +!S(n, 6 + e));
    },
    SS = function () {
      nr
        ? (sC = 0)
        : ((sC = 2),
          s(0, "scroll"),
          ra(function () {
            (sC = 0), s(0, "scroll", null, 1);
          }));
    },
    oA = function (n) {
      if (n.isTrusted) {
        var e = n.path;
        (D = wr(se(e.length > 1 ? e[0] : n.target))), (cS = 0);
      }
    },
    b = null,
    si = null,
    ro = null,
    cp = null,
    lf = null,
    eo = 0,
    Rm = function () {
      cm && (W(cm), (cm = null));
    },
    aU = function (n, i) {
      (b = E("div")),
        "closed" === (ro = as(b)).mode ||
          s(
            ro,
            "load",
            function n(i) {
              if (e) {
                var f = i.target;
                (f !== Z && f !== B) || (st(i), f.onload && f.onload(i));
              } else s(0, "load", n, 1);
            },
            0,
            1
          ),
        (aU = function (n, e, i) {
          var f = (c < 51 ? pn(b) : b.isConnected) && n !== cm;
          e && f && au(),
            ro.insertBefore(n, true === i ? ro.firstChild : i || null),
            e && !f && au();
        }),
        (su = function (n) {
          var e = "style";
          (si = E(e)),
            (su = function (n) {
              Cs(cp ? cp[1](n) : n, si);
            })(n),
            an(ro, si),
            b.hasAttribute(e) && or(b, e),
            i && (au(), (i = 1));
        }),
        an(ro, n),
        si ? su(si) : (sD(b), i > 1 && au(), p({ H: 13 }));
    },
    bt = function () {
      return c < 89 && c > 52 && (null != iH ? iH : matchMedia(V(115)).matches)
        ? "body"
        : "div";
    },
    el = function (n, e, i) {
      var r,
        u,
        t,
        l = 2048,
        o = n.length > l,
        a = E(i ? "dialog" : bt()),
        s = a.style,
        v = "R HM" + f.d,
        d = bz / (i ? 1 : dS),
        m = a,
        b = 0;
      if (
        (cn(a, i ? v + " DLG" : v),
        i && n.length && bt() < "d" && ((m = E(bt())), an(a, m), cn(m, v)),
        c > 53)
      )
        for (; b < n.length; b += l)
          (r = (o ? n.slice(b, b + l) : n).map(function (n) {
            return n.m;
          })),
            m.append.apply(m, r);
      else for (u of n) an(m, u.m);
      return (
        (t = e[1] + "px"),
        (s.left = e[0] + "px"),
        (s.top = t),
        d - 1 && (s.zoom = d),
        fe() && (s.position = "fixed"),
        i && (cm = a),
        aU(a, 1, lf),
        a
      );
    },
    au = function (n) {
      var e,
        i,
        f,
        r = fe(),
        l = 2 === n,
        o = !r || cs(ro, r) || cs(b, r) ? u() : r;
      l
        ? W(b)
        : (o === pn(b) && (cm || Z || !b.nextElementSibling)) || nf(o, b),
        (i = (e = si) && e.sheet) && (i.disabled = false),
        l || (cm && !cm.open && cm.showModal()),
        (r || n) &&
          (s(0, "webkitfullscreenchange", au, (f = !r || l)),
          c > 60 && s(0, "fullscreenchange", au, f),
          ia && f && (O || t(h.x, 17)));
    },
    eb = function (e) {
      var i,
        f = n(w(2), 1);
      (e = (e || (gz(), wz)) * f),
        (!cp && (e >= 1 ? e < 2 : c > 84)) ||
          ((i =
            e >= 2 && e <= 4
              ? 1
              : e < 2 && c > 84
              ? 0.01
              : ("" + (e > 4 ? 4 : c < 48 ? 1.01 * f : 0.51) / e).slice(0, 5)),
          cp ||
            (cp = [
              0,
              function (n) {
                return n.replace(cr(108, "g"), "/*!DPI*/" + cp[0]);
              },
            ]),
          cp[0] !== i && ((cp[0] = i), v.l(si, 1)));
    },
    Cs = function (n, e) {
      return ((e = e || E("style")).type = "text/css"), tC(e, n), e;
    },
    su = function (n) {
      si = n;
    },
    cD = function () {
      var n,
        e = ss,
        i = C,
        f = !e || !pn(e);
      f &&
        (e = d.body) &&
        (f = ((n = i(e)).userSelect || n.webkitUserSelect) !== no),
        (DS = f && ((n = i(u())).userSelect || n.webkitUserSelect) !== no);
    },
    sO = function (n) {
      return n.getSelection();
    },
    gs = function (n) {
      var e,
        f,
        r,
        u = null;
      if (
        ((e = Y(D)) &&
          (e = rn(e)) !== d &&
          IN(e, 11) &&
          i(e.getSelection, 2) &&
          (f = sO(e)) &&
          (n || rc(f)) &&
          (u = e),
        !u)
      )
        for (r = f = y(); r; )
          (r = null),
            (e = eu(f)) && (u = sr(e)) && ((r = sO(u)) ? (f = r) : (u = null));
      return n && (n.r = u), f;
    },
    pU = function (n, e) {
      for (
        var f,
          r,
          t,
          l,
          o,
          c,
          a,
          s,
          v = sR(n),
          d = 0,
          m = v && v.commonAncestorContainer,
          b = m;
        m && !m.tagName;

      )
        m = pn(m);
      if (e && m && v && !v.collapsed && (r = v + "")) {
        if (IN(b, 3) && b.data.trim().length <= r.length)
          for (; m && i((f = m.innerText)) && r.length >= f.length; )
            m = gp((b = m), 1);
        for (
          l = v.cloneRange(),
            o = v.cloneRange(),
            l.collapse(!0),
            o.collapse(!1),
            l.setStart(m || b, 0),
            o.setEndAfter(m || b),
            a = (c = l + "").length,
            s = c + r + o,
            d = 1,
            e.lastIndex = 0;
          (t = e.exec(s)) && (d = t.index - a) < 0;

        );
      }
      return d ? 0 : m !== u() ? m : null;
    },
    gS = function (n, e) {
      var i,
        f,
        r = "" + (e = e || y());
      return (
        !r ||
          L() ||
          !(i = eu(e)) ||
          3 !== ge(i) ||
          ((f = sb(e)).width && f.height) ||
          (r = ""),
        n ? r : r.trim()
      );
    },
    Rs = function (n) {
      var e = n ? sO(n) : y(),
        i = e && sA(e) && ga(e);
      return i && CS(e), !!i;
    },
    td = function (n, e) {
      (n || y()).removeAllRanges(), e && n.addRange(e);
    },
    ao = function (n) {
      y().selectAllChildren(n);
    },
    Ms = function (n, e) {
      var i,
        f,
        r,
        u,
        t,
        l,
        o = et[H(n)],
        c = o ? (o > 2 ? o : 0) : n.isContentEditable ? 5 : 0;
      if (
        0 !== c &&
        ((i = 3 === c || (5 === c && tC(n).includes("\n"))),
        (f = "start" === e),
        (r = !e || "end" === e || (i && "-" === (e + "")[3])),
        !(i && r && S(n, 3) + 12 < S(n, 5)))
      ) {
        if (5 === c) ao(n);
        else {
          if (
            ((u = n.value.length),
            (t = to(n)),
            (l = to(n, 1)),
            !u ||
              (t && t < u) ||
              (l && l < u) ||
              (r ? t : f ? !l : !t && l) ||
              (!e && l))
          )
            return;
          n.select();
        }
        (r || f) && CS(y(), +r);
      }
    },
    CS = function (n, e) {
      e ? n.collapseToEnd() : n.collapseToStart();
    },
    gr = function (n, e) {
      if ((gz(n), pc(), e)) return fA(e, [], [n]);
      var i = q(n) ? null : Q(n),
        f = g(n),
        r = R(f, 8),
        u = i && !iC(r, i) ? i : rt(r.l, r.t, r.r, r.b) ? r : null;
      return u && cR(n, u);
    },
    fl = function (n, e, i, r) {
      var u, l, o;
      if ((e || (e = gr(n)), e))
        return (
          (u = E(bt())),
          cn(
            u,
            "R Flash" + (r || "") + (sB(u.style, e, (l = !fe())) ? " AbsF" : "")
          ),
          1 !== bz && l && (u.style.zoom = "" + bz),
          aU(u, 1),
          (lf = u),
          (o = function () {
            lf === u && (lf = null), W(u);
          }),
          -1 === i || t(o, (i || 400) * (+f.m + 1)),
          o
        );
    },
    oc = function (n) {
      (n = 8 & n ? eo & ~n : eo | n) !== eo && s(0, Cl, eO, !(eo = n), 1);
    },
    eO = function (n) {
      (!n ||
        (n.isTrusted && (n.detail || n.clientY) && pn(b) && n.target !== b)) &&
        (n && pr(n), 1 & eo && hH(), 2 & eo && HI());
    },
    pv = function () {
      return fE() && parent.VApi;
    },
    eI = function (n) {
      var e,
        f,
        u = i(n) ? n : n.u;
      return (
        !!ij(u) &&
        ((e = u.slice(11).trim()),
        cr(110, "").test(e) ||
          (iA && pn((f = rj(V(98), 0)))
            ? (W(f), p({ H: 24, u: u }))
            : ((e = sc(decodeURIComponent, e) || e),
              t(function () {
                v.v(e), i(n) || (n.f && r(n.f, 0));
              }, 0))),
        true)
      );
    },
    cH = function (n, e, i) {
      var f, r, t, l, o;
      return J
        ? 0
        : ((r = (f = fE() || null) || u()),
          (o = S(f, 3) < 4 || S(f, 2) < 4 || (!!r && !is(r))),
          n &&
            (f &&
              (o || (t = R(g(f))).b <= 0 || t.t > parent.innerHeight) &&
              (l = pv()) &&
              !l.a(k) &&
              (l.f(n, e, i, 1), (o = 1)),
            true === o &&
              (e.$forced ? (o = 0) : p({ H: 25, f: 1, c: n, n: i, a: e }))),
          +o);
    },
    po = null,
    TI = 1,
    p = function (n) {
      po.postMessage(n);
    },
    Se = function (n, e, i) {
      p({ H: 90, i: ++TI, c: n, a: e }), ((pC = pC || x({}))[TI] = i);
    },
    sP = function (n) {
      try {
        po ||
          (rC(),
          iN &&
            t(function () {
              po || sd();
            }, 50)),
          p(n);
      } catch (n) {
        sd();
      }
    },
    rC = function () {
      var n = chrome,
        i = f ? 4 + 8 * !!si : 0,
        r = J + 2 * dh() + i,
        u = { name: iN ? "vimium-c." + r + iN.$h : "" + r },
        l = n.runtime.connect;
      (po = iN ? l(iN.id, u) : l(u)).onDisconnect.addListener(function () {
        (po = null),
          t === io
            ? sd()
            : t(
                function (n) {
                  if (n) sd();
                  else
                    try {
                      po || !e || rC();
                    } catch (n) {
                      sd();
                    }
                },
                f ? 5e3 : 2e3
              );
      }),
        po.onMessage.addListener(function (n) {
          rh[n.N](n);
        }),
        (ig = n.i18n.getMessage);
    },
    r = function (n, e, f, r) {
      var u,
        t = e ? n.$else : n.$then,
        l = n.$f;
      t && i(t)
        ? (St(r || 60, 0),
          p({ H: 18, k: t, f: { c: l, r: n.$retry, u: e, w: r } }))
        : (u = e && (2 !== e ? e : l && l.t)) && T(u, 0, f);
    },
    rp = 0,
    rh = [
      function (n) {
        var e = n.c,
          i = n.f;
        (c = e.v),
          (f = v.z = e),
          (os = f.o) || (oO = 300),
          c < 57 && (et.keygen = 2),
          c < 70 && (ka = ka + ":not(" + (uf = "frameset") + ")"),
          i && ((gb = gb && !(4 & i)), (iL = 3 & i)),
          rh[9](n),
          rh[1](n, 1),
          j
            ? ((k = So(null)), iI(iN ? iN.$g : f.g && gb, 1), c > 54 && ho(1))
            : ((gb = false), ho(2), v.e && v.e(5)),
          (rh[0] = null),
          od(function () {
            (wf = sP.bind(0, { H: 7 })),
              J || (dh() && wf()),
              J ||
                t(function () {
                  var n,
                    e,
                    i = pv(),
                    f = X,
                    r = i && i.b;
                  rp &&
                    (i
                      ? ((X = i.y().c), f.forEach(X.add, X))
                      : (X = new WeakSet(f))),
                    (n = (r && r.p) || r) &&
                      n.h &&
                      n.h - 1 &&
                      (e = gt() - n.h) < 1200 &&
                      e >= 0 &&
                      n.i(1);
                }, 330);
          }),
          iA || (iN || v).$r(4);
      },
      function (n, i) {
        var f,
          r,
          u = n.p,
          t = j;
        (j = "" !== u),
          u
            ? ((f = (
                (kr = "^" === u[0] && u.length > 2) ? u.slice(2) : u
              ).split(" ")),
              (pk = new Set(f)))
            : (pk = u),
          i ||
            ((r = pk),
            e(3),
            (pk = r),
            (iL = n.f),
            j
              ? ((k = k || So(null)), t || iI(), (t && !iL) || ho(0))
              : cc[7]({ r: 1 }),
            b && au(+j ? 1 : 2));
      },
      iN && iN.$m,
      function (n) {
        delete n.N, (n.u = (16 === n.H ? v.u : lH)()), p(n);
      },
      function (n) {
        var e = n.m,
          i = pC[e];
        delete pC[e], i(n.r);
      },
      eI,
      function (n) {
        var e,
          i,
          r = n.d;
        for (e in (x(r), r))
          (f[e] = r[e]), (i = "_" + e) in f && delete x(f)[i];
        null != r.d && bo && tc(bo, "D", !!r.d);
      },
      function (n) {
        var i,
          f = n.m;
        n.H && su(n.H),
          3 === f &&
          (cH() ||
            (d.body &&
              "frameset" === H(d.body) &&
              (!(i = qs("div")) || (i === b && !ha.length))))
            ? p({ H: 9, k: n.k, f: n.f })
            : ((f || n.c) &&
                t(function () {
                  v.f(n.c, n.a, n.n), e && r(n.f, 2 === f ? 2 : 0);
                }, 1),
              (k[n.k] = 1),
              (2 === f && n.f.$else) || fM(f));
      },
      eg,
      function (n) {
        x((kf = n.k || kf)), (mk = n.t), (mK = n.m) && x(mK), e(0);
      },
      function (n) {
        n.H && su(n.H), e(0), j && cc[n.c](x(n.a || {}), n.n);
      },
      cM,
      function (n) {
        n.H &&
          (su(n.H),
          n.f &&
            ((fc = n.f),
            sI && Cs(n.f.i, sI),
            cI && (Cs(n.f.c, cI), Cs(n.f.c, Co)),
            de && ts(1))),
          n.k && T(n.k, n.d, [n.t || ""]);
      },
      function (n) {
        var i,
          f,
          r = parseInt(ck, 10) || 1,
          u = 0;
        e(0),
          eg(),
          n.m &&
            ((i = gt()),
            (f = confirm(n.m)),
            (u = M.abs(gt() - i) > 9 ? (f ? 3 : 1) : 2)),
          p({ H: 21, c: n.c, n: r, i: n.i, r: u });
      },
      function (n) {
        var e = L() || da(1);
        p({ H: 32, r: n, e: ed(e) });
      },
      function (n) {
        var e = n.n,
          i = n.s,
          f = n.l,
          u = n.f;
        e && sp(),
          tM(i),
          f || v.f(),
          e && T(86, f ? 1 : 2, [V(83), V(39 + f), e]),
          u && r(u, 0);
      },
      function (n) {
        St(n.t);
      },
    ],
    fM = function (n) {
      var e, i, f;
      J || 3 !== n || ((e = u()) && ep.scrollIntoViewIfNeeded.call(e)),
        n < 2 ||
          !Ih() ||
          (fm && t !== io
            ? (fm = 2)
            : ((i = E(bt())),
              cn(i, "R Frame" + (2 === n ? " One" : "")),
              (f = io(
                function () {
                  2 !== fm ? ((fm = 0), W(i), Ci(f)) : (fm = 1);
                },
                J ? 200 : 350
              )),
              (fm = 1),
              aU(i, 1)));
    },
    ho = function (n) {
      var e = n ? removeEventListener : addEventListener,
        i = true;
      ((n || c < 55) &&
        (e.call(d, dA, oA, i), e.call(d, Cl, Ch, i), 1 === n)) ||
        (e("keydown", ok, i),
        e("keyup", oK, i),
        2 !== n && e("focus", of, i),
        e(BU, oB, i),
        e(Cl, Ch, i),
        e(dA, oA, i));
    },
    rS = "readystatechange",
    cc = [
      function (n, e) {
        var i = N(e < 0 ? -e : e, history.length - 1),
          f = n.reuse,
          u = e < 0 ? -i : i;
        n.r
          ? t(function () {
              if (n.u) lO.href = n.u;
              else {
                if (cH(0, n, 1)) return;
                lO.reload(!!n.hard);
              }
              r(n, !1);
            }, 17)
          : (c > 71 && i > 1 && !f) || (i && f && "current" !== f)
          ? p({ H: 28, s: u, o: n })
          : (i && history.go(u), r(n, !i && 2));
      },
      function (n) {
        var i,
          l,
          o,
          a,
          m,
          h = function (n) {
            var e = fc.c,
              i = (cI = Cs(e));
            b ? au() : aU(i, n, true), W(i), (Co = Cs(e));
          },
          g = function () {
            (ir = sR(gs()))
              ? CS(y())
              : (ir = d.createRange()).setStart(d.body || u(), 0),
              ir.collapse(!0),
              n.r && (co = [scrollX, scrollY]);
          },
          w = function () {
            var n = se(pU(gs())),
              e = n && Fa(n);
            return e ? fo(e) : n;
          },
          H = function (n) {
            df(),
              (qU = ""),
              qu || j(n),
              (iq = true),
              (nE = !!qu) && eC("selectAll");
          },
          C = function (n) {
            var e = c < 61 ? [scrollX, scrollY] : 0;
            iv(n), e && tM(e);
          },
          j = function (n) {
            n !== qu &&
              id &&
              (!n && Hi > 0
                ? --Hi
                : (eC("selectAll"),
                  eC("insertText", 0, n.replace(/^ /, "\xa0")),
                  R()));
          },
          M = function () {
            var n = function (e) {
                (e && e !== !!e && !e.isTrusted) ||
                  (pl && s(pl, BU, n, 1),
                  pl &&
                    true !== e &&
                    ((pl = null), s(0, Cl, n, 1), z(5), sS()));
              },
              e = L();
            e
              ? (wn(5, 4, n),
                e !== pl &&
                  (pl || (s(0, Cl, n), sS(n)), n(true), (pl = e), s(e, BU, n)))
              : n();
          },
          R = function (n) {
            var e, i;
            if (n) {
              if ((st(n), !((c > 64 && n.type < "i") || n.isTrusted))) return;
              if (n.isComposing) return;
            }
            (e = In.innerText.replace(/\xa0/g, " ").replace(/\n$/, "")),
              (i = qu),
              hr ||
              iR ||
              ww ||
              !nE ||
              !e.startsWith(i) ||
              e.includes("\\", i.length - 1)
                ? (co && tM(co),
                  uq(e),
                  D(),
                  ef(iR ? (rm ? rm[0] : "") : pq, { j: 1 }),
                  I(1),
                  (li = gt()))
                : ((qU = e), I(0));
          },
          I = function (n) {
            var e = mc;
            n &&
              (ce.dataset.vimium = pq
                ? V(e > 1 ? 26 : e ? 27 : hr ? 28 : 29, [e])
                : ""),
              (e = (S(In, 4) + ce.offsetWidth + 35) & -32),
              (!Is || e > 151) &&
                (ob.style.width = (Is = e < 152) ? 0 : e + "px");
          },
          D = function (n) {
            var e = y(),
              i = n ? (e.isCollapsed ? null : sR(e)) : ir;
            i && td(e, i);
          },
          F = function () {
            var n, e, i, f, r, u, l, o;
            pc(1),
              (n = ar),
              (e = { h: [scrollX, scrollY], i: 1 }),
              (i = gs()),
              (f = sR(i)) && CS(i),
              (r = ef("", e)),
              f && (td(i, f), (ar = n), (e.c = -1), (r = r.concat(ef("", e)))),
              (u = L()) && u.blur(),
              hI && hI(),
              (l = r.map(function (n) {
                return fl(null, n, -1, " Sel SelH");
              })),
              (ar = n),
              f ? td(i, f) : D(),
              (o = t(
                (hI = function () {
                  (hI = null), ct(o), l.map(cf);
                }),
                2400
              ));
          };
        (fc = n.f || fc),
          Ih() &&
            ((Lo = n),
            ((i = n.s ? gS() : "").length > 99 || i.includes("\n")) && (i = ""),
            (iq = !i),
            i || (i = n.q),
            $ || (i === qu && n.l) || sp(),
            cD(),
            eb(),
            (de =
              de ||
              function (n) {
                var e,
                  i,
                  f,
                  u = cI && cI.sheet,
                  t = hr,
                  l = Lo,
                  o = l.p ? 4 : 5;
                if (
                  ((li = 0),
                  2 === n ? hS(1) : focus(),
                  co && tM(co),
                  (hr = $ = Is = nE = ww = false),
                  (wa = true),
                  z(2),
                  ob && W(ob),
                  hI && hI(),
                  B === Y(lh) && (lh = null),
                  (pq = qu = qU = ""),
                  (Hi = mc = dc = 0),
                  (sI =
                    ou =
                    ob =
                    iR =
                    ic =
                    B =
                    id =
                    rO =
                    In =
                    ce =
                    pR =
                    de =
                    v.n =
                    Lo =
                    ir =
                    rm =
                    co =
                    ci =
                      null),
                  n > 4 && (e = sf(gs())) && ((n > 5 && t) || !ge(e)) && fo(e),
                  (5 !== n && t && !mn) || !u || (tS(1), D(true)),
                  mn)
                )
                  Ac(x({ r: true }));
                else {
                  if (n > 4 && t && (!e || e !== L())) {
                    if (
                      (f = w()) &&
                      5 === n &&
                      (i = da()) &&
                      ge(i) > 2 &&
                      cs(f, i)
                    )
                      return (
                        pc(),
                        void SE(i).then(function () {
                          ts(), n > o && M();
                        })
                      );
                    e && C(e);
                  }
                  ts(), n > o && (M(), n > 5 && r(l, t ? 0 : 2));
                }
              }),
            $ && au(),
            n.l
              ? ((i = i || qu) &&
                  (Co || h(2),
                  (l = i !== qu),
                  ir || qu || g(),
                  n.e && ((ar = 0), D()),
                  l && (uq(i), $ && (tC(In, i.replace(/^ /, "\xa0")), I(1))),
                  (n.e || l) && (ar -= n.c > 0 ? 1 : -1),
                  (iq = true),
                  (o = !$ && 1 === oP) && tO(0),
                  ts(),
                  ef("", n),
                  hr && n.m && (gz(), F()),
                  o && tO(1),
                  hr
                    ? (w(),
                      $ ||
                        wn(2, 4, function () {
                          var n = ir;
                          return de(2), tS(1), td(y(), n), 2;
                        }),
                      M())
                    : (tS(1), $ || ts())),
                r(n, i ? (hr ? 0 : 89) : 88, i))
              : $
              ? (hh(1), H(i))
              : (g(),
                (pq = qu = ""),
                (pR = rm = null),
                (ar = 0),
                qu || (qU = i),
                ((m = (a = ob = E(bt())).style).width = "0"),
                sD(a),
                1 !== wz && (m.zoom = "" + 1 / wz),
                cn(a, "R UI HUD" + f.d),
                (B = E("iframe")),
                cn(B, "R UI Find"),
                (B.onload = v.n =
                  function (n) {
                    var i,
                      r,
                      u,
                      l,
                      o,
                      a = function () {
                        var n,
                          e,
                          r,
                          u = id.documentElement,
                          t = id.body,
                          l = i.devicePixelRatio,
                          o = id.createDocumentFragment(),
                          a = function (n, e) {
                            var i = id.createElement(n || "span");
                            return e && ((i.id = e), an(o, i)), i;
                          };
                        a(0, "s"),
                          (n = In = a(0, "i")),
                          a(0, "h"),
                          (n.contentEditable = "plaintext-only"),
                          c < 60 && s(n, iO, R),
                          (ce = a(0, "c")),
                          Cs(fc.i, (sI = a("style"))),
                          (e = as(t)),
                          (r = a("div")),
                          cn(r, "r" + f.d),
                          (r.spellcheck = false),
                          an(r, o),
                          (rO = e),
                          s(r, md, m, 0, 1),
                          an(e, r),
                          an(e, sI),
                          or(t, "role", "textbox"),
                          or(t, "aria-multiline", "true"),
                          cn(t, f.d.trim()),
                          l < 1 && (u.style.zoom = "" + 1 / l),
                          sD(ob, 1),
                          sM(2, h),
                          hh(1),
                          H(qU);
                      },
                      d = function (n) {
                        if (n.isTrusted)
                          if ("blur" !== n.type)
                            dc && n.target === this && wf(), st(n);
                          else {
                            var e = gt() - li;
                            e <= 35 && e >= 0 && ((li = 0), t(df, 0));
                          }
                      },
                      m = function (n) {
                        var i,
                          f = n.target;
                        !e ||
                          f === In ||
                          (rO && pn(f) !== this && f !== this) ||
                          !n.isTrusted ||
                          (pr(n),
                          df(),
                          (i = In.firstChild) &&
                            sO(id).collapse(
                              i,
                              f !== In.previousSibling ? i.data.length : 0
                            ));
                      },
                      b = function (n) {
                        var e,
                          i,
                          f,
                          r,
                          u,
                          t,
                          l,
                          o = n.keyCode;
                        st(n),
                          n.isTrusted &&
                            !(
                              !o ||
                              229 === o ||
                              (ki && Os(n)) ||
                              "keyup" === n.type
                            ) &&
                            ((i = _((e = { c: " ", e: n, i: o }), 4)),
                            (f = ke(i)),
                            (u = 2),
                            (r =
                              i.includes("a-") && n.altKey
                                ? 0
                                : f === en
                                ? i > "s"
                                  ? -1
                                  : (qu && p({ H: 1, q: qU }), 6)
                                : f !== De && f !== bs
                                ? ie(i)
                                  ? 5
                                  : 0
                                : qu || (46 === o && os) || n.repeat
                                ? -1
                                : 1)
                              ? -1 === r && (u = 1)
                              : f !== i
                              ? i === "a-".concat("f1")
                                ? (pc(), hR(gs()))
                                : i < "c-" || i > "m-"
                                ? (u = 1)
                                : (t = kn.indexOf(f)) > 2 && (5 & t) ^ 5
                                ? Bs(e, i, f)
                                : "j" === f || "k" === f
                                ? h(e)
                                : (u = 1)
                              : "f1" === f
                              ? eC(De)
                              : "f2" === f
                              ? (focus(),
                                (k[o] = 1),
                                (l = hr && sf(gs())) && fo(l))
                              : "up" === f || "down" === f
                              ? (t = Hi + (f < "u" ? -1 : 1)) >= 0 &&
                                ((Hi = t),
                                f > "u"
                                  ? Se(1, t, j)
                                  : (eC("undo"), CS(sO(id), 1)))
                              : (u = 1),
                            u < 2 || pr(n),
                            r < 1 || ((k[o] = 1), de(r)));
                      },
                      h = function (n) {
                        var e,
                          i = _(n, 4);
                        return "f2" === i
                          ? (ou && ou(), df(), 2)
                          : i.length > 1 &&
                            "c-m-".includes(i[0] + i[1]) &&
                            ("j" === (e = ke(i)) || "k" === e)
                          ? ((!hr && wa) ||
                              (i.length > 4
                                ? F()
                                : ef("", { c: -(e > "j"), i: 1 })),
                            2)
                          : !L() && ie(i)
                          ? (pr(n.e), de(3), 2)
                          : 0;
                      };
                    if (!n || n.isTrusted) {
                      try {
                        id = $ ? B.contentDocument : null;
                      } catch (n) {}
                      id
                        ? ((r = (i = B.contentWindow).addEventListener.bind(i)),
                          (u = gt()),
                          (l = true),
                          (o = 0),
                          (v.n = 0),
                          (ob.onmousedown = m),
                          r(md, m, l),
                          r("keydown", b, l),
                          r("keyup", b, l),
                          r(iO, R, l),
                          r(
                            un,
                            function (n) {
                              $ && !n.isTrusted && de(4);
                            },
                            l
                          ),
                          r("compositionend", R, l),
                          Ce(i, Cl),
                          r(
                            BU,
                            (ou = function (n) {
                              var e = gt() - u;
                              n && $ && e < 500 && e > -99 && n.target === i
                                ? i.closed ||
                                  t(function () {
                                    $ && df();
                                  }, 17 * o++)
                                : (s(i, BU, ou, 1, 1), (ou = null));
                            }),
                            l
                          ),
                          r("focus", d, l),
                          r("blur", d, l),
                          (B.onload = n
                            ? null
                            : function (n) {
                                (n.target.onload = null), $ && a();
                              }),
                          n && a())
                        : $ && (de(4), T(87, 2));
                    }
                  }),
                sM(2),
                Co || h(0),
                ts(1),
                ($ = true),
                an(a, B),
                aU(a, 1, bo)));
      },
      function (n, e, i) {
        var r, u, l, o, a, s, m, b, p, g, k, w, y, H, x, C;
        if ((!ia || 2 === i) && j) {
          if (cH(2, n, e)) return cl(1);
          if (n.direct && !ia) return ad(n, e);
          if (null === d.body && (O || cl(), !_t && rs > "l"))
            return (_t = t(cc[2].bind(0, n, e, 0), 300)), sM(0);
          if ((r = !fe() && pv())) return r.l(si), r.f(2, n, e, 2, fE());
          if (
            ((l = null != (u = n.useFilter) ? !!u : f.f),
            (a = []),
            (fa = [(o = { h: [], v: null, s: h })]),
            (m = (s = n.c) ? s + "" : l ? f.n : f.c).length < 4)
          )
            return T(96, 1), cl();
          for (
            iH = matchMedia(V(c < 89 ? 115 : 21)).matches,
              h.d = +(null != wd ? wd : Ic() || !!qs("dialog[open]")),
              g = 0,
              y = [],
              h.o(
                n,
                e,
                m,
                l,
                null,
                null,
                o,
                (H = function (n, e, i) {
                  var f = du(e),
                    r = f && f.b;
                  return (
                    r && (f.l(si), y.splice(g, 0, { v: i && n.g(e, i), s: r })),
                    !r
                  );
                })
              ),
              b = o.h;
            (p = y.pop());

          )
            p.v
              ? ((g = y.length),
                fa.push((k = { h: [], v: null, s: p.s })),
                p.s.o(n, e, m, l, p.v, h, k, H),
                (b = k.h.length ? b.concat(k.h) : b))
              : p.s.$().a && a.push(p.s);
          for (x of a) (x.p = null), x.c();
          if (!(w = b.length) || w > 1e6)
            return T(w ? 22 : P < 32 && !n.match ? 71 : 5), cl();
          for (C of ((hi = K.c = b),
          (nh =
            !(l || (o.v[3] > 40 && o.v[2] > 320)) ||
            !!(n.hideHUD || n.hideHud)),
          l ? iF(b) : aE(b),
          RM(b),
          (h.h = 1),
          fa))
            C.s.r(C.h, C.v, v);
        }
      },
      function (n, e) {
        var f = "create" === n.mode,
          r = e < 2 || e > 9 ? 0 : e - 1,
          u = !!n.swap;
        hs(f + 79),
          sM(4, function (e) {
            var t, l, o, c, a, s, v, d;
            if (229 === e.i) return 0;
            if (1 !== (t = _(e, 6)).length && !ie(t)) return 1;
            if ((z(4), ie(t))) hh();
            else if ("`'".includes(t))
              f
                ? (sp(r), T(81, 1))
                : (sp((l = Pr[r]) ? 0 : r),
                  l && tM(l),
                  T(82, 1, [V(l ? 83 : 84), r ? r + 1 : V(85)]));
            else if (f)
              e.e.shiftKey !== u
                ? J
                  ? cM({ n: t })
                  : (p({ H: 19, a: 1, n: t }), hh())
                : cM({ n: t }, 2);
            else {
              if (((o = { H: 19, a: 0, n: t, c: n }), e.e.shiftKey !== u)) hh();
              else {
                try {
                  (l = null),
                    (c = "vimiumMark|"
                      .concat(lH().split("#", 1)[0], "|")
                      .concat(t)),
                    (s = (a = localStorage) && a.getItem(c)) &&
                      (l = JSON.parse(s)) &&
                      i(l, 1) &&
                      (x(l),
                      (d = l.scrollY),
                      (v = l.scrollX) >= 0 &&
                        d >= 0 &&
                        (o.o = { x: 0 | v, y: 0 | d, h: "" + (l.hash || "") }));
                } catch (n) {}
                (o.l = 2), (o.u = lH());
              }
              p(o);
            }
            return 2;
          });
      },
      function (n, e) {
        var i, f, r;
        null == n.$c && (n.$c = cT),
          cH(4, n, e) ||
            tn(4, n, e) ||
            ((i = e),
            (r = "max" === (f = n.dest)),
            f ? (e < 0 && ((r = !r), (e = -e)), e--) : (e *= +n.dir || 1),
            es("x" === n.axis ? 0 : 1, e, f ? (r ? 3 : 2) : 0, n.view, n, i),
            ki && !n.$c && sT(0));
      },
      Ac,
      aC,
      function (n) {
        if (n.u) {
          var e = Y(lh),
            i = n.i ? 9 : e && I(e, d) ? 0 : 2;
          ua().then(function () {
            T(4), i < 9 && r(n, i);
          });
        }
        n.r &&
          ((cS = 0),
          (D = null),
          hA(),
          (il = l = G = null),
          (lM = 1),
          eg(),
          sS(),
          cl(2 - n.r),
          dE && dE(),
          de && de(2),
          HI(),
          hH && hH(),
          wB()),
          n.i && ((G = n), n.h && hs(1, n.h));
      },
      function (n) {
        var e,
          i = n.k,
          r = "_" + i,
          u = x(f),
          t = u[i],
          l = n.v;
        null === l && t === !!t && (l = !t),
          u[r] === e ? (u[r] = t) : t === l && ((l = u[r]), (u[r] = e)),
          (u[i] = l),
          n.n && p({ H: 35, k: n.n, v: l });
      },
      function (n, u) {
        var t,
          o,
          c,
          a = x({}),
          s = n.ignoreCase,
          v = n.expect,
          d = i(v) && !!v,
          m = 0,
          b = u > 0 ? u : -u;
        if ((z(10), op ? op() : e(3), d || !!n.normal == u > 0)) {
          if (((t = e), (o = pk), !d && !o)) return T(6);
          (pk = null),
            d &&
              ph(function (n) {
                var i = _(n, l ? 1 : 0),
                  f = i.length > 1 ? "<".concat(i, ">") : s ? lo(i) : i,
                  r = !!f && (s ? lo(v) : v).slice(b - 1).startsWith(f);
                return (
                  r && (b += f.length),
                  b > v.length || (f && !r)
                    ? ((b = +!r), e(3), r || St(200, 0))
                    : e(0),
                  2
                );
              }, 10),
            (e = function (i) {
              return (2 === i && 0 >= --b) || 3 === i
                ? (hh(), z(10), (pk = o), (e = t), r(n, b ? 2 : 0), t(2))
                : (t(0),
                  (nk = kf),
                  (m - b || !te) &&
                    ((m = b),
                    hs(
                      v ? 31 : 7,
                      v ? v.slice(b - 1) : b > 1 ? V(8, [b]) : ""
                    )),
                  i);
            })(0);
        } else
          (c = function (n, e) {
            var i, r;
            if (!os && m && (e || !gk(n))) {
              for (i in a)
                a[(r = +i)] &&
                  n.timeStamp - a[r] >
                    ((r > 18 ? r < 91 || r > 93 : r < 16)
                      ? f.k[0] + 800
                      : 5e3) &&
                  ((a[r] = false), --m);
              m > 0 || ((m = 0), --b) || op();
            }
            return !b;
          }),
            ph(function (n) {
              return !n.e.repeat && c(n.e, 1)
                ? 0
                : ((m += !a[n.i]), (a[n.i] = os ? 1 : n.e.timeStamp), -1);
            }, 10),
            (op = function (e) {
              (e && c(e, 0)) ||
                ((
                  e && a[e.keyCode]
                    ? --m > 0 || ((m = 0), --b)
                    : (0 === e && m) || b
                )
                  ? ((a[e && e.keyCode] = 0),
                    m || hs(9, b > 1 ? V(8, [b]) : ""))
                  : (z(10), (op = null), hh(), r(n, b ? 2 : 0)));
            })(0);
      },
      function (n) {
        var e, i;
        J || !(e = pv()) || e.a(k)
          ? (i = Ih() && ((n.r && nI(n.r)) || (n.p.length && iT(n.p, n))))
            ? i[1].j(i[0])
            : r(n, 10, V(62 + n.n))
          : e.f(10, n, 1);
      },
      function (n) {
        var e = n.selected,
          i = pu(n),
          f = n.s && !e ? "" : gS(1) || (n.text || "") + "",
          r = f.trim(),
          u = n.copied;
        n.copy &&
          (r || !n.o) &&
          p({
            H: 16,
            s: f,
            e: pS(n),
            u: f ? "" : n.url ? v.u() : d.title,
            d: n.decoded || n.decode,
          }),
          n.o && ((r && eI(r)) || p({ H: 6, c: u, u: r, o: i, n: n })),
          n.s && !n.o && p({ H: 4, u: v.u(), c: u, t: e ? r : "", o: i, n: n });
      },
      function (n, e) {
        var i,
          u,
          t,
          o,
          c,
          a,
          s,
          v,
          m,
          b,
          p,
          h,
          k,
          w,
          y,
          H = "IH IHS",
          x = n.act || n.action,
          C = Y(il),
          S = function (n, e, i) {
            return ge(n)
              ? SE(n, e, i, c, i)
              : ca(n, e, true).then(function () {
                  i && fl(n);
                });
          };
        if (
          x &&
          ("l" !== x[0] || (C && !l)) &&
          ((u = 0),
          (i = l)
            ? x === bs
              ? vi(i) && eC(De, d)
              : ((il = wr(i)), (lM = 0), i.blur())
            : (i = C)
            ? ("last-visible" !== x && vi(i)) || !ni(i)
              ? ((il = null),
                (lM = 1),
                gz(i),
                pc(),
                SE(i, null, !!n.flash, n.select, true))
              : (u = "l" === x[0] ? -1 : 12)
            : (u = 11),
          u >= 0)
        )
          r(n, u);
        else if (
          (ih && (ih.h = null),
          (t = gv()),
          pc(1),
          (o = tr(V(97) + ka, n, gE)),
          (c = n.select),
          (a = n.keep),
          (s = n.passExitKey),
          (null != (v = n.reachable) ? v : f.e) && (cm || on(o, 1)),
          (b = o[0]),
          (m = o.length) < 2)
        )
          Ei(),
            m
              ? S(b[0], b[1], true).then(function () {
                  r(n, !1 === n.verify || L() || da() ? 0 : 13);
                })
              : r(n, 13);
        else {
          for (p = 0; p < m; p++)
            (h = o[p])[2] =
              (k = h[0].tabIndex) > 0 ? k + p / 8192 : k < 0 ? -p - m : -p;
          if (
            (o.sort(function (n, e) {
              return n[2] < 1 || e[2] < 1 ? e[2] - n[2] : n[2] - e[2];
            }),
            (w = o.map(function (n) {
              var e = E("span"),
                i = R(g(n[0]), 3);
              return (
                i.l--,
                i.t--,
                i.r--,
                i.b--,
                cn(e, "IH"),
                sB(e.style, i),
                { m: e, d: n[0] }
              );
            })),
            M.abs((e -= e > 0)) > 2 * m)
          )
            m = e < 0 ? 0 : m - 1;
          else {
            for (p = !C || e ? m : 0, p = 0; p < m && w[p].d !== C; p++);
            if (p >= m)
              for (
                p =
                  (y = (n.prefer || "") + "") && false === sc(tm, y, o[0])
                    ? 0
                    : m;
                p < m && !tm(y, o[p]);
                p++
              );
            m = (((p + e) % m) + m) % m;
          }
          cn(w[m].m, H),
            Ei(),
            S(w[m].d, o[m][1]).then(function () {
              eb(wz / dS),
                (ih = { b: el(w, t), h: w }),
                (w = 0),
                ph(function (n) {
                  var e,
                    i,
                    f,
                    r = n.i,
                    u = 229 === r,
                    t = n.e.repeat,
                    o = u || t ? "" : _(n, 1);
                  return "tab" === o || o === "s-".concat("tab")
                    ? ((f = (e = ih.h).length),
                      (m = ((i = m) + (o < "t" ? f - 1 : 1)) % f),
                      (IH = 1),
                      pr(n.e),
                      S(e[m].d).then(function () {
                        (IH = 0), cn(e[i].m, "IH"), cn(e[m].m, H);
                      }),
                      2)
                    : 16 === r ||
                      (a &&
                        !o &&
                        (18 === r || 17 === r || (r > 90 && r < 94))) ||
                      t
                    ? 0
                    : (
                        a
                          ? ie(o) ||
                            (ke(o) === en &&
                              o < "s" &&
                              ("e" !== o[0] || ht(iO, ih.h[m].d)))
                          : !u && 123 !== r
                      )
                    ? (Ei(), ie(o) ? (a || !l ? 2 : s ? -1 : 0) : 0)
                    : 0;
                }, 9);
            });
        }
      },
      function (n, e) {
        var i = L(),
          f = i && 3 === ge(i) ? i : 0;
        (f || n.dom) &&
          t(function () {
            for (
              var i,
                u,
                t,
                l,
                o,
                c,
                a,
                s,
                v,
                m,
                b = n.run.split(/,\s*/g),
                p = M.abs(e);
              0 < p--;

            )
              for (a = 0; a < b.length; a += 3)
                (v = b[a + 1]),
                  (m = b[a + 2]),
                  "exec" === (s = b[a])
                    ? eC(v, d, b[a + 2])
                    : "replace" === s
                    ? ((l = f && to(f)),
                      (o = f && to(f, 1)),
                      (u = 0),
                      (t = 0),
                      (c = l),
                      eC(
                        "insertText",
                        d,
                        v.replace(/[$%]s|(?:%[a-f\d]{2})+/gi, function (n, e) {
                          return "s" !== n[1]
                            ? ((t -= n.length),
                              (n = sc(decodeURIComponent, n) || n),
                              (t += n.length),
                              n)
                            : (0 === u && ((u = gS(1)), (l += e + t)),
                              (o = c + e + (t += u.length - 2) + 2),
                              u);
                        })
                      ),
                      f === L() && f.setSelectionRange(l, o, kd[1]))
                    : ((i = i || gs()),
                      "collapse" === s
                        ? CS(i, "end" === v)
                        : ms(
                            i,
                            "auto" === s ? sA(i) : s < "f",
                            "count" === v ? e > 0 : v > "f",
                            m
                          ));
            r(n, 0);
          }, 0);
      },
      function (n, e) {
        var f,
          u,
          t,
          l,
          o = n.dir,
          c = n.position,
          a = L();
        a &&
          ht("select", a) &&
          ((f = a.options.length),
          (u = a.selectedIndex),
          (t = e > 0 ? e : -e),
          (a.selectedIndex = l =
            (l = c
              ? (c > "e" && c < "m" && "home" !== c) == e > 0
                ? f - t
                : t - 1
              : u + (i(o) ? (o > "p" ? -1 : 1) : o || 1) * e) >= f
              ? f - 1
              : l < 0
              ? 0
              : l),
          r(n, l !== u ? 0 : 2));
      },
      function (n) {
        var e,
          i = n.id,
          f = sa(i ? "#" + i : n.selector),
          u = n.disabled,
          t = f && f[0];
        t
          ? ((t.sheet || t).disabled = null != u ? !!u : !t.disabled)
          : i && (((t = Cs(n.css)).id = i), (e = se(d.head)) && an(e, t)),
          (t || i) && r(n, 0);
      },
      function (n, e) {
        var i,
          f,
          u,
          t,
          o,
          c,
          a,
          s,
          v = n.type,
          m = n.class,
          b = ((m && m[0].toUpperCase() + m.slice(1)) || "Keyboard") + "Event",
          p = n.delay,
          h = n.init || n;
        if (n.esc)
          (k[0] = 0),
            (t = !!L() || e > 0),
            l ? im(l) : t && eD(0, 0, e > 1),
            (k[0] = 0),
            (f = 1),
            (u = t);
        else {
          Si(h);
          try {
            i = v && new window[b](v, h);
          } catch (n) {}
          i
            ? ((c = (o = n.match) ? sc(qs, o) : Y(D) || da(1)),
              (a = se(c)),
              (f = !(s = n.click) && n.return && !!a) ||
                r(n, a && a !== d.body ? 0 : 2, "", p),
              a && (s && a.click ? a.click() : (u = a.dispatchEvent(i))))
            : T(1, 0, "Can not create ".concat(b, "#").concat(v)),
            f && r(n, u ? 0 : 2, "", p);
        }
      },
      function (n) {
        var e,
          i,
          r,
          u,
          l,
          o,
          a,
          d,
          m = n.h,
          b = !Ih(),
          h = hH;
        h && h(),
          (h && !n.f) ||
            (m && b) ||
            (m
              ? ((e = n.c),
                (i = n.o),
                (r = E(bt())),
                cn(r, "R H" + f.d),
                (r.innerHTML = m),
                ((u = r.lastChild).onclick = st),
                Ce(u, md),
                c > 47 && s(u, dA, oA),
                (l = qs("#HCls", u)),
                (o = qs("#HOpt", u)),
                (a = qs("#HAdv", u)),
                (d = function () {
                  var n = a.firstChild;
                  (n.innerText = n.dataset["sh"[+e]]), tc(u, "HelpDA");
                }),
                (hH = l.onclick =
                  function (n) {
                    (hH = null),
                      (hb = null),
                      n && pr(n),
                      (a.onclick = o.onclick = l.onclick = null);
                    var e = Y(lh);
                    e && cs(r, e) && (lh = null),
                      (e = Y(D)) && cs(u, e) && ((D = null), (cS = 0)),
                      z(8),
                      W(r),
                      oc(9),
                      l.click();
                  }),
                lH().startsWith(i)
                  ? W(o)
                  : ((o.href = i),
                    (o.onclick = function (n) {
                      p({ H: 20, u: i }), hH(n);
                    })),
                (a.onclick = function (n) {
                  pr(n), (e = !e), d(), p({ H: 0, k: 0, v: e });
                }),
                e && d(),
                eb(wz),
                aU(r, 1, true),
                n.e && oc(1),
                dh() || v.f(),
                (D = wr(u)),
                (hb = u),
                ha.splice(
                  (ha.indexOf(1) + 1 || ha.length + 2) - 2,
                  0,
                  function (n) {
                    return !L() && ie(_(n, 0)) ? (Rs(ro) || hH(), 2) : 0;
                  },
                  8
                ),
                t(function () {
                  fo(u);
                }, 17))
              : (J && b) ||
                p({ H: 12, a: n, w: w(1) < 400 || w() < 320 || b }));
      },
    ],
    dr = [],
    CL = [],
    sd = function (n) {
      if (e) {
        if (
          ((j = !1),
          ho(3),
          cc[7]({ r: 2 }),
          v.e && v.e(6),
          b && au(2),
          (e = null),
          (VApi = null),
          po)
        )
          try {
            po.disconnect();
          } catch (n) {}
        n || rl("Vimium C on %o has been destroyed at %o."),
          iN || /a?/.test("");
      }
    },
    v = (VApi = {
      b: h,
      e: null,
      z: null,
      p: p,
      a: function (n) {
        return n ? !j || !(k = n) : k;
      },
      f: function (n, i, f, r, u) {
        eg();
        var t = wf,
          l = true;
        (wf = function () {
          l = false;
        }),
          focus(),
          (l || !j) && ho(0),
          (wf = t),
          t(),
          e && (e(0), (D = wr(u || null)), n && cc[n](i, f, r), 1 & r && fM(4));
      },
      d: sd,
      g: function (n, f, r, t) {
        var l,
          o,
          c,
          s,
          d,
          m,
          b = !!r.match,
          p = e
            ? tr(
                ka,
                r,
                function (n, e) {
                  var i, f, r;
                  ii(e)
                    ? e !== B &&
                      e !== Z &&
                      (r =
                        (f = g(e)).width > 99 &&
                        f.height > 15 &&
                        is(e) &&
                        du(e)) &&
                      fN.push(r)
                    : (b ||
                        "a" === (i = H(e)) ||
                        ("button" === i ? !e.disabled : i && X.has(e)) ||
                        a(e, "onclick") ||
                        ((i = a(e, "role"))
                          ? /^(button|link)$/i.test(i)
                          : ne && a(e, "ng-click"))) &&
                      ip(e) &&
                      n.push([e]);
                },
                1,
                1,
                1
              )
            : [],
          h = r.n,
          k = r.l,
          w = r.m,
          y = h ? ">>" : "<<",
          x = f.indexOf(y),
          C = h ? "next" : "prev",
          S = f.indexOf(C),
          E = x > 0 ? f.lastIndexOf(y[0], x) : -1,
          _ = h ? "<" : ">",
          $ = e ? 0 : 201,
          T = 0,
          j = p.length;
        for (p.push(u()); $ < f.length; $++)
          ".#[".includes(f[$][0]) &&
            (l = sa(f[$])) &&
            1 === l.length &&
            !q(l[0]) &&
            (n.push([l[0], v, $ << 23, ""]), (f.length = $ + 1));
        for (; 0 <= --j; )
          if (
            !(
              cs((d = p[j][0]), p[j + 1][0]) ||
              (c = "lang" in d ? d.innerText : d.textContent.trim()).length > w
            )
          ) {
            if (
              (c =
                c.length > 2
                  ? c
                  : (!c && (o = d.value) && i(o) && o) ||
                    a(d, al) ||
                    d.title ||
                    c)
            ) {
              if (c.length > w) continue;
              for (c = lo(c), $ = 0; $ < f.length; $++)
                if (c.length < k[$] && c.includes(f[$])) {
                  !c.includes(_) &&
                    (s = (c = c.trim()).split(/\s+/).length) <= t &&
                    (t > s && (t = s + 1),
                    (m = f.indexOf(c, $)) >= 0
                      ? (($ = m), (s = 0))
                      : E === $ && c.includes(y) && (($ = x), (s = 1)),
                    n.push([d, v, ($ << 23) | (s << 16) | (65535 & T++), c]));
                  break;
                }
            } else b && n.push([d, v, (f.length - 1) << 23, ""]);
            c.length < 5 &&
              S >= 0 &&
              (o = d.id) &&
              o.includes(C) &&
              n.push([
                d,
                v,
                (S << 23) | (((4 + o.length) & 63) << 16) | (65535 & T++),
                C,
              ]);
          }
        return t;
      },
      j: function (n) {
        var e = ht("link", n) && n.href;
        e
          ? (T(1, 2, e, 1), cc[0](x({ r: 1, u: e })))
          : (vi(n),
            fl(n),
            t(function () {
              ca(n);
            }, 100));
      },
      n: 0,
      c: es,
      k: sT,
      $: function (n, e, i, r) {
        if (Hs(n)) {
          for (; i * i >= 1 && !(ds = ps(n, e, i)); ) i /= 2;
          cC(n);
        } else
          (r && null != r.smooth ? r.smooth : f.s) && !nr
            ? (i && pA(n, e, i, r), sT(1))
            : i && ((ds = ps(n, e, i)), cC(n));
      },
      l: function (n, e) {
        if (!si || e) {
          var f = n && (i(n) ? n : tC(n));
          f && (su(f), e || p({ H: 30 }));
        }
      },
      i: 0,
      r: iA || [
        Se,
        sP,
        function (n, i) {
          return n < 1 ? ((i = ck), e(0)) : n < 2 ? (X = i) : (V = i), i;
        },
        _,
      ],
      s: St,
      t: rh[12],
      u: lH,
      v: rj,
      x: fl,
      y: function () {
        return { b: B, c: X, k: ki, r: ro, f: In };
      },
    });
  J ||
    iN ||
    ((pa = pv())
      ? pa.y().b === fE()
        ? (sd(1), pa.n())
        : (X = pa.y().c)
      : gb && ((rp = 1), (X = new Set()))),
    e &&
      ((X = X || new WeakSet()),
      ho(0),
      (od =
        rs < "i"
          ? cf
          : function (n, e) {
              rs < "l" && !e ? n() : (e ? CL : dr).push(n);
            }),
      rC(),
      iA &&
        (function n(f) {
          function r(n) {
            var e, f, r, l, a, s, v;
            st(n),
              u &&
                ((f = this === u),
                (l = (r = (e = n.detail) && i(e, 1) && f ? e : "")
                  ? r[2] + 1
                  : 0),
                (s = 0),
                (v = r
                  ? null
                  : n.relatedTarget ||
                    ((a = n.path) && a.length > 1 ? a[0] : null)),
                r
                  ? (x(0, r[0]), x(1, r[1]))
                  : v &&
                    ((f && !e) || (+w % 1e4) + v.tagName === e) &&
                    X.add(v),
                c & l && ((c ^= l), h.h - 1 || (wt("lo") && (s = 34))),
                h.h > 1 &&
                  !s &&
                  o.autoReload &&
                  wt("de") &&
                  (s = M.abs(gt() - h.h) < 766 ? 53 : 0),
                s && t(h.x, s));
          }
          var u,
            l,
            c,
            m,
            b = "VimiumCClickable",
            p = "__VimiumC_2325516",
            g = i(window.queueMicrotask, 2)
              ? 0
              : navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/),
            k = (g && +g[1]) || 0,
            w = ((9e7 * M.random() + 1e7) | 0) + "",
            y = E("script"),
            H = function (n) {
              var e = n.relatedTarget,
                i = "data-vimium";
              !(++l > 89) &&
                e instanceof Element &&
                (st(n),
                "div" === e.localName &&
                  a(e, i) === w &&
                  (s(0, p, H, 1),
                  (H = null),
                  null == u && (or(e, i), s(e, b, r), (u = e))));
            },
            x = function (n, e) {
              var i, f, r;
              if (e.length)
                for (f of ((i = (n ? u : d).getElementsByTagName("*")), e))
                  (r = i[f]) && X.add(r);
            },
            C = function (n) {
              u &&
                u.dispatchEvent(
                  new CustomEvent("VC", { detail: (+w << 3) | n })
                );
            },
            S = function (n) {
              n < 4
                ? ((c = 0), C(n))
                : (u && (s(u, b, r, 1), s(0, b, r, 1), C(6)),
                  null == u &&
                    f &&
                    (s(0, p, H, 1),
                    7 === n && rj("`${__VimiumC_=>" + w + "}`")),
                  (u = 0),
                  (v.e = null));
            };
          null != y.lang
            ? ((y.dataset.vimium = w),
              (l = 0),
              (c = J ? 3 : 4),
              (m = V(f ? 999 : 98)),
              f &&
                (k < 48 && (m = m.replace(/\(([\w,]*\))=>/g, "function($1")),
                (m = m.replace("2325516", "$&".concat(w))),
                (v.e = S),
                s(0, p, H),
                s(0, b, r)),
              rj(m, y),
              (y.dataset.vimium = ""),
              69 === k &&
                ((nr = 1),
                ra(function () {
                  nr = 0;
                })),
              pn(y)
                ? (W(y),
                  S(6),
                  rl(61),
                  k && k < 52
                    ? sd(1)
                    : (t = io =
                        function (n, e) {
                          return nr || e > 49
                            ? (Se(34, e, n), 1)
                            : ra(function () {
                                n(9);
                              });
                        }))
                : od(function () {
                    u
                      ? f &&
                        e &&
                        od(
                          t.bind(
                            null,
                            function () {
                              c && C(1), (c = 0);
                            },
                            600
                          ),
                          1
                        )
                      : S(7);
                  }))
            : ((E = d.createElementNS.bind(d, V(117))), null != f && od(n));
        })(gb),
      rs < "i" ||
        s(
          0,
          rS,
          function n() {
            var e = (rs = d.readyState) < "i",
              i = e ? CL : dr;
            e && ((od = cf), s(0, rS, n, 1, 1)), i.forEach(cf), (i.length = 0);
          },
          0,
          1
        ));
})();
