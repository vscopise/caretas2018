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
import SubNav from './components/Sub-Nav'

import Footer from './components/Footer'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      categories: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetch_categorias()
  }

  fetch_categorias = () => {
    axios
        .get( urlCaretas + 'wp/v2/home/' )

        .then(res => {
        this.setState({ 
            categories: res.data.categorias,
            ultimos: res.data.ultimos,
            cabezal: res.data.cabezal,
            destacadas: res.data.destacadas,
            editorial: res.data.editorial,
            isLoading: false 
        })
    })
    .catch(error => console.log(error))
}

  render() {
    const {classes} = this.props
    if ( ! this.state.isLoading ) {
      return (
        <Fragment>
          <CssBaseline />
          <div className={classes.layout}>
            <Header date={this.state.date}/>
            <Navbar/>
            <SubNav lastPost={this.state.ultimos}/>
            <Switch>
              <Route 
                exact path={process.env.PUBLIC_URL + '/'}
                render={(props) => <Home {...props} 
                  ultimos={this.state.ultimos} 
                  cabezal={this.state.cabezal} 
                  destacadas={this.state.destacadas} 
                  editorial={this.state.editorial} 
                />}
              />
              <Route 
                path={process.env.PUBLIC_URL + '/categoria'} 
                render={(props) => <Categoria {...props} categories={this.state.categories} />}
              />
              <Route 
                path={"/:slug"} component={Post} 
              />
              <Route 
                path={"/slug"} component={Post} 
              />
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
