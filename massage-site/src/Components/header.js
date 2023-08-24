import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Price from "../Pages/Price";
import Schedule from "../Pages/Schedule";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand='md' bg='dark' variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-around">
                            <Nav className="mr-auto" >
                                <Nav.Link href='/'> Обо мне </Nav.Link>
                                <Nav.Link href='/price'> Прайс </Nav.Link>
                                <Nav.Link href='/schedule'> Рассписание </Nav.Link>
                                <Nav.Link href='/contacts'> Контакты </Nav.Link>
                            </Nav>
                            <Button variant="outline-info">Записаться</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/price' element={<Price />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </Router>

            </ >
        )
    }
}