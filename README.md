# webpack_demo
webpack学习之路
一、webpack-管理输出

1、设定HtmlWebpackPlugin

npm install --save-dev html-webpack-plugin



2、清理/dist文件夹

npm install clean-webpack-plugin --save-dev

3、设定 HtmlWebpackPlugin

npm install --save-dev html-webpack-plugin

二、开发

1、source map

    webpack.config.js

    //使用source map:追踪到错误和警告在源代码中的原始位置
    //行数能够正确映射，因为会映射到原始代码中
    module.exports = {
        //使用source map:追踪到错误和警告在源代码中的原始位置
        //行数能够正确映射，因为会映射到原始代码中
        devtool: 'inline-source-map',
        .
        .
        .
        .
    }

2、开发工具：自动编译代码

2.1 使用观察者模式

    package.json
    {
        .
        .
        .
        "scripts": {
            //代码发生变化后自动编译代码:
            //1、观察者模式
            "watch": "webpack --watch",//修改后的实际效果，你需要刷新浏览器
        },
        .
        .
        .
    }

2.2 使用webpack-dev-server:提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

    npm install --save-dev webpack-dev-server

    webpack.config.js

    module.exports = {
        .
        .
        .
        //告诉开发服务器(dev server)，在哪里查找文件
        devServer: {
            contentBase: './dist'
        },  
        .
        .
        .
    }

    package.json
    {
        .
        .
        .
        "scripts": {
            //浏览器自动加载页面,修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码
            "start": "webpack-dev-server --open",
        },
        .
        .
        .
    }
