import React, { Component } from 'react';
import axios from 'axios';
import { Form,Row,Col,FormGroup,FormControl,Button } from "react-bootstrap";
import { toast } from 'react-toastify';
class FormAddElementsLeft extends Component {
    
    
    constructor(props) {
        
        super(props);

        this.state={

            dato:"",
            fecha:"",
            hora:"",
            IdentificacionEnfermizo:""

        };


        this.bind=this.handleChange.bind(this);

        this.bind=this.handleSubmit.bind(this);

    }


    handleChange =(e)=>{
    this.setState({


        [e.target.name]:e.target.value

    })

        console.log(this.state.dato);

    }


    handleSubmit = async (e)=>{

       e.preventDefault();

        try {

            if (this.props.type=="Citas") {
                 
                let Peticion=await axios.post("http://localhost:8081/Citas/CreateCita",{
        "IdentificacionEnfermizo":this.state.IdentificacionEnfermizo,
        "Sintoma":this.state.dato,
        "Fecha":this.state.fecha
       },{ headers: {
        'token': sessionStorage.getItem("Token")
                }});

             
      toast.success(Peticion.data.Exito);
            }
            
            else if(this.props.type=="Compromisos") {
                

                let Peticion=await axios.post("http://localhost:8081/Compromisos/CreateCompromiso",{
                    "UsuarioPerteneciente":sessionStorage.getItem("Usuario"),
                    "Nombre":this.state.dato,
                    "Fecha":this.state.fecha
                    },{ headers: {
                            'token': sessionStorage.getItem("Token")
                        }});

           
      toast.success(Peticion.data);




            }


        } catch (error) {

            toast.warning(error.response.data.Problems[0]);
             
        }

    }

    render() {
        return (
            <div>
 <Form onSubmit={this.handleSubmit}>

<Row className="justify-content-center">
    <Col xl={11}>
        <FormGroup>

            <FormControl placeholder={"Agregar "+this.props.type} name="dato" value={this.state.dato} className="mb-3" onChange={this.handleChange} type="text"/>
            
           {this.props.type=="Citas" ? <FormControl className="mb-3 "  placeholder={"Identificacion Paciente"} name="IdentificacionEnfermizo"  value={this.state.IdentificacionEnfermizo}  onChange={this.handleChange} type="text" /> : ""} 
          
            <FormControl placeholder="Fecha" name="fecha" value={this.state.fecha} onChange={this.handleChange} type="date" />
            <input className="form-control mt-3" type="time" name="hora" value={this.state.hora} onChange={this.handleChange}/>
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