var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('mytask', function () {
    console.log('hello world')
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(cleanCss({compatibility:'ie8'}))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
});


var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('all-scripts.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('build/scripts'));
});

var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src(['build/css', 'build/scripts', 'build/images'], {read: false})
        .pipe(clean());
});

var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('img', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/img'))
});

gulp.task('default', ['clean'], function() {
    gulp.run('css', 'js', 'img','fonts');
});