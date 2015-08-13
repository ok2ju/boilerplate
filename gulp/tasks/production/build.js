var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
  runSequence('delete',
    [
      'jade',
      'sass',
      'scripts',
      'images',
      'copy:fonts',
      'bower-css',
      'bower-js'
    ],
    'base64',
    [
      'optimize:css',
      'optimize:js',
      'optimize:images',
      'copy:fonts:production',
      'copy:html:production'
    ], callback);
});
