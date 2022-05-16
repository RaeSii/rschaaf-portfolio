import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Work() {
    const projects = [
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/Password-Generator/',
            github: '',
            image: '/images/pwd.png'
        },
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/work-day-scheduler/',
            github: '',
            image: '/images/pwd.png'
        },
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/weather-dashboard/',
            github: '',
            image: '/images/pwd.png'
        },
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/Password-Generator/',
            github: '',
            image: '/images/pwd.png'
        },
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/scribe/',
            github: '',
            image: '/images/pwd.png'
        },
        {
            name: 'Password Generator',
            description: '',
            live: 'https://raesii.github.io/scribe/',
            github: '',
            image: '/images/pwd.png'
        }
    ]

    return (
        <section className="container">
                        <h1 className="section-heading" >
                Portfolio
            </h1>
        <CardGroup>
            {projects.map((element, key) =>

                <Card key={key}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + element.image} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href={element.live}>live</a>
                        <a href={element.github}>github</a>
                    </Card.Footer>
                </Card>

            )}
        </CardGroup>
        </section>
    )
}

export default Work;