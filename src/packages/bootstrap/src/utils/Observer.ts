/// <reference path="../types/helper.d.ts" />

const XT_MICRO_SERVICE_LISTENER = 'xt-micro-service-listener'
const XT_MICRO_SERVICE_ROUTES = 'xt-micro-service-routes'

const routes: RouteInfo[]  = window[XT_MICRO_SERVICE_ROUTES] = (window[XT_MICRO_SERVICE_ROUTES] || [])
const listeners: Function[] = window[XT_MICRO_SERVICE_LISTENER] = (window[XT_MICRO_SERVICE_LISTENER] || [])
const Observer = {
  subscribe: function (fn: Function) {
    listeners.push(fn)
  },
  addRoute: function (routeInfo: RouteInfo) {
    routes.push(routeInfo)
    this.trigger()
  },
  trigger: function () {
    listeners.map((fn) => {
      fn && fn()
    })
  },
  getRoutes: function () {
    return routes
  }
}

export default Observer
