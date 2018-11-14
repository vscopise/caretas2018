import React, { Component} from 'react'
import { 
    withStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar'

import { Menu } from '@material-ui/icons'
import styles from '../assets/styles'

const sections = [
    {
        id: 1,
        catId: null,
        link: '/',
        label: 'Inicio'
    },
    {
        id: 2,
        catId: 7,
        link: '/categoria/politica',
        label: 'Política'
    },
    {
        id: 3,
        catId: 43,
        link: '/categoria/sociedad',
        label: 'Sociedad'
    },
    {
        id: 4,
        catId: 11,
        link: '/categoria/internacionales',
        label: 'Internacionales'
    },
    {
        id: 5,
        catId: 14,
        link: '/categoria/deportes',
        label: 'Deportes'
    },
    {
        id: 6,
        catId: 44,
        link: '/categoria/economia',
        label: 'Economía'
    },
    {
        id: 7,
        catId: 50,
        link: '/categoria/cultura',
        label: 'Cultura'
    },
    {
        id: 8,
        catId: 27,
        link: '/categoria/vida-y-ocio',
        label: 'Vida y Ocio'
    },
    {
        id: 9,
        catId: 26,
        link: '/categoria/empresariales',
        label: 'Empresariales'
    },
    {
        id: 10,
        catId: null,
        link: '/suscripciones',
        label: 'Suscripciones'
    },
    {
        id: 11,
        catId: null,
        link: '/contacto',
        label: 'Contacto'
    },
]

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
          }
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return(
            <div className={this.props.classes.Navbar} >
                <nav className='mobile-menu'>
                    <Menu className='show-menu' onClick={this.handleMenuOpen}/>
                    <ul className={this.state.menuOpen ? 'active' : null}>
                        {
                            sections.map((section) => (
                                <li key={section.id}>
                                    <Link 
                                        key={section.id} 
                                        to={{
                                            pathname: section.link,
                                            state: { 
                                                catId: section.catId,
                                                page: 1,
                                                catTitle: section.label 
                                            }
                                        }}
                                        onClick={this.handleMenuOpen}
                                    >
                                    {section.label}
                                </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar)