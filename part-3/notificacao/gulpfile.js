var gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () =>
  gulp
    .src('test/*.js', { read: false })
    .pipe(mocha({ reporter: 'mocha-notifier-reporter' }))
);
