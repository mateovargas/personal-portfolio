import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import NavComponent from './NavComponent';

const References = () => {
    return (
        <div className="App">
            <NavComponent></NavComponent>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="ml9">
                            <span className="text-wrapper">
                                <span className="letters">References</span>
                            </span>
                        </h1>
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
                                        Steven Gilmore, Professor, <cite title="Source Title">University of Edinburgh</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        I have the pleasure of working with Mateo Vargas at Union Bank as his manager.  As a well-rounded RPA software engineer, Mateo can independently analyze requirements, research, develop, and deliver any complex robotic applications.  His keen analysis combined with strong troubleshooting skills make him the go to person to quickly resolve any technical issues.  What impresses me most about Mateo is his diligent and reliable work ethic, willingness to lead and help when it matters most, and always open to challenge and sharpen his technical skills.  His professionalism and pleasant demeanor make him a great and impactful addition to any team.
                                        {' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Elaine Ky, Engineering Manager of Digital Process Automation, <cite title="Source Title">MUFG Union Bank</cite>
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
