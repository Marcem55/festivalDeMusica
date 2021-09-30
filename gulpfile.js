const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// function hola(done) {
//     console.log('Hola mundo');
//     done();
// }

// const compilarCSS = (done) => {
//     console.log('Compilando CSS');
//     done();
// }

// exports.default = parallel(hola, compilarCSS);

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

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * La carpeta actual ------ ** Todos los archivos con esa extension
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;