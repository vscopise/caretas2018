import React, { Component} from 'react'

import { Link } from 'react-router-dom'

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

    fetch_revistas = (termId=2, page=1) => {
        const url = 'https://www.carasycaretas.com.uy/wp-json/wp/v2/'
        this.setState({ 
            isLoading: true 
        })
        axios
            .get( url + 'revistas/?per_page=20&productos=' + termId + '&page=' + page )
            .then( res => {
            this.setState({ 
                revistas:res.data,
                currentPage: page,
                total: res.headers['x-wp-total'],
                pages: res.headers['x-wp-totalpages'],
                isLoading: false 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        //const { termId, page } = this.props.location.state
        this.fetch_revistas()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            //this.setState({revistas:[]})
            const { termId, page } = nextProps.location.state
            this.setState({catId: termId})
            this.fetch_revistas(2, page)
        }
    }
    
    render() {
        if ( ! this.state.isLoading ) {
            //const catTitle = this.props.location.state.catTitle
            return (
                <Grid container spacing={24} className={this.props.classes.EdicionImpresa}>
                    <ScrollUpButton />
                    <Grid item md={8} xs={12}>
                        <h1>Edición Impresa</h1>
                        <p>Haga click en la imagen para ver la edición completa.</p>
                        <Grid container spacing={24}>
                            {
                                this.state.revistas.map( (revista, index) => (
                                    <Grid item md={3} xs={12} key={revista.id}>
                                        <Link 
                                            to={{
                                                pathname: '/edicion-impresa/?ed=' + revista.id, 
                                            }}
                                        >
                                            {
                                                null !==revista.image_url &&
                                                <img src={revista.image_url[2]} />
                                            }
                                            <h3>{revista.title.rendered}</h3>                       
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                            
                        {
                            this.state.pages > 1 && 
                            <Pagination 
                                termId={8}
                                title={'Edición impresa'}
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