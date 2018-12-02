import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import SidebarSingle from './Sidebar-Single'

import { Grid } from '@material-ui/core'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            isLoading: true,
        }
    }

    fetch_post = ( pathname ) => {
        var url = urlCaretas + 'wp/v2/posts?slug=' + pathname
        axios
            .get( url )
            .then(res => {
                this.setState({
                    post:res.data[0],
                    isLoading:false
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        if ( undefined === this.props.location.state ) {
            this.fetch_post( window.location.pathname )
        } else {
            this.setState({ 
                isLoading: false,
                post: this.props.location.state.post, 
            })
        }
        window.scrollTo(0,0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({post: nextProps.location.state.post})
            //const { catId, page } = nextProps.location.state
            //this.fetch_posts(catId, page)
        }
    }


    render() {
        if (!this.state.isLoading) {
            return (
                <Grid container spacing={24}>
                    <Grid item md={8} xs={12}>
                        <PostContent post={this.state.post} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <SidebarSingle/>
                    </Grid>
                </Grid>
            )
        } else {
            return <Loading/>
        }
    }
}

export default Post