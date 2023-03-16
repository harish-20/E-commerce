import React from 'react'

import Icon from '../Icon/Icon'

import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import profile from '../../assets/profile.svg'
import cart from '../../assets/cart.svg'

import classes from './Header.module.css'
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Icon src={home} alt="home" />
        <input type="text" placeholder="Search Your Item" />
        <Icon src={profile} alt="profile" />
        <Icon badge={0} src={cart} alt="cart" />
      </header>
      <input
        className={classes['mob-view-input']}
        type="text"
        placeholder="Search Your Item"
      />
    </>
  )
}

export default Header
