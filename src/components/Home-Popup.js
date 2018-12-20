import React from 'react'

import { 
    Modal,
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'


const HomePopup = ( props ) => (
    <Modal
        open={props.popup}
        onClose={props.closePopup}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div className={props.classes.HomePopup}>
            <h2>Simple centered modal</h2>
        </div>
    </Modal>
)

export default withStyles(styles)(HomePopup)