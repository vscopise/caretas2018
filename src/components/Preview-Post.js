import React, { Component } from 'react'

import { 
    Grid
} from '@material-ui/core'
import { Link } from 'react-router-dom'

class PreviewPost extends Component {

    constructor(props) {
        super(props)
        
        this.state = { post: props.post}
    }

    handleClick = (e, post) => {
        e.preventDefault()
        this.props.renderPost(post)
    }

    render() {
        const post = this.state.post

        switch(this.props.size) {
            case 'large': {
                return(
                    <div key={post.id}>
                        {post.title.rendered}
                    </div>
                )
            }
            case 'medium': {
                return(
                    <Link to={post.slug}>
                        <Grid 
                            container spacing={24} 
                            onClick={e =>this.handleClick(e, post)} 
                            className='content-list'
                            >
                            <Grid item md={4} xs={12}>
                                <img 
                                    className='content-list-thumb' 
                                    src={post.image_url} 
                                    alt={post.title.rendered} 
                                />
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <h3 
                                    className='content-list-title'
                                    dangerouslySetInnerHTML={{__html: post.title.rendered}} 
                                />
                                <div 
                                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                                />
                            </Grid>
                        </Grid>
                    </Link>
                )
            }
            default: {

            }

        }
        

    }
}
export  default PreviewPost