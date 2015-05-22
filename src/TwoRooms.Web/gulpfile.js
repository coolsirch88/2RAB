var gulp = require('gulp');

gulp.task('scripts', 'Compile JS files into the app.js', function (cb) {
    var config = require('./jspm.conf.js');
    var builder = require('systemjs-builder');

    builder.build('src/app/bootstrap',
        config,
        paths.tmp.scripts + 'app.js')
            .then(cb)
            .catch(function (ex) {
                cb(new Error(ex));
            });
});