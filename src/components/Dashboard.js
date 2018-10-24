import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Modal from 'react-modal'
import NewPost from './NewPost'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import FormPost from './FormPost'
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
      <Router>
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
                        {/* <Link to="/category">{item.name}</Link> */}
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
              {/* <Route path="/" component={PostList} />
              <Route path="/category" component={PostList} /> */}
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
                  contentLabel='Modal'>
                    <button className="edit-card edit-card__close"onClick={this.closePostModal}> <Icon.MdClose /> </button>
                    <NewPost/>
                </Modal>
              </div>
            </section>
          </main>
        </div>
      </Router>
    )
  }
}


function mapStateToProps ({ posts, categories}) {
  return {
    categories: Object.values(categories),
    postIds: Object.keys(posts)
      // .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
