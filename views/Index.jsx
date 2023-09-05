const React = require('react')
const DefaultLayout = require('./layout/Default')


function Index({tweets}){
    return(
        <DefaultLayout title='Index'>
            <nav>
                <a href='/tweets/new'>Create a new Tweet</a>
            </nav>

            <ul>
                {
                    tweets.map(tweet => {
                        return(
                            <li key={tweet._id} className='border p-5'>
                                <a href={`tweets/${tweet._id}`}>{tweet.title}</a>
                                <p>{tweet.body}</p>
                                <p>{tweet.author}</p>
                                <span>{tweet.likes}</span>
                                <span>{tweet.sponsored ? 'Sponsored': ''}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </DefaultLayout>
    )
}







module.exports = Index