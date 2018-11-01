import React, { Component } from 'react'
import { 
    withStyles
} from '@material-ui/core'

const styles = {
    Comments: {
        '& .comments-section-title': {
            background: '#ccdee8',
            fontSize: '.875rem',
            fontWeight: '400',
            textTransform: 'uppercase',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            color: '#1f1e1e',
            '& .comments-count': {
                background: '#d00',
                color: '#fff',
                padding: 20,
                float: 'left',
            },
            '& .comments-count-more': {
                padding: 20,
                float: 'left',
            },
        },
        '& .commentlist': {
            padding: '20px 20px 5px',
            marginBottom: 20,
            background: '#efefef',
            '& .comment': {
                padding: '20px 20px 10px',
                background: '#fff',
                borderBottom: '5px solid #ccdee8',
                marginBottom: 20,
                '& .comment-meta': {

                    marginBottom: '1.25rem',
                }
            }
        }
    }
}



class Comments extends Component {

    constructor(props) {
        super(props)
    }

    render (){
        return(

            <div className={this.props.classes.Comments}>
                <h4 className='comments-section-title'>
                    <span className='comments-count'>{this.props.comments.length} comentarios</span>
                    <span className='comments-count-more'>
                        en {this.props.post.title.rendered}
                    </span>
                </h4>
                <div className='commentlist'>
                    {
                        this.props.comments.map(comment => (
                            <div className='comment' key={comment.id}>
                                <h4 className='comment-meta'>
                                    {comment.author_name}&nbsp;|&nbsp; 
                                    {comment.date.toLocaleDateString}
                                    {new Intl.DateTimeFormat('es-ES', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: '2-digit' 
                                    }).format(comment.date)}

                                </h4>
                                <div 
                                    dangerouslySetInnerHTML={{__html: comment.content.rendered}} 
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        )

    }
}
export default withStyles(styles)(Comments)