import React, { Component } from 'react'
import { 
    Grid,
} from '@material-ui/core'

import HeaderLogo from './Header-Logo'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleString('es-ES', { 
                year: 'numeric', month: 'long', day: 'numeric' 
            }),
        }
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item md={3} xs={12}>
                    <HeaderLogo date={this.state.date}/>
                </Grid>
                <Grid item md={9} xs={12}>
                    <h2>9</h2>
                </Grid>
            </Grid>
        )
    }
}

export default Header