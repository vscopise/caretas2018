import React, { Component} from 'react'
import axios from 'axios'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'
import Pagination from './Pagination'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PreviewPost from './Preview-Post'
import SidebarPage from './Sidebar-Page'

import styles from '../assets/styles'
import constants from '../assets/Constants'

class Categoria extends Component {

    constructor(props) {
        super(props)

        this.state = {
            catName: null,
            posts: [],
            isLoading: true,
            urlCaretas: constants.urlCaretas
        } 
    }

    fetch_posts_by_cat_id = (catId, page=1) => {
        this.setState({ 
            posts: [],
            isLoading: true 
        })
        axios
        .get( this.state.urlCaretas + 'posts/?categories=' + catId + '&page=' + page )
        .then(res => {
            this.setState({ 
                posts: res.data,
                headers: res.headers,
                currentPage: page,
                total: res.headers['x-wp-total'],
                pages: res.headers['x-wp-totalpages'],
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
            let pathCatName = window.location.pathname.split('/').filter(x=>x).pop()
            let catId = this.props.categories.find(
                category => category.slug === pathCatName
            ).term_id

            this.fetch_posts_by_cat_id( catId )

            let catTitle = this.props.categories.find(
                category => category.slug === pathCatName
            ).name
            this.setState({catTitle: catTitle})
        window.scrollTo(0,0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            const page = nextProps.location.state.page
            this.setState({catTitle: nextProps.location.state.Title})
            let catId = this.props.categories.find (
                category => category.slug === window.location.pathname.split('/').filter(x=>x).pop()
            ).term_id
            this.fetch_posts_by_cat_id( catId, page )
        }
    }
    
    render() {
        return(
            <Grid container spacing={24} className={this.props.classes.Categoria}>
                <ScrollUpButton />
                <Grid item md={8} xs={12}>
                {
                    ! this.state.isLoading && 
                    <div>
                        <h1 className='page-title'>
                            {this.state.catTitle}
                        </h1>
                        {
                            this.state.posts.map( (post, index) => (
                                
                                <PreviewPost 
                                    post={post} 
                                    key={post.id} 
                                    categories={this.props.categories}
                                    size={index===0 ? 'large' : 'medium'} 
                                />
                            ))
                        }
                        {
                            this.state.pages > 1 &&
                            <Pagination 
                                termId={this.state.catId}
                                title={this.state.catTitle}
                                total={this.state.total} 
                                pages={this.state.pages} 
                                currentPage={this.state.currentPage} 
                            />
                        }
                    </div>
                }
                {
                    this.state.isLoading && <Loading/>
                }
                </Grid>
                <Grid item md={4} xs={12}>
                    <SidebarPage/>
                </Grid>
            </Grid>
        )
        
    }
}
export default withStyles(styles)(Categoria)