// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/css/index.scss';
// import App from './App';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducers'

// const store = createStore(reducer)
//  ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('root')
// ) 

import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import './flex.css';
import App from './components/App'
import { createStore } from 'redux'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
document.getElementById('root')
)