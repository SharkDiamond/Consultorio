//IMPORTACIONES DE PAQUETES
import React, { Component,useEffect,useState} from 'react';
import { Container,Row } from 'react-bootstrap';
import {toast,ToastContainer,Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//IMPORTACIONES PROPIAS
import Barra from './Barra';
import Pizquierdo from './Paneles/Pizquierdo';
import Pderecho from './Paneles/Pderecho';



export default function Principal() {
    

    useEffect(()=>{

        toast.success("Bienvenido "+sessionStorage.getItem("Usuario")+"!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });

    },[]);

    return(
        <Container fluid={true} className="">
            <Row><Barra/></Row>
            
            <Row className="justify-content-center mt-4 p-2">
      
                <Pizquierdo/>

                <Pderecho/>

            </Row>

        </Container>  
    );

}
