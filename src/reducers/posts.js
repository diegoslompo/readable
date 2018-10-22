import {RECEIVE_POSTS, ADD_POST} from '../actions/posts'
// import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export default function posts (state={}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        // retorna porção do state vazio de inicio, recria
        ...state,
        ...action.posts 
      }
    case ADD_POST :
      const { post } = action
        // [tweet.replyingTo]: {
        //   ...state[tweet.replyingTo],
        //   replies: state[tweet.replyingTo].replies.concat([tweet.id])
        // }
      return {
        ...state,
        [post.id]: post
      }

      // ...state,
      // posts: [...state.posts, action.post]

    default:
      return state 
  }
}