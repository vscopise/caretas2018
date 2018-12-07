import React from 'react'
import { withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import styles from '../assets/styles'

const Footer = (props) => (
    <div className={props.classes.Footer}>
        <div className='wrapper-inner'>
            &copy; {props.date.getFullYear()} 
            CARAS Y CARETAS - 
            PARAGUAY 1478 PISO 2 - 
            TEL. 2903 3188 - 
            <Link to={'/terminos-y-condiciones/'}>TÉRMINOS Y CONDICIONES</Link> - 
            <Link to={'/contacto/'}>CONTACTO</Link>
        </div>
    </div>
)

export default withStyles(styles)(Footer)