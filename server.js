require('dotenv').config()
const connectDB = require('./utils/connectDB')

const express = require('express')

const Tweet = require('./models/Tweet')

const app = express()
const PORT = 3000

const manyTweets = require('./models/manytweets')

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Working!')
})

// ====================== View Routes

//index
app.get('/tweets', async (req, res)=> {
    try {
        const tweets = await Tweet.find({})
        res.send(tweets)
    } catch (error) {
        console.log(error);
    }
})


// show
app.get('/tweets/:id', async (req, res) => {
    const {id} = req.params
    try {
        const tweet = await Tweet.findById(id)
        res.send(tweet)
    } catch (error) {
        console.log(error);
    }
})





// =========================== API Routes


//create post
app.post('/tweets', async (req, res) => {
    const createdTweet = await Tweet.create(req.body)
    console.log(createdTweet);
    res.send(createdTweet)
})    


//update
app.put('/tweets/:id', async (req, res) => {
    const {id} = req.params
    try {
        // const tweetToUpdate = await Tweet.findById(id)
        const updatedTweet = await Tweet.findByIdAndUpdate(id, req.body, {new: true})
        res.send(updatedTweet)
    } catch (error) {
        console.log(error);
    }
})












//increase likes
app.get('/api/tweets/add-like/:id', async (req, res) => {
    const {id} = req.params
    try {
        const tweetToUpdate = await Tweet.findById(id)
        tweetToUpdate.likes++
        const updatedTweet = await Tweet.findByIdAndUpdate(id, tweetToUpdate, {new: true})
        res.send(updatedTweet)
    } catch (error) {
        console.log(error);
    }
})





//delete
app.delete('/tweets/:id', async (req, res) => {
    const {id} = req.params
    try {
        await Tweet.findByIdAndRemove(id)
        res.send('Tweet deleted')
    } catch (error) {
        console.log(error);
    }
})




app.get('/api/tweets/seed', async (req, res) => {
    const createdTweets = await Tweet.insertMany(manyTweets)
    res.send(createdTweets)
})



connectDB()


app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))