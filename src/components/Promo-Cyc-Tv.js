import React from 'react'
import promoCycTv from '../assets/promocyctv.gif'

import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
import constants from '../assets/Constants'

const PromoCyCTv = ( props ) => (
    <div className={props.classes.PromoCyCTv}>
        <a href={constants.urlYoutube} target='_blank' className='image'>
            <img src={promoCycTv} alt={'Caras & Caretas TV'} />
        </a>
    </div>    
)

export default withStyles(styles)(PromoCyCTv)