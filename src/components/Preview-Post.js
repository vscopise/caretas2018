import React from 'react'

import { Link } from 'react-router-dom'

import { Grid, withStyles } from '@material-ui/core'

import styles from '../assets/styles'

const PreviewPost = ( props ) => {
    if ( 'large' === props.size ) {
        return  (
            <div className={props.classes.PreviewPost}>
                <Link 
                    to={{
                        pathname: '/' + props.post.slug, 
                        state: {postId: props.post.id, post: props.post}
                    }}
                >
                {
                    (props.post.image_url) &&
                    <img 
                        className='content-list-thumb' 
                        src={props.post.image_url[2]} 
                        alt={props.post.title.rendered} 
                    />

                }
                    <div className='entry-meta'>
                        {
                            props.post.categories.map(cat => (
                                <span className='entry-meta-cats' key={cat}>
                                    {props.categories.find (
                                        category => category.term_id === cat
                                    ).name}
                                </span>
                            ))
                        }
                        <span className='entry-meta-date'>{
                            new Date(props.post.date).toLocaleDateString('es-ES', {
                                year: "numeric", 
                                month: "long", 
                                day: "numeric"
                            })
                        }</span>
                    </div>
                    <h3 
                        className='content-lead-title'
                        dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
                    />
                    <div 
                        dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                    />
                </Link>
            </div>
        )
    } else {
        return (
            <div className={props.classes.PreviewPost}>
                <Link 
                    to={{
                        pathname: '/' + props.post.slug, 
                        state: {postId: props.post.id, post: props.post}}}
                >
                    <Grid 
                        container spacing={24} 
                        className='content-list'
                    >
                        <Grid item md={4} xs={12}>
                            {
                                (props.post.image_url) &&
                                <img 
                                    className='content-list-thumb' 
                                    src={props.post.image_url[1]} 
                                    alt={props.post.title.rendered} 
                                />
                            }
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <div className='entry-meta'>
                                {
                                    props.post.categories.map(cat => (
                                        <span className='entry-meta-cats' key={cat}>
                                            {props.categories.find (
                                                category => category.term_id === cat
                                            ).name}
                                        </span>
                                    ))
                                }
                                <span className='entry-meta-date'>{
                                    new Date(props.post.date).toLocaleDateString('es-ES', {
                                        year: "numeric", 
                                        month: "long", 
                                        day: "numeric"
                                    })
                                }</span>
                            </div>
                            <h3 
                                className='content-list-title'
                                dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
                            />
                            <div 
                                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                            />
                        </Grid>
                    </Grid>
                </Link>
            </div>
        )
    }        
}

export default withStyles(styles)(PreviewPost)