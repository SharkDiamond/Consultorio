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


    handleSubmit(){

       

    }




    render() {
        return (
            <div>
 <Form onSubmit={this.handleSubmit}>

<Row className="justify-content-center">
    <Col xl={6}>
        <FormGroup>

            <FormControl placeholder={"Agregar "+this.props.type} name="dato" value={this.state.dato} onChange={this.handleChange} type="text"/>
            <br/>

            <FormControl placeholder="Fecha" name="fecha" value={this.state.fecha} onChange={this.handleChange} type="Date" />
            <br/>

            <Button type="submit" variant="primary" >Create</Button>

        </FormGroup>
    </Col>
</Row>

</Form>

            </div>
        )
    }
}

export default FormAddElementsLeft;