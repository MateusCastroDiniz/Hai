const gulp = require('gulp')
const {
    series,
    parallel
} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('node-sass'))
const browserSync = require('browser-sync').create()
const reload = browserSync.reload



function tarefasSass(cb) {
    gulp.src('./scss/**.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css'))
    return cb()
}


function tarefasCSS() {
    return gulp.src(
            [
                'node_modules/bootstrap/dist/css/bootstrap.css',
                './src/assets/css/**.css',
                './lib/owl/dist/assets/owl.carousel.css',
                './lib/owl/dist/assets/owl.theme.default.css'
            ])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/assets/css'))
}


function tarefasJS() {
    return gulp.src(
            [
                "lib/jquery.js",
                "node_modules/bootstrap/dist/js/bootstrap.js",
                "./lib/owl/dist/owl.carousel.js",
                "./src/js/**.js",
                "lib/jquery.mask.js"
            ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'))
}


// POC -- Proof of Concept

function tarefasHTML(cb) {
    gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
    return cb()
}

function tarefasVetores() {
    return gulp.src('./src/assets/vetores/**')
        .pipe(gulp.dest('./dist/assets/vetores'))
}

function tarefasImg() {
    return gulp.src('./src/assets/img/**')
        .pipe(gulp.dest('./dist/assets/img'))
}


gulp.task('serv', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)

})


function end(cb) {
    console.log('Fim da operação')
    return cb()
}


const process = series(tarefasSass, tarefasCSS, tarefasJS, tarefasHTML, tarefasVetores, tarefasImg, end)

exports.sass = tarefasSass

exports.styles = tarefasCSS

exports.scripts = tarefasJS

exports.arquivos = tarefasHTML

exports.img = tarefasImg

exports.default = process