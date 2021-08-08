import React, { Component } from 'react'
import { Col,Button } from 'react-bootstrap';



class Pmedio extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <Col lg={3} className="tamanoColorPaneles">
               <h1>Panel Centro</h1>
               <Button>test</Button>


           </Col> 
        );
    }
}

export default Pmedio