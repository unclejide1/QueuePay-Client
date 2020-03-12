import React from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentForm = () => {
    return (
        <Card style={{padding: '5% 30%'}}>
            <Form>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control type="text" placeholder="Owner" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="CVC" />
                </Form.Group>
                </Form.Row>
            
                <Form.Group controlId="formGridAddress1">
                <Form.Label>Card Number</Form.Label>
                <Form.Control placeholder="Card Number" />
                </Form.Group>
            
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control as="select">
                        <option>2016...</option>
                        <option>2017</option>
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label style = {{padding: '9px 0'}}></Form.Label>
                        <Form.Control as="select">
                        <option>2016...</option>
                        <option>2017</option>
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Pin</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
            
                <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </Card>
    );
};

export default PaymentForm;