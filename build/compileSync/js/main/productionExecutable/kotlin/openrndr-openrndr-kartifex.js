(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-kartifex'] = factory(typeof this['openrndr-openrndr-kartifex'] === 'undefined' ? {} : this['openrndr-openrndr-kartifex']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-kartifex.js.map
