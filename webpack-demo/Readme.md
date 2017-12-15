#创建webpack打包工具
~~npm install -global webpack
#创建文件夹结构
webpack-demo
    --app
        --main.js
        --Greeter.js
    --pulic
        --index.html

#设置内容
//main.js
    const greet = require('./Greeter')
    document.querySelector('#root').appendChild(greet())

//Greeter.js
    module.exports = function(){
    var greet = document.createElement('div')

    greet.textContent = 'your msg anythings'
    var img = document.createElement('img')
    img.src = 'src/img/1.jpg'
    greet.appendChild(img)
    return greet
}
//index.html
    <div id="root"></div>
    <script src="bundle.js"></script> //引入将来要生成的文件名称
# 保证webpack可以在当前的文件夹使用 webpack -v
#执行webpack命令
webpack 你的入口文件路径  你要生成的文件的路径+名称
#webpack.config.js  webpack配置文件
~~在你的项目根目录下 创建文件 webpack.config.js
    写入
    module.exports = {
        devtool: 'eval-source-map', //开发时使用，生产是绝对不能用参照简书 http://www.jianshu.com/p/42e11515c10f
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
配置完成可以直接在终端使用 webpack 就可以运行了
#上述代码有 devServer开发者服务器 默认端口 8080 可以添加 port来指定新的端口 npm install --save-dev webpack-dev-server
#运行
npm run server 
#修改启动方式 修改package.json 里面的scripts 添加
#"start": "webpack",
#   "server": "webpack-dev-server --open"
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server --open"
  },
#然后就可以 npm start 来启动开发服务器了