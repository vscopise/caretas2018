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
        //aria-labelledby="simple-modal-title"
        //aria-describedby="simple-modal-description"
    >
        <div className={props.classes.HomePopup}>
            <a href={'https://www.carasycaretas.com.uy/'} target={'_blank'}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/DBYIMLhbCKQ" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
            </a>
        </div>
    </Modal>
)

export default withStyles(styles)(HomePopup)