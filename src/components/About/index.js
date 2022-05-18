import React from "react";
import prof from "./assets/prof.jpg";
import { Image } from 'react-bootstrap';

function About() {
    return (
        <section className="container">

            <h1 className="section-heading">
                About Me ...
            </h1>
            <article className="container d-flex justify-content-evenly">
                <figure className="prof">
                <Image className="about-me img-fluid" src={prof} alt="profile picture" />
                </figure>
                <p className="text-center bg-dark text-white self">
                    Hello, World! My name is Rachel Schaaf.
                    Fullstack Developer from the Greater Los Angeles area who enjoys finding new, easy, clean and shortest ways to code.
                    Take a peek at my portfolio and feel free to reach out with any questions. Thanks for checking out this page!
                </p>
            </article>

        </section>
    );
}

export default About;