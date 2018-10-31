import React from 'react'

import PreviewPostLarge from './Preview-Post-Large'
import PreviewPostMedium from './Preview-Post-Medium'

const PreviewPost = ( props ) => {
    if ( 'large' === props.size ) {
        return  <PreviewPostLarge post={props.post} categories={props.categories} />
    } else {
        return <PreviewPostMedium post={props.post} categories={props.categories} />
    }        
}
export default PreviewPost