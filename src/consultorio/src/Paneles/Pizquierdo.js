import React, { Component } from 'react'
import { Col,Row,Button } from 'react-bootstrap';



class Pizquierdo extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <Col lg={4} xs={12} className="tamanoColorPaneles mb-2">
               
               <Row className="ps-4 pe-4 pt-1">
                    
               <Col lg={12}>
                    
                    <h3 className="Titulos">Citas Medicas</h3>
                    
                    </Col>
                   
                    <Col className="tamanoListaCitasMedicas border rounded-3 p-3 " >
                    
                        <ol >
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Gabriel Arispe - <span className="text-white">Dolor De Cabeza - </span><Button variant="outline-light">C</Button></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h5">Miranda Castro - <span className="text-white">Malestar General</span></li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        <li className="h4">test</li>
                        <hr  style={{height:'5px',color:"#ffffff"}}/>
                        </ol>
                
                        </Col>
                    
                    <Col lg={12} className="pt-1">
                    
                    <h3 className="Titulos">Compromisos</h3>
                    
                    </Col>

                    <Col lg={12}className="tamanoListaCompromisos border rounded-3 p-3 "> 
                    
                        <ol>
                        <li className="h5 text-white">Reunion Junta Directiva - <span style={{color:"#52c4d3"}}>8 pm</span></li>
                        <li className="h5 text-white">Comida en Familia - <span style={{color:"#52c4d3"}}>3 pm</span></li>
                        <li className="h5 text-white">Operacion De Espalda - <span style={{color:"#52c4d3"}}>5 pm</span></li>
                        <li className="h5 text-white">Reunion Junta Directiva - <span style={{color:"#52c4d3"}}>8 pm</span></li>
                        <li className="h5 text-white">Comida en Familia - <span style={{color:"#52c4d3"}}>3 pm</span></li>
                        <li className="h5 text-white">Operacion De Espalda - <span style={{color:"#52c4d3"}}>5 pm</span></li>
                        </ol>
                    
                    
                    </Col>

                </Row>




           </Col> 
        );
    }
}

export default Pizquierdo