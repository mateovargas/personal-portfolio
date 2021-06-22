import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Xeno from '../Images/game.png';
import Pokedex from '../Images/Pokedex.png';
import SPAMStore from '../Images/SPAM-Store.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

const Projects = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <h1>Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ Pokedex } />
                            <Card.Body>
                                <Card.Title>Pokedex</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">ReactJS</Card.Subtitle>
                                <Card.Text>
                                    A front-end application that allows you to search for a Pokemon using
                                    the PokeAPI.
                                </Card.Text>
                                <Card.Link href="https://react-pokedex-mv.herokuapp.com/">Use It Here</Card.Link>
                                <Card.Link href="https://github.com/mateovargas/pokedex">Github Repository</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ Xeno } />
                            <Card.Body>
                                <Card.Title>Xenoplague</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Unity2D and C#</Card.Subtitle>
                                <Card.Text>
                                    A game that simulates the spread of a disease, created
                                    and presented as Mateo's Masters thesis.
                                </Card.Text>
                                <Card.Link href="https://mateovargas.itch.io/discrete-sir-games-for-understanding-epidemics">Use It Here</Card.Link>
                                <Card.Link href="https://github.com/mateovargas/dissertation">Github Repository</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ SPAMStore } />
                            <Card.Body>
                                <Card.Title>SPAM-Store</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                <Card.Text>
                                    This is a React boilerplate single page responsive portfolio app for store fronts.
                                </Card.Text>
                                <Card.Link href="https://github.com/React-BP/SPAM-store">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={SPAMStore} />
                            <Card.Body>
                                <Card.Title>WorkLifeBalance</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                <Card.Text>
                                    Applicaiton that allows users to login and keep track of their hours spent.
                                </Card.Text>
                                <Card.Link href="https://frozen-sierra-80656.herokuapp.com/">Use It Here</Card.Link>
                                <Card.Link href="https://github.com/mateovargas/workLife">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={SPAMStore} />
                            <Card.Body>
                                <Card.Title>FriendFinder</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">ReactJS, Express</Card.Subtitle>
                                <Card.Text>
                                    Applicaiton that allows users pair themselves with their most likely match.
                                </Card.Text>
                                <Card.Link href="https://floating-dawn-36930.herokuapp.com/">Use It Here</Card.Link>
                                <Card.Link href="https://github.com/mateovargas/friends-app">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={SPAMStore} />
                            <Card.Body>
                                <Card.Title>Bob's Burger</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Express, HandlebarsJS</Card.Subtitle>
                                <Card.Text>
                                    Application that lets you feed Bob's friend!
                                </Card.Text>
                                <Card.Link href="https://aqueous-hamlet-72599.herokuapp.com/">Use It Here</Card.Link>
                                <Card.Link href="https://github.com/mateovargas/burger">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
}

export default Projects
