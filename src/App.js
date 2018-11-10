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
import Loading from './components/Loading'

import Footer from './components/Footer'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      categories: [],
      zones: [],
      settings: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios.all([
      axios .get( urlCaretas + 'zoninator/v1/zones' ),
      axios .get( urlCaretas + 'wp/v2/categories?per_page=99' ),
      axios .get( urlCaretas + 'wp/v2/cyc-settings' )
    ])
    .then(axios.spread((zones, categories, settings) => {
      this.setState({
        zones: zones.data,
        categories: categories.data,
        settings: settings.data,
        isLoading: false
      })
    }))
    .catch(error => console.log(error));
  }

  render() {
    const {classes} = this.props
    if ( !this.state.isLoading ) {
      return (
        
        <Fragment>
          <CssBaseline />
          <div className={classes.layout}>
            <Header date={this.state.date}/>
            <Navbar/>
            <Switch>
              <Route 
                exact path={process.env.PUBLIC_URL + '/'} 
                render={(props) => <Home 
                    cabezal_home={this.state.zones.find(zone => zone.name===this.state.settings.cabezal_home)}
                    cabezal_grid={this.state.zones.find(zone => zone.name===this.state.settings.cabezal_grid)}
                  />}
              />
              <Route 
                path={process.env.PUBLIC_URL + '/categoria'} 
                render={(props) => <Categoria {...props} categories={this.state.categories} />}
              />
              <Route path={"/:slug"} component={Post} />
            </Switch>
          </div>
          <Footer date={this.state.date}/>
        </Fragment>
      );
    } else {
      return <Loading/>
    }
  }
}

export default withStyles(styles)(App)
