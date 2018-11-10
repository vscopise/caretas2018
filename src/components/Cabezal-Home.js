import React, { Component } from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PostCabezal from './Post-Cabezal'

import styles from '../assets/styles'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class CabezalHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cabezalHomePosts: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetch_cabezal_home_posts()
    }

    fetch_cabezal_home_posts = () => {
        var zone_id = this.props.zone.term_id
        this.setState({ 
            isLoading: true 
        })
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

    render() {
        if ( ! this.state.isLoading ) {
           return <PostCabezal/>
           //return <h2>dd</h2>
        } else {
            return <Loading/>
        }
    }

}

export default withStyles(styles)(CabezalHome)