import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import MyPhoto from '../Images/me.jpg';
import Footer from './Footer';
import NavComponent from './NavComponent';
import { BiLeftTopArrowCircle } from 'react-icons/bi';
import HomeData from '../Data/HomeData.js';
import Title from './Title.js';

const Home = () => {

    let [title, textInfo] = useState();

    title = HomeData.title;
    textInfo = HomeData.info;

    return (
        <div className="App">
            <NavComponent></NavComponent>
            <Container fluid>
                <Title title={title}></Title>
                <Row>
                    <Col>
                        <Image src={ MyPhoto } alt="Portrait" roundedCircle fluid />
                    </Col>
                    <Col>
                        <p>
                            {textInfo}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Home;
