import React, { Component } from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PostCabezal from './Post-Cabezal'

import styles from '../assets/styles'
import CabezalHome from './Cabezal-Home';

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

    fetch_home_posts = () => {
        /*const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'home' )
            .then(res => {
            this.setState({ 
                homePosts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))*/
        var zone_id = this.props.cabezal_home.term_id
        /*this.setState({ 
            isLoading: true 
        })*/
        axios
            .get( urlCaretas + 'zoninator/v1/zones/' + zone_id + '/posts')
            .then(res => {
            this.setState({ 
                cabezalHomePosts: res.data,
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
                    
                    
                   
                    <Grid container className='cabezal' spacing={0}>
                        <Grid item xs={8}>left</Grid>
                        <Grid item xs={4}>right</Grid>
                    </Grid>
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