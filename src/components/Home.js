import React, { Component } from 'react'
import axios from 'axios'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import Loading from './Loading'
import CabezalHome from './Cabezal-Home'
import DestacadasEditorial from './Destacadas-Editorial'
import styles from '../assets/styles'

//const urlCaretas = 'http://localhost/caretas/wp-json/'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homePosts: {},
            isLoading: true
        }
    }

    fetch_home_posts = () => {
        axios
            .get( urlCaretas + 'wp/v2/home/' )
            .then(res => {
            this.setState({ 
                homePosts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetch_home_posts()
    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Home}>
                    
                    <CabezalHome 
                        posts={this.state.homePosts.cabezal}
                    />

                    <DestacadasEditorial
                        destacadas={this.state.homePosts.destacadas}
                        editorial={this.state.homePosts.editorial}
                    />
                    
                    <h2>home</h2>
                    <p>texto</p>
                </div>
            )
        } else {
            return <Loading/>
        }
    }
}

export default withStyles(styles)(Home)