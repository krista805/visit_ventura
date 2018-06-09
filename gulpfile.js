const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ""
    });

    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);


// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');
// var gulpCopy = require('gulp-copy');
//
// // Default Gulp task.
// gulp.task('default', ['serve']);
//
// // Compile SASS files.
// gulp.task('compile:sass', function () {
//   return gulp.src('src/styles/main.scss')
//     .pipe(sass({
//       outputStyle: 'expanded'
//     }).on('error', sass.logError))
//     .pipe(gulp.dest('./dist/styles'))
//     .pipe(browserSync.stream());
// });
//
// // All compilation tasks.
// gulp.task('compile', ['compile:sass']);
//
// // Copy HTML file(s).
// gulp.task('copy:html', function () {
//   gulp.src('src/index.html')
//     .pipe(gulpCopy('./dist', {
//       prefix: 1
//     }));
// });
//
// // Copy JS file(s).
// gulp.task('copy:js', function () {
//   gulp.src('src/scripts/index.js')
//     .pipe(gulpCopy('./dist', {
//       prefix: 1
//     }))
//     .pipe(browserSync.stream());
// });
//
// // Copy images.
// gulp.task('copy:images', function () {
//   return gulp.src('src/images/**/*')
//     .pipe(gulp.dest('dist/images'))
//     .pipe(browserSync.reload())
// });
//
// // All tasks that require copying files.
// gulp.task('copy', ['copy:html', 'copy:js', 'copy:images']);
//
// // Serve static files.
// gulp.task('serve', ['copy', 'compile'], function () {
//   browserSync.init({
//     server: 'dist'
//   });
//
//   gulp.watch('./src/styles/**/*.scss', ['compile:sass']);
//   gulp.watch('./src/scripts/**/*.js', ['copy:js']);
//   gulp.watch('./src/index.html', ['copy:html']).on('change', browserSync.reload);
// });
