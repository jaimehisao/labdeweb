require('dotenv').config({ path: '../config/dev.env' })
const express = require('express')
const path = require('path')
const cors = require('cors')
const connectDB = require('./db/db')

const app = express()

// connect to mongo
connectDB(process.env.MONGO_URI)


// MIDDLEWEAR
app.use(cors())
app.use(express.json())

// AUTH USER
app.use('/api/auth', require('./routes/auth'))

const port = process.env.PORT || 3001


if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")))
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

  

const server = app.listen(port, () => {
    console.log('Codekraft port: ' + port)
})