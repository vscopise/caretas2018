import React, { Component } from 'react'

import bannerSusc from '../assets/banner-susc.jpg'
import SearchPosts from './Search-Posts'

class SidebarHome extends Component {
    render() {
        return (
            <div>
                <div className='sidebar-component'>
                    <SearchPosts/>
                </div>
                
            </div>
        )
    }
}

export default SidebarHome