import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch} from "react-redux";

function Form({userProfile,updateGeneralDetails}) {
    const [postData,setPostData] = useState(userProfile)
    const dispatch = useDispatch();

    const handleSubmit  = (e)=>{
       e.preventDefault();

        dispatch(updateGeneralDetails("Cynaptics",postData))

        window.location.reload()
    }

  return (
    <Grid item md={6} id="info">
      <div>
        <form id="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="club-name"
            label="Club Name"
            type="text"
            name="club-name"
            autoComplete="Club Name"
            className="field"
            value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            label="Email"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="field"
            value={postData.email}
            onChange={(e) => setPostData({ ...postData, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            name="phone"
            label="Phone No."
            type="tel"
            id="phone"
            autoComplete="9999999999"
            className="field"
            value={postData.phoneNumber}
            onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })}
          />
          <div>
            <TextField
              variant="outlined"
              margin="normal"
            //   required
              fullWidth
              name="handle1"
              label="Social media 1"
              type="text"
              id="handle1"
              autoComplete="#"
              className=" field handle1"
              value={postData.socialMedia[0]}
              onChange={(e) => setPostData({ ...postData, socialMedia :[e.target.value,postData.socialMedia[1]] })}
            />
            <TextField
              variant="outlined"
              margin="normal"
            //   required
              fullWidth
              name="handle2"
              label="Social media 2"
              type="text"
              id="handle2"
              autoComplete="#"
              className=" field handle2"
              value={postData.socialMedia[1]}
              onChange={(e) => setPostData({ ...postData, socialMedia :[postData.socialMedia[0],e.target.value] })}
            />
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="poster-caption"
            label="Poster Caption"
            type="text"
            name="poster-caption"
            autoComplete="Poster Caption"
            className="field"
            value={postData.caption}
            onChange={(e) => setPostData({ ...postData, caption:e.target.value })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="apply"
          >
            Apply Changes
          </Button>
        </form>
      </div>
    </Grid>
  );
}

export default Form;
