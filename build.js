/*
 * @Date: 2020-05-12 10:35:30
 * @LastEditors: fangbao
 * @LastEditTime: 2020-05-12 11:16:18
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-react-template/build.js
 */

const argv = require('yargs').argv
const { exec } = require('child_process')

const env = argv.env || 'dev'

const build = exec('yarn clear && node ./node_modules/xt-react-cli/lib/scripts/build.js', {
  env: {
    ...process.env,
    NODE_ENV: env
  }
})

build.stdout.on('data', (data) => {
  console.log(`${data}`)
})

build.stderr.on('data', (data) => {
  console.log(`${data}`)
})
