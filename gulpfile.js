var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var SASS = './app/client/sass';
gulp.task('sass2', function () {
  return sass(SASS, { sourcemap: true })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write('maps'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/client/styles'));
});

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

var jshint = require('gulp-jshint');

var JS_FILES = [
  'gulpfile.js',
  'app/client/**/*.js',
  'app/server/**/*.js',
  'app/packages/**/*.js'
];

gulp.task('jshint', function () {
  return gulp.src(JS_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

var jscs = require('gulp-jscs');
gulp.task('jscs', function () {
  return gulp.src(JS_FILES)
    .pipe(jscs({esnext: true}));
});

gulp.task('watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch(JS_FILES, ['jscs', 'jshint']);
});