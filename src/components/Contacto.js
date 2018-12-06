import React, { Component } from 'react'
import axios from 'axios'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'


import Loading from './Loading'
import SidebarPage from './Sidebar-Page'

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


class Contacto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: '',
                helperText: '',
                error: false
            },
            phone: {
                value: '',
                helperText: '',
                error: false
            },
            email: {
                value: '',
                helperText: '',
                error: false
            },
            subject: {
                value: '',
                helperText: '',
                error: false
            },
            message: {
                value: '',
                helperText: '',
                error: false
            },
            chk1: false,
            chk2: false,
            chk3: false,
            status: 'ready',
            message: '',
        }
    }

    componentDidMount() {
        
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                error: false
            }
        })
    }

    onBlur = (e) => {
        if (e.target.value.length < 3) {
            this.setState({
                [e.target.name]:{
                    helperText: `Error, debe ingresar el ${this.errorMessage(e.target.name)}`,
                    error: true
                },
            })
        }

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ('email' === e.target.name && !regex.test(e.target.value)) {
            this.setState({
                [e.target.name]:{
                    helperText: `Error, el email no tiene el formato correcto`,
                    error: true
                },
            })
        }

    }

    validate = () => {
        let isError = false

        if ( this.state.name.error || '' === this.state.name.value ) {
            isError = true
            this.setState({
                name: {
                    helperText: 'Debe ingresar el Nombre',
                    error: true
                }
            })
        }

        if ( this.state.phone.error || '' === this.state.phone.value ) {
            isError = true
            this.setState({
                phone: {
                    helperText: 'Debe ingresar el teléfono',
                    error: true
                }
            })
        }

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( this.state.email.error ||
            ( '' === this.state.email.value || 
            !regex.test(this.state.email.value) )
        ) {
            isError = true
            this.setState({
                email: {
                    helperText: 'Debe ingresar el Email',
                    error: true
                }
            })
        }

        return isError
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
                url + 'send', {
                    'name': state.name.value,
                    'phone': state.phone.value,
                    'email': state.email.value,
                    'subject': state.subject.value,
                    'message': state.message.value,
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
            name: 'Nombre',
            phone: 'Teléfono',
            email: 'Email'
        }
        return message[field]
    }

    render() {
        const enabled =
            this.state.chk1 &&
            this.state.chk2 &&
            this.state.chk3 &&
            !this.validate()
        return (
            <Grid container spacing={24}>
                <ScrollUpButton />
                <Grid item md={8} xs={12}>
                    <h1 className={'page-title'}>
                        Contacto
                    </h1>
                    {
                        this.state.status==='ready' &&
                        <div className={this.props.classes.Contacto}>
                            <TextField 
                                name='name'
                                label='Nombre'
                                className='textfield'
                                fullWidth
                                required
                                onChange={this.onChange}
                                onBlur={this.onBlur}
                                error={this.state.name.error}
                                helperText={this.state.name.helperText}
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
                            <TextField 
                                name='email'
                                label='Correo electrónico'
                                className='textfield'
                                fullWidth
                                required
                                onChange={this.onChange}
                                onBlur={this.onBlur}
                                error={this.state.email.error}
                                helperText={this.state.email.helperText}
                                variant='filled'
                            />
                            <TextField 
                                name='subject'
                                label='Asunto'
                                className='textfield'
                                fullWidth
                                required
                                onChange={this.onChange}
                                onBlur={this.onBlur}
                                error={this.state.subject.error}
                                helperText={this.state.subject.helperText}
                                variant='filled'
                            />
                            <TextField 
                                name='message'
                                label='Mensaje'
                                multiline
                                rows={5}
                                className='textfield'
                                fullWidth
                                required
                                onChange={this.onChange}
                                onBlur={this.onBlur}
                                error={this.state.subject.error}
                                helperText={this.state.subject.helperText}
                                variant='filled'
                            />
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.chk1}
                                            onChange={this.handleCheck('chk1')}
                                            value='chk1'
                                        />
                                    }
                                    label={'He leído y acepto el Aviso Legal y la Política de Privacidad.'}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.chk2}
                                            onChange={this.handleCheck('chk2')}
                                            value='chk2'
                                        />
                                    }
                                    label={' Declaro, bajo mi propia responsabilidad, ser mayor de 18 años y respondo de manera exclusiva de la veracidad de dicha declaración.'}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.chk3}
                                            onChange={this.handleCheck('chk3')}
                                            value='chk3'
                                        />
                                    }
                                    label={'Acepto recibir la información que la entidad considere oportuno enviarme por correo electrónico o medio de comunicación electrónica equivalente. (Es posible darse de baja en cualquier momento).'}
                                />
                            </FormGroup>
                            <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={this.handleContactSubmit}
                                disabled={!enabled}
                            >
                                Enviar
                            </Button>
                        </div>
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

export default withStyles(styles)(Contacto)