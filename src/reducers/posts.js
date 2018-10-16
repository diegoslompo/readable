import {RECEIVE_POSTS, POST_VOTED} from '../actions/posts'
// import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export default function posts (state={}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        // retorna porção do state vazio de inicio, recria
        ...state,
        ...action.posts 
      }
    // case TRIGER_POST :
    //   return {
    //     ...state,
    //     [action.id]: action
    //   }
    
    case POST_VOTED: {
      // const {id, votes} = action;
      // const {posts} = action;

      // return state.map((post) => post.id === action.post.id ? action.post : post )
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          posts: action.type === true
            ? state[action.id].type.filter((uid) => uid !== action.id)
            : 'teste'
        }
        // posts: state.posts.filter(post => post.id !== action.post.id ? action.post : post)
        // posts: state.map((post) => post.id === action.post.id ? action.post : post )
      }
      // ...state,
      // posts: sortPostsBy(
      //     state.posts
      //         .filter(post => post.id !== action.post.id)
      //         .concat(action.post),
      //     state.sortBy)

        // posts: action.posts.filter(post => post.id)
        // posts: state.posts.filter(post => post.id !== action.post.id).concat(action.post)
      // }
    }
    default:
      return state 
  }
}