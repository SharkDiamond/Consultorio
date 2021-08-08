import './App.css';
import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Pizquierdo from './Paneles/Pizquierdo';
import Pmedio from './Paneles/Pmedio';
import Pderecho from './Paneles/Pderecho';


class App extends React.Component {
  

  render(){

    return (
      <Container fluid={true} className="ContenedorPrincipal">
      
        <Row>

          <Pizquierdo/>

          <Pmedio/>

          <Pderecho/>

        </Row>
      
      </Container>
    );


  }
 
}

export default App;
