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

      try {
              
        let valoresCitas=await axios.get("http://localhost:8082/Citas/GetCitas", {
          headers: {
            'token': sessionStorage.getItem("Token")
          }
        });

        let valoresCompromisos=await axios.post("http://localhost:8082/Compromisos/GetCompromisos",{"user":sessionStorage.getItem("Usuario")},{
          headers: {
            'token': sessionStorage.getItem("Token")
          }
        });
      

  setCitas(valoresCitas.data);

  setCompromisos(valoresCompromisos.data);

      
      } catch (error) {


          console.log(error.response.data);
      }



      },[]);
    

    //METODO PARA ACTUALIZAR EL ESTADO DE CAMBIAR DE LA LISTA DE CITAS AL FORMULARIO DE CREACION DE CITAS Y HACER LAS PETICIONES DE LAS CITAS
    const updateAndChange=async(data)=>{


      if (data=="Citas"){

      let valoresCitas=await axios.get(`http://localhost:8082/${data}/Get${data}`, {
        headers: {
          'token': sessionStorage.getItem("Token")
        }
      });
     
        setShowFormCitas(!ShowFormCitas); 


        setCitas(valoresCitas.data);

      } 


      else if(data=="Compromisos"){

        let valoresCompromisos=await axios.post(`http://localhost:8082/${data}/Get${data}`,{"user":sessionStorage.getItem("Usuario")},{
          headers: {
            'token': sessionStorage.getItem("Token")
          }
        });
      

        setShowFormCompromisos(!ShowFormCompromisos);
        setCompromisos(valoresCompromisos.data);
      }



    }
    
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
   

   return(
        <Col lg="auto" xs={12} md={4} xl={4} className="tamanoColorPaneles mb-2">
               
               <Row className="ps-4 pe-4 pt-1">
                    
                    <Col lg={12}>
                    
                    <h3 className="Titulos ">Citas Medicas <Button id="ShowFormCitas" name="Citas" className="rounded-circle bg-white text-dark fw-bold border-white" onClick={e=>updateAndChange(e.target.name)}>+</Button></h3> 
                    
                    </Col>
                                  
                    <Col className="tamanoListaCitasMedicas  rounded-3 p-3 ">
                    
                     { ShowFormCitas ? <FormAddElementsLeft type="Citas" /> :<ol className="">{
                       
  Citas.map((element)=><li className=" text-dark fw-bold text-center"  >{element.Paciente}- <span style={{color:"#126e82"}}>{element.Sintomas} - </span> <Button variant="outline-dark">C</Button>  <hr  style={{height:'4px',color:"#142d34",width: "97%" }} /></li>)
    
                       } </ol>}
                 
                        
                        </Col>
                    
                    <Col lg={12} className="pt-1">
                    
                    <h3 className="Titulos">Compromisos <Button id="ShowFormCompromisos" name="Compromisos" className="rounded-pill bg-white text-dark fw-bold border-white" onClick={e=>updateAndChange(e.target.name)}>+</Button></h3>
                    
                    </Col>

                    <Col lg={12}className="tamanoListaCompromisos rounded-3 p-3"> 
                    
                    { ShowFormCompromisos ? <FormAddElementsLeft type="Compromisos"/> :<ol>{Compromisos.map((element)=><li className="h5 text-dark fw-bold">{element.Nombre} - <span style={{color:"#126e82"}}>{element.Hora}</span></li>)}</ol> }
               
                    </Col>

                </Row>

           </Col>
   );

}