import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, Button, Row } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Обо мне</h2>
                    <Row md={3} className="m-4 justify-content-around">
                        <Card bg='warning' style={{ width: '30%' }} border="danger">
                            <Card.Img variant="top" src="https://10.img.avito.st/image/1/1.yr6a8ra5ZlesW6RSgrG7z1JRYF0u0W6VK1FkUyZbbFU.P1u01NxCTBFacyJg-4PBDLskaOXxD4zdPzOz5EL2uAQ" />
                            <Card.Body>
                                <Card.Title>Мастер</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="primary">Записаться</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='success'>
                            <Card.Body>
                                <Card.Title>Мастер</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="primary">Записаться</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://10.img.avito.st/image/1/1.yr6a8ra5ZlesW6RSgrG7z1JRYF0u0W6VK1FkUyZbbFU.P1u01NxCTBFacyJg-4PBDLskaOXxD4zdPzOz5EL2uAQ" />
                        </Card>
                        <Card bg='info'>
                            <Card.Img variant="top" src="https://10.img.avito.st/image/1/1.yr6a8ra5ZlesW6RSgrG7z1JRYF0u0W6VK1FkUyZbbFU.P1u01NxCTBFacyJg-4PBDLskaOXxD4zdPzOz5EL2uAQ" />
                            <Card.Body>
                                <Card.Title>Мастер</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="primary">Записаться</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        )
    }
}