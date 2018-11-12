import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import styles from '../assets/styles'

const Pagination = (props) => {
    var items = [-1, 0, 1]

    var catTitle = props.categories.find(
        category => category.term_id === props.catId
    ).name

    const currentPage = props.currentPage

    return(
        <div className={props.classes.Pagination}>
            
            {( currentPage > 1 ) && (
                <Link to={{
                    state: { 
                        catId: props.catId,
                        page: currentPage - 1,
                        catTitle: catTitle
                    }
                }}
                className='page-numbers'
                >«</Link>
            )}

            {( props.currentPage === 1 ) && (
                <Fragment>
                    <span className='page-numbers current-page'>
                        1
                    </span>
                    <Link 
                        to={{
                            state: { 
                                catId: props.catId,
                                page: 2,
                                catTitle: catTitle
                            }
                        }}
                        className='page-numbers'
                    >{ 2 }</Link>
                </Fragment>
            )}

            {( currentPage > 2 ) && (
                <Link to={{
                    state: { 
                        catId: props.catId,
                        page: 1,
                        catTitle: catTitle
                    }
                }}
                className='page-numbers'
                >1</Link>
            )}

            {( 3 < currentPage ) && (
                <span className='page-numbers'>...</span>
            )}

            {( 1 < currentPage ) && ( currentPage < props.pages ) && 
                items.map( i => 
                    ( i === 0) ?
                        <span 
                            className='page-numbers current-page'
                            key={i}
                        >{currentPage + i}</span>
                    : (
                        <Link 
                            to={{
                                state: { 
                                    catId: props.catId,
                                    page: currentPage + i,
                                    catTitle: catTitle
                                }
                            }}
                            key={currentPage + i}
                            className='page-numbers'
                        >{currentPage + i}</Link>
                    )
            )}

            {( currentPage < props.pages - 2 ) && (
                <span className='page-numbers'>...</span>
            )}

            {( currentPage < props.pages - 1 ) && (
                <Link to={{
                    state: { 
                        catId: props.catId,
                        page: props.pages,
                        catTitle: catTitle
                    }
                }}
                className='page-numbers'
                >{props.pages}</Link>
            )}   

            {( currentPage === props.pages ) && (
                <Fragment>
                    <Link 
                        to={{
                            state: { 
                                catId: props.catId,
                                page: props.pages - 1,
                                catTitle: catTitle
                            }
                        }}
                        className='page-numbers'
                    >{ props.pages - 1 }</Link>
                    <span className='page-numbers current-page'>
                        {props.pages}
                    </span>
                </Fragment>
            )}

            {( currentPage < props.pages ) && (
                <Link to={{
                    state: { 
                        catId: props.catId,
                        page: currentPage + 1,
                        catTitle: catTitle
                    }
                }}
                className='page-numbers'
                >»</Link>
            )}
        </div> 
    )
}

export default withStyles(styles)(Pagination)