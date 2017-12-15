module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js'  ,//项目的唯一入口文件
    output: {
        path: __dirname + '/public', //打保护存放的地方
        filename: 'bundle.js' //生成的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
}