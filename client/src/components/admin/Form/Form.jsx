import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Paper, Typography } from "@material-ui/core";

import { styles } from "../../../variable-css";

import { updateGeneralDetails } from "../../../redux/actions/contentVersions";


const useStyles = makeStyles(styles)

const FormTextField = ({ fieldName, label, type, autoCompleteHint, postData, setPostData , editing }) => {
  return (
    <TextField
      variant={'standard'}
      fullWidth
      label={label}
      type={type}
      autoComplete={autoCompleteHint}
      value={postData[fieldName]}
      onChange={(e) => setPostData({ ...postData, [fieldName]: e.target.value })} style={{ marginBlock: 10 }}
      disabled={!editing}/>
  )
}

function Form({ userProfile }) {
    const [postData, setPostData] = useState(userProfile)
    const [editing,setEditing] = useState(false)

    console.log("Editing",editing)

    const dispatch = useDispatch();
    const classes = useStyles()

    const handleSubmit = (e) => {
        setEditing(!editing)
        e.preventDefault();
        dispatch(updateGeneralDetails(postData));
    }

    return (

        <Paper style={{ padding: 20 }}>
        <Typography align="center" className={classes.subheadingBold}>GENERAL DETAILS</Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormTextField fieldName={'name'} label={'Club Name'} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData}  editing={editing}/>
            <FormTextField fieldName={'email'} label={'Email'} type={'email'} autoCompleteHint={'email'} postData={postData} setPostData={setPostData} editing={editing} />
            <FormTextField fieldName={'phoneNumber'} label={'Phone Number'} type={'tel'} autoCompleteHint={''} postData={postData} setPostData={setPostData} editing={editing}/>

            <TextField
            variant={'standard'}
            fullWidth
            label={'Social Media'}
            type={'text'}
            autoComplete={''}
            value={postData.socialMedia}
            onChange={(e) => setPostData({ ...postData, socialMedia: e.target.value.split(',') })} style={{ marginBlock: 10 }}
            disabled={!editing}/>

            <FormTextField fieldName={'caption'} label={'Poster Caption'} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData} editing={editing}/>

            {editing?<Button type="submit" className={classes.buttonPrimary}>Confirm</Button>:<Button type="submit" className={classes.buttonPrimary}>Edit</Button>}
        </form >
        </Paper>
    );
}

export default Form;
