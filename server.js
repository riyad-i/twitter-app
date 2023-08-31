require('dotenv').config()
const connectDB = require('./utils/connectDB')

const express = require('express')

const Tweet = require('./models/Tweet')

const app = express()
const PORT = 3000


//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Working!')
})


app.get('/tweets', async (req, res)=> {
    try {
        const tweets = await Tweet.find({})
        res.send(tweets)
    } catch (error) {
        console.log(error);
    }
})


app.post('/tweets', async (req, res) => {
    const createdTweet = await Tweet.create(req.body)
    console.log(createdTweet);
    res.send(createdTweet)
})



connectDB()


app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))