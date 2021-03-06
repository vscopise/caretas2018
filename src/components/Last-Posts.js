import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/ticker-styles.css'


const LastPosts = ( props ) => (
    <div className='last-posts'>
        <span className='ticker-title'>Ultimas Noticias</span>
        <div className='tickerv-wrap'>
            <ul>
                {
                    props.posts.map(post =>(
                        <li key={post.id}>
                            <Link 
                                to={{
                                    pathname: '/' + post.slug, 
                                    state: {postId: post.id, post: post}}}
                                dangerouslySetInnerHTML={{
                                    __html: `${
                                        post.title.rendered
                                    }`
                                }}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    
)

export default LastPosts