import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
    Footer: {
        background: '#333',
        color: '#fff',
        fontSize: '.75rem',
        padding: '.625rem 0',
        '& .wrapper-inner': {
            width: '90%',
            maxWidth: 1180,
            margin: '0 auto',
            fontFamily: 'Oswald',
        },
    }
}

const Footer = (props) => (
    <div className={props.classes.Footer}>
        <div className='wrapper-inner'>
            &copy; {props.date.getFullYear()} CARAS Y CARETAS - PARAGUAY 1478 PISO 2 - TEL. 2903 3188 - TÉRMINOS Y CONDICIONES - CONTACTO
        </div>
    </div>
)

export default withStyles(styles)(Footer)