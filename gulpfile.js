/*jslint node: true */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

// watch files for changes and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/purecss-sass/vendor/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
