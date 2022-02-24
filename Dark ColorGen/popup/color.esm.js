// A is m x n. B is n x p. product is m x p.
function multiplyMatrices(A, B) {
	let m = A.length;

	if (!Array.isArray(A[0])) {
		// A is vector, convert to [[a, b, c, ...]]
		A = [A];
	}

	if (!Array.isArray(B[0])) {
		// B is vector, convert to [[a], [b], [c], ...]]
		B = B.map(x => [x]);
	}

	let p = B[0].length;
	let B_cols = B[0].map((_, i) => B.map(x => x[i])); // transpose B
	let product = A.map(row => B_cols.map(col => {
		if (!Array.isArray(row)) {
			return col.reduce((a, c) => a + c * row, 0);
		}

		return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
	}));

	if (m === 1) {
		product = product[0]; // Avoid [[a, b, c, ...]]
	}

	if (p === 1) {
		return product.map(x => x[0]); // Avoid [[a], [b], [c], ...]]
	}

	return product;
}

/**
 * Check if a value is a string (including a String object)
 * @param {*} str - Value to check
 * @returns {boolean}
 */
function isString (str) {
	return type(str) === "string";
}

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {*} o - Value to check
 * @returns {string}
 */
function type (o) {
	let str = Object.prototype.toString.call(o);

	return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}

/**
 * Like Object.assign() but copies property descriptors (including symbols)
 * @param {Object} target - Object to copy to
 * @param {...Object} sources - Objects to copy from
 * @returns {Object} target
 */
function extend (target, ...sources) {
	for (let source of sources) {
		if (source) {
			let descriptors = Object.getOwnPropertyDescriptors(source);
			Object.defineProperties(target, descriptors);
		}
	}

	return target;
}

/**
 * Copy a descriptor from one object to another
 * @param {Object} target - Object to copy to
 * @param {Object} source - Object to copy from
 * @param {string} prop - Name of property
 */
function copyDescriptor (target, source, prop) {
	let descriptor = Object.getOwnPropertyDescriptor(source, prop);
	Object.defineProperty(target, prop, descriptor);
}

/**
 * Uppercase the first letter of a string
 * @param {string} str - String to capitalize
 * @returns Capitalized string
 */
function capitalize(str) {
	if (!str) {
		return str;
	}

	return str[0].toUpperCase() + str.slice(1);
}

/**
 * Round a number to a certain number of significant digits based on a range
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */
function toPrecision(n, precision) {
	precision = +precision;
	let integerLength = (Math.floor(n) + "").length;

	if (precision > integerLength) {
		return +n.toFixed(precision - integerLength);
	}
	else {
		let p10 = 10 ** (integerLength - precision);
		return Math.round(n / p10) * p10;
	}
}

function parseCoord(coord) {
	if (coord.indexOf(".") > 0) {
		// Reduce a coordinate of a certain color space until the color is in gamut
		let [spaceId, coordName] = coord.split(".");
		let space = Color.space(spaceId);

		if (!(coordName in space.coords)) {
			throw new ReferenceError(`Color space "${space.name}" has no "${coordName}" coordinate.`);
		}

		return [space, coordName];
	}
}

function value(obj, prop, value) {
	let props = prop.split(".");
	let lastProp = props.pop();

	obj = props.reduceRight((acc, cur) => {
		return acc && acc[cur];
	}, obj);

	if (obj) {
		if (value === undefined) {
			// Get
			return obj[lastProp];
		}
		else {
			// Set
			return obj[lastProp] = value;
		}
	}
}

var util = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isString: isString,
	type: type,
	extend: extend,
	copyDescriptor: copyDescriptor,
	capitalize: capitalize,
	toPrecision: toPrecision,
	parseCoord: parseCoord,
	value: value,
	multiplyMatrices: multiplyMatrices
});

/**
 * Module version of Bliss.Hooks.
 * @author Lea Verou
 */
class Hooks {
	add (name, callback, first) {
		if (typeof arguments[0] != "string") {
			// Multiple hooks
			for (var name in arguments[0]) {
				this.add(name, arguments[0][name], arguments[1]);
			}

			return;
		}

		(Array.isArray(name)? name : [name]).forEach(function(name) {
			this[name] = this[name] || [];

			if (callback) {
				this[name][first? "unshift" : "push"](callback);
			}
		}, this);
	}

	run (name, env) {
		this[name] = this[name] || [];
		this[name].forEach(function(callback) {
			callback.call(env && env.context? env.context : env, env);
		});
	}
}

const ε = .000075;
const hasDOM = typeof document !== "undefined";

class Color$1 {
	// Signatures:
	// new Color(stringToParse)
	// new Color(otherColor)
	// new Color(coords, alpha) // defaults to sRGB
	// new Color(CSS variable [, root])
	constructor (...args) {
		let str, color;

		// new Color(color)
		// new Color({spaceId, coords})
		// new Color({space, coords})
		if (args[0] && typeof args[0] === "object" && (args[0].space || args[0].spaceId) && args[0].coords) {
			color = args[0];
		}
		else if (isString(args[0])) {
			// new Color("--foo" [, root])
			if (hasDOM && args[0].indexOf("--") === 0) {
				// CSS variable
				let root = arguments[1] && arguments[1].nodeType === 1? arguments[1] : document.documentElement;
				str = getComputedStyle(root).getPropertyValue(arguments[0]);
			}
			 // new Color(string)
			else if (args.length === 1) {
				str = args[0];
			}

			if (str) {
				color = Color$1.parse(str);
			}
		}

		if (color) {
			if ("spaceId" in color) {
				this.spaceId = color.spaceId;
			}
			else {
				this.space = color.space;
			}

			this.coords = color.coords.slice();
			this.alpha = color.alpha;
		}
		else { // default signature new Color([ColorSpace,] array [, alpha])
			let spaceId, coords, alpha;

			if (Array.isArray(args[0])) {
				// No color space provided, default to sRGB
				[spaceId, coords, alpha] = ["sRGB", ...args];
			}
			else {
				[spaceId, coords, alpha] = args;
			}

			this.spaceId = spaceId || "sRGB";
			this.coords = coords? coords.slice() : [0, 0, 0];
			this.alpha = alpha;
		}

		this.alpha = this.alpha < 1? this.alpha : 1; // this also deals with NaN etc

		// Convert "NaN" to NaN
		for (let i = 0; i < this.coords.length; i++) {
			if (this.coords[i] === "NaN") {
				this.coords[i] = NaN;
			}
		}
	}

	get space () {
		return Color$1.spaces[this.spaceId];
	}

	set space (value) {
		// Setting spaceId works with color space objects too
		return this.spaceId = value;
	}

	get spaceId () {
		return this._spaceId;
	}

	// Handle dynamic changes of color space
	set spaceId (id) {
		let newSpace = Color$1.space(id);

		id = newSpace.id;

		if (this.space && newSpace && this.space !== newSpace) {
			// We’re not setting this for the first time, need to:
			// a) Convert coords
			this.coords = this[id];

			// b) Remove instance properties from previous color space
			for (let prop in this.space.instance) {
				if (this.hasOwnProperty(prop)) {
					delete this[prop];
				}
			}
		}

		this._spaceId = id;

		// Add new instance properties from new color space
		extend(this, this.space.instance);
	}

	get white () {
		return this.space.white || Color$1.whites.D50;
	}

	// Set properties and return current instance
	set (prop, value$1) {
		if (arguments.length === 1 && type(arguments[0]) === "object") {
			// Argument is an object literal
			let object = arguments[0];
			for (let p in object) {
				this.set(p, object[p]);
			}
		}
		else {
			if (typeof value$1 === "function") {
				let current = value(this, prop);

				value(this, prop, value$1.call(this, current));
			}
			else {
				value(this, prop, value$1);
			}

		}

		return this;
	}

	lighten (amount = .25) {
		let ret = new Color$1(this);
		let lightness = ret.lightness;
		ret.lightness = lightness * (1 + amount);

		return ret;
	}

	darken (amount = .25) {
		let ret = new Color$1(this);
		let lightness = ret.lightness;
		ret.lightness = lightness * (1 - amount);

		return ret;
	}

	// Euclidean distance of colors in an arbitrary color space
	distance (color, space = "lab") {
		color = Color$1.get(color);
		space = Color$1.space(space);

		let coords1 = this[space.id];
		let coords2 = color[space.id];

		return Math.sqrt(coords1.reduce((a, c, i) => {
			if (isNaN(c) || isNaN(coords2[i])) {
				return a;
			}

			return a + (coords2[i] - c) ** 2;
		}, 0));
	}

	deltaE (color, o = {}) {
		if (isString(o)) {
			o = {method: o};
		}

		let {method = Color$1.defaults.deltaE, ...rest} = o;
		color = Color$1.get(color);

		if (this["deltaE" + method]) {
			return this["deltaE" + method](color, rest);
		}

		return this.deltaE76(color);
	}

	// 1976 DeltaE. 2.3 is the JND
	deltaE76 (color) {
		return this.distance(color, "lab");
	}

	// Relative luminance
	get luminance () {
		return this.xyz.Y;
	}

	set luminance (value) {
		this.xyz.Y = value;
	}

	// WCAG 2.0 contrast https://www.w3.org/TR/WCAG20-TECHS/G18.html
	contrast (color) {
		color = Color$1.get(color);
		let L1 = this.luminance;
		let L2 = color.luminance;

		if (L2 > L1) {
			[L1, L2] = [L2, L1];
		}

		return (L1 + .05) / (L2 + .05);
	}

	// Chromaticity coordinates
	get uv () {
		let [X, Y, Z] = this.xyz;
		let denom = X + 15 * Y + 3 * Z;
		return [4 * X / denom, 9 * Y / denom];
	}

	get xy () {
		let [X, Y, Z] = this.xyz;
		let  sum = X + Y + Z;
		return [X / sum, Y / sum];
	}
	// no setters, as lightness information is lost
	// when converting color to chromaticity

	// Get formatted coords
	getCoords ({inGamut, precision = Color$1.defaults.precision} = {}) {
		let coords = this.coords;

		if (inGamut && !this.inGamut()) {
			coords = this.toGamut(inGamut === true? undefined : inGamut).coords;
		}

		if (precision !== undefined && precision !== null) {
			let bounds = this.space.coords? Object.values(this.space.coords) : [];

			coords = coords.map((n, i) => toPrecision(n, precision, bounds[i]));
		}

		return coords;
	}

	/**
	 * @return {Boolean} Is the color in gamut?
	 */
	inGamut (space = this.space, options) {
		space = Color$1.space(space);
		return Color$1.inGamut(space, this[space.id], options);
	}

	static inGamut (space, coords, {epsilon = ε} = {}) {
		space = Color$1.space(space);

		if (space.inGamut) {
			return space.inGamut(coords, epsilon);
		}
		else {
			if (!space.coords) {
				return true;
			}

			// No color-space specific inGamut() function, just check if coords are within reference range
			let bounds = Object.values(space.coords);

			return coords.every((c, i) => {
				if (Number.isNaN(c)) {
					return true;
				}

				let [min, max] = bounds[i];

				return (min === undefined || c >= min - epsilon)
				    && (max === undefined || c <= max + epsilon);
			});
		}
	}

	/**
	 * Force coordinates in gamut of a certain color space and return the result
	 * @param {Object} options
	 * @param {string} options.method - How to force into gamut.
	 *        If "clip", coordinates are just clipped to their reference range.
	 *        If in the form [colorSpaceId].[coordName], that coordinate is reduced
	 *        until the color is in gamut. Please note that this may produce nonsensical
	 *        results for certain coordinates (e.g. hue) or infinite loops if reducing the coordinate never brings the color in gamut.
	 * @param {ColorSpace|string} options.space - The space whose gamut we want to map to
	 * @param {boolean} options.inPlace - If true, modify the current color, otherwise return a new one.
	 */
	toGamut ({method = Color$1.defaults.gamutMapping, space = this.space, inPlace} = {}) {
		if (isString(arguments[0])) {
			space = arguments[0];
		}

		space = Color$1.space(space);

		if (this.inGamut(space, {epsilon: 0})) {
			return this;
		}

		// 3 spaces:
		// this.space: current color space
		// space: space whose gamut we are mapping to
		// mapSpace: space with the coord we're reducing
		let color = this.to(space);

		if (method.indexOf(".") > 0 && !this.inGamut(space)) {
			let clipped = color.toGamut({method: "clip", space});
			if (this.deltaE(clipped, {method: "2000"}) > 2) {
				// Reduce a coordinate of a certain color space until the color is in gamut
				let [mapSpace, coordName] = parseCoord(method);

				let mappedColor = color.to(mapSpace);
				let bounds = mapSpace.coords[coordName];
				let min = bounds[0];
				let ε = .01; // for deltaE
				let low = min;
				let high = mappedColor[coordName];
				while (high - low > ε) {
					let clipped = mappedColor.toGamut({space, method: "clip"});
					let deltaE = mappedColor.deltaE(clipped, {method: "2000"});
					if (deltaE - 2 < ε) {
						low = mappedColor[coordName];
					}
					else {
						high = mappedColor[coordName];
					}

					mappedColor[coordName] = (high + low) / 2;
				}

				color = mappedColor.to(space);
			}
			else {
				color = clipped;
			}

		}

		if (method === "clip" // Dumb coord clipping
		    // finish off smarter gamut mapping with clip to get rid of ε, see #17
		    || !color.inGamut(space, {epsilon: 0})
		) {
			let bounds = Object.values(space.coords);

			color.coords = color.coords.map((c, i) => {
				let [min, max] = bounds[i];

				if (min !== undefined) {
					c = Math.max(min, c);
				}

				if (max !== undefined) {
					c = Math.min(c, max);
				}

				return c;
			});
		}

		if (space.id !== this.spaceId) {
			color = color.to(this.space);
		}

		if (inPlace) {
			this.coords = color.coords;
			return this;
		}
		else {
			return color;
		}
	}

