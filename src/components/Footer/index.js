import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";


function Footer() {
    return (
        <footer className="bg-secondary d-flex justify-content-evenly">
            <Container className="px-4" >
                <div className="d-flex justify-content-evenly">
                <BsGithub />
                <BsTwitter />
                <BsLinkedin />
                </div>
                <p class="text-center text-white">
                    RSCHAAF &copy; 2022
                </p>
            </Container>
        </footer>
    );
}

export default Footer;