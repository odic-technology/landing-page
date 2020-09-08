import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from './context/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
