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
            <Grid container spacing={24} className={this.props.classes.Suscripciones}>
                <Grid item xs={12}>
                    <h1 className={'page-title'}>
                        Suscripciones
                    </h1>
                    <div className={'video-container'}>
                        <video
                            src='https://www.carasycaretas.com.uy/images/2018/09/camp-suscripciones-2018-09.mp4'
                            width='1180'
                            height='664'
                            autoPlay='1'
                            controls
                        />
                    </div>
                    <p>
                        Formá parte de los que luchamos por la libertad de información. No te quedes con los titulares, suscribite a la Edición Impresa de Caras y Caretas o a la Edición Digital, ayudá a que Caras y Caretas siga mostrando lo que nadie te muestra.
                    </p>
                    <h3>Edición Impresa</h3>
                    <Grid container spacing={24}>
                        <Grid item md={4} xs={12} className={'item-button'}>
                            <a href={'https://www.mercadopago.com/mlu/checkout/start?pref_id=349329571-47464be7-2643-4e97-bfaf-8cfbe441f49b'} target={'_blank'}>
                                <Button variant='contained' color='primary'>
                                    Suscripción por 3 meses
                                </Button>
                            </a>
                        </Grid>
                        <Grid item md={4} xs={12} className={'item-button'}>
                            <a href={'https://www.mercadopago.com/mlu/checkout/start?pref_id=349329571-6f2a6c07-865b-49a7-9b29-82a95dd66324'} target={'_blank'}>
                                <Button variant='contained' color='primary'>
                                    Suscripción por 6 meses
                                </Button>
                            </a>
                        </Grid>
                        <Grid item md={4} xs={12} className={'item-button'}>
                            <a href={'https://www.mercadopago.com/mlu/checkout/start?pref_id=349329571-5a489638-258b-4f76-80bd-45ed9b9e9550'} target={'_blank'}>
                                <Button variant='contained' color='primary'>
                                    Suscripción por 1 año
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                    <h3>Edición Digital</h3>
                    <Grid container spacing={24}>
                        <Grid item md={6} xs={12} className={'item-button'}>
                            <a href={'https://www.mercadopago.com/mlu/checkout/start?pref_id=349329571-2cd0f377-0055-4117-8590-31b02fb261e8'} target={'_blank'}>
                                <Button variant='contained' color='primary'>
                                    Suscripción por 6 meses
                                </Button>
                            </a>
                        </Grid>
                        <Grid item md={6} xs={12} className={'item-button'}>
                            <a href={'https://www.mercadopago.com/mlu/checkout/start?pref_id=349329571-d6c5c0a1-70e7-4525-ac6b-2db6dafd3da3'} target={'_blank'}>
                                <Button variant='contained' color='primary'>
                                    Suscripción por 1 año
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Suscripciones)