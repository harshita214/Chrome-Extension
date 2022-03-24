(() => {
  "use strict";
  var n = function () {
      var n = "Windows",
        t = window.navigator.userAgent,
        e = window.navigator.platform;
      return (
        -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(e)
          ? (n = "MacOS")
          : -1 !== ["iPhone", "iPad", "iPod"].indexOf(e)
          ? (n = "iOS")
          : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(e)
          ? (n = "Windows")
          : /Android/.test(t)
          ? (n = "Android")
          : !n && /Linux/.test(e) && (n = "Linux"),
        n
      );
    },
    t = (n(), "MacOS" === n()),
    e = function (n) {
      return n ? n[0].toUpperCase() + n.slice(1) : n;
    },
    r = function (n, t) {
      return void 0 === t && (t = " "), n.map(e).join(t);
    },
    o = "enter",
    i = t ? "cmd" : "ctrl",
    u = t ? "option" : "alt",
    c =
      ((function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        n.join("+");
      })(i, o),
      r([u, "a"], " + ")),
    a = r([u, "s"], " + "),
    s = {
      id: "send_to_front",
      contexts: ["selection"],
      title: "Send To Front (" + c + ")",
    },
    l = {
      id: "send_to_back",
      contexts: ["selection"],
      title: "Send To Back (" + a + ")",
    },
    f = "content.js",
    d = function () {
      return (d =
        Object.assign ||
        function (n) {
          for (var t, e = 1, r = arguments.length; e < r; e++)
            for (var o in (t = arguments[e]))
              Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          return n;
        }).apply(this, arguments);
    },
    h = function (n, t, e, r) {
      return new (e || (e = Promise))(function (o, i) {
        function u(n) {
          try {
            a(r.next(n));
          } catch (n) {
            i(n);
          }
        }
        function c(n) {
          try {
            a(r.throw(n));
          } catch (n) {
            i(n);
          }
        }
        function a(n) {
          var t;
          n.done
            ? o(n.value)
            : ((t = n.value),
              t instanceof e
                ? t
                : new e(function (n) {
                    n(t);
                  })).then(u, c);
        }
        a((r = r.apply(n, t || [])).next());
      });
    },
    v = function (n, t) {
      var e,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((e = 1),
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(n, u);
              } catch (n) {
                (i = [6, n]), (r = 0);
              } finally {
                e = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    },
    p = !0,
    y = !0,
    b = "PAGE_SETTINGS_KEY",
    w = {
      isToggleModeOn: function (n, t, e) {
        return h(this, void 0, void 0, function () {
          var r = this;
          return v(this, function (o) {
            return [
              2,
              new Promise(function (o, i) {
                return h(r, void 0, void 0, function () {
                  var r, i;
                  return v(this, function (u) {
                    try {
                      return n
                        ? e
                          ? [
                              2,
                              o(
                                null !==
                                  (i =
                                    null ===
                                      (r =
                                        null == e ? void 0 : e.sourceOptions) ||
                                    void 0 === r
                                      ? void 0
                                      : r.notionUseToggles) && void 0 !== i
                                  ? i
                                  : p
                              ),
                            ]
                          : [
                              2,
                              chrome.storage.sync.get(b, function (n) {
                                var e,
                                  r,
                                  i,
                                  u = JSON.parse(
                                    null !== (e = n.PAGE_SETTINGS_KEY) &&
                                      void 0 !== e
                                      ? e
                                      : "{}"
                                  );
                                o(
                                  null !==
                                    (i =
                                      null === (r = u[t]) || void 0 === r
                                        ? void 0
                                        : r.toggleListEnabled) && void 0 !== i
                                    ? i
                                    : p
                                );
                              }),
                            ]
                        : [2, o(p)];
                    } catch (n) {
                      o(p);
                    }
                    return [2];
                  });
                });
              }),
            ];
          });
        });
      },
      isInlineCodeForClozeOn: function (n, t, e) {
        return h(this, void 0, void 0, function () {
          var r = this;
          return v(this, function (o) {
            return [
              2,
              new Promise(function (o, i) {
                return h(r, void 0, void 0, function () {
                  var r, i, u;
                  return v(this, function (c) {
                    try {
                      return n
                        ? e
                          ? (console.log(
                              "TOPIC USES INLINE CODE CLOZES",
                              null ===
                                (r = null == e ? void 0 : e.sourceOptions) ||
                                void 0 === r
                                ? void 0
                                : r.notionUseInlineCodeClozes
                            ),
                            [
                              2,
                              o(
                                null !==
                                  (u =
                                    null ===
                                      (i =
                                        null == e ? void 0 : e.sourceOptions) ||
                                    void 0 === i
                                      ? void 0
                                      : i.notionUseInlineCodeClozes) &&
                                  void 0 !== u
                                  ? u
                                  : y
                              ),
                            ])
                          : [
                              2,
                              chrome.storage.sync.get(b, function (n) {
                                var e,
                                  r,
                                  i,
                                  u = JSON.parse(
                                    null !== (e = n.PAGE_SETTINGS_KEY) &&
                                      void 0 !== e
                                      ? e
                                      : "{}"
                                  );
                                o(
                                  null !==
                                    (i =
                                      null === (r = u[t]) || void 0 === r
                                        ? void 0
                                        : r.inlineCodeClozesEnabled) &&
                                    void 0 !== i
                                    ? i
                                    : y
                                );
                              }),
                            ]
                        : [2, o(y)];
                    } catch (n) {
                      o(y);
                    }
                    return [2];
                  });
                });
              }),
            ];
          });
        });
      },
      mergeSettingsForUnsyncedPage: function (n, t) {
        return h(this, void 0, void 0, function () {
          return v(this, function (e) {
            return (
              chrome.storage.sync.get(b, function (e) {
                var r,
                  o,
                  i = JSON.parse(
                    null !== (o = e.PAGE_SETTINGS_KEY) && void 0 !== o
                      ? o
                      : "{}"
                  );
                (i[n] = d(
                  d({}, i[n] || {}),
                  Object.keys(t).reduce(function (n, e) {
                    var r = t[e];
                    return void 0 !== r && (n[e] = r), n;
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
      readSync: function (n) {
        return h(this, void 0, void 0, function () {
          return v(this, function (t) {
            return [
              2,
              new Promise(function (t) {
                chrome.storage.sync.get(n, function (e) {
                  return t(e[n]);
                });
              }),
            ];
          });
        });
      },
      storeSync: function (n, t) {
        return h(this, void 0, void 0, function () {
          return v(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  new Promise(function (e, r) {
                    var o;
                    chrome.storage.sync.set(
                      (((o = {})[n] = t), o),
                      function () {
                        e();
                      }
                    );
                  }),
                ];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      },
      removeSync: function (n) {
        return h(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  new Promise(function (t, e) {
                    chrome.storage.sync.remove(n, function () {
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
    m = function (n, t, e, r) {
      return new (e || (e = Promise))(function (o, i) {
        function u(n) {
          try {
            a(r.next(n));
          } catch (n) {
            i(n);
          }
        }
        function c(n) {
          try {
            a(r.throw(n));
          } catch (n) {
            i(n);
          }
        }
        function a(n) {
          var t;
          n.done
            ? o(n.value)
            : ((t = n.value),
              t instanceof e
                ? t
                : new e(function (n) {
                    n(t);
                  })).then(u, c);
        }
        a((r = r.apply(n, t || [])).next());
      });
    },
    g = function (n, t) {
      var e,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((e = 1),
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(n, u);
              } catch (n) {
                (i = [6, n]), (r = 0);
              } finally {
                e = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    },
    S = "open_container",
    E = "card_content_update",
    C = "request_notion_sync",
    k = function (n) {
      if (chrome.runtime.id)
        return new Promise(function (t, e) {
          chrome.runtime.sendMessage(n, function (n) {
            chrome.runtime.lastError ? e(chrome.runtime.lastError) : t(n);
          });
        });
    },
    x = { origins: ["https://www.notion.so/"] };
  function P() {
    return m(this, void 0, void 0, function () {
      return g(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, w.storeSync("openFrom", "notion")];
          case 1:
            return n.sent(), K(), [2];
        }
      });
    });
  }
  const O = {
    registerMessageListener: function () {
      var n = this;
      chrome.runtime.onMessage.addListener(function (t, e) {
        return m(n, void 0, void 0, function () {
          var n = this;
          return g(this, function (e) {
            switch (t.type) {
              case C:
                chrome.permissions.contains(x, function (t) {
                  return m(n, void 0, void 0, function () {
                    var n = this;
                    return g(this, function (e) {
                      return (
                        t
                          ? P()
                          : chrome.permissions.request(x, function (t) {
                              return m(n, void 0, void 0, function () {
                                return g(this, function (n) {
                                  return (
                                    t
                                      ? P()
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
              case E:
              case S:
                return [2, K()];
              default:
                return [2];
            }
            return [2];
          });
        });
      });
    },
    notifyOpenContainer: function () {
      return k({ type: S });
    },
    notifyCardContentUpdate: function () {
      return k({ type: E });
    },
    sendMessageAsync: k,
  };
  var T,
    _,
    G = function (n, t, e, r) {
      return new (e || (e = Promise))(function (o, i) {
        function u(n) {
          try {
            a(r.next(n));
          } catch (n) {
            i(n);
          }
        }
        function c(n) {
          try {
            a(r.throw(n));
          } catch (n) {
            i(n);
          }
        }
        function a(n) {
          var t;
          n.done
            ? o(n.value)
            : ((t = n.value),
              t instanceof e
                ? t
                : new e(function (n) {
                    n(t);
                  })).then(u, c);
        }
        a((r = r.apply(n, t || [])).next());
      });
    },
    I = function (n, t) {
      var e,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((e = 1),
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(n, u);
              } catch (n) {
                (i = [6, n]), (r = 0);
              } finally {
                e = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    },
    N = "frontContent",
    M = "backContent",
    U = function (n) {
      return new Promise(function (t, e) {
        chrome.runtime.id
          ? chrome.storage.local.get(n, function (r) {
              chrome.runtime.lastError ? e(chrome.runtime.lastError) : t(r[n]);
            })
          : t(void 0);
      });
    },
    A = function (n) {
      return new Promise(function (t, e) {
        chrome.runtime.id
          ? chrome.storage.local.set(n, function () {
              chrome.runtime.lastError ? e(chrome.runtime.lastError) : t();
            })
          : t();
      });
    },
    L = {
      setFrontContent: function (n, t) {
        var e;
        return A((((e = {})[N] = n), (e.invokeType = t), e));
      },
      setBackContent: function (n, t) {
        var e;
        return A((((e = {})[M] = n), (e.invokeType = t), e));
      },
      getContent: function () {
        return G(this, void 0, void 0, function () {
          var n, t;
          return I(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, U(N)];
              case 1:
                return (n = e.sent()), [4, U(M)];
              case 2:
                return (t = e.sent()), [2, { front: n, back: t }];
            }
          });
        });
      },
      resetContent: function () {
        var n;
        return A((((n = {})[N] = ""), (n[M] = ""), n));
      },
    },
    j = function (n, t, e, r) {
      return new (e || (e = Promise))(function (o, i) {
        function u(n) {
          try {
            a(r.next(n));
          } catch (n) {
            i(n);
          }
        }
        function c(n) {
          try {
            a(r.throw(n));
          } catch (n) {
            i(n);
          }
        }
        function a(n) {
          var t;
          n.done
            ? o(n.value)
            : ((t = n.value),
              t instanceof e
                ? t
                : new e(function (n) {
                    n(t);
                  })).then(u, c);
        }
        a((r = r.apply(n, t || [])).next());
      });
    },
    F = function (n, t) {
      var e,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((e = 1),
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(n, u);
              } catch (n) {
                (i = [6, n]), (r = 0);
              } finally {
                e = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    },
    K = function () {
      chrome.tabs.insertCSS({ file: "css/root.css" }),
        chrome.tabs.executeScript({ file: f }, function (n) {
          n ||
            chrome.tabs.create(
              { url: "https://zorbi.cards/help-webpage" },
              function () {
                return null;
              }
            );
        });
    };
  (T = "front"),
    void 0 === _ && (_ = window.getSelection().toString()),
    j(void 0, void 0, void 0, function () {
      return F(this, function (n) {
        if (!_) return [2];
        switch (T) {
          case "front":
            return L.setFrontContent(_, s.id), [2, O.notifyCardContentUpdate()];
          case "back":
            return L.setBackContent(_, l.id), [2, O.notifyCardContentUpdate()];
          default:
            return console.warn("Unknown send card content type is used"), [2];
        }
        return [2];
      });
    });
})();
