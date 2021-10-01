const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

// function hola(done) {
//     console.log('Hola mundo');
//     done();
// }

// const compilarCSS = (done) => {
//     console.log('Compilando CSS');
//     done();
// }

// exports.default = parallel(hola, compilarCSS);

const paths = {
    scss:'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// FUNCION QUE COMPILA SASS

function css(cb) {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarCss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function javaScript() {
    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function watchArchivos() {
    watch(paths.scss, css); // * La carpeta actual ------ ** Todos los archivos con esa extension
    watch(paths.js, javaScript);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javaScript, watchArchivos);