/*jslint node: true */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
  includePaths: [
    'node_modules/purecss-sass/vendor/assets/stylesheets',  // PureCSS
    'node_modules/hamburgers/_sass/hamburgers' // Hamburgers
  ]
};

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
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
