/*! For license information please see authentication.js.LICENSE.txt */
(() => {
  var t = {
      52868: (t, e, n) => {
        t.exports = n(61867);
      },
      43155: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = n(18079),
          o = n(64687),
          a = n(27512),
          s = n(29791),
          u = n(50924),
          c = n(5903),
          h = n(15971);
        t.exports = function (t) {
          return new Promise(function (e, n) {
            var l = t.data,
              f = t.headers;
            i.isFormData(l) && delete f["Content-Type"];
            var p = new XMLHttpRequest();
            if (t.auth) {
              var d = t.auth.username || "",
                v = t.auth.password
                  ? unescape(encodeURIComponent(t.auth.password))
                  : "";
              f.Authorization = "Basic " + btoa(d + ":" + v);
            }
            var m = s(t.baseURL, t.url);
            if (
              (p.open(
                t.method.toUpperCase(),
                a(m, t.params, t.paramsSerializer),
                !0
              ),
              (p.timeout = t.timeout),
              (p.onreadystatechange = function () {
                if (
                  p &&
                  4 === p.readyState &&
                  (0 !== p.status ||
                    (p.responseURL && 0 === p.responseURL.indexOf("file:")))
                ) {
                  var i =
                      "getAllResponseHeaders" in p
                        ? u(p.getAllResponseHeaders())
                        : null,
                    o = {
                      data:
                        t.responseType && "text" !== t.responseType
                          ? p.response
                          : p.responseText,
                      status: p.status,
                      statusText: p.statusText,
                      headers: i,
                      config: t,
                      request: p,
                    };
                  r(e, n, o), (p = null);
                }
              }),
              (p.onabort = function () {
                p &&
                  (n(h("Request aborted", t, "ECONNABORTED", p)), (p = null));
              }),
              (p.onerror = function () {
                n(h("Network Error", t, null, p)), (p = null);
              }),
              (p.ontimeout = function () {
                var e = "timeout of " + t.timeout + "ms exceeded";
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                  n(h(e, t, "ECONNABORTED", p)),
                  (p = null);
              }),
              i.isStandardBrowserEnv())
            ) {
              var g =
                (t.withCredentials || c(m)) && t.xsrfCookieName
                  ? o.read(t.xsrfCookieName)
                  : void 0;
              g && (f[t.xsrfHeaderName] = g);
            }
            if (
              ("setRequestHeader" in p &&
                i.forEach(f, function (t, e) {
                  void 0 === l && "content-type" === e.toLowerCase()
                    ? delete f[e]
                    : p.setRequestHeader(e, t);
                }),
              i.isUndefined(t.withCredentials) ||
                (p.withCredentials = !!t.withCredentials),
              t.responseType)
            )
              try {
                p.responseType = t.responseType;
              } catch (e) {
                if ("json" !== t.responseType) throw e;
              }
            "function" == typeof t.onDownloadProgress &&
              p.addEventListener("progress", t.onDownloadProgress),
              "function" == typeof t.onUploadProgress &&
                p.upload &&
                p.upload.addEventListener("progress", t.onUploadProgress),
              t.cancelToken &&
                t.cancelToken.promise.then(function (t) {
                  p && (p.abort(), n(t), (p = null));
                }),
              l || (l = null),
              p.send(l);
          });
        };
      },
      61867: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = n(93843),
          o = n(85891),
          a = n(93316);
        function s(t) {
          var e = new o(t),
            n = r(o.prototype.request, e);
          return i.extend(n, o.prototype, e), i.extend(n, e), n;
        }
        var u = s(n(90457));
        (u.Axios = o),
          (u.create = function (t) {
            return s(a(u.defaults, t));
          }),
          (u.Cancel = n(26266)),
          (u.CancelToken = n(9747)),
          (u.isCancel = n(59416)),
          (u.all = function (t) {
            return Promise.all(t);
          }),
          (u.spread = n(11545)),
          (u.isAxiosError = n(70232)),
          (t.exports = u),
          (t.exports.default = u);
      },
      26266: (t) => {
        "use strict";
        function e(t) {
          this.message = t;
        }
        (e.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (e.prototype.__CANCEL__ = !0),
          (t.exports = e);
      },
      9747: (t, e, n) => {
        "use strict";
        var i = n(26266);
        function r(t) {
          if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
          var e;
          this.promise = new Promise(function (t) {
            e = t;
          });
          var n = this;
          t(function (t) {
            n.reason || ((n.reason = new i(t)), e(n.reason));
          });
        }
        (r.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (r.source = function () {
            var t;
            return {
              token: new r(function (e) {
                t = e;
              }),
              cancel: t,
            };
          }),
          (t.exports = r);
      },
      59416: (t) => {
        "use strict";
        t.exports = function (t) {
          return !(!t || !t.__CANCEL__);
        };
      },
      85891: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = n(27512),
          o = n(58036),
          a = n(40884),
          s = n(93316);
        function u(t) {
          (this.defaults = t),
            (this.interceptors = { request: new o(), response: new o() });
        }
        (u.prototype.request = function (t) {
          "string" == typeof t
            ? ((t = arguments[1] || {}).url = arguments[0])
            : (t = t || {}),
            (t = s(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
          var e = [a, void 0],
            n = Promise.resolve(t);
          for (
            this.interceptors.request.forEach(function (t) {
              e.unshift(t.fulfilled, t.rejected);
            }),
              this.interceptors.response.forEach(function (t) {
                e.push(t.fulfilled, t.rejected);
              });
            e.length;

          )
            n = n.then(e.shift(), e.shift());
          return n;
        }),
          (u.prototype.getUri = function (t) {
            return (
              (t = s(this.defaults, t)),
              r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            );
          }),
          i.forEach(["delete", "get", "head", "options"], function (t) {
            u.prototype[t] = function (e, n) {
              return this.request(
                s(n || {}, { method: t, url: e, data: (n || {}).data })
              );
            };
          }),
          i.forEach(["post", "put", "patch"], function (t) {
            u.prototype[t] = function (e, n, i) {
              return this.request(s(i || {}, { method: t, url: e, data: n }));
            };
          }),
          (t.exports = u);
      },
      58036: (t, e, n) => {
        "use strict";
        var i = n(4030);
        function r() {
          this.handlers = [];
        }
        (r.prototype.use = function (t, e) {
          return (
            this.handlers.push({ fulfilled: t, rejected: e }),
            this.handlers.length - 1
          );
        }),
          (r.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null);
          }),
          (r.prototype.forEach = function (t) {
            i.forEach(this.handlers, function (e) {
              null !== e && t(e);
            });
          }),
          (t.exports = r);
      },
      29791: (t, e, n) => {
        "use strict";
        var i = n(50957),
          r = n(97050);
        t.exports = function (t, e) {
          return t && !i(e) ? r(t, e) : e;
        };
      },
      15971: (t, e, n) => {
        "use strict";
        var i = n(73136);
        t.exports = function (t, e, n, r, o) {
          var a = new Error(t);
          return i(a, e, n, r, o);
        };
      },
      40884: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = n(88630),
          o = n(59416),
          a = n(90457);
        function s(t) {
          t.cancelToken && t.cancelToken.throwIfRequested();
        }
        t.exports = function (t) {
          return (
            s(t),
            (t.headers = t.headers || {}),
            (t.data = r(t.data, t.headers, t.transformRequest)),
            (t.headers = i.merge(
              t.headers.common || {},
              t.headers[t.method] || {},
              t.headers
            )),
            i.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (e) {
                delete t.headers[e];
              }
            ),
            (t.adapter || a.adapter)(t).then(
              function (e) {
                return (
                  s(t), (e.data = r(e.data, e.headers, t.transformResponse)), e
                );
              },
              function (e) {
                return (
                  o(e) ||
                    (s(t),
                    e &&
                      e.response &&
                      (e.response.data = r(
                        e.response.data,
                        e.response.headers,
                        t.transformResponse
                      ))),
                  Promise.reject(e)
                );
              }
            )
          );
        };
      },
      73136: (t) => {
        "use strict";
        t.exports = function (t, e, n, i, r) {
          return (
            (t.config = e),
            n && (t.code = n),
            (t.request = i),
            (t.response = r),
            (t.isAxiosError = !0),
            (t.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            t
          );
        };
      },
      93316: (t, e, n) => {
        "use strict";
        var i = n(4030);
        t.exports = function (t, e) {
          e = e || {};
          var n = {},
            r = ["url", "method", "data"],
            o = ["headers", "auth", "proxy", "params"],
            a = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            s = ["validateStatus"];
          function u(t, e) {
            return i.isPlainObject(t) && i.isPlainObject(e)
              ? i.merge(t, e)
              : i.isPlainObject(e)
              ? i.merge({}, e)
              : i.isArray(e)
              ? e.slice()
              : e;
          }
          function c(r) {
            i.isUndefined(e[r])
              ? i.isUndefined(t[r]) || (n[r] = u(void 0, t[r]))
              : (n[r] = u(t[r], e[r]));
          }
          i.forEach(r, function (t) {
            i.isUndefined(e[t]) || (n[t] = u(void 0, e[t]));
          }),
            i.forEach(o, c),
            i.forEach(a, function (r) {
              i.isUndefined(e[r])
                ? i.isUndefined(t[r]) || (n[r] = u(void 0, t[r]))
                : (n[r] = u(void 0, e[r]));
            }),
            i.forEach(s, function (i) {
              i in e
                ? (n[i] = u(t[i], e[i]))
                : i in t && (n[i] = u(void 0, t[i]));
            });
          var h = r.concat(o).concat(a).concat(s),
            l = Object.keys(t)
              .concat(Object.keys(e))
              .filter(function (t) {
                return -1 === h.indexOf(t);
              });
          return i.forEach(l, c), n;
        };
      },
      18079: (t, e, n) => {
        "use strict";
        var i = n(15971);
        t.exports = function (t, e, n) {
          var r = n.config.validateStatus;
          n.status && r && !r(n.status)
            ? e(
                i(
                  "Request failed with status code " + n.status,
                  n.config,
                  null,
                  n.request,
                  n
                )
              )
            : t(n);
        };
      },
      88630: (t, e, n) => {
        "use strict";
        var i = n(4030);
        t.exports = function (t, e, n) {
          return (
            i.forEach(n, function (n) {
              t = n(t, e);
            }),
            t
          );
        };
      },
      90457: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = n(37122),
          o = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(t, e) {
          !i.isUndefined(t) &&
            i.isUndefined(t["Content-Type"]) &&
            (t["Content-Type"] = e);
        }
        var s,
          u = {
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (s = n(43155)),
              s),
            transformRequest: [
              function (t, e) {
                return (
                  r(e, "Accept"),
                  r(e, "Content-Type"),
                  i.isFormData(t) ||
                  i.isArrayBuffer(t) ||
                  i.isBuffer(t) ||
                  i.isStream(t) ||
                  i.isFile(t) ||
                  i.isBlob(t)
                    ? t
                    : i.isArrayBufferView(t)
                    ? t.buffer
                    : i.isURLSearchParams(t)
                    ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"),
                      t.toString())
                    : i.isObject(t)
                    ? (a(e, "application/json;charset=utf-8"),
                      JSON.stringify(t))
                    : t
                );
              },
            ],
            transformResponse: [
              function (t) {
                if ("string" == typeof t)
                  try {
                    t = JSON.parse(t);
                  } catch (t) {}
                return t;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (t) {
              return t >= 200 && t < 300;
            },
          };
        (u.headers = {
          common: { Accept: "application/json, text/plain, */*" },
        }),
          i.forEach(["delete", "get", "head"], function (t) {
            u.headers[t] = {};
          }),
          i.forEach(["post", "put", "patch"], function (t) {
            u.headers[t] = i.merge(o);
          }),
          (t.exports = u);
      },
      93843: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
              n[i] = arguments[i];
            return t.apply(e, n);
          };
        };
      },
      27512: (t, e, n) => {
        "use strict";
        var i = n(4030);
        function r(t) {
          return encodeURIComponent(t)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        t.exports = function (t, e, n) {
          if (!e) return t;
          var o;
          if (n) o = n(e);
          else if (i.isURLSearchParams(e)) o = e.toString();
          else {
            var a = [];
            i.forEach(e, function (t, e) {
              null != t &&
                (i.isArray(t) ? (e += "[]") : (t = [t]),
                i.forEach(t, function (t) {
                  i.isDate(t)
                    ? (t = t.toISOString())
                    : i.isObject(t) && (t = JSON.stringify(t)),
                    a.push(r(e) + "=" + r(t));
                }));
            }),
              (o = a.join("&"));
          }
          if (o) {
            var s = t.indexOf("#");
            -1 !== s && (t = t.slice(0, s)),
              (t += (-1 === t.indexOf("?") ? "?" : "&") + o);
          }
          return t;
        };
      },
      97050: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        };
      },
      64687: (t, e, n) => {
        "use strict";
        var i = n(4030);
        t.exports = i.isStandardBrowserEnv()
          ? {
              write: function (t, e, n, r, o, a) {
                var s = [];
                s.push(t + "=" + encodeURIComponent(e)),
                  i.isNumber(n) &&
                    s.push("expires=" + new Date(n).toGMTString()),
                  i.isString(r) && s.push("path=" + r),
                  i.isString(o) && s.push("domain=" + o),
                  !0 === a && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (t) {
                var e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove: function (t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      50957: (t) => {
        "use strict";
        t.exports = function (t) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
        };
      },
      70232: (t) => {
        "use strict";
        t.exports = function (t) {
          return "object" == typeof t && !0 === t.isAxiosError;
        };
      },
      5903: (t, e, n) => {
        "use strict";
        var i = n(4030);
        t.exports = i.isStandardBrowserEnv()
          ? (function () {
              var t,
                e = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function r(t) {
                var i = t;
                return (
                  e && (n.setAttribute("href", i), (i = n.href)),
                  n.setAttribute("href", i),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (t = r(window.location.href)),
                function (e) {
                  var n = i.isString(e) ? r(e) : e;
                  return n.protocol === t.protocol && n.host === t.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      37122: (t, e, n) => {
        "use strict";
        var i = n(4030);
        t.exports = function (t, e) {
          i.forEach(t, function (n, i) {
            i !== e &&
              i.toUpperCase() === e.toUpperCase() &&
              ((t[e] = n), delete t[i]);
          });
        };
      },
      50924: (t, e, n) => {
        "use strict";
        var i = n(4030),
          r = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        t.exports = function (t) {
          var e,
            n,
            o,
            a = {};
          return t
            ? (i.forEach(t.split("\n"), function (t) {
                if (
                  ((o = t.indexOf(":")),
                  (e = i.trim(t.substr(0, o)).toLowerCase()),
                  (n = i.trim(t.substr(o + 1))),
                  e)
                ) {
                  if (a[e] && r.indexOf(e) >= 0) return;
                  a[e] =
                    "set-cookie" === e
                      ? (a[e] ? a[e] : []).concat([n])
                      : a[e]
                      ? a[e] + ", " + n
                      : n;
                }
              }),
              a)
            : a;
        };
      },
      11545: (t) => {
        "use strict";
        t.exports = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        };
      },
      4030: (t, e, n) => {
        "use strict";
        var i = n(93843),
          r = Object.prototype.toString;
        function o(t) {
          return "[object Array]" === r.call(t);
        }
        function a(t) {
          return void 0 === t;
        }
        function s(t) {
          return null !== t && "object" == typeof t;
        }
        function u(t) {
          if ("[object Object]" !== r.call(t)) return !1;
          var e = Object.getPrototypeOf(t);
          return null === e || e === Object.prototype;
        }
        function c(t) {
          return "[object Function]" === r.call(t);
        }
        function h(t, e) {
          if (null != t)
            if (("object" != typeof t && (t = [t]), o(t)))
              for (var n = 0, i = t.length; n < i; n++)
                e.call(null, t[n], n, t);
            else
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  e.call(null, t[r], r, t);
        }
        t.exports = {
          isArray: o,
          isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t);
          },
          isBuffer: function (t) {
            return (
              null !== t &&
              !a(t) &&
              null !== t.constructor &&
              !a(t.constructor) &&
              "function" == typeof t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
          },
          isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData;
          },
          isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && t.buffer instanceof ArrayBuffer;
          },
          isString: function (t) {
            return "string" == typeof t;
          },
          isNumber: function (t) {
            return "number" == typeof t;
          },
          isObject: s,
          isPlainObject: u,
          isUndefined: a,
          isDate: function (t) {
            return "[object Date]" === r.call(t);
          },
          isFile: function (t) {
            return "[object File]" === r.call(t);
          },
          isBlob: function (t) {
            return "[object Blob]" === r.call(t);
          },
          isFunction: c,
          isStream: function (t) {
            return s(t) && c(t.pipe);
          },
          isURLSearchParams: function (t) {
            return (
              "undefined" != typeof URLSearchParams &&
              t instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: h,
          merge: function t() {
            var e = {};
            function n(n, i) {
              u(e[i]) && u(n)
                ? (e[i] = t(e[i], n))
                : u(n)
                ? (e[i] = t({}, n))
                : o(n)
                ? (e[i] = n.slice())
                : (e[i] = n);
            }
            for (var i = 0, r = arguments.length; i < r; i++)
              h(arguments[i], n);
            return e;
          },
          extend: function (t, e, n) {
            return (
              h(e, function (e, r) {
                t[r] = n && "function" == typeof e ? i(e, n) : e;
              }),
              t
            );
          },
          trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "");
          },
          stripBOM: function (t) {
            return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
          },
        };
      },
      80719: function (t, e, n) {
        var i, r, o;
        (o = function () {
          function t(t) {
            var e = [];
            if (0 === t.length) return "";
            if ("string" != typeof t[0])
              throw new TypeError("Url must be a string. Received " + t[0]);
            if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
              var n = t.shift();
              t[0] = n + t[0];
            }
            t[0].match(/^file:\/\/\//)
              ? (t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///"))
              : (t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://"));
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              if ("string" != typeof r)
                throw new TypeError("Url must be a string. Received " + r);
              "" !== r &&
                (i > 0 && (r = r.replace(/^[\/]+/, "")),
                (r =
                  i < t.length - 1
                    ? r.replace(/[\/]+$/, "")
                    : r.replace(/[\/]+$/, "/")),
                e.push(r));
            }
            var o = e.join("/"),
              a = (o = o.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
            return (o = a.shift() + (a.length > 0 ? "?" : "") + a.join("&"));
          }
          return function () {
            return t(
              "object" == typeof arguments[0]
                ? arguments[0]
                : [].slice.call(arguments)
            );
          };
        }),
          t.exports
            ? (t.exports = o())
            : void 0 ===
                (r = "function" == typeof (i = o) ? i.call(e, n, e, t) : i) ||
              (t.exports = r);
      },
    },
    e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { exports: {} });
    return t[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      var e = function () {
        return (e =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      };
      function i(t, e, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function a(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? r(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          u((i = i.apply(t, e || [])).next());
        });
      }
      function r(t, e) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((r = i.return) && r.call(i), 0)
                          : i.next) &&
                      !(r = r.call(i, o[1])).done)
                  )
                    return r;
                  switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                    case 0:
                    case 1:
                      r = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((r = a.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        (a.label = r[1]), (r = o);
                        break;
                      }
                      if (r && a.label < r[2]) {
                        (a.label = r[2]), a.ops.push(o);
                        break;
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (t) {
                  (o = [6, t]), (i = 0);
                } finally {
                  n = r = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      function o(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          i = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && i >= t.length && (t = void 0),
                { value: t && t[i++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var i,
          r,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
            a.push(i.value);
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return a;
      }
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(a(arguments[e]));
        return t;
      }
      var u = function (t) {
        for (var e = [], n = 0, i = 0; i < t.length; i++) {
          var r = t.charCodeAt(i);
          r < 128
            ? (e[n++] = r)
            : r < 2048
            ? ((e[n++] = (r >> 6) | 192), (e[n++] = (63 & r) | 128))
            : 55296 == (64512 & r) &&
              i + 1 < t.length &&
              56320 == (64512 & t.charCodeAt(i + 1))
            ? ((r = 65536 + ((1023 & r) << 10) + (1023 & t.charCodeAt(++i))),
              (e[n++] = (r >> 18) | 240),
              (e[n++] = ((r >> 12) & 63) | 128),
              (e[n++] = ((r >> 6) & 63) | 128),
              (e[n++] = (63 & r) | 128))
            : ((e[n++] = (r >> 12) | 224),
              (e[n++] = ((r >> 6) & 63) | 128),
              (e[n++] = (63 & r) | 128));
        }
        return e;
      };
      function c(t, e) {
        if (!(e instanceof Object)) return e;
        switch (e.constructor) {
          case Date:
            return new Date(e.getTime());
          case Object:
            void 0 === t && (t = {});
            break;
          case Array:
            t = [];
            break;
          default:
            return e;
        }
        for (var n in e)
          e.hasOwnProperty(n) && "__proto__" !== n && (t[n] = c(t[n], e[n]));
        return t;
      }
      var h = (function () {
        function t() {
          var t = this;
          (this.reject = function () {}),
            (this.resolve = function () {}),
            (this.promise = new Promise(function (e, n) {
              (t.resolve = e), (t.reject = n);
            }));
        }
        return (
          (t.prototype.wrapCallback = function (t) {
            var e = this;
            return function (n, i) {
              n ? e.reject(n) : e.resolve(i),
                "function" == typeof t &&
                  (e.promise.catch(function () {}),
                  1 === t.length ? t(n) : t(n, i));
            };
          }),
          t
        );
      })();
      function l() {
        try {
          return (
            "[object process]" === Object.prototype.toString.call(n.g.process)
          );
        } catch (t) {
          return !1;
        }
      }
      var f = (function (e) {
          function n(t, i, r) {
            var o = e.call(this, i) || this;
            return (
              (o.code = t),
              (o.customData = r),
              (o.name = "FirebaseError"),
              Object.setPrototypeOf(o, n.prototype),
              Error.captureStackTrace &&
                Error.captureStackTrace(o, p.prototype.create),
              o
            );
          }
          return (
            (function (e, n) {
              function i() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            })(n, e),
            n
          );
        })(Error),
        p = (function () {
          function t(t, e, n) {
            (this.service = t), (this.serviceName = e), (this.errors = n);
          }
          return (
            (t.prototype.create = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = e[0] || {},
                r = this.service + "/" + t,
                o = this.errors[t],
                a = o ? d(o, i) : "Error",
                s = this.serviceName + ": " + a + " (" + r + ").",
                u = new f(r, s, i);
              return u;
            }),
            t
          );
        })();
      function d(t, e) {
        return t.replace(v, function (t, n) {
          var i = e[n];
          return null != i ? String(i) : "<" + n + "?>";
        });
      }
      var v = /\{\$([^}]+)}/g;
      function m(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      !(function () {
        function t() {
          (this.chain_ = []),
            (this.buf_ = []),
            (this.W_ = []),
            (this.pad_ = []),
            (this.inbuf_ = 0),
            (this.total_ = 0),
            (this.blockSize = 64),
            (this.pad_[0] = 128);
          for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
          this.reset();
        }
        (t.prototype.reset = function () {
          (this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0);
        }),
          (t.prototype.compress_ = function (t, e) {
            e || (e = 0);
            var n = this.W_;
            if ("string" == typeof t)
              for (var i = 0; i < 16; i++)
                (n[i] =
                  (t.charCodeAt(e) << 24) |
                  (t.charCodeAt(e + 1) << 16) |
                  (t.charCodeAt(e + 2) << 8) |
                  t.charCodeAt(e + 3)),
                  (e += 4);
            else
              for (i = 0; i < 16; i++)
                (n[i] =
                  (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]),
                  (e += 4);
            for (i = 16; i < 80; i++) {
              var r = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
              n[i] = 4294967295 & ((r << 1) | (r >>> 31));
            }
            var o,
              a,
              s = this.chain_[0],
              u = this.chain_[1],
              c = this.chain_[2],
              h = this.chain_[3],
              l = this.chain_[4];
            for (i = 0; i < 80; i++) {
              i < 40
                ? i < 20
                  ? ((o = h ^ (u & (c ^ h))), (a = 1518500249))
                  : ((o = u ^ c ^ h), (a = 1859775393))
                : i < 60
                ? ((o = (u & c) | (h & (u | c))), (a = 2400959708))
                : ((o = u ^ c ^ h), (a = 3395469782));
              r = (((s << 5) | (s >>> 27)) + o + l + a + n[i]) & 4294967295;
              (l = h),
                (h = c),
                (c = 4294967295 & ((u << 30) | (u >>> 2))),
                (u = s),
                (s = r);
            }
            (this.chain_[0] = (this.chain_[0] + s) & 4294967295),
              (this.chain_[1] = (this.chain_[1] + u) & 4294967295),
              (this.chain_[2] = (this.chain_[2] + c) & 4294967295),
              (this.chain_[3] = (this.chain_[3] + h) & 4294967295),
              (this.chain_[4] = (this.chain_[4] + l) & 4294967295);
          }),
          (t.prototype.update = function (t, e) {
            if (null != t) {
              void 0 === e && (e = t.length);
              for (
                var n = e - this.blockSize,
                  i = 0,
                  r = this.buf_,
                  o = this.inbuf_;
                i < e;

              ) {
                if (0 === o)
                  for (; i <= n; ) this.compress_(t, i), (i += this.blockSize);
                if ("string" == typeof t) {
                  for (; i < e; )
                    if (
                      ((r[o] = t.charCodeAt(i)), ++i, ++o === this.blockSize)
                    ) {
                      this.compress_(r), (o = 0);
                      break;
                    }
                } else
                  for (; i < e; )
                    if (((r[o] = t[i]), ++i, ++o === this.blockSize)) {
                      this.compress_(r), (o = 0);
                      break;
                    }
              }
              (this.inbuf_ = o), (this.total_ += e);
            }
          }),
          (t.prototype.digest = function () {
            var t = [],
              e = 8 * this.total_;
            this.inbuf_ < 56
              ? this.update(this.pad_, 56 - this.inbuf_)
              : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            for (var n = this.blockSize - 1; n >= 56; n--)
              (this.buf_[n] = 255 & e), (e /= 256);
            this.compress_(this.buf_);
            var i = 0;
            for (n = 0; n < 5; n++)
              for (var r = 24; r >= 0; r -= 8)
                (t[i] = (this.chain_[n] >> r) & 255), ++i;
            return t;
          });
      })();
      function g(t, e) {
        var n = new b(t, e);
        return n.subscribe.bind(n);
      }
      var b = (function () {
        function t(t, e) {
          var n = this;
          (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = e),
            this.task
              .then(function () {
                t(n);
              })
              .catch(function (t) {
                n.error(t);
              });
        }
        return (
          (t.prototype.next = function (t) {
            this.forEachObserver(function (e) {
              e.next(t);
            });
          }),
          (t.prototype.error = function (t) {
            this.forEachObserver(function (e) {
              e.error(t);
            }),
              this.close(t);
          }),
          (t.prototype.complete = function () {
            this.forEachObserver(function (t) {
              t.complete();
            }),
              this.close();
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var i,
              r = this;
            if (void 0 === t && void 0 === e && void 0 === n)
              throw new Error("Missing Observer.");
            void 0 ===
              (i = (function (t, e) {
                if ("object" != typeof t || null === t) return !1;
                for (var n = 0, i = e; n < i.length; n++) {
                  var r = i[n];
                  if (r in t && "function" == typeof t[r]) return !0;
                }
                return !1;
              })(t, ["next", "error", "complete"])
                ? t
                : { next: t, error: e, complete: n }).next && (i.next = y),
              void 0 === i.error && (i.error = y),
              void 0 === i.complete && (i.complete = y);
            var o = this.unsubscribeOne.bind(this, this.observers.length);
            return (
              this.finalized &&
                this.task.then(function () {
                  try {
                    r.finalError ? i.error(r.finalError) : i.complete();
                  } catch (t) {}
                }),
              this.observers.push(i),
              o
            );
          }),
          (t.prototype.unsubscribeOne = function (t) {
            void 0 !== this.observers &&
              void 0 !== this.observers[t] &&
              (delete this.observers[t],
              (this.observerCount -= 1),
              0 === this.observerCount &&
                void 0 !== this.onNoObservers &&
                this.onNoObservers(this));
          }),
          (t.prototype.forEachObserver = function (t) {
            if (!this.finalized)
              for (var e = 0; e < this.observers.length; e++)
                this.sendOne(e, t);
          }),
          (t.prototype.sendOne = function (t, e) {
            var n = this;
            this.task.then(function () {
              if (void 0 !== n.observers && void 0 !== n.observers[t])
                try {
                  e(n.observers[t]);
                } catch (t) {
                  "undefined" != typeof console &&
                    console.error &&
                    console.error(t);
                }
            });
          }),
          (t.prototype.close = function (t) {
            var e = this;
            this.finalized ||
              ((this.finalized = !0),
              void 0 !== t && (this.finalError = t),
              this.task.then(function () {
                (e.observers = void 0), (e.onNoObservers = void 0);
              }));
          }),
          t
        );
      })();
      function y() {}
      var w = (function () {
          function t(t, e, n) {
            (this.name = t),
              (this.instanceFactory = e),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY");
          }
          return (
            (t.prototype.setInstantiationMode = function (t) {
              return (this.instantiationMode = t), this;
            }),
            (t.prototype.setMultipleInstances = function (t) {
              return (this.multipleInstances = t), this;
            }),
            (t.prototype.setServiceProps = function (t) {
              return (this.serviceProps = t), this;
            }),
            t
          );
        })(),
        I = "[DEFAULT]",
        E = (function () {
          function t(t, e) {
            (this.name = t),
              (this.container = e),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map());
          }
          return (
            (t.prototype.get = function (t) {
              void 0 === t && (t = I);
              var e = this.normalizeInstanceIdentifier(t);
              if (!this.instancesDeferred.has(e)) {
                var n = new h();
                this.instancesDeferred.set(e, n);
                try {
                  var i = this.getOrInitializeService(e);
                  i && n.resolve(i);
                } catch (t) {}
              }
              return this.instancesDeferred.get(e).promise;
            }),
            (t.prototype.getImmediate = function (t) {
              var n = e({ identifier: I, optional: !1 }, t),
                i = n.identifier,
                r = n.optional,
                o = this.normalizeInstanceIdentifier(i);
              try {
                var a = this.getOrInitializeService(o);
                if (!a) {
                  if (r) return null;
                  throw Error("Service " + this.name + " is not available");
                }
                return a;
              } catch (t) {
                if (r) return null;
                throw t;
              }
            }),
            (t.prototype.getComponent = function () {
              return this.component;
            }),
            (t.prototype.setComponent = function (t) {
              var e, n;
              if (t.name !== this.name)
                throw Error(
                  "Mismatching Component " +
                    t.name +
                    " for Provider " +
                    this.name +
                    "."
                );
              if (this.component)
                throw Error(
                  "Component for " + this.name + " has already been provided"
                );
              if (
                ((this.component = t),
                (function (t) {
                  return "EAGER" === t.instantiationMode;
                })(t))
              )
                try {
                  this.getOrInitializeService(I);
                } catch (t) {}
              try {
                for (
                  var i = o(this.instancesDeferred.entries()), r = i.next();
                  !r.done;
                  r = i.next()
                ) {
                  var s = a(r.value, 2),
                    u = s[0],
                    c = s[1],
                    h = this.normalizeInstanceIdentifier(u);
                  try {
                    var l = this.getOrInitializeService(h);
                    c.resolve(l);
                  } catch (t) {}
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.clearInstance = function (t) {
              void 0 === t && (t = I),
                this.instancesDeferred.delete(t),
                this.instances.delete(t);
            }),
            (t.prototype.delete = function () {
              return i(this, void 0, void 0, function () {
                var t;
                return r(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            s(
                              t
                                .filter(function (t) {
                                  return "INTERNAL" in t;
                                })
                                .map(function (t) {
                                  return t.INTERNAL.delete();
                                }),
                              t
                                .filter(function (t) {
                                  return "_delete" in t;
                                })
                                .map(function (t) {
                                  return t._delete();
                                })
                            )
                          ),
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.isComponentSet = function () {
              return null != this.component;
            }),
            (t.prototype.getOrInitializeService = function (t) {
              var e = this.instances.get(t);
              return (
                !e &&
                  this.component &&
                  ((e = this.component.instanceFactory(
                    this.container,
                    (function (t) {
                      return t === I ? void 0 : t;
                    })(t)
                  )),
                  this.instances.set(t, e)),
                e || null
              );
            }),
            (t.prototype.normalizeInstanceIdentifier = function (t) {
              return this.component
                ? this.component.multipleInstances
                  ? t
                  : I
                : t;
            }),
            t
          );
        })();
      var T,
        A = (function () {
          function t(t) {
            (this.name = t), (this.providers = new Map());
          }
          return (
            (t.prototype.addComponent = function (t) {
              var e = this.getProvider(t.name);
              if (e.isComponentSet())
                throw new Error(
                  "Component " +
                    t.name +
                    " has already been registered with " +
                    this.name
                );
              e.setComponent(t);
            }),
            (t.prototype.addOrOverwriteComponent = function (t) {
              this.getProvider(t.name).isComponentSet() &&
                this.providers.delete(t.name),
                this.addComponent(t);
            }),
            (t.prototype.getProvider = function (t) {
              if (this.providers.has(t)) return this.providers.get(t);
              var e = new E(t, this);
              return this.providers.set(t, e), e;
            }),
            (t.prototype.getProviders = function () {
              return Array.from(this.providers.values());
            }),
            t
          );
        })();
      function S() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var i = Array(t),
          r = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++)
            i[r] = o[a];
        return i;
      }
      var k,
        N = [];
      !(function (t) {
        (t[(t.DEBUG = 0)] = "DEBUG"),
          (t[(t.VERBOSE = 1)] = "VERBOSE"),
          (t[(t.INFO = 2)] = "INFO"),
          (t[(t.WARN = 3)] = "WARN"),
          (t[(t.ERROR = 4)] = "ERROR"),
          (t[(t.SILENT = 5)] = "SILENT");
      })(k || (k = {}));
      var _,
        O = {
          debug: k.DEBUG,
          verbose: k.VERBOSE,
          info: k.INFO,
          warn: k.WARN,
          error: k.ERROR,
          silent: k.SILENT,
        },
        R = k.INFO,
        C =
          (((T = {})[k.DEBUG] = "log"),
          (T[k.VERBOSE] = "log"),
          (T[k.INFO] = "info"),
          (T[k.WARN] = "warn"),
          (T[k.ERROR] = "error"),
          T),
        P = function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          if (!(e < t.logLevel)) {
            var r = new Date().toISOString(),
              o = C[e];
            if (!o)
              throw new Error(
                "Attempted to log a message with an invalid logType (value: " +
                  e +
                  ")"
              );
            console[o].apply(console, S(["[" + r + "]  " + t.name + ":"], n));
          }
        },
        D = (function () {
          function t(t) {
            (this.name = t),
              (this._logLevel = R),
              (this._logHandler = P),
              (this._userLogHandler = null),
              N.push(this);
          }
          return (
            Object.defineProperty(t.prototype, "logLevel", {
              get: function () {
                return this._logLevel;
              },
              set: function (t) {
                if (!(t in k))
                  throw new TypeError(
                    'Invalid value "' + t + '" assigned to `logLevel`'
                  );
                this._logLevel = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setLogLevel = function (t) {
              this._logLevel = "string" == typeof t ? O[t] : t;
            }),
            Object.defineProperty(t.prototype, "logHandler", {
              get: function () {
                return this._logHandler;
              },
              set: function (t) {
                if ("function" != typeof t)
                  throw new TypeError(
                    "Value assigned to `logHandler` must be a function"
                  );
                this._logHandler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "userLogHandler", {
              get: function () {
                return this._userLogHandler;
              },
              set: function (t) {
                this._userLogHandler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, S([this, k.DEBUG], t)),
                this._logHandler.apply(this, S([this, k.DEBUG], t));
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, S([this, k.VERBOSE], t)),
                this._logHandler.apply(this, S([this, k.VERBOSE], t));
            }),
            (t.prototype.info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, S([this, k.INFO], t)),
                this._logHandler.apply(this, S([this, k.INFO], t));
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, S([this, k.WARN], t)),
                this._logHandler.apply(this, S([this, k.WARN], t));
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, S([this, k.ERROR], t)),
                this._logHandler.apply(this, S([this, k.ERROR], t));
            }),
            t
          );
        })();
      function L(t) {
        N.forEach(function (e) {
          e.setLogLevel(t);
        });
      }
      var x,
        j =
          (((_ = {})["no-app"] =
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (_["bad-app-name"] = "Illegal App name: '{$appName}"),
          (_["duplicate-app"] =
            "Firebase App named '{$appName}' already exists"),
          (_["app-deleted"] =
            "Firebase App named '{$appName}' already deleted"),
          (_["invalid-app-argument"] =
            "firebase.{$appName}() takes either no argument or a Firebase App instance."),
          (_["invalid-log-argument"] =
            "First argument to `onLog` must be null or a function."),
          _),
        M = new p("app", "Firebase", j),
        U = "@firebase/app",
        F = "[DEFAULT]",
        V =
          (((x = {})[U] = "fire-core"),
          (x["@firebase/analytics"] = "fire-analytics"),
          (x["@firebase/auth"] = "fire-auth"),
          (x["@firebase/database"] = "fire-rtdb"),
          (x["@firebase/functions"] = "fire-fn"),
          (x["@firebase/installations"] = "fire-iid"),
          (x["@firebase/messaging"] = "fire-fcm"),
          (x["@firebase/performance"] = "fire-perf"),
          (x["@firebase/remote-config"] = "fire-rc"),
          (x["@firebase/storage"] = "fire-gcs"),
          (x["@firebase/firestore"] = "fire-fst"),
          (x["fire-js"] = "fire-js"),
          (x["firebase-wrapper"] = "fire-js-all"),
          x),
        H = new D("@firebase/app"),
        q = (function () {
          function t(t, e, n) {
            var i,
              r,
              a = this;
            (this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = e.name),
              (this.automaticDataCollectionEnabled_ =
                e.automaticDataCollectionEnabled || !1),
              (this.options_ = c(void 0, t)),
              (this.container = new A(e.name)),
              this._addComponent(
                new w(
                  "app",
                  function () {
                    return a;
                  },
                  "PUBLIC"
                )
              );
            try {
              for (
                var s = o(this.firebase_.INTERNAL.components.values()),
                  u = s.next();
                !u.done;
                u = s.next()
              ) {
                var h = u.value;
                this._addComponent(h);
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                u && !u.done && (r = s.return) && r.call(s);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          return (
            Object.defineProperty(
              t.prototype,
              "automaticDataCollectionEnabled",
              {
                get: function () {
                  return (
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                  );
                },
                set: function (t) {
                  this.checkDestroyed_(),
                    (this.automaticDataCollectionEnabled_ = t);
                },
                enumerable: !1,
                configurable: !0,
              }
            ),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return this.checkDestroyed_(), this.name_;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "options", {
              get: function () {
                return this.checkDestroyed_(), this.options_;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.delete = function () {
              var t = this;
              return new Promise(function (e) {
                t.checkDestroyed_(), e();
              })
                .then(function () {
                  return (
                    t.firebase_.INTERNAL.removeApp(t.name_),
                    Promise.all(
                      t.container.getProviders().map(function (t) {
                        return t.delete();
                      })
                    )
                  );
                })
                .then(function () {
                  t.isDeleted_ = !0;
                });
            }),
            (t.prototype._getService = function (t, e) {
              return (
                void 0 === e && (e = F),
                this.checkDestroyed_(),
                this.container.getProvider(t).getImmediate({ identifier: e })
              );
            }),
            (t.prototype._removeServiceInstance = function (t, e) {
              void 0 === e && (e = F),
                this.container.getProvider(t).clearInstance(e);
            }),
            (t.prototype._addComponent = function (t) {
              try {
                this.container.addComponent(t);
              } catch (e) {
                H.debug(
                  "Component " +
                    t.name +
                    " failed to register with FirebaseApp " +
                    this.name,
                  e
                );
              }
            }),
            (t.prototype._addOrOverwriteComponent = function (t) {
              this.container.addOrOverwriteComponent(t);
            }),
            (t.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_)
                throw M.create("app-deleted", { appName: this.name_ });
            }),
            t
          );
        })();
      (q.prototype.name && q.prototype.options) ||
        q.prototype.delete ||
        console.log("dc");
      function B(t) {
        var e = {},
          n = new Map(),
          i = {
            __esModule: !0,
            initializeApp: function (n, r) {
              void 0 === r && (r = {});
              if ("object" != typeof r || null === r) {
                r = { name: r };
              }
              var o = r;
              void 0 === o.name && (o.name = F);
              var a = o.name;
              if ("string" != typeof a || !a)
                throw M.create("bad-app-name", { appName: String(a) });
              if (m(e, a)) throw M.create("duplicate-app", { appName: a });
              var s = new t(n, o, i);
              return (e[a] = s), s;
            },
            app: r,
            registerVersion: function (t, e, n) {
              var i,
                r = null !== (i = V[t]) && void 0 !== i ? i : t;
              n && (r += "-" + n);
              var o = r.match(/\s|\//),
                s = e.match(/\s|\//);
              if (o || s) {
                var u = [
                  'Unable to register library "' +
                    r +
                    '" with version "' +
                    e +
                    '":',
                ];
                return (
                  o &&
                    u.push(
                      'library name "' +
                        r +
                        '" contains illegal characters (whitespace or "/")'
                    ),
                  o && s && u.push("and"),
                  s &&
                    u.push(
                      'version name "' +
                        e +
                        '" contains illegal characters (whitespace or "/")'
                    ),
                  void H.warn(u.join(" "))
                );
              }
              a(
                new w(
                  r + "-version",
                  function () {
                    return { library: r, version: e };
                  },
                  "VERSION"
                )
              );
            },
            setLogLevel: L,
            onLog: function (t, e) {
              if (null !== t && "function" != typeof t)
                throw M.create("invalid-log-argument", { appName: name });
              !(function (t, e) {
                for (
                  var n = function (n) {
                      var i = null;
                      e && e.level && (i = O[e.level]),
                        (n.userLogHandler =
                          null === t
                            ? null
                            : function (e, n) {
                                for (
                                  var r = [], o = 2;
                                  o < arguments.length;
                                  o++
                                )
                                  r[o - 2] = arguments[o];
                                var a = r
                                  .map(function (t) {
                                    if (null == t) return null;
                                    if ("string" == typeof t) return t;
                                    if (
                                      "number" == typeof t ||
                                      "boolean" == typeof t
                                    )
                                      return t.toString();
                                    if (t instanceof Error) return t.message;
                                    try {
                                      return JSON.stringify(t);
                                    } catch (t) {
                                      return null;
                                    }
                                  })
                                  .filter(function (t) {
                                    return t;
                                  })
                                  .join(" ");
                                n >= (null != i ? i : e.logLevel) &&
                                  t({
                                    level: k[n].toLowerCase(),
                                    message: a,
                                    args: r,
                                    type: e.name,
                                  });
                              });
                    },
                    i = 0,
                    r = N;
                  i < r.length;
                  i++
                )
                  n(r[i]);
              })(t, e);
            },
            apps: null,
            SDK_VERSION: "8.0.1",
            INTERNAL: {
              registerComponent: a,
              removeApp: function (t) {
                delete e[t];
              },
              components: n,
              useAsService: function (t, e) {
                if ("serverAuth" === e) return null;
                return e;
              },
            },
          };
        function r(t) {
          if (!m(e, (t = t || F))) throw M.create("no-app", { appName: t });
          return e[t];
        }
        function a(a) {
          var s,
            u,
            h = a.name;
          if (n.has(h))
            return (
              H.debug(
                "There were multiple attempts to register component " + h + "."
              ),
              "PUBLIC" === a.type ? i[h] : null
            );
          if ((n.set(h, a), "PUBLIC" === a.type)) {
            var l = function (t) {
              if ((void 0 === t && (t = r()), "function" != typeof t[h]))
                throw M.create("invalid-app-argument", { appName: h });
              return t[h]();
            };
            void 0 !== a.serviceProps && c(l, a.serviceProps),
              (i[h] = l),
              (t.prototype[h] = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = this._getService.bind(this, h);
                return n.apply(this, a.multipleInstances ? t : []);
              });
          }
          try {
            for (
              var f = o(Object.keys(e)), p = f.next();
              !p.done;
              p = f.next()
            ) {
              var d = p.value;
              e[d]._addComponent(a);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              p && !p.done && (u = f.return) && u.call(f);
            } finally {
              if (s) throw s.error;
            }
          }
          return "PUBLIC" === a.type ? i[h] : null;
        }
        return (
          (i.default = i),
          Object.defineProperty(i, "apps", {
            get: function () {
              return Object.keys(e).map(function (t) {
                return e[t];
              });
            },
          }),
          (r.App = t),
          i
        );
      }
      var K = (function t() {
          var n = B(q);
          return (
            (n.INTERNAL = e(e({}, n.INTERNAL), {
              createFirebaseNamespace: t,
              extendNamespace: function (t) {
                c(n, t);
              },
              createSubscribe: g,
              ErrorFactory: p,
              deepExtend: c,
            })),
            n
          );
        })(),
        G = (function () {
          function t(t) {
            this.container = t;
          }
          return (
            (t.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (t) {
                  if (
                    (function (t) {
                      var e = t.getComponent();
                      return "VERSION" === (null == e ? void 0 : e.type);
                    })(t)
                  ) {
                    var e = t.getImmediate();
                    return e.library + "/" + e.version;
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .join(" ");
            }),
            t
          );
        })();
      if (
        "object" == typeof self &&
        self.self === self &&
        void 0 !== self.firebase
      ) {
        H.warn(
          "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
        );
        var W = self.firebase.SDK_VERSION;
        W &&
          W.indexOf("LITE") >= 0 &&
          H.warn(
            "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
          );
      }
      var z = K.initializeApp;
      K.initializeApp = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          l() &&
            H.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
            ),
          z.apply(void 0, t)
        );
      };
      var X = K;
      !(function (t, e) {
        t.INTERNAL.registerComponent(
          new w(
            "platform-logger",
            function (t) {
              return new G(t);
            },
            "PRIVATE"
          )
        ),
          t.registerVersion(U, "0.6.13", e),
          t.registerVersion("fire-js", "");
      })(X);
      const J = X;
      J.registerVersion("firebase", "8.1.1", "app"),
        function () {
          var t,
            e =
              "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (t, e, n) {
                    t != Array.prototype &&
                      t != Object.prototype &&
                      (t[e] = n.value);
                  };
          var i = (function (t) {
            t = [
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof n.g && n.g,
              t,
            ];
            for (var e = 0; e < t.length; ++e) {
              var i = t[e];
              if (i && i.Math == Math) return i;
            }
            return globalThis;
          })(this);
          function r(t) {
            var e = 0;
            return function () {
              return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
            };
          }
          function o(t) {
            var e =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              t[Symbol.iterator];
            return e ? e.call(t) : { next: r(t) };
          }
          !(function (t, n) {
            if (n) {
              var r = i;
              t = t.split(".");
              for (var o = 0; o < t.length - 1; o++) {
                var a = t[o];
                a in r || (r[a] = {}), (r = r[a]);
              }
              (n = n((o = r[(t = t[t.length - 1])]))) != o &&
                null != n &&
                e(r, t, { configurable: !0, writable: !0, value: n });
            }
          })("Promise", function (t) {
            function e(t) {
              (this.b = 0), (this.c = void 0), (this.a = []);
              var e = this.f();
              try {
                t(e.resolve, e.reject);
              } catch (t) {
                e.reject(t);
              }
            }
            function n() {
              this.a = null;
            }
            function r(t) {
              return t instanceof e
                ? t
                : new e(function (e) {
                    e(t);
                  });
            }
            if (t) return t;
            n.prototype.b = function (t) {
              if (null == this.a) {
                this.a = [];
                var e = this;
                this.c(function () {
                  e.g();
                });
              }
              this.a.push(t);
            };
            var a = i.setTimeout;
            (n.prototype.c = function (t) {
              a(t, 0);
            }),
              (n.prototype.g = function () {
                for (; this.a && this.a.length; ) {
                  var t = this.a;
                  this.a = [];
                  for (var e = 0; e < t.length; ++e) {
                    var n = t[e];
                    t[e] = null;
                    try {
                      n();
                    } catch (t) {
                      this.f(t);
                    }
                  }
                }
                this.a = null;
              }),
              (n.prototype.f = function (t) {
                this.c(function () {
                  throw t;
                });
              }),
              (e.prototype.f = function () {
                function t(t) {
                  return function (i) {
                    n || ((n = !0), t.call(e, i));
                  };
                }
                var e = this,
                  n = !1;
                return { resolve: t(this.v), reject: t(this.g) };
              }),
              (e.prototype.v = function (t) {
                if (t === this)
                  this.g(new TypeError("A Promise cannot resolve to itself"));
                else if (t instanceof e) this.o(t);
                else {
                  t: switch (typeof t) {
                    case "object":
                      var n = null != t;
                      break t;
                    case "function":
                      n = !0;
                      break t;
                    default:
                      n = !1;
                  }
                  n ? this.m(t) : this.h(t);
                }
              }),
              (e.prototype.m = function (t) {
                var e = void 0;
                try {
                  e = t.then;
                } catch (t) {
                  return void this.g(t);
                }
                "function" == typeof e ? this.u(e, t) : this.h(t);
              }),
              (e.prototype.g = function (t) {
                this.i(2, t);
              }),
              (e.prototype.h = function (t) {
                this.i(1, t);
              }),
              (e.prototype.i = function (t, e) {
                if (0 != this.b)
                  throw Error(
                    "Cannot settle(" +
                      t +
                      ", " +
                      e +
                      "): Promise already settled in state" +
                      this.b
                  );
                (this.b = t), (this.c = e), this.l();
              }),
              (e.prototype.l = function () {
                if (null != this.a) {
                  for (var t = 0; t < this.a.length; ++t) s.b(this.a[t]);
                  this.a = null;
                }
              });
            var s = new n();
            return (
              (e.prototype.o = function (t) {
                var e = this.f();
                t.Pa(e.resolve, e.reject);
              }),
              (e.prototype.u = function (t, e) {
                var n = this.f();
                try {
                  t.call(e, n.resolve, n.reject);
                } catch (t) {
                  n.reject(t);
                }
              }),
              (e.prototype.then = function (t, n) {
                function i(t, e) {
                  return "function" == typeof t
                    ? function (e) {
                        try {
                          r(t(e));
                        } catch (t) {
                          o(t);
                        }
                      }
                    : e;
                }
                var r,
                  o,
                  a = new e(function (t, e) {
                    (r = t), (o = e);
                  });
                return this.Pa(i(t, r), i(n, o)), a;
              }),
              (e.prototype.catch = function (t) {
                return this.then(void 0, t);
              }),
              (e.prototype.Pa = function (t, e) {
                function n() {
                  switch (i.b) {
                    case 1:
                      t(i.c);
                      break;
                    case 2:
                      e(i.c);
                      break;
                    default:
                      throw Error("Unexpected state: " + i.b);
                  }
                }
                var i = this;
                null == this.a ? s.b(n) : this.a.push(n);
              }),
              (e.resolve = r),
              (e.reject = function (t) {
                return new e(function (e, n) {
                  n(t);
                });
              }),
              (e.race = function (t) {
                return new e(function (e, n) {
                  for (var i = o(t), a = i.next(); !a.done; a = i.next())
                    r(a.value).Pa(e, n);
                });
              }),
              (e.all = function (t) {
                var n = o(t),
                  i = n.next();
                return i.done
                  ? r([])
                  : new e(function (t, e) {
                      function o(e) {
                        return function (n) {
                          (a[e] = n), 0 == --s && t(a);
                        };
                      }
                      var a = [],
                        s = 0;
                      do {
                        a.push(void 0),
                          s++,
                          r(i.value).Pa(o(a.length - 1), e),
                          (i = n.next());
                      } while (!i.done);
                    });
              }),
              e
            );
          });
          var a = a || {},
            s = this || self,
            u = /^[\w+/_-]+[=]{0,2}$/,
            c = null;
          function h(t) {
            return (t = t.querySelector && t.querySelector("script[nonce]")) &&
              (t = t.nonce || t.getAttribute("nonce")) &&
              u.test(t)
              ? t
              : "";
          }
          function l() {}
          function f(t) {
            var e = typeof t;
            return "object" != e
              ? e
              : t
              ? Array.isArray(t)
                ? "array"
                : e
              : "null";
          }
          function p(t) {
            var e = f(t);
            return (
              "array" == e || ("object" == e && "number" == typeof t.length)
            );
          }
          function d(t) {
            return "function" == f(t);
          }
          function v(t) {
            var e = typeof t;
            return ("object" == e && null != t) || "function" == e;
          }
          function m(t) {
            return (
              (Object.prototype.hasOwnProperty.call(t, g) && t[g]) ||
              (t[g] = ++b)
            );
          }
          var g = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
            b = 0;
          function y(t, e, n) {
            return t.call.apply(t.bind, arguments);
          }
          function w(t, e, n) {
            if (!t) throw Error();
            if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2);
              return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, i), t.apply(e, n);
              };
            }
            return function () {
              return t.apply(e, arguments);
            };
          }
          function I(t, e, n) {
            return (I =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? y
                : w).apply(null, arguments);
          }
          function E(t, e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function () {
              var e = n.slice();
              return e.push.apply(e, arguments), t.apply(this, e);
            };
          }
          var T = Date.now;
          function A(t, e) {
            function n() {}
            (n.prototype = e.prototype),
              (t.$a = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function S(t) {
            return t;
          }
          function k(t, e, n) {
            (this.code = O + t),
              (this.message = e || R[t] || ""),
              (this.a = n || null);
          }
          function N(t) {
            var e = t && t.code;
            return e
              ? new k(e.substring(O.length), t.message, t.serverResponse)
              : null;
          }
          A(k, Error),
            (k.prototype.w = function () {
              var t = { code: this.code, message: this.message };
              return this.a && (t.serverResponse = this.a), t;
            }),
            (k.prototype.toJSON = function () {
              return this.w();
            });
          var _,
            O = "auth/",
            R = {
              "admin-restricted-operation":
                "This operation is restricted to administrators only.",
              "argument-error": "",
              "app-not-authorized":
                "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              "app-not-installed":
                "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
              "captcha-check-failed":
                "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
              "code-expired":
                "The SMS code has expired. Please re-send the verification code to try again.",
              "cordova-not-ready": "Cordova framework is not ready.",
              "cors-unsupported": "This browser is not supported.",
              "credential-already-in-use":
                "This credential is already associated with a different user account.",
              "custom-token-mismatch":
                "The custom token corresponds to a different audience.",
              "requires-recent-login":
                "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
              "dynamic-link-not-activated":
                "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
              "email-change-needs-verification":
                "Multi-factor users must always have a verified email.",
              "email-already-in-use":
                "The email address is already in use by another account.",
              "expired-action-code": "The action code has expired. ",
              "cancelled-popup-request":
                "This operation has been cancelled due to another conflicting popup being opened.",
              "internal-error": "An internal error has occurred.",
              "invalid-app-credential":
                "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
              "invalid-app-id":
                "The mobile app identifier is not registed for the current project.",
              "invalid-user-token":
                "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              "invalid-auth-event": "An internal error has occurred.",
              "invalid-verification-code":
                "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
              "invalid-continue-uri":
                "The continue URL provided in the request is invalid.",
              "invalid-cordova-configuration":
                "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
              "invalid-custom-token":
                "The custom token format is incorrect. Please check the documentation.",
              "invalid-dynamic-link-domain":
                "The provided dynamic link domain is not configured or authorized for the current project.",
              "invalid-email": "The email address is badly formatted.",
              "invalid-api-key":
                "Your API key is invalid, please check you have copied it correctly.",
              "invalid-cert-hash":
                "The SHA-1 certificate hash provided is invalid.",
              "invalid-credential":
                "The supplied auth credential is malformed or has expired.",
              "invalid-message-payload":
                "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-multi-factor-session":
                "The request does not contain a valid proof of first factor successful sign-in.",
              "invalid-oauth-provider":
                "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
              "invalid-oauth-client-id":
                "The OAuth client ID provided is either invalid or does not match the specified API key.",
              "unauthorized-domain":
                "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
              "invalid-action-code":
                "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
              "wrong-password":
                "The password is invalid or the user does not have a password.",
              "invalid-persistence-type":
                "The specified persistence type is invalid. It can only be local, session or none.",
              "invalid-phone-number":
                "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
              "invalid-provider-id": "The specified provider ID is invalid.",
              "invalid-recipient-email":
                "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
              "invalid-sender":
                "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-verification-id":
                "The verification ID used to create the phone auth credential is invalid.",
              "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
              "multi-factor-info-not-found":
                "The user does not have a second factor matching the identifier provided.",
              "multi-factor-auth-required":
                "Proof of ownership of a second factor is required to complete sign-in.",
              "missing-android-pkg-name":
                "An Android Package Name must be provided if the Android App is required to be installed.",
              "auth-domain-config-required":
                "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
              "missing-app-credential":
                "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
              "missing-verification-code":
                "The phone auth credential was created with an empty SMS verification code.",
              "missing-continue-uri":
                "A continue URL must be provided in the request.",
              "missing-iframe-start": "An internal error has occurred.",
              "missing-ios-bundle-id":
                "An iOS Bundle ID must be provided if an App Store ID is provided.",
              "missing-multi-factor-info":
                "No second factor identifier is provided.",
              "missing-multi-factor-session":
                "The request is missing proof of first factor successful sign-in.",
              "missing-or-invalid-nonce":
                "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
              "missing-phone-number":
                "To send verification codes, provide a phone number for the recipient.",
              "missing-verification-id":
                "The phone auth credential was created with an empty verification ID.",
              "app-deleted": "This instance of FirebaseApp has been deleted.",
              "account-exists-with-different-credential":
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
              "network-request-failed":
                "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
              "no-auth-event": "An internal error has occurred.",
              "no-such-provider":
                "User was not linked to an account with the given provider.",
              "null-user":
                "A null user object was provided as the argument for an operation which requires a non-null user object.",
              "operation-not-allowed":
                "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
              "operation-not-supported-in-this-environment":
                'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              "popup-blocked":
                "Unable to establish a connection with the popup. It may have been blocked by the browser.",
              "popup-closed-by-user":
                "The popup has been closed by the user before finalizing the operation.",
              "provider-already-linked":
                "User can only be linked to one identity for the given provider.",
              "quota-exceeded":
                "The project's quota for this operation has been exceeded.",
              "redirect-cancelled-by-user":
                "The redirect operation has been cancelled by the user before finalizing.",
              "redirect-operation-pending":
                "A redirect sign-in operation is already pending.",
              "rejected-credential":
                "The request contains malformed or mismatching credentials.",
              "second-factor-already-in-use":
                "The second factor is already enrolled on this account.",
              "maximum-second-factor-count-exceeded":
                "The maximum allowed number of second factors on a user has been exceeded.",
              "tenant-id-mismatch":
                "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: "The operation has timed out.",
              "user-token-expired":
                "The user's credential is no longer valid. The user must sign in again.",
              "too-many-requests":
                "We have blocked all requests from this device due to unusual activity. Try again later.",
              "unauthorized-continue-uri":
                "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
              "unsupported-first-factor":
                "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
              "unsupported-persistence-type":
                "The current environment does not support the specified persistence type.",
              "unsupported-tenant-operation":
                "This operation is not supported in a multi-tenant context.",
              "unverified-email": "The operation requires a verified email.",
              "user-cancelled":
                "The user did not grant your application the permissions it requested.",
              "user-not-found":
                "There is no user record corresponding to this identifier. The user may have been deleted.",
              "user-disabled":
                "The user account has been disabled by an administrator.",
              "user-mismatch":
                "The supplied credentials do not correspond to the previously signed in user.",
              "user-signed-out": "",
              "weak-password":
                "The password must be 6 characters long or more.",
              "web-storage-unsupported":
                "This browser is not supported or 3rd party cookies and data may be disabled.",
            },
            C = {
              kd: {
                Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "b",
              },
              rd: {
                Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ya: "https://securetoken.googleapis.com/v1/token",
                Va: "https://identitytoolkit.googleapis.com/v2/",
                id: "p",
              },
              td: {
                Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "s",
              },
              ud: {
                Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "t",
              },
            };
          function P(t) {
            for (var e in C)
              if (C[e].id === t)
                return {
                  firebaseEndpoint: (t = C[e]).Sa,
                  secureTokenEndpoint: t.Ya,
                  identityPlatformEndpoint: t.Va,
                };
            return null;
          }
          function D(t) {
            if (!t) return !1;
            try {
              return !!t.$goog_Thenable;
            } catch (t) {
              return !1;
            }
          }
          function L(t) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, L);
            else {
              var e = Error().stack;
              e && (this.stack = e);
            }
            t && (this.message = String(t));
          }
          function x(t, e) {
            for (
              var n = "", i = (t = t.split("%s")).length - 1, r = 0;
              r < i;
              r++
            )
              n += t[r] + (r < e.length ? e[r] : "%s");
            L.call(this, n + t[i]);
          }
          function j(t, e) {
            throw new x(
              "Failure" + (t ? ": " + t : ""),
              Array.prototype.slice.call(arguments, 1)
            );
          }
          function M(t, e) {
            (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
          }
          function U(t, e) {
            t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e));
          }
          function F() {
            this.b = this.a = null;
          }
          (_ = P("__EID__") ? "__EID__" : void 0),
            A(L, Error),
            (L.prototype.name = "CustomError"),
            A(x, L),
            (x.prototype.name = "AssertionError"),
            (M.prototype.get = function () {
              if (0 < this.b) {
                this.b--;
                var t = this.a;
                (this.a = t.next), (t.next = null);
              } else t = this.c();
              return t;
            });
          var V = new M(
            function () {
              return new q();
            },
            function (t) {
              t.reset();
            }
          );
          function H() {
            var t = Ie,
              e = null;
            return (
              t.a &&
                ((e = t.a),
                (t.a = t.a.next),
                t.a || (t.b = null),
                (e.next = null)),
              e
            );
          }
          function q() {
            this.next = this.b = this.a = null;
          }
          (F.prototype.add = function (t, e) {
            var n = V.get();
            n.set(t, e),
              this.b ? (this.b.next = n) : (this.a = n),
              (this.b = n);
          }),
            (q.prototype.set = function (t, e) {
              (this.a = t), (this.b = e), (this.next = null);
            }),
            (q.prototype.reset = function () {
              this.next = this.b = this.a = null;
            });
          var B = Array.prototype.indexOf
              ? function (t, e) {
                  return Array.prototype.indexOf.call(t, e, void 0);
                }
              : function (t, e) {
                  if ("string" == typeof t)
                    return "string" != typeof e || 1 != e.length
                      ? -1
                      : t.indexOf(e, 0);
                  for (var n = 0; n < t.length; n++)
                    if (n in t && t[n] === e) return n;
                  return -1;
                },
            K = Array.prototype.forEach
              ? function (t, e, n) {
                  Array.prototype.forEach.call(t, e, n);
                }
              : function (t, e, n) {
                  for (
                    var i = t.length,
                      r = "string" == typeof t ? t.split("") : t,
                      o = 0;
                    o < i;
                    o++
                  )
                    o in r && e.call(n, r[o], o, t);
                };
          var G = Array.prototype.filter
              ? function (t, e) {
                  return Array.prototype.filter.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = [],
                      r = 0,
                      o = "string" == typeof t ? t.split("") : t,
                      a = 0;
                    a < n;
                    a++
                  )
                    if (a in o) {
                      var s = o[a];
                      e.call(void 0, s, a, t) && (i[r++] = s);
                    }
                  return i;
                },
            W = Array.prototype.map
              ? function (t, e) {
                  return Array.prototype.map.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = Array(n),
                      r = "string" == typeof t ? t.split("") : t,
                      o = 0;
                    o < n;
                    o++
                  )
                    o in r && (i[o] = e.call(void 0, r[o], o, t));
                  return i;
                },
            z = Array.prototype.some
              ? function (t, e) {
                  return Array.prototype.some.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = "string" == typeof t ? t.split("") : t,
                      r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) return !0;
                  return !1;
                };
          function X(t, e) {
            return 0 <= B(t, e);
          }
          function Y(t, e) {
            var n;
            return (
              (n = 0 <= (e = B(t, e))) && Array.prototype.splice.call(t, e, 1),
              n
            );
          }
          function $(t, e) {
            !(function (t, e) {
              for (
                var n = "string" == typeof t ? t.split("") : t,
                  i = t.length - 1;
                0 <= i;
                --i
              )
                i in n && e.call(void 0, n[i], i, t);
            })(t, function (n, i) {
              e.call(void 0, n, i, t) &&
                1 == Array.prototype.splice.call(t, i, 1).length &&
                0;
            });
          }
          function Z(t) {
            return Array.prototype.concat.apply([], arguments);
          }
          function Q(t) {
            var e = t.length;
            if (0 < e) {
              for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
              return n;
            }
            return [];
          }
          var tt,
            et = String.prototype.trim
              ? function (t) {
                  return t.trim();
                }
              : function (t) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
                },
            nt = /&/g,
            it = /</g,
            rt = />/g,
            ot = /"/g,
            at = /'/g,
            st = /\x00/g,
            ut = /[\x00&<>"']/;
          function ct(t, e) {
            return -1 != t.indexOf(e);
          }
          function ht(t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          }
          t: {
            var lt = s.navigator;
            if (lt) {
              var ft = lt.userAgent;
              if (ft) {
                tt = ft;
                break t;
              }
            }
            tt = "";
          }
          function pt(t) {
            return ct(tt, t);
          }
          function dt(t, e) {
            for (var n in t) e.call(void 0, t[n], n, t);
          }
          function vt(t) {
            for (var e in t) return !1;
            return !0;
          }
          function mt(t) {
            var e,
              n = {};
            for (e in t) n[e] = t[e];
            return n;
          }
          var gt =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            );
          function bt(t, e) {
            for (var n, i, r = 1; r < arguments.length; r++) {
              for (n in (i = arguments[r])) t[n] = i[n];
              for (var o = 0; o < gt.length; o++)
                (n = gt[o]),
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
          }
          function yt(t, e) {
            t: {
              try {
                var n = t && t.ownerDocument,
                  i = n && (n.defaultView || n.parentWindow);
                if ((i = i || s).Element && i.Location) {
                  var r = i;
                  break t;
                }
              } catch (t) {}
              r = null;
            }
            if (
              r &&
              void 0 !== r[e] &&
              (!t ||
                (!(t instanceof r[e]) &&
                  (t instanceof r.Location || t instanceof r.Element)))
            ) {
              if (v(t))
                try {
                  var o =
                    t.constructor.displayName ||
                    t.constructor.name ||
                    Object.prototype.toString.call(t);
                } catch (t) {
                  o = "<object could not be stringified>";
                }
              else
                o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
              j(
                "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                e,
                o
              );
            }
          }
          function wt(t, e) {
            (this.a = (t === At && e) || ""), (this.b = Tt);
          }
          function It(t) {
            return t instanceof wt && t.constructor === wt && t.b === Tt
              ? t.a
              : (j("expected object of type Const, got '" + t + "'"),
                "type_error:Const");
          }
          (wt.prototype.sa = !0),
            (wt.prototype.ra = function () {
              return this.a;
            }),
            (wt.prototype.toString = function () {
              return "Const{" + this.a + "}";
            });
          var Et,
            Tt = {},
            At = {};
          function St() {
            if (void 0 === Et) {
              var t = null,
                e = s.trustedTypes;
              if (e && e.createPolicy) {
                try {
                  t = e.createPolicy("goog#html", {
                    createHTML: S,
                    createScript: S,
                    createScriptURL: S,
                  });
                } catch (t) {
                  s.console && s.console.error(t.message);
                }
                Et = t;
              } else Et = t;
            }
            return Et;
          }
          function kt(t, e) {
            this.a = e === Ct ? t : "";
          }
          function Nt(t) {
            return t instanceof kt && t.constructor === kt
              ? t.a
              : (j(
                  "expected object of type TrustedResourceUrl, got '" +
                    t +
                    "' of type " +
                    f(t)
                ),
                "type_error:TrustedResourceUrl");
          }
          function _t(t, e) {
            var n = It(t);
            if (!Rt.test(n))
              throw Error("Invalid TrustedResourceUrl format: " + n);
            return (function (t) {
              var e = St();
              return new kt((t = e ? e.createScriptURL(t) : t), Ct);
            })(
              (t = n.replace(Ot, function (t, i) {
                if (!Object.prototype.hasOwnProperty.call(e, i))
                  throw Error(
                    'Found marker, "' +
                      i +
                      '", in format string, "' +
                      n +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(e)
                  );
                return (t = e[i]) instanceof wt
                  ? It(t)
                  : encodeURIComponent(String(t));
              }))
            );
          }
          (kt.prototype.sa = !0),
            (kt.prototype.ra = function () {
              return this.a.toString();
            }),
            (kt.prototype.toString = function () {
              return "TrustedResourceUrl{" + this.a + "}";
            });
          var Ot = /%{(\w+)}/g,
            Rt =
              /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            Ct = {};
          function Pt(t, e) {
            this.a = e === Ft ? t : "";
          }
          function Dt(t) {
            return t instanceof Pt && t.constructor === Pt
              ? t.a
              : (j(
                  "expected object of type SafeUrl, got '" +
                    t +
                    "' of type " +
                    f(t)
                ),
                "type_error:SafeUrl");
          }
          (Pt.prototype.sa = !0),
            (Pt.prototype.ra = function () {
              return this.a.toString();
            }),
            (Pt.prototype.toString = function () {
              return "SafeUrl{" + this.a + "}";
            });
          var Lt =
              /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
            xt = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            jt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          function Mt(t) {
            if (t instanceof Pt) return t;
            if (
              ((t = "object" == typeof t && t.sa ? t.ra() : String(t)),
              jt.test(t))
            )
              t = new Pt(t, Ft);
            else {
              var e = (t = (t = String(t)).replace(/(%0A|%0D)/g, "")).match(xt);
              t = e && Lt.test(e[1]) ? new Pt(t, Ft) : null;
            }
            return t;
          }
          function Ut(t) {
            return t instanceof Pt
              ? t
              : ((t = "object" == typeof t && t.sa ? t.ra() : String(t)),
                jt.test(t) || (t = "about:invalid#zClosurez"),
                new Pt(t, Ft));
          }
          var Ft = {},
            Vt = new Pt("about:invalid#zClosurez", Ft);
          function Ht(t, e, n) {
            this.a = n === qt ? t : "";
          }
          (Ht.prototype.sa = !0),
            (Ht.prototype.ra = function () {
              return this.a.toString();
            }),
            (Ht.prototype.toString = function () {
              return "SafeHtml{" + this.a + "}";
            });
          var qt = {};
          function Bt(t, e, n, i) {
            return (
              (t = t instanceof Pt ? t : Ut(t)),
              (e = e || s),
              (n = n instanceof wt ? It(n) : n || ""),
              e.open(Dt(t), n, i, void 0)
            );
          }
          function Kt(t, e) {
            for (
              var n = t.split("%s"),
                i = "",
                r = Array.prototype.slice.call(arguments, 1);
              r.length && 1 < n.length;

            )
              i += n.shift() + r.shift();
            return i + n.join("%s");
          }
          function Gt(t) {
            return (
              ut.test(t) &&
                (-1 != t.indexOf("&") && (t = t.replace(nt, "&amp;")),
                -1 != t.indexOf("<") && (t = t.replace(it, "&lt;")),
                -1 != t.indexOf(">") && (t = t.replace(rt, "&gt;")),
                -1 != t.indexOf('"') && (t = t.replace(ot, "&quot;")),
                -1 != t.indexOf("'") && (t = t.replace(at, "&#39;")),
                -1 != t.indexOf("\0") && (t = t.replace(st, "&#0;"))),
              t
            );
          }
          function Wt(t) {
            return Wt[" "](t), t;
          }
          Wt[" "] = l;
          var zt,
            Xt,
            Jt = pt("Opera"),
            Yt = pt("Trident") || pt("MSIE"),
            $t = pt("Edge"),
            Zt = $t || Yt,
            Qt =
              pt("Gecko") &&
              !(ct(tt.toLowerCase(), "webkit") && !pt("Edge")) &&
              !(pt("Trident") || pt("MSIE")) &&
              !pt("Edge"),
            te = ct(tt.toLowerCase(), "webkit") && !pt("Edge");
          function ee() {
            var t = s.document;
            return t ? t.documentMode : void 0;
          }
          t: {
            var ne = "",
              ie =
                ((Xt = tt),
                Qt
                  ? /rv:([^\);]+)(\)|;)/.exec(Xt)
                  : $t
                  ? /Edge\/([\d\.]+)/.exec(Xt)
                  : Yt
                  ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xt)
                  : te
                  ? /WebKit\/(\S+)/.exec(Xt)
                  : Jt
                  ? /(?:Version)[ \/]?(\S+)/.exec(Xt)
                  : void 0);
            if ((ie && (ne = ie ? ie[1] : ""), Yt)) {
              var re = ee();
              if (null != re && re > parseFloat(ne)) {
                zt = String(re);
                break t;
              }
            }
            zt = ne;
          }
          var oe,
            ae = {};
          function se(t) {
            return (function (t, e) {
              var n = ae;
              return Object.prototype.hasOwnProperty.call(n, t)
                ? n[t]
                : (n[t] = e(t));
            })(t, function () {
              for (
                var e = 0,
                  n = et(String(zt)).split("."),
                  i = et(String(t)).split("."),
                  r = Math.max(n.length, i.length),
                  o = 0;
                0 == e && o < r;
                o++
              ) {
                var a = n[o] || "",
                  s = i[o] || "";
                do {
                  if (
                    ((a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                    (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
                    0 == a[0].length && 0 == s[0].length)
                  )
                    break;
                  (e =
                    ht(
                      0 == a[1].length ? 0 : parseInt(a[1], 10),
                      0 == s[1].length ? 0 : parseInt(s[1], 10)
                    ) ||
                    ht(0 == a[2].length, 0 == s[2].length) ||
                    ht(a[2], s[2])),
                    (a = a[3]),
                    (s = s[3]);
                } while (0 == e);
              }
              return 0 <= e;
            });
          }
          if (s.document && Yt) {
            var ue = ee();
            oe = ue || parseInt(zt, 10) || void 0;
          } else oe = void 0;
          var ce = oe;
          try {
            new self.OffscreenCanvas(0, 0).getContext("2d");
          } catch (Xt) {}
          var he = !Yt || 9 <= Number(ce);
          function le(t) {
            var e = document;
            return "string" == typeof t ? e.getElementById(t) : t;
          }
          function fe(t, e) {
            dt(e, function (e, n) {
              e && "object" == typeof e && e.sa && (e = e.ra()),
                "style" == n
                  ? (t.style.cssText = e)
                  : "class" == n
                  ? (t.className = e)
                  : "for" == n
                  ? (t.htmlFor = e)
                  : ve.hasOwnProperty(n)
                  ? t.setAttribute(ve[n], e)
                  : 0 == n.lastIndexOf("aria-", 0) ||
                    0 == n.lastIndexOf("data-", 0)
                  ? t.setAttribute(n, e)
                  : (t[n] = e);
            });
          }
          var pe,
            de,
            ve = {
              cellpadding: "cellPadding",
              cellspacing: "cellSpacing",
              colspan: "colSpan",
              frameborder: "frameBorder",
              height: "height",
              maxlength: "maxLength",
              nonce: "nonce",
              role: "role",
              rowspan: "rowSpan",
              type: "type",
              usemap: "useMap",
              valign: "vAlign",
              width: "width",
            };
          function me(t, e, n) {
            function i(n) {
              n &&
                e.appendChild("string" == typeof n ? t.createTextNode(n) : n);
            }
            for (var r = 2; r < n.length; r++) {
              var o = n[r];
              if (!p(o) || (v(o) && 0 < o.nodeType)) i(o);
              else {
                t: {
                  if (o && "number" == typeof o.length) {
                    if (v(o)) {
                      var a =
                        "function" == typeof o.item ||
                        "string" == typeof o.item;
                      break t;
                    }
                    if (d(o)) {
                      a = "function" == typeof o.item;
                      break t;
                    }
                  }
                  a = !1;
                }
                K(a ? Q(o) : o, i);
              }
            }
          }
          function ge(t, e) {
            return (
              (e = String(e)),
              "application/xhtml+xml" === t.contentType &&
                (e = e.toLowerCase()),
              t.createElement(e)
            );
          }
          function be(t) {
            s.setTimeout(function () {
              throw t;
            }, 0);
          }
          function ye(t, e) {
            de ||
              (function () {
                if (s.Promise && s.Promise.resolve) {
                  var t = s.Promise.resolve(void 0);
                  de = function () {
                    t.then(Ee);
                  };
                } else
                  de = function () {
                    var t = Ee;
                    !d(s.setImmediate) ||
                    (s.Window &&
                      s.Window.prototype &&
                      !pt("Edge") &&
                      s.Window.prototype.setImmediate == s.setImmediate)
                      ? (pe ||
                          (pe = (function () {
                            var t = s.MessageChannel;
                            if (
                              (void 0 === t &&
                                "undefined" != typeof window &&
                                window.postMessage &&
                                window.addEventListener &&
                                !pt("Presto") &&
                                (t = function () {
                                  var t = ge(document, "IFRAME");
                                  (t.style.display = "none"),
                                    document.documentElement.appendChild(t);
                                  var e = t.contentWindow;
                                  (t = e.document).open(), t.close();
                                  var n = "callImmediate" + Math.random(),
                                    i =
                                      "file:" == e.location.protocol
                                        ? "*"
                                        : e.location.protocol +
                                          "//" +
                                          e.location.host;
                                  (t = I(function (t) {
                                    ("*" != i && t.origin != i) ||
                                      t.data != n ||
                                      this.port1.onmessage();
                                  }, this)),
                                    e.addEventListener("message", t, !1),
                                    (this.port1 = {}),
                                    (this.port2 = {
                                      postMessage: function () {
                                        e.postMessage(n, i);
                                      },
                                    });
                                }),
                              void 0 !== t && !pt("Trident") && !pt("MSIE"))
                            ) {
                              var e = new t(),
                                n = {},
                                i = n;
                              return (
                                (e.port1.onmessage = function () {
                                  if (void 0 !== n.next) {
                                    var t = (n = n.next).Fb;
                                    (n.Fb = null), t();
                                  }
                                }),
                                function (t) {
                                  (i.next = { Fb: t }),
                                    (i = i.next),
                                    e.port2.postMessage(0);
                                }
                              );
                            }
                            return function (t) {
                              s.setTimeout(t, 0);
                            };
                          })()),
                        pe(t))
                      : s.setImmediate(t);
                  };
              })(),
              we || (de(), (we = !0)),
              Ie.add(t, e);
          }
          var we = !1,
            Ie = new F();
          function Ee() {
            for (var t; (t = H()); ) {
              try {
                t.a.call(t.b);
              } catch (t) {
                be(t);
              }
              U(V, t);
            }
            we = !1;
          }
          function Te(t, e) {
            if (
              ((this.a = Ae),
              (this.i = void 0),
              (this.f = this.b = this.c = null),
              (this.g = this.h = !1),
              t != l)
            )
              try {
                var n = this;
                t.call(
                  e,
                  function (t) {
                    Me(n, Se, t);
                  },
                  function (t) {
                    if (!(t instanceof Ke))
                      try {
                        if (t instanceof Error) throw t;
                        throw Error("Promise rejected.");
                      } catch (t) {}
                    Me(n, ke, t);
                  }
                );
              } catch (t) {
                Me(this, ke, t);
              }
          }
          var Ae = 0,
            Se = 2,
            ke = 3;
          function Ne() {
            (this.next = this.f = this.b = this.g = this.a = null),
              (this.c = !1);
          }
          Ne.prototype.reset = function () {
            (this.f = this.b = this.g = this.a = null), (this.c = !1);
          };
          var _e = new M(
            function () {
              return new Ne();
            },
            function (t) {
              t.reset();
            }
          );
          function Oe(t, e, n) {
            var i = _e.get();
            return (i.g = t), (i.b = e), (i.f = n), i;
          }
          function Re(t) {
            if (t instanceof Te) return t;
            var e = new Te(l);
            return Me(e, Se, t), e;
          }
          function Ce(t) {
            return new Te(function (e, n) {
              n(t);
            });
          }
          function Pe(t, e, n) {
            Ue(t, e, n, null) || ye(E(e, t));
          }
          function De(t) {
            return new Te(function (e) {
              var n = t.length,
                i = [];
              if (n)
                for (
                  var r = function (t, r, o) {
                      n--,
                        (i[t] = r
                          ? { Ob: !0, value: o }
                          : { Ob: !1, reason: o }),
                        0 == n && e(i);
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  Pe(t[o], E(r, o, !0), E(r, o, !1));
              else e(i);
            });
          }
          function Le(t, e) {
            if (t.a == Ae)
              if (t.c) {
                var n = t.c;
                if (n.b) {
                  for (
                    var i = 0, r = null, o = null, a = n.b;
                    a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i)));
                    a = a.next
                  )
                    r || (o = a);
                  r &&
                    (n.a == Ae && 1 == i
                      ? Le(n, e)
                      : (o
                          ? ((i = o).next == n.f && (n.f = i),
                            (i.next = i.next.next))
                          : Ve(n),
                        He(n, r, ke, e)));
                }
                t.c = null;
              } else Me(t, ke, e);
          }
          function xe(t, e) {
            t.b || (t.a != Se && t.a != ke) || Fe(t),
              t.f ? (t.f.next = e) : (t.b = e),
              (t.f = e);
          }
          function je(t, e, n, i) {
            var r = Oe(null, null, null);
            return (
              (r.a = new Te(function (t, o) {
                (r.g = e
                  ? function (n) {
                      try {
                        var r = e.call(i, n);
                        t(r);
                      } catch (t) {
                        o(t);
                      }
                    }
                  : t),
                  (r.b = n
                    ? function (e) {
                        try {
                          var r = n.call(i, e);
                          void 0 === r && e instanceof Ke ? o(e) : t(r);
                        } catch (t) {
                          o(t);
                        }
                      }
                    : o);
              })),
              (r.a.c = t),
              xe(t, r),
              r.a
            );
          }
          function Me(t, e, n) {
            t.a == Ae &&
              (t === n &&
                ((e = ke),
                (n = new TypeError("Promise cannot resolve to itself"))),
              (t.a = 1),
              Ue(n, t.Zc, t.$c, t) ||
                ((t.i = n),
                (t.a = e),
                (t.c = null),
                Fe(t),
                e != ke ||
                  n instanceof Ke ||
                  (function (t, e) {
                    (t.g = !0),
                      ye(function () {
                        t.g && Be.call(null, e);
                      });
                  })(t, n)));
          }
          function Ue(t, e, n, i) {
            if (t instanceof Te) return xe(t, Oe(e || l, n || null, i)), !0;
            if (D(t)) return t.then(e, n, i), !0;
            if (v(t))
              try {
                var r = t.then;
                if (d(r))
                  return (
                    (function (t, e, n, i, r) {
                      function o(t) {
                        s || ((s = !0), i.call(r, t));
                      }
                      function a(t) {
                        s || ((s = !0), n.call(r, t));
                      }
                      var s = !1;
                      try {
                        e.call(t, a, o);
                      } catch (t) {
                        o(t);
                      }
                    })(t, r, e, n, i),
                    !0
                  );
              } catch (t) {
                return n.call(i, t), !0;
              }
            return !1;
          }
          function Fe(t) {
            t.h || ((t.h = !0), ye(t.fc, t));
          }
          function Ve(t) {
            var e = null;
            return (
              t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
              t.b || (t.f = null),
              e
            );
          }
          function He(t, e, n, i) {
            if (n == ke && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
            if (e.a) (e.a.c = null), qe(e, n, i);
            else
              try {
                e.c ? e.g.call(e.f) : qe(e, n, i);
              } catch (t) {
                Be.call(null, t);
              }
            U(_e, e);
          }
          function qe(t, e, n) {
            e == Se ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
          }
          (Te.prototype.then = function (t, e, n) {
            return je(this, d(t) ? t : null, d(e) ? e : null, n);
          }),
            (Te.prototype.$goog_Thenable = !0),
            ((t = Te.prototype).na = function (t, e) {
              return ((t = Oe(t, t, e)).c = !0), xe(this, t), this;
            }),
            (t.s = function (t, e) {
              return je(this, null, t, e);
            }),
            (t.cancel = function (t) {
              if (this.a == Ae) {
                var e = new Ke(t);
                ye(function () {
                  Le(this, e);
                }, this);
              }
            }),
            (t.Zc = function (t) {
              (this.a = Ae), Me(this, Se, t);
            }),
            (t.$c = function (t) {
              (this.a = Ae), Me(this, ke, t);
            }),
            (t.fc = function () {
              for (var t; (t = Ve(this)); ) He(this, t, this.a, this.i);
              this.h = !1;
            });
          var Be = be;
          function Ke(t) {
            L.call(this, t);
          }
          function Ge() {
            0 != We && (ze[m(this)] = this),
              (this.xa = this.xa),
              (this.oa = this.oa);
          }
          A(Ke, L), (Ke.prototype.name = "cancel");
          var We = 0,
            ze = {};
          function Xe(t) {
            if (!t.xa && ((t.xa = !0), t.Da(), 0 != We)) {
              var e = m(t);
              if (0 != We && t.oa && 0 < t.oa.length)
                throw Error(
                  t +
                    " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
                );
              delete ze[e];
            }
          }
          (Ge.prototype.xa = !1),
            (Ge.prototype.Da = function () {
              if (this.oa) for (; this.oa.length; ) this.oa.shift()();
            });
          var Je =
              Object.freeze ||
              function (t) {
                return t;
              },
            Ye = !Yt || 9 <= Number(ce),
            $e = Yt && !se("9"),
            Ze = (function () {
              if (!s.addEventListener || !Object.defineProperty) return !1;
              var t = !1,
                e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
              try {
                s.addEventListener("test", l, e),
                  s.removeEventListener("test", l, e);
              } catch (t) {}
              return t;
            })();
          function Qe(t, e) {
            (this.type = t),
              (this.b = this.target = e),
              (this.defaultPrevented = !1);
          }
          function tn(t, e) {
            if (
              (Qe.call(this, t ? t.type : ""),
              (this.relatedTarget = this.b = this.target = null),
              (this.button =
                this.screenY =
                this.screenX =
                this.clientY =
                this.clientX =
                  0),
              (this.key = ""),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.pointerId = 0),
              (this.pointerType = ""),
              (this.a = null),
              t)
            ) {
              var n = (this.type = t.type),
                i =
                  t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : null;
              if (
                ((this.target = t.target || t.srcElement),
                (this.b = e),
                (e = t.relatedTarget))
              ) {
                if (Qt) {
                  t: {
                    try {
                      Wt(e.nodeName);
                      var r = !0;
                      break t;
                    } catch (t) {}
                    r = !1;
                  }
                  r || (e = null);
                }
              } else
                "mouseover" == n
                  ? (e = t.fromElement)
                  : "mouseout" == n && (e = t.toElement);
              (this.relatedTarget = e),
                i
                  ? ((this.clientX =
                      void 0 !== i.clientX ? i.clientX : i.pageX),
                    (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                    (this.screenX = i.screenX || 0),
                    (this.screenY = i.screenY || 0))
                  : ((this.clientX =
                      void 0 !== t.clientX ? t.clientX : t.pageX),
                    (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                    (this.screenX = t.screenX || 0),
                    (this.screenY = t.screenY || 0)),
                (this.button = t.button),
                (this.key = t.key || ""),
                (this.ctrlKey = t.ctrlKey),
                (this.altKey = t.altKey),
                (this.shiftKey = t.shiftKey),
                (this.metaKey = t.metaKey),
                (this.pointerId = t.pointerId || 0),
                (this.pointerType =
                  "string" == typeof t.pointerType
                    ? t.pointerType
                    : en[t.pointerType] || ""),
                (this.a = t),
                t.defaultPrevented && this.preventDefault();
            }
          }
          (Qe.prototype.preventDefault = function () {
            this.defaultPrevented = !0;
          }),
            A(tn, Qe);
          var en = Je({ 2: "touch", 3: "pen", 4: "mouse" });
          (tn.prototype.preventDefault = function () {
            tn.$a.preventDefault.call(this);
            var t = this.a;
            if (t.preventDefault) t.preventDefault();
            else if (((t.returnValue = !1), $e))
              try {
                (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) &&
                  (t.keyCode = -1);
              } catch (t) {}
          }),
            (tn.prototype.g = function () {
              return this.a;
            });
          var nn = "closure_listenable_" + ((1e6 * Math.random()) | 0),
            rn = 0;
          function on(t, e, n, i, r) {
            (this.listener = t),
              (this.proxy = null),
              (this.src = e),
              (this.type = n),
              (this.capture = !!i),
              (this.Ua = r),
              (this.key = ++rn),
              (this.va = this.Oa = !1);
          }
          function an(t) {
            (t.va = !0),
              (t.listener = null),
              (t.proxy = null),
              (t.src = null),
              (t.Ua = null);
          }
          function sn(t) {
            (this.src = t), (this.a = {}), (this.b = 0);
          }
          function un(t, e) {
            var n = e.type;
            n in t.a &&
              Y(t.a[n], e) &&
              (an(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
          }
          function cn(t, e, n, i) {
            for (var r = 0; r < t.length; ++r) {
              var o = t[r];
              if (!o.va && o.listener == e && o.capture == !!n && o.Ua == i)
                return r;
            }
            return -1;
          }
          sn.prototype.add = function (t, e, n, i, r) {
            var o = t.toString();
            (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
            var a = cn(t, e, i, r);
            return (
              -1 < a
                ? ((e = t[a]), n || (e.Oa = !1))
                : (((e = new on(e, this.src, o, !!i, r)).Oa = n), t.push(e)),
              e
            );
          };
          var hn = "closure_lm_" + ((1e6 * Math.random()) | 0),
            ln = {};
          function fn(t, e, n, i, r) {
            if (i && i.once) dn(t, e, n, i, r);
            else if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) fn(t, e[o], n, i, r);
            else
              (n = Tn(n)),
                t && t[nn]
                  ? Sn(t, e, n, v(i) ? !!i.capture : !!i, r)
                  : pn(t, e, n, !1, i, r);
          }
          function pn(t, e, n, i, r, o) {
            if (!e) throw Error("Invalid event type");
            var a = v(r) ? !!r.capture : !!r,
              s = In(t);
            if (
              (s || (t[hn] = s = new sn(t)), !(n = s.add(e, n, i, a, o)).proxy)
            ) {
              if (
                ((i = (function () {
                  var t = wn,
                    e = Ye
                      ? function (n) {
                          return t.call(e.src, e.listener, n);
                        }
                      : function (n) {
                          if (!(n = t.call(e.src, e.listener, n))) return n;
                        };
                  return e;
                })()),
                (n.proxy = i),
                (i.src = t),
                (i.listener = n),
                t.addEventListener)
              )
                Ze || (r = a),
                  void 0 === r && (r = !1),
                  t.addEventListener(e.toString(), i, r);
              else if (t.attachEvent) t.attachEvent(gn(e.toString()), i);
              else {
                if (!t.addListener || !t.removeListener)
                  throw Error(
                    "addEventListener and attachEvent are unavailable."
                  );
                t.addListener(i);
              }
              0;
            }
          }
          function dn(t, e, n, i, r) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) dn(t, e[o], n, i, r);
            else
              (n = Tn(n)),
                t && t[nn]
                  ? kn(t, e, n, v(i) ? !!i.capture : !!i, r)
                  : pn(t, e, n, !0, i, r);
          }
          function vn(t, e, n, i, r) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) vn(t, e[o], n, i, r);
            else
              (i = v(i) ? !!i.capture : !!i),
                (n = Tn(n)),
                t && t[nn]
                  ? ((t = t.v),
                    (e = String(e).toString()) in t.a &&
                      -1 < (n = cn((o = t.a[e]), n, i, r)) &&
                      (an(o[n]),
                      Array.prototype.splice.call(o, n, 1),
                      0 == o.length && (delete t.a[e], t.b--)))
                  : t &&
                    (t = In(t)) &&
                    ((e = t.a[e.toString()]),
                    (t = -1),
                    e && (t = cn(e, n, i, r)),
                    (n = -1 < t ? e[t] : null) && mn(n));
          }
          function mn(t) {
            if ("number" != typeof t && t && !t.va) {
              var e = t.src;
              if (e && e[nn]) un(e.v, t);
              else {
                var n = t.type,
                  i = t.proxy;
                e.removeEventListener
                  ? e.removeEventListener(n, i, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(gn(n), i)
                  : e.addListener && e.removeListener && e.removeListener(i),
                  (n = In(e))
                    ? (un(n, t), 0 == n.b && ((n.src = null), (e[hn] = null)))
                    : an(t);
              }
            }
          }
          function gn(t) {
            return t in ln ? ln[t] : (ln[t] = "on" + t);
          }
          function bn(t, e, n, i) {
            var r = !0;
            if ((t = In(t)) && (e = t.a[e.toString()]))
              for (e = e.concat(), t = 0; t < e.length; t++) {
                var o = e[t];
                o &&
                  o.capture == n &&
                  !o.va &&
                  ((o = yn(o, i)), (r = r && !1 !== o));
              }
            return r;
          }
          function yn(t, e) {
            var n = t.listener,
              i = t.Ua || t.src;
            return t.Oa && mn(t), n.call(i, e);
          }
          function wn(t, e) {
            if (t.va) return !0;
            if (!Ye) {
              if (!e)
                t: {
                  e = ["window", "event"];
                  for (var n = s, i = 0; i < e.length; i++)
                    if (null == (n = n[e[i]])) {
                      e = null;
                      break t;
                    }
                  e = n;
                }
              if (
                ((e = new tn((i = e), this)),
                (n = !0),
                !(0 > i.keyCode || null != i.returnValue))
              ) {
                t: {
                  var r = !1;
                  if (0 == i.keyCode)
                    try {
                      i.keyCode = -1;
                      break t;
                    } catch (t) {
                      r = !0;
                    }
                  (r || null == i.returnValue) && (i.returnValue = !0);
                }
                for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
                for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                  e.b = i[r];
                  var o = bn(i[r], t, !0, e);
                  n = n && o;
                }
                for (r = 0; r < i.length; r++)
                  (e.b = i[r]), (o = bn(i[r], t, !1, e)), (n = n && o);
              }
              return n;
            }
            return yn(t, new tn(e, this));
          }
          function In(t) {
            return (t = t[hn]) instanceof sn ? t : null;
          }
          var En = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
          function Tn(t) {
            return d(t)
              ? t
              : (t[En] ||
                  (t[En] = function (e) {
                    return t.handleEvent(e);
                  }),
                t[En]);
          }
          function An() {
            Ge.call(this),
              (this.v = new sn(this)),
              (this.$b = this),
              (this.fb = null);
          }
          function Sn(t, e, n, i, r) {
            t.v.add(String(e), n, !1, i, r);
          }
          function kn(t, e, n, i, r) {
            t.v.add(String(e), n, !0, i, r);
          }
          function Nn(t, e, n, i) {
            if (!(e = t.v.a[String(e)])) return !0;
            e = e.concat();
            for (var r = !0, o = 0; o < e.length; ++o) {
              var a = e[o];
              if (a && !a.va && a.capture == n) {
                var s = a.listener,
                  u = a.Ua || a.src;
                a.Oa && un(t.v, a), (r = !1 !== s.call(u, i) && r);
              }
            }
            return r && !i.defaultPrevented;
          }
          function _n(t, e, n) {
            if (d(t)) n && (t = I(t, n));
            else {
              if (!t || "function" != typeof t.handleEvent)
                throw Error("Invalid listener argument");
              t = I(t.handleEvent, t);
            }
            return 2147483647 < Number(e) ? -1 : s.setTimeout(t, e || 0);
          }
          function On(t) {
            var e = null;
            return new Te(function (n, i) {
              -1 ==
                (e = _n(function () {
                  n(void 0);
                }, t)) && i(Error("Failed to schedule timer."));
            }).s(function (t) {
              throw (s.clearTimeout(e), t);
            });
          }
          function Rn(t) {
            if (t.V && "function" == typeof t.V) return t.V();
            if ("string" == typeof t) return t.split("");
            if (p(t)) {
              for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
              return e;
            }
            for (i in ((e = []), (n = 0), t)) e[n++] = t[i];
            return e;
          }
          function Cn(t) {
            if (t.Y && "function" == typeof t.Y) return t.Y();
            if (!t.V || "function" != typeof t.V) {
              if (p(t) || "string" == typeof t) {
                var e = [];
                t = t.length;
                for (var n = 0; n < t; n++) e.push(n);
                return e;
              }
              for (var i in ((e = []), (n = 0), t)) e[n++] = i;
              return e;
            }
          }
          function Pn(t, e) {
            (this.b = {}), (this.a = []), (this.c = 0);
            var n = arguments.length;
            if (1 < n) {
              if (n % 2) throw Error("Uneven number of arguments");
              for (var i = 0; i < n; i += 2)
                this.set(arguments[i], arguments[i + 1]);
            } else if (t)
              if (t instanceof Pn)
                for (n = t.Y(), i = 0; i < n.length; i++)
                  this.set(n[i], t.get(n[i]));
              else for (i in t) this.set(i, t[i]);
          }
          function Dn(t) {
            if (t.c != t.a.length) {
              for (var e = 0, n = 0; e < t.a.length; ) {
                var i = t.a[e];
                Ln(t.b, i) && (t.a[n++] = i), e++;
              }
              t.a.length = n;
            }
            if (t.c != t.a.length) {
              var r = {};
              for (n = e = 0; e < t.a.length; )
                Ln(r, (i = t.a[e])) || ((t.a[n++] = i), (r[i] = 1)), e++;
              t.a.length = n;
            }
          }
          function Ln(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          A(An, Ge),
            (An.prototype[nn] = !0),
            (An.prototype.addEventListener = function (t, e, n, i) {
              fn(this, t, e, n, i);
            }),
            (An.prototype.removeEventListener = function (t, e, n, i) {
              vn(this, t, e, n, i);
            }),
            (An.prototype.dispatchEvent = function (t) {
              var e,
                n = this.fb;
              if (n) for (e = []; n; n = n.fb) e.push(n);
              n = this.$b;
              var i = t.type || t;
              if ("string" == typeof t) t = new Qe(t, n);
              else if (t instanceof Qe) t.target = t.target || n;
              else {
                var r = t;
                bt((t = new Qe(i, n)), r);
              }
              if (((r = !0), e))
                for (var o = e.length - 1; 0 <= o; o--) {
                  var a = (t.b = e[o]);
                  r = Nn(a, i, !0, t) && r;
                }
              if (
                ((r = Nn((a = t.b = n), i, !0, t) && r),
                (r = Nn(a, i, !1, t) && r),
                e)
              )
                for (o = 0; o < e.length; o++)
                  r = Nn((a = t.b = e[o]), i, !1, t) && r;
              return r;
            }),
            (An.prototype.Da = function () {
              if ((An.$a.Da.call(this), this.v)) {
                var t,
                  e = this.v;
                for (t in e.a) {
                  for (var n = e.a[t], i = 0; i < n.length; i++) an(n[i]);
                  delete e.a[t], e.b--;
                }
              }
              this.fb = null;
            }),
            ((t = Pn.prototype).V = function () {
              Dn(this);
              for (var t = [], e = 0; e < this.a.length; e++)
                t.push(this.b[this.a[e]]);
              return t;
            }),
            (t.Y = function () {
              return Dn(this), this.a.concat();
            }),
            (t.clear = function () {
              (this.b = {}), (this.c = this.a.length = 0);
            }),
            (t.get = function (t, e) {
              return Ln(this.b, t) ? this.b[t] : e;
            }),
            (t.set = function (t, e) {
              Ln(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
            }),
            (t.forEach = function (t, e) {
              for (var n = this.Y(), i = 0; i < n.length; i++) {
                var r = n[i],
                  o = this.get(r);
                t.call(e, o, r, this);
              }
            });
          var xn =
            /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          function jn(t, e) {
            var n;
            (this.a = this.l = this.f = ""),
              (this.g = null),
              (this.h = this.c = ""),
              (this.i = !1),
              t instanceof jn
                ? ((this.i = void 0 !== e ? e : t.i),
                  Mn(this, t.f),
                  (this.l = t.l),
                  (this.a = t.a),
                  Un(this, t.g),
                  (this.c = t.c),
                  Fn(this, ri(t.b)),
                  (this.h = t.h))
                : t && (n = String(t).match(xn))
                ? ((this.i = !!e),
                  Mn(this, n[1] || "", !0),
                  (this.l = Kn(n[2] || "")),
                  (this.a = Kn(n[3] || "", !0)),
                  Un(this, n[4]),
                  (this.c = Kn(n[5] || "", !0)),
                  Fn(this, n[6] || "", !0),
                  (this.h = Kn(n[7] || "")))
                : ((this.i = !!e), (this.b = new Zn(null, this.i)));
          }
          function Mn(t, e, n) {
            (t.f = n ? Kn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
          }
          function Un(t, e) {
            if (e) {
              if (((e = Number(e)), isNaN(e) || 0 > e))
                throw Error("Bad port number " + e);
              t.g = e;
            } else t.g = null;
          }
          function Fn(t, e, n) {
            e instanceof Zn
              ? ((t.b = e),
                (function (t, e) {
                  e &&
                    !t.f &&
                    (Qn(t),
                    (t.c = null),
                    t.a.forEach(function (t, e) {
                      var n = e.toLowerCase();
                      e != n && (ei(this, e), ii(this, n, t));
                    }, t)),
                    (t.f = e);
                })(t.b, t.i))
              : (n || (e = Gn(e, Yn)), (t.b = new Zn(e, t.i)));
          }
          function Vn(t, e, n) {
            t.b.set(e, n);
          }
          function Hn(t, e) {
            return t.b.get(e);
          }
          function qn(t) {
            return t instanceof jn ? new jn(t) : new jn(t, void 0);
          }
          function Bn(t, e, n, i) {
            var r = new jn(null, void 0);
            return (
              t && Mn(r, t), e && (r.a = e), n && Un(r, n), i && (r.c = i), r
            );
          }
          function Kn(t, e) {
            return t
              ? e
                ? decodeURI(t.replace(/%25/g, "%2525"))
                : decodeURIComponent(t)
              : "";
          }
          function Gn(t, e, n) {
            return "string" == typeof t
              ? ((t = encodeURI(t).replace(e, Wn)),
                n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                t)
              : null;
          }
          function Wn(t) {
            return (
              "%" +
              (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & t).toString(16)
            );
          }
          (jn.prototype.toString = function () {
            var t = [],
              e = this.f;
            e && t.push(Gn(e, zn, !0), ":");
            var n = this.a;
            return (
              (n || "file" == e) &&
                (t.push("//"),
                (e = this.l) && t.push(Gn(e, zn, !0), "@"),
                t.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    "%$1"
                  )
                ),
                null != (n = this.g) && t.push(":", String(n))),
              (n = this.c) &&
                (this.a && "/" != n.charAt(0) && t.push("/"),
                t.push(Gn(n, "/" == n.charAt(0) ? Jn : Xn, !0))),
              (n = this.b.toString()) && t.push("?", n),
              (n = this.h) && t.push("#", Gn(n, $n)),
              t.join("")
            );
          }),
            (jn.prototype.resolve = function (t) {
              var e = new jn(this),
                n = !!t.f;
              n ? Mn(e, t.f) : (n = !!t.l),
                n ? (e.l = t.l) : (n = !!t.a),
                n ? (e.a = t.a) : (n = null != t.g);
              var i = t.c;
              if (n) Un(e, t.g);
              else if ((n = !!t.c)) {
                if ("/" != i.charAt(0))
                  if (this.a && !this.c) i = "/" + i;
                  else {
                    var r = e.c.lastIndexOf("/");
                    -1 != r && (i = e.c.substr(0, r + 1) + i);
                  }
                if (".." == (r = i) || "." == r) i = "";
                else if (ct(r, "./") || ct(r, "/.")) {
                  (i = 0 == r.lastIndexOf("/", 0)), (r = r.split("/"));
                  for (var o = [], a = 0; a < r.length; ) {
                    var s = r[a++];
                    "." == s
                      ? i && a == r.length && o.push("")
                      : ".." == s
                      ? ((1 < o.length || (1 == o.length && "" != o[0])) &&
                          o.pop(),
                        i && a == r.length && o.push(""))
                      : (o.push(s), (i = !0));
                  }
                  i = o.join("/");
                } else i = r;
              }
              return (
                n ? (e.c = i) : (n = "" !== t.b.toString()),
                n ? Fn(e, ri(t.b)) : (n = !!t.h),
                n && (e.h = t.h),
                e
              );
            });
          var zn = /[#\/\?@]/g,
            Xn = /[#\?:]/g,
            Jn = /[#\?]/g,
            Yn = /[#\?@]/g,
            $n = /#/g;
          function Zn(t, e) {
            (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
          }
          function Qn(t) {
            t.a ||
              ((t.a = new Pn()),
              (t.b = 0),
              t.c &&
                (function (t, e) {
                  if (t) {
                    t = t.split("&");
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n].indexOf("="),
                        r = null;
                      if (0 <= i) {
                        var o = t[n].substring(0, i);
                        r = t[n].substring(i + 1);
                      } else o = t[n];
                      e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "");
                    }
                  }
                })(t.c, function (e, n) {
                  t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
                }));
          }
          function ti(t) {
            var e = Cn(t);
            if (void 0 === e) throw Error("Keys are undefined");
            var n = new Zn(null, void 0);
            t = Rn(t);
            for (var i = 0; i < e.length; i++) {
              var r = e[i],
                o = t[i];
              Array.isArray(o) ? ii(n, r, o) : n.add(r, o);
            }
            return n;
          }
          function ei(t, e) {
            Qn(t),
              (e = oi(t, e)),
              Ln(t.a.b, e) &&
                ((t.c = null),
                (t.b -= t.a.get(e).length),
                Ln((t = t.a).b, e) &&
                  (delete t.b[e], t.c--, t.a.length > 2 * t.c && Dn(t)));
          }
          function ni(t, e) {
            return Qn(t), (e = oi(t, e)), Ln(t.a.b, e);
          }
          function ii(t, e, n) {
            ei(t, e),
              0 < n.length &&
                ((t.c = null), t.a.set(oi(t, e), Q(n)), (t.b += n.length));
          }
          function ri(t) {
            var e = new Zn();
            return (e.c = t.c), t.a && ((e.a = new Pn(t.a)), (e.b = t.b)), e;
          }
          function oi(t, e) {
            return (e = String(e)), t.f && (e = e.toLowerCase()), e;
          }
          function ai(t) {
            var e = [];
            return ui(new si(), t, e), e.join("");
          }
          function si() {}
          function ui(t, e, n) {
            if (null == e) n.push("null");
            else {
              if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var i = e;
                  (e = i.length), n.push("[");
                  for (var r = "", o = 0; o < e; o++)
                    n.push(r), ui(t, i[o], n), (r = ",");
                  return void n.push("]");
                }
                if (
                  !(
                    e instanceof String ||
                    e instanceof Number ||
                    e instanceof Boolean
                  )
                ) {
                  for (i in (n.push("{"), (r = ""), e))
                    Object.prototype.hasOwnProperty.call(e, i) &&
                      "function" != typeof (o = e[i]) &&
                      (n.push(r),
                      li(i, n),
                      n.push(":"),
                      ui(t, o, n),
                      (r = ","));
                  return void n.push("}");
                }
                e = e.valueOf();
              }
              switch (typeof e) {
                case "string":
                  li(e, n);
                  break;
                case "number":
                  n.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
                  break;
                case "boolean":
                  n.push(String(e));
                  break;
                case "function":
                  n.push("null");
                  break;
                default:
                  throw Error("Unknown type: " + typeof e);
              }
            }
          }
          ((t = Zn.prototype).add = function (t, e) {
            Qn(this), (this.c = null), (t = oi(this, t));
            var n = this.a.get(t);
            return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
          }),
            (t.clear = function () {
              (this.a = this.c = null), (this.b = 0);
            }),
            (t.forEach = function (t, e) {
              Qn(this),
                this.a.forEach(function (n, i) {
                  K(
                    n,
                    function (n) {
                      t.call(e, n, i, this);
                    },
                    this
                  );
                }, this);
            }),
            (t.Y = function () {
              Qn(this);
              for (
                var t = this.a.V(), e = this.a.Y(), n = [], i = 0;
                i < e.length;
                i++
              )
                for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
              return n;
            }),
            (t.V = function (t) {
              Qn(this);
              var e = [];
              if ("string" == typeof t)
                ni(this, t) && (e = Z(e, this.a.get(oi(this, t))));
              else {
                t = this.a.V();
                for (var n = 0; n < t.length; n++) e = Z(e, t[n]);
              }
              return e;
            }),
            (t.set = function (t, e) {
              return (
                Qn(this),
                (this.c = null),
                ni(this, (t = oi(this, t))) && (this.b -= this.a.get(t).length),
                this.a.set(t, [e]),
                (this.b += 1),
                this
              );
            }),
            (t.get = function (t, e) {
              return t && 0 < (t = this.V(t)).length ? String(t[0]) : e;
            }),
            (t.toString = function () {
              if (this.c) return this.c;
              if (!this.a) return "";
              for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++) {
                var i = e[n],
                  r = encodeURIComponent(String(i));
                i = this.V(i);
                for (var o = 0; o < i.length; o++) {
                  var a = r;
                  "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                    t.push(a);
                }
              }
              return (this.c = t.join("&"));
            });
          var ci = {
              '"': '\\"',
              "\\": "\\\\",
              "/": "\\/",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t",
              "\v": "\\u000b",
            },
            hi = /\uffff/.test("\uffff")
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g;
          function li(t, e) {
            e.push(
              '"',
              t.replace(hi, function (t) {
                var e = ci[t];
                return (
                  e ||
                    ((e =
                      "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                    (ci[t] = e)),
                  e
                );
              }),
              '"'
            );
          }
          function fi() {
            var t = Pi();
            return (Yt && !!ce && 11 == ce) || /Edge\/\d+/.test(t);
          }
          function pi() {
            return (
              (s.window && s.window.location.href) ||
              (self && self.location && self.location.href) ||
              ""
            );
          }
          function di(t, e) {
            e = e || s.window;
            var n = "about:blank";
            t && (n = Dt(Mt(t) || Vt)), (e.location.href = n);
          }
          function vi(t, e) {
            var n,
              i = [];
            for (n in t)
              n in e
                ? typeof t[n] != typeof e[n]
                  ? i.push(n)
                  : "object" == typeof t[n] && null != t[n] && null != e[n]
                  ? 0 < vi(t[n], e[n]).length && i.push(n)
                  : t[n] !== e[n] && i.push(n)
                : i.push(n);
            for (n in e) n in t || i.push(n);
            return i;
          }
          function mi(t) {
            return !!(
              (t = (t || Pi()).toLowerCase()).match(/android/) ||
              t.match(/webos/) ||
              t.match(/iphone|ipad|ipod/) ||
              t.match(/blackberry/) ||
              t.match(/windows phone/) ||
              t.match(/iemobile/)
            );
          }
          function gi(t) {
            t = t || s.window;
            try {
              t.close();
            } catch (t) {}
          }
          function bi(t, e, n) {
            var i = Math.floor(1e9 * Math.random()).toString();
            (e = e || 500), (n = n || 600);
            var r = (window.screen.availHeight - n) / 2,
              o = (window.screen.availWidth - e) / 2;
            for (a in ((e = {
              width: e,
              height: n,
              top: 0 < r ? r : 0,
              left: 0 < o ? o : 0,
              location: !0,
              resizable: !0,
              statusbar: !0,
              toolbar: !1,
            }),
            (n = Pi().toLowerCase()),
            i && ((e.target = i), ct(n, "crios/") && (e.target = "_blank")),
            Oi(Pi()) == Ni &&
              ((t = t || "http://localhost"), (e.scrollbars = !0)),
            (n = t || ""),
            (t = e) || (t = {}),
            (i = window),
            (e =
              n instanceof Pt
                ? n
                : Mt(void 0 !== n.href ? n.href : String(n)) || Vt),
            (n = t.target || n.target),
            (r = []),
            t))
              switch (a) {
                case "width":
                case "height":
                case "top":
                case "left":
                  r.push(a + "=" + t[a]);
                  break;
                case "target":
                case "noopener":
                case "noreferrer":
                  break;
                default:
                  r.push(a + "=" + (t[a] ? 1 : 0));
              }
            var a = r.join(",");
            if (
              (((pt("iPhone") && !pt("iPod") && !pt("iPad")) ||
                pt("iPad") ||
                pt("iPod")) &&
              i.navigator &&
              i.navigator.standalone &&
              n &&
              "_self" != n
                ? (yt((a = ge(document, "A")), "HTMLAnchorElement"),
                  (e = e instanceof Pt ? e : Ut(e)),
                  (a.href = Dt(e)),
                  a.setAttribute("target", n),
                  t.noreferrer && a.setAttribute("rel", "noreferrer"),
                  (t = document.createEvent("MouseEvent")).initMouseEvent(
                    "click",
                    !0,
                    !0,
                    i,
                    1
                  ),
                  a.dispatchEvent(t),
                  (a = {}))
                : t.noreferrer
                ? ((a = Bt("", i, n, a)),
                  (t = Dt(e)),
                  a &&
                    (Zt &&
                      ct(t, ";") &&
                      (t = "'" + t.replace(/'/g, "%27") + "'"),
                    (a.opener = null),
                    (t =
                      '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                      Gt(t) +
                      '">'),
                    (t = new Ht(
                      (t = (i = St()) ? i.createHTML(t) : t),
                      null,
                      qt
                    )),
                    (i = a.document)) &&
                    (i.write(
                      (function (t) {
                        return t instanceof Ht && t.constructor === Ht
                          ? t.a
                          : (j(
                              "expected object of type SafeHtml, got '" +
                                t +
                                "' of type " +
                                f(t)
                            ),
                            "type_error:SafeHtml");
                      })(t)
                    ),
                    i.close()))
                : (a = Bt(e, i, n, a)) && t.noopener && (a.opener = null),
              a)
            )
              try {
                a.focus();
              } catch (t) {}
            return a;
          }
          var yi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            wi = /^[^@]+@[^@]+$/;
          function Ii() {
            var t = null;
            return new Te(function (e) {
              "complete" == s.document.readyState
                ? e()
                : ((t = function () {
                    e();
                  }),
                  dn(window, "load", t));
            }).s(function (e) {
              throw (vn(window, "load", t), e);
            });
          }
          function Ei(t) {
            return (
              (t = t || Pi()),
              !(
                ("file:" !== Mi() && "ionic:" !== Mi()) ||
                !t.toLowerCase().match(/iphone|ipad|ipod|android/)
              )
            );
          }
          function Ti() {
            var t = s.window;
            try {
              return !(!t || t == t.top);
            } catch (t) {
              return !1;
            }
          }
          function Ai() {
            return (
              void 0 !== s.WorkerGlobalScope &&
              "function" == typeof s.importScripts
            );
          }
          function Si() {
            return J.INTERNAL.hasOwnProperty("reactNative")
              ? "ReactNative"
              : J.INTERNAL.hasOwnProperty("node")
              ? "Node"
              : Ai()
              ? "Worker"
              : "Browser";
          }
          function ki() {
            var t = Si();
            return "ReactNative" === t || "Node" === t;
          }
          var Ni = "Firefox",
            _i = "Chrome";
          function Oi(t) {
            var e = t.toLowerCase();
            return ct(e, "opera/") || ct(e, "opr/") || ct(e, "opios/")
              ? "Opera"
              : ct(e, "iemobile")
              ? "IEMobile"
              : ct(e, "msie") || ct(e, "trident/")
              ? "IE"
              : ct(e, "edge/")
              ? "Edge"
              : ct(e, "firefox/")
              ? Ni
              : ct(e, "silk/")
              ? "Silk"
              : ct(e, "blackberry")
              ? "Blackberry"
              : ct(e, "webos")
              ? "Webos"
              : !ct(e, "safari/") ||
                ct(e, "chrome/") ||
                ct(e, "crios/") ||
                ct(e, "android")
              ? (!ct(e, "chrome/") && !ct(e, "crios/")) || ct(e, "edge/")
                ? ct(e, "android")
                  ? "Android"
                  : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                    2 == t.length
                  ? t[1]
                  : "Other"
                : _i
              : "Safari";
          }
          var Ri = { ld: "FirebaseCore-web", nd: "FirebaseUI-web" };
          function Ci(t, e) {
            e = e || [];
            var n,
              i = [],
              r = {};
            for (n in Ri) r[Ri[n]] = !0;
            for (n = 0; n < e.length; n++)
              void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
            return (
              i.sort(),
              (e = i).length || (e = ["FirebaseCore-web"]),
              "Browser" === (i = Si())
                ? (i = Oi((r = Pi())))
                : "Worker" === i && (i = Oi((r = Pi())) + "-" + i),
              i + "/JsCore/" + t + "/" + e.join(",")
            );
          }
          function Pi() {
            return (s.navigator && s.navigator.userAgent) || "";
          }
          function Di(t, e) {
            (t = t.split(".")), (e = e || s);
            for (
              var n = 0;
              n < t.length && "object" == typeof e && null != e;
              n++
            )
              e = e[t[n]];
            return n != t.length && (e = void 0), e;
          }
          function Li() {
            try {
              var t = s.localStorage,
                e = qi();
              if (t)
                return (
                  t.setItem(e, "1"), t.removeItem(e), !fi() || !!s.indexedDB
                );
            } catch (t) {
              return Ai() && !!s.indexedDB;
            }
            return !1;
          }
          function xi() {
            return (
              (ji() || "chrome-extension:" === Mi() || Ei()) &&
              !ki() &&
              Li() &&
              !Ai()
            );
          }
          function ji() {
            return "http:" === Mi() || "https:" === Mi();
          }
          function Mi() {
            return (s.location && s.location.protocol) || null;
          }
          function Ui(t) {
            return !mi((t = t || Pi())) && Oi(t) != Ni;
          }
          function Fi(t) {
            return void 0 === t ? null : ai(t);
          }
          function Vi(t) {
            var e,
              n = {};
            for (e in t)
              t.hasOwnProperty(e) &&
                null !== t[e] &&
                void 0 !== t[e] &&
                (n[e] = t[e]);
            return n;
          }
          function Hi(t) {
            if (null !== t) return JSON.parse(t);
          }
          function qi(t) {
            return t || Math.floor(1e9 * Math.random()).toString();
          }
          function Bi(t) {
            return (
              "Safari" != Oi((t = t || Pi())) &&
              !t.toLowerCase().match(/iphone|ipad|ipod/)
            );
          }
          function Ki() {
            var t = s.___jsl;
            if (t && t.H)
              for (var e in t.H)
                if (
                  ((t.H[e].r = t.H[e].r || []),
                  (t.H[e].L = t.H[e].L || []),
                  (t.H[e].r = t.H[e].L.concat()),
                  t.CP)
                )
                  for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
          }
          function Gi(t, e) {
            if (t > e)
              throw Error("Short delay should be less than long delay!");
            (this.a = t),
              (this.c = e),
              (t = Pi()),
              (e = Si()),
              (this.b = mi(t) || "ReactNative" === e);
          }
          function Wi() {
            var t = s.document;
            return (
              !t ||
              void 0 === t.visibilityState ||
              "visible" == t.visibilityState
            );
          }
          function zi(t) {
            "undefined" != typeof console &&
              "function" == typeof console.warn &&
              console.warn(t);
          }
          function Xi(t) {
            try {
              var e = new Date(parseInt(t, 10));
              if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                return e.toUTCString();
            } catch (t) {}
            return null;
          }
          function Ji() {
            return !(
              !Di("fireauth.oauthhelper", s) && !Di("fireauth.iframe", s)
            );
          }
          Gi.prototype.get = function () {
            var t = s.navigator;
            return !t ||
              "boolean" != typeof t.onLine ||
              (!ji() &&
                "chrome-extension:" !== Mi() &&
                void 0 === t.connection) ||
              t.onLine
              ? this.b
                ? this.c
                : this.a
              : Math.min(5e3, this.a);
          };
          var Yi,
            $i = {};
          function Zi(t) {
            $i[t] || (($i[t] = !0), zi(t));
          }
          try {
            var Qi = {};
            Object.defineProperty(Qi, "abcd", {
              configurable: !0,
              enumerable: !0,
              value: 1,
            }),
              Object.defineProperty(Qi, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 2,
              }),
              (Yi = 2 == Qi.abcd);
          } catch (Xt) {
            Yi = !1;
          }
          function tr(t, e, n) {
            Yi
              ? Object.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                })
              : (t[e] = n);
          }
          function er(t, e) {
            if (e) for (var n in e) e.hasOwnProperty(n) && tr(t, n, e[n]);
          }
          function nr(t) {
            var e = {};
            return er(e, t), e;
          }
          function ir(t) {
            var e = t;
            if ("object" == typeof t && null != t)
              for (var n in ((e = "length" in t ? [] : {}), t))
                tr(e, n, ir(t[n]));
            return e;
          }
          function rr(t) {
            var e = t && (t[cr] ? "phone" : null);
            if (!(e && t && t[ur]))
              throw new k(
                "internal-error",
                "Internal assert: invalid MultiFactorInfo object"
              );
            tr(this, "uid", t[ur]), tr(this, "displayName", t[ar] || null);
            var n = null;
            t[sr] && (n = new Date(t[sr]).toUTCString()),
              tr(this, "enrollmentTime", n),
              tr(this, "factorId", e);
          }
          function or(t) {
            try {
              var e = new hr(t);
            } catch (t) {
              e = null;
            }
            return e;
          }
          rr.prototype.w = function () {
            return {
              uid: this.uid,
              displayName: this.displayName,
              factorId: this.factorId,
              enrollmentTime: this.enrollmentTime,
            };
          };
          var ar = "displayName",
            sr = "enrolledAt",
            ur = "mfaEnrollmentId",
            cr = "phoneInfo";
          function hr(t) {
            rr.call(this, t), tr(this, "phoneNumber", t[cr]);
          }
          function lr(t) {
            var e = {},
              n = t[vr],
              i = t[gr],
              r = t[br];
            if (
              ((t = or(t[mr])),
              !r ||
                (r != pr && r != dr && !n) ||
                (r == dr && !i) ||
                (r == fr && !t))
            )
              throw Error("Invalid checkActionCode response!");
            r == dr
              ? ((e[wr] = n || null), (e[Er] = n || null), (e[yr] = i))
              : ((e[wr] = i || null), (e[Er] = i || null), (e[yr] = n || null)),
              (e[Ir] = t || null),
              tr(this, Ar, r),
              tr(this, Tr, ir(e));
          }
          A(hr, rr),
            (hr.prototype.w = function () {
              var t = hr.$a.w.call(this);
              return (t.phoneNumber = this.phoneNumber), t;
            });
          var fr = "REVERT_SECOND_FACTOR_ADDITION",
            pr = "EMAIL_SIGNIN",
            dr = "VERIFY_AND_CHANGE_EMAIL",
            vr = "email",
            mr = "mfaInfo",
            gr = "newEmail",
            br = "requestType",
            yr = "email",
            wr = "fromEmail",
            Ir = "multiFactorInfo",
            Er = "previousEmail",
            Tr = "data",
            Ar = "operation";
          function Sr(t) {
            var e = Hn((t = qn(t)), kr) || null,
              n = Hn(t, Nr) || null,
              i = Hn(t, Rr) || null;
            if (((i = (i && Pr[i]) || null), !e || !n || !i))
              throw new k(
                "argument-error",
                kr +
                  ", " +
                  Nr +
                  "and " +
                  Rr +
                  " are required in a valid action code URL."
              );
            er(this, {
              apiKey: e,
              operation: i,
              code: n,
              continueUrl: Hn(t, _r) || null,
              languageCode: Hn(t, Or) || null,
              tenantId: Hn(t, Cr) || null,
            });
          }
          var kr = "apiKey",
            Nr = "oobCode",
            _r = "continueUrl",
            Or = "languageCode",
            Rr = "mode",
            Cr = "tenantId",
            Pr = {
              recoverEmail: "RECOVER_EMAIL",
              resetPassword: "PASSWORD_RESET",
              revertSecondFactorAddition: fr,
              signIn: pr,
              verifyAndChangeEmail: dr,
              verifyEmail: "VERIFY_EMAIL",
            };
          function Dr(t) {
            try {
              return new Sr(t);
            } catch (t) {
              return null;
            }
          }
          function Lr(t) {
            var e = t[Fr];
            if (void 0 === e) throw new k("missing-continue-uri");
            if ("string" != typeof e || ("string" == typeof e && !e.length))
              throw new k("invalid-continue-uri");
            (this.h = e), (this.b = this.a = null), (this.g = !1);
            var n = t[xr];
            if (n && "object" == typeof n) {
              e = n[qr];
              var i = n[Vr];
              if (((n = n[Hr]), "string" == typeof e && e.length)) {
                if (((this.a = e), void 0 !== i && "boolean" != typeof i))
                  throw new k(
                    "argument-error",
                    Vr + " property must be a boolean when specified."
                  );
                if (
                  ((this.g = !!i),
                  void 0 !== n &&
                    ("string" != typeof n ||
                      ("string" == typeof n && !n.length)))
                )
                  throw new k(
                    "argument-error",
                    Hr + " property must be a non empty string when specified."
                  );
                this.b = n || null;
              } else {
                if (void 0 !== e)
                  throw new k(
                    "argument-error",
                    qr + " property must be a non empty string when specified."
                  );
                if (void 0 !== i || void 0 !== n)
                  throw new k("missing-android-pkg-name");
              }
            } else if (void 0 !== n)
              throw new k(
                "argument-error",
                xr + " property must be a non null object when specified."
              );
            if (((this.f = null), (e = t[Ur]) && "object" == typeof e)) {
              if ("string" == typeof (e = e[Br]) && e.length) this.f = e;
              else if (void 0 !== e)
                throw new k(
                  "argument-error",
                  Br + " property must be a non empty string when specified."
                );
            } else if (void 0 !== e)
              throw new k(
                "argument-error",
                Ur + " property must be a non null object when specified."
              );
            if (void 0 !== (e = t[Mr]) && "boolean" != typeof e)
              throw new k(
                "argument-error",
                Mr + " property must be a boolean when specified."
              );
            if (
              ((this.c = !!e),
              void 0 !== (t = t[jr]) &&
                ("string" != typeof t || ("string" == typeof t && !t.length)))
            )
              throw new k(
                "argument-error",
                jr + " property must be a non empty string when specified."
              );
            this.i = t || null;
          }
          var xr = "android",
            jr = "dynamicLinkDomain",
            Mr = "handleCodeInApp",
            Ur = "iOS",
            Fr = "url",
            Vr = "installApp",
            Hr = "minimumVersion",
            qr = "packageName",
            Br = "bundleId";
          function Kr(t) {
            var e = {};
            for (var n in ((e.continueUrl = t.h),
            (e.canHandleCodeInApp = t.c),
            (e.androidPackageName = t.a) &&
              ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
            (e.iOSBundleId = t.f),
            (e.dynamicLinkDomain = t.i),
            e))
              null === e[n] && delete e[n];
            return e;
          }
          var Gr = null;
          function Wr(t) {
            var e = "";
            return (
              (function (t, e) {
                function n(e) {
                  for (; i < t.length; ) {
                    var n = t.charAt(i++),
                      r = Gr[n];
                    if (null != r) return r;
                    if (!/^[\s\xa0]*$/.test(n))
                      throw Error("Unknown base64 encoding at char: " + n);
                  }
                  return e;
                }
                !(function () {
                  if (!Gr) {
                    Gr = {};
                    for (
                      var t =
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                            ""
                          ),
                        e = ["+/=", "+/", "-_=", "-_.", "-_"],
                        n = 0;
                      5 > n;
                      n++
                    )
                      for (
                        var i = t.concat(e[n].split("")), r = 0;
                        r < i.length;
                        r++
                      ) {
                        var o = i[r];
                        void 0 === Gr[o] && (Gr[o] = r);
                      }
                  }
                })();
                for (var i = 0; ; ) {
                  var r = n(-1),
                    o = n(0),
                    a = n(64),
                    s = n(64);
                  if (64 === s && -1 === r) break;
                  e((r << 2) | (o >> 4)),
                    64 != a &&
                      (e(((o << 4) & 240) | (a >> 2)),
                      64 != s && e(((a << 6) & 192) | s));
                }
              })(t, function (t) {
                e += String.fromCharCode(t);
              }),
              e
            );
          }
          function zr(t) {
            var e = Jr(t);
            if (!(e && e.sub && e.iss && e.aud && e.exp))
              throw Error("Invalid JWT");
            (this.g = t),
              (this.c = e.exp),
              (this.h = e.sub),
              T(),
              (this.a =
                e.provider_id ||
                (e.firebase && e.firebase.sign_in_provider) ||
                null),
              (this.f = (e.firebase && e.firebase.tenant) || null),
              (this.b = !!e.is_anonymous || "anonymous" == this.a);
          }
          function Xr(t) {
            try {
              return new zr(t);
            } catch (t) {
              return null;
            }
          }
          function Jr(t) {
            if (!t) return null;
            if (3 != (t = t.split(".")).length) return null;
            for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
              t += ".";
            try {
              return JSON.parse(Wr(t));
            } catch (t) {}
            return null;
          }
          (zr.prototype.S = function () {
            return this.f;
          }),
            (zr.prototype.i = function () {
              return this.b;
            }),
            (zr.prototype.toString = function () {
              return this.g;
            });
          var Yr =
              "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(
                " "
              ),
            $r = [
              "client_id",
              "response_type",
              "scope",
              "redirect_uri",
              "state",
            ],
            Zr = {
              md: {
                Ja: "locale",
                ua: 700,
                ta: 600,
                fa: "facebook.com",
                Wa: $r,
              },
              od: { Ja: null, ua: 500, ta: 750, fa: "github.com", Wa: $r },
              pd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Wa: $r },
              vd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Wa: Yr },
              jd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Wa: [] },
            };
          function Qr(t) {
            for (var e in Zr) if (Zr[e].fa == t) return Zr[e];
            return null;
          }
          function to(t) {
            var e = {};
            (e["facebook.com"] = oo),
              (e["google.com"] = so),
              (e["github.com"] = ao),
              (e["twitter.com"] = uo);
            var n = t && t[no];
            try {
              if (n) return e[n] ? new e[n](t) : new ro(t);
              if (void 0 !== t[eo]) return new io(t);
            } catch (t) {}
            return null;
          }
          var eo = "idToken",
            no = "providerId";
          function io(t) {
            var e = t[no];
            if (!e && t[eo]) {
              var n = Xr(t[eo]);
              n && n.a && (e = n.a);
            }
            if (!e) throw Error("Invalid additional user info!");
            ("anonymous" != e && "custom" != e) || (e = null),
              (n = !1),
              void 0 !== t.isNewUser
                ? (n = !!t.isNewUser)
                : "identitytoolkit#SignupNewUserResponse" === t.kind &&
                  (n = !0),
              tr(this, "providerId", e),
              tr(this, "isNewUser", n);
          }
          function ro(t) {
            io.call(this, t),
              tr(this, "profile", ir((t = Hi(t.rawUserInfo || "{}")) || {}));
          }
          function oo(t) {
            if ((ro.call(this, t), "facebook.com" != this.providerId))
              throw Error("Invalid provider ID!");
          }
          function ao(t) {
            if ((ro.call(this, t), "github.com" != this.providerId))
              throw Error("Invalid provider ID!");
            tr(this, "username", (this.profile && this.profile.login) || null);
          }
          function so(t) {
            if ((ro.call(this, t), "google.com" != this.providerId))
              throw Error("Invalid provider ID!");
          }
          function uo(t) {
            if ((ro.call(this, t), "twitter.com" != this.providerId))
              throw Error("Invalid provider ID!");
            tr(this, "username", t.screenName || null);
          }
          function co(t) {
            var e = qn(t),
              n = Hn(e, "link"),
              i = Hn(qn(n), "link");
            return (
              (e = Hn(e, "deep_link_id")), Hn(qn(e), "link") || e || i || n || t
            );
          }
          function ho(t, e) {
            if (!t && !e)
              throw new k(
                "internal-error",
                "Internal assert: no raw session string available"
              );
            if (t && e)
              throw new k(
                "internal-error",
                "Internal assert: unable to determine the session type"
              );
            (this.a = t || null),
              (this.b = e || null),
              (this.type = this.a ? lo : fo);
          }
          A(ro, io), A(oo, ro), A(ao, ro), A(so, ro), A(uo, ro);
          var lo = "enroll",
            fo = "signin";
          function po() {}
          function vo(t, e) {
            return t
              .then(function (t) {
                if (t[is]) {
                  var n = Xr(t[is]);
                  if (!n || e != n.h) throw new k("user-mismatch");
                  return t;
                }
                throw new k("user-mismatch");
              })
              .s(function (t) {
                throw t && t.code && t.code == O + "user-not-found"
                  ? new k("user-mismatch")
                  : t;
              });
          }
          function mo(t, e) {
            if (!e)
              throw new k("internal-error", "failed to construct a credential");
            (this.a = e),
              tr(this, "providerId", t),
              tr(this, "signInMethod", t);
          }
          function go(t) {
            return { pendingToken: t.a, requestUri: "http://localhost" };
          }
          function bo(t) {
            if (
              t &&
              t.providerId &&
              t.signInMethod &&
              0 == t.providerId.indexOf("saml.") &&
              t.pendingToken
            )
              try {
                return new mo(t.providerId, t.pendingToken);
              } catch (t) {}
            return null;
          }
          function yo(t, e, n) {
            if (((this.a = null), e.idToken || e.accessToken))
              e.idToken && tr(this, "idToken", e.idToken),
                e.accessToken && tr(this, "accessToken", e.accessToken),
                e.nonce && !e.pendingToken && tr(this, "nonce", e.nonce),
                e.pendingToken && (this.a = e.pendingToken);
            else {
              if (!e.oauthToken || !e.oauthTokenSecret)
                throw new k(
                  "internal-error",
                  "failed to construct a credential"
                );
              tr(this, "accessToken", e.oauthToken),
                tr(this, "secret", e.oauthTokenSecret);
            }
            tr(this, "providerId", t), tr(this, "signInMethod", n);
          }
          function wo(t) {
            var e = {};
            return (
              t.idToken && (e.id_token = t.idToken),
              t.accessToken && (e.access_token = t.accessToken),
              t.secret && (e.oauth_token_secret = t.secret),
              (e.providerId = t.providerId),
              t.nonce && !t.a && (e.nonce = t.nonce),
              (e = {
                postBody: ti(e).toString(),
                requestUri: "http://localhost",
              }),
              t.a && (delete e.postBody, (e.pendingToken = t.a)),
              e
            );
          }
          function Io(t) {
            if (t && t.providerId && t.signInMethod) {
              var e = {
                idToken: t.oauthIdToken,
                accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                oauthTokenSecret: t.oauthTokenSecret,
                oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                nonce: t.nonce,
                pendingToken: t.pendingToken,
              };
              try {
                return new yo(t.providerId, e, t.signInMethod);
              } catch (t) {}
            }
            return null;
          }
          function Eo(t, e) {
            (this.Pc = e || []),
              er(this, { providerId: t, isOAuthProvider: !0 }),
              (this.Hb = {}),
              (this.ob = (Qr(t) || {}).Ja || null),
              (this.nb = null);
          }
          function To(t) {
            if ("string" != typeof t || 0 != t.indexOf("saml."))
              throw new k(
                "argument-error",
                'SAML provider IDs must be prefixed with "saml."'
              );
            Eo.call(this, t, []);
          }
          function Ao(t) {
            Eo.call(this, t, $r), (this.a = []);
          }
          function So() {
            Ao.call(this, "facebook.com");
          }
          function ko(t) {
            if (!t)
              throw new k(
                "argument-error",
                "credential failed: expected 1 argument (the OAuth access token)."
              );
            var e = t;
            return (
              v(t) && (e = t.accessToken),
              new So().credential({ accessToken: e })
            );
          }
          function No() {
            Ao.call(this, "github.com");
          }
          function _o(t) {
            if (!t)
              throw new k(
                "argument-error",
                "credential failed: expected 1 argument (the OAuth access token)."
              );
            var e = t;
            return (
              v(t) && (e = t.accessToken),
              new No().credential({ accessToken: e })
            );
          }
          function Oo() {
            Ao.call(this, "google.com"), this.Ca("profile");
          }
          function Ro(t, e) {
            var n = t;
            return (
              v(t) && ((n = t.idToken), (e = t.accessToken)),
              new Oo().credential({ idToken: n, accessToken: e })
            );
          }
          function Co() {
            Eo.call(this, "twitter.com", Yr);
          }
          function Po(t, e) {
            var n = t;
            if (
              (v(n) || (n = { oauthToken: t, oauthTokenSecret: e }),
              !n.oauthToken || !n.oauthTokenSecret)
            )
              throw new k(
                "argument-error",
                "credential failed: expected 2 arguments (the OAuth access token and secret)."
              );
            return new yo("twitter.com", n, "twitter.com");
          }
          function Do(t, e, n) {
            (this.a = t),
              (this.f = e),
              tr(this, "providerId", "password"),
              tr(
                this,
                "signInMethod",
                n === xo.EMAIL_LINK_SIGN_IN_METHOD
                  ? xo.EMAIL_LINK_SIGN_IN_METHOD
                  : xo.EMAIL_PASSWORD_SIGN_IN_METHOD
              );
          }
          function Lo(t) {
            return t && t.email && t.password
              ? new Do(t.email, t.password, t.signInMethod)
              : null;
          }
          function xo() {
            er(this, { providerId: "password", isOAuthProvider: !1 });
          }
          function jo(t, e) {
            if (!(e = Mo(e)))
              throw new k("argument-error", "Invalid email link!");
            return new Do(t, e.code, xo.EMAIL_LINK_SIGN_IN_METHOD);
          }
          function Mo(t) {
            return (t = Dr((t = co(t)))) && t.operation === pr ? t : null;
          }
          function Uo(t) {
            if (!((t.cb && t.bb) || (t.La && t.ea)))
              throw new k("internal-error");
            (this.a = t),
              tr(this, "providerId", "phone"),
              (this.fa = "phone"),
              tr(this, "signInMethod", "phone");
          }
          function Fo(t) {
            if (
              t &&
              "phone" === t.providerId &&
              ((t.verificationId && t.verificationCode) ||
                (t.temporaryProof && t.phoneNumber))
            ) {
              var e = {};
              return (
                K(
                  [
                    "verificationId",
                    "verificationCode",
                    "temporaryProof",
                    "phoneNumber",
                  ],
                  function (n) {
                    t[n] && (e[n] = t[n]);
                  }
                ),
                new Uo(e)
              );
            }
            return null;
          }
          function Vo(t) {
            return t.a.La && t.a.ea
              ? { temporaryProof: t.a.La, phoneNumber: t.a.ea }
              : { sessionInfo: t.a.cb, code: t.a.bb };
          }
          function Ho(t) {
            try {
              this.a = t || J.auth();
            } catch (t) {
              throw new k(
                "argument-error",
                "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
              );
            }
            er(this, { providerId: "phone", isOAuthProvider: !1 });
          }
          function qo(t, e) {
            if (!t) throw new k("missing-verification-id");
            if (!e) throw new k("missing-verification-code");
            return new Uo({ cb: t, bb: e });
          }
          function Bo(t) {
            if (t.temporaryProof && t.phoneNumber)
              return new Uo({ La: t.temporaryProof, ea: t.phoneNumber });
            var e = t && t.providerId;
            if (!e || "password" === e) return null;
            var n = t && t.oauthAccessToken,
              i = t && t.oauthTokenSecret,
              r = t && t.nonce,
              o = t && t.oauthIdToken,
              a = t && t.pendingToken;
            try {
              switch (e) {
                case "google.com":
                  return Ro(o, n);
                case "facebook.com":
                  return ko(n);
                case "github.com":
                  return _o(n);
                case "twitter.com":
                  return Po(n, i);
                default:
                  return n || i || o || a
                    ? a
                      ? 0 == e.indexOf("saml.")
                        ? new mo(e, a)
                        : new yo(
                            e,
                            {
                              pendingToken: a,
                              idToken: t.oauthIdToken,
                              accessToken: t.oauthAccessToken,
                            },
                            e
                          )
                      : new Ao(e).credential({
                          idToken: o,
                          accessToken: n,
                          rawNonce: r,
                        })
                    : null;
              }
            } catch (t) {
              return null;
            }
          }
          function Ko(t) {
            if (!t.isOAuthProvider) throw new k("invalid-oauth-provider");
          }
          function Go(t, e, n, i, r, o, a) {
            if (
              ((this.c = t),
              (this.b = e || null),
              (this.g = n || null),
              (this.f = i || null),
              (this.i = o || null),
              (this.h = a || null),
              (this.a = r || null),
              !this.g && !this.a)
            )
              throw new k("invalid-auth-event");
            if (this.g && this.a) throw new k("invalid-auth-event");
            if (this.g && !this.f) throw new k("invalid-auth-event");
          }
          function Wo(t) {
            return (t = t || {}).type
              ? new Go(
                  t.type,
                  t.eventId,
                  t.urlResponse,
                  t.sessionId,
                  t.error && N(t.error),
                  t.postBody,
                  t.tenantId
                )
              : null;
          }
          function zo() {
            (this.b = null), (this.a = []);
          }
          (ho.prototype.Ha = function () {
            return this.a ? Re(this.a) : Re(this.b);
          }),
            (ho.prototype.w = function () {
              return this.type == lo
                ? { multiFactorSession: { idToken: this.a } }
                : { multiFactorSession: { pendingCredential: this.b } };
            }),
            (po.prototype.ja = function () {}),
            (po.prototype.b = function () {}),
            (po.prototype.c = function () {}),
            (po.prototype.w = function () {}),
            (mo.prototype.ja = function (t) {
              return Ss(t, go(this));
            }),
            (mo.prototype.b = function (t, e) {
              var n = go(this);
              return (n.idToken = e), ks(t, n);
            }),
            (mo.prototype.c = function (t, e) {
              return vo(Ns(t, go(this)), e);
            }),
            (mo.prototype.w = function () {
              return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.a,
              };
            }),
            (yo.prototype.ja = function (t) {
              return Ss(t, wo(this));
            }),
            (yo.prototype.b = function (t, e) {
              var n = wo(this);
              return (n.idToken = e), ks(t, n);
            }),
            (yo.prototype.c = function (t, e) {
              return vo(Ns(t, wo(this)), e);
            }),
            (yo.prototype.w = function () {
              var t = {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
              };
              return (
                this.idToken && (t.oauthIdToken = this.idToken),
                this.accessToken && (t.oauthAccessToken = this.accessToken),
                this.secret && (t.oauthTokenSecret = this.secret),
                this.nonce && (t.nonce = this.nonce),
                this.a && (t.pendingToken = this.a),
                t
              );
            }),
            (Eo.prototype.Ka = function (t) {
              return (this.Hb = mt(t)), this;
            }),
            A(To, Eo),
            A(Ao, Eo),
            (Ao.prototype.Ca = function (t) {
              return X(this.a, t) || this.a.push(t), this;
            }),
            (Ao.prototype.Pb = function () {
              return Q(this.a);
            }),
            (Ao.prototype.credential = function (t, e) {
              var n;
              if (
                !(n = v(t)
                  ? {
                      idToken: t.idToken || null,
                      accessToken: t.accessToken || null,
                      nonce: t.rawNonce || null,
                    }
                  : { idToken: t || null, accessToken: e || null }).idToken &&
                !n.accessToken
              )
                throw new k(
                  "argument-error",
                  "credential failed: must provide the ID token and/or the access token."
                );
              return new yo(this.providerId, n, this.providerId);
            }),
            A(So, Ao),
            tr(So, "PROVIDER_ID", "facebook.com"),
            tr(So, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
            A(No, Ao),
            tr(No, "PROVIDER_ID", "github.com"),
            tr(No, "GITHUB_SIGN_IN_METHOD", "github.com"),
            A(Oo, Ao),
            tr(Oo, "PROVIDER_ID", "google.com"),
            tr(Oo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
            A(Co, Eo),
            tr(Co, "PROVIDER_ID", "twitter.com"),
            tr(Co, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
            (Do.prototype.ja = function (t) {
              return this.signInMethod == xo.EMAIL_LINK_SIGN_IN_METHOD
                ? uu(t, xs, { email: this.a, oobCode: this.f })
                : uu(t, iu, { email: this.a, password: this.f });
            }),
            (Do.prototype.b = function (t, e) {
              return this.signInMethod == xo.EMAIL_LINK_SIGN_IN_METHOD
                ? uu(t, js, { idToken: e, email: this.a, oobCode: this.f })
                : uu(t, Js, { idToken: e, email: this.a, password: this.f });
            }),
            (Do.prototype.c = function (t, e) {
              return vo(this.ja(t), e);
            }),
            (Do.prototype.w = function () {
              return {
                email: this.a,
                password: this.f,
                signInMethod: this.signInMethod,
              };
            }),
            er(xo, { PROVIDER_ID: "password" }),
            er(xo, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }),
            er(xo, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }),
            (Uo.prototype.ja = function (t) {
              return t.eb(Vo(this));
            }),
            (Uo.prototype.b = function (t, e) {
              var n = Vo(this);
              return (n.idToken = e), uu(t, ou, n);
            }),
            (Uo.prototype.c = function (t, e) {
              var n = Vo(this);
              return (n.operation = "REAUTH"), vo((t = uu(t, au, n)), e);
            }),
            (Uo.prototype.w = function () {
              var t = { providerId: "phone" };
              return (
                this.a.cb && (t.verificationId = this.a.cb),
                this.a.bb && (t.verificationCode = this.a.bb),
                this.a.La && (t.temporaryProof = this.a.La),
                this.a.ea && (t.phoneNumber = this.a.ea),
                t
              );
            }),
            (Ho.prototype.eb = function (t, e) {
              var n = this.a.a;
              return Re(e.verify()).then(function (i) {
                if ("string" != typeof i)
                  throw new k(
                    "argument-error",
                    "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
                  );
                switch (e.type) {
                  case "recaptcha":
                    var r = v(t) ? t.session : null,
                      o = v(t) ? t.phoneNumber : t;
                    return (
                      r && r.type == lo
                        ? r.Ha().then(function (t) {
                            return (function (t, e) {
                              return uu(t, $s, e).then(function (t) {
                                return t.phoneSessionInfo.sessionInfo;
                              });
                            })(n, {
                              idToken: t,
                              phoneEnrollmentInfo: {
                                phoneNumber: o,
                                recaptchaToken: i,
                              },
                            });
                          })
                        : r && r.type == fo
                        ? r.Ha().then(function (e) {
                            return (function (t, e) {
                              return uu(t, Zs, e).then(function (t) {
                                return t.phoneResponseInfo.sessionInfo;
                              });
                            })(n, {
                              mfaPendingCredential: e,
                              mfaEnrollmentId:
                                (t.multiFactorHint && t.multiFactorHint.uid) ||
                                t.multiFactorUid,
                              phoneSignInInfo: { recaptchaToken: i },
                            });
                          })
                        : (function (t, e) {
                            return uu(t, zs, e);
                          })(n, { phoneNumber: o, recaptchaToken: i })
                    ).then(
                      function (t) {
                        return "function" == typeof e.reset && e.reset(), t;
                      },
                      function (t) {
                        throw ("function" == typeof e.reset && e.reset(), t);
                      }
                    );
                  default:
                    throw new k(
                      "argument-error",
                      'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                    );
                }
              });
            }),
            er(Ho, { PROVIDER_ID: "phone" }),
            er(Ho, { PHONE_SIGN_IN_METHOD: "phone" }),
            (Go.prototype.getUid = function () {
              var t = [];
              return (
                t.push(this.c),
                this.b && t.push(this.b),
                this.f && t.push(this.f),
                this.h && t.push(this.h),
                t.join("-")
              );
            }),
            (Go.prototype.S = function () {
              return this.h;
            }),
            (Go.prototype.w = function () {
              return {
                type: this.c,
                eventId: this.b,
                urlResponse: this.g,
                sessionId: this.f,
                postBody: this.i,
                tenantId: this.h,
                error: this.a && this.a.w(),
              };
            });
          var Xo,
            Jo = null;
          function Yo(t) {
            var e = "unauthorized-domain",
              n = void 0,
              i = qn(t);
            (t = i.a),
              "chrome-extension" == (i = i.f)
                ? (n = Kt(
                    "This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                    t
                  ))
                : "http" == i || "https" == i
                ? (n = Kt(
                    "This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                    t
                  ))
                : (e = "operation-not-supported-in-this-environment"),
              k.call(this, e, n);
          }
          function $o(t, e, n) {
            k.call(this, t, n),
              (t = e || {}).Ib && tr(this, "email", t.Ib),
              t.ea && tr(this, "phoneNumber", t.ea),
              t.credential && tr(this, "credential", t.credential),
              t.Yb && tr(this, "tenantId", t.Yb);
          }
          function Zo(t) {
            if (t.code) {
              var e = t.code || "";
              0 == e.indexOf(O) && (e = e.substring(O.length));
              var n = { credential: Bo(t), Yb: t.tenantId };
              if (t.email) n.Ib = t.email;
              else if (t.phoneNumber) n.ea = t.phoneNumber;
              else if (!n.credential) return new k(e, t.message || void 0);
              return new $o(e, n, t.message);
            }
            return null;
          }
          function Qo() {}
          function ta(t) {
            return t.c || (t.c = t.b());
          }
          function ea() {}
          function na(t) {
            if (
              !t.f &&
              "undefined" == typeof XMLHttpRequest &&
              "undefined" != typeof ActiveXObject
            ) {
              for (
                var e = [
                    "MSXML2.XMLHTTP.6.0",
                    "MSXML2.XMLHTTP.3.0",
                    "MSXML2.XMLHTTP",
                    "Microsoft.XMLHTTP",
                  ],
                  n = 0;
                n < e.length;
                n++
              ) {
                var i = e[n];
                try {
                  return new ActiveXObject(i), (t.f = i);
                } catch (t) {}
              }
              throw Error(
                "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
              );
            }
            return t.f;
          }
          function ia() {}
          function ra() {
            (this.a = new XDomainRequest()),
              (this.readyState = 0),
              (this.onreadystatechange = null),
              (this.responseType = this.responseText = this.response = ""),
              (this.status = -1),
              (this.statusText = ""),
              (this.a.onload = I(this.pc, this)),
              (this.a.onerror = I(this.Rb, this)),
              (this.a.onprogress = I(this.qc, this)),
              (this.a.ontimeout = I(this.uc, this));
          }
          function oa(t, e) {
            (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
          }
          function aa(t, e, n) {
            this.reset(t, e, n, void 0, void 0);
          }
          A(Yo, k),
            A($o, k),
            ($o.prototype.w = function () {
              var t = { code: this.code, message: this.message };
              this.email && (t.email = this.email),
                this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                this.tenantId && (t.tenantId = this.tenantId);
              var e = this.credential && this.credential.w();
              return e && bt(t, e), t;
            }),
            ($o.prototype.toJSON = function () {
              return this.w();
            }),
            (Qo.prototype.c = null),
            A(ea, Qo),
            (ea.prototype.a = function () {
              var t = na(this);
              return t ? new ActiveXObject(t) : new XMLHttpRequest();
            }),
            (ea.prototype.b = function () {
              var t = {};
              return na(this) && ((t[0] = !0), (t[1] = !0)), t;
            }),
            (Xo = new ea()),
            A(ia, Qo),
            (ia.prototype.a = function () {
              var t = new XMLHttpRequest();
              if ("withCredentials" in t) return t;
              if ("undefined" != typeof XDomainRequest) return new ra();
              throw Error("Unsupported browser");
            }),
            (ia.prototype.b = function () {
              return {};
            }),
            ((t = ra.prototype).open = function (t, e, n) {
              if (null != n && !n)
                throw Error("Only async requests are supported.");
              this.a.open(t, e);
            }),
            (t.send = function (t) {
              if (t) {
                if ("string" != typeof t)
                  throw Error("Only string data is supported");
                this.a.send(t);
              } else this.a.send();
            }),
            (t.abort = function () {
              this.a.abort();
            }),
            (t.setRequestHeader = function () {}),
            (t.getResponseHeader = function (t) {
              return "content-type" == t.toLowerCase()
                ? this.a.contentType
                : "";
            }),
            (t.pc = function () {
              (this.status = 200),
                (this.response = this.responseText = this.a.responseText),
                oa(this, 4);
            }),
            (t.Rb = function () {
              (this.status = 500),
                (this.response = this.responseText = ""),
                oa(this, 4);
            }),
            (t.uc = function () {
              this.Rb();
            }),
            (t.qc = function () {
              (this.status = 200), oa(this, 1);
            }),
            (t.getAllResponseHeaders = function () {
              return "content-type: " + this.a.contentType;
            }),
            (aa.prototype.a = null);
          function sa(t) {
            (this.f = t), (this.b = this.c = this.a = null);
          }
          function ua(t, e) {
            (this.name = t), (this.value = e);
          }
          (aa.prototype.reset = function (t, e, n, i, r) {
            "number" == typeof r || 0, i || T(), delete this.a;
          }),
            (ua.prototype.toString = function () {
              return this.name;
            });
          var ca = new ua("SEVERE", 1e3),
            ha = new ua("WARNING", 900),
            la = new ua("CONFIG", 700),
            fa = new ua("FINE", 500);
          function pa(t) {
            return t.c
              ? t.c
              : t.a
              ? pa(t.a)
              : (j("Root logger has no level set."), null);
          }
          sa.prototype.log = function (t, e, n) {
            if (t.value >= pa(this).value)
              for (
                d(e) && (e = e()),
                  t = new aa(t, String(e), this.f),
                  n && (t.a = n),
                  n = this;
                n;

              )
                n = n.a;
          };
          var da = {},
            va = null;
          function ma(t) {
            var e;
            if (
              (va || ((va = new sa("")), (da[""] = va), (va.c = la)),
              !(e = da[t]))
            ) {
              e = new sa(t);
              var n = t.lastIndexOf("."),
                i = t.substr(n + 1);
              (n = ma(t.substr(0, n))).b || (n.b = {}),
                (n.b[i] = e),
                (e.a = n),
                (da[t] = e);
            }
            return e;
          }
          function ga(t, e) {
            t && t.log(fa, e, void 0);
          }
          function ba(t) {
            this.f = t;
          }
          function ya(t) {
            An.call(this),
              (this.u = t),
              (this.h = void 0),
              (this.readyState = wa),
              (this.status = 0),
              (this.responseType =
                this.responseText =
                this.response =
                this.statusText =
                  ""),
              (this.onreadystatechange = null),
              (this.l = new Headers()),
              (this.b = null),
              (this.o = "GET"),
              (this.f = ""),
              (this.a = !1),
              (this.i = ma("goog.net.FetchXmlHttp")),
              (this.m = this.c = this.g = null);
          }
          A(ba, Qo),
            (ba.prototype.a = function () {
              return new ya(this.f);
            }),
            (ba.prototype.b = (function (t) {
              return function () {
                return t;
              };
            })({})),
            A(ya, An);
          var wa = 0;
          function Ia(t) {
            t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t));
          }
          function Ea(t) {
            (t.readyState = 4), (t.g = null), (t.c = null), (t.m = null), Ta(t);
          }
          function Ta(t) {
            t.onreadystatechange && t.onreadystatechange.call(t);
          }
          function Aa(t) {
            An.call(this),
              (this.headers = new Pn()),
              (this.O = t || null),
              (this.c = !1),
              (this.A = this.a = null),
              (this.h = this.P = this.l = ""),
              (this.f = this.N = this.i = this.G = !1),
              (this.g = 0),
              (this.o = null),
              (this.m = Sa),
              (this.u = this.R = !1);
          }
          ((t = ya.prototype).open = function (t, e) {
            if (this.readyState != wa)
              throw (this.abort(), Error("Error reopening a connection"));
            (this.o = t), (this.f = e), (this.readyState = 1), Ta(this);
          }),
            (t.send = function (t) {
              if (1 != this.readyState)
                throw (this.abort(), Error("need to call open() first. "));
              this.a = !0;
              var e = {
                headers: this.l,
                method: this.o,
                credentials: this.h,
                cache: void 0,
              };
              t && (e.body = t),
                this.u
                  .fetch(new Request(this.f, e))
                  .then(this.tc.bind(this), this.Ta.bind(this));
            }),
            (t.abort = function () {
              (this.response = this.responseText = ""),
                (this.l = new Headers()),
                (this.status = 0),
                this.c && this.c.cancel("Request was aborted."),
                1 <= this.readyState &&
                  this.a &&
                  4 != this.readyState &&
                  ((this.a = !1), Ea(this)),
                (this.readyState = wa);
            }),
            (t.tc = function (t) {
              this.a &&
                ((this.g = t),
                this.b ||
                  ((this.status = this.g.status),
                  (this.statusText = this.g.statusText),
                  (this.b = t.headers),
                  (this.readyState = 2),
                  Ta(this)),
                this.a &&
                  ((this.readyState = 3),
                  Ta(this),
                  this.a &&
                    ("arraybuffer" === this.responseType
                      ? t
                          .arrayBuffer()
                          .then(this.rc.bind(this), this.Ta.bind(this))
                      : void 0 !== s.ReadableStream && "body" in t
                      ? ((this.response = this.responseText = ""),
                        (this.c = t.body.getReader()),
                        (this.m = new TextDecoder()),
                        Ia(this))
                      : t
                          .text()
                          .then(this.sc.bind(this), this.Ta.bind(this)))));
            }),
            (t.oc = function (t) {
              if (this.a) {
                var e = this.m.decode(t.value ? t.value : new Uint8Array(0), {
                  stream: !t.done,
                });
                e && (this.response = this.responseText += e),
                  t.done ? Ea(this) : Ta(this),
                  3 == this.readyState && Ia(this);
              }
            }),
            (t.sc = function (t) {
              this.a && ((this.response = this.responseText = t), Ea(this));
            }),
            (t.rc = function (t) {
              this.a && ((this.response = t), Ea(this));
            }),
            (t.Ta = function (t) {
              var e = this.i;
              e &&
                e.log(
                  ha,
                  "Failed to fetch url " + this.f,
                  t instanceof Error ? t : Error(t)
                ),
                this.a && Ea(this);
            }),
            (t.setRequestHeader = function (t, e) {
              this.l.append(t, e);
            }),
            (t.getResponseHeader = function (t) {
              return this.b
                ? this.b.get(t.toLowerCase()) || ""
                : ((t = this.i) &&
                    t.log(
                      ha,
                      "Attempting to get response header but no headers have been received for url: " +
                        this.f,
                      void 0
                    ),
                  "");
            }),
            (t.getAllResponseHeaders = function () {
              if (!this.b) {
                var t = this.i;
                return (
                  t &&
                    t.log(
                      ha,
                      "Attempting to get all response headers but no headers have been received for url: " +
                        this.f,
                      void 0
                    ),
                  ""
                );
              }
              t = [];
              for (var e = this.b.entries(), n = e.next(); !n.done; )
                (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
              return t.join("\r\n");
            }),
            Object.defineProperty(ya.prototype, "withCredentials", {
              get: function () {
                return "include" === this.h;
              },
              set: function (t) {
                this.h = t ? "include" : "same-origin";
              },
            }),
            A(Aa, An);
          var Sa = "";
          Aa.prototype.b = ma("goog.net.XhrIo");
          var ka = /^https?$/i,
            Na = ["POST", "PUT"];
          function _a(t, e, n, i, r) {
            if (t.a)
              throw Error(
                "[goog.net.XhrIo] Object is active with another request=" +
                  t.l +
                  "; newUri=" +
                  e
              );
            (n = n ? n.toUpperCase() : "GET"),
              (t.l = e),
              (t.h = ""),
              (t.P = n),
              (t.G = !1),
              (t.c = !0),
              (t.a = t.O ? t.O.a() : Xo.a()),
              (t.A = t.O ? ta(t.O) : ta(Xo)),
              (t.a.onreadystatechange = I(t.Ub, t));
            try {
              ga(t.b, Ma(t, "Opening Xhr")),
                (t.N = !0),
                t.a.open(n, String(e), !0),
                (t.N = !1);
            } catch (e) {
              return (
                ga(t.b, Ma(t, "Error opening Xhr: " + e.message)), void Ra(t, e)
              );
            }
            e = i || "";
            var o = new Pn(t.headers);
            r &&
              (function (t, e) {
                if (t.forEach && "function" == typeof t.forEach)
                  t.forEach(e, void 0);
                else if (p(t) || "string" == typeof t) K(t, e, void 0);
                else
                  for (
                    var n = Cn(t), i = Rn(t), r = i.length, o = 0;
                    o < r;
                    o++
                  )
                    e.call(void 0, i[o], n && n[o], t);
              })(r, function (t, e) {
                o.set(e, t);
              }),
              (r = (function (t) {
                t: {
                  for (
                    var e = Oa,
                      n = t.length,
                      i = "string" == typeof t ? t.split("") : t,
                      r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) {
                      e = r;
                      break t;
                    }
                  e = -1;
                }
                return 0 > e ? null : "string" == typeof t ? t.charAt(e) : t[e];
              })(o.Y())),
              (i = s.FormData && e instanceof s.FormData),
              !X(Na, n) ||
                r ||
                i ||
                o.set(
                  "Content-Type",
                  "application/x-www-form-urlencoded;charset=utf-8"
                ),
              o.forEach(function (t, e) {
                this.a.setRequestHeader(e, t);
              }, t),
              t.m && (t.a.responseType = t.m),
              "withCredentials" in t.a &&
                t.a.withCredentials !== t.R &&
                (t.a.withCredentials = t.R);
            try {
              La(t),
                0 < t.g &&
                  ((t.u = (function (t) {
                    return (
                      Yt &&
                      se(9) &&
                      "number" == typeof t.timeout &&
                      void 0 !== t.ontimeout
                    );
                  })(t.a)),
                  ga(
                    t.b,
                    Ma(
                      t,
                      "Will abort after " +
                        t.g +
                        "ms if incomplete, xhr2 " +
                        t.u
                    )
                  ),
                  t.u
                    ? ((t.a.timeout = t.g), (t.a.ontimeout = I(t.Ma, t)))
                    : (t.o = _n(t.Ma, t.g, t))),
                ga(t.b, Ma(t, "Sending request")),
                (t.i = !0),
                t.a.send(e),
                (t.i = !1);
            } catch (e) {
              ga(t.b, Ma(t, "Send error: " + e.message)), Ra(t, e);
            }
          }
          function Oa(t) {
            return "content-type" == t.toLowerCase();
          }
          function Ra(t, e) {
            (t.c = !1),
              t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
              (t.h = e),
              Ca(t),
              Da(t);
          }
          function Ca(t) {
            t.G ||
              ((t.G = !0),
              t.dispatchEvent("complete"),
              t.dispatchEvent("error"));
          }
          function Pa(t) {
            if (t.c && void 0 !== a)
              if (t.A[1] && 4 == xa(t) && 2 == ja(t))
                ga(t.b, Ma(t, "Local request error detected and ignored"));
              else if (t.i && 4 == xa(t)) _n(t.Ub, 0, t);
              else if ((t.dispatchEvent("readystatechange"), 4 == xa(t))) {
                ga(t.b, Ma(t, "Request complete")), (t.c = !1);
                try {
                  var e,
                    n = ja(t);
                  t: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var i = !0;
                      break t;
                    default:
                      i = !1;
                  }
                  if (!(e = i)) {
                    var r;
                    if ((r = 0 === n)) {
                      var o = String(t.l).match(xn)[1] || null;
                      if (!o && s.self && s.self.location) {
                        var u = s.self.location.protocol;
                        o = u.substr(0, u.length - 1);
                      }
                      r = !ka.test(o ? o.toLowerCase() : "");
                    }
                    e = r;
                  }
                  if (e)
                    t.dispatchEvent("complete"), t.dispatchEvent("success");
                  else {
                    try {
                      var c = 2 < xa(t) ? t.a.statusText : "";
                    } catch (e) {
                      ga(t.b, "Can not get status: " + e.message), (c = "");
                    }
                    (t.h = c + " [" + ja(t) + "]"), Ca(t);
                  }
                } finally {
                  Da(t);
                }
              }
          }
          function Da(t, e) {
            if (t.a) {
              La(t);
              var n = t.a,
                i = t.A[0] ? l : null;
              (t.a = null), (t.A = null), e || t.dispatchEvent("ready");
              try {
                n.onreadystatechange = i;
              } catch (e) {
                (t = t.b) &&
                  t.log(
                    ca,
                    "Problem encountered resetting onreadystatechange: " +
                      e.message,
                    void 0
                  );
              }
            }
          }
          function La(t) {
            t.a && t.u && (t.a.ontimeout = null),
              t.o && (s.clearTimeout(t.o), (t.o = null));
          }
          function xa(t) {
            return t.a ? t.a.readyState : 0;
          }
          function ja(t) {
            try {
              return 2 < xa(t) ? t.a.status : -1;
            } catch (t) {
              return -1;
            }
          }
          function Ma(t, e) {
            return e + " [" + t.P + " " + t.l + " " + ja(t) + "]";
          }
          function Ua(t) {
            var e = Ja;
            (this.g = []),
              (this.u = e),
              (this.o = t || null),
              (this.f = this.a = !1),
              (this.c = void 0),
              (this.m = this.A = this.i = !1),
              (this.h = 0),
              (this.b = null),
              (this.l = 0);
          }
          function Fa(t, e, n) {
            (t.a = !0), (t.c = n), (t.f = !e), Ba(t);
          }
          function Va(t) {
            if (t.a) {
              if (!t.m) throw new Ka(t);
              t.m = !1;
            }
          }
          function Ha(t, e, n, i) {
            t.g.push([e, n, i]), t.a && Ba(t);
          }
          function qa(t) {
            return z(t.g, function (t) {
              return d(t[1]);
            });
          }
          function Ba(t) {
            if (t.h && t.a && qa(t)) {
              var e = t.h,
                n = za[e];
              n && (s.clearTimeout(n.a), delete za[e]), (t.h = 0);
            }
            t.b && (t.b.l--, delete t.b), (e = t.c);
            for (var i = (n = !1); t.g.length && !t.i; ) {
              var r = t.g.shift(),
                o = r[0],
                a = r[1];
              if (((r = r[2]), (o = t.f ? a : o)))
                try {
                  var u = o.call(r || t.o, e);
                  void 0 !== u &&
                    ((t.f = t.f && (u == e || u instanceof Error)),
                    (t.c = e = u)),
                    (D(e) ||
                      ("function" == typeof s.Promise &&
                        e instanceof s.Promise)) &&
                      ((i = !0), (t.i = !0));
                } catch (i) {
                  (e = i), (t.f = !0), qa(t) || (n = !0);
                }
            }
            (t.c = e),
              i &&
                ((u = I(t.v, t, !0)),
                (i = I(t.v, t, !1)),
                e instanceof Ua ? (Ha(e, u, i), (e.A = !0)) : e.then(u, i)),
              n && ((e = new Wa(e)), (za[e.a] = e), (t.h = e.a));
          }
          function Ka() {
            L.call(this);
          }
          function Ga() {
            L.call(this);
          }
          function Wa(t) {
            (this.a = s.setTimeout(I(this.c, this), 0)), (this.b = t);
          }
          ((t = Aa.prototype).Ma = function () {
            void 0 !== a &&
              this.a &&
              ((this.h = "Timed out after " + this.g + "ms, aborting"),
              ga(this.b, Ma(this, this.h)),
              this.dispatchEvent("timeout"),
              this.abort(8));
          }),
            (t.abort = function () {
              this.a &&
                this.c &&
                (ga(this.b, Ma(this, "Aborting")),
                (this.c = !1),
                (this.f = !0),
                this.a.abort(),
                (this.f = !1),
                this.dispatchEvent("complete"),
                this.dispatchEvent("abort"),
                Da(this));
            }),
            (t.Da = function () {
              this.a &&
                (this.c &&
                  ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
                Da(this, !0)),
                Aa.$a.Da.call(this);
            }),
            (t.Ub = function () {
              this.xa || (this.N || this.i || this.f ? Pa(this) : this.Ic());
            }),
            (t.Ic = function () {
              Pa(this);
            }),
            (t.getResponse = function () {
              try {
                if (!this.a) return null;
                if ("response" in this.a) return this.a.response;
                switch (this.m) {
                  case Sa:
                  case "text":
                    return this.a.responseText;
                  case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.a)
                      return this.a.mozResponseArrayBuffer;
                }
                var t = this.b;
                return (
                  t &&
                    t.log(
                      ca,
                      "Response type " +
                        this.m +
                        " is not supported on this browser",
                      void 0
                    ),
                  null
                );
              } catch (t) {
                return ga(this.b, "Can not get response: " + t.message), null;
              }
            }),
            (Ua.prototype.cancel = function (t) {
              if (this.a) this.c instanceof Ua && this.c.cancel();
              else {
                if (this.b) {
                  var e = this.b;
                  delete this.b,
                    t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel());
                }
                this.u ? this.u.call(this.o, this) : (this.m = !0),
                  this.a || ((t = new Ga(this)), Va(this), Fa(this, !1, t));
              }
            }),
            (Ua.prototype.v = function (t, e) {
              (this.i = !1), Fa(this, t, e);
            }),
            (Ua.prototype.then = function (t, e, n) {
              var i,
                r,
                o = new Te(function (t, e) {
                  (i = t), (r = e);
                });
              return (
                Ha(this, i, function (t) {
                  t instanceof Ga ? o.cancel() : r(t);
                }),
                o.then(t, e, n)
              );
            }),
            (Ua.prototype.$goog_Thenable = !0),
            A(Ka, L),
            (Ka.prototype.message = "Deferred has already fired"),
            (Ka.prototype.name = "AlreadyCalledError"),
            A(Ga, L),
            (Ga.prototype.message = "Deferred was canceled"),
            (Ga.prototype.name = "CanceledError"),
            (Wa.prototype.c = function () {
              throw (delete za[this.a], this.b);
            });
          var za = {};
          function Xa(t) {
            var e = {},
              n = e.document || document,
              i = Nt(t).toString(),
              r = ge(document, "SCRIPT"),
              o = { Vb: r, Ma: void 0 },
              a = new Ua(o),
              u = null,
              l = null != e.timeout ? e.timeout : 5e3;
            return (
              0 < l &&
                ((u = window.setTimeout(function () {
                  Ya(r, !0);
                  var t = new Qa(Za, "Timeout reached for loading script " + i);
                  Va(a), Fa(a, !1, t);
                }, l)),
                (o.Ma = u)),
              (r.onload = r.onreadystatechange =
                function () {
                  (r.readyState &&
                    "loaded" != r.readyState &&
                    "complete" != r.readyState) ||
                    (Ya(r, e.wd || !1, u), Va(a), Fa(a, !0, null));
                }),
              (r.onerror = function () {
                Ya(r, !0, u);
                var t = new Qa($a, "Error while loading script " + i);
                Va(a), Fa(a, !1, t);
              }),
              bt((o = e.attributes || {}), {
                type: "text/javascript",
                charset: "UTF-8",
              }),
              fe(r, o),
              (function (t, e) {
                yt(t, "HTMLScriptElement"),
                  (t.src = Nt(e)),
                  (e = t.ownerDocument && t.ownerDocument.defaultView) && e != s
                    ? (e = h(e.document))
                    : (null === c && (c = h(s.document)), (e = c)),
                  e && t.setAttribute("nonce", e);
              })(r, t),
              (function (t) {
                var e;
                return (e = (t || document).getElementsByTagName("HEAD")) &&
                  0 != e.length
                  ? e[0]
                  : t.documentElement;
              })(n).appendChild(r),
              a
            );
          }
          function Ja() {
            if (this && this.Vb) {
              var t = this.Vb;
              t && "SCRIPT" == t.tagName && Ya(t, !0, this.Ma);
            }
          }
          function Ya(t, e, n) {
            null != n && s.clearTimeout(n),
              (t.onload = l),
              (t.onerror = l),
              (t.onreadystatechange = l),
              e &&
                window.setTimeout(function () {
                  t && t.parentNode && t.parentNode.removeChild(t);
                }, 0);
          }
          var $a = 0,
            Za = 1;
          function Qa(t, e) {
            var n = "Jsloader error (code #" + t + ")";
            e && (n += ": " + e), L.call(this, n), (this.code = t);
          }
          function ts(t) {
            this.f = t;
          }
          function es(t, e, n) {
            if (
              ((this.c = t),
              (t = e || {}),
              (this.l =
                t.secureTokenEndpoint ||
                "https://securetoken.googleapis.com/v1/token"),
              (this.v = t.secureTokenTimeout || rs),
              (this.g = mt(t.secureTokenHeaders || os)),
              (this.h =
                t.firebaseEndpoint ||
                "https://www.googleapis.com/identitytoolkit/v3/relyingparty/"),
              (this.i =
                t.identityPlatformEndpoint ||
                "https://identitytoolkit.googleapis.com/v2/"),
              (this.m = t.firebaseTimeout || as),
              (this.a = mt(t.firebaseHeaders || ss)),
              n &&
                ((this.a["X-Client-Version"] = n),
                (this.g["X-Client-Version"] = n)),
              (n = "Node" == Si()),
              !(n =
                s.XMLHttpRequest ||
                (n && J.INTERNAL.node && J.INTERNAL.node.XMLHttpRequest)) &&
                !Ai())
            )
              throw new k(
                "internal-error",
                "The XMLHttpRequest compatibility library was not found."
              );
            (this.f = void 0),
              Ai()
                ? (this.f = new ba(self))
                : ki()
                ? (this.f = new ts(n))
                : (this.f = new ia()),
              (this.b = null);
          }
          A(Qa, L),
            A(ts, Qo),
            (ts.prototype.a = function () {
              return new this.f();
            }),
            (ts.prototype.b = function () {
              return {};
            });
          var ns,
            is = "idToken",
            rs = new Gi(3e4, 6e4),
            os = { "Content-Type": "application/x-www-form-urlencoded" },
            as = new Gi(3e4, 6e4),
            ss = { "Content-Type": "application/json" };
          function us(t, e) {
            e
              ? (t.a["X-Firebase-Locale"] = e)
              : delete t.a["X-Firebase-Locale"];
          }
          function cs(t, e) {
            e &&
              ((t.l = hs("https://securetoken.googleapis.com/v1/token", e)),
              (t.h = hs(
                "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                e
              )),
              (t.i = hs("https://identitytoolkit.googleapis.com/v2/", e)));
          }
          function hs(t, e) {
            return (
              (t = qn(t)),
              (e = qn(e.url)),
              (t.c = t.a + t.c),
              Mn(t, e.f),
              (t.a = e.a),
              Un(t, e.g),
              t.toString()
            );
          }
          function ls(t, e) {
            e
              ? ((t.a["X-Client-Version"] = e), (t.g["X-Client-Version"] = e))
              : (delete t.a["X-Client-Version"],
                delete t.g["X-Client-Version"]);
          }
          function fs(t, e, n, i, r, o, a) {
            (function () {
              var t = Pi();
              return !(
                ((t =
                  Oi(t) != _i
                    ? null
                    : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                    ? parseInt(t[1], 10)
                    : null) &&
                  30 > t) ||
                (Yt && ce && !(9 < ce))
              );
            })() || Ai()
              ? (t = I(t.u, t))
              : (ns ||
                  (ns = new Te(function (t, e) {
                    !(function (t, e) {
                      if (((window.gapi || {}).client || {}).request) t();
                      else {
                        (s[ds] = function () {
                          ((window.gapi || {}).client || {}).request
                            ? t()
                            : e(Error("CORS_UNSUPPORTED"));
                        }),
                          (function (t, e) {
                            Ha(t, null, e, void 0);
                          })(Xa(_t(ps, { onload: ds })), function () {
                            e(Error("CORS_UNSUPPORTED"));
                          });
                      }
                    })(t, e);
                  })),
                (t = I(t.o, t))),
              t(e, n, i, r, o, a);
          }
          (es.prototype.S = function () {
            return this.b;
          }),
            (es.prototype.u = function (t, e, n, i, r, o) {
              if (
                Ai() &&
                (void 0 === s.fetch ||
                  void 0 === s.Headers ||
                  void 0 === s.Request)
              )
                throw new k(
                  "operation-not-supported-in-this-environment",
                  "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
                );
              var a = new Aa(this.f);
              if (o) {
                a.g = Math.max(0, o);
                var u = setTimeout(function () {
                  a.dispatchEvent("timeout");
                }, o);
              }
              Sn(a, "complete", function () {
                u && clearTimeout(u);
                var t = null;
                try {
                  t =
                    JSON.parse(
                      (function (t) {
                        try {
                          return t.a ? t.a.responseText : "";
                        } catch (e) {
                          return (
                            ga(t.b, "Can not get responseText: " + e.message),
                            ""
                          );
                        }
                      })(this)
                    ) || null;
                } catch (e) {
                  t = null;
                }
                e && e(t);
              }),
                kn(a, "ready", function () {
                  u && clearTimeout(u), Xe(this);
                }),
                kn(a, "timeout", function () {
                  u && clearTimeout(u), Xe(this), e && e(null);
                }),
                _a(a, t, n, i, r);
            });
          var ps = new wt(
              At,
              "https://apis.google.com/js/client.js?onload=%{onload}"
            ),
            ds = "__fcb" + Math.floor(1e6 * Math.random()).toString();
          function vs(t, e, n, i, r, o, a) {
            var s = qn(e + n);
            Vn(s, "key", t.c), a && Vn(s, "cb", T().toString());
            var u = "GET" == i;
            if (u) for (var c in r) r.hasOwnProperty(c) && Vn(s, c, r[c]);
            return new Te(function (e, n) {
              fs(
                t,
                s.toString(),
                function (t) {
                  t
                    ? t.error
                      ? n(hu(t, o || {}))
                      : e(t)
                    : n(new k("network-request-failed"));
                },
                i,
                u ? void 0 : ai(Vi(r)),
                t.a,
                t.m.get()
              );
            });
          }
          function ms(t) {
            if ("string" != typeof (t = t.email) || !wi.test(t))
              throw new k("invalid-email");
          }
          function gs(t) {
            "email" in t && ms(t);
          }
          function bs(t) {
            if (!t[is]) {
              if (t.mfaPendingCredential)
                throw new k("multi-factor-auth-required", null, mt(t));
              throw new k("internal-error");
            }
          }
          function ys(t) {
            if (t.phoneNumber || t.temporaryProof) {
              if (!t.phoneNumber || !t.temporaryProof)
                throw new k("internal-error");
            } else {
              if (!t.sessionInfo) throw new k("missing-verification-id");
              if (!t.code) throw new k("missing-verification-code");
            }
          }
          (es.prototype.o = function (t, e, n, i, r) {
            var o = this;
            ns.then(function () {
              window.gapi.client.setApiKey(o.c);
              var a = window.gapi.auth.getToken();
              window.gapi.auth.setToken(null),
                window.gapi.client.request({
                  path: t,
                  method: n,
                  body: i,
                  headers: r,
                  authType: "none",
                  callback: function (t) {
                    window.gapi.auth.setToken(a), e && e(t);
                  },
                });
            }).s(function (t) {
              e &&
                e({
                  error: { message: (t && t.message) || "CORS_UNSUPPORTED" },
                });
            });
          }),
            (es.prototype.yb = function () {
              return uu(this, Ys, {});
            }),
            (es.prototype.Ab = function (t, e) {
              return uu(this, Xs, { idToken: t, email: e });
            }),
            (es.prototype.Bb = function (t, e) {
              return uu(this, Js, { idToken: t, password: e });
            });
          var ws = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
          function Is(t) {
            if (!t.phoneVerificationInfo) throw new k("internal-error");
            if (!t.phoneVerificationInfo.sessionInfo)
              throw new k("missing-verification-id");
            if (!t.phoneVerificationInfo.code)
              throw new k("missing-verification-code");
          }
          function Es(t) {
            if (
              !t.requestUri ||
              (!t.sessionId && !t.postBody && !t.pendingToken)
            )
              throw new k("internal-error");
          }
          function Ts(t, e) {
            return (
              e.oauthIdToken &&
                e.providerId &&
                0 == e.providerId.indexOf("oidc.") &&
                !e.pendingToken &&
                (t.sessionId
                  ? (e.nonce = t.sessionId)
                  : t.postBody &&
                    ni((t = new Zn(t.postBody)), "nonce") &&
                    (e.nonce = t.get("nonce"))),
              e
            );
          }
          function As(t) {
            var e = null;
            if (
              (t.needConfirmation
                ? ((t.code = "account-exists-with-different-credential"),
                  (e = Zo(t)))
                : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage
                ? ((t.code = "credential-already-in-use"), (e = Zo(t)))
                : "EMAIL_EXISTS" == t.errorMessage
                ? ((t.code = "email-already-in-use"), (e = Zo(t)))
                : t.errorMessage && (e = cu(t.errorMessage)),
              e)
            )
              throw e;
            bs(t);
          }
          function Ss(t, e) {
            return (e.returnIdpCredential = !0), uu(t, Qs, e);
          }
          function ks(t, e) {
            return (e.returnIdpCredential = !0), uu(t, eu, e);
          }
          function Ns(t, e) {
            return (
              (e.returnIdpCredential = !0), (e.autoCreate = !1), uu(t, tu, e)
            );
          }
          function _s(t) {
            if (!t.oobCode) throw new k("invalid-action-code");
          }
          ((t = es.prototype).Cb = function (t, e) {
            var n = { idToken: t },
              i = [];
            return (
              dt(ws, function (t, r) {
                var o = e[r];
                null === o ? i.push(t) : r in e && (n[r] = o);
              }),
              i.length && (n.deleteAttribute = i),
              uu(this, Xs, n)
            );
          }),
            (t.ub = function (t, e) {
              return (
                bt((t = { requestType: "PASSWORD_RESET", email: t }), e),
                uu(this, Bs, t)
              );
            }),
            (t.vb = function (t, e) {
              return (
                bt((t = { requestType: "EMAIL_SIGNIN", email: t }), e),
                uu(this, Vs, t)
              );
            }),
            (t.tb = function (t, e) {
              return (
                bt((t = { requestType: "VERIFY_EMAIL", idToken: t }), e),
                uu(this, Hs, t)
              );
            }),
            (t.Db = function (t, e, n) {
              return (
                bt(
                  (t = {
                    requestType: "VERIFY_AND_CHANGE_EMAIL",
                    idToken: t,
                    newEmail: e,
                  }),
                  n
                ),
                uu(this, qs, t)
              );
            }),
            (t.eb = function (t) {
              return uu(this, ru, t);
            }),
            (t.mb = function (t, e) {
              return uu(this, Ws, { oobCode: t, newPassword: e });
            }),
            (t.Qa = function (t) {
              return uu(this, Rs, { oobCode: t });
            }),
            (t.ib = function (t) {
              return uu(this, Os, { oobCode: t });
            });
          var Os = { endpoint: "setAccountInfo", B: _s, Z: "email", C: !0 },
            Rs = {
              endpoint: "resetPassword",
              B: _s,
              F: function (t) {
                var e = t.requestType;
                if (
                  !e ||
                  (!t.email &&
                    "EMAIL_SIGNIN" != e &&
                    "VERIFY_AND_CHANGE_EMAIL" != e)
                )
                  throw new k("internal-error");
              },
              C: !0,
            },
            Cs = {
              endpoint: "signupNewUser",
              B: function (t) {
                if ((ms(t), !t.password)) throw new k("weak-password");
              },
              F: bs,
              U: !0,
              C: !0,
            },
            Ps = { endpoint: "createAuthUri", C: !0 },
            Ds = { endpoint: "deleteAccount", M: ["idToken"] },
            Ls = {
              endpoint: "setAccountInfo",
              M: ["idToken", "deleteProvider"],
              B: function (t) {
                if (!Array.isArray(t.deleteProvider))
                  throw new k("internal-error");
              },
            },
            xs = {
              endpoint: "emailLinkSignin",
              M: ["email", "oobCode"],
              B: ms,
              F: bs,
              U: !0,
              C: !0,
            },
            js = {
              endpoint: "emailLinkSignin",
              M: ["idToken", "email", "oobCode"],
              B: ms,
              F: bs,
              U: !0,
            },
            Ms = {
              endpoint: "accounts/mfaEnrollment:finalize",
              M: ["idToken", "phoneVerificationInfo"],
              B: Is,
              F: bs,
              C: !0,
              Na: !0,
            },
            Us = {
              endpoint: "accounts/mfaSignIn:finalize",
              M: ["mfaPendingCredential", "phoneVerificationInfo"],
              B: Is,
              F: bs,
              C: !0,
              Na: !0,
            },
            Fs = { endpoint: "getAccountInfo" },
            Vs = {
              endpoint: "getOobConfirmationCode",
              M: ["requestType"],
              B: function (t) {
                if ("EMAIL_SIGNIN" != t.requestType)
                  throw new k("internal-error");
                ms(t);
              },
              Z: "email",
              C: !0,
            },
            Hs = {
              endpoint: "getOobConfirmationCode",
              M: ["idToken", "requestType"],
              B: function (t) {
                if ("VERIFY_EMAIL" != t.requestType)
                  throw new k("internal-error");
              },
              Z: "email",
              C: !0,
            },
            qs = {
              endpoint: "getOobConfirmationCode",
              M: ["idToken", "newEmail", "requestType"],
              B: function (t) {
                if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
                  throw new k("internal-error");
              },
              Z: "email",
              C: !0,
            },
            Bs = {
              endpoint: "getOobConfirmationCode",
              M: ["requestType"],
              B: function (t) {
                if ("PASSWORD_RESET" != t.requestType)
                  throw new k("internal-error");
                ms(t);
              },
              Z: "email",
              C: !0,
            },
            Ks = { kb: !0, endpoint: "getProjectConfig", Tb: "GET" },
            Gs = {
              kb: !0,
              endpoint: "getRecaptchaParam",
              Tb: "GET",
              F: function (t) {
                if (!t.recaptchaSiteKey) throw new k("internal-error");
              },
            },
            Ws = { endpoint: "resetPassword", B: _s, Z: "email", C: !0 },
            zs = {
              endpoint: "sendVerificationCode",
              M: ["phoneNumber", "recaptchaToken"],
              Z: "sessionInfo",
              C: !0,
            },
            Xs = { endpoint: "setAccountInfo", M: ["idToken"], B: gs, U: !0 },
            Js = {
              endpoint: "setAccountInfo",
              M: ["idToken"],
              B: function (t) {
                if ((gs(t), !t.password)) throw new k("weak-password");
              },
              F: bs,
              U: !0,
            },
            Ys = { endpoint: "signupNewUser", F: bs, U: !0, C: !0 },
            $s = {
              endpoint: "accounts/mfaEnrollment:start",
              M: ["idToken", "phoneEnrollmentInfo"],
              B: function (t) {
                if (!t.phoneEnrollmentInfo) throw new k("internal-error");
                if (!t.phoneEnrollmentInfo.phoneNumber)
                  throw new k("missing-phone-number");
                if (!t.phoneEnrollmentInfo.recaptchaToken)
                  throw new k("missing-app-credential");
              },
              F: function (t) {
                if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                  throw new k("internal-error");
              },
              C: !0,
              Na: !0,
            },
            Zs = {
              endpoint: "accounts/mfaSignIn:start",
              M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
              B: function (t) {
                if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                  throw new k("missing-app-credential");
              },
              F: function (t) {
                if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                  throw new k("internal-error");
              },
              C: !0,
              Na: !0,
            },
            Qs = {
              endpoint: "verifyAssertion",
              B: Es,
              Xa: Ts,
              F: As,
              U: !0,
              C: !0,
            },
            tu = {
              endpoint: "verifyAssertion",
              B: Es,
              Xa: Ts,
              F: function (t) {
                if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                  throw new k("user-not-found");
                if (t.errorMessage) throw cu(t.errorMessage);
                bs(t);
              },
              U: !0,
              C: !0,
            },
            eu = {
              endpoint: "verifyAssertion",
              B: function (t) {
                if ((Es(t), !t.idToken)) throw new k("internal-error");
              },
              Xa: Ts,
              F: As,
              U: !0,
            },
            nu = {
              endpoint: "verifyCustomToken",
              B: function (t) {
                if (!t.token) throw new k("invalid-custom-token");
              },
              F: bs,
              U: !0,
              C: !0,
            },
            iu = {
              endpoint: "verifyPassword",
              B: function (t) {
                if ((ms(t), !t.password)) throw new k("wrong-password");
              },
              F: bs,
              U: !0,
              C: !0,
            },
            ru = { endpoint: "verifyPhoneNumber", B: ys, F: bs, C: !0 },
            ou = {
              endpoint: "verifyPhoneNumber",
              B: function (t) {
                if (!t.idToken) throw new k("internal-error");
                ys(t);
              },
              F: function (t) {
                if (t.temporaryProof)
                  throw ((t.code = "credential-already-in-use"), Zo(t));
                bs(t);
              },
            },
            au = {
              Gb: { USER_NOT_FOUND: "user-not-found" },
              endpoint: "verifyPhoneNumber",
              B: ys,
              F: bs,
              C: !0,
            },
            su = {
              endpoint: "accounts/mfaEnrollment:withdraw",
              M: ["idToken", "mfaEnrollmentId"],
              F: function (t) {
                if (!!t[is] ^ !!t.refreshToken) throw new k("internal-error");
              },
              C: !0,
              Na: !0,
            };
          function uu(t, e, n) {
            if (
              !(function (t, e) {
                if (!e || !e.length) return !0;
                if (!t) return !1;
                for (var n = 0; n < e.length; n++) {
                  var i = t[e[n]];
                  if (null == i || "" === i) return !1;
                }
                return !0;
              })(n, e.M)
            )
              return Ce(new k("internal-error"));
            var i,
              r = !!e.Na,
              o = e.Tb || "POST";
            return Re(n)
              .then(e.B)
              .then(function () {
                return (
                  e.U && (n.returnSecureToken = !0),
                  e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                  vs(t, r ? t.i : t.h, e.endpoint, o, n, e.Gb, e.kb || !1)
                );
              })
              .then(function (t) {
                return (i = t), e.Xa ? e.Xa(n, i) : i;
              })
              .then(e.F)
              .then(function () {
                if (!e.Z) return i;
                if (!(e.Z in i)) throw new k("internal-error");
                return i[e.Z];
              });
          }
          function cu(t) {
            return hu({
              error: { errors: [{ message: t }], code: 400, message: t },
            });
          }
          function hu(t, e) {
            var n =
                ((t.error && t.error.errors && t.error.errors[0]) || {})
                  .reason || "",
              i = {
                keyInvalid: "invalid-api-key",
                ipRefererBlocked: "app-not-authorized",
              };
            if ((n = i[n] ? new k(i[n]) : null)) return n;
            for (var r in ((n = (t.error && t.error.message) || ""),
            bt(
              (i = {
                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                MISSING_CUSTOM_TOKEN: "internal-error",
                INVALID_IDENTIFIER: "invalid-email",
                MISSING_CONTINUE_URI: "internal-error",
                INVALID_EMAIL: "invalid-email",
                INVALID_PASSWORD: "wrong-password",
                USER_DISABLED: "user-disabled",
                MISSING_PASSWORD: "internal-error",
                EMAIL_EXISTS: "email-already-in-use",
                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                INVALID_IDP_RESPONSE: "invalid-credential",
                INVALID_PENDING_TOKEN: "invalid-credential",
                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                INVALID_SENDER: "invalid-sender",
                EMAIL_NOT_FOUND: "user-not-found",
                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                EXPIRED_OOB_CODE: "expired-action-code",
                INVALID_OOB_CODE: "invalid-action-code",
                MISSING_OOB_CODE: "internal-error",
                INVALID_PROVIDER_ID: "invalid-provider-id",
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                INVALID_ID_TOKEN: "invalid-user-token",
                TOKEN_EXPIRED: "user-token-expired",
                USER_NOT_FOUND: "user-token-expired",
                CORS_UNSUPPORTED: "cors-unsupported",
                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                INVALID_APP_ID: "invalid-app-id",
                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                WEAK_PASSWORD: "weak-password",
                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                USER_CANCELLED: "user-cancelled",
                CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                INVALID_APP_CREDENTIAL: "invalid-app-credential",
                INVALID_CODE: "invalid-verification-code",
                INVALID_PHONE_NUMBER: "invalid-phone-number",
                INVALID_SESSION_INFO: "invalid-verification-id",
                INVALID_TEMPORARY_PROOF: "invalid-credential",
                MISSING_APP_CREDENTIAL: "missing-app-credential",
                MISSING_CODE: "missing-verification-code",
                MISSING_PHONE_NUMBER: "missing-phone-number",
                MISSING_SESSION_INFO: "missing-verification-id",
                QUOTA_EXCEEDED: "quota-exceeded",
                SESSION_EXPIRED: "code-expired",
                REJECTED_CREDENTIAL: "rejected-credential",
                INVALID_CONTINUE_URI: "invalid-continue-uri",
                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                INVALID_CERT_HASH: "invalid-cert-hash",
                UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                INVALID_TENANT_ID: "invalid-tenant-id",
                TENANT_ID_MISMATCH: "tenant-id-mismatch",
                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                EMAIL_CHANGE_NEEDS_VERIFICATION:
                  "email-change-needs-verification",
                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                SECOND_FACTOR_LIMIT_EXCEEDED:
                  "maximum-second-factor-count-exceeded",
                UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                UNVERIFIED_EMAIL: "unverified-email",
              }),
              e || {}
            ),
            (e =
              (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
                ? e[1]
                : void 0),
            i))
              if (0 === n.indexOf(r)) return new k(i[r], e);
            return !e && t && (e = Fi(t)), new k("internal-error", e);
          }
          function lu(t) {
            (this.b = t),
              (this.a = null),
              (this.qb = (function (t) {
                return (
                  vu ||
                  (vu = new Te(function (t, e) {
                    function n() {
                      Ki(),
                        Di("gapi.load")("gapi.iframes", {
                          callback: t,
                          ontimeout: function () {
                            Ki(), e(Error("Network Error"));
                          },
                          timeout: pu.get(),
                        });
                    }
                    if (Di("gapi.iframes.Iframe")) t();
                    else if (Di("gapi.load")) n();
                    else {
                      var i =
                        "__iframefcb" +
                        Math.floor(1e6 * Math.random()).toString();
                      (s[i] = function () {
                        Di("gapi.load") ? n() : e(Error("Network Error"));
                      }),
                        Re(Xa((i = _t(fu, { onload: i })))).s(function () {
                          e(Error("Network Error"));
                        });
                    }
                  }).s(function (t) {
                    throw ((vu = null), t);
                  }))
                ).then(function () {
                  return new Te(function (e, n) {
                    Di("gapi.iframes.getContext")().open(
                      {
                        where: document.body,
                        url: t.b,
                        messageHandlersFilter: Di(
                          "gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"
                        ),
                        attributes: {
                          style: {
                            position: "absolute",
                            top: "-100px",
                            width: "1px",
                            height: "1px",
                          },
                        },
                        dontclear: !0,
                      },
                      function (i) {
                        function r() {
                          clearTimeout(o), e();
                        }
                        (t.a = i), t.a.restyle({ setHideOnLeave: !1 });
                        var o = setTimeout(function () {
                          n(Error("Network Error"));
                        }, du.get());
                        i.ping(r).then(r, function () {
                          n(Error("Network Error"));
                        });
                      }
                    );
                  });
                });
              })(this));
          }
          var fu = new wt(
              At,
              "https://apis.google.com/js/api.js?onload=%{onload}"
            ),
            pu = new Gi(3e4, 6e4),
            du = new Gi(5e3, 15e3),
            vu = null;
          function mu(t, e, n, i) {
            (this.l = t),
              (this.h = e),
              (this.i = n),
              (this.g = i),
              (this.f = null),
              this.g
                ? (t = Bn(
                    (t = qn(this.g.url)).f,
                    t.a,
                    t.g,
                    "/emulator/auth/iframe"
                  ))
                : (t = Bn("https", this.l, null, "/__/auth/iframe")),
              (this.a = t),
              Vn(this.a, "apiKey", this.h),
              Vn(this.a, "appName", this.i),
              (this.b = null),
              (this.c = []);
          }
          function gu(t, e, n, i, r, o) {
            (this.u = t),
              (this.o = e),
              (this.c = n),
              (this.v = i),
              (this.m = o),
              (this.i = this.g = this.l = null),
              (this.a = r),
              (this.h = this.f = null);
          }
          function bu(t) {
            try {
              return J.app(t).auth().Ga();
            } catch (t) {
              return [];
            }
          }
          function yu(t, e, n, i, r, o) {
            (this.o = t),
              (this.g = e),
              (this.b = n),
              (this.f = o),
              (this.c = i || null),
              (this.i = r || null),
              (this.l = this.u = this.A = null),
              (this.h = []),
              (this.v = this.a = null);
          }
          function wu(t) {
            var e = pi();
            return (function (t) {
              return uu(t, Ks, {}).then(function (t) {
                return t.authorizedDomains || [];
              });
            })(t).then(function (t) {
              t: {
                var n = qn(e),
                  i = n.f;
                n = n.a;
                for (var r = 0; r < t.length; r++) {
                  var o = t[r],
                    a = n,
                    s = i;
                  if (
                    (0 == o.indexOf("chrome-extension://")
                      ? (a = qn(o).a == a && "chrome-extension" == s)
                      : "http" != s && "https" != s
                      ? (a = !1)
                      : yi.test(o)
                      ? (a = a == o)
                      : ((o = o.split(".").join("\\.")),
                        (a = new RegExp(
                          "^(.+\\." + o + "|" + o + ")$",
                          "i"
                        ).test(a))),
                    a)
                  ) {
                    t = !0;
                    break t;
                  }
                }
                t = !1;
              }
              if (!t) throw new Yo(pi());
            });
          }
          function Iu(t) {
            return (
              t.v ||
                (t.v = Ii().then(function () {
                  if (!t.u) {
                    var e = t.c,
                      n = t.i,
                      i = bu(t.b),
                      r = new mu(t.o, t.g, t.b, t.f);
                    (r.f = e),
                      (r.b = n),
                      (r.c = Q(i || [])),
                      (t.u = r.toString());
                  }
                  (t.m = new lu(t.u)),
                    (function (t) {
                      if (!t.m) throw Error("IfcHandler must be initialized!");
                      !(function (t, e) {
                        t.qb.then(function () {
                          t.a.register(
                            "authEvent",
                            e,
                            Di("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                          );
                        });
                      })(t.m, function (e) {
                        var n = {};
                        if (e && e.authEvent) {
                          var i = !1;
                          for (e = Wo(e.authEvent), n = 0; n < t.h.length; n++)
                            i = t.h[n](e) || i;
                          return ((n = {}).status = i ? "ACK" : "ERROR"), Re(n);
                        }
                        return (n.status = "ERROR"), Re(n);
                      });
                    })(t);
                })),
              t.v
            );
          }
          function Eu(t) {
            return (
              t.l ||
                ((t.A = t.c ? Ci(t.c, bu(t.b)) : null),
                (t.l = new es(t.g, P(t.i), t.A)),
                t.f && cs(t.l, t.f)),
              t.l
            );
          }
          function Tu(t, e, n, i, r, o, a, s, u, c, h, l) {
            return (
              ((t = new gu(t, e, n, i, r, l)).l = o),
              (t.g = a),
              (t.i = s),
              (t.b = mt(u || null)),
              (t.f = c),
              t.xb(h).toString()
            );
          }
          function Au(t) {
            if (
              ((this.a =
                t ||
                (J.INTERNAL.reactNative &&
                  J.INTERNAL.reactNative.AsyncStorage)),
              !this.a)
            )
              throw new k(
                "internal-error",
                "The React Native compatibility library was not found."
              );
            this.type = "asyncStorage";
          }
          function Su(t) {
            (this.b = t), (this.a = {}), (this.f = I(this.c, this));
          }
          (mu.prototype.toString = function () {
            return (
              this.f ? Vn(this.a, "v", this.f) : ei(this.a.b, "v"),
              this.b ? Vn(this.a, "eid", this.b) : ei(this.a.b, "eid"),
              this.c.length
                ? Vn(this.a, "fw", this.c.join(","))
                : ei(this.a.b, "fw"),
              this.a.toString()
            );
          }),
            (gu.prototype.xb = function (t) {
              return (this.h = t), this;
            }),
            (gu.prototype.toString = function () {
              if (this.m) {
                var t = qn(this.m.url);
                t = Bn(t.f, t.a, t.g, "/emulator/auth/handler");
              } else t = Bn("https", this.u, null, "/__/auth/handler");
              if (
                (Vn(t, "apiKey", this.o),
                Vn(t, "appName", this.c),
                Vn(t, "authType", this.v),
                this.a.isOAuthProvider)
              ) {
                var e = this.a;
                try {
                  var n = J.app(this.c).auth().ka();
                } catch (t) {
                  n = null;
                }
                for (var i in ((e.nb = n),
                Vn(t, "providerId", this.a.providerId),
                (e = Vi((n = this.a).Hb))))
                  e[i] = e[i].toString();
                (i = n.Pc), (e = mt(e));
                for (var r = 0; r < i.length; r++) {
                  var o = i[r];
                  o in e && delete e[o];
                }
                n.ob && n.nb && !e[n.ob] && (e[n.ob] = n.nb),
                  vt(e) || Vn(t, "customParameters", Fi(e));
              }
              if (
                ("function" == typeof this.a.Pb &&
                  (n = this.a.Pb()).length &&
                  Vn(t, "scopes", n.join(",")),
                this.l ? Vn(t, "redirectUrl", this.l) : ei(t.b, "redirectUrl"),
                this.g ? Vn(t, "eventId", this.g) : ei(t.b, "eventId"),
                this.i ? Vn(t, "v", this.i) : ei(t.b, "v"),
                this.b)
              )
                for (var a in this.b)
                  this.b.hasOwnProperty(a) && !Hn(t, a) && Vn(t, a, this.b[a]);
              return (
                this.h ? Vn(t, "tid", this.h) : ei(t.b, "tid"),
                this.f ? Vn(t, "eid", this.f) : ei(t.b, "eid"),
                (a = bu(this.c)).length && Vn(t, "fw", a.join(",")),
                t.toString()
              );
            }),
            ((t = yu.prototype).Nb = function (t, e, n) {
              var i = new k("popup-closed-by-user"),
                r = new k("web-storage-unsupported"),
                o = this,
                a = !1;
              return this.la()
                .then(function () {
                  (function (t) {
                    var e = { type: "webStorageSupport" };
                    return Iu(t)
                      .then(function () {
                        return (function (t, e) {
                          return t.qb.then(function () {
                            return new Te(function (n) {
                              t.a.send(
                                e.type,
                                e,
                                n,
                                Di("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                              );
                            });
                          });
                        })(t.m, e);
                      })
                      .then(function (t) {
                        if (t && t.length && void 0 !== t[0].webStorageSupport)
                          return t[0].webStorageSupport;
                        throw Error();
                      });
                  })(o).then(function (n) {
                    n || (t && gi(t), e(r), (a = !0));
                  });
                })
                .s(function () {})
                .then(function () {
                  if (!a)
                    return (function (t) {
                      return new Te(function (e) {
                        return (function n() {
                          On(2e3).then(function () {
                            if (t && !t.closed) return n();
                            e();
                          });
                        })();
                      });
                    })(t);
                })
                .then(function () {
                  if (!a)
                    return On(n).then(function () {
                      e(i);
                    });
                });
            }),
            (t.Wb = function () {
              var t = Pi();
              return !Ui(t) && !Bi(t);
            }),
            (t.Sb = function () {
              return !1;
            }),
            (t.Lb = function (t, e, n, i, r, o, a, s) {
              if (!t) return Ce(new k("popup-blocked"));
              if (a && !Ui())
                return (
                  this.la().s(function (e) {
                    gi(t), r(e);
                  }),
                  i(),
                  Re()
                );
              this.a || (this.a = wu(Eu(this)));
              var u = this;
              return this.a
                .then(function () {
                  var e = u.la().s(function (e) {
                    throw (gi(t), r(e), e);
                  });
                  return i(), e;
                })
                .then(function () {
                  (Ko(n), a) ||
                    di(
                      Tu(
                        u.o,
                        u.g,
                        u.b,
                        e,
                        n,
                        null,
                        o,
                        u.c,
                        void 0,
                        u.i,
                        s,
                        u.f
                      ),
                      t
                    );
                })
                .s(function (t) {
                  throw (
                    ("auth/network-request-failed" == t.code && (u.a = null), t)
                  );
                });
            }),
            (t.Mb = function (t, e, n, i) {
              this.a || (this.a = wu(Eu(this)));
              var r = this;
              return this.a
                .then(function () {
                  Ko(e),
                    di(
                      Tu(r.o, r.g, r.b, t, e, pi(), n, r.c, void 0, r.i, i, r.f)
                    );
                })
                .s(function (t) {
                  throw (
                    ("auth/network-request-failed" == t.code && (r.a = null), t)
                  );
                });
            }),
            (t.la = function () {
              var t = this;
              return Iu(this)
                .then(function () {
                  return t.m.qb;
                })
                .s(function () {
                  throw ((t.a = null), new k("network-request-failed"));
                });
            }),
            (t.Zb = function () {
              return !0;
            }),
            (t.Ea = function (t) {
              this.h.push(t);
            }),
            (t.Ra = function (t) {
              $(this.h, function (e) {
                return e == t;
              });
            }),
            ((t = Au.prototype).get = function (t) {
              return Re(this.a.getItem(t)).then(function (t) {
                return t && Hi(t);
              });
            }),
            (t.set = function (t, e) {
              return Re(this.a.setItem(t, Fi(e)));
            }),
            (t.T = function (t) {
              return Re(this.a.removeItem(t));
            }),
            (t.ca = function () {}),
            (t.ia = function () {});
          var ku,
            Nu = [];
          function _u(t, e, n) {
            vt(t.a) && t.b.addEventListener("message", t.f),
              void 0 === t.a[e] && (t.a[e] = []),
              t.a[e].push(n);
          }
          function Ou(t) {
            this.a = t;
          }
          function Ru(t) {
            (this.c = t), (this.b = !1), (this.a = []);
          }
          function Cu(t, e, n, i) {
            var r,
              o,
              a,
              s,
              u = n || {},
              c = null;
            if (t.b) return Ce(Error("connection_unavailable"));
            var h = i ? 800 : 50,
              l =
                "undefined" != typeof MessageChannel
                  ? new MessageChannel()
                  : null;
            return new Te(function (n, i) {
              l
                ? ((r = Math.floor(
                    Math.random() * Math.pow(10, 20)
                  ).toString()),
                  l.port1.start(),
                  (a = setTimeout(function () {
                    i(Error("unsupported_event"));
                  }, h)),
                  (c = {
                    messageChannel: l,
                    onMessage: (o = function (t) {
                      t.data.eventId === r &&
                        ("ack" === t.data.status
                          ? (clearTimeout(a),
                            (s = setTimeout(function () {
                              i(Error("timeout"));
                            }, 3e3)))
                          : "done" === t.data.status
                          ? (clearTimeout(s),
                            void 0 !== t.data.response
                              ? n(t.data.response)
                              : i(Error("unknown_error")))
                          : (clearTimeout(a),
                            clearTimeout(s),
                            i(Error("invalid_response"))));
                    }),
                  }),
                  t.a.push(c),
                  l.port1.addEventListener("message", o),
                  t.c.postMessage({ eventType: e, eventId: r, data: u }, [
                    l.port2,
                  ]))
                : i(Error("connection_unavailable"));
            })
              .then(function (e) {
                return Pu(t, c), e;
              })
              .s(function (e) {
                throw (Pu(t, c), e);
              });
          }
          function Pu(t, e) {
            if (e) {
              var n = e.messageChannel,
                i = e.onMessage;
              n && (n.port1.removeEventListener("message", i), n.port1.close()),
                $(t.a, function (t) {
                  return t == e;
                });
            }
          }
          function Du() {
            if (!Mu()) throw new k("web-storage-unsupported");
            (this.c = {}),
              (this.a = []),
              (this.b = 0),
              (this.v = s.indexedDB),
              (this.type = "indexedDB"),
              (this.g = this.m = this.f = this.l = null),
              (this.o = !1),
              (this.h = null);
            var t = this;
            Ai() && self
              ? ((this.m = (function () {
                  var t = Ai() ? self : null;
                  if (
                    (K(Nu, function (n) {
                      n.b == t && (e = n);
                    }),
                    !e)
                  ) {
                    var e = new Su(t);
                    Nu.push(e);
                  }
                  return e;
                })()),
                _u(this.m, "keyChanged", function (e, n) {
                  return qu(t).then(function (e) {
                    return (
                      0 < e.length &&
                        K(t.a, function (t) {
                          t(e);
                        }),
                      { keyProcessed: X(e, n.key) }
                    );
                  });
                }),
                _u(this.m, "ping", function () {
                  return Re(["keyChanged"]);
                }))
              : (function () {
                  var t = s.navigator;
                  return t && t.serviceWorker
                    ? Re()
                        .then(function () {
                          return t.serviceWorker.ready;
                        })
                        .then(function (t) {
                          return t.active || null;
                        })
                        .s(function () {
                          return null;
                        })
                    : Re(null);
                })().then(function (e) {
                  (t.h = e) &&
                    ((t.g = new Ru(new Ou(e))),
                    Cu(t.g, "ping", null, !0)
                      .then(function (e) {
                        e[0].fulfilled &&
                          X(e[0].value, "keyChanged") &&
                          (t.o = !0);
                      })
                      .s(function () {}));
                });
          }
          function Lu(t) {
            return new Te(function (e, n) {
              var i = t.v.open("firebaseLocalStorageDb", 1);
              (i.onerror = function (t) {
                try {
                  t.preventDefault();
                } catch (t) {}
                n(Error(t.target.error));
              }),
                (i.onupgradeneeded = function (t) {
                  t = t.target.result;
                  try {
                    t.createObjectStore("firebaseLocalStorage", {
                      keyPath: "fbase_key",
                    });
                  } catch (t) {
                    n(t);
                  }
                }),
                (i.onsuccess = function (i) {
                  (i = i.target.result).objectStoreNames.contains(
                    "firebaseLocalStorage"
                  )
                    ? e(i)
                    : (function (t) {
                        return new Te(function (e, n) {
                          var i = t.v.deleteDatabase("firebaseLocalStorageDb");
                          (i.onsuccess = function () {
                            e();
                          }),
                            (i.onerror = function (t) {
                              n(Error(t.target.error));
                            });
                        });
                      })(t)
                        .then(function () {
                          return Lu(t);
                        })
                        .then(function (t) {
                          e(t);
                        })
                        .s(function (t) {
                          n(t);
                        });
                });
            });
          }
          function xu(t) {
            return t.i || (t.i = Lu(t)), t.i;
          }
          function ju(t, e) {
            var n = 0;
            return new Te(function i(r, o) {
              xu(t)
                .then(e)
                .then(r)
                .s(function (e) {
                  if (!(3 < ++n))
                    return xu(t).then(function (e) {
                      return e.close(), (t.i = void 0), i(r, o);
                    });
                  o(e);
                });
            });
          }
          function Mu() {
            try {
              return !!s.indexedDB;
            } catch (t) {
              return !1;
            }
          }
          function Uu(t) {
            return t.objectStore("firebaseLocalStorage");
          }
          function Fu(t, e) {
            return t.transaction(
              ["firebaseLocalStorage"],
              e ? "readwrite" : "readonly"
            );
          }
          function Vu(t) {
            return new Te(function (e, n) {
              (t.onsuccess = function (t) {
                t && t.target ? e(t.target.result) : e();
              }),
                (t.onerror = function (t) {
                  n(t.target.error);
                });
            });
          }
          function Hu(t, e) {
            return t.g &&
              t.h &&
              (function () {
                var t = s.navigator;
                return (
                  (t && t.serviceWorker && t.serviceWorker.controller) || null
                );
              })() === t.h
              ? Cu(t.g, "keyChanged", { key: e }, t.o)
                  .then(function () {})
                  .s(function () {})
              : Re();
          }
          function qu(t) {
            return xu(t)
              .then(function (t) {
                var e = Uu(Fu(t, !1));
                return e.getAll
                  ? Vu(e.getAll())
                  : new Te(function (t, n) {
                      var i = [],
                        r = e.openCursor();
                      (r.onsuccess = function (e) {
                        (e = e.target.result)
                          ? (i.push(e.value), e.continue())
                          : t(i);
                      }),
                        (r.onerror = function (t) {
                          n(t.target.error);
                        });
                    });
              })
              .then(function (e) {
                var n = {},
                  i = [];
                if (0 == t.b) {
                  for (i = 0; i < e.length; i++) n[e[i].fbase_key] = e[i].value;
                  (i = vi(t.c, n)), (t.c = n);
                }
                return i;
              });
          }
          function Bu(t) {
            t.l && t.l.cancel("STOP_EVENT"),
              t.f && (clearTimeout(t.f), (t.f = null));
          }
          function Ku(t) {
            var e = this,
              n = null;
            (this.a = []),
              (this.type = "indexedDB"),
              (this.c = t),
              (this.b = Re()
                .then(function () {
                  if (Mu()) {
                    var t = qi(),
                      i = "__sak" + t;
                    return (
                      ku || (ku = new Du()),
                      (n = ku)
                        .set(i, t)
                        .then(function () {
                          return n.get(i);
                        })
                        .then(function (e) {
                          if (e !== t) throw Error("indexedDB not supported!");
                          return n.T(i);
                        })
                        .then(function () {
                          return n;
                        })
                        .s(function () {
                          return e.c;
                        })
                    );
                  }
                  return e.c;
                })
                .then(function (t) {
                  return (
                    (e.type = t.type),
                    t.ca(function (t) {
                      K(e.a, function (e) {
                        e(t);
                      });
                    }),
                    t
                  );
                }));
          }
          function Gu() {
            (this.a = {}), (this.type = "inMemory");
          }
          function Wu() {
            if (
              !(function () {
                var t = "Node" == Si();
                if (
                  !(t =
                    zu() ||
                    (t && J.INTERNAL.node && J.INTERNAL.node.localStorage))
                )
                  return !1;
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              if ("Node" == Si())
                throw new k(
                  "internal-error",
                  "The LocalStorage compatibility library was not found."
                );
              throw new k("web-storage-unsupported");
            }
            (this.a = zu() || J.INTERNAL.node.localStorage),
              (this.type = "localStorage");
          }
          function zu() {
            try {
              var t = s.localStorage,
                e = qi();
              return t && (t.setItem(e, "1"), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }
          function Xu() {
            this.type = "nullStorage";
          }
          function Ju() {
            if (
              !(function () {
                var t = "Node" == Si();
                if (
                  !(t =
                    Yu() ||
                    (t && J.INTERNAL.node && J.INTERNAL.node.sessionStorage))
                )
                  return !1;
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              if ("Node" == Si())
                throw new k(
                  "internal-error",
                  "The SessionStorage compatibility library was not found."
                );
              throw new k("web-storage-unsupported");
            }
            (this.a = Yu() || J.INTERNAL.node.sessionStorage),
              (this.type = "sessionStorage");
          }
          function Yu() {
            try {
              var t = s.sessionStorage,
                e = qi();
              return t && (t.setItem(e, "1"), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }
          function $u() {
            var t = {};
            (t.Browser = tc),
              (t.Node = ec),
              (t.ReactNative = nc),
              (t.Worker = ic),
              (this.a = t[Si()]);
          }
          (Su.prototype.c = function (t) {
            var e = t.data.eventType,
              n = t.data.eventId,
              i = this.a[e];
            if (i && 0 < i.length) {
              t.ports[0].postMessage({
                status: "ack",
                eventId: n,
                eventType: e,
                response: null,
              });
              var r = [];
              K(i, function (e) {
                r.push(
                  Re().then(function () {
                    return e(t.origin, t.data.data);
                  })
                );
              }),
                De(r).then(function (i) {
                  var r = [];
                  K(i, function (t) {
                    r.push({
                      fulfilled: t.Ob,
                      value: t.value,
                      reason: t.reason ? t.reason.message : void 0,
                    });
                  }),
                    K(r, function (t) {
                      for (var e in t) void 0 === t[e] && delete t[e];
                    }),
                    t.ports[0].postMessage({
                      status: "done",
                      eventId: n,
                      eventType: e,
                      response: r,
                    });
                });
            }
          }),
            (Ou.prototype.postMessage = function (t, e) {
              this.a.postMessage(t, e);
            }),
            (Ru.prototype.close = function () {
              for (; 0 < this.a.length; ) Pu(this, this.a[0]);
              this.b = !0;
            }),
            ((t = Du.prototype).set = function (t, e) {
              var n = this,
                i = !1;
              return ju(this, function (e) {
                return Vu((e = Uu(Fu(e, !0))).get(t));
              })
                .then(function (r) {
                  return ju(n, function (o) {
                    if (((o = Uu(Fu(o, !0))), r))
                      return (r.value = e), Vu(o.put(r));
                    n.b++, (i = !0);
                    var a = {};
                    return (a.fbase_key = t), (a.value = e), Vu(o.add(a));
                  });
                })
                .then(function () {
                  return (n.c[t] = e), Hu(n, t);
                })
                .na(function () {
                  i && n.b--;
                });
            }),
            (t.get = function (t) {
              return ju(this, function (e) {
                return Vu(Uu(Fu(e, !1)).get(t));
              }).then(function (t) {
                return t && t.value;
              });
            }),
            (t.T = function (t) {
              var e = this,
                n = !1;
              return ju(this, function (i) {
                return (n = !0), e.b++, Vu(Uu(Fu(i, !0)).delete(t));
              })
                .then(function () {
                  return delete e.c[t], Hu(e, t);
                })
                .na(function () {
                  n && e.b--;
                });
            }),
            (t.ca = function (t) {
              0 == this.a.length &&
                (function (t) {
                  function e() {
                    t.f = setTimeout(function () {
                      t.l = qu(t)
                        .then(function (e) {
                          0 < e.length &&
                            K(t.a, function (t) {
                              t(e);
                            });
                        })
                        .then(function () {
                          e();
                        })
                        .s(function (t) {
                          "STOP_EVENT" != t.message && e();
                        });
                    }, 800);
                  }
                  Bu(t), e();
                })(this),
                this.a.push(t);
            }),
            (t.ia = function (t) {
              $(this.a, function (e) {
                return e == t;
              }),
                0 == this.a.length && Bu(this);
            }),
            ((t = Ku.prototype).get = function (t) {
              return this.b.then(function (e) {
                return e.get(t);
              });
            }),
            (t.set = function (t, e) {
              return this.b.then(function (n) {
                return n.set(t, e);
              });
            }),
            (t.T = function (t) {
              return this.b.then(function (e) {
                return e.T(t);
              });
            }),
            (t.ca = function (t) {
              this.a.push(t);
            }),
            (t.ia = function (t) {
              $(this.a, function (e) {
                return e == t;
              });
            }),
            ((t = Gu.prototype).get = function (t) {
              return Re(this.a[t]);
            }),
            (t.set = function (t, e) {
              return (this.a[t] = e), Re();
            }),
            (t.T = function (t) {
              return delete this.a[t], Re();
            }),
            (t.ca = function () {}),
            (t.ia = function () {}),
            ((t = Wu.prototype).get = function (t) {
              var e = this;
              return Re().then(function () {
                return Hi(e.a.getItem(t));
              });
            }),
            (t.set = function (t, e) {
              var n = this;
              return Re().then(function () {
                var i = Fi(e);
                null === i ? n.T(t) : n.a.setItem(t, i);
              });
            }),
            (t.T = function (t) {
              var e = this;
              return Re().then(function () {
                e.a.removeItem(t);
              });
            }),
            (t.ca = function (t) {
              s.window && fn(s.window, "storage", t);
            }),
            (t.ia = function (t) {
              s.window && vn(s.window, "storage", t);
            }),
            ((t = Xu.prototype).get = function () {
              return Re(null);
            }),
            (t.set = function () {
              return Re();
            }),
            (t.T = function () {
              return Re();
            }),
            (t.ca = function () {}),
            (t.ia = function () {}),
            ((t = Ju.prototype).get = function (t) {
              var e = this;
              return Re().then(function () {
                return Hi(e.a.getItem(t));
              });
            }),
            (t.set = function (t, e) {
              var n = this;
              return Re().then(function () {
                var i = Fi(e);
                null === i ? n.T(t) : n.a.setItem(t, i);
              });
            }),
            (t.T = function (t) {
              var e = this;
              return Re().then(function () {
                e.a.removeItem(t);
              });
            }),
            (t.ca = function () {}),
            (t.ia = function () {});
          var Zu,
            Qu,
            tc = { D: Wu, ab: Ju },
            ec = { D: Wu, ab: Ju },
            nc = { D: Au, ab: Xu },
            ic = { D: Wu, ab: Xu },
            rc = { qd: "local", NONE: "none", sd: "session" };
          function oc() {
            var t = !(Bi(Pi()) || !Ti()),
              e = Ui(),
              n = Li();
            (this.v = t),
              (this.h = e),
              (this.l = n),
              (this.a = {}),
              Zu || (Zu = new $u()),
              (t = Zu);
            try {
              this.g =
                (!fi() && Ji()) || !s.indexedDB
                  ? new t.a.D()
                  : new Ku(Ai() ? new Gu() : new t.a.D());
            } catch (t) {
              (this.g = new Gu()), (this.h = !0);
            }
            try {
              this.i = new t.a.ab();
            } catch (t) {
              this.i = new Gu();
            }
            (this.m = new Gu()), (this.f = I(this.Xb, this)), (this.b = {});
          }
          function ac() {
            return Qu || (Qu = new oc()), Qu;
          }
          function sc(t, e) {
            switch (e) {
              case "session":
                return t.i;
              case "none":
                return t.m;
              default:
                return t.g;
            }
          }
          function uc(t, e) {
            return "firebase:" + t.name + (e ? ":" + e : "");
          }
          function cc(t, e, n) {
            return (
              (n = uc(e, n)), "local" == e.D && (t.b[n] = null), sc(t, e.D).T(n)
            );
          }
          function hc(t) {
            t.c && (clearInterval(t.c), (t.c = null));
          }
          function lc(t) {
            (this.a = t), (this.b = ac());
          }
          ((t = oc.prototype).get = function (t, e) {
            return sc(this, t.D).get(uc(t, e));
          }),
            (t.set = function (t, e, n) {
              var i = uc(t, n),
                r = this,
                o = sc(this, t.D);
              return o
                .set(i, e)
                .then(function () {
                  return o.get(i);
                })
                .then(function (e) {
                  "local" == t.D && (r.b[i] = e);
                });
            }),
            (t.addListener = function (t, e, n) {
              (t = uc(t, e)),
                this.l && (this.b[t] = s.localStorage.getItem(t)),
                vt(this.a) &&
                  (sc(this, "local").ca(this.f),
                  this.h ||
                    ((fi() || !Ji()) && s.indexedDB) ||
                    !this.l ||
                    (function (t) {
                      hc(t),
                        (t.c = setInterval(function () {
                          for (var e in t.a) {
                            var n = s.localStorage.getItem(e),
                              i = t.b[e];
                            n != i &&
                              ((t.b[e] = n),
                              (n = new tn({
                                type: "storage",
                                key: e,
                                target: window,
                                oldValue: i,
                                newValue: n,
                                a: !0,
                              })),
                              t.Xb(n));
                          }
                        }, 1e3));
                    })(this)),
                this.a[t] || (this.a[t] = []),
                this.a[t].push(n);
            }),
            (t.removeListener = function (t, e, n) {
              (t = uc(t, e)),
                this.a[t] &&
                  ($(this.a[t], function (t) {
                    return t == n;
                  }),
                  0 == this.a[t].length && delete this.a[t]),
                vt(this.a) && (sc(this, "local").ia(this.f), hc(this));
            }),
            (t.Xb = function (t) {
              if (t && t.g) {
                var e = t.a.key;
                if (null == e)
                  for (var n in this.a) {
                    var i = this.b[n];
                    void 0 === i && (i = null);
                    var r = s.localStorage.getItem(n);
                    r !== i && ((this.b[n] = r), this.lb(n));
                  }
                else if (0 == e.indexOf("firebase:") && this.a[e]) {
                  if (
                    (void 0 !== t.a.a ? sc(this, "local").ia(this.f) : hc(this),
                    this.v)
                  )
                    if (
                      ((n = s.localStorage.getItem(e)),
                      (i = t.a.newValue) !== n)
                    )
                      null !== i
                        ? s.localStorage.setItem(e, i)
                        : s.localStorage.removeItem(e);
                    else if (this.b[e] === i && void 0 === t.a.a) return;
                  var o = this;
                  (n = function () {
                    (void 0 === t.a.a &&
                      o.b[e] === s.localStorage.getItem(e)) ||
                      ((o.b[e] = s.localStorage.getItem(e)), o.lb(e));
                  }),
                    Yt &&
                    ce &&
                    10 == ce &&
                    s.localStorage.getItem(e) !== t.a.newValue &&
                    t.a.newValue !== t.a.oldValue
                      ? setTimeout(n, 10)
                      : n();
                }
              } else K(t, I(this.lb, this));
            }),
            (t.lb = function (t) {
              this.a[t] &&
                K(this.a[t], function (t) {
                  t();
                });
            });
          var fc,
            pc = { name: "authEvent", D: "local" };
          function dc() {
            this.a = ac();
          }
          function vc(t, e) {
            (this.b = mc),
              (this.f = s.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
              (this.g = this.c = 0),
              (this.a = []),
              (this.i = t),
              (this.h = e),
              (this.l = s.Int32Array ? new Int32Array(64) : Array(64)),
              void 0 === fc && (fc = s.Int32Array ? new Int32Array(Tc) : Tc),
              this.reset();
          }
          A(vc, function () {
            this.b = -1;
          });
          for (var mc = 64, gc = mc - 1, bc = [], yc = 0; yc < gc; yc++)
            bc[yc] = 0;
          var wc = Z(128, bc);
          function Ic(t) {
            for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
              (n[i++] =
                (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
                (r = 4 * i);
            for (e = 16; 64 > e; e++) {
              (r = 0 | n[e - 15]), (i = 0 | n[e - 2]);
              var o =
                  ((0 | n[e - 16]) +
                    (((r >>> 7) | (r << 25)) ^
                      ((r >>> 18) | (r << 14)) ^
                      (r >>> 3))) |
                  0,
                a =
                  ((0 | n[e - 7]) +
                    (((i >>> 17) | (i << 15)) ^
                      ((i >>> 19) | (i << 13)) ^
                      (i >>> 10))) |
                  0;
              n[e] = (o + a) | 0;
            }
            (i = 0 | t.a[0]), (r = 0 | t.a[1]);
            var s = 0 | t.a[2],
              u = 0 | t.a[3],
              c = 0 | t.a[4],
              h = 0 | t.a[5],
              l = 0 | t.a[6];
            for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
              var f =
                ((((i >>> 2) | (i << 30)) ^
                  ((i >>> 13) | (i << 19)) ^
                  ((i >>> 22) | (i << 10))) +
                  ((i & r) ^ (i & s) ^ (r & s))) |
                0;
              (a =
                ((o =
                  (o +
                    (((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7)))) |
                  0) +
                  (((a = ((a = (c & h) ^ (~c & l)) + (0 | fc[e])) | 0) +
                    (0 | n[e])) |
                    0)) |
                0),
                (o = l),
                (l = h),
                (h = c),
                (c = (u + a) | 0),
                (u = s),
                (s = r),
                (r = i),
                (i = (a + f) | 0);
            }
            (t.a[0] = (t.a[0] + i) | 0),
              (t.a[1] = (t.a[1] + r) | 0),
              (t.a[2] = (t.a[2] + s) | 0),
              (t.a[3] = (t.a[3] + u) | 0),
              (t.a[4] = (t.a[4] + c) | 0),
              (t.a[5] = (t.a[5] + h) | 0),
              (t.a[6] = (t.a[6] + l) | 0),
              (t.a[7] = (t.a[7] + o) | 0);
          }
          function Ec(t, e, n) {
            void 0 === n && (n = e.length);
            var i = 0,
              r = t.c;
            if ("string" == typeof e)
              for (; i < n; )
                (t.f[r++] = e.charCodeAt(i++)), r == t.b && (Ic(t), (r = 0));
            else {
              if (!p(e)) throw Error("message must be string or array");
              for (; i < n; ) {
                var o = e[i++];
                if (
                  !("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o))
                )
                  throw Error("message must be a byte array");
                (t.f[r++] = o), r == t.b && (Ic(t), (r = 0));
              }
            }
            (t.c = r), (t.g += n);
          }
          vc.prototype.reset = function () {
            (this.g = this.c = 0),
              (this.a = s.Int32Array ? new Int32Array(this.h) : Q(this.h));
          };
          var Tc = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ];
          function Ac() {
            vc.call(this, 8, Sc);
          }
          A(Ac, vc);
          var Sc = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ];
          function kc(t, e, n, i, r, o) {
            (this.m = t),
              (this.i = e),
              (this.l = n),
              (this.v = i || null),
              (this.u = r || null),
              (this.o = o),
              (this.h = e + ":" + n),
              (this.A = new dc()),
              (this.g = new lc(this.h)),
              (this.f = null),
              (this.b = []),
              (this.a = this.c = null);
          }
          function Nc(t) {
            return new k("invalid-cordova-configuration", t);
          }
          function _c(t) {
            var e = new Ac();
            Ec(e, t), (t = []);
            var n = 8 * e.g;
            56 > e.c ? Ec(e, wc, 56 - e.c) : Ec(e, wc, e.b - (e.c - 56));
            for (var i = 63; 56 <= i; i--) (e.f[i] = 255 & n), (n /= 256);
            for (Ic(e), i = n = 0; i < e.i; i++)
              for (var r = 24; 0 <= r; r -= 8) t[n++] = (e.a[i] >> r) & 255;
            return (function (t) {
              return W(t, function (t) {
                return 1 < (t = t.toString(16)).length ? t : "0" + t;
              }).join("");
            })(t);
          }
          function Oc(t, e) {
            for (var n = 0; n < t.b.length; n++)
              try {
                t.b[n](e);
              } catch (t) {}
          }
          function Rc(t) {
            return (
              t.f ||
                (t.f = t.la().then(function () {
                  return new Te(function (e) {
                    t.Ea(function n(i) {
                      return e(i), t.Ra(n), !1;
                    }),
                      (function (t) {
                        function e(e) {
                          (i = !0),
                            r && r.cancel(),
                            Cc(t).then(function (i) {
                              var r = n;
                              if (i && e && e.url) {
                                var o = null;
                                -1 !=
                                  (r = co(e.url)).indexOf(
                                    "/__/auth/callback"
                                  ) &&
                                  (o = (o =
                                    "object" ==
                                    typeof (o = Hi(
                                      Hn((o = qn(r)), "firebaseError") || null
                                    ))
                                      ? N(o)
                                      : null)
                                    ? new Go(
                                        i.c,
                                        i.b,
                                        null,
                                        null,
                                        o,
                                        null,
                                        i.S()
                                      )
                                    : new Go(
                                        i.c,
                                        i.b,
                                        r,
                                        i.f,
                                        null,
                                        null,
                                        i.S()
                                      )),
                                  (r = o || n);
                              }
                              Oc(t, r);
                            });
                        }
                        var n = new Go(
                            "unknown",
                            null,
                            null,
                            null,
                            new k("no-auth-event")
                          ),
                          i = !1,
                          r = On(500).then(function () {
                            return Cc(t).then(function () {
                              i || Oc(t, n);
                            });
                          }),
                          o = s.handleOpenURL;
                        (s.handleOpenURL = function (t) {
                          if (
                            (0 ==
                              t
                                .toLowerCase()
                                .indexOf(
                                  Di("BuildInfo.packageName", s).toLowerCase() +
                                    "://"
                                ) && e({ url: t }),
                            "function" == typeof o)
                          )
                            try {
                              o(t);
                            } catch (t) {
                              console.error(t);
                            }
                        }),
                          Jo || (Jo = new zo()),
                          (function (t) {
                            var e = Jo;
                            e.a.push(t),
                              e.b ||
                                ((e.b = function (t) {
                                  for (var n = 0; n < e.a.length; n++)
                                    e.a[n](t);
                                }),
                                "function" ==
                                  typeof (t = Di(
                                    "universalLinks.subscribe",
                                    s
                                  )) && t(null, e.b));
                          })(e);
                      })(t);
                  });
                })),
              t.f
            );
          }
          function Cc(t) {
            var e = null;
            return (function (t) {
              return t.b.get(pc, t.a).then(function (t) {
                return Wo(t);
              });
            })(t.g)
              .then(function (n) {
                return (e = n), cc((n = t.g).b, pc, n.a);
              })
              .then(function () {
                return e;
              });
          }
          function Pc(t) {
            (this.a = t), (this.b = ac());
          }
          ((t = kc.prototype).la = function () {
            return this.Ia
              ? this.Ia
              : (this.Ia = (
                  Ei(void 0)
                    ? Ii().then(function () {
                        return new Te(function (t, e) {
                          var n = s.document,
                            i = setTimeout(function () {
                              e(Error("Cordova framework is not ready."));
                            }, 1e3);
                          n.addEventListener(
                            "deviceready",
                            function () {
                              clearTimeout(i), t();
                            },
                            !1
                          );
                        });
                      })
                    : Ce(
                        Error(
                          "Cordova must run in an Android or iOS file scheme."
                        )
                      )
                ).then(
                  function () {
                    if ("function" != typeof Di("universalLinks.subscribe", s))
                      throw Nc(
                        "cordova-universal-links-plugin-fix is not installed"
                      );
                    if (void 0 === Di("BuildInfo.packageName", s))
                      throw Nc("cordova-plugin-buildinfo is not installed");
                    if (
                      "function" !=
                      typeof Di("cordova.plugins.browsertab.openUrl", s)
                    )
                      throw Nc("cordova-plugin-browsertab is not installed");
                    if ("function" != typeof Di("cordova.InAppBrowser.open", s))
                      throw Nc("cordova-plugin-inappbrowser is not installed");
                  },
                  function () {
                    throw new k("cordova-not-ready");
                  }
                ));
          }),
            (t.Nb = function (t, e) {
              return (
                e(new k("operation-not-supported-in-this-environment")), Re()
              );
            }),
            (t.Lb = function () {
              return Ce(new k("operation-not-supported-in-this-environment"));
            }),
            (t.Zb = function () {
              return !1;
            }),
            (t.Wb = function () {
              return !0;
            }),
            (t.Sb = function () {
              return !0;
            }),
            (t.Mb = function (t, e, n, i) {
              if (this.c) return Ce(new k("redirect-operation-pending"));
              var r = this,
                o = s.document,
                a = null,
                u = null,
                c = null,
                h = null;
              return (this.c = Re()
                .then(function () {
                  return Ko(e), Rc(r);
                })
                .then(function () {
                  return (function (t, e, n, i, r) {
                    var o = (function () {
                        for (var t = 20, e = []; 0 < t; )
                          e.push(
                            "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                              Math.floor(62 * Math.random())
                            )
                          ),
                            t--;
                        return e.join("");
                      })(),
                      a = new Go(
                        e,
                        i,
                        null,
                        o,
                        new k("no-auth-event"),
                        null,
                        r
                      ),
                      u = Di("BuildInfo.packageName", s);
                    if ("string" != typeof u)
                      throw new k("invalid-cordova-configuration");
                    var c = Di("BuildInfo.displayName", s),
                      h = {};
                    if (
                      Pi()
                        .toLowerCase()
                        .match(/iphone|ipad|ipod/)
                    )
                      h.ibi = u;
                    else {
                      if (
                        !Pi()
                          .toLowerCase()
                          .match(/android/)
                      )
                        return Ce(
                          new k("operation-not-supported-in-this-environment")
                        );
                      h.apn = u;
                    }
                    c && (h.appDisplayName = c), (o = _c(o)), (h.sessionId = o);
                    var l = Tu(
                      t.m,
                      t.i,
                      t.l,
                      e,
                      n,
                      null,
                      i,
                      t.v,
                      h,
                      t.u,
                      r,
                      t.o
                    );
                    return t
                      .la()
                      .then(function () {
                        var e = t.h;
                        return t.A.a.set(pc, a.w(), e);
                      })
                      .then(function () {
                        var e = Di("cordova.plugins.browsertab.isAvailable", s);
                        if ("function" != typeof e)
                          throw new k("invalid-cordova-configuration");
                        var n = null;
                        e(function (e) {
                          if (e) {
                            if (
                              "function" !=
                              typeof (n = Di(
                                "cordova.plugins.browsertab.openUrl",
                                s
                              ))
                            )
                              throw new k("invalid-cordova-configuration");
                            n(l);
                          } else {
                            if (
                              "function" !=
                              typeof (n = Di("cordova.InAppBrowser.open", s))
                            )
                              throw new k("invalid-cordova-configuration");
                            (e = Pi()),
                              (t.a = n(
                                l,
                                e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                  e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                  ? "_blank"
                                  : "_system",
                                "location=yes"
                              ));
                          }
                        });
                      });
                  })(r, t, e, n, i);
                })
                .then(function () {
                  return new Te(function (t, e) {
                    (u = function () {
                      var e = Di("cordova.plugins.browsertab.close", s);
                      return (
                        t(),
                        "function" == typeof e && e(),
                        r.a &&
                          "function" == typeof r.a.close &&
                          (r.a.close(), (r.a = null)),
                        !1
                      );
                    }),
                      r.Ea(u),
                      (c = function () {
                        a ||
                          (a = On(2e3).then(function () {
                            e(new k("redirect-cancelled-by-user"));
                          }));
                      }),
                      (h = function () {
                        Wi() && c();
                      }),
                      o.addEventListener("resume", c, !1),
                      Pi()
                        .toLowerCase()
                        .match(/android/) ||
                        o.addEventListener("visibilitychange", h, !1);
                  }).s(function (t) {
                    return Cc(r).then(function () {
                      throw t;
                    });
                  });
                })
                .na(function () {
                  c && o.removeEventListener("resume", c, !1),
                    h && o.removeEventListener("visibilitychange", h, !1),
                    a && a.cancel(),
                    u && r.Ra(u),
                    (r.c = null);
                }));
            }),
            (t.Ea = function (t) {
              this.b.push(t),
                Rc(this).s(function (e) {
                  "auth/invalid-cordova-configuration" === e.code &&
                    ((e = new Go(
                      "unknown",
                      null,
                      null,
                      null,
                      new k("no-auth-event")
                    )),
                    t(e));
                });
            }),
            (t.Ra = function (t) {
              $(this.b, function (e) {
                return e == t;
              });
            });
          var Dc = { name: "pendingRedirect", D: "session" };
          function Lc(t) {
            return cc(t.b, Dc, t.a);
          }
          function xc(t, e, n, i) {
            (this.i = {}),
              (this.u = 0),
              (this.O = t),
              (this.m = e),
              (this.v = n),
              (this.G = i),
              (this.h = []),
              (this.f = !1),
              (this.l = I(this.o, this)),
              (this.b = new Yc()),
              (this.A = new eh()),
              (this.g = new Pc(Xc(this.m, this.v))),
              (this.c = {}),
              (this.c.unknown = this.b),
              (this.c.signInViaRedirect = this.b),
              (this.c.linkViaRedirect = this.b),
              (this.c.reauthViaRedirect = this.b),
              (this.c.signInViaPopup = this.A),
              (this.c.linkViaPopup = this.A),
              (this.c.reauthViaPopup = this.A),
              (this.a = jc(this.O, this.m, this.v, _, this.G));
          }
          function jc(t, e, n, i, r) {
            var o = J.SDK_VERSION || null;
            return Ei() ? new kc(t, e, n, o, i, r) : new yu(t, e, n, o, i, r);
          }
          function Mc(t) {
            t.f || ((t.f = !0), t.a.Ea(t.l));
            var e = t.a;
            return t.a.la().s(function (n) {
              throw (t.a == e && t.reset(), n);
            });
          }
          function Uc(t) {
            t.a.Wb() &&
              Mc(t).s(function (e) {
                var n = new Go(
                  "unknown",
                  null,
                  null,
                  null,
                  new k("operation-not-supported-in-this-environment")
                );
                Kc(e) && t.o(n);
              }),
              t.a.Sb() || $c(t.b);
          }
          function Fc(t, e) {
            X(t.h, e) || t.h.push(e),
              t.f ||
                (function (t) {
                  return t.b.get(Dc, t.a).then(function (t) {
                    return "pending" == t;
                  });
                })(t.g)
                  .then(function (e) {
                    e
                      ? Lc(t.g).then(function () {
                          Mc(t).s(function (e) {
                            var n = new Go(
                              "unknown",
                              null,
                              null,
                              null,
                              new k(
                                "operation-not-supported-in-this-environment"
                              )
                            );
                            Kc(e) && t.o(n);
                          });
                        })
                      : Uc(t);
                  })
                  .s(function () {
                    Uc(t);
                  });
          }
          function Vc(t, e) {
            $(t.h, function (t) {
              return t == e;
            });
          }
          (xc.prototype.reset = function () {
            (this.f = !1),
              this.a.Ra(this.l),
              (this.a = jc(this.O, this.m, this.v, null, this.G)),
              (this.i = {});
          }),
            (xc.prototype.o = function (t) {
              if (!t) throw new k("invalid-auth-event");
              if (
                (6e5 <= T() - this.u && ((this.i = {}), (this.u = 0)),
                t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
              )
                return !1;
              for (var e = !1, n = 0; n < this.h.length; n++) {
                var i = this.h[n];
                if (i.Eb(t.c, t.b)) {
                  (e = this.c[t.c]) &&
                    (e.h(t, i),
                    t &&
                      (t.f || t.b) &&
                      ((this.i[t.getUid()] = !0), (this.u = T()))),
                    (e = !0);
                  break;
                }
              }
              return $c(this.b), e;
            });
          var Hc = new Gi(2e3, 1e4),
            qc = new Gi(3e4, 6e4);
          function Bc(t, e, n, i, r, o, a) {
            return t.a.Lb(
              e,
              n,
              i,
              function () {
                t.f || ((t.f = !0), t.a.Ea(t.l));
              },
              function () {
                t.reset();
              },
              r,
              o,
              a
            );
          }
          function Kc(t) {
            return !(!t || "auth/cordova-not-ready" != t.code);
          }
          function Gc(t, e, n, i, r) {
            var o;
            return (function (t) {
              return t.b.set(Dc, "pending", t.a);
            })(t.g).then(function () {
              return t.a
                .Mb(e, n, i, r)
                .s(function (e) {
                  if (Kc(e))
                    throw new k("operation-not-supported-in-this-environment");
                  return (
                    (o = e),
                    Lc(t.g).then(function () {
                      throw o;
                    })
                  );
                })
                .then(function () {
                  return t.a.Zb()
                    ? new Te(function () {})
                    : Lc(t.g)
                        .then(function () {
                          return t.qa();
                        })
                        .then(function () {})
                        .s(function () {});
                });
            });
          }
          function Wc(t, e, n, i, r) {
            return t.a.Nb(
              i,
              function (t) {
                e.ma(n, null, t, r);
              },
              Hc.get()
            );
          }
          xc.prototype.qa = function () {
            return this.b.qa();
          };
          var zc = {};
          function Xc(t, e, n) {
            return (t = t + ":" + e), n && (t = t + ":" + n.url), t;
          }
          function Jc(t, e, n, i) {
            var r = Xc(e, n, i);
            return zc[r] || (zc[r] = new xc(t, e, n, i)), zc[r];
          }
          function Yc() {
            (this.b = null),
              (this.f = []),
              (this.c = []),
              (this.a = null),
              (this.i = this.g = !1);
          }
          function $c(t) {
            t.g || ((t.g = !0), th(t, !1, null, null));
          }
          function Zc(t) {
            t.g && !t.i && th(t, !1, null, null);
          }
          function Qc(t, e) {
            if (
              ((t.b = function () {
                return Re(e);
              }),
              t.f.length)
            )
              for (var n = 0; n < t.f.length; n++) t.f[n](e);
          }
          function th(t, e, n, i) {
            e
              ? i
                ? (function (t, e) {
                    if (
                      ((t.b = function () {
                        return Ce(e);
                      }),
                      t.c.length)
                    )
                      for (var n = 0; n < t.c.length; n++) t.c[n](e);
                  })(t, i)
                : Qc(t, n)
              : Qc(t, { user: null }),
              (t.f = []),
              (t.c = []);
          }
          function eh() {}
          function nh() {
            (this.hb = !1),
              Object.defineProperty(this, "appVerificationDisabled", {
                get: function () {
                  return this.hb;
                },
                set: function (t) {
                  this.hb = t;
                },
                enumerable: !1,
              });
          }
          function ih(t, e) {
            (this.a = e), tr(this, "verificationId", t);
          }
          function rh(t, e, n, i) {
            return new Ho(t).eb(e, n).then(function (t) {
              return new ih(t, i);
            });
          }
          function oh(t) {
            var e = Jr(t);
            if (!(e && e.exp && e.auth_time && e.iat))
              throw new k(
                "internal-error",
                "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation."
              );
            er(this, {
              token: t,
              expirationTime: Xi(1e3 * e.exp),
              authTime: Xi(1e3 * e.auth_time),
              issuedAtTime: Xi(1e3 * e.iat),
              signInProvider:
                e.firebase && e.firebase.sign_in_provider
                  ? e.firebase.sign_in_provider
                  : null,
              signInSecondFactor:
                e.firebase && e.firebase.sign_in_second_factor
                  ? e.firebase.sign_in_second_factor
                  : null,
              claims: e,
            });
          }
          function ah(t, e, n) {
            var i = e && e[uh];
            if (!i)
              throw new k(
                "argument-error",
                "Internal assert: Invalid MultiFactorResolver"
              );
            (this.a = t),
              (this.f = mt(e)),
              (this.g = n),
              (this.c = new ho(null, i)),
              (this.b = []);
            var r = this;
            K(e[sh] || [], function (t) {
              (t = or(t)) && r.b.push(t);
            }),
              tr(this, "auth", this.a),
              tr(this, "session", this.c),
              tr(this, "hints", this.b);
          }
          (Yc.prototype.reset = function () {
            (this.b = null), this.a && (this.a.cancel(), (this.a = null));
          }),
            (Yc.prototype.h = function (t, e) {
              if (t) {
                this.reset(), (this.g = !0);
                var n = t.c,
                  i = t.b,
                  r = t.a && "auth/web-storage-unsupported" == t.a.code,
                  o =
                    t.a &&
                    "auth/operation-not-supported-in-this-environment" ==
                      t.a.code;
                (this.i = !(!r && !o)),
                  "unknown" != n || r || o
                    ? t.a
                      ? (th(this, !0, null, t.a), Re())
                      : e.Fa(n, i)
                      ? (function (t, e, n) {
                          n = n.Fa(e.c, e.b);
                          var i = e.g,
                            r = e.f,
                            o = e.i,
                            a = e.S(),
                            s = !!e.c.match(/Redirect$/);
                          n(i, r, a, o)
                            .then(function (e) {
                              th(t, s, e, null);
                            })
                            .s(function (e) {
                              th(t, s, null, e);
                            });
                        })(this, t, e)
                      : Ce(new k("invalid-auth-event"))
                    : (th(this, !1, null, null), Re());
              } else Ce(new k("invalid-auth-event"));
            }),
            (Yc.prototype.qa = function () {
              var t = this;
              return new Te(function (e, n) {
                t.b
                  ? t.b().then(e, n)
                  : (t.f.push(e),
                    t.c.push(n),
                    (function (t) {
                      var e = new k("timeout");
                      t.a && t.a.cancel(),
                        (t.a = On(qc.get()).then(function () {
                          t.b || ((t.g = !0), th(t, !0, null, e));
                        }));
                    })(t));
              });
            }),
            (eh.prototype.h = function (t, e) {
              if (t) {
                var n = t.c,
                  i = t.b;
                t.a
                  ? (e.ma(t.c, null, t.a, t.b), Re())
                  : e.Fa(n, i)
                  ? (function (t, e) {
                      var n = t.b,
                        i = t.c;
                      e.Fa(i, n)(t.g, t.f, t.S(), t.i)
                        .then(function (t) {
                          e.ma(i, t, null, n);
                        })
                        .s(function (t) {
                          e.ma(i, null, t, n);
                        });
                    })(t, e)
                  : Ce(new k("invalid-auth-event"));
              } else Ce(new k("invalid-auth-event"));
            }),
            (ih.prototype.confirm = function (t) {
              return (t = qo(this.verificationId, t)), this.a(t);
            });
          var sh = "mfaInfo",
            uh = "mfaPendingCredential";
          function ch(t, e, n, i) {
            k.call(this, "multi-factor-auth-required", i, e),
              (this.b = new ah(t, e, n)),
              tr(this, "resolver", this.b);
          }
          function hh(t, e, n) {
            if (
              t &&
              v(t.serverResponse) &&
              "auth/multi-factor-auth-required" === t.code
            )
              try {
                return new ch(e, t.serverResponse, n, t.message);
              } catch (t) {}
            return null;
          }
          function lh() {}
          function fh(t) {
            tr(this, "factorId", t.fa), (this.a = t);
          }
          function ph(t) {
            if ((fh.call(this, t), this.a.fa != Ho.PROVIDER_ID))
              throw new k(
                "argument-error",
                "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential"
              );
          }
          function dh(t, e) {
            for (var n in (Qe.call(this, t), e)) this[n] = e[n];
          }
          function vh(t, e) {
            (this.a = t),
              (this.b = []),
              (this.c = I(this.xc, this)),
              fn(this.a, "userReloaded", this.c);
            var n = [];
            e &&
              e.multiFactor &&
              e.multiFactor.enrolledFactors &&
              K(e.multiFactor.enrolledFactors, function (t) {
                var e = null,
                  i = {};
                if (t) {
                  t.uid && (i[ur] = t.uid),
                    t.displayName && (i[ar] = t.displayName),
                    t.enrollmentTime &&
                      (i[sr] = new Date(t.enrollmentTime).toISOString()),
                    t.phoneNumber && (i[cr] = t.phoneNumber);
                  try {
                    e = new hr(i);
                  } catch (t) {}
                  t = e;
                } else t = null;
                t && n.push(t);
              }),
              mh(this, n);
          }
          function mh(t, e) {
            (t.b = e), tr(t, "enrolledFactors", e);
          }
          function gh(t, e, n) {
            if (
              ((this.h = t),
              (this.i = e),
              (this.g = n),
              (this.c = 3e4),
              (this.f = 96e4),
              (this.b = null),
              (this.a = this.c),
              this.f < this.c)
            )
              throw Error(
                "Proactive refresh lower bound greater than upper bound!"
              );
          }
          function bh(t, e) {
            t.stop(),
              (t.b = On(
                (function (t, e) {
                  return e
                    ? ((t.a = t.c), t.g())
                    : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e);
                })(t, e)
              )
                .then(function () {
                  return (function () {
                    var t = s.document,
                      e = null;
                    return Wi() || !t
                      ? Re()
                      : new Te(function (n) {
                          (e = function () {
                            Wi() &&
                              (t.removeEventListener("visibilitychange", e, !1),
                              n());
                          }),
                            t.addEventListener("visibilitychange", e, !1);
                        }).s(function (n) {
                          throw (
                            (t.removeEventListener("visibilitychange", e, !1),
                            n)
                          );
                        });
                  })();
                })
                .then(function () {
                  return t.h();
                })
                .then(function () {
                  bh(t, !0);
                })
                .s(function (e) {
                  t.i(e) && bh(t, !1);
                }));
          }
          function yh(t) {
            (this.c = t), (this.b = this.a = null);
          }
          function wh(t) {
            return (t.b && 1e3 * t.b.c) || 0;
          }
          function Ih(t, e) {
            var n = e.refreshToken;
            (t.b = Xr(e[is] || "")), (t.a = n);
          }
          function Eh(t, e) {
            return (function (t, e) {
              return new Te(function (n, i) {
                ("refresh_token" == e.grant_type && e.refresh_token) ||
                ("authorization_code" == e.grant_type && e.code)
                  ? fs(
                      t,
                      t.l + "?key=" + encodeURIComponent(t.c),
                      function (t) {
                        t
                          ? t.error
                            ? i(hu(t))
                            : t.access_token && t.refresh_token
                            ? n(t)
                            : i(new k("internal-error"))
                          : i(new k("network-request-failed"));
                      },
                      "POST",
                      ti(e).toString(),
                      t.g,
                      t.v.get()
                    )
                  : i(new k("internal-error"));
              });
            })(t.c, e)
              .then(function (e) {
                return (
                  (t.b = Xr(e.access_token)),
                  (t.a = e.refresh_token),
                  { accessToken: t.b.toString(), refreshToken: t.a }
                );
              })
              .s(function (e) {
                throw ("auth/user-token-expired" == e.code && (t.a = null), e);
              });
          }
          function Th(t, e) {
            (this.a = t || null),
              (this.b = e || null),
              er(this, {
                lastSignInTime: Xi(e || null),
                creationTime: Xi(t || null),
              });
          }
          function Ah(t, e, n, i, r, o) {
            er(this, {
              uid: t,
              displayName: i || null,
              photoURL: r || null,
              email: n || null,
              phoneNumber: o || null,
              providerId: e,
            });
          }
          function Sh(t, e, n) {
            (this.G = []),
              (this.l = t.apiKey),
              (this.m = t.appName),
              (this.o = t.authDomain || null);
            var i = J.SDK_VERSION ? Ci(J.SDK_VERSION) : null;
            (this.a = new es(this.l, P(_), i)),
              t.emulatorConfig && cs(this.a, t.emulatorConfig),
              (this.b = new yh(this.a)),
              Dh(this, e[is]),
              Ih(this.b, e),
              tr(this, "refreshToken", this.b.a),
              jh(this, n || {}),
              An.call(this),
              (this.P = !1),
              this.o && xi() && (this.i = Jc(this.o, this.l, this.m)),
              (this.R = []),
              (this.f = null),
              (this.u = (function (t) {
                return new gh(
                  function () {
                    return t.I(!0);
                  },
                  function (t) {
                    return !(!t || "auth/network-request-failed" != t.code);
                  },
                  function () {
                    var e = wh(t.b) - T() - 3e5;
                    return 0 < e ? e : 0;
                  }
                );
              })(this)),
              (this.$ = I(this.gb, this));
            var r = this;
            (this.pa = null),
              (this.Ba = function (t) {
                r.wa(t.h);
              }),
              (this.ba = null),
              (this.za = function (t) {
                cs(r.a, t.c);
              }),
              (this.W = null),
              (this.X = []),
              (this.Aa = function (t) {
                _h(r, t.f);
              }),
              (this.aa = null),
              (this.N = new vh(this, n)),
              tr(this, "multiFactor", this.N);
          }
          function kh(t, e) {
            t.ba && vn(t.ba, "languageCodeChanged", t.Ba),
              (t.ba = e) && fn(e, "languageCodeChanged", t.Ba);
          }
          function Nh(t, e) {
            t.W && vn(t.W, "emulatorConfigChanged", t.za),
              (t.W = e) && fn(e, "emulatorConfigChanged", t.za);
          }
          function _h(t, e) {
            (t.X = e), ls(t.a, J.SDK_VERSION ? Ci(J.SDK_VERSION, t.X) : null);
          }
          function Oh(t, e) {
            t.aa && vn(t.aa, "frameworkChanged", t.Aa),
              (t.aa = e) && fn(e, "frameworkChanged", t.Aa);
          }
          function Rh(t) {
            try {
              return J.app(t.m).auth();
            } catch (e) {
              throw new k(
                "internal-error",
                "No firebase.auth.Auth instance is available for the Firebase App '" +
                  t.m +
                  "'!"
              );
            }
          }
          function Ch(t) {
            t.A ||
              t.u.b ||
              (t.u.start(),
              vn(t, "tokenChanged", t.$),
              fn(t, "tokenChanged", t.$));
          }
          function Ph(t) {
            vn(t, "tokenChanged", t.$), t.u.stop();
          }
          function Dh(t, e) {
            (t.ya = e), tr(t, "_lat", e);
          }
          function Lh(t) {
            for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
            return De(e).then(function () {
              return t;
            });
          }
          function xh(t) {
            t.i && !t.P && ((t.P = !0), Fc(t.i, t));
          }
          function jh(t, e) {
            er(t, {
              uid: e.uid,
              displayName: e.displayName || null,
              photoURL: e.photoURL || null,
              email: e.email || null,
              emailVerified: e.emailVerified || !1,
              phoneNumber: e.phoneNumber || null,
              isAnonymous: e.isAnonymous || !1,
              tenantId: e.tenantId || null,
              metadata: new Th(e.createdAt, e.lastLoginAt),
              providerData: [],
            }),
              (t.a.b = t.tenantId);
          }
          function Mh() {}
          function Uh(t) {
            return Re().then(function () {
              if (t.A) throw new k("app-deleted");
            });
          }
          function Fh(t) {
            return W(t.providerData, function (t) {
              return t.providerId;
            });
          }
          function Vh(t, e) {
            e && (Hh(t, e.providerId), t.providerData.push(e));
          }
          function Hh(t, e) {
            $(t.providerData, function (t) {
              return t.providerId == e;
            });
          }
          function qh(t, e, n) {
            ("uid" != e || n) && t.hasOwnProperty(e) && tr(t, e, n);
          }
          function Bh(t, e) {
            t != e &&
              (er(t, {
                uid: e.uid,
                displayName: e.displayName,
                photoURL: e.photoURL,
                email: e.email,
                emailVerified: e.emailVerified,
                phoneNumber: e.phoneNumber,
                isAnonymous: e.isAnonymous,
                tenantId: e.tenantId,
                providerData: [],
              }),
              e.metadata
                ? tr(
                    t,
                    "metadata",
                    (function (t) {
                      return new Th(t.a, t.b);
                    })(e.metadata)
                  )
                : tr(t, "metadata", new Th()),
              K(e.providerData, function (e) {
                Vh(t, e);
              }),
              (function (t, e) {
                (t.b = e.b), (t.a = e.a);
              })(t.b, e.b),
              tr(t, "refreshToken", t.b.a),
              mh(t.N, e.N.b));
          }
          function Kh(t) {
            return t.I().then(function (e) {
              var n = t.isAnonymous;
              return (function (t, e) {
                return uu(t.a, Fs, { idToken: e }).then(I(t.Jc, t));
              })(t, e).then(function () {
                return n || qh(t, "isAnonymous", !1), e;
              });
            });
          }
          function Gh(t, e) {
            e[is] &&
              t.ya != e[is] &&
              (Ih(t.b, e),
              t.dispatchEvent(new dh("tokenChanged")),
              Dh(t, e[is]),
              qh(t, "refreshToken", t.b.a));
          }
          function Wh(t, e) {
            return Kh(t).then(function () {
              if (X(Fh(t), e))
                return Lh(t).then(function () {
                  throw new k("provider-already-linked");
                });
            });
          }
          function zh(t, e, n) {
            return nr({
              user: t,
              credential: Bo(e),
              additionalUserInfo: (e = to(e)),
              operationType: n,
            });
          }
          function Xh(t, e) {
            return (
              Gh(t, e),
              t.reload().then(function () {
                return t;
              })
            );
          }
          function Jh(t, e, n, i, r) {
            if (!xi())
              return Ce(new k("operation-not-supported-in-this-environment"));
            if (t.f && !r) return Ce(t.f);
            var o = Qr(n.providerId),
              a = qi(t.uid + ":::"),
              s = null;
            (!Ui() || Ti()) &&
              t.o &&
              n.isOAuthProvider &&
              (s = Tu(
                t.o,
                t.l,
                t.m,
                e,
                n,
                null,
                a,
                J.SDK_VERSION || null,
                null,
                null,
                t.tenantId
              ));
            var u = bi(s, o && o.ua, o && o.ta);
            return (
              (i = i()
                .then(function () {
                  if (($h(t), !r)) return t.I().then(function () {});
                })
                .then(function () {
                  return Bc(t.i, u, e, n, a, !!s, t.tenantId);
                })
                .then(function () {
                  return new Te(function (n, i) {
                    t.ma(
                      e,
                      null,
                      new k("cancelled-popup-request"),
                      t.h || null
                    ),
                      (t.g = n),
                      (t.O = i),
                      (t.h = a),
                      (t.c = Wc(t.i, t, e, u, a));
                  });
                })
                .then(function (t) {
                  return u && gi(u), t ? nr(t) : null;
                })
                .s(function (t) {
                  throw (u && gi(u), t);
                })),
              Zh(t, i, r)
            );
          }
          function Yh(t, e, n, i, r) {
            if (!xi())
              return Ce(new k("operation-not-supported-in-this-environment"));
            if (t.f && !r) return Ce(t.f);
            var o = null,
              a = qi(t.uid + ":::");
            return (
              (i = i()
                .then(function () {
                  if (($h(t), !r)) return t.I().then(function () {});
                })
                .then(function () {
                  return (t.ga = a), Lh(t);
                })
                .then(function (e) {
                  return t.ha && (e = (e = t.ha).b.set(el, t.w(), e.a)), e;
                })
                .then(function () {
                  return Gc(t.i, e, n, a, t.tenantId);
                })
                .s(function (e) {
                  if (((o = e), t.ha)) return nl(t.ha);
                  throw o;
                })
                .then(function () {
                  if (o) throw o;
                })),
              Zh(t, i, r)
            );
          }
          function $h(t) {
            if (!t.i || !t.P) {
              if (t.i && !t.P) throw new k("internal-error");
              throw new k("auth-domain-config-required");
            }
          }
          function Zh(t, e, n) {
            var i = (function (t, e, n) {
              return t.f && !n
                ? (e.cancel(), Ce(t.f))
                : e.s(function (e) {
                    throw (
                      (!e ||
                        ("auth/user-disabled" != e.code &&
                          "auth/user-token-expired" != e.code) ||
                        (t.f || t.dispatchEvent(new dh("userInvalidated")),
                        (t.f = e)),
                      e)
                    );
                  });
            })(t, e, n);
            return (
              t.G.push(i),
              i.na(function () {
                Y(t.G, i);
              }),
              i.s(function (e) {
                var n = null;
                throw (
                  (e &&
                    "auth/multi-factor-auth-required" === e.code &&
                    (n = hh(e.w(), Rh(t), I(t.ic, t))),
                  n || e)
                );
              })
            );
          }
          function Qh(t) {
            if (!t.apiKey) return null;
            var e = {
                apiKey: t.apiKey,
                authDomain: t.authDomain,
                appName: t.appName,
                emulatorConfig: t.emulatorConfig,
              },
              n = {};
            if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
              return null;
            (n[is] = t.stsTokenManager.accessToken),
              (n.refreshToken = t.stsTokenManager.refreshToken || null);
            var i = new Sh(e, n, t);
            return (
              t.providerData &&
                K(t.providerData, function (t) {
                  t && Vh(i, nr(t));
                }),
              t.redirectEventId && (i.ga = t.redirectEventId),
              i
            );
          }
          function tl(t) {
            (this.a = t), (this.b = ac());
          }
          (ah.prototype.Qc = function (t) {
            var e = this;
            return t.rb(this.a.a, this.c).then(function (t) {
              var n = mt(e.f);
              return delete n[sh], delete n[uh], bt(n, t), e.g(n);
            });
          }),
            A(ch, k),
            (lh.prototype.rb = function (t, e, n) {
              return e.type == lo
                ? (function (t, e, n, i) {
                    return n.Ha().then(function (n) {
                      return (
                        (n = { idToken: n }),
                        void 0 !== i && (n.displayName = i),
                        bt(n, { phoneVerificationInfo: Vo(t.a) }),
                        uu(e, Ms, n)
                      );
                    });
                  })(this, t, e, n)
                : (function (t, e, n) {
                    return n.Ha().then(function (n) {
                      return (
                        bt((n = { mfaPendingCredential: n }), {
                          phoneVerificationInfo: Vo(t.a),
                        }),
                        uu(e, Us, n)
                      );
                    });
                  })(this, t, e);
            }),
            A(fh, lh),
            A(ph, fh),
            A(dh, Qe),
            ((t = vh.prototype).xc = function (t) {
              mh(
                this,
                (function (t) {
                  var e = [];
                  return (
                    K(t.mfaInfo || [], function (t) {
                      (t = or(t)) && e.push(t);
                    }),
                    e
                  );
                })(t.gd)
              );
            }),
            (t.Qb = function () {
              return this.a.I().then(function (t) {
                return new ho(t, null);
              });
            }),
            (t.ec = function (t, e) {
              var n = this,
                i = this.a.a;
              return this.Qb()
                .then(function (n) {
                  return t.rb(i, n, e);
                })
                .then(function (t) {
                  return Gh(n.a, t), n.a.reload();
                });
            }),
            (t.ad = function (t) {
              var e = this,
                n = "string" == typeof t ? t : t.uid,
                i = this.a.a;
              return this.a
                .I()
                .then(function (t) {
                  return uu(i, su, { idToken: t, mfaEnrollmentId: n });
                })
                .then(function (t) {
                  var i = G(e.b, function (t) {
                    return t.uid != n;
                  });
                  return (
                    mh(e, i),
                    Gh(e.a, t),
                    e.a.reload().s(function (t) {
                      if ("auth/user-token-expired" != t.code) throw t;
                    })
                  );
                });
            }),
            (t.w = function () {
              return {
                multiFactor: {
                  enrolledFactors: W(this.b, function (t) {
                    return t.w();
                  }),
                },
              };
            }),
            (gh.prototype.start = function () {
              (this.a = this.c), bh(this, !0);
            }),
            (gh.prototype.stop = function () {
              this.b && (this.b.cancel(), (this.b = null));
            }),
            (yh.prototype.w = function () {
              return {
                apiKey: this.c.c,
                refreshToken: this.a,
                accessToken: this.b && this.b.toString(),
                expirationTime: wh(this),
              };
            }),
            (yh.prototype.getToken = function (t) {
              return (
                (t = !!t),
                this.b && !this.a
                  ? Ce(new k("user-token-expired"))
                  : t || !this.b || T() > wh(this) - 3e4
                  ? this.a
                    ? Eh(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a,
                      })
                    : Re(null)
                  : Re({ accessToken: this.b.toString(), refreshToken: this.a })
              );
            }),
            (Th.prototype.w = function () {
              return { lastLoginAt: this.b, createdAt: this.a };
            }),
            A(Sh, An),
            (Sh.prototype.wa = function (t) {
              (this.pa = t), us(this.a, t);
            }),
            (Sh.prototype.ka = function () {
              return this.pa;
            }),
            (Sh.prototype.Ga = function () {
              return Q(this.X);
            }),
            (Sh.prototype.gb = function () {
              this.u.b && (this.u.stop(), this.u.start());
            }),
            tr(Sh.prototype, "providerId", "firebase"),
            ((t = Sh.prototype).reload = function () {
              var t = this;
              return Zh(
                this,
                Uh(this).then(function () {
                  return Kh(t)
                    .then(function () {
                      return Lh(t);
                    })
                    .then(Mh);
                })
              );
            }),
            (t.nc = function (t) {
              return this.I(t).then(function (t) {
                return new oh(t);
              });
            }),
            (t.I = function (t) {
              var e = this;
              return Zh(
                this,
                Uh(this)
                  .then(function () {
                    return e.b.getToken(t);
                  })
                  .then(function (t) {
                    if (!t) throw new k("internal-error");
                    return (
                      t.accessToken != e.ya &&
                        (Dh(e, t.accessToken),
                        e.dispatchEvent(new dh("tokenChanged"))),
                      qh(e, "refreshToken", t.refreshToken),
                      t.accessToken
                    );
                  })
              );
            }),
            (t.Jc = function (t) {
              if (!(t = t.users) || !t.length) throw new k("internal-error");
              jh(this, {
                uid: (t = t[0]).localId,
                displayName: t.displayName,
                photoURL: t.photoUrl,
                email: t.email,
                emailVerified: !!t.emailVerified,
                phoneNumber: t.phoneNumber,
                lastLoginAt: t.lastLoginAt,
                createdAt: t.createdAt,
                tenantId: t.tenantId,
              });
              for (
                var e = (function (t) {
                    return (t = t.providerUserInfo) && t.length
                      ? W(t, function (t) {
                          return new Ah(
                            t.rawId,
                            t.providerId,
                            t.email,
                            t.displayName,
                            t.photoUrl,
                            t.phoneNumber
                          );
                        })
                      : [];
                  })(t),
                  n = 0;
                n < e.length;
                n++
              )
                Vh(this, e[n]);
              qh(
                this,
                "isAnonymous",
                !(
                  (this.email && t.passwordHash) ||
                  (this.providerData && this.providerData.length)
                )
              ),
                this.dispatchEvent(new dh("userReloaded", { gd: t }));
            }),
            (t.Kc = function (t) {
              return (
                Zi(
                  "firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
                ),
                this.sb(t)
              );
            }),
            (t.sb = function (t) {
              var e = this,
                n = null;
              return Zh(
                this,
                t
                  .c(this.a, this.uid)
                  .then(function (t) {
                    return (
                      Gh(e, t),
                      (n = zh(e, t, "reauthenticate")),
                      (e.f = null),
                      e.reload()
                    );
                  })
                  .then(function () {
                    return n;
                  }),
                !0
              );
            }),
            (t.Bc = function (t) {
              return (
                Zi(
                  "firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
                ),
                this.pb(t)
              );
            }),
            (t.pb = function (t) {
              var e = this,
                n = null;
              return Zh(
                this,
                Wh(this, t.providerId)
                  .then(function () {
                    return e.I();
                  })
                  .then(function (n) {
                    return t.b(e.a, n);
                  })
                  .then(function (t) {
                    return (n = zh(e, t, "link")), Xh(e, t);
                  })
                  .then(function () {
                    return n;
                  })
              );
            }),
            (t.Cc = function (t, e) {
              var n = this;
              return Zh(
                this,
                Wh(this, "phone").then(function () {
                  return rh(Rh(n), t, e, I(n.pb, n));
                })
              );
            }),
            (t.Lc = function (t, e) {
              var n = this;
              return Zh(
                this,
                Re().then(function () {
                  return rh(Rh(n), t, e, I(n.sb, n));
                }),
                !0
              );
            }),
            (t.Ab = function (t) {
              var e = this;
              return Zh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.Ab(n, t);
                  })
                  .then(function (t) {
                    return Gh(e, t), e.reload();
                  })
              );
            }),
            (t.dd = function (t) {
              var e = this;
              return Zh(
                this,
                this.I()
                  .then(function (n) {
                    return t.b(e.a, n);
                  })
                  .then(function (t) {
                    return Gh(e, t), e.reload();
                  })
              );
            }),
            (t.Bb = function (t) {
              var e = this;
              return Zh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.Bb(n, t);
                  })
                  .then(function (t) {
                    return Gh(e, t), e.reload();
                  })
              );
            }),
            (t.Cb = function (t) {
              if (void 0 === t.displayName && void 0 === t.photoURL)
                return Uh(this);
              var e = this;
              return Zh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.Cb(n, {
                      displayName: t.displayName,
                      photoUrl: t.photoURL,
                    });
                  })
                  .then(function (t) {
                    return (
                      Gh(e, t),
                      qh(e, "displayName", t.displayName || null),
                      qh(e, "photoURL", t.photoUrl || null),
                      K(e.providerData, function (t) {
                        "password" === t.providerId &&
                          (tr(t, "displayName", e.displayName),
                          tr(t, "photoURL", e.photoURL));
                      }),
                      Lh(e)
                    );
                  })
                  .then(Mh)
              );
            }),
            (t.bd = function (t) {
              var e = this;
              return Zh(
                this,
                Kh(this).then(function (n) {
                  return X(Fh(e), t)
                    ? (function (t, e, n) {
                        return uu(t, Ls, { idToken: e, deleteProvider: n });
                      })(e.a, n, [t]).then(function (t) {
                        var n = {};
                        return (
                          K(t.providerUserInfo || [], function (t) {
                            n[t.providerId] = !0;
                          }),
                          K(Fh(e), function (t) {
                            n[t] || Hh(e, t);
                          }),
                          n[Ho.PROVIDER_ID] || tr(e, "phoneNumber", null),
                          Lh(e)
                        );
                      })
                    : Lh(e).then(function () {
                        throw new k("no-such-provider");
                      });
                })
              );
            }),
            (t.delete = function () {
              var t = this;
              return Zh(
                this,
                this.I()
                  .then(function (e) {
                    return uu(t.a, Ds, { idToken: e });
                  })
                  .then(function () {
                    t.dispatchEvent(new dh("userDeleted"));
                  })
              ).then(function () {
                for (var e = 0; e < t.G.length; e++)
                  t.G[e].cancel("app-deleted");
                kh(t, null),
                  Nh(t, null),
                  Oh(t, null),
                  (t.G = []),
                  (t.A = !0),
                  Ph(t),
                  tr(t, "refreshToken", null),
                  t.i && Vc(t.i, t);
              });
            }),
            (t.Eb = function (t, e) {
              return !!(
                ("linkViaPopup" == t && (this.h || null) == e && this.g) ||
                ("reauthViaPopup" == t && (this.h || null) == e && this.g) ||
                ("linkViaRedirect" == t && (this.ga || null) == e) ||
                ("reauthViaRedirect" == t && (this.ga || null) == e)
              );
            }),
            (t.ma = function (t, e, n, i) {
              ("linkViaPopup" != t && "reauthViaPopup" != t) ||
                i != (this.h || null) ||
                (n && this.O ? this.O(n) : e && !n && this.g && this.g(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.g,
                delete this.O);
            }),
            (t.Fa = function (t, e) {
              return "linkViaPopup" == t && e == (this.h || null)
                ? I(this.Jb, this)
                : "reauthViaPopup" == t && e == (this.h || null)
                ? I(this.Kb, this)
                : "linkViaRedirect" == t && (this.ga || null) == e
                ? I(this.Jb, this)
                : "reauthViaRedirect" == t && (this.ga || null) == e
                ? I(this.Kb, this)
                : null;
            }),
            (t.Dc = function (t) {
              var e = this;
              return Jh(
                this,
                "linkViaPopup",
                t,
                function () {
                  return Wh(e, t.providerId).then(function () {
                    return Lh(e);
                  });
                },
                !1
              );
            }),
            (t.Mc = function (t) {
              return Jh(
                this,
                "reauthViaPopup",
                t,
                function () {
                  return Re();
                },
                !0
              );
            }),
            (t.Ec = function (t) {
              var e = this;
              return Yh(
                this,
                "linkViaRedirect",
                t,
                function () {
                  return Wh(e, t.providerId);
                },
                !1
              );
            }),
            (t.Nc = function (t) {
              return Yh(
                this,
                "reauthViaRedirect",
                t,
                function () {
                  return Re();
                },
                !0
              );
            }),
            (t.Jb = function (t, e, n, i) {
              var r = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return Zh(
                this,
                this.I()
                  .then(function (n) {
                    return ks(r.a, {
                      requestUri: t,
                      postBody: i,
                      sessionId: e,
                      idToken: n,
                    });
                  })
                  .then(function (t) {
                    return (o = zh(r, t, "link")), Xh(r, t);
                  })
                  .then(function () {
                    return o;
                  })
              );
            }),
            (t.Kb = function (t, e, n, i) {
              var r = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return Zh(
                this,
                Re()
                  .then(function () {
                    return vo(
                      Ns(r.a, {
                        requestUri: t,
                        sessionId: e,
                        postBody: i,
                        tenantId: n,
                      }),
                      r.uid
                    );
                  })
                  .then(function (t) {
                    return (
                      (o = zh(r, t, "reauthenticate")),
                      Gh(r, t),
                      (r.f = null),
                      r.reload()
                    );
                  })
                  .then(function () {
                    return o;
                  }),
                !0
              );
            }),
            (t.tb = function (t) {
              var e = this,
                n = null;
              return Zh(
                this,
                this.I()
                  .then(function (e) {
                    return (n = e), void 0 === t || vt(t) ? {} : Kr(new Lr(t));
                  })
                  .then(function (t) {
                    return e.a.tb(n, t);
                  })
                  .then(function (t) {
                    if (e.email != t) return e.reload();
                  })
                  .then(function () {})
              );
            }),
            (t.Db = function (t, e) {
              var n = this,
                i = null;
              return Zh(
                this,
                this.I()
                  .then(function (t) {
                    return (i = t), void 0 === e || vt(e) ? {} : Kr(new Lr(e));
                  })
                  .then(function (e) {
                    return n.a.Db(i, t, e);
                  })
                  .then(function (t) {
                    if (n.email != t) return n.reload();
                  })
                  .then(function () {})
              );
            }),
            (t.ic = function (t) {
              var e = null,
                n = this;
              return Zh(
                this,
                (t = vo(Re(t), n.uid)
                  .then(function (t) {
                    return (
                      (e = zh(n, t, "reauthenticate")),
                      Gh(n, t),
                      (n.f = null),
                      n.reload()
                    );
                  })
                  .then(function () {
                    return e;
                  })),
                !0
              );
            }),
            (t.toJSON = function () {
              return this.w();
            }),
            (t.w = function () {
              var t = {
                uid: this.uid,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                emailVerified: this.emailVerified,
                phoneNumber: this.phoneNumber,
                isAnonymous: this.isAnonymous,
                tenantId: this.tenantId,
                providerData: [],
                apiKey: this.l,
                appName: this.m,
                authDomain: this.o,
                stsTokenManager: this.b.w(),
                redirectEventId: this.ga || null,
              };
              return (
                this.metadata && bt(t, this.metadata.w()),
                K(this.providerData, function (e) {
                  t.providerData.push(
                    (function (t) {
                      var e,
                        n = {};
                      for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                      return n;
                    })(e)
                  );
                }),
                bt(t, this.N.w()),
                t
              );
            });
          var el = { name: "redirectUser", D: "session" };
          function nl(t) {
            return cc(t.b, el, t.a);
          }
          function il(t) {
            (this.a = t),
              (this.b = ac()),
              (this.c = null),
              (this.f = (function (t) {
                var e = al("local"),
                  n = al("session"),
                  i = al("none");
                return (function (t, e, n) {
                  var i = uc(e, n),
                    r = sc(t, e.D);
                  return t.get(e, n).then(function (o) {
                    var a = null;
                    try {
                      a = Hi(s.localStorage.getItem(i));
                    } catch (t) {}
                    if (a && !o)
                      return s.localStorage.removeItem(i), t.set(e, a, n);
                    a &&
                      o &&
                      "localStorage" != r.type &&
                      s.localStorage.removeItem(i);
                  });
                })(t.b, e, t.a)
                  .then(function () {
                    return t.b.get(n, t.a);
                  })
                  .then(function (r) {
                    return r
                      ? n
                      : t.b.get(i, t.a).then(function (n) {
                          return n
                            ? i
                            : t.b.get(e, t.a).then(function (n) {
                                return n
                                  ? e
                                  : t.b.get(ol, t.a).then(function (t) {
                                      return t ? al(t) : e;
                                    });
                              });
                        });
                  })
                  .then(function (e) {
                    return (t.c = e), rl(t, e.D);
                  })
                  .s(function () {
                    t.c || (t.c = e);
                  });
              })(this)),
              this.b.addListener(al("local"), this.a, I(this.g, this));
          }
          function rl(t, e) {
            var n,
              i = [];
            for (n in rc) rc[n] !== e && i.push(cc(t.b, al(rc[n]), t.a));
            return (
              i.push(cc(t.b, ol, t.a)),
              (function (t) {
                return new Te(function (e, n) {
                  var i = t.length,
                    r = [];
                  if (i)
                    for (
                      var o = function (t, n) {
                          i--, (r[t] = n), 0 == i && e(r);
                        },
                        a = function (t) {
                          n(t);
                        },
                        s = 0;
                      s < t.length;
                      s++
                    )
                      Pe(t[s], E(o, s), a);
                  else e(r);
                });
              })(i)
            );
          }
          il.prototype.g = function () {
            var t = this,
              e = al("local");
            hl(this, function () {
              return Re()
                .then(function () {
                  return t.c && "local" != t.c.D ? t.b.get(e, t.a) : null;
                })
                .then(function (n) {
                  if (n)
                    return rl(t, "local").then(function () {
                      t.c = e;
                    });
                });
            });
          };
          var ol = { name: "persistence", D: "session" };
          function al(t) {
            return { name: "authUser", D: t };
          }
          function sl(t, e) {
            return hl(t, function () {
              return t.b.set(t.c, e.w(), t.a);
            });
          }
          function ul(t) {
            return hl(t, function () {
              return cc(t.b, t.c, t.a);
            });
          }
          function cl(t, e, n) {
            return hl(t, function () {
              return t.b.get(t.c, t.a).then(function (t) {
                return (
                  t && e && (t.authDomain = e),
                  t && n && (t.emulatorConfig = n),
                  Qh(t || {})
                );
              });
            });
          }
          function hl(t, e) {
            return (t.f = t.f.then(e, e)), t.f;
          }
          function ll(t) {
            if (
              ((this.m = !1),
              tr(this, "settings", new nh()),
              tr(this, "app", t),
              !wl(this).options || !wl(this).options.apiKey)
            )
              throw new k("invalid-api-key");
            (t = J.SDK_VERSION ? Ci(J.SDK_VERSION) : null),
              (this.a = new es(
                wl(this).options && wl(this).options.apiKey,
                P(_),
                t
              )),
              (this.R = []),
              (this.u = []),
              (this.P = []),
              (this.ac = J.INTERNAL.createSubscribe(I(this.yc, this))),
              (this.X = void 0),
              (this.bc = J.INTERNAL.createSubscribe(I(this.zc, this))),
              bl(this, null),
              (this.l = new il(wl(this).options.apiKey + ":" + wl(this).name)),
              (this.G = new tl(wl(this).options.apiKey + ":" + wl(this).name)),
              (this.$ = Al(
                this,
                (function (t) {
                  var e = wl(t).options.authDomain,
                    n = (function (t) {
                      var e = (function (t, e) {
                        return t.b.get(el, t.a).then(function (t) {
                          return t && e && (t.authDomain = e), Qh(t || {});
                        });
                      })(t.G, wl(t).options.authDomain).then(function (e) {
                        return (t.o = e) && (e.ha = t.G), nl(t.G);
                      });
                      return Al(t, e);
                    })(t)
                      .then(function () {
                        return cl(t.l, e, t.f);
                      })
                      .then(function (e) {
                        return e
                          ? ((e.ha = t.G),
                            t.o && (t.o.ga || null) == (e.ga || null)
                              ? e
                              : e
                                  .reload()
                                  .then(function () {
                                    return sl(t.l, e).then(function () {
                                      return e;
                                    });
                                  })
                                  .s(function (n) {
                                    return "auth/network-request-failed" ==
                                      n.code
                                      ? e
                                      : ul(t.l);
                                  }))
                          : null;
                      })
                      .then(function (e) {
                        bl(t, e || null);
                      });
                  return Al(t, n);
                })(this)
              )),
              (this.i = Al(
                this,
                (function (t) {
                  return t.$.then(function () {
                    return ml(t);
                  })
                    .s(function () {})
                    .then(function () {
                      if (!t.m) return t.pa();
                    })
                    .s(function () {})
                    .then(function () {
                      if (!t.m) {
                        t.ba = !0;
                        var e = t.l;
                        e.b.addListener(al("local"), e.a, t.pa);
                      }
                    });
                })(this)
              )),
              (this.ba = !1),
              (this.pa = I(this.Yc, this)),
              (this.Ba = I(this.da, this)),
              (this.ya = I(this.kc, this)),
              (this.za = I(this.vc, this)),
              (this.Aa = I(this.wc, this)),
              (this.b = null),
              (function (t) {
                var e = wl(t).options.authDomain,
                  n = wl(t).options.apiKey;
                e &&
                  xi() &&
                  (t.gb = t.$.then(function () {
                    if (!t.m) {
                      if (
                        ((t.b = Jc(e, n, wl(t).name, t.f)),
                        Fc(t.b, t),
                        Il(t) && xh(Il(t)),
                        t.o)
                      ) {
                        xh(t.o);
                        var i = t.o;
                        i.wa(t.ka()),
                          kh(i, t),
                          _h((i = t.o), t.N),
                          Oh(i, t),
                          cs((i = t.o).a, t.f),
                          Nh(i, t),
                          (t.o = null);
                      }
                      return t.b;
                    }
                  }));
              })(this),
              (this.INTERNAL = {}),
              (this.INTERNAL.delete = I(this.delete, this)),
              (this.INTERNAL.logFramework = I(this.Fc, this)),
              (this.A = 0),
              An.call(this),
              (function (t) {
                Object.defineProperty(t, "lc", {
                  get: function () {
                    return this.ka();
                  },
                  set: function (t) {
                    this.wa(t);
                  },
                  enumerable: !1,
                }),
                  (t.aa = null),
                  Object.defineProperty(t, "ti", {
                    get: function () {
                      return this.S();
                    },
                    set: function (t) {
                      this.xb(t);
                    },
                    enumerable: !1,
                  }),
                  (t.W = null);
              })(this),
              (this.N = []),
              (this.f = null);
          }
          function fl(t) {
            Qe.call(this, "languageCodeChanged"), (this.h = t);
          }
          function pl(t) {
            Qe.call(this, "emulatorConfigChanged"), (this.c = t);
          }
          function dl(t) {
            Qe.call(this, "frameworkChanged"), (this.f = t);
          }
          function vl(t) {
            return t.gb || Ce(new k("auth-domain-config-required"));
          }
          function ml(t) {
            if (!xi())
              return Ce(new k("operation-not-supported-in-this-environment"));
            var e = vl(t)
              .then(function () {
                return t.b.qa();
              })
              .then(function (t) {
                return t ? nr(t) : null;
              });
            return Al(t, e);
          }
          function gl(t, e) {
            var n = {};
            return (
              (n.apiKey = wl(t).options.apiKey),
              (n.authDomain = wl(t).options.authDomain),
              (n.appName = wl(t).name),
              t.f && (n.emulatorConfig = t.f),
              t.$.then(function () {
                return (function (t, e, n, i) {
                  var r = new Sh(t, e);
                  return (
                    n && (r.ha = n),
                    i && _h(r, i),
                    r.reload().then(function () {
                      return r;
                    })
                  );
                })(n, e, t.G, t.Ga());
              })
                .then(function (e) {
                  return Il(t) && e.uid == Il(t).uid
                    ? (Bh(Il(t), e), t.da(e))
                    : (bl(t, e), xh(e), t.da(e));
                })
                .then(function () {
                  Tl(t);
                })
            );
          }
          function bl(t, e) {
            Il(t) &&
              ((function (t, e) {
                $(t.R, function (t) {
                  return t == e;
                });
              })(Il(t), t.Ba),
              vn(Il(t), "tokenChanged", t.ya),
              vn(Il(t), "userDeleted", t.za),
              vn(Il(t), "userInvalidated", t.Aa),
              Ph(Il(t))),
              e &&
                (e.R.push(t.Ba),
                fn(e, "tokenChanged", t.ya),
                fn(e, "userDeleted", t.za),
                fn(e, "userInvalidated", t.Aa),
                0 < t.A && Ch(e)),
              tr(t, "currentUser", e),
              e &&
                (e.wa(t.ka()),
                kh(e, t),
                _h(e, t.N),
                Oh(e, t),
                cs(e.a, t.f),
                Nh(e, t));
          }
          function yl(t, e) {
            var n = null,
              i = null;
            return Al(
              t,
              e
                .then(
                  function (e) {
                    return (n = Bo(e)), (i = to(e)), gl(t, e);
                  },
                  function (e) {
                    var n = null;
                    throw (
                      (e &&
                        "auth/multi-factor-auth-required" === e.code &&
                        (n = hh(e.w(), t, I(t.jc, t))),
                      n || e)
                    );
                  }
                )
                .then(function () {
                  return nr({
                    user: Il(t),
                    credential: n,
                    additionalUserInfo: i,
                    operationType: "signIn",
                  });
                })
            );
          }
          function wl(t) {
            return t.app;
          }
          function Il(t) {
            return t.currentUser;
          }
          function El(t) {
            return (Il(t) && Il(t)._lat) || null;
          }
          function Tl(t) {
            if (t.ba) {
              for (var e = 0; e < t.u.length; e++) t.u[e] && t.u[e](El(t));
              if (t.X !== t.getUid() && t.P.length)
                for (t.X = t.getUid(), e = 0; e < t.P.length; e++)
                  t.P[e] && t.P[e](El(t));
            }
          }
          function Al(t, e) {
            return (
              t.R.push(e),
              e.na(function () {
                Y(t.R, e);
              }),
              e
            );
          }
          function Sl() {}
          function kl() {
            (this.a = {}), (this.b = 1e12);
          }
          (il.prototype.wb = function (t) {
            var e = null,
              n = this;
            return (
              (function (t) {
                var e = new k("invalid-persistence-type"),
                  n = new k("unsupported-persistence-type");
                t: {
                  for (i in rc)
                    if (rc[i] == t) {
                      var i = !0;
                      break t;
                    }
                  i = !1;
                }
                if (!i || "string" != typeof t) throw e;
                switch (Si()) {
                  case "ReactNative":
                    if ("session" === t) throw n;
                    break;
                  case "Node":
                    if ("none" !== t) throw n;
                    break;
                  case "Worker":
                    if ("session" === t || (!Mu() && "none" !== t)) throw n;
                    break;
                  default:
                    if (!Li() && "none" !== t) throw n;
                }
              })(t),
              hl(this, function () {
                return t != n.c.D
                  ? n.b
                      .get(n.c, n.a)
                      .then(function (i) {
                        return (e = i), rl(n, t);
                      })
                      .then(function () {
                        if (((n.c = al(t)), e)) return n.b.set(n.c, e, n.a);
                      })
                  : Re();
              })
            );
          }),
            A(ll, An),
            A(fl, Qe),
            A(pl, Qe),
            A(dl, Qe),
            ((t = ll.prototype).wb = function (t) {
              return Al(this, (t = this.l.wb(t)));
            }),
            (t.wa = function (t) {
              this.aa === t ||
                this.m ||
                ((this.aa = t),
                us(this.a, this.aa),
                this.dispatchEvent(new fl(this.ka())));
            }),
            (t.ka = function () {
              return this.aa;
            }),
            (t.ed = function () {
              var t = s.navigator;
              this.wa(
                (t &&
                  ((t.languages && t.languages[0]) ||
                    t.language ||
                    t.userLanguage)) ||
                  null
              );
            }),
            (t.fd = function (t) {
              if (!this.f) {
                if (!/^https?:\/\//.test(t))
                  throw new k(
                    "argument-error",
                    "Emulator URL must start with a valid scheme (http:// or https://)."
                  );
                zi(
                  "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
                ),
                  s.document &&
                    Ii().then(function () {
                      var t = s.document.createElement("div");
                      (t.innerText =
                        "Running in emulator mode. Do not use with production credentials."),
                        (t.style.position = "fixed"),
                        (t.style.width = "100%"),
                        (t.style.backgroundColor = "#ffffff"),
                        (t.style.border = ".1em solid #000000"),
                        (t.style.color = "#ff0000"),
                        (t.style.bottom = "0px"),
                        (t.style.left = "0px"),
                        (t.style.margin = "0px"),
                        (t.style.zIndex = 1e4),
                        (t.style.textAlign = "center"),
                        t.classList.add("firebase-emulator-warning"),
                        s.document.body.appendChild(t);
                    }),
                  (this.f = { url: t }),
                  (this.settings.hb = !0),
                  cs(this.a, this.f),
                  this.dispatchEvent(new pl(this.f));
              }
            }),
            (t.Fc = function (t) {
              this.N.push(t),
                ls(this.a, J.SDK_VERSION ? Ci(J.SDK_VERSION, this.N) : null),
                this.dispatchEvent(new dl(this.N));
            }),
            (t.Ga = function () {
              return Q(this.N);
            }),
            (t.xb = function (t) {
              this.W === t || this.m || ((this.W = t), (this.a.b = this.W));
            }),
            (t.S = function () {
              return this.W;
            }),
            (t.toJSON = function () {
              return {
                apiKey: wl(this).options.apiKey,
                authDomain: wl(this).options.authDomain,
                appName: wl(this).name,
                currentUser: Il(this) && Il(this).w(),
              };
            }),
            (t.Eb = function (t, e) {
              switch (t) {
                case "unknown":
                case "signInViaRedirect":
                  return !0;
                case "signInViaPopup":
                  return this.h == e && !!this.g;
                default:
                  return !1;
              }
            }),
            (t.ma = function (t, e, n, i) {
              "signInViaPopup" == t &&
                this.h == i &&
                (n && this.O ? this.O(n) : e && !n && this.g && this.g(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.g,
                delete this.O);
            }),
            (t.Fa = function (t, e) {
              return "signInViaRedirect" == t ||
                ("signInViaPopup" == t && this.h == e && this.g)
                ? I(this.hc, this)
                : null;
            }),
            (t.hc = function (t, e, n, i) {
              var r = this,
                o = { requestUri: t, postBody: i, sessionId: e, tenantId: n };
              return (
                this.c && (this.c.cancel(), (this.c = null)),
                r.$.then(function () {
                  return yl(r, Ss(r.a, o));
                })
              );
            }),
            (t.Wc = function (t) {
              if (!xi())
                return Ce(new k("operation-not-supported-in-this-environment"));
              var e = this,
                n = Qr(t.providerId),
                i = qi(),
                r = null;
              (!Ui() || Ti()) &&
                wl(this).options.authDomain &&
                t.isOAuthProvider &&
                (r = Tu(
                  wl(this).options.authDomain,
                  wl(this).options.apiKey,
                  wl(this).name,
                  "signInViaPopup",
                  t,
                  null,
                  i,
                  J.SDK_VERSION || null,
                  null,
                  null,
                  this.S(),
                  this.f
                ));
              var o = bi(r, n && n.ua, n && n.ta);
              return Al(
                this,
                (n = vl(this)
                  .then(function (n) {
                    return Bc(n, o, "signInViaPopup", t, i, !!r, e.S());
                  })
                  .then(function () {
                    return new Te(function (t, n) {
                      e.ma(
                        "signInViaPopup",
                        null,
                        new k("cancelled-popup-request"),
                        e.h
                      ),
                        (e.g = t),
                        (e.O = n),
                        (e.h = i),
                        (e.c = Wc(e.b, e, "signInViaPopup", o, i));
                    });
                  })
                  .then(function (t) {
                    return o && gi(o), t ? nr(t) : null;
                  })
                  .s(function (t) {
                    throw (o && gi(o), t);
                  }))
              );
            }),
            (t.Xc = function (t) {
              if (!xi())
                return Ce(new k("operation-not-supported-in-this-environment"));
              var e = this;
              return Al(
                this,
                vl(this)
                  .then(function () {
                    return (function (t) {
                      return hl(t, function () {
                        return t.b.set(ol, t.c.D, t.a);
                      });
                    })(e.l);
                  })
                  .then(function () {
                    return Gc(e.b, "signInViaRedirect", t, void 0, e.S());
                  })
              );
            }),
            (t.qa = function () {
              var t = this;
              return ml(this)
                .then(function (e) {
                  return t.b && Zc(t.b.b), e;
                })
                .s(function (e) {
                  throw (t.b && Zc(t.b.b), e);
                });
            }),
            (t.cd = function (t) {
              if (!t) return Ce(new k("null-user"));
              if (this.W != t.tenantId) return Ce(new k("tenant-id-mismatch"));
              var e = this,
                n = {};
              (n.apiKey = wl(this).options.apiKey),
                (n.authDomain = wl(this).options.authDomain),
                (n.appName = wl(this).name);
              var i = (function (t, e, n, i) {
                var r = t.b,
                  o = {};
                return (
                  (o[is] = r.b && r.b.toString()),
                  (o.refreshToken = r.a),
                  (e = new Sh(
                    e || { apiKey: t.l, authDomain: t.o, appName: t.m },
                    o
                  )),
                  n && (e.ha = n),
                  i && _h(e, i),
                  Bh(e, t),
                  e
                );
              })(t, n, e.G, e.Ga());
              return Al(
                this,
                this.i
                  .then(function () {
                    if (wl(e).options.apiKey != t.l) return i.reload();
                  })
                  .then(function () {
                    return Il(e) && t.uid == Il(e).uid
                      ? (Bh(Il(e), t), e.da(t))
                      : (bl(e, i), xh(i), e.da(i));
                  })
                  .then(function () {
                    Tl(e);
                  })
              );
            }),
            (t.zb = function () {
              var t = this;
              return Al(
                this,
                this.i.then(function () {
                  return (
                    t.b && Zc(t.b.b),
                    Il(t)
                      ? (bl(t, null),
                        ul(t.l).then(function () {
                          Tl(t);
                        }))
                      : Re()
                  );
                })
              );
            }),
            (t.Yc = function () {
              var t = this;
              return cl(this.l, wl(this).options.authDomain).then(function (e) {
                if (!t.m) {
                  var n;
                  if ((n = Il(t) && e)) {
                    n = Il(t).uid;
                    var i = e.uid;
                    n =
                      null != n && "" !== n && null != i && "" !== i && n == i;
                  }
                  if (n) return Bh(Il(t), e), Il(t).I();
                  (Il(t) || e) &&
                    (bl(t, e),
                    e && (xh(e), (e.ha = t.G)),
                    t.b && Fc(t.b, t),
                    Tl(t));
                }
              });
            }),
            (t.da = function (t) {
              return sl(this.l, t);
            }),
            (t.kc = function () {
              Tl(this), this.da(Il(this));
            }),
            (t.vc = function () {
              this.zb();
            }),
            (t.wc = function () {
              this.zb();
            }),
            (t.jc = function (t) {
              var e = this;
              return this.i.then(function () {
                return yl(e, Re(t));
              });
            }),
            (t.yc = function (t) {
              var e = this;
              this.addAuthTokenListener(function () {
                t.next(Il(e));
              });
            }),
            (t.zc = function (t) {
              var e = this;
              !(function (t, e) {
                t.P.push(e),
                  Al(
                    t,
                    t.i.then(function () {
                      !t.m &&
                        X(t.P, e) &&
                        t.X !== t.getUid() &&
                        ((t.X = t.getUid()), e(El(t)));
                    })
                  );
              })(this, function () {
                t.next(Il(e));
              });
            }),
            (t.Hc = function (t, e, n) {
              var i = this;
              return (
                this.ba &&
                  Promise.resolve().then(function () {
                    "function" == typeof t
                      ? t(Il(i))
                      : "function" == typeof t.next && t.next(Il(i));
                  }),
                this.ac(t, e, n)
              );
            }),
            (t.Gc = function (t, e, n) {
              var i = this;
              return (
                this.ba &&
                  Promise.resolve().then(function () {
                    (i.X = i.getUid()),
                      "function" == typeof t
                        ? t(Il(i))
                        : "function" == typeof t.next && t.next(Il(i));
                  }),
                this.bc(t, e, n)
              );
            }),
            (t.mc = function (t) {
              var e = this;
              return Al(
                this,
                this.i.then(function () {
                  return Il(e)
                    ? Il(e)
                        .I(t)
                        .then(function (t) {
                          return { accessToken: t };
                        })
                    : null;
                })
              );
            }),
            (t.Sc = function (t) {
              var e = this;
              return this.i
                .then(function () {
                  return yl(e, uu(e.a, nu, { token: t }));
                })
                .then(function (t) {
                  var n = t.user;
                  return qh(n, "isAnonymous", !1), e.da(n), t;
                });
            }),
            (t.Tc = function (t, e) {
              var n = this;
              return this.i.then(function () {
                return yl(n, uu(n.a, iu, { email: t, password: e }));
              });
            }),
            (t.dc = function (t, e) {
              var n = this;
              return this.i.then(function () {
                return yl(n, uu(n.a, Cs, { email: t, password: e }));
              });
            }),
            (t.Za = function (t) {
              var e = this;
              return this.i.then(function () {
                return yl(e, t.ja(e.a));
              });
            }),
            (t.Rc = function (t) {
              return (
                Zi(
                  "firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
                ),
                this.Za(t)
              );
            }),
            (t.yb = function () {
              var t = this;
              return this.i.then(function () {
                var e = Il(t);
                if (e && e.isAnonymous) {
                  var n = nr({ providerId: null, isNewUser: !1 });
                  return nr({
                    user: e,
                    credential: null,
                    additionalUserInfo: n,
                    operationType: "signIn",
                  });
                }
                return yl(t, t.a.yb()).then(function (e) {
                  var n = e.user;
                  return qh(n, "isAnonymous", !0), t.da(n), e;
                });
              });
            }),
            (t.getUid = function () {
              return (Il(this) && Il(this).uid) || null;
            }),
            (t.cc = function (t) {
              this.addAuthTokenListener(t),
                this.A++,
                0 < this.A && Il(this) && Ch(Il(this));
            }),
            (t.Oc = function (t) {
              var e = this;
              K(this.u, function (n) {
                n == t && e.A--;
              }),
                0 > this.A && (this.A = 0),
                0 == this.A && Il(this) && Ph(Il(this)),
                this.removeAuthTokenListener(t);
            }),
            (t.addAuthTokenListener = function (t) {
              var e = this;
              this.u.push(t),
                Al(
                  this,
                  this.i.then(function () {
                    e.m || (X(e.u, t) && t(El(e)));
                  })
                );
            }),
            (t.removeAuthTokenListener = function (t) {
              $(this.u, function (e) {
                return e == t;
              });
            }),
            (t.delete = function () {
              this.m = !0;
              for (var t = 0; t < this.R.length; t++)
                this.R[t].cancel("app-deleted");
              return (
                (this.R = []),
                this.l &&
                  (t = this.l).b.removeListener(al("local"), t.a, this.pa),
                this.b && (Vc(this.b, this), Zc(this.b.b)),
                Promise.resolve()
              );
            }),
            (t.gc = function (t) {
              return Al(
                this,
                (function (t, e) {
                  return uu(t, Ps, {
                    identifier: e,
                    continueUri: ji() ? pi() : "http://localhost",
                  }).then(function (t) {
                    return t.signinMethods || [];
                  });
                })(this.a, t)
              );
            }),
            (t.Ac = function (t) {
              return !!Mo(t);
            }),
            (t.vb = function (t, e) {
              var n = this;
              return Al(
                this,
                Re()
                  .then(function () {
                    var t = new Lr(e);
                    if (!t.c)
                      throw new k(
                        "argument-error",
                        Mr + " must be true when sending sign in link to email"
                      );
                    return Kr(t);
                  })
                  .then(function (e) {
                    return n.a.vb(t, e);
                  })
                  .then(function () {})
              );
            }),
            (t.hd = function (t) {
              return this.Qa(t).then(function (t) {
                return t.data.email;
              });
            }),
            (t.mb = function (t, e) {
              return Al(
                this,
                this.a.mb(t, e).then(function () {})
              );
            }),
            (t.Qa = function (t) {
              return Al(
                this,
                this.a.Qa(t).then(function (t) {
                  return new lr(t);
                })
              );
            }),
            (t.ib = function (t) {
              return Al(
                this,
                this.a.ib(t).then(function () {})
              );
            }),
            (t.ub = function (t, e) {
              var n = this;
              return Al(
                this,
                Re()
                  .then(function () {
                    return void 0 === e || vt(e) ? {} : Kr(new Lr(e));
                  })
                  .then(function (e) {
                    return n.a.ub(t, e);
                  })
                  .then(function () {})
              );
            }),
            (t.Vc = function (t, e) {
              return Al(this, rh(this, t, e, I(this.Za, this)));
            }),
            (t.Uc = function (t, e) {
              var n = this;
              return Al(
                this,
                Re().then(function () {
                  var i = e || pi(),
                    r = jo(t, i);
                  if (!(i = Mo(i)))
                    throw new k("argument-error", "Invalid email link!");
                  if (i.tenantId !== n.S()) throw new k("tenant-id-mismatch");
                  return n.Za(r);
                })
              );
            }),
            (Sl.prototype.render = function () {}),
            (Sl.prototype.reset = function () {}),
            (Sl.prototype.getResponse = function () {}),
            (Sl.prototype.execute = function () {});
          var Nl = null;
          function _l(t, e) {
            return ((e = Ol(e)) && t.a[e]) || null;
          }
          function Ol(t) {
            return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
          }
          function Rl(t, e) {
            (this.g = !1),
              (this.c = e),
              (this.a = this.b = null),
              (this.h = "invisible" !== this.c.size),
              (this.f = le(t));
            var n = this;
            (this.i = function () {
              n.execute();
            }),
              this.h ? this.execute() : fn(this.f, "click", this.i);
          }
          function Cl(t) {
            if (t.g) throw Error("reCAPTCHA mock was already deleted!");
          }
          function Pl() {}
          function Dl() {}
          (kl.prototype.render = function (t, e) {
            return (this.a[this.b.toString()] = new Rl(t, e)), this.b++;
          }),
            (kl.prototype.reset = function (t) {
              var e = _l(this, t);
              (t = Ol(t)), e && t && (e.delete(), delete this.a[t]);
            }),
            (kl.prototype.getResponse = function (t) {
              return (t = _l(this, t)) ? t.getResponse() : null;
            }),
            (kl.prototype.execute = function (t) {
              (t = _l(this, t)) && t.execute();
            }),
            (Rl.prototype.getResponse = function () {
              return Cl(this), this.b;
            }),
            (Rl.prototype.execute = function () {
              Cl(this);
              var t = this;
              this.a ||
                (this.a = setTimeout(function () {
                  t.b = (function () {
                    for (var t = 50, e = []; 0 < t; )
                      e.push(
                        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                          Math.floor(62 * Math.random())
                        )
                      ),
                        t--;
                    return e.join("");
                  })();
                  var e = t.c.callback,
                    n = t.c["expired-callback"];
                  if (e)
                    try {
                      e(t.b);
                    } catch (t) {}
                  t.a = setTimeout(function () {
                    if (((t.a = null), (t.b = null), n))
                      try {
                        n();
                      } catch (t) {}
                    t.h && t.execute();
                  }, 6e4);
                }, 500));
            }),
            (Rl.prototype.delete = function () {
              Cl(this),
                (this.g = !0),
                clearTimeout(this.a),
                (this.a = null),
                vn(this.f, "click", this.i);
            }),
            tr(Pl, "FACTOR_ID", "phone"),
            (Dl.prototype.g = function () {
              return Nl || (Nl = new kl()), Re(Nl);
            }),
            (Dl.prototype.c = function () {});
          var Ll = null;
          function xl() {
            (this.b = s.grecaptcha ? 1 / 0 : 0),
              (this.f = null),
              (this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString());
          }
          var jl = new wt(
              At,
              "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"
            ),
            Ml = new Gi(3e4, 6e4);
          (xl.prototype.g = function (t) {
            var e = this;
            return new Te(function (n, i) {
              var r = setTimeout(function () {
                i(new k("network-request-failed"));
              }, Ml.get());
              !s.grecaptcha || (t !== e.f && !e.b)
                ? ((s[e.a] = function () {
                    if (s.grecaptcha) {
                      e.f = t;
                      var o = s.grecaptcha.render;
                      (s.grecaptcha.render = function (t, n) {
                        return (t = o(t, n)), e.b++, t;
                      }),
                        clearTimeout(r),
                        n(s.grecaptcha);
                    } else clearTimeout(r), i(new k("internal-error"));
                    delete s[e.a];
                  }),
                  Re(Xa(_t(jl, { onload: e.a, hl: t || "" }))).s(function () {
                    clearTimeout(r),
                      i(
                        new k(
                          "internal-error",
                          "Unable to load external reCAPTCHA dependencies!"
                        )
                      );
                  }))
                : (clearTimeout(r), n(s.grecaptcha));
            });
          }),
            (xl.prototype.c = function () {
              this.b--;
            });
          var Ul = null;
          function Fl(t, e, n, i, r, o, a) {
            if (
              (tr(this, "type", "recaptcha"),
              (this.c = this.f = null),
              (this.A = !1),
              (this.m = e),
              (this.g = null),
              a
                ? (Ll || (Ll = new Dl()), (a = Ll))
                : (Ul || (Ul = new xl()), (a = Ul)),
              (this.v = a),
              (this.a = n || { theme: "light", type: "image" }),
              (this.h = []),
              this.a[ql])
            )
              throw new k(
                "argument-error",
                "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."
              );
            if (((this.i = "invisible" === this.a[Bl]), !s.document))
              throw new k(
                "operation-not-supported-in-this-environment",
                "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."
              );
            if (!le(e) || (!this.i && le(e).hasChildNodes()))
              throw new k(
                "argument-error",
                "reCAPTCHA container is either not found or already contains inner elements!"
              );
            (this.o = new es(t, o || null, r || null)),
              (this.u =
                i ||
                function () {
                  return null;
                });
            var u = this;
            this.l = [];
            var c = this.a[Vl];
            this.a[Vl] = function (t) {
              if ((Kl(u, t), "function" == typeof c)) c(t);
              else if ("string" == typeof c) {
                var e = Di(c, s);
                "function" == typeof e && e(t);
              }
            };
            var h = this.a[Hl];
            this.a[Hl] = function () {
              if ((Kl(u, null), "function" == typeof h)) h();
              else if ("string" == typeof h) {
                var t = Di(h, s);
                "function" == typeof t && t();
              }
            };
          }
          var Vl = "callback",
            Hl = "expired-callback",
            ql = "sitekey",
            Bl = "size";
          function Kl(t, e) {
            for (var n = 0; n < t.l.length; n++)
              try {
                t.l[n](e);
              } catch (t) {}
          }
          function Gl(t, e) {
            return (
              t.h.push(e),
              e.na(function () {
                Y(t.h, e);
              }),
              e
            );
          }
          function Wl(t) {
            if (t.A)
              throw new k(
                "internal-error",
                "RecaptchaVerifier instance has been destroyed."
              );
          }
          function zl(t, e, n) {
            var i = !1;
            try {
              this.b = n || J.app();
            } catch (t) {
              throw new k(
                "argument-error",
                "No firebase.app.App instance is currently initialized."
              );
            }
            if (!this.b.options || !this.b.options.apiKey)
              throw new k("invalid-api-key");
            n = this.b.options.apiKey;
            var r = this,
              o = null;
            try {
              o = this.b.auth().Ga();
            } catch (t) {}
            try {
              i = this.b.auth().settings.appVerificationDisabledForTesting;
            } catch (t) {}
            (o = J.SDK_VERSION ? Ci(J.SDK_VERSION, o) : null),
              Fl.call(
                this,
                n,
                t,
                e,
                function () {
                  try {
                    var t = r.b.auth().ka();
                  } catch (e) {
                    t = null;
                  }
                  return t;
                },
                o,
                P(_),
                i
              );
          }
          function Xl(t, e, n, i) {
            t: {
              n = Array.prototype.slice.call(n);
              for (var r = 0, o = !1, a = 0; a < e.length; a++)
                if (e[a].optional) o = !0;
                else {
                  if (o)
                    throw new k(
                      "internal-error",
                      "Argument validator encountered a required argument after an optional argument."
                    );
                  r++;
                }
              if (((o = e.length), n.length < r || o < n.length))
                i =
                  "Expected " +
                  (r == o
                    ? 1 == r
                      ? "1 argument"
                      : r + " arguments"
                    : r + "-" + o + " arguments") +
                  " but got " +
                  n.length +
                  ".";
              else {
                for (r = 0; r < n.length; r++)
                  if (
                    ((o = e[r].optional && void 0 === n[r]),
                    !e[r].K(n[r]) && !o)
                  ) {
                    if (((e = e[r]), 0 > r || r >= Jl.length))
                      throw new k(
                        "internal-error",
                        "Argument validator received an unsupported number of arguments."
                      );
                    (n = Jl[r]),
                      (i =
                        (i ? "" : n + " argument ") +
                        (e.name ? '"' + e.name + '" ' : "") +
                        "must be " +
                        e.J +
                        ".");
                    break t;
                  }
                i = null;
              }
            }
            if (i) throw new k("argument-error", t + " failed: " + i);
          }
          ((t = Fl.prototype).Ia = function () {
            var t = this;
            return this.f
              ? this.f
              : (this.f = Gl(
                  this,
                  Re()
                    .then(function () {
                      if (ji() && !Ai()) return Ii();
                      throw new k(
                        "operation-not-supported-in-this-environment",
                        "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."
                      );
                    })
                    .then(function () {
                      return t.v.g(t.u());
                    })
                    .then(function (e) {
                      return (t.g = e), uu(t.o, Gs, {});
                    })
                    .then(function (e) {
                      t.a[ql] = e.recaptchaSiteKey;
                    })
                    .s(function (e) {
                      throw ((t.f = null), e);
                    })
                ));
          }),
            (t.render = function () {
              Wl(this);
              var t = this;
              return Gl(
                this,
                this.Ia().then(function () {
                  if (null === t.c) {
                    var e = t.m;
                    if (!t.i) {
                      var n = le(e);
                      (e = (function (t, e, n) {
                        var i = arguments,
                          r = document,
                          o = String(i[0]),
                          a = i[1];
                        if (!he && a && (a.name || a.type)) {
                          if (
                            ((o = ["<", o]),
                            a.name && o.push(' name="', Gt(a.name), '"'),
                            a.type)
                          ) {
                            o.push(' type="', Gt(a.type), '"');
                            var s = {};
                            bt(s, a), delete s.type, (a = s);
                          }
                          o.push(">"), (o = o.join(""));
                        }
                        return (
                          (o = ge(r, o)),
                          a &&
                            ("string" == typeof a
                              ? (o.className = a)
                              : Array.isArray(a)
                              ? (o.className = a.join(" "))
                              : fe(o, a)),
                          2 < i.length && me(r, o, i),
                          o
                        );
                      })("DIV")),
                        n.appendChild(e);
                    }
                    t.c = t.g.render(e, t.a);
                  }
                  return t.c;
                })
              );
            }),
            (t.verify = function () {
              Wl(this);
              var t = this;
              return Gl(
                this,
                this.render().then(function (e) {
                  return new Te(function (n) {
                    var i = t.g.getResponse(e);
                    if (i) n(i);
                    else {
                      var r = function (e) {
                        e &&
                          ((function (t, e) {
                            $(t.l, function (t) {
                              return t == e;
                            });
                          })(t, r),
                          n(e));
                      };
                      t.l.push(r), t.i && t.g.execute(t.c);
                    }
                  });
                })
              );
            }),
            (t.reset = function () {
              Wl(this), null !== this.c && this.g.reset(this.c);
            }),
            (t.clear = function () {
              Wl(this), (this.A = !0), this.v.c();
              for (var t = 0; t < this.h.length; t++)
                this.h[t].cancel(
                  "RecaptchaVerifier instance has been destroyed."
                );
              if (!this.i) {
                t = le(this.m);
                for (var e; (e = t.firstChild); ) t.removeChild(e);
              }
            }),
            A(zl, Fl);
          var Jl =
            "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(
              " "
            );
          function Yl(t, e) {
            return {
              name: t || "",
              J: "a valid string",
              optional: !!e,
              K: function (t) {
                return "string" == typeof t;
              },
            };
          }
          function $l(t, e) {
            return {
              name: t || "",
              J: "a boolean",
              optional: !!e,
              K: function (t) {
                return "boolean" == typeof t;
              },
            };
          }
          function Zl(t, e) {
            return { name: t || "", J: "a valid object", optional: !!e, K: v };
          }
          function Ql(t, e) {
            return {
              name: t || "",
              J: "a function",
              optional: !!e,
              K: function (t) {
                return "function" == typeof t;
              },
            };
          }
          function tf(t, e) {
            return {
              name: t || "",
              J: "null",
              optional: !!e,
              K: function (t) {
                return null === t;
              },
            };
          }
          function ef(t) {
            return {
              name: t ? t + "Credential" : "credential",
              J: t ? "a valid " + t + " credential" : "a valid credential",
              optional: !1,
              K: function (e) {
                if (!e) return !1;
                var n = !t || e.providerId === t;
                return !(!e.ja || !n);
              },
            };
          }
          function nf(t, e) {
            return (
              v(t) &&
              "string" == typeof t.type &&
              t.type === e &&
              "function" == typeof t.Ha
            );
          }
          function rf(t) {
            return v(t) && "string" == typeof t.uid;
          }
          function of(t, e, n, i) {
            return {
              name: n || "",
              J: t.J + " or " + e.J,
              optional: !!i,
              K: function (n) {
                return t.K(n) || e.K(n);
              },
            };
          }
          function af(t, e) {
            for (var n in e) {
              var i = e[n].name;
              t[i] = cf(i, t[n], e[n].j);
            }
          }
          function sf(t, e) {
            for (var n in e) {
              var i = e[n].name;
              i !== n &&
                Object.defineProperty(t, i, {
                  get: E(function (t) {
                    return this[t];
                  }, n),
                  set: E(
                    function (t, e, n, i) {
                      Xl(t, [n], [i], !0), (this[e] = i);
                    },
                    i,
                    n,
                    e[n].jb
                  ),
                  enumerable: !0,
                });
            }
          }
          function uf(t, e, n, i) {
            t[e] = cf(e, n, i);
          }
          function cf(t, e, n) {
            function i() {
              var t = Array.prototype.slice.call(arguments);
              return Xl(o, n, t), e.apply(this, t);
            }
            if (!n) return e;
            var r,
              o = (function (t) {
                return (t = t.split("."))[t.length - 1];
              })(t);
            for (r in e) i[r] = e[r];
            for (r in e.prototype) i.prototype[r] = e.prototype[r];
            return i;
          }
          af(ll.prototype, {
            ib: { name: "applyActionCode", j: [Yl("code")] },
            Qa: { name: "checkActionCode", j: [Yl("code")] },
            mb: {
              name: "confirmPasswordReset",
              j: [Yl("code"), Yl("newPassword")],
            },
            dc: {
              name: "createUserWithEmailAndPassword",
              j: [Yl("email"), Yl("password")],
            },
            gc: { name: "fetchSignInMethodsForEmail", j: [Yl("email")] },
            qa: { name: "getRedirectResult", j: [] },
            Ac: { name: "isSignInWithEmailLink", j: [Yl("emailLink")] },
            Gc: {
              name: "onAuthStateChanged",
              j: [
                of(Zl(), Ql(), "nextOrObserver"),
                Ql("opt_error", !0),
                Ql("opt_completed", !0),
              ],
            },
            Hc: {
              name: "onIdTokenChanged",
              j: [
                of(Zl(), Ql(), "nextOrObserver"),
                Ql("opt_error", !0),
                Ql("opt_completed", !0),
              ],
            },
            ub: {
              name: "sendPasswordResetEmail",
              j: [
                Yl("email"),
                of(
                  Zl("opt_actionCodeSettings", !0),
                  tf(null, !0),
                  "opt_actionCodeSettings",
                  !0
                ),
              ],
            },
            vb: {
              name: "sendSignInLinkToEmail",
              j: [Yl("email"), Zl("actionCodeSettings")],
            },
            wb: { name: "setPersistence", j: [Yl("persistence")] },
            Rc: { name: "signInAndRetrieveDataWithCredential", j: [ef()] },
            yb: { name: "signInAnonymously", j: [] },
            Za: { name: "signInWithCredential", j: [ef()] },
            Sc: { name: "signInWithCustomToken", j: [Yl("token")] },
            Tc: {
              name: "signInWithEmailAndPassword",
              j: [Yl("email"), Yl("password")],
            },
            Uc: {
              name: "signInWithEmailLink",
              j: [Yl("email"), Yl("emailLink", !0)],
            },
            Vc: {
              name: "signInWithPhoneNumber",
              j: [
                Yl("phoneNumber"),
                {
                  name: "applicationVerifier",
                  J: "an implementation of firebase.auth.ApplicationVerifier",
                  optional: !1,
                  K: function (t) {
                    return !(
                      !t ||
                      "string" != typeof t.type ||
                      "function" != typeof t.verify
                    );
                  },
                },
              ],
            },
            Wc: {
              name: "signInWithPopup",
              j: [
                {
                  name: "authProvider",
                  J: "a valid Auth provider",
                  optional: !1,
                  K: function (t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty("isOAuthProvider")
                    );
                  },
                },
              ],
            },
            Xc: {
              name: "signInWithRedirect",
              j: [
                {
                  name: "authProvider",
                  J: "a valid Auth provider",
                  optional: !1,
                  K: function (t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty("isOAuthProvider")
                    );
                  },
                },
              ],
            },
            cd: {
              name: "updateCurrentUser",
              j: [
                of(
                  {
                    name: "user",
                    J: "an instance of Firebase User",
                    optional: !1,
                    K: function (t) {
                      return !!(t && t instanceof Sh);
                    },
                  },
                  tf(),
                  "user"
                ),
              ],
            },
            zb: { name: "signOut", j: [] },
            toJSON: { name: "toJSON", j: [Yl(null, !0)] },
            ed: { name: "useDeviceLanguage", j: [] },
            fd: { name: "useEmulator", j: [Yl("url")] },
            hd: { name: "verifyPasswordResetCode", j: [Yl("code")] },
          }),
            sf(ll.prototype, {
              lc: { name: "languageCode", jb: of(Yl(), tf(), "languageCode") },
              ti: { name: "tenantId", jb: of(Yl(), tf(), "tenantId") },
            }),
            (ll.Persistence = rc),
            (ll.Persistence.LOCAL = "local"),
            (ll.Persistence.SESSION = "session"),
            (ll.Persistence.NONE = "none"),
            af(Sh.prototype, {
              delete: { name: "delete", j: [] },
              nc: { name: "getIdTokenResult", j: [$l("opt_forceRefresh", !0)] },
              I: { name: "getIdToken", j: [$l("opt_forceRefresh", !0)] },
              Bc: { name: "linkAndRetrieveDataWithCredential", j: [ef()] },
              pb: { name: "linkWithCredential", j: [ef()] },
              Cc: {
                name: "linkWithPhoneNumber",
                j: [
                  Yl("phoneNumber"),
                  {
                    name: "applicationVerifier",
                    J: "an implementation of firebase.auth.ApplicationVerifier",
                    optional: !1,
                    K: function (t) {
                      return !(
                        !t ||
                        "string" != typeof t.type ||
                        "function" != typeof t.verify
                      );
                    },
                  },
                ],
              },
              Dc: {
                name: "linkWithPopup",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              Ec: {
                name: "linkWithRedirect",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              Kc: {
                name: "reauthenticateAndRetrieveDataWithCredential",
                j: [ef()],
              },
              sb: { name: "reauthenticateWithCredential", j: [ef()] },
              Lc: {
                name: "reauthenticateWithPhoneNumber",
                j: [
                  Yl("phoneNumber"),
                  {
                    name: "applicationVerifier",
                    J: "an implementation of firebase.auth.ApplicationVerifier",
                    optional: !1,
                    K: function (t) {
                      return !(
                        !t ||
                        "string" != typeof t.type ||
                        "function" != typeof t.verify
                      );
                    },
                  },
                ],
              },
              Mc: {
                name: "reauthenticateWithPopup",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              Nc: {
                name: "reauthenticateWithRedirect",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              reload: { name: "reload", j: [] },
              tb: {
                name: "sendEmailVerification",
                j: [
                  of(
                    Zl("opt_actionCodeSettings", !0),
                    tf(null, !0),
                    "opt_actionCodeSettings",
                    !0
                  ),
                ],
              },
              toJSON: { name: "toJSON", j: [Yl(null, !0)] },
              bd: { name: "unlink", j: [Yl("provider")] },
              Ab: { name: "updateEmail", j: [Yl("email")] },
              Bb: { name: "updatePassword", j: [Yl("password")] },
              dd: { name: "updatePhoneNumber", j: [ef("phone")] },
              Cb: { name: "updateProfile", j: [Zl("profile")] },
              Db: {
                name: "verifyBeforeUpdateEmail",
                j: [
                  Yl("email"),
                  of(
                    Zl("opt_actionCodeSettings", !0),
                    tf(null, !0),
                    "opt_actionCodeSettings",
                    !0
                  ),
                ],
              },
            }),
            af(kl.prototype, {
              execute: { name: "execute" },
              render: { name: "render" },
              reset: { name: "reset" },
              getResponse: { name: "getResponse" },
            }),
            af(Sl.prototype, {
              execute: { name: "execute" },
              render: { name: "render" },
              reset: { name: "reset" },
              getResponse: { name: "getResponse" },
            }),
            af(Te.prototype, {
              na: { name: "finally" },
              s: { name: "catch" },
              then: { name: "then" },
            }),
            sf(nh.prototype, {
              appVerificationDisabled: {
                name: "appVerificationDisabledForTesting",
                jb: $l("appVerificationDisabledForTesting"),
              },
            }),
            af(ih.prototype, {
              confirm: { name: "confirm", j: [Yl("verificationCode")] },
            }),
            uf(
              po,
              "fromJSON",
              function (t) {
                t = "string" == typeof t ? JSON.parse(t) : t;
                for (var e, n = [Io, Lo, Fo, bo], i = 0; i < n.length; i++)
                  if ((e = n[i](t))) return e;
                return null;
              },
              [of(Yl(), Zl(), "json")]
            ),
            uf(
              xo,
              "credential",
              function (t, e) {
                return new Do(t, e);
              },
              [Yl("email"), Yl("password")]
            ),
            af(Do.prototype, { w: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(So.prototype, {
              Ca: { name: "addScope", j: [Yl("scope")] },
              Ka: {
                name: "setCustomParameters",
                j: [Zl("customOAuthParameters")],
              },
            }),
            uf(So, "credential", ko, [of(Yl(), Zl(), "token")]),
            uf(xo, "credentialWithLink", jo, [Yl("email"), Yl("emailLink")]),
            af(No.prototype, {
              Ca: { name: "addScope", j: [Yl("scope")] },
              Ka: {
                name: "setCustomParameters",
                j: [Zl("customOAuthParameters")],
              },
            }),
            uf(No, "credential", _o, [of(Yl(), Zl(), "token")]),
            af(Oo.prototype, {
              Ca: { name: "addScope", j: [Yl("scope")] },
              Ka: {
                name: "setCustomParameters",
                j: [Zl("customOAuthParameters")],
              },
            }),
            uf(Oo, "credential", Ro, [
              of(Yl(), of(Zl(), tf()), "idToken"),
              of(Yl(), tf(), "accessToken", !0),
            ]),
            af(Co.prototype, {
              Ka: {
                name: "setCustomParameters",
                j: [Zl("customOAuthParameters")],
              },
            }),
            uf(Co, "credential", Po, [
              of(Yl(), Zl(), "token"),
              Yl("secret", !0),
            ]),
            af(Ao.prototype, {
              Ca: { name: "addScope", j: [Yl("scope")] },
              credential: {
                name: "credential",
                j: [
                  of(Yl(), of(Zl(), tf()), "optionsOrIdToken"),
                  of(Yl(), tf(), "accessToken", !0),
                ],
              },
              Ka: {
                name: "setCustomParameters",
                j: [Zl("customOAuthParameters")],
              },
            }),
            af(yo.prototype, { w: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(mo.prototype, { w: { name: "toJSON", j: [Yl(null, !0)] } }),
            uf(Ho, "credential", qo, [
              Yl("verificationId"),
              Yl("verificationCode"),
            ]),
            af(Ho.prototype, {
              eb: {
                name: "verifyPhoneNumber",
                j: [
                  of(
                    Yl(),
                    {
                      name: "phoneInfoOptions",
                      J: "valid phone info options",
                      optional: !1,
                      K: function (t) {
                        return (
                          !!t &&
                          (t.session && t.phoneNumber
                            ? nf(t.session, lo) &&
                              "string" == typeof t.phoneNumber
                            : t.session && t.multiFactorHint
                            ? nf(t.session, fo) && rf(t.multiFactorHint)
                            : t.session && t.multiFactorUid
                            ? nf(t.session, fo) &&
                              "string" == typeof t.multiFactorUid
                            : !!t.phoneNumber &&
                              "string" == typeof t.phoneNumber)
                        );
                      },
                    },
                    "phoneInfoOptions"
                  ),
                  {
                    name: "applicationVerifier",
                    J: "an implementation of firebase.auth.ApplicationVerifier",
                    optional: !1,
                    K: function (t) {
                      return !(
                        !t ||
                        "string" != typeof t.type ||
                        "function" != typeof t.verify
                      );
                    },
                  },
                ],
              },
            }),
            af(Uo.prototype, { w: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(k.prototype, { toJSON: { name: "toJSON", j: [Yl(null, !0)] } }),
            af($o.prototype, { toJSON: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(Yo.prototype, { toJSON: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(ch.prototype, { toJSON: { name: "toJSON", j: [Yl(null, !0)] } }),
            af(ah.prototype, {
              Qc: {
                name: "resolveSignIn",
                j: [
                  {
                    name: "multiFactorAssertion",
                    J: "a valid multiFactorAssertion",
                    optional: !1,
                    K: function (t) {
                      return !!t && !!t.rb;
                    },
                  },
                ],
              },
            }),
            af(vh.prototype, {
              Qb: { name: "getSession", j: [] },
              ec: {
                name: "enroll",
                j: [
                  {
                    name: "multiFactorAssertion",
                    J: "a valid multiFactorAssertion",
                    optional: !1,
                    K: function (t) {
                      return !!t && !!t.rb;
                    },
                  },
                  Yl("displayName", !0),
                ],
              },
              ad: {
                name: "unenroll",
                j: [
                  of(
                    {
                      name: "multiFactorInfo",
                      J: "a valid multiFactorInfo",
                      optional: !1,
                      K: rf,
                    },
                    Yl(),
                    "multiFactorInfoIdentifier"
                  ),
                ],
              },
            }),
            af(zl.prototype, {
              clear: { name: "clear", j: [] },
              render: { name: "render", j: [] },
              verify: { name: "verify", j: [] },
            }),
            uf(Sr, "parseLink", Dr, [Yl("link")]),
            uf(
              Pl,
              "assertion",
              function (t) {
                return new ph(t);
              },
              [ef("phone")]
            ),
            (function () {
              if (void 0 === J || !J.INTERNAL || !J.INTERNAL.registerComponent)
                throw Error(
                  "Cannot find the firebase namespace; be sure to include firebase-app.js before this library."
                );
              var t = {
                ActionCodeInfo: {
                  Operation: {
                    EMAIL_SIGNIN: pr,
                    PASSWORD_RESET: "PASSWORD_RESET",
                    RECOVER_EMAIL: "RECOVER_EMAIL",
                    REVERT_SECOND_FACTOR_ADDITION: fr,
                    VERIFY_AND_CHANGE_EMAIL: dr,
                    VERIFY_EMAIL: "VERIFY_EMAIL",
                  },
                },
                Auth: ll,
                AuthCredential: po,
                Error: k,
              };
              uf(t, "EmailAuthProvider", xo, []),
                uf(t, "FacebookAuthProvider", So, []),
                uf(t, "GithubAuthProvider", No, []),
                uf(t, "GoogleAuthProvider", Oo, []),
                uf(t, "TwitterAuthProvider", Co, []),
                uf(t, "OAuthProvider", Ao, [Yl("providerId")]),
                uf(t, "SAMLAuthProvider", To, [Yl("providerId")]),
                uf(t, "PhoneAuthProvider", Ho, [
                  {
                    name: "auth",
                    J: "an instance of Firebase Auth",
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof ll);
                    },
                  },
                ]),
                uf(t, "RecaptchaVerifier", zl, [
                  of(
                    Yl(),
                    {
                      name: "",
                      J: "an HTML element",
                      optional: !1,
                      K: function (t) {
                        return !!(t && t instanceof Element);
                      },
                    },
                    "recaptchaContainer"
                  ),
                  Zl("recaptchaParameters", !0),
                  {
                    name: "app",
                    J: "an instance of Firebase App",
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof J.app.App);
                    },
                  },
                ]),
                uf(t, "ActionCodeURL", Sr, []),
                uf(t, "PhoneMultiFactorGenerator", Pl, []),
                J.INTERNAL.registerComponent({
                  name: "auth",
                  instanceFactory: function (t) {
                    return new ll((t = t.getProvider("app").getImmediate()));
                  },
                  multipleInstances: !1,
                  serviceProps: t,
                  instantiationMode: "LAZY",
                  type: "PUBLIC",
                }),
                J.INTERNAL.registerComponent({
                  name: "auth-internal",
                  instanceFactory: function (t) {
                    return {
                      getUid: I(
                        (t = t.getProvider("auth").getImmediate()).getUid,
                        t
                      ),
                      getToken: I(t.mc, t),
                      addAuthTokenListener: I(t.cc, t),
                      removeAuthTokenListener: I(t.Oc, t),
                    };
                  },
                  multipleInstances: !1,
                  instantiationMode: "LAZY",
                  type: "PRIVATE",
                }),
                J.registerVersion("@firebase/auth", "0.15.2"),
                J.INTERNAL.extendNamespace({ User: Sh });
            })();
        }.apply(
          void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      var Y = JSON.parse(
          '{"apiKey":"AIzaSyBnJUVXT9-E-nyNU6QlOJxmqP8hnMc0QxU","authDomain":"zorbit.firebaseapp.com","databaseURL":"https://zorbit.firebaseio.com","projectId":"zorbit","storageBucket":"zorbit.appspot.com","messagingSenderId":"881019897154","appId":"1:881019897154:web:4e77ad3fbec873633e34db","measurementId":"G-1VQ4FSH94G"}'
        ),
        $ = J.initializeApp(Y),
        Z = n(52868),
        Q = n.n(Z),
        tt = n(80719),
        et = function (t, e, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function a(t) {
              try {
                u(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, s);
            }
            u((i = i.apply(t, e || [])).next());
          });
        },
        nt = function (t, e) {
          var n,
            i,
            r,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      i &&
                        (r =
                          2 & o[0]
                            ? i.return
                            : o[0]
                            ? i.throw || ((r = i.return) && r.call(i), 0)
                            : i.next) &&
                        !(r = r.call(i, o[1])).done)
                    )
                      return r;
                    switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((r = a.trys),
                          (r = r.length > 0 && r[r.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = o);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(o);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (t) {
                    (o = [6, t]), (i = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
        it = [],
        rt = n.n(tt)()("https://api.zorbi.app/", "auth/requestCustomToken"),
        ot = { data: void 0 };
      $.auth().onIdTokenChanged(function (t) {
        return et(void 0, void 0, void 0, function () {
          var t;
          return nt(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = ot), [4, dt()];
              case 1:
                return (t.data = e.sent()), lt(), st(), [2];
            }
          });
        });
      }),
        chrome.runtime.onMessage.addListener(function (t, e, n) {
          return et(void 0, void 0, void 0, function () {
            var n;
            return nt(this, function (i) {
              switch (i.label) {
                case 0:
                  return "register" != t.type ? [3, 4] : [4, at()];
                case 1:
                  return i.sent() <= 0 ? [4, st()] : [3, 3];
                case 2:
                  i.sent(), (i.label = 3);
                case 3:
                  return it.push(e.tab.id), ft(e.tab.id, ot.data), [3, 6];
                case 4:
                  return "request_global_refresh" != t.type
                    ? [3, 6]
                    : ((n = ot), [4, dt()]);
                case 5:
                  (n.data = i.sent()), lt(), st(), (i.label = 6);
                case 6:
                  return [2, !0];
              }
            });
          });
        }),
        chrome.runtime.onMessageExternal.addListener(function (t, e, n) {
          var i;
          console.log(t),
            "CLOSE_ME" == t.type
              ? chrome.tabs.remove(e.tab.id)
              : "AUTH_UPDATE" == t.type &&
                ((null === (i = t.data) || void 0 === i ? void 0 : i.user)
                  ? (ht(t.data.user, t.data.userToken), n({ success: !0 }))
                  : (ht(null, null), n({ success: !0 }))),
            n({ success: !0 });
        });
      var at = function () {
          return et(void 0, void 0, void 0, function () {
            var t, e, n, i, r;
            return nt(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    null === (i = $.auth().currentUser) || void 0 === i
                      ? void 0
                      : i.getIdTokenResult(),
                  ];
                case 1:
                  return (
                    (t = o.sent()),
                    console.log(t),
                    (e =
                      null === (r = null == t ? void 0 : t.claims) ||
                      void 0 === r
                        ? void 0
                        : r.exp)
                      ? ((n = new Date().getTime() / 1e3), [2, e - n])
                      : [2, 0]
                  );
              }
            });
          });
        },
        st = function () {
          return et(void 0, void 0, void 0, function () {
            var t, e;
            return nt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    chrome.alarms.clear("authRefresh"),
                    $.auth().currentUser ? [4, at()] : [2]
                  );
                case 1:
                  return (t = n.sent()) <= 600 ? [4, ut()] : [3, 3];
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  (e = Math.max(0, 1e3 * (t - 600))),
                    console.log("setting up refresh in", e),
                    chrome.alarms.create("authRefresh", {
                      when: Date.now() + e,
                    }),
                    (n.label = 4);
                case 4:
                  return [2];
              }
            });
          });
        };
      chrome.alarms.onAlarm.addListener(function (t) {
        return et(void 0, void 0, void 0, function () {
          return nt(this, function (e) {
            switch (e.label) {
              case 0:
                return "authRefresh" != t.name
                  ? [3, 2]
                  : (console.log("Refreshing Auth Token"), [4, ut()]);
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                return [2];
            }
          });
        });
      });
      var ut = function () {
          return et(void 0, void 0, void 0, function () {
            var t;
            return nt(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = ot), [4, dt(!0)];
                case 1:
                  return (t.data = e.sent()), lt(), [2];
              }
            });
          });
        },
        ct = function (t) {
          return et(void 0, void 0, void 0, function () {
            var e, n, i, r, o;
            return nt(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    a.trys.push([0, 10, , 11]),
                    t ? [3, 3] : [4, $.auth().signOut()]
                  );
                case 1:
                  return a.sent(), (e = ot), [4, dt()];
                case 2:
                  return (e.data = a.sent()), [2];
                case 3:
                  return (
                    (ot.data = void 0), lt(), [4, Q().post(rt, { token: t })]
                  );
                case 4:
                  return (
                    (n = a.sent()),
                    console.log(n),
                    (
                      null === (o = n.data) || void 0 === o
                        ? void 0
                        : o.customToken
                    )
                      ? [4, $.auth().signInWithCustomToken(n.data.customToken)]
                      : [3, 6]
                  );
                case 5:
                  return a.sent(), [3, 8];
                case 6:
                  return [4, $.auth().signOut()];
                case 7:
                  a.sent(), (a.label = 8);
                case 8:
                  return (i = ot), [4, dt()];
                case 9:
                  return (i.data = a.sent()), [3, 11];
                case 10:
                  return (r = a.sent()), console.error(r), ct(null), [3, 11];
                case 11:
                  return [2];
              }
            });
          });
        },
        ht = function (t, e) {
          return et(void 0, void 0, void 0, function () {
            return nt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (i = t),
                    (r = $.auth().currentUser),
                    (o =
                      (null == i ? void 0 : i.uid) ==
                      (null == r ? void 0 : r.uid)),
                    (a =
                      (null == i ? void 0 : i.displayName) ==
                      (null == r ? void 0 : r.displayName)),
                    (s =
                      (null == i ? void 0 : i.email) ==
                      (null == r ? void 0 : r.email)),
                    (u =
                      (null == i ? void 0 : i.photoURL) ==
                      (null == r ? void 0 : r.photoURL)),
                    o && a && s && u ? [2] : [4, ct(e)]
                  );
                case 1:
                  return n.sent(), [4, lt()];
                case 2:
                  return n.sent(), [4, st()];
                case 3:
                  return n.sent(), [2];
              }
              var i, r, o, a, s, u;
            });
          });
        };
      function lt() {
        return et(this, void 0, void 0, function () {
          var t, e;
          return nt(this, function (n) {
            for (t = ot.data, e = 0; e < it.length; ++e) ft(it[e], t);
            return [2];
          });
        });
      }
      function ft(t, e) {
        var n;
        return et(this, void 0, void 0, function () {
          return nt(this, function (i) {
            return (
              chrome.tabs.sendMessage(t, { type: "AUTH_UPDATE", data: e }),
              (null === (n = null == e ? void 0 : e.user) || void 0 === n
                ? void 0
                : n.uid) &&
                chrome.runtime.setUninstallURL(
                  "https://zorbi.cards/uninstall?userId=" + e.user.uid
                ),
              [2]
            );
          });
        });
      }
      var pt = function (t) {
        return (
          void 0 === t && (t = !1),
          et(void 0, void 0, void 0, function () {
            return nt(this, function (e) {
              return $.auth().currentUser
                ? [2, $.auth().currentUser.getIdToken(t)]
                : [2, null];
            });
          })
        );
      };
      function dt(t) {
        return (
          void 0 === t && (t = !1),
          et(this, void 0, void 0, function () {
            var e;
            return nt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (e = {
                      user:
                        ((i = $.auth().currentUser),
                        i
                          ? {
                              displayName: i.displayName,
                              email: i.email,
                              photoURL: i.photoURL,
                              uid: i.uid,
                            }
                          : null),
                    }),
                    [4, pt(t)]
                  );
                case 1:
                  return [
                    2,
                    ((e.token = n.sent()),
                    (e.extensionId = chrome.runtime.id),
                    e),
                  ];
              }
              var i;
            });
          })
        );
      }
    })();
})();
