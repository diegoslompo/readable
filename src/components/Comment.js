import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'


import { handleDeletePost, handleVotePost } from '../actions/posts'
import * as Icon from 'react-icons/md'
import Modal from 'react-modal'
// import * as Icon from 'react-icons/md'
// import { formatDate } from '../utils/helpers'
// // import { handleDeletePost, handleVotePost } from '../actions/posts'
// // import EditPost from './EditPost'
// import { NavLink } from 'react-router-dom'
// import Modal from 'react-modal'


class Comment extends Component {

  // state = {
  //   id: '',
  //   edit: false,
  //   postModalOpen: false
  // }

  // handleVote = (option) => {
  //   const { dispatch, post } = this.props
  //   dispatch(handleVotePost(post.id, option))
  // };

  // handleDelete = (e) => {
  //   e.preventDefault()
  //   const { dispatch, post } = this.props
  //   dispatch(handleDeletePost(post.id))
  // }

  // handleEdit = (e) => {
  //   this.openPostModal()
  // };

  // openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  // closePostModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {
    const {comment} = this.props

    // // if (post === null) {
    // //   return <p></p>
    // // }

    // const { postModalOpen } = this.state

    const { author,body,deleted,id,parentDeleted,parentId,timestamp,voteScore } = comment

    return (
      <div className="post-card__item">
        <div className="post-card__info">
          <div className="post-card__top">
            <div className="post-card__write">
              <div className="post-card__date"> {formatDate(timestamp)}, by {author} </div>
            </div>
          </div>
          <div className="post-card__description">{body}</div>
        </div>
        <div className="post-card__utils">
          <div className="post-card__util-item" onClick={this.handleEdit}><Icon.MdEdit /></div>
          <div className="post-card__util-item" onClick={this.handleDelete} ><Icon.MdDeleteSweep /></div>
        </div>
        <div className="post-card__actions">
          <button className="post-card__actions-item post-card--upvote" onClick={() => this.handleVote('upVote')}> <Icon.MdThumbUp /></button>
          <button className="post-card__actions-item post-card--downvote" onClick={() => this.handleVote('downVote')}><Icon.MdThumbDown /></button>
          <div className={`post-card__score ${voteScore > 0 ? 'post-card__score--up': voteScore < 0 ? 'post-card__score--down': ''}`} >{voteScore}</div>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({comments}, { id }) {
  
  const comment = comments[id]

  return {
    comment: comment
  }
}

export default connect(mapStateToProps)(Comment)