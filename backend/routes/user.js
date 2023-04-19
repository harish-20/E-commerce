require('dotenv').config()
const express = require('express')
const { expressjwt } = require('express-jwt')

const { signin, signup, updateUser, getUser } = require('../controller/user')

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.post(
  '/getUser',
  expressjwt({ secret: process.env.PRIVATE_KEY, algorithms: ['HS256'] }),
  getUser,
)
userRouter.patch('/updateUser', updateUser)

module.exports = userRouter
