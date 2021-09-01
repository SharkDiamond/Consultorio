import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import {Bar} from "react-chartjs-2";


class Pacientes extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }



    render() {

        const data = {
            labels: ['Reportes', 'Citas', 'Emergencias', 'Pendientes'],
            datasets: [
              {
                label: 'Informacion General',
                data: [45, 35, 30, 57],
                backgroundColor: '#126e82',
                
                borderWidth: 2,
                Color:'#52c4d3'
                
              },
              
            ],
          };
          
          const options = {
            scale: {
                ticks: {
                  min: 0,
                  max: 16,
                  stepSize: 5,
                  showLabelBackdrop: false,
                  backdropColor: "rgba(150, 197, 11, 1)",
                  color:"blue"
                  
                },
                ticks: { beginAtZero: true }
                
                ,
                angleLines: {
                  color: "rgba(255, 255, 255, .3)",
                  lineWidth: 7
                },
                gridLines: {
                  color: "red",
                  circular: true
                }
              }
          };

        return (
            <Row className="pt-2">
            
                <Col lg={12} xs={12} className="">
                   
                   <Row className="p-4 justify-content-center">
                    <Col lg={4} className="text-center  me-5 animacionFilaSuperior-Pacientes">
                    <img src="https://www.uchile.cl/image/f145520-2-h.jpeg?5259"  width="190px" height="170px"  className=" rounded-circle mt-2" />
                    <h6 className=" fw-bold mt-2" style={{color:"#126e82"}}>Jose Orlando</h6>
                    <h6 className="fw-bold" style={{color:"#126e82"}}>Gonzales Cegarra</h6>
                    <h6 className="fw-bold" style={{color:"#126e82"}}>22 Años</h6>
                    <hr className=" fw-bold"/>
                   
                    
                    </Col>
                    
                   <Col lg={6} className="animacionFilaSuperior-Pacientes pt-2">
                    
                    <h4 className="fw-bold text-center" style={{color:'#126e82'}}>Informacion Medica</h4>
                    <h6 className="text-right ms-3 mt-4 fw-bold" style={{color:'#126e82'}}>Condiciones: <span className="text-dark"> Sin Registros</span> </h6>
                    <h6 className="text-right ms-3 mt-3 fw-bold" style={{color:'#126e82'}}>Ultima Cita:<span className="text-dark"> Sin Registros</span> </h6>
                    <h6 className="text-right ms-3 mt-3 fw-bold" style={{color:'#126e82'}}>Seguro:<span className="text-dark"> Sin Registros</span> </h6>
                    <h6 className="text-right ms-3 mt-3  fw-bold" style={{color:'#126e82'}}>CAMPO:<span className="text-dark"> Sin Registros</span> </h6>
                   
                    </Col>
                    </Row>

                    <Row className="justify-content-center">
                <Col lg={10} xs={12} className="animacionFilaInferior-Pacientes">
                <Bar height={97}  data={data} options={options} />


                </Col>
                
                </Row>


                </Col>
                
            
            </Row>

        );
    }
}

export default Pacientes