import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import styles from '../assets/styles'

const Pagination = (props) => {
    var items = [-1, 0, 1]

    var link = props.categories.find(
        category => category.id === props.catId
    ).slug

    var catTitle = props.categories.find(
        category => category.id === props.catId
    ).name

    //var firstLink = link

    const currentPage = props.currentPage

    //var nextPage = currentPage + 1
    //var nextLink = ( currentPage === 1 ) ? link + '/page/' + nextPage : nextPage

    //var prevPage = ( currentPage === 1 ) ? '' : currentPage - 1
    //var prevLink = ( currentPage === 1 ) ? link + '/page/' + prevPage : prevPage

    //var lastPage = link + '/page/' + props.pages
    

    return(
        <div className={props.classes.Pagination}>
            
            {
                ( currentPage > 1 ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: currentPage - 1,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >«</Link>
                )
            }

            {
                ( props.currentPage === 1 ) && (
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
                )
            }

            {
                ( props.currentPage > 2 ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: 1,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >1</Link>
                )
            }

            {
                ( 3 < currentPage ) && (
                    <span className='page-numbers'>...</span>
                )
            }

            {
                ( 1 < currentPage ) && ( currentPage < props.pages ) && 
                items.map( i => 
                    ( i === 0) ?
                        <span 
                            className='page-numbers current-page'
                            key={i}
                        >{currentPage + i}</span>
                    : (
                        <Link 
                            to={{
                                //pathname: nextLink,
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
                )
            }

            {
                ( currentPage < props.pages - 3 ) && (
                    <span className='page-numbers'>...</span>
                )
            }

            {
                ( currentPage < props.pages - 2 ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: props.pages,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >{props.pages}</Link>
                )
            }   


            {
                ( currentPage == props.pages ) && (
                    <Fragment>
                        <Link 
                            to={{
                                state: { 
                                    catId: props.catId,
                                    page: props.pages - 1,
                                    catTitle: catTitle
                                }
                            }}
                            key={ props.currentPage + 1 }
                            className='page-numbers'
                        >{ props.pages - 1 }</Link>
                        <span className='page-numbers current-page'>
                            {props.pages}
                        </span>
                    </Fragment>
                )
            }


            {
                ( currentPage < props.pages ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: currentPage + 1,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >»</Link>
                )
            }
        </div> 
    )
}

export default withStyles(styles)(Pagination)