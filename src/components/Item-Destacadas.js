import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const ItemDestacadas = ( props ) => (
    <div className={props.classes.ItemDestacadas}>
        <Link 
            to = {
                {pathname: '/' + props.post.slug, 
                state: {postId: props.post.id, post: props.post}}
            }
        >
            <div 
                className='image' 
                    style={{backgroundImage: `url(${props.post.image_url[1]})`}}
            />
            <h4
                dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
            />
        </Link>
    </div>
                
)

export default withStyles(styles)(ItemDestacadas)