var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.development;

gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
