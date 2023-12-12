(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './openrndr-openrndr-event.js', './openrndr-openrndr-animatable.js', './openrndr-openrndr-color.js', './kotlin-logging-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./openrndr-openrndr-event.js'), require('./openrndr-openrndr-animatable.js'), require('./openrndr-openrndr-color.js'), require('./kotlin-logging-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-application'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-application'.");
    }
    if (typeof this['openrndr-openrndr-event'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-application'. Its dependency 'openrndr-openrndr-event' was not found. Please, check whether 'openrndr-openrndr-event' is loaded prior to 'openrndr-openrndr-application'.");
    }
    if (typeof this['openrndr-openrndr-animatable'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-application'. Its dependency 'openrndr-openrndr-animatable' was not found. Please, check whether 'openrndr-openrndr-animatable' is loaded prior to 'openrndr-openrndr-application'.");
    }
    if (typeof this['openrndr-openrndr-color'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-application'. Its dependency 'openrndr-openrndr-color' was not found. Please, check whether 'openrndr-openrndr-color' is loaded prior to 'openrndr-openrndr-application'.");
    }
    if (typeof this['kotlin-logging-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-application'. Its dependency 'kotlin-logging-js-ir' was not found. Please, check whether 'kotlin-logging-js-ir' is loaded prior to 'openrndr-openrndr-application'.");
    }
    root['openrndr-openrndr-application'] = factory(typeof this['openrndr-openrndr-application'] === 'undefined' ? {} : this['openrndr-openrndr-application'], this['kotlin-kotlin-stdlib-js-ir'], this['openrndr-openrndr-event'], this['openrndr-openrndr-animatable'], this['openrndr-openrndr-color'], this['kotlin-logging-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_openrndr_openrndr_event, kotlin_org_openrndr_openrndr_animatable, kotlin_org_openrndr_openrndr_color, kotlin_io_github_microutils_kotlin_logging) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var Enum = kotlin_kotlin.$_$.u2;
  var classMeta = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.t;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var interfaceMeta = kotlin_kotlin.$_$.z1;
  var Event = kotlin_org_openrndr_openrndr_event.$_$.b;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var hashCode = kotlin_kotlin.$_$.y1;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var equals = kotlin_kotlin.$_$.u1;
  var toString = kotlin_kotlin.$_$.k2;
  var getStringHashCode = kotlin_kotlin.$_$.x1;
  var Animatable_init_$Create$ = kotlin_org_openrndr_openrndr_animatable.$_$.a;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.s;
  var lazy = kotlin_kotlin.$_$.c3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Companion_getInstance = kotlin_org_openrndr_openrndr_color.$_$.a;
  var Event_init_$Create$ = kotlin_org_openrndr_openrndr_event.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.e3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.d3;
  var Long = kotlin_kotlin.$_$.w2;
  var reversed = kotlin_kotlin.$_$.i1;
  var KProperty1 = kotlin_kotlin.$_$.n2;
  var getPropertyCallableRef = kotlin_kotlin.$_$.w1;
  var CoroutineImpl = kotlin_kotlin.$_$.p1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  var KotlinLogging_getInstance = kotlin_io_github_microutils_kotlin_logging.$_$.a;
  var emptyList = kotlin_kotlin.$_$.a1;
  var charSequenceLength = kotlin_kotlin.$_$.s1;
  var startsWith$default = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.q2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(PresentationMode, 'PresentationMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationBuilder, 'ApplicationBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Configuration, 'Configuration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WindowMultisample, 'WindowMultisample', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Disabled, 'Disabled', objectMeta, WindowMultisample, undefined, undefined, undefined, []);
  setMetadataFor(Fullscreen, 'Fullscreen', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(UnfocusBehaviour, 'UnfocusBehaviour', classMeta, Enum, undefined, undefined, undefined, []);
  function extend$default(stage, userDraw, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      stage = ExtensionStage_BEFORE_DRAW_getInstance();
    var tmp;
    if ($handler == null) {
      this.js(stage, userDraw);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(stage, userDraw);
    }
    return tmp;
  }
  setMetadataFor(ExtensionHost, 'ExtensionHost', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function beforeDraw(drawer, program) {
  }
  function afterDraw(drawer, program) {
  }
  setMetadataFor(Extension, 'Extension', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ExtensionStage, 'ExtensionStage', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Keyboard, 'Keyboard', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MouseButton, 'MouseButton', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(MouseEventType, 'MouseEventType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(KeyModifier, 'KeyModifier', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(KeyEvent, 'KeyEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KeyEventType, 'KeyEventType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(MouseCursorHideMode, 'MouseCursorHideMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(CursorType, 'CursorType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationMouse, 'ApplicationMouse', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MouseEvent, 'MouseEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pointers, 'Pointers', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Program, 'Program', interfaceMeta, undefined, [ExtensionHost], undefined, undefined, [0]);
  setMetadataFor(ProduceAssetsEvent, 'ProduceAssetsEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AssetMetadata, 'AssetMetadata', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationClipboard, 'ApplicationClipboard', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Window, 'Window', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ProgramImplementation$extend$functionExtension$1, undefined, classMeta, undefined, [Extension], undefined, undefined, []);
  setMetadataFor(ProgramImplementation$extend$functionExtension$2, undefined, classMeta, undefined, [Extension], undefined, undefined, []);
  setMetadataFor(ProgramImplementation$extend$functionExtension$3, undefined, classMeta, undefined, [Extension], undefined, undefined, []);
  setMetadataFor(ProgramImplementation, 'ProgramImplementation', classMeta, undefined, [Program], undefined, undefined, [0]);
  setMetadataFor(WindowEvent, 'WindowEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DropEvent, 'DropEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WindowEventType, 'WindowEventType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor($runAsyncCOROUTINE$0, '$runAsyncCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Application, 'Application', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(ApplicationBase, 'ApplicationBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationBuilderJS$program$1, undefined, classMeta, ProgramImplementation, undefined, undefined, undefined, [0]);
  setMetadataFor(ApplicationBuilderJS, 'ApplicationBuilderJS', classMeta, ApplicationBuilder, undefined, undefined, undefined, []);
  setMetadataFor($applicationAsyncCOROUTINE$1, '$applicationAsyncCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Dispatcher, 'Dispatcher', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  var PresentationMode_AUTOMATIC_instance;
  var PresentationMode_MANUAL_instance;
  var PresentationMode_entriesInitialized;
  function PresentationMode_initEntries() {
    if (PresentationMode_entriesInitialized)
      return Unit_getInstance();
    PresentationMode_entriesInitialized = true;
    PresentationMode_AUTOMATIC_instance = new PresentationMode('AUTOMATIC', 0);
    PresentationMode_MANUAL_instance = new PresentationMode('MANUAL', 1);
  }
  function PresentationMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PresentationMode_AUTOMATIC_getInstance() {
    PresentationMode_initEntries();
    return PresentationMode_AUTOMATIC_instance;
  }
  function ApplicationBuilder() {
  }
  function Configuration() {
    this.kr_1 = 'openrndr-canvas';
    this.lr_1 = 640;
    this.mr_1 = 480;
    this.nr_1 = 128;
    this.or_1 = 128;
    this.pr_1 = IntCompanionObject_getInstance().MAX_VALUE / 8 | 0;
    this.qr_1 = IntCompanionObject_getInstance().MAX_VALUE / 8 | 0;
    this.rr_1 = 'OPENRNDR';
    this.sr_1 = false;
    this.tr_1 = false;
    this.ur_1 = false;
    this.vr_1 = null;
    this.wr_1 = Fullscreen_DISABLED_getInstance();
    this.xr_1 = true;
    this.yr_1 = false;
    this.zr_1 = MouseCursorHideMode_HIDE_getInstance();
    this.as_1 = null;
    this.bs_1 = UnfocusBehaviour_NORMAL_getInstance();
    this.cs_1 = false;
    this.ds_1 = false;
    this.es_1 = true;
    this.fs_1 = false;
    this.gs_1 = Disabled_getInstance();
    this.hs_1 = true;
    this.is_1 = 10.0;
  }
  function Disabled() {
    Disabled_instance = this;
    WindowMultisample.call(this);
  }
  var Disabled_instance;
  function Disabled_getInstance() {
    if (Disabled_instance == null)
      new Disabled();
    return Disabled_instance;
  }
  function WindowMultisample() {
  }
  var Fullscreen_DISABLED_instance;
  var Fullscreen_CURRENT_DISPLAY_MODE_instance;
  var Fullscreen_SET_DISPLAY_MODE_instance;
  var Fullscreen_entriesInitialized;
  function Fullscreen_initEntries() {
    if (Fullscreen_entriesInitialized)
      return Unit_getInstance();
    Fullscreen_entriesInitialized = true;
    Fullscreen_DISABLED_instance = new Fullscreen('DISABLED', 0);
    Fullscreen_CURRENT_DISPLAY_MODE_instance = new Fullscreen('CURRENT_DISPLAY_MODE', 1);
    Fullscreen_SET_DISPLAY_MODE_instance = new Fullscreen('SET_DISPLAY_MODE', 2);
  }
  function Fullscreen(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var UnfocusBehaviour_NORMAL_instance;
  var UnfocusBehaviour_THROTTLE_instance;
  var UnfocusBehaviour_entriesInitialized;
  function UnfocusBehaviour_initEntries() {
    if (UnfocusBehaviour_entriesInitialized)
      return Unit_getInstance();
    UnfocusBehaviour_entriesInitialized = true;
    UnfocusBehaviour_NORMAL_instance = new UnfocusBehaviour('NORMAL', 0);
    UnfocusBehaviour_THROTTLE_instance = new UnfocusBehaviour('THROTTLE', 1);
  }
  function UnfocusBehaviour(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Fullscreen_DISABLED_getInstance() {
    Fullscreen_initEntries();
    return Fullscreen_DISABLED_instance;
  }
  function UnfocusBehaviour_NORMAL_getInstance() {
    UnfocusBehaviour_initEntries();
    return UnfocusBehaviour_NORMAL_instance;
  }
  function ExtensionHost() {
  }
  function Extension() {
  }
  var ExtensionStage_SETUP_instance;
  var ExtensionStage_BEFORE_DRAW_instance;
  var ExtensionStage_AFTER_DRAW_instance;
  var ExtensionStage_entriesInitialized;
  function ExtensionStage_initEntries() {
    if (ExtensionStage_entriesInitialized)
      return Unit_getInstance();
    ExtensionStage_entriesInitialized = true;
    ExtensionStage_SETUP_instance = new ExtensionStage('SETUP', 0);
    ExtensionStage_BEFORE_DRAW_instance = new ExtensionStage('BEFORE_DRAW', 1);
    ExtensionStage_AFTER_DRAW_instance = new ExtensionStage('AFTER_DRAW', 2);
  }
  function ExtensionStage(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ExtensionStage_BEFORE_DRAW_getInstance() {
    ExtensionStage_initEntries();
    return ExtensionStage_BEFORE_DRAW_instance;
  }
  function Keyboard() {
    this.os_1 = new Event('keyboard-key-down', true);
    this.ps_1 = new Event('keyboard-key-up', true);
    this.qs_1 = new Event('keyboard-key-repeat', true);
    this.rs_1 = new Event('keyboard-character', true);
  }
  Keyboard.prototype.ss = function () {
    return this.os_1;
  };
  Keyboard.prototype.ts = function () {
    return this.ps_1;
  };
  var MouseButton_LEFT_instance;
  var MouseButton_RIGHT_instance;
  var MouseButton_CENTER_instance;
  var MouseButton_NONE_instance;
  var MouseButton_entriesInitialized;
  function MouseButton_initEntries() {
    if (MouseButton_entriesInitialized)
      return Unit_getInstance();
    MouseButton_entriesInitialized = true;
    MouseButton_LEFT_instance = new MouseButton('LEFT', 0);
    MouseButton_RIGHT_instance = new MouseButton('RIGHT', 1);
    MouseButton_CENTER_instance = new MouseButton('CENTER', 2);
    MouseButton_NONE_instance = new MouseButton('NONE', 3);
  }
  function MouseButton(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var MouseEventType_MOVED_instance;
  var MouseEventType_DRAGGED_instance;
  var MouseEventType_CLICKED_instance;
  var MouseEventType_BUTTON_UP_instance;
  var MouseEventType_BUTTON_DOWN_instance;
  var MouseEventType_SCROLLED_instance;
  var MouseEventType_ENTERED_instance;
  var MouseEventType_EXITED_instance;
  var MouseEventType_entriesInitialized;
  function MouseEventType_initEntries() {
    if (MouseEventType_entriesInitialized)
      return Unit_getInstance();
    MouseEventType_entriesInitialized = true;
    MouseEventType_MOVED_instance = new MouseEventType('MOVED', 0);
    MouseEventType_DRAGGED_instance = new MouseEventType('DRAGGED', 1);
    MouseEventType_CLICKED_instance = new MouseEventType('CLICKED', 2);
    MouseEventType_BUTTON_UP_instance = new MouseEventType('BUTTON_UP', 3);
    MouseEventType_BUTTON_DOWN_instance = new MouseEventType('BUTTON_DOWN', 4);
    MouseEventType_SCROLLED_instance = new MouseEventType('SCROLLED', 5);
    MouseEventType_ENTERED_instance = new MouseEventType('ENTERED', 6);
    MouseEventType_EXITED_instance = new MouseEventType('EXITED', 7);
  }
  function MouseEventType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var KeyModifier_SHIFT_instance;
  var KeyModifier_CTRL_instance;
  var KeyModifier_ALT_instance;
  var KeyModifier_SUPER_instance;
  var KeyModifier_entriesInitialized;
  function KeyModifier_initEntries() {
    if (KeyModifier_entriesInitialized)
      return Unit_getInstance();
    KeyModifier_entriesInitialized = true;
    KeyModifier_SHIFT_instance = new KeyModifier('SHIFT', 0, 1);
    KeyModifier_CTRL_instance = new KeyModifier('CTRL', 1, 2);
    KeyModifier_ALT_instance = new KeyModifier('ALT', 2, 4);
    KeyModifier_SUPER_instance = new KeyModifier('SUPER', 3, 8);
  }
  function KeyModifier(name, ordinal, mask) {
    Enum.call(this, name, ordinal);
    this.ws_1 = mask;
  }
  function KeyEvent_init_$Init$(type, key, name, modifiers, propagationCancelled, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      propagationCancelled = false;
    KeyEvent.call($this, type, key, name, modifiers, propagationCancelled);
    return $this;
  }
  function KeyEvent_init_$Create$(type, key, name, modifiers, propagationCancelled, $mask0, $marker) {
    return KeyEvent_init_$Init$(type, key, name, modifiers, propagationCancelled, $mask0, $marker, Object.create(KeyEvent.prototype));
  }
  function KeyEvent(type, key, name, modifiers, propagationCancelled) {
    this.xs_1 = type;
    this.ys_1 = key;
    this.zs_1 = name;
    this.at_1 = modifiers;
    this.bt_1 = propagationCancelled;
  }
  var KeyEventType_KEY_DOWN_instance;
  var KeyEventType_KEY_UP_instance;
  var KeyEventType_KEY_REPEAT_instance;
  var KeyEventType_entriesInitialized;
  function KeyEventType_initEntries() {
    if (KeyEventType_entriesInitialized)
      return Unit_getInstance();
    KeyEventType_entriesInitialized = true;
    KeyEventType_KEY_DOWN_instance = new KeyEventType('KEY_DOWN', 0);
    KeyEventType_KEY_UP_instance = new KeyEventType('KEY_UP', 1);
    KeyEventType_KEY_REPEAT_instance = new KeyEventType('KEY_REPEAT', 2);
  }
  function KeyEventType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MouseButton_LEFT_getInstance() {
    MouseButton_initEntries();
    return MouseButton_LEFT_instance;
  }
  function MouseButton_RIGHT_getInstance() {
    MouseButton_initEntries();
    return MouseButton_RIGHT_instance;
  }
  function MouseButton_CENTER_getInstance() {
    MouseButton_initEntries();
    return MouseButton_CENTER_instance;
  }
  function MouseButton_NONE_getInstance() {
    MouseButton_initEntries();
    return MouseButton_NONE_instance;
  }
  function MouseEventType_MOVED_getInstance() {
    MouseEventType_initEntries();
    return MouseEventType_MOVED_instance;
  }
  function MouseEventType_BUTTON_UP_getInstance() {
    MouseEventType_initEntries();
    return MouseEventType_BUTTON_UP_instance;
  }
  function MouseEventType_BUTTON_DOWN_getInstance() {
    MouseEventType_initEntries();
    return MouseEventType_BUTTON_DOWN_instance;
  }
  function MouseEventType_SCROLLED_getInstance() {
    MouseEventType_initEntries();
    return MouseEventType_SCROLLED_instance;
  }
  function KeyModifier_SHIFT_getInstance() {
    KeyModifier_initEntries();
    return KeyModifier_SHIFT_instance;
  }
  function KeyModifier_CTRL_getInstance() {
    KeyModifier_initEntries();
    return KeyModifier_CTRL_instance;
  }
  function KeyModifier_ALT_getInstance() {
    KeyModifier_initEntries();
    return KeyModifier_ALT_instance;
  }
  function KeyModifier_SUPER_getInstance() {
    KeyModifier_initEntries();
    return KeyModifier_SUPER_instance;
  }
  function KeyEventType_KEY_DOWN_getInstance() {
    KeyEventType_initEntries();
    return KeyEventType_KEY_DOWN_instance;
  }
  function KeyEventType_KEY_UP_getInstance() {
    KeyEventType_initEntries();
    return KeyEventType_KEY_UP_instance;
  }
  var MouseCursorHideMode_HIDE_instance;
  var MouseCursorHideMode_DISABLE_instance;
  var MouseCursorHideMode_entriesInitialized;
  function MouseCursorHideMode_initEntries() {
    if (MouseCursorHideMode_entriesInitialized)
      return Unit_getInstance();
    MouseCursorHideMode_entriesInitialized = true;
    MouseCursorHideMode_HIDE_instance = new MouseCursorHideMode('HIDE', 0);
    MouseCursorHideMode_DISABLE_instance = new MouseCursorHideMode('DISABLE', 1);
  }
  function MouseCursorHideMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var CursorType_ARROW_CURSOR_instance;
  var CursorType_IBEAM_CURSOR_instance;
  var CursorType_CROSSHAIR_CURSOR_instance;
  var CursorType_HAND_CURSOR_instance;
  var CursorType_HRESIZE_CURSOR_instance;
  var CursorType_VRESIZE_CURSOR_instance;
  var CursorType_entriesInitialized;
  function CursorType_initEntries() {
    if (CursorType_entriesInitialized)
      return Unit_getInstance();
    CursorType_entriesInitialized = true;
    CursorType_ARROW_CURSOR_instance = new CursorType('ARROW_CURSOR', 0);
    CursorType_IBEAM_CURSOR_instance = new CursorType('IBEAM_CURSOR', 1);
    CursorType_CROSSHAIR_CURSOR_instance = new CursorType('CROSSHAIR_CURSOR', 2);
    CursorType_HAND_CURSOR_instance = new CursorType('HAND_CURSOR', 3);
    CursorType_HRESIZE_CURSOR_instance = new CursorType('HRESIZE_CURSOR', 4);
    CursorType_VRESIZE_CURSOR_instance = new CursorType('VRESIZE_CURSOR', 5);
  }
  function CursorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ApplicationMouse(application) {
    this.ct_1 = application;
    this.dt_1 = new Event('mouse-button-down', true);
    this.et_1 = new Event('mouse-button-up', true);
    this.ft_1 = new Event('mouse-dragged', true);
    this.gt_1 = new Event('mouse-moved', true);
    this.ht_1 = new Event('mouse-scrolled', true);
    this.it_1 = this.et_1;
    this.jt_1 = new Event('mouse-entered', true);
    this.kt_1 = new Event('mouse-exited', true);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.lt_1 = tmp$ret$0;
  }
  ApplicationMouse.prototype.mt = function () {
    return this.dt_1;
  };
  ApplicationMouse.prototype.nt = function () {
    return this.et_1;
  };
  ApplicationMouse.prototype.ot = function () {
    return this.ft_1;
  };
  ApplicationMouse.prototype.pt = function () {
    return this.gt_1;
  };
  ApplicationMouse.prototype.qt = function () {
    return this.ht_1;
  };
  function MouseEvent(position, rotation, dragDisplacement, type, button, modifiers) {
    this.rt_1 = position;
    this.st_1 = rotation;
    this.tt_1 = dragDisplacement;
    this.ut_1 = type;
    this.vt_1 = button;
    this.wt_1 = modifiers;
    this.xt_1 = false;
  }
  MouseEvent.prototype.toString = function () {
    return 'MouseEvent(position=' + this.rt_1 + ', rotation=' + this.st_1 + ', dragDisplacement=' + this.tt_1 + ', type=' + this.ut_1 + ', button=' + this.vt_1 + ', modifiers=' + this.wt_1 + ')';
  };
  MouseEvent.prototype.hashCode = function () {
    var result = this.rt_1.hashCode();
    result = imul(result, 31) + this.st_1.hashCode() | 0;
    result = imul(result, 31) + this.tt_1.hashCode() | 0;
    result = imul(result, 31) + this.ut_1.hashCode() | 0;
    result = imul(result, 31) + this.vt_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.wt_1) | 0;
    return result;
  };
  MouseEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MouseEvent))
      return false;
    var tmp0_other_with_cast = other instanceof MouseEvent ? other : THROW_CCE();
    if (!this.rt_1.equals(tmp0_other_with_cast.rt_1))
      return false;
    if (!this.st_1.equals(tmp0_other_with_cast.st_1))
      return false;
    if (!this.tt_1.equals(tmp0_other_with_cast.tt_1))
      return false;
    if (!this.ut_1.equals(tmp0_other_with_cast.ut_1))
      return false;
    if (!this.vt_1.equals(tmp0_other_with_cast.vt_1))
      return false;
    if (!equals(this.wt_1, tmp0_other_with_cast.wt_1))
      return false;
    return true;
  };
  function MouseCursorHideMode_HIDE_getInstance() {
    MouseCursorHideMode_initEntries();
    return MouseCursorHideMode_HIDE_instance;
  }
  function CursorType_ARROW_CURSOR_getInstance() {
    CursorType_initEntries();
    return CursorType_ARROW_CURSOR_instance;
  }
  function Pointers(application) {
    this.yt_1 = application;
  }
  function Program() {
  }
  function ProduceAssetsEvent(origin, program, assetMetadata) {
    this.mu_1 = origin;
    this.nu_1 = program;
    this.ou_1 = assetMetadata;
  }
  ProduceAssetsEvent.prototype.toString = function () {
    return 'ProduceAssetsEvent(origin=' + toString(this.mu_1) + ', program=' + this.nu_1 + ', assetMetadata=' + this.ou_1 + ')';
  };
  ProduceAssetsEvent.prototype.hashCode = function () {
    var result = hashCode(this.mu_1);
    result = imul(result, 31) + hashCode(this.nu_1) | 0;
    result = imul(result, 31) + this.ou_1.hashCode() | 0;
    return result;
  };
  ProduceAssetsEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProduceAssetsEvent))
      return false;
    var tmp0_other_with_cast = other instanceof ProduceAssetsEvent ? other : THROW_CCE();
    if (!equals(this.mu_1, tmp0_other_with_cast.mu_1))
      return false;
    if (!equals(this.nu_1, tmp0_other_with_cast.nu_1))
      return false;
    if (!this.ou_1.equals(tmp0_other_with_cast.ou_1))
      return false;
    return true;
  };
  function AssetMetadata(programName, assetBaseName, assetProperties) {
    this.pu_1 = programName;
    this.qu_1 = assetBaseName;
    this.ru_1 = assetProperties;
  }
  AssetMetadata.prototype.toString = function () {
    return 'AssetMetadata(programName=' + this.pu_1 + ', assetBaseName=' + this.qu_1 + ', assetProperties=' + this.ru_1 + ')';
  };
  AssetMetadata.prototype.hashCode = function () {
    var result = getStringHashCode(this.pu_1);
    result = imul(result, 31) + getStringHashCode(this.qu_1) | 0;
    result = imul(result, 31) + hashCode(this.ru_1) | 0;
    return result;
  };
  AssetMetadata.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssetMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof AssetMetadata ? other : THROW_CCE();
    if (!(this.pu_1 === tmp0_other_with_cast.pu_1))
      return false;
    if (!(this.qu_1 === tmp0_other_with_cast.qu_1))
      return false;
    if (!equals(this.ru_1, tmp0_other_with_cast.ru_1))
      return false;
    return true;
  };
  function ProgramImplementation_init_$Init$(suspend, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      suspend = false;
    ProgramImplementation.call($this, suspend);
    return $this;
  }
  function ProgramImplementation_init_$Create$(suspend, $mask0, $marker) {
    return ProgramImplementation_init_$Init$(suspend, $mask0, $marker, Object.create(ProgramImplementation.prototype));
  }
  function _get_animator__s0xiyk($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = animator$factory();
    tmp$ret$0 = $this.yu_1.c1();
    return tmp$ret$0;
  }
  function ApplicationClipboard($outer) {
    this.vv_1 = $outer;
  }
  function Window($outer) {
    this.ew_1 = $outer;
    this.wv_1 = new Event('window-focused', true);
    this.xv_1 = new Event('window-unfocused', true);
    this.yv_1 = new Event('window-moved', true);
    this.zv_1 = new Event('window-sized', true);
    this.aw_1 = new Event('window-minimized', true);
    this.bw_1 = new Event('window-restored', true);
    this.cw_1 = new Event('window-closed', true);
    this.dw_1 = new Event('window-drop', true);
  }
  Window.prototype.fw = function () {
    return this.ew_1.gw().hw();
  };
  Window.prototype.c = function () {
    return this.ew_1.gw().iw();
  };
  Window.prototype.bk = function () {
    return this.ew_1.gw().jw();
  };
  Window.prototype.kw = function () {
    return this.zv_1;
  };
  Window.prototype.lw = function () {
    return this.dw_1;
  };
  function ProgramImplementation$program$delegate$lambda(this$0) {
    return function () {
      return this$0;
    };
  }
  function ProgramImplementation$animator$delegate$lambda() {
    return Animatable_init_$Create$();
  }
  function ProgramImplementation$clock$lambda(this$0) {
    return function () {
      var tmp;
      var tmp_0;
      var tmp_1 = this$0.fv_1;
      DoubleCompanionObject_getInstance();
      if (tmp_1 === Infinity) {
        tmp_0 = true;
      } else {
        tmp_0 = this$0.mw() <= 0;
      }
      if (tmp_0) {
        tmp = 0.0;
      } else {
        tmp = this$0.gw().ju() - this$0.fv_1;
      }
      return tmp;
    };
  }
  function ProgramImplementation$assetMetadata$lambda(this$0) {
    return function () {
      var tmp = this$0.zt();
      return new AssetMetadata(tmp, namedTimestamp$default(this$0, null, null, 3, null), this$0.nw());
    };
  }
  function ProgramImplementation$lambda(this$0) {
    return function (it) {
      this$0.ow().zf(new ProduceAssetsEvent(it.pw_1, it.qw_1, this$0.rw()()));
      return Unit_getInstance();
    };
  }
  function ProgramImplementation$extend$functionExtension$1($userDraw) {
    this.tw_1 = $userDraw;
    this.sw_1 = true;
  }
  ProgramImplementation$extend$functionExtension$1.prototype.ls = function () {
    return this.sw_1;
  };
  function ProgramImplementation$extend$functionExtension$2($userDraw) {
    this.vw_1 = $userDraw;
    this.uw_1 = true;
  }
  ProgramImplementation$extend$functionExtension$2.prototype.ls = function () {
    return this.uw_1;
  };
  ProgramImplementation$extend$functionExtension$2.prototype.ms = function (drawer, program) {
    program.cu(true);
    this.vw_1(program);
  };
  function ProgramImplementation$extend$functionExtension$3($userDraw) {
    this.xw_1 = $userDraw;
    this.ww_1 = true;
  }
  ProgramImplementation$extend$functionExtension$3.prototype.ls = function () {
    return this.ww_1;
  };
  ProgramImplementation$extend$functionExtension$3.prototype.ns = function (drawer, program) {
    program.cu(true);
    this.xw_1(program);
  };
  function ProgramImplementation$keyboard$delegate$lambda() {
    return new Keyboard();
  }
  function ProgramImplementation$mouse$delegate$lambda$lambda(this$0) {
    return function () {
      return this$0.gw();
    };
  }
  function ProgramImplementation$mouse$delegate$lambda(this$0) {
    return function () {
      return new ApplicationMouse(ProgramImplementation$mouse$delegate$lambda$lambda(this$0));
    };
  }
  function ProgramImplementation$pointers$delegate$lambda$lambda(this$0) {
    return function () {
      return this$0.gw();
    };
  }
  function ProgramImplementation$pointers$delegate$lambda(this$0) {
    return function () {
      return new Pointers(ProgramImplementation$pointers$delegate$lambda$lambda(this$0));
    };
  }
  function ProgramImplementation(suspend) {
    this.su_1 = suspend;
    this.tu_1 = 0;
    this.uu_1 = 0;
    var tmp = this;
    tmp.vu_1 = lazy(ProgramImplementation$program$delegate$lambda(this));
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp_0.wu_1 = tmp$ret$0;
    this.xu_1 = rootClassName();
    var tmp_1 = this;
    tmp_1.yu_1 = lazy(ProgramImplementation$animator$delegate$lambda);
    this.bv_1 = false;
    this.cv_1 = Companion_getInstance().ze_1;
    this.dv_1 = new Dispatcher();
    var tmp_2 = this;
    tmp_2.ev_1 = Event_init_$Create$(null, false, 3, null);
    var tmp_3 = this;
    DoubleCompanionObject_getInstance();
    tmp_3.fv_1 = Infinity;
    var tmp_4 = this;
    tmp_4.gv_1 = ProgramImplementation$clock$lambda(this);
    var tmp_5 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_5.hv_1 = tmp$ret$1;
    var tmp_6 = this;
    tmp_6.iv_1 = ProgramImplementation$assetMetadata$lambda(this);
    var tmp_7 = this;
    tmp_7.jv_1 = Event_init_$Create$(null, false, 3, null);
    var tmp_8 = this;
    tmp_8.kv_1 = Event_init_$Create$(null, false, 3, null);
    var tmp_9 = this.yw();
    tmp_9.bg(ProgramImplementation$lambda(this));
    this.lv_1 = 0.0;
    this.mv_1 = 0.0;
    this.nv_1 = -1.0;
    this.ov_1 = 0;
    this.pv_1 = new ApplicationClipboard(this);
    var tmp_10 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_10.qv_1 = tmp$ret$2;
    this.rv_1 = new Window(this);
    var tmp_11 = this;
    tmp_11.sv_1 = lazy(ProgramImplementation$keyboard$delegate$lambda);
    var tmp_12 = this;
    tmp_12.tv_1 = lazy(ProgramImplementation$mouse$delegate$lambda(this));
    var tmp_13 = this;
    tmp_13.uv_1 = lazy(ProgramImplementation$pointers$delegate$lambda(this));
  }
  ProgramImplementation.prototype.au = function (_set____db54di) {
    this.tu_1 = _set____db54di;
  };
  ProgramImplementation.prototype.xj = function () {
    return this.tu_1;
  };
  ProgramImplementation.prototype.bu = function (_set____db54di) {
    this.uu_1 = _set____db54di;
  };
  ProgramImplementation.prototype.yj = function () {
    return this.uu_1;
  };
  ProgramImplementation.prototype.zt = function () {
    return this.xu_1;
  };
  ProgramImplementation.prototype.du = function (_set____db54di) {
    this.zu_1 = _set____db54di;
  };
  ProgramImplementation.prototype.eu = function () {
    var tmp = this.zu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('drawer');
    }
  };
  ProgramImplementation.prototype.gu = function (_set____db54di) {
    this.av_1 = _set____db54di;
  };
  ProgramImplementation.prototype.gw = function () {
    var tmp = this.av_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('application');
    }
  };
  ProgramImplementation.prototype.cu = function (_set____db54di) {
    this.bv_1 = _set____db54di;
  };
  ProgramImplementation.prototype.zw = function () {
    return this.bv_1;
  };
  ProgramImplementation.prototype.ax = function () {
    return this.cv_1;
  };
  ProgramImplementation.prototype.bx = function () {
    return this.gv_1;
  };
  ProgramImplementation.prototype.nw = function () {
    return this.hv_1;
  };
  ProgramImplementation.prototype.rw = function () {
    return this.iv_1;
  };
  ProgramImplementation.prototype.yw = function () {
    return this.jv_1;
  };
  ProgramImplementation.prototype.ow = function () {
    return this.kv_1;
  };
  ProgramImplementation.prototype.cx = function (_set____db54di) {
    this.ov_1 = _set____db54di;
  };
  ProgramImplementation.prototype.mw = function () {
    return this.ov_1;
  };
  ProgramImplementation.prototype.ju = function () {
    return this.lv_1;
  };
  ProgramImplementation.prototype.dx = function () {
    if (this.qv_1.q()) {
      this.cu(false);
    }
    return this.qv_1;
  };
  ProgramImplementation.prototype.js = function (stage, userDraw) {
    if (this.zw()) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot nest extend blocks within extend blocks');
    }
    var tmp0_subject = stage;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = new ProgramImplementation$extend$functionExtension$1(userDraw);
        break;
      case 1:
        tmp = new ProgramImplementation$extend$functionExtension$2(userDraw);
        break;
      case 2:
        tmp = new ProgramImplementation$extend$functionExtension$3(userDraw);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var functionExtension = tmp;
    this.dx().a(functionExtension);
  };
  ProgramImplementation.prototype.fu = function () {
    return this.rv_1;
  };
  ProgramImplementation.prototype.lu = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyboard$factory();
    tmp$ret$0 = this.sv_1.c1();
    return tmp$ret$0;
  };
  ProgramImplementation.prototype.ku = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = mouse$factory();
    tmp$ret$0 = this.tv_1.c1();
    return tmp$ret$0;
  };
  ProgramImplementation.prototype.hu = function ($cont) {
    return Unit_getInstance();
  };
  ProgramImplementation.prototype.iu = function () {
    if (this.mw() === 0) {
      this.fv_1 = this.gw().ju();
    }
    var tmp = _get_animator__s0xiyk(this);
    tmp.gr(new Long(0, 0), 1, null);
    this.lv_1 = this.bx()();
    if (this.nv_1 === -1.0)
      this.nv_1 = this.ju();
    this.mv_1 = this.lv_1 - this.nv_1;
    this.nv_1 = this.lv_1;
    var tmp0_safe_receiver = this.ax();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.eu().gk(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.dx();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp$ret$1;
      // Inline function 'org.openrndr.ProgramImplementation.drawImpl.<anonymous>' call
      tmp$ret$1 = element.ls();
      if (tmp$ret$1) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp1_forEach = tmp$ret$3;
    var tmp0_iterator_0 = tmp1_forEach.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'org.openrndr.ProgramImplementation.drawImpl.<anonymous>' call
      element_0.ms(this.eu(), this);
    }
    this.ex();
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.filter' call
    var tmp2_filter = reversed(this.dx());
    var tmp$ret$5;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = tmp2_filter.h();
    while (tmp0_iterator_1.i()) {
      var element_1 = tmp0_iterator_1.j();
      var tmp$ret$4;
      // Inline function 'org.openrndr.ProgramImplementation.drawImpl.<anonymous>' call
      tmp$ret$4 = element_1.ls();
      if (tmp$ret$4) {
        tmp0_filterTo_0.a(element_1);
      }
    }
    tmp$ret$5 = tmp0_filterTo_0;
    tmp$ret$6 = tmp$ret$5;
    var tmp3_forEach = tmp$ret$6;
    var tmp0_iterator_2 = tmp3_forEach.h();
    while (tmp0_iterator_2.i()) {
      var element_2 = tmp0_iterator_2.j();
      // Inline function 'org.openrndr.ProgramImplementation.drawImpl.<anonymous>' call
      element_2.ns(this.eu(), this);
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.mw();
    tmp1_this.cx(tmp2 + 1 | 0);
  };
  ProgramImplementation.prototype.ex = function () {
  };
  function WindowEvent(type, position, size, focused) {
    this.fx_1 = type;
    this.gx_1 = position;
    this.hx_1 = size;
    this.ix_1 = focused;
  }
  WindowEvent.prototype.toString = function () {
    return 'WindowEvent(type=' + this.fx_1 + ', position=' + this.gx_1 + ', size=' + this.hx_1 + ', focused=' + this.ix_1 + ')';
  };
  WindowEvent.prototype.hashCode = function () {
    var result = this.fx_1.hashCode();
    result = imul(result, 31) + this.gx_1.hashCode() | 0;
    result = imul(result, 31) + this.hx_1.hashCode() | 0;
    result = imul(result, 31) + (this.ix_1 | 0) | 0;
    return result;
  };
  WindowEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WindowEvent))
      return false;
    var tmp0_other_with_cast = other instanceof WindowEvent ? other : THROW_CCE();
    if (!this.fx_1.equals(tmp0_other_with_cast.fx_1))
      return false;
    if (!this.gx_1.equals(tmp0_other_with_cast.gx_1))
      return false;
    if (!this.hx_1.equals(tmp0_other_with_cast.hx_1))
      return false;
    if (!(this.ix_1 === tmp0_other_with_cast.ix_1))
      return false;
    return true;
  };
  function DropEvent(position, files) {
    this.jx_1 = position;
    this.kx_1 = files;
  }
  DropEvent.prototype.toString = function () {
    return 'DropEvent(position=' + this.jx_1 + ', files=' + this.kx_1 + ')';
  };
  DropEvent.prototype.hashCode = function () {
    var result = this.jx_1.hashCode();
    result = imul(result, 31) + hashCode(this.kx_1) | 0;
    return result;
  };
  DropEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DropEvent))
      return false;
    var tmp0_other_with_cast = other instanceof DropEvent ? other : THROW_CCE();
    if (!this.jx_1.equals(tmp0_other_with_cast.jx_1))
      return false;
    if (!equals(this.kx_1, tmp0_other_with_cast.kx_1))
      return false;
    return true;
  };
  var WindowEventType_MOVED_instance;
  var WindowEventType_RESIZED_instance;
  var WindowEventType_FOCUSED_instance;
  var WindowEventType_UNFOCUSED_instance;
  var WindowEventType_MINIMIZED_instance;
  var WindowEventType_RESTORED_instance;
  var WindowEventType_CLOSED_instance;
  var WindowEventType_entriesInitialized;
  function WindowEventType_initEntries() {
    if (WindowEventType_entriesInitialized)
      return Unit_getInstance();
    WindowEventType_entriesInitialized = true;
    WindowEventType_MOVED_instance = new WindowEventType('MOVED', 0);
    WindowEventType_RESIZED_instance = new WindowEventType('RESIZED', 1);
    WindowEventType_FOCUSED_instance = new WindowEventType('FOCUSED', 2);
    WindowEventType_UNFOCUSED_instance = new WindowEventType('UNFOCUSED', 3);
    WindowEventType_MINIMIZED_instance = new WindowEventType('MINIMIZED', 4);
    WindowEventType_RESTORED_instance = new WindowEventType('RESTORED', 5);
    WindowEventType_CLOSED_instance = new WindowEventType('CLOSED', 6);
  }
  function WindowEventType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WindowEventType_RESIZED_getInstance() {
    WindowEventType_initEntries();
    return WindowEventType_RESIZED_instance;
  }
  function animator$factory() {
    return getPropertyCallableRef('animator', 1, KProperty1, function (receiver) {
      return _get_animator__s0xiyk(receiver);
    }, null);
  }
  function keyboard$factory() {
    return getPropertyCallableRef('keyboard', 1, KProperty1, function (receiver) {
      return receiver.lu();
    }, null);
  }
  function mouse$factory() {
    return getPropertyCallableRef('mouse', 1, KProperty1, function (receiver) {
      return receiver.ku();
    }, null);
  }
  var logger;
  function set_applicationBaseFunc(_set____db54di) {
    init_properties_Application_kt_99me1o();
    applicationBaseFunc = _set____db54di;
  }
  function get_applicationBaseFunc() {
    init_properties_Application_kt_99me1o();
    return applicationBaseFunc;
  }
  var applicationBaseFunc;
  function $runAsyncCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tx_1 = _this__u8e3s4;
  }
  $runAsyncCOROUTINE$0.prototype.ux = function () {
    var suspendResult = this.ma_1;
    $sm: do
      try {
        var tmp = this.ka_1;
        switch (tmp) {
          case 0:
            this.la_1 = 2;
            this.ka_1 = 1;
            suspendResult = this.tx_1.hu(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tx_1.vx();
            return Unit_getInstance();
          case 2:
            throw this.na_1;
        }
      } catch ($p) {
        if (this.la_1 === 2) {
          throw $p;
        } else {
          this.ka_1 = this.la_1;
          this.na_1 = $p;
        }
      }
     while (true);
  };
  function Application() {
  }
  Application.prototype.wx = function ($cont) {
    var tmp = new $runAsyncCOROUTINE$0(this, $cont);
    tmp.ma_1 = Unit_getInstance();
    tmp.na_1 = null;
    return tmp.ux();
  };
  function logger$lambda() {
    init_properties_Application_kt_99me1o();
    return Unit_getInstance();
  }
  var properties_initialized_Application_kt_iz0zwg;
  function init_properties_Application_kt_99me1o() {
    if (properties_initialized_Application_kt_iz0zwg) {
    } else {
      properties_initialized_Application_kt_iz0zwg = true;
      var tmp = KotlinLogging_getInstance();
      logger = tmp.wa(logger$lambda);
      applicationBaseFunc = null;
    }
  }
  function ApplicationBase() {
  }
  function applicationAsync(build, $cont) {
    var tmp = new $applicationAsyncCOROUTINE$1(build, $cont);
    tmp.ma_1 = Unit_getInstance();
    tmp.na_1 = null;
    return tmp.ux();
  }
  function ApplicationBuilderJS$program$1($init) {
    this.lz_1 = $init;
    ProgramImplementation_init_$Init$(false, 1, null, this);
  }
  ApplicationBuilderJS$program$1.prototype.hu = function ($cont) {
    return this.lz_1(this, $cont);
  };
  function ApplicationBuilderJS() {
    ApplicationBuilder.call(this);
    this.mz_1 = new Configuration();
    var tmp = this;
    tmp.nz_1 = ProgramImplementation_init_$Create$(false, 1, null);
    var tmp_0 = this;
    var tmp0_safe_receiver = get_applicationBaseFunc();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('applicationFunc not set');
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    tmp_0.oz_1 = tmp_1;
    this.pz_1 = emptyList();
  }
  ApplicationBuilderJS.prototype.jr = function (init) {
    var tmp = this;
    tmp.nz_1 = new ApplicationBuilderJS$program$1(init);
    return this.nz_1;
  };
  function $applicationAsyncCOROUTINE$1(build, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gy_1 = build;
  }
  $applicationAsyncCOROUTINE$1.prototype.ux = function () {
    var suspendResult = this.ma_1;
    $sm: do
      try {
        var tmp = this.ka_1;
        switch (tmp) {
          case 0:
            this.la_1 = 2;
            var tmp_0 = this;
            tmp_0.hy_1 = new ApplicationBuilderJS();
            this.gy_1(this.hy_1);
            this.ka_1 = 1;
            suspendResult = this.hy_1.oz_1.xx(this.hy_1.nz_1, this.hy_1.mz_1).wx(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.na_1;
        }
      } catch ($p) {
        if (this.la_1 === 2) {
          throw $p;
        } else {
          this.ka_1 = this.la_1;
          this.na_1 = $p;
        }
      }
     while (true);
  };
  function Dispatcher() {
  }
  function rootClassName() {
    return 'unknown';
  }
  function namedTimestamp(_this__u8e3s4, extension, path) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(extension) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      if (startsWith$default(extension, '.', false, 2, null)) {
        tmp = extension;
      } else {
        tmp = '.' + extension;
      }
    }
    var ext = tmp;
    var tmp$ret$4;
    // Inline function 'kotlin.text.ifBlank' call
    var tmp0_ifBlank = _this__u8e3s4.zt();
    var tmp_0;
    if (isBlank(tmp0_ifBlank)) {
      var tmp$ret$3;
      // Inline function 'org.openrndr.namedTimestamp.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.ifBlank' call
      var tmp0_ifBlank_0 = _this__u8e3s4.fu().fw();
      var tmp_1;
      if (isBlank(tmp0_ifBlank_0)) {
        var tmp$ret$1;
        // Inline function 'org.openrndr.namedTimestamp.<anonymous>.<anonymous>' call
        tmp$ret$1 = 'untitled';
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = tmp0_ifBlank_0;
      }
      tmp$ret$2 = tmp_1;
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    } else {
      tmp_0 = tmp0_ifBlank;
    }
    tmp$ret$4 = tmp_0;
    var basename = tmp$ret$4;
    return '' + path + basename + ext;
  }
  function namedTimestamp$default(_this__u8e3s4, extension, path, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      extension = '';
    if (!(($mask0 & 2) === 0))
      path = null;
    return namedTimestamp(_this__u8e3s4, extension, path);
  }
  //region block: post-declaration
  ProgramImplementation$extend$functionExtension$1.prototype.ms = beforeDraw;
  ProgramImplementation$extend$functionExtension$1.prototype.ns = afterDraw;
  ProgramImplementation$extend$functionExtension$2.prototype.ns = afterDraw;
  ProgramImplementation$extend$functionExtension$3.prototype.ms = beforeDraw;
  ProgramImplementation.prototype.ks = extend$default;
  ApplicationBuilderJS$program$1.prototype.ks = extend$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CursorType_ARROW_CURSOR_getInstance;
  _.$_$.b = KeyEventType_KEY_DOWN_getInstance;
  _.$_$.c = KeyEventType_KEY_UP_getInstance;
  _.$_$.d = KeyModifier_ALT_getInstance;
  _.$_$.e = KeyModifier_CTRL_getInstance;
  _.$_$.f = KeyModifier_SHIFT_getInstance;
  _.$_$.g = KeyModifier_SUPER_getInstance;
  _.$_$.h = MouseButton_CENTER_getInstance;
  _.$_$.i = MouseButton_LEFT_getInstance;
  _.$_$.j = MouseButton_NONE_getInstance;
  _.$_$.k = MouseButton_RIGHT_getInstance;
  _.$_$.l = MouseEventType_BUTTON_DOWN_getInstance;
  _.$_$.m = MouseEventType_BUTTON_UP_getInstance;
  _.$_$.n = MouseEventType_MOVED_getInstance;
  _.$_$.o = MouseEventType_SCROLLED_getInstance;
  _.$_$.p = PresentationMode_AUTOMATIC_getInstance;
  _.$_$.q = WindowEventType_RESIZED_getInstance;
  _.$_$.r = applicationAsync;
  _.$_$.s = KeyEvent_init_$Create$;
  _.$_$.t = ApplicationBase;
  _.$_$.u = Application;
  _.$_$.v = DropEvent;
  _.$_$.w = MouseEvent;
  _.$_$.x = Program;
  _.$_$.y = WindowEvent;
  _.$_$.z = set_applicationBaseFunc;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-application.js.map
