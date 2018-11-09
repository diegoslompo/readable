import {SORT_POST} from '../actions/posts'

export default function sortPostsBy(state={}, action) {
  switch (action.type) {
    case SORT_POST:
      return {
        ...state,
        sortBy: action.sort
    }
    default:
      return state;
  }
}