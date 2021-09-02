import React, { Component } from 'react';
import {Row,Col,Form,FormControl,FormGroup,FormLabel, Button} from "react-bootstrap";
import './App.css';

class Login extends Component {
    
    
    constructor(props) {

        super(props)

        this.state = {
            Usuario:"",
            Password:""
        }
    }

    


    render() {
        return (
         <Row className="align-items-center justify-content-center tamaño-Fila-Login p-3">

            <Col className="border rounded text-center p-5 barra" lg={4}>
                
                <h1 className="mb-4 fw-bold">Doctor Consulting</h1>
               
                <Form>

                    <Row className="justify-content-center">
                        <Col lg={8} >
                            <FormGroup>
                   
                                <FormControl placeholder="User" type="text"/>
                                <br/>
                   
                                <FormControl placeholder="Password" type="Password" />
                                <br/>
                                <Button type="submit" variant="primary">Entrar</Button>
                 
                            </FormGroup>
                        </Col>
                    </Row>

                </Form>

            
            </Col>


         </Row>
        )
    }
}

export default Login;