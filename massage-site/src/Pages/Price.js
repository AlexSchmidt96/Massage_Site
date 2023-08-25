import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";


export default class Price extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>
                                        Спина
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>
                                        Верхние конечности
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>
                                        Нижние конечности
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={3}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey='first'>
                                    <p>price 1</p>
                                    <Button className=" btn-primary">Записаться</Button>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <p>price 2</p>
                                    <Button className=" btn-primary">Записаться</Button>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <p>price 3</p>
                                    <Button className=" btn-primary">Записаться</Button>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}