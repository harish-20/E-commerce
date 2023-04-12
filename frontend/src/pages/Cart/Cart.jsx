import React from 'react'

import classes from './Cart.module.css'
import CartList from './CartList/CartList'
import Invoice from './Invoice/Invoice'
const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes['cart-items']}>
        <h1>Cart Items</h1>
        <CartList />
      </div>
      <div className={classes['cart-invoice']}>
        <h2>Invoice</h2>
        <Invoice />
      </div>
    </div>
  )
}

export default Cart