	clone () {
		return new Color$1(this.spaceId, this.coords, this.alpha);
	}

	/**
	 * Convert to color space and return a new color
	 * @param {Object|string} space - Color space object or id
	 * @param {Object} options
	 * @param {boolean} options.inGamut - Whether to force resulting color in gamut
	 * @returns {Color}
	 */
	to (space, {inGamut} = {}) {
		space = Color$1.space(space);
		let id = space.id;

		let color = new Color$1(id, this[id], this.alpha);

		if (inGamut) {
			color.toGamut({inPlace: true});
		}

		return color;
	}

	toJSON () {
		return {
			spaceId: this.spaceId,
			coords: this.coords,
			alpha: this.alpha
		};
	}

	/**
	 * Generic toString() method, outputs a color(spaceId ...coords) function
	 * @param {Object} options
	 * @param {number} options.precision - Significant digits
	 * @param {boolean} options.commas - Whether to use commas to separate arguments or spaces (and a slash for alpha) [default: false]
	 * @param {Function|String|Array} options.format - If function, maps all coordinates. Keywords tap to colorspace-specific formats (e.g. "hex")
	 * @param {boolean} options.inGamut - Adjust coordinates to fit in gamut first? [default: false]
	 * @param {string} options.name - Function name [default: color]
	 */
	toString ({
		precision = Color$1.defaults.precision,
		format, commas, inGamut,
		name = "color",
		fallback
	} = {}) {
		let strAlpha = this.alpha < 1? ` ${commas? "," : "/"} ${this.alpha}` : "";

		let coords = this.getCoords({inGamut, precision});

		// Convert NaN to zeros to have a chance at a valid CSS color
		// Also convert -0 to 0
		coords = coords.map(c => c? c : 0);

		if (isString(format)) {
			if (format === "%") {
				format = c => {
					c *= 100;
					return toPrecision(c, precision) + "%";
				};
			}
		}

		if (typeof format === "function") {
			coords = coords.map(format);
		}

		let args = [...coords];

		if (name === "color") {
			// If output is a color() function, add colorspace id as first argument
			args.unshift(this.space? this.space.cssId || this.space.id : "XYZ");
		}

		let ret = `${name}(${args.join(commas? ", " : " ")}${strAlpha})`;

		if (fallback) {
			// Return a CSS string that's actually supported by the current browser
			// Return as a String object, so we can also hang the color object on it
			// in case it's different than this. That way third party code can use that
			// for e.g. computing text color, indicating out of gamut etc

			if (!hasDOM || typeof CSS === "undefined" || CSS.supports("color", ret)) {
				ret = new String(ret);
				ret.color = this;
				return ret;
			}

			let fallbacks = Array.isArray(fallback)? fallback.slice() : Color$1.defaults.fallbackSpaces;

			for (let i = 0, fallbackSpace; fallbackSpace = fallbacks[i]; i++) {
				if (Color$1.spaces[fallbackSpace]) {
					let color = this.to(fallbackSpace);
					ret = color.toString({precision});

					if (CSS.supports("color", ret)) {
						ret = new String(ret);
						ret.color = color;
						return ret;
					}
					else if (fallbacks === Color$1.defaults.fallbackSpaces) {
						// Drop this space from the default fallbacks since it's not supported
						fallbacks.splice(i, 1);
						i--;
					}
				}
			}

			// None of the fallbacks worked, return in the most conservative form possible
			let color = this.to("srgb");
			ret = new String(color.toString({commas: true}));
			ret.color = color;
		}

		return ret;
	}

	equals (color) {
		color = Color$1.get(color);
		return this.spaceId === color.spaceId
		       && this.alpha === color.alpha
		       && this.coords.every((c, i) => c === color.coords[i]);
	}

	// Adapt XYZ from white point W1 to W2
	static chromaticAdaptation (W1, W2, XYZ, options = {}) {
		W1 = W1 || Color$1.whites.D50;
		W2 = W2 || Color$1.whites.D50;

		if (W1 === W2) {
			return XYZ;
		}

		let env = {W1, W2, XYZ, options};

		Color$1.hooks.run("chromatic-adaptation-start", env);

		if (!env.M) {
			if (env.W1 === Color$1.whites.D65 && env.W2 === Color$1.whites.D50) {
				// Linear Bradford CAT
				// env.M = [
				// 	[ 1.0478112,  0.0228866, -0.0501270],
				// 	[ 0.0295424,  0.9904844, -0.0170491],
				// 	[-0.0092345,  0.0150436,  0.7521316]
				// ];

				env.M = [
					[  1.0479298208405488,    0.022946793341019088,  -0.05019222954313557 ],
					[  0.029627815688159344,  0.990434484573249,     -0.01707382502938514 ],
					[ -0.009243058152591178,  0.015055144896577895,   0.7518742899580008  ]
				];
			}
			else if (env.W1 === Color$1.whites.D50 && env.W2 === Color$1.whites.D65) {
				// env.M = [
				// 	[ 0.9555766, -0.0230393,  0.0631636],
				// 	[-0.0282895,  1.0099416,  0.0210077],
				// 	[ 0.0122982, -0.0204830,  1.3299098]
				// ];

				env.M = [
					[  0.9554734527042182,   -0.023098536874261423,  0.0632593086610217   ],
					[ -0.028369706963208136,  1.0099954580058226,    0.021041398966943008 ],
					[  0.012314001688319899, -0.020507696433477912,  1.3303659366080753   ]
				];
			}
		}

		Color$1.hooks.run("chromatic-adaptation-end", env);

		if (env.M) {
			return multiplyMatrices(env.M, env.XYZ);
		}
		else {
			throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
		}
	}

	// CSS color to Color object
	static parse (str) {
		let env = {str};
		Color$1.hooks.run("parse-start", env);

		if (env.color) {
			return env.color;
		}

		env.parsed = Color$1.parseFunction(env.str);
		Color$1.hooks.run("parse-function-start", env);

		if (env.color) {
			return env.color;
		}

		// Try colorspace-specific parsing
		for (let space of Object.values(Color$1.spaces)) {
			if (space.parse) {
				let color = space.parse(env.str, env.parsed);

				if (color) {
					return color;
				}
			}
		}

		let name = env.parsed && env.parsed.name;

		if (!/^color|^rgb/.test(name) && hasDOM && document.head) {
			// Use browser to parse when a DOM is available
			// we mainly use this for color names right now if keywords.js is not included
			// and for future-proofing

			let previousColor = document.head.style.color;
			document.head.style.color = "";
			document.head.style.color = str;

			if (document.head.style.color !== previousColor) {
				let computed = getComputedStyle(document.head).color;
				document.head.style.color = previousColor;

				if (computed) {
					str = computed;
					env.parsed = Color$1.parseFunction(computed);
					name = env.parsed.name;
				}
			}
		}

		if (env.parsed) {
			// It's a function
			if (name === "rgb" || name === "rgba") {
				let args = env.parsed.args.map((c, i) => i < 3 && !c.percentage? c / 255 : +c);

				return {
					spaceId: "srgb",
					coords: args.slice(0, 3),
					alpha: args[3]
				};
			}
			else if (name === "color") {
				let spaceId = env.parsed.args.shift().toLowerCase();
				let space = Object.values(Color$1.spaces).find(space => (space.cssId || space.id) === spaceId);

				if (space) {
					// From https://drafts.csswg.org/css-color-4/#color-function
					// If more <number>s or <percentage>s are provided than parameters that the colorspace takes, the excess <number>s at the end are ignored.
					// If less <number>s or <percentage>s are provided than parameters that the colorspace takes, the missing parameters default to 0. (This is particularly convenient for multichannel printers where the additional inks are spot colors or varnishes that most colors on the page won’t use.)
					let argCount = Object.keys(space.coords).length;
					let alpha = env.parsed.rawArgs.indexOf("/") > 0? env.parsed.args.pop() : 1;
					let coords = Array(argCount).fill(0);
					coords.forEach((_, i) => coords[i] = env.parsed.args[i] || 0);

					return {spaceId: space.id, coords, alpha};
				}
				else {
					throw new TypeError(`Color space ${spaceId} not found. Missing a plugin?`);
				}
			}
		}

		throw new TypeError(`Could not parse ${str} as a color. Missing a plugin?`);
	}

	/**
	 * Parse a CSS function, regardless of its name and arguments
	 * @param String str String to parse
	 * @return Object An object with {name, args, rawArgs}
	 */
	static parseFunction (str) {
		if (!str) {
			return;
		}

		str = str.trim();

		const isFunctionRegex = /^([a-z]+)\((.+?)\)$/i;
		const isNumberRegex = /^-?[\d.]+$/;
		let parts = str.match(isFunctionRegex);

		if (parts) {
			// It is a function, parse args
			let args = parts[2].match(/([-\w.]+(?:%|deg)?)/g);

			args = args.map(arg => {
				if (/%$/.test(arg)) {
					// Convert percentages to 0-1 numbers
					let n = new Number(+arg.slice(0, -1) / 100);
					n.percentage = true;
					return n;
				}
				else if (/deg$/.test(arg)) {
					// Drop deg from degrees and convert to number
					let n = new Number(+arg.slice(0, -3));
					n.deg = true;
					return n;
				}
				else if (isNumberRegex.test(arg)) {
					// Convert numerical args to numbers
					return +arg;
				}

				// Return everything else as-is
				return arg;
			});

			return {
				name: parts[1].toLowerCase(),
				rawName: parts[1],
				rawArgs: parts[2],
				// An argument could be (as of css-color-4):
				// a number, percentage, degrees (hue), ident (in color())
				args
			};
		}
	}

	// One-off convert between color spaces
	static convert (coords, fromSpace, toSpace) {
		fromSpace = Color$1.space(fromSpace);
		toSpace = Color$1.space(toSpace);

		if (fromSpace === toSpace) {
			// Same space, no change needed
			return coords;
		}

		// Convert NaN to 0, which seems to be valid in every coordinate of every color space
		coords = coords.map(c => Number.isNaN(c)? 0 : c);

		let fromId = fromSpace.id;
		let toId = toSpace.id;

		// Do we have a more specific conversion function?
		// Avoids round-tripping to & from XYZ
		if (toSpace.from && toSpace.from[fromId]) {
			// No white point adaptation, we assume the custom function takes care of it
			return toSpace.from[fromId](coords);
		}

		if (fromSpace.to && fromSpace.to[toId]) {
			// No white point adaptation, we assume the custom function takes care of it
			return fromSpace.to[toId](coords);
		}

		let XYZ = fromSpace.toXYZ(coords);

		if (toSpace.white !== fromSpace.white) {
			// Different white point, perform white point adaptation
			XYZ = Color$1.chromaticAdaptation(fromSpace.white, toSpace.white, XYZ);
		}

		return toSpace.fromXYZ(XYZ);
	}

	/**
	 * Get a color from the argument passed
	 * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
	 */
	static get (color, ...args) {
		if (color instanceof Color$1) {
			return color;
		}

		return new Color$1(color, ...args);
	}

	/**
	 * Return a color space object from an id or color space object
	 * Mainly used internally, so that functions can easily accept either
	 */
	static space (space) {
		let type$1 = type(space);

		if (type$1 === "string") {
			// It's a color space id
			let ret = Color$1.spaces[space.toLowerCase()];

			if (!ret) {
				throw new TypeError(`No color space found with id = "${space}"`);
			}

			return ret;
		}
		else if (space && type$1 === "object") {
			return space;
		}

		throw new TypeError(`${space} is not a valid color space`);
	}

