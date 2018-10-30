import { getCommentsForPost } from '../utils/api'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'


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
