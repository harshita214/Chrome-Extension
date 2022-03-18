"use strict";
var VimiumInjector;
(function () {
  var t,
    n = VimiumInjector,
    e = {
      id: "",
      alive: -1,
      host: "",
      version: "",
      cache: null,
      clickable: void 0,
      eval: null,
      reload: null,
      checkIfEnabled: null,
      $: null,
      $h: "",
      $m: null,
      $r: null,
      $g: null,
      getCommandCount: null,
      callback: null,
      destroy: null,
    };
  if (n) for (t of Object.keys(n)) e[t] = n[t];
  (e.alive = -1), (e.$g = null), (VimiumInjector = e);
})(),
  (function (t, n) {
    function e(t, e) {
      var o,
        c,
        i,
        r,
        f,
        v,
        g,
        p,
        k,
        $,
        C,
        E,
        w = VimiumInjector,
        y = w && w.clickable,
        L = w && w.callback;
      if (
        (t ||
          ((i = e && e.message),
          (r = a.id || location.host || location.protocol),
          (c = !!(i && i.lastIndexOf("not exist") >= 0 && a.id)),
          false === t
            ? (o = ": not in the allow list.")
            : !c && e
            ? (o = i ? ":\n\t".concat(i) : ": no backend found.")
            : h > 3
            ? ((o = i
                ? ":\n\t".concat(i)
                : ": retried but failed (".concat(t, ").")),
              (c = false))
            : (setTimeout(l, 200 * h), h++, (c = true)),
          c ||
            ((o = o || " (".concat(h, " retries).")),
            console.log(
              "%cVimium C%c: %cfail%c to inject into %c%s%c %s",
              "color:red",
              "color:auto",
              "color:red",
              "color:auto",
              "color:#0c85e9",
              r,
              "color:auto",
              o
            ),
            L && w.callback(-1, o))),
        w && "function" == typeof w.destroy && w.destroy(true),
        (f = VimiumInjector =
          {
            id: b,
            alive: 0,
            host: u ? (t ? t.host : "") : b,
            version: t ? t.version : "",
            cache: null,
            clickable: y,
            eval: null,
            reload: n(d),
            checkIfEnabled: null,
            $: null,
            $h: t ? t.h : "",
            $m: function (t) {
              VimiumInjector &&
                VimiumInjector.$r("object" == typeof t ? t.t : t);
            },
            $r: function () {},
            $g: null != m ? "" === m || "true" === m.toLowerCase() : null,
            getCommandCount: null,
            callback: L || null,
            destroy: null,
          }),
        (v = document.documentElement),
        !(t && v instanceof HTMLHtmlElement))
      )
        return e;
      for (C of ((p = (g = document.contains(s)
        ? s
        : (document.head || v).lastChild).nextSibling),
      (k = g.parentElement),
      ($ = []),
      t.s))
        ((E = document.createElement("script")).type = "text/javascript"),
          (E.async = false),
          (E.src = C),
          k.insertBefore(E, p),
          $.push(E);
      $.length > 0 &&
        ($[$.length - 1].onload = function () {
          this.onload = null;
          for (var t = $.length; 0 <= --t; ) $[t].remove();
        }),
        L && f.callback(0, "loading");
    }
    function o() {
      removeEventListener("DOMContentLoaded", o),
        !c || v
          ? v(
              function () {
                v(
                  function () {
                    setTimeout(l, 0);
                  },
                  { timeout: 67 }
                );
              },
              { timeout: 330 }
            )
          : setTimeout(l, 67);
    }
    var l,
      u = !!0,
      c = !!0,
      i =
        u && "object" == typeof browser && !("tagName" in browser)
          ? browser
          : null,
      r = !!u && !!(i && i.runtime && i.runtime.connect),
      a = (r ? browser : chrome).runtime,
      s = document.currentScript,
      d = s.src,
      f = d.indexOf("://") + 3,
      m = s.dataset.blockFocus,
      v = c ? window.requestIdleCallback : requestIdleCallback,
      h = 1,
      b = d.slice(f, d.indexOf("/", f));
    u &&
      b.indexOf("-") > 0 &&
      (b = s.dataset.vimiumId || "vimium-c@gdh1995.cn"),
      (VimiumInjector.id = b = s.dataset.extensionId || b),
      c && (v = "function" != typeof v || "tagName" in v ? null : v),
      (l = r
        ? function () {
            a.sendMessage(b, { handler: 99, scripts: true }).then(
              e,
              function (t) {
                return e(void 0, t);
              }
            );
          }
        : function () {
            a.sendMessage(b, { handler: 99, scripts: true }, function (t) {
              var n = a.lastError;
              return n ? e(void 0, n) : e(t), n;
            });
          }),
      "loading" !== document.readyState
        ? o()
        : addEventListener("DOMContentLoaded", o, true);
  })(0, function (t) {
    return function (n) {
      function e() {
        var e = document.documentElement,
          o = document.head || document.body || e,
          l = document.createElement("script");
        o &&
          ((l.type = "text/javascript"),
          (l.async = false),
          (l.src = t),
          console.log(
            "%cVimium C%c begins to reload%s.",
            "color:red",
            "color:auto",
            1 === n ? " because it has been updated." : ""
          ),
          o.appendChild(l));
      }
      var o,
        l = VimiumInjector;
      l &&
        ((o = l.clickable),
        "function" == typeof l.destroy && l.destroy(true),
        (l.clickable = o)),
        n ? setTimeout(e, 200) : e();
    };
  }),
  (!document.currentScript ||
    "false" !==
      (document.currentScript.dataset.vimiumHooks || "").toLowerCase()) &&
    null !== VimiumInjector.clickable &&
    (function () {
      var t, n, e, o, l, u, c, i, r;
      (VimiumInjector.clickable = VimiumInjector.clickable || new WeakSet()),
        (t = EventTarget),
        true !== (e = (n = t.prototype).addEventListener).vimiumHooked &&
          ((o = HTMLAnchorElement),
          (l = Element),
          (u = n.addEventListener =
            function addEventListener(t, n) {
              var u, c, i;
              return (
                "click" === t &&
                  !(this instanceof o) &&
                  n &&
                  this instanceof l &&
                  (u = VimiumInjector) &&
                  u.clickable &&
                  u.clickable.add(this),
                2 === (i = (c = arguments).length)
                  ? e.call(this, t, n)
                  : 3 === i
                  ? e.call(this, t, n, c[2])
                  : e.apply(this, c)
              );
            }),
          (i = (c = Function.prototype).toString),
          (r = c.toString =
            function toString() {
              return i.apply(this === u ? e : this === r ? i : this, arguments);
            }),
          (u.vimiumHooked = true),
          (t.vimiumRemoveHooks = function () {
            delete t.vimiumRemoveHooks,
              n.addEventListener === u && (n.addEventListener = e),
              c.toString === r && (c.toString = i);
          }),
          (u.prototype = r.prototype = void 0));
    })();
