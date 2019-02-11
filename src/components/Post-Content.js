import React from 'react'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'
import { withStyles } from '@material-ui/core'

import Comments from './Comments'

import styles from '../assets/styles'
import PostSharing from './Post-Sharing';

const PostContent = (props) => (
    <div className={props.classes.PostContent}>
        {
            window.innerWidth > 960 &&
            <ScrollUpButton />
        }
        {props.post.colgado && (<p className='colgado'>
            {props.post.colgado}
        </p>)}
        <h1 className='entry-title'
            dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
        />
        {props.post.excerpt.rendered && (<div 
            className='entry-excerpt'
            dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
        />)}
        <div className=''>
            {
                null !== props.post.video && (
                    <div className={'video-container'}>
                        <iframe 
                            width="777" 
                            height="437" 
                            src={'https://www.youtube.com/embed/'+/[^/]*$/.exec(props.post.video)[0]}
                            frameborder="0" 
                            allowFullScreen
                            title={'video'}
                        />
                    </div>
                )
            }
            {
                null === props.post.video && (
                    <img 
                        className='content-list-thumb' 
                        src={props.post.image_url[2]} 
                        alt={props.post.title.rendered} 
                    />
                )
            }
        </div>
        {
            null !== props.post.image_title && (
                <p className={'caption'}>
                    {props.post.image_title}
                </p>
            )
        }
        <div className='entry-meta'>
            <span className={'entry-meta-date'}>
                {
                    new Date(props.post.date).toLocaleDateString('es-ES', {
                        year: "numeric", 
                        month: "long", 
                        day: "numeric"
                    })
                }
            </span>
            <PostSharing post={props.post} isMobile={props.isMobile} />
        </div>
        <div 
            className='entry-content'
            dangerouslySetInnerHTML={{
                __html: props.post.content.rendered
                //__html: props.post.content.rendered.replace( /(\r\n|\n|\r)/gm, '<br />' )
            }} 
        />
        <Comments post={props.post} />
        
    </div>
)

export default withStyles(styles)(PostContent)