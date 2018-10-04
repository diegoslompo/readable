import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import * as Icon from 'react-icons/md'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <ul className='dashboard-list'>
          {this.props.postIds.map((id) => (
            <li key={id}>
              <Post id={id}/>
            </li>
          ))}
        </ul> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a href="" className="header__logo">
                  <Icon.MdFilterDrama />
                  <div className="header--title">ReadAble</div>
                
                  {/* <img src={logo} className="App-logo" alt="logo" /> */}
                </a>
              </div>
              <div className="col-xs-8 header__right">
                <ul className="header__categories">
                  <li className="header__category">category 1</li>
                  <li className="header__category">category 2</li>
                  <li className="header__category">category 3</li>
                </ul>
                <div className="header__grid"><Icon.MdApps /></div>
                <select className="header__filter">
                  <option>Dec Date</option>
                  <option>Asc Date</option>
                  <option>More Score</option>
                  <option>Minor Score</option>
                </select>
              </div>

            </div>
          </div>
        </header>
        <main>
          <section>
            <div className="post-card">
              <div className="container">
                <ul>
                  {this.props.postIds.map((id) => (
                    <li key={id} >
                      <Post id={id}/>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}


function mapStateToProps ({ posts }) {
  return {
    postIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)


// class Dashboard extends Component {
  
//   state = {
//     posts: [], 
//   }

  
//   //get books the server API use the async + await
//   async componentDidMount() {
//     const posts = await DashboardAPI.getAllPosts()
//     this.setState({ posts })
//   }

//   render() {

//     const {posts} = this.state

//     return (
//       <div>
//         <h3 className='center'>Your Timeline</h3>
//         <ul className='dashboard-list'>
//           {posts.map((p) => (
//             <li key={p.id}>
//               <a>{p.title}</a>
//               {/* <Post id={p}/> */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }


// export default Dashboard