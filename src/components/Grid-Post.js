import React from 'react'

import { Link } from 'react-router-dom'

const GridPost = ( props ) => (
    <div className={props.size}>
       <Link 
            to = {
                {pathname: '/' + props.post.slug, 
                state: {postId: props.post.id, post: props.post}}
            }
        >
            <div className='image-container'>
                <div 
                    className='image' 
                    style={{backgroundImage: `url(${props.post.image_url[2]})`}}
                />
            </div>
            <h2
                dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
            />
            {
                (props.size==='size-a') &&
                <div 
                    dangerouslySetInnerHTML={
                        {__html: `${
                            props.post.excerpt.rendered.split(' ').length>20 ? 
                            props.post.excerpt.rendered.replace(/(([^\s]+\s\s*){20})(.*)/,'$1…') : 
                            props.post.excerpt.rendered
                        }`}
                    } 
                /> 
            }
       </Link>
    </div>
)

export default GridPost