// import { getAllPosts } from '../utils/api'
// import {receivePosts} from '../actions/posts'
// import { showLoading, hideLoading } from 'react-redux-loading'
// // import {receivePosts} from '../actions/comments'

// export function handleInitialData () {
//   return(dispatch) => {
//     return getAllPosts() 
//       .then(({posts}) => {
//         dispatch(receivePosts(posts))
//         // dispatch(receiveComments(comments))
//         dispatch(hideLoading())
//         dispatch(showLoading())
//       })
//   }
// }

import { getInitialData } from '../utils/api'
import {receivePosts} from '../actions/posts'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return(dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({posts}) => {
        dispatch(receivePosts(posts))
        // // dispatch(receiveComments(comments))
        dispatch(hideLoading())
        // dispatch(showLoading())
      })
  }
}
