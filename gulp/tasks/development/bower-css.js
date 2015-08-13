var gulp = require('gulp');
var gulpif = require('gulp-if');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var config = require('../../config').bower;

var cssFiles = '**/*.css';
var jsFiles = '**/*.js';

gulp.task('bower-css', function() {
    return gulp.src(mainBowerFiles(cssFiles))
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(config.cssDest));
});
