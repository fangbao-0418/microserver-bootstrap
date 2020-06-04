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
        const js = item.js || []
        const css = item.css || []
        css.forEach((attr) => {
          loadcss(attr.src, attr.inject)
        })
        js.forEach((attr) => {
          loadjs(attr.src, attr.inject)
        })
      }
    })
  })
  return routes
}

function routerResolve (router: UniversalRouter, serverPath: string) {
  const isloaded = !!loadedServer.find((path) => path === serverPath)
  console.log(isloaded, loadedServer, 'isloaded')
  if (isloaded) {
    return
  }
  loadedServer.push(serverPath)
  router.resolve(serverPath)
    .then(html => {
      console.log('loaded')
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
  const router = new UniversalRouter(routes)
  const unlisten = history.listen((location, action) => {
    const pathname = location.pathname
    const serverPath = pathname.replace(/^(\/\w+)\/?.*$/, '$1')
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
