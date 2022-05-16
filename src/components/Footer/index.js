import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Footer() {
    return(
        <footer>
            <Container className="px-4" >
                <p class="text-center text-white">
                    Copyright &copy; RSCHAAF 2022
                </p>
            </Container>
        </footer>
    );
}

export default Footer;