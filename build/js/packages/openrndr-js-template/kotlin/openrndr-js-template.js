(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './openrndr-openrndr-application.js', './kotlin-kotlin-stdlib-js-ir.js', './openrndr-openrndr-color.js', './openrndr-openrndr-webgl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./openrndr-openrndr-application.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./openrndr-openrndr-color.js'), require('./openrndr-openrndr-webgl.js'));
  else {
    if (typeof this['openrndr-openrndr-application'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-js-template'. Its dependency 'openrndr-openrndr-application' was not found. Please, check whether 'openrndr-openrndr-application' is loaded prior to 'openrndr-js-template'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-js-template'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-js-template'.");
    }
    if (typeof this['openrndr-openrndr-color'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-js-template'. Its dependency 'openrndr-openrndr-color' was not found. Please, check whether 'openrndr-openrndr-color' is loaded prior to 'openrndr-js-template'.");
    }
    if (typeof this['openrndr-openrndr-webgl'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-js-template'. Its dependency 'openrndr-openrndr-webgl' was not found. Please, check whether 'openrndr-openrndr-webgl' is loaded prior to 'openrndr-js-template'.");
    }
    root['openrndr-js-template'] = factory(typeof this['openrndr-js-template'] === 'undefined' ? {} : this['openrndr-js-template'], this['openrndr-openrndr-application'], this['kotlin-kotlin-stdlib-js-ir'], this['openrndr-openrndr-color'], this['openrndr-openrndr-webgl']);
  }
}(this, function (_, kotlin_org_openrndr_openrndr_application, kotlin_kotlin, kotlin_org_openrndr_openrndr_color, kotlin_org_openrndr_openrndr_webgl) {
  'use strict';
  //region block: imports
  var applicationAsync = kotlin_org_openrndr_openrndr_application.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var rgb = kotlin_org_openrndr_openrndr_color.$_$.c;
  var Companion_getInstance = kotlin_org_openrndr_openrndr_color.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.p1;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var Program = kotlin_org_openrndr_openrndr_application.$_$.x;
  var isInterface = kotlin_kotlin.$_$.d2;
  var classMeta = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.o1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(main$lambda$slambda, 'main$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  //endregion
  function main($cont) {
    return applicationAsync(main$lambda, $cont);
  }
  function main$lambda($this$applicationAsync) {
    $this$applicationAsync.jr(main$lambda$slambda_0(null));
    return Unit_getInstance();
  }
  function main$lambda$slambda$lambda($this$extend) {
    var a = rgb('#ff0000');
    $this$extend.eu().gk(a);
    $this$extend.eu().ik(Companion_getInstance().af_1);
    var tmp = $this$extend.eu();
    var tmp_0 = $this$extend.xj() / 2.0;
    var tmp_1 = $this$extend.yj() / 2.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = $this$extend.ju();
    tmp$ret$0 = Math.cos(tmp0_cos);
    tmp.jk(tmp_0, tmp_1, 100.0 + tmp$ret$0 * 40.0);
    return Unit_getInstance();
  }
  function main$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  main$lambda$slambda.prototype.k15 = function ($this$program, $cont) {
    var tmp = this.l15($this$program, $cont);
    tmp.ma_1 = Unit_getInstance();
    tmp.na_1 = null;
    return tmp.ux();
  };
  main$lambda$slambda.prototype.m15 = function (p1, $cont) {
    return this.k15((!(p1 == null) ? isInterface(p1, Program) : false) ? p1 : THROW_CCE(), $cont);
  };
  main$lambda$slambda.prototype.ux = function () {
    var suspendResult = this.ma_1;
    $sm: do
      try {
        var tmp = this.ka_1;
        if (tmp === 0) {
          this.la_1 = 1;
          this.j15_1.ks(null, main$lambda$slambda$lambda, 1, null);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.na_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  main$lambda$slambda.prototype.l15 = function ($this$program, completion) {
    var i = new main$lambda$slambda(completion);
    i.j15_1 = $this$program;
    return i;
  };
  function main$lambda$slambda_0(resultContinuation) {
    var i = new main$lambda$slambda(resultContinuation);
    var l = function ($this$program, $cont) {
      return i.k15($this$program, $cont);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  kotlin_org_openrndr_openrndr_webgl.$jsExportAll$(_);
  //endregion
  main(get_EmptyContinuation());
  return _;
}));

//# sourceMappingURL=openrndr-js-template.js.map
