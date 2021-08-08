import React, { Component } from 'react'

import { Col } from 'react-bootstrap';

class Pizquierdo extends Component {
    
    constructor(props) {


        super(props);

        this.state = {
            
        }

        
    }

    render() {
        return (
            <Col lg={4} className="tamanoColorPaneles">

                <h1>Panel izquierdo</h1>

            </Col>
        );
    }
}

export default Pizquierdo
