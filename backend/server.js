require('dotenv').config()
const { PORT, MONGODBURI } = process.env

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./routes')

const app = express()

// db connection
mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log('Mongodb connection successfull')
  })
  .catch((err) => console.log(err))

// server configs
app.use(express.json())
app.use(cors({ origin: '*' }))

// Routes
app.get('/', (req, res) => {
  res.send('Ecommerce API working fine.')
})
app.use('/', router)

app.listen(PORT || 8000, () => console.log(`Server running at port ${PORT}`))
