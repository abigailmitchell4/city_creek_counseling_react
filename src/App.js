import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Inspirations from './components/Inspirations'
import MenHealing from './components/MenHealing'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import NoMatch from './components/NoMatch'
import Services from './components/Services'
import './styles/App.scss'

const App = () => (
  <>
    <Navbar />
    <NavbarMobile />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/men_healing' component={MenHealing} />
      <Route exact path='/inspirations' component={Inspirations}/>
      <Route exact path='/contact' component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App
