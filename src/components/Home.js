import React, { Component } from 'react'
import axios from 'axios'

import { 
    Grid,
    withStyles
} from '@material-ui/core'

import Loading from './Loading'

import styles from '../assets/styles'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homeContent: {},
            isLoading: false
        }
    }

    componentDidMount() {

    }

    render() {
        if ( !this.state.isLoading ) {
            return(
                <div className={this.props.classes.Home}>
                    <Grid container className='cabezal' spacing={0}>
                        <Grid item xs={6}>a
                        </Grid>
                        <Grid item xs={6}>a
                            <Grid container className='cabezal' spacing={0}>
                                <Grid item xs={6}>a
                                </Grid>
                                <Grid item xs={6}>a
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <h2>home</h2>
                    <p>texto</p>
                </div>
            )
        } else {
            return <Loading/>
        }
    }
}

export default withStyles(styles)(Home)