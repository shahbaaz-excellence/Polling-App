import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit=()=>{
        let userCredentials = {
            username: userName.trim(),
            password: password.trim(),
        };
        setuserName("");
        setpassword("");
    }
    
    return (
        <>
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Poll Management System</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Link to="/signup">
                        <Button className="float-right" variant="success">
                            SignUp
                    </Button>
                    </Link>
                </Navbar>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={event=>setuserName(event.target.value)}
                                placeholder="Enter Username" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={event=>setpassword(event.target.value)}
                                 />
                        </Form.Group>

                        <Link to="/admindashboard">
                            <Button variant="primary" type="submit"
                            disabled={userName && password ? false : true}
                            onClick={handleSubmit}>
                                Login
                        </Button>
                        </Link>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Login;
