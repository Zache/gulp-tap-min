# tape-z

A TAP reporter intended to be used together with [Gulp-Tape](https://github.com/yuanqing/gulp-tape)(min version 0.0.6) and [Tape](https://github.com/substack/tape).

## Usage

```js
'use strict';

var gulp = require('gulp');
var tape = require('gulp-tape');
var reporter = require('tape-z');

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(tape({
      reporter(),
      tapeOpts: { objectMode: true }
    }));
});
```

### tape([opts]) 

For tape-z to work properly you need to pass `tapeOpts: { objectMode: true }` to [Gulp-Tape](https://github.com/yuanqing/gulp-tape).

### reporter([opts])

`opts` is an object literal that can take the following key:

- `verbose` &mdash; if truthy the full TAP results will be printed.


## Installation

Install via [npm](https://npmjs.com/) (together with [Gulp-Tape](https://github.com/yuanqing/gulp-tape) and [Tape](https://github.com/substack/tape)):

```
$ npm install --save-dev tape-z gulp-tape tape
```

## License

[MIT](LICENSE.md)