import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-icons/md'
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
      <div className="post-card__item">
        <div className="post-card__info">
          <div className="post-card__top">
            <div className="post-card__avatar"><Icon.MdLocalLibrary /></div>
            <div className="post-card__write">
              <div className="post-card__title"> {title} </div>
              <div className="post-card__date"> {timestamp}, by {author} in <b>{category}</b> </div>
            </div>
          </div>
          <div className="post-card__description">{body}</div>
        </div>
        <div className="post-card__utils">
        <div className="post-card__util-item"><Icon.MdEdit /></div>
        <div className="post-card__util-item"><Icon.MdDeleteSweep /></div>
        <div className="post-card__util-item">
          <Icon.MdModeComment />
          <div className="post-card__util-comments">({commentCount})</div>
        </div>
        </div>
        <div className="post-card__actions">
          <div className="post-card__actions-item post-card--upvote"> <Icon.MdThumbUp /></div>
          <div className="post-card__actions-item post-card--downvote"><Icon.MdThumbDown /></div>
          <div className="post-card__score">{voteScore}</div>
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