	// Define a new color space
	static defineSpace ({id, inherits}) {
		let space = Color$1.spaces[id] = arguments[0];

		if (inherits) {
			const except = ["id", "parse", "instance", "properties"];
			let parent = Color$1.spaces[inherits];

			for (let prop in parent) {
				if (!except.includes(prop) && !(prop in space)) {
					copyDescriptor(space, parent, prop);
				}
			}
		}

		let coords = space.coords;

		if (space.properties) {
			extend(Color$1.prototype, space.properties);
		}

		if (!space.fromXYZ && !space.toXYZ) {
			// Using a different connection space, define from/to XYZ functions based on that
			let connectionSpace;

			// What are we using as a connection space?
			if (space.from && space.to) {
				let from = new Set(Object.keys(space.from));
				let to = new Set(Object.keys(space.to));

				// Find spaces we can both convert to and from
				let candidates = [...from].filter(id => {
					if (to.has(id)) {
						// Of those, only keep those that have fromXYZ and toXYZ
						let space = Color$1.spaces[id];
						return space && space.fromXYZ && space.toXYZ;
					}
				});

				if (candidates.length > 0) {
					// Great, we found connection spaces! Pick the first one
					connectionSpace = Color$1.spaces[candidates[0]];
				}
			}

			if (connectionSpace) {
				// Define from/to XYZ functions based on the connection space
				Object.assign(space, {
					// ISSUE do we need white point adaptation here?
					fromXYZ(XYZ) {
						let newCoords = connectionSpace.fromXYZ(XYZ);
						return this.from[connectionSpace.id](newCoords);
					},
					toXYZ(coords) {
						let newCoords = this.to[connectionSpace.id](coords);
						return connectionSpace.toXYZ(newCoords);
					}
				});
			}
			else {
				throw new ReferenceError(`No connection space found for ${space.name}.`);
			}
		}

		let coordNames = Object.keys(coords);

		// Define getters and setters for color[spaceId]
		// e.g. color.lch on *any* color gives us the lch coords
		Object.defineProperty(Color$1.prototype, id, {
			// Convert coords to coords in another colorspace and return them
			// Source colorspace: this.spaceId
			// Target colorspace: id
			get () {
				let ret = Color$1.convert(this.coords, this.spaceId, id);

				if (typeof Proxy === "undefined") {
					// If proxies are not supported, just return a static array
					return ret;
				}

				// Enable color.spaceId.coordName syntax
				return new Proxy(ret, {
					has: (obj, property) => {
						return coordNames.includes(property) || Reflect.has(obj, property);
					},
					get: (obj, property, receiver) => {
						let i = coordNames.indexOf(property);

						if (i > -1) {
							return obj[i];
						}

						return Reflect.get(obj, property, receiver);
					},
					set: (obj, property, value, receiver) => {
						let i = coordNames.indexOf(property);

						if (property > -1) { // Is property a numerical index?
							i = property; // next if will take care of modifying the color
						}

						if (i > -1) {
							obj[i] = value;

							// Update color.coords
							this.coords = Color$1.convert(obj, id, this.spaceId);

							return true;
						}

						return Reflect.set(obj, property, value, receiver);
					},

				});
			},
			// Convert coords in another colorspace to internal coords and set them
			// Target colorspace: this.spaceId
			// Source colorspace: id
			set (coords) {
				this.coords = Color$1.convert(coords, id, this.spaceId);
			},
			configurable: true,
			enumerable: true
		});

		return space;
	}

	// Define a shortcut property, e.g. color.lightness instead of color.lch.lightness
	// Shorcut is looked up on Color.shortcuts at calling time
	// If `long` is provided, it's added to Color.shortcuts as well, otherwise it's assumed to be already there
	static defineShortcut(prop, obj = Color$1.prototype, long) {
		if (long) {
			Color$1.shortcuts[prop] = long;
		}

		Object.defineProperty(obj, prop, {
			get () {
				return value(this, Color$1.shortcuts[prop]);
			},
			set (value$1) {
				return value(this, Color$1.shortcuts[prop], value$1);
			},
			configurable: true,
			enumerable: true
		});
	}

	// Define static versions of all instance methods
	static statify(names = []) {
		names = names || Object.getOwnPropertyNames(Color$1.prototype);

		for (let prop of Object.getOwnPropertyNames(Color$1.prototype)) {
			let descriptor = Object.getOwnPropertyDescriptor(Color$1.prototype, prop);

			if (descriptor.get || descriptor.set) {
				continue; // avoid accessors
			}

			let method = descriptor.value;

			if (typeof method === "function" && !(prop in Color$1)) {
				// We have a function, and no static version already
				Color$1[prop] = function(color, ...args) {
					color = Color$1.get(color);
					return color[prop](...args);
				};
			}
		}
	}
}
Object.assign(Color$1, {
	util,
	hooks: new Hooks(),
	whites: {
		// from ASTM E308-01
		// D50: [0.96422, 1.00000, 0.82521],
		// D65: [0.95047, 1.00000, 1.08883],
		// for compatibility, the four-digit chromaticity-derived ones everyone else uses
		D50: [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585],
		D65: [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290],

	},
	spaces: {},

	// These will be available as getters and setters on EVERY color instance.
	// They refer to LCH by default, but can be set to anything
	// and you can add more by calling Color.defineShortcut()
	shortcuts: {
		"lightness": "lch.lightness",
		"chroma": "lch.chroma",
		"hue": "lch.hue",
	},

	// Global defaults one may want to configure
	defaults: {
		gamutMapping: "lch.chroma",
		precision: 5,
		deltaE: "76", // Default deltaE method
		fallbackSpaces: ["p3", "srgb"]
	}
});

Color$1.defineSpace({
	id: "xyz",
	name: "XYZ",
	coords: {
		X: [],
		Y: [],
		Z: []
	},
	white: Color$1.whites.D65,
	inGamut: coords => true,
	toXYZ: coords => coords,
	fromXYZ: coords => coords
});

Color$1.defineSpace({
	id: "xyz-d50",
	name: "XYZ-D50",
	coords: {
		X: [],
		Y: [],
		Z: []
	},
	white: Color$1.whites.D50,
	inGamut: coords => true,
	toXYZ: coords => coords,
	fromXYZ: coords => coords
});

Color$1.defineSpace({
	id: "xyz-d65",
	name: "XYZ-D65",
	coords: {
		X: [],
		Y: [],
		Z: []
	},
	white: Color$1.whites.D65,
	inGamut: coords => true,
	toXYZ: coords => coords,
	fromXYZ: coords => coords
});

for (let prop in Color$1.shortcuts) {
	Color$1.defineShortcut(prop);
}

// Make static methods for all instance methods
Color$1.statify();

// Color.DEBUGGING = true;

Color$1.defineSpace({
	id: "lab",
	name: "Lab",
	coords: {
		L: [0, 100],
		a: [-100, 100],
		b: [-100, 100]
	},
	inGamut: coords => true,
	// Assuming XYZ is relative to D50, convert to CIE Lab
	// from CIE standard, which now defines these as a rational fraction
	white: Color$1.whites.D50,
	ε: 216/24389,  // 6^3/29^3 == (24/116)^3
	ε3: 24/116,
	κ: 24389/27,   // 29^3/3^3
	// κ * ε  = 2^3 = 8
	fromXYZ(XYZ) {
		// Convert D50-adapted XYX to Lab
		//  CIE 15.3:2004 section 8.2.1.1
		const {κ, ε, white} = this;

		// compute xyz, which is XYZ scaled relative to reference white
		let xyz = XYZ.map((value, i) => value / white[i]);

		// now compute f
		let f = xyz.map(value => value > ε ? Math.cbrt(value) : (κ * value + 16)/116);

		return [
			(116 * f[1]) - 16, 	 // L
			500 * (f[0] - f[1]), // a
			200 * (f[1] - f[2])  // b
		];
	},
	toXYZ(Lab) {
		// Convert Lab to D50-adapted XYZ
		// Same result as CIE 15.3:2004 Appendix D although the derivation is different
		// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		const {κ, ε3, white} = this;

		// compute f, starting with the luminance-related term
		let f = [];
		f[1] = (Lab[0] + 16)/116;
		f[0] = Lab[1]/500 + f[1];
		f[2] = f[1] - Lab[2]/200;

		// compute xyz
		var xyz = [
			f[0]   > ε3  ?  Math.pow(f[0], 3)            : (116*f[0]-16)/κ,
			Lab[0] > 8   ?  Math.pow((Lab[0]+16)/116, 3) : Lab[0]/κ,
			f[2]   > ε3  ?  Math.pow(f[2], 3)            : (116*f[2]-16)/κ
		];

		// Compute XYZ by scaling xyz by reference white
		return xyz.map((value, i) => value * white[i]);
	},
	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && parsed.name === "lab") {
			let L = parsed.args[0];

			// Percentages in lab() don't translate to a 0-1 range, but a 0-100 range
			if (L.percentage) {
				parsed.args[0] = L * 100;
			}

			return {
				spaceId: "lab",
				coords: parsed.args.slice(0, 3),
				alpha: parsed.args.slice(3)[0]
			};
		}
	},
	instance: {
		toString ({format, ...rest} = {}) {
			if (!format) {
				format = (c, i) => i === 0? c + "%" : c;
			}

			return Color$1.prototype.toString.call(this, {name: "lab", format, ...rest});
		}
	}
});

const range = [0, 360];
range.isAngle = true;

function constrain (angle) {
	return ((angle % 360) + 360) % 360;
}

function adjust (arc, angles) {
	if (arc === "raw") {
		return angles;
	}

	let [a1, a2] = angles.map(constrain);

	let angleDiff = a2 - a1;

	if (arc === "increasing") {
		if (angleDiff < 0) {
			a2 += 360;
		}
	}
	else if (arc === "decreasing") {
		if (angleDiff > 0) {
			a1 += 360;
		}
	}
	else if (arc === "longer") {
		if (-180 < angleDiff && angleDiff < 180) {
			if (angleDiff > 0) {
				a2 += 360;
			}
			else {
				a1 += 360;
			}
		}
	}
	else if (arc === "shorter") {
		if (angleDiff > 180) {
			a1 += 360;
		}
		else if (angleDiff < -180) {
			a2 += 360;
		}
	}

	return [a1, a2];
}

Color$1.defineSpace({
	id: "lch",
	name: "LCH",
	coords: {
		lightness: [0, 100],
		chroma: [0, 150],
		hue: range,
	},
	inGamut: coords => true,
	white: Color$1.whites.D50,
	from: {
		lab (Lab) {
			// Convert to polar form
			let [L, a, b] = Lab;
			let hue;
			const ε = 0.02;

			if (Math.abs(a) < ε && Math.abs(b) < ε) {
				hue = NaN;
			}
			else {
				hue = Math.atan2(b, a) * 180 / Math.PI;
			}

			return [
				L, // L is still L
				Math.sqrt(a ** 2 + b ** 2), // Chroma
				constrain(hue) // Hue, in degrees [0 to 360)
			];
		}
	},
	to: {
		lab (LCH) {
			// Convert from polar form
			let [Lightness, Chroma, Hue] = LCH;
			// Clamp any negative Chroma
			if (Chroma < 0) {
				Chroma = 0;
			}			// Deal with NaN Hue
			if (isNaN(Hue)) {
				Hue = 0;
			}
			return [
				Lightness, // L is still L
				Chroma * Math.cos(Hue * Math.PI / 180), // a
				Chroma * Math.sin(Hue * Math.PI / 180)  // b
			];
		}
	},
	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && parsed.name === "lch") {
			let L = parsed.args[0];

			// Percentages in lch() don't translate to a 0-1 range, but a 0-100 range
			if (L.percentage) {
				parsed.args[0] = L * 100;
			}

			return {
				spaceId: "lch",
				coords: parsed.args.slice(0, 3),
				alpha: parsed.args.slice(3)[0]
			};
		}
	},
	instance: {
		toString ({format, ...rest} = {}) {
			if (!format) {
				format = (c, i) => i === 0? c + "%" : c;
			}

			return Color$1.prototype.toString.call(this, {name: "lch", format, ...rest});
		}
	}
});

Color$1.defineSpace({
	id: "srgb",
	name: "sRGB",
	coords: {
		red: [0, 1],
		green: [0, 1],
		blue: [0, 1]
	},
	white: Color$1.whites.D65,

	// convert an array of sRGB values in the range 0.0 - 1.0
	// to linear light (un-companded) form.
	// https://en.wikipedia.org/wiki/SRGB
	toLinear(RGB) {
		return RGB.map(function (val) {
			let sign = val < 0? -1 : 1;
			let abs = Math.abs(val);

			if (abs < 0.04045) {
				return val / 12.92;
			}

			return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
		});
	},
	// convert an array of linear-light sRGB values in the range 0.0-1.0
	// to gamma corrected form
	// https://en.wikipedia.org/wiki/SRGB
	toGamma(RGB) {
		return RGB.map(function (val) {
			let sign = val < 0? -1 : 1;
			let abs = Math.abs(val);

			if (abs > 0.0031308) {
				return sign * (1.055 * Math.pow(abs, 1/2.4) - 0.055);
			}

			return 12.92 * val;
		});
	},

	// This matrix was calculated directly from the RGB and white chromaticities
	// when rounded to 8 decimal places, it agrees completely with the official matrix
	// see https://github.com/w3c/csswg-drafts/issues/5922
	toXYZ_M: [
		[ 0.41239079926595934, 0.357584339383878,   0.1804807884018343  ],
		[ 0.21263900587151027, 0.715168678767756,   0.07219231536073371 ],
		[ 0.01933081871559182, 0.11919477979462598, 0.9505321522496607  ]
	],

	// This matrix is the inverse of the above;
	// again it agrees with the official definiton when rounded to 8 decimal places
	fromXYZ_M: [
		[  3.2409699419045226,  -1.537383177570094,   -0.4986107602930034  ],
		[ -0.9692436362808796,   1.8759675015077202,   0.04155505740717559 ],
		[  0.05563007969699366, -0.20397695888897652,  1.0569715142428786  ]
	],

	// convert an array of sRGB values to CIE XYZ
	// using sRGB's own white, D65 (no chromatic adaptation)
	toXYZ(rgb) {
		rgb = this.toLinear(rgb);

		return multiplyMatrices(this.toXYZ_M, rgb);
	},
	fromXYZ(XYZ) {
		return this.toGamma(multiplyMatrices(this.fromXYZ_M, XYZ));
	},
	// Properties added to Color.prototype
	properties: {
		toHex({
			alpha = true, // include alpha in hex?
			collapse = true // collapse to 3-4 digit hex when possible?
		} = {}) {
			let coords = this.to("srgb", {inGamut: true}).coords;

			if (this.alpha < 1 && alpha) {
				coords.push(this.alpha);
			}

			coords = coords.map(c => Math.round(c * 255));

			let collapsible = collapse && coords.every(c => c % 17 === 0);

			let hex = coords.map(c => {
				if (collapsible) {
					return (c/17).toString(16);
				}

				return c.toString(16).padStart(2, "0");
			}).join("");

			return "#" + hex;
		},

		get hex() {
			return this.toHex();
		}
	},
	// Properties present only on sRGB colors
	instance: {
		toString ({inGamut = true, commas, format = "%", ...rest} = {}) {
			if (format === 255) {
				format = c => c * 255;
			}
			else if (format === "hex") {
				return this.toHex(arguments[0]);
			}

			return Color$1.prototype.toString.call(this, {
				inGamut, commas, format,
				name: "rgb" + (commas && this.alpha < 1? "a" : ""),
				...rest
			});
		}
	},

	parseHex (str) {
		if (str.length <= 5) {
			// #rgb or #rgba, duplicate digits
			str = str.replace(/[a-f0-9]/gi, "$&$&");
		}

		let rgba = [];
		str.replace(/[a-f0-9]{2}/gi, component => {
			rgba.push(parseInt(component, 16) / 255);
		});

		return {
			spaceId: "srgb",
			coords: rgba.slice(0, 3),
			alpha: rgba.slice(3)[0]
		};
	}
});

