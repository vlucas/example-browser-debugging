'use strict';

const babelify = require('babelify');
const browserify = require('browserify');
const gulp = require('gulp');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

const JS_TASKS = ['js'];

gulp.task('default', JS_TASKS);

gulp.task('watch', function () {
	gulp.watch(['src/**/*.js'], JS_TASKS);
});

gulp.task('js', function () {
	browserify({
		entries: 'client/index.js',
		basedir: 'src',
		extensions: ['.js'],
		debug: process.env.NODE_ENV !== 'production'
	})
	.transform(babelify, { presets: ["es2015", "react"] })
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./public/js'));
});

gulp.task('minify', function () {
  return gulp.src('./public/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});
