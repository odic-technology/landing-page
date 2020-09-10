import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
