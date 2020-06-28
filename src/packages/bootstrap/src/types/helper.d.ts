interface RouteInfo<T = any> {
  path: string
  component: T
}

interface Window {
  'xt-micro-service-listener': Function[]
  'xt-micro-service-routes': any[]
}
