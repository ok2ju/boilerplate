var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../../config');

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  return gulp.src(config.jade.src)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest(config.jade.dest));
});
