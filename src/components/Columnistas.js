import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Grid,
    withStyles
} from '@material-ui/core'
import styles from '../assets/styles'

const Columnistas = ( props ) => (
    <div className={props.classes.Columnistas}>
        <h4 className='widget-title'>
            <span>Columnistas</span>
        </h4>
        <Grid container spacing={24}>
            {
                props.columnistas.map(columnista => 
                    <Grid 
                        item xs={4} 
                        key={columnista.id}
                        className='columnista'
                    >
                        <Link
                            to = {
                                {pathname: '/author/' + columnista.user_login, 
                                    state: {
                                        userId: columnista.id, 
                                        userLogin: columnista.user_login,
                                        userName: columnista.name,
                                    }
                                }
                            }  
                        >
                            <div 
                                className='avatar'
                                dangerouslySetInnerHTML={{__html: columnista.avatar}}
                            />
                            <p>{columnista.name}</p>
                        </Link>
                    </Grid>)
            }
        </Grid>
        
    </div>
                
)

export default withStyles(styles)(Columnistas)