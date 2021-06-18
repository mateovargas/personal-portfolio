import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import MyPhoto from '../Images/me.jpg';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col>
                        <h1>About</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={ MyPhoto } alt="Logo" roundedCircle fluid />
                    </Col>
                    <Col>
                        <p>
                            Mateo Vargas is a software developer from San Diego, CA.
                            He attended the University of California, San Diego for his
                            Bachelors of Science in Cognitive Science with an emphasis in
                            Neuroscience and a Minor in Computer Science. He then pursued a 
                            Masters of Science in Computer Science at the University of Edinburgh,
                            in Scotland. After attending graduate school, he completed a Trilogy bootcamp
                            in the MERN stack at the University of California, San Diego Extension while working
                            as an automation process software developer at MUFG Union Bank. In his spare time,
                            he likes to play video games, and can be found recording let's plays for Youtube and streaming
                            to Twitch. He lives with his partner and their one dog.
                        </p>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    )
}

export default Home;
