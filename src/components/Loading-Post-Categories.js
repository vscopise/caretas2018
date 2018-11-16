import React from 'react'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import List from 'react-content-loader'


import styles from '../assets/styles'

const LoadingPostCategories = (props) => (
    <Grid container spacing={24} className={props.classes.LoadingPostCategories}>
        {[...Array(4)].map((i)=>
            <Grid item xs={3}>
                <List/>
            </Grid>
        )}
    </Grid>
    
)

export default withStyles(styles)(LoadingPostCategories)