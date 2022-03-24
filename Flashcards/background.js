(() => {
  "use strict";
  var e = {
      33947: (e) => {
        var t = "%[a-f0-9]{2}",
          n = new RegExp(t, "gi"),
          r = new RegExp("(" + t + ")+", "gi");
        function o(e, t) {
          try {
            return decodeURIComponent(e.join(""));
          } catch (e) {}
          if (1 === e.length) return e;
          t = t || 1;
          var n = e.slice(0, t),
            r = e.slice(t);
          return Array.prototype.concat.call([], o(n), o(r));
        }
        function i(e) {
          try {
            return decodeURIComponent(e);
          } catch (i) {
            for (var t = e.match(n), r = 1; r < t.length; r++)
              t = (e = o(t, r).join("")).match(n);
            return e;
          }
        }
        e.exports = function (e) {
          if ("string" != typeof e)
            throw new TypeError(
              "Expected `encodedURI` to be of type `string`, got `" +
                typeof e +
                "`"
            );
          try {
            return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
          } catch (t) {
            return (function (e) {
              for (
                var t = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                  n = r.exec(e);
                n;

              ) {
                try {
                  t[n[0]] = decodeURIComponent(n[0]);
                } catch (e) {
                  var o = i(n[0]);
                  o !== n[0] && (t[n[0]] = o);
                }
                n = r.exec(e);
              }
              t["%C2"] = "\ufffd";
              for (var c = Object.keys(t), a = 0; a < c.length; a++) {
                var s = c[a];
                e = e.replace(new RegExp(s, "g"), t[s]);
              }
              return e;
            })(e);
          }
        };
      },
      48195: (e) => {
        e.exports = function (e, t) {
          for (
            var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0;
            i < r.length;
            i++
          ) {
            var c = r[i],
              a = e[c];
            (o ? -1 !== t.indexOf(c) : t(c, a, e)) && (n[c] = a);
          }
          return n;
        };
      },
      36575: (e, t, n) => {
        const r = n(29449),
          o = n(33947),
          i = n(72704),
          c = n(48195),
          a = Symbol("encodeFragmentIdentifier");
        function s(e) {
          if ("string" != typeof e || 1 !== e.length)
            throw new TypeError(
              "arrayFormatSeparator must be single character string"
            );
        }
        function u(e, t) {
          return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
        }
        function l(e, t) {
          return t.decode ? o(e) : e;
        }
        function f(e) {
          return Array.isArray(e)
            ? e.sort()
            : "object" == typeof e
            ? f(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map((t) => e[t])
            : e;
        }
        function d(e) {
          const t = e.indexOf("#");
          return -1 !== t && (e = e.slice(0, t)), e;
        }
        function p(e) {
          const t = (e = d(e)).indexOf("?");
          return -1 === t ? "" : e.slice(t + 1);
        }
        function h(e, t) {
          return (
            t.parseNumbers &&
            !Number.isNaN(Number(e)) &&
            "string" == typeof e &&
            "" !== e.trim()
              ? (e = Number(e))
              : !t.parseBooleans ||
                null === e ||
                ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
                (e = "true" === e.toLowerCase()),
            e
          );
        }
        function m(e, t) {
          s(
            (t = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1,
              },
              t
            )).arrayFormatSeparator
          );
          const n = (function (e) {
              let t;
              switch (e.arrayFormat) {
                case "index":
                  return (e, n, r) => {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, "")),
                      t
                        ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                        : (r[e] = n);
                  };
                case "bracket":
                  return (e, n, r) => {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, "")),
                      t
                        ? void 0 !== r[e]
                          ? (r[e] = [].concat(r[e], n))
                          : (r[e] = [n])
                        : (r[e] = n);
                  };
                case "comma":
                case "separator":
                  return (t, n, r) => {
                    const o =
                        "string" == typeof n &&
                        n.includes(e.arrayFormatSeparator),
                      i =
                        "string" == typeof n &&
                        !o &&
                        l(n, e).includes(e.arrayFormatSeparator);
                    n = i ? l(n, e) : n;
                    const c =
                      o || i
                        ? n.split(e.arrayFormatSeparator).map((t) => l(t, e))
                        : null === n
                        ? n
                        : l(n, e);
                    r[t] = c;
                  };
                case "bracket-separator":
                  return (t, n, r) => {
                    const o = /(\[\])$/.test(t);
                    if (((t = t.replace(/\[\]$/, "")), !o))
                      return void (r[t] = n ? l(n, e) : n);
                    const i =
                      null === n
                        ? []
                        : n.split(e.arrayFormatSeparator).map((t) => l(t, e));
                    void 0 !== r[t] ? (r[t] = [].concat(r[t], i)) : (r[t] = i);
                  };
                default:
                  return (e, t, n) => {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })(t),
            r = Object.create(null);
          if ("string" != typeof e) return r;
          if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
          for (const o of e.split("&")) {
            if ("" === o) continue;
            let [e, c] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
            (c =
              void 0 === c
                ? null
                : ["comma", "separator", "bracket-separator"].includes(
                    t.arrayFormat
                  )
                ? c
                : l(c, t)),
              n(l(e, t), c, r);
          }
          for (const e of Object.keys(r)) {
            const n = r[e];
            if ("object" == typeof n && null !== n)
              for (const e of Object.keys(n)) n[e] = h(n[e], t);
            else r[e] = h(n, t);
          }
          return !1 === t.sort
            ? r
            : (!0 === t.sort
                ? Object.keys(r).sort()
                : Object.keys(r).sort(t.sort)
              ).reduce((e, t) => {
                const n = r[t];
                return (
                  Boolean(n) && "object" == typeof n && !Array.isArray(n)
                    ? (e[t] = f(n))
                    : (e[t] = n),
                  e
                );
              }, Object.create(null));
        }
        (t.extract = p),
          (t.parse = m),
          (t.stringify = (e, t) => {
            if (!e) return "";
            s(
              (t = Object.assign(
                {
                  encode: !0,
                  strict: !0,
                  arrayFormat: "none",
                  arrayFormatSeparator: ",",
                },
                t
              )).arrayFormatSeparator
            );
            const n = (n) =>
                (t.skipNull && null == e[n]) ||
                (t.skipEmptyString && "" === e[n]),
              r = (function (e) {
                switch (e.arrayFormat) {
                  case "index":
                    return (t) => (n, r) => {
                      const o = n.length;
                      return void 0 === r ||
                        (e.skipNull && null === r) ||
                        (e.skipEmptyString && "" === r)
                        ? n
                        : null === r
                        ? [...n, [u(t, e), "[", o, "]"].join("")]
                        : [
                            ...n,
                            [u(t, e), "[", u(o, e), "]=", u(r, e)].join(""),
                          ];
                    };
                  case "bracket":
                    return (t) => (n, r) =>
                      void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && "" === r)
                        ? n
                        : null === r
                        ? [...n, [u(t, e), "[]"].join("")]
                        : [...n, [u(t, e), "[]=", u(r, e)].join("")];
                  case "comma":
                  case "separator":
                  case "bracket-separator": {
                    const t =
                      "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                    return (n) => (r, o) =>
                      void 0 === o ||
                      (e.skipNull && null === o) ||
                      (e.skipEmptyString && "" === o)
                        ? r
                        : ((o = null === o ? "" : o),
                          0 === r.length
                            ? [[u(n, e), t, u(o, e)].join("")]
                            : [[r, u(o, e)].join(e.arrayFormatSeparator)]);
                  }
                  default:
                    return (t) => (n, r) =>
                      void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && "" === r)
                        ? n
                        : null === r
                        ? [...n, u(t, e)]
                        : [...n, [u(t, e), "=", u(r, e)].join("")];
                }
              })(t),
              o = {};
            for (const t of Object.keys(e)) n(t) || (o[t] = e[t]);
            const i = Object.keys(o);
            return (
              !1 !== t.sort && i.sort(t.sort),
              i
                .map((n) => {
                  const o = e[n];
                  return void 0 === o
                    ? ""
                    : null === o
                    ? u(n, t)
                    : Array.isArray(o)
                    ? 0 === o.length && "bracket-separator" === t.arrayFormat
                      ? u(n, t) + "[]"
                      : o.reduce(r(n), []).join("&")
                    : u(n, t) + "=" + u(o, t);
                })
                .filter((e) => e.length > 0)
                .join("&")
            );
          }),
          (t.parseUrl = (e, t) => {
            t = Object.assign({ decode: !0 }, t);
            const [n, r] = i(e, "#");
            return Object.assign(
              { url: n.split("?")[0] || "", query: m(p(e), t) },
              t && t.parseFragmentIdentifier && r
                ? { fragmentIdentifier: l(r, t) }
                : {}
            );
          }),
          (t.stringifyUrl = (e, n) => {
            n = Object.assign({ encode: !0, strict: !0, [a]: !0 }, n);
            const r = d(e.url).split("?")[0] || "",
              o = t.extract(e.url),
              i = t.parse(o, { sort: !1 }),
              c = Object.assign(i, e.query);
            let s = t.stringify(c, n);
            s && (s = `?${s}`);
            let l = (function (e) {
              let t = "";
              const n = e.indexOf("#");
              return -1 !== n && (t = e.slice(n)), t;
            })(e.url);
            return (
              e.fragmentIdentifier &&
                (l = `#${
                  n[a] ? u(e.fragmentIdentifier, n) : e.fragmentIdentifier
                }`),
              `${r}${s}${l}`
            );
          }),
          (t.pick = (e, n, r) => {
            r = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, r);
            const {
              url: o,
              query: i,
              fragmentIdentifier: s,
            } = t.parseUrl(e, r);
            return t.stringifyUrl(
              { url: o, query: c(i, n), fragmentIdentifier: s },
              r
            );
          }),
          (t.exclude = (e, n, r) => {
            const o = Array.isArray(n)
              ? (e) => !n.includes(e)
              : (e, t) => !n(e, t);
            return t.pick(e, o, r);
          });
      },
      72704: (e) => {
        e.exports = (e, t) => {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === t) return [e];
          const n = e.indexOf(t);
          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        };
      },
      29449: (e) => {
        e.exports = (e) =>
          encodeURIComponent(e).replace(
            /[!'()*]/g,
            (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
          );
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    var e = function () {
        var e = "Windows",
          t = window.navigator.userAgent,
          n = window.navigator.platform;
        return (
          -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n)
            ? (e = "MacOS")
            : -1 !== ["iPhone", "iPad", "iPod"].indexOf(n)
            ? (e = "iOS")
            : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n)
            ? (e = "Windows")
            : /Android/.test(t)
            ? (e = "Android")
            : !e && /Linux/.test(n) && (e = "Linux"),
          e
        );
      },
      t = (e(), "MacOS" === e()),
      r = function (e) {
        return e ? e[0].toUpperCase() + e.slice(1) : e;
      },
      o = function (e, t) {
        return void 0 === t && (t = " "), e.map(r).join(t);
      },
      i = "enter",
      c = t ? "cmd" : "ctrl",
      a = t ? "option" : "alt",
      s =
        ((function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          e.join("+");
        })(c, i),
        {
          SEND_TO_FRONT: {
            id: "send_to_front",
            contexts: ["selection"],
            title: "Send To Front (" + o([a, "a"], " + ") + ")",
          },
          SEND_TO_BACK: {
            id: "send_to_back",
            contexts: ["selection"],
            title: "Send To Back (" + o([a, "s"], " + ") + ")",
          },
        }),
      u = "toggle-ext",
      l = "send-to-back",
      f = "send-to-front",
      d = "content.js",
      p = "sendToFrontCmd.js",
      h = "sendToBackCmd.js",
      m = "toggleExtensionCmd.js",
      y = "onAccessEmbeddedPdfViewer.js",
      v = function () {
        return (v =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      b = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function c(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(c, a);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      g = function (e, t) {
        var n,
          r,
          o,
          i,
          c = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return c.label++, { value: i[1], done: !1 };
                    case 5:
                      c.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = c.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        c.label = i[1];
                        break;
                      }
                      if (6 === i[0] && c.label < o[1]) {
                        (c.label = o[1]), (o = i);
                        break;
                      }
                      if (o && c.label < o[2]) {
                        (c.label = o[2]), c.ops.push(i);
                        break;
                      }
                      o[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  i = t.call(e, c);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      },
      w = !0,
      S = !0,
      x = "PAGE_SETTINGS_KEY",
      k = {
        isToggleModeOn: function (e, t, n) {
          return b(this, void 0, void 0, function () {
            var r = this;
            return g(this, function (o) {
              return [
                2,
                new Promise(function (o, i) {
                  return b(r, void 0, void 0, function () {
                    var r, i;
                    return g(this, function (c) {
                      try {
                        return e
                          ? n
                            ? [
                                2,
                                o(
                                  null !==
                                    (i =
                                      null ===
                                        (r =
                                          null == n
                                            ? void 0
                                            : n.sourceOptions) || void 0 === r
                                        ? void 0
                                        : r.notionUseToggles) && void 0 !== i
                                    ? i
                                    : w
                                ),
                              ]
                            : [
                                2,
                                chrome.storage.sync.get(x, function (e) {
                                  var n,
                                    r,
                                    i,
                                    c = JSON.parse(
                                      null !== (n = e.PAGE_SETTINGS_KEY) &&
                                        void 0 !== n
                                        ? n
                                        : "{}"
                                    );
                                  o(
                                    null !==
                                      (i =
                                        null === (r = c[t]) || void 0 === r
                                          ? void 0
                                          : r.toggleListEnabled) && void 0 !== i
                                      ? i
                                      : w
                                  );
                                }),
                              ]
                          : [2, o(w)];
                      } catch (e) {
                        o(w);
                      }
                      return [2];
                    });
                  });
                }),
              ];
            });
          });
        },
        isInlineCodeForClozeOn: function (e, t, n) {
          return b(this, void 0, void 0, function () {
            var r = this;
            return g(this, function (o) {
              return [
                2,
                new Promise(function (o, i) {
                  return b(r, void 0, void 0, function () {
                    var r, i, c;
                    return g(this, function (a) {
                      try {
                        return e
                          ? n
                            ? (console.log(
                                "TOPIC USES INLINE CODE CLOZES",
                                null ===
                                  (r = null == n ? void 0 : n.sourceOptions) ||
                                  void 0 === r
                                  ? void 0
                                  : r.notionUseInlineCodeClozes
                              ),
                              [
                                2,
                                o(
                                  null !==
                                    (c =
                                      null ===
                                        (i =
                                          null == n
                                            ? void 0
                                            : n.sourceOptions) || void 0 === i
                                        ? void 0
                                        : i.notionUseInlineCodeClozes) &&
                                    void 0 !== c
                                    ? c
                                    : S
                                ),
                              ])
                            : [
                                2,
                                chrome.storage.sync.get(x, function (e) {
                                  var n,
                                    r,
                                    i,
                                    c = JSON.parse(
                                      null !== (n = e.PAGE_SETTINGS_KEY) &&
                                        void 0 !== n
                                        ? n
                                        : "{}"
                                    );
                                  o(
                                    null !==
                                      (i =
                                        null === (r = c[t]) || void 0 === r
                                          ? void 0
                                          : r.inlineCodeClozesEnabled) &&
                                      void 0 !== i
                                      ? i
                                      : S
                                  );
                                }),
                              ]
                          : [2, o(S)];
                      } catch (e) {
                        o(S);
                      }
                      return [2];
                    });
                  });
                }),
              ];
            });
          });
        },
        mergeSettingsForUnsyncedPage: function (e, t) {
          return b(this, void 0, void 0, function () {
            return g(this, function (n) {
              return (
                chrome.storage.sync.get(x, function (n) {
                  var r,
                    o,
                    i = JSON.parse(
                      null !== (o = n.PAGE_SETTINGS_KEY) && void 0 !== o
                        ? o
                        : "{}"
                    );
                  (i[e] = v(
                    v({}, i[e] || {}),
                    Object.keys(t).reduce(function (e, n) {
                      var r = t[n];
                      return void 0 !== r && (e[n] = r), e;
                    }, {})
                  )),
                    chrome.storage.sync.set(
                      (((r = {}).PAGE_SETTINGS_KEY = JSON.stringify(i)), r)
                    );
                }),
                [2]
              );
            });
          });
        },
        readSync: function (e) {
          return b(this, void 0, void 0, function () {
            return g(this, function (t) {
              return [
                2,
                new Promise(function (t) {
                  chrome.storage.sync.get(e, function (n) {
                    return t(n[e]);
                  });
                }),
              ];
            });
          });
        },
        storeSync: function (e, t) {
          return b(this, void 0, void 0, function () {
            return g(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (n, r) {
                      var o;
                      chrome.storage.sync.set(
                        (((o = {})[e] = t), o),
                        function () {
                          n();
                        }
                      );
                    }),
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        },
        removeSync: function (e) {
          return b(this, void 0, void 0, function () {
            return g(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (t, n) {
                      chrome.storage.sync.remove(e, function () {
                        t();
                      });
                    }),
                  ];
                case 1:
                  return t.sent(), [2];
              }
            });
          });
        },
      },
      O = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function c(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(c, a);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      E = function (e, t) {
        var n,
          r,
          o,
          i,
          c = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return c.label++, { value: i[1], done: !1 };
                    case 5:
                      c.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = c.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        c.label = i[1];
                        break;
                      }
                      if (6 === i[0] && c.label < o[1]) {
                        (c.label = o[1]), (o = i);
                        break;
                      }
                      if (o && c.label < o[2]) {
                        (c.label = o[2]), c.ops.push(i);
                        break;
                      }
                      o[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  i = t.call(e, c);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      },
      C = "open_container",
      j = "card_content_update",
      T = "request_notion_sync",
      F = function (e) {
        if (chrome.runtime.id)
          return new Promise(function (t, n) {
            chrome.runtime.sendMessage(e, function (e) {
              chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e);
            });
          });
      },
      _ = { origins: ["https://www.notion.so/"] };
    function I() {
      return O(this, void 0, void 0, function () {
        return E(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, k.storeSync("openFrom", "notion")];
            case 1:
              return e.sent(), q(), [2];
          }
        });
      });
    }
    const N = {
      registerMessageListener: function () {
        var e = this;
        chrome.runtime.onMessage.addListener(function (t, n) {
          return O(e, void 0, void 0, function () {
            var e = this;
            return E(this, function (n) {
              switch (t.type) {
                case T:
                  chrome.permissions.contains(_, function (t) {
                    return O(e, void 0, void 0, function () {
                      var e = this;
                      return E(this, function (n) {
                        return (
                          t
                            ? I()
                            : chrome.permissions.request(_, function (t) {
                                return O(e, void 0, void 0, function () {
                                  return E(this, function (e) {
                                    return (
                                      t
                                        ? I()
                                        : alert(
                                            "The Zorbi Notion Integration requires permission to access https://www.notion.so/*"
                                          ),
                                      [2]
                                    );
                                  });
                                });
                              }),
                          [2]
                        );
                      });
                    });
                  });
                  break;
                case j:
                case C:
                  return [2, q()];
                default:
                  return [2];
              }
              return [2];
            });
          });
        });
      },
      notifyOpenContainer: function () {
        return F({ type: C });
      },
      notifyCardContentUpdate: function () {
        return F({ type: j });
      },
      sendMessageAsync: F,
    };
    var P = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function c(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(c, a);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      A = function (e, t) {
        var n,
          r,
          o,
          i,
          c = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return c.label++, { value: i[1], done: !1 };
                    case 5:
                      c.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = c.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        c.label = i[1];
                        break;
                      }
                      if (6 === i[0] && c.label < o[1]) {
                        (c.label = o[1]), (o = i);
                        break;
                      }
                      if (o && c.label < o[2]) {
                        (c.label = o[2]), c.ops.push(i);
                        break;
                      }
                      o[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  i = t.call(e, c);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      },
      U = "frontContent",
      L = "backContent",
      M = function (e) {
        return new Promise(function (t, n) {
          chrome.runtime.id
            ? chrome.storage.local.get(e, function (r) {
                chrome.runtime.lastError
                  ? n(chrome.runtime.lastError)
                  : t(r[e]);
              })
            : t(void 0);
        });
      },
      G = function (e) {
        return new Promise(function (t, n) {
          chrome.runtime.id
            ? chrome.storage.local.set(e, function () {
                chrome.runtime.lastError ? n(chrome.runtime.lastError) : t();
              })
            : t();
        });
      },
      R = {
        setFrontContent: function (e, t) {
          var n;
          return G((((n = {})[U] = e), (n.invokeType = t), n));
        },
        setBackContent: function (e, t) {
          var n;
          return G((((n = {})[L] = e), (n.invokeType = t), n));
        },
        getContent: function () {
          return P(this, void 0, void 0, function () {
            var e, t;
            return A(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, M(U)];
                case 1:
                  return (e = n.sent()), [4, M(L)];
                case 2:
                  return (t = n.sent()), [2, { front: e, back: t }];
              }
            });
          });
        },
        resetContent: function () {
          var e;
          return G((((e = {})[U] = ""), (e[L] = ""), e));
        },
      },
      q = function () {
        chrome.tabs.insertCSS({ file: "css/root.css" }),
          chrome.tabs.executeScript({ file: d }, function (e) {
            e ||
              chrome.tabs.create(
                { url: "https://zorbi.cards/help-webpage" },
                function () {
                  return null;
                }
              );
          });
      },
      $ = n(36575),
      B = function () {
        return (B =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      W = function (e, t) {
        return (function (e, t) {
          var n = $.parseUrl(e, { parseFragmentIdentifier: !0 });
          return $.stringifyUrl({
            url: n.url,
            query: B(B({}, n.query), t),
            fragmentIdentifier: n.fragmentIdentifier,
          });
        })(e, t);
      },
      D = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function c(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(c, a);
          }
          s((r = r.apply(e, t || [])).next());
        });
      },
      K = function (e, t) {
        var n,
          r,
          o,
          i,
          c = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return c.label++, { value: i[1], done: !1 };
                    case 5:
                      c.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = c.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        c.label = i[1];
                        break;
                      }
                      if (6 === i[0] && c.label < o[1]) {
                        (c.label = o[1]), (o = i);
                        break;
                      }
                      if (o && c.label < o[2]) {
                        (c.label = o[2]), c.ops.push(i);
                        break;
                      }
                      o[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  i = t.call(e, c);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      },
      z = function (e) {
        return D(void 0, void 0, void 0, function () {
          var t, n, r, o, i;
          return K(this, function (c) {
            switch (c.label) {
              case 0:
                return null == e ? [3, 1] : ((n = e), [3, 3]);
              case 1:
                return [
                  4,
                  new Promise(function (e) {
                    return chrome.tabs.query(
                      { currentWindow: !0, active: !0 },
                      function (t) {
                        var n = t[0];
                        return e(n);
                      }
                    );
                  }),
                ];
              case 2:
                (n = c.sent()), (c.label = 3);
              case 3:
                return (t = n), [4, Z()];
              case 4:
                return (
                  (r = c.sent()),
                  (null === (i = t.url) || void 0 === i
                    ? void 0
                    : i.startsWith("file://")) && !r
                    ? ("To continue making flashcards with Zorbi, upload your file to Zorbi's PDF viewer.",
                      confirm(
                        "To continue making flashcards with Zorbi, upload your file to Zorbi's PDF viewer."
                      ) &&
                        ((o = W("https://zorbi.app/pdf_viewer", {
                          utm_source: "local",
                          utm_medium: "page_dialog",
                        })),
                        chrome.tabs.create({ url: o })),
                      [2, !1])
                    : [2, !0]
                );
            }
          });
        });
      };
    N.registerMessageListener(),
      chrome.contextMenus.create(s.SEND_TO_FRONT),
      chrome.contextMenus.create(s.SEND_TO_BACK);
    chrome.commands.onCommand.addListener(function (e) {
      return D(void 0, void 0, void 0, function () {
        return K(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, z()];
            case 1:
              if (!t.sent()) return [2];
              switch (
                (chrome.tabs.insertCSS({ file: "css/root.css" }),
                chrome.tabs.insertCSS({
                  file: "css/tailwind/tailwind.generated.css",
                }),
                chrome.tabs.insertCSS({ file: "css/hint.css" }),
                e)
              ) {
                case u:
                  return [2, chrome.tabs.executeScript({ file: m })];
                case f:
                  return (
                    chrome.tabs.executeScript({ file: y }),
                    [2, chrome.tabs.executeScript({ file: p })]
                  );
                case l:
                  return (
                    chrome.tabs.executeScript({ file: y }),
                    [2, chrome.tabs.executeScript({ file: h })]
                  );
                default:
                  return [2];
              }
              return [2];
          }
        });
      });
    });
    var Z = function () {
        return new Promise(function (e) {
          return chrome.extension.isAllowedFileSchemeAccess(function (t) {
            return e(t);
          });
        });
      },
      Y = function (e, t, n) {
        return D(void 0, void 0, void 0, function () {
          return K(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, z(t)];
              case 1:
                if (!r.sent()) return [2];
                if ("selectionText" in e)
                  switch (e.menuItemId) {
                    case s.SEND_TO_FRONT.id:
                      R.setFrontContent(e.selectionText, n);
                      break;
                    case s.SEND_TO_BACK.id:
                      R.setBackContent(e.selectionText, n);
                  }
                return (
                  q(), chrome.tabs.insertCSS({ file: "css/root.css" }), [2]
                );
            }
          });
        });
      };
    chrome.browserAction.onClicked.addListener(function (e) {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
        var n = t[0];
        Y(e, n, "action");
      });
    }),
      chrome.contextMenus.onClicked.addListener(function (e) {
        chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
          var n = t[0];
          Y(e, n, e.menuItemId);
        });
      }),
      chrome.management.getSelf(function (e) {
        var t,
          n,
          r = "development" == e.installType;
        r
          ? ((t = "http://localhost:3000/login?login_source=extension_install"),
            (n = "http://localhost:3000/uninstall"))
          : ((t = "https://zorbi.app/login?login_source=extension_install"),
            (n = "https://zorbi.cards/uninstall")),
          chrome.runtime.onInstalled.addListener(function (e) {
            ("install" == e.reason || r) &&
              chrome.tabs.create({ url: t }, function () {
                return null;
              }),
              J();
          }),
          chrome.runtime.onSuspend.addListener(J),
          chrome.runtime.setUninstallURL(n);
      });
    var J = function () {
      chrome.windows.getAll({ populate: !0 }, function (e) {
        e.forEach(function (e) {
          e.tabs.forEach(function (e) {
            var t;
            (null === (t = e.url) || void 0 === t
              ? void 0
              : t.match(/https:\/\/www.notion.so\/*/gi)) &&
              chrome.tabs.reload(e.id);
          });
        });
      });
    };
  })();
})();
