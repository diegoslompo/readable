import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { formatTweet, formatDate } from '../utils/helpers'
// import { handleToggleTweet } from '../actions/tweets'

class Post extends Component {
  // handleLike = (e) => {
  //   e.preventDefault()

  //   // todo: Handle Like Tweet
  //   const { dispatch, tweet, authedUser } = this.props
  //    dispatch(handleToggleTweet({
  //     id: tweet.id,
  //     hasLiked: tweet.hasLiked,
  //     authedUser
  //   }))
  // }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   // todo: Redirect to parent Tweet.
  // }
  render() {
    const { post } = this.props

    // if (post === null) {
    //   return <p>This Tweet doesn't existd</p>
    // }

    const {
      title, body, timestamp, author, category, voteScore, deleted, commentCount
    } = post

    console.log(this.props)
    return (
      <div className='tweet'>
        <div className='tweet-info'>
          <div>
            <p>title:{title}</p>
            <p>body: {body}</p>
            <p>author: {author}</p>
            <p>category: {category}</p>
            <p>voteScore: {voteScore}</p>
            <p>deleted: {deleted}</p>
            <p>commentCount: {commentCount}</p>
            <p>timestamp: {timestamp}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({posts}, { id }) {
  const post = posts[id]
  // const parentPost = post ? posts[post.replyingTo] : null

  return {
    post: post
      // ? parentPost
      // : null
  }
}

// export default Post

export default connect(mapStateToProps)(Post)