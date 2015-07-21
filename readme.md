# escape-code 

ANSI Escape Code as an object

[![Build Status](https://travis-ci.org/jamestalmage/escape-code.svg?branch=master)](https://travis-ci.org/jamestalmage/escape-code)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/escape-code/badge.svg?branch=master&service=github)](https://coveralls.io/github/jamestalmage/escape-code?branch=master)
[![Code Climate](https://codeclimate.com/github/jamestalmage/escape-code/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/escape-code)
[![Dependency Status](https://david-dm.org/jamestalmage/escape-code.svg)](https://david-dm.org/jamestalmage/escape-code)
[![devDependency Status](https://david-dm.org/jamestalmage/escape-code/dev-status.svg)](https://david-dm.org/jamestalmage/escape-code#info=devDependencies)

[![NPM](https://nodei.co/npm/escape-code.png)](https://nodei.co/npm/escape-code/)

## Usage

Provides a constructor that takes a single, string argument, and simply wraps that string value.
Presently it offers no utility beyond being able to do an `instanceof` check. I use this in a stream
so that consumers can differentiate between escape codes and normal strings.

```js
var EscapeCode = require('escape-code');
var assert = require('assert');

var code = new EscapeCode('\u001b[32m');

// this is the useful bit
assert(code instanceof EscapeCode);

// it extends String
assert(code instanceof String);

// toString just returns what you put in.
assert.equal(code.toString(), '\u001b[32m');

// toValue is overridden, so you can do non-strict comparison
assert.equal(code, '\u001b[32m');
  
// and with regularExpressions

assert(/\u001b/.test(code));
assert.equal(/\u001b/.exec(code)[0], '\u001b');

```


## License

MIT © [James Talmage](http://github.com/jamestalmage)
