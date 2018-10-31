import { getCommentsForPost, addComment } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'


// comments
export function receiveComments(postId) {
  return (dispatch) => {
    return getCommentsForPost(postId)
    .then((comments) => dispatch({
      type: RECEIVE_COMMENTS,
      comments,
    }))
  }
}


function newComment (comment) {
  return {
    type: ADD_COMMENTS,
    comment,
  } 
}

export function handleAddComment (comment) {
  return (dispatch) => {

    // dispatch(showLoading())

    return addComment({
      body: comment.body, 
      author: comment.author,
      id: comment.id,
      timestamp: comment.timestamp
    })
      .then((comment) => dispatch(newComment(comment)))
      // .then(() => dispatch(hideLoading()))
  }
}