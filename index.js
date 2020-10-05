const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')

const port = 3000
const env = process.env.NODE_ENV || 'development'

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// The application instance
const engine = express()

// View engine
engine.set('view-engine', 'ejs')

// Middleware
engine.use(bodyParser.json())
engine.use(bodyParser.urlencoded({extended: true}))
engine.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))
engine.use(passport.initialize())
engine.use(passport.session())


engine.use('/', require('./routes.js'))

// respond with "hello world" when a GET request is made to the homepage
engine.get('/', function (req, res) {
    if(req.user) {
        res.render('index.ejs')
    } else {
        res.render('login.ejs');
    }
})

// Turn on the lights
// 
// Listen on specific port and print out message
engine.listen(port, () => console.log(`Service listening at http://localhost:${port} in ${env} mode`))