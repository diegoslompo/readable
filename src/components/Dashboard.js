import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Post from './Post'
import * as DashboardAPI from '../utils/api'

// class Dashboard extends Component {
//   render() {
//     return (
//       <div>
//         <h3 className='center'>Your Timeline</h3>
//         <ul className='dashboard-list'>
//           {this.props.postIds.map((id) => (
//             <li key={id}>
//               <Post id={id}/>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }



class Dashboard extends Component {
  
  state = {
    posts: [], 
  }

  
  //get books the server API use the async + await
  async componentDidMount() {
    const posts = await DashboardAPI.getAllPosts()
    this.setState({ posts })
  }

  render() {

    const {posts} = this.state

    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {posts.map((p) => (
            <li key={p.id}>
              <a>{p.title}</a>
              {/* <Post id={p}/> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// function mapStateToProps ({ posts }) {
//   return {
//     postIds: Object.keys(posts)
//       .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
//   }
// }

// export default connect(mapStateToProps)(Dashboard)
export default Dashboard