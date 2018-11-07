import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import NewPost from './NewPost'
import * as Icon from 'react-icons/md'
import { sortPost } from '../actions/posts';
import { NavLink } from 'react-router-dom'


class ListPost extends Component {

  state = {
    postModalOpen: false,
    sortNew: {}
  }

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))


  handleSort = (event, sort) => {
    let selectValue = event.target.value
    const { dispatch} = this.props
    const sortValue = { sort: selectValue }
    
    dispatch(sortPost(sortValue))
    // debugger


    this.setState(() => ({ sortNew: selectValue }))
  }
  
  render() {
    
    const { postModalOpen, sortNew } = this.state
    const { postIds, categories, sortBy} = this.props
    const { category } = this.props.match.params
    
    const NoDeleted = postIds.filter(post => post.deleted !== true)
    const categoryPosts = postIds.filter(post => post.category === category && post.deleted !== true)
    
    
  
    const sortResult = sortBy.map(s => s.sort)
    const sortVal = sortResult[0]
  
    const filteredPosts = postIds.filter(post => !post.deleted && (!category || (category && post.category === category)));

    if (sortNew.length) {
      filteredPosts.sort(function(a, b) {

        switch(sortVal) {
          case 'timestamp':
           return a.timestamp < b.timestamp ? -1 : 1
          case '-timestamp':
           return a.timestamp > b.timestamp ? -1 : 1
          case 'voteScore':
           return a.voteScore < b.voteScore ? -1 : 1
          case '-voteScore':
           return a.voteScore > b.voteScore ? -1 : 1
        }
      })
    }

    return (
      <section>
        <div className="container">
          <div className="header__right">
            <ul className="header__categories">
              {categories.map((item) => (
                <li className="header__category" key={item.name} >
                  <NavLink to={`/category/${item.path}`}>{item.name}</NavLink>
                </li>
              ))}
              <li className="header__category">
                <NavLink to="/"><b>Show All</b></NavLink>
              </li>
            </ul>
            <select className="header__filter" onChange={this.handleSort}>
              <option value="">Sort By</option>
              <option value="voteScore">Score: Low to high</option>
              <option value="-voteScore">Score: High to high</option>
              <option value="-timestamp">Date: New to Old</option>
              <option value="timestamp">Date: Old to New</option>
            </select>
          </div>     
        </div>

        <div className="post-card">
          <div className="container">
            {
              filteredPosts.length > 0 ? 
                filteredPosts.map(post => (<div key={post.id} ><Post id={post.id}/></div>))
                :(
                  <div>
                    <div className="post-comment__not-post">Sorry 0 Posts :/ </div>
                  </div>
                )
            }

          </div>
        </div>
        <div className="container"> 
          <div className="edit-card">
            <button
              className="edit-card__title"
              onClick={this.openPostModal}
              > Create your post</button>
          </div>
          <Modal
            className='modal'
            overlayClassName='overlay'
            isOpen={postModalOpen}
            contentLabel='Modal'>
              <button className="edit-card edit-card__close"onClick={this.closePostModal}> <Icon.MdClose /> </button>
              <NewPost onModalClose={this.closePostModal} />
          </Modal>
        </div>
      </section>
    )
  }
}



function mapStateToProps ({ post, posts, categories, sortPostsBy, sortBy}, {match}) {

  console.log(match)
  // debugger
  
  const sortNew = sortBy
  
  return {
    categories: Object.values(categories),
    posts: posts,
    postIds: Object.values(posts),
    sortPostsBy,
    sortBy: Object.values(sortNew)
      // .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(ListPost)
