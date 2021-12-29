import React,  {Component} from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "../components/Navbar.css";
import ProfilePic from "../../../../components/photos/dp.svg";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

function AdminHomePageNavbar(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        setShow(false);
        let sectionName = document.getElementById("myForm").elements[0].value;
        let sectionHeader = document.getElementById("myForm").elements[1].value;
        props.handlingAdd(sectionName,sectionHeader);
    }
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/admin/profile')
    }
    return (
        <div className="navbar">
            <span id="left">
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="first-btn"
                    color="primary"
                    onClick={handleShow}
                >
                    Add Section
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Name and Header of the Section</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form method="POST" id="myForm">
                                <Form.Control as="textarea" id="sectionName" rows={1} placeholder="Section Name"/>
                                <Form.Control as="textarea" id="sectionHeader" rows={1} placeholder="Section Header"/>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Add Section
                        </Button>
                    </Modal.Footer>
                </Modal>
            </span>

            <span id="right">
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="third-btn"
                    color="primary"
                >
                    Preview
                </Button>
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="third-btn"
                    color="primary"
                >
                    Publish
                </Button>
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="fourth-btn"
                    color="primary"
                    onClick={redirect}
                >
                    Profile Page
                </Button>
                <img
                    id="ProfilePic"
                    src={ProfilePic}
                    alt="ProfilePic"
                    height="45px"
                    width="40px"
                    radius="3px"
                ></img>
            </span>
        </div>
    );
}

export default AdminHomePageNavbar;
