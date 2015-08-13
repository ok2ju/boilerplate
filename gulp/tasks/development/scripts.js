var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var config = require('../../config').js;

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.dest));
}); 