Color$1.hooks.add("parse-start", env => {
	let str = env.str;

	if (/^#([a-f0-9]{3,4}){1,2}$/i.test(str)) {
		env.color = Color$1.spaces.srgb.parseHex(str);
	}
});

// This is the linear-light version of sRGB
// as used for example in SVG filters
// or in Canvas

Color$1.defineSpace({
	inherits: "srgb",
	id: "srgb-linear",
	name: "sRGB-linear",
    toLinear(RGB) {
        return RGB;
    },
    toGamma(RGB) {
        return RGB;
    },
});

Color$1.defineSpace({
	id: "hsl",
	name: "HSL",
	coords: {
		hue: range,
		saturation: [0, 100],
		lightness: [0, 100]
	},
	inGamut (coords, epsilon) {
		let rgb = this.to.srgb(coords);
		return Color$1.inGamut("srgb", rgb, {epsilon: epsilon});
	},
	white: Color$1.whites.D65,

	// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
	from: {
		srgb (rgb) {
			let max = Math.max(...rgb);
			let min = Math.min(...rgb);
			let [r, g, b] = rgb;
			let [h, s, l] = [NaN, 0, (min + max)/2];
			let d = max - min;

			if (d !== 0) {
				s = (l === 0 || l === 1) ? 0 : (max - l) / Math.min(l, 1 - l);

				switch (max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4;
				}

				h = h * 60;
			}

			return [h, s * 100, l * 100];
		}
	},
	// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
	to: {
		srgb (hsl) {
			let [h, s, l] = hsl;
			h = h % 360;

			if (h < 0) {
				h += 360;
			}

			s /= 100;
			l /= 100;

			function f(n) {
				let k = (n + h/30) % 12;
				let a = s * Math.min(l, 1 - l);
				return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
			}

			return [f(0), f(8), f(4)];
		}
	},

	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && /^hsla?$/.test(parsed.name)) {
			let hsl = parsed.args;

			 // percentages are converted to [0, 1] by parseFunction
			hsl[1] *= 100;
			hsl[2] *= 100;

			return {
				spaceId: "hsl",
				coords: hsl.slice(0, 3),
				alpha: hsl[3]
			};
		}
	},

	instance: {
		toString ({precision, commas, format, inGamut, ...rest} = {}) {
			if (!format) {
				format = (c, i) => i > 0? c + "%" : c;
			}

			return Color$1.prototype.toString.call(this, {
				inGamut: true, // hsl() out of gamut makes no sense
				commas, format,
				name: "hsl" + (commas && this.alpha < 1? "a" : ""),
				...rest
			});
		}
	}
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

Color$1.defineSpace({
	id: "hwb",
	name: "HWB",
	coords: {
		hue: range,
		whiteness: [0, 100],
		blackness: [0, 100]
	},
	inGamut (coords, epsilon) {
		let rgb = this.to.srgb(coords);
		return Color$1.inGamut("srgb", rgb, {epsilon: epsilon});
	},
	 white: Color$1.whites.D65,

	from: {
		srgb (rgb) {
			let hsl = Color$1.spaces.hsl.from.srgb(rgb);
			let h = hsl[0];
			// calculate white and black
			let w = Math.min(...rgb);
			let b = 1 - Math.max(...rgb);
			w *= 100;
			b *= 100;
			return [h, w, b];
		},

		hsv (hsv) {
			let [h, s, v] = hsv;

			return [h, v * (100 - s) / 100, 100 - v];
		},

		hsl (hsl) {
			let hsv = Color$1.spaces.hsv.from.hsl(hsl);
			return this.hsv(hsv);
		}
	},

	to: {
		srgb (hwb) {
			let [h, w, b] = hwb;

			// Now convert percentages to [0..1]
			w /= 100;
			b /= 100;

			// Achromatic check (white plus black >= 1)
			let sum = w + b;
			if (sum >= 1) {
				 let gray = w / sum;
				 return [gray, gray, gray];
			}

			// From https://drafts.csswg.org/css-color-4/#hwb-to-rgb
			let rgb = Color$1.spaces.hsl.to.srgb([h, 100, 50]);
			for (var i = 0; i < 3; i++) {
				rgb[i] *= (1 - w - b);
				rgb[i] += w;
			}
			return rgb;
		},

		hsv (hwb) {
			let [h, w, b] = hwb;

			// Now convert percentages to [0..1]
			w /= 100;
			b /= 100;

			// Achromatic check (white plus black >= 1)
			let sum = w + b;
			if (sum >= 1) {
				 let gray = w / sum;
				 return [h, 0, gray * 100];
			}

			let v = (1 - b);
			let s = (v === 0) ? 0 : 1 - w / v;
			return [h, s * 100, v * 100];
		},

		hsl (hwb) {
			let hsv = Color$1.spaces.hwb.to.hsv(hwb);
			return (Color$1.spaces.hsv.to.hsl(hsv));
		}
	},

	 parse (str, parsed = Color$1.parseFunction(str)) {
		  if (parsed && /^hwba?$/.test(parsed.name)) {
			let hwb = parsed.args;

			 // white and black percentages are converted to [0, 1] by parseFunction
			hwb[1] *= 100;
			hwb[2] *= 100;

			return {
				spaceId: "hwb",
				coords: hwb.slice(0, 3),
				alpha: hwb[3]
			};
		}
	 },

	 instance: {
		toString ({format, commas, inGamut, ...rest} = {}) {
				if (!format) {
				format = (c, i) => i > 0? c + "%" : c;
			}

			return Color$1.prototype.toString.call(this, {
				inGamut: true, // hwb() out of gamut makes no sense
				commas: false,  // never commas
				format,
				name: "hwb",
				...rest
			});
		  }
	 }
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

Color$1.defineSpace({
	id: "hsv",
	name: "HSV",
	coords: {
		hue: range,
		saturation: [0, 100],
		value: [0, 100]
	},
	inGamut (coords, epsilon) {
		let hsl = this.to.hsl(coords);
		return Color$1.spaces.hsl.inGamut(hsl, {epsilon: epsilon});
	},
	white: Color$1.whites.D65,

	from: {
		// https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
		hsl (hsl) {
			let [h, s, l] = hsl;
			s /= 100;
			l /= 100;

			let v = l + s * Math.min(l, 1 - l);

			return [
				h, // h is the same
				v === 0? 0 : 200 * (1 - l / v), // s
				100 * v
			];
		},
	},

	to: {
		// https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
		hsl (hsv) {
			let [h, s, v] = hsv;

			s /= 100;
			v /= 100;

			let l = v * (1 - s/2);

			return [
				h, // h is the same
				(l === 0 || l === 1)? 0 : ((v - l) / Math.min(l, 1 - l)) * 100,
				l * 100
			];
		}
	}
});

Color$1.defineSpace({
	inherits: "srgb",
	id: "p3",
	name: "P3",
	cssId: "display-p3",
	// Gamma correction is the same as sRGB
	// convert an array of display-p3 values to CIE XYZ
	// using  D65 (no chromatic adaptation)
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	// Functions are the same as sRGB, just with different matrices
	toXYZ_M: [
		[0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
		[0.2289745640697488, 0.6917385218365064,  0.079286914093745],
		[0.0000000000000000, 0.04511338185890264, 1.043944368900976]
	],
	fromXYZ_M: [
		[ 2.493496911941425,   -0.9313836179191239, -0.40271078445071684],
		[-0.8294889695615747,   1.7626640603183463,  0.023624685841943577],
		[ 0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
	]
});

Color$1.defineSpace({
	inherits: "srgb",
	id: "a98rgb",
	name: "Adobe 98 RGB compatible",
	cssId: "a98-rgb",
	toLinear(RGB) {
		return RGB.map(val => Math.pow(Math.abs(val), 563/256)*Math.sign(val));
	},
	toGamma(RGB) {
		return RGB.map(val => Math.pow(Math.abs(val), 256/563)*Math.sign(val));
	},
	// convert an array of linear-light a98-rgb values to CIE XYZ
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	// has greater numerical precision than section 4.3.5.3 of
	// https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
	// but the values below were calculated from first principles
	// from the chromaticity coordinates of R G B W
	toXYZ_M: [
		[ 0.5766690429101305,   0.1855582379065463,   0.1882286462349947  ],
		[ 0.29734497525053605,  0.6273635662554661,   0.07529145849399788 ],
		[ 0.02703136138641234,  0.07068885253582723,  0.9913375368376388  ]
	],
	fromXYZ_M: [
		[  2.0415879038107465,    -0.5650069742788596,   -0.34473135077832956 ],
		[ -0.9692436362808795,     1.8759675015077202,    0.04155505740717557 ],
		[  0.013444280632031142,  -0.11836239223101838,   1.0151749943912054  ]
	]
});

Color$1.defineSpace({
	inherits: "srgb",
	id: "prophoto",
	name: "ProPhoto",
	cssId: "prophoto-rgb",
	white: Color$1.whites.D50,
	toLinear(RGB) {
		// Transfer curve is gamma 1.8 with a small linear portion
		const Et2 = 16/512;
		return RGB.map(function (val) {
			if (val < Et2) {
				return val / 16;
			}

			return Math.pow(val, 1.8);
		});
	},
	toGamma(RGB) {
		const Et = 1/512;
		return RGB.map(function (val) {
			if (val >= Et) {
				return Math.pow(val, 1/1.8);
			}

			return 16 * val;
		});
	},
	// convert an array of  prophoto-rgb values to CIE XYZ
	// using  D50 (so no chromatic adaptation needed afterwards)
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	toXYZ_M: [
		[ 0.7977604896723027,  0.13518583717574031,  0.0313493495815248     ],
		[ 0.2880711282292934,  0.7118432178101014,   0.00008565396060525902 ],
		[ 0.0,                 0.0,                  0.8251046025104601     ]
	],
	fromXYZ_M: [
		[  1.3457989731028281,  -0.25558010007997534,  -0.05110628506753401 ],
		[ -0.5446224939028347,   1.5082327413132781,    0.02053603239147973 ],
		[  0.0,                  0.0,                   1.2119675456389454  ]
	]
});

Color$1.defineSpace({
	inherits: "srgb",
	id: "rec2020",
	name: "REC.2020",
	α: 1.09929682680944,
	β: 0.018053968510807,
	// Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
	toLinear(RGB) {
		const {α, β} = this;

		return RGB.map(function (val) {
			if (val < β * 4.5 ) {
				return val / 4.5;
			}

			return Math.pow((val + α -1 ) / α, 1/0.45);
		});
	},
	toGamma(RGB) {
		const {α, β} = this;

		return RGB.map(function (val) {
			if (val >= β ) {
				return α * Math.pow(val, 0.45) - (α - 1);
			}

			return 4.5 * val;
		});
	},
	// convert an array of linear-light rec2020 values to CIE XYZ
	// using  D65 (no chromatic adaptation)
	// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	// 0 is actually calculated as  4.994106574466076e-17
	toXYZ_M: [
		[ 0.6369580483012914, 0.14461690358620832,  0.1688809751641721  ],
		[ 0.2627002120112671, 0.6779980715188708,   0.05930171646986196 ],
		[ 0.000000000000000,  0.028072693049087428, 1.060985057710791   ]
	],
	// from ITU-R BT.2124-0 Annex 2 p.3
	fromXYZ_M: [
		[  1.716651187971268,  -0.355670783776392, -0.253366281373660  ],
		[ -0.666684351832489,   1.616481236634939,  0.0157685458139111 ],
		[  0.017639857445311,  -0.042770613257809,  0.942103121235474  ]
	]
});

Color$1.defineSpace({
// Absolute CIE XYZ, with a D65 whitepoint,
// as used in most HDR colorspaces as a starting point.
// SDR spaces are converted per BT.2048
// so that diffuse, media white is 203 cd/m²
    id: "absxyzd65",
    name: "Absolute XYZ D65",
	coords: {
		Xa: [0, 9504.7],
		Ya: [0, 10000],
		Za: [0, 10888.3]
	},
    white: Color$1.whites.D65,
    Yw: 203,	// absolute luminance of media white
	inGamut: coords => true,
    fromXYZ (XYZ) {

		const {Yw} = this;

		// Make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
        // Relative XYZ has Y=1 for media white

        return XYZ.map (function (val) {
			return Math.max(val * Yw, 0);
		});
    },
    toXYZ (AbsXYZ) {

		// Convert to media-white relative XYZ

		const {Yw} = this;

		let XYZ = AbsXYZ.map (function (val) {
			return Math.max(val / Yw, 0);
        });

		return XYZ;
	}
});

Color$1.defineSpace({
	id: "jzazbz",
	cssid: "Jzazbz",
    name: "Jzazbz",
    coords: {
		Jz: [0, 1],
		az: [-0.5, 0.5],
		bz: [-0.5, 0.5]
    },
    inGamut: coords => true,
	// Note that XYZ is relative to D65
	white: Color$1.whites.D65,
	b: 1.15,
	g: 0.66,
	n:2610 / (2 ** 14),
	ninv: (2 ** 14) / 2610,
	c1: 3424 / (2 ** 12),
	c2: 2413 / (2 ** 7),
	c3: 2392 / (2 ** 7),
	p: 1.7 * 2523 / (2 ** 5),
	pinv: (2 ** 5) / (1.7 * 2523),
	d: -0.56,
	d0: 1.6295499532821566E-11,
	XYZtoCone_M: [
		[  0.41478972, 0.579999,  0.0146480 ],
		[ -0.2015100,  1.120649,  0.0531008 ],
		[ -0.0166008,  0.264800,  0.6684799 ]
	],
	// XYZtoCone_M inverted
	ConetoXYZ_M: [
		[  1.9242264357876067,  -1.0047923125953657,  0.037651404030618   ],
		[  0.35031676209499907,  0.7264811939316552, -0.06538442294808501 ],
		[ -0.09098281098284752, -0.3127282905230739,  1.5227665613052603  ]
	],
	ConetoIab_M: [
		[  0.5,       0.5,       0        ],
		[  3.524000, -4.066708,  0.542708 ],
		[  0.199076,  1.096799, -1.295875 ]
	],
	// ConetoIab_M inverted
	IabtoCone_M: [
		[ 1,                   0.1386050432715393,   0.05804731615611886 ],
		[ 0.9999999999999999, -0.1386050432715393,  -0.05804731615611886 ],
		[ 0.9999999999999998, -0.09601924202631895, -0.8118918960560388  ]
	],
    fromXYZ (XYZ) {

		const {b, g, n, p, c1, c2, c3, d, d0, XYZtoCone_M, ConetoIab_M} = this;

		// First make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		// BT.2048 says media white Y=203 at PQ 58

		// console.log({XYZ});

		let [ Xa, Ya, Za ] = Color$1.spaces.absxyzd65.fromXYZ(XYZ);
		// console.log({Xa, Ya, Za});


		// modify X and Y
		let Xm = (b * Xa) - ((b - 1) * Za);
		let Ym = (g * Ya) - ((g - 1) * Xa);
		// console.log({Xm, Ym, Za});

		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoCone_M, [ Xm, Ym, Za ]);
		// console.log({LMS});

		// PQ-encode LMS
		let PQLMS = LMS.map (function (val) {
			let num = c1 + (c2 * ((val / 10000) ** n));
			let denom = 1 + (c3 * ((val / 10000) ** n));
			// console.log({val, num, denom});
			return (num / denom)  ** p;
		});
		// console.log({PQLMS});

		// almost there, calculate Iz az bz
		let [ Iz, az, bz] = multiplyMatrices(ConetoIab_M, PQLMS);
		// console.log({Iz, az, bz});

		let Jz = ((1 + d) * Iz) / (1 + (d * Iz)) - d0;
		return [Jz, az, bz];

    },
    toXYZ(Jzazbz) {

		const {b, g, ninv, pinv, c1, c2, c3, d, d0, ConetoXYZ_M, IabtoCone_M} = this;

		let [Jz, az, bz] = Jzazbz;
		let Iz = (Jz + d0) / (1 + d - d * (Jz + d0));
		// console.log({Iz});

		// bring into LMS cone domain
		let PQLMS = multiplyMatrices(IabtoCone_M, [ Iz, az, bz ]);
		// console.log({PQLMS});

		// convert from PQ-coded to linear-light
		let LMS = PQLMS.map(function (val){
			let num = (c1 - (val ** pinv));
			let denom = (c3 * (val ** pinv)) - c2;
			let x = 10000 * ((num / denom) ** ninv);
			// console.log({x, num, denom})
			return (x); 	// luminance relative to diffuse white, [0, 70 or so].
		});
		// console.log({LMS});

		// modified abs XYZ
		let [ Xm, Ym, Za ] = multiplyMatrices(ConetoXYZ_M, LMS);
		// console.log({sXm, Ym, Za});

		// restore standard D50 relative XYZ, relative to media white
		let Xa = (Xm + ((b -1) * Za)) / b;
		let Ya = (Ym + ((g -1) * Xa)) / g;
		return Color$1.spaces.absxyzd65.toXYZ([ Xa, Ya, Za ]);
    },
	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && parsed.name === "jzabz") {
			return {
				spaceId: "jzazbz",
				coords: parsed.args.slice(0, 3),
				alpha: parsed.args.slice(3)[0]
			};
		}
	},
	instance: {
		toString ({format, ...rest} = {}) {
			return Color$1.prototype.toString.call(this, {name: "jzazbz", format, ...rest});
		}
	}
});

Color$1.defineSpace({
	id: "jzczhz",
	name: "JzCzHz",
	coords: {
		Jz: [0, 1],
		chroma: [0, 1],
		hue: range,
	},
	inGamut: coords => true,
	white: Color$1.whites.D65,
	from: {
		jzazbz (jzazbz) {
			// Convert to polar form
			let [Jz, az, bz] = jzazbz;
			let hue;
			const ε = 0.0002; // chromatic components much smaller than a,b

			if (Math.abs(az) < ε && Math.abs(bz) < ε) {
				hue = NaN;
			}
			else {
				hue = Math.atan2(bz, az) * 180 / Math.PI;
			}

			return [
				Jz, // Jz is still Jz
				Math.sqrt(az ** 2 + bz ** 2), // Chroma
				constrain(hue) // Hue, in degrees [0 to 360)
			];
		}
	},
	to: {
		jzazbz (jzczhz) {
			// Convert from polar form
			// debugger;
			return [
				jzczhz[0], // Jz is still Jz
				jzczhz[1] * Math.cos(jzczhz[2] * Math.PI / 180), // az
				jzczhz[1] * Math.sin(jzczhz[2] * Math.PI / 180)  // bz
			];
		}
	},
	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && parsed.name === "jzczhz") {
			let Jz = parsed.args[0];

			return {
				spaceId: "jzczhz",
				coords: parsed.args.slice(0, 3),
				alpha: parsed.args.slice(3)[0]
			};
		}
	},

});

