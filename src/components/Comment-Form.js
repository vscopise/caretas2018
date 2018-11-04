import React, { Component } from 'react'
import { 
    Button,
    TextField,
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

class CommentForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            content: {
                value: '',
                helperText: '',
                error: false
            },
            author: {
                value: '',
                helperText: '',
                error: false
            },
            email: {
                value: '',
                helperText: '',
                error: false
            },
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                error: false
            }
        })
    }

    handleBlur = (e) => {
        if (e.target.value.length < 3) {
            this.setState({
                [e.target.name]:{
                    helperText: `Error, debe ingresar el ${this.errorMessage(e.target.name)}`,
                    error: true
                },
            })
        }

        //const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //const regex = [A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}
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

    errorMessage = (field) => {
        let message = {
            content: 'Comentario',
            author: 'Autor',
            email: 'Email'
        }
        return message[field]
    }

    validate = () => {
        let isError = false

        if ( this.state.content.error || '' === this.state.content.value ) {
            isError = true
            this.setState({
                content: {
                    helperText: 'Debe ingresar el comentario',
                    error: true
                }
            })
        }

        if ( this.state.author.error || '' === this.state.author.value ) {
            isError = true
            this.setState({
                author: {
                    helperText: 'Debe ingresar el autor',
                    error: true
                }
            })
        }

        //const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    handleCommentSubmit = (e) => {
        e.preventDefault()
        const error = this.validate()
        if ( !error ) {
            let Comment = {
                author: this.state.author.value,
                email: this.state.email.value,
                content: this.state.content.value
            }
           this.props.handleComment(Comment)
           //alert('submit')
        }
    }

    render() {
        return(
            <div className={this.props.classes.CommentForm}>
                <h3 className='comment-reply-title'>Deja un comentario</h3>
                <p>Tu dirección de correo no será publicada</p>
                <TextField 
                    name='content'
                    label='Comentario'
                    multiline
                    rows={5}
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={this.state.content.error}
                    helperText={this.state.content.helperText}
                    variant='filled'
                />
                <TextField 
                    name='author'
                    label='Nombre'
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={this.state.author.error}
                    helperText={this.state.author.helperText}
                    variant='filled'
                />
                <TextField 
                    name='email'
                    label='Email'
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    error={this.state.email.error}
                    helperText={this.state.email.helperText}
                    variant='filled'
                />
                <Button 
                    variant='contained' 
                    color='secondary' 
                    className='button'
                    onClick={this.handleCommentSubmit}
                >
                    PUBLICAR COMENTARIO
                </Button>
                <span className='sending-comment-label'>
                    {this.props.sendingCommentLabel}
                </span>
            </div>
        )
    }
}

export default withStyles(styles)(CommentForm)