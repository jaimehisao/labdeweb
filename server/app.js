require('dotenv').config({ path: '../config/dev.env' })
const express = require('express')
const path = require('path')
const cors = require('cors')

const connectDB = require('./db/db')

// connect to mongo
connectDB(process.env.MONGO_URI)

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

const server = app.listen(port, () => {
    console.log('Codekraft port: ' + port)
})