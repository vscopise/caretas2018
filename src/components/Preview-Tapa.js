import React from 'react'

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core'

import styles from '../assets/styles'
const pagesuiteLink = 'http://subscriber.pagesuite.com/subscribe.aspx?source=4&eid=c42ba4af-3c20-44ed-8739-7caeef7ab433'

const PreviewTapa = ( props ) => {
    return  (
        <div className={props.classes.PreviewTapa}>
            {
                props.revista.issuu_url &&
                <Link 
                    to={{
                        pathname: '/edicion-impresa/?ed=' + props.revista.id, 
                        state:{
                            termId: props.termId,
                            issuu: props.revista.issuu_url,
                        }
                    }}
                >
                    {
                        (props.revista.image_url) &&
                        <img 
                            className='content-list-thumb' 
                            src={props.revista.image_url[1]} 
                            alt={props.revista.title.rendered} 
                        />

                    }
                    <h3>{props.revista.title.rendered}</h3>
                </Link>
            }
            {
                ! props.revista.issuu_url &&
                <a 
                    href={pagesuiteLink} 
                    target='_blank' 
                    title={props.revista.title.rendered}
                >
                    <img 
                        className='content-list-thumb' 
                        src={props.revista.image_url[1]} 
                        alt={props.revista.title.rendered} 
                    />
                    <h3>{props.revista.title.rendered}</h3>
                </a>
            }
        </div>
    )
}

export default withStyles(styles)(PreviewTapa)