/*
 * @Date: 2020-06-01 17:44:07
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-01 20:01:19
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/index.ts
 */

import UniversalRouter, { Routes } from 'universal-router'
import { loadjs, loadcss } from './utils/helper'

const routes: Routes = [
  {
    path: '/',
    action: () => {
      initBody()
      loadcss('https://test1-supplier.hzxituan.com/css/app.2224c453.css')
      loadjs('https://test1-wms.hzxituan.com/js/common-14d648473a7b5446c6a2.bundle.js')
      loadjs('https://test1-wms.hzxituan.com/js/app-14d648473a7b5446c6a2.bundle.js')
      // return ''
    },
    children: [
      {
        path: '/#/purchase/(.*)',
        action: (context) => {
          console.log('2')
          // document.body.innerHTML = 'posts'
          return ''
        }
      }
    ]
  }
]

function initBody () {
  document.body.innerHTML = `
    <div id="app"></div>
    <div id="loading" class="loading" style="display: none;">
      <main class="wrapper">
        <div class="loading-wrapper">
          <div class="ant-spin ant-spin-spinning ant-spin-show-text">
            <span class="ant-spin-dot ant-spin-dot-spin">
              <i class="ant-spin-dot-item"></i>
              <i class="ant-spin-dot-item"></i>
              <i class="ant-spin-dot-item"></i>
              <i class="ant-spin-dot-item"></i>
            </span>
            <div class="ant-spin-text">加载中...</div>
          </div>
        </div>
      </main>
    </div>
  `
}

function mount (el: HTMLElement) {
  const router = new UniversalRouter(routes)
  const href = location.href
  const origin = location.origin
  const path = href.replace(new RegExp('^' + origin), '')
  // const path = '/order'
  console.log(path, 'path')
  router.resolve(path)
    .then(html => {
      console.log('loaded')
    })
}

function bootstrap () {
  const app = {
    mount
  }
  return app
}

export default bootstrap
