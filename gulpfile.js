const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    input = './assets/css/src/application.scss',
    output = './assets/css';

gulp.task('sass', () => {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        "overrideBrowserslist": [
            "> 1%",
            "ie >= 8",
            "edge >= 15",
            "ie_mob >= 10",
            "ff >= 45",
            "chrome >= 45",
            "safari >= 7",
            "opera >= 23",
            "ios >= 7",
            "android >= 4",
            "bb >= 10"
          ]
    }))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
});

gulp.task('serve', gulp.series('sass', () => {
    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/src/**/*.scss", gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
}));