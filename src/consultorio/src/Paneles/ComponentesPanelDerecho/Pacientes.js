import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";

class Pacientes extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Row className="p-4">
            
                <Col lg={4} xs={12} className="Pruebas  pt-4">
                    <Col lg={12} className="text-center">
                    <img src="https://www.uchile.cl/image/f145520-2-h.jpeg?5259"  width="190px" height="170px"  className=" rounded-circle " />
                    </Col>

                    <h3 className="text-white mt-3 fw-bold text-center">Jose Orlando</h3>
                    
                    <h4 className="text-white  fw-bold text-center">Gonzales Cegarra</h4>
                    <h3 className="text-white  fw-bold text-center">22 Años</h3>
                    <hr className="text-white fw-bold"/>
                    <div className="prueba3 p-2">
                    <h5 className=" mb-3 ms-1 fw-bold text-left text-dark">Informacion Medica</h5>
                    <h6 className="text-dark mb-3 text-right ms-1 fw-bold">Condiciones: Ninguna</h6>
                    <h6 className="text-dark mb-3 text-right ms-1 fw-bold">Ultima Cita: Sin Registros</h6>
                    <h6 className="text-dark mb-3 text-right ms-3 fw-bold">Seguro: Ninguna</h6>
                    <h6 className="text-dark mb-3 text-right ms-5 fw-bold">CAMPO: Sin Registros</h6>
                    </div>
                    
                </Col>

                <Col lg={7} xs={12} className="Pruebas2 ">



                </Col>
            
            
            </Row>

        );
    }
}

export default Pacientes