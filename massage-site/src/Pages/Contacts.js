import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Записывайтесь на прием!</h1>
                <Form>
                    <Form.Group controlId='fromBasicEmail'>
                        <Form.Label> Номер телефона</Form.Label>
                        <Form.Control type='number' placeholder='Номер телефона'></Form.Control>
                        <Form.Text>Я никому не отправлю ваш номер телефона кому-нибудь еще</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='fromBasicPassword'>
                        <Form.Label> example text area</Form.Label>
                        <Form.Control as='textarea' rows='3'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='fromBasicCheckbox'>
                        <Form.Check type='checkbox' label='check me out' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Отправить</Button>
                </Form>
            </Container>
        )
    }
}