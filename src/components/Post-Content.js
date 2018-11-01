import React from 'react'
import { 
    withStyles
} from '@material-ui/core'

import Comments from './Comments'

import styles from '../assets/styles'

const PostContent = (props) => (
    <div className={props.classes.PostContent}>
        <p className='colgado'>
            {props.post.colgado}
        </p>
        <h1 className='entry-title'
            dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
        />
        <div 
            className='entry-excerpt'
            dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
        />
        <div className=''>
            <img 
                className='content-list-thumb' 
                src={props.post.image_url[2]} 
                alt={props.post.title.rendered} 
            />
        </div>
        <div className='entry-meta'>
            {props.date}
        </div>
        <div 
            className='entry-content'
            dangerouslySetInnerHTML={{__html: props.post.content.rendered}} 
        />
        <Comments post={props.post} />
    </div>
)

export default withStyles(styles)(PostContent)