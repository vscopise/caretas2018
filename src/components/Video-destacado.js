import React from 'react'


import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const VideoDestacado = ( props ) => (
    <div className={props.classes.VideoDestacado}>
        <h4 className='widget-title'>
            <span>{props.video.title}</span>
        </h4>
        <div className='video-container'>
            <iframe 
                src={'https://www.youtube.com/embed/' + props.video.id}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </div>
    </div>    
)

export default withStyles(styles)(VideoDestacado)