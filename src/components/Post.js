import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-icons/md'
import { formatDate } from '../utils/helpers'
import { handleDeletePost, handleVotePost } from '../actions/posts'
// import { handleTrigerPost } from '../actions/posts'

class Post extends Component {

  state = {
    id: '',
    edit: false,
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

  handleEdit = () => {
    // this.setState({
    //   edit: !this.state.edit
    // });
  };

  render() {
    const { post} = this.props

    // if (post === null) {
    //   return <p>This Post doesn't exist</p>
    // }

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
          <div className="post-card__score">{voteScore}</div>
        </div>

        {/* <Modal show={this.state.edit} toggle={this.toggleEdit} onClose={this.toggleEdit}>
          <PostForm edit post={this.props.post} onClose={this.toggleEdit} />
        </Modal> */}

        {/* <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          contentLabel='Modal'>
            <button className="edit-card edit-card__close"onClick={this.closePostModal}> <Icon.MdClose /> </button>
            <FormPost post={post}/>
        </Modal> */}
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