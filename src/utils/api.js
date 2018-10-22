const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function getInitialData () {
  return Promise.all([
    getAllPosts(),
    getCategories()
  ]).then(([posts, categories]) => ({
    posts,
    categories
  }))
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCommentsForPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// export const addPost = (title, body, author, category) =>
//   fetch(`${api}/posts`, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({ title, body, author, category, id: randomString(20), timestamp:Date.now()})
//   }).then(res => res.json())

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const addPost = (newPost) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ title, body, author, category, id: generateUID(), timestamp:Date.now()})
    body: JSON.stringify(newPost)
  })
  .then(data => data.json())

  
// export function randomString(length) {
//   return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
// }

export const editPost = (postId, title, body) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({ title, body})
  }).then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
  .then(data => data)

// export const voteOnPost = (postId, thumbsUp) =>
//   fetch(`${api}/posts/${postId}`, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({'option': thumbsUp? 'upVote' : 'downVote'})
//   }).then(res => res.json())

export const voteOnPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
      method: 'POST',
      headers: {
          ...headers,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          option
      })
  }).then(res => res.json())

export const addComment = (body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    // body: JSON.stringify({ parentId, body, author, id: (parentId + '_' + utils.randomString(5)), timestamp:Date.now()})
  }).then(res => res.json())

export const editComment = (commentId, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({timestamp:Date.now(), body})
  }).then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

export const voteOnComment = (commentId, thumbsUp) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option: thumbsUp? 'upVote' : 'downVote'})
  }).then(res => res.json())