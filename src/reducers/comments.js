import {RECEIVE_COMMENTS, ADD_COMMENTS} from '../actions/comments'

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
    case ADD_COMMENTS:
      return {
        ...state,
        [comment.id]: comment
      }

    default:
      return state 
  }
}
