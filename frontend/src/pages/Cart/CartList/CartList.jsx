import React from 'react'
import { useSelector } from 'react-redux'

import classes from './CartList.module.css'
import CartItem from '../CartItem/CartItem'
const CartList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  if (!cartItems.length) {
    return <h2 className="centered">No item in the cart. Add some.</h2>
  }
  return (
    <div className={classes['cart-list']}>
      {cartItems.map((item) => (
        <CartItem key={item._id} {...item} />
      ))}
    </div>
  )
}

export default CartList
