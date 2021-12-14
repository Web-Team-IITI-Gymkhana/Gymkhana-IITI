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
app.use(cors())
app.use(express.json())

//endpoints
app.get('/', (req, res) => {
  res.status(200).json({
      msg: "This is the server of Gymkhana IITI"
  })
})

app.get('/failed', (req, res) => {
    res.send("Login failed!")
})

app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/logout', (req, res) => {
    req.session = null
    req.logOut()
    res.redirect('/')
})

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const contentRoute = require('./routes/content')
app.use('/content', contentRoute)

// server
app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});
