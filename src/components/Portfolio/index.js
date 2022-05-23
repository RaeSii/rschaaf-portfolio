import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Footer from "../Footer";

function Work() {
    const projects = [
        {
            name: 'Password Generator',
            description: 'Password Generating App',
            live: 'https://raesii.github.io/Password-Generator/',
            github: 'https://github.com/RaeSii/portfolio-generator.git',
            image: '/images/pwd.png'
        },
        {
            name: 'Work Day Scheduler',
            description: 'Stay on schedule with this Daily Work Scheduler',
            live: 'https://raesii.github.io/work-day-scheduler/',
            github: 'https://github.com/RaeSii/work-day-scheduler.git',
            image: '/images/sched.png'
        },
        {
            name: 'Weather Dashboard',
            description: 'Get the latest weather conditions anywhere in the world with this Cool Weather app',
            live: 'https://raesii.github.io/weather-dashboard/',
            github: 'https://github.com/RaeSii/weather-dashboard.git',
            image: '/images/weather.png'
        },
        {
            name: 'Team Roster',
            description: 'Team Builder maker app',
            live: 'https://raesii.github.io/team-info-maker/',
            github: 'https://github.com/RaeSii/team-info-maker.git',
            image: '/images/Roster.png'
        },
        {
            name: 'Note Taker',
            description: 'Take notes with our easy to use Note Taking app',
            live: 'https://raesii.github.io/scribe/',
            github: 'https://github.com/RaeSii/scribe.git',
            image: '/images/scribe.png'
        }
    ]

    return (
        <section className="container">
            <h1 className="section-heading" >
                Portfolio
            </h1>
            <CardGroup className="mb-5 d-flex justify-content-evenly">
                {projects.map((element, key) =>

                    <Card style={{ width: '18rem' }} key={key}>
                        <Card.Title className="text-center">{element.name}</Card.Title>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + element.image} />
                        <Card.Body>
                            <Card.Text>
                                {element.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer class="mx-auto px-5">
                            <Button variant="secondary" href={element.live}>Live</Button>
                            <Button variant="secondary" href={element.github}><BsGithub/></Button>
                        </Card.Footer>
                    </Card>
                )}
            </CardGroup>
            <Footer />
        </section>
    )
}

export default Work;