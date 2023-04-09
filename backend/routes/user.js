const express = require('express')

const { signin, signup, updateUser } = require('../controller/user')

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.patch('/updateUser', updateUser)

module.exports = userRouter
