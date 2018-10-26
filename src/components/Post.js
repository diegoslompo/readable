import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-icons/md'
import { formatDate } from '../utils/helpers'
import { handleDeletePost, handleVotePost } from '../actions/posts'
import EditPost from './EditPost'
import Modal from 'react-modal'


class Post extends Component {

  state = {
    id: '',
    edit: false,
    postModalOpen: false
  }

  handleVote = (option) => {
    const { dispatch, post } = this.props
    dispatch(handleVotePost(post.id, option))
  };

  handleDelete = (e) => {
    e.preventDefault()
    const { dispatch, post } = this.props
    dispatch(handleDeletePost(post.id))
  }

  handleEdit = (e) => {
    this.openPostModal()
  };

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {
    const { post} = this.props

    if (post === null) {
      return <p></p>
    }

    const { postModalOpen } = this.state

    const {
      id, title, body, timestamp, author, category, voteScore, deleted, commentCount
    } = post

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
        <div className="post-card__util-item" onClick={this.handleEdit}><Icon.MdEdit /></div>
        <div className="post-card__util-item" onClick={this.handleDelete} ><Icon.MdDeleteSweep /></div>
        <div className="post-card__util-item">
          <Icon.MdModeComment />
          <div className="post-card__util-comments">({commentCount})</div>
        </div>
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
            <EditPost post={post} />
            {/* <div>{this.props.post}</div> */}
        </Modal>
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