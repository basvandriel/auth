const passport = require('passport')

const Strategy = require('passport-local').Strategy

passport.use(new Strategy(
    (username, password, callback) => { callback(null, false, { message: 'Not working so far ;)'}) }
))

