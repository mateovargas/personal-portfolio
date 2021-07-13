import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import NavComponent from './NavComponent';
import Title from './Title.js';
import ReferencesData from '../Data/ReferencesData.js';

const References = () => {

    let [title, referencesList] = useState();

    title = ReferencesData.title;
    referencesList = ReferencesData.info;
    
    return (
        <div className="App">
            <NavComponent></NavComponent>
            <Container fluid>
                <Title title={title}></Title>
                {referencesList.map((references) => (
                    <Row key={references.id}>
                        <Col key={references.id}>
                            <Card key = {references.id}>
                                <Card.Body key = {references.id}>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {' '}{ references.info }{' '}
                                        </p>
                                    </blockquote>
                                    <footer className="blockquote-footer">
                                        { references.name }, { references.profession }, <cite title="Source Title">{ references.organization }</cite>
                                    </footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
                
                <Footer></Footer>
            </Container>
        </div>
    )
}

export default References
