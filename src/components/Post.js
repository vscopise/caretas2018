import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import { 
    Grid,
} from '@material-ui/core'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            isLoading: true
        }
    }

    componentDidMount(){
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'posts/?slug=' + this.props.location.pathname )
            .then(res => {
                this.setState({ 
                    post: res.data[0],
                    isLoading: false 
                })
        })
        .catch(error => console.log(error))
    }
    
    render() {
        if (!this.state.isLoading) {
            const post = this.state.post
            const date = new Date(post.date).toLocaleDateString('es-ES', {year: "numeric", month: "long", day: "numeric"})
            return (
                <Grid container spacing={24}>
                    <Grid item md={8} xs={12}>
                        <PostContent post={post} date={date}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Sidebar/>
                    </Grid>
                </Grid>
            )
        } else {
            return <Loading/>
        }
    }
}

export default Post