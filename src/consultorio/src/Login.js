//IMPORTACIONES DE PAQUETES
import React, { useState } from 'react';
import {Row,Col,Form,FormControl,FormGroup,FormLabel, Button, Alert} from "react-bootstrap";
import {toast} from "react-toastify";
import axios from "axios";
//IMPORTACIONES PROPIAS
import './App.css';


export default function Login(props) {
    
    //VARIABLES DE ESTADO
    const [Usuario,setUsuario]=useState("");
    const [Password,setPassword]=useState("");

  //ENVIAR SOLICITUD
  const  handleSubmit=(event)=>{

        event.preventDefault();

        axios.post("http://localhost:8082/Session/Users",{Usuario,Password}).then((response)=>{
   
        sessionStorage.setItem("Paso",response.data.Enter);

        sessionStorage.setItem("Usuario",Usuario);

        sessionStorage.setItem("Token",response.data.Keys);

        props.updateApp();

}).catch((error)=>{


    let condition = error.response.data.msj!==undefined ? toast.warning(error.response.data.msj) : toast.warning(error.response.data.Problems[0]);


});



}

    return(
        <Row className="align-items-center justify-content-center tamaño-Fila-Login p-3">

        <Col className="border rounded text-center p-5 barra" lg={4}>
            
            <h1 className="mb-4 fw-bold">Doctor Consulting</h1>
           
            <Form onSubmit={handleSubmit}>

                <Row className="justify-content-center">
                    <Col xl={6}>
                        <FormGroup>
               
                            <FormControl placeholder="User" name="Usuario" value={Usuario} onChange={e=>setUsuario(e.target.value)} type="text"/>
                            <br/>
               
                            <FormControl placeholder="Password" name="Password" value={Password} onChange={e=>setPassword(e.target.value)} type="Password" />
                            <br/>

                            <Button type="submit" variant="primary" >Entrar</Button>
             
                        </FormGroup>
                    </Col>
                </Row>

            </Form>
           
        
        </Col>


     </Row>

    );

}