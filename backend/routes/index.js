const express = require('express')

const userRouter = require('./user')
const productRouter = require('./product')
const paymentRouter = require('./payment')

const router = express.Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/payment', paymentRouter)

module.exports = router
