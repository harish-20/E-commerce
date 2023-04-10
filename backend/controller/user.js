require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../model/user')

const signup = async (req, res) => {
  const { name, email, isSeller, password, phoneNumber } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 5)
    const user = new User({
      name,
      email,
      isSeller,
      password: hashedPassword,
      phoneNumber,
    })
    const result = await user.save()

    res.status(200).send({ hasError: false, result })
  } catch (err) {
    res
      .status(400)
      .send({ message: 'Invalid Data', error: err.message, hasError: true })
  }
}

const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const exsistingUser = await User.findOne({ email })

    if (exsistingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        exsistingUser.password,
      )

      if (isValidPassword) {
        const token = jwt.sign(
          exsistingUser._id.toString(),
          process.env.PRIVATE_KEY,
        )
        res.status(200).send({ token, user: exsistingUser, hasError: false })
      } else {
        res.status(400).send({ message: 'Incorrect password', hasError: true })
      }
    } else {
      res.send({ message: 'No user exist with this email id', hasError: true })
    }
  } catch (err) {
    res.status(400).send({
      message: 'Email and password not matched',
      error: err.message,
      hasError: true,
    })
  }
}

const updateUser = async (req, res) => {
  const { _id, ...user } = req.body

  try {
    const result = await User.findByIdAndUpdate(
      _id,
      { $set: user },
      { new: true },
    )

    res.status(400).send({ result, hasError: false })
  } catch (err) {
    res.status(400).send({
      message: 'Cannot update user',
      error: err.message,
      hasError: true,
    })
  }
}

module.exports = {
  signup,
  signin,
  updateUser,
}
