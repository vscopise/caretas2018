import React from 'react'

import bannerSusc from '../assets/banner-susc.jpg'
import SearchPosts from './Search-Posts'
import Banner from './Banner';
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'
import LasMasVistas from './Las-Mas-Vistas';
import DfpBanner from './Dfp-Banner'

const SidebarPage = (props) => (
    <div className={props.classes.Sidebar}>
        <Banner 
            image={bannerSusc} 
            link={'https://www.carasycaretas.com.uy/suscribirse/'}
        />
        <DfpBanner
            dfpNetworkId={'90767959'} 
            adUnit={'columna_lateral'}
            sizes={[ 
                [300, 250], 
                [290, 290], 
                [160, 600], 
                [300, 300]
            ]}
        />
        <Banner 
            image={bannerSusc} 
            link={'https://www.carasycaretas.com.uy/suscribirse/'}
        />
        <SearchPosts/>
        <Banner 
            image={bannerSusc} 
            link={'https://www.carasycaretas.com.uy/suscribirse/'}
        />
        <LasMasVistas range={3}/>
    </div>
)

export default withStyles(styles)(SidebarPage)