import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGeneralDetails } from "../../../redux/actions/contentVersions";
import { startCase, upperCase } from 'lodash'
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { styles } from "../../../variable-css";

const useStyles = makeStyles(styles)

const FormTextField = ({ fieldName, label, type, autoCompleteHint, postData, setPostData }) => {
  return (
    <TextField
      variant={'standard'}
      fullWidth
      label={label}
      type={type}
      autoComplete={autoCompleteHint}
      value={postData[fieldName]}
      onChange={(e) => setPostData({ ...postData, [fieldName]: e.target.value })} style={{ marginBlock: 10 }} />
  )
}

function Form({ userProfile }) {
  const [postData, setPostData] = useState(userProfile)
  const dispatch = useDispatch();
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateGeneralDetails(userProfile.userName, postData));
  }

  return (

    <Paper style={{ padding: 20 }}>
      <Typography align="center" className={classes.subheading}>{upperCase('general details')}</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormTextField fieldName={'name'} label={startCase('club name')} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData} />
        <FormTextField fieldName={'email'} label={startCase('email')} type={'email'} autoCompleteHint={'email'} postData={postData} setPostData={setPostData} />
        <FormTextField fieldName={'phoneNumber'} label={startCase('phone number')} type={'tel'} autoCompleteHint={''} postData={postData} setPostData={setPostData} />

        <TextField
          variant={'standard'}
          fullWidth
          label={startCase('social media')}
          type={'text'}
          autoComplete={''}
          value={postData.socialMedia}
          onChange={(e) => setPostData({ ...postData, socialMedia: e.target.value.split(',') })} style={{ marginBlock: 10 }} />

        <FormTextField fieldName={'caption'} label={startCase('poster caption')} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData} />

        <Button type="submit" className={classes.buttonPrimary}>
          {upperCase('confirm')}
        </Button>
      </form >
    </Paper>
  );
}

export default Form;
