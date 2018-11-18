import React from 'react'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import styles from '../assets/styles'

const GridPost = ( props ) => (
    <div className={props.size}>
       <Link 
            to = {
                {pathname: '/' + props.post.slug, 
                state: {postId: props.post.id, post: props.post}}
            }
        >
            <div className='image-container'>
                <div 
                    className='image' 
                    style={{backgroundImage: `url(${props.post.image_url[2]})`}}
                />
            </div>
            <h2
                dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
            />
            {
                (props.size==='size-a') &&
                <p 
                    dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                /> 
            }
       </Link>
    </div>
)

export default GridPost