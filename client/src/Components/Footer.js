import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsCodeSlash } from 'react-icons/bs';
import { BiPen } from 'react-icons/bi';
import { AiOutlineLink, AiFillHome } from 'react-icons/ai';

const Footer = () => {
    
    return (
        <div>
            <footer>
                <Row>
                    <Col>
                        <Link to={'./'}>
                            <Button variant="outline-info">
                                <AiFillHome></AiFillHome>
                                Home
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={'./projects'}>
                            <Button variant="outline-info">
                                <BsCodeSlash></BsCodeSlash>
                                Projects
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={'./references'}>
                            <Button variant="outline-info">
                                <BiPen></BiPen>
                                References
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={'./links'}>
                            <Button variant="outline-info">
                                <AiOutlineLink></AiOutlineLink>
                                Links
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <a href='https://github.com/mateovargas' target='_blank'>Mateo Vargas</a>
                        <p>Copyright &copy; 2021</p>
                    </Col>
                    <Col></Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer
