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
import constants from '../assets/Constants'

class Author extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: null,
            posts: [],
            post: null,
            isLoading: true,
            urlCaretas: constants.urlCaretas
        } 
    }

    fetch_posts = (userId, page=1) => {
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( this.state.urlCaretas + 'posts/?author=' + userId + '&page=' + page )
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

    componentDidMount(){
        const { userId, userName, page } = this.props.location.state
        this.setState({
            userId: userId,
            userName: userName,
        })
        this.fetch_posts(userId, page)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            const { termId, page } = nextProps.location.state
            this.setState({
                post:null
            })
            this.fetch_posts(termId, page)
        }
    }
    
    render() {
        return(
            <Grid container spacing={24} className={this.props.classes.Author}>
                <ScrollUpButton />
                <Grid item md={8} xs={12}>
                {
                    ! this.state.isLoading && 
                    <div>
                        <h1 className='page-title'>Artículos de {this.state.userName}</h1>
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
                                termId={this.state.userId}
                                title={this.state.userName}
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
export default withStyles(styles)(Author)