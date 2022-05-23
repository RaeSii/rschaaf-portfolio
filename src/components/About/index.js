import React from "react";
import prof from "./assets/prof.jpg";
import { Image } from 'react-bootstrap';
import Footer from "../Footer";

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
                <p className="text-center text-white self">
                    Hello, World! My name is Rachel Schaaf.
                    Fullstack Developer from the Greater Los Angeles area who enjoys finding new and easy ways to code.
                    Take a peek at my portfolio and feel free to reach out with any questions. This is kept short and simple as it's strictly for the challenge or home work purposes. 
                    Thanks for checking out this react-app page, grader! And Happy Coding! 😁	
                </p>
            </article>
            <Footer/>
        </section>
    );
}

export default About;