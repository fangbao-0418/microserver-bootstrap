const { series, parallel, src, dest } = require('gulp')
const babel = require('gulp-babel')
const rimraf = require('rimraf')
const ts = require('gulp-typescript')

const outputDir = 'lib/'

function copyDfile () {
  return src('src/**/*.d.ts')
  .pipe(dest(outputDir))
}

function clean(cb) {
  rimraf(outputDir, {}, (err, val) => {
    cb()
  })
}

function build(cb) {
  return src('src/**/*.ts')
  .pipe(ts({
    declaration: true,
    noImplicitAny: true
  }))
  // .pipe(babel())
  .pipe(dest(outputDir))
}

exports.build = build;
exports.default = series(clean, build, copyDfile);