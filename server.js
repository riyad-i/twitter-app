require('dotenv').config()
const connectDB = require('./utils/connectDB')

const express = require('express')

const app = express()
const PORT = 3000




app.get('/', (req, res) => {
    res.send('Working!')
})



connectDB()


app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))