import React from 'react'
import { Navbar,Container,Nav,Row,Col ,FormControl,Button,Form,NavDropdown } from 'react-bootstrap';

import Graficas from "./Iconos/Graficas.png";
import Paciente from "./Iconos/Paciente.png";
import Reporte from "./Iconos/Reporte.png";
import './App.css';


function Barra(props) {
    
    return(
<div className="mb-3">
{ !props.noMostrar ? <Navbar className="barra pt-3 fixed-top border-bottom border-dark border-2 "  expand="lg" >
                       
<Navbar.Toggle aria-controls="responsive-navbar-nav " />

    <Navbar.Collapse id="responsive-navbar-nav " className="">
        <Nav className="me-auto" >
        
           <Navbar.Brand href="#link"  onClick={(e) => props.update("Graficas")}><img src={Graficas} width="60px" height="60px"  className="img-fluid " /> <span className="h3 fw-bold" style={{color:'#126e82'}} >Graficas</span></Navbar.Brand> 
            <Navbar.Brand href="#link"  onClick={(e) => props.update("Pacientes")}><img src={Paciente} width="60px" height="60px" className="img-fluid "/><span className="h3 fw-bold" style={{color:'#126e82'}}> Pacientes</span></Navbar.Brand>
            <Navbar.Brand href="#link" onClick={(e) => props.update("Reportes")} ><img src={Reporte} width="60px" height="60px" className="img-fluid "/><span className="h3 fw-bold" style={{color:'#126e82'}} > Reportes</span></Navbar.Brand>
            
        </Nav>

        <Form className="d-flex me-2">
<FormControl
type="search"
placeholder="Search"
className="me-2"
aria-label="Search"
/>
<Button variant="outline-dark">Search</Button>
</Form>

<NavDropdown  title={sessionStorage.getItem("Usuario")} id="collasible-nav-dropdown" className="colorNombreUsuario me-5 fw-bold" >

<NavDropdown.Item href="#action/3.1">Cambiar Datos</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Cerrar Sesion</NavDropdown.Item>

</NavDropdown>
    
    
</Navbar.Collapse ></Navbar> :  <div></div> }

</div>

    );


}



export default Barra;
