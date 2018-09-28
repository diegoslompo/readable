import {getInitialApi} from '../utils/api'
import {receivePosts} from '../actions/posts'
import {receivePosts} from '../actions/comments'

export function handleInitialData () {
  return(dispatch) => {
    return getInitialData() 
      .then(({posts, comments}) => {
        dispatch(receivePosts(posts))
        dispatch(receiveComments(comments))
      })
  }
}
