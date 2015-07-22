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

  it('comparison via assert.equal', function() {
    assert.equal(
      new EscapeCode('\u001b[3m'),
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
    assert.strictEqual(s.concat('abc'), e.concat('abc'), 'concat');
    assert.strictEqual(s.indexOf('3'), e.indexOf('3'), 'indexOf');
    assert.strictEqual(s.lastIndexOf('3'), e.lastIndexOf('3'), 'lastIndexOf');
    assert.deepEqual(s.match(/(\d)(\d)/), e.match(/(\d)(\d)/), 'match');
    assert.strictEqual(s.replace('33', '43'), e.replace('33', '43'), 'replace');
    assert.strictEqual(s.search('33'), e.search('33'), 'search');
    assert.strictEqual(s.slice(2), e.slice(2), 'slice');
    assert.deepEqual(s.split('3'), e.split('3'), 'split');
    assert.strictEqual(s.substr(2), e.substr(2), 'substr');
    assert.strictEqual(s.substring(3), e.substring(3), 'substring');
    assert.strictEqual(s.toLowerCase(), e.toLowerCase(), 'toLowerCase');
    assert.strictEqual(s.toUpperCase(), e.toUpperCase(), 'toUpperCase');
    assert.strictEqual(s.trim(), e.trim(), 'trim');
  });

  it('JSON is the same', function() {
    assert.strictEqual(
      JSON.stringify('\u001b[34m'),
      JSON.stringify('\u001b[34m')
    );
  });
});
