const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    cache = require('gulp-cache'), 
    input = './assets/css/src/application.scss',
    output = './assets/css';

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', () => {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
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
    .pipe(gulp.dest(output))
    .pipe(cache.clear());
});

gulp.task('serve', gulp.series('sass', () => {
    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/src/**/*.scss", gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
}));