const rec2020 = Color$1.spaces.rec2020;

Color$1.defineSpace({
	// Only the PQ form of ICtCp is implemented here. There is also an HLG form.
	// from Dolby, "WHAT IS ICTCP?"
	// https://professional.dolby.com/siteassets/pdfs/ictcp_dolbywhitepaper_v071.pdf
	// and
	// Dolby, "Perceptual Color Volume
	// Measuring the Distinguishable Colors of HDR and WCG Displays"
	// https://professional.dolby.com/siteassets/pdfs/dolby-vision-measuring-perceptual-color-volume-v7.1.pdf
	id: "ictcp",
	name: "ICTCP",
	// From BT.2100-2 page 7:
	// During production, signal values are expected to exceed the
	// range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
	// signal degradation during cascaded processing. Such values of E′,
	// below 0.0 or exceeding 1.0, should not be clipped during production
	// and exchange.
	// Values below 0.0 should not be clipped in reference displays (even
	// though they represent “negative” light) to allow the black level of
	// the signal (LB) to be properly set using test signals known as “PLUGE”
	coords: {
		I: [0, 1],			// Constant luminance
		CT: [-0.5, 0.5],	// Full BT.2020 gamut in range [-0.5, 0.5]
		CP: [-0.5, 0.5]
	},
	inGamut: coords => true,
	// Note that XYZ is relative to D65
	white: Color$1.whites.D65,
	c1: 3424 / 4096,
	c2: 2413 / 128,
	c3: 2392 / 128,
	m1: 2610 / 16384,
	m2: 2523 / 32,
	im1: 16384 / 2610,
	im2: 32 / 2523,
	// The matrix below includes the 4% crosstalk components
	// and is from the Dolby "What is ICtCp" paper"
	XYZtoLMS_M: [
		[ 0.3592,  0.6976, -0.0358],
		[-0.1922,  1.1004,  0.0755],
		[ 0.0070,  0.0749,  0.8434]
	],
	// linear-light Rec.2020 to LMS, again with crosstalk
	// rational terms from Jan Fröhlich,
	// Encoding High Dynamic Range andWide Color Gamut Imagery, p.97
	// and ITU-R BT.2124-0 p.2
	Rec2020toLMS_M: [
		[ 1688 / 4096,  2146 / 4096,   262 / 4096 ],
		[  683 / 4096,  2951 / 4096,   462 / 4096 ],
		[   99 / 4096,   309 / 4096,  3688 / 4096 ]
	],
	// this includes the Ebner LMS coefficients,
	// the rotation, and the scaling to [-0.5,0.5] range
	// rational terms from Fröhlich p.97
	// and ITU-R BT.2124-0 pp.2-3
	LMStoIPT_M: [
		[  2048 / 4096,   2048 / 4096,       0      ],
		[  6610 / 4096, -13613 / 4096,  7003 / 4096 ],
		[ 17933 / 4096, -17390 / 4096,  -543 / 4096 ]
	],
	// inverted matrices, calculated from the above
	IPTtoLMS_M: [
		[0.99998889656284013833, 0.00860505014728705821,  0.1110343715986164786 ],
		[1.0000111034371598616, -0.00860505014728705821, -0.1110343715986164786 ],
		[1.000032063391005412,   0.56004913547279000113, -0.32063391005412026469],
	],
	LMStoRec2020_M: [
		[ 3.4375568932814012112,   -2.5072112125095058195,   0.069654319228104608382],
		[-0.79142868665644156125,   1.9838372198740089874,  -0.19240853321756742626 ],
		[-0.025646662911506476363, -0.099240248643945566751, 1.1248869115554520431  ]
	],
	LMStoXYZ_M: [
		[ 2.0701800566956135096,   -1.3264568761030210255,    0.20661600684785517081 ],
		[ 0.36498825003265747974,   0.68046736285223514102,  -0.045421753075853231409],
		[-0.049595542238932107896, -0.049421161186757487412,  1.1879959417328034394  ]
	],
	fromXYZ (XYZ) {

		const {XYZtoLMS_M} = this;
		// console.log ({c1, c2, c3, m1, m2});

		// Make XYZ absolute, not relative to media white
		// Maximum luminance in PQ is 10,000 cd/m²
		// Relative XYZ has Y=1 for media white
		// BT.2048 says media white Y=203 at PQ 58
		// This also does the D50 to D65 adaptation

		let [ Xa, Ya, Za ] = Color$1.spaces.absxyzd65.fromXYZ(XYZ);
		// console.log({Xa, Ya, Za});

		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoLMS_M, [ Xa, Ya, Za ]);
		// console.log({LMS});

		return this.LMStoICtCp(LMS);
	},
	toXYZ (ICtCp) {

		const {LMStoXYZ_M} = this;

		let LMS = this.ICtCptoLMS(ICtCp);

		let XYZa = multiplyMatrices(LMStoXYZ_M, LMS);

		// convert from Absolute, D65 XYZ to media white relative, D50 XYZ
		return Color$1.spaces.absxyzd65.toXYZ(XYZa);

	},
	LMStoICtCp (LMS) {

		const {LMStoIPT_M, c1, c2, c3, m1, m2} = this;
		// console.log ({c1, c2, c3, m1, m2});

		// apply the PQ EOTF
		// we can't ever be dividing by zero because of the "1 +" in the denominator
		let PQLMS = LMS.map (function (val) {
			let num = c1 + (c2 * ((val / 10000) ** m1));
			let denom = 1 + (c3 * ((val / 10000) ** m1));
			// console.log({val, num, denom});
			return (num / denom)  ** m2;
		});
		// console.log({PQLMS});

		// LMS to IPT, with rotation for Y'C'bC'r compatibility
		return multiplyMatrices(LMStoIPT_M, PQLMS);
	},
	ICtCptoLMS (ICtCp) {

		const {IPTtoLMS_M, c1, c2, c3, im1, im2} = this;

		let PQLMS = multiplyMatrices(IPTtoLMS_M, ICtCp);

		// From BT.2124-0 Annex 2 Conversion 3
		let LMS = PQLMS.map (function (val) {
			let num  = Math.max((val ** im2) - c1, 0);
			let denom = (c2 - (c3 * (val ** im2)));
			return 10000 * ((num / denom) ** im1);
		});

		return LMS;
	}
	// },
	// from: {
	// 	rec2020: function() {

	// 	}
	// },
	// to: {
	// 	rec2020: function() {

	// 	}
	// }
});

