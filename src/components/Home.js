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
import DfpBanner from './Dfp-Banner'

import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'

const Home = ( props ) => (
    <div className={props.classes.Home}>
        <ScrollUpButton />
        <CabezalHome 
            posts={props.cabezal}
        />
        <DestacadasEditorial
            destacadas={props.destacadas}
            editorial={props.editorial}
        />
        <Grid container spacing={24}>
            <Grid item lg={8} xs={12}>
                <Grid container spacing={24}>
                    <Grid item md={6} xs={12} className={'zone-video'}>
                        <ZonePost post={props.zona1}/>
                        <VideoPost post={props.video}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <ZonePost post={props.zona2}/>
                    </Grid>
                </Grid>
                {
                    window.innerWidth < 960 &&
                    <DfpBanner
                        dfpNetworkId={'90767959'} 
                        adUnit={'home_body_1'}
                        sizes={[ [300, 250], ]}
                    />
                }
                {
                    window.innerWidth > 960 &&
                    <DfpBanner
                        dfpNetworkId={'90767959'} 
                        adUnit={'home_body_1'}
                        sizes={[ [728, 90], ]}
                    />
                }
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
            <Grid item lg={4} xs={12}>
                <SidebarHome 
                    categorias={props.categorias}
                    users={props.users}
                    columnistas={props.columnistas}
                    tapa={props.tapa}
                />
            </Grid>
        </Grid>
    </div>
)

export default withStyles(styles)(Home)