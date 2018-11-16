import React, { Component} from 'react'
import axios from 'axios'
import { 
    withStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'
//import ResponsiveMenu from 'react-responsive-navbar'


import { Menu } from '@material-ui/icons'
import styles from '../assets/styles'
import SubCategory from './Sub-Category'
import LoadingPostCategories from './Loading-Post-Categories'


const sections = [
    {
        id: 2,
        catId: 7,
        link: '/categoria/politica',
        label: 'Política'
    },
    {
        id: 3,
        catId: 43,
        link: '/categoria/sociedad',
        label: 'Sociedad'
    },
    {
        id: 4,
        catId: 11,
        link: '/categoria/internacionales',
        label: 'Internacionales'
    },
    {
        id: 5,
        catId: 14,
        link: '/categoria/deportes',
        label: 'Deportes'
    },
    {
        id: 6,
        catId: 44,
        link: '/categoria/economia',
        label: 'Economía'
    },
    {
        id: 7,
        catId: 50,
        link: '/categoria/cultura',
        label: 'Cultura'
    },
    {
        id: 8,
        catId: 27,
        link: '/categoria/vida-y-ocio',
        label: 'Vida y Ocio'
    },
    {
        id: 9,
        catId: 26,
        link: '/categoria/empresariales',
        label: 'Empresariales'
    },
]

const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            //showSubmenu: false,
            //subMenu: '',
            categoryPosts: [],
            //isLoading: false
          }
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    handleShowSubMenu = (catId) => {
        this.setState({
            catId: catId
        })
        if ( !this.state.categoryPosts.find (
                category => category.catId === catId )) {
            this.getLastCategoryPosts(catId)
        }
    }

    getLastCategoryPosts = (catId) => {
        let categoryPosts = this.state.categoryPosts
        //this.setState({isLoading: true})
        axios
        .get( urlCaretas + 'wp/v2/posts?per_page=4&categories=' + catId )
        .then(res => {
            this.setState({ 
                categoryPosts: [...categoryPosts, {catId: catId, data:res.data}],
            })
        })
        .catch(error => console.log(error))
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
                                            pathname: section.link,
                                            state: { 
                                                catId: section.catId,
                                                page: 1,
                                                catTitle: section.label 
                                            }
                                        }}
                                        onClick={this.handleMenuOpen}
                                        onMouseEnter={() => this.handleShowSubMenu(section.catId)}
                                    >
                                        {section.label}
                                    </Link>
                                    <div className='sub-navbar'>
                                        {
                                            ( !this.state.categoryPosts.find (
                                                    category => category.catId === section.catId )
                                            ) ?
                                            <LoadingPostCategories/> :
                                            <SubCategory 
                                                posts = { this.state.categoryPosts.find(
                                                    category => category.catId === section.catId
                                                ).data }
                                                catId = {section.id}
                                            />
                                        }
                                    </div> 
                                </li>
                            ))
                        }
                        <li>
                            <Link to={{
                                pathname: '/',
                            }}>
                                Suscripciones
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/',
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