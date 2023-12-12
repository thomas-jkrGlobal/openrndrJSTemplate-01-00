(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-animatable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-animatable'.");
    }
    root['openrndr-openrndr-animatable'] = factory(typeof this['openrndr-openrndr-animatable'] === 'undefined' ? {} : this['openrndr-openrndr-animatable'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var Long = kotlin_kotlin.$_$.w2;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var classMeta = kotlin_kotlin.$_$.t1;
  var Enum = kotlin_kotlin.$_$.u2;
  var interfaceMeta = kotlin_kotlin.$_$.z1;
  var numberToLong = kotlin_kotlin.$_$.g2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Animatable, 'Animatable', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AnimationState, 'AnimationState', classMeta, Enum, undefined, undefined, undefined, []);
  function get_timeNanos() {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.ir();
    tmp$ret$0 = tmp0_times.ca(new Long(1000, 0));
    return tmp$ret$0;
  }
  setMetadataFor(Clock, 'Clock', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AnimationEvent, 'AnimationEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultClock, 'DefaultClock', classMeta, undefined, [Clock], undefined, undefined, []);
  //endregion
  function Animatable_init_$Init$($this) {
    Animatable.call($this);
    $this.rq_1 = $this;
    return $this;
  }
  function Animatable_init_$Create$() {
    return Animatable_init_$Init$(Object.create(Animatable.prototype));
  }
  function updatePropertyAnimations($this, timeInNs) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var toRemove = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var triggers = tmp$ret$1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = $this.oq_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$2;
      // Inline function 'org.openrndr.animatable.Animatable.updatePropertyAnimations.<anonymous>' call
      tmp$ret$2 = item;
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_iterator_0 = tmp$ret$4.h();
    while (tmp0_iterator_0.i()) {
      var key = tmp0_iterator_0.j();
      if (key.vq_1.z9(timeInNs) <= 0) {
        if (key.ar_1.equals(AnimationState_Queued_getInstance())) {
          key.br();
        }
        if (key.ar_1.equals(AnimationState_Playing_getInstance())) {
          var dt = timeInNs.ba(key.vq_1).u9();
          if (key.uq_1.z9(new Long(0, 0)) > 0) {
            dt = dt / key.uq_1.u9();
          } else {
            dt = 1.0;
          }
          if (dt < 0.0)
            dt = 0.0;
          if (dt >= 1.0) {
            dt = 1.0;
            key.cr();
          }
          key.dr(dt);
        }
        if (key.ar_1.equals(AnimationState_Stopped_getInstance())) {
          triggers.a(key.yq_1);
          toRemove.a(key);
        }
      }
    }
    var tmp1_iterator = triggers.h();
    while (tmp1_iterator.i()) {
      var event = tmp1_iterator.j();
      event.zf(new AnimationEvent());
    }
    var tmp2_iterator = toRemove.h();
    while (tmp2_iterator.i()) {
      var key_0 = tmp2_iterator.j();
      $this.oq_1.d2(key_0);
    }
    $this.nq_1 = timeInNs;
    if ($this.nq_1.z9($this.mq_1) > 0) {
      $this.mq_1 = $this.nq_1;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.er_1 = new DefaultClock();
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  Animatable.prototype.fr = function (timeInNs) {
    this.nq_1 = timeInNs;
    this.mq_1 = this.nq_1;
    updatePropertyAnimations(this, timeInNs);
  };
  Animatable.prototype.gr = function (timeInNs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      timeInNs = Companion_getInstance().er_1.hr();
    return this.fr(timeInNs);
  };
  function Animatable() {
    Companion_getInstance();
    this.mq_1 = Companion_getInstance().er_1.hr();
    this.nq_1 = this.mq_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.oq_1 = tmp$ret$0;
    this.pq_1 = null;
    this.qq_1 = null;
    this.rq_1 = null;
  }
  var AnimationState_Queued_instance;
  var AnimationState_Playing_instance;
  var AnimationState_Stopped_instance;
  var AnimationState_entriesInitialized;
  function AnimationState_initEntries() {
    if (AnimationState_entriesInitialized)
      return Unit_getInstance();
    AnimationState_entriesInitialized = true;
    AnimationState_Queued_instance = new AnimationState('Queued', 0);
    AnimationState_Playing_instance = new AnimationState('Playing', 1);
    AnimationState_Stopped_instance = new AnimationState('Stopped', 2);
  }
  function AnimationState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationState_Queued_getInstance() {
    AnimationState_initEntries();
    return AnimationState_Queued_instance;
  }
  function AnimationState_Playing_getInstance() {
    AnimationState_initEntries();
    return AnimationState_Playing_instance;
  }
  function AnimationState_Stopped_getInstance() {
    AnimationState_initEntries();
    return AnimationState_Stopped_instance;
  }
  function Clock() {
  }
  function AnimationEvent() {
  }
  function DefaultClock() {
  }
  DefaultClock.prototype.hr = function () {
    return numberToLong(window.performance.now() * 1000);
  };
  DefaultClock.prototype.ir = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = this.hr();
    tmp$ret$0 = tmp0_div.da(new Long(1000, 0));
    return tmp$ret$0;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-animatable.js.map
