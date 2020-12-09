const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离 单独的css 文件

const resolve = dir => path.resolve(__dirname, dir)
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        list: './src/list.js',
        detail: './src/detail.js',
    },
    output: {
        filename: '[name][hash:6].js',
        path: resolve('./dist'),
        // publicPath: 'http://www.baidu.com/'
    },
    // loader 是帮助webpack解析并加载各种类型的文件
    module: {
        rules: [{
            test: /\.css|less|sass|scss$/,
            use: [
            // {
            //     loader: 'style-loader',
            //     options: {}
            // },
            {
                loader: MiniCssExtractPlugin.loader, // 抽离css为一个文件
                options: {
                    publicPath: './' // 针对css的引入资源加上当前路径
                }
            },
             {
                loader: 'css-loader', 
                options: {}
            }, {
                loader: 'postcss-loader',  // 只要在css-loader 之后都行
                options: {}
            }, {
                loader: 'less-loader', 
                options: {}
            }]
        }, {
            test: /\.png|jpg|jpeg$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images' // 图片输出的地址
                }
            }
        },  {
            test: /\.js$/, // 自定义loader 异步
            use: {
                loader: 'replace-loader',
                // loader: resolve('./src/loaders/replace-loader.js')
                options: {
                    name: 'test'
                }
            }
        }, {
            test: /\.js$/, // 自定义loader 同步
            use: {
                loader: 'replace-async-loader',
                // loader: resolve('./src/loaders/replace-async-loader.js'),
            }
        },]
    },
    resolveLoader: {
        modules: ['node_modules', './src/loaders']
    },
    // plugins 是对webpack的补充，用于在webpack各个生命周期执行相应的任务
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html', // 模板文件
            filename: 'index.html'  // 输出文件
        }),
        new HtmlWebpackPlugin({
            template: './list.html', // 模板文件
            filename: 'list.html'  // 输出文件
        }),
        new HtmlWebpackPlugin({
            template: './detail.html', // 模板文件
            filename: 'detail.html'  // 输出文件
        }),
    ]
}