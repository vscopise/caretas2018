import React, { Component} from 'react'
import axios from 'axios'
import { 
    withStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { Menu } from '@material-ui/icons'
import styles from '../assets/styles'
import SubCategory from './Sub-Category'
import LoadingPostCategories from './Loading-Post-Categories'

import sections from './Sections'

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            categoryPosts: [],
            subNavbar: ''
          }
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
            subNavbar: 'hide'
        })
    }

    handleShowSubMenu = (catSlug) => {
        this.setState({
            catSlug: catSlug
        })
        if ( !this.state.categoryPosts.find (
                category => category.catSlug === catSlug )) {
            this.getLastCategoryPosts(catSlug)
        }
        /*
        if ( !this.state.categoryPosts.find (
                category => category.catId === catId )) {
            this.getLastCategoryPosts(catId)
        }
         */
    }

    getLastCategoryPosts = (catSlug) => {
        let categoryPosts = this.state.categoryPosts

        let catId = this.props.categories.find(category => category.slug===catSlug).term_id
        axios
            .get( urlCaretas + 'wp/v2/posts?per_page=4&categories=' + catId )
            .then(res => {
                this.setState({ 
                    categoryPosts: [...categoryPosts, {catSlug: catSlug, data:res.data}],
                })
            })
            .catch(error => console.log(error))
    }

    handleClickSubCategory = () => {
        this.setState({
            subNavbar: 'hide'
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if ('hide' === prevState.subNavbar) {
            this.setState({
                subNavbar: ''
            })
        }
    }

    

    render() {
        return(
            <div className={this.props.classes.Navbar} >
                <nav className='mobile-menu'>
                    <Menu className='show-menu' onClick={this.handleMenuOpen}/>
                    <ul className={this.state.menuOpen ? 'active' : null}>
                        <li>
                            <Link to={{
                                pathname: '/',
                            }}>
                                Inicio
                            </Link>
                        </li>
                        {
                            sections.map((section) => (
                                <li key={section.id} >
                                    <Link 
                                        key={section.id} 
                                        to={{
                                            pathname: '/categoria/' + section.slug,
                                            state: { 
                                                //termId: section.catId,
                                                //page: 1,
                                                Title: section.title 
                                            }
                                        }}
                                        onClick={this.handleMenuOpen}
                                        onMouseEnter={() => this.handleShowSubMenu(section.slug)}
                                    >
                                        {section.title}
                                    </Link>
                                    <div className={'sub-navbar ' + this.state.subNavbar}>
                                        {
                                            ( !this.state.categoryPosts.find (
                                                    category => category.catSlug === section.slug )
                                            ) ?
                                            <LoadingPostCategories/> :
                                            <SubCategory 
                                                posts = { this.state.categoryPosts.find(
                                                    category => category.catSlug === section.slug
                                                ).data }
                                //                catId = {section.id}
                                                handleClickSubCategory = {this.handleClickSubCategory}
                                            />
                                        }
                                    </div> 
                                </li>
                            ))
                        }
                        <li>
                            <Link to={{
                                pathname: '/suscripciones/',
                            }}>
                                Suscripciones
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/contacto/',
                            }}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar)
