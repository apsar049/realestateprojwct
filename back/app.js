const mongoose = require('mongoose')
const express = require('express')
// const router = require("./routers/routes")
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/realestate').then(() => {
  console.log('connection success')
})

const app = express()
// app.use("/",router)
app.use(cors())
const port = process.env.PORT || 8000
require('./models/basicinfo')
require('./models/propertydetails')
require('./models/generalinfo')

app.use(require('./routers/routes'))
app.listen(port, () => {
  console.log(`Server is up at ${port}`)
})
