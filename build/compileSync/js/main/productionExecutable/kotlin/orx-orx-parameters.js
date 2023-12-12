(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['orx-orx-parameters'] = factory(typeof this['orx-orx-parameters'] === 'undefined' ? {} : this['orx-orx-parameters']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=orx-orx-parameters.js.map
