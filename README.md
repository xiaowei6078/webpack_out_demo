# webpack_demo
webpack学习之路

一、安装
    安装webpack，要安装webpack：（安装最新版活特定版本）

        本地安装：
            npm install --save-dev webpack
            npm install --save-dev webpack@<version>

        全局安装：
            npm install --global webpack

二、起步
    首先我们创建一个目录，初始化 npm，以及在本地安装 webpack
    mkdir webpack-demo && cd webpack-demo
    npm init -y
    npm install --save-dev webpack

    目录结构

    webpack-demo
    |- package.json
    |- webpack.config.js
    |- /dist
        |- bundle.js
        |- index.html
    |- /src
        |- index.js
    |- /node_modules

    ***************************************

    src/index.js

    import _ from 'lodash';

    function component() {
        var element = document.createElement('div');

        // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    document.body.appendChild(component());

    //安装依赖
    npm install --save lodash


    ***************************************

    webpack.config.js

    
    const path = require('path');

    module.exports = {
        //入口文件
        entry: './src/index.js',
        output: {
            //输出文件名
            filename: 'bundle.js',
            //输出路径
            path: path.resolve(__dirname, 'dist')
        }
    };
    
    ***************************************

    package.json （设置一个快捷方式）

    {
        ...
        "scripts": {
            "build": "webpack"
        },
        ...
    }

三、资源管理

1.1 加载css

    安装并添加style-loader和css-loader

    npm install --save-dev style-loader css-loader



1.2 加载图片

    安装file-loader

    npm install --save-dev file-loader

1.3 加载字体

1.4 加载数据

    此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。

    npm install --save-dev csv-loader xml-loader

    

***************************************************
    
    webpack.config.js module配置


    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        },
+       module: {
+           rules: [
+           {
+               test: /\.css$/,
+               use: [
+                   'style-loader',
+                   'css-loader'
+               ]
+           }
+           ]
+       },
+       {
+           test: /\.(png|svg|jpg|gif)$/,
+           use: [
+               'file-loader'
+           ]
+        },
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       },
+       {
+         test: /\.(csv|tsv)$/,
+         use: [
+           'csv-loader'
+         ]
+       },
+       {
+         test: /\.xml$/,
+         use: [
+           'xml-loader'
+         ]
+       }
    };