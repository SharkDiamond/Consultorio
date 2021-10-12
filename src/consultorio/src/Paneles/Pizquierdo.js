import React, { Component } from 'react'
import { Col,Row,Button } from 'react-bootstrap';
import FormAddElementsLeft from './FormAddElementsLeft';


class Pizquierdo extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            ShowFormCitas:false,
            ShowFormCompromisos:false
        }
    
    this.bind=this.changeForm.bind(this);

    }

    changeForm=(param)=>{
            
    this.state[param.target.id] ? this.setState({[param.target.id]:false}) : this.setState({[param.target.id]:true});

   }

    render() {

        const listCompromisos= <ol>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>
        <li className="h5 text-dark fw-bold">Reunion Junta Directiva - <span style={{color:"#126e82"}}>8 pm</span></li>

        </ol>;

        const listCitas=<ol>
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
        </ol>;
       

        return (
           <Col lg="auto" xs={12} md={4} xl={4} className="tamanoColorPaneles mb-2">
               
               <Row className="ps-4 pe-4 pt-1">
                    
                    <Col lg={12}>
                    
                    <h3 className="Titulos ">Citas Medicas <Button id="ShowFormCitas" className="rounded-circle bg-white text-dark fw-bold border-white" onClick={this.changeForm}>+</Button></h3> 
                    
                    </Col>
                  
                    
                    <Col className="tamanoListaCitasMedicas  rounded-3 p-3">
                    
                     {this.state.ShowFormCitas ? <FormAddElementsLeft type="Citas" /> : listCitas }   
                        
                        </Col>
                    
                    <Col lg={12} className="pt-1">
                    
                    <h3 className="Titulos">Compromisos <Button id="ShowFormCompromisos" className="rounded-pill bg-white text-dark fw-bold border-white" onClick={this.changeForm}>+</Button></h3>
                    
                    </Col>

                    <Col lg={12}className="tamanoListaCompromisos rounded-3 p-3"> 
                    
                    { this.state.ShowFormCompromisos ? <FormAddElementsLeft type="Compromisos"/> : listCitas } 
               
                    </Col>

                </Row>




           </Col> 
        );
    }
}

export default Pizquierdo