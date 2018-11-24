import React, { Component } from 'react'
import { 
    withStyles
} from '@material-ui/core'
import { DFPSlotsProvider, DFPManager, AdSlot } from 'react-dfp'
import styles from '../assets/styles'

class DfpBanner extends Component {

    componentDidMount() {
        window.setInterval(
            function refreshAds() { 
                DFPManager.refresh(); 
            }, 15000
        )
    }

    render() {
        return(
            <div className={this.props.classes.Banner}>
                <DFPSlotsProvider 
                    dfpNetworkId={this.props.dfpNetworkId} 
                    adUnit={this.props.adUnit}>
                    <AdSlot 
                        sizes={this.props.sizes} 
                    />
                </DFPSlotsProvider>
            </div>
        )
    }
}
export default withStyles(styles)(DfpBanner)