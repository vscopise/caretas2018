import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Home,
    Share,
    Menu } from '@material-ui/icons'

import { 
    Grid,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const MobileNav = ( props ) => (
    <div className={props.classes.MobileNav}>
        <Grid container spacing={16}>
            <Grid item xs={4} className={'mobile-nab-item'}>
                <Home/>
            </Grid>
            <Grid item xs={4} className={'mobile-nab-item'}>
                <Share/>
            </Grid>
            <Grid item xs={4} className={'mobile-nab-item'}>
                <Menu/>
            </Grid>
        </Grid>
    </div>
)

export default withStyles(styles)(MobileNav)