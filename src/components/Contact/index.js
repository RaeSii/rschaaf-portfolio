import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div style={{ width: '36rem'}} className="p-3 bg-dark text-white justify-content-center rounded-end">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="password" placeholder="Enter Name Here" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Message here ..." />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Get notified of New Projects" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;