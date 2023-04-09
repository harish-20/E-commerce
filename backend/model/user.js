const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isSeller: {
    type: Boolean,
    required: true,
  },
  onSaleProducts: Array,
  cartItems: Array,
  purchasedProduct: Array,
})

const User = mongoose.model('user', userSchema)

module.exports = User
