import React, { Component } from 'react'

import bannerSusc from '../assets/banner-susc.jpg'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='sidebar-component'>
                    <img 
                        src={bannerSusc} 
                        alt='' 
                        title='' 
                    />
                </div>
                <div className='sidebar-component'>
                    <img 
                        src={bannerSusc} 
                        alt='' 
                        title='' 
                    />
                </div>
            </div>
        )
    }
}

export default Sidebar