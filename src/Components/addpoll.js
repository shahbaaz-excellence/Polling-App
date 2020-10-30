import React, { useState } from 'react';
import {
    Form,
    Button,
    Navbar,
    Nav,
    Container,
    Jumbotron
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import Header from "./header";

function AddPoll() {

    // const dispatch = useDispatch();
    const history = useHistory();

    const [title, settitle] = useState("");
    const [options, setoptions] = useState([]);

    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
    };

    return (
        <div>
            <Header
                buttonText={"Logout"}
                handleLogout = {handleLogout}
            />
            <Jumbotron>
                <Container>
                    <div>
                        
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default AddPoll;
