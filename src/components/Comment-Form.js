import React, { Component } from 'react'
import { 
    withStyles
} from '@material-ui/core'

import styles from '../assets/styles'

class CommentForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            author: '',
            email: ''
        }
    }

    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    
    handleAuthor = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            author:this.state.author,
            email: this.state.email,
            comment: this.state.comment
        }
        this.props.handleComment(newComment)
    }

    render() {
        return(
            <div className={this.props.classes.CommentForm}>
                <h3 className='comment-reply-title'>Deja un comentario</h3>
                <p>Tu dirección de correo no será publicada</p>
                <p>
                    <label>
                        Comentario
                        <textarea 
                            name='comment' 
                            cols='45' 
                            rows='5' 
                            onChange={this.handleComment}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Nombre *
                        <input 
                            name='author'
                            type='text' 
                            onChange={this.handleAuthor}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Correo electrónico *
                        <input 
                            name='email'
                            type='text' 
                            onChange={this.handleEmail}
                        />
                    </label>
                </p>
                
                <p>
                    <input type='button'
                        value='PUBLICAR COMENTARIO' 
                        onClick={this.handleSubmit}
                    />
                </p>
            </div>
        )
    }
}

export default withStyles(styles)(CommentForm)