import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import classes from './Layout.module.css'
const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
