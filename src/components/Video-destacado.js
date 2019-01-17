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
import constants from '../assets/Constants'


const VideoDestacado = ( props ) => (
    <div className={props.classes.VideoDestacado}>
        {
            props.item===1 &&
            <h4 className={'widget-title'}>
                <span>{props.title}</span>
            </h4>
        }
        <div className={'video-container'}>
            <iframe 
                src={'https://www.youtube.com/embed/' + props.video}
                frameBorder={'0'} 
                allow={'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'}
                allowFullScreen
            />
        </div>
        {
            props.item===1 &&
            <div className={'sharing'}>
                <FacebookShareButton 
                    url={'https://www.youtube.com/embed/' + props.video} 
                    className={'sharing-button'}
                >
                    <FaFacebookSquare size={'2em'} color={'#4267b2'} />
                </FacebookShareButton>
                <TwitterShareButton 
                    url={'https://www.youtube.com/embed/' + props.video} 
                    className={'sharing-button'}
                >
                    <FaTwitterSquare size={'2em'} color={'#38A1F3'} />
                </TwitterShareButton>
                <a href={constants.urlInstagram} target={'_blank'} >
                    <FaInstagram size={'2em'} color={'#231F20'} className={'sharing-button'}/>
                </a>
            </div>
        }
    </div>    
)

export default withStyles(styles)(VideoDestacado)