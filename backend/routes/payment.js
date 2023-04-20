require('dotenv').config()
const express = require('express')
const makePayment = require('../controller/payment')

const paymentRouter = express.Router()

paymentRouter.post('/', makePayment)

module.exports = paymentRouter
