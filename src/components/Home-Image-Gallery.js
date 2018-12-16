import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../assets/styles'

const HomeImageGallery = ( props ) => (
    <div className={props.classes.HomeImageGallery}>
        <h4 className='widget-title'>
            <span>Galería</span>
        </h4>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={1500}
        >
        {
            props.imageGallery.images.map( image => (
                <img src={image} alt='' key={image} />

            ))
        }
        </Carousel>
        <h2>{props.imageGallery.title}</h2>
    </div>
    
)
export default withStyles(styles)(HomeImageGallery)