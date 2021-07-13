import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Title = (props) => {
    return (
        <Row>
            <Col>
                <h1 className="ml9">
                    <span className="text-wrapper">
                        <span className="letters">{props.title}</span>
                    </span>
                </h1>
            </Col>
        </Row>
    )
}

export default Title
