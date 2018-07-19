var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');//html压缩
var cssmin = require('gulp-clean-css');//css压缩
var htmlreplace = require('gulp-html-replace');

var buildConfig={
    version :"v3"
};
gulp.task('default', function () {
    // 将你的默认的任务代码放在这
    return gulp.start('cssmin', 'htmlmin', 'jsmin');
});
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src("index.html")
        .pipe(htmlreplace({
            'css': 'css/index.min.css',
            'js': 'all_'+buildConfig.version+'.min.js'
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('../../game'));
});
gulp.task('cssmin', function () {
    return gulp.src('stylesheets/*.css')
        .pipe(concat('index.min.css'))
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('../../game/css'));

});
gulp.task('jsmin', function () {
    return gulp
        .src(
            ["bower_components/howler.js/dist/howler.min.js",
                "bower_components/jQuery/dist/jquery.min.js",
                "js/*.js"
            ]
        )
        .pipe(concat('all_'+buildConfig.version+'.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../../game'));
});