var gulp = require('gulp');
var config = require('../../config').watch;
var browserSync = require('browser-sync');

gulp.task('sass-watch', ['sass'], browserSync.reload);
gulp.task('jade-watch', ['jade'], browserSync.reload);
gulp.task('images-watch', ['images'], browserSync.reload);
gulp.task('js-watch', ['scripts'], browserSync.reload);
gulp.task('fonts-watch', ['copy:fonts'], browserSync.reload);

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.sass, ['sass-watch']);
  gulp.watch(config.jade, ['jade-watch']);
  gulp.watch(config.images, ['images-watch']);
  gulp.watch(config.scripts, ['js-watch']);
  gulp.watch(config.fonts, ['fonts-watch']);
  //gulp.watch(config.sprites, ['sprites']);
});
