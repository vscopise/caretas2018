import React, { Component, Fragment } from 'react'
import axios from 'axios'

import { Switch, Route } from 'react-router-dom'
import Post from './components/Post'

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
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      categories: [],
    }
  }

  componentDidMount() {
    const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
    axios
        .get( url + 'categories?per_page=99' )
        .then(res => {
            this.setState({ 
                categories: res.data,
            })
    })
    .catch(error => console.log(error))
  }

  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Header date={this.state.date}/>
          <Navbar/>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route 
              path={process.env.PUBLIC_URL + '/categoria'} 
              //component={Categoria}
              render={(props) => <Categoria {...props} categories={this.state.categories} />}
            />
            <Route path={"/:slug"} component={Post} />
          </Switch>
        </div>
        <Footer date={this.state.date}/>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App)
