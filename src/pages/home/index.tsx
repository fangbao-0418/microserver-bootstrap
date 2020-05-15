import React from 'react'
// import styles from './style.module.styl'
import styles from './style.m.styl'
class Main extends React.Component {
  public componentDidMount () {
    console.log(APP.user)
  }
  public render () {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.logo}></div>
          <span>hello xituan</span>
        </div>
      </div>
    )
  }
}
export default Main
