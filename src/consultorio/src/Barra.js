import React, { Component } from 'react'
import { Navbar,Container,Nav,Row,Col  } from 'react-bootstrap';

import Graficas from "./Iconos/Graficas.png";
import Paciente from "./Iconos/Paciente.png";
import Reporte from "./Iconos/Reporte.png";


class Barra extends Component {
    
    constructor(props) {


        super(props);

        this.state = {
            
        }

        
    }

    render() {
        return (
            <Navbar className="barra pt-3"  expand="lg" >
                       
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-rigth">
                            <Nav >
                            
                                <Navbar.Brand href="#link" ><img src={Graficas} width="60px" height="60px" className="img-fluid " /> <span className="h3 fw-bold" style={{color:'#126e82'}}>Graficas</span></Navbar.Brand>
                                <Navbar.Brand href="#link" ><img src={Paciente} width="60px" height="60px" className="img-fluid "/><span className="h3 fw-bold" style={{color:'#126e82'}}> Pacientes</span></Navbar.Brand>
                                <Navbar.Brand href="#link" ><img src={Reporte} width="60px" height="60px" className="img-fluid "/><span className="h3 fw-bold" style={{color:'#126e82'}} > Reportes</span></Navbar.Brand>
                            
                            </Nav>
                        </Navbar.Collapse >
                        
                       
                
            
            </Navbar>
        );
    }
}

export default Barra
