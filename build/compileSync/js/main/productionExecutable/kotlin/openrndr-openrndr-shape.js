(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-shape'] = factory(typeof this['openrndr-openrndr-shape'] === 'undefined' ? {} : this['openrndr-openrndr-shape']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-shape.js.map
