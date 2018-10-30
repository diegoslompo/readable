import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'
import ListPost from './ListPost'
import DetailPost from './DetailPost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as Icon from 'react-icons/md'

class Dashboard extends Component {

  render() {

    const {categories} = this.props

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
                      </li>
                    ))}
                    <li className="header__category">
                      <NavLink to="/">Show All</NavLink>
                    </li>
                  </ul>
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
            <Route path='/category/:category' render={(props) => (
              <ListPost {...props}/>
            )} />
            <Route exact path='/'  render={(props) => (
              <ListPost {...props}/>
            )}/>
            <Route path="/category/:category/:postId" component={DetailPost} /> 
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
    postIds: Object.values(posts)
      // .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
