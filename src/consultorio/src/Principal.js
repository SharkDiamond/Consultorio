//IMPORTACIONES DE PAQUETES
import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap';

//IMPORTACIONES PROPIAS
import Barra from './Barra';
import Pizquierdo from './Paneles/Pizquierdo';
import Pderecho from './Paneles/Pderecho';


class Principal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
<Container fluid={true} className="">
            <Row><Barra/></Row>
        
        <Row className="justify-content-center mt-4 p-2">

          <Pizquierdo/>

          <Pderecho/>

        </Row>
        </Container>  
        )
    }
}

export default Principal;