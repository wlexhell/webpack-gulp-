//引入对象
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
//引入压缩插件
const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
const scss = require('gulp-scss')
//定义一个gulp的任务

//安装依赖  gulp-jshint(检查文件语法)
/**
 * gulp-concat(拼合文件)
 * gulp-rename(重命名)
 * gulp-uglify(压缩)
 * #首先
 * npm install --save-dev gulp  //开发版     如果不需要开发版  去掉 -dev
 * #安装需要的插件
 * npm install --save-dev gulp-concat gulp-rename gulp-uglify gulp-jshint 
 * #允许
 * gulp //taskname
*/
// gulp.task('default',()=>{
//     console.log('hello, gulp')
//     gulp.run('hint')
//     gulp.run('scripts')  //创建了任务 在这里调用
// })

gulp.task('scripts',()=>{
    gulp.src('./js/*.js')
    .pipe(concat('main.js')) //所有的js文件集合在一起
    .pipe(gulp.dest('./dist')) //拼合到一个目录下
    .pipe(rename('main.min.js'))  //重命名
    .pipe(uglify())              //压缩
    .pipe(gulp.dest('./dist'))  //压缩后的文件保存在哪
})
//压缩文件
// gulp.task('test-js',()=>{
//     gulp.src('./js/test.js') //要压缩的文件
//     .pipe(uglify())  //使用uglify进行压缩
//     .pipe(gulp.dest('./saveFile')) //压缩后的路径
// })

gulp.task('hint',()=>{
    gulp.src('./js/*.js')
    .pipe(jshint())   //检查文件
    .pipe(jshint.reporter('default'))
})


//sass转换css

gulp.task('sass',()=>{
    gulp.src('./sass/*.sass')
    .pipe(sass())   //调用方法
    .pipe(gulp.dest('./css')) // 保存的路径
})

gulp.task('scss',()=>{
    gulp.src('./scss/*.scss')
        .pipe(sass())   //调用方法
        .pipe(gulp.dest('./css')) // 保存的路径
})