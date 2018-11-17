import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import { Grid } from '@material-ui/core'

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
            isLoading: true,
        }
    }

    componentDidMount() {
        
    }

    handleChange = (e) => {
        e.preventDefault()
        let val = e.target.value
        if ( e.target.value.length > 4 ){
            //alert(e.target.value)

            axios
            .get( url + 'posts/?search=' + e.target.value )
            .then(res => {
            this.setState({ 
                results: res.data,
                isLoading: false 
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
                    !this.state.isLoading &&
                    <div className='result'>
                    {
                        this.state.results.map(result => (
                            <p>
                                {result.title.rendered}
                            </p>
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