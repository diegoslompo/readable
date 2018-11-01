import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditComment } from '../actions/comments'
import FormComment from './FormComment'

class EditComment extends Component {

  handleSubmit = (body) => {
 
    const { dispatch, comment } = this.props
    const commentId = comment.id

    dispatch(handleEditComment(commentId, body))

  }

  render() {

    const { comment } = this.props
    
    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <FormComment edit submitText='Edit' onSubmit={this.handleSubmit} comment={comment} onModalClose={this.props.onModalClose}/>
        </div>
      </div>
    )
  }
}

  
export default connect()(EditComment)