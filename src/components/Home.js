import React from 'react'

import { 
    Grid,
    withStyles
} from '@material-ui/core'
import AdSense from 'react-adsense'
import CabezalHome from './Cabezal-Home'
import DestacadasEditorial from './Destacadas-Editorial'
//import LastPosts from './Last-Posts'
import constants from '../assets/Constants'
import styles from '../assets/styles'
import SidebarHome from './Sidebar-Home';
import ZonePost from './Zone-Post';
import GridPosts from './Grid-Posts';
import Galeria from './Galeria';
import VideoPost from './Video-Post';
//import Popup from 'reactjs-popup'
//import Modal from 'react-responsive-modal'
//import Modal from '@material-ui/core/Modal';

//https://react-responsive-modal.leopradel.com/


import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'
import VideoDestacado from './Video-destacado';
//import PromoCycTv from './Promo-Cyc-Tv';
import HomeImageGallery from './Home-Image-Gallery';
import BotonEdicionImpresa from './Boton-Edicion-impresa';
import HomePopup from './Home-Popup';

const Home = ( props ) => (
    <div className={props.classes.Home}>
        {
            !constants.isMobile &&
            <ScrollUpButton />
        }
        <CabezalHome 
            posts={props.cabezal}
        />
        <BotonEdicionImpresa/>
        <DestacadasEditorial
            destacadas={props.destacadas}
            editorial={props.editorial}
        />
        <Grid container spacing={24}>
            <Grid item lg={8} xs={12}>
                <Grid container spacing={24} className={''}>
                    {
                        props.videoDestacado.id && props.videoDestacado.title &&
                        <VideoDestacado video={props.videoDestacado.id} item={1} title={props.videoDestacado.title}/>
                    }
                    <h4 className={'widget-title'}>
                    <span>Más de Caras y Caretas TV</span>
                    </h4>
                    <Grid container spacing={24}>
                        <Grid item lg={4} xs={12} key={'video_1'}>
                            <VideoDestacado video={props.videoDestacado.video_2} item={2}/>
                        </Grid>
                        <Grid item lg={4} xs={12} key={'video_2'}>
                            <VideoDestacado video={props.videoDestacado.video_3} item={3}/>
                        </Grid>
                        <Grid item lg={4} xs={12} key={'video_3'}>
                            <VideoDestacado video={props.videoDestacado.video_4} item={4}/>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12} className={'zone-video'}>
                        <ZonePost post={props.zona1}/>
                        <VideoPost post={props.video}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <ZonePost post={props.zona2}/>
                        <HomeImageGallery imageGallery={props.imageGallery}/>
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
                <AdSense.Google
                    client='ca-pub-8087314495786312'
                    slot='3978222980'
                />
                <GridPosts
                    categorias={props.categorias}
                    category={'Sociedad'}
                    left={false}
                />
                <AdSense.Google
                    client='ca-pub-8087314495786312'
                    slot='2779935381'
                />
                <GridPosts
                    categorias={props.categorias}
                    category={'Cultura y espectáculos'}
                    left={true}
                />
                <AdSense.Google
                    client='ca-pub-8087314495786312'
                    slot='2530755385'
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
        <HomePopup 
            popup={props.popup} 
            closePopup={props.closePopup}
            popupEnabled={props.popupEnabled}
            popupContent={props.popupContent}
        />
    </div>
)

export default withStyles(styles)(Home)