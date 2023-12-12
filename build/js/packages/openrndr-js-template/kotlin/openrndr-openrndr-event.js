(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-logging-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-logging-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-event'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-event'.");
    }
    if (typeof this['kotlin-logging-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-event'. Its dependency 'kotlin-logging-js-ir' was not found. Please, check whether 'kotlin-logging-js-ir' is loaded prior to 'openrndr-openrndr-event'.");
    }
    root['openrndr-openrndr-event'] = factory(typeof this['openrndr-openrndr-event'] === 'undefined' ? {} : this['openrndr-openrndr-event'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-logging-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_github_microutils_kotlin_logging) {
  'use strict';
  //region block: imports
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var Exception = kotlin_kotlin.$_$.v2;
  var classMeta = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var KotlinLogging_getInstance = kotlin_io_github_microutils_kotlin_logging.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Event, 'Event', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function get_logger() {
    init_properties_Event_kt_rg2dly();
    return logger;
  }
  var logger;
  function Event_init_$Init$(name, postpone, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      name = '<unnamed-event>';
    if (!(($mask0 & 2) === 0))
      postpone = false;
    Event.call($this, name, postpone);
    return $this;
  }
  function Event_init_$Create$(name, postpone, $mask0, $marker) {
    return Event_init_$Init$(name, postpone, $mask0, $marker, Object.create(Event.prototype));
  }
  function Event$deliver$lambda(this$0, $e) {
    return function () {
      return "Exception thrown in listener ('" + this$0.uf_1 + "'): " + getKClassFromExpression($e).x7() + "; '" + $e.message + "'";
    };
  }
  function Event$deliver$lambda_0(this$0, $e) {
    return function () {
      return "Exception thrown in one-shot listener ('" + this$0.uf_1 + "'): " + getKClassFromExpression($e).x7() + "; '" + $e.message + "'";
    };
  }
  function Event(name, postpone) {
    this.uf_1 = name;
    this.vf_1 = postpone;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.wf_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.xf_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.yf_1 = tmp$ret$2;
  }
  Event.prototype.zf = function (message) {
    this.yf_1.a(message);
    this.ag();
  };
  Event.prototype.ag = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (this.yf_1.c() > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var copy = tmp$ret$0;
      copy.g(this.yf_1);
      this.yf_1.f2();
      var tmp0_iterator = copy.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'org.openrndr.events.Event.deliver.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.wf_1;
        var tmp0_iterator_0 = tmp0_forEach.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          // Inline function 'org.openrndr.events.Event.deliver.<anonymous>.<anonymous>.<anonymous>' call
          try {
            element_0(element);
          } catch ($p) {
            if ($p instanceof Exception) {
              var tmp_0 = get_logger();
              tmp_0.db(Event$deliver$lambda(this, $p));
              throw $p;
            } else {
              throw $p;
            }
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp1_forEach = this.xf_1;
        var tmp0_iterator_1 = tmp1_forEach.h();
        while (tmp0_iterator_1.i()) {
          var element_1 = tmp0_iterator_1.j();
          // Inline function 'org.openrndr.events.Event.deliver.<anonymous>.<anonymous>.<anonymous>' call
          try {
            element_1(element);
          } catch ($p) {
            if ($p instanceof Exception) {
              var tmp_1 = get_logger();
              tmp_1.db(Event$deliver$lambda_0(this, $p));
              throw $p;
            } else {
              throw $p;
            }
          }
        }
        this.xf_1.f2();
      }
      tmp = Unit_getInstance();
    }
    tmp$ret$1 = tmp;
  };
  Event.prototype.bg = function (listener) {
    this.wf_1.a(listener);
    return listener;
  };
  function logger$lambda() {
    init_properties_Event_kt_rg2dly();
    return Unit_getInstance();
  }
  var properties_initialized_Event_kt_qdxa0m;
  function init_properties_Event_kt_rg2dly() {
    if (properties_initialized_Event_kt_qdxa0m) {
    } else {
      properties_initialized_Event_kt_qdxa0m = true;
      var tmp = KotlinLogging_getInstance();
      logger = tmp.wa(logger$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Event_init_$Create$;
  _.$_$.b = Event;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-event.js.map
