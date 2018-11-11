import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import ItemDestacadas from './Item-Destacadas'
import styles from '../assets/styles'

const Destacadas = ( props ) => (
    <Grid container className={props.classes.Destacadas} spacing={8}>
        {props.posts.map(post => (
            <Grid item xs={3} key={post.id}>
                <ItemDestacadas post={post}/>
            </Grid>
        ))}
    </Grid>
)

export default withStyles(styles)(Destacadas)