var gulp = require('gulp');
var dnx = require('gulp-dnx');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('serve-dnx', ['build'], function (cb) {
    return gulp.start('dnx-run');
});
gulp.task('dnx-run', dnx('web'));
