import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import NavComponent from './NavComponent';
import Title from './Title.js';
import ProjectsData from '../Data/ProjectsData';

const Projects = () => {

    let [title, projects, rowOne, rowTwo] = useState();

    title = ProjectsData.title;
    projects = ProjectsData.projects;
    rowOne = [];
    rowTwo = [];

    for(let i = 0; i < projects.length; i++){
        if(i < 3){
            rowOne.push(projects[i]);
        }
        else if( i >= 3 && i < 6){
            rowTwo.push(projects[i]);
        }
    }

    console.log(rowOne);
    console.log(rowTwo);

    return (
        <div className="App">
            <NavComponent></NavComponent>
            <Container fluid>
                <Title title={title}></Title>
                <Row>
                    {rowOne.map((projects) => (
                        <Col key={ projects.id }>
                            <Card style={{ width: '18rem' }} key={projects.id}>
                                <Card.Img variant="top" src={projects.image}/>
                                <Card.Body key={projects.id}>
                                    <Card.Title key={projects.id}>{projects.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{projects.technology}</Card.Subtitle>
                                    <Card.Text>
                                        {projects.description}
                                    </Card.Text>
                                    <Card.Link href={projects.link} target='_blank'>Use It Here</Card.Link>
                                    <Card.Link href={projects.github} target='_blank'>Github</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {rowTwo.map((projects) => (
                        <Col key={projects.id}>
                            <Card style={{ width: '18rem' }} key={projects.id}>
                                <Card.Img variant="top" src={projects.image} />
                                <Card.Body key={projects.id}>
                                    <Card.Title key={projects.id}>{projects.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{projects.technology}</Card.Subtitle>
                                    <Card.Text>
                                        {projects.description}
                                    </Card.Text>
                                    <Card.Link href={projects.link} target='_blank'>Use It Here</Card.Link>
                                    <Card.Link href={projects.github} target='_blank'>Github</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
}

export default Projects
