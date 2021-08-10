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
           <Col lg={4} xs={12} className="tamanoColorPaneles ">
               
               <Row className="p-4">
                    
                    
                   
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
                        
                    <Col lg={12}className="tamanoListaCompromisos mt-5"> </Col>

                </Row>




           </Col> 
        );
    }
}

export default Pizquierdo