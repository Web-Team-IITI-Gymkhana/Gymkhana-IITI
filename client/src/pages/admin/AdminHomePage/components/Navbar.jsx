import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "../components/Navbar.css";
import ProfilePic from "../../../../components/photos/dp.svg";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Done/Loading';
import { publishVersion } from "../../../../redux/actions/contentVersions";
import { useDispatch} from "react-redux";


function AdminHomePageNavbar(props) {

    const [show, setShow] = useState(false);
    const [publish, setPublish] = useState(false);
    const [done, setDone] = useState(-1);
    const [loading, setLoading] = useState(-1);

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

    const dispatch = useDispatch()

    const getPublish = () =>{
        dispatch(publishVersion(props.userName))
        setDone(0);
        setLoading(0);
        setTimeout(() => {
            //publish new
            setLoading(1);
            setTimeout(() => {
                setDone(1);
            }, 1000)
        }, 1200);

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
                    color="primary">
                    Preview
                </Button>
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="third-btn"
                    color="primary"
                    onClick={getPublish}
                >
                    Publish
                </Button>
                    {done===0? (
                        <Loading Loading={loading}/>
                    ):null}
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
