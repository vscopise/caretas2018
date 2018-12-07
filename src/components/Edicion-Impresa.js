import React, { Component} from 'react'

//import { Link } from 'react-router-dom'

import axios from 'axios'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'
import Pagination from './Pagination'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'
import PreviewTapa from './Preview-Tapa';
import styles from '../assets/styles'
import constants from '../assets/Constants'

class EdicionImpresa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            revistas: [],
            isLoading: true,
            urlCaretas: constants.urlCaretas
        } 
    }

    fetch_revistas = (termId=2, page=1) => {
        axios
            .get( this.state.urlCaretas + 'revistas/?per_page=20&productos=' + termId + '&page=' + page )
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
        const { termId, page } = this.props.location.state
        this.setState({
            termId: termId,
            currentPage: page
        })
        this.fetch_revistas( termId, page )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            const { termId, page, issuu } = nextProps.location.state
            this.setState({
                termId: termId,
                currentPage: page,
                issuu: issuu
            })
            if (null !== issuu){
                this.fetch_revistas( termId, page )
            }
        }
    }
    
    render() {
        return(
            <Grid container spacing={24} className={this.props.classes.EdicionImpresa}>
                <ScrollUpButton />
                <Grid item md={8} xs={12}>
                    {
                        this.state.issuu &&
                        <div 
                            dangerouslySetInnerHTML={{__html: this.state.issuu}} 
                        />
                    }
                    {
                        ! this.state.isLoading && ! this.state.issuu &&
                            <div>
                                <h1>Edición Impresa</h1>
                                <p>Haga click en la imagen para ver la edición completa.</p>
                                <Grid container spacing={24}>
                                    {
                                        this.state.revistas.map( (revista, index) => (
                                            <Grid item md={3} xs={12} key={revista.id}>
                                                <PreviewTapa 
                                                    revista={revista}
                                                    termId={this.state.termId}
                                                />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                    
                                {
                                    this.state.pages > 1 && 
                                    <Pagination 
                                        termId={this.state.termId}
                                        title={'Edición impresa'}
                                        total={this.state.total} 
                                        pages={this.state.pages} 
                                        currentPage={this.state.currentPage} 
                                    />
                                }
                            </div>
                    }
                    {
                        this.state.isLoading && ! this.state.issuu && <Loading/>
                    }
                </Grid>
                <Grid item md={4} xs={12}>Sidebar</Grid>
            </Grid>            
        )
    }
}
export default withStyles(styles)(EdicionImpresa)