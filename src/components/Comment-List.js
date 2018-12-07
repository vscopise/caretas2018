import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import styles from '../assets/styles'

class CommentList extends Component {

    constructor(props) {
        super(props)
    }

    unflatten =  (array, parent) => {
        var out = []
        for(var i in array) {
            if(array[i].parent == parent) {
                var children = this.unflatten(array, array[i].id)
                
                if(children.length) {
                    array[i].children = children
                }
                out.push(array[i])
            }
        }
        return out
    }

    render(){
        return (
            <div className={this.props.classes.CommentList}>
                {
                    //this.unflatten (this.props.comments, 0).map(comment => (
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
                        </div>
                    ))
                }
            </div>
        )
    }
}






export default withStyles(styles)(CommentList)