const buttons_colors = [
  "#F3B200",
  "#77B900",
  "#2572EB",
  "#AA4344",
  "#7F6E94",
  "#199900",
  "#FF981D",
  "#AA40FF",
  "#91D100",
  "#E1B700",
  "#FF76BC",
  "#56C5FF",
  "#00C13F",
  "#FE7C22",
];
function createPluginFromObject(t) {
  if (
    (window.extStorageGet ||
      ((window.extStorageGet = function (t) {
        return localStorage[t];
      }),
      (window.extStorageSet = function (t, e) {
        return (localStorage[t] = e);
      })),
    !t.key)
  )
    return { error: 'You Don\'t have a "key" key', id: 4 };
  if (!t.onclick && !t.url)
    return { error: "You don't have a onclick function or url key", id: 1 };
  if (!t.name) return { error: 'You must add a "name" key', id: 2 };
  let e = t.dataType || "";
  return (
    (e = e.replace(/text/g, "")),
    (e = e.replace(/image_url/g, "")),
    (e = e.replace(/image/g, "")),
    (e = e.replace(/page/g, "")),
    (e = e.replace(/image_base64/g, "")),
    (e = e.trim()),
    e.length > 0
      ? { error: "Cannot recognize dataType: " + e }
      : {
          plugin: (t = $.extend(
            {
              dataType: "text image_url",
              isDataType: function (t) {
                return (
                  this.dataType.toLowerCase().indexOf(t.toLowerCase()) > -1
                );
              },
              dataTypes: function () {
                return this.dataType.split(" ");
              },
              run: function (e, o) {
                if (this.toolbar) {
                  var i = this.toolbar.namespace + "_" + this.key + "_run";
                  extStorageGet(i) || extStorageSet(i, 0),
                    extStorageSet(i, parseInt(extStorageGet(i), 10) + 1);
                }
                for (var n in sb) this[n] = sb[n];
                var a = t;
                if (
                  ((a.event = o),
                  (a.page_title =
                    (this.toolbar && this.toolbar.page_title) ||
                    $("title").text() ||
                    "no title"),
                  (a.page_description =
                    (this.toolbar && this.toolbar.page_description) ||
                    $("meta[name=description]").attr("content") ||
                    ""),
                  (a.page_url =
                    (this.toolbar && this.toolbar.page_url) ||
                    location.toString()),
                  this.isDataType("text"))
                )
                  (a.text = e),
                    (a.dataType = "text"),
                    this.onclick
                      ? this.onclick(a)
                      : this.url && this.createTabWithParams(this.url, e, a);
                else if (this.isDataType("image")) {
                  (a.image_url = function (t) {
                    var e = this.image_data();
                    this.toolbar &&
                      e === this.toolbar.last_image_data &&
                      t(this.toolbar.last_image_url);
                  }),
                    (a.image_base64 = function (t) {
                      var e = this.image_data(),
                        o = e.slice(e.indexOf(",") + 1);
                      return t && t(o), o;
                    });
                  if (
                    ((a.image_blob = function () {
                      return (function (t) {
                        for (var e = atob(t), o = [], i = 0; i < e.length; i++)
                          o.push(e.charCodeAt(i));
                        return new Blob([new Uint8Array(o)], {
                          type: "image/png",
                        });
                      })(a.image_base64());
                    }),
                    (Array.isArray(e) || e.jquery) && (e = e[0]),
                    "string" == typeof e && "data" === e.slice(0, 4))
                  )
                    a.image_data = function (t) {
                      return t && t(e), e;
                    };
                  else if (e.nodeType) {
                    var r;
                    "IMG" === e.tagName &&
                      (((r = document.createElement("canvas")).width = e.width),
                      (r.height = e.height),
                      r.getContext("2d").drawImage(e, 0, 0)),
                      "CANVAS" === e.tagName && (r = e),
                      "CANVAS" === e.tagName || "IMG" === e.tagName
                        ? (a.image_data = function (t) {
                            var e = r.toDataURL();
                            return t && t(e), e;
                          })
                        : alert("plugin tag get no supported:" + e.tagName);
                  }
                  this.url &&
                    a.image_url(function (t) {
                      a.createTabWithParams(a.url, t, a);
                    }),
                    this.onclick &&
                      ("image" === this.dataType && (a.dataType = "image"),
                      this.onclick(a));
                } else this.onclick && this.onclick(a);
              },
            },
            t
          )),
        }
  );
}
function isNumber(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Toolbar(t) {
  this.obj_plugins = {};
  var e = "",
    o = [];
  if (((e = $('<div class="plugin-toolbar"></div>')), !t.theme)) {
    var i =
      "background: #fff;box-shadow: 0 2px 2px rgba(0,0,0,0.15);border: 1px #aaaaab solid;border-radius: 4px;display:inline-block;";
    t.whiteIcons && (i += "padding-top:3px;"), e.attr("style", i);
  }
  var n,
    a,
    r = this;
  var l = function () {
    r.isMax()
      ? (a.show(), n.hide(), $(".tb_button", e).parent().show())
      : (a.hide(),
        n.show(),
        $(".tb_button", e).parent().hide().slice(0, t.min_buttons_num).show());
  };
  (this.isMax = function () {
    return "yes" === r.storageGet("isMax");
  }),
    (this.addPlugins = function (t) {
      Array.isArray(t) || (t = [t]),
        $.each(t, function (t, e) {
          var o = createPluginFromObject(e);
          o.error || (((o = o.plugin).toolbar = r), (r.obj_plugins[o.key] = o));
        });
    }),
    (this.removeToolbar = function () {
      $(t.element).html(""), $(document).off("click", r.removeToolbar);
    });
  (this.storageGet = function (t, e) {
    var o,
      i = (this.namespace && "toolbarnonamespace") + "_" + t;
    return (
      void 0 === (o = extStorageGet ? extStorageGet(i) : localStorage[i]) &&
        (o = e),
      isNumber(o) ? parseFloat(o) : o
    );
  }),
    (this.storageSet = function (t, e) {
      var o = (this.namespace && "toolbarnonamespace") + "_" + t;
      return extStorageSet ? extStorageSet(o, e) : (localStorage[o] = e);
    }),
    function () {
      for (var i in ((o = t.type.split(" ")),
      (t = $.extend(
        {},
        {
          icon_base: "icons/",
          lines: 1,
          min_buttons_num: 2,
          zIndex: 2e4,
          button_size: 15,
        },
        t
      ))))
        this[i] = t[i];
      if (
        (this.addPlugins(t.plugins),
        "static" === this.position &&
          ((function () {
            var i;
            e.html(""), e.css("z-index", r.zIndex);
            var s = 0,
              c = 0;
            $.each(r.obj_plugins, function () {
              for (var t in ((this.dataTypes = this.dataType.split(" ")), o))
                for (var e in this.dataTypes) o[t] === this.dataTypes[e] && c++;
            });
            var p = -1;
            $.each(r.obj_plugins, function () {
              if (!t.doNotRenderDefaults || !this.editorDefault) {
                var n = !1;
                for (var a in o)
                  for (var l in this.dataTypes)
                    o[a] === this.dataTypes[l] && (n = !0);
                if (n) {
                  if (t.theme)
                    i = $(
                      '<div class="tb_button" plugin-key="' +
                        this.key +
                        '"><img src=' +
                        r.icon_base +
                        this.key +
                        ".png ></div>"
                    );
                  else {
                    var d = t.whiteIcons
                      ? "padding: 4px 3px;margin-bottom: 3px;margin-left: 3px;margin-right: 2px;background: #777;float: left;border: none;color: #fff;height: 20px;line-height: 20px;border-radius: 3px;cursor: pointer;box-sizing: content-box;float:left;"
                      : "float:left";
                    i = $(
                      '<div style="' +
                        d +
                        '"><div style=display:none;font-size:10px;font-family:arial;text-align:center>' +
                        this.name +
                        '</div><img class=tb_button plugin-key="' +
                        this.key +
                        '"src=' +
                        r.icon_base +
                        this.key +
                        ".png ></div>"
                    );
                  }
                  s++,
                    $("img,div", i).attr("width", t.button_size + "px"),
                    $("img,div", i).attr("height", t.button_size + "px"),
                    $("img,div", i).css({
                      width: t.button_size + "px",
                      height: t.button_size + "px",
                      "border-right": "none",
                      "border-left": "none",
                      "border-bottom": "none",
                      "box-sizing": "content-box",
                      padding: t.whiteIcons ? "0" : "5px",
                      float: "left",
                    }),
                    i.attr("title", this.name);
                  var g = this;
                  g.$ = i;
                  var u = $("img", i).on({
                    error: function () {},
                    mouseenter: function () {},
                    mouseleave: function () {
                      "down" !== g.state && $(this).removeClass("hover");
                    },
                    "mousedown mouseup": function (t) {
                      t.stopPropagation();
                    },
                    click: function (t) {
                      "Range" === window.getSelection().type &&
                        (text = window.getSelection().getRangeAt(0).toString()),
                        r.keepDown && "down" !== g.state
                          ? ($.each(r.obj_plugins, function (t, e) {
                              "down" === e.state && (e.state = "up");
                            }),
                            e.find("img").css("background", "#fff"),
                            u.css("background", "#4BBAFF"),
                            (g.state = "down"),
                            (r.active = g))
                          : r.keepDown &&
                            "down" === g.state &&
                            ((g.state = "up"),
                            (r.active = null),
                            u.css("background", "#fff")),
                        r.request(function (e) {
                          !1 === g.closeOnClick && t.stopPropagation(),
                            g.run(e, t);
                        }, g);
                    },
                  });
                  p++,
                    !0 === t.colors &&
                      ((thisColorIndex = p),
                      thisColorIndex >= buttons_colors.length &&
                        (thisColorIndex = 0),
                      $("img", i).css(
                        "backgroundColor",
                        buttons_colors[thisColorIndex]
                      )),
                    e.append(i),
                    Math.round(c / this.toolbar.lines + 1) === s &&
                      i.css("clear", "both");
                }
              }
            }),
              t.enlargable &&
                ((n = $(
                  '<div style=cursor:pointer;float:left><img style="margin:-5px"  src=' +
                    r.icon_base +
                    "right.png></div>"
                )),
                (a = $(
                  '<div style=cursor:pointer;float:left><img style="width:15px; height:15px;padding: 5px; box-sizing: content-box;float: left" src=' +
                    r.icon_base +
                    "left.png></div>"
                )),
                e.append(n).append(a),
                l(),
                n
                  .add(a)
                  .find("img")
                  .css("height", t.button_size)
                  .on("mousedown", function (t) {
                    t.stopPropagation();
                  }),
                n.on("click", function (t) {
                  return r.storageSet("isMax", "yes"), l(), !1;
                }),
                a.on("click", function (t) {
                  return r.storageSet("isMax", "no"), l(), !1;
                }));
          })(),
          $(t.element).append(e),
          t.pushDown))
      ) {
        e.css({
          position: "fixed",
          top: "0px",
          left: "0px",
          borderTop: "none",
          borderLeft: "none",
          borderTopRightRadius: "0px",
        });
        var c = $(e).height() + 5;
        $("*")
          .filter(function () {
            return "fixed" === $(this).css("position");
          })
          .not(e)
          .css("margin-top", function (t, e) {
            return parseInt(e) + c;
          });
        var p = (parseInt($("tml").css("margin-top")) || 0) + c;
        try {
          (s = document.createElement("style")),
            document.getElementsByTagName("html")[0].appendChild(s),
            (s.innerText =
              "@media print {.ws_toolbar_top {display:none}} @media screen {html {margin-top:" +
              p +
              "px;position:relative}");
        } catch (t) {}
      }
      t.closeOnClick &&
        setTimeout(function () {
          $(document).on("click", r.removeToolbar);
        }, 0);
    }.call(this);
}
function appendFirstStyle() {
  const t = document.createElement("style");
  (t.innerText =
    ".tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}"),
    document.body.appendChild(t);
}
(sb = {
  createTabWithParams: function (t, e, o) {
    var i = this.url;
    (i = (i = (i = (i = (i = (i = i.replace(/{image_url}/g, "%c")).replace(
      /{page_url}/g,
      encodeURIComponent(this.page_url)
    )).replace(/{page_title}/g, encodeURIComponent(this.page_title))).replace(
      /{page_description}/g,
      encodeURIComponent(this.page_description)
    )).replace(/{text}/g, encodeURIComponent(this.text)))
      .replace(/%s/g, e)
      .replace("%c", encodeURIComponent(e.replace("img", "i3")))
      .replace(/%t/g, encodeURIComponent(o.title))),
      this.createTab(i);
  },
  createTab: function (t) {
    window.open(t, "_blank");
  },
  dialog: function (t, e) {
    (t = $(t)), $("input", t).not("[type=password]").inputLoadAndRemember(this);
    var o = $.extend({}, e, { element: t, ui: "dialog", title: this.name }),
      i = new Dialog(o);
    return i.show(), $("input", i.contentDocument).first().focus(), i;
  },
  storageGet: function (t, e) {
    var o,
      i = (this.toolbar && this.toolbar.namespace) + "_" + this.key + "_" + t;
    return (
      void 0 === (o = extStorageGet ? extStorageGet(i) : localStorage[i]) &&
        (o = e),
      isNumber(o) ? parseFloat(o) : o
    );
  },
  storageSet: function (t, e) {
    var o = (this.toolbar && this.toolbar.namespace) + "_" + this.key + "_" + t;
    return extStorageSet ? extStorageSet(o, e) : (localStorage[o] = e);
  },
}),
  "complete" === document.readyState
    ? appendFirstStyle()
    : window.addEventListener("load", appendFirstStyle);
