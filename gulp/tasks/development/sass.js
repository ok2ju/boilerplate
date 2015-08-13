var gulp = require('gulp');
var browsersync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../../config');

gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browsersync.stream());
});
