'use strict';
 
(function() {
  if (typeof twttr === "undefined" || twttr === null) {
    var twttr = {};
  }

  twttr.txt = {};
  twttr.txt.regexen = {};

  var HTML_ENTITIES = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  // HTML escaping
  twttr.txt.htmlEscape = function(text) {
    return text && text.replace(/[&"'><]/g, function(character) {
      return HTML_ENTITIES[character];
    });
  };

  // Builds a RegExp
  function regexSupplant(regex, flags) {
    flags = flags || "";
    if (typeof regex !== "string") {
      if (regex.global && flags.indexOf("g") < 0) {
        flags += "g";
      }
      if (regex.ignoreCase && flags.indexOf("i") < 0) {
        flags += "i";
      }
      if (regex.multiline && flags.indexOf("m") < 0) {
        flags += "m";
      }

      regex = regex.source;
    }

    return new RegExp(regex.replace(/#\{(\w+)\}/g, function(match, name) {
      var newRegex = twttr.txt.regexen[name] || "";
      if (typeof newRegex !== "string") {
        newRegex = newRegex.source;
      }
      return newRegex;
    }), flags);
  }

  twttr.txt.regexSupplant = regexSupplant;

  // simple string interpolation
  function stringSupplant(str, values) {
    return str.replace(/#\{(\w+)\}/g, function(match, name) {
      return values[name] || "";
    });
  }

  twttr.txt.stringSupplant = stringSupplant;

  function addCharsToCharClass(charClass, start, end) {
    var s = String.fromCharCode(start);
    if (end !== start) {
      s += "-" + String.fromCharCode(end);
    }
    charClass.push(s);
    return charClass;
  }

  twttr.txt.addCharsToCharClass = addCharsToCharClass;

  // Space is more than %20, U+3000 for example is the full-width space used with Kanji. Provide a short-hand
  // to access both the list of characters and a pattern suitible for use with String#split
  // Taken from: ActiveSupport::Multibyte::Handlers::UTF8Handler::UNICODE_WHITESPACE
  var fromCode = String.fromCharCode;
  var UNICODE_SPACES = [
    fromCode(0x0020), // White_Space # Zs       SPACE
    fromCode(0x0085), // White_Space # Cc       <control-0085>
    fromCode(0x00A0), // White_Space # Zs       NO-BREAK SPACE
    fromCode(0x1680), // White_Space # Zs       OGHAM SPACE MARK
    fromCode(0x180E), // White_Space # Zs       MONGOLIAN VOWEL SEPARATOR
    fromCode(0x2028), // White_Space # Zl       LINE SEPARATOR
    fromCode(0x2029), // White_Space # Zp       PARAGRAPH SEPARATOR
    fromCode(0x202F), // White_Space # Zs       NARROW NO-BREAK SPACE
    fromCode(0x205F), // White_Space # Zs       MEDIUM MATHEMATICAL SPACE
    fromCode(0x3000)  // White_Space # Zs       IDEOGRAPHIC SPACE
  ];
  addCharsToCharClass(UNICODE_SPACES, 0x009, 0x00D); // White_Space # Cc   [5] <control-0009>..<control-000D>
  addCharsToCharClass(UNICODE_SPACES, 0x2000, 0x200A); // White_Space # Zs  [11] EN QUAD..HAIR SPACE

  var INVALID_CHARS = [
    fromCode(0xFFFE),
    fromCode(0xFEFF), // BOM
    fromCode(0xFFFF) // Special
  ];
  addCharsToCharClass(INVALID_CHARS, 0x202A, 0x202E); // Directional change

  twttr.txt.regexen.spaces_group = regexSupplant(UNICODE_SPACES.join(""));
  twttr.txt.regexen.spaces = regexSupplant("[" + UNICODE_SPACES.join("") + "]");
  twttr.txt.regexen.invalid_chars_group = regexSupplant(INVALID_CHARS.join(""));
  twttr.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
  twttr.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg;
  twttr.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/mg;

  var latinAccentChars = [];
  // Latin accented characters (subtracted 0xD7 from the range, it's a confusable multiplication sign. Looks like "x")
  addCharsToCharClass(latinAccentChars, 0x00c0, 0x00d6);
  addCharsToCharClass(latinAccentChars, 0x00d8, 0x00f6);
  addCharsToCharClass(latinAccentChars, 0x00f8, 0x00ff);
  // Latin Extended A and B
  addCharsToCharClass(latinAccentChars, 0x0100, 0x024f);
  // assorted IPA Extensions
  addCharsToCharClass(latinAccentChars, 0x0253, 0x0254);
  addCharsToCharClass(latinAccentChars, 0x0256, 0x0257);
  addCharsToCharClass(latinAccentChars, 0x0259, 0x0259);
  addCharsToCharClass(latinAccentChars, 0x025b, 0x025b);
  addCharsToCharClass(latinAccentChars, 0x0263, 0x0263);
  addCharsToCharClass(latinAccentChars, 0x0268, 0x0268);
  addCharsToCharClass(latinAccentChars, 0x026f, 0x026f);
  addCharsToCharClass(latinAccentChars, 0x0272, 0x0272);
  addCharsToCharClass(latinAccentChars, 0x0289, 0x0289);
  addCharsToCharClass(latinAccentChars, 0x028b, 0x028b);
  // Okina for Hawaiian (it *is* a letter character)
  addCharsToCharClass(latinAccentChars, 0x02bb, 0x02bb);
  // Combining diacritics
  addCharsToCharClass(latinAccentChars, 0x0300, 0x036f);
  // Latin Extended Additional
  addCharsToCharClass(latinAccentChars, 0x1e00, 0x1eff);
  twttr.txt.regexen.latinAccentChars = regexSupplant(latinAccentChars.join(""));

  // Some minimizers convert string escapes into their literal values, which leads to intermittent Unicode normalization bugs and
  // increases the gzipped download size. Use RegEx literals as opposed to string literals to prevent that.
  var unicodeLettersAndMarks = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D/.source;
  var unicodeNumbers = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source;
  var hashtagSpecialChars = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\u00b7/.source;

  // A hashtag must contain at least one unicode letter or mark, as well as numbers, underscores, and select special characters.
  twttr.txt.regexen.hashSigns = /[#＃]/;
  twttr.txt.regexen.hashtagAlpha = new RegExp("[" + unicodeLettersAndMarks + "]");
  twttr.txt.regexen.hashtagAlphaNumeric = new RegExp("[" + unicodeLettersAndMarks + unicodeNumbers + hashtagSpecialChars + "]");
  twttr.txt.regexen.endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/);
  twttr.txt.regexen.hashtagBoundary = new RegExp("(?:^|$|[^&" + unicodeLettersAndMarks + unicodeNumbers + hashtagSpecialChars + "])");
  twttr.txt.regexen.validHashtag = regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(?!\ufe0f|\u20e3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);

  // Mention related regex collection
  twttr.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/;
  twttr.txt.regexen.atSigns = /[@＠]/;
  twttr.txt.regexen.validMentionOrList = regexSupplant(
    '(#{validMentionPrecedingChars})' +  // $1: Preceding character
    '(#{atSigns})' +                     // $2: At mark
    '([a-zA-Z0-9_]{1,20})' +             // $3: Screen name
    '(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?'  // $4: List (optional)
  , 'g');
  twttr.txt.regexen.validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);
  twttr.txt.regexen.endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);

  // URL related regex collection
  twttr.txt.regexen.validUrlPrecedingChars = regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/);
  twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/;
  twttr.txt.regexen.invalidDomainChars = stringSupplant("#{punct}#{spaces_group}#{invalid_chars_group}", twttr.txt.regexen);
  twttr.txt.regexen.validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/);
  twttr.txt.regexen.validSubdomain = regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validDomainName = regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validGTLD = regexSupplant(RegExp(
    '(?:(?:' +
    'abb|abbott|abogado|academy|accenture|accountant|accountants|aco|active|actor|ads|adult|aeg|aero|' +
    'afl|agency|aig|airforce|airtel|allfinanz|alsace|amsterdam|android|apartments|app|aquarelle|' +
    'archi|army|arpa|asia|associates|attorney|auction|audio|auto|autos|axa|azure|band|bank|bar|' +
    'barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bbc|bbva|bcn|beer|bentley|berlin|best|' +
    'bet|bharti|bible|bid|bike|bing|bingo|bio|biz|black|blackfriday|bloomberg|blue|bmw|bnl|' +
    'bnpparibas|boats|bond|boo|boots|boutique|bradesco|bridgestone|broker|brother|brussels|budapest|' +
    'build|builders|business|buzz|bzh|cab|cafe|cal|camera|camp|cancerresearch|canon|capetown|capital|' +
    'caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|ceb|center|' +
    'ceo|cern|cfa|cfd|chanel|channel|chat|cheap|chloe|christmas|chrome|church|cisco|citic|city|' +
    'claims|cleaning|click|clinic|clothing|cloud|club|coach|codes|coffee|college|cologne|com|' +
    'commbank|community|company|computer|condos|construction|consulting|contractors|cooking|cool|' +
    'coop|corsica|country|coupons|courses|credit|creditcard|cricket|crown|crs|cruises|cuisinella|' +
    'cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|deals|degree|delivery|delta|democrat|' +
    'dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dnp|docs|dog|' +
    'doha|domains|doosan|download|drive|durban|dvag|earth|eat|edu|education|email|emerck|energy|' +
    'engineer|engineering|enterprises|epson|equipment|erni|esq|estate|eurovision|eus|events|everbank|' +
    'exchange|expert|exposed|express|fage|fail|faith|family|fan|fans|farm|fashion|feedback|film|' +
    'finance|financial|firmdale|fish|fishing|fit|fitness|flights|florist|flowers|flsmidth|fly|foo|' +
    'football|forex|forsale|forum|foundation|frl|frogans|fund|furniture|futbol|fyi|gal|gallery|game|' +
    'garden|gbiz|gdn|gent|genting|ggee|gift|gifts|gives|giving|glass|gle|global|globo|gmail|gmo|gmx|' +
    'gold|goldpoint|golf|goo|goog|google|gop|gov|graphics|gratis|green|gripe|group|guge|guide|' +
    'guitars|guru|hamburg|hangout|haus|healthcare|help|here|hermes|hiphop|hitachi|hiv|hockey|' +
    'holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hsbc|ibm|' +
    'icbc|ice|icu|ifm|iinet|immo|immobilien|industries|infiniti|info|ing|ink|institute|insure|int|' +
    'international|investments|ipiranga|irish|ist|istanbul|itau|iwc|java|jcb|jetzt|jewelry|jlc|jll|' +
    'jobs|joburg|jprs|juegos|kaufen|kddi|kim|kitchen|kiwi|koeln|komatsu|krd|kred|kyoto|lacaixa|' +
    'lancaster|land|lasalle|lat|latrobe|law|lawyer|lds|lease|leclerc|legal|lexus|lgbt|liaison|lidl|' +
    'life|lighting|limited|limo|link|live|lixil|loan|loans|lol|london|lotte|lotto|love|ltda|lupin|' +
    'luxe|luxury|madrid|maif|maison|man|management|mango|market|marketing|markets|marriott|mba|media|' +
    'meet|melbourne|meme|memorial|men|menu|miami|microsoft|mil|mini|mma|mobi|moda|moe|mom|monash|' +
    'money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mtn|mtpc|museum|nadex|' +
    'nagoya|name|navy|nec|net|netbank|network|neustar|new|news|nexus|ngo|nhk|nico|ninja|nissan|nokia|' +
    'nra|nrw|ntt|nyc|office|okinawa|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|osaka|' +
    'otsuka|ovh|page|panerai|paris|partners|parts|party|pet|pharmacy|philips|photo|photography|' +
    'photos|physio|piaget|pics|pictet|pictures|pink|pizza|place|play|plumbing|plus|pohl|poker|porn|' +
    'post|praxi|press|pro|prod|productions|prof|properties|property|pub|qpon|quebec|racing|realtor|' +
    'realty|recipes|red|redstone|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|' +
    'rest|restaurant|review|reviews|rich|ricoh|rio|rip|rocks|rodeo|rsvp|ruhr|run|ryukyu|saarland|' +
    'sakura|sale|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|saxo|sca|scb|schmidt|scholarships|' +
    'school|schule|schwarz|science|scor|scot|seat|seek|sener|services|sew|sex|sexy|shiksha|shoes|' +
    'show|shriram|singles|site|ski|sky|skype|sncf|soccer|social|software|sohu|solar|solutions|sony|' +
    'soy|space|spiegel|spreadbetting|srl|starhub|statoil|studio|study|style|sucks|supplies|supply|' +
    'support|surf|surgery|suzuki|swatch|swiss|sydney|systems|taipei|tatamotors|tatar|tattoo|tax|taxi|' +
    'team|tech|technology|tel|telefonica|temasek|tennis|thd|theater|tickets|tienda|tips|tires|tirol|' +
    'today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|trade|trading|training|travel|trust|' +
    'tui|ubs|university|uno|uol|vacations|vegas|ventures|vermögensberater|vermögensberatung|' +
    'versicherung|vet|viajes|video|villas|vin|vision|vista|vistaprint|vlaanderen|vodka|vote|voting|' +
    'voto|voyage|wales|walter|wang|watch|webcam|website|wed|wedding|weir|whoswho|wien|wiki|' +
    'williamhill|win|windows|wine|wme|work|works|world|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|' +
    'yandex|yodobashi|yoga|yokohama|youtube|zip|zone|zuerich|дети|ком|москва|онлайн|орг|рус|сайт|קום|' +
    'بازار|شبكة|كوم|موقع|कॉम|नेट|संगठन|คอม|みんな|グーグル|コム|世界|中信|中文网|企业|佛山|信息|健康|八卦|公司|公益|商城|商店|商标|在线|大拿|' +
    '娱乐|工行|广东|慈善|我爱你|手机|政务|政府|新闻|时尚|机构|淡马锡|游戏|点看|移动|组织机构|网址|网店|网络|谷歌|集团|飞利浦|餐厅|닷넷|닷컴|삼성|onion' +
    ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validCCTLD = regexSupplant(RegExp(
    '(?:(?:' +
    'ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|' +
    'br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|' +
    'ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|' +
    'gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|' +
    'la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|' +
    'my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|' +
    'rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|' +
    'tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|' +
    'бел|мкд|мон|рф|срб|укр|қаз|հայ|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|' +
    'سورية|عراق|عمان|فلسطين|قطر|مصر|مليسيا|پاکستان|भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|' +
    'சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|澳門|香港|한국' +
    ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validPunycode = regexSupplant(/(?:xn--[0-9a-z]+)/);
  twttr.txt.regexen.validSpecialCCTLD = regexSupplant(RegExp(
    '(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);
  twttr.txt.regexen.validAsciiDomain = regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);
  twttr.txt.regexen.invalidShortDomain = regexSupplant(/^#{validDomainName}#{validCCTLD}$/i);
  twttr.txt.regexen.validSpecialShortDomain = regexSupplant(/^#{validDomainName}#{validSpecialCCTLD}$/i);

  twttr.txt.regexen.validPortNumber = regexSupplant(/[0-9]+/);

  twttr.txt.regexen.cyrillicLettersAndMarks = regexSupplant(/\u0400-\u04FF/);
  twttr.txt.regexen.validGeneralUrlPathChars = regexSupplant(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-_~@\|&#{latinAccentChars}]/i);
  // Allow URL paths to contain up to two nested levels of balanced parens
  //  1. Used in Wikipedia URLs like /Primer_(film)
  //  2. Used in IIS sessions like /S(dfd346)/
  //  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/
  twttr.txt.regexen.validUrlBalancedParens = regexSupplant(
    '\\('                                   +
      '(?:'                                 +
        '#{validGeneralUrlPathChars}+'      +
        '|'                                 +
        // allow one nested level of balanced parentheses
        '(?:'                               +
          '#{validGeneralUrlPathChars}*'    +
          '\\('                             +
            '#{validGeneralUrlPathChars}+'  +
          '\\)'                             +
          '#{validGeneralUrlPathChars}*'    +
        ')'                                 +
      ')'                                   +
    '\\)'
  , 'i');
  // Valid end-of-path chracters (so /foo. does not gobble the period).
  // 1. Allow =&# for empty URL parameters and other URL-join artifacts
  twttr.txt.regexen.validUrlPathEndingChars = regexSupplant(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i);
  // Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/
  twttr.txt.regexen.validUrlPath = regexSupplant('(?:' +
    '(?:' +
      '#{validGeneralUrlPathChars}*' +
        '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' +
        '#{validUrlPathEndingChars}'+
      ')|(?:@#{validGeneralUrlPathChars}+\/)'+
    ')', 'i');

  twttr.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;
  twttr.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i;
  twttr.txt.regexen.extractUrl = regexSupplant(
    '('                                                            + // $1 total match
      '(#{validUrlPrecedingChars})'                                + // $2 Preceeding chracter
      '('                                                          + // $3 URL
        '(https?:\\/\\/)?'                                         + // $4 Protocol (optional)
        '(#{validDomain})'                                         + // $5 Domain(s)
        '(?::(#{validPortNumber}))?'                               + // $6 Port number (optional)
        '(\\/#{validUrlPath}*)?'                                   + // $7 URL Path
        '(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?'  + // $8 Query String
      ')'                                                          +
    ')'
  , 'gi');

  twttr.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i;
  twttr.txt.regexen.urlHasProtocol = /^https?:\/\//i;
  twttr.txt.regexen.urlHasHttps = /^https:\/\//i;

  // cashtag related regex
  twttr.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
  twttr.txt.regexen.validCashtag = regexSupplant('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', 'gi');

  // These URL validation pattern strings are based on the ABNF from RFC 3986
  twttr.txt.regexen.validateUrlUnreserved = /[a-z\u0400-\u04FF0-9\-._~]/i;
  twttr.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i;
  twttr.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i;
  twttr.txt.regexen.validateUrlPchar = regexSupplant('(?:' +
    '#{validateUrlUnreserved}|' +
    '#{validateUrlPctEncoded}|' +
    '#{validateUrlSubDelims}|' +
    '[:|@]' +
  ')', 'i');

  twttr.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i;
  twttr.txt.regexen.validateUrlUserinfo = regexSupplant('(?:' +
    '#{validateUrlUnreserved}|' +
    '#{validateUrlPctEncoded}|' +
    '#{validateUrlSubDelims}|' +
    ':' +
  ')*', 'i');

  twttr.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
  twttr.txt.regexen.validateUrlIpv4 = regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);

  // Punting on real IPv6 validation for now
  twttr.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;

  // Also punting on IPvFuture for now
  twttr.txt.regexen.validateUrlIp = regexSupplant('(?:' +
    '#{validateUrlIpv4}|' +
    '#{validateUrlIpv6}' +
  ')', 'i');

  // This is more strict than the rfc specifies
  twttr.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);

  twttr.txt.regexen.validateUrlHost = regexSupplant('(?:' +
    '#{validateUrlIp}|' +
    '#{validateUrlDomain}' +
  ')', 'i');

  // Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences
  twttr.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomain = regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);

  twttr.txt.regexen.validateUrlUnicodeHost = regexSupplant('(?:' +
    '#{validateUrlIp}|' +
    '#{validateUrlUnicodeDomain}' +
  ')', 'i');

  twttr.txt.regexen.validateUrlPort = /[0-9]{1,5}/;

  twttr.txt.regexen.validateUrlUnicodeAuthority = regexSupplant(
    '(?:(#{validateUrlUserinfo})@)?'  + // $1 userinfo
    '(#{validateUrlUnicodeHost})'     + // $2 host
    '(?::(#{validateUrlPort}))?'        //$3 port
  , "i");

  twttr.txt.regexen.validateUrlAuthority = regexSupplant(
    '(?:(#{validateUrlUserinfo})@)?' + // $1 userinfo
    '(#{validateUrlHost})'           + // $2 host
    '(?::(#{validateUrlPort}))?'       // $3 port
  , "i");

  twttr.txt.regexen.validateUrlPath = regexSupplant(/(\/#{validateUrlPchar}*)*/i);
  twttr.txt.regexen.validateUrlQuery = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);
  twttr.txt.regexen.validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);

  // Modified version of RFC 3986 Appendix B
  twttr.txt.regexen.validateUrlUnencoded = regexSupplant(
    '^'                               + // Full URL
    '(?:'                             +
      '([^:/?#]+):\\/\\/'             + // $1 Scheme
    ')?'                              +
    '([^/?#]*)'                       + // $2 Authority
    '([^?#]*)'                        + // $3 Path
    '(?:'                             +
      '\\?([^#]*)'                    + // $4 Query
    ')?'                              +
    '(?:'                             +
      '#(.*)'                         + // $5 Fragment
    ')?$'
  , "i");


  // Default CSS class for auto-linked lists (along with the url class)
  var DEFAULT_LIST_CLASS = "tweet-url list-slug";
  // Default CSS class for auto-linked usernames (along with the url class)
  var DEFAULT_USERNAME_CLASS = "tweet-url username";
  // Default CSS class for auto-linked hashtags (along with the url class)
  var DEFAULT_HASHTAG_CLASS = "tweet-url hashtag";
  // Default CSS class for auto-linked cashtags (along with the url class)
  var DEFAULT_CASHTAG_CLASS = "tweet-url cashtag";
  // Options which should not be passed as HTML attributes
  var OPTIONS_NOT_ATTRIBUTES = {'urlClass':true, 'listClass':true, 'usernameClass':true, 'hashtagClass':true, 'cashtagClass':true,
                            'usernameUrlBase':true, 'listUrlBase':true, 'hashtagUrlBase':true, 'cashtagUrlBase':true,
                            'usernameUrlBlock':true, 'listUrlBlock':true, 'hashtagUrlBlock':true, 'linkUrlBlock':true,
                            'usernameIncludeSymbol':true, 'suppressLists':true, 'suppressNoFollow':true, 'targetBlank':true,
                            'suppressDataScreenName':true, 'urlEntities':true, 'symbolTag':true, 'textWithSymbolTag':true, 'urlTarget':true,
                            'invisibleTagAttrs':true, 'linkAttributeBlock':true, 'linkTextBlock': true, 'htmlEscapeNonEntities': true
                            };

  var BOOLEAN_ATTRIBUTES = {'disabled':true, 'readonly':true, 'multiple':true, 'checked':true};

  // Simple object cloning function for simple objects
  function clone(o) {
    var r = {};
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        r[k] = o[k];
      }
    }

    return r;
  }

  twttr.txt.tagAttrs = function(attributes) {
    var htmlAttrs = "";
    for (var k in attributes) {
      var v = attributes[k];
      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }
      if (v == null) continue;
      htmlAttrs += " " + twttr.txt.htmlEscape(k) + "=\"" + twttr.txt.htmlEscape(v.toString()) + "\"";
    }
    return htmlAttrs;
  };

  twttr.txt.linkToText = function(entity, text, attributes, options) {
    if (!options.suppressNoFollow) {
      attributes.rel = "nofollow";
    }
    // if linkAttributeBlock is specified, call it to modify the attributes
    if (options.linkAttributeBlock) {
      options.linkAttributeBlock(entity, attributes);
    }
    // if linkTextBlock is specified, call it to get a new/modified link text
    if (options.linkTextBlock) {
      text = options.linkTextBlock(entity, text);
    }
    var d = {
      text: text,
      attr: twttr.txt.tagAttrs(attributes)
    };
    return stringSupplant("<a#{attr}>#{text}</a>", d);
  };

  twttr.txt.linkToTextWithSymbol = function(entity, symbol, text, attributes, options) {
    var taggedSymbol = options.symbolTag ? "<" + options.symbolTag + ">" + symbol + "</"+ options.symbolTag + ">" : symbol;
    text = twttr.txt.htmlEscape(text);
    var taggedText = options.textWithSymbolTag ? "<" + options.textWithSymbolTag + ">" + text + "</"+ options.textWithSymbolTag + ">" : text;

    if (options.usernameIncludeSymbol || !symbol.match(twttr.txt.regexen.atSigns)) {
      return twttr.txt.linkToText(entity, taggedSymbol + taggedText, attributes, options);
    } else {
      return taggedSymbol + twttr.txt.linkToText(entity, taggedText, attributes, options);
    }
  };

  twttr.txt.linkToHashtag = function(entity, text, options) {
    var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
    var hashtag = twttr.txt.htmlEscape(entity.hashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.hashtagUrlBase + hashtag;
    attrs.title = "#" + hashtag;
    attrs["class"] = options.hashtagClass;
    if (hashtag.charAt(0).match(twttr.txt.regexen.rtl_chars)){
      attrs["class"] += " rtl";
    }
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, hash, hashtag, attrs, options);
  };

  twttr.txt.linkToCashtag = function(entity, text, options) {
    var cashtag = twttr.txt.htmlEscape(entity.cashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.cashtagUrlBase + cashtag;
    attrs.title = "$" + cashtag;
    attrs["class"] =  options.cashtagClass;
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, "$", cashtag, attrs, options);
  };

  twttr.txt.linkToMentionAndList = function(entity, text, options) {
    var at = text.substring(entity.indices[0], entity.indices[0] + 1);
    var user = twttr.txt.htmlEscape(entity.screenName);
    var slashListname = twttr.txt.htmlEscape(entity.listSlug);
    var isList = entity.listSlug && !options.suppressLists;
    var attrs = clone(options.htmlAttrs || {});
    attrs["class"] = (isList ? options.listClass : options.usernameClass);
    attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;
    if (!isList && !options.suppressDataScreenName) {
      attrs['data-screen-name'] = user;
    }
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, at, isList ? user + slashListname : user, attrs, options);
  };

  twttr.txt.linkToUrl = function(entity, text, options) {
    var url = entity.url;
    var displayUrl = url;
    var linkText = twttr.txt.htmlEscape(displayUrl);

    // If the caller passed a urlEntities object (provided by a Twitter API
    // response with include_entities=true), we use that to render the display_url
    // for each URL instead of it's underlying t.co URL.
    var urlEntity = (options.urlEntities && options.urlEntities[url]) || entity;
    if (urlEntity.display_url) {
      linkText = twttr.txt.linkTextWithEntity(urlEntity, options);
    }

    var attrs = clone(options.htmlAttrs || {});

    if (!url.match(twttr.txt.regexen.urlHasProtocol)) {
      url = "http://" + url;
    }
    attrs.href = url;

    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    // set class only if urlClass is specified.
    if (options.urlClass) {
      attrs["class"] = options.urlClass;
    }

    // set target only if urlTarget is specified.
    if (options.urlTarget) {
      attrs.target = options.urlTarget;
    }

    if (!options.title && urlEntity.display_url) {
      attrs.title = urlEntity.expanded_url;
    }

    return twttr.txt.linkToText(entity, linkText, attrs, options);
  };

  twttr.txt.linkTextWithEntity = function (entity, options) {
    var displayUrl = entity.display_url;
    var expandedUrl = entity.expanded_url;

    // Goal: If a user copies and pastes a tweet containing t.co'ed link, the resulting paste
    // should contain the full original URL (expanded_url), not the display URL.
    //
    // Method: Whenever possible, we actually emit HTML that contains expanded_url, and use
    // font-size:0 to hide those parts that should not be displayed (because they are not part of display_url).
    // Elements with font-size:0 get copied even though they are not visible.
    // Note that display:none doesn't work here. Elements with display:none don't get copied.
    //
    // Additionally, we want to *display* ellipses, but we don't want them copied.  To make this happen we
    // wrap the ellipses in a tco-ellipsis class and provide an onCopy handler that sets display:none on
    // everything with the tco-ellipsis class.
    //
    // Exception: pic.twitter.com images, for which expandedUrl = "https://twitter.com/#!/username/status/1234/photo/1
    // For those URLs, display_url is not a substring of expanded_url, so we don't do anything special to render the elided parts.
    // For a pic.twitter.com URL, the only elided part will be the "https://", so this is fine.

    var displayUrlSansEllipses = displayUrl.replace(/…/g, ""); // We have to disregard ellipses for matching
    // Note: we currently only support eliding parts of the URL at the beginning or the end.
    // Eventually we may want to elide parts of the URL in the *middle*.  If so, this code will
    // become more complicated.  We will probably want to create a regexp out of display URL,
    // replacing every ellipsis with a ".*".
    if (expandedUrl.indexOf(displayUrlSansEllipses) != -1) {
      var displayUrlIndex = expandedUrl.indexOf(displayUrlSansEllipses);
      var v = {
        displayUrlSansEllipses: displayUrlSansEllipses,
        // Portion of expandedUrl that precedes the displayUrl substring
        beforeDisplayUrl: expandedUrl.substr(0, displayUrlIndex),
        // Portion of expandedUrl that comes after displayUrl
        afterDisplayUrl: expandedUrl.substr(displayUrlIndex + displayUrlSansEllipses.length),
        precedingEllipsis: displayUrl.match(/^…/) ? "…" : "",
        followingEllipsis: displayUrl.match(/…$/) ? "…" : ""
      };
      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          v[k] = twttr.txt.htmlEscape(v[k]);
        }
      }
      // As an example: The user tweets "hi http://longdomainname.com/foo"
      // This gets shortened to "hi http://t.co/xyzabc", with display_url = "…nname.com/foo"
      // This will get rendered as:
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   …
      //   <!-- There's a chance the onCopy event handler might not fire. In case that happens,
      //        we include an &nbsp; here so that the … doesn't bump up against the URL and ruin it.
      //        The &nbsp; is inside the tco-ellipsis span so that when the onCopy handler *does*
      //        fire, it doesn't get copied.  Otherwise the copied text would have two spaces in a row,
      //        e.g. "hi  http://longdomainname.com/foo".
      //   <span style='font-size:0'>&nbsp;</span>
      // </span>
      // <span style='font-size:0'>  <!-- This stuff should get copied but not displayed -->
      //   http://longdomai
      // </span>
      // <span class='js-display-url'> <!-- This stuff should get displayed *and* copied -->
      //   nname.com/foo
      // </span>
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   <span style='font-size:0'>&nbsp;</span>
      //   …
      // </span>
      v['invisible'] = options.invisibleTagAttrs;
      return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v);
    }
    return displayUrl;
  };

  twttr.txt.autoLinkEntities = function(text, entities, options) {
    options = clone(options || {});

    options.hashtagClass = options.hashtagClass || DEFAULT_HASHTAG_CLASS;
    options.hashtagUrlBase = options.hashtagUrlBase || "https://twitter.com/#!/search?q=%23";
    options.cashtagClass = options.cashtagClass || DEFAULT_CASHTAG_CLASS;
    options.cashtagUrlBase = options.cashtagUrlBase || "https://twitter.com/#!/search?q=%24";
    options.listClass = options.listClass || DEFAULT_LIST_CLASS;
    options.usernameClass = options.usernameClass || DEFAULT_USERNAME_CLASS;
    options.usernameUrlBase = options.usernameUrlBase || "https://twitter.com/";
    options.listUrlBase = options.listUrlBase || "https://twitter.com/";
    options.htmlAttrs = twttr.txt.extractHtmlAttrsFromOptions(options);
    options.invisibleTagAttrs = options.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";

    // remap url entities to hash
    var urlEntities, i, len;
    if(options.urlEntities) {
      urlEntities = {};
      for(i = 0, len = options.urlEntities.length; i < len; i++) {
        urlEntities[options.urlEntities[i].url] = options.urlEntities[i];
      }
      options.urlEntities = urlEntities;
    }

    var result = "";
    var beginIndex = 0;

    // sort entities by start index
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

    var nonEntity = options.htmlEscapeNonEntities ? twttr.txt.htmlEscape : function(text) {
      return text;
    };

    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      result += nonEntity(text.substring(beginIndex, entity.indices[0]));

      if (entity.url) {
        result += twttr.txt.linkToUrl(entity, text, options);
      } else if (entity.hashtag) {
        result += twttr.txt.linkToHashtag(entity, text, options);
      } else if (entity.screenName) {
        result += twttr.txt.linkToMentionAndList(entity, text, options);
      } else if (entity.cashtag) {
        result += twttr.txt.linkToCashtag(entity, text, options);
      }
      beginIndex = entity.indices[1];
    }
    result += nonEntity(text.substring(beginIndex, text.length));
    return result;
  };

  twttr.txt.autoLinkWithJSON = function(text, json, options) {
    // map JSON entity to twitter-text entity
    if (json.user_mentions) {
      for (var i = 0; i < json.user_mentions.length; i++) {
        // this is a @mention
        json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
      }
    }

    if (json.hashtags) {
      for (var i = 0; i < json.hashtags.length; i++) {
        // this is a #hashtag
        json.hashtags[i].hashtag = json.hashtags[i].text;
      }
    }

    if (json.symbols) {
      for (var i = 0; i < json.symbols.length; i++) {
        // this is a $CASH tag
        json.symbols[i].cashtag = json.symbols[i].text;
      }
    }

    // concatenate all entities
    var entities = [];
    for (var key in json) {
      entities = entities.concat(json[key]);
    }

    // modify indices to UTF-16
    twttr.txt.modifyIndicesFromUnicodeToUTF16(text, entities);

    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.extractHtmlAttrsFromOptions = function(options) {
    var htmlAttrs = {};
    for (var k in options) {
      var v = options[k];
      if (OPTIONS_NOT_ATTRIBUTES[k]) continue;
      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }
      if (v == null) continue;
      htmlAttrs[k] = v;
    }
    return htmlAttrs;
  };

  twttr.txt.autoLink = function(text, options) {
    var entities = twttr.txt.extractEntitiesWithIndices(text, {extractUrlsWithoutProtocol: false});
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUsernamesOrLists = function(text, options) {
    var entities = twttr.txt.extractMentionsOrListsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkHashtags = function(text, options) {
    var entities = twttr.txt.extractHashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkCashtags = function(text, options) {
    var entities = twttr.txt.extractCashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUrlsCustom = function(text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, {extractUrlsWithoutProtocol: false});
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.removeOverlappingEntities = function(entities) {
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

    var prev = entities[0];
    for (var i = 1; i < entities.length; i++) {
      if (prev.indices[1] > entities[i].indices[0]) {
        entities.splice(i, 1);
        i--;
      } else {
        prev = entities[i];
      }
    }
  };

  twttr.txt.extractEntitiesWithIndices = function(text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, options)
                    .concat(twttr.txt.extractMentionsOrListsWithIndices(text))
                    .concat(twttr.txt.extractHashtagsWithIndices(text, {checkUrlOverlap: false}))
                    .concat(twttr.txt.extractCashtagsWithIndices(text));

    if (entities.length == 0) {
      return [];
    }

    twttr.txt.removeOverlappingEntities(entities);
    return entities;
  };

  twttr.txt.extractMentions = function(text) {
    var screenNamesOnly = [],
        screenNamesWithIndices = twttr.txt.extractMentionsWithIndices(text);

    for (var i = 0; i < screenNamesWithIndices.length; i++) {
      var screenName = screenNamesWithIndices[i].screenName;
      screenNamesOnly.push(screenName);
    }

    return screenNamesOnly;
  };

  twttr.txt.extractMentionsWithIndices = function(text) {
    var mentions = [],
        mentionOrList,
        mentionsOrLists = twttr.txt.extractMentionsOrListsWithIndices(text);

    for (var i = 0 ; i < mentionsOrLists.length; i++) {
      mentionOrList = mentionsOrLists[i];
      if (mentionOrList.listSlug == '') {
        mentions.push({
          screenName: mentionOrList.screenName,
          indices: mentionOrList.indices
        });
      }
    }

    return mentions;
  };

  /**
   * Extract list or user mentions.
   * (Presence of listSlug indicates a list)
   */
  twttr.txt.extractMentionsOrListsWithIndices = function(text) {
    if (!text || !text.match(twttr.txt.regexen.atSigns)) {
      return [];
    }

    var possibleNames = [],
        slashListname;

    text.replace(twttr.txt.regexen.validMentionOrList, function(match, before, atSign, screenName, slashListname, offset, chunk) {
      var after = chunk.slice(offset + match.length);
      if (!after.match(twttr.txt.regexen.endMentionMatch)) {
        slashListname = slashListname || '';
        var startPosition = offset + before.length;
        var endPosition = startPosition + screenName.length + slashListname.length + 1;
        possibleNames.push({
          screenName: screenName,
          listSlug: slashListname,
          indices: [startPosition, endPosition]
        });
      }
    });

    return possibleNames;
  };


  twttr.txt.extractReplies = function(text) {
    if (!text) {
      return null;
    }

    var possibleScreenName = text.match(twttr.txt.regexen.validReply);
    if (!possibleScreenName ||
        RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)) {
      return null;
    }

    return possibleScreenName[1];
  };

  twttr.txt.extractUrls = function(text, options) {
    var urlsOnly = [],
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text, options);

    for (var i = 0; i < urlsWithIndices.length; i++) {
      urlsOnly.push(urlsWithIndices[i].url);
    }

    return urlsOnly;
  };

  twttr.txt.extractUrlsWithIndices = function(text, options) {
    if (!options) {
      options = {extractUrlsWithoutProtocol: true};
    }
    if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
      return [];
    }

    var urls = [];

    while (twttr.txt.regexen.extractUrl.exec(text)) {
      var before = RegExp.$2, url = RegExp.$3, protocol = RegExp.$4, domain = RegExp.$5, path = RegExp.$7;
      var endPosition = twttr.txt.regexen.extractUrl.lastIndex,
          startPosition = endPosition - url.length;

      // if protocol is missing and domain contains non-ASCII characters,
      // extract ASCII-only domains.
      if (!protocol) {
        if (!options.extractUrlsWithoutProtocol
            || before.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) {
          continue;
        }
        var lastUrl = null,
            asciiEndPosition = 0;
        domain.replace(twttr.txt.regexen.validAsciiDomain, function(asciiDomain) {
          var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
          asciiEndPosition = asciiStartPosition + asciiDomain.length;
          lastUrl = {
            url: asciiDomain,
            indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
          };
          if (path
              || asciiDomain.match(twttr.txt.regexen.validSpecialShortDomain)
              || !asciiDomain.match(twttr.txt.regexen.invalidShortDomain)) {
            urls.push(lastUrl);
          }
        });

        // no ASCII-only domain found. Skip the entire URL.
        if (lastUrl == null) {
          continue;
        }

        // lastUrl only contains domain. Need to add path and query if they exist.
        if (path) {
          lastUrl.url = url.replace(domain, lastUrl.url);
          lastUrl.indices[1] = endPosition;
        }
      } else {
        // In the case of t.co URLs, don't allow additional path characters.
        if (url.match(twttr.txt.regexen.validTcoUrl)) {
          url = RegExp.lastMatch;
          endPosition = startPosition + url.length;
        }
        urls.push({
          url: url,
          indices: [startPosition, endPosition]
        });
      }
    }

    return urls;
  };

  twttr.txt.extractHashtags = function(text) {
    var hashtagsOnly = [],
        hashtagsWithIndices = twttr.txt.extractHashtagsWithIndices(text);

    for (var i = 0; i < hashtagsWithIndices.length; i++) {
      hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
    }

    return hashtagsOnly;
  };

  twttr.txt.extractHashtagsWithIndices = function(text, options) {
    if (!options) {
      options = {checkUrlOverlap: true};
    }

    if (!text || !text.match(twttr.txt.regexen.hashSigns)) {
      return [];
    }

    var tags = [];

    text.replace(twttr.txt.regexen.validHashtag, function(match, before, hash, hashText, offset, chunk) {
      var after = chunk.slice(offset + match.length);
      if (after.match(twttr.txt.regexen.endHashtagMatch))
        return;
      var startPosition = offset + before.length;
      var endPosition = startPosition + hashText.length + 1;
      tags.push({
        hashtag: hashText,
        indices: [startPosition, endPosition]
      });
    });

    if (options.checkUrlOverlap) {
      // also extract URL entities
      var urls = twttr.txt.extractUrlsWithIndices(text);
      if (urls.length > 0) {
        var entities = tags.concat(urls);
        // remove overlap
        twttr.txt.removeOverlappingEntities(entities);
        // only push back hashtags
        tags = [];
        for (var i = 0; i < entities.length; i++) {
          if (entities[i].hashtag) {
            tags.push(entities[i]);
          }
        }
      }
    }

    return tags;
  };

  twttr.txt.extractCashtags = function(text) {
    var cashtagsOnly = [],
        cashtagsWithIndices = twttr.txt.extractCashtagsWithIndices(text);

    for (var i = 0; i < cashtagsWithIndices.length; i++) {
      cashtagsOnly.push(cashtagsWithIndices[i].cashtag);
    }

    return cashtagsOnly;
  };

  twttr.txt.extractCashtagsWithIndices = function(text) {
    if (!text || text.indexOf("$") == -1) {
      return [];
    }

    var tags = [];

    text.replace(twttr.txt.regexen.validCashtag, function(match, before, dollar, cashtag, offset, chunk) {
      var startPosition = offset + before.length;
      var endPosition = startPosition + cashtag.length + 1;
      tags.push({
        cashtag: cashtag,
        indices: [startPosition, endPosition]
      });
    });

    return tags;
  };

  twttr.txt.modifyIndicesFromUnicodeToUTF16 = function(text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, false);
  };

  twttr.txt.modifyIndicesFromUTF16ToUnicode = function(text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, true);
  };

  twttr.txt.getUnicodeTextLength = function(text) {
    return text.replace(twttr.txt.regexen.non_bmp_code_pairs, ' ').length;
  };

  twttr.txt.convertUnicodeIndices = function(text, entities, indicesInUTF16) {
    if (entities.length == 0) {
      return;
    }

    var charIndex = 0;
    var codePointIndex = 0;

    // sort entities by start index
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });
    var entityIndex = 0;
    var entity = entities[0];

    while (charIndex < text.length) {
      if (entity.indices[0] == (indicesInUTF16 ? charIndex : codePointIndex)) {
        var len = entity.indices[1] - entity.indices[0];
        entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
        entity.indices[1] = entity.indices[0] + len;

        entityIndex++;
        if (entityIndex == entities.length) {
          // no more entity
          break;
        }
        entity = entities[entityIndex];
      }

      var c = text.charCodeAt(charIndex);
      if (0xD800 <= c && c <= 0xDBFF && charIndex < text.length - 1) {
        // Found high surrogate char
        c = text.charCodeAt(charIndex + 1);
        if (0xDC00 <= c && c <= 0xDFFF) {
          // Found surrogate pair
          charIndex++;
        }
      }
      codePointIndex++;
      charIndex++;
    }
  };

  // this essentially does text.split(/<|>/)
  // except that won't work in IE, where empty strings are ommitted
  // so "<>".split(/<|>/) => [] in IE, but is ["", "", ""] in all others
  // but "<<".split("<") => ["", "", ""]
  twttr.txt.splitTags = function(text) {
    var firstSplits = text.split("<"),
        secondSplits,
        allSplits = [],
        split;

    for (var i = 0; i < firstSplits.length; i += 1) {
      split = firstSplits[i];
      if (!split) {
        allSplits.push("");
      } else {
        secondSplits = split.split(">");
        for (var j = 0; j < secondSplits.length; j += 1) {
          allSplits.push(secondSplits[j]);
        }
      }
    }

    return allSplits;
  };

  twttr.txt.hitHighlight = function(text, hits, options) {
    var defaultHighlightTag = "em";

    hits = hits || [];
    options = options || {};

    if (hits.length === 0) {
      return text;
    }

    var tagName = options.tag || defaultHighlightTag,
        tags = ["<" + tagName + ">", "</" + tagName + ">"],
        chunks = twttr.txt.splitTags(text),
        i,
        j,
        result = "",
        chunkIndex = 0,
        chunk = chunks[0],
        prevChunksLen = 0,
        chunkCursor = 0,
        startInChunk = false,
        chunkChars = chunk,
        flatHits = [],
        index,
        hit,
        tag,
        placed,
        hitSpot;

    for (i = 0; i < hits.length; i += 1) {
      for (j = 0; j < hits[i].length; j += 1) {
        flatHits.push(hits[i][j]);
      }
    }

    for (index = 0; index < flatHits.length; index += 1) {
      hit = flatHits[index];
      tag = tags[index % 2];
      placed = false;

      while (chunk != null && hit >= prevChunksLen + chunk.length) {
        result += chunkChars.slice(chunkCursor);
        if (startInChunk && hit === prevChunksLen + chunkChars.length) {
          result += tag;
          placed = true;
        }

        if (chunks[chunkIndex + 1]) {
          result += "<" + chunks[chunkIndex + 1] + ">";
        }

        prevChunksLen += chunkChars.length;
        chunkCursor = 0;
        chunkIndex += 2;
        chunk = chunks[chunkIndex];
        chunkChars = chunk;
        startInChunk = false;
      }

      if (!placed && chunk != null) {
        hitSpot = hit - prevChunksLen;
        result += chunkChars.slice(chunkCursor, hitSpot) + tag;
        chunkCursor = hitSpot;
        if (index % 2 === 0) {
          startInChunk = true;
        } else {
          startInChunk = false;
        }
      } else if(!placed) {
        placed = true;
        result += tag;
      }
    }

    if (chunk != null) {
      if (chunkCursor < chunkChars.length) {
        result += chunkChars.slice(chunkCursor);
      }
      for (index = chunkIndex + 1; index < chunks.length; index += 1) {
        result += (index % 2 === 0 ? chunks[index] : "<" + chunks[index] + ">");
      }
    }

    return result;
  };

  var MAX_LENGTH = 140;

  // Characters not allowed in Tweets
  var INVALID_CHARACTERS = [
    // BOM
    fromCode(0xFFFE),
    fromCode(0xFEFF),

    // Special
    fromCode(0xFFFF),

    // Directional Change
    fromCode(0x202A),
    fromCode(0x202B),
    fromCode(0x202C),
    fromCode(0x202D),
    fromCode(0x202E)
  ];

  // Returns the length of Tweet text with consideration to t.co URL replacement
  // and chars outside the basic multilingual plane that use 2 UTF16 code points
  twttr.txt.getTweetLength = function(text, options) {
    if (!options) {
      options = {
          // These come from https://api.twitter.com/1/help/configuration.json
          // described by https://dev.twitter.com/docs/api/1/get/help/configuration
          short_url_length: 23,
          short_url_length_https: 23
      };
    }
    var textLength = twttr.txt.getUnicodeTextLength(text),
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text);
    twttr.txt.modifyIndicesFromUTF16ToUnicode(text, urlsWithIndices);

    for (var i = 0; i < urlsWithIndices.length; i++) {
      // Subtract the length of the original URL
      textLength += urlsWithIndices[i].indices[0] - urlsWithIndices[i].indices[1];

      // Add 23 characters for URL starting with https://
      // http:// URLs still use https://t.co so they are 23 characters as well
      if (urlsWithIndices[i].url.toLowerCase().match(twttr.txt.regexen.urlHasHttps)) {
         textLength += options.short_url_length_https;
      } else {
        textLength += options.short_url_length;
      }
    }

    return textLength;
  };

  // Check the text for any reason that it may not be valid as a Tweet. This is meant as a pre-validation
  // before posting to api.twitter.com. There are several server-side reasons for Tweets to fail but this pre-validation
  // will allow quicker feedback.
  //
  // Returns false if this text is valid. Otherwise one of the following strings will be returned:
  //
  //   "too_long": if the text is too long
  //   "empty": if the text is nil or empty
  //   "invalid_characters": if the text contains non-Unicode or any of the disallowed Unicode characters
  twttr.txt.isInvalidTweet = function(text) {
    if (!text) {
      return "empty";
    }

    // Determine max length independent of URL length
    if (twttr.txt.getTweetLength(text) > MAX_LENGTH) {
      return "too_long";
    }

    if (twttr.txt.hasInvalidCharacters(text)) {
      return "invalid_characters";
    }

    return false;
  };

  twttr.txt.hasInvalidCharacters = function(text) {
    for (var i = 0; i < INVALID_CHARACTERS.length; i++) {
      if (text.indexOf(INVALID_CHARACTERS[i]) >= 0) {
        return true;
      }
    }
    return false;
  };

  twttr.txt.isValidTweetText = function(text) {
    return !twttr.txt.isInvalidTweet(text);
  };

  twttr.txt.isValidUsername = function(username) {
    if (!username) {
      return false;
    }

    var extracted = twttr.txt.extractMentions(username);

    // Should extract the username minus the @ sign, hence the .slice(1)
    return extracted.length === 1 && extracted[0] === username.slice(1);
  };

  var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/);

  twttr.txt.isValidList = function(usernameList) {
    var match = usernameList.match(VALID_LIST_RE);

    // Must have matched and had nothing before or after
    return !!(match && match[1] == "" && match[4]);
  };

  twttr.txt.isValidHashtag = function(hashtag) {
    if (!hashtag) {
      return false;
    }

    var extracted = twttr.txt.extractHashtags(hashtag);

    // Should extract the hashtag minus the # sign, hence the .slice(1)
    return extracted.length === 1 && extracted[0] === hashtag.slice(1);
  };

  twttr.txt.isValidUrl = function(url, unicodeDomains, requireProtocol) {
    if (unicodeDomains == null) {
      unicodeDomains = true;
    }

    if (requireProtocol == null) {
      requireProtocol = true;
    }

    if (!url) {
      return false;
    }

    var urlParts = url.match(twttr.txt.regexen.validateUrlUnencoded);

    if (!urlParts || urlParts[0] !== url) {
      return false;
    }

    var scheme = urlParts[1],
        authority = urlParts[2],
        path = urlParts[3],
        query = urlParts[4],
        fragment = urlParts[5];

    if (!(
      (!requireProtocol || (isValidMatch(scheme, twttr.txt.regexen.validateUrlScheme) && scheme.match(/^https?$/i))) &&
      isValidMatch(path, twttr.txt.regexen.validateUrlPath) &&
      isValidMatch(query, twttr.txt.regexen.validateUrlQuery, true) &&
      isValidMatch(fragment, twttr.txt.regexen.validateUrlFragment, true)
    )) {
      return false;
    }

    return (unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlUnicodeAuthority)) ||
           (!unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlAuthority));
  };

  function isValidMatch(string, regex, optional) {
    if (!optional) {
      // RegExp["$&"] is the text of the last match
      // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
      return ((typeof string === "string") && string.match(regex) && RegExp["$&"] === string);
    }

    // RegExp["$&"] is the text of the last match
    return (!string || (string.match(regex) && RegExp["$&"] === string));
  }

  if (typeof module != 'undefined' && module.exports) {
    module.exports = twttr.txt;
  }

  if (typeof define == 'function' && define.amd) {
    define([], twttr.txt);
  }

  if (typeof window != 'undefined') {
    if (window.twttr) {
      for (var prop in twttr) {
        window.twttr[prop] = twttr[prop];
      }
    } else {
      window.twttr = twttr;
    }
  }
})();

