import React from 'react'

import { 
    withStyles
} from '@material-ui/core'
import { 
    FaTwitterSquare, 
    FaFacebookSquare,
    FaInstagram, 
    FaYoutube 
} from 'react-icons/fa';

import styles from '../assets/styles'
import constants from '../assets/Constants'

const SocialBar = ( props ) => (
    <div className={props.classes.SocialBar}>
        <a href={constants.urlTwitter} 
            target='_blank' 
            alt='Twitter' 
            title='Twitter'
            rel='noopener noreferrer'
        >
            <FaTwitterSquare className='icon'/>
        </a>
        <a href={constants.urlFacebook} 
            target='_blank' 
            alt='Facebook' 
            title='Facebook'
            rel='noopener noreferrer'
        >
            <FaFacebookSquare className='icon'/>
        </a>
        <a href={constants.urlInstagram} 
            target='_blank' 
            alt='Instagram' 
            title='Instagram'
            rel='noopener noreferrer'
        >
            <FaInstagram className='icon'/>
        </a>
        <a href={constants.urlYoutube} 
            target='_blank' 
            alt='Youtube' 
            title='Youtube'
            rel='noopener noreferrer'
        >
            <FaYoutube className='icon'/>
        </a>
    </div>
)

export default withStyles(styles)(SocialBar)