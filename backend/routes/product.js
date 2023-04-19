require('dotenv').config()
const express = require('express')
const { expressjwt } = require('express-jwt')

const {
  getAllProducts,
  getProductsByCategory,
  getProductsBySeller,
  addProduct,
  removeProduct,
  getProductById,
} = require('../controller/product')

const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.get('/:productId', getProductById)
productRouter.post(
  '/addProduct',
  expressjwt({ secret: process.env.PRIVATE_KEY, algorithms: ['HS256'] }),
  addProduct,
)
productRouter.delete(
  '/removeProduct',
  expressjwt({ secret: process.env.PRIVATE_KEY, algorithms: ['HS256'] }),
  removeProduct,
)
productRouter.get('/category/:category', getProductsByCategory)
productRouter.get('/seller/:sellerId', getProductsBySeller)

module.exports = productRouter
