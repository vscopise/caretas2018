import React from 'react'

import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PreviewPostMedium = ( props ) => (
    <Link to={{pathname: '/' + props.post.slug, state: {postId: props.post.id}}}>
        <Grid 
            container spacing={24} 
            className='content-list'
        >
            <Grid item md={4} xs={12}>
                <img 
                    className='content-list-thumb' 
                    src={props.post.image_url[1]} 
                    alt={props.post.title.rendered} 
                />
            </Grid>
            <Grid item md={8} xs={12}>
                <div className='entry-meta'>
                    {
                        props.post.categories.map(cat => (
                            <span className='entry-meta-cats' key={cat}>
                                {props.categories.find (
                                    category => category.id === cat
                                ).name}
                            </span>
                        ))
                    }
                </div>
                <h3 
                    className='content-list-title'
                    dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
                />
                <div 
                    dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                />
            </Grid>
        </Grid>
    </Link>
)

export default PreviewPostMedium