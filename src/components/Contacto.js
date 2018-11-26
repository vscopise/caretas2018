import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
import MyTheme from '../assets/MyTheme'
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
            submitDisabled: false,
        }
    }

    componentDidMount() {
        
    }

    onChange = () => {}
    onBlur = () => {}
    handleContactSubmit = () => {}
    handleCheck = (name) => (e) => {
        this.setState({
            [name]: e.target.checked
        })
    }


    render() {
        return (
            <Grid container spacing={24}>
                <Grid item md={8} xs={12}>
                    <h1 className={'page-title'}>
                        Contacto
                    </h1>
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
                            color='primary' 
                            className={this.props.primary}
                            onClick={this.handleContactSubmit}
                            disabled={this.state.submitDisabled}
                        >
                            Enviar
                        </Button>
                    </div>

                </Grid>
                <Grid item md={4} xs={12}>
                    Sidebar
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Contacto)