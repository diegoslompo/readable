import {RECEIVE_POSTS, ADD_POST, DELETE_POST, EDIT_POST, VOTE_POST} from '../actions/posts'

export default function posts (state={}, action) {

  const { post, posts} = action

  const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

  switch (action.type) {
    case RECEIVE_POSTS:
      const apiPosts = arrayToObject(action.posts, 'id')

      return {
        // retorna porção do state vazio de inicio, recria
        ...apiPosts

      }
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      }

    case EDIT_POST:
      return {
        ...state,
        [post.postId]: {
          ...state[post.postId],
          title: post.title,
          body: post.body
        }
      }

    case DELETE_POST:
      return {
        ...state,
        [post.id]: post
      }
      
    case VOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: post.voteScore
        }
      }
  
    default:
      return state 
  }
}