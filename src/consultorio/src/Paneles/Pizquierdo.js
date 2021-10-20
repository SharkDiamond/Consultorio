import React, {useState,useEffect, useRef} from 'react';
import { Col,Row,Button } from 'react-bootstrap';
import axios from 'axios';
import FormAddElementsLeft from './FormAddElementsLeft';


export default function Pizquierdo(props) {
    //ESTADO
    const [ShowFormCitas,setShowFormCitas]=useState(false);
    const [ShowFormCompromisos,setShowFormCompromisos]=useState(false);
    const [Citas,setCitas]=useState([]);
    const [Compromisos,setCompromisos]=useState([]);
   
//tesdt
    useEffect(async()=>{

        let valores=await axios.get("http://localhost:8082/Citas/GetCitas", {
          headers: {
            'token': sessionStorage.getItem("Token")
          }
        });
       
        setCitas(valores.data);

        console.log(valores.data);
      },[]);
    

    
    //DATA FALSE COMPROMISOS
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
    //DATA FALSE CITAS
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

   return(
        <Col lg="auto" xs={12} md={4} xl={4} className="tamanoColorPaneles mb-2">
               
               <Row className="ps-4 pe-4 pt-1">
                    
                    <Col lg={12}>
                    
                    <h3 className="Titulos ">Citas Medicas <Button id="ShowFormCitas" className="rounded-circle bg-white text-dark fw-bold border-white" onClick={e=>setShowFormCitas(!ShowFormCitas)}>+</Button></h3> 
                    
                    </Col>
                                  
                    <Col className="tamanoListaCitasMedicas  rounded-3 p-3 ">
                    
                     { ShowFormCitas ? <FormAddElementsLeft type="Citas" /> :<ol className="">{
                       
  Citas.map((element)=><li className=" text-dark fw-bold text-center"  >{element.Paciente}- <span style={{color:"#126e82"}}>{element.Sintomas} - </span> <Button variant="outline-dark">C</Button>  <hr  style={{height:'4px',color:"#142d34",width: "95%" }} /></li>)
    
                       } </ol>}
                 
                        
                        </Col>
                    
                    <Col lg={12} className="pt-1">
                    
                    <h3 className="Titulos">Compromisos <Button id="ShowFormCompromisos" className="rounded-pill bg-white text-dark fw-bold border-white" onClick={e=>setShowFormCompromisos(!ShowFormCompromisos)}>+</Button></h3>
                    
                    </Col>

                    <Col lg={12}className="tamanoListaCompromisos rounded-3 p-3"> 
                    
                    { ShowFormCompromisos ? <FormAddElementsLeft type="Compromisos"/> : listCompromisos } 
               
                    </Col>

                </Row>

           </Col>
   );

}