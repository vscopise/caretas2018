import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import Destacadas from './Destacadas'
import Editorial from './Editorial'
import styles from '../assets/styles'

const DestacadasEditorial = ( props ) => (
    <Grid container className={props.classes.DestacadasEditorial}>
        <Grid item xs={8}>
            <Destacadas posts={props.destacadas}/>
        </Grid>
        <Grid item xs={4}>
            <Editorial posts={props.editorial}/>
        </Grid>
    </Grid>
)

export default withStyles(styles)(DestacadasEditorial)