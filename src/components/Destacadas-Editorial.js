import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import Destacadas from './Destacadas'
import Editorial from './Editorial'
import styles from '../assets/styles'

const DestacadasEditorial = ( props ) => (
    <Grid container className={props.classes.DestacadasEditorial} spacing={24}>
        {
            window.innerWidth > 960 &&
            <Grid item md={8} xs={12}>
                <Destacadas posts={props.destacadas}/>
            </Grid>
        }
        <Grid item md={4} xs={12}>
            <Editorial posts={props.editorial}/>
        </Grid>
    </Grid>
)

export default withStyles(styles)(DestacadasEditorial)