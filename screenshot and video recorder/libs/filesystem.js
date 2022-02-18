window.FSAPI = (function () {
  function e() {}
  function n(e) {
    return Array.prototype.slice.call(e || [], 0);
  }
  function t(e, t, i) {
    var o = e.root.createReader(),
      r = [];
    !(function e() {
      o.readEntries(function (i) {
        i.length ? ((r = r.concat(n(i))), e()) : t(r.sort());
      }, i);
    })();
  }
  window.requestFileSystem =
    window.requestFileSystem || window.webkitRequestFileSystem;
  var i =
      "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/",
    o = "filesystem:";
  return {
    withFs: function (t, i) {
      var o = n(arguments).slice(2);
      window.requestFileSystem(
        window.TEMPORARY,
        1048576,
        function (e) {
          o.unshift(e), i.apply(this, o);
        },
        t || e
      );
    },
    lookupFiles: t,
    loadMetadata: function (e, n) {
      var t = e.length,
        i = 0;
      function o() {
        ++i >= t && n(e);
      }
      e.forEach(function (e) {
        e.getMetadata(
          function (n) {
            (e.metadata = n), o();
          },
          function () {
            (e.metadata = null), o();
          }
        );
      }),
        e.length || o();
    },
    clearTempFiles: function (n, i, o, r) {
      function a(e) {
        var n = (function (e) {
          var n = "";
          switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
              n = "QUOTA_EXCEEDED_ERR";
              break;
            case FileError.NOT_FOUND_ERR:
              n = "NOT_FOUND_ERR";
              break;
            case FileError.SECURITY_ERR:
              n = "SECURITY_ERR";
              break;
            case FileError.INVALID_MODIFICATION_ERR:
              n = "INVALID_MODIFICATION_ERR";
              break;
            case FileError.INVALID_STATE_ERR:
              n = "INVALID_STATE_ERR";
              break;
            default:
              n = "Unknown Error";
          }
          return n;
        })(e);
        i && i(e, n);
      }
      (o = o || e),
        window.requestFileSystem(
          window.TEMPORARY,
          1048576,
          function (e) {
            t(
              e,
              function (e) {
                const t = e.filter(
                  r.video
                    ? (e) => "webm" === e.name.slice(-4)
                    : (e) => "png" === e.name.slice(-3)
                );
                var i = t.length,
                  a = [],
                  c = [];
                function s(e, t, r) {
                  (r ? a : c).push(e),
                    o(e, t, i, r),
                    a.length + c.length == i && n(a, c);
                }
                t.forEach(function (e, n) {
                  e.isFile
                    ? e.remove(
                        function () {
                          s(e, n, !0);
                        },
                        function () {
                          s(e, n, !1);
                        }
                      )
                    : s(e, n, !1);
                });
              },
              a
            );
          },
          a
        );
    },
    extensionEndpoint: i,
    fsPrefix: o,
    imgPathBase: o + i + "temporary/",
    _: e,
    loadFile: function (e, n, t) {
      window.requestFileSystem(
        window.TEMPORARY,
        1048576,
        function (i) {
          i.root.getFile(e, { create: !1 }, t, n);
        },
        n
      );
    },
  };
})();
