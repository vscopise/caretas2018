import React, { Component } from 'react'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import { Grid } from '@material-ui/core'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({ 
            isLoading: false,
            post: this.props.location.state.post, 
        })
    }
    
    render() {
        if (!this.state.isLoading) {
            return (
                <Grid container spacing={24}>
                    <Grid item md={8} xs={12}>
                        <PostContent post={this.state.post} />
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