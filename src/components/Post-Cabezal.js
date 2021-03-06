import React from 'react'
import { Link } from 'react-router-dom'
import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const PostCabezal = ( props ) => (
    <div className={props.classes.PostCabezal}>
        <Link 
            to = {
                {pathname: '/' + props.post.slug, 
                state: {postId: props.post.id, post: props.post}}
            }
            title={props.post.title.rendered}
        >
            <div className={props.size}>
                <div 
                    className='image' 
                    style={{backgroundImage: `url(${props.post.image_url[2]})`}}
                />
                <div className='meta'>
                    <div className='content'>
                        <h2
                            dangerouslySetInnerHTML={{__html: props.post.title.rendered}} 
                        />
                        {
                            (props.size==='size-a') &&
                            <div 
                                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} 
                                className={'excerpt'}
                            /> 
                        }
                    </div>
                </div>
            </div>
        </Link>
    </div>
)

export default withStyles(styles)(PostCabezal)