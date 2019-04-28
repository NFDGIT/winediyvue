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
    devServer:{
      disableHostCheck: true,    
    }
  }