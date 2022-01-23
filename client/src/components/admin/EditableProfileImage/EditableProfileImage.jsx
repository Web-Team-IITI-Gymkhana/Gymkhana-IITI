import React from "react"
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

import { styles } from "../../../variable-css"

import { UploadImage } from "../UploadImage/UploadImage"
import { useDispatch } from "react-redux"
import { uploadImageServer } from "../../../redux/actions/contentVersions"

const useStyles = makeStyles(styles)

export const EditableProfileImage = ({ imageAlt, type, imageSrc, userProfile }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', padding: '2%' }}>
            <Typography className={classes.subheadingBold}>{type.toUpperCase()}</Typography>

            <img
                src={imageSrc}
                alt={imageAlt} height={'60%'} />

            <UploadImage aspectRatio={type === 'logo' ? 1 / 1 : 16 / 9} onChange={(base64EncodedImage) => {
                return new Promise((resolve, reject) => {
                    try {
                        dispatch(uploadImageServer({
                            method: 'POST',
                            img: JSON.stringify({ data: base64EncodedImage }),
                            userName: userProfile.userName,
                            dataFor: type,
                            headers: { 'Content-Type': 'application/json' }
                        }))
                        resolve()
                    } catch (err) {
                        console.error(err);
                        reject()
                    }
                })
            }} />
        </Paper>
    )
}
