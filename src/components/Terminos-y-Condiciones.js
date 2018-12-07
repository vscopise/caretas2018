import React from 'react'
import { TinyButton as ScrollUpButton} from 'react-scroll-up-button'

import SidebarPage from './Sidebar-Page'

import { 
    Grid,
    withStyles 
} from '@material-ui/core'
import styles from '../assets/styles'

const TerminosCondiciones = (props) => (
    <Grid container spacing={24} className={props.classes.TerminosCondiciones}>
        <ScrollUpButton />
        <Grid item md={8} xs={12}>
            <h1 className={'page-title'}>
                Terminos y condiciones
            </h1>
            <div>
                <p>Estos Términos y Condiciones comprende a los sitios amparados por este compromiso son aquellos en que al final de cada texto expresan Copy Right Caras y Caretas S.A. </p>
                <p>Nuestra empresa no asume ninguna responsabilidad respecto a los sitios anunciantes, patrocinantes o aliados. </p>
                <p>El usuario que se registre en la página web carasycaretas.com.uy autoriza que sus datos personales sean incorporados a las base de datos de CARAS Y CARETAS SA, en estricto cumplimiento de lo dispuesto en la ley 18331. </p>
                <p>CARAS Y CARETAS únicamente transferirá los datos a una tercera persona física y/o jurídica, cuando cuente con el consentimiento del usuario, o cuando el servicio que se le brinda requiera que dichos datos sean comunicados a terceras personas físicas y/o jurídicas. </p>
                <p>CARASYCARETAS S.A. garantiza la protección de los datos personales del usuario, adoptando las medidas de seguridad necesarias para mantenerlos en estricta confidencialidad. </p>
                <p>El usuario declara que los datos proporcionados son veraces, siendo responsable ante cualquier perjuicio ocasionado a un tercero. </p>
                <p>El usuario podrá ejercer su derecho de actualizar, rectificar, suprimir y/o incluir sus datos personales. </p>
                <p>Para ejercer dicho derecho se podrá comunicar por escrito ya sea vía web o al e-mail caretas@adinet.com.uy, o personalmente en el domicilio de la empresa sito en Paraguay 1478 -201, tel (598) 2903 3188). </p>
                <p>En el caso que le asista razón al usuario, CARAS Y CARETAS S.A. accederá a su pedido en el plazo de 5 días hábiles. </p>
                <p>El reconocimiento individual del usuario se realiza mediante “cookies”. </p>
                <p>Las “cookies” son pequeños códigos transferidos a la o las computadoras del suscriptor. </p>
                <p>Nuestras “cookies” no dañan equipos y no producen ningún efecto nocivo. </p>
                <p>CARAS Y CARETAS podrá enviarle información relativa a las diferentes gestiones que se realicen.</p>


            </div>
        </Grid>
        <Grid item md={4} xs={12}>
            <SidebarPage/>
        </Grid>
    </Grid>
)

export default withStyles(styles)(TerminosCondiciones)