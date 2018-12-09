import React from 'react'
import { withStyles } from '@material-ui/core'

import CommentForm from './Comment-Form'

import styles from '../assets/styles'

const CommentList = ( props ) => (
    <div className={props.classes.CommentList}>
        {
            props.comments.filter(c => c.parent === props.parent).map(comment => (
                <div className={`comment ${props.deep%2 ? 'even' : 'odd'}`} key={comment.id}>
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
                                minute: "numeric"})}&nbsp;|&nbsp;
                                <span id={comment.id} onClick={props.respondComment}>
                                    Responder
                                </span>
                        </h4>
                    </div>
                    <div 
                        dangerouslySetInnerHTML={{__html: comment.content.rendered}} 
                    />
                    {
                        props.respondCommentId === comment.id &&
                        <CommentForm 
                            sendComment={props.sendComment}
                            sendingCommentLabel={props.sendingCommentLabel}
                            postId={comment.id}
                            respondCommentId={props.respondCommentId}
                            cancelRespond={props.cancelRespond}
                        />
                    }
                    {
                        props.comments.filter(c => c.parent === comment.id).length > 0 &&
                        <CommentList 
                            {...props} 
                            comments = {props.comments}
                            parent = {comment.id}
                            deep = {props.deep+1}
                        />
                    }                            
                </div>
            ))
        }
    </div>
)

export default withStyles(styles)(CommentList)