(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['orx-orx-noise'] = factory(typeof this['orx-orx-noise'] === 'undefined' ? {} : this['orx-orx-noise']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=orx-orx-noise.js.map
