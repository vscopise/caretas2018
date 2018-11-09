import React from 'react'

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core'

import styles from '../assets/styles'

const PostCabezal = ( props ) => {
    return(
        <div className={props.classes.PostCabezal}>
            <Link 
                to = {
                    {pathname: '/' + props.post.slug, 
                    state: {postId: props.post.id, post: props.post}}
                }
            >
                <div className={props.size}>
                    <div className='image' />
                    <div className='content'>
                        <h2
                            dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
                        />
                        {
                            (props.size==='size-a') &&
                            <p 
                                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                            /> 
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default withStyles(styles)(PostCabezal)