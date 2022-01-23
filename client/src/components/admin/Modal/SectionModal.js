import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

import "../Form/Form.css"

import { updateSection } from "../../../redux/actions/contentVersions";

export default function SectionModal({sectionID, sectionDetails, triggerElement }) {

    const [formSection, setFormSection] = useState(sectionDetails)

    const [checked, setChecked] = useState(sectionDetails.visible);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const dispatch = useDispatch();

    const handleEdit = () => {
        formSection.visible = checked
        dispatch(updateSection(sectionID, formSection));
        setOpen(false);
    }

    function getModalStyle() {
        const top = 50
        const left = 50
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            width: 450,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpen}>
                {triggerElement}
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form id="form">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="section-name"
                            label="Section Name"
                            type="text"
                            name="section-name"
                            autoComplete="Section Name"
                            className="field"
                            value={formSection.sectionName}
                            onChange={(e) => setFormSection({ ...formSection, sectionName: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            minRows={3}
                            id="section-header"
                            label="Section Header"
                            type="text"
                            name="section-header"
                            autoComplete="Section Header"
                            className="field"
                            value={formSection.sectionHeader}
                            onChange={(e) => setFormSection({ ...formSection, sectionHeader: e.target.value })}
                        />
                        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Visible"/> 
                        <br></br>
                        <Button type="button" onClick={handleEdit}>Confirm</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
