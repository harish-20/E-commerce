import React from 'react'
import { useDispatch } from 'react-redux'

import classes from './CartItem.module.css'
import { cartActions } from '../../../redux/slices/cart'
import { toast } from 'react-toastify'
const CartItem = (props) => {
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(cartActions.removeItem({ ...props, quantity: 1 }))
  }
  const handleIncrement = () => {
    if (props.quantity >= 10) {
      toast.info(`Maximum order amount reached.`)
      return
    }
    dispatch(cartActions.addItem({ ...props, quantity: 1 }))
  }

  return (
    <div className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={props.image} alt="product" />
      </div>
      <div className={classes['cart-item__title']}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes['cart-item__price']}>
        <p>
          <span>&#8377; {props.price}</span> X
        </p>
        <div className={classes['cart-item__quantity']}>
          <button onClick={handleDecrement}>-</button>
          <span>{props.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
