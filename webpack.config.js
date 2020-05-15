/*
 * @Date: 2020-05-12 10:37:10
 * @LastEditors: fangbao
 * @LastEditTime: 2020-05-15 10:12:41
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-react-template/webpack.config.js
 */

const path = require('path')
const webpack = require('webpack')
module.exports = function (config, env) {
  // ignore verify
  // config.module.rules = config.module.rules.filter((rule) => {
  //   return !(rule.enforce === 'pre' && (rule.test.test('.tsx') || rule.test.test('.jsx')))
  // })
  const publicPath = '/'
  config.output.publicPath = publicPath
  config.plugins[0].options.publishTime = new Date().getTime()
  const __ENV__ = process.env.NODE_ENV || 'dev'
  console.log(__ENV__, 'NODE_ENV')
  config.plugins.push(
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(__ENV__)
    })
  )
  const outdir = 'build'
  config.output.path = path.resolve(process.cwd(), outdir),
  config.module.rules.push({
    test: /\.(xls|xlsx)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: false,
      name: env === 'dev' ? '' : 'assets/files/' + '[name].[hash:7].[ext]'
      // esModule: false,
      // encoding: false
    }
  })
  return config
}
