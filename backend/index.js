require('dotenv').config() //loading enviroment variables from .env files
const express = require('express') //importing express.js library
const cors = require('cors') //Cross origin resource sharing middleware: enables cross origin request
const server = express()
const response = require('./utils/responses')
const port = process.env.APP_PORT
const mongoose = require('mongoose')

server.use(cors())//ask server to use cors middleware
server.use(express.json())//use built in json
server.use(express.urlencoded({ extended: true }))

server.all('*', (req, res, next) => {
  response(res, 404, 'Page not found.')
})//handle requests that dont mathc defined routes

mongoose.connect(process.env.MONGO_URI)//connect mongodb
  .then(() => {
    server.listen(port, () => {
      console.log('DB connected')
      console.log(`Server is running on ${process.env.
BASE_URL}\n`)
    })
  }).catch((error) => {
    console.log(error.message)
  })