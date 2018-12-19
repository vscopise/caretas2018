import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from '../assets/styles'

const BotonEdicionImpresa = ( props ) => (
    <div className={props.classes.BotonEdicionImpresa}>
        <Link 
            to={{
                pathname: '/edicion-impresa/',
                state: { 
                    termId: 2,
                    page: 1
                }
            }}
            className={'link'}
        >
            Haga click para ir a la edición impresa
        </Link>
    </div>
)

export default withStyles(styles)(BotonEdicionImpresa)