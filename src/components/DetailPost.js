import React, { Component } from 'react'
import {receiveComments} from '../actions/comments'
// import Post from './Post'
// import Comment from './Comment';
import { connect } from 'react-redux'

class DetailPost extends Component {

    componentDidMount() {
      this.props.dispatch(receiveComments(this.props.match.params.postId))
    }

    render() {

        const { comments} = this.props
        // debugger
        
        return (
    
            <div className="">
              <div className="">
                {/* <div className="">
                  <div className="">
                      <ul>
                          {postIds.map(post => (
                              <li key={post.id} >
                                  <Post id={post.id}/>
                              </li>
                          ))}
                      </ul>
                  </div>
                </div> */}
                {/* <Post key={post.id} post={post} onDelete={this.handleDelete} /> */}
                <div className="">
                  <div className="">
                    <h2>Comments</h2>
                    {/* {commentsIds.map(comment => (
                      <div key={comment.id}>
                        <Comment comment={comment} />
                      </div>
                    ))} */}
                  </div>
                  <div className="">
                    {/* <CommentForm parentId={this.props.match.params.postId} /> */}
                  </div>
                </div>
              </div>
            </div>
    
        )

    }
}

function mapStateToProps ({posts,comments}, {match}) {

    console.log(match)
    debugger

    return {
        // categories: Object.values(categories),
        postsIds: Object.values(posts),
        comments: comments
        // comments: comments[match.params.postId]

    }
}

export default connect(mapStateToProps)(DetailPost)