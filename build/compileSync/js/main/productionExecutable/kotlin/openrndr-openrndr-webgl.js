(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './openrndr-openrndr-application.js', './kotlin-kotlin-stdlib-js-ir.js', './openrndr-openrndr-math.js', './openrndr-openrndr-draw.js', './openrndr-openrndr-utils.js', './openrndr-openrndr-color.js', './kotlin-logging-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./openrndr-openrndr-application.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./openrndr-openrndr-math.js'), require('./openrndr-openrndr-draw.js'), require('./openrndr-openrndr-utils.js'), require('./openrndr-openrndr-color.js'), require('./kotlin-logging-js-ir.js'));
  else {
    if (typeof this['openrndr-openrndr-application'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'openrndr-openrndr-application' was not found. Please, check whether 'openrndr-openrndr-application' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['openrndr-openrndr-math'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'openrndr-openrndr-math' was not found. Please, check whether 'openrndr-openrndr-math' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['openrndr-openrndr-draw'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'openrndr-openrndr-draw' was not found. Please, check whether 'openrndr-openrndr-draw' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['openrndr-openrndr-utils'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'openrndr-openrndr-utils' was not found. Please, check whether 'openrndr-openrndr-utils' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['openrndr-openrndr-color'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'openrndr-openrndr-color' was not found. Please, check whether 'openrndr-openrndr-color' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    if (typeof this['kotlin-logging-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-webgl'. Its dependency 'kotlin-logging-js-ir' was not found. Please, check whether 'kotlin-logging-js-ir' is loaded prior to 'openrndr-openrndr-webgl'.");
    }
    root['openrndr-openrndr-webgl'] = factory(typeof this['openrndr-openrndr-webgl'] === 'undefined' ? {} : this['openrndr-openrndr-webgl'], this['openrndr-openrndr-application'], this['kotlin-kotlin-stdlib-js-ir'], this['openrndr-openrndr-math'], this['openrndr-openrndr-draw'], this['openrndr-openrndr-utils'], this['openrndr-openrndr-color'], this['kotlin-logging-js-ir']);
  }
}(this, function (_, kotlin_org_openrndr_openrndr_application, kotlin_kotlin, kotlin_org_openrndr_openrndr_math, kotlin_org_openrndr_openrndr_draw, kotlin_org_openrndr_openrndr_utils, kotlin_org_openrndr_openrndr_color, kotlin_io_github_microutils_kotlin_logging) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ApplicationBase = kotlin_org_openrndr_openrndr_application.$_$.t;
  var classMeta = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var set_applicationBaseFunc = kotlin_org_openrndr_openrndr_application.$_$.z;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var KeyModifier_CTRL_getInstance = kotlin_org_openrndr_openrndr_application.$_$.e;
  var KeyModifier_ALT_getInstance = kotlin_org_openrndr_openrndr_application.$_$.d;
  var KeyModifier_SUPER_getInstance = kotlin_org_openrndr_openrndr_application.$_$.g;
  var KeyModifier_SHIFT_getInstance = kotlin_org_openrndr_openrndr_application.$_$.f;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p;
  var numberToInt = kotlin_kotlin.$_$.f2;
  var WindowEventType_RESIZED_getInstance = kotlin_org_openrndr_openrndr_application.$_$.q;
  var Vector2 = kotlin_org_openrndr_openrndr_math.$_$.k;
  var WindowEvent = kotlin_org_openrndr_openrndr_application.$_$.y;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var KeyEventType_KEY_DOWN_getInstance = kotlin_org_openrndr_openrndr_application.$_$.b;
  var KeyEvent_init_$Create$ = kotlin_org_openrndr_openrndr_application.$_$.s;
  var KeyEventType_KEY_UP_getInstance = kotlin_org_openrndr_openrndr_application.$_$.c;
  var Companion_getInstance = kotlin_org_openrndr_openrndr_math.$_$.d;
  var MouseEventType_BUTTON_DOWN_getInstance = kotlin_org_openrndr_openrndr_application.$_$.l;
  var MouseButton_LEFT_getInstance = kotlin_org_openrndr_openrndr_application.$_$.i;
  var MouseButton_RIGHT_getInstance = kotlin_org_openrndr_openrndr_application.$_$.k;
  var MouseButton_CENTER_getInstance = kotlin_org_openrndr_openrndr_application.$_$.h;
  var emptySet = kotlin_kotlin.$_$.b1;
  var MouseEvent_0 = kotlin_org_openrndr_openrndr_application.$_$.w;
  var MouseEventType_BUTTON_UP_getInstance = kotlin_org_openrndr_openrndr_application.$_$.m;
  var MouseEventType_SCROLLED_getInstance = kotlin_org_openrndr_openrndr_application.$_$.o;
  var MouseButton_NONE_getInstance = kotlin_org_openrndr_openrndr_application.$_$.j;
  var MouseEventType_MOVED_getInstance = kotlin_org_openrndr_openrndr_application.$_$.n;
  var println = kotlin_kotlin.$_$.q1;
  var toList = kotlin_kotlin.$_$.l1;
  var DropEvent = kotlin_org_openrndr_openrndr_application.$_$.v;
  var asList = kotlin_kotlin.$_$.g3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var copyToArray = kotlin_kotlin.$_$.z;
  var Application = kotlin_org_openrndr_openrndr_application.$_$.u;
  var CursorType_ARROW_CURSOR_getInstance = kotlin_org_openrndr_openrndr_application.$_$.a;
  var PresentationMode_AUTOMATIC_getInstance = kotlin_org_openrndr_openrndr_application.$_$.p;
  var toString = kotlin_kotlin.$_$.k2;
  var Companion_getInstance_0 = kotlin_org_openrndr_openrndr_draw.$_$.d1;
  var Drawer = kotlin_org_openrndr_openrndr_draw.$_$.n1;
  var BufferWriter = kotlin_org_openrndr_openrndr_draw.$_$.h1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.d3;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q;
  var toTypedArray = kotlin_kotlin.$_$.m1;
  var isObject = kotlin_kotlin.$_$.e2;
  var lazy = kotlin_kotlin.$_$.c3;
  var VertexElementType_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.o;
  var VertexElementType_VECTOR2_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.r;
  var VertexElementType_VECTOR3_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.s;
  var VertexElementType_VECTOR4_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.t;
  var setOf = kotlin_kotlin.$_$.j1;
  var NotImplementedError = kotlin_kotlin.$_$.x2;
  var VertexElementType_MATRIX33_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.p;
  var VertexElementType_MATRIX44_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.q;
  var DrawStyle_init_$Create$ = kotlin_org_openrndr_openrndr_draw.$_$.w;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var hashCode = kotlin_kotlin.$_$.y1;
  var toLong = kotlin_kotlin.$_$.j2;
  var createShadeStyleManager$default = kotlin_org_openrndr_openrndr_draw.$_$.v;
  var Companion_getInstance_1 = kotlin_org_openrndr_openrndr_draw.$_$.z;
  var equals = kotlin_kotlin.$_$.u1;
  var StencilTest_DISABLED_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.n;
  var Driver = kotlin_org_openrndr_openrndr_draw.$_$.y1;
  var KProperty1 = kotlin_kotlin.$_$.n2;
  var getPropertyCallableRef = kotlin_kotlin.$_$.w1;
  var split$default = kotlin_kotlin.$_$.d;
  var checkIndexOverflow = kotlin_kotlin.$_$.x;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var Disabled_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.y;
  var Companion_getInstance_2 = kotlin_org_openrndr_openrndr_draw.$_$.a1;
  var get_effectiveWidth = kotlin_org_openrndr_openrndr_draw.$_$.r1;
  var get_effectiveHeight = kotlin_org_openrndr_openrndr_draw.$_$.q1;
  var RenderTarget = kotlin_org_openrndr_openrndr_draw.$_$.s1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var push = kotlin_org_openrndr_openrndr_utils.$_$.a;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.g;
  var LinkedHashMap = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Init$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var ShadeStructure_init_$Create$ = kotlin_org_openrndr_openrndr_draw.$_$.x;
  var joinToString$default = kotlin_kotlin.$_$.b;
  var addAll = kotlin_kotlin.$_$.w;
  var getOrNull = kotlin_kotlin.$_$.d1;
  var take = kotlin_kotlin.$_$.r2;
  var drop = kotlin_kotlin.$_$.p2;
  var valueOf = kotlin_org_openrndr_openrndr_draw.$_$.j1;
  var valueOf_0 = kotlin_org_openrndr_openrndr_draw.$_$.k1;
  var valueOf_1 = kotlin_org_openrndr_openrndr_draw.$_$.o1;
  var Pair = kotlin_kotlin.$_$.y2;
  var ColorFormat_RGBa_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.a;
  var ColorType_FLOAT32_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.e;
  var ColorType_FLOAT16_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.d;
  var ColorType_SINT16_INT_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.f;
  var ColorType_UINT16_INT_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.h;
  var ColorType_UINT16_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.i;
  var ColorType_SINT8_INT_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.g;
  var ColorType_UINT8_INT_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.j;
  var ColorType_UINT8_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.k;
  var ColorFormat_RG_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.b;
  var ColorFormat_R_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.c;
  var ShadeStyleManager = kotlin_org_openrndr_openrndr_draw.$_$.t1;
  var emptyList = kotlin_kotlin.$_$.a1;
  var plus = kotlin_kotlin.$_$.h1;
  var Companion_getInstance_3 = kotlin_org_openrndr_openrndr_draw.$_$.c1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CastableToVector4 = kotlin_org_openrndr_openrndr_math.$_$.h;
  var isInterface = kotlin_kotlin.$_$.d2;
  var firstOrNull = kotlin_kotlin.$_$.c1;
  var isArray = kotlin_kotlin.$_$.a2;
  var Vector3 = kotlin_org_openrndr_openrndr_math.$_$.l;
  var Vector4 = kotlin_org_openrndr_openrndr_math.$_$.m;
  var ColorRGBa = kotlin_org_openrndr_openrndr_color.$_$.b;
  var Matrix44 = kotlin_org_openrndr_openrndr_math.$_$.j;
  var isIntArray = kotlin_kotlin.$_$.c2;
  var toFloatArray = kotlin_kotlin.$_$.k1;
  var isDoubleArray = kotlin_kotlin.$_$.b2;
  var ImageBinding = kotlin_org_openrndr_openrndr_draw.$_$.p1;
  var VolumeTexture = kotlin_org_openrndr_openrndr_draw.$_$.x1;
  var ArrayCubemap = kotlin_org_openrndr_openrndr_draw.$_$.e1;
  var ArrayTexture = kotlin_org_openrndr_openrndr_draw.$_$.f1;
  var Cubemap = kotlin_org_openrndr_openrndr_draw.$_$.l1;
  var BufferTexture = kotlin_org_openrndr_openrndr_draw.$_$.g1;
  var DepthBuffer = kotlin_org_openrndr_openrndr_draw.$_$.m1;
  var ColorBuffer = kotlin_org_openrndr_openrndr_draw.$_$.i1;
  var Matrix33 = kotlin_org_openrndr_openrndr_math.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.b3;
  var KotlinLogging_getInstance = kotlin_io_github_microutils_kotlin_logging.$_$.a;
  var Companion_getInstance_4 = kotlin_org_openrndr_openrndr_draw.$_$.b1;
  var trimMargin$default = kotlin_kotlin.$_$.f;
  var contains$default = kotlin_kotlin.$_$.c;
  var trimIndent = kotlin_kotlin.$_$.s2;
  var until = kotlin_kotlin.$_$.m2;
  var mapCapacity = kotlin_kotlin.$_$.g1;
  var coerceAtLeast = kotlin_kotlin.$_$.l2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var ShaderType_FRAGMENT_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.l;
  var ShaderType_VERTEX_getInstance = kotlin_org_openrndr_openrndr_draw.$_$.m;
  var getStringHashCode = kotlin_kotlin.$_$.x1;
  var VertexBuffer = kotlin_org_openrndr_openrndr_draw.$_$.w1;
  var upload$default = kotlin_org_openrndr_openrndr_draw.$_$.u;
  var uploadElements = kotlin_org_openrndr_openrndr_draw.$_$.u1;
  var VertexBufferShadow = kotlin_org_openrndr_openrndr_draw.$_$.v1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApplicationBaseWebGL, 'ApplicationBaseWebGL', classMeta, ApplicationBase, undefined, undefined, undefined, []);
  setMetadataFor(applicationBaseWebGLInitializer$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ApplicationWebGL, 'ApplicationWebGL', classMeta, Application, undefined, undefined, undefined, [0]);
  setMetadataFor(BufferWriterWebGL, 'BufferWriterWebGL', classMeta, BufferWriter, undefined, undefined, undefined, []);
  setMetadataFor(Extensions, 'Extensions', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Capabilities, 'Capabilities', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DriverWebGL, 'DriverWebGL', classMeta, undefined, [Driver], undefined, undefined, [3]);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FragmentShaderWebGL, 'FragmentShaderWebGL', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RenderTargetWebGL, 'RenderTargetWebGL', classMeta, undefined, [RenderTarget], undefined, undefined, []);
  setMetadataFor(ProgramRenderTargetWebGL, 'ProgramRenderTargetWebGL', classMeta, RenderTargetWebGL, [RenderTarget, RenderTargetWebGL], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LRUCache$keyMap$1, undefined, classMeta, LinkedHashMap, undefined, undefined, undefined, []);
  setMetadataFor(LRUCache, 'LRUCache', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CacheEntry, 'CacheEntry', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PerpetualCache, 'PerpetualCache', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ShadeStyleManagerWebGL, 'ShadeStyleManagerWebGL', classMeta, ShadeStyleManager, undefined, undefined, undefined, []);
  setMetadataFor(ShaderGeneratorsWebGL, 'ShaderGeneratorsWebGL', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ShaderWebGL, 'ShaderWebGL', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ActiveUniform, 'ActiveUniform', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexBufferWebGL, 'VertexBufferWebGL', classMeta, VertexBuffer, undefined, undefined, undefined, []);
  setMetadataFor(VertexBufferShadowWebGL, 'VertexBufferShadowWebGL', classMeta, undefined, [VertexBufferShadow], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexShaderWebGL, 'VertexShaderWebGL', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function get_applicationBaseWebGLInitializer() {
    return applicationBaseWebGLInitializer;
  }
  var applicationBaseWebGLInitializer;
  function ApplicationBaseWebGL() {
    ApplicationBase.call(this);
  }
  ApplicationBaseWebGL.prototype.xx = function (program, configuration) {
    return new ApplicationWebGL(program, configuration);
  };
  function ApplicationBaseWebGL$_init_$ref_ai3i1f() {
    var l = function () {
      return new ApplicationBaseWebGL();
    };
    l.callableName = '<init>';
    return l;
  }
  function applicationBaseWebGLInitializer$1() {
    console.log('setting up ApplicationBaseWebGL');
    set_applicationBaseFunc(ApplicationBaseWebGL$_init_$ref_ai3i1f());
  }
  function applicationBaseWebGLInitializer$init$() {
    return new applicationBaseWebGLInitializer$1();
  }
  function readFileOrBlobAsDataUrl($this, file) {
    return new Promise(ApplicationWebGL$readFileOrBlobAsDataUrl$lambda(file));
  }
  function getModifiers($this, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    var set = tmp$ret$0;
    if (e.ctrlKey) {
      set.a(KeyModifier_CTRL_getInstance());
    }
    if (e.altKey) {
      set.a(KeyModifier_ALT_getInstance());
    }
    if (e.metaKey) {
      set.a(KeyModifier_SUPER_getInstance());
    }
    if (e.shiftKey) {
      set.a(KeyModifier_SHIFT_getInstance());
    }
    return set;
  }
  function ApplicationWebGL$setup$lambda(this$0) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = this$0.rz_1.is_1;
      var tmp1_min = window.devicePixelRatio;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var resizeDpr = tmp$ret$0;
      var tmp2_safe_receiver = this$0.uz_1;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = Unit_getInstance();
      } else {
        var tmp0_safe_receiver = this$0.uz_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clientWidth;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no width');
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        tmp2_safe_receiver.width = numberToInt(resizeDpr * tmp_0);
        tmp = Unit_getInstance();
      }
      var tmp5_safe_receiver = this$0.uz_1;
      var tmp_1;
      if (tmp5_safe_receiver == null) {
        tmp_1 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this$0.uz_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.clientHeight;
        var tmp_2;
        if (tmp4_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no height');
        } else {
          tmp_2 = tmp4_elvis_lhs;
        }
        tmp5_safe_receiver.height = numberToInt(resizeDpr * tmp_2);
        tmp_1 = Unit_getInstance();
      }
      var tmp6_safe_receiver = this$0.uz_1;
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.clientWidth;
      var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver;
      var tmp_3;
      if (tmp8_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no canvas');
      } else {
        tmp_3 = tmp8_elvis_lhs;
      }
      var newWidth = tmp_3;
      var tmp9_safe_receiver = this$0.uz_1;
      var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.clientHeight;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver;
      var tmp_4;
      if (tmp11_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no canvas');
      } else {
        tmp_4 = tmp11_elvis_lhs;
      }
      var newHeight = tmp_4;
      this$0.qz_1.fu().kw().zf(new WindowEvent(WindowEventType_RESIZED_getInstance(), new Vector2(0.0, 0.0), new Vector2(newWidth, newHeight), true));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_0(this$0) {
    return function (it) {
      if (it instanceof KeyboardEvent)
        it;
      else
        THROW_CCE();
      var tmp = this$0.qz_1.lu().ss();
      var tmp_0 = KeyEventType_KEY_DOWN_getInstance();
      var tmp_1 = it.which;
      var tmp_2 = it.key;
      var tmp_3 = getModifiers(this$0, it);
      tmp.zf(KeyEvent_init_$Create$(tmp_0, tmp_1, tmp_2, tmp_3, false, 16, null));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_1(this$0) {
    return function (it) {
      if (it instanceof KeyboardEvent)
        it;
      else
        THROW_CCE();
      var tmp = this$0.qz_1.lu().ts();
      var tmp_0 = KeyEventType_KEY_UP_getInstance();
      var tmp_1 = it.which;
      var tmp_2 = it.key;
      var tmp_3 = getModifiers(this$0, it);
      tmp.zf(KeyEvent_init_$Create$(tmp_0, tmp_1, tmp_2, tmp_3, false, 16, null));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_2($down, $lastDragPosition, this$0) {
    return function (it) {
      if (it instanceof MouseEvent)
        it;
      else
        THROW_CCE();
      $down._v = true;
      var x = it.clientX;
      var y = it.clientY;
      $lastDragPosition._v = new Vector2(x, y);
      var tmp = this$0.qz_1.ku().mt();
      var tmp_0 = $lastDragPosition._v;
      var tmp_1 = Companion_getInstance().xd_1;
      var tmp_2 = Companion_getInstance().xd_1;
      var tmp_3 = MouseEventType_BUTTON_DOWN_getInstance();
      var tmp0_subject = it.button;
      tmp.zf(new MouseEvent_0(tmp_0, tmp_1, tmp_2, tmp_3, tmp0_subject === 0 ? MouseButton_LEFT_getInstance() : tmp0_subject === 1 ? MouseButton_CENTER_getInstance() : tmp0_subject === 2 ? MouseButton_RIGHT_getInstance() : MouseButton_LEFT_getInstance(), emptySet()));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_3($down, this$0, $lastDragPosition) {
    return function (it) {
      if (it instanceof MouseEvent)
        it;
      else
        THROW_CCE();
      $down._v = false;
      var tmp = this$0.qz_1.ku().nt();
      var tmp_0 = $lastDragPosition._v;
      var tmp_1 = Companion_getInstance().xd_1;
      var tmp_2 = Companion_getInstance().xd_1;
      var tmp_3 = MouseEventType_BUTTON_UP_getInstance();
      var tmp0_subject = it.button;
      tmp.zf(new MouseEvent_0(tmp_0, tmp_1, tmp_2, tmp_3, tmp0_subject === 0 ? MouseButton_LEFT_getInstance() : tmp0_subject === 1 ? MouseButton_CENTER_getInstance() : tmp0_subject === 2 ? MouseButton_RIGHT_getInstance() : MouseButton_LEFT_getInstance(), emptySet()));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_4(this$0) {
    return function (it) {
      if (it instanceof WheelEvent)
        it;
      else
        THROW_CCE();
      this$0.qz_1.ku().qt().zf(new MouseEvent_0(this$0.xz_1, new Vector2(it.deltaX, it.deltaY), Companion_getInstance().xd_1, MouseEventType_SCROLLED_getInstance(), MouseButton_NONE_getInstance(), emptySet()));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_5(this$0) {
    return function (it) {
      if (it instanceof MouseEvent)
        it;
      else
        THROW_CCE();
      var x = it.clientX;
      var y = it.clientY;
      this$0.xz_1 = new Vector2(x, y);
      this$0.qz_1.ku().pt().zf(new MouseEvent_0(this$0.xz_1, Companion_getInstance().xd_1, Companion_getInstance().xd_1, MouseEventType_MOVED_getInstance(), MouseButton_NONE_getInstance(), emptySet()));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_6($down, this$0, $lastDragPosition) {
    return function (it) {
      var tmp;
      if ($down._v) {
        if (it instanceof MouseEvent)
          it;
        else
          THROW_CCE();
        var x = it.clientX;
        var y = it.clientY;
        this$0.xz_1 = new Vector2(x, y);
        this$0.qz_1.ku().ot().zf(new MouseEvent_0(this$0.xz_1, Companion_getInstance().xd_1, this$0.xz_1.ee($lastDragPosition._v), MouseEventType_MOVED_getInstance(), MouseButton_NONE_getInstance(), emptySet()));
        $lastDragPosition._v = this$0.xz_1;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_7(it) {
    it.preventDefault();
    println('dragover');
    return Unit_getInstance();
  }
  function ApplicationWebGL$setup$lambda$lambda(this$0) {
    return function (images) {
      this$0.qz_1.fu().lw().zf(new DropEvent(this$0.xz_1, toList(images)));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$setup$lambda_8(this$0) {
    return function (it) {
      it.preventDefault();
      println('drop');
      var files = it.dataTransfer.files;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = asList(files);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        var tmp$ret$0;
        // Inline function 'org.openrndr.webgl.ApplicationWebGL.setup.<anonymous>.<anonymous>' call
        tmp$ret$0 = readFileOrBlobAsDataUrl(this$0, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var promises = tmp$ret$2;
      var tmp = Promise;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(promises);
      var tmp_0 = tmp.all(tmp$ret$3);
      tmp_0.then(ApplicationWebGL$setup$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$readFileOrBlobAsDataUrl$lambda$lambda($resolve, $reader) {
    return function (it) {
      $resolve($reader.result);
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$readFileOrBlobAsDataUrl$lambda($file) {
    return function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL($file);
      reader.onloadend = ApplicationWebGL$readFileOrBlobAsDataUrl$lambda$lambda(resolve, reader);
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL$loop$lambda(this$0) {
    return function (it) {
      this$0.vx();
      return Unit_getInstance();
    };
  }
  function ApplicationWebGL(program, configuration) {
    Application.call(this);
    this.qz_1 = program;
    this.rz_1 = configuration;
    this.qz_1.gu(this);
    this.sz_1 = true;
    this.tz_1 = 0.0;
    this.uz_1 = null;
    this.vz_1 = null;
    this.wz_1 = null;
    this.xz_1 = new Vector2(0.0, 0.0);
    this.yz_1 = CursorType_ARROW_CURSOR_getInstance();
    this.zz_1 = PresentationMode_AUTOMATIC_getInstance();
  }
  ApplicationWebGL.prototype.hu = function ($cont) {
    var tmp = this;
    var tmp_0 = document.getElementById(this.rz_1.kr_1);
    var tmp0_elvis_lhs = tmp_0 instanceof HTMLCanvasElement ? tmp_0 : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'failed to get canvas #' + this.rz_1.kr_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.uz_1 = tmp_1;
    var tmp$ret$0;
    // Inline function 'org.khronos.webgl.WebGLContextAttributes' call
    var o = {};
    o['alpha'] = true;
    o['depth'] = true;
    o['stencil'] = true;
    o['antialias'] = true;
    o['premultipliedAlpha'] = true;
    o['preserveDrawingBuffer'] = true;
    o['preferLowPowerToHighPerformance'] = false;
    o['failIfMajorPerformanceCaveat'] = false;
    tmp$ret$0 = o;
    var contextAttributes = tmp$ret$0;
    var tmp_2 = this;
    var tmp1_safe_receiver = this.uz_1;
    var tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getContext('webgl2', contextAttributes);
    var tmp2_elvis_lhs = tmp_3 instanceof WebGL2RenderingContext ? tmp_3 : null;
    var tmp_4;
    if (tmp2_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('failed to create webgl2 context');
    } else {
      tmp_4 = tmp2_elvis_lhs;
    }
    tmp_2.vz_1 = tmp_4;
    var tmp_5 = Companion_getInstance_0();
    var tmp_6 = this.vz_1;
    tmp_5.sg_1 = new DriverWebGL(tmp_6 instanceof WebGL2RenderingContext ? tmp_6 : THROW_CCE());
    this.qz_1.du(new Drawer(Companion_getInstance_0().tg()));
    this.tz_1 = window.performance.now();
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp1_min = this.rz_1.is_1;
    var tmp2_min = window.devicePixelRatio;
    tmp$ret$1 = Math.min(tmp1_min, tmp2_min);
    var dpr = tmp$ret$1;
    var tmp5_safe_receiver = this.uz_1;
    if (tmp5_safe_receiver == null) {
    } else {
      var tmp3_safe_receiver = this.uz_1;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.clientWidth;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no width');
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp5_safe_receiver.width = numberToInt(dpr * tmp_7);
    }
    var tmp8_safe_receiver = this.uz_1;
    if (tmp8_safe_receiver == null) {
    } else {
      var tmp6_safe_receiver = this.uz_1;
      var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.clientHeight;
      var tmp_8;
      if (tmp7_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no height');
      } else {
        tmp_8 = tmp7_elvis_lhs;
      }
      tmp8_safe_receiver.height = numberToInt(dpr * tmp_8);
    }
    this.a10(this.rz_1.rr_1);
    var tmp_9 = window;
    tmp_9.addEventListener('resize', ApplicationWebGL$setup$lambda(this));
    var tmp_10 = window;
    tmp_10.addEventListener('keydown', ApplicationWebGL$setup$lambda_0(this));
    var tmp_11 = window;
    tmp_11.addEventListener('keyup', ApplicationWebGL$setup$lambda_1(this));
    var lastDragPosition = {_v: Companion_getInstance().xd_1};
    var down = {_v: false};
    var tmp_12 = window;
    tmp_12.addEventListener('mousedown', ApplicationWebGL$setup$lambda_2(down, lastDragPosition, this));
    var tmp_13 = window;
    tmp_13.addEventListener('mouseup', ApplicationWebGL$setup$lambda_3(down, this, lastDragPosition));
    var tmp_14 = window;
    tmp_14.addEventListener('wheel', ApplicationWebGL$setup$lambda_4(this));
    var tmp_15 = window;
    tmp_15.addEventListener('pointermove', ApplicationWebGL$setup$lambda_5(this));
    var tmp_16 = window;
    tmp_16.addEventListener('mousemove', ApplicationWebGL$setup$lambda_6(down, this, lastDragPosition));
    var tmp9_safe_receiver = this.uz_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      tmp9_safe_receiver.addEventListener('dragover', ApplicationWebGL$setup$lambda_7);
    }
    var tmp10_safe_receiver = this.uz_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      tmp10_safe_receiver.addEventListener('drop', ApplicationWebGL$setup$lambda_8(this));
    }
    var tmp_17 = this;
    var tmp11_elvis_lhs = this.vz_1;
    var tmp_18;
    if (tmp11_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('no context');
    } else {
      tmp_18 = tmp11_elvis_lhs;
    }
    tmp_17.wz_1 = new ProgramRenderTargetWebGL(tmp_18, this.qz_1);
    var tmp12_safe_receiver = this.wz_1;
    if (tmp12_safe_receiver == null)
      null;
    else {
      tmp12_safe_receiver.l10();
    }
    var dims = this.iw();
    this.qz_1.au(numberToInt(dims.ce_1));
    this.qz_1.bu(numberToInt(dims.de_1));
    return this.qz_1.hu($cont);
  };
  ApplicationWebGL.prototype.vx = function () {
    if (this.zz_1.equals(PresentationMode_AUTOMATIC_getInstance()) ? true : this.sz_1) {
      this.sz_1 = false;
      var dims = this.iw();
      this.qz_1.au(numberToInt(dims.ce_1));
      this.qz_1.bu(numberToInt(dims.de_1));
      this.qz_1.eu().ck();
      this.qz_1.eu().ek();
      var tmp0_safe_receiver = this.wz_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.m10();
      }
      this.qz_1.iu();
    }
    var tmp = window;
    tmp.requestAnimationFrame(ApplicationWebGL$loop$lambda(this));
  };
  ApplicationWebGL.prototype.a10 = function (text) {
    window.document.title = text;
  };
  ApplicationWebGL.prototype.hw = function () {
    return window.document.title;
  };
  ApplicationWebGL.prototype.iw = function () {
    var tmp0_safe_receiver = this.uz_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clientWidth;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    var width = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = this.uz_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.clientHeight;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver;
    var height = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    return new Vector2(width, height);
  };
  ApplicationWebGL.prototype.ju = function () {
    return (window.performance.now() - this.tz_1) / 1000.0;
  };
  ApplicationWebGL.prototype.jw = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.rz_1.is_1;
    var tmp1_min = window.devicePixelRatio;
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    return tmp$ret$0;
  };
  function BufferWriterWebGL(buffer, elementSize) {
    BufferWriter.call(this);
    this.n10_1 = buffer;
    this.o10_1 = elementSize;
    // Inline function 'kotlin.require' call
    var tmp0_require = (this.o10_1 % 4 | 0) === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.BufferWriterWebGL.<anonymous>' call
      tmp$ret$0 = 'elementSize ' + this.o10_1 + ' must be a multiple of 4';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.p10_1 = 0;
  }
  BufferWriterWebGL.prototype.hn = function (v) {
    // Inline function 'org.khronos.webgl.set' call
    var tmp0_set = this.n10_1;
    var tmp1_set = this.p10_1;
    var tmp2_set = v.tb_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_set;
    tmp$ret$0[tmp1_set] = tmp2_set;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p10_1;
    tmp0_this.p10_1 = tmp1 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp3_set = this.n10_1;
    var tmp4_set = this.p10_1;
    var tmp5_set = v.ub_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp3_set;
    tmp$ret$1[tmp4_set] = tmp5_set;
    var tmp2_this = this;
    var tmp3 = tmp2_this.p10_1;
    tmp2_this.p10_1 = tmp3 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp6_set = this.n10_1;
    var tmp7_set = this.p10_1;
    var tmp8_set = v.vb_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp6_set;
    tmp$ret$2[tmp7_set] = tmp8_set;
    var tmp4_this = this;
    var tmp5 = tmp4_this.p10_1;
    tmp4_this.p10_1 = tmp5 + 1 | 0;
  };
  BufferWriterWebGL.prototype.in = function (v) {
    // Inline function 'org.khronos.webgl.set' call
    var tmp0_set = this.n10_1;
    var tmp1_set = this.p10_1;
    var tmp2_set = v.ce_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_set;
    tmp$ret$0[tmp1_set] = tmp2_set;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p10_1;
    tmp0_this.p10_1 = tmp1 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp3_set = this.n10_1;
    var tmp4_set = this.p10_1;
    var tmp5_set = v.de_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp3_set;
    tmp$ret$1[tmp4_set] = tmp5_set;
    var tmp2_this = this;
    var tmp3 = tmp2_this.p10_1;
    tmp2_this.p10_1 = tmp3 + 1 | 0;
  };
  BufferWriterWebGL.prototype.ln = function (v) {
    // Inline function 'org.khronos.webgl.set' call
    var tmp0_set = this.n10_1;
    var tmp1_set = this.p10_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_set;
    tmp$ret$0[tmp1_set] = v;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p10_1;
    tmp0_this.p10_1 = tmp1 + 1 | 0;
  };
  BufferWriterWebGL.prototype.q10 = function (x, y, z, w) {
    // Inline function 'org.khronos.webgl.set' call
    var tmp0_set = this.n10_1;
    var tmp1_set = this.p10_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_set;
    tmp$ret$0[tmp1_set] = x;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p10_1;
    tmp0_this.p10_1 = tmp1 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp2_set = this.n10_1;
    var tmp3_set = this.p10_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp2_set;
    tmp$ret$1[tmp3_set] = y;
    var tmp2_this = this;
    var tmp3 = tmp2_this.p10_1;
    tmp2_this.p10_1 = tmp3 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp4_set = this.n10_1;
    var tmp5_set = this.p10_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_set;
    tmp$ret$2[tmp5_set] = z;
    var tmp4_this = this;
    var tmp5 = tmp4_this.p10_1;
    tmp4_this.p10_1 = tmp5 + 1 | 0;
    // Inline function 'org.khronos.webgl.set' call
    var tmp6_set = this.n10_1;
    var tmp7_set = this.p10_1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp6_set;
    tmp$ret$3[tmp7_set] = w;
    var tmp6_this = this;
    var tmp7 = tmp6_this.p10_1;
    tmp6_this.p10_1 = tmp7 + 1 | 0;
  };
  BufferWriterWebGL.prototype.kn = function (v) {
    this.q10(v.lf_1, v.mf_1, v.nf_1, v.of_1);
  };
  BufferWriterWebGL.prototype.gn = function () {
    this.p10_1 = 0;
  };
  function glType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 6:
      case 12:
      case 18:
        tmp = WebGLRenderingContext.UNSIGNED_BYTE;
        break;
      case 2:
      case 8:
      case 14:
      case 20:
        tmp = WebGLRenderingContext.UNSIGNED_SHORT;
        break;
      case 4:
      case 10:
      case 16:
      case 22:
        tmp = WebGLRenderingContext.UNSIGNED_INT;
        break;
      case 0:
      case 7:
      case 13:
      case 19:
        tmp = WebGLRenderingContext.BYTE;
        break;
      case 3:
      case 9:
      case 15:
      case 21:
        tmp = WebGLRenderingContext.SHORT;
        break;
      case 5:
      case 11:
      case 17:
      case 23:
        tmp = WebGLRenderingContext.INT;
        break;
      case 24:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 28:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 29:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 30:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 25:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 26:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      case 27:
        tmp = WebGLRenderingContext.FLOAT;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function glType_0(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = WebGLRenderingContext.TRIANGLES;
        break;
      case 2:
        tmp = WebGLRenderingContext.TRIANGLE_FAN;
        break;
      case 1:
        tmp = WebGLRenderingContext.TRIANGLE_STRIP;
        break;
      case 4:
        tmp = WebGLRenderingContext.LINES;
        break;
      case 5:
        tmp = WebGLRenderingContext.LINE_STRIP;
        break;
      case 6:
        tmp = WebGLRenderingContext.LINE_LOOP;
        break;
      case 3:
        tmp = WebGLRenderingContext.POINTS;
        break;
      case 7:
        throw IllegalStateException_init_$Create$('not supported');
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function glStencilTest(test) {
    var tmp0_subject = test;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = WebGLRenderingContext.NEVER;
        break;
      case 7:
        tmp = WebGLRenderingContext.ALWAYS;
        break;
      case 1:
        tmp = WebGLRenderingContext.LESS;
        break;
      case 2:
        tmp = WebGLRenderingContext.LEQUAL;
        break;
      case 3:
        tmp = WebGLRenderingContext.GREATER;
        break;
      case 4:
        tmp = WebGLRenderingContext.GEQUAL;
        break;
      case 5:
        tmp = WebGLRenderingContext.EQUAL;
        break;
      case 6:
        tmp = WebGLRenderingContext.NOTEQUAL;
        break;
      default:
        throw RuntimeException_init_$Create$('unsupported test: ' + test);
    }
    return tmp;
  }
  function glStencilOp(op) {
    var tmp0_subject = op;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = WebGLRenderingContext.KEEP;
        break;
      case 5:
        tmp = WebGLRenderingContext.DECR;
        break;
      case 6:
        tmp = WebGLRenderingContext.DECR_WRAP;
        break;
      case 3:
        tmp = WebGLRenderingContext.INCR;
        break;
      case 4:
        tmp = WebGLRenderingContext.INCR_WRAP;
        break;
      case 1:
        tmp = WebGLRenderingContext.ZERO;
        break;
      case 7:
        tmp = WebGLRenderingContext.INVERT;
        break;
      case 2:
        tmp = WebGLRenderingContext.REPLACE;
        break;
      default:
        throw RuntimeException_init_$Create$('unsupported op');
    }
    return tmp;
  }
  function toFloat32Array(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.jb_1, _this__u8e3s4.mb_1, _this__u8e3s4.pb_1, _this__u8e3s4.kb_1, _this__u8e3s4.nb_1, _this__u8e3s4.qb_1, _this__u8e3s4.lb_1, _this__u8e3s4.ob_1, _this__u8e3s4.rb_1]));
  }
  function toFloat32Array_0(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.yb_1, _this__u8e3s4.cc_1, _this__u8e3s4.gc_1, _this__u8e3s4.kc_1, _this__u8e3s4.zb_1, _this__u8e3s4.dc_1, _this__u8e3s4.hc_1, _this__u8e3s4.lc_1, _this__u8e3s4.ac_1, _this__u8e3s4.ec_1, _this__u8e3s4.ic_1, _this__u8e3s4.mc_1, _this__u8e3s4.bc_1, _this__u8e3s4.fc_1, _this__u8e3s4.jc_1, _this__u8e3s4.nc_1]));
  }
  function toFloat32Array_1(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.lf_1, _this__u8e3s4.mf_1, _this__u8e3s4.nf_1, _this__u8e3s4.of_1]));
  }
  function toFloat32Array_2(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.te_1, _this__u8e3s4.ue_1, _this__u8e3s4.ve_1, _this__u8e3s4.we_1]));
  }
  function toFloat32Array_3(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.tb_1, _this__u8e3s4.ub_1, _this__u8e3s4.vb_1]));
  }
  function toFloat32Array_4(_this__u8e3s4) {
    return float32Array(new Float32Array([_this__u8e3s4.ce_1, _this__u8e3s4.de_1]));
  }
  function float32Array(floats) {
    return new Float32Array(toTypedArray(floats));
  }
  function DriverWebGL$Extensions$instancedArrays$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('ANGLE_instanced_arrays');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$standardDerivatives$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('OES_standard_derivatives');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$halfFloatTextures$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('OES_texture_half_float');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$floatTextures$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('OES_texture_float');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$colorBufferHalfFloat$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('EXT_color_buffer_half_float');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$colorBufferFloat$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('EXT_color_buffer_float');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$halfFloatTexturesLinear$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('OES_texture_half_float_linear');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$floatTexturesLinear$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('OES_texture_float_linear');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$drawBuffers$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('WEBGL_draw_buffers');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function DriverWebGL$Extensions$depthTexture$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.r10_1.getExtension('WEBGL_depth_texture');
      return (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    };
  }
  function Extensions($outer) {
    this.i11_1 = $outer;
    var tmp = this;
    tmp.y10_1 = lazy(DriverWebGL$Extensions$instancedArrays$delegate$lambda(this.i11_1));
    var tmp_0 = this;
    tmp_0.z10_1 = lazy(DriverWebGL$Extensions$standardDerivatives$delegate$lambda(this.i11_1));
    var tmp_1 = this;
    tmp_1.a11_1 = lazy(DriverWebGL$Extensions$halfFloatTextures$delegate$lambda(this.i11_1));
    var tmp_2 = this;
    tmp_2.b11_1 = lazy(DriverWebGL$Extensions$floatTextures$delegate$lambda(this.i11_1));
    var tmp_3 = this;
    tmp_3.c11_1 = lazy(DriverWebGL$Extensions$colorBufferHalfFloat$delegate$lambda(this.i11_1));
    var tmp_4 = this;
    tmp_4.d11_1 = lazy(DriverWebGL$Extensions$colorBufferFloat$delegate$lambda(this.i11_1));
    var tmp_5 = this;
    tmp_5.e11_1 = lazy(DriverWebGL$Extensions$halfFloatTexturesLinear$delegate$lambda(this.i11_1));
    var tmp_6 = this;
    tmp_6.f11_1 = lazy(DriverWebGL$Extensions$floatTexturesLinear$delegate$lambda(this.i11_1));
    var tmp_7 = this;
    tmp_7.g11_1 = lazy(DriverWebGL$Extensions$drawBuffers$delegate$lambda(this.i11_1));
    var tmp_8 = this;
    tmp_8.h11_1 = lazy(DriverWebGL$Extensions$depthTexture$delegate$lambda(this.i11_1));
  }
  Extensions.prototype.j11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = instancedArrays$factory();
    tmp$ret$0 = this.y10_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.k11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = standardDerivatives$factory();
    tmp$ret$0 = this.z10_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.l11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = colorBufferHalfFloat$factory();
    tmp$ret$0 = this.c11_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.m11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = colorBufferFloat$factory();
    tmp$ret$0 = this.d11_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.n11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = halfFloatTexturesLinear$factory();
    tmp$ret$0 = this.e11_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.o11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = floatTexturesLinear$factory();
    tmp$ret$0 = this.f11_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.p11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = drawBuffers$factory();
    tmp$ret$0 = this.g11_1.c1();
    return tmp$ret$0;
  };
  Extensions.prototype.q11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = depthTexture$factory();
    tmp$ret$0 = this.h11_1.c1();
    return tmp$ret$0;
  };
  function Capabilities(instancedArrays, standardDerivatives, halfFloatTextures, floatTextures, colorBufferHalfFloat, colorBufferFloat, halfFloatTexturesLinear, floatTexturesLinear, drawBuffers, depthTexture) {
    this.r11_1 = instancedArrays;
    this.s11_1 = standardDerivatives;
    this.t11_1 = halfFloatTextures;
    this.u11_1 = floatTextures;
    this.v11_1 = colorBufferHalfFloat;
    this.w11_1 = colorBufferFloat;
    this.x11_1 = halfFloatTexturesLinear;
    this.y11_1 = floatTexturesLinear;
    this.z11_1 = drawBuffers;
    this.a12_1 = depthTexture;
  }
  Capabilities.prototype.toString = function () {
    return 'Capabilities(instancedArrays=' + this.r11_1 + ', standardDerivatives=' + this.s11_1 + ', halfFloatTextures=' + this.t11_1 + ', floatTextures=' + this.u11_1 + ', colorBufferHalfFloat=' + this.v11_1 + ', colorBufferFloat=' + this.w11_1 + ', halfFloatTexturesLinear=' + this.x11_1 + ', floatTexturesLinear=' + this.y11_1 + ', drawBuffers=' + this.z11_1 + ', depthTexture=' + this.a12_1 + ')';
  };
  Capabilities.prototype.hashCode = function () {
    var result = this.r11_1 | 0;
    result = imul(result, 31) + (this.s11_1 | 0) | 0;
    result = imul(result, 31) + (this.t11_1 | 0) | 0;
    result = imul(result, 31) + (this.u11_1 | 0) | 0;
    result = imul(result, 31) + (this.v11_1 | 0) | 0;
    result = imul(result, 31) + (this.w11_1 | 0) | 0;
    result = imul(result, 31) + (this.x11_1 | 0) | 0;
    result = imul(result, 31) + (this.y11_1 | 0) | 0;
    result = imul(result, 31) + (this.z11_1 | 0) | 0;
    result = imul(result, 31) + (this.a12_1 | 0) | 0;
    return result;
  };
  Capabilities.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Capabilities))
      return false;
    var tmp0_other_with_cast = other instanceof Capabilities ? other : THROW_CCE();
    if (!(this.r11_1 === tmp0_other_with_cast.r11_1))
      return false;
    if (!(this.s11_1 === tmp0_other_with_cast.s11_1))
      return false;
    if (!(this.t11_1 === tmp0_other_with_cast.t11_1))
      return false;
    if (!(this.u11_1 === tmp0_other_with_cast.u11_1))
      return false;
    if (!(this.v11_1 === tmp0_other_with_cast.v11_1))
      return false;
    if (!(this.w11_1 === tmp0_other_with_cast.w11_1))
      return false;
    if (!(this.x11_1 === tmp0_other_with_cast.x11_1))
      return false;
    if (!(this.y11_1 === tmp0_other_with_cast.y11_1))
      return false;
    if (!(this.z11_1 === tmp0_other_with_cast.z11_1))
      return false;
    if (!(this.a12_1 === tmp0_other_with_cast.a12_1))
      return false;
    return true;
  };
  function setupFormat($this, vertexBuffer, instanceAttributes, shader) {
    var scalarVectorTypes = setOf([VertexElementType_FLOAT32_getInstance(), VertexElementType_VECTOR2_FLOAT32_getInstance(), VertexElementType_VECTOR3_FLOAT32_getInstance(), VertexElementType_VECTOR4_FLOAT32_getInstance()]);
    var attribute0Used = {_v: false};
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = vertexBuffer.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'org.openrndr.webgl.DriverWebGL.setupFormat.<anonymous>' call
      setupFormat$setupBuffer($this, shader, attribute0Used, scalarVectorTypes, element, 0);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = instanceAttributes.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'org.openrndr.webgl.DriverWebGL.setupFormat.<anonymous>' call
      setupFormat$setupBuffer($this, shader, attribute0Used, scalarVectorTypes, element_0, 1);
    }
    if (!attribute0Used._v) {
      println('attribute 0 is not used');
    }
  }
  function setupFormat$setupBuffer(this$0, $shader, attribute0Used, scalarVectorTypes, buffer, divisor) {
    var prefix = divisor === 0 ? 'a' : 'i';
    var attributeBindings = 0;
    var tmp = WebGLRenderingContext.ARRAY_BUFFER;
    this$0.r10_1.bindBuffer(tmp, (buffer instanceof VertexBufferWebGL ? buffer : THROW_CCE()).c12_1);
    var format = buffer.fg();
    var tmp0_iterator = format.og_1.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var attributeIndex = $shader.o12(prefix + '_' + item.xm_1);
      if (attributeIndex === 0) {
        attribute0Used._v = true;
      }
      if (!(attributeIndex === -1)) {
        var tmp1_subject = item.zm_1;
        if (scalarVectorTypes.l(tmp1_subject)) {
          var inductionVariable = 0;
          var last = item.an_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              this$0.r10_1.enableVertexAttribArray(attributeIndex + i | 0);
              var glType_0 = glType(item.zm_1);
              if (glType_0 === WebGLRenderingContext.FLOAT) {
                this$0.r10_1.vertexAttribPointer(attributeIndex + i | 0, item.zm_1.pm_1, glType_0, false, format.c(), item.ym_1 + imul(i, item.zm_1.qm_1) | 0);
              } else {
                // Inline function 'kotlin.error' call
                throw IllegalStateException_init_$Create$('integer attributes are not supported by WebGL');
              }
              this$0.r10_1.vertexAttribDivisor(attributeIndex, divisor);
              var tmp3 = attributeBindings;
              attributeBindings = tmp3 + 1 | 0;
            }
             while (inductionVariable < last);
        } else if (tmp1_subject.equals(VertexElementType_MATRIX44_FLOAT32_getInstance())) {
          var inductionVariable_0 = 0;
          var last_0 = item.an_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < 4)
                do {
                  var column = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  this$0.r10_1.enableVertexAttribArray((attributeIndex + column | 0) + imul(i_0, 4) | 0);
                  this$0.r10_1.vertexAttribPointer((attributeIndex + column | 0) + imul(i_0, 4) | 0, 4, glType(item.zm_1), false, format.c(), (item.ym_1 + imul(column, 16) | 0) + imul(i_0, 64) | 0);
                  this$0.r10_1.vertexAttribDivisor((attributeIndex + column | 0) + imul(i_0, 4) | 0, divisor);
                  var tmp6 = attributeBindings;
                  attributeBindings = tmp6 + 1 | 0;
                }
                 while (inductionVariable_1 < 4);
            }
             while (inductionVariable_0 < last_0);
        } else if (tmp1_subject.equals(VertexElementType_MATRIX33_FLOAT32_getInstance())) {
          var inductionVariable_2 = 0;
          var last_1 = item.an_1;
          if (inductionVariable_2 < last_1)
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              if (inductionVariable_3 < 3)
                do {
                  var column_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  this$0.r10_1.enableVertexAttribArray((attributeIndex + column_0 | 0) + imul(i_1, 3) | 0);
                  this$0.r10_1.vertexAttribPointer((attributeIndex + column_0 | 0) + imul(i_1, 3) | 0, 3, glType(item.zm_1), false, format.c(), (item.ym_1 + imul(column_0, 12) | 0) + imul(i_1, 48) | 0);
                  this$0.r10_1.vertexAttribDivisor((attributeIndex + column_0 | 0) + imul(i_1, 3) | 0, divisor);
                  var tmp9 = attributeBindings;
                  attributeBindings = tmp9 + 1 | 0;
                }
                 while (inductionVariable_3 < 3);
            }
             while (inductionVariable_2 < last_1);
        } else {
          // Inline function 'kotlin.TODO' call
          var tmp0_TODO = 'implement support for ' + item.zm_1;
          throw new NotImplementedError('An operation is not implemented: ' + tmp0_TODO);
        }
      }
    }
    if (attributeBindings > 16) {
      // Inline function 'kotlin.error' call
      var tmp1_error = 'Maximum vertex attributes exceeded ' + attributeBindings + ' (limit is 16)';
      throw IllegalStateException_init_$Create$(toString(tmp1_error));
    }
  }
  function DriverWebGL$shaderGenerators$delegate$lambda() {
    return new ShaderGeneratorsWebGL();
  }
  function DriverWebGL(context) {
    this.r10_1 = context;
    Companion_getInstance_0().sg_1 = this;
    this.s10_1 = new Extensions(this);
    this.t10_1 = new Capabilities(!(this.s10_1.j11() == null), !(this.s10_1.k11() == null), true, true, !(this.s10_1.l11() == null), !(this.s10_1.m11() == null), !(this.s10_1.n11() == null), !(this.s10_1.o11() == null), !(this.s10_1.p11() == null), !(this.s10_1.q11() == null));
    var tmp = this;
    tmp.u10_1 = DrawStyle_init_$Create$(null, null, null, null, null, 0.0, false, 0.0, null, null, false, null, null, null, false, null, null, null, null, null, null, null, null, 8388607, null);
    this.v10_1 = true;
    var tmp_0 = this;
    tmp_0.w10_1 = lazy(DriverWebGL$shaderGenerators$delegate$lambda);
    var tmp_1 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp_1.x10_1 = tmp$ret$0;
  }
  DriverWebGL.prototype.ug = function () {
    return toLong(hashCode(this.r10_1));
  };
  DriverWebGL.prototype.gm = function (vsCode, tcsCode, tesCode, gsCode, fsCode, name, session) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (tcsCode == null ? tesCode == null : false) ? gsCode == null : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.DriverWebGL.createShader.<anonymous>' call
      tmp$ret$0 = 'only vertex and fragment shaders are supported in WebGL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var vertexShader = Companion_getInstance_10().p12(this.r10_1, vsCode, name);
    var fragmentShader = Companion_getInstance_5().p12(this.r10_1, fsCode, name);
    return Companion_getInstance_8().q12(this.r10_1, vertexShader, fragmentShader, name, session);
  };
  DriverWebGL.prototype.lq = function (name, vsGenerator, tcsGenerator, tesGenerator, gsGenerator, fsGenerator, session) {
    return new ShadeStyleManagerWebGL(name, vsGenerator, fsGenerator, session);
  };
  DriverWebGL.prototype.hk = function (r, g, b, a) {
    this.r10_1.clearColor(r, g, b, a);
    this.r10_1.clearDepth(1.0);
    this.r10_1.disable(WebGLRenderingContext.SCISSOR_TEST);
    this.r10_1.depthMask(true);
    this.r10_1.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT | WebGLRenderingContext.STENCIL_BUFFER_BIT);
    this.r10_1.depthMask(false);
  };
  DriverWebGL.prototype.jq = function (format, vertexCount, session) {
    return Companion_getInstance_9().r12(this.r10_1, format, vertexCount, session);
  };
  DriverWebGL.prototype.co = function (shader, vertexBuffers, instanceAttributes, drawPrimitive, vertexOffset, vertexCount, instanceOffset, instanceCount, verticesPerPatch) {
    if (shader instanceof ShaderWebGL)
      shader;
    else
      THROW_CCE();
    setupFormat(this, vertexBuffers, instanceAttributes, shader);
    // Inline function 'kotlin.require' call
    var tmp0_require = instanceOffset === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.DriverWebGL.drawInstances.<anonymous>' call
      tmp$ret$0 = 'instance offsets are not supported';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.r10_1.drawArraysInstanced(glType_0(drawPrimitive), vertexOffset, vertexCount, instanceCount);
  };
  DriverWebGL.prototype.nn = function (drawStyle) {
    if (this.v10_1 ? true : !equals(this.u10_1.mh_1, drawStyle.mh_1)) {
      if (!(drawStyle.mh_1 == null)) {
        var tmp0_safe_receiver = drawStyle.mh_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var target = Companion_getInstance_1().kg();
          this.r10_1.scissor(numberToInt(tmp0_safe_receiver.v12() * target.bk()), numberToInt(target.yj() * target.bk() - tmp0_safe_receiver.w12() * target.bk() - tmp0_safe_receiver.u12_1 * target.bk()), numberToInt(tmp0_safe_receiver.t12_1 * target.bk()), numberToInt(tmp0_safe_receiver.u12_1 * target.bk()));
          this.r10_1.enable(WebGLRenderingContext.SCISSOR_TEST);
          tmp$ret$0 = Unit_getInstance();
        }
      } else {
        this.r10_1.disable(WebGLRenderingContext.SCISSOR_TEST);
      }
      this.u10_1.mh_1 = drawStyle.mh_1;
    }
    if (this.v10_1 ? true : !equals(this.u10_1.zh_1, drawStyle.zh_1)) {
      this.r10_1.colorMask(drawStyle.zh_1.zi_1, drawStyle.zh_1.aj_1, drawStyle.zh_1.bj_1, drawStyle.zh_1.cj_1);
      this.u10_1.zh_1 = drawStyle.zh_1;
    }
    if (this.v10_1 ? true : !(this.u10_1.wh_1 === drawStyle.wh_1)) {
      var tmp1_subject = drawStyle.wh_1;
      if (tmp1_subject === true) {
        this.r10_1.depthMask(true);
      } else if (tmp1_subject === false) {
        this.r10_1.depthMask(false);
      }
      this.r10_1.enable(WebGLRenderingContext.DEPTH_TEST);
      this.u10_1.wh_1 = drawStyle.wh_1;
    }
    if (drawStyle.gi_1 === drawStyle.hi_1) {
      if (drawStyle.fi_1.si_1 === StencilTest_DISABLED_getInstance()) {
        this.r10_1.disable(WebGLRenderingContext.STENCIL_TEST);
      } else {
        this.r10_1.enable(WebGLRenderingContext.STENCIL_TEST);
        this.r10_1.stencilFunc(glStencilTest(drawStyle.fi_1.si_1), drawStyle.fi_1.qi_1, drawStyle.fi_1.pi_1);
        this.r10_1.stencilOp(glStencilOp(drawStyle.fi_1.mi_1), glStencilOp(drawStyle.fi_1.ni_1), glStencilOp(drawStyle.fi_1.oi_1));
        this.r10_1.stencilMask(drawStyle.fi_1.ri_1);
      }
    } else {
      this.r10_1.enable(WebGLRenderingContext.STENCIL_TEST);
      this.r10_1.stencilFuncSeparate(WebGLRenderingContext.FRONT, glStencilTest(drawStyle.gi_1.si_1), drawStyle.gi_1.qi_1, drawStyle.gi_1.pi_1);
      this.r10_1.stencilFuncSeparate(WebGLRenderingContext.BACK, glStencilTest(drawStyle.hi_1.si_1), drawStyle.hi_1.qi_1, drawStyle.hi_1.pi_1);
      this.r10_1.stencilOpSeparate(WebGLRenderingContext.FRONT, glStencilOp(drawStyle.gi_1.mi_1), glStencilOp(drawStyle.gi_1.ni_1), glStencilOp(drawStyle.gi_1.oi_1));
      this.r10_1.stencilOpSeparate(WebGLRenderingContext.BACK, glStencilOp(drawStyle.hi_1.mi_1), glStencilOp(drawStyle.hi_1.ni_1), glStencilOp(drawStyle.hi_1.oi_1));
      this.r10_1.stencilMaskSeparate(WebGLRenderingContext.FRONT, drawStyle.gi_1.ri_1);
      this.r10_1.stencilMaskSeparate(WebGLRenderingContext.BACK, drawStyle.hi_1.ri_1);
    }
    if (this.v10_1 ? true : !this.u10_1.xh_1.equals(drawStyle.xh_1)) {
      var tmp2_subject = drawStyle.xh_1;
      var tmp0 = tmp2_subject.c3_1;
      switch (tmp0) {
        case 0:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquation(WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          ;
          break;
        case 1:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquation(WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          ;
          break;
        case 2:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquation(WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE);
          ;
          break;
        case 5:
          this.r10_1.disable(WebGLRenderingContext.BLEND);
          ;
          break;
        case 3:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquationSeparate(WebGLRenderingContext.FUNC_REVERSE_SUBTRACT, WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFuncSeparate(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE, WebGLRenderingContext.ONE, WebGLRenderingContext.ONE);
          ;
          break;
        case 4:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquation(WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFunc(WebGLRenderingContext.DST_COLOR, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          ;
          break;
        case 6:
          this.r10_1.enable(WebGLRenderingContext.BLEND);
          this.r10_1.blendEquation(WebGLRenderingContext.FUNC_ADD);
          this.r10_1.blendFunc(WebGLRenderingContext.ZERO, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          ;
          break;
      }
      this.u10_1.xh_1 = drawStyle.xh_1;
    }
    if (this.v10_1 ? true : !(this.u10_1.ai_1 === drawStyle.ai_1)) {
      if (drawStyle.ai_1) {
        this.r10_1.enable(WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE);
        this.r10_1.disable(WebGLRenderingContext.BLEND);
      } else {
        this.r10_1.disable(WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE);
      }
      this.u10_1.ai_1 = drawStyle.ai_1;
    }
    if (this.v10_1 ? true : !this.u10_1.vh_1.equals(drawStyle.vh_1)) {
      var tmp3_subject = drawStyle.vh_1;
      var tmp0_0 = tmp3_subject.c3_1;
      switch (tmp0_0) {
        case 0:
          this.r10_1.depthFunc(WebGLRenderingContext.ALWAYS);
          ;
          break;
        case 4:
          this.r10_1.depthFunc(WebGLRenderingContext.GREATER);
          ;
          break;
        case 5:
          this.r10_1.depthFunc(WebGLRenderingContext.GEQUAL);
          ;
          break;
        case 1:
          this.r10_1.depthFunc(WebGLRenderingContext.LESS);
          ;
          break;
        case 2:
          this.r10_1.depthFunc(WebGLRenderingContext.LEQUAL);
          ;
          break;
        case 3:
          this.r10_1.depthFunc(WebGLRenderingContext.EQUAL);
          ;
          break;
        case 6:
          this.r10_1.depthFunc(WebGLRenderingContext.NEVER);
          ;
          break;
      }
      this.u10_1.vh_1 = drawStyle.vh_1;
    }
    if (this.v10_1 ? true : !this.u10_1.yh_1.equals(drawStyle.yh_1)) {
      var tmp4_subject = drawStyle.yh_1;
      var tmp0_1 = tmp4_subject.c3_1;
      switch (tmp0_1) {
        case 0:
          this.r10_1.disable(WebGLRenderingContext.CULL_FACE);
          ;
          break;
        case 1:
          this.r10_1.enable(WebGLRenderingContext.CULL_FACE);
          this.r10_1.cullFace(WebGLRenderingContext.BACK);
          ;
          break;
        case 2:
          this.r10_1.enable(WebGLRenderingContext.CULL_FACE);
          this.r10_1.cullFace(WebGLRenderingContext.FRONT);
          ;
          break;
        case 3:
          this.r10_1.enable(WebGLRenderingContext.CULL_FACE);
          this.r10_1.cullFace(WebGLRenderingContext.FRONT_AND_BACK);
          ;
          break;
      }
      this.u10_1.yh_1 = drawStyle.yh_1;
    }
  };
  DriverWebGL.prototype.en = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = shaderGenerators$factory();
    tmp$ret$0 = this.w10_1.c1();
    return tmp$ret$0;
  };
  DriverWebGL.prototype.ok = function () {
    return Companion_getInstance_6().ok();
  };
  function instancedArrays$factory() {
    return getPropertyCallableRef('instancedArrays', 1, KProperty1, function (receiver) {
      return receiver.j11();
    }, null);
  }
  function standardDerivatives$factory() {
    return getPropertyCallableRef('standardDerivatives', 1, KProperty1, function (receiver) {
      return receiver.k11();
    }, null);
  }
  function colorBufferHalfFloat$factory() {
    return getPropertyCallableRef('colorBufferHalfFloat', 1, KProperty1, function (receiver) {
      return receiver.l11();
    }, null);
  }
  function colorBufferFloat$factory() {
    return getPropertyCallableRef('colorBufferFloat', 1, KProperty1, function (receiver) {
      return receiver.m11();
    }, null);
  }
  function halfFloatTexturesLinear$factory() {
    return getPropertyCallableRef('halfFloatTexturesLinear', 1, KProperty1, function (receiver) {
      return receiver.n11();
    }, null);
  }
  function floatTexturesLinear$factory() {
    return getPropertyCallableRef('floatTexturesLinear', 1, KProperty1, function (receiver) {
      return receiver.o11();
    }, null);
  }
  function drawBuffers$factory() {
    return getPropertyCallableRef('drawBuffers', 1, KProperty1, function (receiver) {
      return receiver.p11();
    }, null);
  }
  function depthTexture$factory() {
    return getPropertyCallableRef('depthTexture', 1, KProperty1, function (receiver) {
      return receiver.q11();
    }, null);
  }
  function shaderGenerators$factory() {
    return getPropertyCallableRef('shaderGenerators', 1, KProperty1, function (receiver) {
      return receiver.en();
    }, null);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.p12 = function (context, code, name) {
    var tmp0_elvis_lhs = context.createShader(WebGLRenderingContext.FRAGMENT_SHADER);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('failed to create shader');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var shader = tmp;
    context.shaderSource(shader, code);
    context.compileShader(shader);
    // Inline function 'kotlin.require' call
    var tmp_0 = context.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);
    var tmp0_require = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>' call
      var tmp0_elvis_lhs_0 = context.getShaderInfoLog(shader);
      var error = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = split$default(error, ['\n'], false, 0, 6, null);
      var tmp0_iterator = tmp0_forEach.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>.<anonymous>' call
        console.error(element);
      }
      console.error('---');
      // Inline function 'kotlin.collections.forEachIndexed' call
      var tmp1_forEachIndexed = split$default(code, ['\n'], false, 0, 6, null);
      var index = 0;
      var tmp0_iterator_0 = tmp1_forEachIndexed.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
        console.log('' + tmp2__anonymous__z9zvc9 + '\t' + item);
      }
      tmp$ret$0 = 'fragment shader compilation failed';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new FragmentShaderWebGL(shader, name);
  };
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function FragmentShaderWebGL(shaderObject, name) {
    Companion_getInstance_5();
    this.x12_1 = shaderObject;
    this.y12_1 = name;
  }
  function get_active() {
    init_properties_RenderTargetWebGL_kt_fm2682();
    return active;
  }
  var active;
  function ProgramRenderTargetWebGL(context, program) {
    RenderTargetWebGL.call(this, context, null, 0, 0, 1.0, Disabled_getInstance(), Companion_getInstance_2().sk());
    this.j13_1 = program;
    this.k13_1 = true;
    this.l13_1 = true;
  }
  ProgramRenderTargetWebGL.prototype.xj = function () {
    return numberToInt(this.j13_1.fu().c().ce_1);
  };
  ProgramRenderTargetWebGL.prototype.yj = function () {
    return numberToInt(this.j13_1.fu().c().de_1);
  };
  ProgramRenderTargetWebGL.prototype.bk = function () {
    return this.j13_1.fu().bk();
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.ok = function () {
    return get_active().w1();
  };
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function RenderTargetWebGL(context, framebuffer, width, height, contentScale, multisample, session) {
    Companion_getInstance_6();
    this.b10_1 = context;
    this.c10_1 = framebuffer;
    this.d10_1 = width;
    this.e10_1 = height;
    this.f10_1 = contentScale;
    this.g10_1 = multisample;
    this.h10_1 = session;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.i10_1 = tmp$ret$0;
    this.j10_1 = null;
    this.k10_1 = false;
  }
  RenderTargetWebGL.prototype.xj = function () {
    return this.d10_1;
  };
  RenderTargetWebGL.prototype.yj = function () {
    return this.e10_1;
  };
  RenderTargetWebGL.prototype.bk = function () {
    return this.f10_1;
  };
  RenderTargetWebGL.prototype.m10 = function () {
    checkErrors(this.b10_1, 'preexisting errors');
    this.b10_1.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.c10_1);
    checkErrors(this.b10_1, 'bindFrameBuffer ' + this);
    this.b10_1.viewport(0, 0, this.pk(), this.qk());
    checkErrors(this.b10_1, 'viewport');
  };
  RenderTargetWebGL.prototype.l10 = function () {
    checkErrors(this.b10_1, 'preexisting errors');
    if (this.k10_1) {
      throw RuntimeException_init_$Create$('already bound');
    } else {
      push(get_active(), this);
      this.m10();
    }
  };
  var properties_initialized_RenderTargetWebGL_kt_28z8ta;
  function init_properties_RenderTargetWebGL_kt_fm2682() {
    if (properties_initialized_RenderTargetWebGL_kt_28z8ta) {
    } else {
      properties_initialized_RenderTargetWebGL_kt_28z8ta = true;
      active = ArrayDeque_init_$Create$();
    }
  }
  function get_shadeStyleCache() {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return shadeStyleCache;
  }
  var shadeStyleCache;
  function LRUCache_init_$Init$(delegate, minimalSize, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_7();
      minimalSize = 10000;
    }
    LRUCache.call($this, delegate, minimalSize);
    return $this;
  }
  function LRUCache_init_$Create$(delegate, minimalSize, $mask0, $marker) {
    return LRUCache_init_$Init$(delegate, minimalSize, $mask0, $marker, Object.create(LRUCache.prototype));
  }
  function cycleKeyMap($this, key) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = $this.o13_1;
    Companion_getInstance_7();
    var tmp1_set = true;
    tmp0_set.s5(key, tmp1_set);
    var tmp0_safe_receiver = $this.p13_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.LRUCache.cycleKeyMap.<anonymous>' call
      tmp$ret$0 = $this.m13_1.m5(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    $this.p13_1 = null;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.q13_1 = 10000;
    this.r13_1 = true;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LRUCache$keyMap$1(this$0) {
    LinkedHashMap_init_$Init$(this$0.n13_1, 0.75, this);
  }
  function LRUCache(delegate, minimalSize) {
    Companion_getInstance_7();
    this.m13_1 = delegate;
    this.n13_1 = minimalSize;
    var tmp = this;
    tmp.o13_1 = new LRUCache$keyMap$1(this);
    this.p13_1 = null;
  }
  LRUCache.prototype.m5 = function (key) {
    return this.m13_1.m5(key);
  };
  LRUCache.prototype.s13 = function (key, value) {
    this.m13_1.s13(key, value);
    cycleKeyMap(this, key);
  };
  LRUCache.prototype.k1 = function (key) {
    this.o13_1.k1(key);
    return this.m13_1.k1(key);
  };
  function CacheEntry(shadeStyle, vertexFormats, instanceAttributeFormats) {
    this.t13_1 = shadeStyle;
    this.u13_1 = vertexFormats;
    this.v13_1 = instanceAttributeFormats;
  }
  CacheEntry.prototype.toString = function () {
    return 'CacheEntry(shadeStyle=' + this.t13_1 + ', vertexFormats=' + this.u13_1 + ', instanceAttributeFormats=' + this.v13_1 + ')';
  };
  CacheEntry.prototype.hashCode = function () {
    var result = this.t13_1 == null ? 0 : hashCode(this.t13_1);
    result = imul(result, 31) + hashCode(this.u13_1) | 0;
    result = imul(result, 31) + hashCode(this.v13_1) | 0;
    return result;
  };
  CacheEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CacheEntry))
      return false;
    var tmp0_other_with_cast = other instanceof CacheEntry ? other : THROW_CCE();
    if (!equals(this.t13_1, tmp0_other_with_cast.t13_1))
      return false;
    if (!equals(this.u13_1, tmp0_other_with_cast.u13_1))
      return false;
    if (!equals(this.v13_1, tmp0_other_with_cast.v13_1))
      return false;
    return true;
  };
  function PerpetualCache() {
    this.w13_1 = HashMap_init_$Create$();
  }
  PerpetualCache.prototype.s13 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.w13_1;
    tmp0_set.s5(key, value);
  };
  PerpetualCache.prototype.m5 = function (key) {
    return this.w13_1.m5(key);
  };
  PerpetualCache.prototype.k1 = function (key) {
    return this.w13_1.k1(key);
  };
  function structureFromShadeStyle(shadeStyle, vertexFormats, instanceAttributeFormats) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    var tmp$ret$40;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$39;
    // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>' call
    var cacheEntry = new CacheEntry(shadeStyle, vertexFormats, instanceAttributeFormats);
    var tmp$ret$38;
    // Inline function 'org.openrndr.webgl.LRUCache.getOrSet' call
    var tmp0_getOrSet = get_shadeStyleCache();
    var tmp0_safe_receiver = shadeStyle;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.on_1;
    var tmp1_getOrSet = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'org.openrndr.webgl.LRUCache.getOrSet.<anonymous>' call
    tmp$ret$0 = tmp0_getOrSet.k1(cacheEntry);
    tmp$ret$1 = tmp$ret$0;
    var v = tmp$ret$1;
    var tmp;
    if (tmp1_getOrSet ? true : v == null) {
      var tmp$ret$37;
      // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>' call
      var tmp$ret$36;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$35;
      // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver_0 = shadeStyle;
      if (tmp0_safe_receiver_0 == null) {
      } else
        tmp0_safe_receiver_0.on_1 = false;
      var tmp$ret$34;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ShadeStructure_init_$Create$(null, null, null, null, null, null, null, null, null, null, null, null, null, false, 16383, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      if (!(shadeStyle == null)) {
        tmp0_apply.ul_1 = shadeStyle.sn_1;
        tmp0_apply.vl_1 = shadeStyle.tn_1;
        tmp0_apply.wl_1 = shadeStyle.un_1;
        tmp0_apply.xl_1 = shadeStyle.pn_1;
        tmp0_apply.yl_1 = shadeStyle.qn_1;
        tmp0_apply.zl_1 = shadeStyle.rn_1;
        tmp0_apply.am_1 = '';
        var tmp_0 = tmp0_apply;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp0_map = shadeStyle.x13();
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.c());
        var tmp$ret$2;
        // Inline function 'kotlin.collections.iterator' call
        tmp$ret$2 = tmp0_map.z().h();
        var tmp0_iterator = tmp$ret$2;
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          var tmp$ret$3;
          // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = mapTypeToUniform(item.c1(), item.a1());
          tmp0_mapTo.a(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        var tmp_1 = tmp$ret$5;
        tmp_0.rl_1 = joinToString$default(tmp_1, '\n', null, null, 0, null, null, 62, null);
      }
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2 = tmp0_apply;
      var tmp$ret$8;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = vertexFormats.h();
      while (tmp0_iterator_0.i()) {
        var element = tmp0_iterator_0.j();
        var tmp$ret$6;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$6 = element.og_1;
        var list = tmp$ret$6;
        addAll(tmp0_flatMapTo, list);
      }
      tmp$ret$7 = tmp0_flatMapTo;
      tmp$ret$8 = tmp$ret$7;
      var tmp_3 = tmp$ret$8;
      var tmp_4 = joinToString$default(tmp_3, '', null, null, 0, null, structureFromShadeStyle$lambda, 30, null);
      var tmp$ret$11;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$10;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = instanceAttributeFormats.h();
      while (tmp0_iterator_1.i()) {
        var element_0 = tmp0_iterator_1.j();
        var tmp$ret$9;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$9 = element_0.og_1;
        var list_0 = tmp$ret$9;
        addAll(tmp0_flatMapTo_0, list_0);
      }
      tmp$ret$10 = tmp0_flatMapTo_0;
      tmp$ret$11 = tmp$ret$10;
      var tmp_5 = tmp$ret$11;
      tmp_2.bm_1 = tmp_4 + joinToString$default(tmp_5, '', null, null, 0, null, structureFromShadeStyle$lambda_0, 30, null);
      tmp$ret$12 = Unit_getInstance();
      var tmp$ret$19;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_6 = tmp0_apply;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_2 = vertexFormats.h();
      while (tmp0_iterator_2.i()) {
        var element_1 = tmp0_iterator_2.j();
        var tmp$ret$13;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$13 = element_1.og_1;
        var list_1 = tmp$ret$13;
        addAll(tmp0_flatMapTo_1, list_1);
      }
      tmp$ret$14 = tmp0_flatMapTo_1;
      tmp$ret$15 = tmp$ret$14;
      var tmp_7 = tmp$ret$15;
      var tmp_8 = joinToString$default(tmp_7, '', null, null, 0, null, structureFromShadeStyle$lambda_1, 30, null);
      var tmp$ret$18;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$17;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_2 = ArrayList_init_$Create$_0();
      var tmp0_iterator_3 = instanceAttributeFormats.h();
      while (tmp0_iterator_3.i()) {
        var element_2 = tmp0_iterator_3.j();
        var tmp$ret$16;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$16 = element_2.og_1;
        var list_2 = tmp$ret$16;
        addAll(tmp0_flatMapTo_2, list_2);
      }
      tmp$ret$17 = tmp0_flatMapTo_2;
      tmp$ret$18 = tmp$ret$17;
      var tmp_9 = tmp$ret$18;
      tmp_6.cm_1 = tmp_8 + joinToString$default(tmp_9, '', null, null, 0, null, structureFromShadeStyle$lambda_2, 30, null);
      tmp$ret$19 = Unit_getInstance();
      var tmp$ret$26;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_10 = tmp0_apply;
      var tmp$ret$22;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$21;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_3 = ArrayList_init_$Create$_0();
      var tmp0_iterator_4 = vertexFormats.h();
      while (tmp0_iterator_4.i()) {
        var element_3 = tmp0_iterator_4.j();
        var tmp$ret$20;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$20 = element_3.og_1;
        var list_3 = tmp$ret$20;
        addAll(tmp0_flatMapTo_3, list_3);
      }
      tmp$ret$21 = tmp0_flatMapTo_3;
      tmp$ret$22 = tmp$ret$21;
      var tmp_11 = tmp$ret$22;
      var tmp_12 = joinToString$default(tmp_11, '', null, null, 0, null, structureFromShadeStyle$lambda_3, 30, null);
      var tmp$ret$25;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$24;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_4 = ArrayList_init_$Create$_0();
      var tmp0_iterator_5 = instanceAttributeFormats.h();
      while (tmp0_iterator_5.i()) {
        var element_4 = tmp0_iterator_5.j();
        var tmp$ret$23;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$23 = element_4.og_1;
        var list_4 = tmp$ret$23;
        addAll(tmp0_flatMapTo_4, list_4);
      }
      tmp$ret$24 = tmp0_flatMapTo_4;
      tmp$ret$25 = tmp$ret$24;
      var tmp_13 = tmp$ret$25;
      tmp_10.dm_1 = tmp_12 + joinToString$default(tmp_13, '', null, null, 0, null, structureFromShadeStyle$lambda_4, 30, null);
      tmp$ret$26 = Unit_getInstance();
      var tmp$ret$33;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_14 = tmp0_apply;
      var tmp$ret$29;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$28;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_5 = ArrayList_init_$Create$_0();
      var tmp0_iterator_6 = vertexFormats.h();
      while (tmp0_iterator_6.i()) {
        var element_5 = tmp0_iterator_6.j();
        var tmp$ret$27;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$27 = element_5.og_1;
        var list_5 = tmp$ret$27;
        addAll(tmp0_flatMapTo_5, list_5);
      }
      tmp$ret$28 = tmp0_flatMapTo_5;
      tmp$ret$29 = tmp$ret$28;
      var tmp_15 = tmp$ret$29;
      var tmp_16 = joinToString$default(tmp_15, '', null, null, 0, null, structureFromShadeStyle$lambda_5, 30, null);
      var tmp$ret$32;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp$ret$31;
      // Inline function 'kotlin.collections.flatMapTo' call
      var tmp0_flatMapTo_6 = ArrayList_init_$Create$_0();
      var tmp0_iterator_7 = instanceAttributeFormats.h();
      while (tmp0_iterator_7.i()) {
        var element_6 = tmp0_iterator_7.j();
        var tmp$ret$30;
        // Inline function 'org.openrndr.webgl.structureFromShadeStyle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$30 = element_6.og_1;
        var list_6 = tmp$ret$30;
        addAll(tmp0_flatMapTo_6, list_6);
      }
      tmp$ret$31 = tmp0_flatMapTo_6;
      tmp$ret$32 = tmp$ret$31;
      var tmp_17 = tmp$ret$32;
      tmp_14.sl_1 = tmp_16 + joinToString$default(tmp_17, '', null, null, 0, null, structureFromShadeStyle$lambda_6, 30, null);
      tmp$ret$33 = Unit_getInstance();
      var tmp_18 = tmp0_apply;
      var tmp0_safe_receiver_1 = shadeStyle;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.zn_1;
      tmp_18.em_1 = tmp1_elvis_lhs_0 == null ? false : tmp1_elvis_lhs_0;
      tmp$ret$34 = tmp0_apply;
      tmp$ret$35 = tmp$ret$34;
      tmp$ret$36 = tmp$ret$35;
      tmp$ret$37 = tmp$ret$36;
      var n = tmp$ret$37;
      tmp0_getOrSet.s13(cacheEntry, n);
      tmp = n;
    } else {
      tmp = v;
    }
    tmp$ret$38 = tmp;
    tmp$ret$39 = tmp$ret$38;
    tmp$ret$40 = tmp$ret$39;
    return tmp$ret$40;
  }
  function mapTypeToUniform(type, name) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    var tokens = split$default(type, [','], false, 0, 6, null);
    var arraySize = getOrNull(tokens, 1);
    var u = 'uniform';
    var tmp0_subject = tokens.k(0);
    var tmp;
    switch (tmp0_subject) {
      case 'Boolean':
      case 'boolean':
        tmp = u + ' bool p_' + name + ';';
        break;
      case 'Int':
      case 'int':
        tmp = u + ' int' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Matrix33':
        tmp = u + ' mat3 p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Matrix44':
        tmp = u + ' mat4' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Float':
      case 'float':
        tmp = u + ' float' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Vector2':
        tmp = u + ' vec2' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Vector3':
        tmp = u + ' vec3' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'Vector4':
        tmp = u + ' vec4' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'IntVector2':
        tmp = u + ' ivec2' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'IntVector3':
        tmp = u + ' ivec3' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'IntVector4':
        tmp = u + ' ivec4' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'ColorRGBa':
        tmp = u + ' vec4' + (!(arraySize == null) ? '[' + arraySize + ']' : '') + ' p_' + name + '; ' + mapTypeToUniform$arraySizeDefinition(arraySize, name, arraySize);
        break;
      case 'BufferTexture':
        tmp = u + ' samplerBuffer p_' + name + ';';
        break;
      case 'BufferTexture_UINT':
        tmp = u + ' usamplerBuffer p_' + name + ';';
        break;
      case 'BufferTexture_SINT':
        tmp = u + ' isamplerBuffer p_' + name + ';';
        break;
      case 'ColorBuffer':
        tmp = u + ' sampler2D p_' + name + ';';
        break;
      case 'ColorBuffer_UINT':
        tmp = u + ' usampler2D p_' + name + ';';
        break;
      case 'ColorBuffer_SINT':
        tmp = u + ' isampler2D p_' + name + ';';
        break;
      case 'DepthBuffer':
        tmp = u + ' sampler2D p_' + name + ';';
        break;
      case 'Cubemap':
        tmp = u + ' samplerCube p_' + name + ';';
        break;
      case 'Cubemap_UINT':
        tmp = u + ' usamplerCube p_' + name + ';';
        break;
      case 'Cubemap_SINT':
        tmp = u + ' isamplerCube p_' + name + ';';
        break;
      case 'ArrayCubemap':
        tmp = u + ' samplerCubeArray p_' + name + ';';
        break;
      case 'ArrayCubemap_UINT':
        tmp = u + ' usamplerCubeArray p_' + name + ';';
        break;
      case 'ArrayCubemap_SINT':
        tmp = u + ' isamplerCubeArray p_' + name + ';';
        break;
      case 'ArrayTexture':
        tmp = u + ' sampler2DArray p_' + name + ';';
        break;
      case 'ArrayTexture_UINT':
        tmp = u + ' usampler2DArray p_' + name + ';';
        break;
      case 'ArrayTexture_SINT':
        tmp = u + ' isampler2DArray p_' + name + ';';
        break;
      case 'VolumeTexture':
        tmp = u + ' sampler3D p_' + name + ';';
        break;
      case 'VolumeTexture_UINT':
        tmp = u + ' usampler3D p_' + name + ';';
        break;
      case 'VolumeTexture_SINT':
        tmp = u + ' isampler3D p_' + name + ';';
        break;
      case 'Image2D':
      case 'Image3D':
      case 'ImageCube':
      case 'Image2DArray':
      case 'ImageBuffer':
      case 'ImageCubeArray':
        var tmp$ret$1;
        // Inline function 'kotlin.text.toLowerCase' call
        var tmp0_toLowerCase = take(tokens.k(0), 1);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_toLowerCase;
        tmp$ret$1 = tmp$ret$0.toLowerCase();

        var sampler = tmp$ret$1 + drop(tokens.k(0), 1);
        var colorFormat = valueOf(tokens.k(1));
        var colorType = valueOf_0(tokens.k(2));
        var access = valueOf_1(tokens.k(3));
        var layout = imageLayout(colorFormat, colorType);
        var tmp1_subject = access;
        var tmp0 = tmp1_subject.c3_1;
        var tmp_0;
        switch (tmp0) {
          case 0:
          case 2:
            tmp_0 = 'layout(' + layout + ') ' + u + ' ' + sampler + ' p_' + name + ';';
            break;
          case 1:
            tmp_0 = 'writeonly ' + u + ' ' + sampler + ' p_' + name;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }

        tmp = tmp_0;
        break;
      default:
        throw RuntimeException_init_$Create$('unsupported type ' + type);
    }
    return tmp;
  }
  function get_glslVaryingQualifier(_this__u8e3s4) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.c3_1;
    switch (tmp0) {
      case 0:
      case 3:
      case 5:
        return 'flat ';
      case 1:
      case 2:
      case 4:
        return 'flat ';
      case 6:
      case 8:
      case 10:
        return 'flat ';
      case 7:
      case 9:
      case 11:
        return 'flat ';
      case 12:
      case 14:
      case 16:
        return 'flat ';
      case 13:
      case 15:
      case 17:
        return 'flat ';
      case 18:
      case 20:
      case 22:
        return 'flat ';
      case 19:
      case 21:
      case 23:
        return 'flat ';
      default:
        return '';
    }
  }
  function get_glslType(_this__u8e3s4) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.c3_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 3:
      case 5:
        tmp = 'int';
        break;
      case 1:
      case 2:
      case 4:
        tmp = 'uint';
        break;
      case 6:
      case 8:
      case 10:
        tmp = 'uvec2';
        break;
      case 7:
      case 9:
      case 11:
        tmp = 'ivec2';
        break;
      case 12:
      case 14:
      case 16:
        tmp = 'uvec3';
        break;
      case 13:
      case 15:
      case 17:
        tmp = 'ivec3';
        break;
      case 18:
      case 20:
      case 22:
        tmp = 'uvec4';
        break;
      case 19:
      case 21:
      case 23:
        tmp = 'ivec4';
        break;
      case 24:
        tmp = 'float';
        break;
      case 25:
        tmp = 'vec2';
        break;
      case 26:
        tmp = 'vec3';
        break;
      case 27:
        tmp = 'vec4';
        break;
      case 28:
        tmp = 'mat2';
        break;
      case 29:
        tmp = 'mat3';
        break;
      case 30:
        tmp = 'mat4';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function array(item) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return item.an_1 === 1 ? '' : '[' + item.an_1 + ']';
  }
  function imageLayout(format, type) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    var tmp0_subject = new Pair(format, type);
    var tmp;
    if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_UINT8_getInstance()))) {
      tmp = 'r8';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_UINT8_INT_getInstance()))) {
      tmp = 'r8u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_SINT8_INT_getInstance()))) {
      tmp = 'r8i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_UINT16_getInstance()))) {
      tmp = 'r16';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_UINT16_INT_getInstance()))) {
      tmp = 'r16u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_SINT16_INT_getInstance()))) {
      tmp = 'r16i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_FLOAT16_getInstance()))) {
      tmp = 'r16f';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_R_getInstance(), ColorType_FLOAT32_getInstance()))) {
      tmp = 'r32f';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_UINT8_getInstance()))) {
      tmp = 'rg8';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_UINT8_INT_getInstance()))) {
      tmp = 'rg8u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_SINT8_INT_getInstance()))) {
      tmp = 'rg8i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_UINT16_getInstance()))) {
      tmp = 'rg16';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_UINT16_INT_getInstance()))) {
      tmp = 'rg16u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_SINT16_INT_getInstance()))) {
      tmp = 'rg16i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_FLOAT16_getInstance()))) {
      tmp = 'rg16f';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RG_getInstance(), ColorType_FLOAT32_getInstance()))) {
      tmp = 'rg32f';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_UINT8_getInstance()))) {
      tmp = 'rgba8';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_UINT8_INT_getInstance()))) {
      tmp = 'rgba8u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_SINT8_INT_getInstance()))) {
      tmp = 'rgba8i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_UINT16_getInstance()))) {
      tmp = 'rgba16';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_UINT16_INT_getInstance()))) {
      tmp = 'rgba16u';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_SINT16_INT_getInstance()))) {
      tmp = 'rgba16i';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_FLOAT16_getInstance()))) {
      tmp = 'rgba16f';
    } else if (tmp0_subject.equals(new Pair(ColorFormat_RGBa_getInstance(), ColorType_FLOAT32_getInstance()))) {
      tmp = 'rgba32f';
    } else {
      var tmp0_error = 'unsupported layout: ' + format + ' ' + type;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function mapTypeToUniform$arraySizeDefinition(_this__u8e3s4, $name, arraySize) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = '';
    } else {
      tmp = '\n#define p_' + $name + '_SIZE ' + arraySize;
    }
    return tmp;
  }
  function structureFromShadeStyle$lambda(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return get_glslVaryingQualifier(it.zm_1) + 'out ' + get_glslType(it.zm_1) + ' va_' + it.xm_1 + array(it) + ';\n';
  }
  function structureFromShadeStyle$lambda_0(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return get_glslVaryingQualifier(it.zm_1) + 'out ' + get_glslType(it.zm_1) + ' vi_' + it.xm_1 + array(it) + ';\n';
  }
  function structureFromShadeStyle$lambda_1(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return get_glslVaryingQualifier(it.zm_1) + 'in ' + get_glslType(it.zm_1) + ' va_' + it.xm_1 + array(it) + ';\n';
  }
  function structureFromShadeStyle$lambda_2(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return get_glslVaryingQualifier(it.zm_1) + 'in ' + get_glslType(it.zm_1) + ' vi_' + it.xm_1 + array(it) + ';\n';
  }
  function structureFromShadeStyle$lambda_3(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return '    va_' + it.xm_1 + ' = a_' + it.xm_1 + ';\n';
  }
  function structureFromShadeStyle$lambda_4(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return 'vi_' + it.xm_1 + ' = i_' + it.xm_1 + ';\n';
  }
  function structureFromShadeStyle$lambda_5(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return 'in ' + get_glslType(it.zm_1) + ' a_' + it.xm_1 + array(it) + ';\n';
  }
  function structureFromShadeStyle$lambda_6(it) {
    init_properties_ShadeStructureWebGL_kt_a0fphd();
    return 'in ' + get_glslType(it.zm_1) + ' i_' + it.xm_1 + array(it) + ';\n';
  }
  var properties_initialized_ShadeStructureWebGL_kt_oenrj1;
  function init_properties_ShadeStructureWebGL_kt_a0fphd() {
    if (properties_initialized_ShadeStructureWebGL_kt_oenrj1) {
    } else {
      properties_initialized_ShadeStructureWebGL_kt_oenrj1 = true;
      var tmp = new PerpetualCache();
      shadeStyleCache = LRUCache_init_$Create$(tmp, 0, 2, null);
    }
  }
  function get_logger() {
    init_properties_ShadeStyleManagerWebGL_kt_9sgkpi();
    return logger;
  }
  var logger;
  function ShadeStyleManagerWebGL$shader$lambda() {
    return 'creating default shader';
  }
  function ShadeStyleManagerWebGL(name, vsGenerator, fsGenerator, session) {
    ShadeStyleManager.call(this, name);
    this.z13_1 = vsGenerator;
    this.a14_1 = fsGenerator;
    this.b14_1 = session;
    this.c14_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.d14_1 = tmp$ret$0;
  }
  ShadeStyleManagerWebGL.prototype.ql = function (style, vertexFormats, instanceFormats) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_safe_receiver = style;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yn_1;
    var tmp0_map = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>' call
      tmp$ret$0 = item.fg();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var outputInstanceFormats = plus(instanceFormats, tmp$ret$2);
    if (style == null) {
      var tmp$ret$4;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>' call
      if (this.c14_1 == null) {
        var tmp = get_logger();
        tmp.cb(ShadeStyleManagerWebGL$shader$lambda);
        var structure = structureFromShadeStyle(style, vertexFormats, outputInstanceFormats);
        this.c14_1 = Companion_getInstance_3().fm(this.z13_1(structure), null, null, null, this.a14_1(structure), 'shade-style-default:' + this.pl_1, Companion_getInstance_2().sk());
        var tmp_0 = this.c14_1;
        (tmp_0 instanceof ShaderWebGL ? tmp_0 : THROW_CCE()).m12_1 = false;
      }
      tmp$ret$3 = ensureNotNull(this.c14_1);
      tmp$ret$4 = tmp$ret$3;
      return tmp$ret$4;
    } else {
      var tmp$ret$19;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$18;
      // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>' call
      var structure_0 = structureFromShadeStyle(style, vertexFormats, outputInstanceFormats);
      var tmp$ret$6;
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = this.d14_1;
      var value = tmp0_getOrPut.k1(structure_0);
      var tmp_1;
      if (value == null) {
        var tmp$ret$5;
        // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>.<anonymous>' call
        var tmp_2;
        try {
          tmp_2 = Companion_getInstance_3().fm(this.z13_1(structure_0), null, null, null, this.a14_1(structure_0), 'shade-style-custom:' + this.pl_1 + '-' + structure_0.hashCode(), Companion_getInstance_2().sk());
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            throw $p;
          } else {
            throw $p;
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$5 = tmp_2;
        var answer = tmp$ret$5;
        tmp0_getOrPut.s5(structure_0, answer);
        tmp_1 = answer;
      } else {
        tmp_1 = value;
      }
      tmp$ret$6 = tmp_1;
      var shader = tmp$ret$6;
      (shader instanceof ShaderWebGL ? shader : THROW_CCE()).m12_1 = false;
      shader.mn();
      var textureIndex = 2;
      var imageIndex = 0;
      var tmp$ret$17;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_iterator_0 = style.e14().z().h();
      while (tmp0_iterator_0.i()) {
        var it = tmp0_iterator_0.j();
        var value_0 = it.c1();
        if (typeof value_0 === 'number') {
          shader.gh('p_' + it.a1(), value_0);
        } else {
          if (typeof value_0 === 'number') {
            shader.gh('p_' + it.a1(), value_0);
          } else {
            if (typeof value_0 === 'boolean') {
              shader.r14('p_' + it.a1(), value_0);
            } else {
              if (typeof value_0 === 'number') {
                shader.o14('p_' + it.a1(), value_0);
              } else {
                if (value_0 instanceof Matrix44) {
                  shader.eh('p_' + it.a1(), value_0);
                } else {
                  if (value_0 instanceof Matrix33) {
                    shader.q14('p_' + it.a1(), value_0);
                  } else {
                    if (value_0 instanceof Vector4) {
                      shader.f14('p_' + it.a1(), value_0);
                    } else {
                      if (value_0 instanceof Vector3) {
                        shader.p14('p_' + it.a1(), value_0);
                      } else {
                        if (value_0 instanceof Vector2) {
                          shader.fh('p_' + it.a1(), value_0);
                        } else {
                          if (value_0 instanceof ColorRGBa) {
                            shader.ji('p_' + it.a1(), value_0);
                          } else {
                            if (value_0 instanceof ColorBuffer) {
                              value_0.rg(textureIndex);
                              shader.o14('p_' + it.a1(), textureIndex);
                              var tmp1 = textureIndex;
                              textureIndex = tmp1 + 1 | 0;
                            } else {
                              if (isInterface(value_0, DepthBuffer)) {
                                value_0.rg(textureIndex);
                                shader.o14('p_' + it.a1(), textureIndex);
                                var tmp2 = textureIndex;
                                textureIndex = tmp2 + 1 | 0;
                              } else {
                                if (value_0 instanceof BufferTexture) {
                                  value_0.rg(textureIndex);
                                  shader.o14('p_' + it.a1(), textureIndex);
                                  var tmp3 = textureIndex;
                                  textureIndex = tmp3 + 1 | 0;
                                } else {
                                  if (isInterface(value_0, Cubemap)) {
                                    value_0.rg(textureIndex);
                                    shader.o14('p_' + it.a1(), textureIndex);
                                    var tmp4 = textureIndex;
                                    textureIndex = tmp4 + 1 | 0;
                                  } else {
                                    if (value_0 instanceof ArrayTexture) {
                                      value_0.rg(textureIndex);
                                      shader.o14('p_' + it.a1(), textureIndex);
                                      var tmp5 = textureIndex;
                                      textureIndex = tmp5 + 1 | 0;
                                    } else {
                                      if (isInterface(value_0, ArrayCubemap)) {
                                        value_0.rg(textureIndex);
                                        shader.o14('p_' + it.a1(), textureIndex);
                                        var tmp6 = textureIndex;
                                        textureIndex = tmp6 + 1 | 0;
                                      } else {
                                        if (isInterface(value_0, VolumeTexture)) {
                                          value_0.rg(textureIndex);
                                          shader.o14('p_' + it.a1(), textureIndex);
                                          var tmp7 = textureIndex;
                                          textureIndex = tmp7 + 1 | 0;
                                        } else {
                                          if (value_0 instanceof ImageBinding) {
                                            shader.n14('p_' + it.a1(), imageIndex, value_0);
                                            var tmp8 = imageIndex;
                                            imageIndex = tmp8 + 1 | 0;
                                          } else {
                                            if (isDoubleArray(value_0)) {
                                              var tmp_4 = 'p_' + it.a1();
                                              var tmp$ret$9;
                                              // Inline function 'kotlin.collections.map' call
                                              var tmp0_map_0 = value_0;
                                              var tmp$ret$8;
                                              // Inline function 'kotlin.collections.mapTo' call
                                              var tmp0_mapTo_0 = ArrayList_init_$Create$(tmp0_map_0.length);
                                              var indexedObject = tmp0_map_0;
                                              var inductionVariable = 0;
                                              var last = indexedObject.length;
                                              while (inductionVariable < last) {
                                                var item_0 = indexedObject[inductionVariable];
                                                inductionVariable = inductionVariable + 1 | 0;
                                                var tmp$ret$7;
                                                // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>.<anonymous>.<anonymous>' call
                                                tmp$ret$7 = item_0;
                                                tmp0_mapTo_0.a(tmp$ret$7);
                                              }
                                              tmp$ret$8 = tmp0_mapTo_0;
                                              tmp$ret$9 = tmp$ret$8;
                                              shader.li(tmp_4, toFloatArray(tmp$ret$9));
                                            } else {
                                              if (isIntArray(value_0)) {
                                                shader.m14('p_' + it.a1(), value_0);
                                              } else {
                                                if (isArray(value_0)) {
                                                  // Inline function 'kotlin.require' call
                                                  var tmp$ret$11;
                                                  // Inline function 'kotlin.collections.isNotEmpty' call
                                                  var tmp1_isNotEmpty = value_0;
                                                  var tmp$ret$10;
                                                  // Inline function 'kotlin.collections.isEmpty' call
                                                  tmp$ret$10 = tmp1_isNotEmpty.length === 0;
                                                  tmp$ret$11 = !tmp$ret$10;
                                                  var tmp2_require = tmp$ret$11;
                                                  // Inline function 'kotlin.contracts.contract' call
                                                  // Inline function 'kotlin.require' call
                                                  // Inline function 'kotlin.contracts.contract' call
                                                  if (!tmp2_require) {
                                                    var tmp$ret$12;
                                                    // Inline function 'kotlin.require.<anonymous>' call
                                                    tmp$ret$12 = 'Failed requirement.';
                                                    var message = tmp$ret$12;
                                                    throw IllegalArgumentException_init_$Create$(toString(message));
                                                  }
                                                  var tmp9_subject = firstOrNull(value_0);
                                                  if (tmp9_subject instanceof Matrix44) {
                                                    var tmp_5 = 'p_' + it.a1();
                                                    shader.l14(tmp_5, isArray(value_0) ? value_0 : THROW_CCE());
                                                  } else {
                                                    if (!(tmp9_subject == null) ? typeof tmp9_subject === 'number' : false) {
                                                      var tmp_6 = 'p_' + it.a1();
                                                      shader.k14(tmp_6, isArray(value_0) ? value_0 : THROW_CCE());
                                                    } else {
                                                      if (tmp9_subject instanceof ColorRGBa) {
                                                        var tmp_7 = 'p_' + it.a1();
                                                        shader.j14(tmp_7, isArray(value_0) ? value_0 : THROW_CCE());
                                                      } else {
                                                        if (tmp9_subject instanceof Vector4) {
                                                          var tmp_8 = 'p_' + it.a1();
                                                          shader.g14(tmp_8, isArray(value_0) ? value_0 : THROW_CCE());
                                                        } else {
                                                          if (tmp9_subject instanceof Vector3) {
                                                            var tmp_9 = 'p_' + it.a1();
                                                            shader.i14(tmp_9, isArray(value_0) ? value_0 : THROW_CCE());
                                                          } else {
                                                            if (tmp9_subject instanceof Vector2) {
                                                              var tmp_10 = 'p_' + it.a1();
                                                              shader.h14(tmp_10, isArray(value_0) ? value_0 : THROW_CCE());
                                                            } else {
                                                              if (!(tmp9_subject == null) ? isInterface(tmp9_subject, CastableToVector4) : false) {
                                                                var tmp_11 = 'p_' + it.a1();
                                                                var tmp$ret$16;
                                                                // Inline function 'kotlin.collections.toTypedArray' call
                                                                var tmp$ret$15;
                                                                // Inline function 'kotlin.collections.map' call
                                                                var tmp3_map = isArray(value_0) ? value_0 : THROW_CCE();
                                                                var tmp$ret$14;
                                                                // Inline function 'kotlin.collections.mapTo' call
                                                                var tmp0_mapTo_1 = ArrayList_init_$Create$(tmp3_map.length);
                                                                var indexedObject_0 = tmp3_map;
                                                                var inductionVariable_0 = 0;
                                                                var last_0 = indexedObject_0.length;
                                                                while (inductionVariable_0 < last_0) {
                                                                  var item_1 = indexedObject_0[inductionVariable_0];
                                                                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                                                                  var tmp$ret$13;
                                                                  // Inline function 'org.openrndr.webgl.ShadeStyleManagerWebGL.shader.<anonymous>.<anonymous>.<anonymous>' call
                                                                  tmp$ret$13 = item_1.xe();
                                                                  tmp0_mapTo_1.a(tmp$ret$13);
                                                                }
                                                                tmp$ret$14 = tmp0_mapTo_1;
                                                                tmp$ret$15 = tmp$ret$14;
                                                                var tmp4_toTypedArray = tmp$ret$15;
                                                                tmp$ret$16 = copyToArray(tmp4_toTypedArray);
                                                                shader.g14(tmp_11, tmp$ret$16);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  if (isInterface(value_0, CastableToVector4)) {
                                                    shader.f14('p_' + it.a1(), value_0.xe());
                                                  } else {
                                                    throw RuntimeException_init_$Create$('unsupported value type ' + getKClassFromExpression(value_0));
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      tmp$ret$17 = Unit_getInstance();
      tmp$ret$18 = shader;
      tmp$ret$19 = tmp$ret$18;
      return tmp$ret$19;
    }
  };
  function logger$lambda() {
    init_properties_ShadeStyleManagerWebGL_kt_9sgkpi();
    return Unit_getInstance();
  }
  var properties_initialized_ShadeStyleManagerWebGL_kt_l7tjke;
  function init_properties_ShadeStyleManagerWebGL_kt_9sgkpi() {
    if (properties_initialized_ShadeStyleManagerWebGL_kt_l7tjke) {
    } else {
      properties_initialized_ShadeStyleManagerWebGL_kt_l7tjke = true;
      var tmp = KotlinLogging_getInstance();
      logger = tmp.wa(logger$lambda);
    }
  }
  function get_rotate2() {
    init_properties_ShaderGeneratorsWebGL_kt_yfy6io();
    return rotate2;
  }
  var rotate2;
  function ShaderGeneratorsWebGL() {
  }
  ShaderGeneratorsWebGL.prototype.wp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_vertex_buffer');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4();
    var tmp_3 = tmp_2.iq(false, false, 3, null);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.am_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().yp_1;
    var tmp4_elvis_lhs = shadeStructure.zl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.dq('0', '0', null, null, null, null, 60, null);
    var tmp5_elvis_lhs = shadeStructure.wl_1;
    var tmp_10 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_11;
    if (!shadeStructure.em_1) {
      tmp_11 = trimMargin$default('\n            |    o_color = x_fill;\n            |    o_color.rgb *= o_color.a;', null, 1, null);
    } else {
      tmp_11 = '';
    }
    var tmp_12 = '#version 300 es\n        |precision highp float;\n        |' + tmp + '\n        |' + tmp_0 + '\n        |' + tmp_1 + '\n        |out vec4 o_color;\n        |uniform sampler2D image;\n        |' + tmp_3 + '\n        |' + tmp_4 + '\n        |' + tmp_5 + '\n        |' + tmp_6 + '\n\n        |' + tmp_7 + '\n        |void main(void) {\n        |   const int v_instance = 0;\n        |    ' + tmp_9 + '\n        |    vec4 x_fill = u_fill;\n        |    vec4 x_stroke = u_stroke;\n        |    {\n        |       ' + tmp_10 + '\n        |    }\n        ' + tmp_11 + '\n|}';
    return trimMargin$default(tmp_12, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.vp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_vertex_buffer');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 3, null);
    var tmp1_elvis_lhs = shadeStructure.sl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = shadeStructure.rl_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp4_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.fq('0', null, 2, null);
    var tmp5_elvis_lhs = shadeStructure.dm_1;
    var tmp_10 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_11;
    var tmp6_safe_receiver = shadeStructure.sl_1;
    var tmp_12;
    if (tmp6_safe_receiver == null) {
      tmp_12 = null;
    } else {
      tmp_12 = contains$default(tmp6_safe_receiver, 'vec3 a_normal;', false, 2, null);
    }
    if (tmp_12 === true) {
      tmp_11 = 'x_normal = a_normal;';
    } else {
      tmp_11 = '';
    }
    var tmp_13 = tmp_11;
    var tmp_14 = Companion_getInstance_4().aq_1;
    var tmp7_elvis_lhs = shadeStructure.ul_1;
    var tmp_15 = '#version 300 es\n        |precision highp float;\n        |' + tmp + '\n        |' + tmp_0 + '\n        |' + tmp_2 + '\n        |' + tmp_3 + '\n        |' + tmp_4 + '\n        |' + tmp_5 + '\n        |' + tmp_6 + '\n        |' + tmp_7 + '\n        |void main() {\n        |' + tmp_9 + '\n        |' + tmp_10 + '\n        |vec3 x_normal = vec3(0.0, 0.0, 0.0);\n        |' + tmp_13 + '\n        |vec3 x_position = a_position;\n        |' + tmp_14 + '\n        |{\n        |   ' + (tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs) + '\n        |}\n        |' + Companion_getInstance_4().bq_1 + '\n        |gl_Position = v_clipPosition;\n        |}';
    return trimMargin$default(tmp_15, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.to = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_image');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4();
    var tmp_3 = tmp_2.iq(false, false, 3, null);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp_5 = Companion_getInstance_4().yp_1;
    var tmp3_elvis_lhs = shadeStructure.am_1;
    var tmp_6 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = shadeStructure.zl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.dq('0', null, null, null, 'v_boundsPosition', null, 46, null);
    var tmp5_elvis_lhs = shadeStructure.wl_1;
    var tmp_10 = '#version 300 es\n        |precision highp float;\n        |' + tmp + '\n        |' + tmp_0 + '\n        |' + tmp_1 + '\n        |//layout(origin_upper_left) in vec4 gl_FragCoord;\n        |uniform sampler2D image;\n        |out vec4 o_color;\n        |' + tmp_3 + '\n        |' + tmp_4 + '\n        |' + tmp_5 + '\n        |' + tmp_6 + '\n        |' + tmp_7 + '\n        |in vec3 v_boundsPosition;\n        |\n        |vec4 colorTransform(vec4 color, float[25] matrix) {\n        |   float r = color.r * matrix[0] + color.g * matrix[5] + color.b * matrix[10] + color.a * matrix[15] + matrix[20];\n        |   float g = color.r * matrix[1] + color.g * matrix[6] + color.b * matrix[11] + color.a * matrix[16] + matrix[21];\n        |   float b = color.r * matrix[2] + color.g * matrix[7] + color.b * matrix[12] + color.a * matrix[17] + matrix[22];\n        |   float a = color.r * matrix[3] + color.g * matrix[8] + color.b * matrix[13] + color.a * matrix[18] + matrix[23];\n        |   return vec4(r, g, b, a);\n        |}\n        |void main(void) {\n        |   ' + tmp_9 + '\n        |   vec4 x_fill = texture(image, va_texCoord0);\n        |   vec4 x_stroke = u_stroke;\n        |   {\n        |       ' + (tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs) + '\n        |   }\n        |   float div = x_fill.a != 0.0 ? x_fill.a : 1.0;\n        |   x_fill.rgb /= div;\n        |   //x_fill = colorTransform(x_fill, u_colorMatrix);\n        |   x_fill.rgb *= x_fill.a;\n        |   o_color = x_fill;\n        |}';
    return trimMargin$default(tmp_10, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.so = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_image');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 3, null);
    var tmp1_elvis_lhs = shadeStructure.sl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = shadeStructure.rl_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp4_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.fq('0', null, 2, null);
    var tmp5_elvis_lhs = shadeStructure.dm_1;
    var tmp_10 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_11 = Companion_getInstance_4().aq_1;
    var tmp6_elvis_lhs = shadeStructure.ul_1;
    var tmp_12 = '#version 300 es\n        |precision highp float;\n        |' + tmp + '\n        |' + tmp_0 + '\n        |' + tmp_2 + '\n        |uniform int u_flipV;\n        |' + tmp_3 + '\n        |' + tmp_4 + '\n        |' + tmp_5 + '\n        |' + tmp_6 + '\n        |' + tmp_7 + '\n        |out vec3 v_boundsPosition;\n        |void main() {\n        |   int v_instance = 0;\n        |   ' + tmp_9 + '\n        |   ' + tmp_10 + '\n        |   ' + tmp_11 + '\n        |   vec3 x_normal = a_normal;\n        |   vec3 x_position = a_position;\n        |   x_position.xy = a_position.xy * i_target.zw + i_target.xy;\n        |   v_boundsPosition = vec3(a_texCoord0.xy, 1.0);\n        |   va_texCoord0.xy = a_texCoord0.xy * i_source.zw + i_source.xy;\n        |   if (u_flipV == 0) {\n        |       va_texCoord0.y = 1.0 - va_texCoord0.y;\n        |   }\n        |   {\n        |       ' + (tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs) + '\n        |   }\n        |' + Companion_getInstance_4().bq_1 + '\n        |gl_Position = v_clipPosition;\n        |}';
    return trimMargin$default(tmp_12, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.vo = function (shadeStructure) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('not supported');
  };
  ShaderGeneratorsWebGL.prototype.uo = function (shadeStructure) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('not supported');
  };
  ShaderGeneratorsWebGL.prototype.kp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_circle');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4();
    var tmp_3 = tmp_2.iq(false, false, 1, null);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp_5 = Companion_getInstance_4().yp_1;
    var tmp3_elvis_lhs = shadeStructure.zl_1;
    var tmp_6 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_7 = Companion_getInstance_4();
    var tmp_8 = tmp_7.dq(null, null, null, null, 'vec3(0.0, 0.0, 0.0)', 'v_boundsSize', 15, null);
    var tmp4_elvis_lhs = shadeStructure.wl_1;
    var tmp_9 = '#version 300 es\n        |precision highp float;\n        |' + tmp + '\n        |' + tmp_0 + '\n        |' + tmp_1 + '\n        |out vec4 o_color;\n        |' + tmp_3 + '\n        |' + tmp_4 + '\n        |' + tmp_5 + '\n\n        |' + tmp_6 + '\n        |in vec3 v_boundsSize;\n        |void main(void) {\n            ' + tmp_8 + '\n\n        |   vec4 x_fill = vi_fill;\n        |   vec4 x_stroke = vi_stroke;\n        |   {\n        |       ' + (tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs) + '\n        |   }\n        |   x_fill.rgb *= x_fill.a;\n        |   o_color = x_fill;\n        |}';
    return trimMargin$default(tmp_9, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.jp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_point');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 1, null);
    var tmp1_elvis_lhs = shadeStructure.sl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = shadeStructure.rl_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp4_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.fq(null, null, 3, null);
    var tmp5_elvis_lhs = shadeStructure.dm_1;
    var tmp_10 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_11 = Companion_getInstance_4().aq_1;
    var tmp6_elvis_lhs = shadeStructure.ul_1;
    var tmp_12 = '\n' + tmp + '\n' + tmp_0 + '\n' + tmp_2 + '\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n' + tmp_6 + '\n\n' + tmp_7 + '\n\n//flat out int v_instance;\nout vec3 v_boundsSize;\nvoid main() {\n    //v_instance = 0;\n    ' + tmp_9 + '\n    ' + tmp_10 + '\n\n    v_boundsSize = vec3(0, 0.0, 0.0);\n    ' + tmp_11 + '\n    vec3 x_normal = vec3(0.0, 0.0, 1.0);\n    vec3 x_position = a_position  + i_offset;\n    {\n        ' + (tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs) + '\n    }\n    va_position = x_position;\n    ' + Companion_getInstance_4().bq_1 + '\n    gl_Position = v_clipPosition;\n}|        \n        ';
    return trimMargin$default(tmp_12, null, 1, null);
  };
  ShaderGeneratorsWebGL.prototype.dn = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_circle');
    var tmp0_elvis_lhs = shadeStructure.rl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.tl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4().hq(true, false);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_3 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp_4 = Companion_getInstance_4().yp_1;
    var tmp3_elvis_lhs = shadeStructure.zl_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4();
    var tmp_7 = tmp_6.dq(null, null, null, null, 'vec3(va_texCoord0, 0.0)', 'v_boundsSize', 15, null);
    var tmp4_elvis_lhs = shadeStructure.wl_1;
    return '#version 300 es        \n    precision highp float;\n' + tmp + '\n' + tmp_0 + '\n' + tmp_1 + '\n//layout(origin_upper_left) in vec4 gl_FragCoord;\n\n' + tmp_2 + '\n' + tmp_3 + '\n' + tmp_4 + '\n\n\n' + tmp_5 + '\nin vec3 v_boundsSize;\nout vec4 o_color;\nvoid main(void) {\n    int v_instance = 0;\n\n    ' + tmp_7 + '\n    float smoothFactor = 3.0;\n\n    vec4 x_fill = vi_fill;\n    vec4 x_stroke = vi_stroke;\n    float x_strokeWeight = vi_strokeWeight;\n    \n    {\n        ' + (tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs) + '\n    }\n    float wd = fwidth(length(va_texCoord0 - vec2(0.0)));\n    float d = length(va_texCoord0 - vec2(0.5)) * 2.0;\n\n    float or = smoothstep(0.0, wd * smoothFactor, 1.0 - d);\n    float b = x_strokeWeight / vi_radius.x;\n    float ir = smoothstep(0.0, wd * smoothFactor, 1.0 - b - d);\n\n    vec4 final = vec4(0.0);\n    final.rgb =  x_stroke.rgb;\n    final.a = or * (1.0 - ir) * x_stroke.a;\n    final.rgb *= final.a;\n\n    final.rgb += x_fill.rgb * ir * x_fill.a;\n    final.a += ir * x_fill.a;\n    o_color = final;\n}\n';
  };
  ShaderGeneratorsWebGL.prototype.cn = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_circle');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 1, null);
    var tmp1_elvis_lhs = shadeStructure.sl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = shadeStructure.rl_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp4_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.fq('0', null, 2, null);
    var tmp5_elvis_lhs = shadeStructure.dm_1;
    var tmp_10 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_11 = Companion_getInstance_4().aq_1;
    var tmp6_elvis_lhs = shadeStructure.ul_1;
    return '#version 300 es        \nprecision highp float;        \n// -- circle vertex shader        \n' + tmp + '\n' + tmp_0 + '\n' + tmp_2 + '\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n' + tmp_6 + '\n\n' + tmp_7 + '\n\n\nout vec3 v_boundsSize;\nvoid main() {\n    int v_instance = 0;\n    ' + tmp_9 + '\n    ' + tmp_10 + '\n\n    v_boundsSize = vec3(i_radius.xy, 0.0);\n    ' + tmp_11 + '\n    vec3 x_normal = a_normal;\n    vec3 x_position = vec3(a_position.xy * i_radius, 0.0) + i_offset;\n    {\n        ' + (tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs) + '\n    }\n    va_position = x_position;\n    ' + Companion_getInstance_4().bq_1 + '\n    gl_Position = v_clipPosition;\n}\n    ';
  };
  ShaderGeneratorsWebGL.prototype.lo = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderGeneratorsWebGL.prototype.ko = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderGeneratorsWebGL.prototype.rp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_rectangle');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4();
    var tmp_3 = tmp_2.iq(false, false, 1, null);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.am_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().yp_1;
    var tmp4_elvis_lhs = shadeStructure.zl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.dq(null, null, null, null, 'vec3(va_texCoord0, 0.0)', 'v_boundsSize', 15, null);
    var tmp5_elvis_lhs = shadeStructure.wl_1;
    return '#version 300 es\nprecision highp float;        \n' + tmp + '\n' + tmp_0 + '\n' + tmp_1 + '\n//layout(origin_upper_left) in vec4 gl_FragCoord;\n\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n' + tmp_6 + '\n\n\n' + tmp_7 + '\n//flat in int v_instance;\nin vec3 v_boundsSize;\nout vec4 o_color;\n\nvoid main(void) {\n    int v_instance = 0;\n\n    ' + tmp_9 + '\n    vec4 x_fill = vi_fill;\n    vec4 x_stroke = vi_stroke;\n    {\n        ' + (tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs) + '\n    }\n    vec2 wd = fwidth(va_texCoord0 - vec2(0.5));\n    vec2 d = abs((va_texCoord0 - vec2(0.5)) * 2.0);\n\n    float irx = smoothstep(0.0, wd.x * 2.5, 1.0-d.x - vi_strokeWeight*2.0/vi_dimensions.x);\n    float iry = smoothstep(0.0, wd.y * 2.5, 1.0-d.y - vi_strokeWeight*2.0/vi_dimensions.y);\n    float ir = irx*iry;\n\n    vec4 final = vec4(1.0);\n    final.rgb = x_fill.rgb * x_fill.a;\n    final.a = x_fill.a;\n\n    float sa = (1.0-ir) * x_stroke.a;\n    final.rgb = final.rgb * (1.0-sa) + x_stroke.rgb * sa;\n    final.a = final.a * (1.0-sa) + sa;\n\n    o_color = final;\n}\n';
  };
  ShaderGeneratorsWebGL.prototype.qp = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_rectangle');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 1, null);
    var tmp1_elvis_lhs = shadeStructure.sl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = shadeStructure.rl_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp4_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_8 = get_rotate2();
    var tmp_9 = Companion_getInstance_4();
    var tmp_10 = tmp_9.fq('0', null, 2, null);
    var tmp5_elvis_lhs = shadeStructure.dm_1;
    var tmp_11 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var tmp_12 = Companion_getInstance_4().aq_1;
    var tmp6_elvis_lhs = shadeStructure.ul_1;
    return '#version 300 es\nprecision highp float;        \n        \n' + tmp + '\n' + tmp_0 + '\n' + tmp_2 + '\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n' + tmp_6 + '\n\n' + tmp_7 + '\n\n//flat out int v_instance;\nout vec3 v_boundsSize;\n' + tmp_8 + '\n\nvoid main() {\n    //v_instance =  gl_InstanceID;\n    ' + tmp_10 + '\n    ' + tmp_11 + '\n    ' + tmp_12 + '\n    vec3 x_normal = vec3(0.0, 0.0, 1.0);\n    vec2 rotatedPosition = rotate2(i_rotation) * (( a_position.xy - vec2(0.5) ) * i_dimensions) + vec2(0.5) * i_dimensions;\n      \n    vec3 x_position = vec3(rotatedPosition, 0.0) + i_offset;\n    v_boundsSize = vec3(i_dimensions, 1.0);\n    {\n        ' + (tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs) + '\n    }\n    ' + Companion_getInstance_4().bq_1 + '\n    gl_Position = v_clipPosition;\n    }\n    ';
  };
  ShaderGeneratorsWebGL.prototype.fo = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_expansion');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_2 = Companion_getInstance_4();
    var tmp_3 = tmp_2.iq(false, false, 3, null);
    var tmp2_elvis_lhs = shadeStructure.cm_1;
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp_5 = Companion_getInstance_4().yp_1;
    var tmp_6 = !shadeStructure.em_1 ? 'out vec4 o_color;' : '';
    var tmp3_elvis_lhs = shadeStructure.zl_1;
    var tmp_7 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.dq('0', null, null, 'va_vertexOffset', 'vec3(v_objectPosition.xy - bounds.xy, 0.0) / vec3(bounds.zw,1.0)', 'vec3(bounds.zw, 0.0)', 6, null);
    var tmp4_elvis_lhs = shadeStructure.wl_1;
    return '#version 300 es\nprecision highp float;        \n' + tmp + '\n' + tmp_0 + '\n' + tmp_1 + '\n//layout(origin_upper_left) in vec4 gl_FragCoord;\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n//flat in int v_instance;\nuniform float strokeMult;\nuniform float strokeThr;\nuniform float strokeFillFactor;\nuniform sampler2D tex;\nuniform vec4 bounds;\n\nout vec4 o_color;\nin vec3 v_objectPosition;\nin vec2 v_ftcoord;\n//' + tmp_6 + '\n\n' + tmp_7 + '\n\nfloat strokeMask() {\n\t//return pow(min(1.0, (1.0-abs(v_ftcoord.x*2.0-1.0)*strokeMult)) * min(1.0, v_ftcoord.y), 1.0);\n    return smoothstep(0.0, 1.0, (1.0-abs(v_ftcoord.x*2.0-1.0))*strokeMult) * smoothstep(0.0, 1.0, v_ftcoord.y);\n}\n\nvoid main(void) {\n    ' + tmp_9 + '\n\n\tfloat strokeAlpha = strokeMask();\n\n    vec4 x_stroke = u_stroke;\n    vec4 x_fill = u_fill;\n\n    { ' + (tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs) + ' }\n\n    vec4 color = mix(x_stroke, x_fill, strokeFillFactor)  * vec4(1, 1, 1, strokeAlpha);\n    vec4 result = color;\n\n    if (strokeAlpha < strokeThr) {\n\t    discard;\n\t}\n\n    vec4 final = result;\n\tfinal = result;\n\tfinal.rgb *= final.a;\n    ' + (!shadeStructure.em_1 ? 'o_color = final;' : '') + '\n}        \n    ';
  };
  ShaderGeneratorsWebGL.prototype.eo = function (shadeStructure) {
    var tmp = Companion_getInstance_4().gq('d_expansion');
    var tmp0_elvis_lhs = shadeStructure.tl_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp_1 = Companion_getInstance_4();
    var tmp_2 = tmp_1.iq(false, false, 3, null);
    var tmp1_elvis_lhs = shadeStructure.rl_1;
    var tmp_3 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_4 = shadeStructure.sl_1;
    var tmp2_elvis_lhs = shadeStructure.bm_1;
    var tmp_5 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp_6 = Companion_getInstance_4().zp_1;
    var tmp3_elvis_lhs = shadeStructure.xl_1;
    var tmp_7 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp_8 = Companion_getInstance_4();
    var tmp_9 = tmp_8.fq('0', null, 2, null);
    var tmp4_elvis_lhs = shadeStructure.dm_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11 = Companion_getInstance_4().aq_1;
    var tmp5_elvis_lhs = shadeStructure.ul_1;
    return trimIndent('#version 300 es\nprecision highp float;        \n        \n' + tmp + '\n' + tmp_0 + '\n' + tmp_2 + '\n' + tmp_3 + '\n' + tmp_4 + '\n' + tmp_5 + '\n' + tmp_6 + '\n\n' + tmp_7 + '\n\nout vec2 v_ftcoord;\nout float v_offset;\n\nout vec3 v_objectPosition;\n//flat out int v_instance;\nfloat v_instance;\n\nvoid main() {\n    //v_instance = 0;\n    ' + tmp_9 + '\n    ' + tmp_10 + '\n    v_objectPosition = vec3(a_position, 0.0);\n    v_ftcoord = a_texCoord0;\n\n    vec3 x_position = vec3(a_position, 0.0);\n    vec3 x_normal = vec3(0.0, 0.0, 1.0);\n    ' + tmp_11 + '\n    {\n        ' + (tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs) + '\n    }\n    ' + Companion_getInstance_4().bq_1 + '\n\n    gl_Position = v_clipPosition;\n}        \n    ');
  };
  ShaderGeneratorsWebGL.prototype.gp = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderGeneratorsWebGL.prototype.fp = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderGeneratorsWebGL.prototype.cp = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderGeneratorsWebGL.prototype.bp = function (shadeStructure) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  var properties_initialized_ShaderGeneratorsWebGL_kt_h423to;
  function init_properties_ShaderGeneratorsWebGL_kt_yfy6io() {
    if (properties_initialized_ShaderGeneratorsWebGL_kt_h423to) {
    } else {
      properties_initialized_ShaderGeneratorsWebGL_kt_h423to = true;
      rotate2 = 'mat2 rotate2(float rotationInDegrees) {\n    float r = radians(rotationInDegrees);\n    float cr = cos(r);\n    float sr = sin(r);\n    return mat2(vec2(cr, sr), vec2(-sr, cr));\n}';
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.q12 = function (context, vertexShader, fragmentShader, name, session) {
    var tmp0_elvis_lhs = context.createProgram();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('failed to create program');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var program = tmp;
    context.attachShader(program, vertexShader.s14_1);
    context.attachShader(program, fragmentShader.x12_1);
    context.linkProgram(program);
    var tmp_0 = context.getProgramParameter(program, WebGLRenderingContext.ACTIVE_UNIFORMS);
    var activeUniformCount = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_mapNotNull = until(0, activeUniformCount);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = tmp0_mapNotNull.i3_1;
    var last = tmp0_mapNotNull.j3_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'org.openrndr.webgl.Companion.create.<anonymous>' call
        var activeUniform = context.getActiveUniform(program, element);
        var tmp_1;
        if (!(activeUniform == null)) {
          tmp_1 = new ActiveUniform(activeUniform.name, activeUniform.size, activeUniform.type);
        } else {
          tmp_1 = null;
        }
        tmp$ret$0 = tmp_1;
        var tmp0_safe_receiver = tmp$ret$0;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          tmp0_mapNotNullTo.a(tmp0_safe_receiver);
          tmp$ret$1 = Unit_getInstance();
        }
      }
       while (!(element === last));
    tmp$ret$2 = tmp0_mapNotNullTo;
    tmp$ret$3 = tmp$ret$2;
    var activeUniforms = tmp$ret$3;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(activeUniforms, 10)), 16);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = activeUniforms.h();
    while (tmp0_iterator.i()) {
      var element_0 = tmp0_iterator.j();
      var tmp$ret$4;
      // Inline function 'org.openrndr.webgl.Companion.create.<anonymous>' call
      tmp$ret$4 = element_0.u14_1;
      tmp0_associateByTo.s5(tmp$ret$4, element_0);
    }
    tmp$ret$5 = tmp0_associateByTo;
    tmp$ret$6 = tmp$ret$5;
    return new ShaderWebGL(context, program, tmp$ret$6, session);
  };
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ShaderWebGL(context, program, activeUniforms, session) {
    Companion_getInstance_8();
    this.i12_1 = context;
    this.j12_1 = program;
    this.k12_1 = activeUniforms;
    this.l12_1 = session;
    this.m12_1 = false;
    this.n12_1 = setOf([ShaderType_FRAGMENT_getInstance(), ShaderType_VERTEX_getInstance()]);
  }
  ShaderWebGL.prototype.o12 = function (name) {
    var index = this.i12_1.getAttribLocation(this.j12_1, name);
    if (index === -1) {
    }
    return index;
  };
  ShaderWebGL.prototype.mn = function () {
    this.i12_1.useProgram(this.j12_1);
  };
  ShaderWebGL.prototype.do = function () {
    this.i12_1.useProgram((null == null ? true : null instanceof WebGLProgram) ? null : THROW_CCE());
  };
  ShaderWebGL.prototype.x14 = function (uniform) {
    var index = this.i12_1.getUniformLocation(this.j12_1, uniform);
    if (index == null) {
    }
    return index;
  };
  ShaderWebGL.prototype.kh = function (name) {
    return !(this.x14(name) == null);
  };
  ShaderWebGL.prototype.dh = function (blockName) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('uniform blocks are not supported by WebGL');
  };
  ShaderWebGL.prototype.jh = function (blockName, block) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('uniform blocks are not supported by WebGL');
  };
  ShaderWebGL.prototype.q14 = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniformMatrix3fv(index, false, toFloat32Array(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.eh = function (name, value) {
    checkErrors(this.i12_1, 'older error persists');
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniformMatrix4fv(index, false, toFloat32Array_0(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.ji = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform4fv(index, toFloat32Array_1(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.f14 = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform4fv(index, toFloat32Array_2(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.p14 = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform3fv(index, toFloat32Array_3(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.fh = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform2fv(index, toFloat32Array_4(value));
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.gh = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform1f(index, value);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.lh = function (name, value) {
    var index = this.x14(name);
    var activeUniform = this.k12_1.k1(name);
    if (!(index == null)) {
      // Inline function 'kotlin.require' call
      var tmp0_require = !(activeUniform == null);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'org.openrndr.webgl.ShaderWebGL.uniform.<anonymous>' call
        tmp$ret$0 = 'no active uniform for ' + name;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!(index == null) ? !(activeUniform == null) : false) {
      var tmp0_subject = activeUniform.w14_1;
      if (tmp0_subject === WebGLRenderingContext.INT) {
        this.i12_1.uniform1i(index, numberToInt(value));
      } else if (tmp0_subject === WebGLRenderingContext.FLOAT) {
        this.i12_1.uniform1f(index, value);
      } else {
        // Inline function 'kotlin.error' call
        var tmp1_error = 'unsupported type ' + activeUniform.w14_1;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
      checkErrors(this.i12_1, name + ' ' + value + ' (float)');
    }
  };
  ShaderWebGL.prototype.o14 = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform1i(index, value);
      checkErrors(this.i12_1, name + ' ' + value + ' (int)');
    }
  };
  ShaderWebGL.prototype.r14 = function (name, value) {
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform1i(index, value ? 1 : 0);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.l14 = function (name, value) {
    var floatValues = new Float32Array(imul(imul(value.length, 4), 4));
    var offset = 0;
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var mf = toFloat32Array_0(value[j]);
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 16)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'org.khronos.webgl.set' call
            var tmp0_set = offset;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = mf;
            tmp$ret$1 = tmp$ret$0[i];
            var tmp1_set = tmp$ret$1;
            var tmp$ret$2;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$2 = floatValues;
            tmp$ret$2[tmp0_set] = tmp1_set;
            var tmp2 = offset;
            offset = tmp2 + 1 | 0;
          }
           while (inductionVariable_0 < 16);
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniformMatrix4fv(index, false, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.g14 = function (name, value) {
    var floatValues = new Float32Array(imul(value.length, 4));
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var tmp0_set = imul(i, 4);
        var tmp1_set = value[i].te_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = floatValues;
        tmp$ret$0[tmp0_set] = tmp1_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp2_set = imul(i, 4) + 1 | 0;
        var tmp3_set = value[i].ue_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = floatValues;
        tmp$ret$1[tmp2_set] = tmp3_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp4_set = imul(i, 4) + 2 | 0;
        var tmp5_set = value[i].ve_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = floatValues;
        tmp$ret$2[tmp4_set] = tmp5_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp6_set = imul(i, 4) + 3 | 0;
        var tmp7_set = value[i].we_1;
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = floatValues;
        tmp$ret$3[tmp6_set] = tmp7_set;
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform4fv(index, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.i14 = function (name, value) {
    var floatValues = new Float32Array(imul(value.length, 3));
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var tmp0_set = imul(i, 3);
        var tmp1_set = value[i].tb_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = floatValues;
        tmp$ret$0[tmp0_set] = tmp1_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp2_set = imul(i, 3) + 1 | 0;
        var tmp3_set = value[i].ub_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = floatValues;
        tmp$ret$1[tmp2_set] = tmp3_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp4_set = imul(i, 3) + 2 | 0;
        var tmp5_set = value[i].vb_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = floatValues;
        tmp$ret$2[tmp4_set] = tmp5_set;
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform3fv(index, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.h14 = function (name, value) {
    var floatValues = new Float32Array(imul(value.length, 2));
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var tmp0_set = imul(i, 3);
        var tmp1_set = value[i].ce_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = floatValues;
        tmp$ret$0[tmp0_set] = tmp1_set;
        // Inline function 'org.khronos.webgl.set' call
        var tmp2_set = imul(i, 3) + 1 | 0;
        var tmp3_set = value[i].de_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = floatValues;
        tmp$ret$1[tmp2_set] = tmp3_set;
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform3fv(index, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.j14 = function (name, value) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderWebGL.prototype.k14 = function (name, value) {
    var floatValues = new Float32Array(value.length);
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var tmp0_set = imul(i, 3);
        var tmp1_set = value[i];
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = floatValues;
        tmp$ret$0[tmp0_set] = tmp1_set;
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform1fv(index, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.li = function (name, value) {
    var floatValues = new Float32Array(value.length);
    var inductionVariable = 0;
    var last = value.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        var tmp0_set = imul(i, 3);
        var tmp1_set = value[i];
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = floatValues;
        tmp$ret$0[tmp0_set] = tmp1_set;
      }
       while (inductionVariable <= last);
    var index = this.x14(name);
    if (!(index == null)) {
      this.i12_1.uniform1fv(index, floatValues);
      checkErrors(this.i12_1, name + ' ' + value);
    }
  };
  ShaderWebGL.prototype.m14 = function (name, value) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  ShaderWebGL.prototype.n14 = function (name, image, imageBinding) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('image bindings are not supported by WebGL');
  };
  function checkErrors(_this__u8e3s4, msg) {
    var e = _this__u8e3s4.getError();
    if (!(e === WebGLRenderingContext.NO_ERROR)) {
      var tmp0_subject = e;
      var m = tmp0_subject === WebGLRenderingContext.INVALID_ENUM ? 'Invalid enum' : tmp0_subject === WebGLRenderingContext.INVALID_VALUE ? 'Invalid value' : tmp0_subject === WebGLRenderingContext.INVALID_OPERATION ? 'Invalid operation' : tmp0_subject === WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION ? 'Invalid framebuffer operation' : tmp0_subject === WebGLRenderingContext.OUT_OF_MEMORY ? 'Out of memory' : tmp0_subject === WebGLRenderingContext.CONTEXT_LOST_WEBGL ? 'Context lst webgl' : 'unknown error';
      // Inline function 'kotlin.error' call
      var tmp0_error = m + ': ' + msg;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function ActiveUniform(name, size, type) {
    this.u14_1 = name;
    this.v14_1 = size;
    this.w14_1 = type;
  }
  ActiveUniform.prototype.toString = function () {
    return 'ActiveUniform(name=' + this.u14_1 + ', size=' + this.v14_1 + ', type=' + this.w14_1 + ')';
  };
  ActiveUniform.prototype.hashCode = function () {
    var result = getStringHashCode(this.u14_1);
    result = imul(result, 31) + this.v14_1 | 0;
    result = imul(result, 31) + this.w14_1 | 0;
    return result;
  };
  ActiveUniform.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActiveUniform))
      return false;
    var tmp0_other_with_cast = other instanceof ActiveUniform ? other : THROW_CCE();
    if (!(this.u14_1 === tmp0_other_with_cast.u14_1))
      return false;
    if (!(this.v14_1 === tmp0_other_with_cast.v14_1))
      return false;
    if (!(this.w14_1 === tmp0_other_with_cast.w14_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.r12 = function (context, vertexFormat, vertexCount, session) {
    var tmp0_elvis_lhs = context.createBuffer();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('failed to create buffer');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    context.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer);
    var sizeInBytes = imul(vertexFormat.c(), vertexCount);
    context.bufferData(WebGLRenderingContext.ARRAY_BUFFER, sizeInBytes, WebGLRenderingContext.DYNAMIC_DRAW);
    return new VertexBufferWebGL(context, buffer, vertexFormat, vertexCount, session);
  };
  var Companion_instance_3;
  function Companion_getInstance_9() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function VertexBufferWebGL(context, buffer, vertexFormat, vertexCount, session) {
    Companion_getInstance_9();
    VertexBuffer.call(this);
    this.b12_1 = context;
    this.c12_1 = buffer;
    this.d12_1 = vertexFormat;
    this.e12_1 = vertexCount;
    this.f12_1 = session;
    this.g12_1 = false;
    this.h12_1 = null;
  }
  VertexBufferWebGL.prototype.fg = function () {
    return this.d12_1;
  };
  VertexBufferWebGL.prototype.gg = function () {
    return this.e12_1;
  };
  VertexBufferWebGL.prototype.fn = function () {
    if (this.h12_1 == null) {
      this.h12_1 = new VertexBufferShadowWebGL(this);
    }
    return ensureNotNull(this.h12_1);
  };
  VertexBufferWebGL.prototype.ng = function () {
    if (!this.g12_1) {
      this.b12_1.deleteBuffer(this.c12_1);
      this.g12_1 = true;
    }
    Companion_getInstance_2().kg().kl(this);
  };
  VertexBufferWebGL.prototype.kq = function (data, offsetBytes, floatCount) {
    this.l10();
    var offsetFloats = offsetBytes / 4 | 0;
    this.b12_1.bufferSubData(WebGLRenderingContext.ARRAY_BUFFER, offsetBytes, data.subarray(offsetFloats, offsetFloats + floatCount | 0));
    this.y14();
  };
  VertexBufferWebGL.prototype.l10 = function () {
    this.b12_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.c12_1);
  };
  VertexBufferWebGL.prototype.y14 = function () {
    var tmp = WebGLRenderingContext.ARRAY_BUFFER;
    this.b12_1.bindBuffer(tmp, (null == null ? true : null instanceof WebGLBuffer) ? null : THROW_CCE());
  };
  function VertexBufferShadowWebGL(vertexBuffer) {
    this.z14_1 = vertexBuffer;
    this.a15_1 = new Float32Array(imul(this.z14_1.gg(), this.z14_1.fg().c() / 4 | 0));
  }
  VertexBufferShadowWebGL.prototype.im = function () {
    return this.z14_1;
  };
  VertexBufferShadowWebGL.prototype.jm = function (offsetInBytes, sizeInBytes) {
    this.z14_1.kq(this.a15_1, offsetInBytes, sizeInBytes / 4 | 0);
  };
  VertexBufferShadowWebGL.prototype.mm = function () {
    return new BufferWriterWebGL(this.a15_1, this.z14_1.fg().c());
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.p12 = function (context, code, name) {
    var tmp0_elvis_lhs = context.createShader(WebGLRenderingContext.VERTEX_SHADER);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('failed to create shader');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var shader = tmp;
    context.shaderSource(shader, code);
    context.compileShader(shader);
    // Inline function 'kotlin.require' call
    var tmp_0 = context.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);
    var tmp0_require = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>' call
      var tmp0_elvis_lhs_0 = context.getShaderInfoLog(shader);
      var error = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = split$default(error, ['\n'], false, 0, 6, null);
      var tmp0_iterator = tmp0_forEach.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>.<anonymous>' call
        console.error(element);
      }
      console.error('---');
      // Inline function 'kotlin.collections.forEachIndexed' call
      var tmp1_forEachIndexed = split$default(code, ['\n'], false, 0, 6, null);
      var index = 0;
      var tmp0_iterator_0 = tmp1_forEachIndexed.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'org.openrndr.webgl.Companion.fromString.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
        console.log('' + tmp2__anonymous__z9zvc9 + '\t' + item);
      }
      tmp$ret$0 = 'fragment shader compilation failed';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new VertexShaderWebGL(shader, name);
  };
  var Companion_instance_4;
  function Companion_getInstance_10() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function VertexShaderWebGL(shaderObject, name) {
    Companion_getInstance_10();
    this.s14_1 = shaderObject;
    this.t14_1 = name;
  }
  //region block: post-declaration
  DriverWebGL.prototype.nl = createShadeStyleManager$default;
  RenderTargetWebGL.prototype.pk = get_effectiveWidth;
  RenderTargetWebGL.prototype.qk = get_effectiveHeight;
  ProgramRenderTargetWebGL.prototype.pk = get_effectiveWidth;
  ProgramRenderTargetWebGL.prototype.qk = get_effectiveHeight;
  VertexBufferShadowWebGL.prototype.km = upload$default;
  VertexBufferShadowWebGL.prototype.lm = uploadElements;
  //endregion
  //region block: init
  applicationBaseWebGLInitializer = applicationBaseWebGLInitializer$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$openrndr = $org.openrndr || ($org.openrndr = {});
    var $org$openrndr$webgl = $org$openrndr.webgl || ($org$openrndr.webgl = {});
    Object.defineProperty($org$openrndr$webgl, 'applicationBaseWebGLInitializer', {
      configurable: true,
      get: get_applicationBaseWebGLInitializer
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-webgl.js.map
