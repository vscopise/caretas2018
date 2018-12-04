import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { 
    Home,
    Search,
    Subscriptions,
    Menu } from '@material-ui/icons'
import sections from './Sections'
import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'

class MobileNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            searchOpen: false,
            categoryPosts: [],
            subNavbar: '',
            searchResults: {},
            isLoading: false,
            hasResults: false,
          }
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
            searchOpen: false,
        })
    }
    handleSearchOpen = () => {
        this.setState({
            menuOpen: false,
            searchOpen: !this.state.searchOpen,
        })
    }

    handleChangeSearch = (e) => {
        e.preventDefault()
        if ( e.target.value.length > 4 ){
            this.setState({
                isLoading: true,
                hasResults: false,
            })

            axios
            .get( url + 'posts/?search=' + e.target.value )
            .then(res => {
            this.setState({ 
                searchResults: res.data,
                isLoading: false,
                hasResults: true, 
            })
        })

        }
    }

    render() {
        return(
            <div className={this.props.classes.MobileNav}>
                {
                    this.state.menuOpen &&
                    <div className={'bottom-div'}>
                        <ul>
                            {
                                sections.map(section => (
                                    <li key={section.catId}>
                                    <Link 
                                        key={section.id} 
                                        to={{
                                            pathname: section.link,
                                            state: { 
                                                termId: section.catId,
                                                page: 1,
                                                Title: section.label 
                                            }
                                        }}
                                        onClick = {this.handleMenuOpen}
                                    >
                                        {section.label}
                                    </Link>

                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                }
                {
                    this.state.searchOpen &&
                    <div className={'bottom-div'}>
                        <div className={'bottom-search'}>
                            <TextField 
                                name='search'
                                label='Ingrese el término de búsqueda'
                                fullWidth
                                className={'search'}
                                onChange={this.handleChangeSearch}
                            />
                        </div>
                        {
                            this.state.hasResults &&
                            <div className='result-items'>
                                {
                                    this.state.searchResults.map(post => (
                                        <div className='result-item' key={post.id}>
                                            <Link 
                                                to={{
                                                    pathname: '/' + post.slug, 
                                                    state: {postId: post.id, post: post}
                                                }}
                                                onClick={this.handleSearchOpen}
                                            >
                                                <p
                                                    dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                                />
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                        {
                            this.state.isLoading && <Loading/>
                        }
                    </div>
                }
                <Grid container spacing={16} className={'drawer'}>
                    <Grid item xs={3} className={'mobile-nav-item'}>
                        <Link to={{
                            pathname: '/',
                        }}>
                            <Home/>
                            <span>Home</span>
                        </Link>
                    </Grid>
                    <Grid item xs={3} 
                        className={'mobile-nav-item'}
                        onClick={this.handleSearchOpen}
                    >
                        <Search/>
                        <span>Buscar</span>
                    </Grid>
                    <Grid item xs={3} className={'mobile-nav-item'}>
                        <Subscriptions/>
                        <span>Suscripciones</span>
                    </Grid>
                    <Grid item xs={3} 
                        className={'mobile-nav-item'} 
                        onClick={this.handleMenuOpen}
                    >
                        <Menu/>
                        <span>Menú</span>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MobileNav)