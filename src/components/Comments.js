import React, { Component } from 'react'
import axios from 'axios'
import { 
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import CommentForm from './Comment-Form'
import CommentList from './Comment-List'

import styles from '../assets/styles'

class Comments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postId: this.props.id,
            comments: {},
            isLoading: true,
            sendingCommentLabel: ''
        }
    }

    fetchComments(postId) {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'comments/?order=asc&post='+ postId )
            .then(res => {
                this.setState({ 
                    comments: res.data,
                    isLoading: false
                })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchComments(this.props.post.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post.id !== this.props.post.id) {
            this.setState({comments: null})
            this.fetchComments(this.props.post.id)
        }
    }

    sendComment = (comment) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        const postId = this.props.post.id
        this.setState({sendingCommentLabel: 'Enviando...'})
        axios
        .post( url + 'comments', {
            'author_name': comment.author,
            'author_email': comment.email,
            'content': comment.content,
            'post': postId
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                sendingCommentLabel: 'Muchas gracias, su comentario fue enviado'
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Comments}>
                    <h4 className='comments-section-title'>
                        <span className='comments-count'>
                            {this.state.comments.length>0 && `${this.state.comments.length} comentarios`}
                            {this.state.comments.length===0 && 'Eres el primero en comentar'}
                        </span>
                        <span className='comments-count-more'>
                            en {this.props.post.title.rendered}
                        </span>
                    </h4>
                    {
                        this.state.comments.length > 0 &&
                        <CommentList 
                            comments={this.state.comments} 
                        />
                    }
                    <CommentForm 
                        handleComment={this.sendComment} 
                        sendingCommentLabel={this.state.sendingCommentLabel}
                    />
                </div>
            )
        } else {
            return <Loading/>
        }

    }
}
export default withStyles(styles)(Comments)