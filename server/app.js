require('dotenv').config({ path: '../config/dev.env' })
const express = require('express')
const path = require('path')
const connectDB = require('./db/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const mongoose = require('mongoose')
const { GridFsStorage } = require("multer-gridfs-storage")
const Grid = require('gridfs-stream')

const app = express()

// connect to MONGO
connectDB(process.env.MONGO_URI)
const conn = mongoose.connection

// MIDDLEWEAR
app.use(cors())
app.use(express.json())


// ROUTES
app.use('/api/auth', require('./routes/auth')) // AUTH USER
app.use('/api/documents', require('./routes/documents')) // DOCUMENTS

const port = process.env.PORT || 3001


// if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")))
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
// }

const server = app.listen(port, () => {
    console.log('Codekraft port: ' + port)
})