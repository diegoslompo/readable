import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-icons/md'
import { formatDate } from '../utils/helpers'
import { upVotePost } from '../actions/posts'
// import { handleTrigerPost } from '../actions/posts'

class Post extends Component {

  // handleUpVote = (e) =>  {
  //   e.preventDefault()

  //   const {dispatch, post} = this.props

  //   dispatch(upVotePost({
  //     id: post.id,
  //     handleLike: true
  //     }
  //   ))
  // }

  handleUpVote = (id) => {

    const {dispatch, post} = this.props

    dispatch(upVotePost({
      id: post.id
      }
    ))
  }


  // votePost = (e) => {
  //   e.preventDefault()

  //   // todo: Handle Like
  //   const { dispatch, post} = this.props
  //    dispatch(votePost({
  //     id: post.id,
  //     hasLiked: post.hasLiked
  //   }))
  // }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   // todo: Redirect to parent Tweet.
  // }

  render() {
    const { post} = this.props

    if (post === null) {
      return <p>This Post doesn't exist</p>
    }

    const {
      id, title, body, timestamp, author, category, voteScore, deleted, commentCount
    } = post

    console.log(this.props)
    return (
      <div className="post-card__item">
        <div className="post-card__info">
          <div className="post-card__top">
            <div className="post-card__avatar"><Icon.MdLocalLibrary /></div>
            <div className="post-card__write">
              <div className="post-card__title"> {title} </div>
              <div className="post-card__date"> {formatDate(timestamp)}, by {author} in <b>{category}</b> </div>
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
          <button className="post-card__actions-item post-card--upvote" id={id} onClick={this.handleUpVote}> <Icon.MdThumbUp /></button>
          <button className="post-card__actions-item post-card--downvote"><Icon.MdThumbDown /></button>
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