// Source: shared/js/chrome.js
/**
 * Created by pavel on 2.5.17.
 */
var chrome = typeof browser == 'undefined' ? chrome : browser

// Source: shared/js/libs/html/HtmlBuilder.js
/**
 * Created by pavel on 19.5.16.
 */
/**
 * @deprecated
 */
class HtmlBuilder {
    static get dataRegex () {
        return /^data-(.*)/i
    }

    static createElement (elementTag, attributes, children) {
        const element = elementTag ? document.createElement(elementTag) : document.createTextNode({})

        for (let key in attributes) {
            if (!attributes.hasOwnProperty(key)) {
                continue
            }
            const value = attributes[key]
            if (key === 'class') {
                value
                    .split(' ')
                    .forEach(clazz => element.classList.add(clazz))
            } else if (key === 'style') {
                for (let style in value) {
                    if (!value.hasOwnProperty(style)) {
                        continue
                    }
                    element[key][style] = value[style]
                }
            } else if (HtmlBuilder.dataRegex.test(key)) {
                const name = HtmlBuilder.parseData(key)
                element.dataset[name] = value
            } else if (['for'].indexOf(key) > -1) {
                element.setAttribute(key, value)
            } else {
                element[key] = value
            }
        }
        if (children) {
            if (!Array.isArray(children)) {
                children = [children]
            }
            children.forEach(child => element.appendChild(child))
        }
        return element
    }

