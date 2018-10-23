import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Modal from 'react-modal'
import FormPost from './FormPost'
// import Category from './Category'
import * as Icon from 'react-icons/md'

class Dashboard extends Component {

  state = {
    postModalOpen: false
  }

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))

  render() {

    const { postModalOpen } = this.state

    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a href="" className="header__logo">
                  <Icon.MdFilterDrama />
                  <div className="header--title">ReadAble</div>
                </a>
              </div>
              <div className="col-xs-8 header__right">
                <ul className="header__categories">
                  {this.props.categories.map((item) => (
                    <li className="header__category" key={item.name} >
                      {item.name}
                      {/* <Category id={item.name}/> */}
                    </li>
                  ))}
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
          <section>
            <div className="container">
              <div className="edit-card">
                <button
                  className="edit-card__title"
                  onClick={this.openPostModal}
                  > Create your post</button>
              </div>
              <Modal
                className='modal'
                overlayClassName='overlay'
                isOpen={postModalOpen}
                contentLabel='Modal'
              >
                <button
                className="edit-card edit-card__close"
                onClick={this.closePostModal}
                > <Icon.MdClose /> </button>

                <FormPost/>
              </Modal>
            </div>
          </section>
        </main>
      </div>
    )
  }
}


function mapStateToProps ({ posts, categories}) {
  return {
    categories: Object.values(categories),
    postIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories
//   }
// }

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