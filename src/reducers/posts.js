import {RECEIVE_POSTS, ADD_POST, DELETE_POST, EDIT_POST, VOTE_POST} from '../actions/posts'
import {ADD_COMMENT, DELETE_COMMENT} from '../actions/comments'

export default function posts (state={}, action) {

  const { post, comment} = action

  const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

  switch (action.type) {
    case RECEIVE_POSTS:
      const apiPosts = arrayToObject(action.posts, 'id')

      return {
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

    case ADD_COMMENT:
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          commentCount: state[comment.parentId].commentCount + 1
        }
      }

    case DELETE_COMMENT:
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          commentCount: state[comment.parentId].commentCount - 1
        }
      }
  
    default:
      return state 
  }
}