    static parseData (name) {
        return name.toLowerCase()
            .replace(/^data-/, '')
            .split('-')
            .map((x, i) => i === 0 ? x : x.substring(0, 1).toUpperCase() + x.substring(1))
            .join('')
    }
}

// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = HtmlBuilder
}

// Source: shared/js/libs/html/HtmlElement.js
class MyElement {

    /**
     *
     * @param {string|Element} tag
     * @param {Array} children
     */
    constructor (tag, children = []) {
        this.element = tag instanceof Element ? tag : document.createElement(tag)
        this.children = []
        this.resetFn = false
        this.filterFn = false
        children.forEach(child => this.append(child))
        return this
    }

    /**
     *
     * @param {MyElement} child
     */
    append (child) {
        if (Array.isArray(child)) {
            const self = this
            child.forEach(i => {
                self.element.appendChild(i.getElement())
            })
        } else {
            this.element.appendChild(child.getElement())
            this.children.push(child)
        }
        return this
    }

    id (id) {
        this.element.id = id
        return this
    }

    setClass (className, set) {
        if (set) {
            this.addClass(className)
        } else {
            this.removeClass(className)
        }
    }

    addClass (className) {
        this.element.classList.add(className)
        return this
    }

    removeClass (className) {
        this.element.classList.remove(className)
        return this
    }

