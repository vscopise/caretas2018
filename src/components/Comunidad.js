import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'


import Loading from './Loading'
import SidebarPage from './Sidebar-Page'

import { 
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Grid,
    Radio,
    TextField,
    withStyles, 
    RadioGroup
} from '@material-ui/core'
import styles from '../assets/styles'


class Comunidad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: {
                value: '',
                helperText: '',
            },
            apellidos: {
                value: '',
                helperText: '',
            },
            gender: {
                value: 'male',
            },
            cumpleanios: {
                value: '',
                helperText: '',
            },
            phone: {
                value: '',
                helperText: '',
            },
            email: {
                value: '',
                helperText: '',
            },
            direccion: {
                value: '',
                helperText: '',
            },
            localidad: {
                value: '',
                helperText: '',
            },
            ciudad: {
                value: '',
                helperText: '',
            },
            pais: {
                value: '',
                helperText: '',
            },
            consumo: {
                value: 'impr',
            },
            contenido: {
                value: 'poli',
            },
            status: 'ready',
            enabled: false,
        }
    }

    onChange = (e) => {
        let isError = false
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                error: false
            }
        });
        if (e.target.value.length < 3) {
            isError = true
            this.setState({
                [e.target.name]:{
                    helperText: `Error, debe ingresar su ${this.errorMessage(e.target.name)}`,
                    error: true
                },
            })
        }

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ('email' === e.target.name && !regex.test(e.target.value)) {
            isError = true
            this.setState({
                [e.target.name]:{
                    helperText: `Error, el email no tiene el formato correcto`,
                    error: true
                },
            })
        }
        
        this.setState({
            enabled: isError ? false: true
        })
    }

    handleContactSubmit = () => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        //const url = 'http://localhost/caretas/wp-json/wp/v2/'
        let state = this.state
        this.setState({
            status: 'sending'
        })
        axios
            .post(
                url + 'send-comunidad', {
                    'nombre': state.nombre.value,
                    'apellidos': state.apellidos.value,
                    'cumpleanios': state.cumpleanios.value,
                    'gender': state.gender.value,
                    'email': state.email.value,
                    'direccion': state.direccion.value,
                    'localidad': state.localidad.value,
                    'ciudad': state.ciudad.value,
                    'pais': state.pais.value,
                    'phone': state.phone.value,
                    'consumo': state.consumo.value,
                    'contenido': state.contenido.value,
                }
            )
            .then(
                res => {
                    //console.log('res')
                    //alert(res.data.message)
                    this.setState({
                        status: 'send',
                        message: res.data.message
                    })
                }
            )
            .catch(error => console.log(error))
    }

    handleCheck = (name) => (e) => {
        this.setState({
            [name]: e.target.checked
        })
    }

    errorMessage = (field) => {
        let message = {
            nombre: 'Nombre',
            apellidos: 'Apellidos',
            phone: 'Teléfono',
            email: 'Email',
            direccion: 'Dirección',
            localidad: 'Localidad',
            ciudad: 'Ciudad',
            pais: 'País',
        }
        return message[field]
    }

    render() {
        return (
            <Grid container spacing={24}>
                <ScrollUpButton />
                <Grid item md={8} xs={12}>
                    <h1 className={'page-title'}>Comunidad</h1>
                    <p>
                        Adhiera a la Comunidad de Lectores de Caras y Caretas, para recibir gacetillas electrónicas, alertas informativas, y ser beneficiado de promociones y obsequios.
                    </p>
                    {
                        this.state.status==='ready' &&
                        <Fragment>
                            <div className={this.props.classes.Contacto}>
                                <h2 style={{marginTop: 0, marginBottom:0,}}>Datos de identidad</h2>
                                <TextField 
                                    name='nombre'
                                    label='Nombre'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.nombre.error}
                                    helperText={this.state.nombre.helperText}
                                    variant='filled'
                                    //value={this.state.nombre.value}
                                />
                                <TextField 
                                    name='apellidos'
                                    label='Apellidos'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.apellidos.error}
                                    helperText={this.state.apellidos.helperText}
                                    variant='filled'
                                    //value={this.state.apellidos.value}
                                />
                                <TextField
                                    name='cumpleanios'
                                    label='Fecha de Nacimiento'
                                    type='date'
                                    className='textfield'
                                    defaultValue='1900-01-01'
                                    onChange={this.onChange}
                                    //helperText={this.state.surname.helperText}
                                    variant='filled'
                                />
                                <div className='form-select'>
                                    <FormLabel component="legend">Sexo</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender"
                                        value={this.state.gender.value}
                                        onChange={this.onChange}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                        <FormControlLabel value="other" control={<Radio />} label="Diverso" />  
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className={this.props.classes.Contacto}>
                                <h2 style={{marginTop: 0, marginBottom:0,}}>Datos de Contacto</h2>
                                <TextField 
                                    name='email'
                                    label='Correo electrónico'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.email.error}
                                    helperText={this.state.email.helperText}
                                    variant='filled'
                                />
                                <TextField 
                                    name='direccion'
                                    label='Dirección'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.direccion.error}
                                    helperText={this.state.direccion.helperText}
                                    variant='filled'
                                />
                                <TextField 
                                    name='localidad'
                                    label='Localidad'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.localidad.error}
                                    helperText={this.state.localidad.helperText}
                                    variant='filled'
                                />
                                <TextField 
                                    name='ciudad'
                                    label='Ciudad'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.ciudad.error}
                                    helperText={this.state.ciudad.helperText}
                                    variant='filled'
                                />
                                <TextField 
                                    name='pais'
                                    label='País'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    error={this.state.pais.error}
                                    helperText={this.state.pais.helperText}
                                    variant='filled'
                                />
                                <TextField 
                                    name='phone'
                                    label='Teléfono'
                                    className='textfield'
                                    fullWidth
                                    required
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}
                                    error={this.state.phone.error}
                                    helperText={this.state.phone.helperText}
                                    variant='filled'
                                />
                            </div>
                            <div className={this.props.classes.Contacto}>
                                <h2 style={{marginTop: 0, marginBottom:0,}}>Datos de consumo</h2>
                                <div className='form-select'>
                                    <FormLabel component="legend">Lee Caras y Caretas principalmente en:</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="consumo"
                                        value={this.state.consumo.value}
                                        onChange={this.onChange}
                                    >
                                        <FormControlLabel value="impr" control={<Radio />} label="Edición impresa" />
                                        <FormControlLabel value="sweb" control={<Radio />} label="Solo web" />
                                        <FormControlLabel value="face" control={<Radio />} label="Facebook" />
                                        <FormControlLabel value="otra" control={<Radio />} label="Otras redes sociales" />  
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className={this.props.classes.Contacto}>
                                <h2 style={{marginTop: 0, marginBottom:0,}}>Datos de intereses de contenido</h2>
                                <div className='form-select'>
                                    <FormLabel component="legend">Le interesan los contenidos relacionados con:</FormLabel>
                                    <RadioGroup
                                        aria-label="contenido"
                                        name="contenido"
                                        value={this.state.contenido.value}
                                        onChange={this.onChange}
                                    >
                                        <FormControlLabel value="poli" control={<Radio />} label="Política" />
                                        <FormControlLabel value="soci" control={<Radio />} label="Sociedad" />
                                        <FormControlLabel value="econ" control={<Radio />} label="Economía" />
                                        <FormControlLabel value="inte" control={<Radio />} label="Internacionales" />  
                                        <FormControlLabel value="cult" control={<Radio />} label="Cultura" />  
                                        <FormControlLabel value="depo" control={<Radio />} label="Deportes" />  
                                        <FormControlLabel value="opin" control={<Radio />} label="Opinión" />  
                                        <FormControlLabel value="todo" control={<Radio />} label="Todos" />  
                                    </RadioGroup>
                                </div>
                            </div>
                            <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={this.handleContactSubmit}
                                disabled={!this.state.enabled}
                            >
                                Enviar
                            </Button>
                        </Fragment>
                    }
                    {
                        this.state.status==='sending' &&
                        <Loading/>
                    }
                    {
                        this.state.status==='send' &&
                        <div className={this.props.classes.Contacto}>
                            <h3>{this.state.message}</h3>
                        </div>
                    }
                </Grid>
                <Grid item md={4} xs={12}>
                    <SidebarPage/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Comunidad)