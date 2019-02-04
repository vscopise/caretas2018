import React, { Component } from 'react'
import axios from 'axios'
import { 
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import CommentForm from './Comment-Form'
import CommentList from './Comment-List'

import styles from '../assets/styles'
import constants from '../assets/Constants'

class Comments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postId: this.props.post.id,
            comments: {},
            isLoading: true,
            sendingCommentLabel: '',
            urlCaretas: constants.urlCaretas,
            respondCommentId: this.props.post.id
        }
    }

    fetchComments(postId) {
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( this.state.urlCaretas + 'comments/?order=asc&per_page=99&post='+ postId )
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
            this.fetchComments(nextProps.post.id)
        }
    }

    sendComment = (comment) => {
        const postId = this.props.post.id
        this.setState({sendingCommentLabel: 'Enviando...'})
        axios
            .post( this.state.urlCaretas + 'comments', {
                'author_name': comment.author,
                'author_email': comment.email,
                'content': comment.content,
                'parent': comment.parent,
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

    respondComment = (e) => {
        e.preventDefault()
        this.setState({
            respondCommentId: Math.trunc(e.target.id),
            sendingCommentLabel: '',
        })
    }
    cancelRespond = (e) => {
        e.preventDefault()
        this.setState({
            respondCommentId: this.state.postId,
            sendingCommentLabel: '',
        })
    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Comments}>
                    <h4 className='comments-section-title'>
                        <span className='comments-count'>
                            {this.state.comments.length > 0 && `${this.state.comments.length} comentario`}
                            {this.state.comments.length > 1 && 's'}
                            {this.state.comments.length === 0 && 'Eres el primero en comentar'}
                        </span>
                        <span className='comments-count-more'>en:&nbsp; 
                            <span 
                                dangerouslySetInnerHTML={{
                                    __html: `${
                                        this.props.post.title.rendered.split(' ').length > 10 ? 
                                        this.props.post.title.rendered.replace(/(([^\s]+\s\s*){10})(.*)/,'$1…') : 
                                        this.props.post.title.rendered
                                    }`
                                }} 
                            />
                        </span>
                    </h4>
                    {
                        this.state.comments.length > 0 &&
                        <CommentList 
                            comments={this.state.comments} 
                            parent={0}
                            deep={0}
                            sendComment={this.sendComment}
                            respondCommentId={this.state.respondCommentId}
                            respondComment={this.respondComment}
                            cancelRespond={this.cancelRespond}
                            sendingCommentLabel={this.state.sendingCommentLabel}
                        />
                    }
                    {
                        this.state.respondCommentId === this.state.postId &&
                        <CommentForm 
                            sendComment={this.sendComment} 
                            sendingCommentLabel={this.state.sendingCommentLabel}
                            postId={this.state.postId}
                            respondCommentId={0}
                        />
                    }
                </div>
            )
        } else {
            return <Loading/>
        }

    }
}
export default withStyles(styles)(Comments)