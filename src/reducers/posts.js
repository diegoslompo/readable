import {RECEIVE_POSTS} from '../actions/posts'

export default function posts (state={}, actions) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        // retorna porção do state vazio de inicio, recria
        ...state,
        ...actions.posts
      }
    default:
      return state 
  }
}