import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'
import Button from '../Button/Button'

import { currentUserActions } from '../../redux/slices/currentUser'
import { cartActions } from '../../redux/slices/cart'

import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'
import cart from '../../assets/cart.svg'

import classes from './Header.module.css'

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser)
  const totalCartItem = useSelector((state) => state.cart.cartItems.length)

  const dispatch = useDispatch()

  const [animateBouce, setAnimateBounce] = useState(false)
  const animateRef = useRef(null)

  useEffect(() => {
    const user = localStorage.getItem('userInfo')

    dispatch(cartActions.loadCart())
    if (user) {
      const parsedUser = JSON.parse(user)
      dispatch(currentUserActions.setUser(parsedUser))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => setAnimateBounce(false), 1000)

    return () => {
      if (!animateRef.current) {
        animateRef.current = true
      } else {
        setAnimateBounce(true)
      }
    }
  }, [totalCartItem])

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
            <Link to="/user">
              <Icon src={profile} alt="profile" />
            </Link>
            <Link to="/cart">
              <Icon
                badge={totalCartItem}
                badgeClass={animateBouce ? classes.bounce : ''}
                src={cart}
                alt="cart"
              />
            </Link>
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
