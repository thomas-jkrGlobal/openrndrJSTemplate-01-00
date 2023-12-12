(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-math'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-math'.");
    }
    root['openrndr-openrndr-math'] = factory(typeof this['openrndr-openrndr-math'] === 'undefined' ? {} : this['openrndr-openrndr-math'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.z1;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var getNumberHashCode = kotlin_kotlin.$_$.v1;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var equals = kotlin_kotlin.$_$.u1;
  var classMeta = kotlin_kotlin.$_$.t1;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var trimIndent = kotlin_kotlin.$_$.s2;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  function get_normalized() {
    var l = this.l4();
    var tmp;
    if (l === 0.0) {
      tmp = this.eb();
    } else {
      tmp = this.gb(l);
    }
    return tmp;
  }
  setMetadataFor(EuclideanVector, 'EuclideanVector', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Matrix33, 'Matrix33', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Matrix44, 'Matrix44', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Matrix55, 'Matrix55', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Vector2, 'Vector2', classMeta, undefined, [EuclideanVector], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Vector3, 'Vector3', classMeta, undefined, [EuclideanVector], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Vector4, 'Vector4', classMeta, undefined, [EuclideanVector], undefined, undefined, []);
  setMetadataFor(CastableToVector4, 'CastableToVector4', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function EuclideanVector() {
  }
  function Matrix33_init_$Init$(c0r0, c1r0, c2r0, c0r1, c1r1, c2r1, c0r2, c1r2, c2r2, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      c0r0 = 0.0;
    if (!(($mask0 & 2) === 0))
      c1r0 = 0.0;
    if (!(($mask0 & 4) === 0))
      c2r0 = 0.0;
    if (!(($mask0 & 8) === 0))
      c0r1 = 0.0;
    if (!(($mask0 & 16) === 0))
      c1r1 = 0.0;
    if (!(($mask0 & 32) === 0))
      c2r1 = 0.0;
    if (!(($mask0 & 64) === 0))
      c0r2 = 0.0;
    if (!(($mask0 & 128) === 0))
      c1r2 = 0.0;
    if (!(($mask0 & 256) === 0))
      c2r2 = 0.0;
    Matrix33.call($this, c0r0, c1r0, c2r0, c0r1, c1r1, c2r1, c0r2, c1r2, c2r2);
    return $this;
  }
  function Matrix33_init_$Create$(c0r0, c1r0, c2r0, c0r1, c1r1, c2r1, c0r2, c1r2, c2r2, $mask0, $marker) {
    return Matrix33_init_$Init$(c0r0, c1r0, c2r0, c0r1, c1r1, c2r1, c0r2, c1r2, c2r2, $mask0, $marker, Object.create(Matrix33.prototype));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.hb_1 = Matrix33_init_$Create$(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 238, null);
    var tmp_0 = this;
    tmp_0.ib_1 = Matrix33_init_$Create$(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 511, null);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Matrix33(c0r0, c1r0, c2r0, c0r1, c1r1, c2r1, c0r2, c1r2, c2r2) {
    Companion_getInstance();
    this.jb_1 = c0r0;
    this.kb_1 = c1r0;
    this.lb_1 = c2r0;
    this.mb_1 = c0r1;
    this.nb_1 = c1r1;
    this.ob_1 = c2r1;
    this.pb_1 = c0r2;
    this.qb_1 = c1r2;
    this.rb_1 = c2r2;
  }
  Matrix33.prototype.sb = function (v) {
    return new Vector3(v.tb_1 * this.jb_1 + v.ub_1 * this.kb_1 + v.vb_1 * this.lb_1, v.tb_1 * this.mb_1 + v.ub_1 * this.nb_1 + v.vb_1 * this.ob_1, v.tb_1 * this.pb_1 + v.ub_1 * this.qb_1 + v.vb_1 * this.rb_1);
  };
  Matrix33.prototype.toString = function () {
    return '' + this.jb_1 + ', ' + this.kb_1 + ', ' + this.lb_1 + ',\n' + this.mb_1 + ', ' + this.nb_1 + ', ' + this.ob_1 + ',\n' + this.pb_1 + ', ' + this.qb_1 + ', ' + this.rb_1;
  };
  Matrix33.prototype.hashCode = function () {
    var result = getNumberHashCode(this.jb_1);
    result = imul(result, 31) + getNumberHashCode(this.kb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.lb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.mb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.nb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ob_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.pb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.qb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.rb_1) | 0;
    return result;
  };
  Matrix33.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix33 ? other : THROW_CCE();
    if (!equals(this.jb_1, tmp0_other_with_cast.jb_1))
      return false;
    if (!equals(this.kb_1, tmp0_other_with_cast.kb_1))
      return false;
    if (!equals(this.lb_1, tmp0_other_with_cast.lb_1))
      return false;
    if (!equals(this.mb_1, tmp0_other_with_cast.mb_1))
      return false;
    if (!equals(this.nb_1, tmp0_other_with_cast.nb_1))
      return false;
    if (!equals(this.ob_1, tmp0_other_with_cast.ob_1))
      return false;
    if (!equals(this.pb_1, tmp0_other_with_cast.pb_1))
      return false;
    if (!equals(this.qb_1, tmp0_other_with_cast.qb_1))
      return false;
    if (!equals(this.rb_1, tmp0_other_with_cast.rb_1))
      return false;
    return true;
  };
  function Matrix44_init_$Init$(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      c0r0 = 0.0;
    if (!(($mask0 & 2) === 0))
      c1r0 = 0.0;
    if (!(($mask0 & 4) === 0))
      c2r0 = 0.0;
    if (!(($mask0 & 8) === 0))
      c3r0 = 0.0;
    if (!(($mask0 & 16) === 0))
      c0r1 = 0.0;
    if (!(($mask0 & 32) === 0))
      c1r1 = 0.0;
    if (!(($mask0 & 64) === 0))
      c2r1 = 0.0;
    if (!(($mask0 & 128) === 0))
      c3r1 = 0.0;
    if (!(($mask0 & 256) === 0))
      c0r2 = 0.0;
    if (!(($mask0 & 512) === 0))
      c1r2 = 0.0;
    if (!(($mask0 & 1024) === 0))
      c2r2 = 0.0;
    if (!(($mask0 & 2048) === 0))
      c3r2 = 0.0;
    if (!(($mask0 & 4096) === 0))
      c0r3 = 0.0;
    if (!(($mask0 & 8192) === 0))
      c1r3 = 0.0;
    if (!(($mask0 & 16384) === 0))
      c2r3 = 0.0;
    if (!(($mask0 & 32768) === 0))
      c3r3 = 0.0;
    Matrix44.call($this, c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3);
    return $this;
  }
  function Matrix44_init_$Create$(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3, $mask0, $marker) {
    return Matrix44_init_$Init$(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3, $mask0, $marker, Object.create(Matrix44.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.wb_1 = Matrix44_init_$Create$(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 31710, null);
    var tmp_0 = this;
    tmp_0.xb_1 = Matrix44_init_$Create$(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 65535, null);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Matrix44(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3) {
    Companion_getInstance_0();
    this.yb_1 = c0r0;
    this.zb_1 = c1r0;
    this.ac_1 = c2r0;
    this.bc_1 = c3r0;
    this.cc_1 = c0r1;
    this.dc_1 = c1r1;
    this.ec_1 = c2r1;
    this.fc_1 = c3r1;
    this.gc_1 = c0r2;
    this.hc_1 = c1r2;
    this.ic_1 = c2r2;
    this.jc_1 = c3r2;
    this.kc_1 = c0r3;
    this.lc_1 = c1r3;
    this.mc_1 = c2r3;
    this.nc_1 = c3r3;
  }
  Matrix44.prototype.oc = function () {
    if (this === Companion_getInstance_0().wb_1) {
      return this;
    }
    var n00 = this.hc_1 * this.mc_1 * this.fc_1 - this.lc_1 * this.ic_1 * this.fc_1 + this.lc_1 * this.ec_1 * this.jc_1 - this.dc_1 * this.mc_1 * this.jc_1 - this.hc_1 * this.ec_1 * this.nc_1 + this.dc_1 * this.ic_1 * this.nc_1;
    var n01 = this.kc_1 * this.ic_1 * this.fc_1 - this.gc_1 * this.mc_1 * this.fc_1 - this.kc_1 * this.ec_1 * this.jc_1 + this.cc_1 * this.mc_1 * this.jc_1 + this.gc_1 * this.ec_1 * this.nc_1 - this.cc_1 * this.ic_1 * this.nc_1;
    var n02 = this.gc_1 * this.lc_1 * this.fc_1 - this.kc_1 * this.hc_1 * this.fc_1 + this.kc_1 * this.dc_1 * this.jc_1 - this.cc_1 * this.lc_1 * this.jc_1 - this.gc_1 * this.dc_1 * this.nc_1 + this.cc_1 * this.hc_1 * this.nc_1;
    var n03 = this.kc_1 * this.hc_1 * this.ec_1 - this.gc_1 * this.lc_1 * this.ec_1 - this.kc_1 * this.dc_1 * this.ic_1 + this.cc_1 * this.lc_1 * this.ic_1 + this.gc_1 * this.dc_1 * this.mc_1 - this.cc_1 * this.hc_1 * this.mc_1;
    var n10 = this.lc_1 * this.ic_1 * this.bc_1 - this.hc_1 * this.mc_1 * this.bc_1 - this.lc_1 * this.ac_1 * this.jc_1 + this.zb_1 * this.mc_1 * this.jc_1 + this.hc_1 * this.ac_1 * this.nc_1 - this.zb_1 * this.ic_1 * this.nc_1;
    var n11 = this.gc_1 * this.mc_1 * this.bc_1 - this.kc_1 * this.ic_1 * this.bc_1 + this.kc_1 * this.ac_1 * this.jc_1 - this.yb_1 * this.mc_1 * this.jc_1 - this.gc_1 * this.ac_1 * this.nc_1 + this.yb_1 * this.ic_1 * this.nc_1;
    var n12 = this.kc_1 * this.hc_1 * this.bc_1 - this.gc_1 * this.lc_1 * this.bc_1 - this.kc_1 * this.zb_1 * this.jc_1 + this.yb_1 * this.lc_1 * this.jc_1 + this.gc_1 * this.zb_1 * this.nc_1 - this.yb_1 * this.hc_1 * this.nc_1;
    var n13 = this.gc_1 * this.lc_1 * this.ac_1 - this.kc_1 * this.hc_1 * this.ac_1 + this.kc_1 * this.zb_1 * this.ic_1 - this.yb_1 * this.lc_1 * this.ic_1 - this.gc_1 * this.zb_1 * this.mc_1 + this.yb_1 * this.hc_1 * this.mc_1;
    var n20 = this.dc_1 * this.mc_1 * this.bc_1 - this.lc_1 * this.ec_1 * this.bc_1 + this.lc_1 * this.ac_1 * this.fc_1 - this.zb_1 * this.mc_1 * this.fc_1 - this.dc_1 * this.ac_1 * this.nc_1 + this.zb_1 * this.ec_1 * this.nc_1;
    var n21 = this.kc_1 * this.ec_1 * this.bc_1 - this.cc_1 * this.mc_1 * this.bc_1 - this.kc_1 * this.ac_1 * this.fc_1 + this.yb_1 * this.mc_1 * this.fc_1 + this.cc_1 * this.ac_1 * this.nc_1 - this.yb_1 * this.ec_1 * this.nc_1;
    var n22 = this.cc_1 * this.lc_1 * this.bc_1 - this.kc_1 * this.dc_1 * this.bc_1 + this.kc_1 * this.zb_1 * this.fc_1 - this.yb_1 * this.lc_1 * this.fc_1 - this.cc_1 * this.zb_1 * this.nc_1 + this.yb_1 * this.dc_1 * this.nc_1;
    var n23 = this.kc_1 * this.dc_1 * this.ac_1 - this.cc_1 * this.lc_1 * this.ac_1 - this.kc_1 * this.zb_1 * this.ec_1 + this.yb_1 * this.lc_1 * this.ec_1 + this.cc_1 * this.zb_1 * this.mc_1 - this.yb_1 * this.dc_1 * this.mc_1;
    var n30 = this.hc_1 * this.ec_1 * this.bc_1 - this.dc_1 * this.ic_1 * this.bc_1 - this.hc_1 * this.ac_1 * this.fc_1 + this.zb_1 * this.ic_1 * this.fc_1 + this.dc_1 * this.ac_1 * this.jc_1 - this.zb_1 * this.ec_1 * this.jc_1;
    var n31 = this.cc_1 * this.ic_1 * this.bc_1 - this.gc_1 * this.ec_1 * this.bc_1 + this.gc_1 * this.ac_1 * this.fc_1 - this.yb_1 * this.ic_1 * this.fc_1 - this.cc_1 * this.ac_1 * this.jc_1 + this.yb_1 * this.ec_1 * this.jc_1;
    var n32 = this.gc_1 * this.dc_1 * this.bc_1 - this.cc_1 * this.hc_1 * this.bc_1 - this.gc_1 * this.zb_1 * this.fc_1 + this.yb_1 * this.hc_1 * this.fc_1 + this.cc_1 * this.zb_1 * this.jc_1 - this.yb_1 * this.dc_1 * this.jc_1;
    var n33 = this.cc_1 * this.hc_1 * this.ac_1 - this.gc_1 * this.dc_1 * this.ac_1 + this.gc_1 * this.zb_1 * this.ec_1 - this.yb_1 * this.hc_1 * this.ec_1 - this.cc_1 * this.zb_1 * this.ic_1 + this.yb_1 * this.dc_1 * this.ic_1;
    var d = this.pc();
    return new Matrix44(n00 / d, n10 / d, n20 / d, n30 / d, n01 / d, n11 / d, n21 / d, n31 / d, n02 / d, n12 / d, n22 / d, n32 / d, n03 / d, n13 / d, n23 / d, n33 / d);
  };
  Matrix44.prototype.pc = function () {
    return this.kc_1 * this.hc_1 * this.ec_1 * this.bc_1 - this.gc_1 * this.lc_1 * this.ec_1 * this.bc_1 - this.kc_1 * this.dc_1 * this.ic_1 * this.bc_1 + this.cc_1 * this.lc_1 * this.ic_1 * this.bc_1 + this.gc_1 * this.dc_1 * this.mc_1 * this.bc_1 - this.cc_1 * this.hc_1 * this.mc_1 * this.bc_1 - this.kc_1 * this.hc_1 * this.ac_1 * this.fc_1 + this.gc_1 * this.lc_1 * this.ac_1 * this.fc_1 + this.kc_1 * this.zb_1 * this.ic_1 * this.fc_1 - this.yb_1 * this.lc_1 * this.ic_1 * this.fc_1 - this.gc_1 * this.zb_1 * this.mc_1 * this.fc_1 + this.yb_1 * this.hc_1 * this.mc_1 * this.fc_1 + this.kc_1 * this.dc_1 * this.ac_1 * this.jc_1 - this.cc_1 * this.lc_1 * this.ac_1 * this.jc_1 - this.kc_1 * this.zb_1 * this.ec_1 * this.jc_1 + this.yb_1 * this.lc_1 * this.ec_1 * this.jc_1 + this.cc_1 * this.zb_1 * this.mc_1 * this.jc_1 - this.yb_1 * this.dc_1 * this.mc_1 * this.jc_1 - this.gc_1 * this.dc_1 * this.ac_1 * this.nc_1 + this.cc_1 * this.hc_1 * this.ac_1 * this.nc_1 + this.gc_1 * this.zb_1 * this.ec_1 * this.nc_1 - this.yb_1 * this.hc_1 * this.ec_1 * this.nc_1 - this.cc_1 * this.zb_1 * this.ic_1 * this.nc_1 + this.yb_1 * this.dc_1 * this.ic_1 * this.nc_1;
  };
  Matrix44.prototype.qc = function () {
    return new Matrix44(this.yb_1, this.cc_1, this.gc_1, this.kc_1, this.zb_1, this.dc_1, this.hc_1, this.lc_1, this.ac_1, this.ec_1, this.ic_1, this.mc_1, this.bc_1, this.fc_1, this.jc_1, this.nc_1);
  };
  Matrix44.prototype.rc = function () {
    return new Matrix33(this.yb_1, this.zb_1, this.ac_1, this.cc_1, this.dc_1, this.ec_1, this.gc_1, this.hc_1, this.ic_1);
  };
  Matrix44.prototype.sc = function (mat) {
    return this === Companion_getInstance_0().wb_1 ? mat : mat === Companion_getInstance_0().wb_1 ? this : new Matrix44(this.yb_1 * mat.yb_1 + this.zb_1 * mat.cc_1 + this.ac_1 * mat.gc_1 + this.bc_1 * mat.kc_1, this.yb_1 * mat.zb_1 + this.zb_1 * mat.dc_1 + this.ac_1 * mat.hc_1 + this.bc_1 * mat.lc_1, this.yb_1 * mat.ac_1 + this.zb_1 * mat.ec_1 + this.ac_1 * mat.ic_1 + this.bc_1 * mat.mc_1, this.yb_1 * mat.bc_1 + this.zb_1 * mat.fc_1 + this.ac_1 * mat.jc_1 + this.bc_1 * mat.nc_1, this.cc_1 * mat.yb_1 + this.dc_1 * mat.cc_1 + this.ec_1 * mat.gc_1 + this.fc_1 * mat.kc_1, this.cc_1 * mat.zb_1 + this.dc_1 * mat.dc_1 + this.ec_1 * mat.hc_1 + this.fc_1 * mat.lc_1, this.cc_1 * mat.ac_1 + this.dc_1 * mat.ec_1 + this.ec_1 * mat.ic_1 + this.fc_1 * mat.mc_1, this.cc_1 * mat.bc_1 + this.dc_1 * mat.fc_1 + this.ec_1 * mat.jc_1 + this.fc_1 * mat.nc_1, this.gc_1 * mat.yb_1 + this.hc_1 * mat.cc_1 + this.ic_1 * mat.gc_1 + this.jc_1 * mat.kc_1, this.gc_1 * mat.zb_1 + this.hc_1 * mat.dc_1 + this.ic_1 * mat.hc_1 + this.jc_1 * mat.lc_1, this.gc_1 * mat.ac_1 + this.hc_1 * mat.ec_1 + this.ic_1 * mat.ic_1 + this.jc_1 * mat.mc_1, this.gc_1 * mat.bc_1 + this.hc_1 * mat.fc_1 + this.ic_1 * mat.jc_1 + this.jc_1 * mat.nc_1, this.kc_1 * mat.yb_1 + this.lc_1 * mat.cc_1 + this.mc_1 * mat.gc_1 + this.nc_1 * mat.kc_1, this.kc_1 * mat.zb_1 + this.lc_1 * mat.dc_1 + this.mc_1 * mat.hc_1 + this.nc_1 * mat.lc_1, this.kc_1 * mat.ac_1 + this.lc_1 * mat.ec_1 + this.mc_1 * mat.ic_1 + this.nc_1 * mat.mc_1, this.kc_1 * mat.bc_1 + this.lc_1 * mat.fc_1 + this.mc_1 * mat.jc_1 + this.nc_1 * mat.nc_1);
  };
  Matrix44.prototype.toString = function () {
    return '' + this.yb_1 + ', ' + this.zb_1 + ', ' + this.ac_1 + ', ' + this.bc_1 + ',\n' + this.cc_1 + ', ' + this.dc_1 + ', ' + this.ec_1 + ', ' + this.fc_1 + ',\n' + this.gc_1 + ', ' + this.hc_1 + ', ' + this.ic_1 + ', ' + this.jc_1 + ',\n' + this.kc_1 + ', ' + this.lc_1 + ', ' + this.mc_1 + ', ' + this.nc_1;
  };
  Matrix44.prototype.tc = function (c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3) {
    return new Matrix44(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3);
  };
  Matrix44.prototype.uc = function (c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      c0r0 = this.yb_1;
    if (!(($mask0 & 2) === 0))
      c1r0 = this.zb_1;
    if (!(($mask0 & 4) === 0))
      c2r0 = this.ac_1;
    if (!(($mask0 & 8) === 0))
      c3r0 = this.bc_1;
    if (!(($mask0 & 16) === 0))
      c0r1 = this.cc_1;
    if (!(($mask0 & 32) === 0))
      c1r1 = this.dc_1;
    if (!(($mask0 & 64) === 0))
      c2r1 = this.ec_1;
    if (!(($mask0 & 128) === 0))
      c3r1 = this.fc_1;
    if (!(($mask0 & 256) === 0))
      c0r2 = this.gc_1;
    if (!(($mask0 & 512) === 0))
      c1r2 = this.hc_1;
    if (!(($mask0 & 1024) === 0))
      c2r2 = this.ic_1;
    if (!(($mask0 & 2048) === 0))
      c3r2 = this.jc_1;
    if (!(($mask0 & 4096) === 0))
      c0r3 = this.kc_1;
    if (!(($mask0 & 8192) === 0))
      c1r3 = this.lc_1;
    if (!(($mask0 & 16384) === 0))
      c2r3 = this.mc_1;
    if (!(($mask0 & 32768) === 0))
      c3r3 = this.nc_1;
    return this.tc(c0r0, c1r0, c2r0, c3r0, c0r1, c1r1, c2r1, c3r1, c0r2, c1r2, c2r2, c3r2, c0r3, c1r3, c2r3, c3r3);
  };
  Matrix44.prototype.hashCode = function () {
    var result = getNumberHashCode(this.yb_1);
    result = imul(result, 31) + getNumberHashCode(this.zb_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ac_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.cc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ec_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.gc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.hc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ic_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.jc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.kc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.lc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.mc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.nc_1) | 0;
    return result;
  };
  Matrix44.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix44 ? other : THROW_CCE();
    if (!equals(this.yb_1, tmp0_other_with_cast.yb_1))
      return false;
    if (!equals(this.zb_1, tmp0_other_with_cast.zb_1))
      return false;
    if (!equals(this.ac_1, tmp0_other_with_cast.ac_1))
      return false;
    if (!equals(this.bc_1, tmp0_other_with_cast.bc_1))
      return false;
    if (!equals(this.cc_1, tmp0_other_with_cast.cc_1))
      return false;
    if (!equals(this.dc_1, tmp0_other_with_cast.dc_1))
      return false;
    if (!equals(this.ec_1, tmp0_other_with_cast.ec_1))
      return false;
    if (!equals(this.fc_1, tmp0_other_with_cast.fc_1))
      return false;
    if (!equals(this.gc_1, tmp0_other_with_cast.gc_1))
      return false;
    if (!equals(this.hc_1, tmp0_other_with_cast.hc_1))
      return false;
    if (!equals(this.ic_1, tmp0_other_with_cast.ic_1))
      return false;
    if (!equals(this.jc_1, tmp0_other_with_cast.jc_1))
      return false;
    if (!equals(this.kc_1, tmp0_other_with_cast.kc_1))
      return false;
    if (!equals(this.lc_1, tmp0_other_with_cast.lc_1))
      return false;
    if (!equals(this.mc_1, tmp0_other_with_cast.mc_1))
      return false;
    if (!equals(this.nc_1, tmp0_other_with_cast.nc_1))
      return false;
    return true;
  };
  function Matrix55_init_$Init$(c0r0, c1r0, c2r0, c3r0, c4r0, c0r1, c1r1, c2r1, c3r1, c4r1, c0r2, c1r2, c2r2, c3r2, c4r2, c0r3, c1r3, c2r3, c3r3, c4r3, c0r4, c1r4, c2r4, c3r4, c4r4, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      c0r0 = 0.0;
    if (!(($mask0 & 2) === 0))
      c1r0 = 0.0;
    if (!(($mask0 & 4) === 0))
      c2r0 = 0.0;
    if (!(($mask0 & 8) === 0))
      c3r0 = 0.0;
    if (!(($mask0 & 16) === 0))
      c4r0 = 0.0;
    if (!(($mask0 & 32) === 0))
      c0r1 = 0.0;
    if (!(($mask0 & 64) === 0))
      c1r1 = 0.0;
    if (!(($mask0 & 128) === 0))
      c2r1 = 0.0;
    if (!(($mask0 & 256) === 0))
      c3r1 = 0.0;
    if (!(($mask0 & 512) === 0))
      c4r1 = 0.0;
    if (!(($mask0 & 1024) === 0))
      c0r2 = 0.0;
    if (!(($mask0 & 2048) === 0))
      c1r2 = 0.0;
    if (!(($mask0 & 4096) === 0))
      c2r2 = 0.0;
    if (!(($mask0 & 8192) === 0))
      c3r2 = 0.0;
    if (!(($mask0 & 16384) === 0))
      c4r2 = 0.0;
    if (!(($mask0 & 32768) === 0))
      c0r3 = 0.0;
    if (!(($mask0 & 65536) === 0))
      c1r3 = 0.0;
    if (!(($mask0 & 131072) === 0))
      c2r3 = 0.0;
    if (!(($mask0 & 262144) === 0))
      c3r3 = 0.0;
    if (!(($mask0 & 524288) === 0))
      c4r3 = 0.0;
    if (!(($mask0 & 1048576) === 0))
      c0r4 = 0.0;
    if (!(($mask0 & 2097152) === 0))
      c1r4 = 0.0;
    if (!(($mask0 & 4194304) === 0))
      c2r4 = 0.0;
    if (!(($mask0 & 8388608) === 0))
      c3r4 = 0.0;
    if (!(($mask0 & 16777216) === 0))
      c4r4 = 0.0;
    Matrix55.call($this, c0r0, c1r0, c2r0, c3r0, c4r0, c0r1, c1r1, c2r1, c3r1, c4r1, c0r2, c1r2, c2r2, c3r2, c4r2, c0r3, c1r3, c2r3, c3r3, c4r3, c0r4, c1r4, c2r4, c3r4, c4r4);
    return $this;
  }
  function Matrix55_init_$Create$(c0r0, c1r0, c2r0, c3r0, c4r0, c0r1, c1r1, c2r1, c3r1, c4r1, c0r2, c1r2, c2r2, c3r2, c4r2, c0r3, c1r3, c2r3, c3r3, c4r3, c0r4, c1r4, c2r4, c3r4, c4r4, $mask0, $marker) {
    return Matrix55_init_$Init$(c0r0, c1r0, c2r0, c3r0, c4r0, c0r1, c1r1, c2r1, c3r1, c4r1, c0r2, c1r2, c2r2, c3r2, c4r2, c0r3, c1r3, c2r3, c3r3, c4r3, c0r4, c1r4, c2r4, c3r4, c4r4, $mask0, $marker, Object.create(Matrix55.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.vc_1 = Matrix55_init_$Create$(1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 16510910, null);
    var tmp_0 = this;
    tmp_0.wc_1 = Matrix55_init_$Create$(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 33554431, null);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Matrix55(c0r0, c1r0, c2r0, c3r0, c4r0, c0r1, c1r1, c2r1, c3r1, c4r1, c0r2, c1r2, c2r2, c3r2, c4r2, c0r3, c1r3, c2r3, c3r3, c4r3, c0r4, c1r4, c2r4, c3r4, c4r4) {
    Companion_getInstance_1();
    this.xc_1 = c0r0;
    this.yc_1 = c1r0;
    this.zc_1 = c2r0;
    this.ad_1 = c3r0;
    this.bd_1 = c4r0;
    this.cd_1 = c0r1;
    this.dd_1 = c1r1;
    this.ed_1 = c2r1;
    this.fd_1 = c3r1;
    this.gd_1 = c4r1;
    this.hd_1 = c0r2;
    this.id_1 = c1r2;
    this.jd_1 = c2r2;
    this.kd_1 = c3r2;
    this.ld_1 = c4r2;
    this.md_1 = c0r3;
    this.nd_1 = c1r3;
    this.od_1 = c2r3;
    this.pd_1 = c3r3;
    this.qd_1 = c4r3;
    this.rd_1 = c0r4;
    this.sd_1 = c1r4;
    this.td_1 = c2r4;
    this.ud_1 = c3r4;
    this.vd_1 = c4r4;
  }
  Matrix55.prototype.wd = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([this.xc_1, this.cd_1, this.hd_1, this.md_1, this.rd_1, this.yc_1, this.dd_1, this.id_1, this.nd_1, this.sd_1, this.zc_1, this.ed_1, this.jd_1, this.od_1, this.td_1, this.ad_1, this.fd_1, this.kd_1, this.pd_1, this.ud_1, this.bd_1, this.gd_1, this.ld_1, this.qd_1, this.vd_1]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  };
  Matrix55.prototype.toString = function () {
    return trimIndent('' + this.xc_1 + ', ' + this.yc_1 + ', ' + this.zc_1 + ', ' + this.ad_1 + ', ' + this.bd_1 + ',\n           ' + this.cd_1 + ', ' + this.dd_1 + ', ' + this.ed_1 + ', ' + this.fd_1 + ', ' + this.gd_1 + ',\n           ' + this.hd_1 + ', ' + this.id_1 + ', ' + this.jd_1 + ', ' + this.kd_1 + ', ' + this.ld_1 + ',\n           ' + this.md_1 + ', ' + this.nd_1 + ', ' + this.od_1 + ', ' + this.pd_1 + ', ' + this.qd_1 + ',\n           ' + this.rd_1 + ', ' + this.sd_1 + ', ' + this.td_1 + ', ' + this.ud_1 + ', ' + this.vd_1);
  };
  Matrix55.prototype.hashCode = function () {
    var result = getNumberHashCode(this.xc_1);
    result = imul(result, 31) + getNumberHashCode(this.yc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.zc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ad_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.cd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ed_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.gd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.hd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.id_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.jd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.kd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ld_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.md_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.nd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.od_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.pd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.qd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.rd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.sd_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.td_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ud_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.vd_1) | 0;
    return result;
  };
  Matrix55.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Matrix55))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix55 ? other : THROW_CCE();
    if (!equals(this.xc_1, tmp0_other_with_cast.xc_1))
      return false;
    if (!equals(this.yc_1, tmp0_other_with_cast.yc_1))
      return false;
    if (!equals(this.zc_1, tmp0_other_with_cast.zc_1))
      return false;
    if (!equals(this.ad_1, tmp0_other_with_cast.ad_1))
      return false;
    if (!equals(this.bd_1, tmp0_other_with_cast.bd_1))
      return false;
    if (!equals(this.cd_1, tmp0_other_with_cast.cd_1))
      return false;
    if (!equals(this.dd_1, tmp0_other_with_cast.dd_1))
      return false;
    if (!equals(this.ed_1, tmp0_other_with_cast.ed_1))
      return false;
    if (!equals(this.fd_1, tmp0_other_with_cast.fd_1))
      return false;
    if (!equals(this.gd_1, tmp0_other_with_cast.gd_1))
      return false;
    if (!equals(this.hd_1, tmp0_other_with_cast.hd_1))
      return false;
    if (!equals(this.id_1, tmp0_other_with_cast.id_1))
      return false;
    if (!equals(this.jd_1, tmp0_other_with_cast.jd_1))
      return false;
    if (!equals(this.kd_1, tmp0_other_with_cast.kd_1))
      return false;
    if (!equals(this.ld_1, tmp0_other_with_cast.ld_1))
      return false;
    if (!equals(this.md_1, tmp0_other_with_cast.md_1))
      return false;
    if (!equals(this.nd_1, tmp0_other_with_cast.nd_1))
      return false;
    if (!equals(this.od_1, tmp0_other_with_cast.od_1))
      return false;
    if (!equals(this.pd_1, tmp0_other_with_cast.pd_1))
      return false;
    if (!equals(this.qd_1, tmp0_other_with_cast.qd_1))
      return false;
    if (!equals(this.rd_1, tmp0_other_with_cast.rd_1))
      return false;
    if (!equals(this.sd_1, tmp0_other_with_cast.sd_1))
      return false;
    if (!equals(this.td_1, tmp0_other_with_cast.td_1))
      return false;
    if (!equals(this.ud_1, tmp0_other_with_cast.ud_1))
      return false;
    if (!equals(this.vd_1, tmp0_other_with_cast.vd_1))
      return false;
    return true;
  };
  function Vector2_init_$Init$(x, $this) {
    Vector2.call($this, x, x);
    return $this;
  }
  function Vector2_init_$Create$(x) {
    return Vector2_init_$Init$(x, Object.create(Vector2.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.xd_1 = new Vector2(0.0, 0.0);
    this.yd_1 = new Vector2(1.0, 1.0);
    this.zd_1 = new Vector2(1.0, 0.0);
    this.ae_1 = new Vector2(0.0, 1.0);
    var tmp = this;
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    tmp.be_1 = new Vector2(Infinity, Infinity);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Vector2(x, y) {
    Companion_getInstance_2();
    this.ce_1 = x;
    this.de_1 = y;
  }
  Vector2.prototype.l4 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = this.ce_1 * this.ce_1 + this.de_1 * this.de_1;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  };
  Vector2.prototype.eb = function () {
    return Companion_getInstance_2().xd_1;
  };
  Vector2.prototype.ee = function (right) {
    return new Vector2(this.ce_1 - right.ce_1, this.de_1 - right.de_1);
  };
  Vector2.prototype.gb = function (scale) {
    return new Vector2(this.ce_1 / scale, this.de_1 / scale);
  };
  Vector2.prototype.toString = function () {
    return 'Vector2(x=' + this.ce_1 + ', y=' + this.de_1 + ')';
  };
  Vector2.prototype.hashCode = function () {
    var result = getNumberHashCode(this.ce_1);
    result = imul(result, 31) + getNumberHashCode(this.de_1) | 0;
    return result;
  };
  Vector2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector2))
      return false;
    var tmp0_other_with_cast = other instanceof Vector2 ? other : THROW_CCE();
    if (!equals(this.ce_1, tmp0_other_with_cast.ce_1))
      return false;
    if (!equals(this.de_1, tmp0_other_with_cast.de_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.fe_1 = new Vector3(0.0, 0.0, 0.0);
    this.ge_1 = new Vector3(1.0, 1.0, 1.0);
    this.he_1 = this.ge_1.fb();
    this.ie_1 = new Vector3(1.0, 0.0, 0.0);
    this.je_1 = new Vector3(0.0, 1.0, 0.0);
    this.ke_1 = new Vector3(0.0, 0.0, 1.0);
    var tmp = this;
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    tmp.le_1 = new Vector3(Infinity, Infinity, Infinity);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Vector3(x, y, z) {
    Companion_getInstance_3();
    this.tb_1 = x;
    this.ub_1 = y;
    this.vb_1 = z;
  }
  Vector3.prototype.eb = function () {
    return Companion_getInstance_3().fe_1;
  };
  Vector3.prototype.gb = function (scale) {
    return new Vector3(this.tb_1 / scale, this.ub_1 / scale, this.vb_1 / scale);
  };
  Vector3.prototype.l4 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = this.tb_1 * this.tb_1 + this.ub_1 * this.ub_1 + this.vb_1 * this.vb_1;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  };
  Vector3.prototype.toString = function () {
    return 'Vector3(x=' + this.tb_1 + ', y=' + this.ub_1 + ', z=' + this.vb_1 + ')';
  };
  Vector3.prototype.hashCode = function () {
    var result = getNumberHashCode(this.tb_1);
    result = imul(result, 31) + getNumberHashCode(this.ub_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.vb_1) | 0;
    return result;
  };
  Vector3.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector3))
      return false;
    var tmp0_other_with_cast = other instanceof Vector3 ? other : THROW_CCE();
    if (!equals(this.tb_1, tmp0_other_with_cast.tb_1))
      return false;
    if (!equals(this.ub_1, tmp0_other_with_cast.ub_1))
      return false;
    if (!equals(this.vb_1, tmp0_other_with_cast.vb_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.me_1 = new Vector4(1.0, 0.0, 0.0, 0.0);
    this.ne_1 = new Vector4(0.0, 1.0, 0.0, 0.0);
    this.oe_1 = new Vector4(0.0, 0.0, 1.0, 0.0);
    this.pe_1 = new Vector4(0.0, 0.0, 0.0, 1.0);
    this.qe_1 = new Vector4(0.0, 0.0, 0.0, 0.0);
    this.re_1 = new Vector4(1.0, 1.0, 1.0, 1.0);
    var tmp = this;
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    DoubleCompanionObject_getInstance();
    tmp.se_1 = new Vector4(Infinity, Infinity, Infinity, Infinity);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Vector4(x, y, z, w) {
    Companion_getInstance_4();
    this.te_1 = x;
    this.ue_1 = y;
    this.ve_1 = z;
    this.we_1 = w;
  }
  Vector4.prototype.l4 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = this.te_1 * this.te_1 + this.ue_1 * this.ue_1 + this.ve_1 * this.ve_1 + this.we_1 * this.we_1;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  };
  Vector4.prototype.eb = function () {
    return Companion_getInstance_4().qe_1;
  };
  Vector4.prototype.gb = function (scale) {
    return new Vector4(this.te_1 / scale, this.ue_1 / scale, this.ve_1 / scale, this.we_1 / scale);
  };
  Vector4.prototype.toString = function () {
    return 'Vector4(x=' + this.te_1 + ', y=' + this.ue_1 + ', z=' + this.ve_1 + ', w=' + this.we_1 + ')';
  };
  Vector4.prototype.hashCode = function () {
    var result = getNumberHashCode(this.te_1);
    result = imul(result, 31) + getNumberHashCode(this.ue_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ve_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.we_1) | 0;
    return result;
  };
  Vector4.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector4))
      return false;
    var tmp0_other_with_cast = other instanceof Vector4 ? other : THROW_CCE();
    if (!equals(this.te_1, tmp0_other_with_cast.te_1))
      return false;
    if (!equals(this.ue_1, tmp0_other_with_cast.ue_1))
      return false;
    if (!equals(this.ve_1, tmp0_other_with_cast.ve_1))
      return false;
    if (!equals(this.we_1, tmp0_other_with_cast.we_1))
      return false;
    return true;
  };
  function CastableToVector4() {
  }
  function ortho(left, right, bottom, top, zNear, zFar) {
    var tx = -(right + left) / (right - left);
    var ty = -(top + bottom) / (top - bottom);
    var tz = -(zFar + zNear) / (zFar - zNear);
    return new Matrix44(2.0 / (right - left), 0.0, 0.0, tx, 0.0, 2.0 / (top - bottom), 0.0, ty, 0.0, 0.0, -2.0 / (zFar - zNear), tz, 0.0, 0.0, 0.0, 1.0);
  }
  function normalMatrix(view) {
    var subView = new Matrix44(view.yb_1, view.zb_1, view.ac_1, 0.0, view.cc_1, view.dc_1, view.ec_1, 0.0, view.gc_1, view.hc_1, view.ic_1, 0.0, 0.0, 0.0, 0.0, 1.0);
    var tmp = subView.oc().qc();
    return tmp.uc(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 32767, null);
  }
  //region block: post-declaration
  Vector3.prototype.fb = get_normalized;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Vector2_init_$Create$;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = Companion_getInstance_3;
  _.$_$.f = normalMatrix;
  _.$_$.g = ortho;
  _.$_$.h = CastableToVector4;
  _.$_$.i = Matrix33;
  _.$_$.j = Matrix44;
  _.$_$.k = Vector2;
  _.$_$.l = Vector3;
  _.$_$.m = Vector4;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-math.js.map
