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

import styles from '../assets/styles'

class Categoria extends Component {

    constructor(props) {
        super(props)

        this.state = {
            catName: null,
            posts: [],
           // post: null,
            isLoading: true
        } 
    }

    /*fetch_posts_by_cat_slug = (catName, page=1) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            posts: [],
            isLoading: true 
        })
        axios
            .get( url + 'categories/?slug=' + catName )
            .then( res => {
                return(
                    axios
                        .get( url + 'posts/?categories=' + res.data[0].id + '&page=' + page )
                        .then(res=> {
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
                )
            })
            .catch(error => console.log(error))
    }*/

    fetch_posts_by_cat_id = (catId, page=1) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            posts: [],
            isLoading: true 
        })
        axios
        .get( url + 'posts/?categories=' + catId + '&page=' + page )
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
        //let location = this.props.location
        //if ( undefined === location.state ) {
            let pathCatName = window.location.pathname.split('/').filter(x=>x).pop()
            let catId = this.props.categories.find(
                category => category.slug === pathCatName
            ).term_id

            //this.fetch_posts_by_cat_slug( window.location.pathname.split('/').pop() )

            this.fetch_posts_by_cat_id( catId )

            let catTitle = this.props.categories.find(
                category => category.slug === pathCatName
            ).name
            this.setState({catTitle: catTitle})
        //} else {
            //const { termId, page } = this.props.location.state
            //this.setState({catId: termId})
            //this.fetch_posts_by_cat_slug(termId, page)

        //}
        window.scrollTo(0,0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            //this.setState({posts:null})
            //const { termId, page } = nextProps.location.state
            const page = nextProps.location.state.page
           // this.setState({catId: termId})
            //this.fetch_posts_by_cat_slug(termId, page)
            //this.fetch_posts_by_cat_slug(window.location.pathname.split('/').pop(), page)
            this.setState({catTitle: nextProps.location.state.Title})
            let catId = this.props.categories.find(
                category => category.slug === window.location.pathname.split('/').pop()
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
                <Grid item md={4} xs={12}>Sidebar</Grid>
            </Grid>
        )
        
    }
}
export default withStyles(styles)(Categoria)