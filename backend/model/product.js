const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
  },
  brand: {
    type: String,
    required: true,
  },
  reviews: {
    type: Array,
  },
})

const Product = mongoose.model('products', productSchema)

module.exports = Product
