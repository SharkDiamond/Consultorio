//IMPORTACIONES DE PAQUETES
import React,{useState} from 'react';
import { Container,Row } from 'react-bootstrap';
import {toast,ToastContainer,Flip} from "react-toastify";
//IMPORTACIONES PROPIAS
import './App.css';
import Login from "./Login";
import Principal from './Principal';


function App(props) {
  
const [pase,setPase]=useState(false);

const updatePase=()=>{
  let objeto={pase:sessionStorage.getItem("Paso")};
  setPase(objeto);
}


return(

  <Container fluid={true} >
        
        {pase ? <Principal/> : <Login updateApp={updatePase}/>}
       
        <ToastContainer transition={Flip}/>
  </Container>



);



}


export default App;
