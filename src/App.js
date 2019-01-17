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
import constants from './assets/Constants'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categoria from './components/Categoria'
import Author from './components/Author'
import EdicionImpresa from './components/Edicion-Impresa'
import Contacto from './components/Contacto'
import Suscripciones from './components/Suscripciones'
import TerminosCondiciones from './components/Terminos-y-Condiciones'

import Loading from './components/Loading'
import SubNav from './components/Sub-Nav'

import Footer from './components/Footer'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      categories: [],
      users: [],
      isLoading: true,
      urlCaretas: constants.urlCaretas,
      popup: false,
      popupEnabled: null,
      popupContent: ''
      //popupPosition: 100,
    }
  }

  /*tick() {
    this.setState(prevState => ({
      popupPosition: prevState.popupPosition - 1
    }));
  }*/

  componentDidMount() {
      this.fetch_home_data()
      this.fetch_users()
      setTimeout(function(){
          this.setState({
              popup: true,
              //popupPosition: 500
          })
          setTimeout(function(){
            this.setState({
                popup: false,
                //popupPosition: 500
            })
            
        }.bind(this), 500000)
      }.bind(this), 5000)
      //this.interval = setInterval(() => this.tick(), 1)
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0,0)
  }

  fetch_home_data = () => {
      axios
          .get( this.state.urlCaretas + 'home/' )
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
              imageGallery: res.data.image_gallery,
              videoDestacado: res.data.featured_video,
              columnistas: res.data.columnistas,
              tapa: res.data.tapa,
              popupEnabled: res.data.popup.enable,
              popupContent: res.data.popup.content,
              isLoading: false 
          })
      })
      .catch(error => console.log(error))
  }

  fetch_users = () => {
      axios
          .get( this.state.urlCaretas + 'users?per_page=99' )
          .then(res => {
          this.setState({ 
              users: res.data,
          })
      })
      .catch(error => console.log(error))
  }

  closePopup = () => {
    this.setState({popup: false})
  }

  render() {
    const {classes} = this.props
    if ( ! this.state.isLoading ) {
      return (
        <Fragment>
          <CssBaseline />
          <div className={classes.layout}>
            <Header date={this.state.date}/>
            <Navbar categories={this.state.categories}/>
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
                  imageGallery={this.state.imageGallery}
                  videoDestacado={this.state.videoDestacado}
                  categorias={this.state.categories}
                  users={this.state.users}
                  columnistas={this.state.columnistas}
                  tapa={this.state.tapa}
                  popup={this.state.popup}
                  closePopup={this.closePopup}
     //             popupPosition={this.state.popupPosition}
                  popupEnabled={this.state.popupEnabled}
                  popupContent={this.state.popupContent}
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
                exact path={"/terminos-y-condiciones"} component={TerminosCondiciones} 
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
