import React, { Component } from 'react'

import { 
    Grid
} from '@material-ui/core'




class Post extends Component {
    render() {
        const post = this.props.post
        return(
            <Grid container spacing={24}>
                <Grid item md={8} xs={12}>
                    <h1 
                        className='entry-title'
                        dangerouslySetInnerHTML={{__html: post.title.rendered}} 
                    />
                    <div 
                        className='entry-excerpt'
                        dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                    />
                    <div className=''>
                        <img 
                            className='content-list-thumb' 
                            src={post.image_url} 
                            alt={post.title.rendered} 
                        />
                    </div>
                    <div className='entry-meta'></div>
                    <div 
                        className='entry-content'
                        dangerouslySetInnerHTML={{__html: post.content.rendered}} 
                    />
                </Grid>
                <Grid item md={4} xs={12}>Sidebar</Grid>
            </Grid>
        )
    }
}

export default Post