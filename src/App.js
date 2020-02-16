import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import './styles/App.scss'

const App = () => (
  <>
    <Navbar />
    <NavbarMobile />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/about' component={About}/>
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </>
)

export default App
