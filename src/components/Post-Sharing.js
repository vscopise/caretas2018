import React from 'react'
import { withStyles } from '@material-ui/core'
import { 
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,

    FacebookIcon,
    GooglePlusIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon,
   
} from 'react-share'

import styles from '../assets/styles'
const PostSharing = (props) => (
    <div className={props.classes.PostSharing}>
            <FacebookShareButton url={props.post.link}>
                <FacebookIcon size={props.isMobile ? 30 : 15} round={props.isMobile} />
            </FacebookShareButton>
            <TwitterShareButton url={props.post.link} title={'Twitter'}>
                <TwitterIcon size={props.isMobile ? 30 : 15} round={props.isMobile} />
            </TwitterShareButton>
            <WhatsappShareButton url={props.post.link} title={'WhatsApp'}>
                <WhatsappIcon size={props.isMobile ? 30 : 15} round={props.isMobile} />
            </WhatsappShareButton>
            <GooglePlusShareButton url={props.post.link} title={'Google+'}>
                <GooglePlusIcon size={props.isMobile ? 30 : 15} round={props.isMobile} />
            </GooglePlusShareButton>
            <EmailShareButton url={props.post.link} title={'Mail'}>
                <EmailIcon size={props.isMobile ? 30 : 15} round={props.isMobile} />
            </EmailShareButton>
    </div>
)

export default withStyles(styles)(PostSharing)