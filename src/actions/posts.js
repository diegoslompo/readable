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

function deletePostItem (post) {
  return {
    type: DELETE_POST,
    post,
  } 
}

export function handleDeletePost (id) {
  return (dispatch) => {
    return deletePost({
      id
    })
      .then((post) => dispatch(deletePostItem(post)))
  }
}

export function handleAddPost (body,title,author, category, id, timestamp) {
  return (dispatch) => {

    // dispatch(showLoading())

    return addPost({
      id,
      timestamp,
      body,
      title,
      category,
      author
    })
      .then((post) => dispatch(newPost(post)))
      // .then(() => dispatch(hideLoading()))
  }
}