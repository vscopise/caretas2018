import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'

import GridPost from './Grid-Post'

import { Link } from 'react-router-dom'


import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class GridPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        let catId = this.props.categorias.find(
            category => category.name === this.props.category
        ).term_id

        axios
        .get( urlCaretas + 'posts/?categories=' + catId )
        .then(res => {
            this.setState({ 
                posts: res.data,
                isLoading: false,
            })
        })
    }

    render() {
        return (
            <div className={this.props.classes.GridPosts}>
                <h4 className='widget-title'>
                    <span>{this.props.category}</span>
                </h4>
                {
                    !this.state.isLoading &&
                    <Grid container spacing={16}>
                        {
                            this.props.left &&
                            <Grid item md={6} xs={12}>
                                <GridPost 
                                    post={this.state.posts[0]} 
                                    size='size-a'
                                />
                            </Grid>
                        }
                        <Grid item md={6} xs={12}>
                            <Grid container spacing={16}>
                                <Grid item sm={6} xs={12}>
                                    <GridPost 
                                        post={this.state.posts[1]} 
                                        size='size-b'
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <GridPost 
                                        post={this.state.posts[2]} 
                                        size='size-b'
                                    />
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container spacing={16}>
                                <Grid item sm={6} xs={12}>
                                    <GridPost 
                                        post={this.state.posts[3]} 
                                        size='size-b'
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <GridPost 
                                        post={this.state.posts[4]} 
                                        size='size-b'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            !this.props.left &&
                            <Grid item sm={6} xs={12}>
                                <GridPost 
                                    post={this.state.posts[0]} 
                                    size='size-a'
                                />
                            </Grid>
                        }
                    </Grid>
                }
                {
                    this.state.isLoading && <Loading/>
                }
            </div>
        )
    }
}

export default withStyles(styles)(GridPosts)