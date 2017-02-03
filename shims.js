/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
(function () {
  'use strict';

  var objPt = Object.prototype, OPtHas = objPt.hasOwnProperty,
    arrPt = Array.prototype, arrSlice = arrPt.slice;

  function install(obj, key, func) {
    if (OPtHas.call(obj, key) && (obj[key] !== undefined)) { return; }
    obj[key] = func;
  }

  install(Array, 'from', function toArray(src) { return arrSlice.call(src); });

  function arrayMap(arr, iter, collect) {
    var len = arr.length, idx, rslt;
    for (idx = 0; idx < len; idx += 1) {
      rslt = iter(arr[idx], idx, arr);
      if (collect) { collect[idx] = rslt; }
    }
    return collect;
  }
  install(arrPt, 'forEach', function forEach(f) { return arrayMap(this, f); });
  install(arrPt, 'map', function map(f) { return arrayMap(this, f, []); });

  install(Object, 'keys', function keys(obj) {
    if ((obj === null) || (obj === undefined)) {
      throw new TypeError("can't convert " + String(obj) + " to object");
    }
    var found = [], key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // ^-- b/c jslint doesn't know about OPtHas
        found[found.length] = key;
      }
    }
    return found;
  });

  install(Object, 'assign', function assign(dest, src) {
    if ((src && typeof src) === 'object') {
      Object.keys(src).forEach(function (k) {
        var v = src[k];
        if (v === undefined) { return; }
        dest[k] = v;
      });
    }
    if (arguments.length > 2) {
      arrSlice.call(arguments, 2).forEach(function (s) { assign(dest, s); });
    }
    return dest;
  });



















  return;
}());
