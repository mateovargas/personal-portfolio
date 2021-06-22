import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitch } from 'react-icons/fi';
import logo from '../Images/logo.png'
import Image from 'react-bootstrap/Image';


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
                    <Col>
                        <Image src={ logo } fluid></Image>
                    </Col>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z5m0RLlo-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <Link>
                                    <DiGithubBadge></DiGithubBadge>
                                    <a href='https://github.com/mateovargas'>Github</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <AiFillLinkedin></AiFillLinkedin>
                                    <a href="https://www.linkedin.com/in/mateo-vargas-03896189/">LinkedIn</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <FiTwitch></FiTwitch>
                                    <a href="https://twitch.tv/matvar55">Twitch</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link>
                                    <AiFillYoutube></AiFillYoutube>
                                    <a href="https://youtube.com/matvar55">Youtube</a>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    )
}

export default Links
