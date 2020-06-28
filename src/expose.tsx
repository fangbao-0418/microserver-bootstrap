import React from 'react'
import { Observer } from '@xt-micro-service/bootstrap'
class Main extends React.Component {
  public render () {
    return (
      <div>
        expose
      </div>
    )
  }
}

Observer.addRoute({
  path: '/order',
  component: Main
})
console.log(Observer.getRoutes(), 'Observer add route')
export default Main
