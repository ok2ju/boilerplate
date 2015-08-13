var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');
var config = require('../../config').bower;

var jsFiles = '**/*.js';

gulp.task('bower-js', function() {
    return gulp.src(mainBowerFiles(jsFiles))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(config.jsDest));
});