    hasClass (className) {
        return this.element.classList.contains(className)
    }

    toggleClass (className) {
        this.element.classList.toggle(className)
        return this
    }

    src (src) {
        this.element.src = src
        return this
    }

    href (href) {
        this.element.href = href
        return this
    }

    getTagName () {
        return this.element.tagName
    }

    type (type) {
        this.element.type = type
        return this
    }

    for (f) {
        this.element.setAttribute('for', f)
        return this
    }

    alt (alt) {
        this.element.setAttribute('alt', alt)
        return this
    }

    title (title) {
        this.element.setAttribute('title', title)
        return this
    }

    onClick (callback) {
        this.element.onclick = callback
        return this
    }

    click () {
        this.element.click()
    }

    onChange (callback) {
        this.element.onchange = callback
        return this
    }

    onKeyPress (callback) {
        this.element.onkeypress = callback
        return this
    }

    data (name, value) {
        const key = HtmlBuilder.parseData(name)
        this.element.dataset[key] = value
        return this
    }

    getData (name) {
        const key = HtmlBuilder.parseData(name)
        return this.element.dataset[key]
    }

    disable (disabled) {
        if (disabled) {
            this.element.setAttribute('disabled', 'diabled')
        } else {
            this.element.removeAttribute('disabled')
        }
        return this
    }

    text (text) {
        if (typeof text !== 'string') {
            return this.element.textContent
        } else {
            this.element.textContent = text
        }
        return this
    }

    target (target) {
        this.element.target = target
        return this
    }

    onMouseOver (callback) {
        this.element.onmouseover = callback
        return this
    }

    onMouseOut (callback) {
        this.element.onmouseout = callback
        return this
    }

    value (value) {
        if (typeof value !== 'string') {
            return this.element.value
        } else {
            this.element.value = value
        }
        return this
    }

    /**
     * returns DOM element
     * @returns {Element}
     */
    getElement () {
        return this.element
    }

    remove () {
        if (!this.element.parentNode) {
            return
        }
        this.element.parentNode.removeChild(this.element)
    }

    reset (resetFn) {
        if (resetFn) {
            this.resetFn = resetFn
        } else if (typeof this.resetFn === 'function') {
            this.resetFn(this)
        }
        return this
    }

    filter (filter) {
        if (typeof filter === 'function') {
            this.filterFn = filter
        } else if (typeof this.filterFn === 'function') {
            this.filterFn(this, filter)
        }
        return this
    }

    empty () {
        const element = this.element
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
        return this
    }
}

// Source: shared/js/libs/Tooltip.js
class Tooltip {
    constructor () {
        this.tooltip = false
    }

    destroy () {
        if (this.tooltip) {
            this.tooltip.remove()
        }
    }

    create (element, appendToToolip = false, closeable = false) {
        this.destroy()
        const extraOffset = 0
        const elemRect = element.getBoundingClientRect()
        const offsetTop = elemRect.top
        const offsetLeft = elemRect.left

        const riteTagTooltipBox = this.tooltip = new MyElement('div')
            .addClass('ritetag-tooltip-box')
        if (closeable) {
            riteTagTooltipBox.append(
                new MyElement('a')
                    .addClass('ritetag-tooltip-close')
                    .onClick(() => {
                        riteTagTooltipBox.remove()
                    })
            )
        }
        const text = element.getAttribute('data-ritetag-tooltip')
        if (text) {
            riteTagTooltipBox.append(
                new MyElement('span')
                    .text(text)
            )
        }

        const riteTagExtensionWidgetHashtagTooltip = new MyElement('div')
            .id('ritetag-extension-widget-hashtag-tooltip')
            .append(riteTagTooltipBox)

        document.body.appendChild(riteTagExtensionWidgetHashtagTooltip.getElement())

        if (appendToToolip) {
            riteTagTooltipBox.append(appendToToolip)
        }

        const tooltipElm = riteTagExtensionWidgetHashtagTooltip.getElement()

        const tooltipRect = tooltipElm.getBoundingClientRect()
        tooltipElm.style.top = (offsetTop - tooltipElm.clientHeight - 18 - extraOffset) + 'px'
        tooltipElm.style.left = (offsetLeft - (tooltipRect.width / 2) + (elemRect.width / 2)) + 'px'
        tooltipElm.style.opacity = 1

        return {
            tooltip: riteTagExtensionWidgetHashtagTooltip,
            content: riteTagTooltipBox,
            close: () => {
                riteTagExtensionWidgetHashtagTooltip.remove()
            }
        }
    }
}

