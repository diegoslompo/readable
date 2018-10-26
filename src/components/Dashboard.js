import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Modal from 'react-modal'
import NewPost from './NewPost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
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
    const { categories, match } = this.props

    const { posts, category} = this.props

    // const {category} = this.props.match.params.category;


    console.log(category)


 


    // const categoryPosts = posts.filter(data => data.category === category)

    // console.log(categoryPosts)

    return (

      <Router>
        <Fragment>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-xs-4">
                  <NavLink to='/'>
                    <div className="header__logo">
                      <Icon.MdFilterDrama />
                      <div className="header--title">ReadAble</div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xs-8 header__right">
                  <ul className="header__categories">

                    {categories.map((item) => (
                      <li className="header__category" key={item.name} >
                        <NavLink to={`/category/${item.path}`}>{item.name}</NavLink>
                        {/* <Link to="/category">{item.name}</Link> */}
                        {/* <Category id={item.name}/> */}
                      </li>
                    ))}
                    <li className="header__category">
                      <NavLink to="/">Show All</NavLink>
                    </li>
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
            {/* <div>
              {!category
                  ? isDeleted.map(post => <Post key={post.id} post={post} />)
                  : categoryPosts.map(post => <Post key={post.id} post={post} />)}

            </div> */}

            {/* <Route path='/category' render={() => (
                <span> testeeeeeee </span>
            )} /> */}

            <Route exact path='/'  render={() => (
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
            )}/>    
          </main>
        </Fragment>
      </Router>

    )
  }
}


function mapStateToProps ({ posts, categories}, {match}) {

  console.log(match)

  return {
    categories: Object.values(categories),
    posts: posts,
    postIds: Object.keys(posts)
      // .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
