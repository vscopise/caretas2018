import React, { Component } from 'react'

import bannerSusc from '../assets/banner-susc.jpg'
import SearchPosts from './Search-Posts'
import Banner from './Banner';
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'
import LasMasVistas from './Las-Mas-Vistas';
import ReviveBanner from './Revive-Banner';

class SidebarSingle extends Component {
    render() {
        return (
            <div className={this.props.classes.Sidebar}>
                <Banner 
                    image={bannerSusc} 
                    link={'https://www.carasycaretas.com.uy/suscribirse/'}
                />
                <div className='banner'>
                    <img 
                        src={bannerSusc} 
                        alt='' 
                        title='' 
                    />
                </div>
                <SearchPosts/>
                <div className='sidebar-component'>
                    <img 
                        src={bannerSusc} 
                        alt='' 
                        title='' 
                    />
                </div>
                <LasMasVistas/>
            </div>
        )
    }
}

export default withStyles(styles)(SidebarSingle)