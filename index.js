'use strict';
module.exports = EscapeCode;
var stringish = require('stringish');

function EscapeCode(str) {
  if (!(this instanceof EscapeCode)) {
    return new EscapeCode(str);
  }
  Object.defineProperty(this, '_stringValue', {
    value: str
  });
}

var ecp = EscapeCode.prototype;

stringish(ecp);

ecp.isEscapeCode = true;

ecp.toString = ecp.valueOf = function() {
  return this._stringValue;
};
