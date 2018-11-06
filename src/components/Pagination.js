import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import styles from '../assets/styles'

const Pagination = (props) => {
    var items = [1, 2, 3]

    var link = props.categories.find(
        category => category.id === props.catId
    ).slug

    var catTitle = props.categories.find(
        category => category.id === props.catId
    ).name

    var firstLink = link

    var currentPage = props.currentPage

    var nextPage = currentPage + 1
    var nextLink = ( currentPage === 1 ) ? link + '/page/' + nextPage : nextPage

    var prevPage = ( currentPage === 1 ) ? '' : currentPage - 1
    var prevLink = ( currentPage === 1 ) ? link + '/page/' + prevPage : prevPage

    var lastPage = link + '/page/' + props.pages
    

    return(
        <div className={props.classes.Pagination}>
            {
                ( props.currentPage === 2 ) && (
                    <Link to={{
                        pathname: `/categoria/${link}`,
                        state: { 
                            catId: props.catId,
                            page: prevPage,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >«</Link>
                )
            }
            
            {
                ( props.currentPage > 2 ) && (
                    <Link to={{
                        pathname: prevLink,
                        state: { 
                            catId: props.catId,
                            page: prevPage,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >«</Link>
                )
            }

            {
                ( props.currentPage > 2 ) && (
                    <Link to={{
                        pathname: firstLink,
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
                items.map( i => 
                    ( i === props.currentPage) ?
                        <span 
                            className='page-numbers current-page'
                            key={i}
                        >{i}</span>
                    : (
                        <Link 
                            to={{
                                pathname: nextLink,
                                state: { 
                                    catId: props.catId,
                                    page: nextPage,
                                    catTitle: catTitle
                                }
                            }}
                            key={i}
                            className='page-numbers'
                        >{i}</Link>
                    )
                
                )
            }

            {
                ( 3 < props.pages ) && (
                    <span className='page-numbers'>...</span>
                )
            }

            {
                ( props.currentPage < props.pages ) && (
                    <Link to={{
                        pathname: lastPage,
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
                        pathname: nextLink,
                        state: { 
                            catId: props.catId,
                            page: nextPage,
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