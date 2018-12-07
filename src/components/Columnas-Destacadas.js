import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'

import { Link } from 'react-router-dom'


import { 
    Grid,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
import constants from '../assets/Constants'

class ColumnasDestacadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            categories: {},
            isLoading: true,
            urlCaretas: constants.urlCaretas
        }
    }

    componentDidMount() {
        let cat_id = this.props.categorias.find(
            category => category.slug === 'columna-destacada'
        ).term_id

        axios
            .get( this.state.urlCaretas + 'posts/?categories=' + cat_id )
            .then(res => {
                this.setState({ 
                    results: res.data,
                    isLoading: false,
                })
        })
    }

    render() {
        return (
            <div className={this.props.classes.ColumnasDestacadas}>
                <h4 className='widget-title'>
                    <span>Columnas Destacadas</span>
                </h4>
                {
                    !this.state.isLoading &&
                    <div className='result'>
                    {
                        this.state.results.map(post => (
                            <Grid container spacing={16} key={post.id} className='result-item'>
                                <Grid item lg={4} xs={12} className='image'>
                                    <Link 
                                        to={{
                                            pathname: '/' + post.slug, 
                                            state: {postId: post.id, post: post}
                                        }}
                                    >
                                        <img src={post.image_url[1]} alt='' />
                                    </Link>
                                </Grid>
                                <Grid item lg={8} xs={12}>
                                        <Link 
                                            to={{
                                                pathname: '/' + post.slug, 
                                                state: {postId: post.id, post: post}
                                            }}
                                        >
                                        <h4>
                                            {post.title.rendered}
                                        </h4>
                                        </Link>
                                    <p>Por: {
                                        this.props.users.find(
                                            user => user.id === post.author
                                        ).name
                                    }</p>
                                </Grid>
                            </Grid>
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

export default withStyles(styles)(ColumnasDestacadas)