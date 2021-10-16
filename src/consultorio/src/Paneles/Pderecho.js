import React, { Component,useState } from 'react';
import {Col} from "react-bootstrap";
import Pacientes from './ComponentesPanelDerecho/Pacientes';
import Graficas from './ComponentesPanelDerecho/Graficas';
import Barra from '../Barra';

export default function Pderecho(props) {
    
    //ESTADO
    const [muestra,setMuestra]=useState("Graficas");
    //PARA ACTUALIZAR EL ESTADO DESDE OTRO COMPONENTE
    const  ShowPanelLeft=(item)=>{setMuestra(item);}

    if (!props.noMostrar) {
           
        return (
            <Col  lg={7} xs={12} md={7} xl={7} className="tamanoColorPaneles  ">
              {muestra=="Graficas"  && <Graficas/>}  
              {muestra=="Pacientes" && <Pacientes/>}  
              <Barra noMostrar={false} update={ShowPanelLeft}/>
            </Col>    
        );
 
        }

    }
