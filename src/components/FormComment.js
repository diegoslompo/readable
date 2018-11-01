import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormComment extends Component {
  state = {
    author: '',
    body: '',
    id: ''
  }

  // author,body,deleted,id,parentDeleted,parentId,timestamp,voteScore

  componentDidMount() {
    if (this.props.comment) {
      const { author, body } = this.props.comment;
      this.setState({
        author,
        body
      });
    }
  }
  

  handleChangeAuthor = (e) => {
    const author = e.target.value
    this.setState(() => ({
      author
    }))
  }
  handleChangeBody = (e) => {
    const body = e.target.value
    this.setState(() => ({
      body
    }))
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

    return (
      
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <form onSubmit={this.onForm}>
            <input
              type="text"
              className="edit-card__input"
              placeholder="Your Name"
              value={author}
              disabled={this.props.edit ? "disabled" : ""}
              onChange={this.handleChangeAuthor}
            />
            <textarea
              className="edit-card__textarea"
              value={body}
              onChange={this.handleChangeBody}
            > </textarea>
            <button
              type="submit"
              className="edit-card__button edit-card--send"
              disabled={body === '' && author === '' ? 'disable' : ''}
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

// function mapStateToProps ({categories}) {
//   return {
//     categories: Object.values(categories)
//   }
// }

export default connect()(FormComment)