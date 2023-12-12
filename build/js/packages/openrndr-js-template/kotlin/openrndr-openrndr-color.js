(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './openrndr-openrndr-math.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./openrndr-openrndr-math.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-color'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-color'.");
    }
    if (typeof this['openrndr-openrndr-math'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-color'. Its dependency 'openrndr-openrndr-math' was not found. Please, check whether 'openrndr-openrndr-math' is loaded prior to 'openrndr-openrndr-color'.");
    }
    root['openrndr-openrndr-color'] = factory(typeof this['openrndr-openrndr-color'] === 'undefined' ? {} : this['openrndr-openrndr-color'], this['kotlin-kotlin-stdlib-js-ir'], this['openrndr-openrndr-math']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_openrndr_openrndr_math) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceGet = kotlin_kotlin.$_$.r1;
  var digitToInt = kotlin_kotlin.$_$.o2;
  var startsWith$default = kotlin_kotlin.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var getNumberHashCode = kotlin_kotlin.$_$.v1;
  var Vector4 = kotlin_org_openrndr_openrndr_math.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var equals = kotlin_kotlin.$_$.u1;
  var CastableToVector4 = kotlin_org_openrndr_openrndr_math.$_$.h;
  var classMeta = kotlin_kotlin.$_$.t1;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var Enum = kotlin_kotlin.$_$.u2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ColorRGBa, 'ColorRGBa', classMeta, undefined, [CastableToVector4], undefined, undefined, []);
  setMetadataFor(Linearity, 'Linearity', classMeta, Enum, undefined, undefined, undefined, []);
  //endregion
  function fromHex$fromHex1(str, pos) {
    return imul(17, digitToInt(charSequenceGet(str, pos), 16)) / 255.0;
  }
  function fromHex$fromHex2(str, pos) {
    return (imul(16, digitToInt(charSequenceGet(str, pos), 16)) + digitToInt(charSequenceGet(str, pos + 1 | 0), 16) | 0) / 255.0;
  }
  function Companion() {
    Companion_instance = this;
    this.ye_1 = this.jf(16761035);
    this.ze_1 = new ColorRGBa(0.0, 0.0, 0.0, 1.0, Linearity_SRGB_getInstance());
    this.af_1 = new ColorRGBa(1.0, 1.0, 1.0, 1.0, Linearity_SRGB_getInstance());
    this.bf_1 = new ColorRGBa(1.0, 0.0, 0.0, 1.0, Linearity_SRGB_getInstance());
    this.cf_1 = new ColorRGBa(0.0, 0.0, 1.0, 1.0, Linearity_SRGB_getInstance());
    this.df_1 = new ColorRGBa(0.0, 1.0, 0.0, 1.0, Linearity_SRGB_getInstance());
    this.ef_1 = new ColorRGBa(1.0, 1.0, 0.0, 1.0, Linearity_SRGB_getInstance());
    this.ff_1 = new ColorRGBa(0.0, 1.0, 1.0, 1.0, Linearity_SRGB_getInstance());
    this.gf_1 = new ColorRGBa(1.0, 0.0, 1.0, 1.0, Linearity_SRGB_getInstance());
    this.hf_1 = new ColorRGBa(0.5, 0.5, 0.5, 1.0, Linearity_SRGB_getInstance());
    this.if_1 = new ColorRGBa(0.0, 0.0, 0.0, 0.0, Linearity_SRGB_getInstance());
  }
  Companion.prototype.jf = function (hex) {
    var r = (hex & 16711680) >> 16;
    var g = (hex & 65280) >> 8;
    var b = hex & 255;
    return new ColorRGBa(r / 255.0, g / 255.0, b / 255.0, 1.0, Linearity_SRGB_getInstance());
  };
  Companion.prototype.kf = function (hex) {
    var tmp;
    if (startsWith$default(hex, '#', false, 2, null)) {
      tmp = 1;
    } else {
      if (startsWith$default(hex, '0x', false, 2, null)) {
        tmp = 2;
      } else {
        tmp = 0;
      }
    }
    var pos = tmp;
    var tmp0_subject = hex.length - pos | 0;
    var tmp_0;
    switch (tmp0_subject) {
      case 3:
        tmp_0 = new ColorRGBa(fromHex$fromHex1(hex, pos), fromHex$fromHex1(hex, pos + 1 | 0), fromHex$fromHex1(hex, pos + 2 | 0), 1.0, Linearity_SRGB_getInstance());
        break;
      case 4:
        tmp_0 = new ColorRGBa(fromHex$fromHex1(hex, pos), fromHex$fromHex1(hex, pos + 1 | 0), fromHex$fromHex1(hex, pos + 2 | 0), fromHex$fromHex1(hex, pos + 3 | 0), Linearity_SRGB_getInstance());
        break;
      case 6:
        tmp_0 = new ColorRGBa(fromHex$fromHex2(hex, pos), fromHex$fromHex2(hex, pos + 2 | 0), fromHex$fromHex2(hex, pos + 4 | 0), 1.0, Linearity_SRGB_getInstance());
        break;
      case 8:
        tmp_0 = new ColorRGBa(fromHex$fromHex2(hex, pos), fromHex$fromHex2(hex, pos + 2 | 0), fromHex$fromHex2(hex, pos + 4 | 0), fromHex$fromHex2(hex, pos + 6 | 0), Linearity_SRGB_getInstance());
        break;
      default:
        throw IllegalArgumentException_init_$Create$("Invalid hex length/format for '" + hex + "'");
    }
    return tmp_0;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ColorRGBa(r, g, b, alpha, linearity) {
    Companion_getInstance();
    this.lf_1 = r;
    this.mf_1 = g;
    this.nf_1 = b;
    this.of_1 = alpha;
    this.pf_1 = linearity;
    this.qf_1 = this.of_1;
  }
  ColorRGBa.prototype.hashCode = function () {
    var result = getNumberHashCode(this.lf_1);
    result = imul(31, result) + getNumberHashCode(this.mf_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.nf_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.of_1) | 0;
    result = imul(31, result) + this.pf_1.c3_1 | 0;
    return result;
  };
  ColorRGBa.prototype.xe = function () {
    return new Vector4(this.lf_1, this.mf_1, this.nf_1, this.of_1);
  };
  ColorRGBa.prototype.toString = function () {
    return 'ColorRGBa(r=' + this.lf_1 + ', g=' + this.mf_1 + ', b=' + this.nf_1 + ', alpha=' + this.of_1 + ', linearity=' + this.pf_1 + ')';
  };
  ColorRGBa.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorRGBa))
      return false;
    var tmp0_other_with_cast = other instanceof ColorRGBa ? other : THROW_CCE();
    if (!equals(this.lf_1, tmp0_other_with_cast.lf_1))
      return false;
    if (!equals(this.mf_1, tmp0_other_with_cast.mf_1))
      return false;
    if (!equals(this.nf_1, tmp0_other_with_cast.nf_1))
      return false;
    if (!equals(this.of_1, tmp0_other_with_cast.of_1))
      return false;
    if (!this.pf_1.equals(tmp0_other_with_cast.pf_1))
      return false;
    return true;
  };
  function rgb(hex) {
    return Companion_getInstance().kf(hex);
  }
  var Linearity_UNKNOWN_instance;
  var Linearity_LINEAR_instance;
  var Linearity_SRGB_instance;
  var Linearity_ASSUMED_LINEAR_instance;
  var Linearity_ASSUMED_SRGB_instance;
  var Linearity_entriesInitialized;
  function Linearity_initEntries() {
    if (Linearity_entriesInitialized)
      return Unit_getInstance();
    Linearity_entriesInitialized = true;
    Linearity_UNKNOWN_instance = new Linearity('UNKNOWN', 0, -1);
    Linearity_LINEAR_instance = new Linearity('LINEAR', 1, 1);
    Linearity_SRGB_instance = new Linearity('SRGB', 2, 1);
    Linearity_ASSUMED_LINEAR_instance = new Linearity('ASSUMED_LINEAR', 3, 0);
    Linearity_ASSUMED_SRGB_instance = new Linearity('ASSUMED_SRGB', 4, 0);
  }
  function Linearity(name, ordinal, certainty) {
    Enum.call(this, name, ordinal);
    this.tf_1 = certainty;
  }
  function Linearity_SRGB_getInstance() {
    Linearity_initEntries();
    return Linearity_SRGB_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  _.$_$.b = ColorRGBa;
  _.$_$.c = rgb;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-color.js.map
