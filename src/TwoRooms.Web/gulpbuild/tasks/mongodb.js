var gulp = require('gulp');
var paths = require('../paths');
var exec = require('child_process').exec;

gulp.task('mongo', function (cb) {
    console.log('mongod.exe --dbpath ' + paths.dbpath);
    exec('mongod.exe --dbpath ' + paths.dbpath, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});