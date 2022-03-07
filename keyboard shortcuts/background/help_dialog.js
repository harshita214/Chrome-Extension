"use strict";
(__filename = "background/help_dialog.js"),
  define(
    [
      "require",
      "exports",
      "./store",
      "./utils",
      "./browser",
      "./normalize_urls",
      "./run_keys",
    ],
    function (e, t, o, a, n, i, r) {
      var s, l, c, b, d, p, v, g, m, u, T, k;
      Object.defineProperty(t, "__esModule", { value: true }),
        (t.nl = t.parseHTML = void 0),
        (a = __importStar(a)),
        (s = null),
        (c = new Map()),
        (t.parseHTML = function (e) {
          var t,
            r = 51 === o.Wn,
            s = e.indexOf("</style>") + 8,
            c = e.slice(0, s),
            b = e.slice(s).trim();
          return (
            r &&
              r &&
              (c = c.replace(
                /contain:\s?[\w\s]+/g,
                "contain: none !important"
              )),
            (b = b.replace(/\$(\w+)/g, function (e, t) {
              var o;
              return null !== (o = l.get(t)) && void 0 !== o ? o : t;
            })),
            (t = a.Pt({
              homePage: o.u.bt,
              version: o.u.ht,
              release: i.$e("vimium://release"),
              reviewPage: (o.Xn
                ? "https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo"
                : "https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews"
              ).replace("$id", function () {
                return n.me.runtime.id;
              }),
              webStore: l.get(o.Xn ? "edgestore" : "webstore"),
              browserHelp: o.Xn
                ? "https://support.microsoft.com/help/4531783/microsoft-edge-keyboard-shortcuts"
                : "https://support.google.com/chrome/answer/157179",
            })),
            [
              c,
              (b = b.replace(/\{\{(\w+)}}/g, function (e, o) {
                return t[o] || e;
              })),
            ]
          );
        }),
        (b = function (e, n) {
          var i, c, b, d;
          return (
            (l = o.yn[1]),
            (s && !o.yn[0]) || ((s = t.parseHTML(o.yn[0])), (o.yn[0] = "")),
            (i = new Map()),
            (c = !e),
            (n = e || !!n),
            o._n.forEach(function (e, t) {
              var o, a, n;
              (t.startsWith("<v-") && t.endsWith(">")) ||
                ((o = e.da),
                36 === e.pa && e.va && (o = r.pr(e) || o),
                (a = g(o)),
                (n = i.get(a)) ? n.push([t, e]) : i.set(a, [[t, e]]));
            }),
            (b = a.Pt({
              title: l.get(e ? "cmdList" : "help") || "",
              tip: (n && l.get("tipClickToCopy")) || "",
              lbPad: n
                ? '\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>'
                : "",
            })),
            (d = s[1].replace(/\{\{(\w+)}}/g, function (e, t) {
              var o;
              return null !== (o = b[t]) && void 0 !== o ? o : m(t, i, c, n);
            })),
            s[0] + d
          );
        }),
        (t.nl = b),
        (d = function (e, t) {
          return e.includes(t);
        }),
        (p = function (e, t) {
          return e.startsWith(t);
        }),
        (v = function (e, t) {
          return e.endsWith(t);
        }),
        (g = function (e) {
          return (
            d(e, "Mode") &&
              d(e, ".activate") &&
              (e = d(e, "ModeTo")
                ? e.replace("ModeTo", "")
                : e.replace("Mode", "")),
            v(e, "Unhover")
              ? (e = e.replace("Unhover", "Leave"))
              : v(e, "Goto")
              ? (e = e.replace("Goto", ""))
              : "clearContentSetting" === e
              ? (e = "".concat(e, "s"))
              : d(e, "CS")
              ? (e = p(e, "clear")
                  ? "clearContentSettings"
                  : e.replace("CS", "ContentSetting"))
              : d(e, "vateUrl")
              ? (e = e.replace("vateUrl", "vateEditUrl"))
              : v(e, "TabSelection")
              ? (e = e.replace("TabSelection", "Tabs"))
              : "quickNext" === e
              ? (e = "nextTab")
              : "newTab" === e
              ? (e = "createTab")
              : "closeSomeOtherTabs" === e
              ? (e = "closeOtherTabs")
              : "simBackspace" === e
              ? (e = "simulateBackspace")
              : "showHUD" === e
              ? (e = "showTip")
              : "wait" === e && (e = "blank"),
            e
          );
        }),
        (m = function (e, t, n, i) {
          var r,
            s = l.get("cmdParams") || " (use *)",
            b = o.yn[2],
            d = "",
            p = function (e) {
              var o,
                r,
                p,
                v,
                g,
                m,
                T,
                w,
                L = t.get(e);
              if (n && !L) return "continue";
              if (
                ((o = 1 === k[e]),
                (r = -2),
                (p = ""),
                (v = c.get(e)) ||
                  ((g = b.get(e)),
                  (v = [
                    l.get(e).replace("<", "&lt;").replace(">", "&gt;"),
                    g
                      ? s.replace("*", function () {
                          return g;
                        })
                      : " ",
                  ]),
                  c.set(e, v)),
                L && L.length > 0)
              ) {
                for (
                  p = '\n\t\t<span class="HelpKey">', m = 0;
                  m < L.length;
                  m++
                ) {
                  if (r > 42 && m < L.length - 1) {
                    p += "</span>\n\t<span>+ ".concat(L.length - m, " \u2026");
                    break;
                  }
                  r >= 0 && (p += '</span> <span class="HelpKey">'),
                    (p += a.$t((T = L[m])[0])),
                    (r += T[0].length + 2);
                }
                p += "</span>\n\t";
              }
              (w = i ? v[0] + v[1] : v[0]),
                r <= 12
                  ? (d += u(o, p, w, i ? e : ""))
                  : ((d += u(o, p, "", "")), (d += u(o, "", w, i ? e : "")));
            };
          for (r of T[e]) p(r);
          return d;
        }),
        (u = function (e, t, o, a) {
          var n = e ? '<tr class="HelpAdv">\n\t' : "<tr>\n\t";
          return (
            o
              ? ((n += '<td class="HelpTd HelpKeys">'),
                (n += t),
                (n += '</td>\n\t<td class="HelpTd HelpCommandInfo">'),
                (n += o),
                a &&
                  ((n += '<span class="HelpCommandName" role="button">('),
                  (n += a),
                  (n += ")</span>\n\t")))
              : ((n += '<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">'),
                (n += t)),
            n + "</td>\n</tr>\n"
          );
        }),
        (k = {
          __proto__: null,
          toggleViewSource: 1,
          clearFindHistory: 1,
          dispatchEvent: 1,
          scrollToLeft: 1,
          scrollToRight: 1,
          moveTabToNextWindow: 1,
          moveTabToNewWindow: 1,
          moveTabToIncognito: 1,
          reloadGivenTab: 1,
          focusOrLaunch: 1,
          enableContentSettingTemp: 1,
          toggleContentSetting: 1,
          toggleStyle: 1,
          clearContentSettings: 1,
          "LinkHints.activateDownloadImage": 1,
          reopenTab: 1,
          "LinkHints.activateOpenImage": 1,
          removeRightTab: 1,
          "LinkHints.activateDownloadLink": 1,
          restoreGivenTab: 1,
          runKey: 1,
          sendToExtension: 1,
          discardTab: 1,
          copyWindowInfo: 1,
          "LinkHints.activateOpenIncognito": 1,
          passNextKey: 1,
          goNext: 1,
          goPrevious: 1,
          "Marks.clearLocal": 1,
          "Marks.clearGlobal": 1,
          moveTabLeft: 1,
          moveTabRight: 1,
          closeTabsOnLeft: 1,
          closeTabsOnRight: 1,
          closeOtherTabs: 1,
          scrollPxDown: 1,
          scrollPxUp: 1,
          scrollPxLeft: 1,
          scrollPxRight: 1,
          debugBackground: 1,
          blank: 1,
          reset: 1,
          scrollSelect: 1,
          "LinkHints.activateHover": 1,
          "LinkHints.unhoverLast": 1,
          toggleLinkHintCharacters: 1,
          toggleSwitchTemp: 1,
          "LinkHints.activateLeave": 1,
          "Vomnibar.activateEditUrl": 1,
          "Vomnibar.activateEditUrlInNewTab": 1,
          closeDownloadBar: 0,
          zoomIn: 1,
          zoomOut: 1,
          zoomReset: 1,
          addBookmark: 1,
        }),
        (T = {
          __proto__: null,
          pageNavigation: [
            "LinkHints.activate",
            "LinkHints.activateOpenInNewTab",
            "LinkHints.activateOpenInNewForegroundTab",
            "LinkHints.activateWithQueue",
            "scrollDown",
            "scrollUp",
            "scrollLeft",
            "scrollRight",
            "scrollToTop",
            "scrollToBottom",
            "scrollToLeft",
            "scrollToRight",
            "scrollPageDown",
            "scrollPageUp",
            "scrollPxDown",
            "scrollPxUp",
            "scrollPxLeft",
            "scrollPxRight",
            "scrollFullPageDown",
            "scrollFullPageUp",
            "scrollSelect",
            "reload",
            "reloadTab",
            "reloadGivenTab",
            "zoom",
            "zoomIn",
            "zoomOut",
            "zoomReset",
            "toggleViewSource",
            "copyCurrentUrl",
            "copyCurrentTitle",
            "switchFocus",
            "focusInput",
            "LinkHints.activateCopyLinkUrl",
            "LinkHints.activateCopyLinkText",
            "openCopiedUrlInCurrentTab",
            "openCopiedUrlInNewTab",
            "goUp",
            "goToRoot",
            "LinkHints.activateDownloadImage",
            "LinkHints.activateOpenImage",
            "LinkHints.activateDownloadLink",
            "LinkHints.activateOpenIncognito",
            "LinkHints.activateFocus",
            "LinkHints.activateHover",
            "LinkHints.activateLeave",
            "LinkHints.unhoverLast",
            "LinkHints.activateSearchLinkText",
            "LinkHints.activateEdit",
            "LinkHints.activateSelect",
            "LinkHints.click",
            "simulateBackspace",
            "dispatchEvent",
            "goPrevious",
            "goNext",
            "nextFrame",
            "mainFrame",
            "parentFrame",
            "enterInsertMode",
            "enterVisualMode",
            "enterVisualLineMode",
            "Marks.activateCreate",
            "Marks.activate",
            "Marks.clearLocal",
            "Marks.clearGlobal",
            "openUrl",
            "focusOrLaunch",
          ],
          vomnibarCommands: [
            "Vomnibar.activate",
            "Vomnibar.activateInNewTab",
            "Vomnibar.activateBookmarks",
            "Vomnibar.activateBookmarksInNewTab",
            "Vomnibar.activateHistory",
            "Vomnibar.activateHistoryInNewTab",
            "Vomnibar.activateTabs",
            "Vomnibar.activateEditUrl",
            "Vomnibar.activateEditUrlInNewTab",
            "LinkHints.activateOpenVomnibar",
            "toggleVomnibarStyle",
          ],
          historyNavigation: ["goBack", "goForward", "reopenTab"],
          findCommands: [
            "enterFindMode",
            "performFind",
            "performBackwardsFind",
            "performAnotherFind",
            "clearFindHistory",
          ],
          tabManipulation: [
            "nextTab",
            "previousTab",
            "firstTab",
            "lastTab",
            "createTab",
            "duplicateTab",
            "removeTab",
            "removeRightTab",
            "restoreTab",
            "restoreGivenTab",
            "discardTab",
            "moveTabToNextWindow",
            "moveTabToNewWindow",
            "moveTabToIncognito",
            "joinTabs",
            "sortTabs",
            "togglePinTab",
            "toggleMuteTab",
            "visitPreviousTab",
            "closeTabsOnLeft",
            "closeTabsOnRight",
            "closeOtherTabs",
            "moveTabLeft",
            "moveTabRight",
            "enableContentSettingTemp",
            "toggleContentSetting",
            "clearContentSettings",
            "copyWindowInfo",
            "captureTab",
          ],
          misc: [
            "showHelp",
            "autoCopy",
            "autoOpen",
            "searchAs",
            "searchInAnother",
            "showTip",
            "openBookmark",
            "addBookmark",
            "toggleStyle",
            "toggleLinkHintCharacters",
            "toggleSwitchTemp",
            "passNextKey",
            "debugBackground",
            "reset",
            "runKey",
            "sendToExtension",
            "blank",
          ],
        }).misc.push("closeDownloadBar"),
        o.Xn && T.tabManipulation.push("toggleReaderMode");
    }
  );
