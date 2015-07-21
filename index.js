'use strict';
module.exports = EscapeCode;

function EscapeCode(str) {
  if (!(this instanceof EscapeCode)) {
    return new EscapeCode(str);
  }
  String.call(this, str);
  Object.defineProperty(this, '_stringValue', {
    value: str
  });
}

var ecp = EscapeCode.prototype = new String(); // jshint ignore:line
ecp.constructor = EscapeCode;

ecp.toString = ecp.valueOf = function() {
  return this._stringValue;
};
