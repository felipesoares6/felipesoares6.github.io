var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['last 20 versions'],
    	cascade: false
     }))
    .pipe(gulp.dest('css/'))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('dist', function() {
  gulp.src(['index.html'])
  .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('index.html', ['dist']).on('change', browserSync.reload);
});


// limpar backup-img

gulp.task('clean-img', function(){
  return gulp.src('backup-img')
    .pipe(clean());
});

// copiar img para backup-img

gulp.task('copy-img', ['clean-img'], function(){
  return gulp.src('img/**/*')
    .pipe(gulp.dest('backup-img'));
});

// minificar img

gulp.task('build-img', ['copy-img'], function(){
  gulp.src('img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
});

// test
gulp.task('hello', function() {
  console.log('hello world');
});