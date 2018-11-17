import React, { Component } from 'react'

import bannerSusc from '../assets/banner-susc.jpg'
import SearchPosts from './Search-Posts'
import ColumnasDestacadas from './Columnas-Destacadas';
import LasMasVistas from './Las-Mas-Vistas';

class SidebarHome extends Component {
    render() {
        return (
            <div className='sidebar'>
                <SearchPosts/>
                <ColumnasDestacadas 
                    categorias={this.props.categorias}
                    users={this.props.users}
                />
                <LasMasVistas/>
            </div>
                
        )
    }
}

export default SidebarHome