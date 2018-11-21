import React, { Component } from 'react'

import SearchPosts from './Search-Posts'
import ColumnasDestacadas from './Columnas-Destacadas';
import LasMasVistas from './Las-Mas-Vistas';
import Columnistas from './Columnistas';

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
                <Columnistas columnistas={this.props.columnistas}/>
            </div>
                
        )
    }
}

export default SidebarHome