import { getInitialData } from '../utils/api'
import {receivePosts} from '../actions/posts'
import {receiveCategories} from '../actions/categories'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return(dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({posts, categories}) => {
        dispatch(receivePosts(posts))
        dispatch(receiveCategories(categories))
        dispatch(hideLoading())
      })
  }
}
