import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import PostCabezal from './Post-Cabezal'
import styles from '../assets/styles'

const CabezalHome = ( props ) => (
    <Grid container className={props.classes.CabezalHome}>
        <Grid item lg={6} sm={12}>
            <PostCabezal post={props.posts[0]} size='size-a' />
        </Grid>
        <Grid item lg={6} sm={12}>
            <PostCabezal post={props.posts[1]} size='size-b' />
            <Grid container>
                <Grid item lg={6} sm={12}>
                    <PostCabezal post={props.posts[2]} size='size-c' />  
                </Grid>
                <Grid item lg={6} sm={12}>
                    <PostCabezal post={props.posts[3]} size='size-c' />  
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

export default withStyles(styles)(CabezalHome)