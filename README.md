# Gulp-Tap-Min [![npm Version](https://img.shields.io/npm/v/gulp-tap-min.svg?style=flat-square)](https://www.npmjs.com/package/gulp-tap-min) [![Build Status](https://img.shields.io/travis/Zache/gulp-tap-min.svg?style=flat-square)](https://travis-ci.org/Zache/gulp-tap-min)


A TAP reporter intended to be used together with [Gulp-Tape](https://github.com/yuanqing/gulp-tape)(min version 0.0.6) and [Tape](https://github.com/substack/tape).

## Usage

```js
'use strict';

var gulp = require('gulp');
var tape = require('gulp-tape');
var reporter = require('gulp-tap-min');

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(tape({
      reporter: reporter(),
      tapeOpts: { objectMode: true }
    }));
});
```

### tape([opts]) 

For gulp-tap-min to work properly you need to pass `tapeOpts: { objectMode: true }` to [Gulp-Tape](https://github.com/yuanqing/gulp-tape).

### reporter([opts])

`opts` is an object literal that can take the following key:

- `verbose` &mdash; if truthy the full TAP results will be printed.


## Installation

Install via [npm](https://npmjs.com/) (together with [Gulp-Tape](https://github.com/yuanqing/gulp-tape) and [Tape](https://github.com/substack/tape)):

```
$ npm install --save-dev gulp-tap-min gulp-tape tape
```

## Madprops

 - [Gulp-Tape](https://github.com/yuanqing/gulp-tape)
 - [Tape](https://github.com/substack/tape)
 - [Tap-min](https://github.com/gummesson/tap-min)

## License

[MIT](LICENSE.md)