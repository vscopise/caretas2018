import React from 'react'
import { 
    withStyles
} from '@material-ui/core'

import logoMain from '../assets/logo-home.png'

const styles = {
    HeaderLogo: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        '& img': {
            maxWidth: '100%',
        },
        '& p': {
          fontFamily: 'Oswald',
          color: '#a0a0a0',
          fontSize: '0.9rem',
        },
    }
}


const HeaderLogo = (props) => (
    <div className={props.classes.HeaderLogo}>
        <img src={logoMain} alt='Caras y Caretas' />
        <p>Montevideo, {props.date}</p>
    </div>
)

export default withStyles(styles)(HeaderLogo);