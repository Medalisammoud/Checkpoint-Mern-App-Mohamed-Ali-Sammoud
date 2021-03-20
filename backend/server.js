//require express
const express = require('express')

//instance express
const app = express();

//require dotenv and config
require('dotenv').config()

//Midleware parser
app.use(express.json());

// connect to DB
const connectDB = require('./config/connectDB')
connectDB();

//Routes
app.use('/contact', require('./routes/contact'))
//Port
const PORT = process.env.PORT

//create server
app.listen(PORT, (error) => {
    error ? console.log(error)
    :
    console.log(`Server Listening on ${PORT}`)
  });

