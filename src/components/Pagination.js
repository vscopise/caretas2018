import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import styles from '../assets/styles'

const Pagination = (props) => {
    var items = [1, 2]

    var link = props.categories.find(
        category => category.id === props.catId
    ).slug

    var catTitle = props.categories.find(
        category => category.id === props.catId
    ).name

    //var nextPage = 2
    var currentPage = props.currentPage
    var nextPage = currentPage + 1
    var nextLink = link + '/page/' + nextPage

    return(
        <div className={props.classes.Pagination}>
            {
                ( props.currentPage!==1 ) && (
                    <Link to={{
                        pathname: link,
                        state: { 
                            catId: props.catId,
                            page: 1,
                            catTitle: catTitle
                        }
                    }}
                    className='page-numbers'
                    >«</Link>
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
                                //pathname: link + '/page/' + i,
                                //query: '/page/'+ i,
                                state: { 
                                    catId: props.catId,
                                    page: i,
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
                ( 
                    props.currentPage!==props.pages ) && (
                    <Link to={{
                        pathname: link + '/page/' + nextPage,
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