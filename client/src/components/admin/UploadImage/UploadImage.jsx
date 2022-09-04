import { Button, Modal, Box, CircularProgress } from "@material-ui/core";
import { useRef } from "react"
import React, { useState } from "react"
import { makeStyles } from '@mui/styles'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { styles } from "../../../variable-css"

const useStyles = makeStyles(styles)

export const UploadImage = ({ onChange, aspectRatio }) => {
    const classes = useStyles()

    const [isCropImageModalOpen, setIsCropImageModalOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [crop, setCrop] = useState({})
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const imageRef = useRef()


    const handleButtonClick = () => {
        inputRef.current.click()
    }

    const handleModalClose = () => {
        setIsCropImageModalOpen(false)
    }

    const handleCropModalCancelClick = () => {
        handleModalClose()
    }

    const handleCropModalConfirmClick = () => {
        handleModalClose()
        setLoading(true)
        if (!selectedFile) return;
        const canvas = getCroppedImgCanvas(selectedFile, crop)
        canvas.toBlob((blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                // now pass this base64 encoded cropped image to the onChange function, and handle the promise returned
                onChange(reader.result).then(() => {
                    setLoading(false)
                    // handle success logic
                }).then(() => {
                    setLoading(false)
                    // handle error logic
                })
            };
            reader.onerror = () => {
                setLoading(false)
                console.error('An error occurred!');
            };
        },
            "image/jpeg"
        )
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedFile(reader.result);
            setIsCropImageModalOpen(true)

            const image = new Image()
            image.src = reader.result
            setTimeout(() => {
                setCrop({
                    aspect: aspectRatio,
                    width: imageRef.current.imageRef.current.width,
                })
            }, 100)
        };
        reader.onerror = () => {
            console.error('An error occurred!');
        };
    }

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

    return (
        <>
            <input type={'file'} ref={inputRef} style={{ display: 'none' }} onChange={handleFileInputChange} />
            {loading ?
                <Button className={classes.buttonPrimary}>
                    <CircularProgress />
                </Button>
                : <Button className={classes.buttonPrimary} onClick={handleButtonClick} style={{color:'white'}}>Upload</Button>}
            <Modal
                open={isCropImageModalOpen}
                onClose={handleModalClose} className={classes.cropImageModal}>
                <Box bgcolor={'white'} padding={2} display={'flex'} flexDirection={'column'} gridGap={20} alignItems={'center'} borderRadius={4}
                maxHeight={500}>
                    <ReactCrop ref={imageRef} src={selectedFile} crop={crop} onChange={(newCrop) => {
                        setCrop(newCrop)
                    }} />
                    <Box display={'flex'} justifyContent={'space-between'} gridGap={20}>
                        <Button className={classes.buttonPrimary} onClick={handleCropModalConfirmClick}>Confirm</Button>
                        <Button className={classes.buttonPrimary} onClick={handleCropModalCancelClick}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
