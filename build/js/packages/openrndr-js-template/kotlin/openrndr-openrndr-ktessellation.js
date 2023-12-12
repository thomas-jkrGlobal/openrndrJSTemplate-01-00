(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['openrndr-openrndr-ktessellation'] = factory(typeof this['openrndr-openrndr-ktessellation'] === 'undefined' ? {} : this['openrndr-openrndr-ktessellation']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=openrndr-openrndr-ktessellation.js.map
