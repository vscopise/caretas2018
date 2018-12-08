import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import styles from '../assets/styles'

class CommentList extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        const children = this.props.comments

        return (
            <div className={'CommentList'}>
                {
                    this.props.comments.map(comment => (
                        <div className='comment' key={comment.id}>
                            <div className='comment-meta'>
                                <img 
                                    src={comment.author_avatar_urls[96]} 
                                    alt='' 
                                />
                                <h4>
                                    {comment.author_name}&nbsp;|&nbsp; 
                                    {new Date(comment.date).toLocaleDateString('es-ES', {
                                        year: "numeric", 
                                        month: "long", 
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric"})}
                                </h4>
                            </div>
                            <div 
                                dangerouslySetInnerHTML={{__html: comment.content.rendered}} 
                            />
                            {
                                this.props.comments.filter(c => c.parent === comment.id) &&
                                <CommentList comments={this.props.comments.filter(c => c.parent === comment.id)}/>
                            }                            
                        </div>
                    ))
                }
            </div>
        )
    }
}






export default withStyles(styles)(CommentList)