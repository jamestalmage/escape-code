'use strict';
module.exports = EscapeCode;

function EscapeCode(str) {
  if (!(this instanceof EscapeCode)) {
    return new EscapeCode(str);
  }
  String.call(this, str);
  this._stringValue = str;
}

var ecp = EscapeCode.prototype = new String(); // jshint ignore:line

ecp.toString = ecp.valueOf = function() {
  return this._stringValue;
};
