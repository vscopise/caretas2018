import React from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { Close } from '@material-ui/icons'
import { 
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const SearchNav = ( props ) => {
    return (
        <div className={props.classes.SearchNav}>
            <div style={{float: 'left', width: '90%',}}>
                <TextField
                    placeholder="Ingrese el término de búsqueda"
                    fullWidth
                    autoFocus
                    onChange={props.handleChangeSearchNav}
                />
            </div>
            <div style={{float: 'right', width: '10%'}}>
                <Close 
                    onClick={props.handleCloseSearchNav}
                    className={props.classes.buttonCloseSearchNav}
                />
            </div>
            {
                props.searchNavResults &&
                <div className={props.classes.searchResults}>
                    {
                        props.searchNavResults.map(post => (
                            <Link 
                                to={{
                                    pathname: '/' + post.slug, 
                                    state: {postId: post.id, post: post}
                                }}
                                onClick={props.handleCloseSearchNav}
                            >
                                <p
                                    dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                />
                            </Link>
                        
                        ))
                    }
                </div>
            }
            {
                props.isLoading &&
                <div className={props.classes.searchResults}>
                    <Loading/>
                </div>
            }
        </div>
    )
}

export default withStyles(styles)(SearchNav)