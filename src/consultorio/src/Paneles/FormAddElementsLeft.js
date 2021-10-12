import React, { Component } from 'react';
import axios from 'axios';
import { Form,Row,Col,FormGroup,FormControl,Button } from "react-bootstrap";

class FormAddElementsLeft extends Component {
    
    
    constructor(props) {
        super(props);

        this.state={

            dato:"",
            fecha:""

        };
        this.bind=this.handleChange.bind(this);
    }


    handleChange=(e)=>{

        this.setState({[e.target.name]:e.target.value});

    }


   async handleSubmit(e){

       e.preventDefault();

       const Peticion=await axios.post("localhost:8081/Citas/CreateCita",[]);


    }

    render() {
        return (
            <div>
 <Form onSubmit={this.handleSubmit}>

<Row className="justify-content-center">
    <Col xl={11}>
        <FormGroup>

            <FormControl placeholder={"Agregar "+this.props.type} name="dato" value={this.state.dato} className="mb-3" onChange={this.handleChange} type="text"/>
            
           {this.props.type=="Citas" ? <FormControl className="mb-3 "  placeholder={"Identificacion Paciente"} name="IdentificacionEnfermizo" onChange={this.handleChange} type="text" /> : ""} 
          
            <FormControl placeholder="Fecha" name="fecha" value={this.state.fecha} onChange={this.handleChange} type="Date" />

            <Button type="submit" variant="primary" className="mt-3">Create</Button>

        </FormGroup>
    </Col>
</Row>

</Form>

            </div>
        )
    }
}

export default FormAddElementsLeft;