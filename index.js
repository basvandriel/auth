const express = require('express')

const port = 3000
const env = process.env.NODE_ENV || 'development'

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// The application instance
const engine = express()

// respond with "hello world" when a GET request is made to the homepage
engine.get('/', function (req, res) {
    res.send('hello world')
})

// Turn on the lights
// 
// Listen on specific port and print out message
engine.listen(port, () => console.log(`Service listening at http://localhost:${port} in ${env} mode`))