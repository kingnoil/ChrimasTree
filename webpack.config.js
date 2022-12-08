const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js', //设置入口文件
    output:{ //设置出口文件
        // wacth: true,
        filename:  "[name]-[hash].js", //出口文件名的设置"[name]-[hash].js"
        path: path.resolve(__dirname,'./dist'),//设置绝对路径
        clean:true, //每次打包清空上一次的dist
    },
    mode:'development',//模式 development(开发),production(生产)
    plugins:[
        new HtmlWebpackPlugin({ //HtmlWebpackPlugin插件的使用
            template:'./圣诞树Plus++.html', //是html模板地址
            inject:'body', //打包后的html引入script标签的位置
        })
    ],
    devServer: { 
        port: 8999, // 端口号
        open: true, // 是否打开浏览器
      },
    }