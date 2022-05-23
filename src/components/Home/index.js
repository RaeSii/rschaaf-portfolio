import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/images/crsl1.png'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Portfolio</h2>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/images/crt.jpg'}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Certifications</h2>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Home;