//IMPORTACIONES DE PAQUETES
import React, { Component } from 'react';
import {Row,Col,Form,FormControl,FormGroup,FormLabel, Button, Alert} from "react-bootstrap";
import {toast,ToastContainer,Flip} from "react-toastify";
import axios from "axios";
//IMPORTACIONES PROPIAS
import './App.css';



class Login extends Component {
    
    
    constructor(props) {

        super(props)

        this.state = {
            Usuario:"",
            Password:""
        }
    
    
    this.handleChange=this.handleChange.bind(this);

    this.handleSubmit=this.handleSubmit.bind(this);
    }

    
    handleChange(event){

        this.setState({


            [event.target.name]:event.target.value

        })

    }


  handleSubmit(event){

        event.preventDefault();

   axios.post("http://localhost:8081/Session/Users",{"Usuario":this.state.Usuario,"Password":this.state.Password}).then((response)=>{
       
    sessionStorage.setItem("Paso",response.data.Enter);

    sessionStorage.setItem("Usuario",this.state.Usuario);

    sessionStorage.setItem("Token",response.data.Keys);

    this.props.updateApp();
   
}).catch((error)=>{
    

   let condition = error.response.data.msj!==undefined ? toast.warning(error.response.data.msj) : toast.warning(error.response.data.Problems[0]);


});
  
    

}
     

    render() {
        return (
         <Row className="align-items-center justify-content-center tamaño-Fila-Login p-3">

            <Col className="border rounded text-center p-5 barra" lg={4}>
                
                <h1 className="mb-4 fw-bold">Doctor Consulting</h1>
               
                <Form onSubmit={this.handleSubmit}>

                    <Row className="justify-content-center">
                        <Col xl={6}>
                            <FormGroup>
                   
                                <FormControl placeholder="User" name="Usuario" value={this.Usuario} onChange={this.handleChange} type="text"/>
                                <br/>
                   
                                <FormControl placeholder="Password" name="Password" value={this.Password} onChange={this.handleChange} type="Password" />
                                <br/>

                                <Button type="submit" variant="primary" >Entrar</Button>
                 
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