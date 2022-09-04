import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { FormControl, InputLabel,Select,MenuItem } from "@material-ui/core";

import { styles } from "../../../variable-css";




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

function Form({ postData , setPostData , handleSubmit}) {

    const [editing,setEditing] = useState(false)

    console.log("Editing",editing)

    const submitHelper = (e)=>{

        e.preventDefault();

        if(!editing){
            setEditing(true);
            return;
        }

        setEditing(false);
        handleSubmit();
    }


    const classes = useStyles()



    const handleThemeChange = (e) => {
        console.log("Theme Change",e.target.value)
        setPostData({... postData,themeDetails : e.target.value})
    }

    return (

        <Paper style={{ padding: 20 }}>
        <Typography align="center" className={classes.subheadingBold}>GENERAL DETAILS</Typography>
        <form onSubmit={submitHelper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormTextField fieldName={'name'} label={'Club Name'} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData}  editing={editing}/>
            <FormTextField fieldName={'email'} label={'Email'} type={'email'} autoCompleteHint={'email'} postData={postData} setPostData={setPostData} editing={editing} />
            <FormTextField fieldName={'phoneNumber'} label={'Phone Number'} type={'tel'} autoCompleteHint={''} postData={postData} setPostData={setPostData} editing={editing}/>
            <br/>
            <div className="grid-container">
                <TextField
                    variant={'standard'}
                    // fullWidth
                    label={'LinkedIn'}
                    type={'url'}
                    autoComplete={''}
                    value={postData.socialMedia.LinkedIn}
                    onChange={(e) => setPostData({...postData,socialMedia:{...postData.socialMedia, LinkedIn : e.target.value}})} style={{ marginBlock: 10 }}
                disabled={!editing}/>

                <TextField
                    variant={'standard'}
                    // fullWidth
                    label={'Instagram'}
                    type={'url'}
                    autoComplete={''}
                    value={postData.socialMedia.Instagram}
                    onChange={(e) => setPostData({...postData,socialMedia:{...postData.socialMedia, Instagram : e.target.value}})} style={{ marginBlock: 10 }}
                disabled={!editing}/>

                <TextField
                    variant={'standard'}
                    // fullWidth
                    label={'Facebook'}
                    type={'url'}
                    autoComplete={''}
                    value={postData.socialMedia.Facebook}
                    onChange={(e) => setPostData({...postData,socialMedia:{...postData.socialMedia, Facebook : e.target.value}})} style={{ marginBlock: 10 }}
                disabled={!editing}/>

                <TextField
                    variant={'standard'}
                    // fullWidth
                    label={'Discord'}
                    type={'url'}
                    autoComplete={''}
                    value={postData.socialMedia.Discord}
                    onChange={(e) => setPostData({...postData,socialMedia:{...postData.socialMedia, Discord : e.target.value}})} style={{ marginBlock: 10 }}
                disabled={!editing}/>
            </div>



            <FormControl fullWidth>
                <InputLabel variant={'standard'}>Theme</InputLabel>
                <Select
                    value={postData.themeDetails}
                    label="Theme"
                    onChange={handleThemeChange}
                    disabled={!editing}
                    variant={'standard'}>
                    <MenuItem value={'theme-orange'}>Orange</MenuItem>
                    <MenuItem value={'theme-purple'}>Purple</MenuItem>
                    <MenuItem value={'theme-blue'}>Blue</MenuItem>
                    <MenuItem value={'theme-green'}>Green</MenuItem>
                    <MenuItem value={'theme-yellow'}>Yellow</MenuItem>
                    <MenuItem value={'theme-pink'}>Pink</MenuItem>
                </Select>
            </FormControl>



            <FormTextField fieldName={'caption'} label={'Poster Caption'} type={'text'} autoCompleteHint={''} postData={postData} setPostData={setPostData} editing={editing}/>

            {editing?<Button type="submit" className={classes.buttonPrimary}>Confirm</Button>:<Button type="submit" className={classes.buttonPrimary}>Edit</Button>}
        </form >
        </Paper>
    );
}

export default Form;
