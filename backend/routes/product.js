const express = require('express')

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
productRouter.post('/addProduct', addProduct)
productRouter.delete('/removeProduct', removeProduct)
productRouter.get('/category/:category', getProductsByCategory)
productRouter.get('/seller/:sellerId', getProductsBySeller)

module.exports = productRouter
