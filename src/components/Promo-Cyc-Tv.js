import React from 'react'
import promoCycTv from '../assets/promocyctv.gif'

import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const PromoCyCTv = ( props ) => (
    <div className={props.classes.PromoCyCTv}>
        <a href='https://www.youtube.com/channel/UCGc2JWsZwMX9w4BQ3w2ubcA' target='_blank' className='image'>
            <img src={promoCycTv} alt={'Caras & Caretas TV'} />
        </a>
    </div>    
)

export default withStyles(styles)(PromoCyCTv)