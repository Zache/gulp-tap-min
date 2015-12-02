var gulp = require('gulp'),
	tape = require('gulp-tape'),
	tapez = require('./');

gulp.task('test', function () {
	return gulp.src('test/*.js')
	.pipe(tape({
		reporter: tapez(),
		tapeOpts: { objectMode: true }
	}));
});

gulp.task('test-verbose', function () {
	return gulp.src('test/*.js')
	.pipe(tape({
		reporter: tapez({ verbose: true }),
		tapeOpts: { objectMode: true }
	}));
});