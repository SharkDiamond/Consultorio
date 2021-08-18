import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import Pacientes from './ComponentesPanelDerecho/Pacientes';
import Graficas from './ComponentesPanelDerecho/Graficas';

import Barra from '../Barra';

class Pderecho extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            Muestra:"Graficas"
        }


        this.ShowPanelLeft=this.ShowPanelLeft.bind(this);

    }

   
    
    ShowPanelLeft(item){

        this.setState({

            Muestra:item

        });

    }


    componentDidUpdate(prevProps,prevState){

   

}

    render() {

        if (!this.props.noMostrar) {
           
        return (
            <Col  lg={7} xs={12} md={7} xl={7} className="tamanoColorPaneles">
            
              {this.state.Muestra=="Graficas"  && <Graficas/>}  


              {this.state.Muestra=="Pacientes" && <Pacientes/>}  
            <Barra noMostrar={false} update={this.ShowPanelLeft}/>
            
            </Col>    


        );
        }



    }
}

export default Pderecho