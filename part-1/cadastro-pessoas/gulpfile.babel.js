import gulp    from 'gulp'
import babel   from 'gulp-babel'
import util    from 'gulp-util'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import concat  from 'gulp-concat'
import webpack from 'gulp-webpack'

import Cache from 'gulp-file-cache';
import del from 'del';

let cache = new Cache();

const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/js/**/*.js'
};

const DEST = {
    JS: DIR.DEST + '/js'
};

gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

gulp.task('webpack', () => {
    return gulp.src('src/js/main.js')
           .pipe(webpack(webpackConfig))
           .pipe(gulp.dest('dist/js'));
});

gulp.task('babel', () => {
    return gulp.src(SRC.JS)
           .pipe(cache.filter())
           .pipe(babel({
              presets: ['es2015']
           }))
           .pipe(cache.cache())
           .pipe(gulp.dest(DEST.JS));
});


gulp.task('default', ['clean', 'babel', 'webpack'], () => {
    gutil.log('Gulp is running');
});