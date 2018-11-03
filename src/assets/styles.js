import 'typeface-pt-serif'
import 'typeface-oswald'

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: 1220,
        [theme.breakpoints.up(1180 + theme.spacing.unit * 3 * 2)]: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        fontFamily: 'PT Serif',
        background: '#fff',
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Oswald',
            fontWeight: 400,
            color: '#1f1e1e'
        },
        '& .page-title': {
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .content-list': {
            cursor: 'pointer'
        },
        '& .content-list-title': {
            fontSize: '1.5rem',
            marginBottom: 10
        },
        '& .content-list-thumb': {
            maxWidth: '100%',
            height: 'auto'
        },
        '& .entry-meta-cats': {
            color: 'red',
            textTransform: 'uppercase',
            fontSize: '.75rem',
            fontWeight: '700',
            '&::after': {
                content: `', '`,
              },
            
        },
        '& .entry-meta-cats:last-child': {
            '&::after': {
                content: `''`,
              },
        },
    },
    Home: {
        '& .cabezal': {
            height: 462,
            
        },
    },
    PostContent: {
        '& .colgado': {
            fontFamily: 'Oswald',
            color: '#6a6a6a',
            textTransform: 'uppercase',
            margin: 0,
        },
        '& .entry-title': {
            marginTop: 0,
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .entry-excerpt': {
            borderTop: '1px solid #888',
            borderBottom: '1px solid #888',
            marginTop: 15,
            marginBottom: 15,
            paddingTop: 8,
            paddingBottom: 10,
        },
        '& .entry-excerpt p': {
            margin: 0,
            lineHeight: '150%',
            fontSize: '120%',
            color: '#333',
        },
        '& .entry-meta': {
            fontSize: '.75rem',
            textTransform: 'uppercase',
            borderBottom: '1px solid #888',
            marginBottom: 15,
            paddingBottom: 15,
        },
        '& .entry-content p': {
            margin: '0 0 1.25rem',
            fontSize: '107%',
        },
    },
    Comments: {
        '& .comments-section-title': {
            background: '#ccdee8',
            fontSize: '.875rem',
            fontWeight: '400',
            textTransform: 'uppercase',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            color: '#1f1e1e',
            '& .comments-count': {
                background: '#d00',
                color: '#fff',
                padding: 20,
                float: 'left',
            },
            '& .comments-count-more': {
                padding: 20,
                float: 'left',
            },
        },
    },
    CommentList: {
        padding: '20px 20px 5px',
        marginBottom: 20,
        background: '#efefef',
        '& .comment': {
            padding: '20px 20px 10px',
            background: '#fff',
            borderBottom: '5px solid #ccdee8',
            marginBottom: 20,
            '& .comment-meta': {
                '& img': {
                    float: 'left',
                    marginRight: 20,
                    width: 70,
                    height: 70
                },
                '& h4': {
                    marginTop: 0,
                    marginBottom: '1.25rem',
                }
            }
        }
    },
    CommentForm: {
        background: '#efefef',
        padding: '1.25rem 1.25rem .625rem',
        marginBottom: '1.875rem',
        '& .comment-reply-title': {
            marginTop: 0,
            fontSize: '1.5rem'
        },
        
        
        '& input[type=button]': {
            background: '#d00',
            color: '#fff',
            padding: '14px',
            fontFamily: 'Oswald',
        },
        '& .textfield': {
            marginTop:14,
            '& input': {
                background: '#fff',
            },
           '& div': {
                background:'#fff'
           }
        },
        '& .button': {
            marginTop: 14,
            background: '#d00',
            color: '#fff',
            padding: 14,
            fontFamily: 'Oswald',
        },
        '& .sending-comment-label': {
            display: 'inline-block',
            marginTop: 14,
            lineHeight: '49px',
            float: 'right'
        }
    },

})

export default styles