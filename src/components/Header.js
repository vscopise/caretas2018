import React from 'react'
import { Grid } from '@material-ui/core'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'


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
            <DFPSlotsProvider 
                dfpNetworkId={'90767959'} 
                adUnit={'banner_top_home'}>
                <AdSlot 
                    sizes={[ [900, 90], [728, 90]]} 
                    shouldRefresh={ ()=> true }
                />
            </DFPSlotsProvider>
        </Grid>
    </Grid>
)

export default Header