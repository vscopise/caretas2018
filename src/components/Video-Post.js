import React, { Component } from 'react'


import { Link } from 'react-router-dom'


import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import { PlayArrowRounded } from '@material-ui/icons'

import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'


const VideoPost = ( props ) => (
    <div className={props.classes.VideoPost}>
        <h4 className='widget-title'>
            <span>Videos</span>
        </h4>
        <div className={'container'}>
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
                <PlayArrowRounded/>
                <h2
                    dangerouslySetInnerHTML={{__html: props.post[0].title.rendered}} 
                />
            </Link>
        </div>
    </div>    
)

export default withStyles(styles)(VideoPost)