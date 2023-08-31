const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 100
    },
    body : {
        type : String,
        required: true,
        minLength: 1,
        maxLength: 255
    },
    author: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})


const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet