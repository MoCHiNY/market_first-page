const {src, dest, watch, parallel, series} = require('gulp'); 
//parallel одночасно запускає дві дії
//series запускає почерзі файли
const scss         = require('gulp-sass');
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify       = require('gulp-uglify');
const browserSync  = require('browser-sync').create();
const imagemin     = require('gulp-imagemin');
const del          = require('del');

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({
      outputStyle: 'compressed'// стиль кода який отримаємо(стиснутий)
    }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())// призначений для стискання файлів js
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}]
        })
    ]))
    .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})// переносить із точною назвою папки в яких були файли
  .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}// npm i --sev-dev del плагин для очистки

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);// слідкує за всіма файлами окрім !
  watch(['app/*.html']).on('change', browserSync.reload);// перезагрузка сторінки 

}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.images = images;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);