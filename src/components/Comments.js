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
            isLoading: true
        }
    }

    componentDidMount() {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'comments/?order=asc&post='+ this.props.post.id )
            .then(res => {
                this.setState({ 
                    comments: res.data,
                    isLoading: false
                })
        })
        .catch(error => console.log(error))
    }

    sendNewComment = (comment) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        const postId = this.props.post.id
        axios
        .post( url + 'comments', {
            'author_name': comment.author,
            'author_email': comment.email,
            'content': comment.content,
            'post': postId
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.log(error))
    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Comments}>
                    <h4 className='comments-section-title'>
                        <span className='comments-count'>
                            {this.state.comments.length} comentarios
                        </span>
                        <span className='comments-count-more'>
                            en {this.props.post.title.rendered}
                        </span>
                    </h4>
                    
                    <CommentList 
                        comments={this.state.comments} 
                    />
                    <CommentForm 
                        handleComment={this.sendNewComment} 
                    />
                </div>
            )
        } else {
            return <Loading/>
        }

    }
}
export default withStyles(styles)(Comments)