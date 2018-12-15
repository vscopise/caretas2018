import React, { Component } from 'react'

import SearchPosts from './Search-Posts'
import ColumnasDestacadas from './Columnas-Destacadas'
import LasMasVistas from './Las-Mas-Vistas'
import Columnistas from './Columnistas'
import TapaRevista from './Tapa-Revista'
import BannerSuplementos from './Banner-Suplementos';
import DfpBanner from './Dfp-Banner'


class SidebarHome extends Component {
    render() {
        return (
            <div className={'sidebar'}>
                <DfpBanner
                    dfpNetworkId={'90767959'} 
                    adUnit={'home_lateral_1'}
                    sizes={[ 
                        [300, 350], 
                        [300, 250], 
                        [300, 300],
                        [350, 300]
                    ]}
                />
                <SearchPosts/>
                <DfpBanner
                    dfpNetworkId={'90767959'} 
                    adUnit={'home_lateral_2'}
                    sizes={[ 
                        [300, 350], 
                        [300, 250], 
                        [300, 300],
                        [350, 300]
                    ]}
                />
                <ColumnasDestacadas 
                    categorias={this.props.categorias}
                    users={this.props.users}
                />
                <DfpBanner
                    dfpNetworkId={'90767959'} 
                    adUnit={'home_lateral_3'}
                    sizes={[ 
                        [300, 350], 
                        [300, 250], 
                        [300, 300],
                        [350, 300]
                    ]}
                />
                <LasMasVistas range={1}/>
                <Columnistas columnistas={this.props.columnistas}/>
                <BannerSuplementos/>
                <TapaRevista tapa={this.props.tapa}/>
            </div>
                
        )
    }
}

export default SidebarHome