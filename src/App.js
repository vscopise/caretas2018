import React, { Component, Fragment } from 'react'
import axios from 'axios'

import { Switch, Route } from 'react-router-dom'
import Post from './components/Post'
import MobileNav from './components/Mobile-Nav'

import { 
  CssBaseline, 
  withStyles 
} from '@material-ui/core'

import styles from './assets/styles'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categoria from './components/Categoria'
import Author from './components/Author'
import EdicionImpresa from './components/Edicion-Impresa'
import Contacto from './components/Contacto'
import Suscripciones from './components/Suscripciones'

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
      users: [],
      isLoading: true
    }
}

componentDidMount() {
    this.fetch_home_data()
    this.fetch_users()
}

fetch_home_data = () => {
    axios
        .get( urlCaretas + 'wp/v2/home/' )
        .then(res => {
        this.setState({ 
            categories: res.data.categorias,
            ultimos: res.data.ultimos,
            cabezal: res.data.cabezal,
            destacadas: res.data.destacadas,
            editorial: res.data.editorial,
            zona1: res.data.zona1,
            zona2: res.data.zona2,
            video: res.data.video,
            videoDestacado: res.data.featured_video,
            columnistas: res.data.columnistas,
            tapa: res.data.tapa,
            isLoading: false 
        })
    })
    .catch(error => console.log(error))
}

fetch_users = () => {
    axios
        .get( urlCaretas + 'wp/v2/users?per_page=99' )
        .then(res => {
        this.setState({ 
            users: res.data,
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
                  zona1={this.state.zona1}
                  zona2={this.state.zona2}
                  video={this.state.video}
                  videoDestacado={this.state.videoDestacado}
                  categorias={this.state.categories}
                  users={this.state.users}
                  columnistas={this.state.columnistas}
                  tapa={this.state.tapa}
                />}
              />
              <Route 
                path={process.env.PUBLIC_URL + '/categoria'} 
                render={(props) => <Categoria {...props} categories={this.state.categories} />}
              />
              <Route 
                path={process.env.PUBLIC_URL + '/author'} 
                render={(props) => <Author {...props} categories={this.state.categories} />}
              />
              <Route 
                path={process.env.PUBLIC_URL + '/edicion-impresa'} 
                render={(props) => <EdicionImpresa {...props} categories={this.state.categories} />}
              />
              <Route 
                exact path={"/contacto"} component={Contacto} 
              />
              <Route 
                exact path={"/suscripciones"} component={Suscripciones} 
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
          <MobileNav/>
        </Fragment>
      );
    } else {
      return <Loading/>
    }
  }
}

export default withStyles(styles)(App)
