//IMPORTACIONES DE PAQUETES
import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap';
import {toast,ToastContainer,Flip} from "react-toastify";


//IMPORTACIONES PROPIAS
import Barra from './Barra';
import Pizquierdo from './Paneles/Pizquierdo';
import Pderecho from './Paneles/Pderecho';

import "react-toastify/dist/ReactToastify.css";
class Principal extends Component {
    constructor(props) {
        super(props)

        this.state = {
      
        }

      
       
    }


    componentDidMount(){
     
      
        toast.success("Bienvenido "+sessionStorage.getItem("Usuario")+"!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });

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