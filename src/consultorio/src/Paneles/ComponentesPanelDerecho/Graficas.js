import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import { Line,Bar } from 'react-chartjs-2';


class Graficas extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tamañoGraficas:window.screen.width+50
        }


    }


    render() {

      const Tamaños={

        320:340,
        375:280,
        425:240,
        768:122,
        1024:92,
        1440:200,
        1536:100,
        2560:60



      };

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
            <Row className="pe-3 ps-3 pt-3">

                <Col lg={12}  >
                    
                    <Line  height={Tamaños[window.screen.width]}   data={data} options={options}/>
                    
                    
                </Col>


                <Col lg={12}>
                    
                        
                    <Bar  height={Tamaños[window.screen.width]} data={data} options={options}/>

                    
                    
                </Col>

                    
                    
                </Row>  

        );
    }
}

export default Graficas