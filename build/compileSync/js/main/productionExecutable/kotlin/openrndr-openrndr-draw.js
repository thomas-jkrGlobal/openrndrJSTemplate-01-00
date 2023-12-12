(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './openrndr-openrndr-math.js', './kotlin-logging-js-ir.js', './openrndr-openrndr-color.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./openrndr-openrndr-math.js'), require('./kotlin-logging-js-ir.js'), require('./openrndr-openrndr-color.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-draw'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'openrndr-openrndr-draw'.");
    }
    if (typeof this['openrndr-openrndr-math'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-draw'. Its dependency 'openrndr-openrndr-math' was not found. Please, check whether 'openrndr-openrndr-math' is loaded prior to 'openrndr-openrndr-draw'.");
    }
    if (typeof this['kotlin-logging-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-draw'. Its dependency 'kotlin-logging-js-ir' was not found. Please, check whether 'kotlin-logging-js-ir' is loaded prior to 'openrndr-openrndr-draw'.");
    }
    if (typeof this['openrndr-openrndr-color'] === 'undefined') {
      throw new Error("Error loading module 'openrndr-openrndr-draw'. Its dependency 'openrndr-openrndr-color' was not found. Please, check whether 'openrndr-openrndr-color' is loaded prior to 'openrndr-openrndr-draw'.");
    }
    root['openrndr-openrndr-draw'] = factory(typeof this['openrndr-openrndr-draw'] === 'undefined' ? {} : this['openrndr-openrndr-draw'], this['kotlin-kotlin-stdlib-js-ir'], this['openrndr-openrndr-math'], this['kotlin-logging-js-ir'], this['openrndr-openrndr-color']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_openrndr_openrndr_math, kotlin_io_github_microutils_kotlin_logging, kotlin_org_openrndr_openrndr_color) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var toString = kotlin_kotlin.$_$.k2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o;
  var classMeta = kotlin_kotlin.$_$.t1;
  var THROW_ISE = kotlin_kotlin.$_$.a3;
  var Enum = kotlin_kotlin.$_$.u2;
  var interfaceMeta = kotlin_kotlin.$_$.z1;
  var Vector2 = kotlin_org_openrndr_openrndr_math.$_$.k;
  var Companion_getInstance = kotlin_org_openrndr_openrndr_math.$_$.b;
  var normalMatrix = kotlin_org_openrndr_openrndr_math.$_$.f;
  var getNumberHashCode = kotlin_kotlin.$_$.v1;
  var THROW_CCE = kotlin_kotlin.$_$.z2;
  var equals = kotlin_kotlin.$_$.u1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var KotlinLogging_getInstance = kotlin_io_github_microutils_kotlin_logging.$_$.a;
  var Companion_getInstance_0 = kotlin_org_openrndr_openrndr_color.$_$.a;
  var Companion_getInstance_1 = kotlin_org_openrndr_openrndr_math.$_$.c;
  var hashCode = kotlin_kotlin.$_$.y1;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.c3;
  var Companion_getInstance_2 = kotlin_org_openrndr_openrndr_math.$_$.e;
  var ortho = kotlin_org_openrndr_openrndr_math.$_$.g;
  var numberToInt = kotlin_kotlin.$_$.f2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var getStringHashCode = kotlin_kotlin.$_$.x1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r;
  var Char = kotlin_kotlin.$_$.t2;
  var Vector3 = kotlin_org_openrndr_openrndr_math.$_$.l;
  var Vector2_init_$Create$ = kotlin_org_openrndr_openrndr_math.$_$.a;
  var listOf = kotlin_kotlin.$_$.f1;
  var listOf_0 = kotlin_kotlin.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.a1;
  var plus = kotlin_kotlin.$_$.h1;
  var trimMargin$default = kotlin_kotlin.$_$.f;
  var trimIndent = kotlin_kotlin.$_$.s2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RectangleBatch, 'RectangleBatch', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PointBatch, 'PointBatch', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CircleBatch, 'CircleBatch', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferMultisample, 'BufferMultisample', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Disabled, 'Disabled', objectMeta, BufferMultisample, undefined, undefined, undefined, []);
  setMetadataFor(ImageAccess, 'ImageAccess', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(DepthBuffer, 'DepthBuffer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DrawContext, 'DrawContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(DepthTestPass, 'DepthTestPass', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(StencilStyle, 'StencilStyle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StencilTest, 'StencilTest', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(LineCap, 'LineCap', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(LineJoin, 'LineJoin', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ColorFormat, 'ColorFormat', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ColorType, 'ColorType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(DrawPrimitive, 'DrawPrimitive', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(DrawQuality, 'DrawQuality', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(CullTestPass, 'CullTestPass', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChannelMask, 'ChannelMask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KernMode, 'KernMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(TextSettingMode, 'TextSettingMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(StencilOperation, 'StencilOperation', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Drawer, 'Drawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ImageBinding, 'ImageBinding', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function get_effectiveWidth() {
    return numberToInt(this.xj() * this.bk());
  }
  function get_effectiveHeight() {
    return numberToInt(this.yj() * this.bk());
  }
  setMetadataFor(RenderTarget, 'RenderTarget', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Session, 'Session', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ShadeStyleManager, 'ShadeStyleManager', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ShadeStructure, 'ShadeStructure', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ShaderType, 'ShaderType', classMeta, Enum, undefined, undefined, undefined, []);
  function upload$default(offsetInBytes, sizeInBytes, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offsetInBytes = 0;
    if (!(($mask0 & 2) === 0))
      sizeInBytes = imul(this.im().gg(), this.im().fg().c());
    var tmp;
    if ($handler == null) {
      this.jm(offsetInBytes, sizeInBytes);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(offsetInBytes, sizeInBytes);
    }
    return tmp;
  }
  function uploadElements(elementOffset, elementCount) {
    this.jm(imul(elementOffset, this.im().fg().c()), imul(elementCount, this.im().fg().c()));
  }
  setMetadataFor(VertexBufferShadow, 'VertexBufferShadow', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexElementType, 'VertexElementType', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(VertexFormat, 'VertexFormat', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexElement, 'VertexElement', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CircleDrawer, 'CircleDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ExpansionDrawer, 'ExpansionDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FontImageMapDrawer, 'FontImageMapDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ImageDrawer, 'ImageDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MeshLineDrawer, 'MeshLineDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PerformanceLineDrawer, 'PerformanceLineDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PointDrawer, 'PointDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(QualityLineDrawer, 'QualityLineDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(QualityPolygonDrawer, 'QualityPolygonDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RectangleDrawer, 'RectangleDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexBufferDrawer, 'VertexBufferDrawer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ArrayCubemap, 'ArrayCubemap', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ArrayTexture, 'ArrayTexture', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferTexture, 'BufferTexture', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BufferWriter, 'BufferWriter', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ColorBuffer, 'ColorBuffer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Cubemap, 'Cubemap', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_7, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_8, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VertexBuffer, 'VertexBuffer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(VolumeTexture, 'VolumeTexture', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_9, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function createShadeStyleManager$default(name, vsGenerator, tcsGenerator, tesGenerator, gsGenerator, fsGenerator, session, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      tcsGenerator = null;
    if (!(($mask0 & 8) === 0))
      tesGenerator = null;
    if (!(($mask0 & 16) === 0))
      gsGenerator = null;
    if (!(($mask0 & 64) === 0))
      session = Companion_getInstance_8().sk();
    return $handler == null ? this.lq(name, vsGenerator, tcsGenerator, tesGenerator, gsGenerator, fsGenerator, session) : $handler(name, vsGenerator, tcsGenerator, tesGenerator, gsGenerator, fsGenerator, session);
  }
  setMetadataFor(Driver, 'Driver', interfaceMeta, undefined, undefined, undefined, undefined, [3]);
  //endregion
  function get_drawStyleFormat() {
    init_properties_Batches_kt_rr3pak();
    return drawStyleFormat;
  }
  var drawStyleFormat;
  function get_circleFormat() {
    init_properties_Batches_kt_rr3pak();
    return circleFormat;
  }
  var circleFormat;
  function get_rectangleFormat() {
    init_properties_Batches_kt_rr3pak();
    return rectangleFormat;
  }
  var rectangleFormat;
  function get_pointFormat() {
    init_properties_Batches_kt_rr3pak();
    return pointFormat;
  }
  var pointFormat;
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.cg = function (size, session) {
    return new RectangleBatch(vertexBuffer(get_rectangleFormat(), size, session), vertexBuffer(get_drawStyleFormat(), size, session));
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RectangleBatch(geometry, drawStyle) {
    Companion_getInstance_3();
    this.dg_1 = geometry;
    this.eg_1 = drawStyle;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.dg_1.fg().equals(get_rectangleFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.eg_1.fg().equals(get_drawStyleFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = this.dg_1.gg() === this.eg_1.gg();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.cg = function (size, session) {
    return new PointBatch(vertexBuffer(get_pointFormat(), size, session), vertexBuffer(get_drawStyleFormat(), size, session));
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function PointBatch(geometry, drawStyle) {
    Companion_getInstance_4();
    this.hg_1 = geometry;
    this.ig_1 = drawStyle;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.hg_1.fg().equals(get_pointFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.ig_1.fg().equals(get_drawStyleFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = this.hg_1.gg() === this.ig_1.gg();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.cg = function (size, session) {
    return new CircleBatch(vertexBuffer(get_circleFormat(), size, session), vertexBuffer(get_drawStyleFormat(), size, session));
  };
  Companion_1.prototype.jg = function (size, session, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      session = Companion_getInstance_8().kg();
    return this.cg(size, session);
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CircleBatch(geometry, drawStyle) {
    Companion_getInstance_5();
    this.lg_1 = geometry;
    this.mg_1 = drawStyle;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.lg_1.fg().equals(get_circleFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.mg_1.fg().equals(get_drawStyleFormat());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = this.lg_1.gg() === this.mg_1.gg();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  CircleBatch.prototype.c = function () {
    return this.lg_1.gg();
  };
  CircleBatch.prototype.ng = function () {
    this.lg_1.ng();
    this.mg_1.ng();
  };
  function drawStyleFormat$lambda($this$vertexFormat) {
    init_properties_Batches_kt_rr3pak();
    var tmp = VertexElementType_VECTOR4_FLOAT32_getInstance();
    $this$vertexFormat.qg('fill', tmp, 0, 4, null);
    var tmp_0 = VertexElementType_VECTOR4_FLOAT32_getInstance();
    $this$vertexFormat.qg('stroke', tmp_0, 0, 4, null);
    var tmp_1 = VertexElementType_FLOAT32_getInstance();
    $this$vertexFormat.qg('strokeWeight', tmp_1, 0, 4, null);
    return Unit_getInstance();
  }
  function circleFormat$lambda($this$vertexFormat) {
    init_properties_Batches_kt_rr3pak();
    var tmp = VertexElementType_VECTOR3_FLOAT32_getInstance();
    $this$vertexFormat.qg('offset', tmp, 0, 4, null);
    var tmp_0 = VertexElementType_VECTOR2_FLOAT32_getInstance();
    $this$vertexFormat.qg('radius', tmp_0, 0, 4, null);
    return Unit_getInstance();
  }
  function rectangleFormat$lambda($this$vertexFormat) {
    init_properties_Batches_kt_rr3pak();
    var tmp = VertexElementType_VECTOR3_FLOAT32_getInstance();
    $this$vertexFormat.qg('offset', tmp, 0, 4, null);
    var tmp_0 = VertexElementType_VECTOR2_FLOAT32_getInstance();
    $this$vertexFormat.qg('dimensions', tmp_0, 0, 4, null);
    var tmp_1 = VertexElementType_FLOAT32_getInstance();
    $this$vertexFormat.qg('rotation', tmp_1, 0, 4, null);
    return Unit_getInstance();
  }
  function pointFormat$lambda($this$vertexFormat) {
    init_properties_Batches_kt_rr3pak();
    var tmp = VertexElementType_VECTOR3_FLOAT32_getInstance();
    $this$vertexFormat.qg('offset', tmp, 0, 4, null);
    return Unit_getInstance();
  }
  var properties_initialized_Batches_kt_k76llk;
  function init_properties_Batches_kt_rr3pak() {
    if (properties_initialized_Batches_kt_k76llk) {
    } else {
      properties_initialized_Batches_kt_k76llk = true;
      drawStyleFormat = vertexFormat(drawStyleFormat$lambda);
      circleFormat = vertexFormat(circleFormat$lambda);
      rectangleFormat = vertexFormat(rectangleFormat$lambda);
      pointFormat = vertexFormat(pointFormat$lambda);
    }
  }
  function Disabled() {
    Disabled_instance = this;
    BufferMultisample.call(this);
  }
  Disabled.prototype.toString = function () {
    return 'Disabled()';
  };
  var Disabled_instance;
  function Disabled_getInstance() {
    if (Disabled_instance == null)
      new Disabled();
    return Disabled_instance;
  }
  function BufferMultisample() {
  }
  var ImageAccess_READ_instance;
  var ImageAccess_WRITE_instance;
  var ImageAccess_READ_WRITE_instance;
  function valueOf(value) {
    switch (value) {
      case 'READ':
        return ImageAccess_READ_getInstance();
      case 'WRITE':
        return ImageAccess_WRITE_getInstance();
      case 'READ_WRITE':
        return ImageAccess_READ_WRITE_getInstance();
      default:
        ImageAccess_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ImageAccess_entriesInitialized;
  function ImageAccess_initEntries() {
    if (ImageAccess_entriesInitialized)
      return Unit_getInstance();
    ImageAccess_entriesInitialized = true;
    ImageAccess_READ_instance = new ImageAccess('READ', 0);
    ImageAccess_WRITE_instance = new ImageAccess('WRITE', 1);
    ImageAccess_READ_WRITE_instance = new ImageAccess('READ_WRITE', 2);
  }
  function ImageAccess(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ImageAccess_READ_getInstance() {
    ImageAccess_initEntries();
    return ImageAccess_READ_instance;
  }
  function ImageAccess_WRITE_getInstance() {
    ImageAccess_initEntries();
    return ImageAccess_WRITE_instance;
  }
  function ImageAccess_READ_WRITE_getInstance() {
    ImageAccess_initEntries();
    return ImageAccess_READ_WRITE_instance;
  }
  function DepthBuffer() {
  }
  function set_lastModel(_set____db54di) {
    init_properties_DrawContext_kt_ivupzd();
    lastModel = _set____db54di;
  }
  function get_lastModel() {
    init_properties_DrawContext_kt_ivupzd();
    return lastModel;
  }
  var lastModel;
  function set_lastModelNormal(_set____db54di) {
    init_properties_DrawContext_kt_ivupzd();
    lastModelNormal = _set____db54di;
  }
  function get_lastModelNormal() {
    init_properties_DrawContext_kt_ivupzd();
    return lastModelNormal;
  }
  var lastModelNormal;
  function set_lastView(_set____db54di) {
    init_properties_DrawContext_kt_ivupzd();
    lastView = _set____db54di;
  }
  function get_lastView() {
    init_properties_DrawContext_kt_ivupzd();
    return lastView;
  }
  var lastView;
  function set_lastViewNormal(_set____db54di) {
    init_properties_DrawContext_kt_ivupzd();
    lastViewNormal = _set____db54di;
  }
  function get_lastViewNormal() {
    init_properties_DrawContext_kt_ivupzd();
    return lastViewNormal;
  }
  var lastViewNormal;
  function get_contextBlocks() {
    init_properties_DrawContext_kt_ivupzd();
    return contextBlocks;
  }
  var contextBlocks;
  function get_logger() {
    init_properties_DrawContext_kt_ivupzd();
    return logger;
  }
  var logger;
  function DrawContext$applyToShader$lambda() {
    return 'creating context block for ' + toString(Companion_getInstance_13().tg().ug());
  }
  function DrawContext(model, view, projection, width, height, contentScale, modelViewScalingFactor) {
    this.vg_1 = model;
    this.wg_1 = view;
    this.xg_1 = projection;
    this.yg_1 = width;
    this.zg_1 = height;
    this.ah_1 = contentScale;
    this.bh_1 = modelViewScalingFactor;
  }
  DrawContext.prototype.ch = function (shader) {
    if (!get_useContextBlock()) {
      if (shader.kh('u_viewMatrix')) {
        shader.eh('u_viewMatrix', this.wg_1);
      }
      if (shader.kh('u_modelMatrix')) {
        shader.eh('u_modelMatrix', this.vg_1);
      }
      if (shader.kh('u_projectionMatrix')) {
        shader.eh('u_projectionMatrix', this.xg_1);
      }
      if (shader.kh('u_viewDimensions')) {
        shader.fh('u_viewDimensions', new Vector2(this.yg_1, this.zg_1));
      }
      if (shader.kh('u_modelNormalMatrix')) {
        var tmp;
        if (this.vg_1 === get_lastModel()) {
          tmp = get_lastModelNormal();
        } else {
          set_lastModelNormal(!(this.vg_1 === Companion_getInstance().wb_1) ? normalMatrix(this.vg_1) : Companion_getInstance().wb_1);
          set_lastModel(this.vg_1);
          tmp = get_lastModelNormal();
        }
        var normalMatrix_0 = tmp;
        shader.eh('u_modelNormalMatrix', normalMatrix_0);
      }
      if (shader.kh('u_viewNormalMatrix')) {
        var tmp_0;
        if (this.wg_1 === get_lastView()) {
          tmp_0 = get_lastViewNormal();
        } else {
          set_lastViewNormal(!(this.wg_1 === Companion_getInstance().wb_1) ? normalMatrix(this.wg_1) : Companion_getInstance().wb_1);
          set_lastView(this.wg_1);
          tmp_0 = get_lastViewNormal();
        }
        var normalMatrix_1 = tmp_0;
        shader.eh('u_viewNormalMatrix', normalMatrix_1);
      }
      if (shader.kh('u_contentScale')) {
        shader.lh('u_contentScale', this.ah_1);
      }
      if (shader.kh('u_modelViewScalingFactor')) {
        shader.lh('u_modelViewScalingFactor', this.bh_1);
      }
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = get_contextBlocks();
      var tmp1_getOrPut = Companion_getInstance_13().tg().ug();
      var value = tmp0_getOrPut.k1(tmp1_getOrPut);
      var tmp_1;
      if (value == null) {
        var tmp$ret$0;
        // Inline function 'org.openrndr.draw.DrawContext.applyToShader.<anonymous>' call
        var tmp_2 = get_logger();
        tmp_2.cb(DrawContext$applyToShader$lambda);
        tmp$ret$0 = shader.dh('ContextBlock');
        var answer = tmp$ret$0;
        tmp0_getOrPut.s5(tmp1_getOrPut, answer);
        tmp_1 = answer;
      } else {
        tmp_1 = value;
      }
      tmp$ret$1 = tmp_1;
      var contextBlock = tmp$ret$1;
      var tmp0_safe_receiver = contextBlock;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.openrndr.draw.DrawContext.applyToShader.<anonymous>' call
        tmp0_safe_receiver.eh('u_viewMatrix', this.wg_1);
        tmp0_safe_receiver.eh('u_modelMatrix', this.vg_1);
        tmp0_safe_receiver.eh('u_projectionMatrix', this.xg_1);
        tmp0_safe_receiver.fh('u_viewDimensions', new Vector2(this.yg_1, this.zg_1));
        var tmp$ret$2;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_3;
        if (this.vg_1 === get_lastModel()) {
          tmp_3 = get_lastModelNormal();
        } else {
          set_lastModelNormal(!(this.vg_1 === Companion_getInstance().wb_1) ? normalMatrix(this.vg_1) : Companion_getInstance().wb_1);
          set_lastModel(this.vg_1);
          tmp_3 = get_lastModelNormal();
        }
        var normalMatrix_2 = tmp_3;
        tmp0_safe_receiver.eh('u_modelNormalMatrix', normalMatrix_2);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_4;
        if (this.wg_1 === get_lastView()) {
          tmp_4 = get_lastViewNormal();
        } else {
          set_lastViewNormal(!(this.wg_1 === Companion_getInstance().wb_1) ? normalMatrix(this.wg_1) : Companion_getInstance().wb_1);
          set_lastView(this.wg_1);
          tmp_4 = get_lastViewNormal();
        }
        var normalMatrix_3 = tmp_4;
        tmp0_safe_receiver.eh('u_viewNormalMatrix', normalMatrix_3);
        tmp$ret$3 = Unit_getInstance();
        tmp0_safe_receiver.gh('u_contentScale', this.ah_1);
        tmp0_safe_receiver.gh('u_modelViewScalingFactor', this.bh_1);
        if (tmp0_safe_receiver.ih()) {
          tmp0_safe_receiver.hh();
        }
        shader.jh('ContextBlock', tmp0_safe_receiver);
        tmp$ret$4 = tmp0_safe_receiver;
      }
    }
  };
  DrawContext.prototype.toString = function () {
    return 'DrawContext(model=' + this.vg_1 + ', view=' + this.wg_1 + ', projection=' + this.xg_1 + ', width=' + this.yg_1 + ', height=' + this.zg_1 + ', contentScale=' + this.ah_1 + ', modelViewScalingFactor=' + this.bh_1 + ')';
  };
  DrawContext.prototype.hashCode = function () {
    var result = this.vg_1.hashCode();
    result = imul(result, 31) + this.wg_1.hashCode() | 0;
    result = imul(result, 31) + this.xg_1.hashCode() | 0;
    result = imul(result, 31) + this.yg_1 | 0;
    result = imul(result, 31) + this.zg_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.ah_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bh_1) | 0;
    return result;
  };
  DrawContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawContext))
      return false;
    var tmp0_other_with_cast = other instanceof DrawContext ? other : THROW_CCE();
    if (!this.vg_1.equals(tmp0_other_with_cast.vg_1))
      return false;
    if (!this.wg_1.equals(tmp0_other_with_cast.wg_1))
      return false;
    if (!this.xg_1.equals(tmp0_other_with_cast.xg_1))
      return false;
    if (!(this.yg_1 === tmp0_other_with_cast.yg_1))
      return false;
    if (!(this.zg_1 === tmp0_other_with_cast.zg_1))
      return false;
    if (!equals(this.ah_1, tmp0_other_with_cast.ah_1))
      return false;
    if (!equals(this.bh_1, tmp0_other_with_cast.bh_1))
      return false;
    return true;
  };
  function logger$lambda() {
    init_properties_DrawContext_kt_ivupzd();
    return Unit_getInstance();
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function init_properties_DrawContext_kt_ivupzd() {
    if (properties_initialized_DrawContext_kt_nwly1n) {
    } else {
      properties_initialized_DrawContext_kt_nwly1n = true;
      lastModel = Companion_getInstance().wb_1;
      lastModelNormal = Companion_getInstance().wb_1;
      lastView = Companion_getInstance().wb_1;
      lastViewNormal = Companion_getInstance().wb_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      contextBlocks = tmp$ret$0;
      var tmp = KotlinLogging_getInstance();
      logger = tmp.wa(logger$lambda);
    }
  }
  function get_logger_0() {
    init_properties_DrawStyle_kt_yvcbnd();
    return logger_0;
  }
  var logger_0;
  function get_styleBlocks() {
    init_properties_DrawStyle_kt_yvcbnd();
    return styleBlocks;
  }
  var styleBlocks;
  function DrawStyle_init_$Init$(clip, fill, stroke, lineCap, lineJoin, strokeWeight, smooth, miterLimit, quality, depthTestPass, depthWrite, blendMode, cullTestPass, channelWriteMask, alphaToCoverage, shadeStyle, fontMap, kerning, textSetting, stencil, frontStencil, backStencil, colorMatrix, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      clip = null;
    if (!(($mask0 & 2) === 0))
      fill = Companion_getInstance_0().af_1;
    if (!(($mask0 & 4) === 0))
      stroke = Companion_getInstance_0().ze_1;
    if (!(($mask0 & 8) === 0))
      lineCap = LineCap_BUTT_getInstance();
    if (!(($mask0 & 16) === 0))
      lineJoin = LineJoin_MITER_getInstance();
    if (!(($mask0 & 32) === 0))
      strokeWeight = 1.0;
    if (!(($mask0 & 64) === 0))
      smooth = true;
    if (!(($mask0 & 128) === 0))
      miterLimit = 4.0;
    if (!(($mask0 & 256) === 0))
      quality = DrawQuality_QUALITY_getInstance();
    if (!(($mask0 & 512) === 0))
      depthTestPass = DepthTestPass_ALWAYS_getInstance();
    if (!(($mask0 & 1024) === 0))
      depthWrite = false;
    if (!(($mask0 & 2048) === 0))
      blendMode = BlendMode_OVER_getInstance();
    if (!(($mask0 & 4096) === 0))
      cullTestPass = CullTestPass_ALWAYS_getInstance();
    if (!(($mask0 & 8192) === 0))
      channelWriteMask = new ChannelMask(true, true, true, true);
    if (!(($mask0 & 16384) === 0))
      alphaToCoverage = false;
    if (!(($mask0 & 32768) === 0))
      shadeStyle = null;
    if (!(($mask0 & 65536) === 0))
      fontMap = null;
    if (!(($mask0 & 131072) === 0))
      kerning = KernMode_METRIC_getInstance();
    if (!(($mask0 & 262144) === 0))
      textSetting = TextSettingMode_PIXEL_getInstance();
    if (!(($mask0 & 524288) === 0))
      stencil = new StencilStyle();
    if (!(($mask0 & 1048576) === 0))
      frontStencil = stencil;
    if (!(($mask0 & 2097152) === 0))
      backStencil = stencil;
    if (!(($mask0 & 4194304) === 0))
      colorMatrix = Companion_getInstance_1().vc_1;
    DrawStyle.call($this, clip, fill, stroke, lineCap, lineJoin, strokeWeight, smooth, miterLimit, quality, depthTestPass, depthWrite, blendMode, cullTestPass, channelWriteMask, alphaToCoverage, shadeStyle, fontMap, kerning, textSetting, stencil, frontStencil, backStencil, colorMatrix);
    return $this;
  }
  function DrawStyle_init_$Create$(clip, fill, stroke, lineCap, lineJoin, strokeWeight, smooth, miterLimit, quality, depthTestPass, depthWrite, blendMode, cullTestPass, channelWriteMask, alphaToCoverage, shadeStyle, fontMap, kerning, textSetting, stencil, frontStencil, backStencil, colorMatrix, $mask0, $marker) {
    return DrawStyle_init_$Init$(clip, fill, stroke, lineCap, lineJoin, strokeWeight, smooth, miterLimit, quality, depthTestPass, depthWrite, blendMode, cullTestPass, channelWriteMask, alphaToCoverage, shadeStyle, fontMap, kerning, textSetting, stencil, frontStencil, backStencil, colorMatrix, $mask0, $marker, Object.create(DrawStyle.prototype));
  }
  function DrawStyle$applyToShader$lambda() {
    return 'creating styleblock UBO for ' + toString(Companion_getInstance_13().tg().ug());
  }
  function DrawStyle$applyToShader$lambda_0() {
    return 'styleblock UBO for ' + toString(Companion_getInstance_13().tg().ug()) + ' is dirty -> upload';
  }
  function DrawStyle(clip, fill, stroke, lineCap, lineJoin, strokeWeight, smooth, miterLimit, quality, depthTestPass, depthWrite, blendMode, cullTestPass, channelWriteMask, alphaToCoverage, shadeStyle, fontMap, kerning, textSetting, stencil, frontStencil, backStencil, colorMatrix) {
    this.mh_1 = clip;
    this.nh_1 = fill;
    this.oh_1 = stroke;
    this.ph_1 = lineCap;
    this.qh_1 = lineJoin;
    this.rh_1 = strokeWeight;
    this.sh_1 = smooth;
    this.th_1 = miterLimit;
    this.uh_1 = quality;
    this.vh_1 = depthTestPass;
    this.wh_1 = depthWrite;
    this.xh_1 = blendMode;
    this.yh_1 = cullTestPass;
    this.zh_1 = channelWriteMask;
    this.ai_1 = alphaToCoverage;
    this.bi_1 = shadeStyle;
    this.ci_1 = fontMap;
    this.di_1 = kerning;
    this.ei_1 = textSetting;
    this.fi_1 = stencil;
    this.gi_1 = frontStencil;
    this.hi_1 = backStencil;
    this.ii_1 = colorMatrix;
  }
  DrawStyle.prototype.ch = function (shader) {
    if (!get_useStyleBlock()) {
      if (shader.kh('u_fill')) {
        var tmp0_elvis_lhs = this.nh_1;
        shader.ji('u_fill', tmp0_elvis_lhs == null ? Companion_getInstance_0().if_1 : tmp0_elvis_lhs);
      }
      if (shader.kh('u_stroke')) {
        var tmp1_elvis_lhs = this.oh_1;
        shader.ji('u_stroke', tmp1_elvis_lhs == null ? Companion_getInstance_0().if_1 : tmp1_elvis_lhs);
      }
      if (shader.kh('u_strokeWeight')) {
        shader.lh('u_strokeWeight', !(this.oh_1 == null) ? this.rh_1 : 0.0);
      }
      if (shader.kh('u_colorMatrix')) {
        shader.li('u_colorMatrix', this.ii_1.wd());
      }
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = get_styleBlocks();
      var tmp1_getOrPut = Companion_getInstance_13().tg().ug();
      var value = tmp0_getOrPut.k1(tmp1_getOrPut);
      var tmp;
      if (value == null) {
        var tmp$ret$0;
        // Inline function 'org.openrndr.draw.DrawStyle.applyToShader.<anonymous>' call
        var tmp_0 = get_logger_0();
        tmp_0.bb(DrawStyle$applyToShader$lambda);
        var styleBlock = shader.dh('StyleBlock');
        tmp$ret$0 = styleBlock;
        var answer = tmp$ret$0;
        tmp0_getOrPut.s5(tmp1_getOrPut, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp$ret$1 = tmp;
      var styleBlock_0 = tmp$ret$1;
      var tmp2_safe_receiver = styleBlock_0;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.openrndr.draw.DrawStyle.applyToShader.<anonymous>' call
        var tmp0_elvis_lhs_0 = this.nh_1;
        tmp2_safe_receiver.ji('u_fill', tmp0_elvis_lhs_0 == null ? Companion_getInstance_0().if_1 : tmp0_elvis_lhs_0);
        var tmp1_elvis_lhs_0 = this.oh_1;
        tmp2_safe_receiver.ji('u_stroke', tmp1_elvis_lhs_0 == null ? Companion_getInstance_0().if_1 : tmp1_elvis_lhs_0);
        tmp2_safe_receiver.gh('u_strokeWeight', this.rh_1);
        tmp2_safe_receiver.ki('u_colorMatrix', this.ii_1);
        shader.jh('StyleBlock', tmp2_safe_receiver);
        if (tmp2_safe_receiver.ih()) {
          var tmp_1 = get_logger_0();
          tmp_1.bb(DrawStyle$applyToShader$lambda_0);
          tmp2_safe_receiver.hh();
        }
        tmp$ret$2 = tmp2_safe_receiver;
      }
    }
  };
  DrawStyle.prototype.toString = function () {
    return 'DrawStyle(clip=' + this.mh_1 + ', fill=' + this.nh_1 + ', stroke=' + this.oh_1 + ', lineCap=' + this.ph_1 + ', lineJoin=' + this.qh_1 + ', strokeWeight=' + this.rh_1 + ', smooth=' + this.sh_1 + ', miterLimit=' + this.th_1 + ', quality=' + this.uh_1 + ', depthTestPass=' + this.vh_1 + ', depthWrite=' + this.wh_1 + ', blendMode=' + this.xh_1 + ', cullTestPass=' + this.yh_1 + ', channelWriteMask=' + this.zh_1 + ', alphaToCoverage=' + this.ai_1 + ', shadeStyle=' + this.bi_1 + ', fontMap=' + this.ci_1 + ', kerning=' + this.di_1 + ', textSetting=' + this.ei_1 + ', stencil=' + this.fi_1 + ', frontStencil=' + this.gi_1 + ', backStencil=' + this.hi_1 + ', colorMatrix=' + this.ii_1 + ')';
  };
  DrawStyle.prototype.hashCode = function () {
    var result = this.mh_1 == null ? 0 : this.mh_1.hashCode();
    result = imul(result, 31) + (this.nh_1 == null ? 0 : this.nh_1.hashCode()) | 0;
    result = imul(result, 31) + (this.oh_1 == null ? 0 : this.oh_1.hashCode()) | 0;
    result = imul(result, 31) + this.ph_1.hashCode() | 0;
    result = imul(result, 31) + this.qh_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.rh_1) | 0;
    result = imul(result, 31) + (this.sh_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.th_1) | 0;
    result = imul(result, 31) + this.uh_1.hashCode() | 0;
    result = imul(result, 31) + this.vh_1.hashCode() | 0;
    result = imul(result, 31) + (this.wh_1 | 0) | 0;
    result = imul(result, 31) + this.xh_1.hashCode() | 0;
    result = imul(result, 31) + this.yh_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.zh_1) | 0;
    result = imul(result, 31) + (this.ai_1 | 0) | 0;
    result = imul(result, 31) + (this.bi_1 == null ? 0 : hashCode(this.bi_1)) | 0;
    result = imul(result, 31) + (this.ci_1 == null ? 0 : hashCode(this.ci_1)) | 0;
    result = imul(result, 31) + this.di_1.hashCode() | 0;
    result = imul(result, 31) + this.ei_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.fi_1) | 0;
    result = imul(result, 31) + hashCode(this.gi_1) | 0;
    result = imul(result, 31) + hashCode(this.hi_1) | 0;
    result = imul(result, 31) + this.ii_1.hashCode() | 0;
    return result;
  };
  DrawStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawStyle))
      return false;
    var tmp0_other_with_cast = other instanceof DrawStyle ? other : THROW_CCE();
    if (!equals(this.mh_1, tmp0_other_with_cast.mh_1))
      return false;
    if (!equals(this.nh_1, tmp0_other_with_cast.nh_1))
      return false;
    if (!equals(this.oh_1, tmp0_other_with_cast.oh_1))
      return false;
    if (!this.ph_1.equals(tmp0_other_with_cast.ph_1))
      return false;
    if (!this.qh_1.equals(tmp0_other_with_cast.qh_1))
      return false;
    if (!equals(this.rh_1, tmp0_other_with_cast.rh_1))
      return false;
    if (!(this.sh_1 === tmp0_other_with_cast.sh_1))
      return false;
    if (!equals(this.th_1, tmp0_other_with_cast.th_1))
      return false;
    if (!this.uh_1.equals(tmp0_other_with_cast.uh_1))
      return false;
    if (!this.vh_1.equals(tmp0_other_with_cast.vh_1))
      return false;
    if (!(this.wh_1 === tmp0_other_with_cast.wh_1))
      return false;
    if (!this.xh_1.equals(tmp0_other_with_cast.xh_1))
      return false;
    if (!this.yh_1.equals(tmp0_other_with_cast.yh_1))
      return false;
    if (!equals(this.zh_1, tmp0_other_with_cast.zh_1))
      return false;
    if (!(this.ai_1 === tmp0_other_with_cast.ai_1))
      return false;
    if (!equals(this.bi_1, tmp0_other_with_cast.bi_1))
      return false;
    if (!equals(this.ci_1, tmp0_other_with_cast.ci_1))
      return false;
    if (!this.di_1.equals(tmp0_other_with_cast.di_1))
      return false;
    if (!this.ei_1.equals(tmp0_other_with_cast.ei_1))
      return false;
    if (!equals(this.fi_1, tmp0_other_with_cast.fi_1))
      return false;
    if (!equals(this.gi_1, tmp0_other_with_cast.gi_1))
      return false;
    if (!equals(this.hi_1, tmp0_other_with_cast.hi_1))
      return false;
    if (!this.ii_1.equals(tmp0_other_with_cast.ii_1))
      return false;
    return true;
  };
  var BlendMode_OVER_instance;
  var BlendMode_BLEND_instance;
  var BlendMode_ADD_instance;
  var BlendMode_SUBTRACT_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_REPLACE_instance;
  var BlendMode_REMOVE_instance;
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_getInstance();
    BlendMode_entriesInitialized = true;
    BlendMode_OVER_instance = new BlendMode('OVER', 0);
    BlendMode_BLEND_instance = new BlendMode('BLEND', 1);
    BlendMode_ADD_instance = new BlendMode('ADD', 2);
    BlendMode_SUBTRACT_instance = new BlendMode('SUBTRACT', 3);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 4);
    BlendMode_REPLACE_instance = new BlendMode('REPLACE', 5);
    BlendMode_REMOVE_instance = new BlendMode('REMOVE', 6);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DepthTestPass_ALWAYS_instance;
  var DepthTestPass_LESS_instance;
  var DepthTestPass_LESS_OR_EQUAL_instance;
  var DepthTestPass_EQUAL_instance;
  var DepthTestPass_GREATER_instance;
  var DepthTestPass_GREATER_OR_EQUAL_instance;
  var DepthTestPass_NEVER_instance;
  var DepthTestPass_entriesInitialized;
  function DepthTestPass_initEntries() {
    if (DepthTestPass_entriesInitialized)
      return Unit_getInstance();
    DepthTestPass_entriesInitialized = true;
    DepthTestPass_ALWAYS_instance = new DepthTestPass('ALWAYS', 0);
    DepthTestPass_LESS_instance = new DepthTestPass('LESS', 1);
    DepthTestPass_LESS_OR_EQUAL_instance = new DepthTestPass('LESS_OR_EQUAL', 2);
    DepthTestPass_EQUAL_instance = new DepthTestPass('EQUAL', 3);
    DepthTestPass_GREATER_instance = new DepthTestPass('GREATER', 4);
    DepthTestPass_GREATER_OR_EQUAL_instance = new DepthTestPass('GREATER_OR_EQUAL', 5);
    DepthTestPass_NEVER_instance = new DepthTestPass('NEVER', 6);
  }
  function DepthTestPass(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StencilStyle() {
    this.mi_1 = StencilOperation_KEEP_getInstance();
    this.ni_1 = StencilOperation_KEEP_getInstance();
    this.oi_1 = StencilOperation_KEEP_getInstance();
    this.pi_1 = 255;
    this.qi_1 = 0;
    this.ri_1 = 255;
    this.si_1 = StencilTest_DISABLED_getInstance();
  }
  var StencilTest_NEVER_instance;
  var StencilTest_LESS_instance;
  var StencilTest_LESS_OR_EQUAL_instance;
  var StencilTest_GREATER_instance;
  var StencilTest_GREATER_OR_EQUAL_instance;
  var StencilTest_EQUAL_instance;
  var StencilTest_NOT_EQUAL_instance;
  var StencilTest_ALWAYS_instance;
  var StencilTest_DISABLED_instance;
  var StencilTest_entriesInitialized;
  function StencilTest_initEntries() {
    if (StencilTest_entriesInitialized)
      return Unit_getInstance();
    StencilTest_entriesInitialized = true;
    StencilTest_NEVER_instance = new StencilTest('NEVER', 0);
    StencilTest_LESS_instance = new StencilTest('LESS', 1);
    StencilTest_LESS_OR_EQUAL_instance = new StencilTest('LESS_OR_EQUAL', 2);
    StencilTest_GREATER_instance = new StencilTest('GREATER', 3);
    StencilTest_GREATER_OR_EQUAL_instance = new StencilTest('GREATER_OR_EQUAL', 4);
    StencilTest_EQUAL_instance = new StencilTest('EQUAL', 5);
    StencilTest_NOT_EQUAL_instance = new StencilTest('NOT_EQUAL', 6);
    StencilTest_ALWAYS_instance = new StencilTest('ALWAYS', 7);
    StencilTest_DISABLED_instance = new StencilTest('DISABLED', 8);
  }
  function StencilTest(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var LineCap_ROUND_instance;
  var LineCap_BUTT_instance;
  var LineCap_SQUARE_instance;
  var LineCap_entriesInitialized;
  function LineCap_initEntries() {
    if (LineCap_entriesInitialized)
      return Unit_getInstance();
    LineCap_entriesInitialized = true;
    LineCap_ROUND_instance = new LineCap('ROUND', 0);
    LineCap_BUTT_instance = new LineCap('BUTT', 1);
    LineCap_SQUARE_instance = new LineCap('SQUARE', 2);
  }
  function LineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var LineJoin_MITER_instance;
  var LineJoin_BEVEL_instance;
  var LineJoin_ROUND_instance;
  var LineJoin_entriesInitialized;
  function LineJoin_initEntries() {
    if (LineJoin_entriesInitialized)
      return Unit_getInstance();
    LineJoin_entriesInitialized = true;
    LineJoin_MITER_instance = new LineJoin('MITER', 0);
    LineJoin_BEVEL_instance = new LineJoin('BEVEL', 1);
    LineJoin_ROUND_instance = new LineJoin('ROUND', 2);
  }
  function LineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var ColorFormat_R_instance;
  var ColorFormat_RG_instance;
  var ColorFormat_RGB_instance;
  var ColorFormat_BGR_instance;
  var ColorFormat_RGBa_instance;
  var ColorFormat_BGRa_instance;
  var ColorFormat_sRGB_instance;
  var ColorFormat_sRGBa_instance;
  function valueOf_0(value) {
    switch (value) {
      case 'R':
        return ColorFormat_R_getInstance();
      case 'RG':
        return ColorFormat_RG_getInstance();
      case 'RGB':
        return ColorFormat_RGB_getInstance();
      case 'BGR':
        return ColorFormat_BGR_getInstance();
      case 'RGBa':
        return ColorFormat_RGBa_getInstance();
      case 'BGRa':
        return ColorFormat_BGRa_getInstance();
      case 'sRGB':
        return ColorFormat_sRGB_getInstance();
      case 'sRGBa':
        return ColorFormat_sRGBa_getInstance();
      default:
        ColorFormat_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ColorFormat_entriesInitialized;
  function ColorFormat_initEntries() {
    if (ColorFormat_entriesInitialized)
      return Unit_getInstance();
    ColorFormat_entriesInitialized = true;
    ColorFormat_R_instance = new ColorFormat('R', 0);
    ColorFormat_RG_instance = new ColorFormat('RG', 1);
    ColorFormat_RGB_instance = new ColorFormat('RGB', 2);
    ColorFormat_BGR_instance = new ColorFormat('BGR', 3);
    ColorFormat_RGBa_instance = new ColorFormat('RGBa', 4);
    ColorFormat_BGRa_instance = new ColorFormat('BGRa', 5);
    ColorFormat_sRGB_instance = new ColorFormat('sRGB', 6);
    ColorFormat_sRGBa_instance = new ColorFormat('sRGBa', 7);
  }
  function ColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var ColorType_UINT8_instance;
  var ColorType_UINT16_instance;
  var ColorType_UINT8_INT_instance;
  var ColorType_UINT16_INT_instance;
  var ColorType_UINT32_INT_instance;
  var ColorType_SINT8_INT_instance;
  var ColorType_SINT16_INT_instance;
  var ColorType_SINT32_INT_instance;
  var ColorType_FLOAT16_instance;
  var ColorType_FLOAT32_instance;
  var ColorType_DXT1_instance;
  var ColorType_DXT3_instance;
  var ColorType_DXT5_instance;
  var ColorType_BPTC_UNORM_instance;
  var ColorType_BPTC_FLOAT_instance;
  var ColorType_BPTC_UFLOAT_instance;
  function valueOf_1(value) {
    switch (value) {
      case 'UINT8':
        return ColorType_UINT8_getInstance();
      case 'UINT16':
        return ColorType_UINT16_getInstance();
      case 'UINT8_INT':
        return ColorType_UINT8_INT_getInstance();
      case 'UINT16_INT':
        return ColorType_UINT16_INT_getInstance();
      case 'UINT32_INT':
        return ColorType_UINT32_INT_getInstance();
      case 'SINT8_INT':
        return ColorType_SINT8_INT_getInstance();
      case 'SINT16_INT':
        return ColorType_SINT16_INT_getInstance();
      case 'SINT32_INT':
        return ColorType_SINT32_INT_getInstance();
      case 'FLOAT16':
        return ColorType_FLOAT16_getInstance();
      case 'FLOAT32':
        return ColorType_FLOAT32_getInstance();
      case 'DXT1':
        return ColorType_DXT1_getInstance();
      case 'DXT3':
        return ColorType_DXT3_getInstance();
      case 'DXT5':
        return ColorType_DXT5_getInstance();
      case 'BPTC_UNORM':
        return ColorType_BPTC_UNORM_getInstance();
      case 'BPTC_FLOAT':
        return ColorType_BPTC_FLOAT_getInstance();
      case 'BPTC_UFLOAT':
        return ColorType_BPTC_UFLOAT_getInstance();
      default:
        ColorType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_getInstance();
    ColorType_entriesInitialized = true;
    ColorType_UINT8_instance = new ColorType('UINT8', 0);
    ColorType_UINT16_instance = new ColorType('UINT16', 1);
    ColorType_UINT8_INT_instance = new ColorType('UINT8_INT', 2);
    ColorType_UINT16_INT_instance = new ColorType('UINT16_INT', 3);
    ColorType_UINT32_INT_instance = new ColorType('UINT32_INT', 4);
    ColorType_SINT8_INT_instance = new ColorType('SINT8_INT', 5);
    ColorType_SINT16_INT_instance = new ColorType('SINT16_INT', 6);
    ColorType_SINT32_INT_instance = new ColorType('SINT32_INT', 7);
    ColorType_FLOAT16_instance = new ColorType('FLOAT16', 8);
    ColorType_FLOAT32_instance = new ColorType('FLOAT32', 9);
    ColorType_DXT1_instance = new ColorType('DXT1', 10);
    ColorType_DXT3_instance = new ColorType('DXT3', 11);
    ColorType_DXT5_instance = new ColorType('DXT5', 12);
    ColorType_BPTC_UNORM_instance = new ColorType('BPTC_UNORM', 13);
    ColorType_BPTC_FLOAT_instance = new ColorType('BPTC_FLOAT', 14);
    ColorType_BPTC_UFLOAT_instance = new ColorType('BPTC_UFLOAT', 15);
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DrawPrimitive_TRIANGLES_instance;
  var DrawPrimitive_TRIANGLE_STRIP_instance;
  var DrawPrimitive_TRIANGLE_FAN_instance;
  var DrawPrimitive_POINTS_instance;
  var DrawPrimitive_LINES_instance;
  var DrawPrimitive_LINE_STRIP_instance;
  var DrawPrimitive_LINE_LOOP_instance;
  var DrawPrimitive_PATCHES_instance;
  var DrawPrimitive_entriesInitialized;
  function DrawPrimitive_initEntries() {
    if (DrawPrimitive_entriesInitialized)
      return Unit_getInstance();
    DrawPrimitive_entriesInitialized = true;
    DrawPrimitive_TRIANGLES_instance = new DrawPrimitive('TRIANGLES', 0);
    DrawPrimitive_TRIANGLE_STRIP_instance = new DrawPrimitive('TRIANGLE_STRIP', 1);
    DrawPrimitive_TRIANGLE_FAN_instance = new DrawPrimitive('TRIANGLE_FAN', 2);
    DrawPrimitive_POINTS_instance = new DrawPrimitive('POINTS', 3);
    DrawPrimitive_LINES_instance = new DrawPrimitive('LINES', 4);
    DrawPrimitive_LINE_STRIP_instance = new DrawPrimitive('LINE_STRIP', 5);
    DrawPrimitive_LINE_LOOP_instance = new DrawPrimitive('LINE_LOOP', 6);
    DrawPrimitive_PATCHES_instance = new DrawPrimitive('PATCHES', 7);
  }
  function DrawPrimitive(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DrawQuality_QUALITY_instance;
  var DrawQuality_PERFORMANCE_instance;
  var DrawQuality_entriesInitialized;
  function DrawQuality_initEntries() {
    if (DrawQuality_entriesInitialized)
      return Unit_getInstance();
    DrawQuality_entriesInitialized = true;
    DrawQuality_QUALITY_instance = new DrawQuality('QUALITY', 0);
    DrawQuality_PERFORMANCE_instance = new DrawQuality('PERFORMANCE', 1);
  }
  function DrawQuality(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var CullTestPass_ALWAYS_instance;
  var CullTestPass_FRONT_instance;
  var CullTestPass_BACK_instance;
  var CullTestPass_NEVER_instance;
  var CullTestPass_entriesInitialized;
  function CullTestPass_initEntries() {
    if (CullTestPass_entriesInitialized)
      return Unit_getInstance();
    CullTestPass_entriesInitialized = true;
    CullTestPass_ALWAYS_instance = new CullTestPass('ALWAYS', 0);
    CullTestPass_FRONT_instance = new CullTestPass('FRONT', 1);
    CullTestPass_BACK_instance = new CullTestPass('BACK', 2);
    CullTestPass_NEVER_instance = new CullTestPass('NEVER', 3);
  }
  function CullTestPass(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.ti_1 = 1;
    this.ui_1 = 2;
    this.vi_1 = 4;
    this.wi_1 = 8;
    this.xi_1 = new ChannelMask(false, false, false, false);
    this.yi_1 = new ChannelMask(true, true, true, true);
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChannelMask(red, green, blue, alpha) {
    Companion_getInstance_6();
    this.zi_1 = red;
    this.aj_1 = green;
    this.bj_1 = blue;
    this.cj_1 = alpha;
  }
  var KernMode_DISABLED_instance;
  var KernMode_METRIC_instance;
  var KernMode_entriesInitialized;
  function KernMode_initEntries() {
    if (KernMode_entriesInitialized)
      return Unit_getInstance();
    KernMode_entriesInitialized = true;
    KernMode_DISABLED_instance = new KernMode('DISABLED', 0);
    KernMode_METRIC_instance = new KernMode('METRIC', 1);
  }
  function KernMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var TextSettingMode_PIXEL_instance;
  var TextSettingMode_SUBPIXEL_instance;
  var TextSettingMode_entriesInitialized;
  function TextSettingMode_initEntries() {
    if (TextSettingMode_entriesInitialized)
      return Unit_getInstance();
    TextSettingMode_entriesInitialized = true;
    TextSettingMode_PIXEL_instance = new TextSettingMode('PIXEL', 0);
    TextSettingMode_SUBPIXEL_instance = new TextSettingMode('SUBPIXEL', 1);
  }
  function TextSettingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var StencilOperation_KEEP_instance;
  var StencilOperation_ZERO_instance;
  var StencilOperation_REPLACE_instance;
  var StencilOperation_INCREASE_instance;
  var StencilOperation_INCREASE_WRAP_instance;
  var StencilOperation_DECREASE_instance;
  var StencilOperation_DECREASE_WRAP_instance;
  var StencilOperation_INVERT_instance;
  var StencilOperation_entriesInitialized;
  function StencilOperation_initEntries() {
    if (StencilOperation_entriesInitialized)
      return Unit_getInstance();
    StencilOperation_entriesInitialized = true;
    StencilOperation_KEEP_instance = new StencilOperation('KEEP', 0);
    StencilOperation_ZERO_instance = new StencilOperation('ZERO', 1);
    StencilOperation_REPLACE_instance = new StencilOperation('REPLACE', 2);
    StencilOperation_INCREASE_instance = new StencilOperation('INCREASE', 3);
    StencilOperation_INCREASE_WRAP_instance = new StencilOperation('INCREASE_WRAP', 4);
    StencilOperation_DECREASE_instance = new StencilOperation('DECREASE', 5);
    StencilOperation_DECREASE_WRAP_instance = new StencilOperation('DECREASE_WRAP', 6);
    StencilOperation_INVERT_instance = new StencilOperation('INVERT', 7);
  }
  function StencilOperation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function logger$lambda_0() {
    init_properties_DrawStyle_kt_yvcbnd();
    return Unit_getInstance();
  }
  function BlendMode_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVER_instance;
  }
  function DepthTestPass_ALWAYS_getInstance() {
    DepthTestPass_initEntries();
    return DepthTestPass_ALWAYS_instance;
  }
  function StencilTest_DISABLED_getInstance() {
    StencilTest_initEntries();
    return StencilTest_DISABLED_instance;
  }
  function LineCap_BUTT_getInstance() {
    LineCap_initEntries();
    return LineCap_BUTT_instance;
  }
  function LineJoin_MITER_getInstance() {
    LineJoin_initEntries();
    return LineJoin_MITER_instance;
  }
  function ColorFormat_R_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_R_instance;
  }
  function ColorFormat_RG_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_RG_instance;
  }
  function ColorFormat_RGB_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_RGB_instance;
  }
  function ColorFormat_BGR_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_BGR_instance;
  }
  function ColorFormat_RGBa_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_RGBa_instance;
  }
  function ColorFormat_BGRa_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_BGRa_instance;
  }
  function ColorFormat_sRGB_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_sRGB_instance;
  }
  function ColorFormat_sRGBa_getInstance() {
    ColorFormat_initEntries();
    return ColorFormat_sRGBa_instance;
  }
  function ColorType_UINT8_getInstance() {
    ColorType_initEntries();
    return ColorType_UINT8_instance;
  }
  function ColorType_UINT16_getInstance() {
    ColorType_initEntries();
    return ColorType_UINT16_instance;
  }
  function ColorType_UINT8_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_UINT8_INT_instance;
  }
  function ColorType_UINT16_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_UINT16_INT_instance;
  }
  function ColorType_UINT32_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_UINT32_INT_instance;
  }
  function ColorType_SINT8_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_SINT8_INT_instance;
  }
  function ColorType_SINT16_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_SINT16_INT_instance;
  }
  function ColorType_SINT32_INT_getInstance() {
    ColorType_initEntries();
    return ColorType_SINT32_INT_instance;
  }
  function ColorType_FLOAT16_getInstance() {
    ColorType_initEntries();
    return ColorType_FLOAT16_instance;
  }
  function ColorType_FLOAT32_getInstance() {
    ColorType_initEntries();
    return ColorType_FLOAT32_instance;
  }
  function ColorType_DXT1_getInstance() {
    ColorType_initEntries();
    return ColorType_DXT1_instance;
  }
  function ColorType_DXT3_getInstance() {
    ColorType_initEntries();
    return ColorType_DXT3_instance;
  }
  function ColorType_DXT5_getInstance() {
    ColorType_initEntries();
    return ColorType_DXT5_instance;
  }
  function ColorType_BPTC_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_BPTC_UNORM_instance;
  }
  function ColorType_BPTC_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_BPTC_FLOAT_instance;
  }
  function ColorType_BPTC_UFLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_BPTC_UFLOAT_instance;
  }
  function DrawPrimitive_TRIANGLES_getInstance() {
    DrawPrimitive_initEntries();
    return DrawPrimitive_TRIANGLES_instance;
  }
  function DrawQuality_QUALITY_getInstance() {
    DrawQuality_initEntries();
    return DrawQuality_QUALITY_instance;
  }
  function CullTestPass_ALWAYS_getInstance() {
    CullTestPass_initEntries();
    return CullTestPass_ALWAYS_instance;
  }
  function KernMode_METRIC_getInstance() {
    KernMode_initEntries();
    return KernMode_METRIC_instance;
  }
  function TextSettingMode_PIXEL_getInstance() {
    TextSettingMode_initEntries();
    return TextSettingMode_PIXEL_instance;
  }
  function StencilOperation_KEEP_getInstance() {
    StencilOperation_initEntries();
    return StencilOperation_KEEP_instance;
  }
  var properties_initialized_DrawStyle_kt_i29gv1;
  function init_properties_DrawStyle_kt_yvcbnd() {
    if (properties_initialized_DrawStyle_kt_i29gv1) {
    } else {
      properties_initialized_DrawStyle_kt_i29gv1 = true;
      var tmp = KotlinLogging_getInstance();
      logger_0 = tmp.wa(logger$lambda_0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      styleBlocks = tmp$ret$0;
    }
  }
  function Drawer$meshLineDrawer$delegate$lambda() {
    return new MeshLineDrawer();
  }
  function Drawer(driver) {
    this.dj_1 = driver;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayDeque_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.draw.Drawer.drawStyles.<anonymous>' call
    tmp0_apply.y1(DrawStyle_init_$Create$(null, null, null, null, null, 0.0, false, 0.0, null, null, false, null, null, null, false, null, null, null, null, null, null, null, null, 8388607, null));
    tmp$ret$0 = tmp0_apply;
    tmp.ej_1 = tmp$ret$0;
    this.fj_1 = new RectangleDrawer();
    this.gj_1 = new VertexBufferDrawer();
    this.hj_1 = new CircleDrawer();
    this.ij_1 = new PointDrawer();
    this.jj_1 = new ImageDrawer();
    this.kj_1 = new PerformanceLineDrawer();
    var tmp_0 = this;
    tmp_0.lj_1 = lazy(Drawer$meshLineDrawer$delegate$lambda);
    this.mj_1 = new QualityLineDrawer();
    this.nj_1 = new QualityPolygonDrawer();
    this.oj_1 = new FontImageMapDrawer();
    this.pj_1 = ArrayDeque_init_$Create$();
    this.qj_1 = ArrayDeque_init_$Create$();
    this.rj_1 = ArrayDeque_init_$Create$();
    this.sj_1 = 1.0;
    this.tj_1 = Companion_getInstance().wb_1;
    this.uj_1 = Companion_getInstance().wb_1;
    this.vj_1 = Companion_getInstance().wb_1;
    var tmp_1 = this;
    tmp_1.wj_1 = DrawStyle_init_$Create$(null, null, null, null, null, 0.0, false, 0.0, null, null, false, null, null, null, false, null, null, null, null, null, null, null, null, 8388607, null);
  }
  Drawer.prototype.xj = function () {
    return Companion_getInstance_7().kg().xj();
  };
  Drawer.prototype.yj = function () {
    return Companion_getInstance_7().kg().yj();
  };
  Drawer.prototype.zj = function (value) {
    this.tj_1 = value;
    this.sj_1 = this.uj_1.sc(this.tj_1).rc().sb(Companion_getInstance_2().he_1).l4();
  };
  Drawer.prototype.ak = function (value) {
    this.uj_1 = value;
    this.sj_1 = this.uj_1.sc(this.tj_1).rc().sb(Companion_getInstance_2().he_1).l4();
  };
  Drawer.prototype.v7 = function () {
    return new DrawContext(this.tj_1, this.uj_1, this.vj_1, this.xj(), this.yj(), Companion_getInstance_7().kg().bk(), this.sj_1);
  };
  Drawer.prototype.ck = function () {
    this.qj_1.f2();
    this.pj_1.f2();
    this.rj_1.f2();
    this.ej_1.f2();
    this.dk();
  };
  Drawer.prototype.dk = function () {
    var tmp = this;
    tmp.wj_1 = DrawStyle_init_$Create$(null, null, null, null, null, 0.0, false, 0.0, null, null, false, null, null, null, false, null, null, null, null, null, null, null, null, 8388607, null);
    this.ek();
    this.ak(Companion_getInstance().wb_1);
    this.zj(Companion_getInstance().wb_1);
  };
  Drawer.prototype.ek = function () {
    this.fk(0.0, this.xj(), this.yj(), 0.0, -1.0, 1.0);
  };
  Drawer.prototype.fk = function (left, right, bottom, top, near, far) {
    this.vj_1 = ortho(left, right, bottom, top, near, far);
  };
  Drawer.prototype.gk = function (color) {
    this.dj_1.hk(color.lf_1, color.mf_1, color.nf_1, color.of_1);
  };
  Drawer.prototype.ik = function (value) {
    this.wj_1.nh_1 = value;
  };
  Drawer.prototype.jk = function (x, y, radius) {
    this.hj_1.nk(this.v7(), this.wj_1, x, y, radius);
  };
  function ImageBinding() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.kg = function () {
    return Companion_getInstance_13().tg().ok();
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RenderTarget() {
  }
  var logger_1;
  function get_sessionStack() {
    init_properties_Session_kt_bg9fdu();
    return sessionStack;
  }
  var sessionStack;
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.rk = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = get_sessionStack();
    var tmp1_getOrPut = Companion_getInstance_13().tg().ug();
    var value = tmp0_getOrPut.k1(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      var tmp$ret$1;
      // Inline function 'org.openrndr.draw.Companion.<get-stack>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.openrndr.draw.Companion.<get-stack>.<anonymous>.<anonymous>' call
      tmp0_apply.y1(new Session(null));
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      tmp0_getOrPut.s5(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  };
  Companion_4.prototype.kg = function () {
    return this.rk().w1();
  };
  Companion_4.prototype.sk = function () {
    return this.rk().v1();
  };
  var Companion_instance_4;
  function Companion_getInstance_8() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Session(parent) {
    Companion_getInstance_8();
    this.tk_1 = parent;
    this.uk_1 = Companion_getInstance_13().tg().ug();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.vk_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.wk_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$2 = LinkedHashSet_init_$Create$();
    tmp_1.xk_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$3 = LinkedHashSet_init_$Create$();
    tmp_2.yk_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$4 = LinkedHashSet_init_$Create$();
    tmp_3.zk_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$5 = LinkedHashSet_init_$Create$();
    tmp_4.al_1 = tmp$ret$5;
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$6 = LinkedHashSet_init_$Create$();
    tmp_5.bl_1 = tmp$ret$6;
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$7 = LinkedHashSet_init_$Create$();
    tmp_6.cl_1 = tmp$ret$7;
    var tmp_7 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$8 = LinkedHashSet_init_$Create$();
    tmp_7.dl_1 = tmp$ret$8;
    var tmp_8 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$9 = LinkedHashSet_init_$Create$();
    tmp_8.el_1 = tmp$ret$9;
    var tmp_9 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$10 = LinkedHashSet_init_$Create$();
    tmp_9.fl_1 = tmp$ret$10;
    var tmp_10 = this;
    var tmp$ret$11;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$11 = LinkedHashSet_init_$Create$();
    tmp_10.gl_1 = tmp$ret$11;
    var tmp_11 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$12 = LinkedHashSet_init_$Create$();
    tmp_11.hl_1 = tmp$ret$12;
    var tmp_12 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$13 = LinkedHashSet_init_$Create$();
    tmp_12.il_1 = tmp$ret$13;
    var tmp_13 = this;
    var tmp$ret$14;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$14 = LinkedHashSet_init_$Create$();
    tmp_13.jl_1 = tmp$ret$14;
  }
  Session.prototype.kl = function (vertexBuffer) {
    return this.al_1.d2(vertexBuffer);
  };
  Session.prototype.ll = function (shader) {
    return this.bl_1.a(shader);
  };
  function logger$lambda_1() {
    init_properties_Session_kt_bg9fdu();
    return Unit_getInstance();
  }
  var properties_initialized_Session_kt_bmkbp6;
  function init_properties_Session_kt_bg9fdu() {
    if (properties_initialized_Session_kt_bmkbp6) {
    } else {
      properties_initialized_Session_kt_bmkbp6 = true;
      var tmp = KotlinLogging_getInstance();
      logger_1 = tmp.wa(logger$lambda_1);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      sessionStack = tmp$ret$0;
    }
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.ml = function (name, vsGenerator, tscGenerator, tseGenerator, gsGenerator, fsGenerator) {
    var tmp = Companion_getInstance_13().tg();
    return tmp.nl(name, vsGenerator, tscGenerator, tseGenerator, gsGenerator, fsGenerator, null, 64, null);
  };
  Companion_5.prototype.ol = function (name, vsGenerator, tscGenerator, tseGenerator, gsGenerator, fsGenerator, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      tscGenerator = null;
    if (!(($mask0 & 8) === 0))
      tseGenerator = null;
    if (!(($mask0 & 16) === 0))
      gsGenerator = null;
    return this.ml(name, vsGenerator, tscGenerator, tseGenerator, gsGenerator, fsGenerator);
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ShadeStyleManager(name) {
    Companion_getInstance_9();
    this.pl_1 = name;
  }
  function ShadeStructure_init_$Init$(uniforms, attributes, buffers, vertexTransform, geometryTransform, fragmentTransform, vertexPreamble, geometryPreamble, fragmentPreamble, outputs, varyingOut, varyingIn, varyingBridge, suppressDefaultOutput, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      uniforms = null;
    if (!(($mask0 & 2) === 0))
      attributes = null;
    if (!(($mask0 & 4) === 0))
      buffers = null;
    if (!(($mask0 & 8) === 0))
      vertexTransform = null;
    if (!(($mask0 & 16) === 0))
      geometryTransform = null;
    if (!(($mask0 & 32) === 0))
      fragmentTransform = null;
    if (!(($mask0 & 64) === 0))
      vertexPreamble = null;
    if (!(($mask0 & 128) === 0))
      geometryPreamble = null;
    if (!(($mask0 & 256) === 0))
      fragmentPreamble = null;
    if (!(($mask0 & 512) === 0))
      outputs = null;
    if (!(($mask0 & 1024) === 0))
      varyingOut = null;
    if (!(($mask0 & 2048) === 0))
      varyingIn = null;
    if (!(($mask0 & 4096) === 0))
      varyingBridge = null;
    if (!(($mask0 & 8192) === 0))
      suppressDefaultOutput = false;
    ShadeStructure.call($this, uniforms, attributes, buffers, vertexTransform, geometryTransform, fragmentTransform, vertexPreamble, geometryPreamble, fragmentPreamble, outputs, varyingOut, varyingIn, varyingBridge, suppressDefaultOutput);
    return $this;
  }
  function ShadeStructure_init_$Create$(uniforms, attributes, buffers, vertexTransform, geometryTransform, fragmentTransform, vertexPreamble, geometryPreamble, fragmentPreamble, outputs, varyingOut, varyingIn, varyingBridge, suppressDefaultOutput, $mask0, $marker) {
    return ShadeStructure_init_$Init$(uniforms, attributes, buffers, vertexTransform, geometryTransform, fragmentTransform, vertexPreamble, geometryPreamble, fragmentPreamble, outputs, varyingOut, varyingIn, varyingBridge, suppressDefaultOutput, $mask0, $marker, Object.create(ShadeStructure.prototype));
  }
  function ShadeStructure(uniforms, attributes, buffers, vertexTransform, geometryTransform, fragmentTransform, vertexPreamble, geometryPreamble, fragmentPreamble, outputs, varyingOut, varyingIn, varyingBridge, suppressDefaultOutput) {
    this.rl_1 = uniforms;
    this.sl_1 = attributes;
    this.tl_1 = buffers;
    this.ul_1 = vertexTransform;
    this.vl_1 = geometryTransform;
    this.wl_1 = fragmentTransform;
    this.xl_1 = vertexPreamble;
    this.yl_1 = geometryPreamble;
    this.zl_1 = fragmentPreamble;
    this.am_1 = outputs;
    this.bm_1 = varyingOut;
    this.cm_1 = varyingIn;
    this.dm_1 = varyingBridge;
    this.em_1 = suppressDefaultOutput;
  }
  ShadeStructure.prototype.toString = function () {
    return 'ShadeStructure(uniforms=' + this.rl_1 + ', attributes=' + this.sl_1 + ', buffers=' + this.tl_1 + ', vertexTransform=' + this.ul_1 + ', geometryTransform=' + this.vl_1 + ', fragmentTransform=' + this.wl_1 + ', vertexPreamble=' + this.xl_1 + ', geometryPreamble=' + this.yl_1 + ', fragmentPreamble=' + this.zl_1 + ', outputs=' + this.am_1 + ', varyingOut=' + this.bm_1 + ', varyingIn=' + this.cm_1 + ', varyingBridge=' + this.dm_1 + ', suppressDefaultOutput=' + this.em_1 + ')';
  };
  ShadeStructure.prototype.hashCode = function () {
    var result = this.rl_1 == null ? 0 : getStringHashCode(this.rl_1);
    result = imul(result, 31) + (this.sl_1 == null ? 0 : getStringHashCode(this.sl_1)) | 0;
    result = imul(result, 31) + (this.tl_1 == null ? 0 : getStringHashCode(this.tl_1)) | 0;
    result = imul(result, 31) + (this.ul_1 == null ? 0 : getStringHashCode(this.ul_1)) | 0;
    result = imul(result, 31) + (this.vl_1 == null ? 0 : getStringHashCode(this.vl_1)) | 0;
    result = imul(result, 31) + (this.wl_1 == null ? 0 : getStringHashCode(this.wl_1)) | 0;
    result = imul(result, 31) + (this.xl_1 == null ? 0 : getStringHashCode(this.xl_1)) | 0;
    result = imul(result, 31) + (this.yl_1 == null ? 0 : getStringHashCode(this.yl_1)) | 0;
    result = imul(result, 31) + (this.zl_1 == null ? 0 : getStringHashCode(this.zl_1)) | 0;
    result = imul(result, 31) + (this.am_1 == null ? 0 : getStringHashCode(this.am_1)) | 0;
    result = imul(result, 31) + (this.bm_1 == null ? 0 : getStringHashCode(this.bm_1)) | 0;
    result = imul(result, 31) + (this.cm_1 == null ? 0 : getStringHashCode(this.cm_1)) | 0;
    result = imul(result, 31) + (this.dm_1 == null ? 0 : getStringHashCode(this.dm_1)) | 0;
    result = imul(result, 31) + (this.em_1 | 0) | 0;
    return result;
  };
  ShadeStructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ShadeStructure))
      return false;
    var tmp0_other_with_cast = other instanceof ShadeStructure ? other : THROW_CCE();
    if (!(this.rl_1 == tmp0_other_with_cast.rl_1))
      return false;
    if (!(this.sl_1 == tmp0_other_with_cast.sl_1))
      return false;
    if (!(this.tl_1 == tmp0_other_with_cast.tl_1))
      return false;
    if (!(this.ul_1 == tmp0_other_with_cast.ul_1))
      return false;
    if (!(this.vl_1 == tmp0_other_with_cast.vl_1))
      return false;
    if (!(this.wl_1 == tmp0_other_with_cast.wl_1))
      return false;
    if (!(this.xl_1 == tmp0_other_with_cast.xl_1))
      return false;
    if (!(this.yl_1 == tmp0_other_with_cast.yl_1))
      return false;
    if (!(this.zl_1 == tmp0_other_with_cast.zl_1))
      return false;
    if (!(this.am_1 == tmp0_other_with_cast.am_1))
      return false;
    if (!(this.bm_1 == tmp0_other_with_cast.bm_1))
      return false;
    if (!(this.cm_1 == tmp0_other_with_cast.cm_1))
      return false;
    if (!(this.dm_1 == tmp0_other_with_cast.dm_1))
      return false;
    if (!(this.em_1 === tmp0_other_with_cast.em_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.fm = function (vsCode, tcsCode, tesCode, gsCode, fsCode, name, session) {
    var shader = Companion_getInstance_13().tg().gm(vsCode, tcsCode, tesCode, gsCode, fsCode, name, session);
    var tmp0_safe_receiver = session;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.ll(shader);
    return shader;
  };
  var Companion_instance_6;
  function Companion_getInstance_10() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  var ShaderType_VERTEX_instance;
  var ShaderType_GEOMETRY_instance;
  var ShaderType_FRAGMENT_instance;
  var ShaderType_entriesInitialized;
  function ShaderType_initEntries() {
    if (ShaderType_entriesInitialized)
      return Unit_getInstance();
    ShaderType_entriesInitialized = true;
    ShaderType_VERTEX_instance = new ShaderType('VERTEX', 0);
    ShaderType_GEOMETRY_instance = new ShaderType('GEOMETRY', 1);
    ShaderType_FRAGMENT_instance = new ShaderType('FRAGMENT', 2);
  }
  function ShaderType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShaderType_VERTEX_getInstance() {
    ShaderType_initEntries();
    return ShaderType_VERTEX_instance;
  }
  function ShaderType_FRAGMENT_getInstance() {
    ShaderType_initEntries();
    return ShaderType_FRAGMENT_instance;
  }
  function vertexBuffer(vertexFormat, vertexCount, session) {
    var vertexBuffer = Companion_getInstance_12().hm(vertexFormat, vertexCount, session);
    return vertexBuffer;
  }
  function VertexBufferShadow() {
  }
  var VertexElementType_INT8_instance;
  var VertexElementType_UINT8_instance;
  var VertexElementType_UINT16_instance;
  var VertexElementType_INT16_instance;
  var VertexElementType_UINT32_instance;
  var VertexElementType_INT32_instance;
  var VertexElementType_VECTOR2_UINT8_instance;
  var VertexElementType_VECTOR2_INT8_instance;
  var VertexElementType_VECTOR2_UINT16_instance;
  var VertexElementType_VECTOR2_INT16_instance;
  var VertexElementType_VECTOR2_UINT32_instance;
  var VertexElementType_VECTOR2_INT32_instance;
  var VertexElementType_VECTOR3_UINT8_instance;
  var VertexElementType_VECTOR3_INT8_instance;
  var VertexElementType_VECTOR3_UINT16_instance;
  var VertexElementType_VECTOR3_INT16_instance;
  var VertexElementType_VECTOR3_UINT32_instance;
  var VertexElementType_VECTOR3_INT32_instance;
  var VertexElementType_VECTOR4_UINT8_instance;
  var VertexElementType_VECTOR4_INT8_instance;
  var VertexElementType_VECTOR4_UINT16_instance;
  var VertexElementType_VECTOR4_INT16_instance;
  var VertexElementType_VECTOR4_UINT32_instance;
  var VertexElementType_VECTOR4_INT32_instance;
  var VertexElementType_FLOAT32_instance;
  var VertexElementType_VECTOR2_FLOAT32_instance;
  var VertexElementType_VECTOR3_FLOAT32_instance;
  var VertexElementType_VECTOR4_FLOAT32_instance;
  var VertexElementType_MATRIX22_FLOAT32_instance;
  var VertexElementType_MATRIX33_FLOAT32_instance;
  var VertexElementType_MATRIX44_FLOAT32_instance;
  var VertexElementType_entriesInitialized;
  function VertexElementType_initEntries() {
    if (VertexElementType_entriesInitialized)
      return Unit_getInstance();
    VertexElementType_entriesInitialized = true;
    VertexElementType_INT8_instance = new VertexElementType('INT8', 0, 1, 1);
    VertexElementType_UINT8_instance = new VertexElementType('UINT8', 1, 1, 1);
    VertexElementType_UINT16_instance = new VertexElementType('UINT16', 2, 1, 2);
    VertexElementType_INT16_instance = new VertexElementType('INT16', 3, 1, 2);
    VertexElementType_UINT32_instance = new VertexElementType('UINT32', 4, 1, 4);
    VertexElementType_INT32_instance = new VertexElementType('INT32', 5, 1, 4);
    VertexElementType_VECTOR2_UINT8_instance = new VertexElementType('VECTOR2_UINT8', 6, 2, 2);
    VertexElementType_VECTOR2_INT8_instance = new VertexElementType('VECTOR2_INT8', 7, 2, 2);
    VertexElementType_VECTOR2_UINT16_instance = new VertexElementType('VECTOR2_UINT16', 8, 2, 4);
    VertexElementType_VECTOR2_INT16_instance = new VertexElementType('VECTOR2_INT16', 9, 2, 4);
    VertexElementType_VECTOR2_UINT32_instance = new VertexElementType('VECTOR2_UINT32', 10, 2, 8);
    VertexElementType_VECTOR2_INT32_instance = new VertexElementType('VECTOR2_INT32', 11, 2, 8);
    VertexElementType_VECTOR3_UINT8_instance = new VertexElementType('VECTOR3_UINT8', 12, 3, 3);
    VertexElementType_VECTOR3_INT8_instance = new VertexElementType('VECTOR3_INT8', 13, 3, 3);
    VertexElementType_VECTOR3_UINT16_instance = new VertexElementType('VECTOR3_UINT16', 14, 3, 6);
    VertexElementType_VECTOR3_INT16_instance = new VertexElementType('VECTOR3_INT16', 15, 3, 6);
    VertexElementType_VECTOR3_UINT32_instance = new VertexElementType('VECTOR3_UINT32', 16, 3, 12);
    VertexElementType_VECTOR3_INT32_instance = new VertexElementType('VECTOR3_INT32', 17, 3, 12);
    VertexElementType_VECTOR4_UINT8_instance = new VertexElementType('VECTOR4_UINT8', 18, 3, 3);
    VertexElementType_VECTOR4_INT8_instance = new VertexElementType('VECTOR4_INT8', 19, 4, 4);
    VertexElementType_VECTOR4_UINT16_instance = new VertexElementType('VECTOR4_UINT16', 20, 4, 8);
    VertexElementType_VECTOR4_INT16_instance = new VertexElementType('VECTOR4_INT16', 21, 4, 8);
    VertexElementType_VECTOR4_UINT32_instance = new VertexElementType('VECTOR4_UINT32', 22, 4, 16);
    VertexElementType_VECTOR4_INT32_instance = new VertexElementType('VECTOR4_INT32', 23, 4, 16);
    VertexElementType_FLOAT32_instance = new VertexElementType('FLOAT32', 24, 1, 4);
    VertexElementType_VECTOR2_FLOAT32_instance = new VertexElementType('VECTOR2_FLOAT32', 25, 2, 8);
    VertexElementType_VECTOR3_FLOAT32_instance = new VertexElementType('VECTOR3_FLOAT32', 26, 3, 12);
    VertexElementType_VECTOR4_FLOAT32_instance = new VertexElementType('VECTOR4_FLOAT32', 27, 4, 16);
    VertexElementType_MATRIX22_FLOAT32_instance = new VertexElementType('MATRIX22_FLOAT32', 28, 4, 16);
    VertexElementType_MATRIX33_FLOAT32_instance = new VertexElementType('MATRIX33_FLOAT32', 29, 9, 36);
    VertexElementType_MATRIX44_FLOAT32_instance = new VertexElementType('MATRIX44_FLOAT32', 30, 16, 64);
  }
  function VertexElementType(name, ordinal, componentCount, sizeInBytes) {
    Enum.call(this, name, ordinal);
    this.pm_1 = componentCount;
    this.qm_1 = sizeInBytes;
  }
  function VertexElementType_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_FLOAT32_instance;
  }
  function VertexElementType_VECTOR2_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_VECTOR2_FLOAT32_instance;
  }
  function VertexElementType_VECTOR3_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_VECTOR3_FLOAT32_instance;
  }
  function VertexElementType_VECTOR4_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_VECTOR4_FLOAT32_instance;
  }
  function VertexElementType_MATRIX33_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_MATRIX33_FLOAT32_instance;
  }
  function VertexElementType_MATRIX44_FLOAT32_getInstance() {
    VertexElementType_initEntries();
    return VertexElementType_MATRIX44_FLOAT32_instance;
  }
  function VertexFormat_init_$Init$($this) {
    VertexFormat.call($this);
    return $this;
  }
  function VertexFormat_init_$Create$() {
    return VertexFormat_init_$Init$(Object.create(VertexFormat.prototype));
  }
  function floatTypeFromDimensions($this, dimensions) {
    var tmp0_subject = dimensions;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = VertexElementType_FLOAT32_getInstance();
        break;
      case 2:
        tmp = VertexElementType_VECTOR2_FLOAT32_getInstance();
        break;
      case 3:
        tmp = VertexElementType_VECTOR3_FLOAT32_getInstance();
        break;
      case 4:
        tmp = VertexElementType_VECTOR4_FLOAT32_getInstance();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('dimensions can only be 1, 2, 3 or 4 (got ' + dimensions + ')');
    }
    return tmp;
  }
  VertexFormat.prototype.c = function () {
    return this.pg_1;
  };
  VertexFormat.prototype.rm = function (dimensions) {
    var tmp = floatTypeFromDimensions(this, dimensions);
    return this.qg('position', tmp, 0, 4, null);
  };
  VertexFormat.prototype.sm = function (dimensions) {
    var tmp = floatTypeFromDimensions(this, dimensions);
    return this.qg('normal', tmp, 0, 4, null);
  };
  VertexFormat.prototype.tm = function (dimensions) {
    var tmp = floatTypeFromDimensions(this, dimensions);
    return this.qg('color', tmp, 0, 4, null);
  };
  VertexFormat.prototype.um = function (dimensions, index) {
    var tmp = 'texCoord' + index;
    var tmp_0 = floatTypeFromDimensions(this, dimensions);
    return this.qg(tmp, tmp_0, 0, 4, null);
  };
  VertexFormat.prototype.vm = function (dimensions, index, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dimensions = 2;
    if (!(($mask0 & 2) === 0))
      index = 0;
    return this.um(dimensions, index);
  };
  VertexFormat.prototype.wm = function (name, type, arraySize) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sumOf' call
    var tmp0_sumOf = this.og_1;
    var sum = 0;
    var tmp0_iterator = tmp0_sumOf.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp = sum;
      var tmp$ret$0;
      // Inline function 'org.openrndr.draw.VertexFormat.attribute.<anonymous>' call
      tmp$ret$0 = imul(element.an_1, element.zm_1.qm_1);
      sum = tmp + tmp$ret$0 | 0;
    }
    tmp$ret$1 = sum;
    var offset = tmp$ret$1;
    var item = new VertexElement(name, offset, type, arraySize);
    this.og_1.a(item);
    var tmp0_this = this;
    tmp0_this.pg_1 = tmp0_this.pg_1 + imul(type.qm_1, arraySize) | 0;
  };
  VertexFormat.prototype.qg = function (name, type, arraySize, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      arraySize = 1;
    return this.wm(name, type, arraySize);
  };
  VertexFormat.prototype.toString = function () {
    return 'VertexFormat{items=' + this.og_1 + ', vertexSize=' + this.pg_1 + new Char(_Char___init__impl__6a9atx(125));
  };
  VertexFormat.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VertexFormat))
      return false;
    if (!equals(this.og_1, other.og_1))
      return false;
    return true;
  };
  VertexFormat.prototype.hashCode = function () {
    return hashCode(this.og_1);
  };
  function VertexFormat() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.og_1 = tmp$ret$0;
    this.pg_1 = 0;
  }
  function vertexFormat(builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.draw.vertexFormat.<anonymous>' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function VertexElement(attribute, offset, type, arraySize) {
    this.xm_1 = attribute;
    this.ym_1 = offset;
    this.zm_1 = type;
    this.an_1 = arraySize;
  }
  VertexElement.prototype.toString = function () {
    return 'VertexElement(attribute=' + this.xm_1 + ', offset=' + this.ym_1 + ', type=' + this.zm_1 + ', arraySize=' + this.an_1 + ')';
  };
  VertexElement.prototype.hashCode = function () {
    var result = getStringHashCode(this.xm_1);
    result = imul(result, 31) + this.ym_1 | 0;
    result = imul(result, 31) + this.zm_1.hashCode() | 0;
    result = imul(result, 31) + this.an_1 | 0;
    return result;
  };
  VertexElement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VertexElement))
      return false;
    var tmp0_other_with_cast = other instanceof VertexElement ? other : THROW_CCE();
    if (!(this.xm_1 === tmp0_other_with_cast.xm_1))
      return false;
    if (!(this.ym_1 === tmp0_other_with_cast.ym_1))
      return false;
    if (!this.zm_1.equals(tmp0_other_with_cast.zm_1))
      return false;
    if (!(this.an_1 === tmp0_other_with_cast.an_1))
      return false;
    return true;
  };
  function get_logger_1() {
    init_properties_CircleDrawer_kt_y62wkn();
    return logger_2;
  }
  var logger_2;
  function drawCircles($this, drawContext, drawStyle, count) {
    $this.bn(drawContext, drawStyle, $this.lk_1, count);
  }
  function ShaderGenerators$circleVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.cn(p0);
    };
    l.callableName = 'circleVertexShader';
    return l;
  }
  function ShaderGenerators$circleFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.dn(p0);
    };
    l.callableName = 'circleFragmentShader';
    return l;
  }
  function CircleDrawer$ensureBatchSize$lambda(this$0, $size) {
    return function () {
      return 'resizing buffer from ' + this$0.lk_1.c() + ' to ' + $size;
    };
  }
  function CircleDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.CircleDrawer.vertices.<anonymous>' call
    tmp0_apply.rm(3);
    tmp0_apply.sm(3);
    tmp0_apply.vm(2, 0, 2, null);
    tmp$ret$0 = tmp0_apply;
    tmp.kk_1 = tmp_0.hm(tmp$ret$0, 6, Companion_getInstance_8().sk());
    var tmp_1 = this;
    var tmp_2 = Companion_getInstance_5();
    tmp_1.lk_1 = tmp_2.jg(10000, null, 2, null);
    var tmp_3 = this;
    var tmp_4 = Companion_getInstance_9();
    var tmp_5 = ShaderGenerators$circleVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_3.mk_1 = tmp_4.ol('circle', tmp_5, null, null, null, ShaderGenerators$circleFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var w = this.kk_1.fn().mm();
    w.gn();
    var x = 0.0;
    var y = 0.0;
    var radius = 1.0;
    var pa = new Vector3(x - radius, y - radius, 0.0);
    var pb = new Vector3(x + radius, y - radius, 0.0);
    var pc = new Vector3(x + radius, y + radius, 0.0);
    var pd = new Vector3(x - radius, y + radius, 0.0);
    var ta = new Vector2(0.0, 0.0);
    var tb = new Vector2(1.0, 0.0);
    var tc = new Vector2(1.0, 1.0);
    var td = new Vector2(0.0, 1.0);
    var n = new Vector3(0.0, 0.0, -1.0);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.CircleDrawer.<anonymous>' call
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    w.hn(pd);
    w.hn(n);
    w.in(td);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pb);
    w.hn(n);
    w.in(tb);
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    tmp$ret$1 = w;
    var tmp_6 = this.kk_1.fn();
    tmp_6.km(0, 0, 3, null);
  }
  CircleDrawer.prototype.jn = function (size) {
    if (this.lk_1.c() < size) {
      var tmp = get_logger_1();
      tmp.cb(CircleDrawer$ensureBatchSize$lambda(this, size));
      this.lk_1.ng();
      this.lk_1 = Companion_getInstance_5().cg(size, Companion_getInstance_8().sk());
    }
  };
  CircleDrawer.prototype.nk = function (drawContext, drawStyle, x, y, radius) {
    this.jn(1);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.lk_1.lg_1.fn().mm();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.CircleDrawer.drawCircle.<anonymous>' call
    tmp0_apply.gn();
    tmp0_apply.hn(new Vector3(x, y, 0.0));
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(radius);
    tmp0_apply.in(Vector2_init_$Create$(tmp$ret$0));
    tmp$ret$1 = tmp0_apply;
    this.lk_1.lg_1.fn().lm(0, 1);
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = this.lk_1.mg_1.fn().mm();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.CircleDrawer.drawCircle.<anonymous>' call
    tmp1_apply.gn();
    var tmp0_elvis_lhs = drawStyle.nh_1;
    tmp1_apply.kn(tmp0_elvis_lhs == null ? Companion_getInstance_0().if_1 : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = drawStyle.oh_1;
    tmp1_apply.kn(tmp1_elvis_lhs == null ? Companion_getInstance_0().if_1 : tmp1_elvis_lhs);
    var tmp;
    var tmp_0;
    if (drawStyle.oh_1 == null) {
      tmp_0 = true;
    } else {
      var tmp2_safe_receiver = drawStyle.oh_1;
      tmp_0 = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.of_1) === 0.0;
    }
    if (tmp_0) {
      tmp = 0.0;
    } else {
      tmp = drawStyle.rh_1;
    }
    var weight = tmp;
    tmp1_apply.ln(weight);
    tmp$ret$2 = tmp1_apply;
    this.lk_1.mg_1.fn().lm(0, 1);
    drawCircles(this, drawContext, drawStyle, 1);
  };
  CircleDrawer.prototype.bn = function (drawContext, drawStyle, circleBatch, count) {
    var instanceAttributes = listOf([circleBatch.lg_1, circleBatch.mg_1]);
    var instanceAttributeFormats = listOf([circleBatch.lg_1.fg(), circleBatch.mg_1.fg()]);
    var shader = this.mk_1.ql(drawStyle.bi_1, listOf_0(this.kk_1.fg()), instanceAttributeFormats);
    shader.mn();
    drawContext.ch(shader);
    drawStyle.ch(shader);
    Companion_getInstance_13().tg().nn(drawStyle);
    var tmp = Companion_getInstance_13().tg();
    var tmp_0 = listOf_0(this.kk_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_safe_receiver = drawStyle.bi_1;
    var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yn_1;
    var tmp0_elvis_lhs = tmp0_orEmpty;
    tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    tmp.co(shader, tmp_0, plus(instanceAttributes, tmp$ret$0), DrawPrimitive_TRIANGLES_getInstance(), 0, 6, 0, count, 0);
    shader.do();
  };
  function logger$lambda_2() {
    init_properties_CircleDrawer_kt_y62wkn();
    return Unit_getInstance();
  }
  var properties_initialized_CircleDrawer_kt_b3ajwj;
  function init_properties_CircleDrawer_kt_y62wkn() {
    if (properties_initialized_CircleDrawer_kt_b3ajwj) {
    } else {
      properties_initialized_CircleDrawer_kt_b3ajwj = true;
      var tmp = KotlinLogging_getInstance();
      logger_2 = tmp.wa(logger$lambda_2);
    }
  }
  function ShaderGenerators$expansionVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.eo(p0);
    };
    l.callableName = 'expansionVertexShader';
    return l;
  }
  function ShaderGenerators$expansionFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.fo(p0);
    };
    l.callableName = 'expansionFragmentShader';
    return l;
  }
  function ExpansionDrawer$vertexFormat$lambda($this$vertexFormat) {
    $this$vertexFormat.rm(2);
    $this$vertexFormat.vm(2, 0, 2, null);
    var tmp = VertexElementType_FLOAT32_getInstance();
    $this$vertexFormat.qg('vertexOffset', tmp, 0, 4, null);
    return Unit_getInstance();
  }
  function ExpansionDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9();
    var tmp_1 = ShaderGenerators$expansionVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp.go_1 = tmp_0.ol('expansion', tmp_1, null, null, null, ShaderGenerators$expansionFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var tmp_2 = this;
    tmp_2.ho_1 = vertexFormat(ExpansionDrawer$vertexFormat$lambda);
    this.io_1 = Companion_getInstance_12().hm(this.ho_1, 4194304, Companion_getInstance_8().sk());
    this.jo_1 = Companion_getInstance_12().hm(this.ho_1, 6, Companion_getInstance_8().sk());
  }
  function ShaderGenerators$fontImageMapVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.ko(p0);
    };
    l.callableName = 'fontImageMapVertexShader';
    return l;
  }
  function ShaderGenerators$fontImageMapFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.lo(p0);
    };
    l.callableName = 'fontImageMapFragmentShader';
    return l;
  }
  function FontImageMapDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9();
    var tmp_1 = ShaderGenerators$fontImageMapVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp.mo_1 = tmp_0.ol('font-image-map', tmp_1, null, null, null, ShaderGenerators$fontImageMapFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    this.no_1 = 20000;
    var tmp_2 = this;
    var tmp_3 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.FontImageMapDrawer.vertices.<anonymous>' call
    tmp0_apply.vm(2, 0, 2, null);
    var tmp_4 = VertexElementType_VECTOR4_FLOAT32_getInstance();
    tmp0_apply.qg('bounds', tmp_4, 0, 4, null);
    tmp0_apply.rm(3);
    var tmp_5 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('instance', tmp_5, 0, 4, null);
    tmp$ret$0 = tmp0_apply;
    var tmp_6 = tmp$ret$0;
    var tmp_7 = imul(6, this.no_1);
    tmp_2.oo_1 = tmp_3.ro(tmp_6, tmp_7, null, 4, null);
    this.po_1 = 0;
    this.qo_1 = 0;
  }
  function ImageDrawer$instanceFormat$lambda($this$vertexFormat) {
    var tmp = VertexElementType_VECTOR4_FLOAT32_getInstance();
    $this$vertexFormat.qg('source', tmp, 0, 4, null);
    var tmp_0 = VertexElementType_VECTOR4_FLOAT32_getInstance();
    $this$vertexFormat.qg('target', tmp_0, 0, 4, null);
    var tmp_1 = VertexElementType_FLOAT32_getInstance();
    $this$vertexFormat.qg('layer', tmp_1, 0, 4, null);
    return Unit_getInstance();
  }
  function ShaderGenerators$imageVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.so(p0);
    };
    l.callableName = 'imageVertexShader';
    return l;
  }
  function ShaderGenerators$imageFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.to(p0);
    };
    l.callableName = 'imageFragmentShader';
    return l;
  }
  function ShaderGenerators$imageArrayTextureVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.uo(p0);
    };
    l.callableName = 'imageArrayTextureVertexShader';
    return l;
  }
  function ShaderGenerators$imageArrayTextureFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.vo(p0);
    };
    l.callableName = 'imageArrayTextureFragmentShader';
    return l;
  }
  function ImageDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.ImageDrawer.vertices.<anonymous>' call
    tmp0_apply.rm(3);
    tmp0_apply.sm(3);
    tmp0_apply.vm(2, 0, 2, null);
    tmp$ret$0 = tmp0_apply;
    tmp.wo_1 = tmp_0.hm(tmp$ret$0, 6, Companion_getInstance_8().sk());
    var tmp_1 = this;
    tmp_1.xo_1 = vertexFormat(ImageDrawer$instanceFormat$lambda);
    this.yo_1 = vertexBuffer(this.xo_1, 10, Companion_getInstance_8().sk());
    var tmp_2 = this;
    var tmp_3 = Companion_getInstance_9();
    var tmp_4 = ShaderGenerators$imageVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_2.zo_1 = tmp_3.ol('image', tmp_4, null, null, null, ShaderGenerators$imageFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var tmp_5 = this;
    var tmp_6 = Companion_getInstance_9();
    var tmp_7 = ShaderGenerators$imageArrayTextureVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_5.ap_1 = tmp_6.ol('array-texture', tmp_7, null, null, null, ShaderGenerators$imageArrayTextureFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var w = this.wo_1.fn().mm();
    w.gn();
    var pa = new Vector3(0.0, 0.0, 0.0);
    var pb = new Vector3(1.0, 0.0, 0.0);
    var pc = new Vector3(1.0, 1.0, 0.0);
    var pd = new Vector3(0.0, 1.0, 0.0);
    var u0 = 0.0;
    var u1 = 1.0;
    var v0 = 1.0;
    var v1 = 0.0;
    var ta = new Vector2(u0, v1);
    var tb = new Vector2(u1, v1);
    var tc = new Vector2(u1, v0);
    var td = new Vector2(u0, v0);
    var n = new Vector3(0.0, 0.0, -1.0);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.ImageDrawer.<anonymous>' call
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    w.hn(pd);
    w.hn(n);
    w.in(td);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pb);
    w.hn(n);
    w.in(tb);
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    tmp$ret$1 = w;
    var tmp_8 = this.wo_1.fn();
    tmp_8.km(0, 0, 3, null);
  }
  function ShaderGenerators$meshLineVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.bp(p0);
    };
    l.callableName = 'meshLineVertexShader';
    return l;
  }
  function ShaderGenerators$meshLineFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.cp(p0);
    };
    l.callableName = 'meshLineFragmentShader';
    return l;
  }
  function MeshLineDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9();
    var tmp_1 = ShaderGenerators$meshLineVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp.dp_1 = tmp_0.ol('mesh-line', tmp_1, null, null, null, ShaderGenerators$meshLineFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var tmp_2 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.MeshLineDrawer.vertices.<anonymous>' call
    var tmp_3 = VertexElementType_VECTOR3_FLOAT32_getInstance();
    tmp0_apply.qg('previous', tmp_3, 0, 4, null);
    tmp0_apply.rm(3);
    var tmp_4 = VertexElementType_VECTOR3_FLOAT32_getInstance();
    tmp0_apply.qg('next', tmp_4, 0, 4, null);
    var tmp_5 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('side', tmp_5, 0, 4, null);
    var tmp_6 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('width', tmp_6, 0, 4, null);
    var tmp_7 = VertexElementType_VECTOR2_FLOAT32_getInstance();
    tmp0_apply.qg('uv', tmp_7, 0, 4, null);
    var tmp_8 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('element', tmp_8, 0, 4, null);
    tmp0_apply.tm(4);
    tmp$ret$0 = tmp0_apply;
    tmp_2.ep_1 = vertexBuffer(tmp$ret$0, 1048576, Companion_getInstance_8().sk());
  }
  function ShaderGenerators$fastLineVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.fp(p0);
    };
    l.callableName = 'fastLineVertexShader';
    return l;
  }
  function ShaderGenerators$fastLineFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.gp(p0);
    };
    l.callableName = 'fastLineFragmentShader';
    return l;
  }
  function PerformanceLineDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.PerformanceLineDrawer.vertices.<anonymous>' call
    tmp0_apply.rm(3);
    var tmp_1 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('instance', tmp_1, 0, 4, null);
    var tmp_2 = VertexElementType_FLOAT32_getInstance();
    tmp0_apply.qg('vertexOffset', tmp_2, 0, 4, null);
    tmp$ret$0 = tmp0_apply;
    tmp.hp_1 = tmp_0.hm(tmp$ret$0, 1048576, Companion_getInstance_8().sk());
    var tmp_3 = this;
    var tmp_4 = Companion_getInstance_9();
    var tmp_5 = ShaderGenerators$fastLineVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_3.ip_1 = tmp_4.ol('performance-line', tmp_5, null, null, null, ShaderGenerators$fastLineFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
  }
  function ShaderGenerators$pointVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.jp(p0);
    };
    l.callableName = 'pointVertexShader';
    return l;
  }
  function ShaderGenerators$pointFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.kp(p0);
    };
    l.callableName = 'pointFragmentShader';
    return l;
  }
  function PointDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.PointDrawer.vertices.<anonymous>' call
    tmp0_apply.rm(3);
    tmp0_apply.sm(3);
    tmp$ret$0 = tmp0_apply;
    var tmp_1 = tmp$ret$0;
    tmp.lp_1 = tmp_0.ro(tmp_1, 1, null, 4, null);
    this.mp_1 = Companion_getInstance_4().cg(10000, Companion_getInstance_8().sk());
    var tmp_2 = this;
    var tmp_3 = Companion_getInstance_9();
    var tmp_4 = ShaderGenerators$pointVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_2.np_1 = tmp_3.ol('point', tmp_4, null, null, null, ShaderGenerators$pointFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var w = this.lp_1.fn().mm();
    w.gn();
    var x = 0.0;
    var y = 0.0;
    var pa = new Vector3(x, y, 0.0);
    var n = new Vector3(0.0, 0.0, -1.0);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.PointDrawer.<anonymous>' call
    w.hn(pa);
    w.hn(n);
    tmp$ret$1 = w;
    var tmp_5 = this.lp_1.fn();
    tmp_5.km(0, 0, 3, null);
  }
  function QualityLineDrawer() {
    this.op_1 = new ExpansionDrawer();
  }
  function QualityPolygonDrawer() {
    this.pp_1 = new ExpansionDrawer();
  }
  function ShaderGenerators$rectangleVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.qp(p0);
    };
    l.callableName = 'rectangleVertexShader';
    return l;
  }
  function ShaderGenerators$rectangleFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.rp(p0);
    };
    l.callableName = 'rectangleFragmentShader';
    return l;
  }
  function RectangleDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = VertexFormat_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.RectangleDrawer.vertices.<anonymous>' call
    tmp0_apply.rm(3);
    tmp0_apply.sm(3);
    tmp0_apply.vm(2, 0, 2, null);
    tmp$ret$0 = tmp0_apply;
    tmp.sp_1 = tmp_0.hm(tmp$ret$0, 6, Companion_getInstance_8().sk());
    this.tp_1 = Companion_getInstance_3().cg(10000, Companion_getInstance_8().sk());
    var tmp_1 = this;
    var tmp_2 = Companion_getInstance_9();
    var tmp_3 = ShaderGenerators$rectangleVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp_1.up_1 = tmp_2.ol('rectangle', tmp_3, null, null, null, ShaderGenerators$rectangleFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
    var w = this.sp_1.fn().mm();
    w.gn();
    var x = 0.0;
    var y = 0.0;
    var radius = 1.0;
    var pa = new Vector3(x, y, 0.0);
    var pb = new Vector3(x + radius, y, 0.0);
    var pc = new Vector3(x + radius, y + radius, 0.0);
    var pd = new Vector3(x, y + radius, 0.0);
    var ta = new Vector2(0.0, 0.0);
    var tb = new Vector2(1.0, 0.0);
    var tc = new Vector2(1.0, 1.0);
    var td = new Vector2(0.0, 1.0);
    var n = new Vector3(0.0, 0.0, -1.0);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.openrndr.internal.RectangleDrawer.<anonymous>' call
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    w.hn(pd);
    w.hn(n);
    w.in(td);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pc);
    w.hn(n);
    w.in(tc);
    w.hn(pb);
    w.hn(n);
    w.in(tb);
    w.hn(pa);
    w.hn(n);
    w.in(ta);
    tmp$ret$1 = w;
    var tmp_4 = this.sp_1.fn();
    tmp_4.km(0, 0, 3, null);
  }
  function ShaderGenerators$vertexBufferVertexShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.vp(p0);
    };
    l.callableName = 'vertexBufferVertexShader';
    return l;
  }
  function ShaderGenerators$vertexBufferFragmentShader$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.wp(p0);
    };
    l.callableName = 'vertexBufferFragmentShader';
    return l;
  }
  function VertexBufferDrawer() {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9();
    var tmp_1 = ShaderGenerators$vertexBufferVertexShader$ref(Companion_getInstance_13().tg().en());
    tmp.xp_1 = tmp_0.ol('vertex-buffer', tmp_1, null, null, null, ShaderGenerators$vertexBufferFragmentShader$ref(Companion_getInstance_13().tg().en()), 28, null);
  }
  function ArrayCubemap() {
  }
  function ArrayTexture() {
  }
  function BufferTexture() {
  }
  function BufferWriter() {
  }
  function ColorBuffer() {
  }
  function Cubemap() {
  }
  function get_useContextBlock() {
    return useContextBlock;
  }
  var useContextBlock;
  function ShadeStyleGLSL$Companion$drawerUniforms$lambda() {
    return '\n                |    uniform highp mat4 u_modelNormalMatrix;\n                |    uniform highp mat4 u_modelMatrix;\n                |    uniform highp mat4 u_viewNormalMatrix;\n                |    uniform highp mat4 u_viewMatrix;\n                |    uniform highp mat4 u_projectionMatrix;\n                |    uniform highp float u_contentScale;\n                |    uniform highp float u_modelViewScalingFactor;\n                |    uniform highp vec2 u_viewDimensions;\n                |';
  }
  function ShadeStyleGLSL$Companion$drawerUniforms$lambda_0() {
    return '\n                |    uniform highp vec4 u_fill;\n                |    uniform highp vec4 u_stroke;\n                |    uniform highp float u_strokeWeight;\n                |    uniform highp float u_colorMatrix[25];';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.yp_1 = '// <transform-varying-in> (ShadeStyleGLSL.kt)\nin vec3 v_worldNormal;\nin vec3 v_viewNormal;\nin vec3 v_worldPosition;\nin vec3 v_viewPosition;\nin vec4 v_clipPosition;\nin mat4 v_modelNormalMatrix;\n// <\/transform-varying-in>';
    this.zp_1 = '// <transform-varying-out> (ShadeStyleGLSL.kt)\nout vec3 v_worldNormal;\nout vec3 v_viewNormal;\nout vec3 v_worldPosition;\nout vec3 v_viewPosition;\nout vec4 v_clipPosition;\n\nout mat4 v_modelNormalMatrix;\n// <\/transform-varying-out>';
    this.aq_1 = '// <pre-Transform> (ShadeStyleGLSL.kt)\nmat4 x_modelMatrix = u_modelMatrix;\nmat4 x_viewMatrix = u_viewMatrix;\nmat4 x_modelNormalMatrix = u_modelNormalMatrix;\nmat4 x_viewNormalMatrix = u_viewNormalMatrix;\nmat4 x_projectionMatrix = u_projectionMatrix;\n// <\/pre-transform>';
    this.bq_1 = '// <post-transform> (ShadeStyleGLSL.kt)\nv_worldNormal = (x_modelNormalMatrix * vec4(x_normal,0.0)).xyz;\nv_viewNormal = (x_viewNormalMatrix * vec4(v_worldNormal,0.0)).xyz;\nv_worldPosition = (x_modelMatrix * vec4(x_position, 1.0)).xyz;\nv_viewPosition = (x_viewMatrix * vec4(v_worldPosition, 1.0)).xyz;\nv_clipPosition = x_projectionMatrix * vec4(v_viewPosition, 1.0);\nv_modelNormalMatrix = x_modelNormalMatrix;\n// <\/post-transform>';
  }
  Companion_7.prototype.cq = function (instance, element, screenPosition, contourPosition, boundsPosition, boundsSize) {
    var tmp = '\n        |    // -- fragmentConstants\n        |    int c_instance = ' + instance + ';\n        |    int c_element = ' + element + ';\n        |    vec2 c_screenPosition = ' + screenPosition + ';\n        |    float c_contourPosition = ' + contourPosition + ';\n        |    vec3 c_boundsPosition = ' + boundsPosition + ';\n        |    vec3 c_boundsSize = ' + boundsSize + ';';
    return trimMargin$default(tmp, null, 1, null);
  };
  Companion_7.prototype.dq = function (instance, element, screenPosition, contourPosition, boundsPosition, boundsSize, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      instance = 'v_instance';
    if (!(($mask0 & 2) === 0))
      element = '0';
    if (!(($mask0 & 4) === 0))
      screenPosition = 'gl_FragCoord.xy / u_contentScale';
    if (!(($mask0 & 8) === 0))
      contourPosition = '0.0';
    if (!(($mask0 & 16) === 0))
      boundsPosition = 'vec3(0.0)';
    if (!(($mask0 & 32) === 0))
      boundsSize = 'vec3(0.0)';
    return this.cq(instance, element, screenPosition, contourPosition, boundsPosition, boundsSize);
  };
  Companion_7.prototype.eq = function (instance, element) {
    var tmp = '\n        |    int c_instance = int(' + instance + ');\n        |    int c_element = ' + element + ';';
    return trimMargin$default(tmp, null, 1, null);
  };
  Companion_7.prototype.fq = function (instance, element, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      instance = 'gl_InstanceID';
    if (!(($mask0 & 2) === 0))
      element = '0';
    return this.eq(instance, element);
  };
  Companion_7.prototype.gq = function (type) {
    return trimIndent('\n            // <primitive-types> (ShadeStyleGLSL.kt)\n            #define d_vertex_buffer 0\n            #define d_image 1\n            #define d_circle 2\n            #define d_rectangle 3\n            #define d_font_image_map 4\n            #define d_expansion 5\n            #define d_fast_line 6\n            #define d_mesh_line 7\n            #define d_point 8\n            #define d_custom 9\n            #define d_primitive ' + type + '\n            // <\/primitive-types>\n            ');
  };
  Companion_7.prototype.hq = function (contextBlock, styleBlock) {
    var tmp = trueOrEmpty(contextBlock, ShadeStyleGLSL$Companion$drawerUniforms$lambda);
    var tmp_0 = '\n            |// <drawer-uniforms(' + contextBlock + ', ' + styleBlock + ')> (ShadeStyleGLSL.kt)\n            ' + tmp + '\n            ' + trueOrEmpty(styleBlock, ShadeStyleGLSL$Companion$drawerUniforms$lambda_0) + '\n            |// <\/drawer-uniforms>\n            ';
    return trimMargin$default(tmp_0, null, 1, null);
  };
  Companion_7.prototype.iq = function (contextBlock, styleBlock, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      contextBlock = true;
    if (!(($mask0 & 2) === 0))
      styleBlock = true;
    return this.hq(contextBlock, styleBlock);
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function trueOrEmpty(_this__u8e3s4, f) {
    return _this__u8e3s4 ? f() : '';
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.prototype.hm = function (format, vertexCount, session) {
    return Companion_getInstance_13().tg().jq(format, vertexCount, session);
  };
  Companion_8.prototype.ro = function (format, vertexCount, session, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      session = Companion_getInstance_8().kg();
    return this.hm(format, vertexCount, session);
  };
  var Companion_instance_8;
  function Companion_getInstance_12() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function VertexBuffer() {
    Companion_getInstance_12();
  }
  function VolumeTexture() {
  }
  function get_useStyleBlock() {
    return useStyleBlock;
  }
  var useStyleBlock;
  function Companion_9() {
    Companion_instance_9 = this;
    this.sg_1 = null;
  }
  Companion_9.prototype.tg = function () {
    var tmp0_elvis_lhs = this.sg_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('no active driver');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Driver() {
  }
  //region block: init
  useContextBlock = false;
  useStyleBlock = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ColorFormat_RGBa_getInstance;
  _.$_$.b = ColorFormat_RG_getInstance;
  _.$_$.c = ColorFormat_R_getInstance;
  _.$_$.d = ColorType_FLOAT16_getInstance;
  _.$_$.e = ColorType_FLOAT32_getInstance;
  _.$_$.f = ColorType_SINT16_INT_getInstance;
  _.$_$.g = ColorType_SINT8_INT_getInstance;
  _.$_$.h = ColorType_UINT16_INT_getInstance;
  _.$_$.i = ColorType_UINT16_getInstance;
  _.$_$.j = ColorType_UINT8_INT_getInstance;
  _.$_$.k = ColorType_UINT8_getInstance;
  _.$_$.l = ShaderType_FRAGMENT_getInstance;
  _.$_$.m = ShaderType_VERTEX_getInstance;
  _.$_$.n = StencilTest_DISABLED_getInstance;
  _.$_$.o = VertexElementType_FLOAT32_getInstance;
  _.$_$.p = VertexElementType_MATRIX33_FLOAT32_getInstance;
  _.$_$.q = VertexElementType_MATRIX44_FLOAT32_getInstance;
  _.$_$.r = VertexElementType_VECTOR2_FLOAT32_getInstance;
  _.$_$.s = VertexElementType_VECTOR3_FLOAT32_getInstance;
  _.$_$.t = VertexElementType_VECTOR4_FLOAT32_getInstance;
  _.$_$.u = upload$default;
  _.$_$.v = createShadeStyleManager$default;
  _.$_$.w = DrawStyle_init_$Create$;
  _.$_$.x = ShadeStructure_init_$Create$;
  _.$_$.y = Disabled_getInstance;
  _.$_$.z = Companion_getInstance_7;
  _.$_$.a1 = Companion_getInstance_8;
  _.$_$.b1 = Companion_getInstance_11;
  _.$_$.c1 = Companion_getInstance_10;
  _.$_$.d1 = Companion_getInstance_13;
  _.$_$.e1 = ArrayCubemap;
  _.$_$.f1 = ArrayTexture;
  _.$_$.g1 = BufferTexture;
  _.$_$.h1 = BufferWriter;
  _.$_$.i1 = ColorBuffer;
  _.$_$.j1 = valueOf_0;
  _.$_$.k1 = valueOf_1;
  _.$_$.l1 = Cubemap;
  _.$_$.m1 = DepthBuffer;
  _.$_$.n1 = Drawer;
  _.$_$.o1 = valueOf;
  _.$_$.p1 = ImageBinding;
  _.$_$.q1 = get_effectiveHeight;
  _.$_$.r1 = get_effectiveWidth;
  _.$_$.s1 = RenderTarget;
  _.$_$.t1 = ShadeStyleManager;
  _.$_$.u1 = uploadElements;
  _.$_$.v1 = VertexBufferShadow;
  _.$_$.w1 = VertexBuffer;
  _.$_$.x1 = VolumeTexture;
  _.$_$.y1 = Driver;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-draw.js.map
