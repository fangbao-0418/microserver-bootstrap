/*
 * @Date: 2020-06-01 17:44:07
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-02 16:21:54
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/index.ts
 */

import UniversalRouter, { Routes } from 'universal-router'
import { loadjs, loadcss } from './utils/helper'
import { InjectConfigProps } from './interface'
let injectConfig: InjectConfigProps[] = []

function initBody () {
  document.body.innerHTML = `
    <div id="root"></div>
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

function initRoutes () {
  const routes: Routes = []
  injectConfig.forEach((item) => {
    routes.push({
      path: `${item.path}(.*)`,
      action: (context) => {
        if (item.serverName === 'common') {
          initBody()
        }
        const js = item.js || []
        const css = item.css || []
        css.forEach((attr) => {
          loadcss(attr.src, attr.inject)
        })
        js.forEach((attr) => {
          loadjs(attr.src, attr.inject)
        })
        // console.log('action')
        // return ''
      }
    })
  })
  console.log(routes, 'routes')
  return routes
}

function mount (el: HTMLElement) {
  const routes = initRoutes()
  const router = new UniversalRouter(routes)
  const href = location.href
  const origin = location.origin
  const path = href.replace(new RegExp('^' + origin), '')
  console.log(path, 'path')
  router.resolve(path)
    .then(html => {
      console.log('loaded')
    })
}

function bootstrap (config: InjectConfigProps[]) {
  injectConfig = config
  const app = {
    mount
  }
  return app
}

export default bootstrap
