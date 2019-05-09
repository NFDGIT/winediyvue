// vue.config.js
module.exports = {
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('less').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // Provide path to the file with resources
            resources: './src/assets/less/variables.less'
          })
          .end()
      })
    },
    lintOnSave: false,
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer:{
      disableHostCheck: true,    
  
      proxy: {
          '/api': {
            target: 'https://www.baidu.com/',  // target host
            ws: true,  // proxy websockets
            changeOrigin: true,  // needed for virtual hosted sites
            pathRewrite: {
              '^/api': ''  // rewrite path
            }
          },
      },  // 配置多个代理
      


    },

  }