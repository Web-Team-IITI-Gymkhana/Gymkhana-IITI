import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { updateGeneralDetails } from "../../../redux/actions/contentVersions";

function Form({userProfile}) {
    const [postData,setPostData] = useState(userProfile)
    const dispatch = useDispatch();

    const handleSubmit  = (e)=>{
       e.preventDefault();

       dispatch(updateGeneralDetails(userProfile.userName,postData));
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
              label="Social media"
              type="text"
              id="handle"
              autoComplete="#"
              className=" field handle"
              value={postData.socialMedia}
              onChange={(e) => setPostData({ ...postData, socialMedia : e.target.value.split(',') })}
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
