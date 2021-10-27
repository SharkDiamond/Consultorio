import React, { Component } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { Form,Field,Formik,ErrorMessage} from 'formik';

export default function FormAddElementsLeft(props) {
    
    return(
        <Formik  className=""  initialValues={{ dato:"",fecha:"",hora:"",IdentificacionEnfermizo:""}}
            validate={(values)=>{

                const errors={};
               
                if (props.type=="Compromisos") values.IdentificacionEnfermizo="Relleno Prueba";

                if (!values.dato || !values.fecha || !values.hora || !values.IdentificacionEnfermizo) {
            
                    let data={"dato":!values.dato,"fecha":!values.fecha,"hora":!values.hora,"IdentificacionEnfermizo":!values.IdentificacionEnfermizo}
                 
                    let errores= Object.keys(data).filter(element=>data[element]==true);
                   
                    errores.forEach(element=>errors[element]="El campo es requerido!")                
                   
                }
                console.log(errors);
                return errors;
            }}

    onSubmit={async(values)=>{

         
        try {

            if (props.type=="Citas") {
              
                let Peticion=await axios.post("http://localhost:8082/Citas/CreateCita",{
                                                "IdentificacionEnfermizo":values.IdentificacionEnfermizo,
                                                "Sintoma":values.dato,
                                                "Fecha":values.fecha
                                                },{ headers: {
                                                        'token': sessionStorage.getItem("Token")
                                                    }});

                toast.success(Peticion.data.Exito);
            }
            
            else if(props.type=="Compromisos") {
    
                const convirtiendoFecha=new Date(values.fecha);
                //Creando un arreglo segun la coma
                const DiaHoy= convirtiendoFecha.toLocaleString().split(",");   
                //CREANDO UN ARREGLO A PARTIR DEL SIMBOLO /
                let Separate=DiaHoy[0].split("/");
                //SUMANDOLE 1 DIA AL DIA DE LA FECHA
                let sumaryDay=parseInt(Separate[1])+1;
                //CREANDO UNA VARIABLE STRING CON EL NUEVO DIA CONVERTIDO
                let newDate=`${Separate[0]}/${sumaryDay}/${Separate[2]}`
                //HACIENDO LA PETICION
                let Peticion=await axios.post("http://localhost:8082/Compromisos/CreateCompromiso",{
                    "UsuarioPerteneciente":sessionStorage.getItem("Usuario"),
                    "Nombre":values.dato,
                    "Fecha":newDate,
                    "Hora":values.hora
                    },{ headers: {
                            'token': sessionStorage.getItem("Token")
                        }});

                //ENVIANDO EL MENSAJE
                toast.success(Peticion.data);
            }


        } catch (error) {

            toast.warning(error.response.data.Problems[0]);
             
        }

    }}>

    {()=>(
       
        <Form>

        <Field  name="dato" className="form-control mt-3" type="text" placeholder={"Agregar "+props.type} required/> 
        <ErrorMessage className="text-danger" name="dato" component="div" />
       {props.type=="Citas" ? <Field className="mt-3 form-control" placeholder="Identificacion Paciente" name="IdentificacionEnfermizo" type="text" required/> : ""} 
       {props.type=="Citas" ? <ErrorMessage className="text-danger" name="IdentificacionEnfermizo"  component="div" /> : ""}

        

      <Field className="form-control mt-3" placeholder="Fecha" name="fecha"  type="date" required />
      <ErrorMessage className="text-danger" name="fecha"  component="div" />
      <Field className="form-control mt-3" type="time" name="hora" required />
      <ErrorMessage className="text-danger" name="hora" component="div" />
      <Button type="submit" variant="primary" className="mt-3">Create</Button>

        </Form>

    )}


</Formik>

);
  
}
