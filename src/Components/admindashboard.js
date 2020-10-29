import React from 'react';
import Header from './header';
import {
    Card,
    Spinner,
    Navbar,
    Button,
    Nav,
    Jumbotron,
    Container
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const AdminDashboard = () => {
    return (
        <div>
            <Header
                buttonText={"Logout"}
                link={"/admindashboard"}
                buttonText1={"Add Poll"}
                link1={"#Add Pol"}
            />
            <Jumbotron>
                <Container>
                    <Card>
                        <Card.Body>
                            <div>
                                <Card.Title>Title : Poll Title</Card.Title>
                                <div>
                                    <input type="radio" />
                                    <label> option 1</label><br/>
                                    <label className="float-right">Votes: Vote 1</label>
                                    <input type="radio" />
                                    <label> option 1</label><br/>
                                    <label className="float-right">Votes: Vote 1</label>
                                    <input type="radio" />
                                    <label> option 1</label><br/>
                                    <label className="float-right">Votes: Vote 1</label>
                                    <input type="radio" />
                                    <label> option 1</label><br/>
                                    <label className="float-right">Votes: Vote 1</label>
                                </div>
                            </div>
                            <hr/>
                            <Button variant="warning" >Edit Poll</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default AdminDashboard;
