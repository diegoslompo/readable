import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import NewPost from './NewPost'
import NotFound from './NotFound';
import * as Icon from 'react-icons/md'
import { sortPost } from '../actions/posts';
import { NavLink } from 'react-router-dom'


class ListPost extends Component {

  state = {
    postModalOpen: false,
    sortNew: {}
  }

  openPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closePostModal = () => this.setState(() => ({ postModalOpen: false }))


  handleSort = (event) => {
    let selectValue = event.target.value
    const { dispatch} = this.props
    const sortValue = { sort: selectValue }
    
    dispatch(sortPost(sortValue))

    this.setState(() => ({ sortNew: selectValue }))
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }
  
  render() {
    
    const { postModalOpen, sortNew } = this.state
    const { postIds, categories, sortBy} = this.props
    const { category } = this.props.match.params

    const categoryPosts = categories.filter(c => c.name === category)

    const sortResult = sortBy.map(s => s.sort)
    const sortVal = sortResult[0]
  
    const filteredPosts = postIds.filter(post => !post.deleted && (!category || (category && post.category === category)));

    if (sortNew.length) {
      filteredPosts.sort(function(a, b) {
        switch(sortVal) {
          case 'timestamp':
           return a.timestamp < b.timestamp ? -1 : 1
          case '-timestamp':
           return a.timestamp > b.timestamp ? -1 : 1
          case 'voteScore':
           return a.voteScore < b.voteScore ? -1 : 1
          case '-voteScore':
           return a.voteScore > b.voteScore ? -1 : 1
          default:
          return a.voteScore > b.voteScore ? -1 : 1 
        }
      })
    }

    return (
      <section>
        {categoryPosts.length > 0 || !category ? (
          <div>
            <div className="container">
              <div className="header__right">
                <ul className="header__categories">
                  {categories.map((item) => (
                    <li className="header__category" key={item.name} >
                      <NavLink to={`${item.path}`}>{item.name}</NavLink>
                    </li>
                  ))}
                  <li className="header__category">
                    <NavLink to="/"><b>Show All</b></NavLink>
                  </li>
                </ul>
                <select className="header__filter" onChange={this.handleSort}>
                  <option value="">Sort By</option>
                  <option value="voteScore">Score: Low to high</option>
                  <option value="-voteScore">Score: High to high</option>
                  <option value="-timestamp">Date: New to Old</option>
                  <option value="timestamp">Date: Old to New</option>
                </select>
              </div>     
            </div>

            <div className="post-card">
              <div className="container">
                {
                  filteredPosts.length > 0 ? 
                    filteredPosts.map(post => (<div key={post.id} ><Post id={post.id}/></div>))
                    :(
                      <div>
                        <div className="post-comment__not-post">Sorry 0 Posts :/ </div>
                      </div>
                    )
                }

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
                  <NewPost onModalClose={this.closePostModal} />
              </Modal>
            </div>
          </div>
        ):(
          <NotFound/>
        )}
      </section>
    )
  }
}



function mapStateToProps ({ posts, categories, sortBy}, {match}) {

  console.log(match)
  
  const sortNew = sortBy
  
  return {
    categories: Object.values(categories),
    posts: posts,
    postIds: Object.values(posts),
    sortBy: Object.values(sortNew)
  }
}

export default connect(mapStateToProps)(ListPost)
