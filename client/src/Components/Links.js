import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';

const Links = () => {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Links</h1>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <Link>
                                    <a href='https://github.com/mateovargas'>Github</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <a href="https://www.linkedin.com/in/mateo-vargas-03896189/">LinkedIn</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <a href="https://twitch.tv/matvar55">Twitch</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <a href="https://youtube.com/matvar55">Youtube</a>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col></Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    )
}

export default Links
