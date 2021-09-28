import React, { Component } from 'react';

class FormAddElementsLeft extends Component {
    
    
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
 <Form onSubmit={this.handleSubmit}>

<Row className="justify-content-center">
    <Col xl={6}>
        <FormGroup>

            <FormControl placeholder={"Agregar "+this.props.type} name={this.props.type} value="test" onChange="test" type="text"/>
            <br/>

            <FormControl placeholder="Fecha" name="Fecha" value="test" onChange={this.handleChange} type="Date" />
            <br/>

            <Button type="submit" variant="primary" >Create</Button>

        </FormGroup>
    </Col>
</Row>

</Form>

            </div>
        )
    }
}

export default FormAddElementsLeft;