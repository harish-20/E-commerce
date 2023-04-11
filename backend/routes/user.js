const express = require('express')

const { signin, signup, updateUser, getUser } = require('../controller/user')

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.post('/getUser', getUser)
userRouter.patch('/updateUser', updateUser)

module.exports = userRouter
