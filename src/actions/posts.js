export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

// function toggleTweet ({ id, authedUser, hasLiked }) {
//   return {
//     type: TOGGLE_TWEET,
//     id,
//     hasLiked
//   }
// }
//   export function handleToggleTweet (info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info))
//       return saveLikeToggle(info)
//       .catch((e) => {
//         console.warn('Error in handleToggleTweet: ', e)
//         dispatch(toggleTweet(info))
//         alert('The was an error liking the tweet. Try again.')
//       })
//   }
// } 