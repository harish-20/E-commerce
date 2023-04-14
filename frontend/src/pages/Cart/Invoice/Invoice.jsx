import React from 'react'
import { useSelector } from 'react-redux'

import classes from './Invoice.module.css'
const Invoice = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  )

  if (cartItems.length === 0) {
    return <h2 className="centered">No item in cart.</h2>
  }

  return (
    <div>
      <table className={classes.invoice}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>
                &#8377; {item.price} X {item.quantity}
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total Price</td>
            <td>&#8377; {totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <button className={classes['pay-btn']}>Pay &#8377;{totalAmount}</button>
    </div>
  )
}

export default Invoice
