import React from "react"
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

import { styles } from "../../../variable-css"

import { UploadImage } from "../UploadImage/UploadImage"

import { uploadImageServer } from "../../../api"

const useStyles = makeStyles(styles)

export const EditableProfileImage = ({ postData , setPostData , handleSubmit, imageAlt, type, imageSrc, userProfile }) => {
    const classes = useStyles()

    return (
        <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', padding: '2%' }}>
            <Typography className={classes.subheadingBold}>{type.toUpperCase()}</Typography>

            <img
                src={imageSrc}
                alt={imageAlt} height={'60%'} />

            <UploadImage aspectRatio={type === 'logo' ? 1 / 1 : 16 / 9} onChange={(base64EncodedImage) => {
                return new Promise((resolve, reject) => {
                    try {
                        uploadImageServer({
                            method: 'POST',
                            img: JSON.stringify({ data: base64EncodedImage }),
                            userName: userProfile.userName,
                            dataFor: type,
                            headers: { 'Content-Type': 'application/json' }
                        }).then((res)=>{
                            console.log("image upload response",res);

                            if(type=="poste"){
                                setPostData({...postData,src:res.data.imgURL});
                            }
                            else{
                                setPostData({...postData,logo:res.data.imgURL});
                            }
                            handleSubmit()
                            resolve()
                        }).catch((err)=>{
                            console.log(err)
                            reject()
                        })
                    } catch (err) {
                        console.error(err);
                        reject()
                    }
                })
            }} />
        </Paper>
    )
}
