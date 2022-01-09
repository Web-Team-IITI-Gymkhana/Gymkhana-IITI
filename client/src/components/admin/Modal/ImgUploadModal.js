import React, { useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { uploadImageServer } from "../../../redux/actions/users"
import { useDispatch } from "react-redux";
import { styles } from "../../../variable-css";
import { upperCase } from 'lodash'

const useStyles = makeStyles(styles)

export default function ImgUploadModal({ userName, type }) {

    const inputRef = useRef()

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
            <form onSubmit={handleSubmitFile}>
                <input type="file" ref={inputRef} onChange={handleFileInputChange} value={fileInputState} style={{ display: 'none' }} />
                <Button onClick={() => { inputRef.current.click() }} type="submit" className={classes.buttonPrimary}>
                    {upperCase('edit')}
                </Button>
            </form>
        </div>
    );
}
