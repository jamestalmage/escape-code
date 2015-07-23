'use strict';
var assert = require('assert');
var EscapeCode = require('../');
var escapeCode = EscapeCode;
describe('escape-code', function() {

  it('will handle use without `new` keyword', function() {
    assert.equal(
      escapeCode('\u001b[3m').valueOf(),
      '\u001b[3m'
    );
  });

  it('has isEscapeCode property === true', function() {
    assert.strictEqual(
      new EscapeCode('\u001b[1m').isEscapeCode,
      true
    );
  });

  it('delegates some methods', function() {
    var s = '\u001b[33m';
    var e = new EscapeCode(s);

    assert.strictEqual(s.charAt(1), e.charAt(1), 'charAt');
    assert.strictEqual(s.charCodeAt(2), e.charCodeAt(2), 'charCodeAt');
  });

  it('JSON is the same', function() {
    assert.strictEqual(
      JSON.stringify('\u001b[34m'),
      JSON.stringify('\u001b[34m')
    );
  });
});
