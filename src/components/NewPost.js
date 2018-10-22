import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'

class NewPost extends Component {
  state = {
    title: '',
    selectedCategory: '',
    author: '',
    body: '',
    id: '',
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


  handleSubmit = (e) => {
    e.preventDefault()

    const { body, title, category, author } = this.state
    const { dispatch, id} = this.props

    

    dispatch(handleAddPost(body, title, category, author, id))

    this.setState(() => ({
      body: '',
      title: '',
      category: '',
      author: '',
    }))

  //   const newObject = {
  //     id: randomString(),
  //     timestamp: Date.now(),
  //     body,
  //     title,
  //     category,
  //     author
  //   }
  
}
randomString = (length) => {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

  render() {
    const { categories } = this.props
    const { body, title, category, author } = this.state

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
                onChange={this.handleChangeTitle}
              />
              <input
                type="text"
                className="edit-card__input"
                placeholder="Your Name"
                value={author}
                onChange={this.handleChangeAuthor}
              />
              <select
                className="edit-card__select"
                value={category}
                onChange={this.handleChangeCategory}>
                {categories && categories.map((category) => (
                  <option className="edit-card__option" key={category.path}>{category.name}</option>
                ))}
              </select>
              {/* <select value={category} onChange={this.handleChangeCategory}>
                <option> category 1</option>
                <option> category 2</option>
              </select> */}
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
                disabled={body === ''}>
                Submit
              </button>
            </form>
          </div>
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

export default connect(mapStateToProps)(NewPost)