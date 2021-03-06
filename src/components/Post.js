import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import SidebarSingle from './Sidebar-Single'

import { Grid } from '@material-ui/core'
import constants from '../assets/Constants'

//const isMobile = window.innerWidth < 960

class Post extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            isLoading: true,
            isMobile: constants.isMobile,
            urlCaretas: constants.urlCaretas,
            urlAdminCaretas: constants.urlAdminCaretas,
        }
    }

    fetch_post = ( pathname ) => {
        //var url = urlCaretas + 'wp-json/wp/v2/posts?slug=' + pathname
        axios
            //.get( url )
            .get(this.state.urlCaretas + 'posts?slug=' + pathname)
            .then(res => {
                this.setState({
                    post:res.data[0],
                    isLoading:false
                })
                this.setPostViews(this.state.post.id)
                document.title = this.state.post.title.rendered + ' - Caras y Caretas'
            })
            .catch(error => console.log(error))
    }

    setPostViews = (post_id) => {
        axios
            .get(this.state.urlCaretas + 'views/' + post_id)
            .then()
            .catch(error => console.log(error))
    }

    sanitizeTitle = (title) => {
        let replacements = [
            ['&#8220;', '"'],
            ['&#8221;', '"'],
        ]
        
        let newTitle = title
        replacements.map(r => {
            newTitle = newTitle.replace(r[0], r[1])
        })
        return newTitle
    }

    componentDidMount() {
        let location = this.props.location
        if ( undefined === location.state ) {
            this.fetch_post( window.location.pathname )
        } else {
            this.setState({ 
                isLoading: false,
                post: location.state.post, 
            })
            this.setPostViews(location.state.post.id)
            document.title = this.sanitizeTitle(location.state.post.title.rendered)
        }
        window.scrollTo(0,0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({post: nextProps.location.state.post})
            this.setPostViews(nextProps.location.state.post.id)
            document.title = nextProps.location.state.post.title.rendered + ' - Caras y Caretas'
        }
        window.scrollTo(0,0)
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <Grid container spacing={24}>
                    <Grid item md={8} xs={12}>
                        <PostContent post={this.state.post} isMobile={this.state.isMobile} />
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