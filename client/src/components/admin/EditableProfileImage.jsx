import React from "react"
import { Paper, Typography } from '@material-ui/core'
import ImgUploadModal from "./Modal/ImgUploadModal"
import { makeStyles } from "@material-ui/styles"
import { styles } from "../../variable-css"

const useStyles = makeStyles(styles)

export const EditableProfileImage = ({ imageAlt, type, imageSrc , userProfile}) => {
    const classes = useStyles()

    return (
        <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', padding: '2%' }}>
            <Typography className={classes.subheadingBold}>{type.toUpperCase()}</Typography>

            <img
                src={imageSrc}
                alt={imageAlt} height={'60%'} />

            <ImgUploadModal userProfile={userProfile} type={type} />
        </Paper>
    )
}