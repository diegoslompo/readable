import {RECEIVE_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, VOTE_COMMENT} from '../actions/comments'

export default function comments (state={}, action) {
  const {comment} = action

  const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

  switch (action.type) {
    case RECEIVE_COMMENTS:

      const apiComments = arrayToObject(action.comments, 'id')

      return {
        ...apiComments
        // ...state,
        // [comment.id]: comments.reduce((accu, curr) => {
        //   accu[curr.id] = curr;
        //   return accu;
        // }, {})
      }
      // return Object.assign({}, state, {[parentId]: comments})
    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          body: comment.body
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
      
    case VOTE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          voteScore: comment.voteScore
        }
      }

    default:
      return state 
  }
}
