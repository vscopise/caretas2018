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

class DestacadasEditorial extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cabezalHomePosts: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        //this.fetch_cabezal_home_posts()
    }

    fetch_cabezal_home_posts = () => {
        let ids = ''
        
        this.props.posts.forEach(post => ids += 'include[]=' + post.ID + '&' )
        var postIds = ids.slice(0, -1)
        axios
            .get( urlCaretas + 'wp/v2/posts?' + postIds )
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
            return (
                <Grid container className={this.props.classes.DestacadasEditorial}>
                    <Grid item xs={8}>left</Grid>
                    <Grid item xs={4}>right</Grid>
                </Grid>
            )
        } else {
            return <Loading/>
        }
    }

}

export default withStyles(styles)(DestacadasEditorial)