Color$1.defineSpace({
	inherits: "rec2020",
	id: "rec2100pq",
	cssid: "rec2100-pq",
	name: "REC.2100-PQ",
	Yw: 203,	// absolute luminance of media white, cd/m²
	n: 2610 / (2 ** 14),
	ninv: (2 ** 14) / 2610,
	m: 2523 / (2 ** 5),
	minv: (2 ** 5) / 2523,
	c1: 3424 / (2 ** 12),
	c2: 2413 / (2 ** 7),
	c3: 2392 / (2 ** 7),
	toLinear(RGB) {
	// given PQ encoded component in range [0, 1]
	// return media-white relative linear-light

		const {Yw, ninv, minv, c1, c2, c3} = this;

		return RGB.map(function (val) {
			let x = ((Math.max(((val ** minv) - c1), 0) / (c2 - (c3 * (val ** minv)))) ** ninv);
			return (x * 10000 / Yw); 	// luminance relative to diffuse white, [0, 70 or so].
		});
	},
	toGamma(RGB) {
	// given media-white relative linear-light
	// returnPQ encoded component in range [0, 1]

		const {Yw, n, m, c1, c2, c3} = this;

		return RGB.map(function (val) {
			let x = Math.max(val * Yw / 10000, 0); 	// absolute luminance of peak white is 10,000 cd/m².
			let num = (c1 + (c2 * (x ** n)));
			let denom = (1 + (c3 * (x ** n)));
			// console.log({x, num, denom});
			return ((num / denom)  ** m);
		});
	}
	// ,
	// // convert an array of linear-light rec2120 values to CIE XYZ
	// // using  D65 (no chromatic adaptation)
	// // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	// // 0 is actually calculated as  4.994106574466076e-17
	// toXYZ_M: [
	// 	[0.6369580483012914, 0.14461690358620832,  0.1688809751641721],
	// 	[0.2627002120112671, 0.6779980715188708,   0.05930171646986196],
	// 	[0.000000000000000,  0.028072693049087428, 1.060985057710791]
	// ],
	// fromXYZ_M: [
	// 	[1.7166511879712674,   -0.35567078377639233, -0.25336628137365974],
	// 	[-0.6666843518324892,   1.6164812366349395,   0.01576854581391113],
	// 	[0.017639857445310783, -0.042770613257808524, 0.9421031212354738]
	// ]
});

Color$1.defineSpace({
	id: "oklab",
	cssid: "oklab",
    name: "OKLab",
    coords: {
		L: [ 0, 1],
		a: [-0.5, 0.5],
		b: [-0.5, 0.5]
    },
    inGamut: coords => true,
	// Note that XYZ is relative to D65
    white: Color$1.whites.D65,
	// Recalculated for consistent reference white
	// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
    XYZtoLMS_M: [
		[ 0.8190224432164319,    0.3619062562801221,   -0.12887378261216414 ],
		[ 0.0329836671980271,    0.9292868468965546,     0.03614466816999844 ],
		[ 0.048177199566046255,  0.26423952494422764,    0.6335478258136937  ]
	],
    // inverse of XYZtoLMS_M
    LMStoXYZ_M: [
		[  1.2268798733741557,  -0.5578149965554813,   0.28139105017721583],
		[ -0.04057576262431372,  1.1122868293970594,  -0.07171106666151701],
		[ -0.07637294974672142, -0.4214933239627914,   1.5869240244272418 ]
],
    LMStoLab_M: [
		[  0.2104542553,   0.7936177850,  -0.0040720468 ],
		[  1.9779984951,  -2.4285922050,   0.4505937099 ],
		[  0.0259040371,   0.7827717662,  -0.8086757660 ]
	],
	// LMStoIab_M inverted
	LabtoLMS_M: [
        [ 0.99999999845051981432,  0.39633779217376785678,   0.21580375806075880339  ],
        [ 1.0000000088817607767,  -0.1055613423236563494,   -0.063854174771705903402 ],
        [ 1.0000000546724109177,  -0.089484182094965759684, -1.2914855378640917399   ]
    ],
	fromXYZ (XYZ) {
		const {XYZtoLMS_M, LMStoLab_M} = this;

		// move to LMS cone domain
		let LMS = multiplyMatrices(XYZtoLMS_M, XYZ);

		// non-linearity
		let LMSg = LMS.map (val => Math.cbrt(val));

		return (multiplyMatrices(LMStoLab_M, LMSg));

	},
	toXYZ (OKLab) {

		const {LMStoXYZ_M, LabtoLMS_M} = this;

		// move to LMS cone domain
		let LMSg = multiplyMatrices(LabtoLMS_M, OKLab);

		// restore linearity
		let LMS = LMSg.map (val => val ** 3);

		return (multiplyMatrices(LMStoXYZ_M, LMS));
	}
});

Color$1.defineSpace({
	id: "oklch",
	name: "OKLCh",
	coords: {
		lightness: [0, 1],
		chroma: [0, 1],
		hue: range,
	},
	inGamut: coords => true,
	white: Color$1.whites.D65,
	from: {
		oklab (oklab) {
			// Convert to polar form
			let [L, a, b] = oklab;
			let h;
			const ε = 0.0002; // chromatic components much smaller than a,b

			if (Math.abs(a) < ε && Math.abs(b) < ε) {
				h = NaN;
			}
			else {
				h = Math.atan2(b, a) * 180 / Math.PI;
			}

			return [
				L, // OKLab L is still L
				Math.sqrt(a ** 2 + b ** 2), // Chroma
				constrain(h) // Hue, in degrees [0 to 360)
			];
		}
	},
	to: {
		// Convert from polar form
		oklab (oklch) {
			let [L, C, h] = oklch;
			let a, b;

			// check for NaN hue
			if (isNaN(h)) {
				a = 0;
				b = 0;
			}
			else {
				a = C * Math.cos(h * Math.PI / 180);
				b = C * Math.sin(h * Math.PI / 180);
			}

			return [ L, a, b ];
		}
	},
	parse (str, parsed = Color$1.parseFunction(str)) {
		if (parsed && parsed.name === "oklch") {
			let L = parsed.args[0];

			return {
				spaceId: "oklch",
				coords: parsed.args.slice(0, 3),
				alpha: parsed.args.slice(3)[0]
			};
		}
	},

});

Color$1.CATs = {};

Color$1.hooks.add("chromatic-adaptation-start", env => {
	if (env.options.method) {
		env.M = Color$1.adapt(env.W1, env.W2, env.options.method);
	}
});

Color$1.hooks.add("chromatic-adaptation-end", env => {
	if (!env.M) {
		env.M = Color$1.adapt(env.W1, env.W2, env.options.method);
	}
});

Color$1.defineCAT = function ({id, toCone_M, fromCone_M}) {
	// Use id, toCone_M, fromCone_M like variables
	Color$1.CATs[id] = arguments[0];
};

Color$1.adapt = function (W1, W2, id = "Bradford") {
	// adapt from a source whitepoint or illuminant W1
	// to a destination whitepoint or illuminant W2,
	// using the given chromatic adaptation transform (CAT)
	// debugger;
	let method = Color$1.CATs[id];

	let [ρs, γs, βs] = multiplyMatrices(method.toCone_M, W1);
	let [ρd, γd, βd] = multiplyMatrices(method.toCone_M, W2);

	// all practical illuminants have non-zero XYZ so no division by zero can occur below
	let scale = [
		[ρd/ρs,    0,      0      ],
		[0,        γd/γs,  0      ],
		[0,        0,      βd/βs  ]
	];
	// console.log({scale});

	let scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
	let adapt_M	= multiplyMatrices(method.fromCone_M, scaled_cone_M);
	// console.log({scaled_cone_M, adapt_M});
	return adapt_M;
};

Color$1.defineCAT({
	id: "von Kries",
	toCone_M: [
		[  0.4002400,  0.7076000, -0.0808100 ],
		[ -0.2263000,  1.1653200,  0.0457000 ],
		[  0.0000000,  0.0000000,  0.9182200 ]
	],
	fromCone_M: [
		[  1.8599364, -1.1293816,  0.2198974 ],
		[  0.3611914,  0.6388125, -0.0000064 ],
		[  0.0000000,  0.0000000,  1.0890636 ]
	]
});
Color$1.defineCAT({
	id: "Bradford",
	// Convert an array of XYZ values in the range 0.0 - 1.0
	// to cone fundamentals
	toCone_M: [
		[  0.8951000,  0.2664000, -0.1614000 ],
		[ -0.7502000,  1.7135000,  0.0367000 ],
		[  0.0389000, -0.0685000,  1.0296000 ]
	],
	// and back
	fromCone_M: [
		[  0.9869929, -0.1470543,  0.1599627 ],
		[  0.4323053,  0.5183603,  0.0492912 ],
		[ -0.0085287,  0.0400428,  0.9684867 ]
	]
});

Color$1.defineCAT({
	id: "CAT02",
	// with complete chromatic adaptation to W2, so D = 1.0
	toCone_M: [
		[  0.7328000,  0.4296000, -0.1624000 ],
		[ -0.7036000,  1.6975000,  0.0061000 ],
		[  0.0030000,  0.0136000,  0.9834000 ]
	],
	fromCone_M: [
		[  1.0961238, -0.2788690,  0.1827452 ],
		[  0.4543690,  0.4735332,  0.0720978 ],
		[ -0.0096276, -0.0056980,  1.0153256 ]
	]
});

Color$1.defineCAT({
	id: "CAT16",
	toCone_M: [
		[  0.401288,  0.650173, -0.051461 ],
		[ -0.250268,  1.204414,  0.045854 ],
		[ -0.002079,  0.048952,  0.953127 ]
	],
	// the extra precision is needed to avoid roundtripping errors
	fromCone_M: [
		[  1.862067855087233e+0, -1.011254630531685e+0,   1.491867754444518e-1 ],
		[  3.875265432361372e-1,  6.214474419314753e-1,  -8.973985167612518e-3 ],
		[ -1.584149884933386e-2, -3.412293802851557e-2,   1.049964436877850e+0 ]
	]
});

Object.assign(Color$1.whites, {
	// whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
	// all normalized to Y (luminance) = 1.00000
	// Illuminant A is a tungsten electric light, giving a very warm, orange light.
	A:  [1.09850, 1.00000, 0.35585],

	// Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
	C:   [0.98074, 1.000000, 1.18232],

	// The daylight series of illuminants simulate natural daylight.
	// The color temperature (in degrees Kelvin/100) ranges from
	// cool, overcast daylight (D50) to bright, direct sunlight (D65).
	D55: [0.95682, 1.00000, 0.92149],
	D75: [0.94972, 1.00000, 1.22638],

	// Equal-energy illuminant, used in two-stage CAT16
	E:   [1.00000, 1.00000, 1.00000],

	// The F series of illuminants represent flourescent lights
	F2:  [0.99186, 1.00000, 0.67393],
	F7:  [0.95041, 1.00000, 1.08747],
	F11: [1.00962, 1.00000, 0.64350],
});

// because of the funky whitepoint

Color$1.defineSpace({
	id: "acescc",
	name: "ACEScc",
	inherits: "srgb",

	// see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
	// uses the AP1 primaries, see section 4.3.1 Color primaries
	coords: {
		red:   [-0.3014, 1.468],
		green: [-0.3014, 1.468],
		blue:  [-0.3014, 1.468]
	},
	// Appendix A: "Very small ACES scene referred values below 7 1/4 stops
	// below 18% middle gray are encoded as negative ACEScc values.
	// These values should be preserved per the encoding in Section 4.4
	// so that all positive ACES values are maintained."

	// The ACES whitepoint
	// see TB-2018-001 Derivation of the ACES White Point CIE Chromaticity Coordinates
	// also https://github.com/ampas/aces-dev/blob/master/documents/python/TB-2018-001/aces_wp.py
	white: Color$1.whites.ACES = [0.32168/0.33767, 1.00000, (1.00000 - 0.32168 - 0.33767)/0.33767],
	// Similar to D60

	// from section 4.4.2 Decoding Function
	toLinear(RGB) {

		const low = (9.72 - 15) / 17.52; // -0.3014
		const high = (Math.log2(65504) + 9.72) / 17.52; // 1.468
		const ε = 2 ** -16;

		return RGB.map(function (val) {
			if (val <= low) {
				return (2 ** ((val * 17.52) - 9.72) - ε) * 2; // 0 for low or below
			}
			else if (val < high) {
				return 2 ** ((val * 17.52) - 9.72);
			}
			else { // val >= high
				return 65504;
			}
		});
	},

	// Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
	toGamma(RGB) {

		const ε = 2 ** -16;

		return RGB.map(function (val) {
			if (val <= 0) {
				return (Math.log2(ε) + 9.72) / 17.52; // -0.3584
			}
			else if (val < ε) {
				return  (Math.log2(ε + val * 0.5) + 9.72) / 17.52;
			}
			else { // val >= ε
				return  (Math.log2(val) + 9.72) / 17.52;
			}
		});
	},
	// encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
	// encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]

	// convert an array of linear-light ACEScc values to CIE XYZ
	toXYZ_M: [
		[  0.6624541811085053,   0.13400420645643313,  0.1561876870049078  ],
		[  0.27222871678091454,  0.6740817658111484,   0.05368951740793705 ],
		[ -0.005574649490394108, 0.004060733528982826, 1.0103391003129971  ]
	],
	//
	fromXYZ_M: [
		[  1.6410233796943257,   -0.32480329418479,    -0.23642469523761225  ],
		[ -0.6636628587229829,    1.6153315916573379,   0.016756347685530137 ],
		[  0.011721894328375376, -0.008284441996237409, 0.9883948585390215   ]
	]
});

// export default Color;

let methods = {
	range (...args) {
		return Color$1.range(this, ...args);
	},

	/**
	 * Return an intermediate color between two colors
	 * Signatures: color.mix(color, p, options)
	 *             color.mix(color, options)
	 *             color.mix(color)
	 */
	mix (color, p = .5, o = {}) {
		if (type(p) === "object") {
			[p, o] = [.5, p];
		}

		let {space, outputSpace} = o;

		color = Color$1.get(color);
		let range = this.range(color, {space, outputSpace});
		return range(p);
	},

	/**
	 * Interpolate to color2 and return an array of colors
	 * @returns {Array[Color]}
	 */
	steps (...args) {
		return Color$1.steps(this, ...args);
	}
};

