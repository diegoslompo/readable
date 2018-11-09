import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormComment extends Component {
  state = {
    author: '',
    body: '',
    id: ''
  }

  componentDidMount() {
    if (this.props.comment) {
      const { author, body } = this.props.comment;
      this.setState({
        author,
        body
      });
    }
  }
  

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onForm = (e) => {
    e.preventDefault()

    const { body, author } = this.state
    const { onSubmit} = this.props

    onSubmit(body, author)

    this.closeCommentModal()
  }

  closeCommentModal = () => {
    this.props.onModalClose()
  }

  render() {
    const {body, author} = this.state
    const {submitText} = this.props

    const validate = (body !== '' && author !== '')

    return (
      
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <form onSubmit={this.onForm}>
            <input
              type="text"
              className="edit-card__input"
              placeholder="Your Name"
              value={author}
              name="author"
              disabled={this.props.edit ? "disabled" : ""}
              onChange={this.handleChange}
            />
            <textarea
              className="edit-card__textarea"
              value={body}
              name="body"
              onChange={this.handleChange}
            > </textarea>
            <button
              type="submit"
              className="edit-card__button edit-card--send"
              disabled={!validate ? 'disabled' : ''}
              >
              {submitText}
            </button>
            <button
              type="text"
              className="edit-card__button edit-card--cancel"
              onClick={this.closeCommentModal}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(FormComment)