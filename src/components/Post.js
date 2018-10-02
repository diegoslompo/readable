import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { formatTweet, formatDate } from '../utils/helpers'
// import { handleToggleTweet } from '../actions/tweets'

class Post extends Component {
//   handleLike = (e) => {
//     e.preventDefault()

//     // todo: Handle Like Tweet
//     const { dispatch, tweet, authedUser } = this.props
//      dispatch(handleToggleTweet({
//       id: tweet.id,
//       hasLiked: tweet.hasLiked,
//       authedUser
//     }))
//   }
//   toParent = (e, id) => {
//     e.preventDefault()
//     // todo: Redirect to parent Tweet.
//   }
  render() {
    const { post } = this.props

    if (post === null) {
      return <p>This Tweet doesn't existd</p>
    }

    const {
      title, body, timestamp, author, category, voteScore, deleted, commentCount
    } = post

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
            {/* {/* <div>{formatDate(timestamp)}</div> */} */}
            {/* {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )} */}
          </div>
          {/* <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div> */}
        </div>
      </div>
    )
  }
}

// function mapStateToProps ({posts}, { id }) {
//   const post = posts[id]
//   const parentPost = tweet ? posts[post.replyingTo] : null

//   return {
//     post: post
//       ? formatPost(post, users[post.author], parentPost)
//       : null
//   }
// }

export default Post

// export default connect(mapStateToProps)(Post)