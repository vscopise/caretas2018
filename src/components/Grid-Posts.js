import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import GridPost from './Grid-Post'

import { 
    Grid,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
import constants from '../assets/Constants'

class GridPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isLoading: true,
            urlCaretas: constants.urlCaretas,
            isMobile: constants.isMobile,
        }
    }

    componentDidMount() {
        let catId = this.props.categorias.find(
            category => category.name === this.props.category
        ).term_id

        axios
        .get( this.state.urlCaretas + 'posts/?categories=' + catId )
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
                        {
                            !this.state.isMobile &&
                            <Grid item md={6} xs={12}>
                                <Grid container spacing={16}>
                                    <Grid item md={6} xs={12}>
                                        <GridPost 
                                            post={this.state.posts[1]} 
                                            size='size-b'
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <GridPost 
                                            post={this.state.posts[2]} 
                                            size='size-b'
                                        />
                                    </Grid>
                                </Grid>
                                <hr/>
                                <Grid container spacing={16}>
                                    <Grid item md={6} xs={12}>
                                        <GridPost 
                                            post={this.state.posts[3]} 
                                            size='size-b'
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <GridPost 
                                            post={this.state.posts[4]} 
                                            size='size-b'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                        {
                            !this.props.left &&
                            <Grid item md={6} xs={12}>
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