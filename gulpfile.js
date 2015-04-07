var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var JS_FILES = [
  'Gulpfile.js',
  'app/client/**/*.js',
  'app/server/**/*.js',
  'app/packages/**/*.js',
  '!app/packages/meteor-babel/**'
];

gulp.task('sass', function() {
  gulp.src('./app/client/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/client/styles'));
});

gulp.task('jshint', function() {
  gulp.src(JS_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  gulp.src(JS_FILES)
    .pipe(jscs({esnext: true}));
});

gulp.task('watch', function() {
  gulp.watch('./app/client/sass/**/*.scss', ['sass']);
  gulp.watch(JS_FILES, ['jscs', 'jshint']);
});

gulp.task('qality', ['jshint', 'jscs']);