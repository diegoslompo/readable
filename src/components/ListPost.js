import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import NewPost from './NewPost'
import * as Icon from 'react-icons/md'
import { sortPost } from '../actions/posts';
// import { handleAddPost } from '../actions/posts'
import { sortBy } from '../utils/helpers'


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
    const { postIds, post, posts, sortBy} = this.props
    const { category } = this.props.match.params
    
    const NoDeleted = postIds.filter(post => post.deleted !== true)
    const categoryPosts = postIds.filter(post => post.category === category && post.deleted !== true)
    
    
  
    const sortResult = sortBy.map(s => s.sort)

    console.log(sortResult[0])

  
    const filteredPosts = postIds.filter(post => !post.deleted && (!category || (category && post.category === category)));

    if (sortNew.length) {

      filteredPosts.sort(function(a, b) {


        let sortOrder = 1;
        let key = ''

        if (sortResult[0] === '-') {
          const sortOrder = -1;
          key = sortResult.substr(1);
        }
        
        debugger
        return sortOrder * (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0)
        
        // if (sortResult[0] === 'timestamp') {
        //   return (a > b)
        //     ? -1
        //     : 1
        // } else if (sortResult[0] === '-timestamp') {
        //   return (a > b)
        //     ? 1
        //     : -1
        // } else if (sortResult[0] === 'voteScore') {
        //   return (a > b)
        //     ? 1
        //     : -1
        // } else if (sortResult[0] === '-voteScore') {
        //   return (a > b)
        //     ? -1
        //     : 1
        // }
        //  else {
        //   return (a.voteScore > b.voteScore)
        //     ? -1
        //     : 1
        // }
      })
    }

    // let sortOrder = 1;
    // if (key[0] === '-') {
    //   sortOrder = -1;
    //   key = key.substr(1);
    // }
  
    // return function(a, b) {
    //   return sortOrder * (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
    // }

    return (
      <section>

        <select type="select" name="sort" onChange={this.handleSort}>
          <option value="">Sort By</option>
          <option value="voteScore">Score: Low to high</option>
          <option value="-voteScore">Score: High to high</option>
          <option value="-timestamp">Date: New to Old</option>
          <option value="timestamp">Date: Old to New</option>
        </select>


        {NoDeleted.length > 0 && categoryPosts.length > 0 ? (
          <div>teste dentro</div>
        ):(
          <div className="post-error__not">Not Found Posts</div>
        )}
        <div className="post-card">
          <div className="container">
            <ul>
              {filteredPosts.map(post => (<li key={post.id} ><Post id={post.id}/></li>))
              }
            </ul>
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
