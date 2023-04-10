const express = require('express')

const {
  getAllProducts,
  getProductsByCategory,
  getProductsBySeller,
  addProduct,
  removeProduct,
} = require('../controller/product')

const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.post('/addProduct', addProduct)
productRouter.delete('/removeProduct', removeProduct)
productRouter.get('/category/:category', getProductsByCategory)
productRouter.get('/seller/:sellerId', getProductsBySeller)

module.exports = productRouter
