import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles
} from '@material-ui/core'

import BannerSuplementosImg from '../assets/banner-suplementos.jpg'
import styles from '../assets/styles'

const BannerSuplementos = (props) => (
    <div className={props.classes.Banner}>
        <Link to={{
            pathname: '/edicion-impresa/?pag=suplementos',
            state: { 
                termId: 3,
                page: 1
            }
        }}>
            <img 
                src={BannerSuplementosImg} 
                alt={'Nuestros suplementos'}
                title={'Nuestros suplementos'}
            />
        </Link>
    </div>
)

export default withStyles(styles)(BannerSuplementos)