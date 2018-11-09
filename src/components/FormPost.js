import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormPost extends Component {
  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    id: ''
  }

  componentDidMount() {
    if (this.props.post) {
      const { author, title, category, body } = this.props.post;
      this.setState({
        author,
        title,
        category,
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

    const { body, title, category, author } = this.state
    const { onSubmit } = this.props

    onSubmit(body, title, category, author)

    this.closePostModal()
  }

  closePostModal = () => {
    this.props.onModalClose()
  }

  render() {
    const { categories, subimitText} = this.props
    const {body, title, category, author } = this.state

    const validate = (category !== '' && title !== '' && body !== '' && author !== '')

    return (
      
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <form onSubmit={this.onForm}>
            <input
              type="text"
              className="edit-card__input"
              placeholder="Title"
              value={title}
              name='title'
							onChange={this.handleChange}
            />
            <input
              type="text"
              className="edit-card__input"
              placeholder="Your Name"
              value={author}
              name='author'
              disabled={this.props.edit ? "disabled" : ""}
              onChange={this.handleChange}
            />
            <select
              className="edit-card__select"
              value={category}
              name='category'
              onChange={this.handleChange}
              disabled={this.props.edit ? "disabled" : ""}
              >
              <option value="">Select category</option>
              {categories && categories.map((category) => (
                <option className="edit-card__option" key={category.path} >{category.name}</option>
              ))}
            </select>
            <textarea
              className="edit-card__textarea"
              value={body}
              name='body'
              onChange={this.handleChange}
            > </textarea>
            <button
              type="submit"
              className="edit-card__button edit-card--send"
              disabled={!validate ? 'disabled' : ''}
              >
              {subimitText}
            </button>
            <button
              type="text"
              className="edit-card__button edit-card--cancel"
              onClick={this.closePostModal}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories: Object.values(categories)
  }
}

export default connect(mapStateToProps)(FormPost)