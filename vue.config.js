const port = 8060
module.exports = {
  css: {
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  },
  devServer: {
    port
  }
}
