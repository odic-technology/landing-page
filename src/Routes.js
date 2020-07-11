import React from 'react'

import App from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portifolio'
import Design from './pages/Portifolio/Design'
import Mobile from './pages/Portifolio/Mobile'
import Web from './pages/Portifolio/Web'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const backgroundStyle = {
  backgroundColor: '#304448'
}

export default function Routes () {
  return (
    <div style={backgroundStyle}>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/design'>
          <Design />
        </Route>
        <Route path='/mobile'>
          <Mobile />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/web'>
          <Web />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/' exact>
          <App />
        </Route>
      </Switch>
    </div>
  )
}
