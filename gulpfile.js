/// <reference path="typings/gulp/gulp.d.ts"/>
var gulp = require('gulp'),
    compiler = require('./public/javascripts/ember-template-compiler.js'),
    htmlbars = require('gulp-htmlbars-compiler'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat');

/**
 * Build all files (javascript)
 **/
 gulp.task('all', function() {
    gulp.start('app');
    gulp.start('templates');
 });
    
/**
 * Build app file (javascript)
 **/
gulp.task('app', function() {
    gulp.src(['public/app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/build/'));
});

/**
 * Build templates file (javascript)
 **/
gulp.task('templates', function() {
    return gulp.src('public/app/templates/**/*.hbs')
        .pipe(htmlbars({
            compiler: compiler 
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('public/build/'));
});

/**
 * Watch files modifications and rebuild
 **/
gulp.task('watch', function() {
    gulp.start('app');
    gulp.start('templates');

    gulp.watch('public/app/**/*', function() {
        gulp.start('app');
        gulp.start('templates');
    });
});