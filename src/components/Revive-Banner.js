import React from 'react'
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const ReviveBanner = (props) => (
    <div className={props.classes.Banner}>
        <ins 
            data-revive-zoneid="2" 
            data-revive-id="228665dacbc196ecb3038cca2934de68" 
        />
        <script async src="//ads.carasycaretas.com.uy/www/delivery/asyncjs.php" />
    </div>
)
export default withStyles(styles)(ReviveBanner)