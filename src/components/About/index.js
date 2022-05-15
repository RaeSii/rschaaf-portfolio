import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import prof from "../../assets/images/prof.jpg";
import {Image} from 'react-bootstrap';

function About() {
    return (
        <section>

            <h1>
                About Me ...
            </h1>
            <Image src={prof} className="my-2" fluid roundedCircle thumbnail alt="profile picture" />
            <p className="text-center bg-secondary text-white my-5 py-4">
                Hello, World! My name is Rachel Schaaf. 
                Fullstack Developer from the Greater Los Angeles area who enjoys finding new, easy, clean and shortest ways to code. 
                Take a peek at my portfolio and feel free to reach out with any questions. Thanks for checking out this page!
            </p>

        </section>
    );
}

export default About;