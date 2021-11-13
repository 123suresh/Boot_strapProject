const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');
const imageop = require('gulp-image');
var uglifyjs= require('gulp-uglify');
var concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
  });

gulp.task('css', function () {
  gulp.src('dist/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css-min'));
});

gulp.task('imageop', function() {
    return gulp.src('src/images/*')
    .pipe(imageop())
    .pipe(gulp.dest('dist/img'));
  })

//npm install --save-dev gulp-uglify=in cmd
  gulp.task('uglifyjs', async function(){
      gulp.src('src/bootstrap/js/*.js')
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/js'))
  });

//npm install --save gulp-htmlmin=in cmd
  gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });