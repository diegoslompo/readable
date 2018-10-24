import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/posts'
import FormPost from './FormPost'

class EditPost extends Component {

  handleSubmit = (body, title) => {

    const { dispatch, post } = this.props
    const postId = post.id

    dispatch(handleEditPost(postId, body, title))

  }

  render() {
    const { post} = this.props
    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <FormPost submitBtnText='Publish' onSubmit={this.handleSubmit} post={post}/>
        </div>
      </div>
    )
  }
}

  
export default connect()(EditPost)