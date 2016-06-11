/**
 * Created by student on 5/10/2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require('gulp-order');
var del = require('del');
var notify = require('gulp-notify');
var less = require('gulp-less');
livereload = require('gulp-livereload');


var vendor=['vendor/angular.js','vendor/angular-ui-router.js'];
var myJs = ['app/**/*.module.js','app/**/*.routes.js','app/**/*.service.js','app/**/*.ctrl.js','app/**/*.js'];
gulp.task('concat_vendor',function(){
    gulp.src(vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build'))
        .pipe(notify({
            title: 'vendor',
            subtitle: 'vendor Compiled!',
            message: ' done'
        }));
});

gulp.task('concat_myJs',function(){
    gulp.src(myJs)
        .pipe(order(myJs))
        .pipe(concat('myJs.js'))
        .pipe(gulp.dest('build'))
        .pipe(notify({
            title: 'myJs',
            subtitle: 'Angular Compiled!',
            message: 'done '
        }));
});

gulp.task('less', function () {
    gulp.src([
        './less/app.less' //main entry point for styles. All other sheets should be included here.
    ])
        .pipe(less())
        .pipe(gulp.dest('./build/css'))
        .pipe(notify({
            title: 'less',
            subtitle: 'less Compiled!',
            message: 'done '
        }));
});



gulp.task('watch',function(){
    gulp.watch(['app/**/*.js','./less/**/*.less'],['concat_vendor','concat_myJs','less']);
});


gulp.task('default',['concat_vendor','concat_myJs','less','watch']);