(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['orx-orx-fx'] = factory(typeof this['orx-orx-fx'] === 'undefined' ? {} : this['orx-orx-fx']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=orx-orx-fx.js.map
