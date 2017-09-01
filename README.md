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
            contentBase: path.join(__dirname,'dist'),
            compress: true,
            port: 9000
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

2.3 使用 webpack-dev-middleware:将webpack处理的文件发送到服务器的包装器

    npm install --save-dev express webpack-dev-middleware

    webpack.config.js

    module.exports = {
        .
        .
        .
        //告诉开发服务器(dev server)，在哪里查找文件
        output: {
            .
            .
            //将在我们的服务器脚本中使用，以确保文件的正常运行http://localhost:3000
            publicPath: '/'
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
            "server": "node server.js",
        },
        .
        .
        .
    }


    express服务器
    server.js

    const express = require('express');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    const app = express();
    const config = require('./webpack.config.js');
    const compiler = webpack(config);

    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    // Serve the files on port 3000.
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!\n');
    });


