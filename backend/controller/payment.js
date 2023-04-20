require('dotenv').config()
const Razorpay = require('razorpay')

const makePayment = async (req, res) => {
  console.log('payment')
  const { amount, orderBy } = req.body
  const instance = new Razorpay({
    key_id: process.env.RAZORID,
    key_secret: process.env.RAZORSECRETKEY,
  })

  const PAISEPERRUPEE = 100
  instance.orders.create(
    {
      amount: amount * PAISEPERRUPEE,
      currency: 'INR',
      receipt: `receipt of ${orderBy}`,
    },
    (err, order) => {
      if (err) {
        console.log('some error', err)
        res.status(400).send({ hasError: true, error: err.message })
      } else {
        res.send({ hasError: false, order })
      }
    },
  )
}

module.exports = makePayment
