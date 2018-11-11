import React, { Component } from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PostCabezal from './Post-Cabezal'

import styles from '../assets/styles'
import CabezalHome from './Cabezal-Home'
import DestacadasEditorial from './Destacadas-Editorial'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cabezalHomePosts: {},
            homePosts: {},
            isLoading: true
        }
    }

    fetch_cabezal_posts = () => {
        var cabezal_zone_id = this.props.cabezal_home.term_id
        axios
            .get( urlCaretas + 'zoninator/v1/zones/' + cabezal_zone_id + '/posts')
            .then(res => {
            this.setState({ 
                cabezalHomePosts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetch_cabezal_posts()
    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Home}>
                    
                    <CabezalHome posts={this.state.cabezalHomePosts}/>

                    <DestacadasEditorial/>
                   
                    
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