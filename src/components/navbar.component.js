import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


export default class Navbarframe extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/tickets">Ticket Log</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/tickets">Home</Nav.Link>
                    <Nav.Link href="/users/add">Create Users</Nav.Link>
                    <Nav.Link href="/tickets/add">Create Tickets</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Pending Feature" className="mr-sm-2" />
                        <Button variant="secondary">Search</Button>
                    </Form>                    
                </Navbar.Collapse>
                </Navbar>
        )
    }
}