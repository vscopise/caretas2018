import React from 'react'
import { 
    withStyles
} from '@material-ui/core'

const styles = {
    PostContent: {
        '& .colgado': {
            fontFamily: 'Oswald',
            color: '#6a6a6a',
            textTransform: 'uppercase',
            margin: 0,
        },
        '& .entry-title': {
            marginTop: 0,
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .entry-excerpt': {
            borderTop: '1px solid #888',
            borderBottom: '1px solid #888',
            marginTop: 15,
            marginBottom: 15,
            paddingTop: 8,
            paddingBottom: 10,
        },
        '& .entry-excerpt p': {
            margin: 0,
            lineHeight: '150%',
            fontSize: '120%',
            color: '#333',
        },
        '& .entry-meta': {
            fontSize: '.75rem',
            textTransform: 'uppercase',
            borderBottom: '1px solid #888',
            marginBottom: 15,
            paddingBottom: 15,
        },
        '& .entry-content p': {
            margin: '0 0 1.25rem',
            fontSize: '107%',
        },
    }
}

const PostContent = (props) => (
    <div className={props.classes.PostContent}>
        <p className='colgado'>
            {props.post.colgado}
        </p>
        <h1 className='entry-title'
            dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
        />
        <div 
            className='entry-excerpt'
            dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
        />
        <div className=''>
            <img 
                className='content-list-thumb' 
                src={props.post.image_url[2]} 
                alt={props.post.title.rendered} 
            />
        </div>
        <div className='entry-meta'>
            {props.date}
        </div>
        <div 
            className='entry-content'
            dangerouslySetInnerHTML={{__html: props.post.content.rendered}} 
        />
    </div>
)

export default withStyles(styles)(PostContent)