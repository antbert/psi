var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jade = require('gulp-jade');

var JS_FILES = [
  'Gulpfile.js',
  'app/client/**/*.js',
  'app/server/**/*.js',
  'app/packages/**/*.js',
  '!app/packages/meteor-babel/**'
];

const SASS_FILES = './app/client/sass/**/*.scss';
gulp.task('sass', function() {
  gulp.src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 versions', 'ie 8', 'ie 9'],
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

const JADE_FILES = './statichtml/jade/**/*.jade';
gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  gulp.src(JADE_FILES)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./statichtml/'));
});

gulp.task('watch', function() {
  gulp.watch(SASS_FILES, ['sass']);
  gulp.watch(JS_FILES, ['jscs', 'jshint']);
  gulp.watch(JADE_FILES, ['jade']);
});

gulp.task('qality', ['jshint', 'jscs']);