// Source: shared/js/libs/ImageDetector.js
class ImageDetector {
    static hasSrc (el, checkStyles) {
        if (el.nodeName === 'IMG') {
            console.log("img")
            return el.getAttribute('imgsrc') || el.getAttribute('src') || el.getAttribute('data-src')
        } else if (el.nodeName === 'CANVAS') {
            console.log("canvas")
            return el.toDataURL()
        } else if ((el.nodeName === 'DIV' || el.nodeName === 'BUTTON' || el.nodeName === 'A') && checkStyles) {
            const cstyles = window.getComputedStyle(el)
            // console.log(cstyles)
            if (cstyles && cstyles['background-image'] && cstyles['background-image'] != 'none') {
                console.log("background-image")
                return cstyles['background-image'].trim().replace(/^url\((["']?)/gi, '').replace(/(["']?)\)$/gi, '')
            }
        }
        return false
    }

    static checkChildrens (el, maxLevel) {
        let found = false
        if (maxLevel <= 0) {
            return false
        }
        if (el != null && el.childElementCount > 0) {
            const src = Array.from(el.children).map((e) => {
                const src = ImageDetector.hasSrc(e, true) // TODO check
                if (!found && src) {
                    found = true
                    console.log("child - found and src " + src)
                    return src
                } else if (!found && e.nodeName === 'DIV') {
                    console.log("child - div")
                    return ImageDetector.checkChildrens(e, maxLevel - 1)
                } else {
                    console.log("child - not found")
                    return false
                }
            })
            console.log('child array')
            console.log(src)
            return src.filter(x => !!x).shift()
        }
        return false
    }

    static getImage (url) {
        // console.log('--- url ---')
        // console.log(url)
        // console.log('---     ---')
        return new Promise((resolve, reject) => {
            // console.log(url)
            const base64 = /^data:image\/(\S+);base64,/g
            if (!url) {
                reject(new Error('Invalid image.'))
            }
            if (base64.test(url)) {
                resolve(url.replace(base64, ''))
            } else {
                let found = false
                const sites = [
                    /https?:\/\/pbs\.twimg\.com/g,
                    /https:\/\/instagram\..*\.fbcdn\.net/g,
                    /https:\/\/s3\.amazonaws\.com/g,
                    /https:\/\/s\.yimg\.com/g
                ]
                sites.forEach(x => {
                    if (!found && x.test(url)) {
                        resolve(url)
                        found = true
                    }
                })
                const blacklist = [
                    /https?:\/\/media\.zenfs\.com/g
                ]
                blacklist.forEach(x => {
                    if (!found && x.test(url)) {
                        reject(new Error('Invalid image.'))
                        found = true
                    }
                })
                if (found) {
                    return
                }
                ImageDetector
                    .resizeImage(url, 800, 800)
                    .then(file => {
                        const data = file.split(',')
                        const base64String = data.pop()
                        resolve(base64String)
                    }).catch(err => {
                        // console.log(err)
                        resolve(url)
                    })
            }
        })
    }

    static toDataURL (url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                const reader = new FileReader()
                reader.onloadend = function () {
                    resolve(reader.result)
                }
                reader.readAsDataURL(xhr.response)
            }
            xhr.onerror = reject
            xhr.open('GET', url)
            xhr.responseType = 'blob'
            xhr.send()
        })
    }

    static resizeImage (url, maxW, maxH) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const img = new Image()
            img.crossOrigin = '*'
            img.onload = () => {
                const iw = img.width
                const ih = img.height
                if (iw > maxW || ih > maxH) {
                    const scale = Math.min((maxW / iw), (maxH / ih))
                    const iwScaled = iw * scale
                    const ihScaled = ih * scale
                    canvas.width = iwScaled
                    canvas.height = ihScaled
                    ctx.drawImage(img, 0, 0, iwScaled, ihScaled)
                } else {
                    canvas.width = iw
                    canvas.height = ih
                    ctx.drawImage(img, 0, 0, iw, ih)
                }
                const b64 = canvas.toDataURL('image/jpeg', 0.5)
                resolve(b64)
            }
            img.onerror = reject
            img.src = url
        })
    }
}

// Source: shared/js/libs/History.js
class History {
    constructor () {
        this.history = []
        this.pointer = -1
        this.listeners = []
    }

    push (data) {
        this.setPointer(1)
        this.history.length = this.pointer // Delete remaining of the array
        this.history.push(data)
        this.triggerListener()
    }

    hasPrev () {
        return this.pointer - 1 > -1
    }

    hasNext () {
        return this.pointer + 1 < this.history.length
    }

    next () {
        if (this.hasNext()) {
            this.setPointer(1)
            this.triggerListener()
            return this.current()
        }
        return null
    }

    prev () {
        if (this.hasPrev()) {
            this.setPointer(-1)
            this.triggerListener()
            return this.current()
        }
    }

    current () {
        if (this.pointer > -1 && this.pointer < this.history.length) {
            return this.history[this.pointer]
        }
        return null
    }

    size () {
        return this.history.length
    }

    setPointer (add) {
        this.pointer += add
    }

    triggerListener () {
        this.listeners.forEach(listener => {
            listener({next: this.hasNext(), prev: this.hasPrev()})
        })
    }

    addListener (callback) {
        this.listeners.push(callback)
    }
}

// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = History
}

// Source: shared/js/libs/Message.js
/**
 * Created by pavel on 14.7.17.
 */

class Message {
    constructor (errorCallback) {
        this.errorCallback = errorCallback || function () {
        }
        this.checkInterval = null
        const self = this
        setTimeout(() => {
            self.connect()
        }, 400)
    }

    getPort () {
        chrome = typeof browser === 'undefined' ? chrome : browser
        return typeof chrome.runtime === 'undefined' ? chrome.extension : chrome.runtime
    }

    connect () {
        if (this.port) {
            return
        }
        const messageCallbacks = this.messageCallbacks = []
        this.port = this.getPort().connect({name: 'riteforge-connect'})
        this.port.onDisconnect.addListener(() => {
            console.log('port disconnected')
        })
        this.port.onMessage.addListener((msg) => {
            messageCallbacks.forEach((callback) => {
                if (callback.id === msg.id) {
                    callback.fn(msg)
                    callback.remove = true
                }
            })
        })
        const self = this
        this.checkInterval = setInterval(function () {
            self.sendMessage({action: 'test'}, () => {
            })
        }, 5000)
    }

    setErrorCalback (callback) {
        this.errorCallback = callback
    }

    sendMessage (message, callback) {
        if (!this.port) {
            this.connect()
        }
        if (callback) {
            const id = Math.random()
            message.id = id
            this.messageCallbacks.push({
                fn: callback,
                id: id,
                remove: false
            })
        }
        try {
            this.port.postMessage(message)
        } catch (error) {
            if (this.checkInterval) {
                clearInterval(this.checkInterval)
            }
            this.errorCallback(error, this)
        }
    }

    disconnect () {
        try {
            this.port.disconnect()
        } catch (ignore) {
            console.log(ignore)
        }
        this.port = null
    }

    reconnect () {
        this.disconnect()
        this.connect()
    }
}

// Source: shared/js/messages.js
/**
 * Created by pavel on 20.5.16.
 */
const icons = {
    loading: chrome.extension.getURL('images/loading.svg'),
    clear: chrome.extension.getURL('images/clear.svg'),
    hashmark: chrome.extension.getURL('images/hashmark.png'),
    hashmarkWhite: chrome.extension.getURL('images/white_hashmark.svg'),
    hashmarkPink: chrome.extension.getURL('images/pink_hashmark.svg'),
    loader: chrome.extension.getURL('images/loader.gif'),
    ritekit: chrome.extension.getURL('images/ritekit.png'),
    lightbulb: chrome.extension.getURL('images/lightbulb.svg'),
    settings: chrome.extension.getURL('images/settings-white.svg'),
    barChartWhite: chrome.extension.getURL('images/icons/bar-chart-white.svg')
}

toDataURL(icons.clear, function (base64) {
    icons.clear = base64
})

const messenger = new Message(() => {
    console.error('Page need to be reloaded.')
})

const messageToBackground = (name, payload) => {
    return new Promise((resolve) => {
        messenger.sendMessage({action: name, payload: payload}, (message) => {
            resolve(message)
        })
    })
}

function toDataURL (url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        const reader = new FileReader()
        reader.onloadend = function () {
            callback(reader.result)
        }
        reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
}

// Source: shared/js/clipboardCopy.js
function copyTextToClipboard (text, element = null) {
    var textArea = document.createElement('textarea')
    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakiness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed'
    textArea.style.top = 0
    textArea.style.left = 0

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em'
    textArea.style.height = '2em'

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0

    // Clean up any borders.
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.id = 'riteTagExtensionWidgetTempCopyArea'

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent'

    textArea.value = text
    if (element) {
        element.append(textArea)
    } else {
        document.body.appendChild(textArea)
    }
    textArea.select()
    var successful = false
    try {
        successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copying text command was ' + msg)
    } catch (err) {
        console.log('Oops, unable to copy')
    }

    if (window.getSelection && window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges()
    }
    if (element) {
        element.removeChild(textArea)
    } else {
        document.body.removeChild(textArea)
    }
    return successful
}

// Source: shared/js/libs/HashtagBar.js
class HashtagBar {

    constructor () {
        this.history = new History()

        this.isSafari = typeof safari !== 'undefined'

        this.mainContainer = null

        this.widget = false

        this.copyBox = false

        this.suggestButtons = []

        this.hashtagsButtons = []

        this.hashtagElements = []

        this.searchInput = false

        this.turnedOff = false

        this.currentHashtags = false

        this.hashtagNumberElements = []

        this.user = false

        this.userElement = false

        this.state = {
            widget: 'hidden',
            upload: 'enabled',
            search: 'enabled'
        }

        this.hashtagsContainer = null

        const self = this
        chrome.runtime.onMessage.addListener(function (request) {
            if (request.message) request = request.message // safari
            if (request.from === 'browserAction') {
                if (self.state.widget === 'hidden') {
                    self.show()
                } else {
                    self.hide()
                }
            }
            if (request.from === 'background') {
                if (request.action === 'state') {
                    if (request.state === 'loading') {
                        self.event('disable', 'suggest')
                        self.event('loading', 'suggest')
                    }
                } else if (request.action === 'hashtags') {
                    self.checkSuggestion(request)
                } else if (request.action === 'keypress') {
                    if (self.turnedOff || (self.isOpen() && self.history.current() && self.history.current().suggestions.length > 0)) {
                        return
                    }

                    self.event('suggest', {type: 'text', object: request.hashtag, domain: self.getDomain()})
                }
            }
        })

        this.message('set-badge', '')
    }

    static getElementText (el) {
        switch (el.tagName.toLowerCase()) {
        case 'div':
            return el.textContent
        default:
            return el.value
        }
    }

    static convertGradeToText (grade) {
        switch (grade) {
        case 1:
            return 'overused'
        case 2:
            return 'good'
        case 3:
            return 'great'
        case 4:
            return 'instagram'
        case 5:
            return 'instagram-banned'
        default:
            return 'unused'
        }
    }

    static getTooltipMessage (grade) {
        switch (grade) {
        case 5:
            return 'These hashtags are banned on Instagram. Do not use them.'
        case 4:
            return 'Good only for Instagram'
        case 3:
            return 'Use this hashtag to get seen immediately.'
        case 2:
            return 'Use this hashtag to get seen over time.'
        case 1:
            return 'Do not use this hashtag, too many people are using it now.'
        default:
            return 'Do not use this hashtag, very few people are following it.'
        }
    }

    message (action, payload) {
        return new Promise((resolve) => {
            messenger.sendMessage({action: action, payload: payload}, (message) => {
                resolve(message)
            })
        })
    }

    isOpen () {
        return this.state.widget === 'shown'
    }

    getWidget () {
        const widget = this.widget ? this.widget : null
        return new Promise((resolve) => {
            if (widget) {
                resolve(widget)
            } else {
                const widget = this.buildHtml()
                this.setContentOfHashtagsContainer('Right-click any image or selected text and choose Generate Hashtags.')
                document.body.appendChild(widget.getElement())

                setTimeout(() => {
                    resolve(widget)
                }, 100)
            }
        })
    }

    show () {
        this.event('user-info')
        this.getWidget().then(widget => {
            this.state.widget = 'shown' // TODO
            if (window.location.hostname === 'www.instagram.com' && /^\/p\/.*/g.test(window.location.pathname)) {
                this.copyProvider = 'background'
                let found = false
                document.querySelectorAll('body > div[role=dialog]').forEach(div => {
                    if (div.id === '') {
                        if (found) {
                            return
                        }
                        div.appendChild(widget.getElement())
                        found = true
                    }
                })
            } else {
                if (document.body.querySelector('.modal.in')) {
                    this.checkBootstrapModals(widget)
                }
                this.copyProvider = 'page'
                document.body.appendChild(widget.getElement())
            }
            widget.addClass('shown')
        })
    }

    hide () {
        this.getWidget().then(widget => {
            this.state.widget = 'hidden' // TODO
            widget.removeClass('shown')
        })
    }

    checkSuggestion (payload) {
        this.event('enable', 'suggest')
        if (payload.error) {
            const originalRequest = {
                type: payload.type,
                object: payload.hashtag
            }
            if (payload.error.type === 'message') {
                this.setContentOfHashtagsContainer(payload.error.message)
            } else if (payload.error.type === 'code') {
                if (payload.error.code === 'login-required') {
                    this.setContentOfHashtagsContainer(this.getLoginBar(originalRequest, false))
                } else if (payload.error.code === 'upgrade-required') {
                    this.setContentOfHashtagsContainer(this.getUpgradeBar(originalRequest))
                } else {
                    this.setContentOfHashtagsContainer('Something went wrong')
                }
            }

            return false
        }
        this.history.push(payload)
        this.event('list-history', 'current')
        return true
    }

    event (action, subject) {
        switch (action) {
        case 'suggest':
            if (!subject.object) {
                return
            }
            this.event('loading', 'suggest')
            this.event('disable', 'suggest')
            this.message('suggest', subject)
                .then((message) => {
                    this.checkSuggestion(message.payload)
                })
            break
        case 'set-reload':
            this.setContentOfHashtagsContainer(this.getLoginBar(subject, true))
            break
        case 'list-history':
            this.event('enable', 'suggest')
            if (subject === 'prev') {
                this.showHashtags(this.history.prev())
            } else if (subject === 'next') {
                this.showHashtags(this.history.next())
            } else if (subject === 'current') {
                this.showHashtags(this.history.current())
            }
            break
        case 'loading':
            if (subject === 'suggest') {
                this.show()
                this.setContentOfHashtagsContainer('Loading ...')
                this.copyBox.empty()
            }
            break
        case 'enable':
            if (subject === 'suggest') {
                this.suggestButtons.forEach(button => {
                    if (button.getTagName() === 'INPUT') {
                        button.disable(false)
                    } else {
                        button.removeClass('disabled-btn')
                    }
                })
            }
            break
        case 'disable':
            if (subject === 'suggest') {
                this.suggestButtons.forEach(button => {
                    if (button.getTagName() === 'INPUT') {
                        button.disable(true)
                    } else {
                        button.addClass('disabled-btn')
                    }
                })
            }
            break
        case 'tab':
            if (subject === 'focus') {
                this.message('set-focus', 'me')
            }
            break
        case 'user-info':
            this.message('user-info', {})
                .then(
                    payload => {
                        // console.log(payload.user)
                        this.user = payload.user
                        this.updateUser(this.user)
                    },
                    err => {
                        // console.log(err)
                        this.user = false
                        this.updateUser(this.user)
                    }
                )
            break
        }
    }

    showHashtags (data) {
        this.resetButtons()
        this.searchInput.value(data.type && data.type === 'text' ? data.hashtag : '')
        // console.log('here')
        // console.log(data)
        if (data.suggestions.length > 0) {
            const hashtags = this.buildHashtagHtml(data.suggestions)
            this.message('set-badge', '' + data.suggestions.length)
            this.currentHashtags = data.suggestions
            this.setContentOfHashtagsContainer(hashtags)
        } else {
            // Right click <strong>highlighted text</strong> or right click a <strong>photo</strong> to get hashtag suggestions.
            if (data.result) {
                this.setContentOfHashtagsContainer('No hashtag suggestions found.')
            } else {
                const message = new MyElement('span').addClass('rt-white-text')
                    .append(
                        new MyElement('span').text('Right click ')
                    )
                    .append(
                        new MyElement('strong').text('highlighted text')
                    )
                    .append(
                        new MyElement('span').text(' or right click a ')
                    )
                    .append(
                        new MyElement('strong').text('photo')
                    )
                    .append(
                        new MyElement('span').text(' to get hashtag suggestions.')
                    )
                this.setContentOfHashtagsContainer(message)
            }
        }
        this.hashtagsButtons.forEach((button) => {
            button.setClass('disabled', data.suggestions.length === 0)
        })
        this.setHashtagNumber()
        this.filterButtons()
    }

