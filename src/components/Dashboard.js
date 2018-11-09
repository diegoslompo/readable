import React, { Component} from 'react'
import { connect } from 'react-redux'
import ListPost from './ListPost'
import DetailPost from './DetailPost'
import NotFound from './NotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as Icon from 'react-icons/md'

class Dashboard extends Component {

  render() {

    return (

      <Router >
        <div>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <NavLink to='/'>
                    <div className="header__logo">
                      <Icon.MdFilterDrama />
                      <div className="header--title">ReadAble</div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </header>
          <main>
            <Switch>
              <Route exact path='/'  component={ListPost}/>
              <Route exact path="/:category/:postId" component={DetailPost} />
              <Route exact path='/:category' component={ListPost} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <footer className="footer">
            <div className="container">
              <div className="footer__block">
                <div className="footer__copyright">Diego Slompo 2018</div>
                <div className="footer__create">Create with ♥ React</div>
              </div>        
            </div>
          </footer>
        </div>
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
  }
}

export default connect(mapStateToProps)(Dashboard)
