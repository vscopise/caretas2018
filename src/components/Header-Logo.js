import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'

import logoMain from '../assets/logo-home.png'

import styles from '../assets/styles'

const HeaderLogo = (props) => (
    <div className={props.classes.HeaderLogo}>
        <Link to={{pathname: '/'}}>
            <img src={logoMain} alt='Caras y Caretas' />
        </Link>
        <p>Montevideo, {props.date}</p>
    </div>
)

export default withStyles(styles)(HeaderLogo)