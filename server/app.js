require('dotenv').config({ path: '../config/dev.env' })
const express = require('express')
const path = require('path')
const cors = require('cors')

const connectDB = require('./db/db')

// connect to mongo
// connectDB(process.env.MONGO_URI)

const app = express()

// MIDDLEWEAR
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../client", "build")))
app.use(express.static("public"))

// AUTH USER
app.use('/api/auth', require('./routes/auth'))

const port = process.env.PORT || 3001

console.log(port)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
  

const server = app.listen(port, () => {
    console.log('Codekraft port: ' + port)
})