import { addPost, editPost, deletePost, voteOnPost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function newPost (post) {
  return {
    type: ADD_POST,
    post,
  } 
}

export function handleAddPost (post) {
  return (dispatch) => {
    debugger
    // dispatch(showLoading())

    return addPost({
      body: post.body, 
      title: post.title,
      category: post.category,
      author: post.author,
      id: post.id,
      timestamp: post.timestamp
    })
      .then((post) => dispatch(newPost(post)))
      // .then(() => dispatch(hideLoading()))
  }
}

// function newEditPost (post) {
//   return {
//     type: EDIT_POST,
//     post,
//   } 
// }

// export function handleEditPost(postId, post) {
//   return (dispatch) => {
//     debugger
//     return editPost(
//       postId,
//       {
//         body: post.body, 
//         title: post.title,
//         category: post.category,
//         author: post.author,
//         id: post.postId,
//         timestamp: post.timestamp
//     })
//       .then(() => dispatch(newEditPost(post)))
//   }
// }

export function handleEditPost(postId, post) {
  debugger
  return (dispatch) => {
    return editPost(postId, { body: post.body, title: post.title })
    .then(() => dispatch({
        type: EDIT_POST,
        post,
        postId
    }))
  }
}


export function handleDeletePost (id) {
  return (dispatch) => {
    return deletePost(id)
    .then((post) => dispatch({
        type: DELETE_POST,
        post
    }))
  }
}

export function handleVotePost (id, option) {
  return (dispatch) => {
    return voteOnPost(id, option)
    .then((post) => dispatch({
        type: VOTE_POST,
        post,
        id,
        option
    }))
  }
}