import React, { Component } from 'react'
import { connect } from 'react-redux'

class Category extends Component {

  render() {

    const {category} = this.props

    const { path, name } = category

    return (
      <div>
        <a href={path}>{name}</a>
      </div>
    )
  }
}

function mapStateToProps ({categories}) {
  const category = categories

  return {
    category: category
  }
}

// export default Post

export default connect(mapStateToProps)(Category)