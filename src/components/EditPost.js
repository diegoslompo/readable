import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/posts'
import FormPost from './FormPost'

class EditPost extends Component {

  handleSubmit = (body, title) => {

    const { dispatch, post } = this.props
    const id = post.id

    // const objectNew = {
    //   title, body
    // }

    dispatch(handleEditPost(id, body, title))

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