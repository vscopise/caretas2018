import React from 'react'
import { withStyles } from '@material-ui/core'
import { 
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton, 
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    EmailIcon,
   
} from 'react-share'

import styles from '../assets/styles'

const PostSharing = (props) => (
    <div className={props.classes.PostSharing}>
        <FacebookShareButton url={props.post.link}>
            <FacebookIcon size={15} round={false} />
        </FacebookShareButton>
        <TwitterShareButton url={props.post.link} title={'Twitter'}>
            <TwitterIcon size={15} round={false} />
        </TwitterShareButton>
        <WhatsappShareButton url={props.post.link} title={'WhatsApp'}>
            <WhatsappIcon size={15} round={false} />
        </WhatsappShareButton>
        <GooglePlusShareButton url={props.post.link} title={'Google+'}>
            <GooglePlusIcon size={15} round={false} />
        </GooglePlusShareButton>
        <EmailShareButton url={props.post.link} title={'Mail'}>
            <EmailIcon size={15} round={false} />
        </EmailShareButton>
    </div>
)

export default withStyles(styles)(PostSharing)