    removeHashtag (hashtag) {
        const index = this.currentHashtags.map(x => x.hashtag).indexOf(hashtag)
        if (index > -1) {
            this.currentHashtags.splice(index, 1)
            this.setContentOfHashtagsContainer(this.buildHashtagHtml(this.currentHashtags))
            messageToBackground('show-notification', {message: 'Hashtag Removed!'})
        }
    }

    setContentOfHashtagsContainer (content) {
        this.hashtagsContainer.text('')

        if (typeof content === 'string') {
            content = this.getTextBar(content)
        }

        if (Array.isArray(content)) {
            content.forEach((element) => {
                this.hashtagsContainer.append(element)
            })
        } else {
            this.hashtagsContainer.append(content)
        }

    }

    getTextBar (text) {
        return new MyElement('div')
            .addClass('upgradeMessage')
            .append(
                new MyElement('span')
                    .text(text)
            )
    }

    getLoginBar (suggestObject, reload = false) {
        const self = this
        return new MyElement('div')
            .addClass('upgradeMessage')
            .append(
                new MyElement('span')
                    .text(reload ? '' : 'Log in to generate hashtags for images and texts ')
                    .append(
                        new MyElement('a')
                            .text(reload ? 'Reload' : 'Login')
                            .onClick(() => {
                                if (reload) {
                                    self.event('suggest', suggestObject)
                                } else {
                                    ritekitModal.openModalUrl('https://ritetag.com/extension/login?source=extension&next=release-token&fromRiteTagExtension=1', () => {
                                        setTimeout(() => {

                                            self.event('set-reload', suggestObject)
                                        }, 800)
                                        // self.event('tab', 'focus')
                                    })
                                }
                            })
                    )
            )
    }

    getUpgradeBar () {
        return new MyElement('div')
            .addClass('upgradeMessage')
            .append(
                new MyElement('span')
                    .text('Your free trial has expired.  ')
                    .append(
                        new MyElement('a')
                            .target('_blank')
                            .text('Upgrade now')
                            .href('https://ritetag.com/pricing/?fromRiteTagExtension=1')
                    )
            )
    }

    buildHashtagHtml (hashtagSuggestions) {
        const hashtags = []
        this.hashtagElements = []
        hashtagSuggestions.forEach(hashtag => {
            let hElement
            const hashtagEl = new MyElement('div')
                .addClass('riteTagExtensionWidgetHashtag')
                .append(
                    new MyElement('div')
                        .addClass('action-btn')
                        .addClass('hashtag-btn')
                        .append(
                            hElement = new MyElement('input')
                                .type('checkbox')
                                .data('hashtag', hashtag.hashtag)
                                .data('grade', hashtag.grade)
                                .onClick((e) => {
                                    e.stopPropagation()
                                    this.setHashtagNumber()
                                })
                        ).onClick(() => {
                            hElement.click()
                        })
                )
                .append(
                    new MyElement('a')
                        .addClass('riteTagExtensionWidgetHashtagLink')
                        .addClass(HashtagBar.convertGradeToText(hashtag.grade))
                        .text(`#${hashtag.hashtag}`)
                        .onClick(() => {
                            hElement.click()
                        })
                )
            this.hashtagElements.push(hElement)
            hashtags.push(hashtagEl)
        })
        return hashtags
    }

    buildHtml () {
        return this.widget = new MyElement('div')
            .id('riteTagExtensionWidget')
            .onClick(e => e.stopPropagation())
            .append(
                new MyElement('div')
                    .id('riteTagExtensionWidgetWrapper')
                    .append(
                        this.mainContainer = new MyElement('div')
                            .id('riteTagExtensionWidgetMainContainer')
                            .append(
                                new MyElement('div')
                                    .addClass('rt-search-bar')
                                    .append(this.getLogo())
                                    .append(this.leftActionButtons())
                                    .append(this.leftActionSearch())
                                    .append(this.leftActionUpload())
                                    .append(this.userActionBar())
                            )
                            .append(
                                this.hashtagsContainer = new MyElement('div')
                                    .addClass('rt-hashtag-container')
                            )
                            .append(
                                this.copyBox = new MyElement('div')
                                    .addClass('rt-copy-box')
                            )
                            .append(
                                new MyElement('div')
                                    .addClass('rt-action-bar')
                                    .append(
                                        new MyElement('div')
                                            .addClass('rt-wrapper')
                                            .append(this.actionToggleInstagram())
                                            .append(this.actionToggleUnused())
                                            .append(this.actionToggleSelect())
                                            .append(this.actionCopy())
                                            .append(this.actionCompare())
                                    )
                            )
                            .append(this.actionCloseModal())
                    )
            )
    }

    updateUser (data) {
        this.userElement.empty()
        if (!data.name) {
            return
        }
        this.userElement.append(
            new MyElement('img')
                .addClass('rt-user-avatar')
                .alt(data.name)
                .src(data.profileImage)
        ).append(
            new MyElement('a')
                .addClass('rt-user-logout')
                .title(data.name)
                .text('Logout')
                .onClick(() => {
                    this.userElement.empty()
                    this.message('logout', {})
                })
        )
    }

    userActionBar () {
        this.userElement = new MyElement('div')
            .addClass('rt-user-bar')
        return this.userElement
    }

    getLogo () {
        const logo = new MyElement('a')
            .addClass('rt-ritetag-logo')
            .target('_blank')
            .href('https://ritekit.com')
        if (this.isSafari) {
            logo.addClass('rt-safari')
        }
        return logo
    }

    leftActionButtons () {
        let prevButton, nextButton
        prevButton = new MyElement('div')
            .addClass('control-btn')
            .addClass('left-arrow-btn')
            .addClass('primary-btn')
            .addClass('disabled-btn')
            .onClick(() => {
                this.event('list-history', 'prev')
            })
        nextButton = new MyElement('div')
            .addClass('control-btn')
            .addClass('right-arrow-btn')
            .addClass('primary-btn')
            .addClass('disabled-btn')
            .onClick(() => {
                this.event('list-history', 'next')
            })
        this.history.addListener((state) => {
            prevButton.setClass('disabled-btn', !state.prev)
            nextButton.setClass('disabled-btn', !state.next)
        })
        return [prevButton, nextButton]
    }

    leftActionSearch () {
        let input, suggestButton
        const element = new MyElement('div')
            .addClass('rt-search-container')
            .append(
                input = new MyElement('input')
                    .addClass('rt-search-input')
                    .type('text')
                    .onKeyPress((e) => {
                        if (e.keyCode === 13) {
                            this.event('suggest', {type: 'text', object: e.target.value})
                        }
                    })
            )
            .append(
                suggestButton = new MyElement('div')
                    .addClass('rt-search-submit')
                    .addClass('control-btn')
                    .addClass('primary-btn')
                    .onClick(() => {
                        this.event('suggest', {type: 'text', object: input.value()})
                    })
            )
        this.searchInput = input
        this.suggestButtons.push(input, suggestButton)
        return element
    }

    leftActionUpload () {
        const self = this
        let suggestButton
        const element = new MyElement('div')
            .addClass('rt-search-upload-input')
            .addClass('control-btn')
            .addClass('primary-btn')
            .append(
                new MyElement('label')
                    .for('riteTagExtensionWidgetUploadFile')
            ).append(
                suggestButton = new MyElement('input')
                    .id('riteTagExtensionWidgetUploadFile')
                    .type('file')
                    .onChange((e) => {
                        try {
                            const fileInput = e.target
                            const file = e.target.files[0]
                            const reader = new FileReader()
                            reader.readAsDataURL(file)
                            reader.onload = function () {
                                self.event('suggest', {type: 'image', object: reader.result, domain: self.getDomain()})
                                fileInput.value = ''
                            }
                        } catch (err) {
                            // todo debuger
                        }
                    })
            )
        this.suggestButtons.push(element, suggestButton)
        return element
    }
    actionToggleUnused () {
        const button = new MyElement('div')
            .addClass('action-btn')
            .addClass('trash-btn')
            .addClass('disabled')
            .text(' Unused & banned')
            .reset(el => {
                el.removeClass('repeat-btn').addClass('trash-btn')
            })
            .filter((el, hashtags) => {
                const contains = hashtags.filter(m => ['0', '5'].indexOf(m.getData('grade')) > -1).length > 0
                if (contains) {
                    el.removeClass('disabled')
                } else {
                    el.addClass('disabled')
                }
            })
            .onClick(() => {
                this.actionButton('unused', button)
            })
        this.hashtagsButtons.push(button)
        return button
    }

    actionToggleInstagram () {
        const button = new MyElement('div')
            .addClass('action-btn')
            .addClass('trash-btn')
            .addClass('disabled')
            .reset(el => {
                el.removeClass('repeat-btn').addClass('trash-btn')
            })
            .filter((el, hashtags) => {
                const contains = hashtags.filter(m => ['4'].indexOf(m.getData('grade')) > -1).length > 0
                if (contains) {
                    el.removeClass('disabled')
                } else {
                    el.addClass('disabled')
                }
            })
            .text(' Instagram')
            .onClick(() => {
                this.actionButton('instagram', button)
            })
        this.hashtagsButtons.push(button)
        return button
    }

    actionToggleSelect () {
        const hashtagNumber = new MyElement('span').text('(0)')
        this.hashtagNumberElements.push(hashtagNumber)
        const button = new MyElement('div')
            .addClass('action-btn')
            .addClass('select-btn')
            .addClass('disabled')
            .reset(el => {
                el.removeClass('unselect-btn').addClass('select-btn').text(' Select all')
            })
            .text(' Select all')
            .onClick(() => {
                this.actionButton('select', button)
            })
        this.hashtagsButtons.push(button)
        return button
    }

    actionCopy () {
        const hashtagNumber = new MyElement('span').text('(0)')
        this.hashtagNumberElements.push(hashtagNumber)
        const button = new MyElement('div')
            .addClass('copy-btn')
            .addClass('action-btn')
            .addClass('primary-btn')
            .addClass('disabled')
            .text(' Copy ')
            .append(hashtagNumber)
            .onClick(() => {
                this.actionButton('copy', button)
            })
        this.hashtagsButtons.push(button)
        return button
    }

    actionCompare () {
        const hashtagNumber = new MyElement('span').text('(0)')
        this.hashtagNumberElements.push(hashtagNumber)
        const button = new MyElement('div')
            .addClass('action-btn')
            .addClass('compare-btn')
            .addClass('disabled')
            .text(' Compare ')
            .append(hashtagNumber)
            .onClick(() => {
                this.actionButton('compare', button)
            })
        this.hashtagsButtons.push(button)
        return button
    }

    actionCloseModal () {
        const self = this
        return new MyElement('div')
            .addClass('control-btn')
            .addClass('close-btn')
            .addClass('modal-close-btn')
            .onClick(() => {
                self.hide()
            })
    }

    getDomain () {
        return window.location.host
    }

    actionButton (action, button) {
        if (button.hasClass('disabled')) {
            return
        }
        let hide
        const allHashtags = this.hashtagElements.map(x => x.getData('hashtag'))
        const hashtags = this.hashtagElements.filter(x => x.getElement().checked).map(x => x.getData('hashtag'))
        switch (action) {
        case 'compare':
            const hashtagPath = hashtags.join('%7C')
            const win = window.open(`https://ritetag.com/hashtag-comparison/${hashtagPath}`, '_blank')
            win.focus()
            break
        case 'select':
            let checked
            if (button.hasClass('select-btn')) {
                checked = true
                button.removeClass('select-btn').addClass('unselect-btn').text(' Unselect all')
            } else {
                button.removeClass('unselect-btn').addClass('select-btn').text(' Select all')
                checked = false
            }
            this.hashtagElements.map(x => x.getElement()).forEach(x => {
                x.checked = checked
            })
            this.setHashtagNumber()
            break
        case 'copy':
            const hts = hashtags.map((h) => `#${h}`).join(' ')
            if (this.copyProvider === 'background') {
                messenger.sendMessage({action: 'copy-to-clipboard', payload: {text: hts}}, (message) => {
                    messageToBackground('show-notification', {message: 'Hashtags Copied!'})
                })
            } else {
                this.getWidget().then(widget => {
                    copyTextToClipboard(hts, widget.getElement())
                    messageToBackground('show-notification', {message: 'Hashtags Copied!'})
                })
            }
            let input = false
            this.copyBox.empty().append(
                input = new MyElement('input')
                    .type('text')
                    .value(hts)
                    .onClick(() => {
                        input.getElement().select()
                    })
            )
            setTimeout(() => {
                input.getElement().select()
                // messageToBackground('show-notification', {message: 'Hashtags Copied!'})
            }, 200)
            this.message('log', {
                type: 'hashtag-suggestion',
                allHashtags: allHashtags.join(', '),
                selectedHashtags: hashtags.join(', ')
            })
            break
        case 'unused':
            if (button.hasClass('trash-btn')) {
                hide = true
                button.removeClass('trash-btn').addClass('repeat-btn')
            } else {
                button.removeClass('repeat-btn').addClass('trash-btn')
                hide = false
            }
            this.hashtagElements.filter(x => ['0', '5'].indexOf(x.getData('grade')) > -1).forEach(x => {
                const el = x.getElement().parentElement.parentElement
                x.getElement().checked = false
                if (hide) {
                    el.classList.add('hide-hashtag')
                    this.setHashtagNumber()
                } else {
                    el.classList.remove('hide-hashtag')
                }
            })
            break
        case 'instagram':
            if (button.hasClass('trash-btn')) {
                hide = true
                button.removeClass('trash-btn').addClass('repeat-btn')
            } else {
                button.removeClass('repeat-btn').addClass('trash-btn')
                hide = false
            }
            this.hashtagElements.filter(x => ['4'].indexOf(x.getData('grade')) > -1).forEach(x => {
                const el = x.getElement().parentElement.parentElement
                x.getElement().checked = false
                if (hide) {
                    el.classList.add('hide-hashtag')
                    this.setHashtagNumber()
                } else {
                    el.classList.remove('hide-hashtag')
                }
            })
            break
        }
    }

    setHashtagNumber () {
        this.hashtagNumberElements.forEach(x => {
            const number = this.hashtagElements.filter(x => x.getElement().checked === true).length
            x.text(`(${number})`)
            if (!x.getElement().parentElement) {
                return
            }
            if (number === 0) {
                x.getElement().parentElement.classList.add('disabled')
            } else {
                x.getElement().parentElement.classList.remove('disabled')
            }
        })
    }

    resetButtons () {
        this.hashtagsButtons.forEach(x => x.reset())
    }

    filterButtons () {
        this.hashtagsButtons.forEach(x => x.filter(this.hashtagElements))
    }

    suggestText (text) {
        this.event('suggest', {type: 'text', object: text})
    }

    suggestObject (type, object) {
        this.event('suggest', {type: type, object: object})
    }

    checkBootstrapModals (widget) {
        if (!this.checkBootrapModalsInterval) {
            let lastState = null
            this.checkBootrapModalsInterval = setInterval(() => {
                const openedBootstrapModal = document.body.querySelector('.modal.in')
                if (openedBootstrapModal != null) {
                    if (lastState !== 'modal') {
                        openedBootstrapModal.appendChild(widget.getElement())
                        lastState = 'modal'
                    }
                } else {
                    if (lastState !== 'body') {
                        document.body.appendChild(widget.getElement())
                        lastState = 'body'
                    }
                }
            }, 333)
        }
    }
}

