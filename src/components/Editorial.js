import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const Editorial = ( props ) => (
    <div className={props.classes.Editorial}>
        <h4 className='widget-title'>
            <span>Editorial</span>
        </h4>
        <Link 
            to = {
                {pathname: '/' + props.posts[0].slug, 
                state: {postId: props.posts[0].id, post: props.posts[0]}}
            }
        >
            <img src={props.posts[0].image_url[2]} alt={props.posts[0].title.rendered} />
            <h3
                dangerouslySetInnerHTML={{__html: props.posts[0].title.rendered}} 
            />
            <p>Por: {props.posts[0].author}</p>
        </Link>
    </div>
)

export default withStyles(styles)(Editorial)