import React from 'react'
import { withStyles } from '@material-ui/core'

import styles from '../assets/styles'

const CommentList = (props) => (
    <div className={props.classes.CommentList}>
        {
            props.comments.map(comment => (
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
                </div>
            ))
        }
    </div>
)
export default withStyles(styles)(CommentList)