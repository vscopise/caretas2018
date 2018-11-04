import React from 'react'
import { 
    withStyles
} from '@material-ui/core'

import logoMain from '../assets/logo-home.png'

import styles from '../assets/styles'

const HeaderLogo = (props) => (
    <div className={props.classes.HeaderLogo}>
        <a href='/' >
            <img src={logoMain} alt='Caras y Caretas' />
        </a>
        <p>Montevideo, {props.date}</p>
    </div>
)

export default withStyles(styles)(HeaderLogo)