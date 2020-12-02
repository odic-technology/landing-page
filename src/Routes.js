import React from 'react'

import App from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portifolio'
import TurboMaquinas from './pages/Portifolio/TurboMaquinas'
import Matchfy from './pages/Portifolio/Matchfy'
import GrandeDesafio from './pages/Portifolio/GrandeDesafio'

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
        <TurboMaquinas />
      </Route>
      <Route path='/matchfy'>
        <Matchfy />
      </Route>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      <Route path='/grandeDesafio'>
        <GrandeDesafio />
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
