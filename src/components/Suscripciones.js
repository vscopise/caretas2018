import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import SidebarPage from './Sidebar-Page'

import { Link } from 'react-router-dom'


import { 
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
import Theme from '../assets/MyTheme'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class Suscripciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            post: {}
        }
    }

    
    

    render() {
        return (
            <div className={this.props.classes.Suscripciones}>
                <h1 className={'page-title'}>
                    Suscripciones
                </h1>
                <video
                    src='https://www.carasycaretas.com.uy/images/2018/09/camp-suscripciones-2018-09.mp4'
                    width='1180'
                    height='664'
                    autoPlay='1'
                />
                <p>
                    Formá parte de los que luchamos por la libertad de información. No te quedes con los titulares, suscribite a la Edición Impresa de Caras y Caretas o a la Edición Digital, ayudá a que Caras y Caretas siga mostrando lo que nadie te muestra.
                </p>
                <h4>Edición Impresa</h4>
                <Grid container spacing={24}>
                    <Grid item md={4} xs={12} className={'item-button'}>
                        <Button variant='contained' color='primary'>
                            Suscripción por 3 meses
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12} className={'item-button'}>
                    1</Grid>
                    <Grid item md={4} xs={12} className={'item-button'}>
                    1</Grid>
                </Grid>
                <h4>Edición Digital</h4>
                <Grid container spacing={24}>
                    <Grid item md={6} xs={12} className={'item-button'}>
                    1</Grid>
                    <Grid item md={6} xs={12} className={'item-button'}>
                    1</Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Suscripciones)