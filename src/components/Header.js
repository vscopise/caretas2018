import React from 'react'
import { 
    Grid, withStyles
} from '@material-ui/core'
import HeaderLogo from './Header-Logo'
import Banner from './Banner'
import styles from '../assets/styles'

const Header = ( props ) => (
    <Grid container spacing={24} className={props.classes.Header}>
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
            <Banner
                dfpNetworkId={'90767959'} 
                adUnit={'banner_top_home'}
                sizes={[ [900, 90], [728, 90]]}
            />
        </Grid>
    </Grid>
)
export default withStyles(styles)(Header)