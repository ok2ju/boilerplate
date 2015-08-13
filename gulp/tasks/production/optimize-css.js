var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');
var config = require('../../config').optimize.css;

gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
