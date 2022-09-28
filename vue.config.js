const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8090,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.1.8:3000', //API服务器的地址
    //     ws: true, //代理websockets
    //     changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
    //     pathRewrite: {
    //       '^/api': '',
    //     }
    //   }
    // },
  }
}