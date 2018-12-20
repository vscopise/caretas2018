import 'typeface-pt-serif'
import 'typeface-oswald'

const imageHeight = 2/3 * (window.innerWidth - 40)

const styles = theme => ({
    layout: {
        width: 'auto',
        //marginLeft: theme.spacing.unit * 3,
        //marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
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
            color: '#1f1e1e',
            [theme.breakpoints.down(960)]: {
                fontSize: '1.5rem',
            },
        },
        '& .page-title': {
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .content-list': {
            cursor: 'pointer'
        },
        '& .content-lead-title': {
            fontSize: '1.9rem',
            marginBottom: 10
        },
        '& .content-list-title': {
            fontSize: '1.5rem',
            marginBottom: 10
        },
        '& .content-list-thumb': {
            width: '100%',
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
        '& .entry-meta-date': {
            fontSize: '.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
        },
        '& a': {
            color: '#1f1e1e',
            textDecoration: 'none',
        },
        '& a:hover': {
            color: '#d00',
        },
        '& .image img': {
            maxWidth: '100%',
            width: '100%',
        },
        '& .result-item': {
                marginBottom: 10,
                paddingBottom: 10,
                borderBottom: '1px dotted #cdcdcd',
        },
        '& h4.widget-title': {
            fontSize: '.875rem',
            color: '#fff',
            marginBottom: 20,
            textTransform: 'uppercase',
            overflow: 'hidden',
            borderBottom: '2px solid #d00',
            '& span': {
                display: 'inline-block',
                padding: '9px 12px 5px',
                background: '#d00',
            }
        },
        '& a:hover h3': {
            color: '#d00',
        },
        '& a:hover h4': {
            color: '#d00',
        },
        '& h2': {
            lineHeight: '1.3',
        },
        '& h3': {
            lineHeight: '1.3',
        },
        '& h4': {
            lineHeight: '1.3',
        },
        '& a p': {
            color: '#1f1e1e',
        },
        '& a:hover p': {
            color: '#d00',
        },
        '& .button': {
            marginTop: 14,
            padding: 14,
            fontFamily: 'Oswald',
            backgroundColor: '#d00',
            color: '#fff',
        },
        '& .zone-video': {
            paddingBottom: 0,
        },
        '& .adsbygoogle': {
            textAlign: 'center',
            marginBottom: 20,
            textDecoration: 'none',
            '&::before': {
                content: `'PUBLICIDAD'`,
                fontFamily: 'arial,helvetica',
                fontSize: 10,
                color: '#aaa',
                display: 'inherit',
                lineHeight: '10px',
                letterSpacing: 5,
                marginBottom: 5,
            },
        },
    },
    HeaderLogo: {
        padding: '20px 0',
        textAlign: 'center',
        '& img': {
            maxWidth: '100%',
        },
        '& p': {
          fontFamily: 'Oswald',
          color: '#a0a0a0',
          fontSize: '0.9rem',
          marginBottom: 0,
        },
    },
    HomePopup: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        //'& div': {
            position: 'absolute',

            //padding: theme.spacing.unit * 4,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        //}
        //width: theme.spacing.unit * 50,
        //height: 100,
        overflow: 'hidden',
        //'&::after' : {
            //content: `'X'`,
            //display: 'table',
            //clear: 'both',
        //},
      },

    HomeImageGallery: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottom: '1px dotted #cdcdcd',
        '& h2': {
            margin: 0,
            fontSize: '2rem'
        }
        
    },
    Navbar: {
        position: 'relative',
        textTransform: 'uppercase',
        
        '& .mobile-menu': {
            float: 'left',
            background: '#dd0008',
            width: '100%',
            '& ul': {
                margin: 0,
                padding: 0,
                listStyleType: 'none',
                position: 'relative',
                height: 44,
                '& li': {
                    display: 'inline-block',
                    margin: 0,
                    [theme.breakpoints.down(900)]: {
                        
                    },
                    '& a': {
                        float: 'left',
                        width: '100%',
                        padding: '.625rem .5rem',
                        color: '#fff',
                        [theme.breakpoints.down(900)]: {
                      //      width: '100%',
                        padding: '.3rem .5rem',
                        }
                    },
                    [theme.breakpoints.down(900)]: {
                        //marginBottom: 1,
                        width: '100%',
                    },
                    
                },
                '& .btn-suscripciones': {
                    backgroundColor: '#0f0',
                    color: '#000'
                },
                '& li .sub-navbar': {
                    display: 'none',
                },
                '& li .sub-navbar.hide': {
                    display: 'none !important',
                },
                '& li:hover .sub-navbar':{
                    display: 'block',
                    [theme.breakpoints.down(800)]: {
                        display: 'none',
                    },
                },
                [theme.breakpoints.down(900)]: {
                    position: 'static',
                    display: 'none',
                    height: 'auto',
                }
            },
            '& .submenu': {
                
            },
            '& .submenu-active': {
                display: 'block',
            },
            '& ul.active': {
                [theme.breakpoints.down(900)]: {
                    display: 'block',
                    zIndex: 10,
                    position: 'relative',
                    marginTop: 24,
                },
                '& li': {
                    backgroundColor: '#d00',
                },
            },

            '& .show-menu': {
                color: '#fff',
                float: 'right',
                margin: '.625rem 1.25rem',
                display: 'none',
                [theme.breakpoints.down(900)]: {
                    display: 'block',
                },
            },
        },
        padding: '0',
        minHeight: 'auto',
        '& a': {
            fontFamily: 'Oswald',
            color: '#fff',
            textDecoration: 'none',
            padding: '.625rem .5rem',
        },
        '& .sub-navbar': {
            background: '#222',
            color: '#fff',
            position: 'absolute',
            top: 44,
            left: 0,
            width: '100%',
            padding: 10,
            zIndex: 99,
            [theme.breakpoints.down(800)]: {
                display: 'none',
            },
        },
    },
    SubNav: {
        float: 'left',
        width: '100%',
        background: '#efefef',
        padding: 10,
        textTransform: 'uppercase',
        fontFamily: 'Oswald',
        fontSize: 12,
        [theme.breakpoints.down(800)]: {
            display: 'none',
        },
    },
    SubCategory: {
        '& h3.cat-title': {
            color: '#fff',
            textTransform: 'none',
            size: '1rem'
        },
        '& a:hover h3.cat-title': {
            color: '#fff',
        },
        '& .image': {
            width: '100%',
            height: 150,
            backgroundSize: 'cover',
            marginBottom: 5,
            backgroundPosition: 'center',
        },
        [theme.breakpoints.down(800)]: {
            display: 'none',
        },
    },
    Loading: {
        textAlign: 'center',
    },  
    LoadingPostCategories: {
        [theme.breakpoints.down(800)]: {
            display: 'none',
        },
    },
    SocialBar: {
        float: 'right',
        '& .icon': {
            fontSize: 30,
            marginLeft: 10,
        },
        '& a': {
            color: '#1f1e1e',
        },
        '& a:hover': {
            color: '#d00',
        },
    },
    CabezalHome: {
        marginTop: 30,
        marginBottom: 48,
        float: 'left',
        '& a:hover p': {
            color: '#fff',
        },
        [theme.breakpoints.down(960)]: {
            marginBottom: 0
        }
    },
    PostCabezal: {
        '& .meta': {
            position: 'absolute',
            bottom: 0,
            paddingTop: 50,
            width: '100%',
            background: 'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,.65) 50%)',
            zIndex: 2,
            '& .content': {
                [theme.breakpoints.down(960)]: {
                    width: '100%',
                    margin: 0,
                    padding: '0 10px',
                },
                '& h2': {
                    [theme.breakpoints.down(960)]: {
                        fontSize: '1.5rem',
                        marginBottom: 20,
                    }
                }
            },
        },
        '& .image': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            transition: 'all .5s',
            backgroundPosition: 'center',
            zIndex: '1',
            backgroundSize: 'cover',
            [theme.breakpoints.down(960)]: {
                height: 400, 
            },
        },
        '& .image:hover': {
            transform: 'scale(1.1)',
        },
        '& .size-a': {
            height: 462,
            position: 'relative',
            overflow: 'hidden',
            [theme.breakpoints.down(960)]: {
                height: 400, 
                marginBottom: 20,
            },
            '& .content': {
                width: '85%',
                margin:'0 0 15px 20px'
            },
            '& h2': {
                color: '#fff',
                fontSize: '2.7rem',
                marginBottom: 0,
            },
            '& .excerpt': {
                color: '#fff',
                [theme.breakpoints.down(800)]: {
                    display: 'none',
                },
            },
            '& a:hover .excerpt': {
                color: '#fff',
            }
        },
        '& .size-b': {
            height: 261,
            position: 'relative',
            overflow: 'hidden', 
            [theme.breakpoints.down(960)]: {
                height: 400, 
                marginBottom: 20,
                backgroundColor: '#555',
            },                                                                                                                                                      
            '& .content': {
                width: '85%',
                margin:'0 0 15px 11px'
            },
            '& h2': {
                color: '#fff',
                fontSize: '1.8rem',
            }
        },
        '& .size-c': {
            height: 201,
            position: 'relative',
            overflow: 'hidden', 
                                                                                                                                                                    
            '& .content': {
                width: '85%',
                margin:'0 0 15px 11px'
            },
            '& h2': {
                color: '#fff',
                fontSize: '1.2rem',
            },
            
            [theme.breakpoints.down(960)]: {
                height: 400, 
                marginBottom: 20,
                backgroundColor: '#555',
            }, 
        },
    },
    DestacadasEditorial: {
        '& a:hover p': {
            color: '#d00',
        },
    },
    ItemDestacadas: {
        marginBottom: 20,
        '& .image': {
            width: '100%',
            height: 100,
            backgroundSize: 'cover',
            marginBottom: 5,
            backgroundPosition: 'center',
            [theme.breakpoints.down(960)]: {
                height: imageHeight,
            },
        },
        '& h4': {
            margin: 0,
            [theme.breakpoints.down(960)]: {
                fontSize: '1.5rem',
            },
        },
        
    },
    Editorial: {
        padding: 10,
        background: '#f2f0eb',
        '& img': {
            width: '100%',
            height: 'auto',
            marginBottom: 5
        },
        '& h3': {
            fontSize: '1.5rem',
            margin: 0,
        },
        '& p': {
            margin: 0,
            color: '#1f1e1e',
        },
        [theme.breakpoints.down(960)]: {
            marginBottom: 10,
        },
    },
    Categoria: {
        
    },
    PreviewPost: {
        '& a': {
            textDecoration: 'none',
            color: '#1f1e1e',
        },
        '& a:hover': {
            color: '#d00',
        },
        '& a:hover h3': {
            color: '#d00',
        },
        borderBottom: '1px dotted #cdcdcd',
        marginBottom: 20,
    },
    PostContent: {
        paddingTop: 20,
        '& .colgado': {
            fontFamily: 'Oswald',
            color: '#6a6a6a',
            textTransform: 'uppercase',
            margin: 0,
        },
        '& .entry-title': {
            marginTop: 0,
            fontSize: '2.375rem',
            marginBottom: 20,
            [theme.breakpoints.down(960)]: {
                fontSize: '1.8rem',
            },
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
        '& p.caption': {
            textAlign: 'right',
            fontStyle: 'italic',
            margin: 0,
            color: '#777',
            [theme.breakpoints.down(960)]: {
                display: 'none',
            }
        },
        '& .entry-meta': {
            fontSize: '.75rem',
            textTransform: 'uppercase',
            borderBottom: '1px solid #888',
            marginBottom: 15,
            paddingBottom: 15,
            '& .entry-meta-date': {
                [theme.breakpoints.down(960)]: {
                    fontSize: '1rem',
                    textTransform: 'none',
                    textAlign: 'center',
                    display: 'block',
                    width: '100%',
                },
            },
        },
        '& .entry-content p': {
            
            margin: '0 0 1.25rem',
            fontSize: '107%',
            '& br': {
                marginBottom: 20,
            },
            '& img': {
                maxWidth: '100%',
                height: 'auto',
            }
        },
        
    },
    PostSharing: {
        display: 'inline-block',
        marginLeft: 10,
        '& .SocialMediaShareButton': {
            verticalAlign: 'bottom',
            display: 'inline-block',
            marginRight: 5,
            cursor: 'pointer',
            [theme.breakpoints.down(960)]: {
                marginRight: 10,
            }
        },
        [theme.breakpoints.down(960)]: {
            display: 'block',
            textAlign: 'center',
            marginTop: 15,
        }
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
        marginBottom: 20,
        '& .even':{background: '#fff'},
        '& .odd':{background: '#f0f0f0'},
        '& .comment': {
            padding: '20px 20px 0',
            borderBottom: '5px solid #ccdee8',
            marginBottom: 20,
            '& p': {
                wordBreak: 'break-word'
            },
            '& .comment-meta': {
                '& img': {
                    float: 'left',
                    marginRight: 20,
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                },
                '& h4': {
                    marginTop: 0,
                    marginBottom: '1.25rem',
                    '& span': {
                        cursor: 'pointer',
                    },
                    '& span:hover': {
                        color: '#d00',
                        textDecoration: 'underline',
                    },
                    [theme.breakpoints.down(960)]: {
                        fontSize: '1rem',
                    }
                },
            },
        }
    },
    CommentForm: {
        background: '#e0e0e0',
        padding: '1.25rem 1.25rem .625rem',
        marginBottom: '1.875rem',
        '& .comment-reply-title': {
            marginTop: 0,
            fontSize: '1.5rem',
            '& span': {
                fontSize: '1rem',
                marginLeft: 10,
                cursor: 'pointer',
            },
            '& span:hover': {
                color: '#d00',
                textDecoration: 'underline',
            }
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
        
        '& .sending-comment-label': {
            display: 'inline-block',
            marginTop: 14,
            lineHeight: '49px',
            float: 'right'
        }
    },
    Pagination: {
        marginBottom:20,
        '& .page-numbers': {
            display: 'inline-block',
            padding: '10px 20px',
            background: '#efefef',
            fontFamily: 'Oswald',
            marginRight: 3,
        },
        '& .current-page': {
            background: '#d00',
            color: '#fff',
        },
        '& a': {
            textDecoration: 'none',
        },
        '& a:hover': {
            background: '#ccdee8',
            'a': {
                color: '#d00',
            }
        }
    },
    SearchPosts: {
        marginBottom: '1.875rem',
        background: '#efefef',
        padding: '5%',
        '& .result-items': {
            paddingTop: 10,
            '& a': {
                textDecoration: 'none',
            },
        },
        '& .search': {
            background: '#fff',
        },
        '& h4': {
            margin: 0,
        }
        
    },
    ColumnasDestacadas: {
        marginBottom: '1.875rem',
        '& h4': {
            margin: 0
        },
        '& p': {
            margin: 0
        },
    },
    LasMasVistas: {
        '& h4': {
            margin: 0,
        },
        '& .result .result-item a h4': {
            [theme.breakpoints.down(960)]: {
                fontSize: '1rem',
            }
        },
        marginBottom: '1.875rem',
    },

    GridPosts: {
        borderBottom: '1px dotted #cdcdcd',
        marginBottom: 20,
        paddingBottom: 20,
        
        '& h2': {
            margin: 0,
        },
        '& .image-container': {
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 10,
            '& .image': {
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                [theme.breakpoints.down(960)]: {
                    height: imageHeight,
                    marginBottom:10
                },                                                                                                                                                    
            },
        },
        '& a:hover h2': {
            color: '#d00',
        },
        '& .size-a': {
            '& .image-container': {
                height: 200,
                [theme.breakpoints.down(960)]: {
                    height: 'auto',
                },
            },
            '& h2': {
                fontSize: '1.9rem',
                [theme.breakpoints.down(960)]: {
                    fontSize: '1.5rem',
                }
            },
        },
        '& .size-b': {
            '& .image-container': {
                height: 100,
            },
            '& h2': {
                fontSize: '1rem',
            },
        },
        '& hr': {
            marginBottom: 20,
            paddingBottom: 10,
            border: 0,
            borderBottom: '1px dotted #cdcdcd'
        }
    },
    Galeria: {
        '& .carousel':{
            '& .slide': {
                background: 'transparent',
                '& h2': {
                    textAlign: 'left',
                    paddingBottom: 20,
                }
            },
            '& .control-dots': {
                '& .dot': {
                    background: '#ccc',
                }
    
            },
        },
    },
    ZonePost: {
        borderBottom: '1px dotted #cdcdcd',
        marginBottom: 20,
        paddingBottom: 20,
        '& .image': {
            width: '100%',
            height: 200,
            marginBottom: 5,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            [theme.breakpoints.down(960)]: {
                height: imageHeight,
            },
        },
        '& h2': {
            margin: 0,
            fontSize: '2rem',
        }
    },
    VideoPost: {
        borderBottom: '1px dotted #cdcdcd',
        marginBottom: 20,
        paddingBottom: 20,
        '& .container': {
            position: 'relative',
            '& svg': {
                position: 'absolute',
                left: '50%',
                top: '50%',
                height: 70,
                width: 70,
                marginLeft: '-35px',
                marginTop: '-65px',
                color: '#d00',
                background: 'rgba(0,0,0,.4)',
                borderRadius: 35,
            }
        },
        '& .image': {
            width: '100%',
            height: 200,
            marginBottom: 5,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            [theme.breakpoints.down(960)]: {
                height: imageHeight,
            },
        },
        '& h2': {
            margin: 0,
            fontSize: '2rem',
        }
    },
    Header: {
    },
    Banner: {
        textAlign: 'center',
        marginBottom: 20,
        '&::before': {
            content: `'PUBLICIDAD'`,
            fontFamily: 'arial,helvetica',
            fontSize: 10,
            color: '#aaa',
            display: 'inherit',
            lineHeight: '10px',
            letterSpacing: 5,
            marginBottom: 5,
        },
    },
    Columnistas: {
        marginBottom: '1.875rem',
        '& .columnista': {
            textAlign: 'center',
            '& .avatar': {
                borderRadius: '50%',
                width: '100%',
                height: 'auto',
            },
            '& p': {
                marginTop: 0,
            }
        },
    },
    TapaRevista: {
        '& img': {
            width: '100%;',
        }
    },
    EdicionImpresa: {
        '& img.tapa': {
            width: '100%',
        },
        '& a': {
            textDecoration: 'none',
        },
        '& a:hover h3': {
            color: '#d00',
        },
        '& h3': {
            marginTop: 0,
        },
    },
    Contacto: {
        background: '#efefef',
        padding: '1.25rem',
        '& .textfield': {
            marginTop:14,
            '& input': {
                background: '#fff',
            },
           '& div': {
                background:'#fff'
           }
        },
        marginBottom: 20
    },
    Sidebar: {
        paddingTop: 30
    },
    Footer: {
        background: '#333',
        color: '#fff',
        fontSize: '.75rem',
        padding: '.625rem 0',
        '& a': {
            color: '#fff',
            textDecoration: 'none'
        },
        '& a:hover': {
            textDecoration: 'underline',
        },
        '& .wrapper-inner': {
            width: '90%',
            maxWidth: 1180,
            margin: '0 auto',
            fontFamily: 'Oswald',
        },
        [theme.breakpoints.down(960)]: {
            marginBottom: 55,
        }
    },
    MobileNav: {
        visibility: 'hidden',
        display: 'none',
        //backgroundColor: '#d00',
        //paddingTop: 2,
        //boxShadow: '0 -2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
        //backgroundColor: '#d00',
        '& .drawer': {
            backgroundColor: '#d00',
            position: 'fixed',
            top: 'auto',
            bottom: 0,
            zIndex: '1005',
            width: window.innerWidth,
            height: 55,
            margin: 0,
            '& .mobile-nav-item': {
                textAlign: 'center',
                height: '100%',
                //lineHeight: '75px',
                color: '#fff',
                '& a': {
                    color: '#fff',
                    textDecoration: 'none',
                },
                '& span': {
                    display: 'block',
                    fontFamily: 'Arial',
                    fontSize: '.7rem',
                    //lineHeight: '.7rem',
                }
            },
        },
        [theme.breakpoints.down(960)]: {
            visibility: 'visible !important',
            display: 'block !important',
        },
        '& .bottom-div': {
            color: '#fff',
            position: 'fixed',
            bottom: 48,
            width: '100%',
            zIndex: '1005',
            backgroundColor: '#d00',
            margin: 0,
            padding: 0,
            '& ul': {
                listStyleType: 'none',
                '& a': {
                    textTransform: 'uppercase',
                    color: '#fff',
                    float: 'left',
                    fontFamily: 'Oswald',
                    width: '100%',
                    color: '#fff',
                    textDecoration: 'none',
                    paddingBottom: '.5rem',
                }
            },
            '& .bottom-search': {
                padding: '.5rem',
                '& .search': {
                    '& input': {
                       color: '#fff',
                    },
                    '& label': {
                        color: '#fff',
                    },
                    '& div:after': {
                        borderColor: '#fff'
                    }
                },
            },
            '& .result-items': {
                padding: '0 .5rem',
            },
            '& p': {
                fontFamily: 'Arial',
            },
            '& .result-item a': {
                color: '#fff',
                textDecoration:'none',
            }
        }
    },
    Suscripciones: {
        marginBottom: 20,
        '& .video-container': {
            position: 'relative',
            paddingBottom: '56.25%',
            paddingTop: 30, 
            height: 0, 
            overflow: 'hidden',
        },
        '&  .video-container video': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },

        '& h3': {
            borderTop: '1px solid #000',
            paddingTop: 20,
            marginTop: 20,
        },
        '& .item-button': {
            textAlign: 'center',
        }
    },
    VideoDestacado: {
        width: '100%',
        marginBottom: 20,
        '& .video-container': {
            position: 'relative',
            paddingBottom: '56.25%',
            paddingTop: 30, 
            height: 0, 
            overflow: 'hidden',
        },
        '& .video-container iframe': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
        '& .sharing': {
            marginTop: 10,
            '& .sharing-button': {
                float: 'left',
                cursor: 'pointer'
            }
        },
    },
    PromoCyCTv: {
        width: '100%',
        textAlign: 'center'
    },
    BotonEdicionImpresa: {
        marginBottom: 20,
        fontFamily: 'Oswald',
        backgroundColor: '#d00',
        float: 'left',
        width: '100%',
        fontSize: '1.5rem',
        padding: '.5rem',
        '& a.link': {
            color: '#fff',
            display: 'block',
        },
        '& a.link:hover': {
            color: '#fff',
        },
    }
})

export default styles