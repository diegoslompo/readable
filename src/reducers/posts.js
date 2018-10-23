import {RECEIVE_POSTS, ADD_POST, DELETE_POST} from '../actions/posts'
// import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export default function posts (state={}, action) {
  const { post } = action
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        // retorna porção do state vazio de inicio, recria
        ...state,
        ...action.posts 
      }
    case ADD_POST :
      return {
        ...state,
        [post.id]: post
      }
    case DELETE_POST :
      return state.filter(obj => obj.id !== action.id);
      // return {
      //   ...state,
      //   // [action.id]: post
      //   // post: [...state.post.filter(item => item.id !== action.id)]
      // }

    default:
      return state 
  }
}