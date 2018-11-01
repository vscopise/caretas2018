import React, { Component} from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PreviewPost from './Preview-Post'

const styles = {
    Categoria: {
        '& a': {
            textDecoration: 'none',
            color: '#1f1e1e',
        },
        '& a:hover': {
            color: '#d00',
        },
        '& a:hover h3': {
            color: '#d00',
        },

    }
}

class Categoria extends Component {

    constructor(props) {
        super(props)

        this.state = {
            catId: null,
            posts: [],
            post: null,
            isLoading: true
        } 
    }

    fetch_posts = (catId) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'posts/?categories=' + catId )
            .then(res => {
            this.setState({ 
                posts: res.data,
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        const { catId } = this.props.location.state
        this.fetch_posts(catId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({post:null})
            const { catId } = nextProps.location.state
            this.fetch_posts(catId)
        }
    }
    
    render() {
        if ( ! this.state.isLoading ) {
            const { catTitle } = this.props.location.state
            return (
                <Grid container spacing={24} className={this.props.classes.Categoria}>
                    <Grid item md={8} xs={12}>
                        <h1 className='page-title'>{catTitle}</h1>
                        {
                            this.state.posts.map( post => (
                                <PreviewPost 
                                    post={post} 
                                    key={post.id} 
                                    categories={this.props.categories}
                                    size='medium' 
                                />
                            ))
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
export default withStyles(styles)(Categoria)