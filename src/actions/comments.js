import { getCommentsForPost, addComment, editComment, deleteComment, voteOnComment } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENTS'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'


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
    type: ADD_COMMENT,
    comment,
  } 
}

export function handleAddComment (comment) {
  return (dispatch) => {
    return addComment({
      body: comment.body, 
      author: comment.author,
      id: comment.id,
      timestamp: comment.timestamp,
      parentId: comment.parentId
    })
      .then((comment) => dispatch(newComment(comment)))
  }
}

export function handleEditComment(commentId, body) {
  return (dispatch) => {
    return editComment(commentId, body)
    .then((comment) => dispatch({
        type: EDIT_COMMENT,
        comment,
        commentId
    }))
  }
}

export function handleDeleteComment (id) {
  return (dispatch) => {
    return deleteComment(id)
    .then((comment) => dispatch({
        type: DELETE_COMMENT,
        comment
    }))
  }
}

export function handleVoteComment (id, option) {
  return (dispatch) => {
    return voteOnComment(id, option)
    .then((comment) => dispatch({
        type: VOTE_COMMENT,
        comment,
        id,
        option
    }))
  }
}