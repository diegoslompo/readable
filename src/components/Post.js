import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-icons/md'
import { formatDate } from '../utils/helpers'
import { handleDeletePost, handleVotePost } from '../actions/posts'
import EditPost from './EditPost'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'


class Post extends Component {

  state = {
    postModalOpen: false
  }

  handleVote = (option) => {
    const { dispatch, post } = this.props
    dispatch(handleVotePost(post.id, option))
  }

  handleDelete = (e) => {
    e.preventDefault()
    const { dispatch, post } = this.props
    dispatch(handleDeletePost(post.id))
  }

  handleEdit = () => {
    this.openPostModal()
  }

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {
    const { post} = this.props

    const { postModalOpen } = this.state

    const {
      id, title, body, timestamp, author, category, voteScore, commentCount
    } = post

    return (
      <div className="post-card__item">
        <div className="post-card__info">
          <div className="post-card__top">
            <div className="post-card__avatar"><Icon.MdLocalLibrary /></div>
            <div className="post-card__write">
              <NavLink to={`/${category}/${id}`}>
                <div className="post-card__title"> {title} </div>
              </NavLink>
              <div className="post-card__date"> {formatDate(timestamp)}, by {author} in 
                <b>
                  <NavLink to={`/${category}`}>{category}</NavLink>
                </b>
              </div>
            </div>
          </div>
          <div className="post-card__description">{body}</div>
        </div>
        <div className="post-card__utils">
        <div className="post-card__util-item" onClick={this.handleEdit}><Icon.MdEdit /></div>
        <div className="post-card__util-item" onClick={this.handleDelete} ><Icon.MdDeleteSweep /></div>
        <NavLink className="post-card__util-item" to={`/${category}/${id}`}>
          <Icon.MdModeComment />
          <div className="post-card__util-comments">({commentCount})</div> 
        </NavLink>
        </div>
        <div className="post-card__actions">
          <button className="post-card__actions-item post-card--upvote" onClick={() => this.handleVote('upVote')}> <Icon.MdThumbUp /></button>
          <button className="post-card__actions-item post-card--downvote" onClick={() => this.handleVote('downVote')}><Icon.MdThumbDown /></button>
          <div className={`post-card__score ${voteScore > 0 ? 'post-card__score--up': voteScore < 0 ? 'post-card__score--down': ''}`} >{voteScore}</div>
        </div>

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          contentLabel='Modal'>
            <button className="edit-card edit-card__close" onClick={this.closePostModal}> <Icon.MdClose /> </button>
            <EditPost post={post} onModalClose={this.closePostModal} />
        </Modal>
      </div>
    )
  }
}

function mapStateToProps ({posts}, { id }) {
  
  const post = posts[id]

  return {
    post: post
  }
}


export default connect(mapStateToProps)(Post)