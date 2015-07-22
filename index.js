'use strict';
module.exports = EscapeCode;
var Delegator = require('delegates');

function EscapeCode(str) {
  if (!(this instanceof EscapeCode)) {
    return new EscapeCode(str);
  }
  String.call(this, str);
  Object.defineProperty(this, '_stringValue', {
    value: str
  });
}

var ecp = EscapeCode.prototype;

ecp.isEscapeCode = true;

ecp.toString = ecp.valueOf = function() {
  return this._stringValue;
};

new Delegator(ecp, '_stringValue')
  .method('charAt')
  .method('charCodeAt')
  .method('concat')
  .method('indexOf')
  .method('lastIndexOf')
  .method('match')
  .method('replace')
  .method('search')
  .method('slice')
  .method('split')
  .method('substr')
  .method('substring')
  .method('toLowerCase')
  .method('toUpperCase')
  .method('trim');
