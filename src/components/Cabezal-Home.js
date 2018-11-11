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
            <Grid container className={this.props.classes.CabezalHome}>
                <Grid item xs={6}>
                    <PostCabezal 
                        post={this.state.cabezalHomePosts[0]}
                        size='size-a'
                    />
                </Grid>
                <Grid item xs={6}>
                    <PostCabezal 
                        post={this.state.cabezalHomePosts[1]}
                        size='size-b'
                    />
                    <Grid container>
                        <Grid item xs={6}>
                            <PostCabezal 
                                post={this.state.cabezalHomePosts[2]}
                                size='size-c'
                            />  
                        </Grid>
                        <Grid item xs={6}>
                            <PostCabezal 
                                post={this.state.cabezalHomePosts[3]}
                                size='size-c'
                            />  
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
           )
        } else {
            return <Loading/>
        }
    }

}

export default withStyles(styles)(CabezalHome)