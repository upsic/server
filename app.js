require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

mongoose.connect('mongodb://localhost:27017/upsic', { useNewUrlParser: true })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/upsic', routes)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})