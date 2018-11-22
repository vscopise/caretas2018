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

class EdicionImpresa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            revistas: [],
            isLoading: true
        } 
    }

    fetch_revistas = (termId=8, page=1) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'revistas/?productos=' + termId + '&page=' + page )
            .then(res => {
            this.setState({ 
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
        const { termId, page } = this.props.location.state
        this.fetch_revistas(page)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({post:null})
            const { termId, page } = nextProps.location.state
            this.setState({catId: termId})
            this.fetch_posts(termId, page)
        }
    }
    
    render() {
        if ( ! this.state.isLoading ) {
            //const catTitle = this.props.location.state.catTitle
            return (
                <Grid container spacing={24} className={this.props.classes.EdicionImpresa}>
                    <ScrollUpButton />
                    <Grid item md={8} xs={12}>
                        <h1 className='page-title'>
                            {this.props.location.state.Title}
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
                                title={this.props.location.state.Title}
                                total={this.state.total} 
                                pages={this.state.pages} 
                                currentPage={this.state.currentPage} 
                            />
                        }
                    </Grid>
                    <Grid item md={4} xs={12}>Sidebar</Grid>
                </Grid>
            )
        } else {
            return <Loading/>
        }
    }
}
export default withStyles(styles)(EdicionImpresa)