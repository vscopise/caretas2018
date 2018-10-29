import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { 
  CssBaseline, 
  withStyles 
} from '@material-ui/core'

import styles from './assets/styles'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categoria from './components/Categoria'

import Footer from './components/Footer'

class App extends Component {
  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Header/>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/categoria' component={Categoria}/>
          </Switch>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App)
