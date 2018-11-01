import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import NewPost from './NewPost'
import * as Icon from 'react-icons/md'


class ListPost extends Component {

  state = {
    postModalOpen: false
  }

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {

    const { postModalOpen } = this.state
    const { postIds} = this.props
    const { category } = this.props.match.params

    const NoDeleted = postIds.filter(post => post.deleted !== true);
    const categoryPosts = postIds.filter(post => post.category === category && post.deleted !== true)


    return (
      <section>
        {NoDeleted.length > 0 && categoryPosts.length > 0 ? (
          <div>teste dentro</div>
        ):(
          <div className="post-error__not">Not Found Posts</div>
        )}
        <div className="post-card">
          <div className="container">
            <ul>
              {!category
                ? NoDeleted.map(post => (<li key={post.id} ><Post id={post.id}/></li>))
                : categoryPosts.map(post => (<li key={post.id} ><Post id={post.id}/></li>))
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



function mapStateToProps ({ posts, categories}, {match}) {

  console.log(match)
  // debugger

  return {
    categories: Object.values(categories),
    posts: posts,
    postIds: Object.values(posts)
      // .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(ListPost)
