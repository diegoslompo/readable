import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import FormPost from './FormPost'

class NewPost extends Component {

  randomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  handleSubmit = (body, title, category, author) => {



    const { dispatch } = this.props
    const id = this.randomString()
    const timestamp = Date.now()

    const objectNew = {
      title, body, author, category , id, timestamp
    }

    dispatch(handleAddPost(objectNew))
  }

  render() {
    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <FormPost submitBtnText='Publish' onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

  
export default connect()(NewPost)