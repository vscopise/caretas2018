import React, { Component} from 'react'


import { 
    Grid,
} from '@material-ui/core'
import axios from 'axios'

import Post from './Post'
import PreviewPost from './Preview-Post'

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
    
    renderPost = (post) => {
        this.setState({
            post: post
        })
    }

    render(){

        const { catTitle } = this.props.location.state
        
        if ( this.state.isLoading ) {
            return <p>Cargando...</p>
        } else {
            if ( null !== this.state.post ) {
                return (
                    <Post post={this.state.post} />
                )
            } else {
                return (
                    <Grid container spacing={24}>
                        <Grid item md={8} xs={12}>
                            <h1 className='page-title'>{catTitle}</h1>
                            {
                                this.state.posts.map( post => (
                                        <PreviewPost post={post} key={post.id} renderPost={this.renderPost} size='medium' />
                                ))
                            }
                        </Grid>
                        <Grid item md={4} xs={12}>Sidebar</Grid>
                    </Grid>
                )

            }
        }
        

        
        /*const match = this.props.match
        return ( 
            <Route path={`${match.path}/:name`} render= {({match}) =>( 
                <div> <h3> {match.params.name} </h3></div>
            )}/>
        )*/
    }
}
export default Categoria