import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import { Link } from 'react-router-dom'


import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'


const ZonePost = ( props ) => (
    <div className={props.classes.ZonePost}>
        <h4 className='widget-title'>
            <span>Noticia destacada</span>
        </h4>
        <div>
            <Link 
                to={{
                    pathname: '/' + props.post.slug, 
                    state: {postId: props.post.id, post: props.post}
                }}
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
    </div>    
)

export default withStyles(styles)(ZonePost)