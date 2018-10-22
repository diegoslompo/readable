import { addPost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'

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

export function handleAddPost (body,title,author, category) {
  return (dispatch) => {

    // dispatch(showLoading())

    return addPost({
      body,
      title,
      category,
      author
    })
      .then((post) => dispatch(newPost(post)))
      // .then(() => dispatch(hideLoading()))
  }
}