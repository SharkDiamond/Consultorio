//IMPORTACIONES DE PAQUETES
import React from 'react';
import {Row,Col} from "react-bootstrap";
import { Line,Bar } from 'react-chartjs-2';
//IMPORTACIONES PROPIAS

export default function Graficas(props) {
  
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#126e82',
        borderColor: 'rgba(22, 99, 132, 0.6)',
      },
    ],
  };
  
  const options = {
   
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Row className="pe-3 ps-3 pt-3  ">

        <Col lg={12}  className="bg-white mb-2 border rounded">
            
            <Line  height={100}   data={data} options={options}/>
             
        </Col>

        <Col lg={12} className="bg-white border rounded">
                
            <Bar  height={100} data={data} options={options}/>
   
        </Col>
    
    </Row>
);
}