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

const SocialBar = ( props ) => (
    <div className={props.classes.SocialBar}>
        <a href='https://www.twitter.com/CarasyCaretasuy' target='_blank' alt='Twitter' title='Twitter'>
            <FaTwitterSquare className='icon'/>
        </a>
        <a href='https://www.facebook.com/CarasyCaretasuy/' target='_blank' alt='Facebook' title='Facebook'>
            <FaFacebookSquare className='icon'/>
        </a>
        <a href='https://www.instagram.com/carasycaretasuy/' target='_blank' alt='Instagram' title='Instagram'>
            <FaInstagram className='icon'/>
        </a>
        <a href='https://www.youtube.com/channel/UCUWwJ-F8S0e0lArnOaSdR2Q' target='_blank' alt='Youtube' title='Youtube'>
            <FaYoutube className='icon'/>
        </a>
    </div>
)

export default withStyles(styles)(SocialBar)