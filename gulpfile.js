var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-dest-clean');

var path = "D:/Workspace/RTLCSS";
var destPath = "D:/Workspace/RTLCSS/"

gulp.task('rtlcss', function () {
	return gulp.src([''+path+'/*.css'])
		    .pipe(sourcemaps.init())
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
        .pipe(gulp.dest('dist')); // Output RTL stylesheets.
});

gulp.task('watch', gulp.series('rtlcss', function () {
    gulp.watch(''+path+'/*.css', gulp.series('rtlcss'));
  }));
