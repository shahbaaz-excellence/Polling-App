import React, { useEffect, useState } from 'react';
import Header from './header';
import {
    Card,
    Spinner,
    Button,
    Jumbotron,
    Container
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PollListRequest } from "../Redux/action/actions";
import { DeletePollRequest } from "../Redux/action/actions"


const AdminDashboard = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(PollListRequest());
    }, [])

    const pollList = useSelector((state) =>
        state.PollListStatus.poll
    )
    // console.log(pollList, "poll list state");

    const pollStatus = useSelector((state) =>
        state.PollListStatus.isPollfetched
    )
    // console.log(pollStatus, "poll status");

    const deletePoll=(pollId)=>{
        // console.log(id , "dlete id")
        let poll_ID = {
            id:pollId
        }
        dispatch(DeletePollRequest(poll_ID))
        // setTimeout(dispatch(PollListRequest()),500)
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
    };


    return (
        <div>
            <Header
                buttonText={"Logout"}
                // link={"/admindashboard"}
                handleLogout = {handleLogout}
            />
            <Jumbotron>
                <Container>
                    <Link to="/addpoll">
                        <Button className="add_poll" variant="success" style={{ marginBottom: "10px" }} >
                            Add Poll
                    </Button>
                    </Link>
                    {pollStatus === false ? (
                        <center>
                            <Spinner className="spinner" animation="grow" variant="dark" />
                        </center>
                    ) : null}
                    {pollList.map((item) => (
                        <Card key={item._id}>
                            <Card.Body>
                                <div>
                                    <Card.Title>Title : {item.title}</Card.Title>
                                    {item.options.map((option, index) => (
                                        <div key={index}>
                                            <input type="radio" name={item._id}/>
                                            <label> {option.option}</label>
                                            <label className="float-right">Votes: {option.vote}</label>
                                        </div>
                                    ))}
                                </div>
                                <hr />
                                <Button variant="warning" >Edit Poll</Button>{' '}
                                <Button variant="danger"
                                onClick={()=>deletePoll(item._id)}>
                                Delete Poll</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </Jumbotron>
        </div>
    )
}

export default AdminDashboard;
