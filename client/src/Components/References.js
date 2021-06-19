import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

const References = () => {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col>
                        <h1>References</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Mateo Vargas has recently completed an MSc at the University of
                                        Edinburgh where I supervised his MSc dissertation entitled "Discrete
                                        SIR Game for Understanding Epidemics". This involved creating a game
                                        using the Unity platform to simulate the spread of an infectious disease
                                        through a population. Mateo took ownership of this problem and made it his
                                        own, teaching himself the skills necessary to create an effective simulation
                                        on the Unity platform. I was impressed by his level of engagement with the project,
                                        and his project management and technical skills and have no hesitation in recommending him to
                                        you as a very good hire.{' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Steven Gilmore, Professor <cite title="Source Title">University of Edinburgh</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    )
}

export default References
