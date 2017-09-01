const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //入口文件
    entry: {
        app: './src/js/index.js',
        print: './src/js/print.js'
    },
    //使用source map:追踪到错误和警告在源代码中的原始位置
    //行数能够正确映射，因为会映射到原始代码中
    devtool: 'inline-source-map',
    //告诉开发服务器(dev server)，在哪里查找文件
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        //清理/dist文件夹
        new CleanWebpackPlugin(['dist']),
        //会生成默认的index.html，简化HTML文件的创建
        new HtmlWebpackPlugin({
            title: 'Outpt Management'
        })
    ],
    //输出
    output: {
        //输出文件名
        filename: '[name].bundle.js',
        //输出路径
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            //开发辅助调试工具
            // {
            //     test: /\.js$/,
            //     use: ["source-map-loader"],
            //     enforce: "pre"
            // },
            //加载css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: [
                    'file-loader'
                ]
            },
            //加载数据
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}