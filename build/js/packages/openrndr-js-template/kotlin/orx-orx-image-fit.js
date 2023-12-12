(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['orx-orx-image-fit'] = factory(typeof this['orx-orx-image-fit'] === 'undefined' ? {} : this['orx-orx-image-fit']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=orx-orx-image-fit.js.map
