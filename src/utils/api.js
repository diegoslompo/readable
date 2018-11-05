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
    getCategories(),
    getCommentsForPost()
  ]).then(([posts, categories, comments]) => ({
    posts,
    categories,
    comments,
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

export const addPost = (newPost) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ title, body, author, category, id})
    body: JSON.stringify(newPost)
  })
  .then(data => data.json())


// export const editPost = (postId, body, title) =>
//   fetch(`${api}/posts/${postId}`, {
//     method: 'PUT',
//     headers: headers,
//     body: JSON.stringify({body, title})
//   }).then(res => res.json())



 export const editPost = (postId, post) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
  .then(data => data)

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

export const addComment = (newComment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
    // body: JSON.stringify({ parentId, body, author, id: (parentId + '_' + utils.randomString(5)), timestamp:Date.now()})
  }).then(res => res.json())

export const editComment = (commentId, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({body})
  }).then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

export const voteOnComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers: {
          ...headers,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          option
      })
  }).then(res => res.json())