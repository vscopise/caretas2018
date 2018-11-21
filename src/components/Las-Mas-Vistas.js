import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'

import { Link } from 'react-router-dom'


import { 
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'
const urlCaretas = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'


class LasMasVistas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            categories: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        
        axios
        .get( urlCaretas + 'posts/?views=' )
        .then(res => {
            this.setState({ 
                results: res.data,
                isLoading: false,
            })
        })
    }

    

    render() {
        return (
            <div className={this.props.classes.LasMasVistas}>
                <h4 className='widget-title'>
                    <span>Las más vistas</span>
                </h4>
                {
                    !this.state.isLoading &&
                    <div className='result'>
                    {
                        this.state.results.map((post, index) => (
                            <div className='result-item' key={post.id}>
                                <Link 
                                    to={{
                                        pathname: '/' + post.slug, 
                                        state: {postId: post.id, post: post}
                                    }}
                                >
                                    <h4
                                        dangerouslySetInnerHTML={{
                                            __html: ++index + '. ' + post.title.rendered
                                        }} 
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

export default withStyles(styles)(LasMasVistas)