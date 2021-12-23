import React from "react";
import Grid from "@material-ui/core/Grid";
import LogoModal from "./LogoModal"

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
          <LogoModal userName={userProfile.userName}/>
        </div>
      </div>
    </Grid>
  );
}

export default Logo;