Color$1.steps = function(color1, color2, options = {}) {
	let range;

	if (isRange(color1)) {
		// Tweaking existing range
		[range, options] = [color1, color2];
		[color1, color2] = range.rangeArgs.colors;
	}

	let {
		maxDeltaE, deltaEMethod,
		steps = 2, maxSteps = 1000,
		...rangeOptions
	} = options;

	if (!range) {
		color1 = Color$1.get(color1);
		color2 = Color$1.get(color2);
		range = Color$1.range(color1, color2, rangeOptions);
	}

	let totalDelta = this.deltaE(color2);
	let actualSteps = maxDeltaE > 0? Math.max(steps, Math.ceil(totalDelta / maxDeltaE) + 1) : steps;
	let ret = [];

	if (maxSteps !== undefined) {
		actualSteps = Math.min(actualSteps, maxSteps);
	}

	if (actualSteps === 1) {
		ret = [{p: .5, color: range(.5)}];
	}
	else {
		let step = 1 / (actualSteps - 1);
		ret = Array.from({length: actualSteps}, (_, i) => {
			let p = i * step;
			return {p, color: range(p)};
		});
	}

	if (maxDeltaE > 0) {
		// Iterate over all stops and find max deltaE
		let maxDelta = ret.reduce((acc, cur, i) => {
			if (i === 0) {
				return 0;
			}

			let deltaE = cur.color.deltaE(ret[i - 1].color, deltaEMethod);
			return Math.max(acc, deltaE);
		}, 0);

		while (maxDelta > maxDeltaE) {
			// Insert intermediate stops and measure maxDelta again
			// We need to do this for all pairs, otherwise the midpoint shifts
			maxDelta = 0;

			for (let i = 1; (i < ret.length) && (ret.length < maxSteps); i++) {
				let prev = ret[i - 1];
				let cur = ret[i];

				let p = (cur.p + prev.p) / 2;
				let color = range(p);
				maxDelta = Math.max(maxDelta, color.deltaE(prev.color), color.deltaE(cur.color));
				ret.splice(i, 0, {p, color: range(p)});
				i++;
			}
		}
	}

	ret = ret.map(a => a.color);

	return ret;
};

/**
 * Interpolate to color2 and return a function that takes a 0-1 percentage
 * @returns {Function}
 */
Color$1.range = function(color1, color2, options = {}) {
	if (isRange(color1)) {
		// Tweaking existing range
		let [range, options] = [color1, color2];
		return Color$1.range(...range.rangeArgs.colors, {...range.rangeArgs.options, ...options});
	}

	let {space, outputSpace, progression, premultiplied} = options;

	// Make sure we're working on copies of these colors
	color1 = new Color$1(color1);
	color2 = new Color$1(color2);


	let rangeArgs = {colors: [color1, color2], options};

	if (space) {
		space = Color$1.space(space);
	}
	else {
		space = Color$1.spaces[Color$1.defaults.interpolationSpace] || color1.space;
	}

	outputSpace = outputSpace? Color$1.space(outputSpace) : (color1.space || space);

	color1 = color1.to(space).toGamut();
	color2 = color2.to(space).toGamut();

	// Handle hue interpolation
	// See https://github.com/w3c/csswg-drafts/issues/4735#issuecomment-635741840
	if (space.coords.hue && space.coords.hue.isAngle) {
		let arc = options.hue = options.hue || "shorter";

		[color1[space.id].hue, color2[space.id].hue] = adjust(arc, [color1[space.id].hue, color2[space.id].hue]);
	}

	if (premultiplied) {
		// not coping with polar spaces yet
		color1.coords = color1.coords.map (c => c * color1.alpha);
		color2.coords = color2.coords.map (c => c * color2.alpha);
	}

	return Object.assign(p => {
		p = progression? progression(p) : p;
		let coords = color1.coords.map((start, i) => {
			let end = color2.coords[i];
			return interpolate(start, end, p);
		});
		let alpha = interpolate(color1.alpha, color2.alpha, p);
		let ret = new Color$1(space, coords, alpha);

		if (premultiplied) {
			// undo premultiplication
			ret.coords = ret.coords.map(c => c / alpha);
		}

		if (outputSpace !== space) {
			ret = ret.to(outputSpace);
		}

		return ret;
	}, {
		rangeArgs
	});
};

function isRange (val) {
	return type(val) === "function" && val.rangeArgs;
}
// Helper
function interpolate(start, end, p) {
	if (isNaN(start)) {
		return end;
	}

	if (isNaN(end)) {
		return start;
	}

	return start + (end - start) * p;
}

Object.assign(Color$1.defaults, {
	interpolationSpace: "lab"
});

Object.assign(Color$1.prototype, methods);
Color$1.statify(Object.keys(methods));

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// CMC by the Color Measurement Committee of the
// Bradford Society of Dyeists and Colorsts, 1994.
// Uses LCH rather than Lab,
// with different weights for L, C and H differences
// A nice increase in accuracy for modest increase in complexity

Color$1.prototype.deltaECMC = function (sample, {l = 2, c = 1} = {}) {
	let color = this;
	sample = Color$1.get(sample);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE CMC.

	// This implementation assumes the parametric
	// weighting factors l:c are 2:1
	//  which is typical for non-textile uses.

	let [L1, a1, b1] = color.lab;
	let C1 = color.chroma;
	let H1 = color.hue;
	let [L2, a2, b2] = sample.lab;
	let C2 = sample.chroma;

	// Check for negative Chroma,
	// which might happen through
	// direct user input of LCH values

	if (C1 < 0) {
		C1 = 0;
	}
	if (C2 < 0) {
		C2 = 0;
	}

	// we don't need H2 as ΔH is calculated from Δa, Δb and ΔC
	// console.log({L1, a1, b1});
	// console.log({L2, a2, b2});

	// Lightness and Chroma differences
	// These are (color - sample), unlike deltaE2000
	let ΔL = L1 - L2;
	let ΔC = C1 - C2;
	// console.log({ΔL});
	// console.log({ΔC});

	let Δa = a1 - a2;
	let Δb = b1 - b2;
	// console.log({Δa});
	// console.log({Δb});

	// weighted Hue difference, less for larger Chroma difference
	const π = Math.PI;
	const d2r = π / 180;
	let H2 = (Δa ** 2) + (Δb ** 2) - (ΔC ** 2);
	// due to roundoff error it is possible that, for zero a and b,
	// ΔC > Δa + Δb is 0, resulting in attempting
	// to take the square root of a negative number

	// trying instead the equation from Industrial Color Physics
	// By Georg A. Klein

	// let ΔH = ((a1 * b2) - (a2 * b1)) / Math.sqrt(0.5 * ((C2 * C1) + (a2 * a1) + (b2 * b1)));
	// console.log({ΔH});
	// This gives the same result to 12 decimal places
	// except it sometimes NaNs when trying to root a negative number

	// let ΔH = Math.sqrt(H2); we never actually use the root, it gets squared again!!

	// positional corrections to the lack of uniformity of CIELAB
	// These are all trying to make JND ellipsoids more like spheres

	// SL Lightness crispening factor, depends entirely on L1 not L2
	let SL = 0.511;	// linear portion of the Y to L transfer function
	if (L1 >= 16) {	// cubic portion
		SL = (0.040975 * L1) / (1 + 0.01765 * L1);
	}
	// console.log({SL});

	// SC Chroma factor
	let SC = ((0.0638 * C1) / (1 + 0.0131 * C1)) + 0.638;
	// console.log({SC});

	// Cross term T for blue non-linearity
	let T;
	if ( Number.isNaN(H1)) {
		H1 = 0;
	}

	if (H1 >= 164 && H1 <= 345) {
		T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
	}
	else {
		T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
	}
	// console.log({T});

	// SH Hue factor also depends on C1,
	let C4 = Math.pow(C1, 4);
	let F = Math.sqrt(C4 / (C4 + 1900));
	let SH = SC * ((F * T) + 1 - F);
	// console.log({SH});

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (l * SL)) ** 2;
	dE += (ΔC / (c * SC)) ** 2;
	dE += (H2 / (SH ** 2));
	// dE += (ΔH / SH)  ** 2;
	return Math.sqrt(dE);
	// Yay!!!
};

Color$1.statify(["deltaECMC"]);

// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.

Color$1.prototype.deltaE2000 = function (sample, {kL = 1, kC = 1, kH = 1} = {}) {
	let color = this;
	sample = Color$1.get(sample);

	// Given this color as the reference
	// and the function parameter as the sample,
	// calculate deltaE 2000.

	// This implementation assumes the parametric
	// weighting factors kL, kC and kH
	// for the influence of viewing conditions
	// are all 1, as sadly seems typical.
	// kL should be increased for lightness texture or noise
	// and kC increased for chroma noise

	let [L1, a1, b1] = color.lab;
	let C1 = color.chroma;
	let [L2, a2, b2] = sample.lab;
	let C2 = sample.chroma;

	// Check for negative Chroma,
	// which might happen through
	// direct user input of LCH values

	if (C1 < 0) {
		C1 = 0;
	}
	if (C2 < 0) {
		C2 = 0;
	}

	let Cbar = (C1 + C2)/2; // mean Chroma

	// calculate a-axis asymmetry factor from mean Chroma
	// this turns JND ellipses for near-neutral colors back into circles
	let C7 = Math.pow(Cbar, 7);
	const Gfactor = Math.pow(25, 7);
	let G = 0.5 * (1 - Math.sqrt(C7/(C7+Gfactor)));

	// scale a axes by asymmetry factor
	// this by the way is why there is no Lab2000 colorspace
	let adash1 = (1 + G) * a1;
	let adash2 = (1 + G) * a2;

	// calculate new Chroma from scaled a and original b axes
	let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
	let Cdash2 = Math.sqrt(adash2 ** 2 + b2 ** 2);

	// calculate new hues, with zero hue for true neutrals
	// and in degrees, not radians
	const π = Math.PI;
	const r2d = 180 / π;
	const d2r = π / 180;
	let h1 = (adash1 === 0 && b1 === 0)? 0: Math.atan2(b1, adash1);
	let h2 = (adash2 === 0 && b2 === 0)? 0: Math.atan2(b2, adash2);

	if (h1 < 0) {
		h1 += 2 * π;
	}
	if (h2 < 0) {
		h2 += 2 * π;
	}

	h1 *= r2d;
	h2 *= r2d;

	// Lightness and Chroma differences; sign matters
	let ΔL = L2 - L1;
	let ΔC = Cdash2 - Cdash1;

	// Hue difference, getting the sign correct
	let hdiff = h2 - h1;
	let hsum = h1 + h2;
	let habs = Math.abs(hdiff);
	let Δh;

	if (Cdash1 * Cdash2 === 0) {
		Δh = 0;
	}
	else if (habs <= 180) {
		Δh = hdiff;
	}
	else if (hdiff > 180) {
		Δh = hdiff - 360;
	}
	else if (hdiff < -180) {
		Δh = hdiff + 360;
	}
	else {
		console.log("the unthinkable has happened");
	}

	// weighted Hue difference, more for larger Chroma
	let ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(Δh * d2r / 2);

	// calculate mean Lightness and Chroma
	let Ldash = (L1 + L2)/2;
	let Cdash = (Cdash1 + Cdash2)/2;
	let Cdash7 = Math.pow(Cdash, 7);

	// Compensate for non-linearity in the blue region of Lab.
	// Four possibilities for hue weighting factor,
	// depending on the angles, to get the correct sign
	let hdash;
	if (Cdash1 * Cdash2 === 0) {
		hdash = hsum;   // which should be zero
	}
	else if (habs <= 180) {
		hdash = hsum / 2;
	}
	else if (hsum < 360) {
		hdash = (hsum + 360) / 2;
	}
	else {
		hdash = (hsum - 360) / 2;
	}

	// positional corrections to the lack of uniformity of CIELAB
	// These are all trying to make JND ellipsoids more like spheres

	// SL Lightness crispening factor
	// a background with L=50 is assumed
	let lsq = (Ldash - 50) ** 2;
	let SL = 1 + ((0.015 * lsq) / Math.sqrt(20 + lsq));

	// SC Chroma factor, similar to those in CMC and deltaE 94 formulae
	let SC = 1 + 0.045 * Cdash;

	// Cross term T for blue non-linearity
	let T = 1;
	T -= (0.17 * Math.cos((     hdash - 30)  * d2r));
	T += (0.24 * Math.cos(  2 * hdash        * d2r));
	T += (0.32 * Math.cos(((3 * hdash) + 6)  * d2r));
	T -= (0.20 * Math.cos(((4 * hdash) - 63) * d2r));

	// SH Hue factor depends on Chroma,
	// as well as adjusted hue angle like deltaE94.
	let SH = 1 + 0.015 * Cdash * T;

	// RT Hue rotation term compensates for rotation of JND ellipses
	// and Munsell constant hue lines
	// in the medium-high Chroma blue region
	// (Hue 225 to 315)
	let Δθ = 30 * Math.exp(-1 * (((hdash - 275)/25) ** 2));
	let RC = 2 * Math.sqrt(Cdash7/(Cdash7 + Gfactor));
	let RT = -1 * Math.sin(2 * Δθ * d2r) * RC;

	// Finally calculate the deltaE, term by term as root sume of squares
	let dE = (ΔL / (kL * SL)) ** 2;
	dE += (ΔC / (kC * SC)) ** 2;
	dE += (ΔH / (kH * SH)) ** 2;
	dE += RT * (ΔC / (kC * SC)) * (ΔH / (kH * SH));
	return Math.sqrt(dE);
	// Yay!!!
};

