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
import ZonePost from './Zone-Post';
import GridPosts from './Grid-Posts';
import Galeria from './Galeria';
import VideoPost from './Video-Post';

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
                <Grid container spacing={24}>
                    <Grid item lg={6} sm={12}>
                        <ZonePost post={props.zona1}/>
                        <VideoPost post={props.video}/>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <ZonePost post={props.zona2}/>
                    </Grid>
                </Grid>
                <GridPosts
                    categorias={props.categorias}
                    category={'Deportes'}
                    left={false}
                />
                <GridPosts
                    categorias={props.categorias}
                    category={'Internacionales'}
                    left={true}
                />
                <GridPosts
                    categorias={props.categorias}
                    category={'Sociedad'}
                    left={false}
                />
                <GridPosts
                    categorias={props.categorias}
                    category={'Vida y Ocio'}
                    left={true}
                />
                <Galeria
                    categorias={props.categorias}
                    category={'Humor Gráfico'}
                />
            </Grid>
            <Grid item lg={4} sm={12}>
                <SidebarHome 
                    categorias={props.categorias}
                    users={props.users}
                />
            </Grid>
        </Grid>
    </div>
)

export default withStyles(styles)(Home)