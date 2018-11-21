import React from 'react'


import { Link } from 'react-router-dom'


import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const ZonePost = ( props ) => (
    <div className={props.classes.ZonePost}>
        <h4 className='widget-title'>
            <span>Noticia destacada</span>
        </h4>
        <div>
            <Link 
                to={{
                    pathname: '/' + props.post[0].slug, 
                    state: {postId: props.post[0].id, post: props.post[0]}
                }}
            >
                <div 
                    className='image' 
                        style={{backgroundImage: `url(${props.post[0].image_url[1]})`}}
                />
                <h2
                    dangerouslySetInnerHTML={{__html: props.post[0].title.rendered}} 
                />
            </Link>
        </div>
    </div>    
)

export default withStyles(styles)(ZonePost)