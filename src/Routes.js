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
  Switch,
  Route
} from 'react-router-dom'

export default function Routes () {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/turboMaquinas'>
        <Design />
      </Route>
      <Route path='/matchfy'>
        <Mobile />
      </Route>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      <Route path='/grandeDesafio'>
        <Web />
      </Route>
      <Route path='/services'>
        <Services />
      </Route>
      <Route path='/' exact>
        <App />
      </Route>
    </Switch>
  )
}
