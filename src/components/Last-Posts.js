import React from 'react'
import { Link } from 'react-router-dom'
import Newsticker from 'react-newsticker'

import styles from '../assets/styles'


import { 
    Grid,
    withStyles
} from '@material-ui/core'

const news = [
    'Hello World!',
    //'Nice to meet you.',
    //'Happy hour :)'
  ];
  

const LastPosts = ( props ) => (
    <div className={props.classes.LastPosts}>
        <Grid container>
            <Grid item xs={8}>
                <span className='ticker-title'>Ultimas Noticias</span>
                <Newsticker news={news} />
            </Grid>
            <Grid item xs={4}>Social</Grid>
        </Grid>

    </div>
    
)

export default withStyles(styles)(LastPosts)