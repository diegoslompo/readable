import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
        </ul>
      </div>
    );
  }
}

export default App;
