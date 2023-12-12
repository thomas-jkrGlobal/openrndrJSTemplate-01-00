(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-filter'] = factory(typeof this['openrndr-openrndr-filter'] === 'undefined' ? {} : this['openrndr-openrndr-filter']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-filter.js.map
