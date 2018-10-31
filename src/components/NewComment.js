import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import FormComment from './FormComment'

class NewComment extends Component {

  randomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  handleSubmit = (body, author) => {
    
    const { dispatch } = this.props

    const id = this.randomString()
    const timestamp = Date.now()

    const objectNew = {
      body, author, id, timestamp
    }

    dispatch(handleAddComment(objectNew))
  }

  render() {
    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <FormComment submitBtnText='Publish' onSubmit={this.handleSubmit} onModalClose={this.props.onModalClose}/>
        </div>
      </div>
    )
  }
}

  
export default connect()(NewComment)