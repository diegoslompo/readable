import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'

class NewTweet extends Component {
  state = {
    text: '',
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
      text: ''
    }))
  }
  render() {
    const { text } = this.state

    {/* todo: Redirect to / if submitted */}

    // const tweetLeft = 280 - text.length

    return (
      <div className="edit-card">
        <div className="container">
          <div className="edit-card__wrapper">
            <legend className="edit-card__title">Create your post</legend>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="edit-card__input"
                placeholder="Title"
                value={title}
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="edit-card__input"
                placeholder="Your Name"
                value={author}
                onChange={this.handleChange}
              />
              <select
                className="edit-card__select"
                value={body}
                onChange={this.handleChange}
              >
                <option className="edit-card__option">Category</option>
              </select>
              <textarea
                className="edit-card__textarea"
                value={body}
                onChange={this.handleChange}
              > </textarea>

              <button
                className='btn'
                type='submit'
                disabled={text === ''}>
                  Submit
              </button>
              <button
                type="submit"
                className="edit-card__button edit-card--send"
                disabled={text === ''}>
                Submit
              </button>
              <button
                type="text"
                className="edit-card__button edit-card--cancel"
                disabled={text === ''}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewPost)