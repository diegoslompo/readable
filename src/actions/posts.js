import { addPost, deletePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

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

// function deletePostItem (id) {
//   return {
//     type: DELETE_POST,
//     id,
//   } 
// }

// export function handleDeletePost (id) {
//   return (dispatch) => {
//     return deletePost({
//       id
//     })
//       .then((id) => dispatch(deletePostItem(id)))
//   }
// }

export function handleDeletePost (id) {
  return (dispatch) => {
    return deletePost(id)
    .then(() => dispatch({
        type: DELETE_POST,
        id
    }))
  }
}


export function handleAddPost (body, title, category, author, id, timestamp) {
  return (dispatch) => {

    // dispatch(showLoading())

    return addPost({
      body, title, category, author, id, timestamp
    })
      .then((post) => dispatch(newPost(post)))
      // .then(() => dispatch(hideLoading()))
  }
}