import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <div>
            <Row><br></br></Row>
            <Row>
                <Col>
                    <Link to={'./'}>
                        <Button variant="outline-info">
                            Home
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'./projects'}>
                        <Button variant="outline-info">
                            Projects
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'./references'}>
                        <Button variant="outline-info">
                            References
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to={'./links'}>
                        <Button variant="outline-info">
                            Links
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row><br></br></Row>
            <Row>
                <Col></Col>
                <Col>
                    <p>Mateo Vargas</p>
                    <p>Copyright &copy; 2021</p>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Footer
