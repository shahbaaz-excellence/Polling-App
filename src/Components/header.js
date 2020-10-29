import React from 'react';
import "../Styles/header.css"
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = (props) => {

    const handleLogout = () => {
        localStorage.clear();
        props.history.push("/login");
    };

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Poll Management System</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Link to={props.link1}>
                    <Button className="float-right" variant="success">
                        {props.buttonText1}
                    </Button>
                </Link>
                <Link to={props.link}>
                    <Button className="float-right" variant="success" onClick={handleLogout}>
                        {props.buttonText}
                    </Button>
                </Link>
            </Navbar>
        </div>
    )
}

export default Header;
