var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('delete', [
    'jade',
    'sass',
    'scripts',
    'images',
    'copy:fonts',
    'bower-css',
    'bower-js'
  ],
  'base64', callback);
});
