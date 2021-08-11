import './App.css';
import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Barra from './Barra';
import Pizquierdo from './Paneles/Pizquierdo';
import Pderecho from './Paneles/Pderecho';


class App extends React.Component {
  

  render(){

    return (
      <Container fluid={true} >
        <Row><Barra/></Row>
        

        <Row className="justify-content-center mt-4 p-2">

          <Pizquierdo/>

          <Pderecho/>

        </Row>
      
      </Container>
    );


  }
 
}

export default App;
