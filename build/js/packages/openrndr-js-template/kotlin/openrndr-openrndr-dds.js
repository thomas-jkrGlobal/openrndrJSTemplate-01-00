(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-dds'] = factory(typeof this['openrndr-openrndr-dds'] === 'undefined' ? {} : this['openrndr-openrndr-dds']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-dds.js.map
