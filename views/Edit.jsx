const React = require('react')
const DefaultLayout = require('./layout/Default')
const Tweet = require('../models/Tweet')
// const DefaultLayout = require('./layout/Default')

function Edit({tweetToEdit}){
    console.log(tweetToEdit)
    return(
        <DefaultLayout title='Edit'>
            <h2>Edit Tweet</h2>
            <form action={`/api/tweets/${tweetToEdit._id}?_method=put`} method='POST'>
                Title: <input name='title' type='text' required defaultValue={tweetToEdit.title}/>
                <textarea name='body' required defaultValue={tweetToEdit.body}></textarea>
                Sponsored : <input type="checkbox" name='sponsored' defaultChecked={tweetToEdit.sponsored}/>
                <button>Update Tweet</button>
            </form>
        </DefaultLayout>
    )
}



module.exports = Edit