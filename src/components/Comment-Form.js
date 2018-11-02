import React, { Component } from 'react'
import { 
    TextField,
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

class CommentForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            commentError: '',
            author: '',
            authorError: '',
            authorHelper: '',
            email: '',
            emailError: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
   

    validate = () => {
        let isError = false
        const errors = {}

        if (this.state.author < 3) {
            isError = true
            errors.authorHelper = 'Debe ingresar el autor'
        }

        if (isError) {
            this.setState({
                ...this.state,
                errors
            })
        }

        return isError
    }

    handleCommentSubmit = (e) => {
        e.preventDefault()
        const error = this.validate()
        let newComment = {
            author:this.state.author,
            email: this.state.email,
            content: this.state.content
        }
        if (!this.isError) {
           // this.props.handleComment(newComment)
        }
    }

    render() {
        return(
            <div className={this.props.classes.CommentForm}>
                <h3 className='comment-reply-title'>Deja un comentario</h3>
                <p>Tu dirección de correo no será publicada</p>
                <TextField 
                    name= 'content'
                    label='Comentario'
                    multiline
                    rows={5}
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                />
                <TextField 
                    name='author'
                    label='Nombre'
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                    //error={false}
                    //helperText={this.state.authorHelper}
                />
                <TextField 
                    name='email'
                    label='Email'
                    className='textfield'
                    fullWidth
                    required
                    onChange={this.handleChange}
                    
                />
                
                <p>
                    <input type='button'
                        value='PUBLICAR COMENTARIO' 
                        onClick={this.handleCommentSubmit}
                    />
                </p>
            </div>
        )
    }
}

export default withStyles(styles)(CommentForm)