var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        host:'localhost', //使用ip地址 如果使用默认的localhost将会导致websocket出错 从而只能手动f5刷新
        port: 8000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});


gulp.task('default',['connect']);