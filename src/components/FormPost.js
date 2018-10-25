import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormPost extends Component {
  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    id: '',
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
  

  handleChangeTitle = (e) => {
    const title = e.target.value
    this.setState(() => ({
      title
    }))
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
  handleChangeCategory = (e) => {
    const category = e.target.value
    this.setState(() => ({
      category
    }))
  }

  onForm = (e) => {
    e.preventDefault()

    const { body, title, category, author } = this.state
    const { onSubmit, onModal } = this.props

    // onSubmit({body:body, title: title, category:category, author: author}) 
    onSubmit(body, title, category, author) 
    // onModal({modal:false}) 

    this.setState(() => ({
      title: '',
      author: '',
      body: '',
      category: '',
    }))
  }

  render() {
    const { categories, post} = this.props

    // const {body, title, category, author } = postProps || postState
    // const {body, title, category, author } = post || this.state
    const {body, title, category, author } = this.state

    return (
      <div className="edit-card">
        <div className="edit-card__wrapper">
          <form onSubmit={this.onForm}>
            <input
              type="text"
              className="edit-card__input"
              placeholder="Title"
              value={title}
							onChange={this.handleChangeTitle}
            />
            <input
              type="text"
              className="edit-card__input"
              placeholder="Your Name"
              value={author}
              onChange={this.handleChangeAuthor}
              required
            />
            <select
              className="edit-card__select"
              value={category}
              onChange={this.handleChangeCategory}
              >
              {categories && categories.map((category) => (
                <option className="edit-card__option" key={category.path}>{category.name}</option>
              ))}
            </select>
            <textarea
              className="edit-card__textarea"
              value={body}
              onChange={this.handleChangeBody}
            > </textarea>
            <button
              type="submit"
              className="edit-card__button edit-card--send"
              disabled={body === ''}>
              Submit
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