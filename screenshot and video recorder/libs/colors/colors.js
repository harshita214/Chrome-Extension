/******************************************
 * Websanova.com
 *
 * Resources for web entrepreneurs
 *
 * @author          Websanova
 * @copyright       Copyright (c) 2012 Websanova.
 * @license         This wChar jQuery plug-in is dual licensed under the MIT and GPL licenses.
 * @link            http://www.websanova.com
 * @github			http://github.com/websanova/wColorPicker
 * @version         Version 1.3.4
 *
 ******************************************/
!(function (e) {
  function t(e, t) {
    return (
      (this.colorPicker = null),
      (this.settings = e),
      (this.$elem = t),
      (this.currentColor = e.initColor),
      (this.height = null),
      (this.width = null),
      (this.slideTopToBottom = null),
      (this.customTarget = null),
      (this.buttonColor = null),
      (this.paletteHolder = null),
      this
    );
  }
  (e.fn.wColorPicker = function (o, i) {
    if ("object" == typeof o) i = o;
    else if ("string" == typeof o) {
      var C = [],
        s = this.each(function () {
          var t = e(this).data("_wColorPicker");
          t &&
            void 0 !== e.fn.wColorPicker.defaultSettings[o] &&
            (void 0 !== i ? (t.settings[o] = i) : C.push(t.settings[o]));
        });
      return 1 === C.length ? C[0] : C.length > 0 ? C : s;
    }
    return (
      (i = e.extend({}, e.fn.wColorPicker.defaultSettings, i || {})),
      this.each(function () {
        var o = e(this),
          C = jQuery.extend(!0, {}, i),
          s = new t(C, o);
        s.generate(),
          s.appendToElement(o),
          s.colorSelect(s, C.initColor),
          o.data("_wColorPicker", s);
      })
    );
  }),
    (e.fn.wColorPicker.defaultSettings = {
      theme: "black",
      opacity: 0.8,
      initColor: "#FF0000",
      onMouseover: null,
      onMouseout: null,
      onSelect: null,
      mode: "flat",
      buttonSize: 20,
      effect: "slide",
      showSpeed: 500,
      hideSpeed: 500,
    }),
    (t.prototype = {
      generate: function () {
        if (this.colorPicker) return this.colorPicker;
        var t = this,
          o = { clear: "both", height: 0, lineHeight: 0, fontSize: 0 };
        (this.customTarget = e(
          '<div class="_wColorPicker_customTarget"></div>'
        )),
          (this.customInput = e(
            '<input type="text" class="_wColorPicker_customInput" value=""/>'
          )
            .keyup(function (o) {
              var i = o.keyCode ? o.keyCode : o.which,
                C = t.validHex(e(this).val());
              e(this).val(C),
                7 === C.length && t.customTarget.css("backgroundColor", C),
                13 === i &&
                  (t.colorSelect(t, e(this).val()),
                  t.buttonColor && t.hidePalette(t));
            })
            .click(function (e) {
              e.stopPropagation();
            }));
        var i = e('<div class="_wColorPicker_custom"></div>')
            .append(
              this.appendColors(
                e('<div class="_wColorPicker_noColor">'),
                [""],
                1
              )
            )
            .append(this.customTarget)
            .append(this.customInput)
            .append(e("<div></div>").css(o)),
          C = this.appendColors(
            e('<div class="_wColorPicker_palette_simple"></div>'),
            [
              "000000",
              "333333",
              "666666",
              "999999",
              "CCCCCC",
              "FFFFFF",
              "FF0000",
              "00FF00",
              "0000FF",
              "FFFF00",
              "00FFFF",
              "FF00FF",
            ],
            1
          ),
          s = this.appendColors(
            e('<div class="_wColorPicker_palette_mixed"></div>'),
            [
              "000000",
              "003300",
              "006600",
              "009900",
              "00CC00",
              "00FF00",
              "330000",
              "333300",
              "336600",
              "339900",
              "33CC00",
              "33FF00",
              "660000",
              "663300",
              "666600",
              "669900",
              "66CC00",
              "66FF00",
              "000033",
              "003333",
              "006633",
              "009933",
              "00CC33",
              "00FF33",
              "330033",
              "333333",
              "336633",
              "339933",
              "33CC33",
              "33FF33",
              "660033",
              "663333",
              "666633",
              "669933",
              "66CC33",
              "66FF33",
              "000066",
              "003366",
              "006666",
              "009966",
              "00CC66",
              "00FF66",
              "330066",
              "333366",
              "336666",
              "339966",
              "33CC66",
              "33FF66",
              "660066",
              "663366",
              "666666",
              "669966",
              "66CC66",
              "66FF66",
              "000099",
              "003399",
              "006699",
              "009999",
              "00CC99",
              "00FF99",
              "330099",
              "333399",
              "336699",
              "339999",
              "33CC99",
              "33FF99",
              "660099",
              "663399",
              "666699",
              "669999",
              "66CC99",
              "66FF99",
              "0000CC",
              "0033CC",
              "0066CC",
              "0099CC",
              "00CCCC",
              "00FFCC",
              "3300CC",
              "3333CC",
              "3366CC",
              "3399CC",
              "33CCCC",
              "33FFCC",
              "6600CC",
              "6633CC",
              "6666CC",
              "6699CC",
              "66CCCC",
              "66FFCC",
              "0000FF",
              "0033FF",
              "0066FF",
              "0099FF",
              "00CCFF",
              "00FFFF",
              "3300FF",
              "3333FF",
              "3366FF",
              "3399FF",
              "33CCFF",
              "33FFFF",
              "6600FF",
              "6633FF",
              "6666FF",
              "6699FF",
              "66CCFF",
              "66FFFF",
              "990000",
              "993300",
              "996600",
              "999900",
              "99CC00",
              "99FF00",
              "CC0000",
              "CC3300",
              "CC6600",
              "CC9900",
              "CCCC00",
              "CCFF00",
              "FF0000",
              "FF3300",
              "FF6600",
              "FF9900",
              "FFCC00",
              "FFFF00",
              "990033",
              "993333",
              "996633",
              "999933",
              "99CC33",
              "99FF33",
              "CC0033",
              "CC3333",
              "CC6633",
              "CC9933",
              "CCCC33",
              "CCFF33",
              "FF0033",
              "FF3333",
              "FF6633",
              "FF9933",
              "FFCC33",
              "FFFF33",
              "990066",
              "993366",
              "996666",
              "999966",
              "99CC66",
              "99FF66",
              "CC0066",
              "CC3366",
              "CC6666",
              "CC9966",
              "CCCC66",
              "CCFF66",
              "FF0066",
              "FF3366",
              "FF6666",
              "FF9966",
              "FFCC66",
              "FFFF66",
              "990099",
              "993399",
              "996699",
              "999999",
              "99CC99",
              "99FF99",
              "CC0099",
              "CC3399",
              "CC6699",
              "CC9999",
              "CCCC99",
              "CCFF99",
              "FF0099",
              "FF3399",
              "FF6699",
              "FF9999",
              "FFCC99",
              "FFFF99",
              "9900CC",
              "9933CC",
              "9966CC",
              "9999CC",
              "99CCCC",
              "99FFCC",
              "CC00CC",
              "CC33CC",
              "CC66CC",
              "CC99CC",
              "CCCCCC",
              "CCFFCC",
              "FF00CC",
              "FF33CC",
              "FF66CC",
              "FF99CC",
              "FFCCCC",
              "FFFFCC",
              "9900FF",
              "9933FF",
              "9966FF",
              "9999FF",
              "99CCFF",
              "99FFFF",
              "CC00FF",
              "CC33FF",
              "CC66FF",
              "CC99FF",
              "CCCCFF",
              "CCFFFF",
              "FF00FF",
              "FF33FF",
              "FF66FF",
              "FF99FF",
              "FFCCFF",
              "FFFFFF",
            ],
            18
          ),
          l = e('<div class="_wColorPicker_bg"></div>').css({
            opacity: this.settings.opacity,
          }),
          r = e('<div class="_wColorPicker_content"></div>')
            .append(i)
            .append(C)
            .append(s)
            .append(e("<div></div>").css(o));
        return (
          (this.colorPicker = e('<div class="_wColorPicker_holder"></div>')
            .click(function (e) {
              e.stopPropagation();
            })
            .append(
              e('<div class="_wColorPicker_outer"></div>').append(
                e('<div class="_wColorPicker_inner"></div>').append(l).append(r)
              )
            )
            .addClass("_wColorPicker_" + this.settings.theme)),
          this.colorPicker
        );
      },
      appendColors: function (t, o, i) {
        var C = 1,
          s = this;
        for (index in o)
          t.append(
            e(
              '<div id="_wColorPicker_color_' +
                C +
                '" class="_wColorPicker_color _wColorPicker_color_' +
                C +
                '"></div>'
            )
              .css("backgroundColor", "#" + o[index])
              .click(function () {
                s.colorSelect(s, e(this).css("backgroundColor"));
              })
              .mouseout(function (t) {
                s.colorHoverOff(s, e(this));
              })
              .mouseover(function () {
                s.colorHoverOn(s, e(this));
              })
          ),
            C === i &&
              (t.append(
                e("<div></div>").css({
                  clear: "both",
                  height: 0,
                  fontSize: 0,
                  lineHeight: 0,
                  marginTop: -1,
                })
              ),
              (C = 0)),
            C++;
        return t;
      },
      colorSelect: function (e, t) {
        (t = e.toHex(t)),
          e.customTarget.css("backgroundColor", t),
          (e.currentColor = t),
          e.customInput.val(t),
          e.settings.onSelect && e.settings.onSelect.apply(this, [t]),
          e.buttonColor &&
            (e.buttonColor.css("backgroundColor", t), e.hidePalette(e));
      },
      colorHoverOn: function (e, t) {
        t.parent().children("active").removeClass("active"),
          t.addClass("active").next().addClass("activeLeft"),
          t.nextAll("." + t.attr("id") + ":first").addClass("activeTop");
        var o = e.toHex(t.css("backgroundColor"));
        e.customTarget.css("backgroundColor", o),
          e.customInput.val(o),
          e.settings.onMouseover && e.settings.onMouseover.apply(this, [o]);
      },
      colorHoverOff: function (e, t) {
        t.removeClass("active").next().removeClass("activeLeft"),
          t.nextAll("." + t.attr("id") + ":first").removeClass("activeTop"),
          e.customTarget.css("backgroundColor", e.currentColor),
          e.customInput.val(e.currentColor),
          e.settings.onMouseout &&
            e.settings.onMouseout.apply(this, [e.currentColor]);
      },
      appendToElement: function (t) {
        var o = this;
        if ("flat" === o.settings.mode) t.append(o.colorPicker);
        else {
          (o.paletteHolder = e(
            '<div class="_wColorPicker_paletteHolder"></div>'
          )
            .css({ position: "absolute", overflow: "hidden", width: 1e3 })
            .append(o.colorPicker)),
            (o.buttonColor = e(
              '<div class="_wColorPicker_buttonColor"></div>'
            ).css({
              width: o.settings.buttonSize,
              height: o.settings.buttonSize,
            }));
          var i = e('<div class="_wColorPicker_buttonHolder"></div>')
            .css({ position: "relative" })
            .append(
              e('<div class="_wColorPicker_buttonBorder"></div>').append(
                o.buttonColor
              )
            )
            .append(o.paletteHolder);
          t.append(i),
            (o.width = o.colorPicker.outerWidth(!0)),
            (o.height = o.colorPicker.outerHeight(!0)),
            o.paletteHolder.css({ width: o.width, height: o.height }).hide(),
            "fade" === o.settings.effect && o.paletteHolder.css({ opacity: 0 }),
            "hover" === o.settings.mode
              ? i.hover(
                  function (e) {
                    o.showPalette(e, o);
                  },
                  function (e) {
                    o.hidePalette(o);
                  }
                )
              : "click" === o.settings.mode &&
                (e(document).click(function () {
                  o.paletteHolder.hasClass("active") && o.hidePalette(o);
                }),
                i.click(function (e) {
                  e.stopPropagation(),
                    o.paletteHolder.hasClass("active")
                      ? o.hidePalette(o)
                      : o.showPalette(e, o);
                })),
            o.colorSelect(o, o.settings.initColor);
        }
      },
      showPalette: function (t, o) {
        var i = o.paletteHolder.parent().offset(),
          C = 0,
          s = o.paletteHolder.parent().outerHeight(!0);
        (o.slideTopToBottom = s),
          i.left - e(window).scrollLeft() + o.width > e(window).width() &&
            (C = -1 * (o.width - o.paletteHolder.parent().outerWidth(!0))),
          i.top - e(window).scrollTop() + o.height > e(window).height() &&
            ((o.slideTopToBottom = 0), (s = -1 * o.height)),
          o.paletteHolder.css({ left: C, top: s }),
          o.paletteHolder.addClass("active"),
          "slide" === o.settings.effect
            ? o.paletteHolder
                .stop(!0, !1)
                .css({ height: 0, top: 0 === o.slideTopToBottom ? 0 : s })
                .show()
                .animate({ height: o.height, top: s }, o.settings.showSpeed)
            : "fade" === o.settings.effect
            ? o.paletteHolder
                .stop(!0, !1)
                .show()
                .animate({ opacity: 1 }, o.settings.showSpeed)
            : o.paletteHolder.show();
      },
      hidePalette: function (e) {
        e.paletteHolder.hasClass("active") &&
          (e.paletteHolder.removeClass("active"),
          "slide" === e.settings.effect
            ? e.paletteHolder
                .stop(!0, !1)
                .animate(
                  {
                    height: 0,
                    top: 0 === e.slideTopToBottom ? 0 : e.slideTopToBottom,
                  },
                  e.settings.hideSpeed,
                  function () {
                    e.paletteHolder.hide();
                  }
                )
            : "fade" === e.settings.effect
            ? e.paletteHolder
                .stop(!0, !1)
                .animate({ opacity: 0 }, e.settings.hideSpeed, function () {
                  e.paletteHolder.hide();
                })
            : e.paletteHolder.hide());
      },
      toHex: function (e) {
        if ("rgba" === e.substring(0, 4)) o = "transparent";
        else if ("rgb" === e.substring(0, 3)) {
          var t = e
            .substring(4, e.length - 1)
            .replace(/\s/g, "")
            .split(",");
          for (i in t)
            (t[i] = parseInt(t[i]).toString(16)), "0" === t[i] && (t[i] = "00");
          var o = "#" + t.join("").toUpperCase();
        } else o = e;
        return o;
      },
      validHex: function (e) {
        return (
          "#" +
          e
            .replace(/[^0-9a-f]/gi, "")
            .substring(0, 6)
            .toUpperCase()
        );
      },
    });
})(jQuery);
