import React from 'react'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import CabezalHome from './Cabezal-Home'
import DestacadasEditorial from './Destacadas-Editorial'
//import LastPosts from './Last-Posts'
import styles from '../assets/styles'
import SidebarHome from './Sidebar-Home';

//const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

const Home = ( props ) => (
    <div className={props.classes.Home}>
        <CabezalHome 
            posts={props.cabezal}
        />
        <DestacadasEditorial
            destacadas={props.destacadas}
            editorial={props.editorial}
        />
        <Grid container spacing={24}>
            <Grid item lg={8} sm={12}>
                <h2>izquierda</h2>
            </Grid>
            <Grid item lg={4} sm={12}>
                <SidebarHome/>
            </Grid>
        </Grid>
        <h2>home</h2>
        <p>texto</p>
    </div>
)

export default withStyles(styles)(Home)