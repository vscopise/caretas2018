import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import { Link } from 'react-router-dom'


import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class ColumnasDestacadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            categories: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        let cat_id = this.props.categorias.find(
            category => category.slug === 'columna-destacada'
        ).term_id

        /*
        { this.state.categoryPosts.find(
            category => category.catId === section.catId
        ).data }
        */
        axios
        .get( urlCaretas + 'posts/?categories=' + cat_id )
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
                                <Grid item xs={4} className='image'>
                                    <Link 
                                        to={{
                                            pathname: '/' + post.slug, 
                                            state: {postId: post.id, post: post}
                                        }}
                                    >
                                        <img src={post.image_url[1]} alt='' />
                                    </Link>
                                </Grid>
                                <Grid item xs={8}>
                                    <h4>
                                        <Link 
                                            to={{
                                                pathname: '/' + post.slug, 
                                                state: {postId: post.id, post: post}
                                            }}
                                        >
                                            {post.title.rendered}
                                        </Link>
                                    </h4>
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