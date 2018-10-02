// import React, { Component } from 'react'
// // import { connect } from 'react-redux'
// // import { handleInitialData } from '../actions/shared'
// import Dashboard from './Dashboard'
// // import LoadingBar from 'react-redux-loading'

// class App extends Component {
//   // componentDidMount() {
//   //   this.props.dispatch(handleInitialData())
//   // }
//   render() {
//     return (
//       <div>
//         {/* <LoadingBar />
//         {this.props.loading === true
//           ? null
//           : <Dashboard />} */}
//         <Dashboard />
//       </div>
//     )
//   }
// }

// export default App
// // export default connect(mapStateToProps)(App)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)
