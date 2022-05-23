import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";


function Footer() {
    return (
        <footer className="bg-secondary d-flex justify-content-evenly">
            <Container className="px-4" >
                <div className="d-flex justify-content-evenly">
                <a href="https://github.com/RaeSii"><BsGithub /></a>
                <a href="https://www.twitter.com/raesii"><BsTwitter/></a>
                <a href="https://www.linkedin.com/in/rachel-schaaf"><BsLinkedin/></a>
                </div>
                <p class="text-center text-white">
                    RSCHAAF &copy; 2022
                </p>
            </Container>
        </footer>
    );
}

export default Footer;