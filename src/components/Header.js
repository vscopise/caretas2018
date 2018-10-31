import React from 'react'
import { Grid } from '@material-ui/core'

import HeaderLogo from './Header-Logo'

const Header = (props) => (
    <Grid container spacing={24}>
        <Grid item md={3} xs={12}>
            <HeaderLogo 
                date = {
                    props.date.toLocaleString(
                        'es-ES',
                        { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        }
                    )
                }
            />
        </Grid>
        <Grid item md={9} xs={12}>
            <h2>9</h2>
        </Grid>
    </Grid>
)

export default Header