import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { 
    Close,
    Search,
    Subscriptions,
    Menu } from '@material-ui/icons'
import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
import constants from '../assets/Constants'

class SearchNav extends Component {

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
            urlCaretas: constants.urlCaretas
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
            .get( this.state.urlCaretas + 'posts/?search=' + e.target.value )
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
            <div className={this.props.classes.SearchNav}>
                <div style={{float: 'left', width: '90%',}}>
                    <TextField
                        placeholder="Ingrese el término de búsqueda"
                        fullWidth
                        onChange={this.props.handleChangeSearchNav}
                    />
                </div>
                <div style={{float: 'right', width: '10%'}}>
                    <Close 
                        onClick={this.props.handleCloseSearchNav}
                        className={this.props.classes.buttonCloseSearchNav}
                    />
                </div>
                {
                    this.props.searchNavResults.length > 0 &&
                    <div className={this.props.classes.searchResults}>
                        {
                            this.props.searchNavResults.map(post => (
                                <Link 
                                    to={{
                                        pathname: '/' + post.slug, 
                                        state: {postId: post.id, post: post}
                                    }}
                                >
                                    <p
                                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                    />
                                </Link>
                            
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(styles)(SearchNav)