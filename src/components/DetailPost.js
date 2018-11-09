import React, { Component } from 'react'
import * as Icon from 'react-icons/md'
import Modal from 'react-modal'
import {receiveComments} from '../actions/comments'
import Post from './Post'
import Comment from './Comment';
import NewComment from './NewComment';
import NotFound from './NotFound';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
      const { commentsIds, postsIds, postParam} = this.props
      const { commentModalOpen } = this.state
    
      const NoDeletedComment = commentsIds.filter(comment => comment.deleted !== true)
      const NoDeletedPost = postsIds.filter(post => post.deleted !== true)
        
        return (
            <section>
              {postsIds.length > 0 ? (
                <div className="post-card__comment">
                  <div className="container">
                    {NoDeletedPost.length > 0 ?
                      NoDeletedPost.map(post => (
                        <div key={post.id} ><Post id={post.id}/></div>
                    )):
                    this.props.history.push('/')
                    }
                    <div>
                      <div className="post-comment">
                        <div className="post-comment__home">
                          <NavLink to={`/`}>← back to home</NavLink>
                        </div>
                        <div>
                          <div className="post-comment__title">Comments Post</div>
                          {NoDeletedComment.length > 0 ?
                            NoDeletedComment.map(comment => (
                            <div key={comment.id}>
                              <Comment id={comment.id}/>
                            </div>
                          )): (
                            <div>
                              <div className="post-comment__not">Sorry 0 Comments :/</div>
                            </div>
                          )}
                        </div>
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
                          <NewComment onModalClose={this.closeCommentModal} parentId={postParam} />
                      </Modal>
                    </div>
                  </div>
                </div>
              ):(
                <NotFound/>
              )}
              
            </section>
    
        )

    }
}

function mapStateToProps ({posts,comments}, {match}) {

    const postList = Object.values(posts)
    const postParam = match.params.postId

    const post = postList.filter((post) => post.id === postParam)

    return {
        commentsIds: Object.values(comments),
        postsIds: post,
        postParam

    }
}

export default connect(mapStateToProps)(DetailPost)