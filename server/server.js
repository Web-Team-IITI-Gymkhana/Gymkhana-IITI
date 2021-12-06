const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
require('dotenv').config()
const DB_URI = process.env.MONGO_URI
const port = process.env.PORT || 5000;
const passport = require('passport')
require('./passport-setup')

//database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(res => console.log('mongoDB connected...'))
    .catch(err => console.log(err))


//middleware
app.use(session({
    secret: 'cats'
}))
app.use(passport.initialize())
app.use(passport.session())
// app.use(cors)

app.use(express.json())


app.get('/', (req, res) => {
    res.send('<a href="/google"> Login with google </a>' )
})
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next()
    }
    else {
        res.sendStatus(401)
    }
}

app.get('/failed', (req, res) => {
    res.send("Login failed!")
})
app.get('/protected', isLoggedIn, (req, res) => {
    res.send("Admin portal" + '<a href="/logout"> Logout</a>')
})

app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/google/callback',
    passport.authenticate('google',
        {
            failureRedirect: '/failed',
            successRedirect: '/protected'
        }),
);

app.get('/logout', (req, res) => {
    req.session = null
    req.logout()
    res.redirect('/')
})


// server
app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});