import React from 'react'
import styles from './HomePage.module.scss'

import Footer from './homepage/Footer'
import Header from './homepage/Header'

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header className={styles.header}/>
      <Footer className={styles.footer}/>
    </div>
  )
}

export default HomePage
