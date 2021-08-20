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
           <Col lg="auto" xs={12} md={4} xl={4} className="tamanoColorPaneles mb-2">
               
               <Row className="ps-4 pe-4 pt-1">
                    
               <Col lg={12}>
                    
                    <h3 className="Titulos">Citas Medicas</h3>
                    
                    </Col>
                   
                    <Col className="tamanoListaCitasMedicas  rounded-3 p-3 " >
                    
                        <ol >
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        <li className="h5 text-dark fw-bold">Gabriel Arispe - <span style={{color:"#126e82"}}>Dolor De Cabeza - </span><Button variant="outline-dark">C</Button></li>
                        <hr  style={{height:'5px',color:"#142d34"}}/>
                        </ol>
                
                        </Col>
                    
                    <Col lg={12} className="pt-1">
                    
                    <h3 className="Titulos">Compromisos</h3>
                    
                    </Col>

                    <Col lg={12}className="tamanoListaCompromisos  rounded-3 p-3 "> 
                    
                        <ol>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
                        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>

                        </ol>
                    
                    
                    </Col>

                </Row>




           </Col> 
        );
    }
}

export default Pizquierdo