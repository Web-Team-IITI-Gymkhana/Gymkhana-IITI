import React from "react";
import { Box } from "@material-ui/core";



import ImgUploadModal from "../Modal/ImgUploadModal"

function Logo({ userProfile }) {
  return (
    <Box width={700}>
      <img
        src={userProfile.logo}
        alt="logo"
      />
      <ImgUploadModal userName={userProfile.userName} type="logo"
      />
    </Box>
  );
}

export default Logo;
