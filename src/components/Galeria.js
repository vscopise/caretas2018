import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import PostContent from './Post-Content'
import Sidebar from './Sidebar'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ReactDOM from 'react-dom'


import { Link } from 'react-router-dom'


import { 
    Grid,
    TextField,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class Galeria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            categories: {},
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

    onChange = () => {}
    onClickItem = () => {}
    onClickThumb = () => {}


    render() {
        return (
            <div className={this.props.classes.Galeria}>
                <h4 className='widget-title'>
                    <span>{this.props.category}</span>
                </h4>
                {
                    !this.state.isLoading &&
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        transitionTime={1500}
                    >
                    {
                        this.state.posts.map(post => (
                            <div className='gallery-item' key={post.id}>
                                <Link 
                                    to={{
                                        pathname: '/' + post.slug, 
                                        state: {postId: post.id, post: post}
                                    }}
                                >
                                    <img src={post.image_url[2]} alt='' />
                                    <h2
                                        dangerouslySetInnerHTML={{
                                            __html: post.title.rendered
                                        }} 
                                    />
                                </Link>
                            </div>
                        ))
                    }    
                    </Carousel>
                }
                {
                    this.state.isLoading && <Loading/>
                }
            </div>
        )
    }
}

export default withStyles(styles)(Galeria)