"use strict";
(__filename = "background/store.js"),
  define(["require", "exports"], function (n, t) {
    var o,
      u,
      i,
      e,
      c,
      r,
      l,
      f,
      a,
      s,
      _,
      m,
      p,
      h,
      d,
      g,
      w,
      b,
      M,
      v,
      C,
      j,
      S,
      k,
      P,
      V,
      I,
      N,
      O,
      R,
      x,
      y,
      B,
      D,
      G,
      H,
      q,
      A,
      E,
      J,
      L,
      T,
      U,
      z,
      F,
      K,
      Q,
      W;
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.u =
        t.i =
        t.e =
        t.r =
        t.f =
        t.p =
        t.h =
        t.w =
        t.b =
        t.M =
        t.C =
        t.j =
        t.S =
        t.P =
        t.V =
        t.I =
        t.N =
        t.O =
        t.R =
        t.x =
        t.getNextFakeTabId =
        t.y =
        t.B =
        t.D =
        t.G =
        t.H =
        t.q =
        t.A =
        t.E =
        t.J =
        t.L =
        t.T =
        t.U =
        t.z =
        t.F =
        t.K =
        t.Q =
        t.W =
        t.set_vomnibarPage_f =
        t.set_newTabUrl_f =
        t.set_cEnv =
        t.get_cEnv =
        t.set_cRepeat =
        t.set_cPort =
        t.set_cOptions =
        t.get_cOptions =
        t.set_cKey =
        t.X =
        t.Y =
        t.Z =
        t.$ =
        t.nn =
        t.set_findBookmark =
        t.tn =
        t.on =
        t.un =
        t.in =
        t.en =
        t.cn =
        t.rn =
        t.ln =
        t.fn =
        t.an =
        t.cRepeat =
        t.cPort =
        t.cKey =
        t.sn =
        t._n =
        t.mn =
        t.pn =
        t.findBookmark =
        t.hn =
        t.dn =
        t.gn =
        t.wn =
        t.bn =
        t.Mn =
        t.vn =
        t.Cn =
        t.jn =
        t.Sn =
        t.kn =
        t.Pn =
        t.Vn =
        t.In =
        t.Nn =
        t.On =
        t.Rn =
        t.xn =
        t.yn =
        t.Bn =
        t.Dn =
        t.Gn =
        t.Hn =
        t.qn =
        t.An =
        t.En =
        t.Jn =
        t.Ln =
        t.Tn =
        t.vomnibarPage_f =
        t.newTabUrl_f =
        t.Un =
        t.zn =
        t.Fn =
        t.Kn =
        t.Qn =
        t.Wn =
        t.Xn =
        t.OnSafari =
        t.OnEdge =
        t.OnFirefox =
        t.OnChrome =
        t.Yn =
          void 0),
      (t.Yn = 1),
      (t.OnChrome = !0),
      (t.OnFirefox = !!0),
      (t.OnEdge = !!0),
      (t.OnSafari = !!0),
      (o = navigator.userAgentData),
      (t.Xn = o
        ? !!o.brands.find(function (n) {
            return n.brand.includes("Edge") || n.brand.includes("Microsoft");
          })
        : matchMedia("(-ms-high-contrast)").matches),
      (t.Wn = o
        ? (u = o.brands.find(function (n) {
            return n.brand.includes("Chromium");
          }))
          ? u.version
          : 90
        : (W = navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))
        ? 75 == +W[1] && matchMedia("(prefers-color-scheme)").matches
          ? 81
          : 0 | W[1]
        : 998),
      (t.Qn = 999),
      (t.Fn = localStorage.length <= 0),
      (t.zn = false),
      (t.Un = Object.create(null)),
      (t.newTabUrl_f = ""),
      (t.vomnibarPage_f = ""),
      (t.Tn = {
        v: t.Wn,
        d: "",
        g: false,
        m: false,
        o: 2,
      }),
      (t.Ln = { map: new Map(), rules: [], keywords: null }),
      (t.Jn = {
        v: t.Wn,
        a: 0,
        c: "",
        l: "",
        k: null,
        o: 2,
        n: 0,
        s: "",
        t: 0,
      }),
      (t.En = false),
      (t.Gn = false),
      (t.xn = new Map()),
      (t.Rn = new Map()),
      (t.On = 0),
      (t.Vn = {}),
      (t.Pn = new Map()),
      (t.kn = []),
      (t.Sn = new Map()),
      (t.jn = -1),
      (t.Cn = -1);
    (t.vn = -1),
      (t.Mn = 1),
      (t.bn = null),
      (t.wn = null),
      (t.gn = { Zn: [], $n: [], nt: 0, tt: 0, ot: false }),
      (t.dn = { ut: null, it: new Map(), et: 0, ct: 0, rt: 0 }),
      (t.hn = new Map()),
      (t.pn = null),
      (t.mn = null),
      (t.sn = 0),
      (t.cKey = 0),
      (i = null),
      (t.cPort = null),
      (t.cRepeat = 1),
      (e = null),
      (c = function (n) {
        t.jn = n;
      }),
      (t.rn = c),
      (r = function (n) {
        t.Cn = n;
      }),
      (t.cn = r),
      (l = function (n) {
        t.vn = n;
      }),
      (t.en = l),
      (f = function (n) {
        return (t.Mn = n);
      }),
      (t.in = f),
      (a = function (n) {
        t.Sn = n;
      }),
      (t.un = a),
      (s = function (n) {
        return (t.bn = n);
      }),
      (t.on = s),
      (_ = function (n) {
        return (t.wn = n);
      }),
      (t.tn = _),
      (m = function (n) {
        t.findBookmark = n;
      });
    (t.set_findBookmark = m),
      (p = function (n) {
        return (t.yn = n);
      }),
      (t.nn = p),
      (h = function (n) {
        t.pn = n;
      }),
      (t.$ = h),
      (d = function (n) {
        t.mn = n;
      }),
      (t.Z = d),
      (g = function (n) {
        t._n = n;
      }),
      (t.Y = g),
      (w = function (n) {
        t.sn = n;
      }),
      (t.X = w),
      (b = function (n) {
        t.cKey = n;
      }),
      (t.set_cKey = b),
      (t.get_cOptions = function () {
        return i;
      }),
      (t.set_cOptions = function (n) {
        i = n;
      }),
      (M = function (n) {
        t.cPort = n;
      }),
      (t.set_cPort = M),
      (v = function (n) {
        t.cRepeat = n;
      }),
      (t.set_cRepeat = v),
      (t.get_cEnv = function () {
        return e;
      }),
      (t.set_cEnv = function (n) {
        e = n;
      }),
      (C = function (n) {
        t.newTabUrl_f = n;
      }),
      (t.set_newTabUrl_f = C),
      (j = function (n) {
        t.vomnibarPage_f = n;
      }),
      (t.set_vomnibarPage_f = j),
      (S = function (n) {
        t.En = n;
      }),
      (t.W = S),
      (k = function (n) {
        t.An = n;
      }),
      (t.Q = k),
      (P = function (n) {
        t.qn = n;
      }),
      (t.K = P),
      (V = function (n) {
        t.Hn = n;
      }),
      (t.F = V),
      (I = function (n) {
        t.Gn = n;
      }),
      (t.z = I),
      (N = function (n) {
        t.Dn = n;
      }),
      (t.U = N),
      (O = function (n) {
        t.On = n;
      }),
      (t.T = O),
      (R = function (n) {
        t.Nn = n;
      }),
      (t.L = R),
      (x = function (n) {
        t.Bn = n;
      }),
      (t.J = x),
      (y = function (n) {
        t.zn = n;
      }),
      (t.E = y),
      (B = function (n) {
        t.In = n;
      }),
      (t.A = B),
      (D = function (n) {
        t.an = n;
      }),
      (t.q = D),
      (G = function (n) {
        t.fn = n;
      }),
      (t.H = G),
      (H = function (n) {
        t.Kn = n;
      }),
      (t.G = H),
      (q = function (n) {
        t.ln = n;
      }),
      (t.D = q);
    (t.B = function () {}),
      (t.y = {}),
      (A = -4),
      (t.getNextFakeTabId = function () {
        return A--;
      }),
      (t.x = t.B),
      (t.R = t.B),
      (t.O = null),
      (t.N = function () {
        return "";
      }),
      (t.I = function () {
        return "";
      }),
      (t.V = function (n) {
        return n;
      }),
      (t.P = function () {
        return null;
      }),
      (t.S = null),
      (t.j = null),
      (E = function (n) {
        t.x = n;
      }),
      (t.C = E),
      (J = function (n) {
        t.R = n;
      }),
      (t.M = J),
      (L = function (n) {
        t.O = n;
      }),
      (t.b = L),
      (T = function (n) {
        t.N = n;
      }),
      (t.w = T),
      (U = function (n) {
        t.I = n;
      }),
      (t.h = U),
      (z = function (n) {
        t.V = n;
      }),
      (t.p = z),
      (F = function (n) {
        t.P = n;
      }),
      (t.f = F),
      (K = function (n) {
        t.j = n;
      }),
      (t.r = K),
      (Q = function (n) {
        t.S = n;
      }),
      (t.e = Q),
      (t.i = t.B),
      (t.u = {
        lt: "chrome",
        ft: true,
        at: 0,
        st: t.Xn
          ? /^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/
          : "chrome-search://local-ntp/local-ntp.html",
        _t: false,
        mt: null,
        pt: "",
        ht: "",
        GitVer: "03a062b",
        dt: "/lib/injector.js",
        HelpDialogJS: "/background/help_dialog.js",
        gt: "pages/options.html",
        wt: "browser",
        bt: "https://github.com/gdh1995/vimium-c",
        Mt: null,
        vt: "pages/show.html",
        Ct: "",
        jt: "/front/vomnibar.js",
        St: "",
      });
  });
