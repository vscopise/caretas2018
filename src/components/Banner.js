import React from 'react'
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const Banner = (props) => (
    <div className={props.classes.Banner}>
        <a 
            href={props.link} 
            target={'_blank'}
        >
            <img src={props.image} alt={''}/>
        </a>
    </div>
)
export default withStyles(styles)(Banner)