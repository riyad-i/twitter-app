const React = require('react')



function Show({tweet}){
    console.log(tweet.sponsored)
    return(
        <div>
            <div>{tweet.title}</div>
            <div>{tweet.author}</div>
            <div>{tweet.body}</div>
            <div>{new Date(tweet.createdAt).toLocaleDateString()}</div>
            <div>{tweet.sponsored ? 'sponsored' : null}</div>
            
            {/* <div>{tweet.comments}</div> */}

            <div>
                <h3>Comment Form</h3>
                <form>
                    comment body: <input type='text' name='body' required/>
                    <br/>
                    comment author: <input type='text' name='author' required/>
                    <br/>
                    <button>Add Comment</button>
                </form>
            </div>

        </div>
    )
}

module.exports = Show