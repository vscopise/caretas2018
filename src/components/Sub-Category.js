import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Grid,
    withStyles
} from '@material-ui/core'


import styles from '../assets/styles'

const SubCategory = (props) => (
    <div className={props.classes.SubCategory}>
        <Grid container spacing={24}>
            {
                props.posts.map(post => 
                    <Grid item xs={3}>
                        <div 
                            className='image' 
                            style={{backgroundImage: `url(${post.image_url[1]})`}}
                        />
                        <h3 className='cat-title' dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    </Grid>
                )
            }
        </Grid>
    </div>
)

export default withStyles(styles)(SubCategory)