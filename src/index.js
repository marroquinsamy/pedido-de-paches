const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.urlencoded({extended: false}))

app.use(require('./routes/index.js'))

app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})