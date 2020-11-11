import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import './globalStyle.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <div className='globalStyle'>
          <Routes />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
