const React = require('react')
const DefaultLayout = require('./layout/Default')
const Tweet = require('../models/Tweet')

function Edit({tweetToEdit}){
    console.log(tweetToEdit)
    return(
        <div>
            <h2>Edit Tweet</h2>
            <form action='/api/tweets' method='post'>
                Title: <input name='title' type='text' required defaultValue={tweetToEdit.title}/>
                <textarea name='body' required defaultValue={tweetToEdit.body}></textarea>
                Sponsored : <input type="checkbox" defaultChecked={tweetToEdit.sponsored}/>
                <button>Update Tweet</button>
            </form>
        </div>
    )
}



module.exports = Edit