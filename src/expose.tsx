import React from 'react'
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

console.log('0000000000000000000000')
console.log(Observer.getRoutes(), 'routes')
export default Main
