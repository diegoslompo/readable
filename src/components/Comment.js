import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import * as Icon from 'react-icons/md'
import Modal from 'react-modal'
import EditComment from './EditComment'
import { handleDeleteComment, handleVoteComment} from '../actions/comments'

class Comment extends Component {

  state = {
    commentModalOpen: false
  }

  handleVote = (option) => {
    const { dispatch, comment } = this.props
    dispatch(handleVoteComment(comment.id, option))
  }

  handleDelete = (e) => {
    e.preventDefault()

    const { dispatch, comment } = this.props
    dispatch(handleDeleteComment(comment.id))
  }

  handleEdit = () => {
    this.openCommentModal()
  };

  openCommentModal = () => this.setState(() => ({ postModalOpen: true }))
  closeCommentModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {
    const {comment} = this.props

    const { postModalOpen } = this.state

    const { author,body,timestamp,voteScore } = comment

    return (
      <div className="post-card__item">
        <div className="post-card__info">
          <div className="post-card__top">
            <div className="post-card__write">
              <div className="post-card__date"><b> {author} </b> </div>
              <div className="post-card__date"> {formatDate(timestamp)}</div>
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

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          contentLabel='Modal'>
            <button className="edit-card edit-card__close" onClick={this.closeCommentModal}> <Icon.MdClose /> </button>
            <EditComment comment={comment} onModalClose={this.closeCommentModal} />
        </Modal>
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