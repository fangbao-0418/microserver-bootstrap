/*
 * @Date: 2020-06-01 17:44:07
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-04 15:37:49
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/entry/src/packages/bootstrap/src/index.ts
 */

import UniversalRouter, { Routes } from 'universal-router'
import { createHashHistory } from 'history'
import { loadjs, loadcss } from './utils/helper'
import { InjectConfigProps } from './interface'
const history = createHashHistory()
let injectConfig: InjectConfigProps[] = []
/** 加载过的server */
const loadedServer: string[] = []

function initRoutes () {
  const routes: Routes = []
  injectConfig.forEach((item) => {
    routes.push({
      path: `${item.path}(.*)`,
      action: (context) => {
        console.log(item, loadedServer, 'loadedServer')
        const isloaded = !!loadedServer.find((serverName) => serverName === item.serverName)
        if (!isloaded) {
          loadedServer.push(item.serverName)
          const js = item.js || []
          const css = item.css || []
          css.forEach((attr) => {
            loadcss(attr.src, attr.inject)
          })
          js.forEach((attr) => {
            loadjs(attr.src, attr.inject)
          })
        }
        console.log(context, item, 'action')
        if (item.serverName !== 'common') {
          return ''
        }
        // return ''
      }
    })
  })
  console.log(routes, 'routes')
  return routes
}

function routerResolve (router: UniversalRouter, serverPath: string) {
  router.resolve(serverPath)
    .then(html => {
      console.log(html, 'loaded')
      // document.body.innerHTML = html
    })
}

function initRouterResolve (router: UniversalRouter) {
  const location = history.location
  const pathname = location.pathname
  const serverPath = pathname.replace(/^(\/\w+)\/?.*$/, '$1')
  routerResolve(router, serverPath)
}

function start () {
  const routes = initRoutes()
  // console.log(routes, 'routes')
  const router = new UniversalRouter(routes)
  const unlisten = history.listen((location, action) => {
    const pathname = location.pathname
    const serverPath = pathname.replace(/^(\/\w+)\/?.*$/, '$1')
    console.log(pathname, 'pathname')
    routerResolve(router, serverPath)
  })
  initRouterResolve(router)
}

function bootstrap (config: InjectConfigProps[]) {
  injectConfig = config
  const app = {
    start
  }
  return app
}

export default bootstrap
