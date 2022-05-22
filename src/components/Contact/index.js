import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button, Col } from 'react-bootstrap';
import Footer from "../Footer";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };


  return (
    <section className="container">

      <h1 className="section-heading">
        Contact Me
      </h1>
      <article className="container mb-5 d-flex justify-content-evenly">
        <div className="p-3 bg-dark text-white d-flex justify-content-evenly rounded-end" style={{ width: '36rem' }} >
          <Form id="contact-form" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" placeholder='Your Full Name' name="name" defaultValue={name} onBlur={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" name="email" defaultValue={email} onBlur={handleChange} />
              </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridMessage">
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Your message here ..."/>
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Get notified of New Projects" />
            </Form.Group>
            {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </article>
      <Footer />
    </section>
  );
}

export default Contact;