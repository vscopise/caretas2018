import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const TapaRevista = ( props ) => (
    <div className={props.classes.TapaRevista}>
        <h4 className='widget-title'>
            <span>Edición impresa</span>
        </h4>
        <Link to={{
            pathname: '/edicion-impresa/',
            state: { 
                termId: 2,
                page: 1
            }
        }}>
            <img 
                src={props.tapa[0].image} 
                alt={'Caras y Caretas'}
                title={'Caras y Caretas'}
            />
        </Link>
    </div>
                
)

export default withStyles(styles)(TapaRevista)