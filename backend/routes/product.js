const express = require('express')

const {
  getAllProducts,
  addProduct,
  removeProduct,
} = require('../controller/product')

const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.post('/addProduct', addProduct)
productRouter.delete('/removeProduct', removeProduct)

module.exports = productRouter
