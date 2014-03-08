
/*
 * Task runner for colorbook
 * */

var gulp      = require('gulp');
var concat    = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename    = require("gulp-rename");

gulp.task('compressCss', function() {
  gulp.src('css/lightgrid.css')
    .pipe(minifyCss())
		.pipe(rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(gulp.dest('./css/'));
});

// The default task
gulp.task('default', ['compressCss']);