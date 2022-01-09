import React from "react"
import { Paper, Typography } from '@material-ui/core'
import { upperCase } from 'lodash'
import ImgUploadModal from "./Modal/ImgUploadModal"
import { makeStyles } from "@material-ui/styles"
import { styles } from "../../variable-css"

const useStyles = makeStyles(styles)

export const EditableProfileImage = ({ imageAlt, type, imageSrc, userName }) => {
    const classes = useStyles()

    return (
        <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', padding: '2%' }}>
            <Typography className={classes.subheading}>{upperCase(type)}</Typography>

            <img
                src={imageSrc}
                alt={imageAlt} height={'60%'} />

            <ImgUploadModal userName={userName} type={type} />
        </Paper>
    )
}