gulp = require 'gulp'
fs = require 'fs'
minifycss = require 'gulp-minify-css'
prefix = require 'gulp-autoprefixer'
sass = require 'gulp-sass'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
browserSync = require 'browser-sync'
rimraf = require 'gulp-rimraf'


gulp.task 'init', ->
  fs.mkdirSync './www' unless fs.existsSync('./www')
  fs.mkdirSync './www/css' unless fs.existsSync('./www/css')
  fs.mkdirSync './www/js' unless fs.existsSync('./www/js')
  gulp.src('./src/img/**').pipe gulp.dest('./www/img')
  gulp.src('./src/html/**').pipe gulp.dest('./www')

gulp.task 'clean', ->
  gulp.src('./www', read: false)
  .pipe rimraf()

gulp.task 'html', ->
  gulp.src([
    './src/*.html'
    './src/html/*.html'
  ])
  .pipe gulp.dest('./www')
  .pipe browserSync.reload(stream: true)

gulp.task 'style', ->
  gulp.src([
    './node_modules/normalize.css/normalize.css'
    './src/scss/*.scss'
  ])
  .pipe sass()
  .pipe prefix('last 1 version', '> 1%', 'ie 10', 'ie 11', 'iOS 6', 'iOS 7', 'Android 4', cascade: true)
  .pipe concat('style.css')
  .pipe minifycss({keepSpecialComments: 0})
  .pipe gulp.dest('./www/css')
  .pipe browserSync.reload(stream: true)

gulp.task 'scripts', ->
  gulp.src([
    './bower_components/angular/angular.js'
    './bower_components/angular-route/angular-route.js'
    './bower_components/angular-animate/angular-animate.js'
    './bower_components/angular-touch/angular-touch.js'
    './bower_components/jquery/dist/jquery.js'
    './bower_components/fastclick/lib/fastclick.js'
    './src/js/*.js'
  ])
  .pipe concat('scripts.js')
  .pipe uglify()
  .pipe gulp.dest('./www/js')
  .pipe browserSync.reload(stream: true)

gulp.task 'browser-sync', ->
  browserSync server:
    baseDir: './www'

gulp.task 'default', ['init', 'html', 'style', 'scripts', 'browser-sync'], ->
  gulp.watch ['./src/*.html', './src/html/*.html'], ['html']
  gulp.watch './src/scss/**/*.scss', ['style']
  gulp.watch './bower_components/**/*.js', ['scripts']
  gulp.watch './src/js/*.js', ['scripts']
