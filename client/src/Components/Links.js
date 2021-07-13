import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';
import { DiGithubBadge } from 'react-icons/di';
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitch } from 'react-icons/fi';
import logo from '../Images/logo.png'
import Image from 'react-bootstrap/Image';
import NavComponent from './NavComponent';
import Title from './Title.js';


const Links = () => {
    return (
        <div className="App">
            <NavComponent></NavComponent>
            <Container fluid>
                <Title title="Links"></Title>
                <Row>
                    <Col>
                        <Image src={ logo } fluid></Image>
                    </Col>
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <Link target='_blank'>
                                    <DiGithubBadge></DiGithubBadge>
                                    <a href='https://github.com/mateovargas' target='_blank'>Github</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link target='_blank'>
                                    <AiFillLinkedin></AiFillLinkedin>
                                    <a href="https://www.linkedin.com/in/mateo-vargas-03896189/" target='_blank'>LinkedIn</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link target='_blank'>
                                    <FiTwitch></FiTwitch>
                                    <a href="https://twitch.tv/matvar55" target='_blank'>Twitch</a>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link target='_blank'>
                                    <AiFillYoutube></AiFillYoutube>
                                    <a href="https://youtube.com/matvar55" target='_blank'>Youtube</a>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z5m0RLlo-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Links
