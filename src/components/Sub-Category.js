import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'


import styles from '../assets/styles'

const SubCategory = (props) => (
    <div className={props.classes.SubCategory}>
    dfsdafsdfsad{props.catId}
    </div>
)

export default withStyles(styles)(SubCategory)