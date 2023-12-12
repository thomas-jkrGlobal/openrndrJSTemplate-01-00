(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-utils'] = factory(typeof this['openrndr-openrndr-utils'] === 'undefined' ? {} : this['openrndr-openrndr-utils']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function push(_this__u8e3s4, item) {
    _this__u8e3s4.y1(item);
    return item;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = push;
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-utils.js.map
