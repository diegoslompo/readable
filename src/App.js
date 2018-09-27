import React, { Component } from 'react';
import * as Icon from 'react-icons/md'
import logo from './logo.svg';
import './App.css';
import './flex.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet"></link>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <a href="" className="header__logo">
                  <Icon.MdImportContacts />
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
                <div className="post-card__item">
                  <div className="post-card__info">
                    <div className="post-card__top">
                      <div className="post-card__avatar"><Icon.MdLocalLibrary /></div>
                      <div className="post-card__write">
                        <div className="post-card__title"> Lorem Ipsum </div>
                        <div className="post-card__date"> 2 days setember, by diegoslompo in <b>category</b> </div>
                      </div>
                    </div>
                    <div className="post-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                  <div className="post-card__utils">
                    <div className="post-card__util-item"><Icon.MdEdit /></div>
                    <div className="post-card__util-item"><Icon.MdDeleteSweep /></div>
                    <div className="post-card__util-item">
                      <Icon.MdModeComment />
                      <div className="post-card__util-comments">+3</div>
                    </div>
                  </div>
                  <div className="post-card__actions">
                    <div className="post-card__actions-item post-card--upvote"> <Icon.MdThumbUp /></div>
                    <div className="post-card__actions-item post-card--downvote"><Icon.MdThumbDown /></div>
                    <div className="post-card__score">+2</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="edit-card">
              <div className="container">
                <div className="edit-card__wrapper">
                  <legend className="edit-card__title">Create your post</legend>
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
