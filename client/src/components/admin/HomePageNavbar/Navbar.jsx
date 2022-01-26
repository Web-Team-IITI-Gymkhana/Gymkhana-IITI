import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { makeStyles } from "@material-ui/core";

import Loading from "../PublishDone/Loading"
import { publishVersion } from "../../../redux/actions/contentVersions";

import {styles} from "../../../variable-css"
import { sectionsChildSchema } from "../../../schema";


const useStyles = makeStyles(styles)

function AdminHomePageNavbar(props) {
    const classes = useStyles()

    const [show, setShow] = useState(false);
    const [done, setDone] = useState(-1);
    const [loading, setLoading] = useState(-1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        setShow(false);
        let sectionName = document.getElementById("myForm").elements[0].value;
        let sectionHeader = document.getElementById("myForm").elements[1].value;
        props.handlingAdd(sectionName, sectionHeader);
    }
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/admin/profile')
    }
    const preview = () => {
        navigate('/admin/preview')
    }

    const dispatch = useDispatch()

    const getPublish = () => {
        dispatch(publishVersion())
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
                    className={classes.buttonPrimary}
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
                            <Form.Select id="sectionName">
                                {Object.keys(sectionsChildSchema).map(option=>
                                    <option key={option} value={option}>{option}</option>
                                )}
                            </Form.Select>
                            <Form.Control as="textarea" id="sectionHeader" rows={1} placeholder="Section Header" />
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
                    className={classes.buttonPrimary}
                    onClick={preview}>
                    Preview
                </Button>

                <Button
                   className={classes.buttonPrimary}
                    onClick={getPublish}>
                    Publish
                </Button>
                {done === 0 ? (
                    <Loading Loading={loading} />
                ) : null}
                <Button
                    className={classes.buttonOpposite}
                    onClick={redirect}
                >
                    Profile Page
                </Button>
                <img
                    id="ProfilePic"
                    src={props.profilePic}
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
