import React from 'react'

import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PreviewPostLarge = ( props ) => (
    <div key={props.post.id}>
        {props.post.title.rendered}
    </div>
)

export default PreviewPostLarge