const path = require('path');

module.exports = {
    //入口文件
    entry: './src/js/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'bundle.js',
        //输出路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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