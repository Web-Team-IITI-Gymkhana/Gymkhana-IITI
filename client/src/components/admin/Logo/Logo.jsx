import React from "react";
import Grid from "@material-ui/core/Grid";
import ImgUploadModal from "../Modal/ImgUploadModal"

function Logo({userProfile}) {
  return (
    <Grid className="logo" item md={6}>
      <div className="logo">
        <div>
          <img
            id="logo"
            src={userProfile.logo}
            alt="logo"
            width="50%"
          ></img>
        </div>
        <br></br>
        <div>
        <ImgUploadModal userName={userProfile.userName} type="logo"/>
        </div>
      </div>
    </Grid>
  );
}

export default Logo;
