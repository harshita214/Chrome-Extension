/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */
!(function (t) {
  "use strict";
  var e = function (e, s) {
    (this.$element = t(e)),
      (this.options = t.extend({}, this.defaults(), s)),
      this.render();
  };
  (e.VERSION = "2.2.0"),
    (e.DEFAULTS = {
      on: "On",
      off: "Off",
      onstyle: "primary",
      offstyle: "default",
      size: "normal",
      style: "",
      width: null,
      height: null,
    }),
    (e.prototype.defaults = function () {
      return {
        on: this.$element.attr("data-on") || e.DEFAULTS.on,
        off: this.$element.attr("data-off") || e.DEFAULTS.off,
        onstyle: this.$element.attr("data-onstyle") || e.DEFAULTS.onstyle,
        offstyle: this.$element.attr("data-offstyle") || e.DEFAULTS.offstyle,
        size: this.$element.attr("data-size") || e.DEFAULTS.size,
        style: this.$element.attr("data-style") || e.DEFAULTS.style,
        width: this.$element.attr("data-width") || e.DEFAULTS.width,
        height: this.$element.attr("data-height") || e.DEFAULTS.height,
      };
    }),
    (e.prototype.render = function () {
      (this._onstyle = "btn-" + this.options.onstyle),
        (this._offstyle = "btn-" + this.options.offstyle);
      var e =
          "large" === this.options.size
            ? "btn-lg"
            : "small" === this.options.size
            ? "btn-sm"
            : "mini" === this.options.size
            ? "btn-xs"
            : "",
        s = t('<label class="btn">')
          .html(this.options.on)
          .addClass(this._onstyle + " " + e),
        o = t('<label class="btn">')
          .html(this.options.off)
          .addClass(this._offstyle + " " + e + " active"),
        i = t('<span class="toggle-handle btn btn-default">').addClass(e),
        n = t('<div class="toggle-group">').append(s, o, i),
        l = t('<div class="toggle btn" data-toggle="toggle">')
          .addClass(
            this.$element.prop("checked")
              ? this._onstyle
              : this._offstyle + " off"
          )
          .addClass(e)
          .addClass(this.options.style);
      this.$element.wrap(l),
        t.extend(this, {
          $toggle: this.$element.parent(),
          $toggleOn: s,
          $toggleOff: o,
          $toggleGroup: n,
        }),
        this.$toggle.append(n);
      var h =
          this.options.width ||
          Math.max(s.outerWidth(), o.outerWidth()) + i.outerWidth() / 2,
        a = this.options.height || Math.max(s.outerHeight(), o.outerHeight());
      s.addClass("toggle-on"),
        o.addClass("toggle-off"),
        this.$toggle.css({ width: h, height: a }),
        this.options.height &&
          (s.css("line-height", s.height() + "px"),
          o.css("line-height", o.height() + "px")),
        this.update(!0),
        this.trigger(!0);
    }),
    (e.prototype.toggle = function () {
      this.$element.prop("checked") ? this.off() : this.on();
    }),
    (e.prototype.on = function (t) {
      if (this.$element.prop("disabled")) return !1;
      this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle),
        this.$element.prop("checked", !0),
        t || this.trigger();
    }),
    (e.prototype.off = function (t) {
      if (this.$element.prop("disabled")) return !1;
      this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"),
        this.$element.prop("checked", !1),
        t || this.trigger();
    }),
    (e.prototype.enable = function () {
      this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1);
    }),
    (e.prototype.disable = function () {
      this.$toggle.attr("disabled", "disabled"),
        this.$element.prop("disabled", !0);
    }),
    (e.prototype.update = function (t) {
      this.$element.prop("disabled") ? this.disable() : this.enable(),
        this.$element.prop("checked") ? this.on(t) : this.off(t);
    }),
    (e.prototype.trigger = function (e) {
      this.$element.off("change.bs.toggle"),
        e || this.$element.change(),
        this.$element.on(
          "change.bs.toggle",
          t.proxy(function () {
            this.update();
          }, this)
        );
    }),
    (e.prototype.destroy = function () {
      this.$element.off("change.bs.toggle"),
        this.$toggleGroup.remove(),
        this.$element.removeData("bs.toggle"),
        this.$element.unwrap();
    });
  var s = t.fn.bootstrapToggle;
  (t.fn.bootstrapToggle = function (s) {
    return this.each(function () {
      var o = t(this),
        i = o.data("bs.toggle"),
        n = "object" == typeof s && s;
      i || o.data("bs.toggle", (i = new e(this, n))),
        "string" == typeof s && i[s] && i[s]();
    });
  }),
    (t.fn.bootstrapToggle.Constructor = e),
    (t.fn.toggle.noConflict = function () {
      return (t.fn.bootstrapToggle = s), this;
    }),
    t(function () {
      t("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle();
    }),
    t(document).on("click.bs.toggle", "div[data-toggle^=toggle]", function (e) {
      t(this).find("input[type=checkbox]").bootstrapToggle("toggle"),
        e.preventDefault();
    });
})(jQuery);