// Source: shared/js/libs/HelpMessages.js
class HelpMessages {
    static show () {
        [
            {
                domain: 'buffer.com',
                name: 'Buffer',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-buffer-2zl8z/'
            },
            {
                domain: 'later.com',
                name: 'Later',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-later-17qn1b1/'
            },
            {
                domain: 'hootsuite.com',
                name: 'Hootsuite',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-hootsuite-11mb2j3/'
            },
            {
                domain: 'onlypult.com',
                name: 'Onlypult',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-onlypult-h5l817/'
            },
            {
                domain: 'tailwindapp.com',
                name: 'Tailwindapp',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-tailwind-1rof5bo/'
            },
            {
                domain: 'twitter.com',
                name: 'Twitter',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-text-and-images-in-twitter-nk2l5z/'
            },
            {
                domain: 'business.facebook.com',
                name: 'Facebook',
                link: 'https://help.ritekit.com/en/article/how-to-generate-hashtags-with-ritetag-in-facebook-creator-studio-1pj0bc9/'
            },
            {
                domain: 'facebook.com',
                name: 'Facebook',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-generation-for-text-and-images-in-facebook-toguxz/'
            },
            {
                domain: 'linkedin.com',
                name: 'LinkedIn',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-text-and-images-in-linkedin-140rqio/'
            },
            {
                domain: 'pinterest.com',
                name: 'Pinterest',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-text-and-images-in-pinterest-u0dxt5/'
            },
            {
                domain: 'tweetdeck.com',
                name: 'TweetDeck',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-text-and-images-in-tweetdeck-1t9c252/'
            },
            {
                domain: 'socialdraft.com',
                name: 'Socialdraft',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-socialdraft-e74ptb/'
            },
            {
                domain: 'grum.co',
                name: 'Grum',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-grum-937d0q/'
            },
            {
                domain: 'schedugr.am',
                name: 'Schedugram',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-sked-tmal7h/'
            },
            {
                domain: 'loomly.com',
                name: 'Loomly',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-loomly-tfx6ae/'
            },
            {
                domain: 'zoho.com',
                name: 'Zoho',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-zoho-gn6egd/'
            },
            {
                domain: 'socialpilot.com',
                name: 'Socialpilot',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-socialpilot-1ny2ndu/'
            },
            {
                domain: 'kuku.io',
                name: 'Kuku',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-kuku-1qc7i2p/'
            },
            {
                domain: 'drumup.io',
                name: 'Drumup',
                link: 'http://help.ritekit.com/ritetag/how-to-get-hashtag-suggestions-for-instagram-in-drumup'
            },
            {
                domain: 'coschedule.com',
                name: 'Coschedule',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-drumup-px9w8k/'
            },
            {
                domain: 'app.coschedule.com',
                name: 'Coschedule',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-coschedule-icakd7/'
            },
            {
                domain: 'www.viraltag.com',
                name: 'Viraltag',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-viraltag-1s9nroz/'
            },
            {
                domain: 'http://app.viraltag.com',
                name: 'Viraltag',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-viraltag-1s9nroz/'
            },
            {
                domain: 'app.sproutsocial.com',
                name: 'Sproutsocial',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-sproutsocial-g6l47c/'
            },
            {
                domain: 'app.sendible.com',
                name: 'Sendible',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-text-and-images-in-sendible-1o3tyyy/'
            },
            {
                domain: 'skedsocial.com',
                name: 'Skedsocial',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-sked-tmal7h/'
            },
            {
                domain: 'eclincher.com',
                name: 'Eclincher',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-eclincher-fetzzd/'
            },
            {
                domain: 'youtube.com',
                name: 'Youtube',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtags-for-a-video-with-the-ritetag-pro-browser-extension-8pwuy'
            },
            {
                domain: 'dailymotion.com',
                name: 'DailyMotion',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtags-for-a-video-with-the-ritetag-pro-browser-extension-8pwuy'
            },
            {
                domain: 'vimeo.com',
                name: 'Vimeo',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtags-for-a-video-with-the-ritetag-pro-browser-extension-8pwuy'
            },
            {
                domain: 'crowdfireapp.com',
                name: 'crowdfireapp',
                link: 'https://help.ritekit.com/en/article/how-to-get-hashtag-suggestions-for-instagram-in-crowdfire-1tkz0bd/'
            },
        ].forEach((item) => {
            const host = window.location.host
            if (host.indexOf(item.domain) > -1) {
                messageToBackground('help-message-can-show', {name: item.name})
                    .then(response => {
                        if (response.result) {
                            HelpMessages.showHelpMessage(item.link, item.name)
                        }
                    })
            }
        })
    }

    static showHelpMessage (link, name) {
        const helpMessage = HtmlBuilder.createElement('span', {}, [
            HtmlBuilder.createElement('img', {
                src: icons.lightbulb,
                style: {
                    width: '16px',
                    height: '16px',
                    'vertical-align': 'text-bottom'
                },
                onclick: () => {}
            }),
            HtmlBuilder.createElement('span', {
                textContent: ' Tip: Generate hashtags for images and text in ' + name + '. '
            }),
            HtmlBuilder.createElement('span', {
                textContent: 'Learn more',
                style: {
                    'font-weight': 'bold',
                    color: '#74C9FF',
                    cursor: 'pointer',
                    'padding-right': '15px',
                },
                onclick: () => {
                    window.open(link, '_blank')
                    messageToBackground('help-message-block-show', {name: name})
                        .then(() => {})
                }
            }),
            HtmlBuilder.createElement('img', {
                src: icons.clear,
                style: {
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    'vertical-align': 'text-bottom'
                },
                onclick: () => {
                    messageToBackground('help-message-block-show', {name: name})
                        .then(() => {})
                }
            })
        ])
        messageToBackground('show-notification', {message: helpMessage})
            .then(() => {})
    }
}

// Source: shared/js/modal.js
/**
 * Created by pavel on 27.6.16.
 */
class RitekitModal {
    constructor () {
        window.addEventListener('message', function (e) {
            if (e.data === 'closeRitetagModal') {
                // window.focus();
                let els = document.querySelectorAll('#rtagWindow')
                for (let i = 0; i < els.length; i++) {
                    let el = els[i]
                    try {
                        el.parentNode.removeChild(el)
                    } catch (ignore) {
                    }
                }
            } else if (e.data.command === 'save-token-2') { // todo simplify
                messenger.sendMessage({action: 'save-token', payload: e.data.data.result}, (message) => {
                    console.log(message)
                    window.close()
                })
            }
        })
    }

    openModalUrl (src, onclose) {
        const win = window.open(src, '_blank')
        win.focus()
        let errors = 0
        if (onclose) {
            let modalCloseInterval = setInterval(() => {
                try {
                    // console.log(win)
                    // console.log("is closed: " + win.closed)
                    if (win.closed) {
                        clearInterval(modalCloseInterval)
                        onclose()
                    }
                } catch (e) {
                    // console.log("error")
                    // console.log(e)
                    errors++
                    if (errors > 4) {
                        clearInterval(modalCloseInterval)
                        onclose()
                    }
                }
            }, 150)
        }
    }
}

// Source: shared/js/buttons/button.js
class Button {

    constructor (suggest, createButton, settings) {
        this.suggest = suggest
        this.createButton = createButton
        this.settings = settings
    }

    handle (key) {
        const suggest = this.suggest
        // console.log(suggest)
        const buttonGenerator = (getTextPromise) => {
            return this.createButton(() => {
                getTextPromise().then(text => {
                    if (suggest.suggestObject) {
                        suggest.suggestObject('text', text)
                    } else {
                        suggest.suggestText(text)
                    }
                })
            })
        }
        this.settings.forEach(settings => {
            setInterval(() => {
                if (!settings.button) {
                    settings.button = buttonGenerator(settings.getText)
                }
                const i = settings.button.getElement()
                if (settings.isButtonEnabled()) {
                    if (i.tagName === 'BUTTON') {
                        i.removeAttribute('disabled')
                    }
                    i.childNodes.forEach((i) => {
                        if (i.tagName === 'BUTTON') {
                            i.removeAttribute('disabled')
                        }
                    })
                } else {
                    if (i.tagName === 'BUTTON') {
                        i.setAttribute('disabled', 'disabled')
                    }
                    i.childNodes.forEach((i) => {
                        if (i.tagName === 'BUTTON') {
                            i.setAttribute('disabled', 'disabled')
                        }
                    })
                }
                settings.insertButton(settings.button.getElement(), key + settings.name)
            }, settings.timeout)
        })
    }

    append (elements, button, key) {
        elements.forEach((element) => {
            if (element.className.indexOf(key) > -1) {
                return
            }
            element.classList.add(key)
            element.appendChild(button)
        })
    }

    insertBefore (elements, button, key) {
        elements.forEach(element => {
            if (element.className.indexOf(key) > -1) {
                return
            }
            element.classList.add(key)
            element.parentElement.insertBefore(button, element)
        })
    }
}

