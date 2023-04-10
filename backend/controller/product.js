const Product = require('../model/product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})

    res.status(200).send({ hasError: false, products })
  } catch (err) {
    res.status(400).send({
      hasError: true,
      error: err.message,
      message: 'cannot get products',
    })
  }
}

const getProductsByCategory = async (req, res) => {
  const { category } = req.params

  try {
    const products = await Product.find({ category })

    res.status(200).send({ hasError: false, products })
  } catch (err) {
    res.status(400).send({
      hasError: true,
      error: err.message,
      message: 'cannot get products',
    })
  }
}

const getProductsBySeller = async (req, res) => {
  const { sellerId } = req.params

  try {
    const products = await Product.find({ sellerId })

    res.status(200).send({ hasError: false, products })
  } catch (err) {
    res.status(400).send({
      hasError: true,
      error: err.message,
      message: 'cannot get products',
    })
  }
}

const addProduct = async (req, res) => {
  const {
    name,
    description,
    category,
    sellerId,
    image,
    price,
    discount,
    brand,
  } = req.body

  try {
    const product = Product({
      name,
      description,
      category,
      sellerId,
      image,
      price,
      discount,
      brand,
    })
    const result = await product.save()

    res.status(200).send({ hasError: false, result })
  } catch (err) {
    res.status(400).send({
      hasError: true,
      error: err.message,
      message: 'cannot add product',
    })
  }
}

const removeProduct = async (req, res) => {
  const { _id } = req.body

  try {
    const result = await Product.findByIdAndDelete(_id)

    res.status(200).send({ hasError: false, result })
  } catch (err) {
    res.status(400).send({
      hasError: true,
      error: err.message,
      message: 'cannot delete product',
    })
  }
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductsBySeller,
  addProduct,
  removeProduct,
}
