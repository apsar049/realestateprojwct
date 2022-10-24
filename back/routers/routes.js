const mongoose = require('mongoose')
const express = require('express')
// const Basics = require("../models/basicinfo")
const Basics = mongoose.model('Basics')
// const Properties = require("../models/propertydetails")
const Properties = mongoose.model('Properties')
// const General = require("../models/generalinfo")
const General = mongoose.model('General')
const Login = require('../models/login')
var bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate')
const validator = require('express-validator')
const bodyparser = require('body-parser')
const cors = require('cors')
const route = express.Router()

route.use(express.json())
route.use(express.urlencoded({ extended: false }))
route.use(cors())

route.post(
  '/signup',

  async (req, res) => {
    const { email, password, cpassword } = req.body

    if (!email || !password || !cpassword) {
      res.status(422).json({ error: 'fill all the details' })
    }

    try {
      const preuser = await Login.findOne({ email: email })

      if (preuser) {
        res.status(422).json({ message: 'This Email, Already Exist' })
      } else if (password !== cpassword) {
        res
          .status(422)
          .json({ error: 'Password and Confirm Password Not Match' })
      } else {
        const finalUser = new Login({
          email,
          password,
          cpassword
        })

        // here password hasing

        const storeData = await finalUser.save()

        // console.log(storeData);
        res.status(201).json({ status: 201, storeData })
      }
    } catch (error) {
      res.status(422).json(error)
      console.log('catch block error')
    }
  }
)

// user Login

route.post('/login', async (req, res) => {
  // console.log(req.body)

  const { email, password } = req.body

  const userValid = await Login.findOne({ email })
  if (userValid) {
    const isMatch = await bcrypt.compare(password, userValid.password)
    // console.log(userValid)

    if (!isMatch) {
      return res.status(422).json({ message: 'invalid details' })
    } else {
      // token generate
      const token = await userValid.generateAuthtoken()

      // cookiegenerate
      res.cookie('usercookie', token, {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true
      })

      const result = {
        userValid,
        token
      }
      res.status(201).json({ status: 201, result })
    }

    // res.json({ message: 'User does not exist ,Please Register' })
  } else {
    return res.json({ message: 'User do not exist ,Please Signup' })
  }
})

//user valid
route.get('/validuser', authenticate, async (req, res) => {
  try {
    const ValidUserOne = await Login.findOne({ _id: req.userId })
    // console.log(ValidUserOne)
    return res.status(201).json({ status: 201, ValidUserOne })
  } catch (error) {
    return res.status(401).json({ status: 401, error })
  }
})
//logout
route.get('/logout', authenticate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter(curelem => {
      return curelem.token !== req.token
    })

    res.clearCookie('usercookie', { path: '/' })

    req.rootUser.save()

    res.status(201).json({ status: 201 })
  } catch (error) {
    res.status(401).json({ status: 401, error })
  }
})

module.exports = route
