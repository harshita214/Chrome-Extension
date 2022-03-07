"use strict";
(__filename = "background/settings.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./parse_urls",
      "./ports",
    ],
    function (e, o, a, n, t, s, i, c) {
      var r, l, h, p;
      Object.defineProperty(o, "__esModule", { value: true }),
        (o.Ge =
          o.Le =
          o.Fe =
          o.Ne =
          o.Je =
          o.Ye =
          o.Ke =
          o.Qe =
          o.We =
          o.Ve =
          o.Xe =
          o.Ze =
            void 0),
        (o.Ze = localStorage),
        (r = null),
        (o.Xe = Promise.resolve()),
        (l = function (e, n) {
          var t, s, i;
          return e in a.Un
            ? a.Un[e]
            : ((t = o.Ne[e]),
              (i =
                null == (s = o.Ze.getItem(e))
                  ? t
                  : "string" == typeof t
                  ? s
                  : false === t || true === t
                  ? "true" === s
                  : JSON.parse(s)),
              n && (a.Un[e] = i),
              i);
        }),
        (o.Ve = l),
        (h = function (e, n) {
          var t, s;
          if (
            ((a.Un[e] = n),
            e in o.Fe ||
              (n === (t = o.Ne[e])
                ? (o.Ze.removeItem(e), a.R(e, null))
                : (o.Ze.setItem(
                    e,
                    "string" == typeof t ? n : JSON.stringify(n)
                  ),
                  a.R(e, n)),
              e in o.Ge && o.Je(o.Ge[e], n, a.Tn)),
            (s = a.Vn[e]))
          )
            return s(n, e);
        }),
        (o.We = h),
        (o.Qe = function (e, n) {
          return a.Vn[e](void 0 !== n ? n : o.Ve(e), e);
        }),
        (o.Ke = function (e) {
          if (6 !== e.N) p(e);
          else if (null == e.d.length) p(e);
          else {
            var o = e.d;
            r ? (o = o.concat(r)) : n.c(p.bind(null, e)), (r = o), (e.d = null);
          }
        }),
        (p = function (e) {
          var o, n, t;
          if (6 === e.N && !e.d) {
            for (t of ((o = r), (n = e.d = {}), o)) n[t] = a.Tn[t];
            r = null;
          }
          c.eo(function (o) {
            for (var a of o.oo) a.postMessage(e);
          });
        }),
        (o.Ye = function (e) {
          n.a(a.kn.slice(0), function (o) {
            return a.kn.includes(o) && o.postMessage(e), 1;
          });
        }),
        (o.Je = function (e, o, n) {
          switch (e) {
            case "c":
            case "n":
              o = o.toLowerCase().toUpperCase();
              break;
            case "i":
              o = o === !!o ? o : o > 1 || (o > 0 && !a.Tn.o);
              break;
            case "l":
              o = o === !!o ? (o ? 2 : 0) : o;
              break;
            case "d":
              o = o ? " D" : "";
          }
          return n ? (n[e] = o) : o;
        }),
        Object.assign(a.Vn, {
          extAllowList: function (e) {
            var o,
              n,
              t,
              s = a.Rn;
            if (
              (s.forEach(function (e, o) {
                false !== e && s.delete(o);
              }),
              e)
            )
              for (n = (o = e.split("\n")).length, t = /^[\da-z_]/i; 0 <= --n; )
                (e = o[n].trim()) && t.test(e) && s.set(e, true);
          },
          grabBackFocus: function (e) {
            a.Tn.g = e;
          },
          newTabUrl: function (e) {
            (e = /^\/?pages\/[a-z]+.html\b/i.test(e)
              ? t.me.runtime.getURL(e)
              : t.oe(s.$e(e))),
              a.set_newTabUrl_f(e);
          },
          searchEngines: function () {
            a.Ln.map.clear(),
              (a.Ln.keywords = null),
              (a.Ln.rules = i
                .je(
                  "~:" + o.Ve("searchUrl") + "\n" + o.Ve("searchEngines"),
                  a.Ln.map
                )
                .reverse());
          },
          searchUrl: function (e) {
            var n = a.Ln.map;
            if (e) i.je("~:" + e, n);
            else if (
              (n.clear(),
              n.set("~", {
                De: "~",
                B: "",
                Ce: o.Ve("searchUrl").split(" ", 1)[0],
              }),
              (a.Ln.rules = []),
              a.set_newTabUrl_f(o.Ve("newTabUrl_f", true) || ""),
              a.newTabUrl_f)
            )
              return;
            o.Qe("newTabUrl");
          },
          mapModifier: function (e) {
            o.Ye({ N: 47, d: { a: e } });
          },
          vomnibarPage: function (e) {
            var n = o.Ze.getItem("vomnibarPage_f");
            !n || e
              ? ((e = e ? t.oe(e) : o.Ve("vomnibarPage")) === o.Ne.vomnibarPage
                  ? (e = a.u.Ct)
                  : e.startsWith("front/")
                  ? (e = t.me.runtime.getURL(e))
                  : ((e = s.$e(e)),
                    (e = s.we(e)),
                    (e =
                      a.Wn < 50 && !e.startsWith(a.u.lt)
                        ? a.u.Ct
                        : e.replace(
                            ":version",
                            "".concat(parseFloat(a.u.pt))
                          ))),
                a.set_vomnibarPage_f(e))
              : a.set_vomnibarPage_f(n);
          },
        }),
        (o.Ne = {
          __proto__: null,
          allBrowserUrls: false,
          autoDarkMode: 2,
          autoReduceMotion: 0,
          clipSub:
            "p=^git@([^/:]+):=https://$1/=\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
          exclusionListenHash: true,
          exclusionOnlyFirstMatch: false,
          exclusionRules: [
            { pattern: ":https://mail.google.com/", passKeys: "" },
          ],
          extAllowList:
            "# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
          filterLinkHints: false,
          findModeRawQueryList: "",
          grabBackFocus: false,
          hideHud: false,
          ignoreCapsLock: 0,
          ignoreKeyboardLayout: 0,
          innerCSS: "",
          keyboard: [560, 33],
          keyupTime: 120,
          keyMappings: "",
          linkHintCharacters: "sadjklewcmpgh",
          linkHintNumbers: "0123456789",
          localeEncoding: "gbk",
          mapModifier: 0,
          mouseReachable: true,
          newTabUrl: "",
          newTabUrl_f: "",
          nextPatterns:
            "\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
          omniBlockList: "",
          passEsc: "[aria-controls],[role=combobox],#kw.s_ipt",
          previousPatterns:
            "\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
          regexFindMode: false,
          scrollStepSize: 100,
          searchUrl: navigator.language.startsWith("zh")
            ? "https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6"
            : "https://www.google.com/search?q=%s Google",
          searchEngines: navigator.language.startsWith("zh")
            ? "b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://cn.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://www.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s\\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s\\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s/?field-keywords=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\nv.m|v\\:math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript"
            : "bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s/?field-keywords=%s \\\n  blank=https://www.amazon.com/ Amazon\n\nv.m|v\\:math: vimium://math\\ $S re= Calculate\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
          showActionIcon: true,
          showAdvancedCommands: true,
          showAdvancedOptions: true,
          showInIncognito: false,
          notifyUpdate: true,
          smoothScroll: true,
          vomnibarOptions: {
            maxMatches: 10,
            queryInterval: 333,
            sizes: "77,3,44,0.8",
            styles: "mono-url",
            actions: "",
          },
          userDefinedCss: "",
          vimSync: null,
          vomnibarPage: "front/vomnibar.html",
          waitForEnter: true,
        }),
        (o.Fe = {
          __proto__: null,
          searchEngineMap: 1,
          searchEngineRules: 1,
          searchKeywords: 1,
        }),
        (o.Le = ["showAdvancedCommands"]),
        (o.Ge = {
          __proto__: null,
          filterLinkHints: "f",
          ignoreCapsLock: "i",
          ignoreKeyboardLayout: "l",
          mapModifier: "a",
          mouseReachable: "e",
          keyboard: "k",
          keyupTime: "u",
          linkHintCharacters: "c",
          linkHintNumbers: "n",
          passEsc: "p",
          regexFindMode: "r",
          smoothScroll: "s",
          scrollStepSize: "t",
          waitForEnter: "w",
        }),
        t.me.runtime.getPlatformInfo(function (e) {
          var n = e.os.toLowerCase(),
            s = t.me.runtime.PlatformOs,
            i = n === s.WIN ? 2 : n === s.MAC ? 0 : 1,
            c = o.Ve("ignoreCapsLock");
          (a.u.wt = n),
            (a.Jn.o = a.Tn.o = i),
            o.Je("i", c, a.Tn),
            a.On > 2 || (a.T(1 | a.On), a.Nn && a.Nn());
        }),
        (function () {
          var e,
            n = t.me.runtime.getManifest(),
            s = location.origin,
            i = s + "/",
            c = n.content_scripts[0].js,
            r = a.u,
            l = a.xn,
            h = function (e) {
              return (
                (47 === e.charCodeAt(0) ? s : e.startsWith(i) ? "" : i) + e
              );
            };
          if (
            ((o.Ne.newTabUrl = a.Xn ? "edge://newtab" : "chrome://newtab"),
            l.set("about:newtab", 1),
            l.set("about:newtab/", 1),
            l.set("chrome://newtab", 1),
            l.set("chrome://newtab/", 1),
            a.Xn && (l.set("edge://newtab", 1), l.set("edge://newtab/", 1)),
            l.set("chrome://new-tab-page", 2),
            l.set("chrome://new-tab-page/", 2),
            (r.Mt = Object.keys(n.commands || {}).map(function (e) {
              return "quickNext" === e ? "nextTab" : e;
            })),
            (r.pt = n.version),
            (r.ht = n.version_name || n.version),
            (r.gt = h(n.options_page || r.gt)),
            (r.ft =
              null != n.permissions &&
              n.permissions.indexOf("clipboardRead") >= 0),
            (r.vt = h(r.vt)),
            (r.Ct = h(o.Ne.vomnibarPage)),
            (r.St = h(r.jt)),
            (r.bt = n.homepage_url || r.bt),
            (r.dt = h(r.dt)),
            c.push("content/injected_end.js"),
            (r.mt = c.map(h)),
            !(a.On > 2))
          )
            for (e in ((a.Tn.g = o.Ve("grabBackFocus")), o.Ge))
              o.Je(o.Ge[e], o.Ve(e), a.Tn);
        })(),
        a.On < 3 &&
          a.Fn &&
          a.Kn.then(function (e) {
            if (e && "install" === e.reason) {
              var a = (
                (navigator.userAgentData || navigator).platform || ""
              ).toLowerCase();
              (a.startsWith("mac") || a.startsWith("ip")) &&
                o.We("ignoreKeyboardLayout", 1);
            }
          });
    }
  );
