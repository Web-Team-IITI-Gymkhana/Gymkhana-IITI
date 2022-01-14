import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Modal } from '@material-ui/core';
import { useState } from "react";
import { uploadImageServer } from "../../../redux/actions/contentVersions"
import { useDispatch } from "react-redux";
import { styles } from "../../../variable-css";
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

const useStyles = makeStyles(styles)

export default function ImgUploadModal({ userName, type }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState(null)
    const [crop, setCrop] = useState({});

    const dispatch = useDispatch();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedFile(reader.result);
        };
        reader.onerror = () => {
            console.error('An error occurred!');
        };
        setFileInputState(e.target.value);
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();

        if (!selectedFile) return;
        const canvas = getCroppedImgCanvas(selectedFile, crop)
        canvas.toBlob((blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.onerror = () => {
                console.error('An error occurred!');
            };
        },
            "image/jpeg"
        )
    };

    const getCroppedImgCanvas = (imageSrc, crop) => {
        const image = new Image()
        image.src = imageSrc
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        // New lines to be added
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return canvas
    }

    const uploadImage = async (base64EncodedImage) => {
        try {
            dispatch(uploadImageServer({
                method: 'POST',
                img: JSON.stringify({ data: base64EncodedImage }),
                userName: userName,
                dataFor: type,
                headers: { 'Content-Type': 'application/json' }
            }))
            // using close modal as a cleanup function here
            handleModalClose()
        } catch (err) {
            console.error(err);
        }
    };

    const classes = useStyles();

    const handleModalClose = ()  => {
        setIsModalOpen(false)
        setFileInputState('')
        setSelectedFile(null)
        setCrop({})
    }

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className={classes.fileSelectModal}>
                    {selectedFile != null ? <ReactCrop src={selectedFile} crop={crop} onChange={newCrop => setCrop(newCrop)} /> : null}
                    <form onSubmit={handleSubmitFile} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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
