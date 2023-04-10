import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'
import cart from '../../assets/cart.svg'

import classes from './Header.module.css'
import Button from '../Button/Button'
import { currentUserActions } from '../../redux/slices/currentUser'
const Header = () => {
  const currentUser = useSelector((state) => state.currentUser)

  const dispatch = useDispatch()
  useEffect(() => {
    const user = localStorage.getItem('userInfo')

    if (user) {
      const parsedUser = JSON.parse(user)
      dispatch(currentUserActions.setUser(parsedUser))
    }
  }, [])
  const isLoggedIn = !!currentUser.user

  return (
    <>
      <header className={classes.header}>
        <Link to={'/'}>
          <img src={logo} className={classes.logo} alt="logo" />
        </Link>

        <input type="text" placeholder="Search Your Item" />
        {isLoggedIn ? (
          <>
            <Icon src={profile} alt="profile" />
            <Icon badge={0} src={cart} alt="cart" />
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
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
