export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export const sortBy = key => {
  let sortOrder = 1;
  if (key[0] === '-') {
    sortOrder = -1;
    key = key.substr(1);
  }

  return function(a, b) {
    return sortOrder * (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
  }
}
  
//   export function formatTweet (tweet, author, authedUser, parentTweet) {
//     const { id, likes, replies, text, timestamp } = tweet
//     const { name, avatarURL } = author
  
//     return {
//       name,
//       id,
//       timestamp,
//       text,
//       avatar: avatarURL,
//       likes: likes.length,
//       replies: replies.length,
//       hasLiked: likes.includes(authedUser),
//       parent: !parentTweet ? null : {
//         author: parentTweet.author,
//         id: parentTweet.id,
//       }
//     }
//   }