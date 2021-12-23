import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from "react";
import {uploadImageServer} from "../../../redux/actions/users"
import { useDispatch } from "react-redux";

export default function ImgUploadModal({userName,type}) {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const dispatch = useDispatch();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('Error in image upload!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            dispatch(uploadImageServer({
                method: 'POST',
                img : JSON.stringify({ data: base64EncodedImage }),
                userName : userName,
                dataFor : type,
                headers: { 'Content-Type': 'application/json' }}))




            setFileInputState('');
            setOpen('false')
        } catch (err) {
            console.error(err);
        }
    };


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
            <Button variant="contained" id="edit-poster" color="primary" onClick={handleOpen}>
                Edit Poster
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form onSubmit={handleSubmitFile}>
                        <input  id="fileInput" type="file" name="image" onChange={handleFileInputChange} value={fileInputState} />
                        <Button type="submit">Upload</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
