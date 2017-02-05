/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
(function () {
  'use strict';

  var objPt = Object.prototype, OPtHas = objPt.hasOwnProperty,
    arrPt = Array.prototype, arrSlice = arrPt.slice,
    tokenSkip = { token: 'skip' };

  function install(obj, key, func) {
    if (OPtHas.call(obj, key) && (obj[key] !== undefined)) { return; }
    obj[key] = func;
  }

  install(Array, 'from', function toArray(src) { return arrSlice.call(src); });

  (function checkSparseArrayBug() {
    // You might have loaded this bug from es5-shim:
    // https://github.com/es-shims/es5-shim/issues/190
    var sparseArray = [ 1, undefined, 3 ];
    if (!sparseArray.map) { return; }
    if (sparseArray.map(String).join(':') === '1:undefined:3') { return; }
    delete arrPt.filter;
    delete arrPt.forEach;
    delete arrPt.map;
  }());

  function arrayMap(arr, trafo, ctx, collect) {
    var len = arr.length, idx, rslt;
    for (idx = 0; idx < len; idx += 1) {
      rslt = trafo.call(ctx, arr[idx], idx, arr);
      if (collect && (rslt !== tokenSkip)) { collect[collect.length] = rslt; }
    }
    return collect;
  }
  install(arrPt, 'forEach',
    function forEach(f, ctx) { return arrayMap(this, f, ctx, null); });
  install(arrPt, 'map',
    function map(f, ctx) { return arrayMap(this, f, ctx, []); });
  install(arrPt, 'filter', function filter(f, ctx) {
    function g(v, i, a) { return (f.call(ctx, v, i, a) ? val : tokenSkip); }
    return arrayMap(this, g, null, []);
  });

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

  (function () {
    // MSIE 6 ''.split(/(rgx)/) doesn't preserve capture groups. :-(
    var test = ['', '::', 'hello', ':', 'world', '::', ''];
    if (test.join('').split(/(:+)/).join('!') === test.join('!')) { return; }
    String.prototype.split = function (rgx) {
      var tx = this, parts = [], match;
      while (true) {
        match = (tx && tx.match(rgx));
        if (!match) { return parts.concat(tx); }
        parts = parts.concat(tx.slice(0, match.index), match.slice(1));
        tx = tx.slice(match.index + match[0].length);
      }
    };
  }());


















  return;
}());
