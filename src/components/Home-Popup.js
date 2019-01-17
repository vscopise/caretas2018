import React from 'react'

import { 
    withStyles
} from '@material-ui/core'
import Modal from 'react-responsive-modal'

import styles from '../assets/styles'


const HomePopup = ( props ) => (
    <Modal
        open={props.popup && props.popupEnabled}
        onClose={props.closePopup}
        center
        closeIconSize = {20}
        classNames={{
            modal:props.classes.HomePopupModal,
            closeButton:props.classes.HomePopupCloseButton
        }}
    >
        <div
            dangerouslySetInnerHTML={{__html: props.popupContent}}
        />            
    </Modal>
)

export default withStyles(styles)(HomePopup)