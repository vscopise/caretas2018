import React, { Component } from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PostCabezal from './Post-Cabezal'

import styles from '../assets/styles'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homePosts: {},
            isLoading: true
        }
    }

    fetch_home_posts = () => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
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
                        <Grid item xs={6}>
                            <PostCabezal post={this.state.homePosts.cabezal[0]} size='size-a'/>
                        </Grid>
                        <Grid item xs={6}>
                            <PostCabezal post={this.state.homePosts.cabezal[1]} size='size-b'/>
                            <Grid container className='cabezal' spacing={0}>
                                <Grid item xs={6}>
                                    <PostCabezal post={this.state.homePosts.cabezal[2]} size='size-c'/>
                                </Grid>
                                <Grid item xs={6}>
                                    <PostCabezal post={this.state.homePosts.cabezal[3]} size='size-c'/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
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