Color$1.statify(["deltaE2000"]);

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// Uses JzCzHz, which has improved perceptual uniformity
// and thus a simple Euclidean root-sum of ΔL² ΔC² ΔH²
// gives good results.

Color$1.prototype.deltaEJz = function (sample) {
	let color = this;
	sample = Color$1.get(sample);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE in JzCzHz.

	let [Jz1, Cz1, Hz1] = color.jzczhz;
	let [Jz2, Cz2, Hz2] = sample.jzczhz;

	// Lightness and Chroma differences
	// sign does not matter as they are squared.
	let ΔJ = Jz1 - Jz2;
	let ΔC = Cz1 - Cz2;

	// length of chord for ΔH
	if ((Number.isNaN(Hz1)) && (Number.isNaN(Hz2))) {
		// both undefined hues
		Hz1 = 0;
		Hz2 = 0;
	} else
	if (Number.isNaN(Hz1)) {
		// one undefined, set to the defined hue
		Hz1 = Hz2;
	} else
	if (Number.isNaN(Hz2)) {
		Hz2 = Hz1;
	}

	let Δh = Hz1 - Hz2;
	let ΔH = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin((Δh / 2) * (Math.PI / 180));

	return Math.sqrt(ΔJ ** 2 + ΔC ** 2 + ΔH ** 2);
};

Color$1.statify(["deltaEJz"]);

// Delta E in ICtCp space,
// which the ITU calls Delta E ITP, which is shorter
// formulae from ITU Rec. ITU-R BT.2124-0

Color$1.prototype.deltaEITP = function (sample) {
	let color = this;
	sample = Color$1.get(sample);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE in ICtCp
	// which is simply the Euclidean distance

	let [ I1, T1, P1 ] = color.ictcp;
	let [ I2, T2, P2 ] = sample.ictcp;

	// the 0.25 factor is to undo the encoding scaling in Ct
	// the 720 is so that 1 deltaE = 1 JND
	// per  ITU-R BT.2124-0 p.3

	return 720 * Math.sqrt((I1 - I2) ** 2 + (0.25 * (T1 -T2) ** 2) + (P1 - P2) ** 2);
};

Color$1.statify(["deltaEITP"]);

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in CIE Lab


Color$1.prototype.deltaEOK = function (sample, deltas = {}) {
	let color = this;
	sample = Color$1.get(sample);

	// Given this color as the reference
	// and a sample,
	// calculate deltaEOK, term by term as root sum of squares
	let [L1, a1, b1] = color.oklab;
	let [L2, a2, b2] = sample.oklab;
	let ΔL = L1 - L2;
	let Δa = a1 - a2;
	let Δb = b1 - b2;
	return Math.sqrt(ΔL ** 2 + Δa ** 2 + Δb ** 2);
};

Color$1.statify(["deltaEOK"]);

/* Parse color keywords without the browser DOM
 * This is only needed to parse Color keywords in Node,
 * and to improve performance when parsing color keywords in the browser
 * To take advantage of this, just import the module.
 * You can also take advantage of its default exports, if you need a data structure of named colors
 * Note that this does not handle currentColor
 */

// To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))
const KEYWORDS = {
	"aliceblue": [240 / 255, 248 / 255, 1],
	"antiquewhite": [250 / 255, 235 / 255, 215 / 255],
	"aqua": [0, 1, 1],
	"aquamarine": [127 / 255, 1, 212 / 255],
	"azure": [240 / 255, 1, 1],
	"beige": [245 / 255, 245 / 255, 220 / 255],
	"bisque": [1, 228 / 255, 196 / 255],
	"black": [0, 0, 0],
	"blanchedalmond": [1, 235 / 255, 205 / 255],
	"blue": [0, 0, 1],
	"blueviolet": [138 / 255, 43 / 255, 226 / 255],
	"brown": [165 / 255, 42 / 255, 42 / 255],
	"burlywood": [222 / 255, 184 / 255, 135 / 255],
	"cadetblue": [95 / 255, 158 / 255, 160 / 255],
	"chartreuse": [127 / 255, 1, 0],
	"chocolate": [210 / 255, 105 / 255, 30 / 255],
	"coral": [1, 127 / 255, 80 / 255],
	"cornflowerblue": [100 / 255, 149 / 255, 237 / 255],
	"cornsilk": [1, 248 / 255, 220 / 255],
	"crimson": [220 / 255, 20 / 255, 60 / 255],
	"cyan": [0, 1, 1],
	"darkblue": [0, 0, 139 / 255],
	"darkcyan": [0, 139 / 255, 139 / 255],
	"darkgoldenrod": [184 / 255, 134 / 255, 11 / 255],
	"darkgray": [169 / 255, 169 / 255, 169 / 255],
	"darkgreen": [0, 100 / 255, 0],
	"darkgrey": [169 / 255, 169 / 255, 169 / 255],
	"darkkhaki": [189 / 255, 183 / 255, 107 / 255],
	"darkmagenta": [139 / 255, 0, 139 / 255],
	"darkolivegreen": [85 / 255, 107 / 255, 47 / 255],
	"darkorange": [1, 140 / 255, 0],
	"darkorchid": [153 / 255, 50 / 255, 204 / 255],
	"darkred": [139 / 255, 0, 0],
	"darksalmon": [233 / 255, 150 / 255, 122 / 255],
	"darkseagreen": [143 / 255, 188 / 255, 143 / 255],
	"darkslateblue": [72 / 255, 61 / 255, 139 / 255],
	"darkslategray": [47 / 255, 79 / 255, 79 / 255],
	"darkslategrey": [47 / 255, 79 / 255, 79 / 255],
	"darkturquoise": [0, 206 / 255, 209 / 255],
	"darkviolet": [148 / 255, 0, 211 / 255],
	"deeppink": [1, 20 / 255, 147 / 255],
	"deepskyblue": [0, 191 / 255, 1],
	"dimgray": [105 / 255, 105 / 255, 105 / 255],
	"dimgrey": [105 / 255, 105 / 255, 105 / 255],
	"dodgerblue": [30 / 255, 144 / 255, 1],
	"firebrick": [178 / 255, 34 / 255, 34 / 255],
	"floralwhite": [1, 250 / 255, 240 / 255],
	"forestgreen": [34 / 255, 139 / 255, 34 / 255],
	"fuchsia": [1, 0, 1],
	"gainsboro": [220 / 255, 220 / 255, 220 / 255],
	"ghostwhite": [248 / 255, 248 / 255, 1],
	"gold": [1, 215 / 255, 0],
	"goldenrod": [218 / 255, 165 / 255, 32 / 255],
	"gray": [128 / 255, 128 / 255, 128 / 255],
	"green": [0, 128 / 255, 0],
	"greenyellow": [173 / 255, 1, 47 / 255],
	"grey": [128 / 255, 128 / 255, 128 / 255],
	"honeydew": [240 / 255, 1, 240 / 255],
	"hotpink": [1, 105 / 255, 180 / 255],
	"indianred": [205 / 255, 92 / 255, 92 / 255],
	"indigo": [75 / 255, 0, 130 / 255],
	"ivory": [1, 1, 240 / 255],
	"khaki": [240 / 255, 230 / 255, 140 / 255],
	"lavender": [230 / 255, 230 / 255, 250 / 255],
	"lavenderblush": [1, 240 / 255, 245 / 255],
	"lawngreen": [124 / 255, 252 / 255, 0],
	"lemonchiffon": [1, 250 / 255, 205 / 255],
	"lightblue": [173 / 255, 216 / 255, 230 / 255],
	"lightcoral": [240 / 255, 128 / 255, 128 / 255],
	"lightcyan": [224 / 255, 1, 1],
	"lightgoldenrodyellow": [250 / 255, 250 / 255, 210 / 255],
	"lightgray": [211 / 255, 211 / 255, 211 / 255],
	"lightgreen": [144 / 255, 238 / 255, 144 / 255],
	"lightgrey": [211 / 255, 211 / 255, 211 / 255],
	"lightpink": [1, 182 / 255, 193 / 255],
	"lightsalmon": [1, 160 / 255, 122 / 255],
	"lightseagreen": [32 / 255, 178 / 255, 170 / 255],
	"lightskyblue": [135 / 255, 206 / 255, 250 / 255],
	"lightslategray": [119 / 255, 136 / 255, 153 / 255],
	"lightslategrey": [119 / 255, 136 / 255, 153 / 255],
	"lightsteelblue": [176 / 255, 196 / 255, 222 / 255],
	"lightyellow": [1, 1, 224 / 255],
	"lime": [0, 1, 0],
	"limegreen": [50 / 255, 205 / 255, 50 / 255],
	"linen": [250 / 255, 240 / 255, 230 / 255],
	"magenta": [1, 0, 1],
	"maroon": [128 / 255, 0, 0],
	"mediumaquamarine": [102 / 255, 205 / 255, 170 / 255],
	"mediumblue": [0, 0, 205 / 255],
	"mediumorchid": [186 / 255, 85 / 255, 211 / 255],
	"mediumpurple": [147 / 255, 112 / 255, 219 / 255],
	"mediumseagreen": [60 / 255, 179 / 255, 113 / 255],
	"mediumslateblue": [123 / 255, 104 / 255, 238 / 255],
	"mediumspringgreen": [0, 250 / 255, 154 / 255],
	"mediumturquoise": [72 / 255, 209 / 255, 204 / 255],
	"mediumvioletred": [199 / 255, 21 / 255, 133 / 255],
	"midnightblue": [25 / 255, 25 / 255, 112 / 255],
	"mintcream": [245 / 255, 1, 250 / 255],
	"mistyrose": [1, 228 / 255, 225 / 255],
	"moccasin": [1, 228 / 255, 181 / 255],
	"navajowhite": [1, 222 / 255, 173 / 255],
	"navy": [0, 0, 128 / 255],
	"oldlace": [253 / 255, 245 / 255, 230 / 255],
	"olive": [128 / 255, 128 / 255, 0],
	"olivedrab": [107 / 255, 142 / 255, 35 / 255],
	"orange": [1, 165 / 255, 0],
	"orangered": [1, 69 / 255, 0],
	"orchid": [218 / 255, 112 / 255, 214 / 255],
	"palegoldenrod": [238 / 255, 232 / 255, 170 / 255],
	"palegreen": [152 / 255, 251 / 255, 152 / 255],
	"paleturquoise": [175 / 255, 238 / 255, 238 / 255],
	"palevioletred": [219 / 255, 112 / 255, 147 / 255],
	"papayawhip": [1, 239 / 255, 213 / 255],
	"peachpuff": [1, 218 / 255, 185 / 255],
	"peru": [205 / 255, 133 / 255, 63 / 255],
	"pink": [1, 192 / 255, 203 / 255],
	"plum": [221 / 255, 160 / 255, 221 / 255],
	"powderblue": [176 / 255, 224 / 255, 230 / 255],
	"purple": [128 / 255, 0, 128 / 255],
	"rebeccapurple": [102 / 255, 51 / 255, 153 / 255],
	"red": [1, 0, 0],
	"rosybrown": [188 / 255, 143 / 255, 143 / 255],
	"royalblue": [65 / 255, 105 / 255, 225 / 255],
	"saddlebrown": [139 / 255, 69 / 255, 19 / 255],
	"salmon": [250 / 255, 128 / 255, 114 / 255],
	"sandybrown": [244 / 255, 164 / 255, 96 / 255],
	"seagreen": [46 / 255, 139 / 255, 87 / 255],
	"seashell": [1, 245 / 255, 238 / 255],
	"sienna": [160 / 255, 82 / 255, 45 / 255],
	"silver": [192 / 255, 192 / 255, 192 / 255],
	"skyblue": [135 / 255, 206 / 255, 235 / 255],
	"slateblue": [106 / 255, 90 / 255, 205 / 255],
	"slategray": [112 / 255, 128 / 255, 144 / 255],
	"slategrey": [112 / 255, 128 / 255, 144 / 255],
	"snow": [1, 250 / 255, 250 / 255],
	"springgreen": [0, 1, 127 / 255],
	"steelblue": [70 / 255, 130 / 255, 180 / 255],
	"tan": [210 / 255, 180 / 255, 140 / 255],
	"teal": [0, 128 / 255, 128 / 255],
	"thistle": [216 / 255, 191 / 255, 216 / 255],
	"tomato": [1, 99 / 255, 71 / 255],
	"turquoise": [64 / 255, 224 / 255, 208 / 255],
	"violet": [238 / 255, 130 / 255, 238 / 255],
	"wheat": [245 / 255, 222 / 255, 179 / 255],
	"white": [1, 1, 1],
	"whitesmoke": [245 / 255, 245 / 255, 245 / 255],
	"yellow": [1, 1, 0],
	"yellowgreen": [154 / 255, 205 / 255, 50 / 255]
};

Color$1.hooks.add("parse-start", env => {
	let str = env.str.toLowerCase();
	let ret = {spaceId: "srgb", coords: null, alpha: 1};

	if (str === "transparent") {
		ret.coords = KEYWORDS.black;
		ret.alpha = 0;
	}
	else {
		ret.coords = KEYWORDS[str];
	}

	if (ret.coords) {
		env.color = ret;
	}
});

// Import all modules of Color.js

export default Color$1;
export { util };
//# sourceMappingURL=color.esm.js.map