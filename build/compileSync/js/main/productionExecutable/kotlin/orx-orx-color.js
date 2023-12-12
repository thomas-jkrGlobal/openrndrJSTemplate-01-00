(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['orx-orx-color'] = factory(typeof this['orx-orx-color'] === 'undefined' ? {} : this['orx-orx-color']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=orx-orx-color.js.map
