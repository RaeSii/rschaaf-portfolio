import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button, Col } from 'react-bootstrap';
import Footer from "../Footer";

function Contact() {
  return (
    <section className="container">

    <h1 className="section-heading">
        Contact

    </h1>
    <article className="container d-flex justify-content-evenly">
    <div className="p-3 bg-dark text-white d-flex justify-content-evenly rounded-end" style={{ width: '36rem' }} >
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
          <Form.Control placeholder="Message here ..." style={{ height: '200px' }}/>
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Get notified of New Projects" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </article>
    <Footer/>
    </section>
  );
}

export default Contact;