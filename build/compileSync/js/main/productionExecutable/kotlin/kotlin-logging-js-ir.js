(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-logging-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-logging-js-ir'.");
    }
    root['kotlin-logging-js-ir'] = factory(typeof this['kotlin-logging-js-ir'] === 'undefined' ? {} : this['kotlin-logging-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.h2;
  var setMetadataFor = kotlin_kotlin.$_$.i2;
  var toString = kotlin_kotlin.$_$.f3;
  var Exception = kotlin_kotlin.$_$.v2;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var Enum = kotlin_kotlin.$_$.u2;
  var classMeta = kotlin_kotlin.$_$.t1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConsoleOutputAppender, 'ConsoleOutputAppender', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultMessageFormatter, 'DefaultMessageFormatter', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KotlinLogging, 'KotlinLogging', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KotlinLoggingConfiguration, 'KotlinLoggingConfiguration', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KotlinLoggingLevel, 'KotlinLoggingLevel', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ErrorMessageProducer, 'ErrorMessageProducer', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KLoggerJS, 'KLoggerJS', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function ConsoleOutputAppender() {
    ConsoleOutputAppender_instance = this;
  }
  ConsoleOutputAppender.prototype.ra = function (message) {
    return console.log(message);
  };
  ConsoleOutputAppender.prototype.sa = function (message) {
    return console.log(message);
  };
  ConsoleOutputAppender.prototype.ta = function (message) {
    return console.error(message);
  };
  var ConsoleOutputAppender_instance;
  function ConsoleOutputAppender_getInstance() {
    if (ConsoleOutputAppender_instance == null)
      new ConsoleOutputAppender();
    return ConsoleOutputAppender_instance;
  }
  function DefaultMessageFormatter() {
    DefaultMessageFormatter_instance = this;
  }
  DefaultMessageFormatter.prototype.ua = function (level, loggerName, msg) {
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp;
    try {
      tmp = toString(msg());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        tmp_0 = ErrorMessageProducer_getInstance().va($p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    return level.b3_1 + ': [' + loggerName + '] ' + tmp$ret$0;
  };
  var DefaultMessageFormatter_instance;
  function DefaultMessageFormatter_getInstance() {
    if (DefaultMessageFormatter_instance == null)
      new DefaultMessageFormatter();
    return DefaultMessageFormatter_instance;
  }
  function KotlinLogging() {
    KotlinLogging_instance = this;
  }
  KotlinLogging.prototype.wa = function (func) {
    return new KLoggerJS(func.constructor.name);
  };
  var KotlinLogging_instance;
  function KotlinLogging_getInstance() {
    if (KotlinLogging_instance == null)
      new KotlinLogging();
    return KotlinLogging_instance;
  }
  function KotlinLoggingConfiguration() {
    KotlinLoggingConfiguration_instance = this;
    this.xa_1 = KotlinLoggingLevel_INFO_getInstance();
    this.ya_1 = ConsoleOutputAppender_getInstance();
    this.za_1 = DefaultMessageFormatter_getInstance();
  }
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  var KotlinLoggingLevel_TRACE_instance;
  var KotlinLoggingLevel_DEBUG_instance;
  var KotlinLoggingLevel_INFO_instance;
  var KotlinLoggingLevel_WARN_instance;
  var KotlinLoggingLevel_ERROR_instance;
  var KotlinLoggingLevel_entriesInitialized;
  function KotlinLoggingLevel_initEntries() {
    if (KotlinLoggingLevel_entriesInitialized)
      return Unit_getInstance();
    KotlinLoggingLevel_entriesInitialized = true;
    KotlinLoggingLevel_TRACE_instance = new KotlinLoggingLevel('TRACE', 0);
    KotlinLoggingLevel_DEBUG_instance = new KotlinLoggingLevel('DEBUG', 1);
    KotlinLoggingLevel_INFO_instance = new KotlinLoggingLevel('INFO', 2);
    KotlinLoggingLevel_WARN_instance = new KotlinLoggingLevel('WARN', 3);
    KotlinLoggingLevel_ERROR_instance = new KotlinLoggingLevel('ERROR', 4);
  }
  function KotlinLoggingLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.c3_1 >= KotlinLoggingConfiguration_getInstance().xa_1.c3_1;
  }
  function KotlinLoggingLevel_TRACE_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_TRACE_instance;
  }
  function KotlinLoggingLevel_DEBUG_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_DEBUG_instance;
  }
  function KotlinLoggingLevel_INFO_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_INFO_instance;
  }
  function KotlinLoggingLevel_ERROR_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_ERROR_instance;
  }
  function ErrorMessageProducer() {
    ErrorMessageProducer_instance = this;
  }
  ErrorMessageProducer.prototype.va = function (e) {
    return 'Log message invocation failed: ' + e;
  };
  var ErrorMessageProducer_instance;
  function ErrorMessageProducer_getInstance() {
    if (ErrorMessageProducer_instance == null)
      new ErrorMessageProducer();
    return ErrorMessageProducer_instance;
  }
  function logIfEnabled(_this__u8e3s4, $this, msg, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().za_1.ua(_this__u8e3s4, $this.ab_1, msg));
    }
  }
  function Appender$trace$ref($boundThis) {
    var l = function (p0) {
      $boundThis.ra(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function Appender$debug$ref($boundThis) {
    var l = function (p0) {
      $boundThis.sa(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$error$ref($boundThis) {
    var l = function (p0) {
      $boundThis.ta(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function KLoggerJS(loggerName) {
    this.ab_1 = loggerName;
  }
  KLoggerJS.prototype.bb = function (msg) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$trace$ref(KotlinLoggingConfiguration_getInstance().ya_1));
  };
  KLoggerJS.prototype.cb = function (msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$debug$ref(KotlinLoggingConfiguration_getInstance().ya_1));
  };
  KLoggerJS.prototype.db = function (msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$error$ref(KotlinLoggingConfiguration_getInstance().ya_1));
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KotlinLogging_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-logging-js-ir.js.map
