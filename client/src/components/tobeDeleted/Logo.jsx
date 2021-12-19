import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
function Logo() {
  return (
    <Grid className="logo" item xs={6}>
      <div className="logo">
        <div>
          <img
            id="logo"
            // src="https://image.shutterstock.com/image-vector/people-family-together-human-unity-600w-1296155950.jpg"
            src="https://cdn.dribbble.com/users/2447187/screenshots/5962690/sand-dunes-final-2_4x.jpg"
            alt="logo"
            width="70%"
          ></img>
        </div>
        <br></br>
        <div>
          <Button id="btn" variant="contained" color="primary">
            Edit Logo
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default Logo;
