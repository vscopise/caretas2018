import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'

import { Link } from 'react-router-dom'

//const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/'

import { 
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class SearchPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            isLoading: false,
            hasResults: false,
        }
    }

    componentDidMount() {
        
    }

    handleChange = (e) => {
        e.preventDefault()
        if ( e.target.value.length > 4 ){
            this.setState({
                isLoading: true,
                hasResults: false
            })

            axios
            .get( url + 'posts/?search=' + e.target.value )
            .then(res => {
            this.setState({ 
                results: res.data,
                isLoading: false,
                hasResults: true, 
            })
        })

        }
    }

    render() {
        return (
            <div className={this.props.classes.SearchPosts}>
                <TextField 
                    name='search'
                    label='Buscar'
                    className='search'
                    fullWidth
                    onChange={this.handleChange}

                    variant='outlined'
                />
                {
                    this.state.hasResults &&
                    <div className='result-items'>
                    {
                        this.state.results.map(post => (
                            <div className='result-item' key={post.id}>
                                <Link 
                                    to={{
                                        pathname: '/' + post.slug, 
                                        state: {postId: post.id, post: post}
                                    }}
                                >
                                    <h4
                                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                    </div>
                }
                {
                    this.state.isLoading &&
                    <div className='result'>
                        <Loading/>
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(styles)(SearchPosts)