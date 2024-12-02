import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import dartSass from 'sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

const sass = require('sass'); 
const sass = require('sass'); 


const sassCompiler = sass(dartSass);


const paths = {
    js: {
        src: 'src/js/main.js', 
        dest: 'dist/js/main.js'
    },
    scss: {
        src: 'src/scss/main.scss', 
        dest: 'dist/css/styles.css'
    },
    images: {
        src: 'src/images/logo.jpg', 
        dest: 'dist/images/logo.jpg'
    }
};


export const scripts = () => {
    return gulp.src(paths.js.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest));
};


export const styles = () => {
    return gulp.src(paths.scss.src)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(paths.scss.dest));
};


export const images = () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
};


export const build = gulp.series(scripts, styles, images);


export const watch = () => {
    gulp.watch(paths.js.src, scripts);
    gulp.watch(paths.scss.src, styles);
    gulp.watch(paths.images.src, images);
};

export default gulp.series(build, watch);
