const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
require('dotenv').config()
const DB_URI = process.env.MONGO_URI
const port = process.env.PORT || 5000;

//database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})
.then(res => console.log('mongoDB connected...'))
.catch(err => console.log(err))


//middleware
// app.use(cors)

app.use(express.json())

// server
app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});