const express = require('express')
const app = express()
const port = 6001
const cors = require('cors')
const mongoose = require("mongoose")

// start dotenv
require('dotenv').config()

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// cors
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
}
app.use(cors(corsOptions))

// mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// getting routes
const auth = require('./routes/auth')
const movies = require('./routes/movies')
app.use('/api/auth', auth)
app.use('/api/movies', movies)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
