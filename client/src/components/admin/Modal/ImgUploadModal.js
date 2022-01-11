import React, { useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Modal } from '@material-ui/core';
import { useState } from "react";
import {uploadImageServer} from "../../../redux/actions/contentVersions"
import { useDispatch } from "react-redux";
import { styles } from "../../../variable-css";

const useStyles = makeStyles(styles)

export default function ImgUploadModal({ userName, type }) {

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                img: JSON.stringify({ data: base64EncodedImage }),
                userName: userName,
                dataFor: type,
                headers: { 'Content-Type': 'application/json' }
            }))
            setFileInputState('');
        } catch (err) {
            console.error(err);
        }
    };

    const classes = useStyles();

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className={classes.fileSelectModal}>
                    <form onSubmit={handleSubmitFile}>
                        <input type="file" onChange={handleFileInputChange} value={fileInputState} />
                        <Button type="submit" className={classes.buttonPrimary}>
                            CONFIRM
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Button onClick={() => setIsModalOpen(true)} type="submit" className={classes.buttonPrimary}>
                EDIT
            </Button>
        </div>
    );
}
