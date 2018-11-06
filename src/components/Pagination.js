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

    //var currentPage = props.currentPage

    //var nextPage = currentPage + 1
    //var nextLink = ( currentPage === 1 ) ? link + '/page/' + nextPage : nextPage

    //var prevPage = ( currentPage === 1 ) ? '' : currentPage - 1
    //var prevLink = ( currentPage === 1 ) ? link + '/page/' + prevPage : prevPage

    //var lastPage = link + '/page/' + props.pages
    

    return(
        <div className={props.classes.Pagination}>
            
            {
                ( props.currentPage > 1 ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: props.currentPage - 1,
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
                            {props.currentPage}
                        </span>
                        <Link 
                            to={{
                                //pathname: nextLink,
                                state: { 
                                    catId: props.catId,
                                    page: props.currentPage + 1,
                                    catTitle: catTitle
                                }
                            }}
                            key={ props.currentPage + 1 }
                            className='page-numbers'
                        >{ props.currentPage + 1 }</Link>
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
                ( 3 < props.currentPage ) && ( 3 + props.currentPage < props.pages ) && (
                    <span className='page-numbers'>...</span>
                )
            }

            {
                ( 1 < props.currentPage ) && items.map( i => 
                    ( i === 0) ?
                        <span 
                            className='page-numbers current-page'
                            key={i}
                        >{i + props.currentPage}</span>
                    : (
                        <Link 
                            to={{
                                //pathname: nextLink,
                                state: { 
                                    catId: props.catId,
                                    page: props.currentPage + i,
                                    catTitle: catTitle
                                }
                            }}
                            key={i + props.currentPage}
                            className='page-numbers'
                        >{props.currentPage + i}</Link>
                    )
                
                )
            }

            {
                ( 3 + props.currentPage < props.pages ) && (
                    <span className='page-numbers'>...</span>
                )
            }

            {
                ( props.currentPage < props.pages ) && (
                    <Link to={{
                        //pathname: lastPage,
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
                ( props.currentPage !== props.pages ) && (
                    <Link to={{
                        state: { 
                            catId: props.catId,
                            page: 1 + props.currentPage,
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