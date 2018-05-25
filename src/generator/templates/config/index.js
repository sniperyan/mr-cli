'use strict'


const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  dev: {

    /**
     * Paths
     */
    //工程入口文件
    entry: {
      app: resolve('../src/main.js')
    },
    //静态资源二级目录名称
    assetsSubDirectory: 'static',   
    // CDN 地址
    assetsPublicPath: '/',   
    // 设置代理  https://webpack.js.org/configuration/dev-server/#devserver-proxy 
    proxyTable: {},   

    /**
     * Various Dev Server settings
     */
    // can be overwritten by process.env.HOST
    host: 'localhost', 
    // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    port: 8080, 
    //自动打开浏览器
    autoOpenBrowser: false,   
     //https://webpack.js.org/configuration/dev-server/#devserver-overlay
    errorOverlay: true,   
    // https://www.npmjs.com/package/friendly-errors-webpack-plugin 
    notifyOnErrors: true,  
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    poll: false, 
    // 是否使用 Eslint Loader
    useEslint: true,  
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: true,  

    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',


    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: resolve('../dist/index.html'),

    /**
     * Paths
     */
    //工程入口文件
    entry: {
      app: resolve('../src/main.js')
    },
    //根目录
    assetsRoot: resolve('../dist'),
    //静态资源二级目录名称
    assetsSubDirectory: 'static',
    // CDN 地址
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
