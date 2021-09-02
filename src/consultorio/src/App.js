//IMPORTACIONES DE PAQUETES
import React from 'react';
import { Container,Row } from 'react-bootstrap';
//IMPORTACIONES PROPIAS
import './App.css';
import Login from "./Login";
import Principal from './Principal';

class App extends React.Component {
  

  render(){

    return (
      <Container fluid={true} className="">
    
      <Login/>
      
      </Container>
    );


  }
 
}

export default App;