// Source: shared/js/buttons/twitter.js
class TwitterButton extends Button {
    constructor (key, suggest, createButton) {
        const settings = [
            {
                name: 'twitter-reply',
                timeout: 333,
                isButtonEnabled: () => {
                    const buttons = document.querySelectorAll('[data-testid=tweetButton]')
                    return (buttons.length > 0 && !buttons[0].attributes.disabled)
                },
                getText: async () => {
                    // console.log('get text twitter-reply')
                    const composer = document.querySelectorAll('.public-DraftEditor-content')
                    const text = composer.length > 0 ? composer[0].innerText : ''
                    // console.log('text: ' + text)
                    return text
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('[data-testid=tweetButton]')
                    button.classList.add('rt-twitter-nd-btn')
                    this.insertBefore(elements, button, key)
                },
                button: null
            },
            {
                name: 'twitter-new-design',
                timeout: 333,
                isButtonEnabled: () => {
                    const buttons = document.querySelectorAll('[data-testid=tweetButtonInline]')
                    return (buttons.length > 0 && !buttons[0].attributes.disabled)
                },
                getText: async () => {
                    // console.log('get text twitter-new-design')
                    const composer = document.querySelectorAll('.public-DraftEditor-content')
                    const text = composer.length > 0 ? composer[0].innerText : ''
                    // console.log('text: ' + text)
                    return text
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('[data-testid=tweetButtonInline]')
                    button.classList.add('rt-twitter-nd-btn')
                    this.insertBefore(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}

// Source: shared/js/buttons/buffer.js
class BufferButton extends Button {
    constructor (key, suggest, createButton) {
        const shareSelector = '.UpdateSaver__button___3tgPO'
        const shareSelectorPublisher = '.UpdateSaver__button___3OFit:first-child'
        const settings = [
            {
                name: 'buffer-composer',
                timeout: 333,
                isButtonEnabled: () => {
                    return (document.querySelectorAll(shareSelector).length > 0 && !document.querySelectorAll(shareSelector)[0].attributes.disabled)
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.public-DraftEditor-content')
                    return composer.length > 0 ? composer[composer.length - 1].innerText : ''
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.UpdateSaver__section___wWya9')
                    button.classList.add('rt-buffer-btn')
                    this.append(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}

// Source: shared/js/buttons/tweetdeck.js
class TweetdeckButton extends Button {
    constructor (key, suggest, createButton) {
        const settings = [
            {
                name: 'tweetdeck-docked',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.js-docked-compose textarea.js-compose-text')
                    return composer.length > 0 ? composer[0].value : ''
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.js-docked-compose .js-send-button-container.spinner-button-container')
                    button.classList.add('rt-tweetdeck-btn')                   
                    this.append(elements, button, key)
                },
                button: null
            },
            {
                name: 'tweetdeck-activity',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.js-app-columns textarea.js-compose-text')
                    return composer.length > 0 ? composer[0].value : ''
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.js-app-columns .js-send-button-container.spinner-button-container')
                    button.classList.add('rt-tweetdeck-small-btn')                                       
                    this.append(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}
// Source: shared/js/buttons/facebook.js
class FacebookButton extends Button {
    constructor (key, suggest, createButton) {
        const settings = [
            {
                name: 'facebook-timeline',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('div[data-testid=status-attachment-mentions-input]')
                    return composer.length > 0 ? (composer[0].innerText || '') : ''
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('button[data-testid="react-composer-post-button"]')
                    button.classList.add('rt-facebook-btn')                    
                    this.insertBefore(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}
// Source: shared/js/buttons/hootsuite.js
class HootsuiteButton extends Button {
    constructor (key, suggest, createButton) {
        const settings = [
            {
                name: 'hootsuite-composer',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.messageBoxMessage')
                    const text = composer.length > 0 ? composer[composer.length - 1].innerText : ''
                    return text
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.saveMessageButtons')
                    button.classList.add('rt-hootsuite-small-btn')
                    this.append(elements, button, key)
                },
                button: null
            },
            {
                name: 'hootsuite-new-composer',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.notranslate.public-DraftEditor-content')
                    const text = composer.length > 0 ? composer[composer.length - 1].textContent : ''
                    return text
                },
                insertButton: (button, key) => {
                    // console.log('>> START')
                    let elements = document.querySelectorAll('.vk-TextToolsBar')
                    // console.log(elements)
                    if (elements.length > 0) {
                        elements = [elements[0]]
                    }
                    // console.log(elements)
                    // console.log('>> END')
                    button.classList.add('rt-hootsuite-new-composer-btn')
                    this.append(elements, button, key)
                },
                button: null
            },
            {
                name: 'hootsuite-reply',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.rc-TwitterNewStyleReplies .rc-TextArea textarea')
                    const text = composer.length > 0 ? composer[composer.length - 1].value : ''
                    return text
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.rc-TwitterNewStyleReplies .-sendButton')
                    button.classList.add('rt-hootsuite-big-btn')
                    this.insertBefore(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}

// Source: shared/js/buttons/linkedin.js
class LinkedinButton extends Button {
    constructor (key, suggest, createButton) {
        const settings = [
            {
                name: 'linkedin-timeline',
                timeout: 333,
                isButtonEnabled: () => {
                    return true
                },
                getText: async () => {
                    const composer = document.querySelectorAll('.mentions-texteditor__contenteditable')
                    return composer.length > 0 ? composer[0].textContent : ''
                },
                insertButton: (button, key) => {
                    const elements = document.querySelectorAll('.share-box__actions, .sharing-subaction-bar__post-button')
                    button.classList.add('rt-linkedin-btn')                                                           
                    this.insertBefore(elements, button, key)
                },
                button: null
            }
        ]
        super(suggest, createButton, settings)
        this.handle(key)
    }
}
// Source: shared/js/buttons/instagram.js
class InstagramButton extends Button {
    constructor (key, suggest, createButton) {
        super(suggest, createButton, [])
        const self = this
        const name = 'instagram-timeline'
        setInterval(() => {
            const k = key + name
            const elements = document.querySelectorAll('.wmtNn > button')
            for (let element of elements) {
                if (element.className.indexOf(k) > -1) {
                    continue
                }
                element.style.display = 'inline-block'
                const button = self.createButton(() => {
                    const image = element.closest('article').querySelector('img.FFVAD').src
                    self.suggest.suggestObject('image', image)
                })
                button.addClass('rt-instagram-btn')
                button.getElement().querySelector('.ritetag-button img').src = icons.hashmarkPink
                self.insertBefore([element], button.getElement(), k)
                element.classList.add(k)
            }
        }, 333)
    }
}

// Source: shared/js/buttons.js
class RitetagButtons {
    constructor (suggest) {
        
        this.location = window.location.hostname
        this.pathname = window.location.pathname
        this.key = 'ritetag-button-'
        this.suggest = suggest
    }

    init () {
        const suggest = this.suggest
        switch (this.location) {
        case 'twitter.com':
            return new TwitterButton(this.key, suggest, this.createButton)
        case 'buffer.com':
            if (this.pathname === '/add') {
                return new BufferButton(this.key, suggest, this.createButton)
            }
            break
        case 'publish.buffer.com':
            return new BufferButton(this.key, suggest, this.createButton)
        case 'tweetdeck.twitter.com':
            return new TweetdeckButton(this.key, suggest, this.createButton)
        case 'www.facebook.com':
        case 'business.facebook.com':
            return new FacebookButton(this.key, suggest, this.createButton)
        case 'hootsuite.com':
            return new HootsuiteButton(this.key, suggest, this.createButton)
        case 'www.linkedin.com':
            return new LinkedinButton(this.key, suggest, this.createButton)
        case 'www.instagram.com':
            return new InstagramButton(this.key, suggest, this.createButton)
        default:
            return false
        }
    }

    createButton (ritetagCallback) {
        const isSafari = typeof safari !== 'undefined'

        const button = new MyElement('div')
            .addClass('ritetag-button-wrapper')
        
        const btn = new MyElement('button')
            .addClass('ritetag-button')
            .onClick(e => {
                e.preventDefault()
                ritetagCallback()
            })
            .append(
                new MyElement('img')
                    .src(icons.hashmarkWhite)
            )
        if (isSafari) {
            btn.addClass('btn-rt-safari')
        }

        button.append(
            btn
        )
        return button
    }
}

// Source: shared/js/libs/Report.js
class Report {
    constructor (hostname) {
        this.hostname = hostname
        this.show()
    }

    tweetdeck () {
        this.stream('.js-column-holder.column-holder', '.js-submittable-input.js-column-title-edit-box.column-title-edit-box', '.js-column-content.column-content')
    }

    hootsuite () {
        this.stream('._box.stream.x-twitter', '.boxTitle', '.rc-MessageList')
    }

    stream (streamBox, textBox, contentBox) {
        const columns = document.querySelectorAll(streamBox)
        columns.forEach(i => {
            const x = i.querySelectorAll(textBox)
            if (x.length === 0) {
                return
            }
            const text = (x[0].value || x[0].textContent).trim()
            if (this.isHashtag(text)) {
                messageToBackground('report', {
                    action: 'show',
                    hostname: window.location.hostname,
                    hashtag: text.toLowerCase()
                }).then((payload) => {
                    if (payload.show) {
                        const content = i.querySelector(contentBox)
                        if (!content.childNodes[0].classList || !content.childNodes[0].classList.contains('ritekit-report-wrapper')) {
                            const element = this.buildReport(text)
                            content.insertBefore(element.getElement(), content.childNodes[0])
                        } else if (content.childNodes[0].classList || !content.childNodes[0].classList.contains('ritekit-report-wrapper')){
                            const hashtag = content.childNodes[0].dataset['hashtag']
                            if (hashtag.toLowerCase() !== text.toLowerCase()) {
                                content.removeChild(content.childNodes[0])
                                const element = this.buildReport(text)
                                content.insertBefore(element.getElement(), content.childNodes[0])
                            }
                        }
                    } else {
                        const content = i.querySelector(contentBox)
                        if (content.childNodes[0].classList && content.childNodes[0].classList.contains('ritekit-report-wrapper')) {
                            const hashtag = content.childNodes[0].dataset['hashtag']
                            if (hashtag.toLowerCase() !== text.toLowerCase()) {
                                content.removeChild(content.childNodes[0])
                            }
                        }
                    }
                })
            }
        })
    }

    show () {
        let callback = false

        switch (this.hostname) {
        case 'tweetdeck.twitter.com':
            callback = this.tweetdeck
            break
        case 'hootsuite.com':
            callback = this.hootsuite
            break;
        }
        if (!callback) {
            return
        }
        const self = this
        setInterval(() => {
            callback.apply(self)
        }, 1000)

    }

    buildReport (hashtag) {
        const wrapper = new MyElement('div')
            .data('hashtag', hashtag.toLowerCase())
            .addClass('ritekit-report-wrapper')

        wrapper.append(
            new MyElement('img')
                .addClass('ritekit-report-bar-chart')
                .src(icons.barChartWhite)
        )

        wrapper.append(
            new MyElement('div')
                .addClass('ritekit-report-text')
                .text('Get a comprehensive report for 100% of tweets with ' + hashtag.toUpperCase())
                .append(
                    new MyElement('div')
                )
                .append(
                    new MyElement('button')
                        .addClass('ritekit-report-get')
                        .text('Get report')
                        .onClick(() => {
                            messageToBackground('report', {action: 'open', hashtag: hashtag})
                        })
                ).append(
                    new MyElement('button')
                        .addClass('ritekit-report-dismiss')
                        .text('Dismiss')
                        .onClick(() => {
                            messageToBackground('report', {
                                action: 'dismiss',
                                hostname: window.location.hostname,
                                hashtag: hashtag.toLowerCase()
                            })
                            wrapper.remove()
                        })
                )
        )

        return wrapper
    }

    isHashtag (text) {
        return text.length > 0 && text[0] === '#'
    }
}

// Source: shared/js/ritetag-extension.js
const ritekitModal = new RitekitModal()

let hashtagBar;

(function () {
    const isTopFrame = window.top === window

    const sendLastObject = (payload) => {
        messageToBackground('save-last-object', payload)
            .then(() => {})
    }

    document.addEventListener('mousedown', function (event) {
        // right click
        if (event.button === 2) {
            const nothing = {
                type: 'nothing'
            }
            const element = event.target
            const selection = window.getSelection().toString().trim()
            if (selection) {
                sendLastObject({
                    type: 'text',
                    object: selection,
                    domain: window.location.host
                })
            } else if (element) {
                let url = ImageDetector.hasSrc(element, true) ||
                    ImageDetector.checkChildrens(element, 2) ||
                    ImageDetector.checkChildrens(element.parentNode, 3) ||
                    ImageDetector.checkChildrens(element.parentNode.parentNode, 3) ||
                    ImageDetector.checkChildrens(element.parentNode.parentNode.parentNode.parentNode, 3)
                ImageDetector.getImage(url).then((image) => {
                    console.log("dkdkdk")
                    console.log(url)
                    sendLastObject({
                        type: 'image',
                        object: image,
                        domain: window.location.host
                    })
                }).catch(() => {
                    sendLastObject(nothing)
                })
            } else {
                sendLastObject(nothing)
            }
        }
    }, true)

    if (!isTopFrame) {
        class Suggest {
            suggestText (text) {
                messageToBackground('keypress-hashtag', text)
            }
        }
        new RitetagButtons(new Suggest()).init()
        return
    }

    new Report(window.location.hostname)

    HelpMessages.show()

    hashtagBar = new HashtagBar()
    const ritetagButtons = new RitetagButtons(hashtagBar)
    ritetagButtons.init()
})()

// Source: shared/js/ritetag-widget.js
class RitetagWidget {
    static reHashtag () {
        return /hashtag(s)?/i
    }
    static reFilter () {
        return /(best|for)(?!\S)/ig
    }
    constructor () {
        this.defaultStyle = {
            'min-width': '480px',
            'margin-left': '-10%',
            height: '300px',
            border: 'none'
        }
        this.sites = [
            {
                id: '8',
                name: 'google',
                reg: /www\.google\..*/i,
                input: 'input[name=q]',
                prepend: '#rhs',
                repeat: true,
                check: true,
                style: {
                    height: '290px',
                    width: '490px',
                    'margin-left': '-10%',
                    border: 'none'
                }
            },
            {
                id: '9',
                name: 'yahoo',
                reg: /search\.yahoo\.com\/search/i,
                input: '#yschsp',
                prepend: '#right',
                repeat: true,
                image: true,
                style: {
                    width: '100%',
                    border: 'none'
                },
                check: true
            },
            {
                id: '1',
                name: 'twitter',
                reg: /twitter\.com\/search/i,
                input: 'input[name=q]',
                prepend: '.stream-container',
                repeat: true,
                image: true,
                style: {
                    width: '100%'
                },
                check: true
            },
            {
                id: '10',
                name: 'bing',
                reg: /bing\.com\/search/i,
                input: 'input[name=q]',
                prepend: '#b_context',
                repeat: true,
                check: true
            },
            {
                id: '11',
                name: 'reddit',
                reg: /www\.reddit\.com\/search/i,
                input: 'input[name=q]',
                prepend: '.searchfacets',
                repeat: true,
                check: true
            },
            {
                id: '12',
                name: 'quora',
                reg: /www\.quora\.com\/search/i,
                input: 'input[name=search_input]',
                prepend: '.results_list',
                repeat: true,
                check: true
            },
            {
                id: '13',
                name: 'duckduckgo',
                reg: /duckduckgo\.com/i,
                input: '#search_form input[name=q]',
                prepend: '#links',
                repeat: true,
                check: true
            },
            {
                id: '15',
                name: 'instagram',
                reg: /instagram\.com/i,
                input: function () {
                    let m = /www\.instagram\.com\/explore\/tags\/(.*)/i.exec(location)
                    if (m != null) {
                        return m[1]
                    }
                    return null
                },
                prepend: '#react-root > section > main > article > div',
                repeat: true,
                check: true
            },
            {
                id: '14',
                name: 'youtube',
                reg: /www\.youtube\.com\/results/i,
                input: '#masthead-search-term',
                prepend: '#search-secondary-col-contents',
                repeat: true,
                check: true
            },
            {
                id: '2',
                name: 'facebook',
                reg: /www\.facebook\.com\/(.*)/i,
                input: function () {
                    let m = /www\.facebook\.com\/hashtag\/(.*)/i.exec(location)
                    if (m != null) {
                        m = m[1]
                        if (m.indexOf('?') === -1) {
                            return m
                        } else {
                            return m.split('?')[0]
                        }
                    } else if ((m = /www\.facebook\.com\/search\/str\/%23(.*)\//i.exec(location)) !== null) {
                        return m[1]
                    }
                    return null
                },
                prepend: '#contentArea',
                repeat: false,
                check: true,
                style: {
                    height: '290px',
                    width: '496px',
                    border: 'none'
                }
            },
            {
                id: '3',
                name: 'googleplus',
                reg: /plus.google.com\/(.*)explore\/(.*)/i,
                text: 'h3.zj',
                prepend: '.nja .nMa',
                repeat: true,
                check: false,
                style: {
                    height: '450px',
                    width: '340px',
                    border: 'none'
                }
            }
        ]
    }

    init (integrations) {
        for (let i in this.sites) {
            const it = this.sites[i]
            if ((integrations == null || integrations[it.id]) && it.reg.test(location)) {
                if ((!it.check) || (it.input && ((typeof it.input === 'function' && it.input() !== null) || (typeof it.input !== 'function' && RitetagWidget.getElement(it.input) !== null))) || (it.text && RitetagWidget.getElements(it.text).length > 0)) {
                    RitetagWidget.timerLoopInit(this.check, it, 1000, 1000)
                }
            }
        }
    }

    static timerLoopInit (callback, data, delay, initDelay) {
        setTimeout(function () {
            callback(data)
            if (data.repeat) {
                RitetagWidget.timerLoop(callback, data, delay)
            }
        }, initDelay)
    }

    static timerLoop (callback, data, delay) {
        setTimeout(function () {
            callback(data)
            RitetagWidget.timerLoop(callback, data, delay)
        }, delay)
    }

    static getElement (element) {
        return document.querySelector(element)
    }

    static getElements (elements) {
        return document.querySelectorAll(elements)
    }

    check (data) {
        let query = false

        if (typeof data.input === 'function') {
            query = data.input()
        } else {
            if (data.input) {
                query = RitetagWidget.parseQuery(RitetagWidget.getElement(data.input).value)
            } else if (data.text) {
                query = RitetagWidget.parseQuery($(data.text).html())
            }
        }
        if (query) {
            const d = data
            RitetagWidget.appendWidget(query, function (query) {
                const parentt = document.querySelector(data.prepend)
                if (parentt) {
                    const kid = document.createElement('div')
                    if (d.image == null) {
                        kid.appendChild(RitetagWidget.widget(query, d.style, d.name))
                    } else {
                        kid.appendChild(RitetagWidget.imageWidget(query, d.style))
                    }
                    parentt.insertBefore(kid, parentt.firstChild)
                }
            })
        }
    }

    /**
     *
     * @param {String} query
     * @returns {String} hashtag or false
     */
    static parseQuery (query) {
        let ht = false
        const hashtags = twttr.txt.extractHashtags(query)
        if (hashtags.length > 0) {
            ht = hashtags[0]
        } else {
            if (RitetagWidget.reHashtag().test(query)) {
                let tmp = query.replace(RitetagWidget.reHashtag(), '').trim()
                if (tmp.indexOf(' ') === -1) {
                    ht = tmp
                } else {
                    tmp = tmp.replace(RitetagWidget.reFilter(), '').trim()
                    if (tmp.indexOf(' ') === -1) {
                        ht = tmp
                    }
                }
            }
        }
        return ht
    }

    static appendWidget (query, cb) {
        const element = RitetagWidget.getElement('#ritetag-widget')
        if (element) {
            if (element.dataset.query === query) {
                return
            }
            element.parentElement.removeChild(element)
        }
        cb(query)
    }

    static trimQuery (query) {
        return query.replace(/[@# ]/i, '')
    }

    static widget (query, style, name) {
        query = RitetagWidget.trimQuery(query)
        name = !name ? '' : ''.concat('?integration=', name)
        const src = ''.concat('https://ritetag.com/widgets/hashtag-stats/', query, name)
        return HtmlBuilder.createElement('iframe', {
            type: 'content',
            id: 'ritetag-widget',
            'data-query': query,
            'class': 'ritetag-widget',
            style: style || this.defaultStyle,
            src: src

        })
    }

    static imageWidget (query, style) {
        query = RitetagWidget.trimQuery(query)
        const image = HtmlBuilder.createElement('img', {
            src: 'https://ritetag.com/png/stats/' + query,
            style: style || {}
        })
        return HtmlBuilder.createElement('a', {
            id: 'ritetag-widget',
            target: '_blank',
            'data-query': query,
            'class': 'ritetag-widget',
            href: 'https://ritetag.com/hashtag-stats/' + query
        }, image)
    }
}

const ritetagWidget = new RitetagWidget()
ritetagWidget.init(null)
