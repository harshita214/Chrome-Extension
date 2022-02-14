!(function () {
  function t() {
    var t = {
      FRAMERATE: 30,
      MAX_VIRTUAL_PIXELS: 3e4,
      init: function (e) {
        var i = 0;
        (t.UniqueId = function () {
          return "canvg" + ++i;
        }),
          (t.Definitions = {}),
          (t.Styles = {}),
          (t.Animations = []),
          (t.Images = []),
          (t.ctx = e),
          (t.ViewPort = new (function () {
            (this.viewPorts = []),
              (this.Clear = function () {
                this.viewPorts = [];
              }),
              (this.SetCurrent = function (t, e) {
                this.viewPorts.push({ width: t, height: e });
              }),
              (this.RemoveCurrent = function () {
                this.viewPorts.pop();
              }),
              (this.Current = function () {
                return this.viewPorts[this.viewPorts.length - 1];
              }),
              (this.width = function () {
                return this.Current().width;
              }),
              (this.height = function () {
                return this.Current().height;
              }),
              (this.ComputeSize = function (t) {
                return null != t && "number" == typeof t
                  ? t
                  : "x" === t
                  ? this.width()
                  : "y" === t
                  ? this.height()
                  : Math.sqrt(
                      Math.pow(this.width(), 2) + Math.pow(this.height(), 2)
                    ) / Math.sqrt(2);
              });
          })());
      },
    };
    return (
      t.init(),
      (t.ImagesLoaded = function () {
        for (var e = 0; e < t.Images.length; e++)
          if (!t.Images[e].loaded) return !1;
        return !0;
      }),
      (t.trim = function (t) {
        return t.replace(/^\s+|\s+$/g, "");
      }),
      (t.compressSpaces = function (t) {
        return t.replace(/[\s\r\t\n]+/gm, " ");
      }),
      (t.ajax = function (t) {
        var e;
        return (e = window.XMLHttpRequest
          ? new XMLHttpRequest()
          : new ActiveXObject("Microsoft.XMLHTTP"))
          ? (e.open("GET", t, !1), e.send(null), e.responseText)
          : null;
      }),
      (t.parseXml = function (t) {
        if (window.DOMParser)
          return new DOMParser().parseFromString(t, "text/xml");
        t = t.replace(/<!DOCTYPE svg[^>]*>/, "");
        var e = new ActiveXObject("Microsoft.XMLDOM");
        return (e.async = "false"), e.loadXML(t), e;
      }),
      (t.Property = function (t, e) {
        (this.name = t), (this.value = e);
      }),
      (t.Property.prototype.getValue = function () {
        return this.value;
      }),
      (t.Property.prototype.hasValue = function () {
        return null != this.value && "" !== this.value;
      }),
      (t.Property.prototype.numValue = function () {
        if (!this.hasValue()) return 0;
        var t = parseFloat(this.value);
        return (this.value + "").match(/%$/) && (t /= 100), t;
      }),
      (t.Property.prototype.valueOrDefault = function (t) {
        return this.hasValue() ? this.value : t;
      }),
      (t.Property.prototype.numValueOrDefault = function (t) {
        return this.hasValue() ? this.numValue() : t;
      }),
      (t.Property.prototype.addOpacity = function (e) {
        var i = this.value;
        if (null != e && "" != e && "string" == typeof this.value) {
          var n = new RGBColor(this.value);
          n.ok &&
            (i = "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + e + ")");
        }
        return new t.Property(this.name, i);
      }),
      (t.Property.prototype.getDefinition = function () {
        var e = this.value.match(/#([^\)'"]+)/);
        return e && (e = e[1]), e || (e = this.value), t.Definitions[e];
      }),
      (t.Property.prototype.isUrlDefinition = function () {
        return 0 === this.value.indexOf("url(");
      }),
      (t.Property.prototype.getFillStyleDefinition = function (e, i) {
        var n = this.getDefinition();
        if (null != n && n.createGradient) return n.createGradient(t.ctx, e, i);
        if (null != n && n.createPattern) {
          if (n.getHrefAttribute().hasValue()) {
            var s = n.attribute("patternTransform");
            (n = n.getHrefAttribute().getDefinition()),
              s.hasValue() &&
                (n.attribute("patternTransform", !0).value = s.value);
          }
          return n.createPattern(t.ctx, e);
        }
        return null;
      }),
      (t.Property.prototype.getDPI = function (t) {
        return 96;
      }),
      (t.Property.prototype.getEM = function (e) {
        var i = 12,
          n = new t.Property("fontSize", t.Font.Parse(t.ctx.font).fontSize);
        return n.hasValue() && (i = n.toPixels(e)), i;
      }),
      (t.Property.prototype.getUnits = function () {
        return (this.value + "").replace(/[0-9\.\-]/g, "");
      }),
      (t.Property.prototype.toPixels = function (e, i) {
        if (!this.hasValue()) return 0;
        var n = this.value + "";
        if (n.match(/em$/)) return this.numValue() * this.getEM(e);
        if (n.match(/ex$/)) return (this.numValue() * this.getEM(e)) / 2;
        if (n.match(/px$/)) return this.numValue();
        if (n.match(/pt$/)) return this.numValue() * this.getDPI(e) * (1 / 72);
        if (n.match(/pc$/)) return 15 * this.numValue();
        if (n.match(/cm$/)) return (this.numValue() * this.getDPI(e)) / 2.54;
        if (n.match(/mm$/)) return (this.numValue() * this.getDPI(e)) / 25.4;
        if (n.match(/in$/)) return this.numValue() * this.getDPI(e);
        if (n.match(/%$/)) return this.numValue() * t.ViewPort.ComputeSize(e);
        var s = this.numValue();
        return i && s < 1 ? s * t.ViewPort.ComputeSize(e) : s;
      }),
      (t.Property.prototype.toMilliseconds = function () {
        if (!this.hasValue()) return 0;
        var t = this.value + "";
        return t.match(/s$/)
          ? 1e3 * this.numValue()
          : (t.match(/ms$/), this.numValue());
      }),
      (t.Property.prototype.toRadians = function () {
        if (!this.hasValue()) return 0;
        var t = this.value + "";
        return t.match(/deg$/)
          ? this.numValue() * (Math.PI / 180)
          : t.match(/grad$/)
          ? this.numValue() * (Math.PI / 200)
          : t.match(/rad$/)
          ? this.numValue()
          : this.numValue() * (Math.PI / 180);
      }),
      (t.Font = new (function () {
        (this.Styles = "normal|italic|oblique|inherit"),
          (this.Variants = "normal|small-caps|inherit"),
          (this.Weights =
            "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"),
          (this.CreateFont = function (e, i, n, s, a, r) {
            var o =
              null != r
                ? this.Parse(r)
                : this.CreateFont("", "", "", "", "", t.ctx.font);
            return {
              fontFamily: a || o.fontFamily,
              fontSize: s || o.fontSize,
              fontStyle: e || o.fontStyle,
              fontWeight: n || o.fontWeight,
              fontVariant: i || o.fontVariant,
              toString: function () {
                return [
                  this.fontStyle,
                  this.fontVariant,
                  this.fontWeight,
                  this.fontSize,
                  this.fontFamily,
                ].join(" ");
              },
            };
          });
        var e = this;
        this.Parse = function (i) {
          for (
            var n = {},
              s = t.trim(t.compressSpaces(i || "")).split(" "),
              a = {
                fontSize: !1,
                fontStyle: !1,
                fontWeight: !1,
                fontVariant: !1,
              },
              r = "",
              o = 0;
            o < s.length;
            o++
          )
            a.fontStyle || -1 == e.Styles.indexOf(s[o])
              ? a.fontVariant || -1 == e.Variants.indexOf(s[o])
                ? a.fontWeight || -1 == e.Weights.indexOf(s[o])
                  ? a.fontSize
                    ? "inherit" != s[o] && (r += s[o])
                    : ("inherit" != s[o] && (n.fontSize = s[o].split("/")[0]),
                      (a.fontStyle =
                        a.fontVariant =
                        a.fontWeight =
                        a.fontSize =
                          !0))
                  : ("inherit" != s[o] && (n.fontWeight = s[o]),
                    (a.fontStyle = a.fontVariant = a.fontWeight = !0))
                : ("inherit" != s[o] && (n.fontVariant = s[o]),
                  (a.fontStyle = a.fontVariant = !0))
              : ("inherit" != s[o] && (n.fontStyle = s[o]), (a.fontStyle = !0));
          return "" != r && (n.fontFamily = r), n;
        };
      })()),
      (t.ToNumberArray = function (e) {
        for (
          var i = t
              .trim(t.compressSpaces((e || "").replace(/,/g, " ")))
              .split(" "),
            n = 0;
          n < i.length;
          n++
        )
          i[n] = parseFloat(i[n]);
        return i;
      }),
      (t.Point = function (t, e) {
        (this.x = t), (this.y = e);
      }),
      (t.Point.prototype.angleTo = function (t) {
        return Math.atan2(t.y - this.y, t.x - this.x);
      }),
      (t.Point.prototype.applyTransform = function (t) {
        var e = this.x * t[0] + this.y * t[2] + t[4],
          i = this.x * t[1] + this.y * t[3] + t[5];
        (this.x = e), (this.y = i);
      }),
      (t.CreatePoint = function (e) {
        var i = t.ToNumberArray(e);
        return new t.Point(i[0], i[1]);
      }),
      (t.CreatePath = function (e) {
        for (var i = t.ToNumberArray(e), n = [], s = 0; s < i.length; s += 2)
          n.push(new t.Point(i[s], i[s + 1]));
        return n;
      }),
      (t.BoundingBox = function (t, e, n, s) {
        (this.x1 = Number.NaN),
          (this.y1 = Number.NaN),
          (this.x2 = Number.NaN),
          (this.y2 = Number.NaN),
          (this.x = function () {
            return this.x1;
          }),
          (this.y = function () {
            return this.y1;
          }),
          (this.width = function () {
            return this.x2 - this.x1;
          }),
          (this.height = function () {
            return this.y2 - this.y1;
          }),
          (this.addPoint = function (t, e) {
            null != t &&
              ((isNaN(this.x1) || isNaN(this.x2)) &&
                ((this.x1 = t), (this.x2 = t)),
              t < this.x1 && (this.x1 = t),
              t > this.x2 && (this.x2 = t)),
              null != e &&
                ((isNaN(this.y1) || isNaN(this.y2)) &&
                  ((this.y1 = e), (this.y2 = e)),
                e < this.y1 && (this.y1 = e),
                e > this.y2 && (this.y2 = e));
          }),
          (this.addX = function (t) {
            this.addPoint(t, null);
          }),
          (this.addY = function (t) {
            this.addPoint(null, t);
          }),
          (this.addBoundingBox = function (t) {
            this.addPoint(t.x1, t.y1), this.addPoint(t.x2, t.y2);
          }),
          (this.addQuadraticCurve = function (t, e, i, n, s, a) {
            var r = t + (2 / 3) * (i - t),
              o = e + (2 / 3) * (n - e),
              l = r + (1 / 3) * (s - t),
              h = o + (1 / 3) * (a - e);
            this.addBezierCurve(t, e, r, l, o, h, s, a);
          }),
          (this.addBezierCurve = function (t, e, n, s, a, r, o, l) {
            var h = [t, e],
              u = [n, s],
              c = [a, r],
              f = [o, l];
            for (
              this.addPoint(h[0], h[1]), this.addPoint(f[0], f[1]), i = 0;
              i <= 1;
              i++
            ) {
              var m = function (t) {
                  return (
                    Math.pow(1 - t, 3) * h[i] +
                    3 * Math.pow(1 - t, 2) * t * u[i] +
                    3 * (1 - t) * Math.pow(t, 2) * c[i] +
                    Math.pow(t, 3) * f[i]
                  );
                },
                p = 6 * h[i] - 12 * u[i] + 6 * c[i],
                d = -3 * h[i] + 9 * u[i] - 9 * c[i] + 3 * f[i],
                y = 3 * u[i] - 3 * h[i];
              if (0 !== d) {
                var v = Math.pow(p, 2) - 4 * y * d;
                if (!(v < 0)) {
                  var g = (-p + Math.sqrt(v)) / (2 * d);
                  0 < g &&
                    g < 1 &&
                    (0 === i && this.addX(m(g)), 1 === i && this.addY(m(g)));
                  var x = (-p - Math.sqrt(v)) / (2 * d);
                  0 < x &&
                    x < 1 &&
                    (0 === i && this.addX(m(x)), 1 === i && this.addY(m(x)));
                }
              } else {
                if (0 === p) continue;
                var b = -y / p;
                0 < b &&
                  b < 1 &&
                  (0 === i && this.addX(m(b)), 1 === i && this.addY(m(b)));
              }
            }
          }),
          (this.isPointInBox = function (t, e) {
            return this.x1 <= t && t <= this.x2 && this.y1 <= e && e <= this.y2;
          }),
          this.addPoint(t, e),
          this.addPoint(n, s);
      }),
      (t.Transform = function (e) {
        var i = this;
        (this.Type = {}),
          (this.Type.translate = function (e) {
            (this.p = t.CreatePoint(e)),
              (this.apply = function (t) {
                t.translate(this.p.x || 0, this.p.y || 0);
              }),
              (this.unapply = function (t) {
                t.translate(-1 * this.p.x || 0, -1 * this.p.y || 0);
              }),
              (this.applyToPoint = function (t) {
                t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]);
              });
          }),
          (this.Type.rotate = function (e) {
            var i = t.ToNumberArray(e);
            (this.angle = new t.Property("angle", i[0])),
              (this.cx = i[1] || 0),
              (this.cy = i[2] || 0),
              (this.apply = function (t) {
                t.translate(this.cx, this.cy),
                  t.rotate(this.angle.toRadians()),
                  t.translate(-this.cx, -this.cy);
              }),
              (this.unapply = function (t) {
                t.translate(this.cx, this.cy),
                  t.rotate(-1 * this.angle.toRadians()),
                  t.translate(-this.cx, -this.cy);
              }),
              (this.applyToPoint = function (t) {
                var e = this.angle.toRadians();
                t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]),
                  t.applyTransform([
                    Math.cos(e),
                    Math.sin(e),
                    -Math.sin(e),
                    Math.cos(e),
                    0,
                    0,
                  ]),
                  t.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    -this.p.x || 0,
                    -this.p.y || 0,
                  ]);
              });
          }),
          (this.Type.scale = function (e) {
            (this.p = t.CreatePoint(e)),
              (this.apply = function (t) {
                t.scale(this.p.x || 1, this.p.y || this.p.x || 1);
              }),
              (this.unapply = function (t) {
                t.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1);
              }),
              (this.applyToPoint = function (t) {
                t.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0]);
              });
          }),
          (this.Type.matrix = function (e) {
            (this.m = t.ToNumberArray(e)),
              (this.apply = function (t) {
                t.transform(
                  this.m[0],
                  this.m[1],
                  this.m[2],
                  this.m[3],
                  this.m[4],
                  this.m[5]
                );
              }),
              (this.applyToPoint = function (t) {
                t.applyTransform(this.m);
              });
          }),
          (this.Type.SkewBase = function (e) {
            (this.base = i.Type.matrix),
              this.base(e),
              (this.angle = new t.Property("angle", e));
          }),
          (this.Type.SkewBase.prototype = new this.Type.matrix()),
          (this.Type.skewX = function (t) {
            (this.base = i.Type.SkewBase),
              this.base(t),
              (this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]);
          }),
          (this.Type.skewX.prototype = new this.Type.SkewBase()),
          (this.Type.skewY = function (t) {
            (this.base = i.Type.SkewBase),
              this.base(t),
              (this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]);
          }),
          (this.Type.skewY.prototype = new this.Type.SkewBase()),
          (this.transforms = []),
          (this.apply = function (t) {
            for (var e = 0; e < this.transforms.length; e++)
              this.transforms[e].apply(t);
          }),
          (this.unapply = function (t) {
            for (var e = this.transforms.length - 1; e >= 0; e--)
              this.transforms[e].unapply(t);
          }),
          (this.applyToPoint = function (t) {
            for (var e = 0; e < this.transforms.length; e++)
              this.transforms[e].applyToPoint(t);
          });
        for (
          var n = t
              .trim(t.compressSpaces(e))
              .replace(/\)(\s?,\s?)/g, ") ")
              .split(/\s(?=[a-z])/),
            s = 0;
          s < n.length;
          s++
        ) {
          var a = t.trim(n[s].split("(")[0]),
            r = n[s].split("(")[1].replace(")", ""),
            o = new this.Type[a](r);
          (o.type = a), this.transforms.push(o);
        }
      }),
      (t.AspectRatio = function (e, i, n, s, a, r, o, l, h, u) {
        var c =
            (i = (i = t.compressSpaces(i)).replace(/^defer\s/, "")).split(
              " "
            )[0] || "xMidYMid",
          f = i.split(" ")[1] || "meet",
          m = n / s,
          p = a / r,
          d = Math.min(m, p),
          y = Math.max(m, p);
        "meet" === f && ((s *= d), (r *= d)),
          "slice" === f && ((s *= y), (r *= y)),
          (h = new t.Property("refX", h)),
          (u = new t.Property("refY", u)),
          h.hasValue() && u.hasValue()
            ? e.translate(-d * h.toPixels("x"), -d * u.toPixels("y"))
            : (c.match(/^xMid/) &&
                (("meet" === f && d === p) || ("slice" === f && y === p)) &&
                e.translate(n / 2 - s / 2, 0),
              c.match(/YMid$/) &&
                (("meet" === f && d === m) || ("slice" === f && y === m)) &&
                e.translate(0, a / 2 - r / 2),
              c.match(/^xMax/) &&
                (("meet" === f && d === p) || ("slice" === f && y === p)) &&
                e.translate(n - s, 0),
              c.match(/YMax$/) &&
                (("meet" === f && d === m) || ("slice" === f && y === m)) &&
                e.translate(0, a - r)),
          "none" === c
            ? e.scale(m, p)
            : "meet" === f
            ? e.scale(d, d)
            : "slice" === f && e.scale(y, y),
          e.translate(null === o ? 0 : -o, null === l ? 0 : -l);
      }),
      (t.Element = {}),
      (t.EmptyProperty = new t.Property("EMPTY", "")),
      (t.Element.ElementBase = function (e) {
        if (
          ((this.attributes = {}),
          (this.styles = {}),
          (this.children = []),
          (this.attribute = function (e, i) {
            var n = this.attributes[e];
            return null != n
              ? n
              : (!0 === i &&
                  ((n = new t.Property(e, "")), (this.attributes[e] = n)),
                n || t.EmptyProperty);
          }),
          (this.getHrefAttribute = function () {
            for (var e in this.attributes)
              if (e.match(/:href$/)) return this.attributes[e];
            return t.EmptyProperty;
          }),
          (this.style = function (e, i) {
            var n = this.styles[e];
            if (null != n) return n;
            var s = this.attribute(e);
            if (null != s && s.hasValue()) return (this.styles[e] = s), s;
            var a = this.parent;
            if (null != a) {
              var r = a.style(e);
              if (null != r && r.hasValue()) return r;
            }
            return (
              !0 === i && ((n = new t.Property(e, "")), (this.styles[e] = n)),
              n || t.EmptyProperty
            );
          }),
          (this.render = function (t) {
            if (
              "none" !== this.style("display").value &&
              "hidden" !== this.attribute("visibility").value
            ) {
              if ((t.save(), this.attribute("mask").hasValue())) {
                var e = this.attribute("mask").getDefinition();
                null != e && e.apply(t, this);
              } else if (this.style("filter").hasValue()) {
                var i = this.style("filter").getDefinition();
                null != i && i.apply(t, this);
              } else
                this.setContext(t),
                  this.renderChildren(t),
                  this.clearContext(t);
              t.restore();
            }
          }),
          (this.setContext = function (t) {}),
          (this.clearContext = function (t) {}),
          (this.renderChildren = function (t) {
            for (var e = 0; e < this.children.length; e++)
              this.children[e].render(t);
          }),
          (this.addChild = function (e, i) {
            var n = e;
            i && (n = t.CreateElement(e)),
              (n.parent = this),
              this.children.push(n);
          }),
          null != e && 1 === e.nodeType)
        ) {
          for (var i = 0; i < e.childNodes.length; i++) {
            var n = e.childNodes[i];
            if (
              (1 === n.nodeType && this.addChild(n, !0),
              this.captureTextNodes && 3 === n.nodeType)
            ) {
              var s = n.nodeValue || n.text || "";
              "" != t.trim(t.compressSpaces(s)) &&
                this.addChild(new t.Element.tspan(n), !1);
            }
          }
          for (i = 0; i < e.attributes.length; i++) {
            var a = e.attributes[i];
            this.attributes[a.nodeName] = new t.Property(
              a.nodeName,
              a.nodeValue
            );
          }
          if (null != (h = t.Styles[e.nodeName]))
            for (var r in h) this.styles[r] = h[r];
          if (this.attribute("class").hasValue())
            for (
              var o = t
                  .compressSpaces(this.attribute("class").value)
                  .split(" "),
                l = 0;
              l < o.length;
              l++
            ) {
              if (null != (h = t.Styles["." + o[l]]))
                for (var r in h) this.styles[r] = h[r];
              if (null != (h = t.Styles[e.nodeName + "." + o[l]]))
                for (var r in h) this.styles[r] = h[r];
            }
          if (this.attribute("id").hasValue())
            if (null != (h = t.Styles["#" + this.attribute("id").value]))
              for (var r in h) this.styles[r] = h[r];
          if (this.attribute("style").hasValue()) {
            var h = this.attribute("style").value.split(";");
            for (i = 0; i < h.length; i++)
              if ("" != t.trim(h[i])) {
                var u = h[i].split(":"),
                  c = ((r = t.trim(u[0])), t.trim(u[1]));
                this.styles[r] = new t.Property(r, c);
              }
          }
          this.attribute("id").hasValue() &&
            null === t.Definitions[this.attribute("id").value] &&
            (t.Definitions[this.attribute("id").value] = this);
        }
      }),
      (t.Element.RenderedElementBase = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.setContext = function (e) {
            var i;
            if (this.style("fill").isUrlDefinition())
              null !=
                (i = this.style("fill").getFillStyleDefinition(
                  this,
                  this.style("fill-opacity")
                )) && (e.fillStyle = i);
            else if (this.style("fill").hasValue()) {
              var n;
              "currentColor" === (n = this.style("fill")).value &&
                (n.value = this.style("color").value),
                (e.fillStyle = "none" === n.value ? "rgba(0,0,0,0)" : n.value);
            }
            this.style("fill-opacity").hasValue() &&
              ((n = (n = new t.Property("fill", e.fillStyle)).addOpacity(
                this.style("fill-opacity").value
              )),
              (e.fillStyle = n.value));
            if (this.style("stroke").isUrlDefinition())
              null !=
                (i = this.style("stroke").getFillStyleDefinition(
                  this,
                  this.style("stroke-opacity")
                )) && (e.strokeStyle = i);
            else if (this.style("stroke").hasValue()) {
              var s;
              "currentColor" === (s = this.style("stroke")).value &&
                (s.value = this.style("color").value),
                (e.strokeStyle =
                  "none" === s.value ? "rgba(0,0,0,0)" : s.value);
            }
            this.style("stroke-opacity").hasValue() &&
              ((s = (s = new t.Property("stroke", e.strokeStyle)).addOpacity(
                this.style("stroke-opacity").value
              )),
              (e.strokeStyle = s.value));
            if (this.style("stroke-width").hasValue()) {
              var a = this.style("stroke-width").toPixels();
              e.lineWidth = 0 === a ? 0.001 : a;
            }
            if (
              (this.style("stroke-linecap").hasValue() &&
                (e.lineCap = this.style("stroke-linecap").value),
              this.style("stroke-linejoin").hasValue() &&
                (e.lineJoin = this.style("stroke-linejoin").value),
              this.style("stroke-miterlimit").hasValue() &&
                (e.miterLimit = this.style("stroke-miterlimit").value),
              this.style("stroke-dasharray").hasValue() &&
                "none" != this.style("stroke-dasharray").value)
            ) {
              var r = t.ToNumberArray(this.style("stroke-dasharray").value);
              void 0 !== e.setLineDash
                ? e.setLineDash(r)
                : void 0 !== e.webkitLineDash
                ? (e.webkitLineDash = r)
                : void 0 !== e.mozDash && (e.mozDash = r);
              var o = this.style("stroke-dashoffset").numValueOrDefault(1);
              void 0 !== e.lineDashOffset
                ? (e.lineDashOffset = o)
                : void 0 !== e.webkitLineDashOffset
                ? (e.webkitLineDashOffset = o)
                : void 0 !== e.mozDashOffset && (e.mozDashOffset = o);
            }
            (void 0 !== e.font &&
              (e.font = t.Font.CreateFont(
                this.style("font-style").value,
                this.style("font-variant").value,
                this.style("font-weight").value,
                this.style("font-size").hasValue()
                  ? this.style("font-size").toPixels() + "px"
                  : "",
                this.style("font-family").value
              ).toString()),
            this.attribute("transform").hasValue()) &&
              new t.Transform(this.attribute("transform").value).apply(e);
            if (this.style("clip-path").hasValue()) {
              var l = this.style("clip-path").getDefinition();
              null != l && l.apply(e);
            }
            this.style("opacity").hasValue() &&
              (e.globalAlpha = this.style("opacity").numValue());
          });
      }),
      (t.Element.RenderedElementBase.prototype = new t.Element.ElementBase()),
      (t.Element.PathElementBase = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.path = function (e) {
            return null != e && e.beginPath(), new t.BoundingBox();
          }),
          (this.renderChildren = function (e) {
            this.path(e),
              t.Mouse.checkPath(this, e),
              "" != e.fillStyle &&
                ("inherit" !=
                this.attribute("fill-rule").valueOrDefault("inherit")
                  ? e.fill(this.attribute("fill-rule").value)
                  : e.fill()),
              "" != e.strokeStyle && e.stroke();
            var i = this.getMarkers();
            if (null != i) {
              if (this.style("marker-start").isUrlDefinition())
                (n = this.style("marker-start").getDefinition()).render(
                  e,
                  i[0][0],
                  i[0][1]
                );
              if (this.style("marker-mid").isUrlDefinition())
                for (
                  var n = this.style("marker-mid").getDefinition(), s = 1;
                  s < i.length - 1;
                  s++
                )
                  n.render(e, i[s][0], i[s][1]);
              if (this.style("marker-end").isUrlDefinition())
                (n = this.style("marker-end").getDefinition()).render(
                  e,
                  i[i.length - 1][0],
                  i[i.length - 1][1]
                );
            }
          }),
          (this.getBoundingBox = function () {
            return this.path();
          }),
          (this.getMarkers = function () {
            return null;
          });
      }),
      (t.Element.PathElementBase.prototype =
        new t.Element.RenderedElementBase()),
      (t.Element.svg = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.baseClearContext = this.clearContext),
          (this.clearContext = function (e) {
            this.baseClearContext(e), t.ViewPort.RemoveCurrent();
          }),
          (this.baseSetContext = this.setContext),
          (this.setContext = function (e) {
            (e.strokeStyle = "rgba(0,0,0,0)"),
              (e.lineCap = "butt"),
              (e.lineJoin = "miter"),
              (e.miterLimit = 4),
              this.baseSetContext(e),
              this.attribute("x").hasValue() ||
                (this.attribute("x", !0).value = 0),
              this.attribute("y").hasValue() ||
                (this.attribute("y", !0).value = 0),
              e.translate(
                this.attribute("x").toPixels("x"),
                this.attribute("y").toPixels("y")
              );
            var i = t.ViewPort.width(),
              n = t.ViewPort.height();
            if (
              (this.attribute("width").hasValue() ||
                (this.attribute("width", !0).value = "100%"),
              this.attribute("height").hasValue() ||
                (this.attribute("height", !0).value = "100%"),
              void 0 === this.root)
            ) {
              (i = this.attribute("width").toPixels("x")),
                (n = this.attribute("height").toPixels("y"));
              var s = 0,
                a = 0;
              this.attribute("refX").hasValue() &&
                this.attribute("refY").hasValue() &&
                ((s = -this.attribute("refX").toPixels("x")),
                (a = -this.attribute("refY").toPixels("y"))),
                e.beginPath(),
                e.moveTo(s, a),
                e.lineTo(i, a),
                e.lineTo(i, n),
                e.lineTo(s, n),
                e.closePath(),
                e.clip();
            }
            if (
              (t.ViewPort.SetCurrent(i, n),
              this.attribute("viewBox").hasValue())
            ) {
              var r = t.ToNumberArray(this.attribute("viewBox").value),
                o = r[0],
                l = r[1];
              (i = r[2]),
                (n = r[3]),
                t.AspectRatio(
                  e,
                  this.attribute("preserveAspectRatio").value,
                  t.ViewPort.width(),
                  i,
                  t.ViewPort.height(),
                  n,
                  o,
                  l,
                  this.attribute("refX").value,
                  this.attribute("refY").value
                ),
                t.ViewPort.RemoveCurrent(),
                t.ViewPort.SetCurrent(r[2], r[3]);
            }
          });
      }),
      (t.Element.svg.prototype = new t.Element.RenderedElementBase()),
      (t.Element.rect = function (e) {
        (this.base = t.Element.PathElementBase),
          this.base(e),
          (this.path = function (e) {
            var i = this.attribute("x").toPixels("x"),
              n = this.attribute("y").toPixels("y"),
              s = this.attribute("width").toPixels("x"),
              a = this.attribute("height").toPixels("y"),
              r = this.attribute("rx").toPixels("x"),
              o = this.attribute("ry").toPixels("y");
            return (
              this.attribute("rx").hasValue() &&
                !this.attribute("ry").hasValue() &&
                (o = r),
              this.attribute("ry").hasValue() &&
                !this.attribute("rx").hasValue() &&
                (r = o),
              (r = Math.min(r, s / 2)),
              (o = Math.min(o, a / 2)),
              null != e &&
                (e.beginPath(),
                e.moveTo(i + r, n),
                e.lineTo(i + s - r, n),
                e.quadraticCurveTo(i + s, n, i + s, n + o),
                e.lineTo(i + s, n + a - o),
                e.quadraticCurveTo(i + s, n + a, i + s - r, n + a),
                e.lineTo(i + r, n + a),
                e.quadraticCurveTo(i, n + a, i, n + a - o),
                e.lineTo(i, n + o),
                e.quadraticCurveTo(i, n, i + r, n),
                e.closePath()),
              new t.BoundingBox(i, n, i + s, n + a)
            );
          });
      }),
      (t.Element.rect.prototype = new t.Element.PathElementBase()),
      (t.Element.circle = function (e) {
        (this.base = t.Element.PathElementBase),
          this.base(e),
          (this.path = function (e) {
            var i = this.attribute("cx").toPixels("x"),
              n = this.attribute("cy").toPixels("y"),
              s = this.attribute("r").toPixels();
            return (
              null != e &&
                (e.beginPath(),
                e.arc(i, n, s, 0, 2 * Math.PI, !0),
                e.closePath()),
              new t.BoundingBox(i - s, n - s, i + s, n + s)
            );
          });
      }),
      (t.Element.circle.prototype = new t.Element.PathElementBase()),
      (t.Element.ellipse = function (e) {
        (this.base = t.Element.PathElementBase),
          this.base(e),
          (this.path = function (e) {
            var i = ((Math.sqrt(2) - 1) / 3) * 4,
              n = this.attribute("rx").toPixels("x"),
              s = this.attribute("ry").toPixels("y"),
              a = this.attribute("cx").toPixels("x"),
              r = this.attribute("cy").toPixels("y");
            return (
              null != e &&
                (e.beginPath(),
                e.moveTo(a, r - s),
                e.bezierCurveTo(a + i * n, r - s, a + n, r - i * s, a + n, r),
                e.bezierCurveTo(a + n, r + i * s, a + i * n, r + s, a, r + s),
                e.bezierCurveTo(a - i * n, r + s, a - n, r + i * s, a - n, r),
                e.bezierCurveTo(a - n, r - i * s, a - i * n, r - s, a, r - s),
                e.closePath()),
              new t.BoundingBox(a - n, r - s, a + n, r + s)
            );
          });
      }),
      (t.Element.ellipse.prototype = new t.Element.PathElementBase()),
      (t.Element.line = function (e) {
        (this.base = t.Element.PathElementBase),
          this.base(e),
          (this.getPoints = function () {
            return [
              new t.Point(
                this.attribute("x1").toPixels("x"),
                this.attribute("y1").toPixels("y")
              ),
              new t.Point(
                this.attribute("x2").toPixels("x"),
                this.attribute("y2").toPixels("y")
              ),
            ];
          }),
          (this.path = function (e) {
            var i = this.getPoints();
            return (
              null != e &&
                (e.beginPath(),
                e.moveTo(i[0].x, i[0].y),
                e.lineTo(i[1].x, i[1].y)),
              new t.BoundingBox(i[0].x, i[0].y, i[1].x, i[1].y)
            );
          }),
          (this.getMarkers = function () {
            var t = this.getPoints(),
              e = t[0].angleTo(t[1]);
            return [
              [t[0], e],
              [t[1], e],
            ];
          });
      }),
      (t.Element.line.prototype = new t.Element.PathElementBase()),
      (t.Element.polyline = function (e) {
        (this.base = t.Element.PathElementBase),
          this.base(e),
          (this.points = t.CreatePath(this.attribute("points").value)),
          (this.path = function (e) {
            var i = new t.BoundingBox(this.points[0].x, this.points[0].y);
            null != e &&
              (e.beginPath(), e.moveTo(this.points[0].x, this.points[0].y));
            for (var n = 1; n < this.points.length; n++)
              i.addPoint(this.points[n].x, this.points[n].y),
                null != e && e.lineTo(this.points[n].x, this.points[n].y);
            return i;
          }),
          (this.getMarkers = function () {
            for (var t = [], e = 0; e < this.points.length - 1; e++)
              t.push([
                this.points[e],
                this.points[e].angleTo(this.points[e + 1]),
              ]);
            return (
              t.push([this.points[this.points.length - 1], t[t.length - 1][1]]),
              t
            );
          });
      }),
      (t.Element.polyline.prototype = new t.Element.PathElementBase()),
      (t.Element.polygon = function (e) {
        (this.base = t.Element.polyline),
          this.base(e),
          (this.basePath = this.path),
          (this.path = function (t) {
            var e = this.basePath(t);
            return (
              null != t &&
                (t.lineTo(this.points[0].x, this.points[0].y), t.closePath()),
              e
            );
          });
      }),
      (t.Element.polygon.prototype = new t.Element.polyline()),
      (t.Element.path = function (e) {
        (this.base = t.Element.PathElementBase), this.base(e);
        var i = this.attribute("d").value;
        (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/,/gm, " ")).replace(
          /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
          "$1 $2"
        )).replace(
          /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
          "$1 $2"
        )).replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2")).replace(
          /([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,
          "$1 $2"
        )).replace(/([0-9])([+\-])/gm, "$1 $2")).replace(
          /(\.[0-9]*)(\.)/gm,
          "$1 $2"
        )).replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ")),
          (i = t.compressSpaces(i)),
          (i = t.trim(i)),
          (this.PathParser = new (function (e) {
            (this.tokens = e.split(" ")),
              (this.reset = function () {
                (this.i = -1),
                  (this.command = ""),
                  (this.previousCommand = ""),
                  (this.start = new t.Point(0, 0)),
                  (this.control = new t.Point(0, 0)),
                  (this.current = new t.Point(0, 0)),
                  (this.points = []),
                  (this.angles = []);
              }),
              (this.isEnd = function () {
                return this.i >= this.tokens.length - 1;
              }),
              (this.isCommandOrEnd = function () {
                return (
                  !!this.isEnd() ||
                  null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                );
              }),
              (this.isRelativeCommand = function () {
                switch (this.command) {
                  case "m":
                  case "l":
                  case "h":
                  case "v":
                  case "c":
                  case "s":
                  case "q":
                  case "t":
                  case "a":
                  case "z":
                    return !0;
                }
                return !1;
              }),
              (this.getToken = function () {
                return this.i++, this.tokens[this.i];
              }),
              (this.getScalar = function () {
                return parseFloat(this.getToken());
              }),
              (this.nextCommand = function () {
                (this.previousCommand = this.command),
                  (this.command = this.getToken());
              }),
              (this.getPoint = function () {
                var e = new t.Point(this.getScalar(), this.getScalar());
                return this.makeAbsolute(e);
              }),
              (this.getAsControlPoint = function () {
                var t = this.getPoint();
                return (this.control = t), t;
              }),
              (this.getAsCurrentPoint = function () {
                var t = this.getPoint();
                return (this.current = t), t;
              }),
              (this.getReflectedControlPoint = function () {
                return "c" != this.previousCommand.toLowerCase() &&
                  "s" != this.previousCommand.toLowerCase() &&
                  "q" != this.previousCommand.toLowerCase() &&
                  "t" != this.previousCommand.toLowerCase()
                  ? this.current
                  : new t.Point(
                      2 * this.current.x - this.control.x,
                      2 * this.current.y - this.control.y
                    );
              }),
              (this.makeAbsolute = function (t) {
                return (
                  this.isRelativeCommand() &&
                    ((t.x += this.current.x), (t.y += this.current.y)),
                  t
                );
              }),
              (this.addMarker = function (t, e, i) {
                null != i &&
                  this.angles.length > 0 &&
                  null === this.angles[this.angles.length - 1] &&
                  (this.angles[this.angles.length - 1] =
                    this.points[this.points.length - 1].angleTo(i)),
                  this.addMarkerAngle(t, null === e ? null : e.angleTo(t));
              }),
              (this.addMarkerAngle = function (t, e) {
                this.points.push(t), this.angles.push(e);
              }),
              (this.getMarkerPoints = function () {
                return this.points;
              }),
              (this.getMarkerAngles = function () {
                for (var t = 0; t < this.angles.length; t++)
                  if (null === this.angles[t])
                    for (var e = t + 1; e < this.angles.length; e++)
                      if (null != this.angles[e]) {
                        this.angles[t] = this.angles[e];
                        break;
                      }
                return this.angles;
              });
          })(i)),
          (this.path = function (e) {
            var i = this.PathParser;
            i.reset();
            var n = new t.BoundingBox();
            for (null != e && e.beginPath(); !i.isEnd(); )
              switch ((i.nextCommand(), i.command)) {
                case "M":
                case "m":
                  var s = i.getAsCurrentPoint();
                  for (
                    i.addMarker(s),
                      n.addPoint(s.x, s.y),
                      null != e && e.moveTo(s.x, s.y),
                      i.start = i.current;
                    !i.isCommandOrEnd();

                  ) {
                    s = i.getAsCurrentPoint();
                    i.addMarker(s, i.start),
                      n.addPoint(s.x, s.y),
                      null != e && e.lineTo(s.x, s.y);
                  }
                  break;
                case "L":
                case "l":
                  for (; !i.isCommandOrEnd(); ) {
                    var a = i.current;
                    s = i.getAsCurrentPoint();
                    i.addMarker(s, a),
                      n.addPoint(s.x, s.y),
                      null != e && e.lineTo(s.x, s.y);
                  }
                  break;
                case "H":
                case "h":
                  for (; !i.isCommandOrEnd(); ) {
                    var r = new t.Point(
                      (i.isRelativeCommand() ? i.current.x : 0) + i.getScalar(),
                      i.current.y
                    );
                    i.addMarker(r, i.current),
                      (i.current = r),
                      n.addPoint(i.current.x, i.current.y),
                      null != e && e.lineTo(i.current.x, i.current.y);
                  }
                  break;
                case "V":
                case "v":
                  for (; !i.isCommandOrEnd(); ) {
                    r = new t.Point(
                      i.current.x,
                      (i.isRelativeCommand() ? i.current.y : 0) + i.getScalar()
                    );
                    i.addMarker(r, i.current),
                      (i.current = r),
                      n.addPoint(i.current.x, i.current.y),
                      null != e && e.lineTo(i.current.x, i.current.y);
                  }
                  break;
                case "C":
                case "c":
                  for (; !i.isCommandOrEnd(); ) {
                    var o = i.current,
                      l = i.getPoint(),
                      h = i.getAsControlPoint(),
                      u = i.getAsCurrentPoint();
                    i.addMarker(u, h, l),
                      n.addBezierCurve(o.x, o.y, l.x, l.y, h.x, h.y, u.x, u.y),
                      null != e &&
                        e.bezierCurveTo(l.x, l.y, h.x, h.y, u.x, u.y);
                  }
                  break;
                case "S":
                case "s":
                  for (; !i.isCommandOrEnd(); ) {
                    (o = i.current),
                      (l = i.getReflectedControlPoint()),
                      (h = i.getAsControlPoint()),
                      (u = i.getAsCurrentPoint());
                    i.addMarker(u, h, l),
                      n.addBezierCurve(o.x, o.y, l.x, l.y, h.x, h.y, u.x, u.y),
                      null != e &&
                        e.bezierCurveTo(l.x, l.y, h.x, h.y, u.x, u.y);
                  }
                  break;
                case "Q":
                case "q":
                  for (; !i.isCommandOrEnd(); ) {
                    (o = i.current),
                      (h = i.getAsControlPoint()),
                      (u = i.getAsCurrentPoint());
                    i.addMarker(u, h, h),
                      n.addQuadraticCurve(o.x, o.y, h.x, h.y, u.x, u.y),
                      null != e && e.quadraticCurveTo(h.x, h.y, u.x, u.y);
                  }
                  break;
                case "T":
                case "t":
                  for (; !i.isCommandOrEnd(); ) {
                    (o = i.current), (h = i.getReflectedControlPoint());
                    i.control = h;
                    u = i.getAsCurrentPoint();
                    i.addMarker(u, h, h),
                      n.addQuadraticCurve(o.x, o.y, h.x, h.y, u.x, u.y),
                      null != e && e.quadraticCurveTo(h.x, h.y, u.x, u.y);
                  }
                  break;
                case "A":
                case "a":
                  for (; !i.isCommandOrEnd(); ) {
                    o = i.current;
                    var c = i.getScalar(),
                      f = i.getScalar(),
                      m = i.getScalar() * (Math.PI / 180),
                      p = i.getScalar(),
                      d = i.getScalar(),
                      y =
                        ((u = i.getAsCurrentPoint()),
                        new t.Point(
                          (Math.cos(m) * (o.x - u.x)) / 2 +
                            (Math.sin(m) * (o.y - u.y)) / 2,
                          (-Math.sin(m) * (o.x - u.x)) / 2 +
                            (Math.cos(m) * (o.y - u.y)) / 2
                        )),
                      v =
                        Math.pow(y.x, 2) / Math.pow(c, 2) +
                        Math.pow(y.y, 2) / Math.pow(f, 2);
                    v > 1 && ((c *= Math.sqrt(v)), (f *= Math.sqrt(v)));
                    var g =
                      (p === d ? -1 : 1) *
                      Math.sqrt(
                        (Math.pow(c, 2) * Math.pow(f, 2) -
                          Math.pow(c, 2) * Math.pow(y.y, 2) -
                          Math.pow(f, 2) * Math.pow(y.x, 2)) /
                          (Math.pow(c, 2) * Math.pow(y.y, 2) +
                            Math.pow(f, 2) * Math.pow(y.x, 2))
                      );
                    isNaN(g) && (g = 0);
                    var x = new t.Point((g * c * y.y) / f, (g * -f * y.x) / c),
                      b = new t.Point(
                        (o.x + u.x) / 2 + Math.cos(m) * x.x - Math.sin(m) * x.y,
                        (o.y + u.y) / 2 + Math.sin(m) * x.x + Math.cos(m) * x.y
                      ),
                      E = function (t) {
                        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
                      },
                      P = function (t, e) {
                        return (t[0] * e[0] + t[1] * e[1]) / (E(t) * E(e));
                      },
                      w = function (t, e) {
                        return (
                          (t[0] * e[1] < t[1] * e[0] ? -1 : 1) *
                          Math.acos(P(t, e))
                        );
                      },
                      B = w([1, 0], [(y.x - x.x) / c, (y.y - x.y) / f]),
                      C = [(y.x - x.x) / c, (y.y - x.y) / f],
                      V = [(-y.x - x.x) / c, (-y.y - x.y) / f],
                      T = w(C, V);
                    P(C, V) <= -1 && (T = Math.PI), P(C, V) >= 1 && (T = 0);
                    var M = 1 - d ? 1 : -1,
                      k = B + M * (T / 2),
                      S = new t.Point(
                        b.x + c * Math.cos(k),
                        b.y + f * Math.sin(k)
                      );
                    if (
                      (i.addMarkerAngle(S, k - (M * Math.PI) / 2),
                      i.addMarkerAngle(u, k - M * Math.PI),
                      n.addPoint(u.x, u.y),
                      null != e)
                    ) {
                      P = c > f ? c : f;
                      var A = c > f ? 1 : c / f,
                        D = c > f ? f / c : 1;
                      e.translate(b.x, b.y),
                        e.rotate(m),
                        e.scale(A, D),
                        e.arc(0, 0, P, B, B + T, 1 - d),
                        e.scale(1 / A, 1 / D),
                        e.rotate(-m),
                        e.translate(-b.x, -b.y);
                    }
                  }
                  break;
                case "Z":
                case "z":
                  null != e && e.closePath(), (i.current = i.start);
              }
            return n;
          }),
          (this.getMarkers = function () {
            for (
              var t = this.PathParser.getMarkerPoints(),
                e = this.PathParser.getMarkerAngles(),
                i = [],
                n = 0;
              n < t.length;
              n++
            )
              i.push([t[n], e[n]]);
            return i;
          });
      }),
      (t.Element.path.prototype = new t.Element.PathElementBase()),
      (t.Element.pattern = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.createPattern = function (e, i) {
            var n = this.attribute("width").toPixels("x", !0),
              s = this.attribute("height").toPixels("y", !0),
              a = new t.Element.svg();
            (a.attributes.viewBox = new t.Property(
              "viewBox",
              this.attribute("viewBox").value
            )),
              (a.attributes.width = new t.Property("width", n + "px")),
              (a.attributes.height = new t.Property("height", s + "px")),
              (a.attributes.transform = new t.Property(
                "transform",
                this.attribute("patternTransform").value
              )),
              (a.children = this.children);
            var r = document.createElement("canvas");
            (r.width = n), (r.height = s);
            var o = r.getContext("2d");
            this.attribute("x").hasValue() &&
              this.attribute("y").hasValue() &&
              o.translate(
                this.attribute("x").toPixels("x", !0),
                this.attribute("y").toPixels("y", !0)
              );
            for (var l = -1; l <= 1; l++)
              for (var h = -1; h <= 1; h++)
                o.save(),
                  o.translate(l * r.width, h * r.height),
                  a.render(o),
                  o.restore();
            return e.createPattern(r, "repeat");
          });
      }),
      (t.Element.pattern.prototype = new t.Element.ElementBase()),
      (t.Element.marker = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.baseRender = this.render),
          (this.render = function (e, i, n) {
            e.translate(i.x, i.y),
              "auto" === this.attribute("orient").valueOrDefault("auto") &&
                e.rotate(n),
              "strokeWidth" ===
                this.attribute("markerUnits").valueOrDefault("strokeWidth") &&
                e.scale(e.lineWidth, e.lineWidth),
              e.save();
            var s = new t.Element.svg();
            (s.attributes.viewBox = new t.Property(
              "viewBox",
              this.attribute("viewBox").value
            )),
              (s.attributes.refX = new t.Property(
                "refX",
                this.attribute("refX").value
              )),
              (s.attributes.refY = new t.Property(
                "refY",
                this.attribute("refY").value
              )),
              (s.attributes.width = new t.Property(
                "width",
                this.attribute("markerWidth").value
              )),
              (s.attributes.height = new t.Property(
                "height",
                this.attribute("markerHeight").value
              )),
              (s.attributes.fill = new t.Property(
                "fill",
                this.attribute("fill").valueOrDefault("black")
              )),
              (s.attributes.stroke = new t.Property(
                "stroke",
                this.attribute("stroke").valueOrDefault("none")
              )),
              (s.children = this.children),
              s.render(e),
              e.restore(),
              "strokeWidth" ===
                this.attribute("markerUnits").valueOrDefault("strokeWidth") &&
                e.scale(1 / e.lineWidth, 1 / e.lineWidth),
              "auto" === this.attribute("orient").valueOrDefault("auto") &&
                e.rotate(-n),
              e.translate(-i.x, -i.y);
          });
      }),
      (t.Element.marker.prototype = new t.Element.ElementBase()),
      (t.Element.defs = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.render = function (t) {});
      }),
      (t.Element.defs.prototype = new t.Element.ElementBase()),
      (t.Element.GradientBase = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.gradientUnits =
            this.attribute("gradientUnits").valueOrDefault(
              "objectBoundingBox"
            )),
          (this.stops = []);
        for (var i = 0; i < this.children.length; i++) {
          var n = this.children[i];
          "stop" === n.type && this.stops.push(n);
        }
        (this.getGradient = function () {}),
          (this.createGradient = function (e, i, n) {
            var s = this;
            this.getHrefAttribute().hasValue() &&
              (s = this.getHrefAttribute().getDefinition());
            var a = function (e) {
                return n.hasValue()
                  ? new t.Property("color", e).addOpacity(n.value).value
                  : e;
              },
              r = this.getGradient(e, i);
            if (null === r) return a(s.stops[s.stops.length - 1].color);
            for (var o = 0; o < s.stops.length; o++)
              r.addColorStop(s.stops[o].offset, a(s.stops[o].color));
            if (this.attribute("gradientTransform").hasValue()) {
              var l = t.ViewPort.viewPorts[0],
                h = new t.Element.rect();
              (h.attributes.x = new t.Property("x", -t.MAX_VIRTUAL_PIXELS / 3)),
                (h.attributes.y = new t.Property(
                  "y",
                  -t.MAX_VIRTUAL_PIXELS / 3
                )),
                (h.attributes.width = new t.Property(
                  "width",
                  t.MAX_VIRTUAL_PIXELS
                )),
                (h.attributes.height = new t.Property(
                  "height",
                  t.MAX_VIRTUAL_PIXELS
                ));
              var u = new t.Element.g();
              (u.attributes.transform = new t.Property(
                "transform",
                this.attribute("gradientTransform").value
              )),
                (u.children = [h]);
              var c = new t.Element.svg();
              (c.attributes.x = new t.Property("x", 0)),
                (c.attributes.y = new t.Property("y", 0)),
                (c.attributes.width = new t.Property("width", l.width)),
                (c.attributes.height = new t.Property("height", l.height)),
                (c.children = [u]);
              var f = document.createElement("canvas");
              (f.width = l.width), (f.height = l.height);
              var m = f.getContext("2d");
              return (
                (m.fillStyle = r), c.render(m), m.createPattern(f, "no-repeat")
              );
            }
            return r;
          });
      }),
      (t.Element.GradientBase.prototype = new t.Element.ElementBase()),
      (t.Element.linearGradient = function (e) {
        (this.base = t.Element.GradientBase),
          this.base(e),
          (this.getGradient = function (t, e) {
            var i =
              "objectBoundingBox" === this.gradientUnits
                ? e.getBoundingBox()
                : null;
            this.attribute("x1").hasValue() ||
              this.attribute("y1").hasValue() ||
              this.attribute("x2").hasValue() ||
              this.attribute("y2").hasValue() ||
              ((this.attribute("x1", !0).value = 0),
              (this.attribute("y1", !0).value = 0),
              (this.attribute("x2", !0).value = 1),
              (this.attribute("y2", !0).value = 0));
            var n =
                "objectBoundingBox" === this.gradientUnits
                  ? i.x() + i.width() * this.attribute("x1").numValue()
                  : this.attribute("x1").toPixels("x"),
              s =
                "objectBoundingBox" === this.gradientUnits
                  ? i.y() + i.height() * this.attribute("y1").numValue()
                  : this.attribute("y1").toPixels("y"),
              a =
                "objectBoundingBox" === this.gradientUnits
                  ? i.x() + i.width() * this.attribute("x2").numValue()
                  : this.attribute("x2").toPixels("x"),
              r =
                "objectBoundingBox" === this.gradientUnits
                  ? i.y() + i.height() * this.attribute("y2").numValue()
                  : this.attribute("y2").toPixels("y");
            return n === a && s === r
              ? null
              : t.createLinearGradient(n, s, a, r);
          });
      }),
      (t.Element.linearGradient.prototype = new t.Element.GradientBase()),
      (t.Element.radialGradient = function (e) {
        (this.base = t.Element.GradientBase),
          this.base(e),
          (this.getGradient = function (t, e) {
            var i = e.getBoundingBox();
            this.attribute("cx").hasValue() ||
              (this.attribute("cx", !0).value = "50%"),
              this.attribute("cy").hasValue() ||
                (this.attribute("cy", !0).value = "50%"),
              this.attribute("r").hasValue() ||
                (this.attribute("r", !0).value = "50%");
            var n =
                "objectBoundingBox" === this.gradientUnits
                  ? i.x() + i.width() * this.attribute("cx").numValue()
                  : this.attribute("cx").toPixels("x"),
              s =
                "objectBoundingBox" === this.gradientUnits
                  ? i.y() + i.height() * this.attribute("cy").numValue()
                  : this.attribute("cy").toPixels("y"),
              a = n,
              r = s;
            this.attribute("fx").hasValue() &&
              (a =
                "objectBoundingBox" === this.gradientUnits
                  ? i.x() + i.width() * this.attribute("fx").numValue()
                  : this.attribute("fx").toPixels("x")),
              this.attribute("fy").hasValue() &&
                (r =
                  "objectBoundingBox" === this.gradientUnits
                    ? i.y() + i.height() * this.attribute("fy").numValue()
                    : this.attribute("fy").toPixels("y"));
            var o =
              "objectBoundingBox" === this.gradientUnits
                ? ((i.width() + i.height()) / 2) *
                  this.attribute("r").numValue()
                : this.attribute("r").toPixels();
            return t.createRadialGradient(a, r, 0, n, s, o);
          });
      }),
      (t.Element.radialGradient.prototype = new t.Element.GradientBase()),
      (t.Element.stop = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.offset = this.attribute("offset").numValue()),
          this.offset < 0 && (this.offset = 0),
          this.offset > 1 && (this.offset = 1);
        var i = this.style("stop-color");
        this.style("stop-opacity").hasValue() &&
          (i = i.addOpacity(this.style("stop-opacity").value)),
          (this.color = i.value);
      }),
      (t.Element.stop.prototype = new t.Element.ElementBase()),
      (t.Element.AnimateBase = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          t.Animations.push(this),
          (this.duration = 0),
          (this.begin = this.attribute("begin").toMilliseconds()),
          (this.maxDuration =
            this.begin + this.attribute("dur").toMilliseconds()),
          (this.getProperty = function () {
            var t = this.attribute("attributeType").value,
              e = this.attribute("attributeName").value;
            return "CSS" === t
              ? this.parent.style(e, !0)
              : this.parent.attribute(e, !0);
          }),
          (this.initialValue = null),
          (this.initialUnits = ""),
          (this.removed = !1),
          (this.calcValue = function () {
            return "";
          }),
          (this.update = function (t) {
            if (
              (null === this.initialValue &&
                ((this.initialValue = this.getProperty().value),
                (this.initialUnits = this.getProperty().getUnits())),
              this.duration > this.maxDuration)
            ) {
              if (
                "indefinite" !== this.attribute("repeatCount").value &&
                "indefinite" !== this.attribute("repeatDur").value
              )
                return (
                  "remove" ===
                    this.attribute("fill").valueOrDefault("remove") &&
                  !this.removed &&
                  ((this.removed = !0),
                  (this.getProperty().value = this.initialValue),
                  !0)
                );
              this.duration = 0;
            }
            this.duration = this.duration + t;
            var e = !1;
            if (this.begin < this.duration) {
              var i = this.calcValue();
              if (this.attribute("type").hasValue())
                i = this.attribute("type").value + "(" + i + ")";
              (this.getProperty().value = i), (e = !0);
            }
            return e;
          }),
          (this.from = this.attribute("from")),
          (this.to = this.attribute("to")),
          (this.values = this.attribute("values")),
          this.values.hasValue() &&
            (this.values.value = this.values.value.split(";")),
          (this.progress = function () {
            var e = {
              progress:
                (this.duration - this.begin) / (this.maxDuration - this.begin),
            };
            if (this.values.hasValue()) {
              var i = e.progress * (this.values.value.length - 1),
                n = Math.floor(i),
                s = Math.ceil(i);
              (e.from = new t.Property(
                "from",
                parseFloat(this.values.value[n])
              )),
                (e.to = new t.Property("to", parseFloat(this.values.value[s]))),
                (e.progress = (i - n) / (s - n));
            } else (e.from = this.from), (e.to = this.to);
            return e;
          });
      }),
      (t.Element.AnimateBase.prototype = new t.Element.ElementBase()),
      (t.Element.animate = function (e) {
        (this.base = t.Element.AnimateBase),
          this.base(e),
          (this.calcValue = function () {
            var t = this.progress();
            return (
              t.from.numValue() +
              (t.to.numValue() - t.from.numValue()) * t.progress +
              this.initialUnits
            );
          });
      }),
      (t.Element.animate.prototype = new t.Element.AnimateBase()),
      (t.Element.animateColor = function (e) {
        (this.base = t.Element.AnimateBase),
          this.base(e),
          (this.calcValue = function () {
            var t = this.progress(),
              e = new RGBColor(t.from.value),
              i = new RGBColor(t.to.value);
            if (e.ok && i.ok) {
              var n = e.r + (i.r - e.r) * t.progress,
                s = e.g + (i.g - e.g) * t.progress,
                a = e.b + (i.b - e.b) * t.progress;
              return (
                "rgb(" +
                parseInt(n, 10) +
                "," +
                parseInt(s, 10) +
                "," +
                parseInt(a, 10) +
                ")"
              );
            }
            return this.attribute("from").value;
          });
      }),
      (t.Element.animateColor.prototype = new t.Element.AnimateBase()),
      (t.Element.animateTransform = function (e) {
        (this.base = t.Element.AnimateBase),
          this.base(e),
          (this.calcValue = function () {
            for (
              var e = this.progress(),
                i = t.ToNumberArray(e.from.value),
                n = t.ToNumberArray(e.to.value),
                s = "",
                a = 0;
              a < i.length;
              a++
            )
              s += i[a] + (n[a] - i[a]) * e.progress + " ";
            return s;
          });
      }),
      (t.Element.animateTransform.prototype = new t.Element.animate()),
      (t.Element.font = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
          (this.isRTL = !1),
          (this.isArabic = !1),
          (this.fontFace = null),
          (this.missingGlyph = null),
          (this.glyphs = []);
        for (var i = 0; i < this.children.length; i++) {
          var n = this.children[i];
          "font-face" === n.type
            ? ((this.fontFace = n),
              n.style("font-family").hasValue() &&
                (t.Definitions[n.style("font-family").value] = this))
            : "missing-glyph" === n.type
            ? (this.missingGlyph = n)
            : "glyph" === n.type &&
              ("" != n.arabicForm
                ? ((this.isRTL = !0),
                  (this.isArabic = !0),
                  void 0 === this.glyphs[n.unicode] &&
                    (this.glyphs[n.unicode] = []),
                  (this.glyphs[n.unicode][n.arabicForm] = n))
                : (this.glyphs[n.unicode] = n));
        }
      }),
      (t.Element.font.prototype = new t.Element.ElementBase()),
      (t.Element.fontface = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.ascent = this.attribute("ascent").value),
          (this.descent = this.attribute("descent").value),
          (this.unitsPerEm = this.attribute("units-per-em").numValue());
      }),
      (t.Element.fontface.prototype = new t.Element.ElementBase()),
      (t.Element.missingglyph = function (e) {
        (this.base = t.Element.path), this.base(e), (this.horizAdvX = 0);
      }),
      (t.Element.missingglyph.prototype = new t.Element.path()),
      (t.Element.glyph = function (e) {
        (this.base = t.Element.path),
          this.base(e),
          (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
          (this.unicode = this.attribute("unicode").value),
          (this.arabicForm = this.attribute("arabic-form").value);
      }),
      (t.Element.glyph.prototype = new t.Element.path()),
      (t.Element.text = function (e) {
        (this.captureTextNodes = !0),
          (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.baseSetContext = this.setContext),
          (this.setContext = function (t) {
            this.baseSetContext(t),
              this.style("dominant-baseline").hasValue() &&
                (t.textBaseline = this.style("dominant-baseline").value),
              this.style("alignment-baseline").hasValue() &&
                (t.textBaseline = this.style("alignment-baseline").value);
          }),
          (this.getBoundingBox = function () {
            var e = this.attribute("x").toPixels("x"),
              i = this.attribute("y").toPixels("y"),
              n = this.parent
                .style("font-size")
                .numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize);
            return new t.BoundingBox(
              e,
              i - n,
              e + Math.floor((2 * n) / 3) * this.children[0].getText().length,
              i
            );
          }),
          (this.renderChildren = function (t) {
            (this.x = this.attribute("x").toPixels("x")),
              (this.y = this.attribute("y").toPixels("y")),
              (this.x += this.getAnchorDelta(t, this, 0));
            for (var e = 0; e < this.children.length; e++)
              this.renderChild(t, this, e);
          }),
          (this.getAnchorDelta = function (t, e, i) {
            var n = this.style("text-anchor").valueOrDefault("start");
            if ("start" != n) {
              for (var s = 0, a = i; a < e.children.length; a++) {
                var r = e.children[a];
                if (a > i && r.attribute("x").hasValue()) break;
                s += r.measureTextRecursive(t);
              }
              return -1 * ("end" === n ? s : s / 2);
            }
            return 0;
          }),
          (this.renderChild = function (t, e, i) {
            var n = e.children[i];
            n.attribute("x").hasValue()
              ? (n.x =
                  n.attribute("x").toPixels("x") + this.getAnchorDelta(t, e, i))
              : (this.attribute("dx").hasValue() &&
                  (this.x += this.attribute("dx").toPixels("x")),
                n.attribute("dx").hasValue() &&
                  (this.x += n.attribute("dx").toPixels("x")),
                (n.x = this.x)),
              (this.x = n.x + n.measureText(t)),
              n.attribute("y").hasValue()
                ? (n.y = n.attribute("y").toPixels("y"))
                : (this.attribute("dy").hasValue() &&
                    (this.y += this.attribute("dy").toPixels("y")),
                  n.attribute("dy").hasValue() &&
                    (this.y += n.attribute("dy").toPixels("y")),
                  (n.y = this.y)),
              (this.y = n.y),
              n.render(t);
            for (i = 0; i < n.children.length; i++) this.renderChild(t, n, i);
          });
      }),
      (t.Element.text.prototype = new t.Element.RenderedElementBase()),
      (t.Element.TextElementBase = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.getGlyph = function (t, e, i) {
            var n = e[i],
              s = null;
            if (t.isArabic) {
              var a = "isolated";
              (0 === i || " " === e[i - 1]) &&
                i < e.length - 2 &&
                " " != e[i + 1] &&
                (a = "terminal"),
                i > 0 &&
                  " " != e[i - 1] &&
                  i < e.length - 2 &&
                  " " != e[i + 1] &&
                  (a = "medial"),
                i > 0 &&
                  " " != e[i - 1] &&
                  (i === e.length - 1 || " " === e[i + 1]) &&
                  (a = "initial"),
                void 0 !== t.glyphs[n] &&
                  null === (s = t.glyphs[n][a]) &&
                  "glyph" === t.glyphs[n].type &&
                  (s = t.glyphs[n]);
            } else s = t.glyphs[n];
            return null === s && (s = t.missingGlyph), s;
          }),
          (this.renderChildren = function (e) {
            var i = this.parent.style("font-family").getDefinition();
            if (null == i)
              "" != e.fillStyle &&
                e.fillText(t.compressSpaces(this.getText()), this.x, this.y),
                "" != e.strokeStyle &&
                  e.strokeText(
                    t.compressSpaces(this.getText()),
                    this.x,
                    this.y
                  );
            else {
              var n = this.parent
                  .style("font-size")
                  .numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize),
                s = this.parent
                  .style("font-style")
                  .valueOrDefault(t.Font.Parse(t.ctx.font).fontStyle),
                a = this.getText();
              i.isRTL && (a = a.split("").reverse().join(""));
              for (
                var r = t.ToNumberArray(this.parent.attribute("dx").value),
                  o = 0;
                o < a.length;
                o++
              ) {
                var l = this.getGlyph(i, a, o),
                  h = n / i.fontFace.unitsPerEm;
                e.translate(this.x, this.y), e.scale(h, -h);
                var u = e.lineWidth;
                (e.lineWidth = (e.lineWidth * i.fontFace.unitsPerEm) / n),
                  "italic" === s && e.transform(1, 0, 0.4, 1, 0, 0),
                  l.render(e),
                  "italic" === s && e.transform(1, 0, -0.4, 1, 0, 0),
                  (e.lineWidth = u),
                  e.scale(1 / h, -1 / h),
                  e.translate(-this.x, -this.y),
                  (this.x +=
                    (n * (l.horizAdvX || i.horizAdvX)) / i.fontFace.unitsPerEm),
                  void 0 === r[o] || isNaN(r[o]) || (this.x += r[o]);
              }
            }
          }),
          (this.getText = function () {}),
          (this.measureTextRecursive = function (t) {
            for (
              var e = this.measureText(t), i = 0;
              i < this.children.length;
              i++
            )
              e += this.children[i].measureTextRecursive(t);
            return e;
          }),
          (this.measureText = function (e) {
            var i = this.parent.style("font-family").getDefinition();
            if (null != i) {
              var n = this.parent
                  .style("font-size")
                  .numValueOrDefault(t.Font.Parse(t.ctx.font).fontSize),
                s = 0,
                a = this.getText();
              i.isRTL && (a = a.split("").reverse().join(""));
              for (
                var r = t.ToNumberArray(this.parent.attribute("dx").value),
                  o = 0;
                o < a.length;
                o++
              ) {
                (s +=
                  ((this.getGlyph(i, a, o).horizAdvX || i.horizAdvX) * n) /
                  i.fontFace.unitsPerEm),
                  void 0 === r[o] || isNaN(r[o]) || (s += r[o]);
              }
              return s;
            }
            var l = t.compressSpaces(this.getText());
            if (!e.measureText) return 10 * l.length;
            e.save(), this.setContext(e);
            var h = e.measureText(l).width;
            return e.restore(), h;
          });
      }),
      (t.Element.TextElementBase.prototype =
        new t.Element.RenderedElementBase()),
      (t.Element.tspan = function (e) {
        (this.captureTextNodes = !0),
          (this.base = t.Element.TextElementBase),
          this.base(e),
          (this.text = e.nodeValue || e.text || ""),
          (this.getText = function () {
            return this.text;
          });
      }),
      (t.Element.tspan.prototype = new t.Element.TextElementBase()),
      (t.Element.tref = function (e) {
        (this.base = t.Element.TextElementBase),
          this.base(e),
          (this.getText = function () {
            var t = this.getHrefAttribute().getDefinition();
            if (null != t) return t.children[0].getText();
          });
      }),
      (t.Element.tref.prototype = new t.Element.TextElementBase()),
      (t.Element.a = function (e) {
        (this.base = t.Element.TextElementBase),
          this.base(e),
          (this.hasText = !0);
        for (var i = 0; i < e.childNodes.length; i++)
          3 != e.childNodes[i].nodeType && (this.hasText = !1);
        (this.text = this.hasText ? e.childNodes[0].nodeValue : ""),
          (this.getText = function () {
            return this.text;
          }),
          (this.baseRenderChildren = this.renderChildren),
          (this.renderChildren = function (e) {
            if (this.hasText) {
              this.baseRenderChildren(e);
              var i = new t.Property(
                "fontSize",
                t.Font.Parse(t.ctx.font).fontSize
              );
              t.Mouse.checkBoundingBox(
                this,
                new t.BoundingBox(
                  this.x,
                  this.y - i.toPixels("y"),
                  this.x + this.measureText(e),
                  this.y
                )
              );
            } else {
              var n = new t.Element.g();
              (n.children = this.children), (n.parent = this), n.render(e);
            }
          }),
          (this.onclick = function () {
            window.open(this.getHrefAttribute().value);
          }),
          (this.onmousemove = function () {
            t.ctx.canvas.style.cursor = "pointer";
          });
      }),
      (t.Element.a.prototype = new t.Element.TextElementBase()),
      (t.Element.image = function (e) {
        (this.base = t.Element.RenderedElementBase), this.base(e);
        var i = this.getHrefAttribute().value,
          n = i.match(/\.svg$/);
        if ((t.Images.push(this), (this.loaded = !1), n))
          (this.img = t.ajax(i)), (this.loaded = !0);
        else {
          this.img = document.createElement("img");
          var s = this;
          (this.img.onload = function () {
            s.loaded = !0;
          }),
            (this.img.onerror = function () {
              "undefined" != typeof console && (s.loaded = !0);
            }),
            (this.img.src = i);
        }
        (this.renderChildren = function (e) {
          var i = this.attribute("x").toPixels("x"),
            s = this.attribute("y").toPixels("y"),
            a = this.attribute("width").toPixels("x"),
            r = this.attribute("height").toPixels("y");
          0 !== a &&
            0 !== r &&
            (e.save(),
            n
              ? e.drawSvg(this.img, i, s, a, r)
              : (e.translate(i, s),
                t.AspectRatio(
                  e,
                  this.attribute("preserveAspectRatio").value,
                  a,
                  this.img.width,
                  r,
                  this.img.height,
                  0,
                  0
                ),
                e.drawImage(this.img, 0, 0)),
            e.restore());
        }),
          (this.getBoundingBox = function () {
            var e = this.attribute("x").toPixels("x"),
              i = this.attribute("y").toPixels("y"),
              n = this.attribute("width").toPixels("x"),
              s = this.attribute("height").toPixels("y");
            return new t.BoundingBox(e, i, e + n, i + s);
          });
      }),
      (t.Element.image.prototype = new t.Element.RenderedElementBase()),
      (t.Element.g = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.getBoundingBox = function () {
            for (
              var e = new t.BoundingBox(), i = 0;
              i < this.children.length;
              i++
            )
              e.addBoundingBox(this.children[i].getBoundingBox());
            return e;
          });
      }),
      (t.Element.g.prototype = new t.Element.RenderedElementBase()),
      (t.Element.symbol = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.baseSetContext = this.setContext),
          (this.setContext = function (e) {
            if (
              (this.baseSetContext(e), this.attribute("viewBox").hasValue())
            ) {
              var i = t.ToNumberArray(this.attribute("viewBox").value),
                n = i[0],
                s = i[1];
              (width = i[2]),
                (height = i[3]),
                t.AspectRatio(
                  e,
                  this.attribute("preserveAspectRatio").value,
                  this.attribute("width").toPixels("x"),
                  width,
                  this.attribute("height").toPixels("y"),
                  height,
                  n,
                  s
                ),
                t.ViewPort.SetCurrent(i[2], i[3]);
            }
          });
      }),
      (t.Element.symbol.prototype = new t.Element.RenderedElementBase()),
      (t.Element.style = function (e) {
        (this.base = t.Element.ElementBase), this.base(e);
        for (var i = "", n = 0; n < e.childNodes.length; n++)
          i += e.childNodes[n].nodeValue;
        i = i.replace(
          /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
          ""
        );
        var s = (i = t.compressSpaces(i)).split("}");
        for (n = 0; n < s.length; n++)
          if ("" != t.trim(s[n]))
            for (
              var a = s[n].split("{"),
                r = a[0].split(","),
                o = a[1].split(";"),
                l = 0;
              l < r.length;
              l++
            ) {
              var h = t.trim(r[l]);
              if ("" != h) {
                for (var u = {}, c = 0; c < o.length; c++) {
                  var f = o[c].indexOf(":"),
                    m = o[c].substr(0, f),
                    p = o[c].substr(f + 1, o[c].length - f);
                  null != m &&
                    null != p &&
                    (u[t.trim(m)] = new t.Property(t.trim(m), t.trim(p)));
                }
                if (((t.Styles[h] = u), "@font-face" === h))
                  for (
                    var d = u["font-family"].value.replace(/"/g, ""),
                      y = u.src.value.split(","),
                      v = 0;
                    v < y.length;
                    v++
                  )
                    if (y[v].indexOf('format("svg")') > 0)
                      for (
                        var g = y[v].indexOf("url"),
                          x = y[v].indexOf(")", g),
                          b = y[v].substr(g + 5, x - g - 6),
                          E = t
                            .parseXml(t.ajax(b))
                            .getElementsByTagName("font"),
                          P = 0;
                        P < E.length;
                        P++
                      ) {
                        var w = t.CreateElement(E[P]);
                        t.Definitions[d] = w;
                      }
              }
            }
      }),
      (t.Element.style.prototype = new t.Element.ElementBase()),
      (t.Element.use = function (e) {
        (this.base = t.Element.RenderedElementBase),
          this.base(e),
          (this.baseSetContext = this.setContext),
          (this.setContext = function (t) {
            this.baseSetContext(t),
              this.attribute("x").hasValue() &&
                t.translate(this.attribute("x").toPixels("x"), 0),
              this.attribute("y").hasValue() &&
                t.translate(0, this.attribute("y").toPixels("y"));
          }),
          (this.getDefinition = function () {
            var t = this.getHrefAttribute().getDefinition();
            return (
              this.attribute("width").hasValue() &&
                (t.attribute("width", !0).value =
                  this.attribute("width").value),
              this.attribute("height").hasValue() &&
                (t.attribute("height", !0).value =
                  this.attribute("height").value),
              t
            );
          }),
          (this.path = function (t) {
            var e = this.getDefinition();
            null != e && e.path(t);
          }),
          (this.getBoundingBox = function () {
            var t = this.getDefinition();
            if (null != t) return t.getBoundingBox();
          }),
          (this.renderChildren = function (t) {
            var e = this.getDefinition();
            if (null != e) {
              var i = e.parent;
              (e.parent = null), e.render(t), (e.parent = i);
            }
          });
      }),
      (t.Element.use.prototype = new t.Element.RenderedElementBase()),
      (t.Element.mask = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.apply = function (e, i) {
            var n = this.attribute("x").toPixels("x"),
              s = this.attribute("y").toPixels("y"),
              a = this.attribute("width").toPixels("x"),
              r = this.attribute("height").toPixels("y");
            if (0 === a && 0 === r) {
              for (
                var o = new t.BoundingBox(), l = 0;
                l < this.children.length;
                l++
              )
                o.addBoundingBox(this.children[l].getBoundingBox());
              (n = Math.floor(o.x1)),
                (s = Math.floor(o.y1)),
                (a = Math.floor(o.width())),
                (r = Math.floor(o.height()));
            }
            var h = i.attribute("mask").value;
            i.attribute("mask").value = "";
            var u = document.createElement("canvas");
            (u.width = n + a), (u.height = s + r);
            var c = u.getContext("2d");
            this.renderChildren(c);
            var f = document.createElement("canvas");
            (f.width = n + a), (f.height = s + r);
            var m = f.getContext("2d");
            i.render(m),
              (m.globalCompositeOperation = "destination-in"),
              (m.fillStyle = c.createPattern(u, "no-repeat")),
              m.fillRect(0, 0, n + a, s + r),
              (e.fillStyle = m.createPattern(f, "no-repeat")),
              e.fillRect(0, 0, n + a, s + r),
              (i.attribute("mask").value = h);
          }),
          (this.render = function (t) {});
      }),
      (t.Element.mask.prototype = new t.Element.ElementBase()),
      (t.Element.clipPath = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.apply = function (e) {
            for (var i = 0; i < this.children.length; i++) {
              var n = this.children[i];
              if (void 0 !== n.path) {
                var s = null;
                n.attribute("transform").hasValue() &&
                  (s = new t.Transform(n.attribute("transform").value)).apply(
                    e
                  ),
                  n.path(e),
                  e.clip(),
                  s && s.unapply(e);
              }
            }
          }),
          (this.render = function (t) {});
      }),
      (t.Element.clipPath.prototype = new t.Element.ElementBase()),
      (t.Element.filter = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.apply = function (t, e) {
            var i = e.getBoundingBox(),
              n = Math.floor(i.x1),
              s = Math.floor(i.y1),
              a = Math.floor(i.width()),
              r = Math.floor(i.height()),
              o = e.style("filter").value;
            e.style("filter").value = "";
            for (var l = 0, h = 0, u = 0; u < this.children.length; u++) {
              var c = this.children[u].extraFilterDistance || 0;
              (l = Math.max(l, c)), (h = Math.max(h, c));
            }
            var f = document.createElement("canvas");
            (f.width = a + 2 * l), (f.height = r + 2 * h);
            var m = f.getContext("2d");
            m.translate(-n + l, -s + h), e.render(m);
            for (u = 0; u < this.children.length; u++)
              this.children[u].apply(m, 0, 0, a + 2 * l, r + 2 * h);
            t.drawImage(
              f,
              0,
              0,
              a + 2 * l,
              r + 2 * h,
              n - l,
              s - h,
              a + 2 * l,
              r + 2 * h
            ),
              (e.style("filter", !0).value = o);
          }),
          (this.render = function (t) {});
      }),
      (t.Element.filter.prototype = new t.Element.ElementBase()),
      (t.Element.feMorphology = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.apply = function (t, e, i, n, s) {});
      }),
      (t.Element.feMorphology.prototype = new t.Element.ElementBase()),
      (t.Element.feComposite = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.apply = function (t, e, i, n, s) {});
      }),
      (t.Element.feComposite.prototype = new t.Element.ElementBase()),
      (t.Element.feColorMatrix = function (e) {
        (this.base = t.Element.ElementBase), this.base(e);
        var i = t.ToNumberArray(this.attribute("values").value);
        switch (this.attribute("type").valueOrDefault("matrix")) {
          case "saturate":
            var n = i[0];
            i = [
              0.213 + 0.787 * n,
              0.715 - 0.715 * n,
              0.072 - 0.072 * n,
              0,
              0,
              0.213 - 0.213 * n,
              0.715 + 0.285 * n,
              0.072 - 0.072 * n,
              0,
              0,
              0.213 - 0.213 * n,
              0.715 - 0.715 * n,
              0.072 + 0.928 * n,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            break;
          case "hueRotate":
            var s = (i[0] * Math.PI) / 180,
              a = function (t, e, i) {
                return t + Math.cos(s) * e + Math.sin(s) * i;
              };
            i = [
              a(0.213, 0.787, -0.213),
              a(0.715, -0.715, -0.715),
              a(0.072, -0.072, 0.928),
              0,
              0,
              a(0.213, -0.213, 0.143),
              a(0.715, 0.285, 0.14),
              a(0.072, -0.072, -0.283),
              0,
              0,
              a(0.213, -0.213, -0.787),
              a(0.715, -0.715, 0.715),
              a(0.072, 0.928, 0.072),
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            break;
          case "luminanceToAlpha":
            i = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
              0.0721, 0, 0, 0, 0, 0, 0, 1,
            ];
        }
        function r(t, e, i, n, s, a) {
          return t[i * n * 4 + 4 * e + a];
        }
        function o(t, e, i, n, s, a, r) {
          t[i * n * 4 + 4 * e + a] = r;
        }
        function l(t, e) {
          var n = i[t];
          return n * (n < 0 ? e - 255 : e);
        }
        this.apply = function (t, e, i, n, s) {
          var a = t.getImageData(0, 0, n, s);
          for (i = 0; i < s; i++)
            for (e = 0; e < n; e++) {
              var h = r(a.data, e, i, n, 0, 0),
                u = r(a.data, e, i, n, 0, 1),
                c = r(a.data, e, i, n, 0, 2),
                f = r(a.data, e, i, n, 0, 3);
              o(
                a.data,
                e,
                i,
                n,
                0,
                0,
                l(0, h) + l(1, u) + l(2, c) + l(3, f) + l(4, 1)
              ),
                o(
                  a.data,
                  e,
                  i,
                  n,
                  0,
                  1,
                  l(5, h) + l(6, u) + l(7, c) + l(8, f) + l(9, 1)
                ),
                o(
                  a.data,
                  e,
                  i,
                  n,
                  0,
                  2,
                  l(10, h) + l(11, u) + l(12, c) + l(13, f) + l(14, 1)
                ),
                o(
                  a.data,
                  e,
                  i,
                  n,
                  0,
                  3,
                  l(15, h) + l(16, u) + l(17, c) + l(18, f) + l(19, 1)
                );
            }
          t.clearRect(0, 0, n, s), t.putImageData(a, 0, 0);
        };
      }),
      (t.Element.feColorMatrix.prototype = new t.Element.ElementBase()),
      (t.Element.feGaussianBlur = function (e) {
        (this.base = t.Element.ElementBase),
          this.base(e),
          (this.blurRadius = Math.floor(
            this.attribute("stdDeviation").numValue()
          )),
          (this.extraFilterDistance = this.blurRadius),
          (this.apply = function (e, i, n, s, a) {
            "undefined" != typeof stackBlurCanvasRGBA &&
              ((e.canvas.id = t.UniqueId()),
              (e.canvas.style.display = "none"),
              document.body.appendChild(e.canvas),
              stackBlurCanvasRGBA(e.canvas.id, i, n, s, a, this.blurRadius),
              document.body.removeChild(e.canvas));
          });
      }),
      (t.Element.feGaussianBlur.prototype = new t.Element.ElementBase()),
      (t.Element.title = function (t) {}),
      (t.Element.title.prototype = new t.Element.ElementBase()),
      (t.Element.desc = function (t) {}),
      (t.Element.desc.prototype = new t.Element.ElementBase()),
      (t.Element.MISSING = function (t) {}),
      (t.Element.MISSING.prototype = new t.Element.ElementBase()),
      (t.CreateElement = function (e) {
        var i = e.nodeName.replace(/^[^:]+:/, "");
        i = i.replace(/\-/g, "");
        var n = null;
        return (
          ((n =
            void 0 !== t.Element[i]
              ? new t.Element[i](e)
              : new t.Element.MISSING(e)).type = e.nodeName),
          n
        );
      }),
      (t.load = function (e, i) {
        t.loadXml(e, t.ajax(i));
      }),
      (t.loadXml = function (e, i) {
        t.loadXmlDoc(e, t.parseXml(i));
      }),
      (t.loadXmlDoc = function (e, i) {
        t.init(e);
        var n = function (t) {
          for (var i = e.canvas; i; )
            (t.x -= i.offsetLeft), (t.y -= i.offsetTop), (i = i.offsetParent);
          return (
            window.scrollX && (t.x += window.scrollX),
            window.scrollY && (t.y += window.scrollY),
            t
          );
        };
        1 != t.opts.ignoreMouse &&
          ((e.canvas.onclick = function (e) {
            var i = n(
              new t.Point(
                null != e ? e.clientX : event.clientX,
                null != e ? e.clientY : event.clientY
              )
            );
            t.Mouse.onclick(i.x, i.y);
          }),
          (e.canvas.onmousemove = function (e) {
            var i = n(
              new t.Point(
                null != e ? e.clientX : event.clientX,
                null != e ? e.clientY : event.clientY
              )
            );
            t.Mouse.onmousemove(i.x, i.y);
          }));
        var s = t.CreateElement(i.documentElement);
        s.root = !0;
        var a = !0,
          r = function () {
            t.ViewPort.Clear(),
              e.canvas.parentNode &&
                t.ViewPort.SetCurrent(
                  e.canvas.parentNode.clientWidth,
                  e.canvas.parentNode.clientHeight
                ),
              1 != t.opts.ignoreDimensions &&
                (s.style("width").hasValue() &&
                  ((e.canvas.width = s.style("width").toPixels("x")),
                  (e.canvas.style.width = e.canvas.width + "px")),
                s.style("height").hasValue() &&
                  ((e.canvas.height = s.style("height").toPixels("y")),
                  (e.canvas.style.height = e.canvas.height + "px")));
            var n = e.canvas.clientWidth || e.canvas.width,
              r = e.canvas.clientHeight || e.canvas.height;
            if (
              (!0 === t.opts.ignoreDimensions &&
                s.style("width").hasValue() &&
                s.style("height").hasValue() &&
                ((n = s.style("width").toPixels("x")),
                (r = s.style("height").toPixels("y"))),
              t.ViewPort.SetCurrent(n, r),
              null != t.opts.offsetX &&
                (s.attribute("x", !0).value = t.opts.offsetX),
              null != t.opts.offsetY &&
                (s.attribute("y", !0).value = t.opts.offsetY),
              null != t.opts.scaleWidth && null != t.opts.scaleHeight)
            ) {
              var o = 1,
                l = 1,
                h = t.ToNumberArray(s.attribute("viewBox").value);
              s.attribute("width").hasValue()
                ? (o = s.attribute("width").toPixels("x") / t.opts.scaleWidth)
                : isNaN(h[2]) || (o = h[2] / t.opts.scaleWidth),
                s.attribute("height").hasValue()
                  ? (l =
                      s.attribute("height").toPixels("y") / t.opts.scaleHeight)
                  : isNaN(h[3]) || (l = h[3] / t.opts.scaleHeight),
                (s.attribute("width", !0).value = t.opts.scaleWidth),
                (s.attribute("height", !0).value = t.opts.scaleHeight),
                (s.attribute("viewBox", !0).value =
                  "0 0 " + n * o + " " + r * l),
                (s.attribute("preserveAspectRatio", !0).value = "none");
            }
            1 != t.opts.ignoreClear && e.clearRect(0, 0, n, r),
              s.render(e),
              a &&
                ((a = !1),
                "function" == typeof t.opts.renderCallback &&
                  t.opts.renderCallback(i));
          },
          o = !0;
        t.ImagesLoaded() && ((o = !1), r()),
          (t.intervalID = setInterval(function () {
            var e = !1;
            if (
              (o && t.ImagesLoaded() && ((o = !1), (e = !0)),
              1 != t.opts.ignoreMouse && (e |= t.Mouse.hasEvents()),
              1 != t.opts.ignoreAnimation)
            )
              for (var i = 0; i < t.Animations.length; i++)
                e |= t.Animations[i].update(1e3 / t.FRAMERATE);
            "function" == typeof t.opts.forceRedraw &&
              !0 === t.opts.forceRedraw() &&
              (e = !0),
              e && (r(), t.Mouse.runEvents());
          }, 1e3 / t.FRAMERATE));
      }),
      (t.stop = function () {
        t.intervalID && clearInterval(t.intervalID);
      }),
      (t.Mouse = new (function () {
        (this.events = []),
          (this.hasEvents = function () {
            return 0 != this.events.length;
          }),
          (this.onclick = function (t, e) {
            this.events.push({
              type: "onclick",
              x: t,
              y: e,
              run: function (t) {
                t.onclick && t.onclick();
              },
            });
          }),
          (this.onmousemove = function (t, e) {
            this.events.push({
              type: "onmousemove",
              x: t,
              y: e,
              run: function (t) {
                t.onmousemove && t.onmousemove();
              },
            });
          }),
          (this.eventElements = []),
          (this.checkPath = function (t, e) {
            for (var i = 0; i < this.events.length; i++) {
              var n = this.events[i];
              e.isPointInPath &&
                e.isPointInPath(n.x, n.y) &&
                (this.eventElements[i] = t);
            }
          }),
          (this.checkBoundingBox = function (t, e) {
            for (var i = 0; i < this.events.length; i++) {
              var n = this.events[i];
              e.isPointInBox(n.x, n.y) && (this.eventElements[i] = t);
            }
          }),
          (this.runEvents = function () {
            t.ctx.canvas.style.cursor = "";
            for (var e = 0; e < this.events.length; e++)
              for (var i = this.events[e], n = this.eventElements[e]; n; )
                i.run(n), (n = n.parent);
            (this.events = []), (this.eventElements = []);
          });
      })()),
      t
    );
  }
  this.canvg = function (e, i, n) {
    if (null !== e || null !== i || null !== n) {
      (n = n || {}),
        "string" == typeof e && (e = document.getElementById(e)),
        null != e.svg && e.svg.stop();
      var s = t();
      (1 === e.childNodes.length && "OBJECT" === e.childNodes[0].nodeName) ||
        (e.svg = s),
        (s.opts = n);
      var a = e.getContext("2d");
      void 0 !== i.documentElement
        ? s.loadXmlDoc(a, i)
        : "<" === i.substr(0, 1)
        ? s.loadXml(a, i)
        : s.load(a, i);
    } else
      for (
        var r = document.getElementsByTagName("svg"), o = 0;
        o < r.length;
        o++
      ) {
        var l = r[o],
          h = document.createElement("canvas");
        (h.width = l.clientWidth),
          (h.height = l.clientHeight),
          l.parentNode.insertBefore(h, l),
          l.parentNode.removeChild(l);
        var u = document.createElement("div");
        u.appendChild(l), canvg(h, u.innerHTML);
      }
  };
})(),
  "undefined" != typeof CanvasRenderingContext2D &&
    (CanvasRenderingContext2D.prototype.drawSvg = function (t, e, i, n, s) {
      canvg(this.canvas, t, {
        ignoreMouse: !0,
        ignoreAnimation: !0,
        ignoreDimensions: !0,
        ignoreClear: !0,
        offsetX: e,
        offsetY: i,
        scaleWidth: n,
        scaleHeight: s,
      });
    }),
  (function (t) {
    "use strict";
    var e,
      i = t.Uint8Array,
      n = t.HTMLCanvasElement,
      s = /\s*;\s*base64\s*(?:;|$)/i,
      a = function (t) {
        for (
          var n,
            s,
            a = t.length,
            r = new i(((a / 4) * 3) | 0),
            o = 0,
            l = 0,
            h = [0, 0],
            u = 0,
            c = 0;
          a--;

        )
          (s = t.charCodeAt(o++)),
            255 !== (n = e[s - 43]) &&
              undefined !== n &&
              ((h[1] = h[0]),
              (h[0] = s),
              (c = (c << 6) | n),
              4 === ++u &&
                ((r[l++] = c >>> 16),
                61 !== h[1] && (r[l++] = c >>> 8),
                61 !== h[0] && (r[l++] = c),
                (u = 0)));
        return r.buffer;
      };
    i &&
      (e = new i([
        62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,
        0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 50, 51,
      ])),
      n &&
        !n.prototype.toBlob &&
        (n.prototype.toBlob = function (e, n) {
          if ((n || (n = "image/png"), this.mozGetAsFile))
            e(this.mozGetAsFile("canvas", n));
          else {
            var r,
              o = Array.prototype.slice.call(arguments, 1),
              l = this.toDataURL.apply(this, o),
              h = l.indexOf(","),
              u = l.substring(h + 1),
              c = s.test(l.substring(0, h)),
              f = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder,
              m = new f();
            f.fake
              ? (((r = m.getBlob(n)).encoding = c ? "base64" : "URI"),
                (r.data = u),
                (r.size = u.length))
              : i &&
                (c ? m.append(a(u)) : m.append(decodeURIComponent(u)),
                (r = m.getBlob(n))),
              e(r);
          }
        });
  })(self);
