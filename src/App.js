import React, { Component } from 'react';
// import * as Icon from 'react-icons/md'
import logo from './logo.svg';
import './App.css';
import './flex.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}

        {/* <Icon.MdAcUnit />
        <Icon.MdControlPoint />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>inspiration</p>
        <ul>
          <li>https://dribbble.com/shots/3043066-ePayment-app</li>
          <li>https://dribbble.com/shots/4167571-Data-interface</li>
          <li>https://dribbble.com/shots/3512918-dashboard-UI</li>
          <li>https://dribbble.com/shots/4829514-Purple-day</li>
          <li>https://dribbble.com/shots/4882318-Twitter-dashboard-re-design</li>
          <li>https://dribbble.com/shots/2091522-Materials-Sharing-Card</li>
          <li>categorie > https://dribbble.com/shots/4460793-10C-Books-Animation</li>
          <li>https://medium.muz.li/retro-interface-reading-app-nike-tinder-and-more-weekly-interutils-roundup-b5c7ac974991</li>
        </ul> */}





        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a href="" className="header__logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
              </div>
              <div className="col-xs-8 header__right">
                <ul className="header__categories">
                  <li className="header__category">category 1</li>
                  <li className="header__category">category 2</li>
                  <li className="header__category">category 3</li>
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
          <section>
            <div className="post-card">
              <div className="container">
                <div className="post-card__item">
                  <div className="post-card__info">
                    <div className="post-card__avatar"><img src="" ></img></div>
                    <div className="post-card__title"> Lorem Ipsum </div>
                    <div className="post-card__write">
                      <div className="post-card__date"> 2 days setember, by diegoslompo in <b>category</b> </div>
                      <div className="post-card__author"> Author </div>
                    </div>
                    <div className="post-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                  <div className="post-card__utils">
                    <div className="post-card__util-item post-card--upvote">upvote Icon</div>
                    <div className="post-card__util-item post-card--downvote">downvote  Icon</div>
                    <div className="post-card__util-item">Star Icon</div>
                    <div className="post-card__util-item">Comments Icon</div>
                  </div>
                  <div className="post-card__actions">
                    <div className="post-card__action-delete">delete icon</div>
                    <div className="post-card__action-edit">edit icon</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="edit-card">
              <div className="container">
                <div className="edit-card__wrapper">
                  <form>
                    <input type="text" className="edit-card__input" placeholder="Title"/>
                    <input type="text" className="edit-card__input" placeholder="Your Name"/>
                    <select className="edit-card__select">
                      <option className="edit-card__option">Category</option>
                    </select>
                    <textarea className="edit-card__textarea"> Write you message </textarea>
                    <input type="button" className="edit-card__button edit-card--send" value="Send"/>
                    <input type="button" className="edit-card__button edit-card--cancel" value="Cancel"/>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
