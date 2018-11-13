import React from 'react'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import styles from '../assets/styles'
import LastPosts from './Last-Posts'
import SocialBar from './Social-Bar'

const SubNav = ( props ) => (
    <div className={props.classes.SubNav} >
        <Grid container>
            <Grid item xs={8}>
                <LastPosts posts={props.lastPost} />
            </Grid>
            <Grid item xs={4}>
                <SocialBar/>
            </Grid>
        </Grid>
    </div>
)

export default withStyles(styles)(SubNav)