import React from 'react'

import { 
//    Modal,
    withStyles
} from '@material-ui/core'
import Modal from 'react-responsive-modal'

import styles from '../assets/styles'


const HomePopup = ( props ) => (
    <Modal
        open={props.popup && props.popupEnabled}
        onClose={props.closePopup}
        center
        //aria-labelledby="simple-modal-title"
        //aria-describedby="simple-modal-description"
    >
        <div className={props.classes.HomePopup}
            dangerouslySetInnerHTML={{__html: props.popupContent}}
        />            
    </Modal>
)

export default withStyles(styles)(HomePopup)