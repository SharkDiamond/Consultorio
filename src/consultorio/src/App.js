//IMPORTACIONES DE PAQUETES
import React from 'react';
import { Container,Row } from 'react-bootstrap';
import {toast,ToastContainer,Flip} from "react-toastify";
//IMPORTACIONES PROPIAS
import './App.css';
import Login from "./Login";
import Principal from './Principal';

class App extends React.Component {
  
  constructor(props){

    super(props);

    this.state={pase:sessionStorage.getItem("Paso")}

  }

    updatePase=()=>{
      let objeto={pase:sessionStorage.getItem("Paso")};
      this.setState(objeto);
  }

 

  render(){

    return (
      <Container fluid={true} >
        
        {this.state.pase ? <Principal/> : <Login updateApp={this.updatePase}/>}
        
        <ToastContainer transition={Flip}/>
      </Container>
    );


  }
 
}

export default App;
