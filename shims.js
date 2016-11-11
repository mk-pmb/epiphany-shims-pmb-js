/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
(function () {
  'use strict';

  var OPtHas = Object.prototype.hasOwnProperty;

  function install(obj, key, func) {
    if (OPtHas.call(obj, key)) { return; }
    obj[key] = func;
  }

  install(Array, 'from', function toArray(src) {
    return Array.prototype.slice.call(src);
  });




















  return;
}());
