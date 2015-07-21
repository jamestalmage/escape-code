'use strict';
var assert = require('assert');
var EscapeCode = require('../');
var escapeCode = EscapeCode;
describe('escape-code', function() {

  it('toString should equal input', function() {
    assert.equal(
      new EscapeCode('\u001b[3m').toString(),
      '\u001b[3m'
    );
  });

  it('valueOf should equal input', function() {
    assert.equal(
      new EscapeCode('\u001b[3m').valueOf(),
      '\u001b[3m'
    );
  });

  it('will handle use without `new` keyword', function() {
    assert.equal(
      escapeCode('\u001b[3m').valueOf(),
      '\u001b[3m'
    );
  });

  it('use with regex', function() {
    assert(/^\u001b/.test(new EscapeCode('\u001b')));

    assert.equal('\u001b', /\u001b/.exec('\u001b')[0]);
  });

  it('extends string', function() {
    assert(new EscapeCode('\u001b') instanceof String);
  });

});
