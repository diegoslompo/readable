import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/posts'
import FormPost from './FormPost'

class EditPost extends Component {

  handleSubmit = (body, title) => {
 
    const { dispatch, post } = this.props
    const postId = post.id
    const objectNew = { postId, title, body}

    dispatch(handleEditPost(postId, objectNew))

  }

  render() {
    const { post } = this.props
    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <FormPost edit subimitText='Edit' onSubmit={this.handleSubmit} post={post} onModalClose={this.props.onModalClose}/>
        </div>
      </div>
    )
  }
}

  
export default connect()(EditPost)