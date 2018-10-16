import { voteOnPost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_VOTED = 'POST_VOTED'
// export const TRIGER_POST = 'TRIGER_POST'
// export const TRIGER_DOWN = 'TRIGER_DOWN'


export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

//posts

export const upVotePost = (id) => dispatch => (
  voteOnPost(id, "upVote")
    .then(() => {
      dispatch({
        type: POST_VOTED,
        id
      })
    })
)

// export const upVotePost = (postId, option) => dispatch => (
//   voteOnPost(postId, option)
//     .then((post) => {
//       dispatch({
//         type: POST_VOTED,
//         post
//       })
//     })
// );


// export const voteOnPost = (postId, isUpVote) => dispatch => {
//   dispatch(loadingData(true))
//   return API.voteOnPost(postId, isUpVote).then((post) => {
//     dispatch({type: ACTIONS.POST_VOTED, post})
//     dispatch(loadingData(false))
//   })
// }




// function toggleTweet ({ id, authedUser, hasLiked }) {
//   return {
//     type: POST_VOTED,
//     id,
//     authedUser,
//     hasLiked
//   }
// }

// export function handleToggleTweet (info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info))

//     return saveLikeToggle(info)
//       .catch((e) => {
//         console.warn('Error in handleToggleTweet: ', e)
//         dispatch(toggleTweet(info))
//         alert('The was an error liking the tweet. Try again.')
//       })
//   }
// }



// export const downVotePost = (id) => dispatch => (
//   voteOnPost(id, downVote)
//       .then(post => dispatch({
//           type: DOWN_VOTE_POST,
//           post
//       }))
// );

// export const upVotePost = (id) => dispatch => (
//   voteOnPost(id, "upVote")
//       .then(post => dispatch({
//           type: POST_VOTED,
//           post
//       }))
// )


// const votePost = (post) => {
//   return {
//     type: POST_VOTED,
//     post
//   }
// }

// export const sendPostVote = (postId, thumbsUp) => {
//   return dispatch => {
//    fetch(`${api}posts/${postId}`, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify({
//           option: thumbsUp
//         })
//       })
//     .then(res => {
//       if (!res.ok) {
//         throw res
//       } else  return res.json()
//     })
//     .then(post => dispatch(votePost(post)))
//     .catch( error => showError(error));
//   }
// }

// export function handleTrigerPost (id) {
//   return (dispatch) => {
//     dispatch(trigerPost(id))
//      return voteOnPost(id, "upVote")
//       // dispatch(loadingData(true))
//     // return voteOnPost(postId, upVote).then((post) => {
//     //   debugger
//     //   dispatch({
//     //     type: POST_VOTED,
//     //     post
//     //   })
//     //   // dispatch(loadingData(false))
//     // })
//   }
// }

// export function votePost(id, votes) {
//   return {
//       type: POST_VOTED,
//       votes,
//       id
//   }
// }

// export function handleTrigerPost (info) {
//   return (dispatch) => {
//     dispatch(trigerPost(info))
//       return voteOnPost(info)
//       .catch((e) => {
//         console.warn('Error in handleTrigerPost: ', e)
//         dispatch(trigerPost(info))
//         alert('The was an error liking the post. Try again.')
//       })
//   }
// } 