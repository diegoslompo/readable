import {RECEIVE_POSTS} from '../actions/posts'
// import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'
console.log("esta na reducer post")

export default function posts (state={}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        // retorna porção do state vazio de inicio, recria
        ...state,
        ...action.posts 
      }
    // case TOGGLE_TWEET :
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes: action.hasLiked === true
    //         ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
    //         : state[action.id].likes.concat([action.authedUser])
    //     }
    //   }
    default:
      return state 
  }
}