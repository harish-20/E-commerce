import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import classes from './Invoice.module.css'
const Invoice = () => {
  const currentUser = useSelector((state) => state.currentUser.user)
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  )

  const paymentHandler = () => {
    if (cartItems.length === 0) {
      toast.error('Add some item to checkout')
      return
    }

    var options = {
      key: 'rzp_test_qzkbkoKqCTLxl7',
      amount: totalAmount,
      currency: 'INR',
      name: 'Elecxo',
      description: 'Total Produucts',
      order_id: 'order_IluGWxBm9U8zJ8',
      prefill: {
        name: currentUser.name,
        email: currentUser.email,
        contact: currentUser.phoneNumber,
      },
      notes: {
        address: 'Elexo Corp',
      },
      theme: {
        color: '#3399cc',
      },
      handler: (response) => {
        console.log(response)
      },
    }

    const razorpay = new Razorpay(options)
    razorpay.open()
    razorpay.on('payment.failed', (response) => {
      console.log(response)
      razorpay.close()
    })
  }

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
      <button className={classes['pay-btn']} onClick={paymentHandler}>
        Pay &#8377;{totalAmount}
      </button>
    </div>
  )
}

export default Invoice
