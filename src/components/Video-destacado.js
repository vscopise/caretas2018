import React from 'react'

import { 
    FacebookShareButton,
    TwitterShareButton,

} from 'react-share'

import { 
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagram 
} from 'react-icons/fa';

import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const VideoDestacado = ( props ) => (
    <div className={props.classes.VideoDestacado}>
        <h4 className={'widget-title'}>
            <span>{props.video.title}</span>
        </h4>
        <div className={'video-container'}>
            <iframe 
                src={'https://www.youtube.com/embed/' + props.video.id}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </div>
        <div classname={'sharing'}>
            <FacebookShareButton url={'https://www.youtube.com/embed/' + props.video.id}>
                <FaFacebookSquare size={'2em'} color={'#4267b2'} />
            </FacebookShareButton>
            <TwitterShareButton url={'https://www.youtube.com/embed/' + props.video.id} title={'Twitter'}>
                <FaTwitterSquare size={'2em'} color={'#38A1F3'} />
            </TwitterShareButton>
            <FaInstagram size={'2em'} color={'#231F20'} />
        </div>
    </div>    
)

export default withStyles(styles)(VideoDestacado)