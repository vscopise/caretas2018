import React from 'react'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import ContentLoader from 'react-content-loader'

import styles from '../assets/styles'

const LoadingPostCategories = (props) => (
    <Grid container spacing={24} className={props.classes.LoadingPostCategories}>
        {[0,1,2,3].map(i =>
            <Grid item xs={3} key={i}>
                <ContentLoader 
                    height={300}
                    width={290}
                    speed={2}
                    primaryColor="#505050"
                    secondaryColor="#565656"
                    {...props}
                >
                    <rect x="0" y="190" rx="5" ry="5" width="262" height="10" /> 
                    <rect x="0" y="220" rx="5" ry="5" width="180" height="10" /> 
                    <rect x="0" y="250" rx="5" ry="5" width="220" height="10" /> 
                    <rect x="0" y="280" rx="5" ry="5" width="290" height="10" /> 
                    <rect x="-7.06" y="7.07" rx="0" ry="0" width="290" height="150" />
                </ContentLoader>
            </Grid>
        )}
    </Grid>
)

export default withStyles(styles)(LoadingPostCategories)