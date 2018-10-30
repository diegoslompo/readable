import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class DetailPost extends Component {

    render() {

        const { postIds} = this.props
        
        return (
    
            <div className="">
              <div className="">
              <div className="">
                <div className="">
                    <ul>
                        {postIds.map(post => (
                            <li key={post.id} >
                                <Post id={post.id}/>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                {/* <Post key={post.id} post={post} onDelete={this.handleDelete} /> */}
                <div className="">
                  <div className="">
                    <h2>Comments</h2>
                    {/* {comments.map(comment => (
                      <div key={comment.id}>
                        <Comments comment={comment} />
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

function mapStateToProps ({posts}, { id }) {
    const post = posts[id]
    return {
      post: post,
      postIds: Object.values(posts)
    }
  }

// function mapStateToProps ({ posts}, {match}) {

//     console.log(match)

//     return {
//         categories: Object.values(categories),
//         posts: posts,
//         postIds: Object.values(posts)

//     }
// }

export default connect(mapStateToProps)(DetailPost)