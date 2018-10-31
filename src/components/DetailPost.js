import React, { Component } from 'react'
import * as Icon from 'react-icons/md'
import Modal from 'react-modal'
import {receiveComments} from '../actions/comments'
import Post from './Post'
import Comment from './Comment';
import NewComment from './NewComment';
import { connect } from 'react-redux'

class DetailPost extends Component {

    state = {
      commentModalOpen: false
    }

    openCommentModal = () => this.setState(() => ({ commentModalOpen: true }))
    closeCommentModal = () => this.setState(() => ({ commentModalOpen: false }))

    componentDidMount() {
      this.props.dispatch(receiveComments(this.props.match.params.postId))
    }

    render() {
      const { commentsIds, postsIds} = this.props
      const { commentModalOpen } = this.state
      // debugger
    
    
        // const NoDeleted = postIds.filter(post => post.deleted !== true);
        // const categoryPosts = postIds.filter(post => post.category === category && post.deleted !== true)

        // debugger
        
        return (
    
            <section>
              <div className="post-card">
                <div className="container">
                  {postsIds.map(post => (
                      <div key={post.id} ><Post id={post.id}/></div>
                  ))}
                  <div className="">
                    <div className="post-comment">
                    { commentsIds.length > 0 ? (
                      <div>
                        <div className="post-comment__title">Comments Post</div>
                        {commentsIds.map(comment => (
                          <div key={comment.id}>
                            <Comment id={comment.id}/>
                          </div>
                        ))}
                      </div>
                    ):(
                      <div>
                        <div className="post-comment__not">Not Found Comments</div>
                      </div>
                    )}
                      <div className="edit-card">
                        <button
                          className="edit-card__title"
                          onClick={this.openCommentModal}
                          > New Comment</button>
                      </div>
                    </div>
                    <Modal
                      className='modal'
                      overlayClassName='overlay'
                      isOpen={commentModalOpen}
                      contentLabel='Modal'>
                        <button className="edit-card edit-card__close" onClick={this.closeCommentModal}> <Icon.MdClose /> </button>
                        <NewComment onModalClose={this.closeCommentModal} />
                    </Modal>
                    <div className="">
                      {/* <CommentForm parentId={this.props.match.params.postId} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
        )

    }
}

function mapStateToProps ({posts,comments}, {match}) {

    const postList = Object.values(posts)
    const postParam = match.params.postId

    const post = postList.filter((post) => post.id === postParam)
    // debugger

    return {
        // categories: Object.values(categories),
        commentsIds: Object.values(comments),
        postsIds: post
        // comments: comments[match.params.postId]

    }
}

export default connect(mapStateToProps)(DetailPost)